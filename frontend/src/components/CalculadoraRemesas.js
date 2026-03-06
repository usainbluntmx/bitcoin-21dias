import { useState } from "react";

const SERVICIOS = [
    {
        nombre: "Western Union",
        emoji: "🏦",
        comisionPct: 0.043,
        comisionFija: 0,
        tiempoMin: "30 min",
        tiempoMax: "3 días",
        color: "yellow"
    },
    {
        nombre: "MoneyGram",
        emoji: "🏧",
        comisionPct: 0.038,
        comisionFija: 0,
        tiempoMin: "10 min",
        tiempoMax: "3 días",
        color: "red"
    },
    {
        nombre: "Banco tradicional",
        emoji: "🏛️",
        comisionPct: 0.05,
        comisionFija: 25,
        tiempoMin: "1 día",
        tiempoMax: "5 días",
        color: "blue"
    },
    {
        nombre: "Bitcoin (Lightning)",
        emoji: "⚡",
        comisionPct: 0,
        comisionFija: 0.01,
        tiempoMin: "segundos",
        tiempoMax: "segundos",
        color: "orange"
    }
];

const TIPO_CAMBIO = 17.2;

export default function CalculadoraRemesas() {
    const [cantidad, setCantidad] = useState(500);

    const fmt = (n, usd = true) => {
        if (usd) return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
        return `$${n.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`;
    };

    return (
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 my-6">
            <h3 className="text-white font-bold text-lg mb-1">🌎 Calculadora de Remesas</h3>
            <p className="text-gray-400 text-sm mb-5">Compara cuánto cuesta enviar dinero a México</p>

            <div className="mb-6">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                    ¿Cuánto quieres enviar (USD)?
                </label>
                <input
                    type="number"
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-xl border border-gray-600 focus:outline-none focus:border-orange-500"
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
                            className={`rounded-xl p-4 border-2 ${esBitcoin
                                    ? "bg-orange-950 border-orange-500"
                                    : "bg-gray-750 border-gray-600 bg-gray-900"
                                }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{servicio.emoji}</span>
                                    <span className={`font-bold text-sm ${esBitcoin ? "text-orange-400" : "text-white"}`}>
                                        {servicio.nombre}
                                    </span>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full font-bold ${esBitcoin ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-400"
                                    }`}>
                                    {servicio.tiempoMin}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <p className="text-gray-500 text-xs">Comisión</p>
                                    <p className={`font-bold ${esBitcoin ? "text-orange-300" : "text-red-400"}`}>
                                        {fmt(comision)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Familia recibe</p>
                                    <p className={`font-bold ${esBitcoin ? "text-green-300" : "text-white"}`}>
                                        {fmt(recibeMXN, false)}
                                    </p>
                                </div>
                            </div>

                            {esBitcoin && comision < 1 && (
                                <p className="text-orange-300 text-xs mt-2 font-medium">
                                    ⚡ Comisión menor a $1 USD · Llega en segundos
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-4 bg-gray-900 rounded-xl p-4">
                <p className="text-gray-400 text-xs text-center">
                    Con ${cantidad} USD enviados, Bitcoin le ahorra a tu familia{" "}
                    <span className="text-orange-400 font-bold">
                        {fmt((cantidad * 0.043) - 0.01)} en comisiones
                    </span>{" "}
                    vs Western Union.
                </p>
            </div>

            <p className="text-gray-600 text-xs mt-3 text-center">
                Tipo de cambio referencial: $17.20 MXN/USD · Fuente: Banxico
            </p>
        </div>
    );
}