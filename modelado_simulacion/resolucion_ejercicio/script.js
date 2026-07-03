/**
 * Script de Inicialización y Control Operativo
 * Taller Práctico: Simulación Monte Carlo - Terminal de Aduanas de Limón
 */

document.addEventListener("DOMContentLoaded", () => {
    // Captura del contenedor principal para gestionar la animación de carga
    const mainContainer = document.querySelector(".contenedor-tema");

    if (mainContainer) {
        // Aseguramos que empiece transparente antes de que carguen las fórmulas
        mainContainer.style.opacity = "0";

        // Verificamos si MathJax ya está disponible en el entorno global
        if (window.MathJax && window.MathJax.startup) {
            window.MathJax.startup.promise.then(() => {
                // Una vez renderizadas las ecuaciones matemáticas, activamos el fade in
                mainContainer.classList.add("animate-fade");
                mainContainer.style.opacity = "1";
            }).catch((err) => {
                console.warn("Error al renderizar fórmulas operativas con MathJax: ", err);
                // Forzamos la visualización segura del documento en caso de error de red
                mainContainer.style.opacity = "1";
            });
        } else {
            // Fallback de carga inmediata si el CDN de MathJax no se utiliza o está bloqueado
            mainContainer.style.opacity = "1";
        }
    }
});