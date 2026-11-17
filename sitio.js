/* =====================================================================
   LUBRIBARO - FUNCIONES COMPARTIDAS
   Menú, pie de página, carrito de cotización y WhatsApp.
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
    zona: "Lima y Callao"
};

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
    provincia: '<path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3z"/><path d="M9 4v13M15 7v13"/>'
};
const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.03 0C5.39 0 0 5.38 0 12.03c0 2.13.55 4.2 1.6 6.02L.03 24l6.12-1.6A11.96 11.96 0 0 0 12.03 24C18.68 24 24 18.62 24 11.97 24 5.32 18.68 0 12.03 0zm0 22c-1.8 0-3.57-.49-5.12-1.4l-.37-.22-3.8 1 1-3.8-.22-.37A9.9 9.9 0 0 1 2 12.03C2 6.5 6.5 2 12.03 2 17.56 2 22 6.5 22 12.03 22 17.56 17.56 22 12.03 22zm5.5-7.53c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.66.08-2.11-1.06-3.5-2.05-4.82-4.33-.18-.3-.02-.47.13-.62.14-.14.3-.36.46-.53.15-.18.2-.3.3-.51.1-.2.05-.38-.03-.53-.07-.15-.68-1.65-.93-2.26-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.94 1.24 3.14c.15.2 2.14 3.28 5.2 4.6 1.95.84 2.76.92 3.74.77.99-.14 2.46-1 2.81-1.97.35-.97.35-1.8.25-1.97-.1-.17-.39-.27-.69-.43z"/></svg>';

function ico(nombre, extra) {
    return `<svg class="ico ${extra || ""}" viewBox="0 0 24 24" aria-hidden="true">${ICO[nombre] || ""}</svg>`;
}
function enlaceWhatsApp(texto) {
    return `https://wa.me/${CONFIG.whatsapp}${texto ? "?text=" + encodeURIComponent(texto) : ""}`;
}

/* ---------- FOTO O MARCADOR DE FOTO ---------- */
function htmlFoto(p) {
    if (p.foto) return `<img src="${p.foto}" alt="${escaparHTML(altProducto(p))}" loading="lazy" width="400" height="300">`;
    return `<div class="foto-pendiente">${ico(p.categoria)}<b>${escaparHTML(p.codigo.startsWith("PRESTONE") ? "Prestone" : p.codigo)}</b><small>Foto real próximamente</small></div>`;
}

/* ---------- TARJETA DE PRODUCTO (catálogo, inicio, líneas) ---------- */
function htmlTarjeta(p) {
    const url = `producto.html?id=${encodeURIComponent(p.id)}`;
    const esFluido = p.unidad === "caja";
    const codigoVisible = esFluido ? p.titulo : p.codigo;
    const nombre = esFluido ? p.presentacion : `${p.titulo} ${p.marca}`;
    const desde = p.volumen ? `<div class="desde">${soles(p.volumen.precio)} desde ${p.volumen.desde} ${p.unidad === "caja" ? "cajas" : "und"}</div>` : "";
    return `
    <article class="card-prod">
        <a class="cubre" href="${url}" aria-label="Ver ${escaparHTML(codigoVisible)}"></a>
        ${esFluido ? "" : '<span class="etiqueta-orig">Original</span>'}
        <div class="foto">${htmlFoto(p)}</div>
        <div class="cuerpo">
            <span class="linea">${LINEAS[p.categoria].nombre}</span>
            <h3 class="codigo">${escaparHTML(codigoVisible)}</h3>
            <p class="nombre">${escaparHTML(nombre)}</p>
            <div class="aplic ${p.aplicacion ? "" : "consultar"}">${escaparHTML(textoAplicacion(p))}</div>
            <div class="precio-fila">
                <div>
                    <div class="precio">${soles(p.precio)} <small>${esFluido ? "x caja" : "c/u"}</small></div>
                    ${desde}
                </div>
                <button class="btn btn-naranja btn-chico" onclick="agregarACotizacion('${p.id}', 1)" aria-label="Agregar ${escaparHTML(codigoVisible)} a la cotización">${ico("mas")}</button>
            </div>
        </div>
    </article>`;
}

/* ---------- MENÚ SUPERIOR ---------- */
function htmlHeader(pagina) {
    const act = n => (pagina === n ? "activo" : "");
    const lineas = Object.entries(LINEAS).map(([k, l]) =>
        `<a href="${l.pagina}"><span class="ico-caja">${ico(k)}</span><span>${l.nombre}<small>${l.desc}</small></span></a>`).join("");
    return `
    <div class="top-bar"><strong>Precios con IGV</strong><span class="sep">·</span>Factura electrónica<span class="opc"><span class="sep">·</span>Entrega personal en Lima</span></div>
    <div class="header-inner">
        <button class="menu-toggle" onclick="abrirMenu(true)" aria-label="Abrir menú">${ico("menu")}</button>
        <a href="index.html" class="logo" aria-label="LubriBaro, inicio"><img src="logo-marca.png" alt="" width="38" height="40"><span class="logo-txt">Lubri<span>Baro</span></span></a>
        <nav class="nav" aria-label="Menú principal">
            <a href="index.html" class="${act("inicio")}">Inicio</a>
            <div class="nav-drop ${act("catalogo")}" id="drop-catalogo">
                <button type="button" aria-haspopup="true" aria-expanded="false" onclick="toggleDrop(event)">Catálogo ${ico("abajo")}</button>
                <div class="drop-menu" role="menu">
                    ${lineas}
                    <hr>
                    <a href="catalogo.html"><span class="ico-caja">${ico("buscar")}</span><span>Ver todo el catálogo<small>Busca por código o vehículo</small></span></a>
                </div>
            </div>
            <a href="nosotros.html" class="${act("nosotros")}">Quiénes somos</a>
            <a href="como-comprar.html" class="${act("como-comprar")}">Cómo comprar</a>
            <a href="contacto.html" class="${act("contacto")}">Contacto</a>
        </nav>
        <div class="header-acciones">
            <button class="btn-cotizacion" onclick="abrirCotizacion(true)" aria-label="Ver mi cotización">
                ${ico("cotizacion")}<span class="txt">Cotización</span><span class="contador cero" id="contador-cot">0</span>
            </button>
            <a class="btn btn-wa btn-chico" href="${enlaceWhatsApp("Hola LubriBaro, quisiera hacer una consulta.")}" target="_blank" rel="noopener">${WA_SVG.replace("<svg", '<svg width="18" height="18" fill="currentColor"')} WhatsApp</a>
        </div>
    </div>`;
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
            <div class="side-sub">${lineas}<a href="catalogo.html">${ico("buscar")}Ver todo el catálogo</a></div>
            <div class="side-titulo">LubriBaro</div>
            <a href="nosotros.html" class="${act("nosotros")}">${ico("persona")}Quiénes somos</a>
            <a href="como-comprar.html" class="${act("como-comprar")}">${ico("cotizacion")}Cómo comprar</a>
            <a href="contacto.html" class="${act("contacto")}">${ico("correo")}Contacto</a>
        </nav>
        <div class="side-pie">
            <button class="btn btn-morado" onclick="abrirMenu(false); abrirCotizacion(true)">${ico("cotizacion")} Ver mi cotización</button>
            <a class="btn btn-wa" href="${enlaceWhatsApp("Hola LubriBaro, quisiera hacer una consulta.")}" target="_blank" rel="noopener">${WA_SVG.replace("<svg", '<svg width="20" height="20" fill="currentColor"')} Escríbenos por WhatsApp</a>
        </div>
    </aside>`;
}

/* ---------- PIE DE PÁGINA ---------- */
function htmlFooter() {
    const ruc = CONFIG.ruc ? `<span>RUC ${escaparHTML(CONFIG.ruc)}${CONFIG.razonSocial ? " · " + escaparHTML(CONFIG.razonSocial) : ""}</span>` : "";
    return `
    <div class="footer-grid">
        <div>
            <a href="index.html" class="logo"><img src="logo-marca.png" alt="" width="38" height="40"><span class="logo-txt">Lubri<span class="naranja">Baro</span></span></a>
            <p>Filtros originales Hyundai y Kia, ATF y refrigerante para tiendas de repuestos, lubricentros y talleres. Trato directo y entrega personal en Lima.</p>
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
            <h4>Contacto</h4>
            <div class="dato">${ico("telefono")}<span>WhatsApp: <a href="${enlaceWhatsApp()}" target="_blank" rel="noopener">${CONFIG.whatsappVisible}</a></span></div>
            <div class="dato">${ico("correo")}<a href="mailto:${CONFIG.correo}">${CONFIG.correo}</a></div>
            <div class="dato">${ico("ubicacion")}<span>Atendemos ${CONFIG.zona}. Envíos a provincias por agencia.</span></div>
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
    const c = document.getElementById("contador-cot");
    if (c) { c.classList.remove("salta"); void c.offsetWidth; c.classList.add("salta"); }
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
    const c = document.getElementById("contador-cot");
    if (!c) return;
    const n = leerCotizacion().length;
    c.textContent = n;
    c.classList.toggle("cero", n === 0);
}
function unidadTexto(p, n) {
    return p.unidad === "caja" ? (n === 1 ? "caja" : "cajas") : "und";
}

function calcularCotizacion() {
    const lineas = leerCotizacion().map(i => {
        const p = obtenerProducto(i.id);
        const pr = precioParaCantidad(p, i.cantidad);
        return { p, cantidad: i.cantidad, ...pr, subtotal: pr.especial ? null : pr.precio * i.cantidad };
    });
    const total = lineas.reduce((s, l) => s + (l.subtotal || 0), 0);
    const hayEspecial = lineas.some(l => l.especial);
    return { lineas, total, hayEspecial };
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
    const { lineas, total, hayEspecial } = calcularCotizacion();

    if (!lineas.length) {
        body.innerHTML = `<div class="cajon-vacio">${ico("cotizacion")}<p><b>Tu cotización está vacía.</b></p><p>Agrega productos desde el catálogo y envíanos la lista completa por WhatsApp.</p><a class="btn btn-borde" href="catalogo.html">Ver catálogo</a></div>`;
        pie.innerHTML = "";
        return;
    }

    body.innerHTML = lineas.map(l => {
        const p = l.p;
        const nombre = p.unidad === "caja" ? p.presentacion : `${p.titulo} ${p.marca}`;
        const calc = l.especial
            ? `<span class="especial">Precio especial a confirmar</span>`
            : `<b>${soles(l.subtotal)}</b>${l.cantidad} ${unidadTexto(p, l.cantidad)} x ${soles(l.precio)}${l.tramo === "volumen" ? ' <span class="tramo-vol">· volumen</span>' : ""}`;
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
    pie.innerHTML = `
        <div class="total-fila"><span>Total referencial</span><b>${soles(total)}</b></div>
        <p class="nota-chica">${hayEspecial ? "No incluye los productos con precio especial, que te confirmamos por WhatsApp. " : ""}Precios incluyen IGV · Emitimos factura electrónica.</p>
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
    const { lineas, total, hayEspecial } = calcularCotizacion();
    let t = "Hola LubriBaro, quiero cotizar estos productos:\n\n";
    lineas.forEach((l, i) => {
        const p = l.p;
        const cod = p.unidad === "caja" ? p.titulo : `${p.codigo} - ${p.titulo} ${p.marca}`;
        t += `${i + 1}. *${cod}*\n`;
        t += l.especial
            ? `   ${l.cantidad} ${unidadTexto(p, l.cantidad)} - precio especial a confirmar\n`
            : `   ${l.cantidad} ${unidadTexto(p, l.cantidad)} x ${soles(l.precio)}${l.tramo === "volumen" ? " (volumen)" : ""} = ${soles(l.subtotal)}\n`;
    });
    t += `\n*Total referencial: ${soles(total)}*${hayEspecial ? " (sin contar los productos con precio especial)" : ""}\n`;
    t += "Precios con IGV.\n";
    const negocio = (document.getElementById("cot-negocio") || {}).value || "";
    const distrito = (document.getElementById("cot-distrito") || {}).value || "";
    if (negocio.trim()) t += `\nNombre / negocio: ${negocio.trim()}`;
    if (distrito.trim()) t += `\nDistrito: ${distrito.trim()}`;
    t += "\n\n¿Me confirman disponibilidad y la fecha de entrega?";
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
    if (abrir) document.getElementById("toast").classList.remove("activo");
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
});
document.addEventListener("keydown", e => { if (e.key === "Escape") { cerrarTodo(); const d = document.getElementById("drop-catalogo"); if (d) d.classList.remove("abierto"); } });

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
    document.body.insertAdjacentHTML("beforeend", htmlMenuLateral(pagina) + htmlCajon() +
        `<a class="wa-flotante" href="${enlaceWhatsApp("Hola LubriBaro, quisiera hacer una consulta.")}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">${WA_SVG}</a>`);
    document.addEventListener("DOMContentLoaded", () => {
        const footer = document.getElementById("sitio-footer");
        if (footer) { footer.className = "footer"; footer.innerHTML = htmlFooter(); }
        actualizarContador();
    });
    actualizarContador();
    // Si otra pestaña cambia la cotización, se actualiza aquí también.
    window.addEventListener("storage", e => { if (e.key === CLAVE_COT) { actualizarContador(); pintarCotizacion(); } });
})();
