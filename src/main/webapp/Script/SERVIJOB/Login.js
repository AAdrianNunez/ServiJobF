$(document).ajaxComplete(function (event, xhr, settings) {
    var jsonResult = JSON.parse(xhr.responseText);
    if (jsonResult !== undefined && jsonResult.NewUrl)
        window.location = jsonResult.NewUrl;
});

$(".vision-password").click(function () {
    if ($(".vision-password").hasClass('fa-eye-slash') === true) {
        $(".vision-password").removeClass('fa-eye-slash').addClass('fa-eye').attr("data-original-title", "Ocultar Password");
        $("#txtPassword")[0].type = "text";
    } else {
        $(".vision-password").removeClass('fa-eye').addClass('fa-eye-slash').attr("data-original-title", "Mostrar Password");
        $("#txtPassword")[0].type = "password";
    }
    $("#txtPassword").focus();
});

$('#btnLogin').click(function () {
    let Email = $("#txtNetworkUser").val();
    let Password = $("#txtPassword").val();
    if(!checkEmail($("#txtNetworkUser"))){    
        message("error", "El email ingresado no es válido.", "Error de email");
        return false;
    } 
    ValidarUsuario(Email, Password);
});

function ValidarUsuario(Email, Password){     
    op = "1";  
    $.get("ControlSeguridad", {op, Email, Password}, (response) => {  
        const dato = JSON.parse(response); 
        if(dato.length > 0){ 
            let NombreCompleto = dato[0].Nombre + " "+ dato[0].Apellido;
            if(dato.length === 1){                 
                if(dato[0].Tipo === 1){  
                    SearchWorker(dato[0].ID, NombreCompleto);
                } else {
                    PerfilWorker(dato[0].ID, NombreCompleto);
                }            
            } else {
                swal({
                    title: "Acceder",
                    html: "Indique con que perfil desea acceder.",
                    type: "question",
                    showCancelButton: true,
                    confirmButtonText: "Cliente",
                    cancelButtonText: "Trabajador",
                    confirmButtonColor: '#5bc0de',
                    cancelButtonColor: "#f8ac59",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    closeOnConfirm: true
                }).then(function (isConfirm) {        
                    if (isConfirm) {
                        let User = dato.filter(x => x.Tipo === 1);
                        SearchWorker(User[0].ID, NombreCompleto);
                    }
                }, function (dismiss) {
                    if (dismiss !== 'cancel') {
                        throw dismiss;
                    } else {
                        let User = dato.filter(x => x.Tipo === 2);
                        PerfilWorker(User[0].ID, NombreCompleto);
                    }
                }).catch(swal.noop);
            }            
        } else {
            SweetAlert("error", "Error de Acceso", "Usuario y/o contraseña incorrecto.");
        }        
    });
}

function SearchWorker(IDCliente, NombreCompleto) {
    sessionStorage.setItem('IDCliente', IDCliente);
    sessionStorage.setItem('NombreCompleto', NombreCompleto);
    window.location.href = "SearchWorker.jsp";    
}

function PerfilWorker(IDTrabajador, NombreCompleto) {
    sessionStorage.setItem('IDTrabajador', IDTrabajador);
    sessionStorage.setItem('NombreCompleto', NombreCompleto);
    window.location.href = "PerfilWorker.jsp";    
}