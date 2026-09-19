/* ==========================================================================
   PALTAS MARITÉ — ARCHIVO DE DATOS

   Este es el ÚNICO archivo que necesitas tocar para cambiar la página.
   Aquí viven el nombre, el WhatsApp, los productos, los precios y los textos.

   TRES REGLAS PARA NO ROMPER NADA
   1. El texto siempre va entre comillas: "así"
   2. Los precios van SIN puntos ni signo peso: 12000 (no $12.000)
   3. Cada línea termina con una coma, menos la última de cada bloque

   Si algo se rompe, aprieta Ctrl+Z hasta que vuelva a funcionar.
   ========================================================================== */

var DATOS = {

  /* ------------------------------------------------------------------
     1. DATOS DE LA TIENDA
     ------------------------------------------------------------------ */
  tienda: {

    // El nombre que aparece arriba y en la pestaña del navegador
    nombre: "Paltas Marité",

    // Tu WhatsApp. Escríbelo con el 56 adelante, sin +, sin espacios.
    // Ejemplo: si tu número es 9 8765 4321, aquí va "56987654321"
    whatsapp: "56900000000",

    // Tu Instagram, sin el @. Si no tienes, déjalo vacío así: ""
    instagram: "",

    // Dónde está el campo
    ubicacion: "Melipilla, Región Metropolitana"
  },

  /* ------------------------------------------------------------------
     2. LA PORTADA
     ------------------------------------------------------------------ */
  portada: {

    // El sello verde chico que va arriba del título
    sello: "Sin pesticidas · Orgánicas · Melipilla",

    // El título grande. La palabra entre *asteriscos* sale destacada.
    titulo: "Buenas paltas, *mejores días*.",

    // Las dos frases que van debajo del título
    bajada: "Frescas, naturales y con mucho amor. Cultivadas sin pesticidas en Melipilla y cosechadas después de que haces tu pedido.",

    // La foto grande. Ponla en la carpeta fotos/ y escribe aquí su nombre.
    foto: "portada.jpg",

    // Qué se ve en la foto. Sirve para personas ciegas y para Google.
    fotoDescripcion: "Puesto de Paltas Marité con el precio del kilo y paltas recién cosechadas"
  },

  /* ------------------------------------------------------------------
     3. LOS PRODUCTOS

     Cada producto va entre llaves { } y se separa del siguiente con coma.
     Para agregar uno, copia un bloque completo y pégalo abajo.
     Para sacar uno, borra su bloque completo.
     Para esconderlo sin borrarlo, cambia disponible a false.
     ------------------------------------------------------------------ */
  productos: [

    {
      nombre: "Palta Hass",
      formato: "1 kilo",
      detalle: "Entre 4 y 5 unidades según el tamaño. Para probar o para la semana de una persona.",
      precio: 2500,
      foto: "palta-kilo.jpg",
      disponible: true,
      destacado: true,          // true pone el sello de abajo
      etiqueta: "La más pedida"
    },

    {
      nombre: "Malla de paltas",
      formato: "3 kilos",
      detalle: "En distintos puntos de madurez para que te duren toda la semana.",
      precio: 7500,
      foto: "malla-3kg.jpg",
      disponible: true,
      destacado: false
    },

    {
      nombre: "Caja de paltas",
      formato: "10 kilos",
      detalle: "Para familias grandes, cocinerías o para repartir entre vecinos.",
      precio: 25000,
      foto: "caja-10kg.jpg",
      disponible: true,
      destacado: false
    }

  ],

  // Aviso chico que sale al lado del título del catálogo
  avisoCatalogo: "Cosechadas a pedido · El despacho se suma aparte",

  /* ------------------------------------------------------------------
     4. POR QUÉ ESTAS PALTAS
     Tres razones cortas. El dato va arriba grande, la explicación abajo.
     ------------------------------------------------------------------ */
  razones: [
    {
      dato: "Cero",
      titulo: "pesticidas y químicos",
      texto: "Los paltos se cuidan a mano, uno por uno. Lo que te comes es palta y nada más."
    },
    {
      dato: "2 a 4 días",
      titulo: "entre el árbol y tu casa",
      texto: "No pasan por bodegas ni cámaras de frío. Se cosechan cuando ya tienes el pedido hecho."
    },
    {
      dato: "1 hora",
      titulo: "de Santiago",
      texto: "Un campo familiar en Melipilla. Si quieres venir a conocerlo, se puede coordinar."
    }
  ],

  // Frase que acompaña a la marca. Sale bajo el nombre en el pie de página.
  eslogan: "Paltas felices, personas más sanas",

  /* ------------------------------------------------------------------
     5. TU HISTORIA
     Esta es la parte que más vende. Escríbela con tus propias palabras.
     Para separar párrafos, usa dos barras invertidas seguidas de n.
     ------------------------------------------------------------------ */
  historia: {
    titulo: "Quién está detrás de estas paltas",

    // Reemplaza este texto por el tuyo. Tres o cuatro frases bastan.
    texto: "Acá va tu historia. Cuenta cuándo partió el campo, por qué decidiste cultivar sin pesticidas y qué hace distinta a tu palta.\nSi no sabes por dónde empezar, grábate un audio contándolo como se lo contarías a una amiga y después lo pasamos a texto.",

    firma: "Marité",
    firmaDetalle: "Melipilla",

    // Por ahora va el dibujo de la marca. Cuando tengas una foto tuya en
    // el campo, guárdala en fotos/ y cambia esta línea por su nombre.
    foto: "marca.png",
    fotoDescripcion: "Dibujo de la marca Paltas Marité"
  },

  /* ------------------------------------------------------------------
     6. DESPACHO
     ------------------------------------------------------------------ */
  despacho: {
    titulo: "Dónde llegamos",
    texto: "El kilo sale $2.500 retirado y $3.500 con despacho. Fuera de Melipilla coordinamos el valor por WhatsApp según tu comuna.",

    zonas: [
      {
        nombre: "Melipilla y alrededores",
        detalle: "Despacho a $1.000. Entrega en el día o al día siguiente, o retiras en el campo avisando antes."
      },
      {
        nombre: "Santiago",
        detalle: "Coordinamos día y punto de entrega por WhatsApp según dónde estés."
      },
      {
        nombre: "Región de Valparaíso",
        detalle: "San Antonio, Cartagena, Algarrobo y alrededores. Consulta por tu comuna."
      }
    ],

    // Pasos de cómo funciona el pedido
    pasos: [
      {
        titulo: "Eliges tus paltas",
        texto: "Aprieta Agregar en lo que quieras llevar. Abajo se va armando tu pedido."
      },
      {
        titulo: "Aprietas Pedir por WhatsApp",
        texto: "Se abre WhatsApp con el pedido y el total ya escritos. Solo le das enviar."
      },
      {
        titulo: "Coordinamos y cosechamos",
        texto: "Te confirmo el día, el costo del despacho y los datos para transferir."
      }
    ]
  },

  /* ------------------------------------------------------------------
     7. EL MENSAJE DE WHATSAPP
     Así llega escrito el pedido a tu teléfono. Puedes cambiar el saludo.
     ------------------------------------------------------------------ */
  mensaje: {
    saludo: "¡Hola Marité! Quiero hacer este pedido:",
    cierre: "Mi nombre es:\nMi comuna es:"
  }

};
