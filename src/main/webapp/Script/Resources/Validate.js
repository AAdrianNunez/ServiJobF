/* Validaciones en Evento key */
//Solo ingreso de letras sin espacios
function OnlyLettersSpaceless(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "áéíóúäëïöüabcdefghijklmnñopqrstuvwxyz0123456789";
    especiales = [8];
    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

//Valida email
function checkEmail(input) {
    var regexp = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!(regexp.test(input.val().trim()))) {
        return false;
    } else {
        return true;
    }
}

//Campo requerido
function checkRequiret(input) {   
    if (input.val().trim().length === 0) {
        input.val("");
        return false;
    } else {
        return true;
    }
}


//Solo ingreso de numeros
function OnlyNumbers(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "1234567890";
    especiales = [8];
    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

//Numero Celular
function OnlyPhoneNumber(obj, e) {
    key = e.keyCode ? e.keyCode : e.which
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "1234567890";
    if (obj.value != "") {
        if ((letras.indexOf(tecla)) > -1) {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        regexp = /[9]{1}/
        return (regexp.test(tecla));
    }    
}