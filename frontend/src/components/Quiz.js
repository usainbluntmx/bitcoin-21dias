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

    return (
        <div className="bg-gray-900 border border-gray-700 p-6 mt-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

            <div className="flex items-center gap-2 mb-4">
                <p className="text-orange-500 text-xs font-black font-mono tracking-widest">🧠 QUIZ</p>
                {yaAprobado && (
                    <span className="ml-auto text-green-400 text-xs font-mono font-bold">✓ APROBADO</span>
                )}
            </div>

            <p className="text-white font-bold text-sm mb-4">{quiz.pregunta}</p>

            <div className="flex flex-col gap-2 mb-4">
                {quiz.opciones.map((opcion, i) => {
                    let estilo = "border-gray-700 bg-black text-gray-200 hover:border-orange-500 cursor-pointer";

                    if (respondido || yaAprobado) {
                        if (i === quiz.respuestaCorrecta) {
                            estilo = "border-green-500 bg-green-950 text-green-200";
                        } else if (i === seleccion && !correcto) {
                            estilo = "border-red-500 bg-red-950 text-red-200";
                        } else {
                            estilo = "border-gray-800 bg-black text-gray-600 cursor-default";
                        }
                    } else if (seleccion === i) {
                        estilo = "border-orange-500 bg-orange-950 text-orange-200 cursor-pointer";
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => !respondido && !yaAprobado && setSeleccion(i)}
                            className={`text-left px-4 py-3 border-2 transition-all text-sm font-mono ${estilo}`}
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
                    className="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-gray-800 disabled:text-gray-600 text-black font-black py-3 text-xs tracking-widest uppercase font-mono transition-colors"
                >
                    RESPONDER
                </button>
            )}

            {respondido && !correcto && (
                <div className="mt-4 p-4 border border-red-700 bg-red-950 text-sm">
                    <p className="text-red-300 font-black font-mono mb-1">✗ INCORRECTO — 5 PTS</p>
                    <p className="text-red-200 text-xs">{quiz.explicacion}</p>
                    <button
                        onClick={() => { setSeleccion(null); setRespondido(false); }}
                        className="mt-3 w-full border border-red-700 hover:border-red-400 text-red-400 font-black py-2 text-xs tracking-widest uppercase font-mono transition-colors"
                    >
                        INTENTAR DE NUEVO
                    </button>
                </div>
            )}

            {(respondido && correcto) || yaAprobado ? (
                <div className="mt-4 p-4 border border-green-700 bg-green-950 text-sm">
                    <p className="text-green-300 font-black font-mono mb-1">✓ CORRECTO +15 PTS</p>
                    <p className="text-green-200 text-xs">{quiz.explicacion}</p>
                </div>
            ) : null}
        </div>
    );
}