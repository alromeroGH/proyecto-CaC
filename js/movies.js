let apiKey = '44d03bcbc2bc43b1c81acd014f727c91'; // Clave de API para acceder a TMDB
let paginaActual = 1; // Número de página actual para la paginación

// Función para llamar a la API de películas Discover
function llamarApiDiscover() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${paginaActual}`)
        .then(response => response.json())
        .then(data => dibujarDatosDiscover(data))
        .catch(error => console.error('Error al llamar la API Discover:', error));
}

// Función para llamar a la API de películas Populares
function llamarApiPopular() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=50`)
        .then(response => response.json())
        .then(data => dibujarDatosPopular(data))
        .catch(error => console.error('Error al llamar la API Popular:', error));
}

// Función para dibujar datos de la API Discover
function dibujarDatosDiscover(json) {
    const filas = json.results.map(objeto => filaTendencia(objeto));
    document.getElementById('peliculas').innerHTML = filas.join('');
    
    // Añadir event listeners a las imágenes de tendencia
    agregarEventListenersTooltip(document.querySelectorAll('#peliculas img'));
}

// Función para dibujar datos de la API Popular
function dibujarDatosPopular(json) {
    const filas = json.results.map(objeto => filaAclamada(objeto));
    document.getElementById('aclamadas').innerHTML = filas.join('');
    
    // Añadir event listeners a las imágenes aclamadas
    agregarEventListenersTooltip(document.querySelectorAll('#aclamadas img'));
}

// Función para crear el HTML de una fila de tendencia
function filaTendencia(objeto) {
    const baseUrl = 'https://image.tmdb.org/t/p/w300'; 
    return `
    <div class="pelicula">
        <a href="film.html">
            <img src="${baseUrl}${objeto.poster_path}" alt="${objeto.title}" data-title="${objeto.title}">
            
        </a>
    </div>
    `;
}

// Función para crear el HTML de una fila aclamada
function filaAclamada(objeto) {
    const baseUrl = 'https://image.tmdb.org/t/p/w200'; 
    return `
    <div>
        <img src="${baseUrl}${objeto.poster_path}" alt="${objeto.title}" data-title="${objeto.title}">
    </div>
    `;
}

// Función para ir a la siguiente página de la API Discover
function siguientePagina() {
    paginaActual++;
    llamarApiDiscover();
}

// Función para ir a la página anterior de la API Discover
function anteriorPagina() {
    if (paginaActual > 1) {
        paginaActual--;
    }
    llamarApiDiscover();
}

// Función para agregar event listeners a las imágenes para mostrar tooltips
function agregarEventListenersTooltip(imagenes) {
    const tooltip = document.getElementById('tooltip');

    imagenes.forEach(img => {
        img.addEventListener('mouseover', (event) => {
            tooltip.textContent = event.target.dataset.title;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        img.addEventListener('mousemove', (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        img.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
}

// Inicializar llamadas a las APIs Discover y Popular al cargar la página
llamarApiDiscover();
llamarApiPopular();

// Añadir event listeners a los botones de paginación
const btnSiguiente = document.getElementById('btnSiguiente');
const btnAnterior = document.getElementById('btnAnterior');

btnSiguiente.addEventListener('click', siguientePagina);
btnAnterior.addEventListener('click', anteriorPagina);