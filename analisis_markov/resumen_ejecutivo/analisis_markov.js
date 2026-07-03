document.addEventListener("DOMContentLoaded", () => {
    console.log("Sección Análisis de Markov cargada correctamente.");
    
    // Retraso escalonado sutil en los bloques principales de la lectura
    const bloques = document.querySelectorAll('.animate-fade');
    bloques.forEach((bloque, index) => {
        bloque.style.animationDelay = `${index * 150}ms`;
    });
});