const formulario = document.getElementById("form-login");
const mensajeLogin = document.getElementById("mensaje-login");

function iniciarSesion(evento) {

    evento.preventDefault();
    
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("password").value;

    const datos = usuarios[usuario] // Acá estamos buscando del diccionario JS usarios creado, la constante guardada "usuario"

    if (datos!== undefined && datos.clave === clave) {
        sessionStorage.setItem("usuarioActivo", usuario)
        mensajeLogin.textContent = "Bienvenido"
        window.location.href = "principal.html"
    }
    else{
        mensajeLogin.textContent = "Usuario o contraseña incorrectos"
    }

}

formulario.addEventListener("submit", iniciarSesion)