const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const fecha = document.getElementById("fecha")
const pais = document.getElementById("pais")

const textError = document.getElementById("textError")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let txtError = "error"

    alert("Hola Mundo")

    /* if(!validarNombre(nombre.value)){
        txtError += `Nombre no valido <br>`
    }
    if(!validarNombre(apellido.value)){
        txtError += `Apellido no valido <br>`
    }
    if(!validarEmail(email.value)){
        txtError += `Email no valido <br>`
    }
    if(!validarPass(pass.value)){
        txtError += `Contraseña no valida <br>`
    }

    textError.innerHTML = txtError */
  
})

//-----------------------------------------------

function validarNombre(nom){
    if(nom.length > 3){
        return true
    }

    return false
}

function validarEmail(mail){
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(emailRegex.test(mail)){
        return true
    }

    return false
}

function validarPass(passw){
    passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    if(passRegex.test(passw)){
        return true
    }
    return false
}