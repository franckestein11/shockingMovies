var movie = angular.module('Pelicula',[]);

var Pelicula = {};

var Pelicula={};

Pelicula.prototype.setPelicula = function(name,description,Image){
    Pelicula = {
        nombre: name,
        
        descripcion: description,
        
        Imagen:Image
    }
};

Pelicula.prototype.getPelicula = function(){
    return Pelicula;
}

function IngresarPelicula(movie){
    Peliculas.push(movie);
};