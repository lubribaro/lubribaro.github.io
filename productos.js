/* =====================================================================
   LUBRIBARO - LISTA ÚNICA DE PRODUCTOS
   ---------------------------------------------------------------------
   Todas las páginas leen de aquí (inicio, catálogo, líneas, ficha y
   carrito de cotización). Para agregar o corregir un producto, edítalo
   solo en esta lista.

   Precios: en soles, INCLUYEN IGV y son POR UNIDAD (en fluidos, por caja).
   Fuente: "Precios LubriBaro" revisados por Gabriel (16 nov 2026).

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
     foto           Archivo de foto en el repositorio, o null
     unidad         "und" (filtros) | "caja" (fluidos)
     precio         Precio por unidad (o por caja en fluidos)
     volumen        { precio, desde } precio por volumen y desde cuántas
                    unidades aplica, o null
     lote           { tipo: "Caja" | "Lote", cantidad } desde esa cantidad
                    el precio es especial y se cotiza (NO se muestra), o null
   ===================================================================== */

const PRODUCTOS = [
    // *** FILTROS DE ACEITE ***
    { id: "filtro-26300-02752", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26300-02752",
      equivalencias: ["LYS LF3007", "Nissan 15208-31U00", "Mitsubishi MD135737"], aplicacion: "Gasolina", elemento: false,
      presentacion: "Caja de 20 und", foto: null, unidad: "und", precio: 12.00, volumen: { precio: 10.50, desde: 10 }, lote: { tipo: "Caja", cantidad: 20 } },
    { id: "filtro-26330-4a001", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26330-4A001",
      equivalencias: ["LYS LF604A", "Hyundai 26300-42040"], aplicacion: "Diésel", elemento: false,
      presentacion: "Caja de 20 und", foto: "filtro-26330-4a001.jpg", unidad: "und", precio: 32.00, volumen: { precio: 30.00, desde: 10 }, lote: { tipo: "Caja", cantidad: 20 } },
    { id: "filtro-26320-3c100", web: true, categoria: "aceite", marca: "Hyundai / Kia", titulo: "Filtro de aceite tipo elemento", codigo: "26320-3C100",
      equivalencias: [], aplicacion: "Hyundai Santa Fe, Sonata, Veracruz; Kia Grand Carnival, Sorento", elemento: true,
      presentacion: "Caja de 50 und", foto: "filtro-26320-3c100.jpg", unidad: "und", precio: 33.00, volumen: { precio: 30.50, desde: 10 }, lote: { tipo: "Caja", cantidad: 50 } },
    { id: "filtro-26350-2s001", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite tipo elemento", codigo: "26350-2S001",
      equivalencias: [], aplicacion: "Hyundai Tucson modernas", elemento: true,
      presentacion: "Caja de 60 und", foto: "filtro-26350-2s001.jpg", unidad: "und", precio: 38.00, volumen: { precio: 35.00, desde: 10 }, lote: { tipo: "Caja", cantidad: 60 } },
    { id: "filtro-26350-2m000", web: true, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite tipo elemento", codigo: "26350-2M000",
      equivalencias: [], aplicacion: "Kia New Sorento 2020+, Kia Rio 2019+", elemento: true,
      presentacion: "Caja de 40 und", foto: "filtro-26350-2m000.jpg", unidad: "und", precio: 38.00, volumen: { precio: 35.00, desde: 10 }, lote: { tipo: "Caja", cantidad: 40 } },
    { id: "filtro-26350-2j001", web: true, categoria: "aceite", marca: "Hyundai / Kia", titulo: "Filtro de aceite", codigo: "26350-2J001",
      equivalencias: [], aplicacion: null, elemento: false,
      presentacion: "Caja de 60 und", foto: "filtro-26350-2j001.jpg", unidad: "und", precio: 38.00, volumen: { precio: 35.00, desde: 10 }, lote: { tipo: "Caja", cantidad: 60 } },

    // Filtros de aceite que se publicarán después (web: false)
    { id: "filtro-26300-35505", web: false, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26300-35505",
      equivalencias: [], aplicacion: null, elemento: false,
      presentacion: "Caja de 40 und", foto: "filtro-26300-35505.jpg", unidad: "und", precio: 17.00, volumen: { precio: 16.00, desde: 20 }, lote: { tipo: "Caja", cantidad: 40 } },
    { id: "filtro-26311-45010", web: false, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26311-45010",
      equivalencias: ["LYS LF9604", "LYS LF601"], aplicacion: "Diésel. HD45, HD65, HD75 y HD78 2010+ (D4AF, D4AL, D4DB, D4DC, D4DD)", elemento: false,
      presentacion: "Caja de 20 und", foto: "filtro-26311-45010.jpg", unidad: "und", precio: 56.00, volumen: { precio: 53.50, desde: 5 }, lote: { tipo: "Caja", cantidad: 20 } },
    { id: "filtro-26325-52003", web: false, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite tipo elemento", codigo: "26325-52003",
      equivalencias: ["26311-52001", "26311-52002", "26325-52000", "26325-52002"], aplicacion: "Mighty / HD38 / HD78", elemento: true,
      presentacion: "Caja de 40 und", foto: "filtro-26325-52003.jpg", unidad: "und", precio: 74.00, volumen: { precio: 71.00, desde: 5 }, lote: { tipo: "Caja", cantidad: 40 } },
    { id: "filtro-ok87a-14317", web: false, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "OK87A-14317",
      equivalencias: ["Sakura C1735"], aplicacion: "Diésel. HD120, motor D6DA", elemento: false,
      presentacion: "Caja de 16 und", foto: "filtro-ok87a-14317.jpg", unidad: "und", precio: 87.50, volumen: { precio: 84.00, desde: 5 }, lote: { tipo: "Caja", cantidad: 16 } },
    { id: "filtro-26316-41000", web: false, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26316-41000",
      equivalencias: ["LYS LF833N"], aplicacion: "Hyundai Mighty 1994-2000", elemento: false,
      presentacion: "Por unidad", foto: "filtro-26316-41000.jpg", unidad: "und", precio: 20.00, volumen: { precio: 18.50, desde: 10 }, lote: null },
    { id: "filtro-26320-2f100", web: false, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite tipo elemento", codigo: "26320-2F100",
      equivalencias: [], aplicacion: "Hyundai Staria", elemento: true,
      presentacion: "Caja de 50 und", foto: "filtro-26320-2f100.jpg", unidad: "und", precio: 35.00, volumen: { precio: 32.00, desde: 10 }, lote: { tipo: "Caja", cantidad: 50 } },
    { id: "filtro-26320-3n000", web: false, categoria: "aceite", marca: "Hyundai", titulo: "Filtro de aceite", codigo: "26320-3N000",
      equivalencias: [], aplicacion: "Kia Carnival 2022 3.5L V6; Hyundai Genesis G80 2021+ 3.5L V6", elemento: false,
      presentacion: "Caja de 40 und", foto: "filtro-26320-3n000.jpg", unidad: "und", precio: 38.00, volumen: { precio: 35.50, desde: 10 }, lote: { tipo: "Caja", cantidad: 40 } },
    { id: "filtro-26320-2r000", web: false, categoria: "aceite", marca: "Hyundai / Kia", titulo: "Kit de servicio de aceite", codigo: "26320-2R000",
      equivalencias: [], aplicacion: "Kit de servicio original. Hyundai y Kia diésel 2.0L; Santa Fe IV 2.0 y Tucson NX4 2.0 (2021)", elemento: false,
      presentacion: "Por unidad", foto: "filtro-26320-2r000.jpg", unidad: "und", precio: 37.50, volumen: { precio: 34.50, desde: 10 }, lote: null },

    // *** FILTROS DE AIRE ***
    { id: "filtro-28113-4f000", web: true, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28113-4F000",
      equivalencias: ["LYS AFL1524 HD"], aplicacion: "Diésel. H100 2006+ (D4BB, D4BH, D4CB)", elemento: false,
      presentacion: "Caja de 30 und", foto: null, unidad: "und", precio: 64.00, volumen: { precio: 61.00, desde: 5 }, lote: { tipo: "Caja", cantidad: 30 } },

    { id: "filtro-28113-4e500", web: false, categoria: "aire", marca: "Kia", titulo: "Filtro de aire", codigo: "28113-4E500",
      equivalencias: [], aplicacion: "Diésel. Kia K2500 HDI 2.5 2014; Kia Bongo K2500 2014", elemento: false,
      presentacion: "Caja de 15 und", foto: null, unidad: "und", precio: 60.00, volumen: { precio: 57.50, desde: 5 }, lote: { tipo: "Caja", cantidad: 15 } },
    { id: "filtro-28130-5a500", web: false, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28130-5A500",
      equivalencias: ["LYS AFL 5500 HD"], aplicacion: "Diésel. County, HD45, HD65, HD75 y HD78 2010+ (D4DD)", elemento: false,
      presentacion: "Caja de 6 und", foto: null, unidad: "und", precio: 159.00, volumen: { precio: 152.00, desde: 5 }, lote: { tipo: "Caja", cantidad: 6 } },
    { id: "filtro-28113-n9000", web: false, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28113-N9000",
      equivalencias: [], aplicacion: "Hyundai Staria; Santa Fe 2021/2022; Tucson 2021/2022", elemento: false,
      presentacion: "Lote de 10 und", foto: null, unidad: "und", precio: 65.00, volumen: { precio: 63.00, desde: 5 }, lote: { tipo: "Lote", cantidad: 10 } },
    { id: "filtro-28130-5m100", web: false, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28130-5M100",
      equivalencias: [], aplicacion: "Mighty Truck", elemento: false,
      presentacion: "Por unidad", foto: null, unidad: "und", precio: 139.50, volumen: { precio: 133.50, desde: 5 }, lote: null },
    { id: "filtro-28113-c7000", web: false, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28113-C7000",
      equivalencias: [], aplicacion: "Hyundai i20 1.1, 1.2 y 1.4; Accent 2019+; Kia Sonet y K3 (algunos modelos); Eon e i10 (algunos modelos)", elemento: false,
      presentacion: "Por unidad", foto: null, unidad: "und", precio: 45.00, volumen: { precio: 42.50, desde: 5 }, lote: null },
    { id: "filtro-28113-4h000", web: false, categoria: "aire", marca: "Hyundai", titulo: "Filtro de aire", codigo: "28113-4H000",
      equivalencias: [], aplicacion: "Hyundai H1 2.5 CRDi 8V 2012+", elemento: false,
      presentacion: "Lote de 12 und", foto: null, unidad: "und", precio: 50.00, volumen: { precio: 47.00, desde: 5 }, lote: { tipo: "Lote", cantidad: 12 } },

    // *** FILTROS DE COMBUSTIBLE ***
    { id: "filtro-31922-2e900", web: true, categoria: "combustible", marca: "Hyundai / Kia", titulo: "Filtro de combustible", codigo: "31922-2E900",
      equivalencias: ["31922-4H000", "31922-4H001", "31922-4H900", "LYS LFP3192 NX"], aplicacion: "Diésel. H1 2007+ (D4BH); H100 2006+ (D4CB); K2700 2015+ (D4CB)", elemento: false,
      presentacion: "Caja de 20 und", foto: null, unidad: "und", precio: 72.00, volumen: { precio: 68.50, desde: 5 }, lote: { tipo: "Caja", cantidad: 20 } },

    { id: "filtro-31922-4h001", web: false, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31922-4H001",
      equivalencias: ["31922-4H900", "31922-4H000", "31922-2E900"], aplicacion: "Diésel", elemento: false,
      presentacion: "Por unidad", foto: null, unidad: "und", precio: 76.00, volumen: { precio: 72.50, desde: 5 }, lote: null },
    { id: "filtro-31922-4h900", web: false, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31922-4H900",
      equivalencias: ["31922-4H001", "31922-2E900"], aplicacion: "Diésel", elemento: false,
      presentacion: "Por unidad", foto: null, unidad: "und", precio: 76.00, volumen: { precio: 72.50, desde: 5 }, lote: null },
    { id: "filtro-31922-cg950", web: false, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible tipo elemento", codigo: "31922-CG950",
      equivalencias: ["31922-CG900"], aplicacion: "Hyundai Staria", elemento: true,
      presentacion: "Lote de 12 und", foto: null, unidad: "und", precio: 158.50, volumen: { precio: 151.50, desde: 5 }, lote: { tipo: "Lote", cantidad: 12 } },
    { id: "filtro-31922-26910", web: false, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31922-26910",
      equivalencias: [], aplicacion: null, elemento: false,
      presentacion: "Caja de 10 und", foto: null, unidad: "und", precio: 113.00, volumen: { precio: 108.00, desde: 5 }, lote: { tipo: "Caja", cantidad: 10 } },
    { id: "filtro-31945-52161", web: false, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31945-52161",
      equivalencias: [], aplicacion: "County D4DD", elemento: false,
      presentacion: "Caja de 10 und", foto: null, unidad: "und", precio: 280.00, volumen: { precio: 267.50, desde: 5 }, lote: { tipo: "Caja", cantidad: 10 } },
    { id: "filtro-31945-41002", web: false, categoria: "combustible", marca: "Hyundai", titulo: "Filtro de combustible", codigo: "31945-41002",
      equivalencias: ["LYS LFP 68"], aplicacion: null, elemento: false,
      presentacion: "Por unidad", foto: null, unidad: "und", precio: 28.00, volumen: { precio: 26.00, desde: 10 }, lote: null },

    // *** FLUIDOS (se venden por caja; el precio por caja SÍ se muestra) ***
    { id: "chevron-atf", web: true, categoria: "fluidos", marca: "Chevron", titulo: "ATF Chevron Supreme MD-3", codigo: "ATF-MD3",
      equivalencias: [], aplicacion: "Fluido para transmisiones automáticas", elemento: false,
      presentacion: "Caja de 12 botellas de 1 qt (946 ml)", foto: "chevron.jpg", unidad: "caja", precio: 230.00, volumen: { precio: 225.00, desde: 5 }, lote: null },
    { id: "prestone-5050-rojo", web: true, categoria: "fluidos", marca: "Prestone", titulo: "Refrigerante Prestone 50/50 rojo", codigo: "PRESTONE-5050",
      equivalencias: [], aplicacion: "Sistema de refrigeración del motor", elemento: false,
      presentacion: "Caja de 6 x 1 galón", foto: null, unidad: "caja", precio: 240.00, volumen: null, lote: null },
    { id: "prestone-33-verde", web: true, categoria: "fluidos", marca: "Prestone", titulo: "Refrigerante Prestone 33% verde", codigo: "PRESTONE-33",
      equivalencias: [], aplicacion: "Sistema de refrigeración del motor", elemento: false,
      presentacion: "Caja de 6 x 1 galón", foto: null, unidad: "caja", precio: 180.00, volumen: null, lote: null }
];

// Productos destacados de la portada, en este orden.
const DESTACADOS = ["filtro-26350-2m000", "filtro-26350-2s001", "filtro-26330-4a001", "chevron-atf"];

// Nombre y descripción de cada línea.
const LINEAS = {
    aceite:      { nombre: "Filtros de aceite",      pagina: "cat-aceite.html",      desc: "Filtros originales Hyundai y Kia, roscados y tipo elemento." },
    aire:        { nombre: "Filtros de aire",        pagina: "cat-aire.html",        desc: "Filtros originales para la admisión del motor." },
    combustible: { nombre: "Filtros de combustible", pagina: "cat-combustible.html", desc: "Filtros originales para motores diésel Hyundai y Kia." },
    fluidos:     { nombre: "Fluidos",                pagina: "cat-fluidos.html",     desc: "ATF Chevron Supreme MD-3 y refrigerante Prestone, por caja." }
};

/* ---------------------------------------------------------------------
   UTILIDADES COMPARTIDAS
   --------------------------------------------------------------------- */

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

/* Precio que corresponde a una cantidad:
   - desde la caja o el lote: precio especial a confirmar (no se muestra)
   - desde el tramo de volumen: precio por volumen
   - si no: precio por unidad */
function precioParaCantidad(p, cantidad) {
    if (p.lote && cantidad >= p.lote.cantidad) return { especial: true, precio: null, tramo: `${p.lote.tipo.toLowerCase()} (${p.lote.cantidad}+ ${p.unidad})` };
    if (p.volumen && cantidad >= p.volumen.desde) return { especial: false, precio: p.volumen.precio, tramo: "volumen" };
    return { especial: false, precio: p.precio, tramo: p.unidad === "caja" ? "por caja" : "por unidad" };
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
        const texto = normalizarTexto([p.codigo, p.equivalencias.join(" "), p.aplicacion, p.titulo, p.marca, LINEAS[p.categoria].nombre].join(" "));
        const codigos = [p.codigo, ...p.equivalencias].map(compactarTexto);
        if (compacta.length >= 3 && codigos.some(c => c.includes(compacta))) return true;
        return palabras.every(w => texto.includes(w));
    });
}
