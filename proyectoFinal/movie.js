var movie = angular.module('Pelicula',['app']);

var Pelicula = function(name,description,Image){
    this.nombre = name;
    
    this.descripcion = description;
    
    this.Imagen = Image;
    
    return this;
};

Pelicula.prototype.setPelicula = function setPelicula(name,description,Image){

        Pelicula.prototype.nombre = name;
    
        Pelicula.prototype.descripcion = description;
    
        Pelicula.prototype.Imagen = Image; 
};

Pelicula.prototype.getPelicula = function getPelicula(){
    return Pelicula;
}

Pelicula.prototype.IngresarPelicula = function IngresarPelicula(movie){
   Peliculas.push(movie);
};
