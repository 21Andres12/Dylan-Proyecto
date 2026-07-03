document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".tab-btn");
    const contenidos = document.querySelectorAll(".tab-contenido");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const tabId = boton.getAttribute("data-tab");

            // Remover clase activa de todos los botones
            botones.forEach(btn => btn.classList.remove("activo"));
            // Ocultar todos los contenidos de las pestañas
            contenidos.forEach(contenido => contenido.classList.remove("activo"));

            // Activar botón actual
            boton.classList.add("activo");
            
            // Mostrar contenido actual con un mini retraso para animación fluida
            const contenidoActivo = document.getElementById(tabId);
            if (contenidoActivo) {
                contenidoActivo.classList.add("activo");
            }
        });
    });
});