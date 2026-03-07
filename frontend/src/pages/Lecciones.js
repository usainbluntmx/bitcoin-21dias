import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { lecciones, semanas } from "../data/lecciones";
import ProgressBar from "../components/ProgressBar";

export default function Lecciones() {
    const { progreso } = useProgress();
    const navigate = useNavigate();
    const completadas = progreso.leccionesCompletadas.length;

    return (
        <div className="min-h-screen bg-black px-4 py-8">
            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-orange-500 text-xs font-black font-mono tracking-widest mb-1">
                        CURSO COMPLETO
                    </p>
                    <h1 className="text-4xl font-black text-white mb-1 font-mono">
                        TU CAMINO <span className="text-orange-500">NARANJA</span>
                    </h1>
                    <p className="text-gray-300 mb-4">21 lecciones · ~5 min cada una</p>
                    <ProgressBar completadas={completadas} total={21} />
                </div>

                {semanas.map((semana) => (
                    <div key={semana.numero} className="mb-10">

                        {/* Header de semana */}
                        <div className={`bg-gradient-to-r ${semana.color} p-4 mb-4 flex items-center justify-between relative`}>
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white border-opacity-40" />
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white border-opacity-40" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white border-opacity-40" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white border-opacity-40" />
                            <div>
                                <p className="text-white text-xs font-black font-mono tracking-widest opacity-90">
                                    SEMANA {semana.numero}
                                </p>
                                <h2 className="text-white text-xl font-black font-mono">{semana.titulo.toUpperCase()}</h2>
                                <p className="text-white opacity-90 text-sm">{semana.descripcion}</p>
                            </div>
                            {progreso.semanasBadges.includes(semana.numero) && (
                                <div className="text-4xl">🏅</div>
                            )}
                        </div>

                        {/* Lista de lecciones */}
                        <div className="flex flex-col gap-2">
                            {semana.lecciones.map((idLeccion) => {
                                const leccion = lecciones.find(l => l.id === idLeccion);
                                const completada = progreso.leccionesCompletadas.includes(idLeccion);
                                const anterior = idLeccion === 1 || progreso.leccionesCompletadas.includes(idLeccion - 1);
                                const bloqueada = !anterior && !completada;

                                return (
                                    <button
                                        key={idLeccion}
                                        onClick={() => !bloqueada && navigate(`/leccion/${idLeccion}`)}
                                        className={`flex items-center gap-4 p-4 text-left transition-all border-2 relative ${completada
                                                ? "bg-gray-900 border-orange-500"
                                                : bloqueada
                                                    ? "bg-black border-gray-800 opacity-40 cursor-not-allowed"
                                                    : "bg-gray-900 border-gray-700 hover:border-orange-500 cursor-pointer"
                                            }`}
                                    >
                                        {/* Número o check */}
                                        <div className={`w-10 h-10 flex items-center justify-center text-sm font-black flex-shrink-0 font-mono ${completada
                                                ? "bg-orange-500 text-black"
                                                : "bg-black border border-gray-600 text-gray-400"
                                            }`}>
                                            {completada ? "✓" : idLeccion}
                                        </div>

                                        {/* Texto */}
                                        <div className="flex-1 min-w-0">
                                            <p className={`font-black truncate font-mono text-sm ${completada ? "text-orange-400" : "text-white"
                                                }`}>
                                                {leccion.titulo.toUpperCase()}
                                            </p>
                                            <p className="text-gray-300 text-xs mt-0.5">
                                                {leccion.concepto} · {leccion.duracion}
                                            </p>
                                        </div>

                                        {!bloqueada && !completada && (
                                            <span className="text-orange-500 text-lg flex-shrink-0">→</span>
                                        )}
                                        {bloqueada && (
                                            <span className="text-gray-600 text-lg flex-shrink-0">🔒</span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}