/* =====================================================================
   LUBRIBARO - CATÁLOGO Y PÁGINAS DE LÍNEA
   catalogo.html muestra todas las líneas; cat-*.html una sola línea
   (se indica con data-categoria en <body>).
   ===================================================================== */
(function () {
    const linea = LINEAS[document.body.dataset.categoria] ? document.body.dataset.categoria : "";
    const params = new URLSearchParams(location.search);
    const input = document.getElementById("q");
    const grid = document.getElementById("grid");
    const info = document.getElementById("info");
    const orden = document.getElementById("orden");
    input.value = params.get("q") || "";

    // Líneas (barra lateral y chips en celular)
    const total = productosPublicados().length;
    const items = [["", "Todo el catálogo", "catalogo.html", total, "grid"]]
        .concat(Object.entries(LINEAS).map(([k, l]) => [k, l.nombre, l.pagina, productosDeCategoria(k).length, k]));
    document.getElementById("lista-lineas").innerHTML = items.map(([k, n, url, c, i]) =>
        `<a href="${url}" class="${k === linea ? "activo" : ""}">${ico(i)}${n}<span class="n">${c}</span></a>`).join("");
    document.getElementById("chips-movil").innerHTML = items.map(([k, n, url]) =>
        `<a href="${url}" class="${k === linea ? "activo" : ""}">${k ? n : "Todo"}</a>`).join("");

    function pintar(actualizarUrl) {
        const q = input.value.trim();
        let lista = buscarProductos(q);
        if (linea) lista = lista.filter(p => p.categoria === linea);
        if (orden.value === "menor") lista = [...lista].sort((a, b) => (a.precio ?? Infinity) - (b.precio ?? Infinity));
        if (orden.value === "mayor") lista = [...lista].sort((a, b) => (b.precio ?? -1) - (a.precio ?? -1));
        if (orden.value === "codigo") lista = [...lista].sort((a, b) => nombreCorto(a).localeCompare(nombreCorto(b)));

        const n = lista.length;
        info.innerHTML = q
            ? `<b>${n}</b> ${n === 1 ? "resultado" : "resultados"} para "${escaparHTML(q)}"`
            : `<b>${n}</b> ${n === 1 ? "producto" : "productos"}`;

        grid.innerHTML = n ? lista.map(htmlTarjeta).join("") : `
            <div class="sin-resultados">
                <h3>No encontramos "${escaparHTML(q)}"</h3>
                <p>Trabajamos más códigos Hyundai y Kia a pedido. Escríbenos el código o el vehículo (marca, modelo, año y motor) y te cotizamos.</p>
                <a class="btn btn-wa" target="_blank" rel="noopener" href="${enlaceWhatsApp(`Hola LubriBaro, busco: ${q}. ¿Lo tienen?`)}">${waIcono(20)}Consultar por WhatsApp</a>
            </div>`;

        if (actualizarUrl && history.replaceState) {
            history.replaceState(null, "", location.pathname + (q ? "?q=" + encodeURIComponent(q) : ""));
        }
    }

    let t = null;
    input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => pintar(true), 150); });
    document.getElementById("form-buscar").addEventListener("submit", e => { e.preventDefault(); pintar(true); input.blur(); });
    orden.addEventListener("change", () => pintar(false));
    pintar(false);
})();
