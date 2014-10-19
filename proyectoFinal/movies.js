var app = angular.module('app', ['Pelicula']);

var Peliculas  = [
    {name:"Iron Man",Image:"http://pics.filmaffinity.com/Iron_Man_3-972235216-large.jpg"},
    {name:"Relatos Salvajes",Image:"http://pics.filmaffinity.com/Relatos_salvajes-102488639-large.jpg"},
    {name:"Lucy",Image:"http://es.web.img1.acsta.net/pictures/14/06/12/12/38/169418.jpg"}
];

app.controller('Peliculas',function(){
    this.peliculas = Peliculas;     
});

