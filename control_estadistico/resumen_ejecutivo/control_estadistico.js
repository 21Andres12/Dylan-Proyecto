/**
 * Controlador del Módulo de Control Estadístico de la Calidad
 * Sincroniza y gestiona la visualización fluida de la tipografía matemática MathJax
 */

document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".contenedor-tema");

    if (mainContainer) {
        // Mantiene invisible el bloque mientras MathJax procesa las fórmulas complejas
        mainContainer.style.opacity = "0";

        if (window.MathJax && window.MathJax.startup) {
            window.MathJax.startup.promise.then(() => {
                // Dispara la transición CSS una vez renderizado todo el entorno matemático
                mainContainer.classList.add("animate-fade");
                mainContainer.style.opacity = "1";
            }).catch((error) => {
                console.error("Error al procesar la sintaxis matemática de calidad:", error);
                mainContainer.style.opacity = "1";
            });
        } else {
            mainContainer.style.opacity = "1";
        }
    }
});