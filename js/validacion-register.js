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
    let txtError = ""

    if(validarNombre(nombre.value) == 1){
        txtError += `Ingrese un Nombre <br>`
    }else if(validarNombre(nombre.value) == 2){
        txtError += `El nombre es muy corto <br>`
    }
    if(validarNombre(apellido.value) == 1){
        txtError += `Ingrese un Apellido <br>`
    }else if(validarNombre(apellido.value) == 2){
        txtError += `El apellido es muy corto <br>`
    }

    if(!validarEmail(email.value)){
        txtError += `Email no valido <br>`
    }
    if(!validarPass(pass.value)){
        txtError += `Contraseña no valida <br>`
    }
    if(!validarPais(pais.value)){
        txtError += `Seleccione un Pais <br>`
    }
    if(!validarFecha(fecha.value)){
        txtError += `Ingrese una Fecha <br>`
    }

    textError.innerHTML = txtError

})

//-----------------------------------------------

function validarNombre(nom){
    if(nom == ""){
        return 1
    }
    if(nom.length < 4){
        return 2
    }
    return 3
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

function validarPais(country){
    if(country!= "#"){
        return true
    }
    return false
}

function validarFecha(date){
    if(date != ""){
        return true
    }
    return false
}
