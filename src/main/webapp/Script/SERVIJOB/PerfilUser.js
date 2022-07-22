var IDCliente = 0;

$(document).ready(function () {    
    if(sessionStorage.getItem('IDCliente') !== null){
        IDCliente = sessionStorage.getItem('IDCliente');
        GetCliente(IDCliente);    
    } else {
        window.location.href = "Login.jsp";  
    }
    $(".select2").select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
    });
    $('.select2').on("select2:open", function (e) {
        ScrollbarSelect();
    });
});

function GetCliente(IDCliente){     
    op = "4";  
    $.get("ControlCliente", {op, IDCliente}, (response) => {  
        const dato = JSON.parse(response); 
        if(dato.IDCliente > 0){            
            $("#txtNombre").val(dato.Nombre);
            $("#txtApellido").val(dato.Apellido);            
            $("#ddlTipoDocumento").select2("val", dato.TipoDocumento);
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
        message("error", "No ha ingresado nombres.", "Error de Dato");        
        return false;
    }
    if(!checkRequiret($("#txtApellido"))){        
        message("error", "No ha ingresado apellidos.", "Error de Dato");        
        return false;    
    }
    if(Telefono.length < 9){        
        message("error", "El número teléfonico no es valido.", "Error de Dato");        
        return false;
    } 
    if(!checkEmail($("#txtEmail"))){        
        message("error", "El email ingresado no es válido.", "Error de Dato");        
        return false;
    }
    if(Password.length < 8){        
        message("error", "Contraseña no valida (minimo 8 caracteres).", "Error de Dato");
        return false;
    }
    op = "1";      
    $.get("ControlCliente", {op, Email, IDCliente}, (response) => {  
        const dato = JSON.parse(response);
        if(dato.Email === ""){    
            ActualizarCliente(Nombre, Apellido, Telefono, Password, Email); 
        } else {
            message("error", "El email ya se encuentra registrado.", "Error de Dato");   
        }
    });  
});

function ActualizarCliente(Nombre, Apellido, Telefono, Password, Email){
    op = "3";      
    $.get("ControlCliente", {op, IDCliente, Nombre, Apellido, Telefono, Password, Email}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            SweetAlert("success", "Operación Exitosa", "Se actualizo el perfil satisfactoriamente.");                    
        } else {
            SweetAlert("error", "Operación Inválida", "Error al actualizar el perfil.");            
        }
    });
}