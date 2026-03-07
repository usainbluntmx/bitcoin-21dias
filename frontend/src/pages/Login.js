import { useState } from "react";
import { supabase } from "../supabase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        if (!email.trim()) return;
        setCargando(true);
        setError("");

        const { error } = await supabase.auth.signInWithOtp({
            email: email.trim(),
            options: {
                emailRedirectTo: window.location.origin
            }
        });

        if (error) {
            setError("Hubo un problema. Verifica tu correo e intenta de nuevo.");
        } else {
            setEnviado(true);
        }
        setCargando(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleLogin();
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">

            {/* Fondo retro-futurista */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500" />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              #F7931A 40px,
              #F7931A 41px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              #F7931A 40px,
              #F7931A 41px
            )`
                    }}
                />
                <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-orange-500 opacity-5 blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-orange-500 opacity-5 blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-sm">

                {/* Logo */}
                <div className="text-center mb-10">
                    <div className="inline-block border-4 border-orange-500 p-4 mb-4 relative">
                        <span className="text-orange-500 text-5xl font-black">₿</span>
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-orange-500" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-500" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-orange-500" />
                    </div>
                    <h1
                        className="text-white font-black text-4xl tracking-tighter mb-1"
                        style={{ fontFamily: "monospace" }}
                    >
                        BITCOIN
                    </h1>
                    <p className="text-orange-500 font-black text-xl tracking-widest" style={{ fontFamily: "monospace" }}>
                        EN 21 DÍAS
                    </p>
                    <p className="text-gray-500 text-sm mt-3">
                        El conocimiento financiero que nadie te enseñó
                    </p>
                </div>

                {!enviado ? (
                    <div className="border border-orange-500 border-opacity-30 p-6 bg-gray-950 relative">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

                        <p
                            className="text-white font-bold text-sm mb-1 tracking-widest uppercase"
                            style={{ fontFamily: "monospace" }}
                        >
                            Acceso sin contraseña
                        </p>
                        <p className="text-gray-500 text-xs mb-5">
                            Te mandamos un link a tu correo. Sin contraseñas, sin Google, sin drama.
                        </p>

                        <div className="mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="tu@correo.com"
                                className="w-full bg-black border border-gray-700 focus:border-orange-500 text-white px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600"
                                style={{ fontFamily: "monospace" }}
                            />
                        </div>

                        {error && (
                            <p className="text-red-400 text-xs mb-4 font-mono">{error}</p>
                        )}

                        <button
                            onClick={handleLogin}
                            disabled={!email.trim() || cargando}
                            className="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-gray-800 disabled:text-gray-600 text-black font-black py-3 text-sm tracking-widest uppercase transition-colors"
                            style={{ fontFamily: "monospace" }}
                        >
                            {cargando ? "ENVIANDO..." : "ENTRAR →"}
                        </button>
                    </div>
                ) : (
                    <div className="border border-orange-500 border-opacity-30 p-6 bg-gray-950 relative text-center">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

                        <p className="text-4xl mb-4">📬</p>
                        <p className="text-orange-500 font-black text-lg mb-2" style={{ fontFamily: "monospace" }}>
                            REVISA TU CORREO
                        </p>
                        <p className="text-gray-400 text-sm">
                            Te mandamos un link mágico a{" "}
                            <span className="text-white font-bold">{email}</span>.
                            Úsalo para entrar, expira en 1 hora.
                        </p>
                        <button
                            onClick={() => { setEnviado(false); setEmail(""); }}
                            className="mt-5 text-gray-600 hover:text-gray-400 text-xs underline transition-colors"
                        >
                            Usar otro correo
                        </button>
                    </div>
                )}

                <p className="text-gray-700 text-xs text-center mt-6 font-mono">
                    SIN REGISTRO · SIN CONTRASEÑA · SIN DRAMA
                </p>
            </div>
        </div>
    );
}