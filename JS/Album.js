import {Header,Footer} from "./Components.js";

console.log("El archivo album.js se ha cargado correctamente0");

$(document).ready(function(){
    $("#header").html(Header());
    $("#footer").html(Footer());
})