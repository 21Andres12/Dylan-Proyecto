/**
 * Controlador de Animación de Bloques en Cascada y Sincronización Estricta de MathJax
 */
document.addEventListener("DOMContentLoaded", () => {
    const bloquesDeContenido = document.querySelectorAll('.contenedor-tema .seccion-contenido');
    
    // Si MathJax está presente, espera a que termine de procesar los elementos matemáticos antes de mostrar
    if (window.MathJax && window.MathJax.startup) {
        window.MathJax.startup.promise.then(() => {
            ejecutarCascada(bloquesDeContenido);
        }).catch(() => {
            ejecutarCascada(bloquesDeContenido);
        });
    } else {
        ejecutarCascada(bloquesDeContenido);
    }
});

function ejecutarCascada(bloques) {
    bloques.forEach((seccion, indice) => {
        seccion.style.opacity = "0";
        seccion.style.transform = "translateY(8px)";
        seccion.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        
        setTimeout(() => {
            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0)";
        }, indice * 70);
    });
}