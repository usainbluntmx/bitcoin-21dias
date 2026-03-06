import { useProgress } from "../context/ProgressContext";
import { lecciones } from "../data/lecciones";
import ProgressBar from "../components/ProgressBar";

export default function Progreso() {
    const { progreso, resetProgreso } = useProgress();
    const completadas = progreso.leccionesCompletadas.length;
    const incorrectas = progreso.quizzesIncorrectos || [];

    const badges = [
        { semana: 1, titulo: "Semana 1", emoji: "🥉", descripcion: "El Problema" },
        { semana: 2, titulo: "Semana 2", emoji: "🥈", descripcion: "La Tecnología" },
        { semana: 3, titulo: "Semana 3", emoji: "🥇", descripcion: "El Impacto" },
    ];

    return (
        <div className="min-h-screen bg-gray-950 px-4 py-8">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-3xl font-black text-white mb-1">
                    Mi <span className="text-orange-500">Progreso</span>
                </h1>
                <p className="text-gray-400 mb-8">
                    Nivel: {progreso.nivel === "principiante" ? "🌱 Principiante" : "⚡ Intermedio"}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
                        <p className="text-orange-500 text-3xl font-black">{progreso.puntos}</p>
                        <p className="text-gray-400 text-sm mt-1">Puntos</p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
                        <p className="text-green-400 text-3xl font-black">{completadas}</p>
                        <p className="text-gray-400 text-sm mt-1">Completadas</p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
                        <p className="text-red-400 text-3xl font-black">{incorrectas.length}</p>
                        <p className="text-gray-400 text-sm mt-1">Errores</p>
                    </div>
                </div>

                {/* Barra de progreso */}
                <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700 mb-8">
                    <p className="text-white font-bold mb-3">Progreso general</p>
                    <ProgressBar completadas={completadas} total={21} />
                </div>

                {/* Badges */}
                <div className="mb-8">
                    <p className="text-white font-bold mb-4">Insignias</p>
                    <div className="grid grid-cols-3 gap-4">
                        {badges.map((badge) => {
                            const obtenida = progreso.semanasBadges.includes(badge.semana);
                            return (
                                <div
                                    key={badge.semana}
                                    className={`rounded-2xl p-4 text-center border-2 transition-all ${obtenida
                                            ? "bg-gray-800 border-orange-500"
                                            : "bg-gray-900 border-gray-800 opacity-40"
                                        }`}
                                >
                                    <p className="text-4xl mb-2">{obtenida ? badge.emoji : "🔒"}</p>
                                    <p className="text-white text-xs font-bold">{badge.titulo}</p>
                                    <p className="text-gray-400 text-xs">{badge.descripcion}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Lecciones con errores */}
                {incorrectas.length > 0 && (
                    <div className="mb-8">
                        <p className="text-white font-bold mb-4">⚠️ Lecciones con errores</p>
                        <div className="flex flex-col gap-2">
                            {incorrectas.map((id, i) => {
                                const leccion = lecciones.find(l => l.id === id);
                                if (!leccion) return null;
                                const despuesCorregida = progreso.quizzesCorrectos.includes(id);
                                return (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-3 p-3 rounded-xl text-sm border ${despuesCorregida
                                                ? "bg-gray-800 border-gray-700"
                                                : "bg-red-950 border-red-800"
                                            }`}
                                    >
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${despuesCorregida ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                            }`}>
                                            {despuesCorregida ? "✓" : "✗"}
                                        </span>
                                        <span className="text-gray-200 flex-1">{leccion.titulo}</span>
                                        {despuesCorregida
                                            ? <span className="text-green-400 text-xs">Corregida</span>
                                            : <span className="text-red-400 text-xs">-5 pts</span>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Todas las lecciones */}
                <div className="mb-8">
                    <p className="text-white font-bold mb-4">Todas las lecciones</p>
                    <div className="flex flex-col gap-2">
                        {lecciones.map((leccion) => {
                            const completada = progreso.leccionesCompletadas.includes(leccion.id);
                            const conError = incorrectas.includes(leccion.id);
                            return (
                                <div
                                    key={leccion.id}
                                    className={`flex items-center gap-3 p-3 rounded-xl text-sm ${completada ? "bg-gray-800" : "bg-gray-900 opacity-40"
                                        }`}
                                >
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${completada ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-500"
                                        }`}>
                                        {completada ? "✓" : leccion.id}
                                    </span>
                                    <span className={completada ? "text-gray-200 flex-1" : "text-gray-500 flex-1"}>
                                        {leccion.titulo}
                                    </span>
                                    {conError && completada && (
                                        <span className="text-yellow-500 text-xs">tuvo error</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={() => {
                        if (window.confirm("¿Seguro que quieres reiniciar todo tu progreso? Volverás a la pantalla de inicio.")) {
                            resetProgreso();
                        }
                    }}
                    className="w-full bg-gray-800 hover:bg-red-900 border-2 border-gray-700 hover:border-red-500 text-gray-400 hover:text-red-300 font-bold py-3 rounded-2xl transition-all text-sm"
                >
                    🔄 Reiniciar progreso y volver al inicio
                </button>

            </div>
        </div>
    );
}