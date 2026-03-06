import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { lecciones, semanas } from "../data/lecciones";
import ProgressBar from "../components/ProgressBar";

export default function Lecciones() {
    const { progreso } = useProgress();
    const navigate = useNavigate();
    const completadas = progreso.leccionesCompletadas.length;

    return (
        <div className="min-h-screen bg-gray-950 px-4 py-8">
            <div className="max-w-2xl mx-auto">

                <div className="mb-8">
                    <h1 className="text-3xl font-black text-white mb-1">
                        Tu camino <span className="text-orange-500">naranja</span>
                    </h1>
                    <p className="text-gray-300 mb-4">21 lecciones · ~5 min cada una</p>
                    <ProgressBar completadas={completadas} total={21} />
                </div>

                {semanas.map((semana) => (
                    <div key={semana.numero} className="mb-10">
                        <div className={`bg-gradient-to-r ${semana.color} rounded-2xl p-4 mb-4 flex items-center justify-between`}>
                            <div>
                                <p className="text-white text-xs font-bold uppercase tracking-wider opacity-90">
                                    Semana {semana.numero}
                                </p>
                                <h2 className="text-white text-xl font-black">{semana.titulo}</h2>
                                <p className="text-white opacity-90 text-sm">{semana.descripcion}</p>
                            </div>
                            {progreso.semanasBadges.includes(semana.numero) && (
                                <div className="text-4xl">🏅</div>
                            )}
                        </div>

                        <div className="flex flex-col gap-3">
                            {semana.lecciones.map((idLeccion) => {
                                const leccion = lecciones.find(l => l.id === idLeccion);
                                const completada = progreso.leccionesCompletadas.includes(idLeccion);
                                const anterior = idLeccion === 1 || progreso.leccionesCompletadas.includes(idLeccion - 1);
                                const bloqueada = !anterior && !completada;

                                return (
                                    <button
                                        key={idLeccion}
                                        onClick={() => !bloqueada && navigate(`/leccion/${idLeccion}`)}
                                        className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${completada
                                                ? "bg-gray-800 border-orange-500 opacity-90"
                                                : bloqueada
                                                    ? "bg-gray-900 border-gray-800 opacity-40 cursor-not-allowed"
                                                    : "bg-gray-800 border-gray-700 hover:border-orange-400 cursor-pointer"
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0 ${completada ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-300"
                                            }`}>
                                            {completada ? "✓" : idLeccion}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`font-bold truncate ${completada ? "text-orange-400" : "text-white"}`}>
                                                {leccion.titulo}
                                            </p>
                                            <p className="text-gray-300 text-xs">{leccion.concepto} · {leccion.duracion}</p>
                                        </div>
                                        {!bloqueada && !completada && (
                                            <span className="text-orange-500 text-xl flex-shrink-0">→</span>
                                        )}
                                        {bloqueada && (
                                            <span className="text-gray-500 text-lg flex-shrink-0">🔒</span>
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