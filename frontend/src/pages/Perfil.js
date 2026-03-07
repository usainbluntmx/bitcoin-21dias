import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { useProgress } from "../context/ProgressContext";
import { lecciones } from "../data/lecciones";
import ProgressBar from "../components/ProgressBar";

const AVATARES = ["🟠", "⚡", "🔑", "🏴‍☠️", "🌮", "🦁", "🐉", "🚀", "💎", "🛡️"];

export default function Perfil() {
    const { progreso, resetProgreso } = useProgress();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [nombre, setNombre] = useState("");
    const [avatar, setAvatar] = useState("🟠");
    const [editando, setEditando] = useState(false);
    const [guardando, setGuardando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const completadas = progreso.leccionesCompletadas.length;
    const incorrectas = progreso.quizzesIncorrectos || [];
    const porcentaje = Math.round((completadas / 21) * 100);

    useEffect(() => {
        const cargarPerfil = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) { navigate("/login"); return; }
            setUser(user);
            const { data } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();
            if (data) {
                setNombre(data.nombre || "");
                setAvatar(data.avatar || "🟠");
            }
        };
        cargarPerfil();
    }, [navigate]);

    const guardarPerfil = async () => {
        setGuardando(true);
        const { data: { user } } = await supabase.auth.getUser();
        await supabase.from("profiles").upsert({
            id: user.id,
            email: user.email,
            nombre: nombre.trim(),
            avatar
        });
        setGuardando(false);
        setEditando(false);
        setMensaje("✓ Perfil actualizado");
        setTimeout(() => setMensaje(""), 3000);
    };

    const handleCerrarSesion = async () => {
        await supabase.auth.signOut();
        resetProgreso();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-black px-4 py-8">
            <div className="max-w-lg mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate("/lecciones")}
                        className="text-gray-500 hover:text-orange-500 text-sm font-mono tracking-wider transition-colors"
                    >
                        ← VOLVER
                    </button>
                    <p className="text-orange-500 font-black font-mono tracking-widest text-sm">PERFIL</p>
                    <button
                        onClick={handleCerrarSesion}
                        className="text-gray-500 hover:text-red-400 text-sm font-mono tracking-wider transition-colors"
                    >
                        SALIR →
                    </button>
                </div>

                {/* Avatar y nombre */}
                <div className="border border-orange-500 border-opacity-30 p-6 bg-gray-950 relative mb-4">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 border-2 border-orange-500 flex items-center justify-center text-3xl bg-black">
                            {avatar}
                        </div>
                        <div>
                            <p className="text-white font-black text-xl font-mono">
                                {nombre || "SIN NOMBRE"}
                            </p>
                            <p className="text-gray-500 text-xs font-mono">{user?.email}</p>
                            <p className="text-orange-500 text-xs font-mono mt-1">
                                {progreso.nivel === "principiante" ? "🌱 PRINCIPIANTE" : "⚡ INTERMEDIO"}
                            </p>
                        </div>
                    </div>

                    {!editando ? (
                        <button
                            onClick={() => setEditando(true)}
                            className="w-full border border-orange-500 border-opacity-50 hover:border-opacity-100 text-orange-500 font-black py-2 text-xs tracking-widest uppercase font-mono transition-all"
                        >
                            EDITAR PERFIL
                        </button>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-gray-500 text-xs font-mono mb-1 tracking-wider">NOMBRE</p>
                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                    placeholder="¿Cómo te llamamos?"
                                    className="w-full bg-black border border-gray-700 focus:border-orange-500 text-white px-3 py-2 text-sm outline-none font-mono"
                                    maxLength={30}
                                />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-mono mb-2 tracking-wider">AVATAR</p>
                                <div className="grid grid-cols-5 gap-2">
                                    {AVATARES.map(av => (
                                        <button
                                            key={av}
                                            onClick={() => setAvatar(av)}
                                            className={`h-10 flex items-center justify-center text-xl border transition-all ${avatar === av
                                                    ? "border-orange-500 bg-orange-500 bg-opacity-20"
                                                    : "border-gray-700 hover:border-gray-500"
                                                }`}
                                        >
                                            {av}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={guardarPerfil}
                                    disabled={guardando}
                                    className="flex-1 bg-orange-500 hover:bg-orange-400 text-black font-black py-2 text-xs tracking-widest uppercase font-mono transition-colors"
                                >
                                    {guardando ? "GUARDANDO..." : "GUARDAR"}
                                </button>
                                <button
                                    onClick={() => setEditando(false)}
                                    className="flex-1 border border-gray-700 text-gray-500 hover:text-white font-bold py-2 text-xs tracking-widest uppercase font-mono transition-colors"
                                >
                                    CANCELAR
                                </button>
                            </div>
                        </div>
                    )}
                    {mensaje && (
                        <p className="text-green-400 text-xs font-mono mt-3 text-center">{mensaje}</p>
                    )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                        { valor: progreso.puntos, label: "PUNTOS" },
                        { valor: `${completadas}/21`, label: "LECCIONES" },
                        { valor: `${porcentaje}%`, label: "PROGRESO" },
                    ].map((stat, i) => (
                        <div key={i} className="border border-orange-500 border-opacity-20 bg-gray-950 p-4 text-center relative">
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />
                            <p className="text-orange-500 font-black text-2xl font-mono">{stat.valor}</p>
                            <p className="text-gray-500 text-xs font-mono mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Barra de progreso */}
                <div className="border border-orange-500 border-opacity-20 bg-gray-950 p-5 mb-4 relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />
                    <p className="text-white font-black font-mono text-xs tracking-widest mb-3">PROGRESO GENERAL</p>
                    <ProgressBar completadas={completadas} total={21} />
                </div>

                {/* Badges */}
                <div className="border border-orange-500 border-opacity-20 bg-gray-950 p-5 mb-4 relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />
                    <p className="text-white font-black font-mono text-xs tracking-widest mb-4">INSIGNIAS</p>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { semana: 1, emoji: "🥉", titulo: "SEMANA 1", desc: "El Problema" },
                            { semana: 2, emoji: "🥈", titulo: "SEMANA 2", desc: "La Tecnología" },
                            { semana: 3, emoji: "🥇", titulo: "SEMANA 3", desc: "El Impacto" },
                        ].map(badge => {
                            const obtenida = progreso.semanasBadges.includes(badge.semana);
                            return (
                                <div
                                    key={badge.semana}
                                    className={`p-3 text-center border transition-all ${obtenida
                                            ? "border-orange-500 bg-orange-500 bg-opacity-10"
                                            : "border-gray-800 opacity-30"
                                        }`}
                                >
                                    <p className="text-3xl mb-1">{obtenida ? badge.emoji : "🔒"}</p>
                                    <p className="text-white text-xs font-black font-mono">{badge.titulo}</p>
                                    <p className="text-gray-500 text-xs font-mono">{badge.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Errores */}
                {incorrectas.length > 0 && (
                    <div className="border border-orange-500 border-opacity-20 bg-gray-950 p-5 mb-4 relative">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />
                        <p className="text-white font-black font-mono text-xs tracking-widest mb-4">⚠️ LECCIONES CON ERRORES</p>
                        <div className="flex flex-col gap-2">
                            {incorrectas.map((id, i) => {
                                const leccion = lecciones.find(l => l.id === id);
                                if (!leccion) return null;
                                const corregida = progreso.quizzesCorrectos.includes(id);
                                return (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-3 p-3 text-sm border ${corregida
                                                ? "border-gray-800 bg-gray-900"
                                                : "border-red-900 bg-red-950 bg-opacity-30"
                                            }`}
                                    >
                                        <span className={`w-6 h-6 flex items-center justify-center text-xs font-black flex-shrink-0 ${corregida ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                            }`}>
                                            {corregida ? "✓" : "✗"}
                                        </span>
                                        <span className="text-gray-300 flex-1 font-mono text-xs">{leccion.titulo}</span>
                                        <span className={`text-xs font-mono ${corregida ? "text-green-400" : "text-red-400"}`}>
                                            {corregida ? "CORREGIDA" : "-5 PTS"}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Todas las lecciones */}
                <div className="border border-orange-500 border-opacity-20 bg-gray-950 p-5 mb-4 relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />
                    <p className="text-white font-black font-mono text-xs tracking-widest mb-4">TODAS LAS LECCIONES</p>
                    <div className="flex flex-col gap-2">
                        {lecciones.map((leccion) => {
                            const completada = progreso.leccionesCompletadas.includes(leccion.id);
                            const conError = incorrectas.includes(leccion.id);
                            return (
                                <div
                                    key={leccion.id}
                                    className={`flex items-center gap-3 p-3 text-sm ${completada ? "bg-gray-900" : "bg-black opacity-40"
                                        }`}
                                >
                                    <span className={`w-6 h-6 flex items-center justify-center text-xs font-black flex-shrink-0 ${completada ? "bg-orange-500 text-white" : "bg-gray-800 text-gray-600"
                                        }`}>
                                        {completada ? "✓" : leccion.id}
                                    </span>
                                    <span className={`flex-1 font-mono text-xs ${completada ? "text-gray-200" : "text-gray-600"}`}>
                                        {leccion.titulo}
                                    </span>
                                    {conError && completada && (
                                        <span className="text-yellow-600 text-xs font-mono">ERROR</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Reiniciar */}
                <button
                    onClick={() => {
                        if (window.confirm("¿Seguro que quieres reiniciar todo tu progreso?")) {
                            resetProgreso();
                            navigate("/");
                        }
                    }}
                    className="w-full border border-red-900 hover:border-red-500 text-red-900 hover:text-red-400 font-bold py-3 text-xs tracking-widest uppercase font-mono transition-all mb-3"
                >
                    🔄 REINICIAR PROGRESO
                </button>

                <button
                    onClick={handleCerrarSesion}
                    className="w-full border border-gray-800 hover:border-red-900 text-gray-600 hover:text-red-400 font-bold py-3 text-xs tracking-widest uppercase font-mono transition-all"
                >
                    CERRAR SESIÓN
                </button>

            </div>
        </div>
    );
}