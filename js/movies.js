function llamarApi(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=44d03bcbc2bc43b1c81acd014f727c91')
        .then(response => response.json())
        .then(data => dibujarDatos(data));
}

function dibujarDatos(json){
    const filas = json.results.map(objeto => fila(objeto)); 
    document.getElementById('peliculas').innerHTML = filas;
}

function fila(objeto){
    const baseUrl = 'https://image.tmdb.org/t/p/w500'; 
    return`
    <div class="pelicula">
        <a href="film.html">
            <img src="${baseUrl}${objeto.poster_path}" alt="">
            <div class="nombre">${objeto.title}</div>
        </a>
    </div>
    `;
}

llamarApi();
