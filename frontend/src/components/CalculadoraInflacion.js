import { useState } from "react";

const DATOS = [
    { año: 2015, inflacionAcum: 1.000, precioBTC: 314 },
    { año: 2016, inflacionAcum: 1.036, precioBTC: 968 },
    { año: 2017, inflacionAcum: 1.082, precioBTC: 13800 },
    { año: 2018, inflacionAcum: 1.166, precioBTC: 3800 },
    { año: 2019, inflacionAcum: 1.231, precioBTC: 7200 },
    { año: 2020, inflacionAcum: 1.272, precioBTC: 29000 },
    { año: 2021, inflacionAcum: 1.338, precioBTC: 47000 },
    { año: 2022, inflacionAcum: 1.466, precioBTC: 16500 },
    { año: 2023, inflacionAcum: 1.577, precioBTC: 42000 },
    { año: 2024, inflacionAcum: 1.661, precioBTC: 94000 },
];

export default function CalculadoraInflacion() {
    const [cantidad, setCantidad] = useState(10000);
    const [anioInicio, setAnioInicio] = useState(2015);

    const datoInicio = DATOS.find(d => d.año === anioInicio);
    const datoFinal = DATOS[DATOS.length - 1];

    const factorInflacion = datoFinal.inflacionAcum / datoInicio.inflacionAcum;
    const valorHoyPesos = cantidad / factorInflacion;
    const perdidaPesos = cantidad - valorHoyPesos;
    const porcentajePerdido = ((perdidaPesos / cantidad) * 100).toFixed(1);

    const btcsComprados = (cantidad / 50) / datoInicio.precioBTC;
    const valorBTChoy = btcsComprados * datoFinal.precioBTC * 17;
    const gananciaMultiplo = (valorBTChoy / cantidad).toFixed(1);

    const fmt = (n) => n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

    return (
        <div className="bg-gray-900 border border-orange-500 border-opacity-40 p-6 my-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

            <p className="text-white font-black text-base mb-1 font-mono tracking-wide">💸 PESO VS BITCOIN</p>
            <p className="text-gray-300 text-sm mb-5">Descubre cuánto ha perdido tu dinero vs cuánto hubieras ganado</p>

            <div className="flex flex-col gap-4 mb-6">
                <div>
                    <label className="text-gray-200 text-sm font-bold mb-2 block">
                        ¿Cuántos pesos tenías ahorrados?
                    </label>
                    <input
                        type="number"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                        className="w-full bg-black border border-gray-600 focus:border-orange-500 text-white px-4 py-3 outline-none text-base"
                    />
                </div>
                <div>
                    <label className="text-gray-200 text-sm font-bold mb-2 block">
                        ¿Desde qué año?
                    </label>
                    <select
                        value={anioInicio}
                        onChange={e => setAnioInicio(Number(e.target.value))}
                        className="w-full bg-black border border-gray-600 focus:border-orange-500 text-white px-4 py-3 outline-none text-base"
                    >
                        {DATOS.slice(0, -1).map(d => (
                            <option key={d.año} value={d.año}>{d.año}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <div className="bg-red-950 border border-red-700 p-4">
                    <p className="text-red-300 text-sm font-bold mb-1">💀 Guardado en pesos</p>
                    <p className="text-white text-2xl font-black">{fmt(valorHoyPesos)}</p>
                    <p className="text-red-300 text-sm mt-1">
                        Perdiste {porcentajePerdido}% de tu poder adquisitivo
                    </p>
                </div>
                <div className="bg-green-950 border border-green-700 p-4">
                    <p className="text-green-300 text-sm font-bold mb-1">🚀 Guardado en Bitcoin</p>
                    <p className="text-white text-2xl font-black">{fmt(valorBTChoy)}</p>
                    <p className="text-green-300 text-sm mt-1">
                        Tu dinero se multiplicó ~{gananciaMultiplo}x
                    </p>
                </div>
            </div>

            <p className="text-gray-400 text-xs mt-4 text-center">
                Datos de inflación: Banxico · Precio BTC: CoinGecko · Tipo de cambio referencial: $17 MXN/USD
            </p>
        </div>
    );
}