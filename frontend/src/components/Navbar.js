import { Link, useLocation } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function Navbar() {
    const { progreso } = useProgress();
    const location = useLocation();

    return (
        <nav className="bg-gray-900 border-b border-orange-500 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2">
                <span className="text-orange-500 text-2xl font-bold">₿</span>
                <span className="text-white font-bold text-lg hidden sm:block">Bitcoin en 21 Días</span>
            </Link>

            <div className="flex items-center gap-4">
                <Link
                    to="/lecciones"
                    className={`text-sm font-medium transition-colors ${location.pathname.includes("lecciones")
                            ? "text-orange-500"
                            : "text-gray-200 hover:text-white"
                        }`}
                >
                    Lecciones
                </Link>
                <Link
                    to="/progreso"
                    className={`text-sm font-medium transition-colors ${location.pathname === "/progreso"
                            ? "text-orange-500"
                            : "text-gray-200 hover:text-white"
                        }`}
                >
                    Mi Progreso
                </Link>
                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {progreso.puntos} pts
                </div>
            </div>
        </nav>
    );
}