let apiKey = '44d03bcbc2bc43b1c81acd014f727c91';
let paginaActual =  1;
function llamarApi(){
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${paginaActual}`)
        .then(response => response.json())
        .then(data => dibujarDatos(data));
}

function dibujarDatos(json){
    const filas1 = json.results.map(objeto => filaTendencia(objeto)); 
    document.getElementById('peliculas').innerHTML = filas1;
    const filas2 = json.results.map(objeto => filaAclamada(objeto));
    document.getElementById('aclamadas').innerHTML = filas2;

}

function filaTendencia(objeto){
    const baseUrl = 'https://image.tmdb.org/t/p/w300'; 
    return`
    <div class="pelicula">
        <a href="film.html">
            <img src="${baseUrl}${objeto.poster_path}" alt="${objeto.title}">
            <div class="nombre">${objeto.title}</div>
        </a>
    </div>
    `;
   }

   function filaAclamada(objeto){
    const baseUrl = 'https://image.tmdb.org/t/p/w200'; 
    return`
    <div>
    <img src="${baseUrl}${objeto.poster_path}" alt="${objeto.title}">
    </div>
    `;
   }

function siguientePagina(){
    paginaActual++;
    llamarApi();
}

function anteriorPagina(){
    if(paginaActual>1){
        paginaActual--;
    }
    llamarApi();
}

llamarApi();

const btnSiguiente = document.getElementById('btnSiguiente');
const btnAnterior = document.getElementById('btnAnterior');

btnSiguiente.addEventListener('click', siguientePagina);
btnAnterior.addEventListener('click', anteriorPagina);