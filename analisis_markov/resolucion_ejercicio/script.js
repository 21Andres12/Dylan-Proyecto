document.addEventListener("DOMContentLoaded", () => {
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