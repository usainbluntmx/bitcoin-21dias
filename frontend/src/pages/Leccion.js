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
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <p className="text-white">Lección no encontrada</p>
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
        <div className="min-h-screen bg-gray-950 px-4 py-8">
            <div className="max-w-2xl mx-auto">

                <button
                    onClick={() => navigate("/lecciones")}
                    className="text-gray-400 hover:text-white text-sm mb-6 flex items-center gap-2 transition-colors"
                >
                    ← Volver a lecciones
                </button>

                <div className="mb-2 flex items-center gap-2">
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
                        Semana {leccion.semana} · Lección {leccion.id}
                    </span>
                    {completada && (
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            Completada ✓
                        </span>
                    )}
                </div>

                <h1 className="text-3xl font-black text-white mb-1">{leccion.titulo}</h1>
                <p className="text-gray-400 mb-6">{leccion.concepto} · {leccion.duracion}</p>

                <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
                    {leccion.contenido.split("\n\n").map((parrafo, i) => (
                        <p key={i} className="text-gray-200 leading-relaxed mb-4 last:mb-0">
                            {parrafo}
                        </p>
                    ))}
                </div>

                <div className="bg-orange-950 border border-orange-800 rounded-2xl p-5 mb-6">
                    <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                        🌮 Analogía mexicana
                    </p>
                    <p className="text-orange-100 italic">{leccion.analogia}</p>
                </div>

                <div className="bg-gray-800 border border-orange-500 rounded-2xl p-5 mb-6">
                    <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                        💡 Concepto clave
                    </p>
                    <p className="text-white font-bold">{leccion.conceptoClave}</p>
                </div>

                {leccion.id === 1 && <CalculadoraInflacion />}
                {leccion.id === 15 && <CalculadoraRemesas />}
                {leccion.id === 17 && <CalculadoraDCA />}
                <Quiz key={leccion.id} leccionId={leccion.id} quiz={leccion.quiz} onAprobado={handleAprobado} />

                {mostrarSiguiente && (
                    <div className="mt-8 flex flex-col gap-3">
                        {siguiente ? (
                            <button
                                onClick={() => navigate(`/leccion/${siguiente.id}`)}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl text-lg transition-colors"
                            >
                                Siguiente: {siguiente.titulo} →
                            </button>
                        ) : (
                            <div className="bg-orange-500 rounded-2xl p-6 text-center">
                                <p className="text-4xl mb-2">🎉</p>
                                <p className="text-white font-black text-xl">¡Completaste el curso!</p>
                                <p className="text-orange-100 mt-1">Eres parte del 1% que entiende Bitcoin de verdad.</p>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}