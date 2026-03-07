import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

const STATS = [
    { numero: "49%", descripcion: "de mexicanos sin cuenta bancaria" },
    { numero: "$67B", descripcion: "USD en remesas anuales a México" },
    { numero: "21M", descripcion: "bitcoins que existirán como máximo" },
];

export default function Onboarding() {
    const { setNivel } = useProgress();
    const navigate = useNavigate();

    const elegirNivel = (nivel) => {
        setNivel(nivel);
        navigate("/lecciones");
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500" />

            <div className="max-w-lg w-full relative z-10">

                {/* Hero */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center border-4 border-orange-500 w-20 h-20 mb-6 relative">
                        <span className="text-orange-500 text-4xl font-black">₿</span>
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-orange-500" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-500" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-orange-500" />
                    </div>
                    <h1 className="text-5xl font-black text-white mb-3 leading-tight" style={{ fontFamily: "monospace" }}>
                        BITCOIN<br /><span className="text-orange-500">EN 21 DÍAS</span>
                    </h1>
                    <p className="text-gray-300 text-base mt-4">
                        El conocimiento financiero que nadie te enseñó
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-10">
                    {STATS.map((stat, i) => (
                        <div key={i} className="bg-gray-900 border border-orange-500 border-opacity-40 p-3 text-center">
                            <p className="text-orange-500 font-black text-xl" style={{ fontFamily: "monospace" }}>{stat.numero}</p>
                            <p className="text-gray-300 text-xs mt-1 leading-tight">{stat.descripcion}</p>
                        </div>
                    ))}
                </div>

                {/* Nivel */}
                <p className="text-white font-black text-center mb-4 text-lg" style={{ fontFamily: "monospace" }}>
                    ¿CUÁNTO SABES DE BITCOIN?
                </p>

                <div className="flex flex-col gap-3 mb-8">
                    <button
                        onClick={() => elegirNivel("principiante")}
                        className="bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 hover:border-orange-500 text-white p-5 text-left transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">🌱</span>
                            <div>
                                <p className="font-black text-white group-hover:text-orange-400 transition-colors text-base">
                                    Soy principiante
                                </p>
                                <p className="text-gray-300 text-sm mt-1">
                                    Nunca he comprado Bitcoin ni sé bien cómo funciona
                                </p>
                            </div>
                            <span className="ml-auto text-gray-400 group-hover:text-orange-500 text-xl transition-colors">→</span>
                        </div>
                    </button>

                    <button
                        onClick={() => elegirNivel("intermedio")}
                        className="bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 hover:border-orange-500 text-white p-5 text-left transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">⚡</span>
                            <div>
                                <p className="font-black text-white group-hover:text-orange-400 transition-colors text-base">
                                    Sé lo básico
                                </p>
                                <p className="text-gray-300 text-sm mt-1">
                                    He escuchado de Bitcoin y entiendo la idea general
                                </p>
                            </div>
                            <span className="ml-auto text-gray-400 group-hover:text-orange-500 text-xl transition-colors">→</span>
                        </div>
                    </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { emoji: "🌮", texto: "Analogías mexicanas" },
                        { emoji: "🧠", texto: "Quiz por lección" },
                        { emoji: "📊", texto: "Calculadoras reales" },
                        { emoji: "🤖", texto: "Chatbot con IA" },
                    ].map((f, i) => (
                        <div key={i} className="bg-gray-900 border border-gray-700 px-4 py-3 flex items-center gap-3">
                            <span className="text-xl">{f.emoji}</span>
                            <span className="text-gray-200 text-sm font-medium">{f.texto}</span>
                        </div>
                    ))}
                </div>

                <p className="text-gray-500 text-xs text-center mt-6 font-mono">
                    TU PROGRESO SE GUARDA AUTOMÁTICAMENTE · GRATIS · SIN DRAMA
                </p>
            </div>
        </div>
    );
}