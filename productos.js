/* =====================================================================
   LUBRIBARO B2B - LISTA ÚNICA DE PRODUCTOS
   ---------------------------------------------------------------------
   Este archivo es la ÚNICA fuente de datos del catálogo. index.html,
   catalogo.html (buscador), las páginas cat-*.html y producto.html leen
   de aquí. Para agregar o corregir un producto, edítalo solo en esta lista.

   Campos:
     id            Identificador usado en producto.html?id=...
     categoria     "aceite" | "aire" | "combustible" | "fluidos"
     subcategoria  Solo aceite: "metalico" | "elemento"
     codigo        Código OEM / SKU (sin el prefijo "SKU:")
     equivalencia  Código equivalente (ej. "LYS LF-604A") o null
     aplicacion    Texto corto de vehículos/uso para las tarjetas
     compatibilidad Texto de la pestaña COMPATIBILIDAD en producto.html
     foto          Nombre del archivo de foto en el repositorio, o null
     pdf           Ruta de la ficha técnica PDF real, o null (sin botón)
     precios       Lista de precios por volumen ([] = precio a consultar)
   ===================================================================== */

const PRECIOS_A_CONSULTAR = [];

const PRODUCTOS = [
    // *** FILTROS DE ACEITE (METÁLICOS) ***
    { id: "filtro-26330-4a001", categoria: "aceite", subcategoria: "metalico", marca: "HYUNDAI / KIA", titulo: "Filtro Aceite Metálico", codigo: "26330-4A001", equivalencia: "LYS LF-604A", aplicacion: "H100 - H1 - K2700 - Bongo", presentacion: "Caja x 10 und / Caja x 20 und", desc: "Elemento filtrante de alta capacidad para motores diesel.", compatibilidad: "Hyundai H100, H1, Kia K2700, Bongo.", foto: "filtro-26330-4a001.jpg", tipo: "Filtro de Aceite (Metálico)", pdf: null, precios: [ { qty:"1 Decena", val:"23,14" }, { qty:"Media Caja", val:"22,50" }, { qty:"1 a 2 Cajas", val:"21,50", highlight:true } ] },
    { id: "filtro-26300-35505", categoria: "aceite", subcategoria: "metalico", marca: "HYUNDAI / KIA", titulo: "Filtro Aceite Metálico", codigo: "26300-35505", equivalencia: "LYS LF-260", aplicacion: "Cerato - Elantra - Optima - Sportage - Tucson", presentacion: "Caja x 40 und", desc: "Filtro de aceite estándar de alta rotación para vehículos asiáticos.", compatibilidad: "Cerato, Elantra, Optima, Sportage, Tucson.", foto: "filtro-26300-35505.jpg", tipo: "Filtro de Aceite (Metálico)", pdf: null, precios: [ { qty:"1 Decena", val:"11,50" }, { qty:"Media Caja", val:"11,00" }, { qty:"1 a 2 Cajas", val:"10,50", highlight:true } ] },
    { id: "filtro-ok87a-14317", categoria: "aceite", subcategoria: "metalico", marca: "HYUNDAI", titulo: "Filtro Aceite Metálico", codigo: "OK87A-14317", equivalencia: "SAKURA C1735", aplicacion: "Hyundai HD120 (Motor D6DA Diesel)", presentacion: "Por definir", desc: "Filtro de aceite de alto rendimiento para motores diesel pesados.", compatibilidad: "Hyundai HD120 (Motor D6DA diesel).", foto: "filtro-ok87a-14317.jpg", tipo: "Filtro de Aceite (Metálico)", pdf: null, precios: [ { qty:"1 Decena", val:"65,74" }, { qty:"Media Caja", val:"64,00" }, { qty:"1 a 2 Cajas", val:"62,50", highlight:true } ] },
    { id: "filtro-26316-41000", categoria: "aceite", subcategoria: "metalico", marca: "HYUNDAI", titulo: "Filtro Aceite Metálico", codigo: "26316-41000", equivalencia: "LYS LF-833N", aplicacion: "Mighty HD65 - HD72 - HD78 (1998+)", presentacion: "Por definir", desc: "Elemento de filtración superior para vehículos comerciales.", compatibilidad: "Hyundai Mighty HD65, HD72, HD78 (1998+).", foto: "filtro-26316-41000.jpg", tipo: "Filtro de Aceite (Metálico)", pdf: null, precios: [ { qty:"1 Decena", val:"13,24" }, { qty:"Media Caja", val:"12,50" }, { qty:"1 a 2 Cajas", val:"11,80", highlight:true } ] },
    { id: "filtro-26311-45010", categoria: "aceite", subcategoria: "metalico", marca: "HYUNDAI", titulo: "Filtro Aceite Metálico", codigo: "26311-45010", equivalencia: null, aplicacion: "Serie HD45 - HD65 - HD75", presentacion: "Por definir", desc: "Filtro metálico robusto para serie HD.", compatibilidad: "Hyundai Serie HD45, HD65, HD75.", foto: "filtro-26311-45010.jpg", tipo: "Filtro de Aceite (Metálico)", pdf: null, precios: [ { qty:"1 Decena", val:"42,58" }, { qty:"Media Caja", val:"41,00" }, { qty:"1 a 2 Cajas", val:"39,50", highlight:true } ] },

    // *** FILTROS DE ACEITE (TIPO ELEMENTO) ***
    { id: "filtro-26320-2f100", categoria: "aceite", subcategoria: "elemento", marca: "HYUNDAI", titulo: "Filtro Aceite Elemento", codigo: "26320-2F100", equivalencia: null, aplicacion: "Hyundai Staria", presentacion: "Por definir", desc: "Filtro tipo elemento (cartucho) ecológico y de alta eficiencia.", compatibilidad: "Hyundai Staria.", foto: "filtro-26320-2f100.jpg", tipo: "Filtro de Aceite (Elemento)", pdf: null, precios: [ { qty:"1 Decena", val:"19,81" }, { qty:"Media Caja", val:"18,50" }, { qty:"1 a 2 Cajas", val:"17,80", highlight:true } ] },
    { id: "filtro-26320-3n000", categoria: "aceite", subcategoria: "elemento", marca: "OEM", titulo: "Filtro Aceite Elemento", codigo: "26320-3N000", equivalencia: null, aplicacion: "Alta eficiencia", presentacion: "Por definir", desc: "Cartucho de aceite con retención de impurezas superior.", compatibilidad: "Consulte aplicación en catálogo.", foto: "filtro-26320-3n000.jpg", tipo: "Filtro de Aceite (Elemento)", pdf: null, precios: [ { qty:"1 Decena", val:"24,72" }, { qty:"Media Caja", val:"23,50" }, { qty:"1 a 2 Cajas", val:"22,50", highlight:true } ] },
    { id: "filtro-26320-2r000", categoria: "aceite", subcategoria: "elemento", marca: "HYUNDAI / KIA", titulo: "Filtro Aceite Elemento", codigo: "26320-2R000", equivalencia: null, aplicacion: "Hyundai/Kia Motor diesel 2.0L", presentacion: "Por definir", desc: "Cartucho filtrante para motores diesel modernos.", compatibilidad: "Motores diesel 2.0L Hyundai y Kia.", foto: "filtro-26320-2r000.jpg", tipo: "Filtro de Aceite (Elemento)", pdf: null, precios: [ { qty:"1 Decena", val:"23,86" }, { qty:"Media Caja", val:"22,80" }, { qty:"1 a 2 Cajas", val:"21,50", highlight:true } ] },
    { id: "filtro-26350-2m000", categoria: "aceite", subcategoria: "elemento", marca: "KIA", titulo: "Filtro Aceite Elemento", codigo: "26350-2M000", equivalencia: null, aplicacion: "Kia New Sorento - Rio", presentacion: "Por definir", desc: "Cartucho original para retención óptima de partículas.", compatibilidad: "Kia New Sorento, Rio.", foto: "filtro-26350-2m000.jpg", tipo: "Filtro de Aceite (Elemento)", pdf: null, precios: [ { qty:"1 Decena", val:"26,57" }, { qty:"Media Caja", val:"25,50" }, { qty:"1 a 2 Cajas", val:"24,50", highlight:true } ] },
    { id: "filtro-26350-2j001", categoria: "aceite", subcategoria: "elemento", marca: "OEM", titulo: "Filtro Aceite Elemento", codigo: "26350-2J001", equivalencia: null, aplicacion: "Alta eficiencia", presentacion: "Por definir", desc: "Cartucho ecológico para vehículos modernos.", compatibilidad: "Consulte aplicación en catálogo.", foto: "filtro-26350-2j001.jpg", tipo: "Filtro de Aceite (Elemento)", pdf: null, precios: [ { qty:"1 Decena", val:"26,57" }, { qty:"Media Caja", val:"25,50" }, { qty:"1 a 2 Cajas", val:"24,50", highlight:true } ] },
    { id: "filtro-26320-3c100", categoria: "aceite", subcategoria: "elemento", marca: "OEM", titulo: "Filtro Aceite Elemento", codigo: "26320-3C100", equivalencia: null, aplicacion: "Alta eficiencia", presentacion: "Por definir", desc: "Cartucho de filtración de flujo constante.", compatibilidad: "Consulte aplicación en catálogo.", foto: "filtro-26320-3c100.jpg", tipo: "Filtro de Aceite (Elemento)", pdf: null, precios: [ { qty:"1 Decena", val:"20,93" }, { qty:"Media Caja", val:"19,50" }, { qty:"1 a 2 Cajas", val:"18,80", highlight:true } ] },
    { id: "filtro-26325-52003", categoria: "aceite", subcategoria: "elemento", marca: "HYUNDAI", titulo: "Filtro Aceite Elemento", codigo: "26325-52003", equivalencia: null, aplicacion: "Hyundai Mighty HD38 - HD78", presentacion: "Por definir", desc: "Cartucho de aceite reforzado para vehículos de carga.", compatibilidad: "Hyundai Mighty HD38, HD78.", foto: "filtro-26325-52003.jpg", tipo: "Filtro de Aceite (Elemento)", pdf: null, precios: [ { qty:"1 Decena", val:"58,78" }, { qty:"Media Caja", val:"57,00" }, { qty:"1 a 2 Cajas", val:"55,50", highlight:true } ] },
    { id: "filtro-26350-2s001", categoria: "aceite", subcategoria: "elemento", marca: "OEM", titulo: "Filtro Aceite Elemento", codigo: "26350-2S001", equivalencia: null, aplicacion: "Alta eficiencia", presentacion: "Por definir", desc: "Cartucho ecológico y de alta capacidad.", compatibilidad: "Consulte aplicación en catálogo.", foto: "filtro-26350-2s001.jpg", tipo: "Filtro de Aceite (Elemento)", pdf: null, precios: [ { qty:"1 Decena", val:"26,57" }, { qty:"Media Caja", val:"25,50" }, { qty:"1 a 2 Cajas", val:"24,50", highlight:true } ] },

    // *** FILTROS DE AIRE (datos incompletos: completar presentación, precios y fotos) ***
    { id: "filtro-28130-5m100", categoria: "aire", marca: "OEM", titulo: "Filtro de Aire OEM", codigo: "28130-5M100", equivalencia: null, aplicacion: "OEM: Retención superior.", presentacion: "Por definir", desc: "Filtro de aire OEM de retención superior de partículas para el cuidado de la admisión.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Aire", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-28130-5a500", categoria: "aire", marca: "OEM", titulo: "Filtro de Aire OEM", codigo: "28130-5A500", equivalencia: null, aplicacion: "OEM: Retención superior.", presentacion: "Por definir", desc: "Filtro de aire OEM de retención superior de partículas para el cuidado de la admisión.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Aire", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-28113-c7000", categoria: "aire", marca: "HYUNDAI / KIA", titulo: "Filtro de Aire OEM", codigo: "28113-C7000", equivalencia: null, aplicacion: "Hyundai/Kia: i20, Rio, Sonet.", presentacion: "Por definir", desc: "Filtro de aire OEM de retención superior de partículas para el cuidado de la admisión.", compatibilidad: "Hyundai i20, Kia Rio, Sonet.", foto: null, tipo: "Filtro de Aire", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-28113-4e500", categoria: "aire", marca: "OEM", titulo: "Filtro de Aire OEM", codigo: "28113-4E500", equivalencia: null, aplicacion: "OEM: Retención superior.", presentacion: "Por definir", desc: "Filtro de aire OEM de retención superior de partículas para el cuidado de la admisión.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Aire", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-28113-n9000", categoria: "aire", marca: "OEM", titulo: "Filtro de Aire OEM", codigo: "28113-N9000", equivalencia: null, aplicacion: "OEM: Retención superior.", presentacion: "Por definir", desc: "Filtro de aire OEM de retención superior de partículas para el cuidado de la admisión.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Aire", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-28113-l1000", categoria: "aire", marca: "OEM", titulo: "Filtro de Aire OEM", codigo: "28113-L1000", equivalencia: null, aplicacion: "OEM: Retención superior.", presentacion: "Por definir", desc: "Filtro de aire OEM de retención superior de partículas para el cuidado de la admisión.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Aire", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-28113-4h000", categoria: "aire", marca: "OEM", titulo: "Filtro de Aire OEM", codigo: "28113-4H000", equivalencia: null, aplicacion: "OEM: Retención superior.", presentacion: "Por definir", desc: "Filtro de aire OEM de retención superior de partículas para el cuidado de la admisión.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Aire", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-28113-4f000", categoria: "aire", marca: "OEM", titulo: "Filtro de Aire OEM", codigo: "28113-4F000", equivalencia: null, aplicacion: "OEM: Retención superior.", presentacion: "Por definir", desc: "Filtro de aire OEM de retención superior de partículas para el cuidado de la admisión.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Aire", pdf: null, precios: PRECIOS_A_CONSULTAR },

    // *** FILTROS DE COMBUSTIBLE (datos incompletos: completar presentación, precios y fotos) ***
    { id: "filtro-31922-2e900", categoria: "combustible", marca: "OEM", titulo: "Filtro Combustible OEM", codigo: "31922-2E900", equivalencia: null, aplicacion: "OEM: Alta presión.", presentacion: "Por definir", desc: "Filtro de combustible OEM para sistemas de alta presión.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Combustible", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-31922-4h900", categoria: "combustible", marca: "OEM", titulo: "Filtro Combustible OEM", codigo: "31922-4H900", equivalencia: null, aplicacion: "OEM: Separador de agua.", presentacion: "Por definir", desc: "Filtro de combustible OEM con separador de agua.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Combustible", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-31922-4h001", categoria: "combustible", marca: "OEM", titulo: "Filtro Combustible OEM", codigo: "31922-4H001", equivalencia: null, aplicacion: "OEM: Protección CRDI.", presentacion: "Por definir", desc: "Filtro de combustible OEM para protección de sistemas de inyección CRDI.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Combustible", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-31922-26910", categoria: "combustible", marca: "OEM", titulo: "Filtro Combustible OEM", codigo: "31922-26910", equivalencia: null, aplicacion: "OEM: Larga duración.", presentacion: "Por definir", desc: "Filtro de combustible OEM de larga duración.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Combustible", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-31922-cg950", categoria: "combustible", marca: "OEM", titulo: "Filtro Combustible OEM", codigo: "31922-CG950", equivalencia: null, aplicacion: "OEM: Larga duración.", presentacion: "Por definir", desc: "Filtro de combustible OEM de larga duración.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Combustible", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-31945-41002", categoria: "combustible", marca: "OEM", titulo: "Filtro Combustible OEM", codigo: "31945-41002", equivalencia: null, aplicacion: "OEM: Larga duración.", presentacion: "Por definir", desc: "Filtro de combustible OEM de larga duración.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Combustible", pdf: null, precios: PRECIOS_A_CONSULTAR },
    { id: "filtro-31945-52161", categoria: "combustible", marca: "OEM", titulo: "Filtro Combustible OEM", codigo: "31945-52161", equivalencia: null, aplicacion: "OEM: Larga duración.", presentacion: "Por definir", desc: "Filtro de combustible OEM de larga duración.", compatibilidad: "Consulte aplicación con un asesor.", foto: null, tipo: "Filtro de Combustible", pdf: null, precios: PRECIOS_A_CONSULTAR },

    // *** FLUIDOS ***
    { id: "chevron-atf", categoria: "fluidos", marca: "CHEVRON", titulo: "Chevron Supreme ATF MD-3", codigo: "ATF-MD3", equivalencia: null, aplicacion: "Hyundai Accent, Elantra, Tucson.", resumen: "Caja 12x1/4 GL", presentacion: "Caja de 12 x 1/4 GL", desc: "Máxima protección contra la formación de lacas. Estabilidad excepcional para transmisiones automáticas.", compatibilidad: "Transmisiones Automáticas Hyundai, Kia que soliciten DEXRON-III.", foto: "chevron.jpg", tipo: "Fluido de Transmisión", pdf: null, precios: [ { qty:"1 Caja", val:"290,00" }, { qty:"2 Cajas", val:"285,00", highlight:true } ] },
    { id: "efeos-5050", categoria: "fluidos", marca: "EFEOS", titulo: "Refrigerante EFEOS 50/50", codigo: "EF-5050", equivalencia: null, aplicacion: "Hyundai Tucson, Santa Fe, Kia Sorento.", resumen: "Caja 3 Gal.", presentacion: "Caja de 3 Galoneras", desc: "Fórmula lista para usar de larga vida. Previene sobrecalentamiento y corrosión del motor.", compatibilidad: "Flotas de Hyundai, Kia y vehículos asiáticos.", foto: null, tipo: "Refrigerante / Anticongelante", pdf: null, precios: [ { qty:"1 Caja", val:"120,00" }, { qty:"2 Cajas", val:"115,00", highlight:true } ] }
];

// "Productos más solicitados" de la portada (index.html), en este orden.
const DESTACADOS = ["chevron-atf", "filtro-26300-35505", "filtro-31922-2e900", "efeos-5050"];

/* ---------------------------------------------------------------------
   UTILIDADES COMPARTIDAS
   --------------------------------------------------------------------- */

function obtenerProducto(id) {
    return PRODUCTOS.find(p => p.id === id) || null;
}

function productosDeCategoria(categoria, subcategoria) {
    return PRODUCTOS.filter(p => p.categoria === categoria && (!subcategoria || p.subcategoria === subcategoria));
}

function tienePdf(p) {
    return typeof p.pdf === "string" && p.pdf.trim() !== "" && p.pdf.trim() !== "#";
}

// Texto alternativo de las fotos: siempre incluye el código del producto.
function altProducto(p) {
    return `${p.titulo} - código ${p.codigo}`;
}

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Minúsculas y sin tildes, para comparar sin importar cómo escriba el cliente.
function normalizarTexto(texto) {
    return String(texto || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Solo letras y números: "26300 35505", "2630035505" y "26300-35505" son iguales.
function compactarTexto(texto) {
    return normalizarTexto(texto).replace(/[^a-z0-9]/g, "");
}

/* Busca por código (OEM o equivalente) o por modelo de vehículo.
   Coincide si el texto completo aparece (ignorando guiones y espacios),
   o si todas las palabras buscadas aparecen en el producto. */
function buscarProductos(consulta) {
    const palabras = normalizarTexto(consulta).split(/[^a-z0-9]+/).filter(Boolean);
    const compacta = compactarTexto(consulta);
    if (!compacta) return [];

    return PRODUCTOS.filter(p => {
        const texto = normalizarTexto([p.codigo, p.equivalencia, p.aplicacion, p.compatibilidad, p.titulo, p.marca, p.tipo].join(" "));
        const codigos = [p.codigo, p.equivalencia].map(compactarTexto);
        if (codigos.some(c => c && c.includes(compacta))) return true;
        return palabras.every(w => texto.includes(w));
    });
}
