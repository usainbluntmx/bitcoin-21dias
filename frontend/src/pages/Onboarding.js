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
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-lg w-full">

                {/* Hero */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-3xl mb-6 shadow-lg shadow-orange-500/30">
                        <span className="text-white text-4xl font-black">₿</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 leading-tight">
                        Bitcoin en<br />
                        <span className="text-orange-500">21 Días</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Aprende Bitcoin desde cero con analogías mexicanas,
                        quizzes y herramientas prácticas.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-10">
                    {STATS.map((stat, i) => (
                        <div key={i} className="bg-gray-900 rounded-2xl p-3 text-center border border-gray-800">
                            <p className="text-orange-500 font-black text-xl">{stat.numero}</p>
                            <p className="text-gray-500 text-xs mt-1 leading-tight">{stat.descripcion}</p>
                        </div>
                    ))}
                </div>

                {/* Nivel */}
                <p className="text-white font-bold text-center mb-4">¿Cuánto sabes de Bitcoin?</p>

                <div className="flex flex-col gap-3 mb-8">
                    <button
                        onClick={() => elegirNivel("principiante")}
                        className="bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 hover:border-orange-500 text-white rounded-2xl p-5 text-left transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">🌱</span>
                            <div>
                                <p className="font-bold group-hover:text-orange-400 transition-colors">
                                    Soy principiante
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Nunca he comprado Bitcoin ni sé bien cómo funciona
                                </p>
                            </div>
                            <span className="ml-auto text-gray-600 group-hover:text-orange-500 text-xl transition-colors">→</span>
                        </div>
                    </button>

                    <button
                        onClick={() => elegirNivel("intermedio")}
                        className="bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 hover:border-orange-500 text-white rounded-2xl p-5 text-left transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">⚡</span>
                            <div>
                                <p className="font-bold group-hover:text-orange-400 transition-colors">
                                    Sé lo básico
                                </p>
                                <p className="text-gray-500 text-sm">
                                    He escuchado de Bitcoin y entiendo la idea general
                                </p>
                            </div>
                            <span className="ml-auto text-gray-600 group-hover:text-orange-500 text-xl transition-colors">→</span>
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
                        <div key={i} className="bg-gray-900 rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-800">
                            <span className="text-xl">{f.emoji}</span>
                            <span className="text-gray-400 text-sm">{f.texto}</span>
                        </div>
                    ))}
                </div>

                <p className="text-gray-700 text-xs text-center mt-6">
                    Tu progreso se guarda automáticamente · Gratis · Sin registro
                </p>
            </div>
        </div>
    );
}