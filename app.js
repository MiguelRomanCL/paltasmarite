/* ==========================================================================
   PALTAS MARITÉ — EL MOTOR

   Este archivo toma lo que escribiste en datos.js y lo pone en la página.
   No necesitas entenderlo ni tocarlo. Si algo deja de funcionar, lo más
   probable es que falte una coma o una comilla en datos.js
   ========================================================================== */

(function () {
  'use strict';

  /* ----------------------------------------------------------------
     AYUDANTES
     ---------------------------------------------------------------- */

  // Busca un elemento en la página
  function buscar(selector) {
    return document.querySelector(selector);
  }

  // Escribe $12.000 en vez de 12000
  function comoPrecio(numero) {
    return '$' + Number(numero).toLocaleString('es-CL');
  }

  // Convierte texto peligroso en texto seguro antes de ponerlo en la página
  function seguro(texto) {
    var caja = document.createElement('div');
    caja.textContent = texto == null ? '' : String(texto);
    return caja.innerHTML;
  }

  // Rellena todos los lugares marcados con data-campo="algo"
  function rellenar(campo, texto) {
    var lugares = document.querySelectorAll('[data-campo="' + campo + '"]');
    for (var i = 0; i < lugares.length; i++) {
      lugares[i].textContent = texto;
    }
  }

  /* ----------------------------------------------------------------
     FOTOS

     Si la foto existe en la carpeta fotos/, se muestra.
     Si todavía no la subes, aparece un recuadro rayado que dice
     qué foto falta, para que la página nunca se vea rota.
     ---------------------------------------------------------------- */
  function ponerFoto(contenedor, archivo, descripcion) {
    if (!contenedor) return;

    function mostrarMarcador() {
      contenedor.innerHTML =
        '<div class="falta-foto">' +
          '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' +
            '<rect x="3" y="4" width="18" height="16" rx="2"/>' +
            '<circle cx="8.5" cy="9.5" r="1.5"/>' +
            '<path d="m21 15-5-5L5 20"/>' +
          '</svg>' +
          '<span>Falta la foto<br><strong>' + seguro(archivo) + '</strong></span>' +
        '</div>';
    }

    if (!archivo) {
      mostrarMarcador();
      return;
    }

    var imagen = new Image();
    imagen.alt = descripcion || '';
    imagen.loading = 'lazy';
    imagen.onload = function () {
      contenedor.innerHTML = '';
      contenedor.appendChild(imagen);
    };
    imagen.onerror = mostrarMarcador;
    imagen.src = 'fotos/' + archivo;
  }

  /* ----------------------------------------------------------------
     EL PEDIDO
     Guarda cuántas unidades lleva la persona de cada producto.
     ---------------------------------------------------------------- */
  var pedido = {};

  function cuantosLleva(indice) {
    return pedido[indice] || 0;
  }

  function cambiarCantidad(indice, cuanto) {
    var nueva = cuantosLleva(indice) + cuanto;
    if (nueva <= 0) {
      delete pedido[indice];
    } else {
      pedido[indice] = Math.min(nueva, 99);
    }
    dibujarCatalogo();
    dibujarBarraPedido();
  }

  function vaciarPedido() {
    pedido = {};
    dibujarCatalogo();
    dibujarBarraPedido();
  }

  function lineasDelPedido() {
    var lineas = [];
    for (var indice in pedido) {
      if (!Object.prototype.hasOwnProperty.call(pedido, indice)) continue;
      var producto = DATOS.productos[indice];
      if (!producto) continue;
      var cantidad = pedido[indice];
      lineas.push({
        producto: producto,
        cantidad: cantidad,
        subtotal: producto.precio * cantidad
      });
    }
    return lineas;
  }

  function totalDelPedido() {
    return lineasDelPedido().reduce(function (suma, linea) {
      return suma + linea.subtotal;
    }, 0);
  }

  /* ----------------------------------------------------------------
     EL MENSAJE DE WHATSAPP
     ---------------------------------------------------------------- */
  function enlaceWhatsapp(conPedido) {
    var numero = (DATOS.tienda.whatsapp || '').replace(/\D/g, '');
    var texto;

    if (conPedido && lineasDelPedido().length) {
      var partes = [DATOS.mensaje.saludo, ''];
      lineasDelPedido().forEach(function (linea) {
        partes.push(
          '• ' + linea.producto.nombre + ' ' + linea.producto.formato +
          ' x' + linea.cantidad + ' — ' + comoPrecio(linea.subtotal)
        );
      });
      partes.push('');
      partes.push('Total: ' + comoPrecio(totalDelPedido()));
      partes.push('');
      partes.push(DATOS.mensaje.cierre);
      texto = partes.join('\n');
    } else {
      texto = '¡Hola! Vi la página y quiero preguntar por las paltas.';
    }

    return 'https://wa.me/' + numero + '?text=' + encodeURIComponent(texto);
  }

  /* ----------------------------------------------------------------
     DIBUJAR EL CATÁLOGO
     ---------------------------------------------------------------- */
  function dibujarCatalogo() {
    var lista = buscar('#catalogo');
    if (!lista) return;

    lista.innerHTML = '';

    DATOS.productos.forEach(function (producto, indice) {
      if (producto.disponible === false) return;

      var cantidad = cuantosLleva(indice);

      var fila = document.createElement('li');
      fila.className = 'producto' + (producto.destacado ? ' producto--destacado' : '');

      var insignia = producto.destacado && producto.etiqueta
        ? '<span class="producto__insignia">' + seguro(producto.etiqueta) + '</span>'
        : '';

      var control = cantidad > 0
        ? '<div class="cantidad">' +
            '<button type="button" data-accion="menos" data-indice="' + indice + '" aria-label="Quitar uno de ' + seguro(producto.nombre) + '">–</button>' +
            '<span class="cantidad__numero">' + cantidad + '</span>' +
            '<button type="button" data-accion="mas" data-indice="' + indice + '" aria-label="Agregar uno de ' + seguro(producto.nombre) + '">+</button>' +
          '</div>'
        : '<button type="button" class="boton boton--pulpa boton--chico" data-accion="mas" data-indice="' + indice + '">Agregar</button>';

      fila.innerHTML =
        '<div class="producto__foto" data-foto-producto="' + indice + '"></div>' +
        '<div class="producto__cuerpo">' +
          '<div class="producto__titulo">' +
            '<span class="producto__nombre">' + seguro(producto.nombre) + '</span>' +
            '<span class="producto__formato">' + seguro(producto.formato) + '</span>' +
            insignia +
          '</div>' +
          '<p class="producto__detalle">' + seguro(producto.detalle) + '</p>' +
        '</div>' +
        '<div class="producto__cierre">' +
          '<span class="producto__precio">' + comoPrecio(producto.precio) + '</span>' +
          control +
        '</div>';

      lista.appendChild(fila);

      ponerFoto(
        fila.querySelector('[data-foto-producto="' + indice + '"]'),
        producto.foto,
        producto.nombre + ' ' + producto.formato
      );
    });
  }

  /* ----------------------------------------------------------------
     DIBUJAR LA BARRA DE PEDIDO
     ---------------------------------------------------------------- */
  function dibujarBarraPedido() {
    var barra = buscar('#pedido');
    var lineas = lineasDelPedido();

    if (!lineas.length) {
      barra.classList.remove('pedido--visible');
      return;
    }

    var unidades = lineas.reduce(function (suma, l) { return suma + l.cantidad; }, 0);
    var resumen = lineas.map(function (l) {
      return l.producto.nombre + ' ' + l.producto.formato + ' x' + l.cantidad;
    }).join('  ·  ');

    buscar('#pedidoLineas').textContent =
      unidades + (unidades === 1 ? ' producto' : ' productos') + ':  ' + resumen;
    buscar('#pedidoTotal').textContent = comoPrecio(totalDelPedido());
    buscar('#enviarPedido').href = enlaceWhatsapp(true);

    barra.classList.add('pedido--visible');
  }

  /* ----------------------------------------------------------------
     DIBUJAR EL RESTO DE LA PÁGINA
     ---------------------------------------------------------------- */
  function dibujarPagina() {

    /* --- Nombre y datos de la tienda --- */
    document.title = DATOS.tienda.nombre + ' · Paltas sin pesticidas de ' +
                     DATOS.tienda.ubicacion.split(',')[0];
    rellenar('nombre', DATOS.tienda.nombre);
    rellenar('ubicacion', DATOS.tienda.ubicacion);
    if (DATOS.eslogan) rellenar('eslogan', DATOS.eslogan);

    /* --- Portada --- */
    rellenar('sello', DATOS.portada.sello);
    rellenar('bajada', DATOS.portada.bajada);
    rellenar('avisoCatalogo', DATOS.avisoCatalogo);

    // El título permite destacar una palabra escribiéndola *entre asteriscos*
    var titulo = buscar('[data-campo="titulo"]');
    if (titulo) {
      titulo.innerHTML = seguro(DATOS.portada.titulo)
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
    }

    ponerFoto(buscar('[data-foto="portada"]'),
              DATOS.portada.foto,
              DATOS.portada.fotoDescripcion);

    /* --- Razones --- */
    var razones = buscar('#razones');
    razones.innerHTML = DATOS.razones.map(function (razon) {
      return '<li class="razon">' +
               '<p class="razon__dato">' + seguro(razon.dato) + '</p>' +
               '<p class="razon__titulo">' + seguro(razon.titulo) + '</p>' +
               '<p class="razon__texto">' + seguro(razon.texto) + '</p>' +
             '</li>';
    }).join('');

    /* --- Historia --- */
    rellenar('historiaTitulo', DATOS.historia.titulo);
    rellenar('firma', DATOS.historia.firma);
    rellenar('firmaDetalle', DATOS.historia.firmaDetalle);

    buscar('#historiaTexto').innerHTML = DATOS.historia.texto
      .split('\n')
      .filter(function (parrafo) { return parrafo.trim() !== ''; })
      .map(function (parrafo) { return '<p>' + seguro(parrafo.trim()) + '</p>'; })
      .join('');

    ponerFoto(buscar('[data-foto="historia"]'),
              DATOS.historia.foto,
              DATOS.historia.fotoDescripcion);

    /* --- Despacho --- */
    rellenar('despachoTitulo', DATOS.despacho.titulo);
    rellenar('despachoTexto', DATOS.despacho.texto);

    buscar('#zonas').innerHTML = DATOS.despacho.zonas.map(function (zona) {
      return '<li class="zona">' +
               '<p class="zona__nombre">' +
                 '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A96B47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
                   '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>' +
                 '</svg>' +
                 seguro(zona.nombre) +
               '</p>' +
               '<p class="zona__detalle">' + seguro(zona.detalle) + '</p>' +
             '</li>';
    }).join('');

    buscar('#pasos').innerHTML = DATOS.despacho.pasos.map(function (paso) {
      return '<li class="paso">' +
               '<span class="paso__numero" aria-hidden="true"></span>' +
               '<p class="paso__titulo">' + seguro(paso.titulo) + '</p>' +
               '<p class="paso__texto">' + seguro(paso.texto) + '</p>' +
             '</li>';
    }).join('');

    /* --- Contacto en el pie --- */
    var contacto = [
      '<a href="' + enlaceWhatsapp(false) + '" target="_blank" rel="noopener">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z"/></svg>' +
        'Escribir por WhatsApp</a>'
    ];

    if (DATOS.tienda.instagram) {
      contacto.push(
        '<a href="https://instagram.com/' + seguro(DATOS.tienda.instagram) + '" target="_blank" rel="noopener">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>' +
          '@' + seguro(DATOS.tienda.instagram) + '</a>'
      );
    }

    buscar('#contacto').innerHTML = contacto.join('');
    buscar('#whatsappDirecto').href = enlaceWhatsapp(false);

    /* --- Catálogo y barra --- */
    dibujarCatalogo();
    dibujarBarraPedido();
  }

  /* ----------------------------------------------------------------
     ESCUCHAR LOS CLICS DE AGREGAR Y QUITAR
     ---------------------------------------------------------------- */
  document.addEventListener('click', function (evento) {
    var boton = evento.target.closest('[data-accion]');
    if (!boton) return;

    var indice = Number(boton.getAttribute('data-indice'));
    cambiarCantidad(indice, boton.getAttribute('data-accion') === 'mas' ? 1 : -1);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var vaciar = buscar('#vaciar');
    if (vaciar) vaciar.addEventListener('click', vaciarPedido);

    if (typeof DATOS === 'undefined') {
      console.error('No se pudo leer datos.js. Revisa que no falte una coma o una comilla.');
      return;
    }

    dibujarPagina();
  });

})();
