$('#btnNew').click(function () {
    let Nombre = $("#txtNombre").val();
    let Apellido = $("#txtApellido").val();
    let TipoDocumento = parseInt($("#ddlTipoDocumento").val());
    let NumeroDocumento = $("#txtNumeroDocumento").val();
    let Telefono = $("#txtTelefono").val();
    let Email = $("#txtEmail").val();
    let Password = $("#txtPassword").val();    
    if(!checkRequiret($("#txtNombre"))){        
        $("#divMessage").html(`<div class="alert alert-danger">No ha ingresado nombres.</div>`);
        return false;
    }
    if(!checkRequiret($("#txtApellido"))){        
        $("#divMessage").html(`<div class="alert alert-danger">No ha ingresado apellidos.</div>`);
        return false;
    }    
    if(TipoDocumento === 0){        
        $("#divMessage").html(`<div class="alert alert-danger">Debe seleccionar un tipo de documento.</div>`);
        return false;
    } 
    if(TipoDocumento === 1){        
        if(NumeroDocumento.length !== 8){        
            $("#divMessage").html(`<div class="alert alert-danger">El número de documento no es valido.</div>`);
            return false;
        }
    } else {
        if(NumeroDocumento.length !== 12){        
            $("#divMessage").html(`<div class="alert alert-danger">El número de documento no es valido.</div>`);
            return false;
        }
    }
    if(Telefono.length < 9){        
        $("#divMessage").html(`<div class="alert alert-danger">El número teléfonico no es valido.</div>`);
        return false;
    } 
    if(!checkEmail($("#txtEmail"))){        
        $("#divMessage").html(`<div class="alert alert-danger">El email ingresado no es válido.</div>`);
        return false;
    }
    if(Password.length < 8){        
        $("#divMessage").html(`<div class="alert alert-danger">Contrasena no valida (minimo 8 caracteres).</div>`);
        return false;
    }
    RegistrarCliente(Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email);  
  
});

function RegistrarCliente(Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email){
    op = "2";      
    $.get("ControlCliente", {op, Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            Limpiar();
            $("#divMessage").html(`<div class="alert alert-success">Se creo la cuenta satisfactoriamente.</div>`);            
        } else {
            $("#divMessage").html(`<div class="alert alert-danger">Error al crear la cuenta.</div>`);            
        }
    });
}

function Limpiar(){
    $("#txtNombre").val("");
    $("#txtApellido").val("");
    $("#ddlTipoDocumento").val("0");
    $("#txtNumeroDocumento").val("");
    $("#txtTelefono").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");  
    
}

$('#btnClear').click(function () {
    Limpiar();
    $("#divMessage").html("");
});

$('#btnVolver').click(function () {
    window.location.href = "Login.jsp";    
});
