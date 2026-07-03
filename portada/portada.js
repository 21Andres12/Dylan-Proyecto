document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos para la animación fluida
    const elementos = [
        document.querySelector('.header-portada'),
        document.querySelector('.main-portada'),
        document.querySelector('.contenedor-accion'),
        document.querySelector('.footer-portada')
    ];

    elementos.forEach((el, index) => {
        if (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(12px)";
            el.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
            
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, index * 120); // Animación en cascada ligeramente más veloz e integrada
        }
    });
});