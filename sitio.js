/* =====================================================================
   LUBRIBARO - FUNCIONES COMPARTIDAS
   Encabezado, menú, pie de página, carrito de cotización y WhatsApp.
   Se carga en todas las páginas, justo después de productos.js.
   ===================================================================== */

/* ---------- DATOS DEL NEGOCIO (edita aquí) ---------- */
const CONFIG = {
    whatsapp: "51937229128",              // sin + ni espacios
    whatsappVisible: "+51 937 229 128",
    correo: "lubribaro@gmail.com",
    ruc: "",                              // ej. "20123456789". Si está vacío, no se muestra
    razonSocial: "",                      // ej. "LUBRIBARO E.I.R.L." (opcional)
    horario: "Lunes a sábado, 8:00 a. m. a 6:00 p. m.",
    horarioCorto: "Lun. a sáb., 8 a. m. a 6 p. m.",
    zona: "Lima y Callao"
};

/* Franja de marcas de la portada. Si consigues el logo oficial de una marca,
   súbelo al repositorio y escribe aquí el nombre del archivo, por ejemplo
   logo: "marca-hyundai.png". Mientras logo sea null, se muestra el nombre. */
const MARCAS = [
    { nombre: "Hyundai", logo: null },
    { nombre: "Kia", logo: null },
    { nombre: "Chevron", logo: null },
    { nombre: "Prestone", logo: null }
];

/* ---------- ÍCONOS ---------- */
const ICO = {
    aceite: '<path d="M6 3.5h12v3H6z"/><path d="M7 6.5h10V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M10 10v7M14 10v7"/>',
    aire: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h15a3 3 0 1 1-3 3"/><path d="M3 16h7"/>',
    combustible: '<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16"/><path d="M3 21h12M6.5 8h5"/><path d="M14 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-3-3"/>',
    fluidos: '<path d="M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3z"/><path d="M7 13h10"/>',
    original: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    persona: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    camion: '<path d="M2.5 6h11v10h-11z"/><path d="M13.5 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    factura: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    cotizacion: '<path d="M9 3.5h6v3H9z"/><path d="M7 5H5v16h14V5h-2"/><path d="M8.5 11h7M8.5 15h4.5"/>',
    buscar: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    cerrar: '<path d="M6 6l12 12M18 6L6 18"/>',
    abajo: '<path d="M6 9l6 6 6-6"/>',
    mas: '<path d="M12 5v14M5 12h14"/>',
    menos: '<path d="M5 12h14"/>',
    basura: '<path d="M4 7h16M10 11v6M14 11v6M5 7l1 13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l1-13M9 7V4h6v3"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    correo: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    ubicacion: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    tienda: '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9h16v2a3 3 0 0 1-5.3 2 3 3 0 0 1-5.4 0A3 3 0 0 1 4 11z"/><path d="M5.5 14v7h13v-7"/>',
    taller: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.4-.4-2.6z"/>',
    gota: '<path d="M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11z"/>',
    pago: '<rect x="2.5" y="6" width="19" height="13" rx="2"/><path d="M2.5 10h19M6 15h4"/>',
    telefono: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    flecha: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    izq: '<path d="M15 6l-6 6 6 6"/>',
    der: '<path d="M9 6l6 6-6 6"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
    provincia: '<path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3z"/><path d="M9 4v13M15 7v13"/>'
};
const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.03 0C5.39 0 0 5.38 0 12.03c0 2.13.55 4.2 1.6 6.02L.03 24l6.12-1.6A11.96 11.96 0 0 0 12.03 24C18.68 24 24 18.62 24 11.97 24 5.32 18.68 0 12.03 0zm0 22c-1.8 0-3.57-.49-5.12-1.4l-.37-.22-3.8 1 1-3.8-.22-.37A9.9 9.9 0 0 1 2 12.03C2 6.5 6.5 2 12.03 2 17.56 2 22 6.5 22 12.03 22 17.56 17.56 22 12.03 22zm5.5-7.53c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.66.08-2.11-1.06-3.5-2.05-4.82-4.33-.18-.3-.02-.47.13-.62.14-.14.3-.36.46-.53.15-.18.2-.3.3-.51.1-.2.05-.38-.03-.53-.07-.15-.68-1.65-.93-2.26-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.94 1.24 3.14c.15.2 2.14 3.28 5.2 4.6 1.95.84 2.76.92 3.74.77.99-.14 2.46-1 2.81-1.97.35-.97.35-1.8.25-1.97-.1-.17-.39-.27-.69-.43z"/></svg>';



function ico(nombre, extra) {
    return `<svg class="ico ${extra || ""}" viewBox="0 0 24 24" aria-hidden="true">${ICO[nombre] || ""}</svg>`;
}
function waIcono(tam) {
    return tam ? WA_SVG.replace("<svg", `<svg width="${tam}" height="${tam}" fill="currentColor"`) : WA_SVG;
}
function enlaceWhatsApp(texto) {
    return `https://wa.me/${CONFIG.whatsapp}${texto ? "?text=" + encodeURIComponent(texto) : ""}`;
}
const WA_SALUDO = "Hola LubriBaro, quisiera hacer una consulta.";

/* ---------- FOTO O MARCADOR DE FOTO ---------- */
function htmlMarcadorFoto(p) {
    const etiqueta = p.categoria === "fluidos" ? p.marca : p.codigo;
    return `<div class="foto-pendiente">${ico(p.categoria)}<b>${escaparHTML(etiqueta)}</b><small>Foto real próximamente</small></div>`;
}
/* Intenta img/productos/[código].jpg; si no existe, la genérica de su tipo
   (marcada como "Imagen referencial"); si tampoco existe, un marcador. */
function htmlFoto(p, perezosa) {
    return `<img src="${p.foto}" alt="${escaparHTML(altProducto(p))}"${perezosa === false ? "" : ' loading="lazy"'} width="400" height="400" data-id="${p.id}" onerror="fotoError(this)">`;
}
function fotoError(img) {
    const p = PRODUCTOS.find(x => x.id === img.dataset.id);
    const generica = p && fotoGenerica(p);
    if (generica && !img.dataset.generica) {
        img.dataset.generica = "1";
        img.src = generica;
        img.insertAdjacentHTML("afterend", '<span class="ref-badge">Imagen referencial</span>');
        return;
    }
    const badge = img.nextElementSibling;
    if (badge && badge.classList.contains("ref-badge")) badge.remove();
    img.outerHTML = p ? htmlMarcadorFoto(p) : "";
}
function nombreCorto(p) { return p.unidad === "caja" ? p.titulo : p.codigo; }

/* ---------- TARJETA DE PRODUCTO ---------- */
function htmlTarjeta(p) {
    const url = `producto.html?id=${encodeURIComponent(p.id)}`;
    const caja = p.unidad === "caja";
    const meta = caja ? p.marca : `${p.marca} original`;
    const nombre = caja ? p.presentacion : p.titulo;
    const mejor = p.escalas ? p.escalas[p.escalas.length - 1] : p.volumen;
    const vol = mejor
        ? `<div class="vol"><b>${soles(mejor.precio)}</b> ${caja ? `desde ${mejor.desde} cajas` : "por volumen"}</div>` : "";
    return `
    <article class="card-prod">
        <a class="cubre" href="${url}" aria-label="Ver ${escaparHTML(nombreCorto(p))}"></a>
        ${caja ? "" : `<span class="sello-orig">${ico("original")}Original</span>`}
        <div class="foto">${htmlFoto(p)}</div>
        <div class="cuerpo">
            <span class="meta">${escaparHTML(meta)}</span>
            <h3 class="codigo">${escaparHTML(nombreCorto(p))}</h3>
            <p class="nombre">${escaparHTML(nombre)}</p>
            <div class="aplic ${p.aplicacion ? "" : "consultar"}">${escaparHTML(textoAplicacion(p))}</div>
            <div class="precios-card">
                <div class="precio">${soles(p.precio)}<small>${caja ? "x caja" : "c/u"}</small></div>
                ${vol}
            </div>
            <button class="btn btn-agregar" type="button" onclick="agregarACotizacion('${p.id}', 1)">${ico("cotizacion")}<span>Agregar<span class="txt-largo"> a cotización</span></span></button>
        </div>
    </article>`;
}

/* ---------- BUSCADOR CON SUGERENCIAS ---------- */
function htmlBuscador(id) {
    return `
    <div class="buscador-header">
        <form action="catalogo.html" method="get" role="search" autocomplete="off">
            <label class="sr" for="${id}">Buscar por código o vehículo</label>
            <input id="${id}" name="q" type="search" placeholder="Busca por código o vehículo: 2M000, Tucson, H100…" oninput="sugerir(this)" onfocus="sugerir(this)" onkeydown="navegarSugerencias(event, this)">
            <button type="submit" aria-label="Buscar">${ico("buscar")}<span class="txt">Buscar</span></button>
        </form>
        <div class="sugerencias oculto" role="listbox"></div>
    </div>`;
}
function sugerir(input) {
    const caja = input.closest(".buscador-header").querySelector(".sugerencias");
    const q = input.value.trim();
    if (q.length < 2) { caja.classList.add("oculto"); return; }
    const res = buscarProductos(q);
    caja.innerHTML = res.length
        ? res.slice(0, 5).map(p => `
            <a href="producto.html?id=${encodeURIComponent(p.id)}" role="option">
                <span class="s-img">${htmlFoto(p)}</span>
                <span><b>${escaparHTML(nombreCorto(p))}</b><small>${escaparHTML(p.unidad === "caja" ? p.presentacion : p.titulo + " " + p.marca + " · " + textoAplicacion(p))}</small></span>
                <span class="s-precio">${soles(p.precio)}</span>
            </a>`).join("") + `<a class="s-todos" href="catalogo.html?q=${encodeURIComponent(q)}">Ver todos los resultados (${res.length})</a>`
        : `<div class="s-vacio">No encontramos "${escaparHTML(q)}" en la web. <a href="${enlaceWhatsApp("Hola LubriBaro, busco: " + q + ". ¿Lo tienen?")}" target="_blank" rel="noopener">Consúltalo por WhatsApp</a>: trabajamos más códigos a pedido.</div>`;
    caja.classList.remove("oculto");
}
function navegarSugerencias(e, input) {
    const caja = input.closest(".buscador-header").querySelector(".sugerencias");
    const items = [...caja.querySelectorAll("a")];
    if (!items.length || caja.classList.contains("oculto")) return;
    let i = items.findIndex(a => a.classList.contains("activa"));
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (i >= 0) items[i].classList.remove("activa");
        i = e.key === "ArrowDown" ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
        items[i].classList.add("activa");
    } else if (e.key === "Enter" && i >= 0) {
        e.preventDefault();
        location.href = items[i].href;
    }
}

/* ---------- ENCABEZADO ---------- */
function htmlHeader(pagina) {
    const act = n => (pagina === n ? "activo" : "");
    const lineas = Object.entries(LINEAS).map(([k, l]) =>
        `<a href="${l.pagina}"><span class="ico-caja">${ico(k)}</span><span><strong>${l.nombre}</strong><small>${l.desc}</small></span></a>`).join("");
    return `
    <div class="util-bar"><div class="contenedor">
        <div class="util-izq">
            <span class="u1">${ico("tienda")}Precios mayoristas para talleres, lubricentros y tiendas</span>
            <span class="u2">${ico("aceite")}Combina códigos: desde ${REGLAS.filtrosCombinados} filtros accedes al precio por volumen</span>
            <span class="u3">${ico("camion")}Delivery gratis en Lima desde S/ ${REGLAS.deliveryGratisDesde}</span>
        </div>
    </div></div>
    <div class="header-main"><div class="contenedor">
        <button class="menu-toggle" onclick="abrirMenu(true)" aria-label="Abrir menú">${ico("menu")}</button>
        <a href="index.html" class="logo" aria-label="LubriBaro, inicio"><img src="logo-marca.png" alt="" width="42" height="44"><span class="logo-txt">Lubri<span>Baro</span></span></a>
        ${htmlBuscador("q-header")}
        <div class="header-acciones">
            <a class="accion wa" href="${enlaceWhatsApp(WA_SALUDO)}" target="_blank" rel="noopener">
                <span class="ic">${WA_SVG}</span><span class="txt"><small>Pedidos por WhatsApp</small><strong>${CONFIG.whatsappVisible}</strong></span>
            </a>
            <button class="accion" onclick="abrirCotizacion(true)" aria-label="Ver mi cotización">
                <span class="ic">${ico("cotizacion")}<span class="contador contador-cot cero">0</span></span>
                <span class="txt"><small>Mi cotización</small><strong id="total-cot">S/ 0.00</strong></span>
            </button>
        </div>
    </div></div>
    <div class="header-buscar-movil">${htmlBuscador("q-movil")}</div>
    <div class="header-nav"><div class="contenedor">
        <nav aria-label="Menú principal">
            <a href="index.html" class="${act("inicio")}">Inicio</a>
            <div class="nav-drop ${act("catalogo")}" id="drop-catalogo">
                <button type="button" aria-haspopup="true" aria-expanded="false" onclick="toggleDrop(event)">${ico("grid", "ico-menu")}Catálogo${ico("abajo", "flecha")}</button>
                <div class="drop-menu" role="menu">
                    ${lineas}
                    <a href="catalogo.html" class="drop-todo"><span>Ver todo el catálogo y buscar por código</span>${ico("flecha")}</a>
                </div>
            </div>
            <a href="nosotros.html" class="${act("nosotros")}">Quiénes somos</a>
            <a href="como-comprar.html" class="${act("como-comprar")}">Cómo comprar</a>
            <a href="contacto.html" class="${act("contacto")}">Contacto</a>
        </nav>
        <div class="nav-sellos"><span>${ico("check")}Precios con IGV</span><span>${ico("factura")}Factura electrónica</span></div>
    </div></div>`;
}

function htmlMenuLateral(pagina) {
    const act = n => (pagina === n ? "activo" : "");
    const lineas = Object.entries(LINEAS).map(([k, l]) => `<a href="${l.pagina}">${ico(k)}${l.nombre}</a>`).join("");
    return `
    <div class="overlay" id="overlay" onclick="cerrarTodo()"></div>
    <aside class="side-menu" id="side-menu" aria-label="Menú">
        <div class="side-header">
            <a href="index.html" class="logo"><img src="logo-marca.png" alt="" width="30" height="32"><span class="logo-txt">Lubri<span>Baro</span></span></a>
            <button class="btn-cerrar" onclick="abrirMenu(false)" aria-label="Cerrar menú">${ico("cerrar")}</button>
        </div>
        <nav class="side-links">
            <a href="index.html" class="${act("inicio")}">${ico("tienda")}Inicio</a>
            <div class="side-titulo">Catálogo</div>
            ${lineas}<a href="catalogo.html">${ico("buscar")}Ver todo el catálogo</a>
            <div class="side-titulo">LubriBaro</div>
            <a href="nosotros.html" class="${act("nosotros")}">${ico("persona")}Quiénes somos</a>
            <a href="como-comprar.html" class="${act("como-comprar")}">${ico("cotizacion")}Cómo comprar</a>
            <a href="contacto.html" class="${act("contacto")}">${ico("correo")}Contacto</a>
        </nav>
        <div class="side-pie">
            <button class="btn btn-morado" onclick="abrirMenu(false); abrirCotizacion(true)">${ico("cotizacion")} Ver mi cotización</button>
            <a class="btn btn-wa" href="${enlaceWhatsApp(WA_SALUDO)}" target="_blank" rel="noopener">${waIcono(20)} Escríbenos por WhatsApp</a>
        </div>
    </aside>`;
}

/* ---------- WHATSAPP FLOTANTE ---------- */
function htmlWhatsApp() {
    const opciones = [
        ["Cotizar filtros", "Envíanos el código o el vehículo", "Hola LubriBaro, quiero cotizar filtros. El código o vehículo es: "],
        ["Cotizar ATF o refrigerante", "Precio por caja y por volumen", "Hola LubriBaro, quiero cotizar ATF Chevron MD-3 / refrigerante Prestone. Cantidad: "],
        ["Otra consulta", "Pedidos, entregas o facturación", "Hola LubriBaro, tengo una consulta: "]
    ];
    return `
    <div class="wa-container" id="wa-container">
        <div class="wa-popup" id="wa-popup" role="dialog" aria-label="Escríbenos por WhatsApp">
            <div class="wa-popup-header"><b>¿Te ayudamos a cotizar?</b><span>Elige una opción y escríbenos por WhatsApp.</span></div>
            <div class="wa-popup-body">
                ${opciones.map(([t, s, m]) => `<a class="wa-opcion" href="${enlaceWhatsApp(m)}" target="_blank" rel="noopener"><span class="ic">${WA_SVG}</span><span><strong>${t}</strong><small>${s}</small></span></a>`).join("")}
                <div class="wa-horario">${ico("reloj")}Atención: ${CONFIG.horarioCorto}</div>
            </div>
        </div>
        <button class="wa-trigger" type="button" onclick="abrirWa()" aria-label="Escríbenos por WhatsApp" aria-controls="wa-popup">${WA_SVG}${ico("cerrar", "x")}</button>
    </div>`;
}
function abrirWa(abrir) {
    const w = document.getElementById("wa-container");
    if (!w) return;
    w.classList.toggle("abierto", abrir);
}

/* ---------- PIE DE PÁGINA ---------- */
function htmlFooter() {
    const ruc = CONFIG.ruc ? `<span>RUC ${escaparHTML(CONFIG.ruc)}${CONFIG.razonSocial ? " · " + escaparHTML(CONFIG.razonSocial) : ""}</span>` : "";
    return `
    <div class="footer-grid">
        <div>
            <a href="index.html" class="logo"><img src="logo-marca.png" alt="" width="42" height="44"><span class="logo-txt">Lubri<span>Baro</span></span></a>
            <p>Filtros originales Hyundai y Kia, ATF Chevron Supreme MD-3 y refrigerante Prestone para tiendas de repuestos, lubricentros y talleres.</p>
            <div class="footer-sellos"><span>Precios con IGV</span><span>Factura y boleta electrónica</span><span>Transferencia o efectivo</span></div>
        </div>
        <div>
            <h4>Catálogo</h4>
            ${Object.values(LINEAS).map(l => `<a href="${l.pagina}">${l.nombre}</a>`).join("")}
            <a href="catalogo.html">Buscar por código</a>
        </div>
        <div>
            <h4>LubriBaro</h4>
            <a href="nosotros.html">Quiénes somos</a>
            <a href="como-comprar.html">Cómo comprar</a>
            <a href="como-comprar.html#preguntas">Preguntas frecuentes</a>
            <a href="contacto.html">Contacto</a>
        </div>
        <div>
            <h4>Atención</h4>
            <div class="dato">${ico("telefono")}<span>WhatsApp<br><a href="${enlaceWhatsApp(WA_SALUDO)}" target="_blank" rel="noopener">${CONFIG.whatsappVisible}</a></span></div>
            <div class="dato">${ico("correo")}<a href="mailto:${CONFIG.correo}">${CONFIG.correo}</a></div>
            <div class="dato">${ico("ubicacion")}<span>Entrega personal en ${CONFIG.zona}. Envíos a provincias por agencia.</span></div>
            <div class="dato">${ico("reloj")}<span>${CONFIG.horario}</span></div>
        </div>
    </div>
    <div class="footer-bottom"><div class="contenedor"><span>&copy; ${new Date().getFullYear()} LubriBaro. Precios en soles, incluyen IGV.</span>${ruc}</div></div>`;
}

/* ---------- CARRITO DE COTIZACIÓN ---------- */
const CLAVE_COT = "lubribaro_cotizacion";
let memoriaCot = [];

function leerCotizacion() {
    try {
        const datos = JSON.parse(localStorage.getItem(CLAVE_COT) || "[]");
        return datos.filter(i => obtenerProducto(i.id) && i.cantidad > 0);
    } catch (e) { return memoriaCot; }
}
function guardarCotizacion(items) {
    memoriaCot = items;
    try { localStorage.setItem(CLAVE_COT, JSON.stringify(items)); } catch (e) { /* sin almacenamiento: queda en memoria */ }
    actualizarContador();
    pintarCotizacion();
}
function cantidadValida(n) {
    n = parseInt(n, 10);
    return isNaN(n) || n < 1 ? 1 : Math.min(n, 9999);
}
function agregarACotizacion(id, cantidad) {
    const p = obtenerProducto(id);
    if (!p) return;
    cantidad = cantidadValida(cantidad);
    const items = leerCotizacion();
    const it = items.find(i => i.id === id);
    if (it) it.cantidad = cantidadValida(it.cantidad + cantidad);
    else items.push({ id, cantidad });
    guardarCotizacion(items);
    document.querySelectorAll(".contador-cot").forEach(c => { c.classList.remove("salta"); void c.offsetWidth; c.classList.add("salta"); });
    mostrarToast(`${p.unidad === "caja" ? p.titulo : p.codigo} agregado (${cantidad} ${p.unidad === "caja" ? (cantidad === 1 ? "caja" : "cajas") : "und"})`);
}
function cambiarCantidad(id, cantidad) {
    const items = leerCotizacion();
    const it = items.find(i => i.id === id);
    if (!it) return;
    it.cantidad = cantidadValida(cantidad);
    guardarCotizacion(items);
}
function quitarDeCotizacion(id) {
    guardarCotizacion(leerCotizacion().filter(i => i.id !== id));
}
function vaciarCotizacion() {
    guardarCotizacion([]);
}
function actualizarContador() {
    const n = leerCotizacion().length;
    document.querySelectorAll(".contador-cot").forEach(c => { c.textContent = n; c.classList.toggle("cero", n === 0); });
    const t = document.getElementById("total-cot");
    if (t) t.textContent = n ? soles(calcularCotizacion().total) : "S/ 0.00";
}
function unidadTexto(p, n) {
    return p.unidad === "caja" ? (n === 1 ? "caja" : "cajas") : "und";
}

/* Calcula la cotización con las reglas del archivo 05:
   - todos los filtros pasan a precio por volumen si el pedido suma 10 o más;
   - las líneas con precio especial (caja o lote) suman al total estimado
     con su precio por volumen. */
function contarFiltros(items) {
    return items.reduce((s, i) => { const p = obtenerProducto(i.id); return s + (p && esFiltro(p) ? i.cantidad : 0); }, 0);
}
function calcularCotizacion() {
    const items = leerCotizacion();
    const filtros = contarFiltros(items);
    const lineas = items.map(i => {
        const p = obtenerProducto(i.id);
        const pr = precioParaCantidad(p, i.cantidad, filtros);
        return { p, cantidad: i.cantidad, ...pr, subtotal: pr.precio * i.cantidad };
    });
    const total = lineas.reduce((s, l) => s + l.subtotal, 0);
    const hayEspecial = lineas.some(l => l.especial);
    const filtrosAMayorista = lineas.some(l => esFiltro(l.p) && l.tramo === "mayorista" && l.p.volumen);
    const faltanFiltros = filtros > 0 && filtrosAMayorista ? Math.max(0, REGLAS.filtrosCombinados - filtros) : 0;
    const faltaDelivery = Math.max(0, REGLAS.deliveryGratisDesde - total);
    return { lineas, total, hayEspecial, filtros, faltanFiltros, faltaDelivery };
}

function htmlCajon() {
    return `
    <aside class="cajon" id="cajon" aria-label="Mi cotización">
        <div class="cajon-header">
            <h3>${ico("cotizacion")} Mi cotización</h3>
            <button class="btn-cerrar" onclick="abrirCotizacion(false)" aria-label="Cerrar">${ico("cerrar")}</button>
        </div>
        <div class="cajon-body" id="cajon-body"></div>
        <div class="cajon-pie" id="cajon-pie"></div>
    </aside>
    <div class="toast" id="toast" role="status">${ico("check")}<span id="toast-txt"></span><button onclick="abrirCotizacion(true)">Ver cotización</button></div>`;
}

function pintarCotizacion() {
    const body = document.getElementById("cajon-body");
    const pie = document.getElementById("cajon-pie");
    if (!body) return;
    const { lineas, total, hayEspecial, faltanFiltros, faltaDelivery } = calcularCotizacion();

    if (!lineas.length) {
        body.innerHTML = `<div class="cajon-vacio">${ico("cotizacion")}<p><b>Tu cotización está vacía.</b></p><p>Agrega productos desde el catálogo y envíanos la lista completa por WhatsApp.</p><a class="btn btn-borde" href="catalogo.html">Ver catálogo</a></div>`;
        pie.innerHTML = "";
        return;
    }

    body.innerHTML = lineas.map(l => {
        const p = l.p;
        const nombre = p.unidad === "caja" ? p.presentacion : `${p.titulo} ${p.marca}`;
        const calc = l.especial
            ? `<b>${soles(l.subtotal)}</b><span class="especial">Precio especial a confirmar</span>`
            : `<b>${soles(l.subtotal)}</b>${l.cantidad} ${unidadTexto(p, l.cantidad)} x ${soles(l.precio)}${l.tramo === "volumen" ? ` <span class="tramo-vol">· ${l.porCombinacion ? "volumen (combinado)" : "volumen"}</span>` : ""}`;
        return `
        <div class="item-cot">
            <div class="mini">${htmlFoto(p)}</div>
            <div>
                <div class="top">
                    <div><div class="cod">${escaparHTML(p.unidad === "caja" ? p.titulo : p.codigo)}</div><div class="nom">${escaparHTML(nombre)}</div></div>
                    <button class="quitar" onclick="quitarDeCotizacion('${p.id}')" aria-label="Quitar">${ico("basura")}</button>
                </div>
                <div class="fila">
                    <div class="stepper chico">
                        <button onclick="cambiarCantidad('${p.id}', ${l.cantidad - 1})" aria-label="Menos">${ico("menos")}</button>
                        <input type="number" min="1" inputmode="numeric" value="${l.cantidad}" onchange="cambiarCantidad('${p.id}', this.value)" aria-label="Cantidad">
                        <button onclick="cambiarCantidad('${p.id}', ${l.cantidad + 1})" aria-label="Más">${ico("mas")}</button>
                    </div>
                    <div class="calc">${calc}</div>
                </div>
            </div>
        </div>`;
    }).join("");

    const negocio = sessionStorageSeguro("lb_negocio");
    const distrito = sessionStorageSeguro("lb_distrito");
    const avisos = [];
    if (faltanFiltros > 0) avisos.push(`<div class="aviso-cot">${ico("aceite")}<span>Te faltan <b>${faltanFiltros} ${faltanFiltros === 1 ? "filtro" : "filtros"}</b> para el precio por volumen. Puedes combinar códigos.</span></div>`);
    avisos.push(faltaDelivery > 0
        ? `<div class="aviso-cot">${ico("camion")}<span>Te faltan <b>${soles(faltaDelivery)}</b> para delivery gratis en Lima.</span></div>`
        : `<div class="aviso-cot ok">${ico("check")}<span>Tu pedido tiene <b>delivery gratis en Lima</b>.</span></div>`);
    pie.innerHTML = `
        ${avisos.join("")}
        <div class="total-fila"><span>Total estimado</span><b>${soles(total)}</b></div>
        <p class="nota-chica">${hayEspecial ? "Los productos con precio especial se calculan a precio por volumen y te confirmamos el precio final por WhatsApp. " : ""}Precios con IGV · Emitimos factura electrónica.</p>
        <div class="datos-cliente">
            <input class="campo" id="cot-negocio" placeholder="Tu nombre o negocio" value="${escaparHTML(negocio)}" oninput="sessionStorageGuardar('lb_negocio', this.value)">
            <input class="campo" id="cot-distrito" placeholder="Distrito" value="${escaparHTML(distrito)}" oninput="sessionStorageGuardar('lb_distrito', this.value)">
        </div>
        <button class="btn btn-wa btn-bloque" onclick="enviarCotizacion()">${WA_SVG.replace("<svg", '<svg width="20" height="20" fill="currentColor"')} Enviar cotización por WhatsApp</button>
        <button class="btn-vaciar" onclick="vaciarCotizacion()">Vaciar cotización</button>`;
}

function sessionStorageSeguro(k) { try { return sessionStorage.getItem(k) || ""; } catch (e) { return ""; } }
function sessionStorageGuardar(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { } }

function textoCotizacion() {
    const { lineas, total, hayEspecial, faltaDelivery } = calcularCotizacion();
    let t = "Hola LubriBaro, quiero cotizar estos productos:\n\n";
    lineas.forEach((l, i) => {
        const p = l.p;
        const cod = p.unidad === "caja" ? p.titulo : `${p.codigo} - ${p.titulo} ${p.marca}`;
        t += `${i + 1}. *${cod}*\n`;
        t += `   ${l.cantidad} ${unidadTexto(p, l.cantidad)} x ${soles(l.precio)}${l.tramo === "volumen" ? (l.porCombinacion ? " (volumen, combinado)" : " (volumen)") : ""} = ${soles(l.subtotal)}${l.especial ? " - precio especial a confirmar" : ""}\n`;
    });
    t += `\n*Total estimado: ${soles(total)}*\n`;
    t += "Precios con IGV.";
    t += faltaDelivery > 0 ? "\n" : " Delivery gratis en Lima.\n";
    const negocio = (document.getElementById("cot-negocio") || {}).value || "";
    const distrito = (document.getElementById("cot-distrito") || {}).value || "";
    if (negocio.trim()) t += `\nNombre / negocio: ${negocio.trim()}`;
    if (distrito.trim()) t += `\nDistrito: ${distrito.trim()}`;
    t = t.replace(/\n+$/, "") + "\n\n¿Me confirman disponibilidad y la fecha de entrega?";
    return t;
}
function enviarCotizacion() {
    if (!leerCotizacion().length) return;
    window.open(enlaceWhatsApp(textoCotizacion()), "_blank", "noopener");
}

/* ---------- ABRIR / CERRAR ---------- */
function abrirMenu(abrir) {
    document.getElementById("side-menu").classList.toggle("activo", abrir);
    document.getElementById("overlay").classList.toggle("activo", abrir);
}
function abrirCotizacion(abrir) {
    if (abrir) pintarCotizacion();
    document.getElementById("cajon").classList.toggle("activo", abrir);
    document.getElementById("overlay").classList.toggle("activo", abrir);
    if (abrir) { document.getElementById("toast").classList.remove("activo"); abrirWa(false); }
}
function cerrarTodo() {
    abrirMenu(false);
    abrirCotizacion(false);
}
function toggleDrop(e) {
    e.stopPropagation();
    const d = document.getElementById("drop-catalogo");
    const abierto = d.classList.toggle("abierto");
    e.currentTarget.setAttribute("aria-expanded", abierto);
}
document.addEventListener("click", e => {
    const d = document.getElementById("drop-catalogo");
    if (d && !d.contains(e.target)) d.classList.remove("abierto");
    const w = document.getElementById("wa-container");
    if (w && !w.contains(e.target)) abrirWa(false);
    document.querySelectorAll(".buscador-header").forEach(b => { if (!b.contains(e.target)) b.querySelector(".sugerencias").classList.add("oculto"); });
});
document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    cerrarTodo();
    const d = document.getElementById("drop-catalogo"); if (d) d.classList.remove("abierto");
    abrirWa(false);
    document.querySelectorAll(".sugerencias").forEach(s => s.classList.add("oculto"));
});

let temporizadorToast = null;
function mostrarToast(texto) {
    const t = document.getElementById("toast");
    document.getElementById("toast-txt").textContent = texto;
    t.classList.add("activo");
    clearTimeout(temporizadorToast);
    temporizadorToast = setTimeout(() => t.classList.remove("activo"), 3500);
}


/* ---------- ARMADO DE LA PÁGINA ---------- */
(function iniciarSitio() {
    const pagina = document.body.dataset.pagina || "";
    const header = document.getElementById("sitio-header");
    if (header) { header.className = "header"; header.innerHTML = htmlHeader(pagina); }
    document.body.insertAdjacentHTML("beforeend", htmlMenuLateral(pagina) + htmlCajon() + htmlWhatsApp());
    const q = new URLSearchParams(location.search).get("q");
    if (q) document.querySelectorAll(".buscador-header input").forEach(i => i.value = q);
    document.addEventListener("DOMContentLoaded", () => {
        const footer = document.getElementById("sitio-footer");
        if (footer) { footer.className = "footer"; footer.innerHTML = htmlFooter(); }
        actualizarContador();
    });
    actualizarContador();
    window.addEventListener("storage", e => { if (e.key === CLAVE_COT) { actualizarContador(); pintarCotizacion(); } });
})();
