document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. ANIMACIÓN GENÉRICA PARA LA PORTADA (INDEX.HTML / PORTADA)
    // ==========================================================================
    const elementosPortada = [
        document.querySelector('.header-portada'),
        document.querySelector('.main-portada'),
        document.querySelector('.contenedor-accion'),
        document.querySelector('.footer-portada')
    ];

    elementosPortada.forEach((el, index) => {
        if (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(12px)";
            el.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
            
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, index * 120);
        }
    });

    // ==========================================================================
    // 2. ANIMACIÓN FLUIDA EN CASCADA PARA LAS TARJETAS DEL MENÚ
    // ==========================================================================
    const tarjetas = document.querySelectorAll('.animate-item');
    const headerMenu = document.querySelector('.header-menu');
    const encabezadoSeccion = document.querySelector('.encabezado-seccion');

    // Aparece primero el encabezado del menú
    if (headerMenu) {
        headerMenu.style.opacity = "0";
        headerMenu.style.transition = "opacity 0.6s ease";
        setTimeout(() => headerMenu.style.opacity = "1", 100);
    }
    if (encabezadoSeccion) {
        encabezadoSeccion.style.opacity = "0";
        encabezadoSeccion.style.transform = "translateY(10px)";
        encabezadoSeccion.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        setTimeout(() => {
            encabezadoSeccion.style.opacity = "1";
            encabezadoSeccion.style.transform = "translateY(0)";
        }, 200);
    }

    // Aparecen las tarjetas una por una velozmente en cascada
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(15px)";
        tarjeta.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        
        setTimeout(() => {
            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";
        }, 300 + (index * 80));
    });

    // ==========================================================================
    // 3. CONTROLADOR LÓGICO DEL AUDIO DE PRESENTACIÓN
    // ==========================================================================
    const audio = document.getElementById('audio-presentacion');
    const btnAudio = document.getElementById('btn-control-audio');
    const iconoPlay = btnAudio?.querySelector('.icono-play');
    const iconoPause = btnAudio?.querySelector('.icono-pause');

    if (audio && btnAudio) {
        btnAudio.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                btnAudio.classList.add('reproduciendo');
                if (iconoPlay) iconoPlay.style.display = 'none';
                if (iconoPause) iconoPause.style.display = 'block';
            } else {
                audio.pause();
                btnAudio.classList.remove('reproduciendo');
                if (iconoPlay) iconoPlay.style.display = 'block';
                if (iconoPause) iconoPause.style.display = 'none';
            }
        });

        // Retornar automáticamente al estado original cuando termine la pista de audio
        audio.addEventListener('ended', () => {
            btnAudio.classList.remove('reproduciendo');
            if (iconoPlay) iconoPlay.style.display = 'block';
            if (iconoPause) iconoPause.style.display = 'none';
        });
    }
});