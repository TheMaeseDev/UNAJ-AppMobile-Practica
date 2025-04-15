
import { Header, Footer } from "./Components.js";

console.log("El archivo encuesta.js se ha cargado correctamente");

$(document).ready(function () {
    $("#header").html(Header());
    $("#footer").html(Footer());

    $("#button-enviar").on("click", function () {
        if (validarFormulario()) {
            const nombre = $("#nombre").val();
            const apellido = $("#apellido").val();
            const fecha = $("#fechaNacimiento").val();
            const sexo = $("#sexo").val();
            const valoracion = $("#valoracion").val();
            const email = $("#email").val();
            const comentario = $("#comentario").val();

            alert(`Datos del formulario:\n
Nombre: ${nombre}
Apellido: ${apellido}
Fecha de Nacimiento: ${fecha}
Sexo: ${sexo}
Valoración: ${valoracion}
Email: ${email}
Comentario: ${comentario}`);
        }
    });

    $("#button-cancelar").on("click", function () {
        const confirmar = confirm("¿Desea volver a la página anterior?");
        if (confirmar) {
            window.history.back();
        }
    });

    $("#button-restablecer").on("click", function () {
        $("#encuestaForm")[0].reset();
    });
});

function validarFormulario() {
    const nombre = $("#nombre").val().trim();
    const apellido = $("#apellido").val().trim();
    const fecha = $("#fechaNacimiento").val().trim();
    const sexo = $("#sexo").val();
    const valoracion = $("#valoracion").val();
    const email = $("#email").val().trim();

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !apellido || !fecha || !sexo || !valoracion || !email) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    if (!soloLetras.test(nombre)) {
        alert("El nombre solo puede contener letras.");
        return false;
    }

    if (!soloLetras.test(apellido)) {
        alert("El apellido solo puede contener letras.");
        return false;
    }

    if (!fechaRegex.test(fecha)) {
        alert("La fecha debe tener formato dd-mm-aaaa.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("El email no tiene un formato válido.");
        return false;
    }

    return true;
}