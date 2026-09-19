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
    sello: "Sin pesticidas · Cosecha a pedido",

    // El título grande. La palabra entre *asteriscos* sale destacada.
    titulo: "Paltas *de verdad*, criadas sin apuro en Melipilla.",

    // Las dos frases que van debajo del título
    bajada: "Cultivadas sin pesticidas y cosechadas después de que haces tu pedido. Llegan a tu casa en Santiago o la Quinta Región en pocos días.",

    // La foto grande. Ponla en la carpeta fotos/ y escribe aquí su nombre.
    foto: "portada.jpg",

    // Qué se ve en la foto. Sirve para personas ciegas y para Google.
    fotoDescripcion: "Paltas recién cosechadas en un canasto"
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
      detalle: "Calibre 48. Entre 4 y 5 unidades. Para probar o para la semana de una persona.",
      precio: 4500,
      foto: "palta-kilo.jpg",
      disponible: true,
      destacado: false
    },

    {
      nombre: "Malla de paltas",
      formato: "3 kilos",
      detalle: "Calibre 48 y 60 mezclados, en distintos puntos de madurez para que te duren toda la semana.",
      precio: 12000,
      foto: "malla-3kg.jpg",
      disponible: true,
      destacado: true,          // true pone el sello "La más pedida"
      etiqueta: "La más pedida"
    },

    {
      nombre: "Caja de paltas",
      formato: "10 kilos",
      detalle: "Calibre a elección. Para familias grandes, cocinerías o para repartir entre vecinos.",
      precio: 35000,
      foto: "caja-10kg.jpg",
      disponible: true,
      destacado: false
    }

  ],

  // Aviso chico que sale al lado del título del catálogo
  avisoCatalogo: "Se cosecha después de tu pedido · Precios por confirmar",

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
    foto: "marite.jpg",
    fotoDescripcion: "Marité en el campo, entre los paltos"
  },

  /* ------------------------------------------------------------------
     6. DESPACHO
     ------------------------------------------------------------------ */
  despacho: {
    titulo: "Dónde llegamos",
    texto: "Despachamos a Santiago y a la Región de Valparaíso. Cada entrega se coordina por WhatsApp: acordamos día, lugar y costo del despacho antes de que pagues.",

    zonas: [
      {
        nombre: "Melipilla y alrededores",
        detalle: "Entrega en el día o al día siguiente. También puedes retirar en el campo avisando antes."
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
