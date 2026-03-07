import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { ProgressProvider, useProgress } from "./context/ProgressContext";
import Navbar from "./components/Navbar";
import Onboarding from "./pages/Onboarding";
import Lecciones from "./pages/Lecciones";
import Leccion from "./pages/Leccion";
import Progreso from "./pages/Progreso";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Chatbot from "./components/Chatbot";

function AppRoutes() {
  const { progreso, cargandoNube } = useProgress();
  const [session, setSession] = useState(null);
  const [cargandoAuth, setCargandoAuth] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setCargandoAuth(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (cargandoAuth || cargandoNube) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-orange-500 text-4xl font-black font-mono mb-3">₿</p>
          <p className="text-gray-600 text-xs font-mono tracking-widest">CARGANDO...</p>
        </div>
      </div>
    );
  }

  const nivelDefinido = progreso.nivel !== null;

  return (
    <>
      {session && nivelDefinido && <Navbar session={session} />}
      <Routes>
        <Route
          path="/login"
          element={!session ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={
            !session
              ? <Navigate to="/login" />
              : nivelDefinido
                ? <Navigate to="/lecciones" />
                : <Onboarding />
          }
        />
        <Route
          path="/lecciones"
          element={
            !session
              ? <Navigate to="/login" />
              : nivelDefinido
                ? <Lecciones />
                : <Navigate to="/" />
          }
        />
        <Route
          path="/leccion/:id"
          element={
            !session
              ? <Navigate to="/login" />
              : nivelDefinido
                ? <Leccion />
                : <Navigate to="/" />
          }
        />
        <Route
          path="/progreso"
          element={
            !session
              ? <Navigate to="/login" />
              : nivelDefinido
                ? <Progreso />
                : <Navigate to="/" />
          }
        />
        <Route
          path="/perfil"
          element={
            !session
              ? <Navigate to="/login" />
              : <Perfil />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {session && nivelDefinido && <Chatbot />}
    </>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProgressProvider>
  );
}