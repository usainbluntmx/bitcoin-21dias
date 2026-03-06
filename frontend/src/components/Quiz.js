import { useState } from "react";
import { useProgress } from "../context/ProgressContext";

export default function Quiz({ leccionId, quiz, onAprobado }) {
    const { registrarQuiz, progreso } = useProgress();
    const [seleccion, setSeleccion] = useState(null);
    const [respondido, setRespondido] = useState(false);
    const yaAprobado = progreso.quizzesCorrectos.includes(leccionId);

    const handleResponder = () => {
        if (seleccion === null) return;
        const correcto = seleccion === quiz.respuestaCorrecta;
        registrarQuiz(leccionId, correcto);
        setRespondido(true);
        if (correcto) onAprobado();
    };

    const correcto = seleccion === quiz.respuestaCorrecta;

    // Si ya fue aprobado en sesión anterior, notificar al padre
    // para que muestre el botón de siguiente
    const yaCompletada = progreso.leccionesCompletadas.includes(leccionId);

    return (
        <div className="bg-gray-800 rounded-2xl p-6 mt-6 border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-orange-500 text-xl">🧠</span>
                <h3 className="text-white font-bold text-lg">Quiz</h3>
                {yaAprobado && (
                    <span className="ml-auto text-green-400 text-sm font-medium">✓ Aprobado</span>
                )}
            </div>

            <p className="text-gray-200 mb-4 font-medium">{quiz.pregunta}</p>

            <div className="flex flex-col gap-3 mb-4">
                {quiz.opciones.map((opcion, i) => {
                    let estilo = "bg-gray-700 border-gray-600 text-gray-200 hover:border-orange-400 cursor-pointer";

                    if (respondido || yaAprobado) {
                        if (i === quiz.respuestaCorrecta) {
                            estilo = "bg-green-900 border-green-500 text-green-200";
                        } else if (i === seleccion && !correcto) {
                            estilo = "bg-red-900 border-red-500 text-red-200";
                        } else {
                            estilo = "bg-gray-700 border-gray-600 text-gray-400 cursor-default";
                        }
                    } else if (seleccion === i) {
                        estilo = "bg-orange-900 border-orange-500 text-orange-200 cursor-pointer";
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => !respondido && !yaAprobado && setSeleccion(i)}
                            className={`text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${estilo}`}
                        >
                            {opcion}
                        </button>
                    );
                })}
            </div>

            {!respondido && !yaAprobado && (
                <button
                    onClick={handleResponder}
                    disabled={seleccion === null}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors"
                >
                    Responder
                </button>
            )}

            {respondido && !correcto && (
                <div className="mt-4 p-4 rounded-xl text-sm bg-red-900 text-red-200">
                    <p className="font-bold mb-1">❌ No exactamente...</p>
                    <p>{quiz.explicacion}</p>
                    <button
                        onClick={() => { setSeleccion(null); setRespondido(false); }}
                        className="mt-3 w-full bg-red-800 hover:bg-red-700 text-white font-bold py-2 rounded-xl transition-colors"
                    >
                        Intentar de nuevo
                    </button>
                </div>
            )}

            {(respondido && correcto) || yaAprobado ? (
                <div className="mt-4 p-4 rounded-xl text-sm bg-green-900 text-green-200">
                    <p className="font-bold mb-1">✅ ¡Correcto! +15 pts</p>
                    <p>{quiz.explicacion}</p>
                </div>
            ) : null}
        </div>
    );
}