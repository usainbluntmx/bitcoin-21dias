import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `Eres "Satoshi", un asistente educativo experto en Bitcoin dentro de la app "Bitcoin en 21 Días", diseñada para mexicanos.

Tu personalidad:
- Hablas en español mexicano, casual y amigable
- Usas analogías del contexto mexicano: tacos, tandas, OXXO, peso, Banxico, remesas, etc.
- Eres paciente y nunca haces sentir tonto al usuario
- Explicas conceptos complejos de forma simple y directa
- Tienes sentido del humor ligero pero sin exagerar

Tus reglas:
- Solo respondes preguntas relacionadas con Bitcoin y educación financiera básica
- Si te preguntan sobre otras criptomonedas, explicas brevemente pero redirigues a Bitcoin
- Nunca das consejos de inversión específicos ni dices "compra ahora"
- Si te preguntan algo fuera de tu tema, dices amablemente que solo puedes ayudar con Bitcoin
- Tus respuestas son cortas: máximo 3 párrafos
- Siempre que puedas, termina con una pregunta para mantener el aprendizaje

Contexto: El usuario está aprendiendo Bitcoin desde cero con un curso de 21 lecciones.`;

export default function Chatbot() {
    const [abierto, setAbierto] = useState(false);
    const [mensajes, setMensajes] = useState([
        {
            rol: "assistant",
            contenido: "¡Qué onda! Soy Satoshi, tu guía Bitcoin 🟠\n\n¿Tienes alguna duda sobre lo que estás aprendiendo? Pregúntame lo que sea sobre Bitcoin, sin pena."
        }
    ]);
    const [input, setInput] = useState("");
    const [cargando, setCargando] = useState(false);

    // Estado para posición del botón arrastrable
    const [pos, setPos] = useState({ x: null, y: null });
    const [arrastrando, setArrastrando] = useState(false);
    const offsetRef = useRef({ x: 0, y: 0 });
    const btnRef = useRef(null);
    const bottomRef = useRef(null);
    const isMobile = window.innerWidth < 640;

    // Posición inicial: esquina inferior derecha
    useEffect(() => {
        setPos({
            x: window.innerWidth - 80,
            y: window.innerHeight - 80
        });
    }, []);

    useEffect(() => {
        if (abierto) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [mensajes, abierto]);

    // Touch handlers para mobile
    const handleTouchStart = (e) => {
        if (!isMobile) return;
        const touch = e.touches[0];
        const rect = btnRef.current.getBoundingClientRect();
        offsetRef.current = {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        };
        setArrastrando(true);
    };

    const handleTouchMove = (e) => {
        if (!arrastrando || !isMobile) return;
        e.preventDefault();
        const touch = e.touches[0];
        const newX = Math.min(Math.max(0, touch.clientX - offsetRef.current.x), window.innerWidth - 56);
        const newY = Math.min(Math.max(0, touch.clientY - offsetRef.current.y), window.innerHeight - 56);
        setPos({ x: newX, y: newY });
    };

    const handleTouchEnd = (e) => {
        if (!isMobile) return;
        setArrastrando(false);
    };

    // Mouse handlers para desktop (no arrastra, posición fija)
    const handleClick = () => {
        if (!arrastrando) setAbierto(!abierto);
    };

    const enviar = async () => {
        if (!input.trim() || cargando) return;
        const nuevoMensaje = { rol: "user", contenido: input.trim() };
        const nuevosMensajes = [...mensajes, nuevoMensaje];
        setMensajes(nuevosMensajes);
        setInput("");
        setCargando(true);

        try {
            const response = await fetch("https://api.anthropic.com/v1/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.REACT_APP_ANTHROPIC_API_KEY,
                    "anthropic-version": "2023-06-01",
                    "anthropic-dangerous-direct-browser-access": "true"
                },
                body: JSON.stringify({
                    model: "claude-sonnet-4-5",
                    max_tokens: 1000,
                    system: SYSTEM_PROMPT,
                    messages: nuevosMensajes.map(m => ({
                        role: m.rol,
                        content: m.contenido
                    }))
                })
            });

            const data = await response.json();
            const respuesta = data.content?.[0]?.text || "Perdón, no pude procesar eso. ¿Lo intentamos de nuevo?";
            setMensajes(prev => [...prev, { rol: "assistant", contenido: respuesta }]);
        } catch (error) {
            setMensajes(prev => [...prev, {
                rol: "assistant",
                contenido: "Hubo un problema de conexión. ¿Lo intentamos de nuevo?"
            }]);
        } finally {
            setCargando(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            enviar();
        }
    };

    // Calcular posición de la ventana del chat relativa al botón
    const calcularPosChat = () => {
        if (!isMobile) return {};
        const espacioAbajo = window.innerHeight - pos.y - 56;
        const espacioArriba = pos.y;
        const arriba = espacioAbajo < 420 && espacioArriba > espacioAbajo;

        return {
            position: "fixed",
            left: Math.min(pos.x, window.innerWidth - 320),
            top: arriba ? pos.y - 420 : pos.y + 64,
            width: Math.min(320, window.innerWidth - 16),
        };
    };

    if (pos.x === null) return null;

    return (
        <>
            {/* Botón flotante */}
            <button
                ref={btnRef}
                onClick={handleClick}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={isMobile ? {
                    position: "fixed",
                    left: pos.x,
                    top: pos.y,
                    touchAction: "none"
                } : {}}
                className={`${isMobile ? "" : "fixed bottom-6 right-6"} w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-colors z-50 select-none`}
            >
                {abierto ? "✕" : "₿"}
            </button>

            {/* Ventana del chat */}
            {abierto && (
                <div
                    style={isMobile ? calcularPosChat() : {}}
                    className={`${isMobile
                            ? "fixed z-50"
                            : "fixed bottom-24 right-6 w-96 z-50"
                        } h-[420px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col`}
                >
                    {/* Header */}
                    <div className="bg-orange-500 rounded-t-2xl px-4 py-3 flex items-center gap-3 flex-shrink-0">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-500 font-black text-sm">
                            ₿
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Satoshi</p>
                            <p className="text-orange-100 text-xs">Tu guía Bitcoin</p>
                        </div>
                        <button
                            onClick={() => setAbierto(false)}
                            className="ml-auto text-white opacity-70 hover:opacity-100 text-xl leading-none"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Mensajes */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
                        {mensajes.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.rol === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.rol === "user"
                                            ? "bg-orange-500 text-white rounded-br-sm"
                                            : "bg-gray-800 text-gray-100 rounded-bl-sm"
                                        }`}
                                >
                                    {msg.contenido}
                                </div>
                            </div>
                        ))}
                        {cargando && (
                            <div className="flex justify-start">
                                <div className="bg-gray-800 text-gray-300 px-4 py-3 rounded-2xl rounded-bl-sm text-sm">
                                    Escribiendo...
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div className="px-4 py-3 border-t border-gray-700 flex gap-2 flex-shrink-0">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Pregúntale a Satoshi..."
                            className="flex-1 bg-gray-800 text-white text-sm px-4 py-2 rounded-xl border border-gray-600 focus:outline-none focus:border-orange-500 placeholder-gray-400"
                        />
                        <button
                            onClick={enviar}
                            disabled={!input.trim() || cargando}
                            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 text-white px-4 py-2 rounded-xl transition-colors font-bold text-sm"
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}