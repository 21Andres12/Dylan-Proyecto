document.addEventListener("DOMContentLoaded", () => {
    const paneles = document.querySelectorAll('.animate-fade, .timeline-item');
    
    // Aplicamos un retraso escalonado (Stagger effect) mediante JavaScript
    paneles.forEach((elemento, indice) => {
        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(15px)";
        elemento.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        
        setTimeout(() => {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }, indice * 100);
    });
});