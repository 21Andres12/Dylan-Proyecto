/**
 * Controlador de Carga y Sincronización Estricta de Fórmulas Mediante MathJax
 */

document.addEventListener("DOMContentLoaded", () => {
    const contenedorPrincipal = document.querySelector(".contenedor-tema");

    if (contenedorPrincipal) {
        // Opacidad inicial cero para mitigar saltos estéticos bruscos de fuentes en MathJax
        contenedorPrincipal.style.opacity = "0";

        if (window.MathJax && window.MathJax.startup) {
            window.MathJax.startup.promise.then(() => {
                // Ejecución fluida de animación CSS tras compilar nodos matemáticos
                contenedorPrincipal.classList.add("animate-fade");
                contenedorPrincipal.style.opacity = "1";
            }).catch((error) => {
                console.error("Falla en la sincronización de MathJax:", error);
                contenedorPrincipal.style.opacity = "1";
            });
        } else {
            contenedorPrincipal.style.opacity = "1";
        }
    }
});