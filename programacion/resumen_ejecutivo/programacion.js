document.addEventListener("DOMContentLoaded", () => {
    const bloques = document.querySelectorAll('.animate-fade, .bloque-avanzado');
    
    // Transición secuencial para cada frontera avanzada de optimización
    bloques.forEach((bloque, index) => {
        bloque.style.opacity = "0";
        bloque.style.transform = "translateY(15px)";
        bloque.style.transition = "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)";
        
        setTimeout(() => {
            bloque.style.opacity = "1";
            bloque.style.transform = "translateY(0)";
        }, index * 100);
    });
});