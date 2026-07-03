/**
 * Controlador del Módulo Operativo de Redes y Sincronización MathJax
 */

document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".contenedor-tema");

    if (mainContainer) {
        // Aseguramos el estado transparente antes de la optimización tipográfica
        mainContainer.style.opacity = "0";

        if (window.MathJax && window.MathJax.startup) {
            window.MathJax.startup.promise.then(() => {
                // Ejecuta la animación suave una vez que los vectores matemáticos están calculados
                mainContainer.classList.add("animate-fade");
                mainContainer.style.opacity = "1";
            }).catch((error) => {
                console.error("Error al procesar la sintaxis de redes mediante MathJax:", error);
                mainContainer.style.opacity = "1";
            });
        } else {
            mainContainer.style.opacity = "1";
        }
    }
});