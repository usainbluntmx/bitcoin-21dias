import { useState } from "react";

const SERVICIOS = [
    { nombre: "Western Union", emoji: "🏦", comisionPct: 0.043, comisionFija: 0, tiempoMin: "30 min", color: "yellow" },
    { nombre: "MoneyGram", emoji: "🏧", comisionPct: 0.038, comisionFija: 0, tiempoMin: "10 min", color: "red" },
    { nombre: "Banco tradicional", emoji: "🏛️", comisionPct: 0.05, comisionFija: 25, tiempoMin: "1-5 días", color: "blue" },
    { nombre: "Bitcoin (Lightning)", emoji: "⚡", comisionPct: 0, comisionFija: 0.01, tiempoMin: "segundos", color: "orange" },
];

const TIPO_CAMBIO = 17.2;

export default function CalculadoraRemesas() {
    const [cantidad, setCantidad] = useState(500);

    const fmt = (n, usd = true) => {
        if (usd) return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
        return `$${n.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`;
    };

    return (
        <div className="bg-gray-900 border border-orange-500 border-opacity-40 p-6 my-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

            <p className="text-white font-black text-base mb-1 font-mono tracking-wide">🌎 CALCULADORA DE REMESAS</p>
            <p className="text-gray-300 text-sm mb-5">Compara cuánto cuesta enviar dinero a México</p>

            <div className="mb-6">
                <label className="text-gray-200 text-sm font-bold mb-2 block">
                    ¿Cuánto quieres enviar (USD)?
                </label>
                <input
                    type="number"
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                    className="w-full bg-black border border-gray-600 focus:border-orange-500 text-white px-4 py-3 outline-none text-base"
                />
            </div>

            <div className="flex flex-col gap-3">
                {SERVICIOS.map((servicio) => {
                    const comision = (cantidad * servicio.comisionPct) + servicio.comisionFija;
                    const recibe = cantidad - comision;
                    const recibeMXN = recibe * TIPO_CAMBIO;
                    const esBitcoin = servicio.nombre === "Bitcoin (Lightning)";

                    return (
                        <div
                            key={servicio.nombre}
                            className={`p-4 border-2 ${esBitcoin ? "border-orange-500 bg-orange-950 bg-opacity-30" : "border-gray-700 bg-gray-950"}`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{servicio.emoji}</span>
                                    <span className={`font-black text-sm ${esBitcoin ? "text-orange-400" : "text-white"}`}>
                                        {servicio.nombre}
                                    </span>
                                </div>
                                <span className={`text-xs px-2 py-1 font-bold ${esBitcoin ? "bg-orange-500 text-black" : "bg-gray-700 text-gray-200"}`}>
                                    {servicio.tiempoMin}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-gray-300 text-xs font-bold mb-1">Comisión</p>
                                    <p className={`font-black text-base ${esBitcoin ? "text-orange-300" : "text-red-400"}`}>
                                        {fmt(comision)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-xs font-bold mb-1">Familia recibe</p>
                                    <p className={`font-black text-base ${esBitcoin ? "text-green-300" : "text-white"}`}>
                                        {fmt(recibeMXN, false)}
                                    </p>
                                </div>
                            </div>
                            {esBitcoin && (
                                <p className="text-orange-300 text-xs mt-2 font-bold">
                                    ⚡ Comisión menor a $1 USD · Llega en segundos
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-4 bg-black border border-gray-700 p-4">
                <p className="text-gray-200 text-sm text-center">
                    Con ${cantidad} USD, Bitcoin le ahorra a tu familia{" "}
                    <span className="text-orange-400 font-black">
                        {fmt((cantidad * 0.043) - 0.01)} en comisiones
                    </span>{" "}
                    vs Western Union.
                </p>
            </div>

            <p className="text-gray-400 text-xs mt-3 text-center">
                Tipo de cambio referencial: $17.20 MXN/USD · Fuente: Banxico
            </p>
        </div>
    );
}