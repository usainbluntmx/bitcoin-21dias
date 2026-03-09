import { Link, useLocation } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function Navbar() {
    const { progreso } = useProgress();
    const location = useLocation();
    const isActive = (path) => location.pathname.includes(path);

    return (
        <nav className="bg-black border-b-2 border-orange-500 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
            <Link to="/lecciones" className="flex items-center gap-2">
                <div className="border-2 border-orange-500 w-8 h-8 flex items-center justify-center">
                    <span className="text-orange-500 text-lg font-black">₿</span>
                </div>
                <span className="text-white font-black text-sm hidden sm:block tracking-widest font-mono">
                    BTC<span className="text-orange-500">21</span>
                </span>
            </Link>

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
                <div className="border border-orange-500 text-orange-500 text-xs font-black px-3 py-1 font-mono">
                    {progreso.puntos} PTS
                </div>
            </div>
        </nav>
    );
}