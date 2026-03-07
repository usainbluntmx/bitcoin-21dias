import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabase";

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

const PROGRESO_INICIAL = {
    leccionesCompletadas: [],
    quizzesCorrectos: [],
    quizzesIncorrectos: [],
    nivel: null,
    puntos: 0,
    semanasBadges: []
};

const cargarLocal = () => {
    try {
        const guardado = localStorage.getItem("btc21_progreso");
        return guardado ? JSON.parse(guardado) : PROGRESO_INICIAL;
    } catch {
        return PROGRESO_INICIAL;
    }
};

export const ProgressProvider = ({ children }) => {
    const [progreso, setProgreso] = useState(cargarLocal);
    const [userId, setUserId] = useState(null);
    const [cargandoNube, setCargandoNube] = useState(true);

    // Detectar sesión activa y cargar progreso desde Supabase
    useEffect(() => {
        const inicializar = async () => {
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                setUserId(user.id);
                const { data } = await supabase
                    .from("progreso")
                    .select("*")
                    .eq("user_id", user.id)
                    .single();

                if (data) {
                    const progresoNube = {
                        leccionesCompletadas: data.lecciones_completadas || [],
                        quizzesCorrectos: data.quizzes_correctos || [],
                        quizzesIncorrectos: data.quizzes_incorrectos || [],
                        nivel: data.nivel || null,
                        puntos: data.puntos || 0,
                        semanasBadges: data.semanas_badges || []
                    };
                    setProgreso(progresoNube);
                    localStorage.setItem("btc21_progreso", JSON.stringify(progresoNube));
                }
            }
            setCargandoNube(false);
        };

        inicializar();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (session?.user) {
                    setUserId(session.user.id);
                } else {
                    setUserId(null);
                }
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    // Guardar en localStorage y Supabase cuando cambia el progreso
    useEffect(() => {
        localStorage.setItem("btc21_progreso", JSON.stringify(progreso));

        if (userId && !cargandoNube) {
            supabase.from("progreso").upsert({
                user_id: userId,
                lecciones_completadas: progreso.leccionesCompletadas,
                quizzes_correctos: progreso.quizzesCorrectos,
                quizzes_incorrectos: progreso.quizzesIncorrectos,
                nivel: progreso.nivel,
                puntos: progreso.puntos,
                semanas_badges: progreso.semanasBadges,
                updated_at: new Date().toISOString()
            });
        }
    }, [progreso, userId, cargandoNube]);

    const setNivel = (nivel) => {
        setProgreso(prev => ({ ...prev, nivel }));
    };

    const completarLeccion = (id) => {
        setProgreso(prev => {
            if (prev.leccionesCompletadas.includes(id)) return prev;
            const nuevasCompletadas = [...prev.leccionesCompletadas, id];
            const nuevosPuntos = prev.puntos + 10;

            const semana1 = [1, 2, 3, 4, 5, 6, 7];
            const semana2 = [8, 9, 10, 11, 12, 13, 14];
            const semana3 = [15, 16, 17, 18, 19, 20, 21];
            const badges = [...prev.semanasBadges];

            if (semana1.every(i => nuevasCompletadas.includes(i)) && !badges.includes(1)) badges.push(1);
            if (semana2.every(i => nuevasCompletadas.includes(i)) && !badges.includes(2)) badges.push(2);
            if (semana3.every(i => nuevasCompletadas.includes(i)) && !badges.includes(3)) badges.push(3);

            return {
                ...prev,
                leccionesCompletadas: nuevasCompletadas,
                puntos: nuevosPuntos,
                semanasBadges: badges
            };
        });
    };

    const registrarQuiz = (id, correcto) => {
        setProgreso(prev => {
            if (prev.quizzesCorrectos.includes(id)) return prev;
            if (correcto) {
                return {
                    ...prev,
                    quizzesCorrectos: [...prev.quizzesCorrectos, id],
                    puntos: prev.puntos + 15
                };
            } else {
                return {
                    ...prev,
                    quizzesIncorrectos: [...(prev.quizzesIncorrectos || []), id],
                    puntos: Math.max(0, prev.puntos - 5)
                };
            }
        });
    };

    const resetProgreso = async () => {
        localStorage.removeItem("btc21_progreso");
        if (userId) {
            await supabase
                .from("progreso")
                .delete()
                .eq("user_id", userId);
        }
        setProgreso(PROGRESO_INICIAL);
    };

    return (
        <ProgressContext.Provider value={{
            progreso,
            cargandoNube,
            setNivel,
            completarLeccion,
            registrarQuiz,
            resetProgreso
        }}>
            {children}
        </ProgressContext.Provider>
    );
};