document.addEventListener("DOMContentLoaded", () => {
    const bloques = document.querySelectorAll('.animate-fade, .bloque-analisis-mc');
    
    // Aplicamos una animación escalonada elegante al cargar los frentes y tarjetas
    bloques.forEach((bloque, index) => {
        bloque.style.opacity = "0";
        bloque.style.transform = "translateY(12px)";
        bloque.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        
        setTimeout(() => {
            bloque.style.opacity = "1";
            bloque.style.transform = "translateY(0)";
        }, index * 120);
    });
});