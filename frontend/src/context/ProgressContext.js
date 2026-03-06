import { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
    const [progreso, setProgreso] = useState(() => {
        try {
            const guardado = localStorage.getItem("btc21_progreso");
            return guardado ? JSON.parse(guardado) : {
                leccionesCompletadas: [],
                quizzesCorrectos: [],
                quizzesIncorrectos: [],
                nivel: null,
                puntos: 0,
                semanasBadges: []
            };
        } catch {
            return {
                leccionesCompletadas: [],
                quizzesCorrectos: [],
                quizzesIncorrectos: [],
                nivel: null,
                puntos: 0,
                semanasBadges: []
            };
        }
    });

    useEffect(() => {
        localStorage.setItem("btc21_progreso", JSON.stringify(progreso));
    }, [progreso]);

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
                const yaIncorrecto = prev.quizzesIncorrectos || [];
                return {
                    ...prev,
                    quizzesIncorrectos: [...yaIncorrecto, id],
                    puntos: Math.max(0, prev.puntos - 5)
                };
            }
        });
    };

    const resetProgreso = () => {
        localStorage.removeItem("btc21_progreso");
        setProgreso({
            leccionesCompletadas: [],
            quizzesCorrectos: [],
            quizzesIncorrectos: [],
            nivel: null,
            puntos: 0,
            semanasBadges: []
        });
    };

    return (
        <ProgressContext.Provider value={{
            progreso,
            setNivel,
            completarLeccion,
            registrarQuiz,
            resetProgreso
        }}>
            {children}
        </ProgressContext.Provider>
    );
};