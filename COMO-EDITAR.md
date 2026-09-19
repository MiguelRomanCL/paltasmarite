# Cómo editar tu página

Guía para Marité. No necesitas saber programar. Todo lo que vas a cambiar
está en un solo archivo.

---

## Lo primero: qué es cada archivo

Cuando abras la carpeta vas a ver esto:

| Archivo | Qué es | ¿Lo tocas tú? |
|---|---|---|
| `datos.js` | Nombre, WhatsApp, productos, precios y textos | **Sí. Este es el tuyo.** |
| `fotos/` | La carpeta donde van tus fotos | **Sí** |
| `index.html` | El esqueleto de la página | No |
| `estilos.css` | Los colores y las letras | No |
| `app.js` | El motor que arma todo | No |
| `COMO-EDITAR.md` | Esta guía | No |

Si tocas por error uno de los que dicen "No", cierra sin guardar y no pasa nada.

---

## Para ver la página en tu computador

Haz doble clic en `index.html`. Se abre en tu navegador. Así se ve tal
cual la van a ver tus clientes.

Cada vez que cambies algo en `datos.js`, guarda con **Ctrl + S**, vuelve al
navegador y aprieta **F5** para recargar.

---

## Para abrir y editar `datos.js`

Haz clic derecho sobre el archivo → **Abrir con** → **Bloc de notas**.

Si vas a editar seguido, instala [Visual Studio Code](https://code.visualstudio.com).
Es gratis y te pinta los errores de colores antes de que rompan la página.

---

## Las tres reglas que no puedes romper

1. **El texto siempre va entre comillas.**
   Bien: `nombre: "Palta Hass",`
   Mal: `nombre: Palta Hass,`

2. **Los precios van sin puntos ni signo peso.**
   Bien: `precio: 12000,`
   Mal: `precio: $12.000,`

3. **Cada línea termina en coma, menos la última de cada bloque.**

Si la página se ve en blanco, es casi seguro que falta una comilla o una coma.
Aprieta **Ctrl + Z** varias veces para deshacer y vuelve a probar.

---

## Cambiar un precio

Busca el producto y cambia solo el número:

```js
{
  nombre: "Malla de paltas",
  formato: "3 kilos",
  precio: 12000,          <-- cambias esto por el precio nuevo
  ...
}
```

---

## Agregar un producto nuevo

Copia un bloque completo, desde `{` hasta `},` y pégalo debajo. Después
cambia los datos. Queda así:

```js
{
  nombre: "Palta Negra La Cruz",
  formato: "1 kilo",
  detalle: "Más chica y más cremosa que la Hass.",
  precio: 5000,
  foto: "palta-negra.jpg",
  disponible: true,
  destacado: false
},
```

Revisa que el bloque de antes termine con coma.

---

## Esconder un producto sin borrarlo

Cuando se te acabe un formato, no lo borres. Cambia esta línea:

```js
disponible: true,     -->     disponible: false,
```

Desaparece de la página. Cuando vuelvas a tener, lo cambias de nuevo a `true`.

---

## Poner o cambiar una foto

1. Guarda la foto en la carpeta `fotos/`
2. En `datos.js`, escribe el nombre exacto del archivo, con su extensión:

```js
foto: "malla-3kg.jpg",
```

**Importante:** el nombre tiene que calzar exacto, incluyendo mayúsculas.
Si el archivo se llama `Malla-3KG.JPG` y tú escribes `malla-3kg.jpg`, no va a aparecer.

Lo más simple es poner todos los nombres en minúscula, sin espacios ni tildes.

Mientras no subas una foto, aparece un recuadro rayado que dice cuál falta.
La página nunca se ve rota.

### Qué fotos sacar

| Archivo | Qué se ve |
|---|---|
| `portada.jpg` | La mejor foto que tengas. Paltas en el árbol o en canasto. |
| `palta-kilo.jpg` | Unas pocas paltas juntas |
| `malla-3kg.jpg` | La malla armada como se la entregas al cliente |
| `caja-10kg.jpg` | La caja llena |
| `marite.jpg` | Tú en el campo, entre los paltos |

Consejos: saca las fotos de día con luz natural, nunca con flash. Acerca la
cámara. Una palta cortada por la mitad vende más que diez enteras.

---

## Cambiar tu número de WhatsApp

En `datos.js`, arriba de todo:

```js
whatsapp: "56900000000",
```

Escribe tu número con el **56** adelante, sin el signo +, sin espacios y sin guiones.
Si tu número es 9 8765 4321, queda `"56987654321"`.

**Pruébalo siempre después de cambiarlo:** abre la página, agrega un producto
y aprieta "Pedir por WhatsApp". Tiene que abrirse tu chat con el pedido escrito.

---

## Escribir tu historia

Es la parte que más vende. Búscala en `datos.js` bajo `historia:`.

Si no sabes cómo empezar: grábate un audio de WhatsApp contando cómo partió
el campo, como se lo contarías a una amiga. Después lo pasas a texto.

Para separar párrafos usa `\n`:

```js
texto: "Primer párrafo.\nSegundo párrafo.",
```

---

## Publicar los cambios en internet

Tu página vive en GitHub y está publicada acá:

**https://miguelromancl.github.io/paltasmarite/**

La forma más simple de cambiar algo es editar directo en GitHub, desde el
navegador. Sirve igual en el computador que en el celular, y no hay que
instalar nada.

1. Entra a [github.com/MiguelRomanCL/paltasmarite](https://github.com/MiguelRomanCL/paltasmarite)
2. Haz clic en el archivo `datos.js`
3. Aprieta el lápiz que dice **Edit**
4. Cambia lo que necesites
5. Aprieta **Commit changes** y escribe en una línea qué cambiaste

**No hay que publicar nada aparte.** La página se actualiza sola en menos
de un minuto.

Si prefieres trabajar con los archivos en tu computador, edítalos ahí y
súbelos después a GitHub. El resultado es el mismo.

### Si algo sale mal

GitHub guarda todas las versiones. Entra a la pestaña **Commits** del
repositorio, busca la versión anterior y se puede volver atrás. Nunca se
pierde nada.

---

## Si algo se rompe

| Qué pasa | Qué hacer |
|---|---|
| La página sale en blanco | Falta una coma o una comilla en `datos.js`. Ctrl + Z hasta que funcione. |
| No aparece una foto | El nombre del archivo no calza exacto. Revisa mayúsculas y extensión. |
| El botón de WhatsApp abre un chat vacío | El número está mal escrito. Tiene que ser `56` + tu número, sin espacios. |
| Cambié algo y no se ve | Guarda con Ctrl + S y recarga con F5. |

Si nada resulta, pide que te devuelvan la última copia que funcionaba.
Guarda una copia de la carpeta cada vez que hagas un cambio grande.
