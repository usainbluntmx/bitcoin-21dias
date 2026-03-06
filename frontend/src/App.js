import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProgressProvider, useProgress } from "./context/ProgressContext";
import Navbar from "./components/Navbar";
import Onboarding from "./pages/Onboarding";
import Lecciones from "./pages/Lecciones";
import Leccion from "./pages/Leccion";
import Progreso from "./pages/Progreso";
import Chatbot from "./components/Chatbot";

function AppRoutes() {
  const { progreso } = useProgress();
  const nivelDefinido = progreso.nivel !== null;

  return (
    <>
      {nivelDefinido && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={nivelDefinido ? <Navigate to="/lecciones" /> : <Onboarding />}
        />
        <Route
          path="/lecciones"
          element={nivelDefinido ? <Lecciones /> : <Navigate to="/" />}
        />
        <Route
          path="/leccion/:id"
          element={nivelDefinido ? <Leccion /> : <Navigate to="/" />}
        />
        <Route
          path="/progreso"
          element={nivelDefinido ? <Progreso /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {nivelDefinido && <Chatbot />}
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