import { Link, useLocation } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { supabase } from "../supabase";
import { useEffect, useState } from "react";

export default function Navbar({ session }) {
    const { progreso } = useProgress();
    const location = useLocation();
    // const navigate = useNavigate();
    const [avatar, setAvatar] = useState("🟠");

    useEffect(() => {
        if (!session?.user) return;
        supabase
            .from("profiles")
            .select("avatar")
            .eq("id", session.user.id)
            .single()
            .then(({ data }) => {
                if (data?.avatar) setAvatar(data.avatar);
            });
    }, [session]);

    const isActive = (path) => location.pathname.includes(path);

    return (
        <nav className="bg-black border-b-2 border-orange-500 px-4 py-3 flex items-center justify-between sticky top-0 z-50">

            {/* Logo */}
            <Link to="/lecciones" className="flex items-center gap-2">
                <div className="border-2 border-orange-500 w-8 h-8 flex items-center justify-center">
                    <span className="text-orange-500 text-lg font-black">₿</span>
                </div>
                <span
                    className="text-white font-black text-sm hidden sm:block tracking-widest"
                    style={{ fontFamily: "monospace" }}
                >
                    BTC<span className="text-orange-500">21</span>
                </span>
            </Link>

            {/* Links */}
            <div className="flex items-center gap-1 sm:gap-4">
                <Link
                    to="/lecciones"
                    className={`text-xs font-black tracking-widest px-3 py-1 transition-all font-mono ${isActive("lecciones")
                        ? "text-black bg-orange-500"
                        : "text-gray-400 hover:text-orange-500"
                        }`}
                >
                    LECCIONES
                </Link>
                <Link
                    to="/progreso"
                    className={`text-xs font-black tracking-widest px-3 py-1 transition-all font-mono ${isActive("progreso")
                        ? "text-black bg-orange-500"
                        : "text-gray-400 hover:text-orange-500"
                        }`}
                >
                    PROGRESO
                </Link>

                {/* Puntos */}
                <div
                    className="border border-orange-500 text-orange-500 text-xs font-black px-3 py-1 font-mono hidden sm:block"
                >
                    {progreso.puntos} PTS
                </div>

                {/* Avatar → Perfil */}
                <Link
                    to="/perfil"
                    className="w-8 h-8 border-2 border-orange-500 flex items-center justify-center text-lg hover:bg-orange-500 hover:bg-opacity-20 transition-all"
                >
                    {avatar}
                </Link>
            </div>
        </nav>
    );
}