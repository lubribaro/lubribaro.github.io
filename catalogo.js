/* =====================================================================
   LUBRIBARO - CATÁLOGO Y PÁGINAS DE LÍNEA
   catalogo.html: todas las líneas, con filtros por línea y buscador.
   cat-*.html: una sola línea (se indica con data-categoria en <body>).
   ===================================================================== */
(function () {
    const fija = document.body.dataset.categoria || "";
    const params = new URLSearchParams(location.search);
    let linea = fija || params.get("linea") || "";
    if (linea && !LINEAS[linea]) linea = "";

    const input = document.getElementById("q");
    const chips = document.getElementById("chips");
    const grid = document.getElementById("grid");
    const info = document.getElementById("info");
    input.value = params.get("q") || "";

    if (chips && !fija) {
        chips.innerHTML = `<button class="chip" data-linea="">Todas</button>` +
            Object.entries(LINEAS).map(([k, l]) => `<button class="chip" data-linea="${k}">${l.nombre}</button>`).join("");
        chips.addEventListener("click", e => {
            const b = e.target.closest(".chip");
            if (!b) return;
            linea = b.dataset.linea;
            pintar(true);
        });
    }

    function pintar(actualizarUrl) {
        const q = input.value.trim();
        let lista = buscarProductos(q);
        if (linea) lista = lista.filter(p => p.categoria === linea);

        if (chips && !fija) chips.querySelectorAll(".chip").forEach(c => c.classList.toggle("activo", c.dataset.linea === linea));

        const ambito = linea ? LINEAS[linea].nombre.toLowerCase() : "el catálogo";
        info.textContent = q
            ? `${lista.length} ${lista.length === 1 ? "resultado" : "resultados"} para "${q}" en ${ambito}`
            : `${lista.length} ${lista.length === 1 ? "producto" : "productos"}`;

        grid.innerHTML = lista.length ? lista.map(htmlTarjeta).join("") : `
            <div class="sin-resultados" style="grid-column:1/-1">
                <h3>No encontramos "${escaparHTML(q)}" en la web</h3>
                <p>Trabajamos más códigos Hyundai y Kia a pedido. Escríbenos el código o el vehículo (marca, modelo, año y motor) y te cotizamos.</p>
                <a class="btn btn-wa" target="_blank" rel="noopener" href="${enlaceWhatsApp(`Hola LubriBaro, busco: ${q}. ¿Lo tienen?`)}">Consultar por WhatsApp</a>
            </div>`;

        if (actualizarUrl && history.replaceState) {
            const u = new URLSearchParams();
            if (q) u.set("q", q);
            if (linea && !fija) u.set("linea", linea);
            history.replaceState(null, "", location.pathname + (u.toString() ? "?" + u : ""));
        }
    }

    let t = null;
    input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => pintar(true), 150); });
    document.getElementById("form-buscar").addEventListener("submit", e => { e.preventDefault(); pintar(true); input.blur(); });
    const avisoWa = document.getElementById("aviso-wa");
    if (avisoWa) avisoWa.href = enlaceWhatsApp("Hola LubriBaro, busco este código o filtro: ");
    pintar(false);
})();
