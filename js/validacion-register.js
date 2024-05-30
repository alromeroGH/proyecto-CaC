const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const fecha = document.getElementById("fecha")
const pais = document.getElementById("pais")

const textErrorNombre = document.getElementById("textError_nombre")
const textErrorApellido = document.getElementById("textError_apellido")
const textErrorEmail = document.getElementById("textError_email")
const textErrorPass = document.getElementById("textError_pass")
const textErrorPais = document.getElementById("textError_pais")
const textErrorFecha = document.getElementById("textError_fecha")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let txtErrorn= ""
    let txtErrora= ""
    let txtErrore= ""
    let txtErrorps= ""
    let txtErrorpais= ""
    let txtErrorf= ""

    let esValido = true

    if(validarNombre(nombre.value) == 1){
        txtErrorn+= `Ingrese un Nombre <br>`
        textErrorNombre.innerHTML = txtErrorn
        esValido = false;
    }else if(validarNombre(nombre.value) == 2){
        txtErrorn+= `El nombre es muy corto <br>`
        textErrorNombre.innerHTML = txtErrorn
        esValido = false;
    }
    else if(validarNombre(nombre.value) == 3){
        textErrorNombre.innerHTML = txtErrorn
    }

    if(validarNombre(apellido.value) == 1){
        txtErrora+= `Ingrese un Apellido <br>`
        textErrorApellido.innerHTML = txtErrora
        esValido = false;
    }else if(validarNombre(apellido.value) == 2){
        txtErrora+= `El apellido es muy corto <br>`
        textErrorApellido.innerHTML = txtErrora
        esValido = false;
    }
    else if (validarNombre(apellido.value) == 3) {
        textErrorApellido.innerHTML = txtErrora
    }

    if(!validarEmail(email.value)){
        txtErrore+= `Email no valido <br>`
        textErrorEmail.innerHTML = txtErrore
        esValido = false;
    }
    else if(validarEmail(email.value)){
        textErrorEmail.innerHTML = txtErrore
    }

    if(!validarPass(pass.value)){
        txtErrorps+= `Contraseña no valida <br>`
        textErrorPass.innerHTML = txtErrorps
        esValido = false;
    }
    else if(validarPass(pass.value)){
        textErrorPass.innerHTML = txtErrorps
    }

    if(!validarPais(pais.value)){
        txtErrorpais+= `Seleccione un Pais <br>`
        textErrorPais.innerHTML = txtErrorpais
        esValido = false;
    }
    else if(validarPais(pais.value)){
        textErrorPais.innerHTML = txtErrorpais
    }

    if(!validarFecha(fecha.value)){
        txtErrorf+= `Ingrese una Fecha <br>`
        textErrorFecha.innerHTML = txtErrorf
        esValido = false;
    }
    else if(validarFecha(fecha.value)){
        textErrorFecha.innerHTML = txtErrorf
    }

    if(esValido){
        form.submit()
    }
    
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


// --------------------------------------------------------------

