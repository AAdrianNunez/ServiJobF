$(document).ready(function () {
    $(".select2").select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
    });
    $('.select2').on("select2:open", function (e) {
        ScrollbarSelect();
    });   
});

$('#btnNew').click(function () {
    let Nombre = $("#txtNombre").val();
    let Apellido = $("#txtApellido").val();
    let TipoDocumento = parseInt($("#ddlTipoDocumento").val());
    let NumeroDocumento = $("#txtNumeroDocumento").val();
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
    if(TipoDocumento === 0){        
        message("error", "Debe seleccionar un tipo de documento.", "Error de Dato");
        return false;
    } 
    if(TipoDocumento === 1){        
        if(NumeroDocumento.length !== 8){        
            message("error", "El número de documento no es valido.", "Error de Dato");
            return false;
        }
    } else {
        if(NumeroDocumento.length !== 12){        
            message("error", "El número de documento no es valido.", "Error de Dato");
            return false;
        }
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
            RegistrarCliente(Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email); 
        } else {
            message("error", "El email ya se encuentra registrado.", "Error de Dato");   
        }
    });
});

function RegistrarCliente(Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email){
    op = "2";      
    $.get("ControlCliente", {op, Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            Limpiar();
            SweetAlert("success", "Operación Exitosa", "Se creo la cuenta satisfactoriamente.");           
        } else {
            SweetAlert("error", "Operación Inválida", "Error al crear la cuenta.");            
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
