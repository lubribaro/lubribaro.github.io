/* =====================================================================
   LUBRIBARO - LISTA ÚNICA DE PRODUCTOS
   ---------------------------------------------------------------------
   Todas las páginas leen de aquí (inicio, catálogo, líneas, ficha y
   carrito de cotización). Para agregar o corregir un producto, edítalo
   solo en esta lista.

   Precios: en soles, INCLUYEN IGV y son POR UNIDAD (en fluidos, por caja).
   Fuente: "Precios LubriBaro" revisados por Gabriel (17 nov 2026).

   REGLAS DE PRECIO (modelo mayorista, sin pedido mínimo):
   - Precio único por unidad ("Precio mayorista"). No hay precio por volumen.
   - Caja completa de un mismo código: se cotiza por WhatsApp (no se publica).
   - precio: null = "Precio: consultar" (se cotiza por WhatsApp).
   - Delivery gratis en Lima desde S/ 200 (filtros, packs y fluidos).
   - "Elige tu beneficio" desde S/ 500 en filtros y packs (ver BENEFICIOS).
   - Packs Ahorro: precio neto, cuentan como una línea en la cotización.

   Campos:
     id             Identificador usado en producto.html?id=...
     web            true = se publica en la web; false = oculto por ahora
     categoria      "aceite" | "aire" | "combustible" | "fluidos"
     marca          Marca del producto
     titulo         Nombre corto del producto
     codigo         Código OEM / SKU
     equivalencias  Lista de códigos equivalentes ([] si no hay)
     aplicacion     Aplicación según Einer, o null (se muestra
                    "Consultar aplicación por WhatsApp")
     elemento       true si es filtro tipo elemento (cartucho)
     presentacion   Texto de presentación
     (foto)         No se escribe: la web busca img/productos/[código].jpg
                    y, si no existe, usa la imagen genérica de su tipo.
     unidad         "und" (filtros) | "caja" (fluidos)
     precio         Precio por unidad (o por caja en fluidos)
     beneficio      false si el filtro no entra a "Elige tu beneficio"
     escalas        (solo fluidos) precio por caja según cantidad de cajas
     piezas         (solo packs) filtros que incluye el pack
     lote           { tipo: "Caja" | "Lote", cantidad } desde esa cantidad
                    el precio es especial y se cotiza (NO se muestra), o null
   ===================================================================== */

const PRODUCTOS = [
    // *** PACKS AHORRO (precio neto; el "por separado" se calcula con los precios de cada filtro) ***
    { id: "pack-h1-diesel", web: true, categoria: "packs", marca: "Hyundai", titulo: "Pack Ahorro H-1 Diésel", codigo: "PACK-H1-DIESEL",
      equivalencias: [], aplicacion: "Hyundai H-1 2.5 CRDi 2012+", elemento: false, presentacion: "Aceite + aire + combustible",
      unidad: "pack", precio: 145.00, lote: null,
      piezas: [{ codigo: "26330-4A001", cantidad: 1 }, { codigo: "28113-4H000", cantidad: 1 }, { codigo: "31922-2E900", cantidad: 1 }] },
    { id: "pack-h100-diesel", web: true, categoria: "packs", marca: "Hyundai", titulo: "Pack Ahorro H-100 Diésel", codigo: "PACK-H100-DIESEL",
      equivalencias: [], aplicacion: "Hyundai H-100 2006+ (D4BB, D4BH, D4CB)", elemento: false, presentacion: "Aceite + aire + combustible",
      unidad: "pack", precio: 169.00, lote: null,
      piezas: [{ codigo: "26330-4A001", cantidad: 1 }, { codigo: "28113-4F000", cantidad: 1 }, { codigo: "31922-2E900", cantidad: 1 }] },
    { id: "pack-county-d4dd", web: true, categoria: "packs", marca: "Hyundai", titulo: "Pack Ahorro County D4DD", codigo: "PACK-COUNTY-D4DD",
      equivalencias: [], aplicacion: "Hyundai County motor D4DD", elemento: false, presentacion: "Aceite + aire + combustible",
      unidad: "pack", precio: 459.00, lote: null,
      piezas: [{ codigo: "26311-45010", cantidad: 1 }, { codigo: "28130-5A500", cantidad: 1 }, { codigo: "31945-52161", cantidad: 1 }] },
    { id: "pack-staria", web: true, categoria: "packs", marca: "Hyundai", titulo: "Pack Ahorro Staria", codigo: "PACK-STARIA",
      equivalencias: [], aplicacion: "Hyundai Staria", elemento: false, presentacion: "Aceite + aire",
      unidad: "pack", precio: 88.00, lote: null,
      piezas: [{ codigo: "26320-2F100", cantidad: 1 }, { codigo: "28113-N9000", cantidad: 1 }] },
    { id: "pack-tucson-santafe-diesel", web: true, categoria: "packs", marca: "Hyundai", titulo: "Pack Ahorro Tucson / Santa Fe 2.0 Diésel", codigo: "PACK-TUCSON-SANTAFE",
      equivalencias: [], aplicacion: "Tucson NX4 y Santa Fe IV 2.0 diésel 2021+", elemento: false, presentacion: "Kit de aceite + aire",
      unidad: "pack", precio: 88.00, lote: null,
      piezas: [{ codigo: "26320-2R000", cantidad: 1 }, { codigo: "28113-N9000", cantidad: 1 }] },
    { id: "pack-surtido-lubricentro", web: true, categoria: "packs", marca: "Hyundai / Kia", titulo: "Pack Surtido Lubricentro (20 filtros)", codigo: "PACK-SURTIDO-20",
      equivalencias: [], aplicacion: "Lubricentros que arman stock", elemento: false, presentacion: "20 filtros de aceite",
      unidad: "pack", precio: 559.00, lote: null,
      piezas: [{ codigo: "26350-2M000", cantidad: 5 }, { codigo: "26350-2S001", cantidad: 5 }, { codigo: "26350-2J001", cantidad: 5 }, { codigo: "26300-02752", cantidad: 5 }] },

    // *** FILTROS DE ACEITE ***
    { id: "filtro-26300-02752", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26300-02752",
      equivalencias: ["LYS LF3007", "Nissan 15208-31U00", "Mitsubishi MD135737"], aplicacion: "Gasolina", elemento: false,
      presentacion: "Caja de 20 und", unidad: "und", precio: 12.00, lote: { tipo: "Caja", cantidad: 20 } },
    { id: "filtro-26330-4a001", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26330-4A001",
      equivalencias: ["LYS LF604A", "Hyundai 26300-42040"], aplicacion: "Diésel", elemento: false,
      presentacion: "Caja de 20 und", unidad: "und", precio: 33.00, lote: { tipo: "Caja", cantidad: 20 } },
    { id: "filtro-26320-3c100", web: true, categoria: "aceite", marca: "Hyundai / Kia", titulo: "Filtro de aceite tipo elemento", codigo: "26320-3C100",
      equivalencias: [], aplicacion: "Hyundai Santa Fe, Sonata, Veracruz; Kia Grand Carnival, Sorento", elemento: true,
      presentacion: "Caja de 50 und", unidad: "und", precio: 33.00, lote: { tipo: "Caja", cantidad: 50 } },
    { id: "filtro-26350-2s001", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite tipo elemento", codigo: "26350-2S001",
      equivalencias: [], aplicacion: "Hyundai Tucson modernas", elemento: true,
      presentacion: "Caja de 60 und", unidad: "und", precio: 35.00, lote: { tipo: "Caja", cantidad: 60 } },
    { id: "filtro-26350-2m000", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite tipo elemento", codigo: "26350-2M000",
      equivalencias: [], aplicacion: "Kia New Sorento 2020+, Kia Rio 2019+", elemento: true,
      presentacion: "Caja de 40 und", unidad: "und", precio: 39.00, lote: { tipo: "Caja", cantidad: 40 } },
    { id: "filtro-26350-2j001", web: true, categoria: "aceite", marca: "Hyundai / Kia", titulo: "Filtro de aceite", codigo: "26350-2J001",
      equivalencias: [], aplicacion: null, elemento: false,
      presentacion: "Caja de 60 und", unidad: "und", precio: 39.00, lote: { tipo: "Caja", cantidad: 60 } },

    // Filtros de aceite que se publicarán después (web: true)
    { id: "filtro-26300-35505", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26300-35505",
      equivalencias: [], aplicacion: null, elemento: false,
      presentacion: "Caja de 40 und", unidad: "und", precio: 15.90, lote: { tipo: "Caja", cantidad: 40 } },
    { id: "filtro-26311-45010", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26311-45010",
      equivalencias: ["LYS LF9604", "LYS LF601"], aplicacion: "Diésel. HD45, HD65, HD75 y HD78 2010+ (D4AF, D4AL, D4DB, D4DC, D4DD)", elemento: false,
      presentacion: "Caja de 20 und", unidad: "und", precio: 56.00, lote: { tipo: "Caja", cantidad: 20 } },
    { id: "filtro-26325-52003", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite tipo elemento", codigo: "26325-52003",
      equivalencias: ["26311-52001", "26311-52002", "26325-52000", "26325-52002"], aplicacion: "Mighty / HD38 / HD78", elemento: true,
      presentacion: "Caja de 40 und", unidad: "und", precio: null, lote: { tipo: "Caja", cantidad: 40 } },
    { id: "filtro-ok87a-14317", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "OK87A-14317",
      equivalencias: ["Sakura C1735"], aplicacion: "Diésel. HD120, motor D6DA", elemento: false,
      presentacion: "Caja de 16 und", unidad: "und", precio: 95.00, lote: { tipo: "Caja", cantidad: 16 } },
    { id: "filtro-26316-41000", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26316-41000",
      equivalencias: ["LYS LF833N"], aplicacion: "Hyundai Mighty 1994-2000", elemento: false,
      presentacion: "Por unidad", unidad: "und", precio: 20.00, lote: null },
    { id: "filtro-26320-2f100", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite tipo elemento", codigo: "26320-2F100",
      equivalencias: [], aplicacion: "Hyundai Staria", elemento: true,
      presentacion: "Caja de 50 und", unidad: "und", precio: 35.00, lote: { tipo: "Caja", cantidad: 50 } },
    { id: "filtro-26320-3n000", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26320-3N000",
      equivalencias: [], aplicacion: "Kia Carnival 2022 3.5L V6; Hyundai Genesis G80 2021+ 3.5L V6", elemento: false,
      presentacion: "Caja de 40 und", unidad: "und", precio: 35.00, lote: { tipo: "Caja", cantidad: 40 } },
    { id: "filtro-26320-2r000", web: true, categoria: "aceite", marca: "Hyundai / Kia", titulo: "Kit de servicio de aceite", codigo: "26320-2R000",
      equivalencias: [], aplicacion: "Kit de servicio original. Hyundai y Kia diésel 2.0L; Santa Fe IV 2.0 y Tucson NX4 2.0 (2021)", elemento: false,
      presentacion: "Por unidad", unidad: "und", precio: 35.00, lote: null },

    // *** FILTROS DE AIRE ***
    { id: "filtro-28113-4f000", web: true, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28113-4F000",
      equivalencias: ["LYS AFL1524 HD"], aplicacion: "Diésel. H100 2006+ (D4BB, D4BH, D4CB)", elemento: false,
      presentacion: "Caja de 30 und", unidad: "und", precio: 73.00, lote: { tipo: "Caja", cantidad: 30 } },

    { id: "filtro-28113-4e500", web: true, categoria: "aire", marca: "Kia", titulo: "Filtro de aire", codigo: "28113-4E500",
      equivalencias: [], aplicacion: "Diésel. Kia K2500 HDI 2.5 2014; Kia Bongo K2500 2014", elemento: false,
      presentacion: "Caja de 15 und", unidad: "und", precio: 61.00, lote: { tipo: "Caja", cantidad: 15 } },
    { id: "filtro-28130-5a500", web: true, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28130-5A500",
      equivalencias: ["LYS AFL 5500 HD"], aplicacion: "Diésel. County, HD45, HD65, HD75 y HD78 2010+ (D4DD)", elemento: false,
      presentacion: "Caja de 6 und", unidad: "und", precio: 162.00, lote: { tipo: "Caja", cantidad: 6 } },
    { id: "filtro-28113-n9000", web: true, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28113-N9000",
      equivalencias: [], aplicacion: "Hyundai Staria; Santa Fe 2021/2022; Tucson 2021/2022", elemento: false,
      presentacion: "Lote de 10 und", unidad: "und", beneficio: false, precio: 58.50, lote: { tipo: "Lote", cantidad: 10 } },
    { id: "filtro-28130-5m100", web: true, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28130-5M100",
      equivalencias: [], aplicacion: "Mighty Truck", elemento: false,
      presentacion: "Por unidad", unidad: "und", precio: 155.00, lote: null },
    { id: "filtro-28113-c7000", web: true, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28113-C7000",
      equivalencias: [], aplicacion: "Hyundai i20 1.1, 1.2 y 1.4; Accent 2019+; Kia Sonet y K3 (algunos modelos); Eon e i10 (algunos modelos)", elemento: false,
      presentacion: "Por unidad", unidad: "und", beneficio: false, precio: 41.00, lote: null },
    { id: "filtro-28113-4h000", web: true, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28113-4H000",
      equivalencias: [], aplicacion: "Hyundai H1 2.5 CRDi 8V 2012+", elemento: false,
      presentacion: "Lote de 12 und", unidad: "und", beneficio: false, precio: 46.50, lote: { tipo: "Lote", cantidad: 12 } },

    // *** FILTROS DE COMBUSTIBLE ***
    { id: "filtro-31922-2e900", web: true, categoria: "combustible", marca: "Hyundai / Kia", titulo: "Filtro de combustible", codigo: "31922-2E900",
      equivalencias: ["31922-4H000", "31922-4H001", "31922-4H900", "LYS LFP3192 NX"], aplicacion: "Diésel. H1 2007+ (D4BH); H100 2006+ (D4CB); K2700 2015+ (D4CB)", elemento: false,
      presentacion: "Caja de 20 und", unidad: "und", precio: 76.00, lote: { tipo: "Caja", cantidad: 20 } },

    { id: "filtro-31922-4h001", web: true, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31922-4H001",
      equivalencias: ["31922-4H900", "31922-4H000", "31922-2E900"], aplicacion: "Diésel", elemento: false,
      presentacion: "Por unidad", unidad: "und", precio: 88.00, lote: null },
    { id: "filtro-31922-4h900", web: true, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31922-4H900",
      equivalencias: ["31922-4H001", "31922-2E900"], aplicacion: "Diésel", elemento: false,
      presentacion: "Por unidad", unidad: "und", precio: 88.00, lote: null },
    { id: "filtro-31922-cg950", web: true, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible tipo elemento", codigo: "31922-CG950",
      equivalencias: ["31922-CG900"], aplicacion: "Hyundai Staria", elemento: true,
      presentacion: "Lote de 12 und", unidad: "und", precio: null, lote: { tipo: "Lote", cantidad: 12 } },
    { id: "filtro-31922-26910", web: true, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31922-26910",
      equivalencias: [], aplicacion: null, elemento: false,
      presentacion: "Caja de 10 und", unidad: "und", beneficio: false, precio: 108.00, lote: { tipo: "Caja", cantidad: 10 } },
    { id: "filtro-31945-52161", web: true, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31945-52161",
      equivalencias: [], aplicacion: "County D4DD", elemento: false,
      presentacion: "Caja de 10 und", unidad: "und", precio: 270.00, lote: { tipo: "Caja", cantidad: 10 } },
    { id: "filtro-31945-41002", web: true, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31945-41002",
      equivalencias: ["LYS LFP 68"], aplicacion: null, elemento: false,
      presentacion: "Por unidad", unidad: "und", precio: 30.00, lote: null },

    // *** FLUIDOS (se venden por caja; el precio por caja SÍ se muestra) ***
    { id: "chevron-atf", web: true, categoria: "fluidos", marca: "Chevron", titulo: "ATF Chevron Supreme MD-3", codigo: "ATF-MD3",
      equivalencias: [], aplicacion: "Fluido para transmisiones automáticas", elemento: false,
      presentacion: "Caja de 12 botellas de 1 qt (946 ml)", unidad: "caja", precio: 250.00, volumen: { precio: 245.00, desde: 4 },
      escalas: [{ precio: 245.00, desde: 4 }, { precio: 240.00, desde: 8 }], lote: null },
    { id: "prestone-5050-rojo", web: true, categoria: "fluidos", marca: "Prestone", titulo: "Refrigerante Prestone 50/50 rojo", codigo: "PRESTONE-5050",
      equivalencias: [], aplicacion: "Sistema de refrigeración del motor", elemento: false,
      presentacion: "Caja de 6 x 1 galón", unidad: "caja", precio: 240.00, volumen: null, lote: null },
    { id: "prestone-33-verde", web: true, categoria: "fluidos", marca: "Prestone", titulo: "Refrigerante Prestone 33% verde", codigo: "PRESTONE-33",
      equivalencias: [], aplicacion: "Sistema de refrigeración del motor", elemento: false,
      presentacion: "Caja de 6 x 1 galón", unidad: "caja", precio: 180.00, volumen: null, lote: null }
];

/* Precio de mercado de referencia (mayoristas de originales en Lima), por código.
   Solo con datos reales y verificados; nunca un "precio antes" inventado.
   Ejemplo: "26350-2M000": 45.00. Si un código no está aquí, no se calcula
   su ahorro frente al mercado. */
const PRECIOS_MERCADO = {
};

// Productos destacados de la portada, en este orden.
const DESTACADOS = ["filtro-26350-2m000", "filtro-26350-2s001", "filtro-26330-4a001", "chevron-atf"];

// Nombre y descripción de cada línea.
const LINEAS = {
    packs:       { nombre: "Packs Ahorro",           pagina: "cat-packs.html",       desc: "El servicio completo por vehículo, más barato que por separado." },
    aceite:      { nombre: "Filtros de aceite",      pagina: "cat-aceite.html",      desc: "Filtros originales Hyundai y Kia, roscados y tipo elemento." },
    aire:        { nombre: "Filtros de aire",        pagina: "cat-aire.html",        desc: "Filtros originales para la admisión del motor." },
    combustible: { nombre: "Filtros de combustible", pagina: "cat-combustible.html", desc: "Filtros originales para motores diésel Hyundai y Kia." },
    fluidos:     { nombre: "Fluidos",                pagina: "cat-fluidos.html",     desc: "ATF Chevron Supreme MD-3 y refrigerante Prestone, por caja." }
};

// Reglas comerciales de la web
const REGLAS = {
    deliveryGratisDesde: 200,          // S/ con IGV, en Lima (filtros, packs y fluidos)
    excluidosSumanAlBeneficio: true    // los filtros con beneficio: false (precio neto) suman al monto de "Elige tu beneficio"; pon false si no deben sumar
};

/* "Elige tu beneficio": el monto se cuenta en filtros y packs (ATF y
   Prestone suman solo para el delivery). El cliente elige A o B. */
const BENEFICIOS = [
    { desde: 500,  descuento: 35,  regalo: 5,  valorRegalo: 60 },
    { desde: 1000, descuento: 80,  regalo: 12, valorRegalo: 144 },
    { desde: 2000, descuento: 180, regalo: 25, valorRegalo: 300 }
];
const CODIGO_REGALO = "26300-02752";

/* Racha LubriBaro: se lleva por WhatsApp; aquí solo los textos de la web. */
const RACHA = {
    minimoPedido: 300,
    niveles: [
        { nivel: 1, nombre: "Nivel 1", cuando: "Primer pedido, o al reiniciar", bono: "S/ 20", usar: "Próximo pedido de S/ 400 o más en filtros" },
        { nivel: 2, nombre: "Nivel 2", cuando: "Vuelves a pedir dentro de 30 días", bono: "S/ 30", usar: "Próximo pedido de S/ 500 o más" },
        { nivel: 3, nombre: "Nivel 3", cuando: "Otra vez dentro de 30 días, y en adelante", bono: "S/ 40 + Cliente Frecuente", usar: "Próximo pedido de S/ 600 o más" }
    ]
};

// Fotos: img/productos/[código].jpg (por ejemplo img/productos/26350-2M000.jpg)
PRODUCTOS.forEach(p => {
    p.foto = `img/productos/${p.codigo}.jpg`;
    p.precioMercado = PRECIOS_MERCADO[p.codigo] || null;
});

// Imagen genérica por tipo, si el código no tiene foto propia.
function fotoGenerica(p) {
    if (p.categoria === "aceite") return p.elemento ? "img/productos/generico-elemento.jpg" : "img/productos/generico-aceite-rosca.jpg";
    if (p.categoria === "aire") return "img/productos/generico-aire.jpg";
    if (p.categoria === "combustible") return "img/productos/generico-combustible.jpg";
    return null;
}

/* ---------------------------------------------------------------------
   UTILIDADES COMPARTIDAS
   --------------------------------------------------------------------- */

function esFiltro(p) {
    return p.categoria === "aceite" || p.categoria === "aire" || p.categoria === "combustible";
}
function esPack(p) {
    return p.categoria === "packs";
}
function productoPorCodigo(codigo) {
    return PRODUCTOS.find(p => p.codigo === codigo) || null;
}
// Precio por separado de un pack (suma de sus piezas a precio único).
function precioSeparado(pack) {
    return pack.piezas.reduce((s, x) => s + productoPorCodigo(x.codigo).precio * x.cantidad, 0);
}
function ahorroPack(pack) {
    return Math.round((precioSeparado(pack) - pack.precio) * 100) / 100;
}
// Packs que incluyen un código
function packsConCodigo(codigo) {
    return productosPublicados().filter(p => esPack(p) && p.piezas.some(x => x.codigo === codigo));
}
// ¿Suma al monto de "Elige tu beneficio"?
function sumaAlBeneficio(p) {
    if (esPack(p)) return true;
    if (!esFiltro(p)) return false;
    return p.beneficio !== false || REGLAS.excluidosSumanAlBeneficio;
}
// Nivel de beneficio alcanzado por un monto (o null)
function beneficioPara(monto) {
    return BENEFICIOS.filter(b => monto >= b.desde).pop() || null;
}
function siguienteBeneficio(monto) {
    return BENEFICIOS.find(b => monto < b.desde) || null;
}

function productosPublicados() {
    return PRODUCTOS.filter(p => p.web);
}

function obtenerProducto(id) {
    return PRODUCTOS.find(p => p.id === id && p.web) || null;
}

function productosDeCategoria(categoria) {
    return productosPublicados().filter(p => p.categoria === categoria);
}

function altProducto(p) {
    return `${p.titulo} ${p.marca} - código ${p.codigo}`;
}

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// "S/ 1,234.50"
function soles(n) {
    return "S/ " + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Texto de la aplicación para mostrar (nunca se inventa).
function textoAplicacion(p) {
    return p.aplicacion || "Consultar aplicación por WhatsApp";
}

/* Precio que corresponde a una cantidad.
   - Fluidos: precio por caja según sus escalas.
   - Filtros y packs: precio único. Si un filtro llega a su caja o lote,
     se marca "precio de caja a confirmar" y el total usa el precio único.
   - precio null: "Precio: consultar". */
function precioParaCantidad(p, cantidad) {
    if (p.precio === null) return { consultar: true, precio: 0, tramo: "consultar", cajaConfirmar: false };
    if (p.categoria === "fluidos") {
        const escala = (p.escalas || []).filter(e => cantidad >= e.desde).pop();
        return escala
            ? { precio: escala.precio, tramo: "volumen", cajaConfirmar: false }
            : { precio: p.precio, tramo: "mayorista", cajaConfirmar: false };
    }
    return { precio: p.precio, tramo: "mayorista", cajaConfirmar: !!(p.lote && cantidad >= p.lote.cantidad) };
}

// Minúsculas y sin tildes, para comparar sin importar cómo escriba el cliente.
function normalizarTexto(texto) {
    return String(texto || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Solo letras y números: "26350 2M000", "263502M000" y "26350-2M000" son iguales.
function compactarTexto(texto) {
    return normalizarTexto(texto).replace(/[^a-z0-9]/g, "");
}

/* Busca por código (OEM o equivalente) o por modelo de vehículo.
   Coincide si el código aparece (ignorando guiones y espacios),
   o si todas las palabras buscadas aparecen en el producto. */
function buscarProductos(consulta) {
    const palabras = normalizarTexto(consulta).split(/[^a-z0-9]+/).filter(Boolean);
    const compacta = compactarTexto(consulta);
    if (!compacta) return productosPublicados();

    return productosPublicados().filter(p => {
        const piezas = (p.piezas || []).map(x => x.codigo);
        const texto = normalizarTexto([p.codigo, p.equivalencias.join(" "), piezas.join(" "), p.aplicacion, p.titulo, p.marca, LINEAS[p.categoria].nombre].join(" "));
        const codigos = [p.codigo, ...p.equivalencias, ...piezas].map(compactarTexto);
        if (compacta.length >= 3 && codigos.some(c => c.includes(compacta))) return true;
        return palabras.every(w => texto.includes(w));
    });
}
