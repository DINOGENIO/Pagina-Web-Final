// Mostrar las secciones cuando se hacen visibles al hacer scroll
const secciones = document.querySelectorAll('section');
const btnInicio = document.getElementById('btnInicio');

function mostrarSeccion() {
    const triggerBottom = window.innerHeight / 5 * 4;
    secciones.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.classList.add('visible');
        }
    });
}

// Botón para regresar al inicio
btnInicio.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mostrar botón inicio cuando hacemos scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 400){
        btnInicio.style.display = "block";
    } else {
        btnInicio.style.display = "none";
    }
    mostrarSeccion();
});

// Inicial
mostrarSeccion();

