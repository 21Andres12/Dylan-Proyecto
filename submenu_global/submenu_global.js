document.addEventListener("DOMContentLoaded", () => {
    // 1. Buscar el contenedor principal de la página actual
    const contenedorTema = document.querySelector('.contenedor-tema');
    if (!contenedorTema) return;

    // 2. Determinar en qué sección estamos basándonos en la URL actual
    const urlActual = window.location.pathname;
    let seccionActiva = "resumen"; // Por defecto

    if (urlActual.includes("resolucion_ejercicio") || urlActual.includes("ejercicio")) {
        seccionActiva = "ejercicio";
    } else if (urlActual.includes("video")) {
        seccionActiva = "video";
    }

    // 3. Crear e inyectar el submenú dinámico si no existe
    if (!document.querySelector('.subnav-temas')) {
        const subnav = document.createElement('nav');
        subnav.className = 'subnav-temas';
        
        // Renderizar los botones con su estado activo correspondiente
        subnav.innerHTML = `
            <button class="tab-btn ${seccionActiva === 'resumen' ? 'activo' : ''}" data-target="resumen_ejecutivo">Resumen Ejecutivo</button>
            <button class="tab-btn ${seccionActiva === 'ejercicio' ? 'activo' : ''}" data-target="resolucion_ejercicio">Resolución de Ejercicio</button>
        `;
        contenedorTema.insertBefore(subnav, contenedorTema.firstChild);
    }

    // 4. Lógica de Redirección Física con Autocorrección de 'cindex'
    const botonesTab = document.querySelectorAll('.tab-btn');
    botonesTab.forEach(boton => {
        boton.addEventListener('click', () => {
            const carpetaDestino = boton.getAttribute('data-target');
            
            // Evitar redirigir si ya estamos en la sección activa
            if (
                (carpetaDestino === "resumen_ejecutivo" && seccionActiva === "resumen") ||
                (carpetaDestino === "resolucion_ejercicio" && seccionActiva === "ejercicio") ||
                (carpetaDestino === "video" && seccionActiva === "video")
            ) {
                return;
            }

            // 1. Obtener la ruta de la URL actual
            let pathCompleto = window.location.pathname;
            
            // 2. DETECCIÓN Y SANITIZACIÓN: Si la ruta trae el error 'cindex.html', lo corregimos a 'index.html'
            if (pathCompleto.includes("cindex.html")) {
                pathCompleto = pathCompleto.replace("cindex.html", "index.html");
            }
            
            // 3. Dividir la ruta limpia en segmentos para la navegación dinámica
            const segmentos = pathCompleto.split('/');
            
            // 4. Remover el archivo actual y la subcarpeta actual
            segmentos.pop(); // Quita 'index.html'
            segmentos.pop(); // Quita la subcarpeta vieja (ej: 'video', 'resolucion_ejercicio', etc.)
            
            // 5. Reconstruir la raíz del tema actual
            const rutaBaseTema = segmentos.join('/');
            
            // 6. Construir y limpiar la dirección final eliminando barras dobles potenciales
            const nuevaRuta = `${rutaBaseTema}/${carpetaDestino}/index.html`.replace(/\/+/g, '/');
            
            window.location.href = nuevaRuta;

        });
    });
});