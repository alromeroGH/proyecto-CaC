const email = document.getElementById("email")
const pass = document.getElementById("pass")

const textErrorEmail = document.getElementById("textError_email")
const textErrorPass = document.getElementById("textError_pass")

const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let txtErrore= ""
    let txtErrorps= ""

    let esValido = true

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

    if(esValido){
        form.submit()
    }

})

//---------------------------------------

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