var IDCliente = 0;

$(document).ready(function () {    
    if(sessionStorage.getItem('IDCliente') !== null){
        IDCliente = sessionStorage.getItem('IDCliente');
        GetCliente(IDCliente);    
    } else {
        window.location.href = "Login.jsp";  
    }    
});

function GetCliente(IDCliente){     
    op = "4";  
    $.get("ControlCliente", {op, IDCliente}, (response) => {  
        const dato = JSON.parse(response); 
        if(dato.IDCliente > 0){            
            $("#txtNombre").val(dato.Nombre);
            $("#txtApellido").val(dato.Apellido);
            $("#ddlTipoDocumento").val(dato.TipoDocumento);
            $("#txtNumeroDocumento").val(dato.NumeroDocumento);
            $("#txtTelefono").val(dato.Telefono);
            $("#txtEmail").val(dato.Email);
            $("#txtPassword").val(dato.Password);
        } 
    });
}

$('#btnUpdate').click(function () {
    let Nombre = $("#txtNombre").val();
    let Apellido = $("#txtApellido").val();
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
    ActualizarCliente(Nombre, Apellido, Telefono, Password, Email);  
});

function ActualizarCliente(Nombre, Apellido, Telefono, Password, Email){
    op = "3";      
    $.get("ControlCliente", {op, IDCliente, Nombre, Apellido, Telefono, Password, Email}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            $("#divMessage").html(`<div class="alert alert-success">Se actualizo el perfil satisfactoriamente.</div>`);            
        } else {
            $("#divMessage").html(`<div class="alert alert-danger">Error al actualizar el perfil.</div>`);            
        }
    });
}