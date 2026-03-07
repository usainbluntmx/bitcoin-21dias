import { useParams, useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { lecciones } from "../data/lecciones";
import Quiz from "../components/Quiz";
import CalculadoraInflacion from "../components/CalculadoraInflacion";
import CalculadoraRemesas from "../components/CalculadoraRemesas";
import CalculadoraDCA from "../components/CalculadoraDCA";

export default function Leccion() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { progreso, completarLeccion } = useProgress();
    const leccion = lecciones.find(l => l.id === parseInt(id));

    if (!leccion) return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <p className="text-white font-mono">LECCIÓN NO ENCONTRADA</p>
        </div>
    );

    const completada = progreso.leccionesCompletadas.includes(leccion.id);
    const quizAprobado = progreso.quizzesCorrectos.includes(leccion.id);
    const mostrarSiguiente = completada || quizAprobado;
    const siguiente = lecciones.find(l => l.id === leccion.id + 1);

    const handleAprobado = () => {
        completarLeccion(leccion.id);
    };

    return (
        <div className="min-h-screen bg-black px-4 py-8">
            <div className="max-w-2xl mx-auto">

                {/* Navegación */}
                <button
                    onClick={() => navigate("/lecciones")}
                    className="text-gray-400 hover:text-orange-500 text-sm mb-6 flex items-center gap-2 transition-colors font-mono tracking-wider"
                >
                    ← VOLVER
                </button>

                {/* Meta info */}
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-orange-500 text-xs font-black font-mono tracking-widest border border-orange-500 px-2 py-0.5">
                        SEMANA {leccion.semana}
                    </span>
                    <span className="text-gray-500 text-xs font-mono">
                        LECCIÓN {leccion.id} · {leccion.duracion}
                    </span>
                    {completada && (
                        <span className="bg-orange-500 text-black text-xs font-black px-2 py-0.5 font-mono ml-auto">
                            ✓ COMPLETADA
                        </span>
                    )}
                </div>

                {/* Título */}
                <h1
                    className="text-3xl font-black text-white mb-1 font-mono leading-tight"
                    style={{ textTransform: "uppercase" }}
                >
                    {leccion.titulo}
                </h1>
                <p className="text-gray-300 text-sm mb-6">{leccion.concepto}</p>

                {/* Contenido */}
                <div className="bg-gray-900 border border-gray-700 p-6 mb-4 relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />
                    {leccion.contenido.split("\n\n").map((parrafo, i) => (
                        <p key={i} className="text-gray-200 leading-relaxed mb-4 last:mb-0 text-sm">
                            {parrafo}
                        </p>
                    ))}
                </div>

                {/* Analogía mexicana */}
                <div className="bg-black border-l-4 border-orange-500 p-5 mb-4">
                    <p className="text-orange-500 text-xs font-black font-mono tracking-widest mb-2">
                        🌮 ANALOGÍA MEXICANA
                    </p>
                    <p className="text-gray-200 italic text-sm leading-relaxed">{leccion.analogia}</p>
                </div>

                {/* Concepto clave */}
                <div className="bg-gray-900 border border-orange-500 p-5 mb-4 relative">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-500" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-500" />
                    <p className="text-orange-500 text-xs font-black font-mono tracking-widest mb-2">
                        💡 CONCEPTO CLAVE
                    </p>
                    <p className="text-white font-black text-sm">{leccion.conceptoClave}</p>
                </div>

                {/* Calculadoras */}
                {leccion.id === 1 && <CalculadoraInflacion />}
                {leccion.id === 15 && <CalculadoraRemesas />}
                {leccion.id === 17 && <CalculadoraDCA />}

                {/* Quiz */}
                <Quiz key={leccion.id} leccionId={leccion.id} quiz={leccion.quiz} onAprobado={handleAprobado} />

                {/* Botón siguiente */}
                {mostrarSiguiente && (
                    <div className="mt-8">
                        {siguiente ? (
                            <button
                                onClick={() => navigate(`/leccion/${siguiente.id}`)}
                                className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black py-4 text-sm tracking-widest uppercase font-mono transition-colors"
                            >
                                SIGUIENTE: {siguiente.titulo} →
                            </button>
                        ) : (
                            <div className="bg-orange-500 p-6 text-center relative">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black border-opacity-30" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black border-opacity-30" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black border-opacity-30" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black border-opacity-30" />
                                <p className="text-4xl mb-2">🎉</p>
                                <p className="text-black font-black text-xl font-mono">¡CURSO COMPLETADO!</p>
                                <p className="text-black text-sm mt-1 opacity-80">
                                    Eres parte del 1% que entiende Bitcoin de verdad.
                                </p>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}