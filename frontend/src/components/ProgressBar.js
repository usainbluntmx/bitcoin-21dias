export default function ProgressBar({ completadas, total }) {
    const porcentaje = Math.round((completadas / total) * 100);

    return (
        <div className="w-full">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>{completadas} de {total} lecciones</span>
                <span>{porcentaje}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${porcentaje}%` }}
                />
            </div>
        </div>
    );
}