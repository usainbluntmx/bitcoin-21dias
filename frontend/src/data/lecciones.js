export const lecciones = [
    // ==================== SEMANA 1 ====================
    {
        id: 1,
        semana: 1,
        titulo: "El dinero que usas está roto",
        duracion: "5 min",
        concepto: "Inflación y devaluación del peso",
        contenido: `En 2000, con $100 pesos podías llenar el carrito del super. Hoy, con esos mismos $100 pesos te alcanza para... poco más que unos tacos y un refresco. ¿Qué pasó? La respuesta se llama inflación, y es el enemigo silencioso de tu dinero.

El Banco de México (Banxico) puede imprimir más pesos cuando quiere. Más pesos en circulación = cada peso vale menos. Es como si de repente hubiera el doble de tacos en la taquería, el precio bajaría. Con el dinero pasa al revés: más dinero = menos valor por cada billete.

Bitcoin fue diseñado para ser exactamente lo opuesto: nadie puede imprimir más. Jamás habrá más de 21 millones de bitcoins. Es matemáticamente imposible.`,
        analogia: "Imagina que tu taquero de repente decide que todos los tacos valen el doble porque imprimió más menús. Eso es exactamente lo que hace el gobierno con el dinero.",
        conceptoClave: "La inflación es el impuesto invisible que nadie te explica.",
        tipo: "calculadora",
        quiz: {
            pregunta: "¿Quién controla cuántos pesos existen en México?",
            opciones: ["El presidente", "El Banco de México (Banxico)", "Los bancos privados", "Nadie los controla"],
            respuestaCorrecta: 1,
            explicacion: "El Banco de México (Banxico) es el banco central y tiene el poder exclusivo de emitir pesos. Puede aumentar la cantidad de dinero en circulación, lo que genera inflación."
        }
    },
    {
        id: 2,
        semana: 1,
        titulo: "¿Quién controla tu dinero?",
        duracion: "5 min",
        concepto: "Bancos centrales y el sistema financiero",
        contenido: `Cuando depositas tu sueldo en el banco, ¿ese dinero es tuyo? Técnicamente sí, pero en la práctica el banco puede congelarte la cuenta, limitarte los retiros, o simplemente cerrar. Te ha pasado o conoces a alguien a quien le pasó, ¿verdad?

El sistema financiero tradicional funciona así: tú confías tu dinero a un banco, el banco confía en Banxico, Banxico responde ante el gobierno. Es una cadena de confianza donde tú estás hasta abajo.

Bitcoin elimina esa cadena completamente. No hay banco, no hay Banxico, no hay gobierno en medio. Tú tienes tus bitcoins directamente, como tener billetes físicos pero en digital y sin que nadie te los pueda quitar.`,
        analogia: "Tener dinero en el banco es como guardar tu ropa en la tintorería. Es tuya, pero ellos deciden cuándo te la dan.",
        conceptoClave: "Bitcoin es el primer dinero en la historia donde tú eres tu propio banco.",
        tipo: "quiz",
        quiz: {
            pregunta: "Si el banco quiebra, ¿qué pasa con tu dinero depositado en México?",
            opciones: [
                "Lo pierdes todo inmediatamente",
                "El IPAB protege hasta 3 millones de UDIS por persona",
                "El gobierno te devuelve el doble",
                "Nada, está 100% seguro siempre"
            ],
            respuestaCorrecta: 1,
            explicacion: "El IPAB (Instituto para la Protección al Ahorro Bancario) protege tus depósitos hasta 3 millones de UDIS (~$1.9 millones de pesos). Lo que exceda ese monto está en riesgo si el banco quiebra."
        }
    },
    {
        id: 3,
        semana: 1,
        titulo: "La tanda digital",
        duracion: "5 min",
        concepto: "Transacciones P2P (peer-to-peer)",
        contenido: `Todos conocemos las tandas. Un grupo de personas se juntan, cada quien aporta una cantidad fija cada semana, y por turnos cada persona recibe el pozo completo. Funciona porque todos confían en el organizador.

Pero, ¿qué pasa si el organizador se roba el dinero? Pasa. Todo el tiempo. La tanda tradicional requiere confianza en una persona central.

Bitcoin funciona como una tanda donde no necesitas confiar en nadie en específico. Cuando envías bitcoin a alguien, la transacción va directo de ti a esa persona (peer-to-peer) sin que ningún banco o intermediario toque tu dinero. La red entera de computadoras verifica que la transacción es legítima.`,
        analogia: "Es como una tanda donde en vez de que el organizador guarde el dinero, hay 10,000 personas viendo y verificando cada movimiento al mismo tiempo.",
        conceptoClave: "P2P significa de persona a persona, sin intermediarios. Bitcoin fue la primera forma de dinero digital verdaderamente P2P.",
        tipo: "simulador",
        quiz: {
            pregunta: "¿Qué significa P2P en el contexto de Bitcoin?",
            opciones: [
                "Pesos a Pesos",
                "De persona a persona, sin intermediarios",
                "Un tipo de wallet especial",
                "El nombre del creador de Bitcoin"
            ],
            respuestaCorrecta: 1,
            explicacion: "P2P (peer-to-peer) significa que las transacciones van directamente de una persona a otra, sin que ningún banco, empresa o gobierno esté en medio procesando o autorizando el pago."
        }
    },
    {
        id: 4,
        semana: 1,
        titulo: "El libro de cuentas gigante",
        duracion: "5 min",
        concepto: "Qué es la blockchain",
        contenido: `Imagina un cuaderno donde se anota cada transacción de dinero que ocurre en el mundo. Cada vez que alguien envía bitcoin, se anota en ese cuaderno. Hasta ahí suena normal, ¿verdad?

Lo extraordinario es que ese cuaderno no existe en un solo lugar. Existe en más de 50,000 computadoras alrededor del mundo al mismo tiempo. Cada computadora tiene una copia idéntica y actualizada.

Eso es la blockchain: una cadena de bloques donde cada bloque contiene un grupo de transacciones. Cada bloque está matemáticamente conectado al anterior, formando una cadena imposible de alterar. Para cambiar una transacción del pasado tendrías que cambiarla en las 50,000 copias simultáneamente. Es prácticamente imposible.`,
        analogia: "Es como si el acta de tu nacimiento no existiera solo en el Registro Civil, sino que 50,000 personas tuvieran una copia idéntica en su casa. Para falsificarla tendrías que entrar a las 50,000 casas al mismo tiempo.",
        conceptoClave: "La blockchain es un registro público, permanente e inmutable de todas las transacciones de Bitcoin.",
        tipo: "quiz",
        quiz: {
            pregunta: "¿Por qué es casi imposible hacer trampa o falsificar transacciones en Bitcoin?",
            opciones: [
                "Porque hay policías digitales vigilando",
                "Porque la información existe en miles de computadoras simultáneamente",
                "Porque Bitcoin está encriptado con contraseña secreta",
                "Porque el gobierno lo protege"
            ],
            respuestaCorrecta: 1,
            explicacion: "La blockchain existe en miles de nodos (computadoras) al mismo tiempo. Para alterar una transacción tendrías que modificarla en más del 51% de todos los nodos simultáneamente, lo cual requeriría una cantidad absurda de energía y recursos."
        }
    },
    {
        id: 5,
        semana: 1,
        titulo: "¿Quién inventó esto?",
        duracion: "5 min",
        concepto: "Historia de Satoshi Nakamoto",
        contenido: `En octubre de 2008, en plena crisis financiera global, alguien publicó un documento de 9 páginas en internet. El autor se identificó como Satoshi Nakamoto. Ese documento, conocido como el whitepaper de Bitcoin, describía exactamente cómo crear un sistema de dinero electrónico sin necesidad de bancos.

En enero de 2009 lanzó el software. El primer bloque de Bitcoin, llamado el bloque génesis, contenía un mensaje escondido: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks." Un titular de periódico inglés sobre el rescate bancario. Un mensaje claro sobre por qué Bitcoin existía.

Lo más increíble: nadie sabe quién es Satoshi Nakamoto. Podría ser una persona o un grupo. En 2010 desapareció para siempre, dejando el proyecto en manos de la comunidad. Nunca tocó sus bitcoins, que hoy valen miles de millones de dólares.`,
        analogia: "Imagina que alguien inventa el internet, lo regala al mundo gratis, y luego desaparece sin llevarse nada. Eso hizo Satoshi.",
        conceptoClave: "Bitcoin es el único dinero en la historia creado por alguien anónimo, regalado al mundo, sin empresa detrás ni dueño conocido.",
        tipo: "quiz",
        quiz: {
            pregunta: "¿Qué es el whitepaper de Bitcoin?",
            opciones: [
                "El contrato legal de Bitcoin",
                "El documento original de 9 páginas que describe cómo funciona Bitcoin",
                "El manual de usuario para comprar Bitcoin",
                "Un reporte del gobierno sobre criptomonedas"
            ],
            respuestaCorrecta: 1,
            explicacion: "El whitepaper 'Bitcoin: A Peer-to-Peer Electronic Cash System' publicado por Satoshi Nakamoto el 31 de octubre de 2008 es el documento fundacional que describe el diseño técnico y filosófico de Bitcoin. Puedes leerlo en bitcoin.org/bitcoin.pdf"
        }
    },
    {
        id: 6,
        semana: 1,
        titulo: "Las 21 millones de razones",
        duracion: "5 min",
        concepto: "Escasez digital y el halving",
        contenido: `El oro es valioso en parte porque hay poco. No puedes fabricar oro de la nada. Bitcoin tiene esa misma propiedad pero garantizada matemáticamente: jamás existirán más de 21 millones de bitcoins. Está escrito en el código y ninguna persona, empresa o gobierno puede cambiarlo.

Actualmente ya se han minado alrededor de 19.7 millones. Los últimos bitcoins se minarán aproximadamente en el año 2140.

Cada 4 años aproximadamente ocurre algo llamado el halving: la cantidad de bitcoins nuevos que se crean se reduce a la mitad. Esto hace que Bitcoin sea cada vez más escaso con el tiempo. El último halving fue en abril de 2024.`,
        analogia: "Imagina que el tequila más fino del mundo tiene una producción máxima de 21 millones de botellas para siempre. Cada año se producen menos botellas nuevas. ¿Qué crees que pasa con el precio?",
        conceptoClave: "21 millones es el límite absoluto de Bitcoin. La escasez programada es una de sus propiedades más poderosas.",
        tipo: "calculadora",
        quiz: {
            pregunta: "¿Qué es el halving de Bitcoin?",
            opciones: [
                "Cuando el precio de Bitcoin se divide a la mitad",
                "Cuando la recompensa por minar nuevos bloques se reduce a la mitad",
                "Cuando se hackea la mitad de los bitcoins",
                "Un impuesto del 50% sobre Bitcoin"
            ],
            respuestaCorrecta: 1,
            explicacion: "El halving ocurre aproximadamente cada 4 años (cada 210,000 bloques) y reduce a la mitad la cantidad de bitcoins nuevos que reciben los mineros como recompensa. Esto hace que el ritmo de creación de nuevos bitcoins disminuya progresivamente hasta llegar a cero."
        }
    },
    {
        id: 7,
        semana: 1,
        titulo: "Repaso Semana 1",
        duracion: "10 min",
        concepto: "Consolidación: El Problema y la Solución",
        contenido: `Llegaste al final de la primera semana. Ya sabes más de Bitcoin que el 95% de los mexicanos. Hagamos un repaso rápido de lo que aprendiste:

1. El peso pierde valor cada año por la inflación. Bitcoin tiene oferta fija.
2. Los bancos controlan tu dinero. Bitcoin te hace tu propio banco.
3. Las transacciones P2P van directo de persona a persona, sin intermediarios.
4. La blockchain es un registro público en miles de computadoras.
5. Satoshi Nakamoto creó Bitcoin en 2008 y lo regaló al mundo.
6. Solo existirán 21 millones de bitcoins. El halving hace que sea cada vez más escaso.

La semana que viene entramos a la tecnología: cómo funciona de verdad por dentro.`,
        analogia: "Ya tienes el mapa. La semana 2 es cuando aprendes a leerlo.",
        conceptoClave: "Bitcoin resuelve el problema del dinero controlado: es escaso, descentralizado y tuyo.",
        tipo: "repaso",
        quiz: {
            pregunta: "¿Cuántos bitcoins existirán como máximo?",
            opciones: ["1 millón", "10 millones", "21 millones", "Ilimitados"],
            respuestaCorrecta: 2,
            explicacion: "El protocolo de Bitcoin establece un límite absoluto de 21 millones de bitcoins. Este límite está escrito en el código y es inmutable. Es una de las propiedades fundamentales que le da valor como reserva de valor."
        }
    },

    // ==================== SEMANA 2 ====================
    {
        id: 8,
        semana: 2,
        titulo: "Tu llave, tu Bitcoin",
        duracion: "5 min",
        concepto: "Wallets, llaves públicas y privadas",
        contenido: `Una wallet de Bitcoin no guarda bitcoins como una cartera guarda billetes. Los bitcoins siempre están en la blockchain. Lo que guarda tu wallet es algo más importante: tus llaves.

Tienes dos tipos de llave. La llave pública es como tu número de cuenta: puedes compartirla con cualquiera para recibir pagos. La llave privada es como tu NIP, pero mucho más importante: quien tiene tu llave privada tiene tus bitcoins. Sin excepción.

Aquí está la regla de oro que debes tatuar en tu mente: "Not your keys, not your coins." Si tus bitcoins están en un exchange (como Binance o Coinbase), ellos tienen las llaves privadas, no tú. Técnicamente no son tus bitcoins hasta que los retiras a tu propia wallet.`,
        analogia: "La llave pública es tu dirección de casa: cualquiera puede enviarte cosas ahí. La llave privada es la llave de tu casa: jamás se la des a nadie.",
        conceptoClave: "Not your keys, not your coins. La custodia propia es el núcleo de Bitcoin.",
        tipo: "simulador",
        quiz: {
            pregunta: "¿Qué pasa si pierdes tu llave privada de Bitcoin?",
            opciones: [
                "Puedes recuperarla llamando al soporte de Bitcoin",
                "El gobierno puede ayudarte a recuperarla",
                "Pierdes acceso a tus bitcoins para siempre",
                "Se transfieren automáticamente a tu email"
            ],
            respuestaCorrecta: 2,
            explicacion: "No existe soporte técnico ni autoridad central en Bitcoin. Si pierdes tu llave privada (o tu frase semilla), pierdes acceso a tus bitcoins permanentemente. Se estima que entre 3 y 4 millones de bitcoins están perdidos para siempre por esta razón."
        }
    },
    {
        id: 9,
        semana: 2,
        titulo: "El juego de las computadoras",
        duracion: "5 min",
        concepto: "Mining y Proof of Work",
        contenido: `¿Quién decide qué transacciones son válidas en Bitcoin si no hay banco central? Las computadoras mineras. Y lo hacen compitiendo en un juego matemático.

Cada ~10 minutos, miles de computadoras alrededor del mundo compiten para resolver un problema matemático muy difícil. La primera en resolverlo gana el derecho de agregar el siguiente bloque de transacciones a la blockchain y recibe bitcoins nuevos como recompensa. Eso es minar bitcoin.

Este proceso se llama Proof of Work (prueba de trabajo) porque para ganar tienes que demostrar que tu computadora gastó energía real resolviendo el problema. Es imposible hacer trampa porque no puedes fingir el trabajo: la matemática no miente.`,
        analogia: "Es como un concurso donde miles de personas calculan mentalmente operaciones matemáticas gigantes al mismo tiempo. El primero que llega a la respuesta correcta gana. No puedes copiar porque todos tienen problemas distintos.",
        conceptoClave: "El mining es el proceso que valida transacciones y crea nuevos bitcoins. Es descentralizado y requiere energía real.",
        tipo: "quiz",
        quiz: {
            pregunta: "¿Cada cuánto tiempo aproximadamente se agrega un nuevo bloque a la blockchain de Bitcoin?",
            opciones: ["Cada segundo", "Cada minuto", "Cada 10 minutos", "Cada hora"],
            respuestaCorrecta: 2,
            explicacion: "Bitcoin está diseñado para agregar un nuevo bloque aproximadamente cada 10 minutos. El protocolo ajusta automáticamente la dificultad del problema matemático para mantener ese ritmo, sin importar cuántas computadoras estén minando."
        }
    },
    {
        id: 10,
        semana: 2,
        titulo: "Nodos: los vigilantes",
        duracion: "5 min",
        concepto: "Descentralización y consenso",
        contenido: `Los mineros crean bloques, pero los nodos son los que los validan. Un nodo es simplemente una computadora que tiene una copia completa de toda la blockchain y verifica que todas las reglas de Bitcoin se cumplan.

Hoy hay más de 50,000 nodos activos alrededor del mundo. Cualquier persona puede correr uno en su computadora o incluso en una Raspberry Pi. Nadie los controla, nadie los paga, lo hacen voluntariamente porque quieren que Bitcoin funcione.

Esta red descentralizada de nodos es lo que hace que Bitcoin sea imposible de apagar. Para detener Bitcoin tendrías que apagar simultáneamente más de la mitad de las computadoras en todo el mundo. Ningún gobierno, empresa o persona tiene ese poder.`,
        analogia: "Imagina 50,000 árbitros en un partido de fútbol, cada uno con su propio reglamento. Para hacer trampa tendrías que convencer a más de 25,000 árbitros al mismo tiempo. Imposible.",
        conceptoClave: "Los nodos son los guardianes de Bitcoin. Su distribución global hace la red imposible de censurar o apagar.",
        tipo: "quiz",
        quiz: {
            pregunta: "¿Qué pasaría con Bitcoin si el gobierno mexicano decidiera prohibirlo?",
            opciones: [
                "Bitcoin dejaría de funcionar en México y el mundo",
                "Solo dejaría de funcionar en México temporalmente",
                "No podría detener Bitcoin porque los nodos están en todo el mundo",
                "Bitcoin se mudaría a otro país automáticamente"
            ],
            respuestaCorrecta: 2,
            explicacion: "Bitcoin opera en una red global de nodos distribuidos en decenas de países. Ningún gobierno puede apagarlo unilateralmente. China lo 'prohibió' en 2021 y Bitcoin siguió funcionando perfectamente. Lo que los gobiernos pueden regular es su uso dentro de sus fronteras, no el protocolo en sí."
        }
    },
    {
        id: 11,
        semana: 2,
        titulo: "Lightning: el turbo de Bitcoin",
        duracion: "5 min",
        concepto: "Lightning Network y pagos instantáneos",
        contenido: `Bitcoin base es como una autopista de 8 carriles muy segura pero con casetas. Procesa ~7 transacciones por segundo. Visa procesa ~24,000. Para pagos cotidianos (comprar un café, pagar el camión), necesitabas algo más rápido.

En 2018 nació Lightning Network: una segunda capa construida sobre Bitcoin. Funciona abriendo un "canal de pago" entre dos personas. Dentro del canal puedes hacer miles de transacciones instantáneas y casi gratis. Solo cuando cierras el canal se registra el resultado final en la blockchain.

El Salvador usa Lightning Network para pagos cotidianos desde 2021. Apps como Strike, Wallet of Satoshi o Muun permiten pagar con Bitcoin vía Lightning en segundos, con comisiones de fracciones de centavo.`,
        analogia: "Bitcoin base es transferir dinero en efectivo con un notario. Lightning es abrir una cuenta con tu taquero de confianza: pagas al final de la semana y él anota todo en su libreta. Rápido, barato, y al final se 'liquida' en la blockchain.",
        conceptoClave: "Lightning Network resuelve el problema de escalabilidad de Bitcoin: pagos instantáneos y casi sin costo.",
        tipo: "simulador",
        quiz: {
            pregunta: "¿Cuál es la principal ventaja de Lightning Network sobre Bitcoin base?",
            opciones: [
                "Es más seguro que Bitcoin",
                "Permite pagos instantáneos con comisiones mínimas",
                "Crea nuevos bitcoins más rápido",
                "Es controlado por una empresa central"
            ],
            respuestaCorrecta: 1,
            explicacion: "Lightning Network permite realizar miles de transacciones por segundo de forma instantánea y con comisiones de fracciones de centavo, resolviendo el problema de escalabilidad de Bitcoin para pagos cotidianos. Es ideal para micropagos y transacciones frecuentes."
        }
    },
    {
        id: 12,
        semana: 2,
        titulo: "¿Es seguro?",
        duracion: "5 min",
        concepto: "Criptografía y seguridad de Bitcoin",
        contenido: `Bitcoin usa criptografía de curva elíptica (ECDSA) para proteger las transacciones. Suena complicado, pero la idea es simple: crear problemas matemáticos tan difíciles que ni la computadora más poderosa del mundo podría resolverlos en millones de años.

Tu llave privada tiene 256 bits. Eso significa que hay 2^256 combinaciones posibles. Para darte contexto: hay más combinaciones posibles que átomos en el universo observable. Adivinar tu llave privada por fuerza bruta es literalmente imposible.

La blockchain nunca ha sido hackeada. Los hackeos que escuchas en las noticias son siempre a exchanges (empresas que guardan bitcoin de otros), no al protocolo de Bitcoin en sí.`,
        analogia: "Hackear Bitcoin sería como intentar adivinar el PIN de 78 dígitos de alguien probando combinaciones una por una. Si probaras un millón de combinaciones por segundo, tardarías más tiempo del que existe el universo.",
        conceptoClave: "El protocolo de Bitcoin nunca ha sido hackeado. Los hackeos ocurren en empresas que custodian bitcoin, no en Bitcoin mismo.",
        tipo: "quiz",
        quiz: {
            pregunta: "Cuando escuchas que 'hackearon Bitcoin', ¿qué es lo que realmente fue hackeado?",
            opciones: [
                "El protocolo central de Bitcoin",
                "La blockchain de Bitcoin",
                "Un exchange o empresa que custodiaba bitcoins de usuarios",
                "Las wallets de todos los usuarios"
            ],
            respuestaCorrecta: 2,
            explicacion: "El protocolo de Bitcoin nunca ha sido comprometido. Los 'hackeos de Bitcoin' que aparecen en noticias son siempre ataques a exchanges centralizados (como Mt. Gox en 2014 o FTX en 2022), que son empresas privadas que custodian bitcoin. Por eso es importante: not your keys, not your coins."
        }
    },
    {
        id: 13,
        semana: 2,
        titulo: "Bitcoin vs el resto",
        duracion: "5 min",
        concepto: "BTC vs altcoins vs stablecoins",
        contenido: `Existen miles de criptomonedas. ¿Por qué Bitcoin es diferente? Tres razones principales.

Primero, descentralización real. Bitcoin es la única criptomoneda donde literalmente nadie está a cargo. Ethereum tiene una fundación, Ripple tiene una empresa, Dogecoin fue un meme. Bitcoin no tiene CEO, oficinas ni empresa detrás.

Segundo, el efecto de red. Bitcoin lleva 15 años funcionando sin interrupciones. Es el más probado, el más líquido y el más conocido. Es el oro digital por el mismo efecto que el oro físico: todos confían en él porque todos confían en él.

Tercero, el límite de 21 millones es inviolable. Muchas altcoins tienen emisión infinita o pueden ser modificadas por sus creadores. Las stablecoins (USDT, USDC) están respaldadas por dólares, lo que significa que siguen dependiendo del sistema que Bitcoin quiere reemplazar.`,
        analogia: "Bitcoin es el oro. Las altcoins son como otros metales o commodities. Las stablecoins son dólares digitales. Son cosas distintas para propósitos distintos, pero Bitcoin es el único diseñado para ser dinero soberano.",
        conceptoClave: "Bitcoin es único por su descentralización real, su historial probado y su oferta fija inmutable.",
        tipo: "quiz",
        quiz: {
            pregunta: "¿Cuál es la principal diferencia entre Bitcoin y una stablecoin como USDT?",
            opciones: [
                "Bitcoin es más rápido que USDT",
                "USDT está respaldado por dólares y depende del sistema financiero tradicional",
                "Bitcoin fue creado antes que USDT",
                "No hay diferencia importante entre ellos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las stablecoins como USDT (Tether) o USDC están respaldadas por dólares u otros activos tradicionales, lo que significa que dependen del sistema financiero que Bitcoin busca complementar o reemplazar. Su valor está ligado al dólar y son emitidas por empresas privadas que pueden censurar transacciones."
        }
    },
    {
        id: 14,
        semana: 2,
        titulo: "Repaso Semana 2",
        duracion: "10 min",
        concepto: "Consolidación: La Tecnología",
        contenido: `¡Semana 2 completada! Ahora entiendes cómo funciona Bitcoin por dentro. Repaso rápido:

1. Las wallets guardan tus llaves, no tus bitcoins. La llave privada es todo.
2. Los mineros compiten para agregar bloques mediante Proof of Work.
3. Los nodos validan y guardan copias de toda la blockchain.
4. Lightning Network permite pagos instantáneos y casi gratuitos.
5. La criptografía de Bitcoin es matemáticamente inquebrantable.
6. Bitcoin es único: ninguna otra cripto tiene su nivel de descentralización y prueba en el tiempo.

La semana 3 es la más importante para ti: cómo Bitcoin te afecta directamente como mexicano y cómo empezar.`,
        analogia: "Ya sabes cómo funciona el motor. La semana 3 es aprender a manejar.",
        conceptoClave: "Bitcoin es un sistema completo: mineros, nodos, wallets y Lightning trabajan juntos sin que nadie esté a cargo.",
        tipo: "repaso",
        quiz: {
            pregunta: "¿Qué significa 'not your keys, not your coins'?",
            opciones: [
                "Debes guardar tus bitcoins en efectivo",
                "Si no controlas tus llaves privadas, no controlas realmente tus bitcoins",
                "Bitcoin no funciona sin internet",
                "Solo puedes tener bitcoin si eres programador"
            ],
            respuestaCorrecta: 1,
            explicacion: "Esta frase resume el principio más importante de Bitcoin: si tus bitcoins están en un exchange u otro servicio de custodia, técnicamente ellos tienen las llaves privadas y por lo tanto el control de tus bitcoins. Para tener soberanía financiera real necesitas tu propia wallet con tus propias llaves."
        }
    },

    // ==================== SEMANA 3 ====================
    {
        id: 15,
        semana: 3,
        titulo: "Las remesas sin banco",
        duracion: "5 min",
        concepto: "Bitcoin y las remesas en México",
        contenido: `México recibió más de $67 mil millones de dólares en remesas en 2023, convirtiéndose en el segundo receptor de remesas del mundo. La mayoría de ese dinero viene de mexicanos trabajando en Estados Unidos enviando dinero a sus familias.

El problema: Western Union, MoneyGram y los bancos cobran entre 5% y 10% de comisión. En $67 mil millones, eso son entre $3 y $6 mil millones de dólares que se quedan en comisiones cada año. Dinero que podría quedarse en familias mexicanas.

Con Bitcoin y Lightning Network, enviar $500 dólares de Texas a Oaxaca cuesta menos de $1 dólar y llega en segundos. Empresas como Strike ya permiten hacer esto hoy. Es uno de los casos de uso más poderosos y urgentes de Bitcoin para México.`,
        analogia: "Imagina que cada vez que tu familiar en EE.UU. te manda dinero, alguien en el camino se queda con $50 de cada $500. Eso es exactamente lo que hacen las empresas de remesas. Bitcoin elimina a ese intermediario.",
        conceptoClave: "Bitcoin puede ahorrarle a las familias mexicanas miles de millones de pesos al año en comisiones de remesas.",
        tipo: "calculadora",
        quiz: {
            pregunta: "¿Cuánto recibió México en remesas en 2023 aproximadamente?",
            opciones: ["$10 mil millones USD", "$67 mil millones USD", "$200 mil millones USD", "$5 mil millones USD"],
            respuestaCorrecta: 1,
            explicacion: "Según el Banco de México, México recibió $67.17 mil millones de dólares en remesas en 2023, siendo el segundo país receptor de remesas en el mundo después de India. Las remesas representan más del 3.6% del PIB mexicano y son una fuente vital de ingreso para millones de familias."
        }
    },
    {
        id: 16,
        semana: 3,
        titulo: "El banco en tu bolsillo",
        duracion: "5 min",
        concepto: "Inclusión financiera en México",
        contenido: `Según el INEGI, el 49% de los mexicanos mayores de 18 años no tiene cuenta bancaria. Casi 50 millones de personas sin acceso al sistema financiero formal. Sin cuenta no puedes ahorrar de forma segura, recibir pagos digitales, acceder a crédito o construir historial crediticio.

¿Por qué no tienen cuenta? Las razones principales son: no reúnen los requisitos del banco, viven lejos de una sucursal, desconfían de las instituciones o simplemente los costos son muy altos.

Bitcoin no te pide identificación, comprobante de domicilio, historial crediticio ni que vayas a una sucursal. Solo necesitas un smartphone y internet para tener acceso a un sistema financiero global. Para los 50 millones de mexicanos sin banco, Bitcoin puede ser su primera cuenta financiera.`,
        analogia: "Bitcoin es como tener un banco en tu bolsillo que nunca cierra, no te cobra comisión por existir, no te pide papeles y funciona igual si vives en Polanco o en una comunidad rural de Oaxaca.",
        conceptoClave: "Bitcoin puede ser la herramienta de inclusión financiera más poderosa para los millones de mexicanos no bancarizados.",
        tipo: "quiz",
        quiz: {
            pregunta: "¿Qué porcentaje aproximado de mexicanos adultos no tiene cuenta bancaria según el INEGI?",
            opciones: ["15%", "30%", "49%", "70%"],
            respuestaCorrecta: 2,
            explicacion: "Según datos del INEGI y la Encuesta Nacional de Inclusión Financiera (ENIF), aproximadamente el 49% de los adultos mexicanos no tiene acceso a servicios financieros formales. Esto representa cerca de 50 millones de personas que podrían beneficiarse de alternativas como Bitcoin."
        }
    },
    {
        id: 17,
        semana: 3,
        titulo: "¿Cuándo compro?",
        duracion: "5 min",
        concepto: "DCA, volatilidad y largo plazo",
        contenido: `Bitcoin es volátil. En 2022 cayó 75% desde su máximo. En 2020 cayó 50% en un día. Si compraste en el peor momento de cada ciclo y vendiste en el pánico, perdiste dinero. Pero si compraste y mantuviste cualquier período de 4 años o más en la historia de Bitcoin, siempre ganaste.

La estrategia más inteligente para la mayoría de las personas se llama DCA: Dollar Cost Averaging, o "compra constante". En vez de intentar adivinar el mejor momento para comprar todo de golpe, compras una cantidad fija cada semana o mes, sin importar el precio.

Si hubieras comprado $100 pesos de Bitcoin cada semana desde enero de 2020, hoy tendrías una ganancia considerable, habiendo pasado por dos mercados bajistas sin estresarte. El DCA elimina el estrés de intentar predecir el mercado.`,
        analogia: "El DCA es como una tanda forzada contigo mismo. Cada semana metes $100 pesos, sin pensar si 'es buen momento'. Al final del año te sorprenderás.",
        conceptoClave: "DCA (compra constante) es la estrategia más probada para acumular Bitcoin sin estresarse por la volatilidad.",
        tipo: "calculadora",
        quiz: {
            pregunta: "¿Qué es el DCA (Dollar Cost Averaging)?",
            opciones: [
                "Comprar todo Bitcoin de golpe cuando el precio está bajo",
                "Vender Bitcoin cuando el precio sube 10%",
                "Invertir una cantidad fija a intervalos regulares, sin importar el precio",
                "Una estrategia solo para traders profesionales"
            ],
            respuestaCorrecta: 2,
            explicacion: "El DCA consiste en invertir una cantidad fija (por ejemplo $100 pesos) a intervalos regulares (cada semana o mes) sin importar el precio actual. Esta estrategia elimina el riesgo de comprar todo en el peor momento y reduce el impacto de la volatilidad a largo plazo."
        }
    },
    {
        id: 18,
        semana: 3,
        titulo: "Bitcoin como reserva de valor",
        duracion: "5 min",
        concepto: "Adopción institucional y por países",
        contenido: `Algo cambió en 2020. Las empresas e instituciones empezaron a comprar Bitcoin no para especular, sino como reserva de valor, igual que hacían con el oro. MicroStrategy tiene más de 200,000 bitcoins en su balance. Tesla compró $1.5 mil millones. BlackRock, el mayor gestor de activos del mundo, lanzó un ETF de Bitcoin en 2024.

A nivel de países, El Salvador adoptó Bitcoin como moneda de curso legal en 2021. En 2024, varios estados de EE.UU. aprobaron leyes para mantener Bitcoin en sus reservas.

Este cambio es importante: Bitcoin ya no es solo el dinero de los cypherpunks y los techies. Se está convirtiendo en un activo de reserva legítimo que los más grandes inversores institucionales del mundo están adoptando.`,
        analogia: "Antes Bitcoin era como un restaurante de nicho que solo conocían los foodies. Ahora McDonald's, el OXXO y el Walmart quieren entrar al negocio. Eso cambia todo.",
        conceptoClave: "La adopción institucional de Bitcoin valida su papel como reserva de valor a largo plazo.",
        tipo: "quiz",
        quiz: {
            pregunta: "¿Qué país adoptó Bitcoin como moneda de curso legal en 2021?",
            opciones: ["México", "El Salvador", "Argentina", "Estados Unidos"],
            respuestaCorrecta: 1,
            explicacion: "El Salvador se convirtió en el primer país del mundo en adoptar Bitcoin como moneda de curso legal el 7 de septiembre de 2021. Los ciudadanos pueden usar Bitcoin para pagar cualquier bien o servicio y el gobierno creó la wallet Chivo para facilitar su uso."
        }
    },
    {
        id: 19,
        semana: 3,
        titulo: "Los riesgos reales",
        duracion: "5 min",
        concepto: "Scams, volatilidad y regulación",
        contenido: `Bitcoin es real y tiene valor. Pero el espacio cripto está lleno de estafas. Es importante saber distinguirlas.

Las señales de alerta más comunes: te prometen rendimientos garantizados (Bitcoin no garantiza nada), te piden que recrutes a otras personas para ganar más (esquema Ponzi/pirámide), alguien famoso "recomienda" un proyecto en redes sociales (casi siempre son cuentas hackeadas o pagadas), y te presionan a decidir rápido.

Bitcoin tampoco está exento de riesgos reales: la volatilidad es extrema (puede caer 80%), los gobiernos pueden regularlo de formas que afecten su uso, y si pierdes tus llaves privadas, no hay recuperación posible.

La regla más importante: invierte solo lo que estés dispuesto a perder completamente. Bitcoin es una apuesta asimétrica de alto riesgo y alto potencial, no un sustituto de tu fondo de emergencia.`,
        analogia: "Bitcoin es como aprender a manejar moto: te puede llevar muy lejos muy rápido, pero primero necesitas aprender las reglas, usar casco, y no lanzarte a la autopista el primer día.",
        conceptoClave: "Los riesgos reales de Bitcoin son la volatilidad y los scams, no el protocolo en sí. Edúcate antes de invertir.",
        tipo: "quiz",
        quiz: {
            pregunta: "¿Cuál de estas es una señal clara de estafa en el mundo cripto?",
            opciones: [
                "Una app que te cobra comisión por transacción",
                "Un exchange que te pide verificar tu identidad",
                "Un proyecto que te promete rendimientos garantizados del 10% mensual",
                "Una wallet que genera una frase semilla de 12 palabras"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los rendimientos garantizados son la señal de estafa más clásica. Bitcoin y cualquier inversión legítima no puede garantizar rendimientos fijos. Si alguien te promete 'gana el 10% mensual seguro', es casi con certeza un esquema Ponzi o una estafa. En el mundo de inversiones, si suena demasiado bueno para ser verdad, es porque no es verdad."
        }
    },
    {
        id: 20,
        semana: 3,
        titulo: "Tu primer Bitcoin",
        duracion: "5 min",
        concepto: "Cómo empezar de forma segura en México",
        contenido: `Ya tienes todo el conocimiento. Ahora el paso a paso concreto para empezar en México de forma segura.

Paso 1: Elige una plataforma confiable disponible en México. Aureo (antes Swapido) es una gran opcion, enfocada en simplicidad y seguridad para el usuario mexicano.

Paso 2: Crea tu cuenta en app.aureobitcoin.com y verifica tu identidad (KYC)

Paso 3: Empieza con poco. Literalmente puedes comprar $100 pesos de Bitcoin. Aprende cómo funciona la plataforma antes de invertir cantidades significativas.

Paso 4: Cuando tengas una cantidad que valga la pena proteger, retira a tu propia wallet. Para empezar, Bull Bitcoin es una excelente opción para usuarios en México.

Paso 5: Nunca inviertas dinero que necesites en el corto plazo. Bitcoin es largo plazo.`,
        analogia: "Aprender Bitcoin es como aprender a nadar: empieza en la parte baja, no saltes al área profunda el primer día. Con $50 pesos puedes aprender todo lo necesario sin arriesgar lo que no puedes perder.",
        conceptoClave: "Empieza pequeño, aprende el proceso, y solo entonces considera aumentar tu posición.",
        tipo: "checklist",
        quiz: {
            pregunta: "¿Cuál es el primer paso recomendado para empezar con Bitcoin en México?",
            opciones: [
                "Comprar la mayor cantidad posible cuando el precio esté bajo",
                "Crear una wallet propia antes de comprar",
                "Abrir cuenta en una plataforma confiable y regulada como Aureo",
                "Minar Bitcoin con tu computadora"
            ],
            respuestaCorrecta: 2,
            explicacion: "El primer paso es usar una plataforma confiable y regulada para tu primera compra. Aureo (antes Swapido) es una plataforma regulada y diseñada para hacer simple y seguro el acceso a Bitcoin en México. Una vez que entiendas el proceso, el siguiente paso es retirar a tu propia wallet."
        }
    },
    {
        id: 21,
        semana: 3,
        titulo: "El futuro naranja",
        duracion: "5 min",
        concepto: "Visión a 10-20 años",
        contenido: `¿Dónde puede estar Bitcoin en 10 o 20 años? Nadie lo sabe con certeza. Pero podemos ver las tendencias.

Corto plazo (1-3 años): Los ETFs de Bitcoin aprobados en EE.UU. en 2024 están atrayendo billones de dólares institucionales. Más países podrían seguir a El Salvador. La volatilidad seguirá siendo alta.

Mediano plazo (3-10 años): Si Bitcoin captura el 10% del mercado del oro (~$13 billones), cada bitcoin valdría ~$600,000 USD. La adopción en países con monedas débiles como Argentina, Turquía y Venezuela ya es una realidad.

Largo plazo (10-20 años): Bitcoin podría convertirse en la reserva de valor digital global. Con la reducción de emisión por los halvings, la oferta se vuelve cada vez más escasa mientras la demanda potencialmente crece.

Para México específicamente: con una moneda históricamente débil, alta dependencia de remesas y millones sin acceso bancario, Bitcoin no es especulación. Es infraestructura financiera.`,
        analogia: "Estamos en 1995 del internet. Mucha gente decía que era una moda. Los que lo entendieron temprano y participaron cambiaron su situación financiera para siempre.",
        conceptoClave: "Bitcoin en México no es solo inversión: es acceso a un sistema financiero global, protección contra la inflación e infraestructura para los no bancarizados.",
        tipo: "calculadora",
        quiz: {
            pregunta: "¿Cuál de estos es el caso de uso más urgente de Bitcoin para México HOY?",
            opciones: [
                "Especulación y trading de corto plazo",
                "Reemplazar completamente al peso mexicano",
                "Remesas más baratas e inclusión financiera para no bancarizados",
                "Minar Bitcoin con energía solar"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los casos de uso más urgentes y concretos de Bitcoin para México hoy son: reducir las comisiones de remesas (que cuestan miles de millones al año a familias mexicanas) y dar acceso financiero a los ~50 millones de adultos sin cuenta bancaria. Estos son problemas reales que Bitcoin puede resolver hoy, no en el futuro."
        }
    }
];

export const semanas = [
    {
        numero: 1,
        titulo: "El Problema",
        descripcion: "¿Por qué existe Bitcoin?",
        color: "from-orange-500 to-orange-600",
        lecciones: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        numero: 2,
        titulo: "La Tecnología",
        descripcion: "¿Cómo funciona Bitcoin?",
        color: "from-yellow-500 to-orange-500",
        lecciones: [8, 9, 10, 11, 12, 13, 14]
    },
    {
        numero: 3,
        titulo: "El Impacto",
        descripcion: "¿Qué significa para ti?",
        color: "from-orange-600 to-red-600",
        lecciones: [15, 16, 17, 18, 19, 20, 21]
    }
];