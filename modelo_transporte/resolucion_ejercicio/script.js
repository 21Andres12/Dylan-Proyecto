/**
 * Controlador del Módulo Operativo de Transporte y Sincronización MathJax
 */
document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".contenedor-tema");

    if (mainContainer) {
        // Aseguramos el estado transparente antes de la optimización tipográfica de fórmulas
        mainContainer.style.opacity = "0";

        if (window.MathJax && window.MathJax.startup) {
            window.MathJax.startup.promise.then(() => {
                // Ejecuta la animación suave una vez que los vectores matemáticos están calculados
                mainContainer.classList.add("animate-fade");
                mainContainer.style.opacity = "1";
            }).catch((error) => {
                console.error("Error al procesar la sintaxis lógica mediante MathJax:", error);
                mainContainer.style.opacity = "1";
            });
        } else {
            mainContainer.style.opacity = "1";
        }
    }

    // Efecto cascada de micro-interacciones para las secciones de contenido
    const bloquesDeContenido = document.querySelectorAll('.contenedor-tema .seccion-contenido');
    
    bloquesDeContenido.forEach((seccion, indice) => {
        seccion.style.opacity = "0";
        seccion.style.transform = "translateY(8px)";
        seccion.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        
        setTimeout(() => {
            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0)";
        }, indice * 70);
    });
});