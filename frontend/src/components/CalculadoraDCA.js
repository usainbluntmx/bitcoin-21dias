import { useState } from "react";

const PRECIOS_BTC = {
    2015: { ene: 270, feb: 225, mar: 270, abr: 240, may: 235, jun: 260, jul: 280, ago: 265, sep: 235, oct: 270, nov: 330, dic: 430 },
    2016: { ene: 380, feb: 395, mar: 415, abr: 450, may: 535, jun: 680, jul: 630, ago: 575, sep: 605, oct: 640, nov: 700, dic: 950 },
    2017: { ene: 1000, feb: 1090, mar: 1250, abr: 1210, may: 1800, jun: 2550, jul: 2400, ago: 4300, sep: 4200, oct: 5500, nov: 9000, dic: 13800 },
    2018: { ene: 13000, feb: 8500, mar: 8200, abr: 9000, may: 8400, jun: 7600, jul: 7700, ago: 6500, sep: 6500, oct: 6500, nov: 5600, dic: 3800 },
    2019: { ene: 3600, feb: 3800, mar: 4000, abr: 5200, may: 8000, jun: 11000, jul: 9600, ago: 10300, sep: 8200, oct: 9300, nov: 8700, dic: 7200 },
    2020: { ene: 7200, feb: 9600, mar: 6400, abr: 7100, may: 9400, jun: 9100, jul: 9200, ago: 11600, sep: 10800, oct: 13000, nov: 19700, dic: 29000 },
    2021: { ene: 33000, feb: 45000, mar: 58000, abr: 57000, may: 37000, jun: 35000, jul: 41000, ago: 47000, sep: 43000, oct: 60000, nov: 57000, dic: 47000 },
    2022: { ene: 38000, feb: 39000, mar: 45000, abr: 40000, may: 31000, jun: 20000, jul: 23000, ago: 23000, sep: 19000, oct: 19000, nov: 16500, dic: 16500 },
    2023: { ene: 23000, feb: 24000, mar: 28000, abr: 29000, may: 27000, jun: 30000, jul: 29000, ago: 26000, sep: 27000, oct: 34000, nov: 37000, dic: 42000 },
    2024: { ene: 42000, feb: 52000, mar: 70000, abr: 65000, may: 67000, jun: 62000, jul: 66000, ago: 59000, sep: 63000, oct: 72000, nov: 91000, dic: 94000 },
};

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const PRECIO_ACTUAL = 94000;
const TIPO_CAMBIO = 17.2;

export default function CalculadoraDCA() {
    const [aporteMensual, setAporteMensual] = useState(500);
    const [anioInicio, setAnioInicio] = useState(2020);

    const calcularDCA = () => {
        let totalInvertidoUSD = 0;
        let totalBTC = 0;
        const años = Object.keys(PRECIOS_BTC).map(Number).filter(a => a >= anioInicio);
        años.forEach(año => {
            MESES.forEach(mes => {
                const precio = PRECIOS_BTC[año]?.[mes];
                if (!precio) return;
                const aportUSD = aporteMensual / TIPO_CAMBIO;
                totalInvertidoUSD += aportUSD;
                totalBTC += aportUSD / precio;
            });
        });
        const valorHoyUSD = totalBTC * PRECIO_ACTUAL;
        const valorHoyMXN = valorHoyUSD * TIPO_CAMBIO;
        const invertidoMXN = totalInvertidoUSD * TIPO_CAMBIO;
        const gananciaUSD = valorHoyUSD - totalInvertidoUSD;
        const multiplo = valorHoyUSD / totalInvertidoUSD;
        const mesesTotales = años.length * 12;
        return { invertidoMXN, valorHoyMXN, gananciaMXN: gananciaUSD * TIPO_CAMBIO, multiplo, totalBTC, mesesTotales };
    };

    const resultado = calcularDCA();

    const fmt = (n) => n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

    return (
        <div className="bg-gray-900 border border-orange-500 border-opacity-40 p-6 my-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

            <p className="text-white font-black text-base mb-1 font-mono tracking-wide">📈 CALCULADORA DCA</p>
            <p className="text-gray-300 text-sm mb-5">¿Qué pasaría si hubieras ahorrado una cantidad fija en Bitcoin cada mes?</p>

            <div className="flex flex-col gap-4 mb-6">
                <div>
                    <label className="text-gray-200 text-sm font-bold mb-2 block">
                        Ahorro mensual en pesos
                    </label>
                    <input
                        type="number"
                        value={aporteMensual}
                        onChange={e => setAporteMensual(Number(e.target.value))}
                        className="w-full bg-black border border-gray-600 focus:border-orange-500 text-white px-4 py-3 outline-none text-base"
                    />
                </div>
                <div>
                    <label className="text-gray-200 text-sm font-bold mb-2 block">
                        Desde el año
                    </label>
                    <select
                        value={anioInicio}
                        onChange={e => setAnioInicio(Number(e.target.value))}
                        className="w-full bg-black border border-gray-600 focus:border-orange-500 text-white px-4 py-3 outline-none text-base"
                    >
                        {Object.keys(PRECIOS_BTC).slice(0, -1).map(año => (
                            <option key={año} value={año}>{año}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-black border border-gray-700 p-4">
                    <p className="text-gray-300 text-xs font-bold mb-1">Total invertido</p>
                    <p className="text-white font-black text-lg">{fmt(resultado.invertidoMXN)}</p>
                    <p className="text-gray-300 text-xs mt-1">{resultado.mesesTotales} meses</p>
                </div>
                <div className="bg-green-950 border border-green-700 p-4">
                    <p className="text-green-300 text-xs font-bold mb-1">Valor hoy</p>
                    <p className="text-white font-black text-lg">{fmt(resultado.valorHoyMXN)}</p>
                    <p className="text-green-300 text-xs mt-1">~{resultado.multiplo.toFixed(1)}x tu dinero</p>
                </div>
            </div>

            <div className="bg-orange-950 border border-orange-700 p-4 mb-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-orange-300 text-xs font-bold mb-1">Ganancia total</p>
                        <p className="text-white font-black text-2xl">{fmt(resultado.gananciaMXN)}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-orange-300 text-xs font-bold mb-1">Bitcoin acumulado</p>
                        <p className="text-white font-black text-lg">{resultado.totalBTC.toFixed(6)} BTC</p>
                    </div>
                </div>
            </div>

            <div className="bg-black border border-gray-700 p-4">
                <p className="text-gray-200 text-sm text-center">
                    Ahorrando solo{" "}
                    <span className="text-orange-400 font-black">{fmt(aporteMensual)} al mes</span>
                    {" "}desde {anioInicio}, hoy tendrías{" "}
                    <span className="text-green-400 font-black">{fmt(resultado.valorHoyMXN)}</span>
                </p>
            </div>

            <p className="text-gray-400 text-xs mt-3 text-center">
                Precios históricos: CoinGecko · Tipo de cambio: $17.20 MXN/USD · Resultados pasados no garantizan rendimientos futuros
            </p>
        </div>
    );
}