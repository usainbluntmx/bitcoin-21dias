# Bitcoin en 21 Días ₿

App web educativa que enseña Bitcoin desde cero a mexicanos, en 21 lecciones de 5 minutos cada una.

## El problema que resuelve

La mayoría de los mexicanos no entiende Bitcoin porque los recursos existentes están en inglés, son demasiado técnicos, o están diseñados para otras audiencias. México tiene tres problemas financieros urgentes que Bitcoin puede resolver hoy:

- Una moneda que pierde valor cada año por la inflación
- $67 mil millones en remesas anuales que pierden entre 4% y 10% en comisiones
- 50 millones de adultos sin acceso a servicios bancarios

**Bitcoin en 21 Días** democratiza ese conocimiento usando el lenguaje y contexto que los mexicanos ya conocen.

---

## Funcionalidades

### 📚 21 Lecciones estructuradas
Divididas en 3 semanas con progresión natural:
- **Semana 1 — El Problema:** ¿Por qué existe Bitcoin?
- **Semana 2 — La Tecnología:** ¿Cómo funciona Bitcoin?
- **Semana 3 — El Impacto:** ¿Qué significa para ti?

### 🧠 Sistema de aprendizaje
- Quiz por lección: acertar suma **+15 pts**, equivocarse resta **-5 pts**
- El botón para avanzar solo aparece al aprobar el quiz
- Opción de reintentar si la respuesta es incorrecta
- Progreso guardado automáticamente en el dispositivo

### 📊 Calculadoras interactivas con datos reales
- **Calculadora de inflación:** compara el poder adquisitivo del peso vs Bitcoin desde 2015
- **Calculadora de remesas:** Western Union vs MoneyGram vs Banco vs Bitcoin (Lightning)
- **Calculadora DCA:** simula cuánto tendrías hoy si hubieras ahorrado una cantidad fija mensual

### 🤖 Chatbot con IA
- Asistente "Satoshi" powered by Claude API
- Responde dudas en español mexicano con analogías locales
- Solo responde preguntas relacionadas con Bitcoin y educación financiera
- Burbuja flotante y arrastrable en mobile

### 🎮 Gamificación
- Sistema de puntos acumulables
- 3 insignias (una por semana completada)
- Historial de lecciones completadas y errores cometidos
- Onboarding adaptativo: principiante o intermedio

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | React + Tailwind CSS |
| Autenticación / DB | Supabase |
| Chatbot IA | Anthropic Claude API |
| Deploy | Vercel |

---

## Estructura del proyecto
```
bitcoin-21dias/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── Quiz.js
│       │   ├── ProgressBar.js
│       │   ├── Chatbot.js
│       │   ├── CalculadoraInflacion.js
│       │   ├── CalculadoraRemesas.js
│       │   └── CalculadoraDCA.js
│       ├── context/
│       │   └── ProgressContext.js
│       ├── data/
│       │   └── lecciones.js
│       ├── pages/
│       │   ├── Onboarding.js
│       │   ├── Lecciones.js
│       │   ├── Leccion.js
│       │   └── Progreso.js
│       ├── supabase.js
│       └── App.js
└── README.md
```

---

## Instalación local

### Requisitos
- Node.js v18+
- Cuenta en [Anthropic Console](https://console.anthropic.com) para la API key

### Pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/usainbluntmx/bitcoin-21dias.git
cd bitcoin-21dias/frontend

# 2. Instalar dependencias
npm install

# 3. Crear archivo de variables de entorno
touch .env
```

Agrega esto a tu archivo `.env`:
```
REACT_APP_ANTHROPIC_API_KEY=tu_api_key_aqui
```
```bash
# 4. Levantar el servidor de desarrollo
npm start
```

La app estará disponible en `http://localhost:3000`

---

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `REACT_APP_ANTHROPIC_API_KEY` | API key de Anthropic para el chatbot |

---

## Fuentes de datos

| Dato | Fuente |
|------|--------|
| Inflación histórica MXN | Banco de México (Banxico) |
| Precios históricos BTC | CoinGecko |
| Tipo de cambio referencial | $17.20 MXN/USD |
| Remesas México 2023 | Banco de México |
| Población sin cuenta bancaria | INEGI — Encuesta Nacional de Inclusión Financiera |

---

## Demo

🔗 [bitcoin-21dias.vercel.app](https://bitcoin-21dias.vercel.app)

---

## Construido para

**Hackathon Bitcoin México** — 24 horas para construir herramientas que enseñen Bitcoin a México.

---

## Licencia

MIT