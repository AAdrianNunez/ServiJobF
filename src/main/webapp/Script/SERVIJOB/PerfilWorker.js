var fecha = new Date();
var IDTrabajador = 0;
var ListServicio = "";
var IDServicioTrabajador = 0;
var UploadFileSizeLimitMB = 4;
var UploadFileTypes = ".jpg";
var UploadFileLimit = 1;

$(document).ready(function () {   
    $(".lblMB").html(UploadFileSizeLimitMB + "MB");
    $(".lblType").html(UploadFileTypes);
    if(sessionStorage.getItem('IDTrabajador') !== null){        
        IDTrabajador = parseInt(sessionStorage.getItem('IDTrabajador'));
    } else {
       window.location.href = "Login.jsp";  
    }
    ListaUbigeoDistrito();
    ListaServicio();
    $("#ddlTipoDocumento").select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
    });
    $('#ddlTipoDocumento').on("select2:open", function (e) {
        ScrollbarSelect();
    });
    ObtenerInformacionTrabajador(IDTrabajador);    
});

Dropzone.autoDiscover = false;
var divdropzone = $(".dropzone").dropzone({
    url: "ControlTrabajador?op=9&IDTrabajador=" + IDTrabajador,
    maxFiles: 1,
    timeout: 180000,
    addRemoveLinks: false,
    acceptedFiles: UploadFileTypes,    
    dictRemoveFileConfirmation: null,
    dictInvalidFileType: "No puedes subir archivos de este tipo. Extensiones  de archivos permitidos " + UploadFileTypes,
    dictMaxFilesExceeded: "Solo puedes subir una imagen.",
    autoProcessQueue: false,
    init: function () {
        this.on("addedfile", function (file) {
            let regexp = /^[0-9a-záéíóúñü_-\s]+([.][0-9a-z]+)?$/i;
            if (file.size > (UploadFileSizeLimitMB * 1024 * 1024)) {
                message("error", "La imagen supera los " + UploadFileSizeLimitMB + "MB permitidos.", "Limite de tamaño");
                this.removeFile(file);
            }
            if (regexp.test(file.name) === false) {
                message("error", "El nombre de la imagen no puede contener caracteres especiales.", "Nombre incorrecto");
                this.removeFile(file);
            }            
            this.options.autoProcessQueue = true;
            this.processQueue();
        });
        this.on("processing", function (file) {
            this.options.url = "ControlTrabajador?op=9&IDTrabajador=" + IDTrabajador;
        });
    },
    success: function (file, data) {
        this.removeFile(file);
        file.previewElement.classList.add("dz-success");
        $("#imgTrabajador").attr("src", "Image/Workers/2.jpg?" + fecha.getSeconds());
        message("success", "La imagen se cargó exitosamente.", "Carga exitosa");       
    },
    error: function (file, response) {
        this.removeFile(file);
        let msg = "error", title = "";
        if (file.status === "canceled") {
            msg = "success";
            title = "Cancelación exitosa.";
        }
        message(msg, response, title);
    },
    removedfile: function (file) {
        file.previewElement.remove();
    }
});

function ListaUbigeoDistrito(){
    op = "1";  
    let html = `<option value="0" selected="selected">Seleccionar</option>`;
    $.get("ControlUbigeoDistrito", {op}, (response) => {  
        const dato = JSON.parse(response);
        if(dato.length > 0){  
            dato.forEach(d => {           
                html += `<option value="${d.IDUbigeodistrito}">${d.Nombre}</option>`;                
            }); 
            $("#ddlUbigeoDistrito").html(html);
            $("#ddlUbigeoDistrito").select2({    
                width: '100%'        
            });
            $('#ddlUbigeoDistrito').on("select2:open", function (e) {
                ScrollbarSelect();
            });  
        }
    });    
}

function ListaServicio(){
    op = "1";  
    let html = `<option value="0" selected="selected">Seleccionar</option>`;
    $.get("ControlServicio", {op}, (response) => {  
        const dato = JSON.parse(response);
        if(dato.length > 0){  
            dato.forEach(d => {           
                html += `<option value="${d.IDServicio}">${d.Oficio}</option>`;                
            }); 
            $("#ddlServicio").html(html);
            $("#ddlServicio").select2({    
                width: '100%'        
            });
            $('#ddlServicio').on("select2:open", function (e) {
                ScrollbarSelect();
            });  
        }
    });    
}

function ObtenerInformacionTrabajador(IDTrabajador){
    op = "4";  
    $.get("ControlTrabajador", {op, IDTrabajador}, (response) => {  
        const dato = JSON.parse(response);
        if(dato.IDTrabajador !== 0){
            $("#imgTrabajador").attr("src","Image/Workers/" + dato.IDTrabajador + ".jpg?time=" + fecha.getTime());
            $("#txtNombre").val(dato.Nombre);
            $("#txtApellido").val(dato.Apellido);
            $("#txtTelefono").val(dato.Telefono);
            $("#ddlTipoDocumento").select2("val", dato.TipoDocumento);
            $("#ddlUbigeoDistrito").select2("val", dato.IDUbigeodistrito);
            $("#txtNumeroDocumento").val(dato.NumeroDocumento);
            $("#txtEmail").val(dato.Email);
            $("#txtPassword").val(dato.Password);
            $("#txtFechaNacimiento").val(dato.FechaNacimiento);
            $("#txtPresentacion").val(dato.Presentacion);
            PuntajeTrabajador(IDTrabajador);
            ListaServiciosPorTrabajador(IDTrabajador);
            ListaSolicitudes(IDTrabajador);
            ListarComentarioPorTrabajador(IDTrabajador);
        }
    });
}

function PuntajeTrabajador(IDTrabajador){
    op = "3";  
    let html = ``;
    $.get("ControlTrabajador", {op, IDTrabajador}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){  
            switch(dato){
                case 0.5: 
                html += `<i class='fa fa-star-half-o ml-1 text-warning'></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i>`;
                break;
                case 1:
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i>`;
                break;
                case 1.5: 
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star-half-o ml-1 text-warning'></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i>`;
                break;
                case 2: 
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i>`;
                break;
                case 2.5: 
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star-half-o ml-1 text-warning'></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i>`;
                break;
                case 3: 
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i>`;
                break;
                case 3.5: 
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star-half-o ml-1 text-warning'></i><i class="fa fa-star-o ml-1 text-warning"></i>`;
                break;
                case 4: 
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class="fa fa-star-o ml-1 text-warning"></i>`;
                break;
                case 4.5: 
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star-half-o ml-1 text-warning'></i>`;
                break;
                case 5: 
                html += `<i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i><i class='fa fa-star ml-1 text-warning'></i>`;
                break;
            }
            $("#divStar").html(html); 
        }else {
            html += `<i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i><i class="fa fa-star-o ml-1 text-warning"></i>`;            
            $("#divStar").html(html);
        }
    });
}

function ListaServiciosPorTrabajador(IDTrabajador){
    op = "1";      
    $.get("ControlServicioTrabajador", {op, IDTrabajador}, (response) => {  
        const dato = JSON.parse(response);
        if(dato.length > 0){ 
            ListServicio = dato;
            let count = 0;
            let html = ``;
            dato.forEach(d => {             
                count++;
                html += `<div class="col-lg-12">
                            <div class="row` + (dato.length === count ? `` : ` form-group`) + (count === 1 ? `` : ` mt-3`) + `">  
                                <div class="col-lg-10 text-justify">
                                    <h4 class="text-warning"><strong>${d.Servicio}</strong></h4>
                                    <p class="m-0">${d.Descripcion}</p>                            
                                </div>  
                                <div class="col-lg-2">
                                    <button type="button" class="btn btn-xs btn-primary" title="Editar" onclick='EditarServicioPorTrabajador(` + d.IDServicioTrabajador + `)'><i class="fa fa-pencil"></i></button>
                                    <button type="button" class="btn btn-xs btn-danger" title="Eliminar" onclick='EliminarServicioPorTrabajador(` + d.IDServicioTrabajador + `)'><i class="fa fa-trash"></i></button>
                                </div>
                            </div>
                        </div>`;   
                if(dato.length > count){
                    html += `<div class="col-lg-12">
                                <div class="border-bottom"></div>
                            </div>`;
                }
            }); 
            $("#divServicesWorker").html(html); 
        }else {
            $("#divServicesWorker").empty();
        }
    });
}

function ListaSolicitudes(IDTrabajador){
    op = "1";    
    $.get("ControlSolicitud", {op, IDTrabajador}, (response) => {  
        const dato = JSON.parse(response);        
        if(dato.length > 0){ 
            let count = 0;
            let html = ``;
            dato.forEach(d => {             
                count++;
                html += `<div class="col-lg-12">
                            <div class="row` + (dato.length === count ? `` : ` form-group`) + (count === 1 ? `` : ` mt-3`) + `">  
                                <div class="col-lg-10 text-justify">
                                    <label class="text-warning"><i class='fa fa-user' title='E-mail'></i> <strong>${d.Nombre} ${d.Apellido}</strong></label>
                                    <br><i class='fa fa-envelope' title='E-mail'></i> <span>${d.Email}</span>       
                                    <br><i class='fa fa-mobile-phone' title='Celular'></i> <span>${d.Telefono}</span>                           
                                </div>  
                                <div class="col-lg-2">                                    
                                    <button type="button" class="btn btn-xs btn-primary" title="Trabajo realizado" onclick='ActualizarSolicitudTrabajador(` + d.IDSolicitud + `)'><i class="fa fa-wrench"></i></button>
                                </div>
                            </div>
                        </div>`;   
                if(dato.length > count){
                    html += `<div class="col-lg-12">
                                <div class="border-bottom"></div>
                            </div>`;
                }
            }); 
            $("#divRequestsWorker").html(html); 
        }else {
            $("#divRequestsWorker").empty();
        }
    });
}

function ListarComentarioPorTrabajador(IDTrabajador){
    op = "5";      
    $.get("ControlTrabajador", {op, IDTrabajador}, (response) => {  
        const dato = JSON.parse(response);
        if(dato.length > 0){ 
            let count = 0;
            let html = ``;
            dato.forEach(d => {             
                count++;
                html += `<div class="row` + (count === dato.length ? `` : ` border-bottom mb-3`) + `">
                            <div class="col-2 mb-3 text-center">
                                <i class="fa fa-user-circle fa-4x text-warning mb-2"></i>
                                <br><strong>${d.Cliente}</strong>
                            </div>
                            <div class="col-10 mb-3">
                                <small class="float-right text-warning">${d.Fecha}</small>                                    
                                <p class="text-muted">${d.Comentario}</p>                                 
                            </div>
                        </div>`;                
            }); 
            $("#divComent").html(html); 
        }else {
            $("#divComent").empty();
        }
    });
}

$('#btnUpdateTrabajador').click(function () {
    let IDUbigeoDistrito = $("#ddlUbigeoDistrito").val();
    let Telefono = $("#txtTelefono").val();
    let Email = $("#txtEmail").val();
    let Presentacion = $("#txtPresentacion").val();
    let Password = $("#txtPassword").val();   
    if(IDUbigeoDistrito === "0"){        
        message("error", "No ha seleccionado ningún distrito.", "Error de Dato");
        return false;
    }
    if(Telefono.length < 9){        
        message("error", "El número teléfonico no es valido.", "Error de Dato");        
        return false;
    } 
    if(!checkRequiret($("#txtPresentacion"))){        
        message("error", "No ha ingresado su presentación.", "Error de Dato");        
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
    ActualizarTrabajador(IDTrabajador, IDUbigeoDistrito, Telefono, Presentacion, Email, Password);
});

function ActualizarTrabajador(IDTrabajador, IDUbigeoDistrito, Telefono, Presentacion, Email, Password){
    op = "8";      
    $.get("ControlTrabajador", {op, IDTrabajador, IDUbigeoDistrito, Telefono, Presentacion, Email, Password}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){  
            SweetAlert("success", "Operación exitosa", "Se actualizó la información satisfactoriamente.");
        } else {
            SweetAlert("error", "Operación Inválida", "Error al actualizar la información.");            
        }
    });
}

function ActualizarSolicitudTrabajador(IDSolicitud){
    op = "4";      
    $.get("ControlSolicitud", {op, IDSolicitud}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){  
            SweetAlert("success", "Operación exitosa", "Se actualizó la solicitud satisfactoriamente.");
            ListaSolicitudes(IDTrabajador);
        } else {
            SweetAlert("error", "Operación Inválida", "Error al actualizar la solicitud.");            
        }
    });
}

$('#btnNewService').click(function () {
    AbrirServicioPorTrabajador();
});

function AbrirServicioPorTrabajador(){
    $("#divNewService").removeClass("d-none");  
    $("#btnNewService").addClass("d-none");  
    $("#btnCancelService").removeClass("d-none");
    $("#btnSaveService").removeClass("d-none");
    $("#ddlServicio").select2({
        width: '100%'
    });
    $('#ddlServicio').on("select2:open", function (e) {
        ScrollbarSelect();
    });
    CountCaracters($("#txtDescripcion"),$("#lblCountDescripcion"));
}

$('#btnCancelService').click(function () {
    CerrarServicioPorTrabajador();
});

function CerrarServicioPorTrabajador(){
    $("#ddlServicio").select2("val", 0);
    $("#ddlServicio").attr("disabled", false);
    $("#txtDescripcion").val(""); 
    $("#divNewService").addClass("d-none");  
    $("#btnNewService").removeClass("d-none");  
    $("#btnCancelService").addClass("d-none");
    $("#btnSaveService").addClass("d-none");
    IDServicioTrabajador = 0;
}

function EditarServicioPorTrabajador(ID){
    let ServicioTrabajador = ListServicio.filter(x => x.IDServicioTrabajador === ID);
    IDServicioTrabajador = ID;
    $("#ddlServicio").select2("val", ServicioTrabajador[0].IDServicio);
    $("#ddlServicio").attr("disabled", true);
    $("#txtDescripcion").val(ServicioTrabajador[0].Descripcion); 
    AbrirServicioPorTrabajador();
}

$('#btnSaveService').click(function () {
    let IDServicio = parseInt($("#ddlServicio").val());
    let Descripcion = $("#txtDescripcion").val();  
    if(IDServicio === 0){        
        message("error", "No ha seleccionado ningún servicio.", "Error de Dato");
        return false;
    }
    if(!checkRequiret($("#txtDescripcion"))){        
        message("error", "No ha ingresado ninguna descripción.", "Error de Dato");
        return false;
    }
    if(IDServicioTrabajador === 0){
        let ServicioTrabajador = ListServicio.filter(x => x.IDServicio === IDServicio);
        if (ServicioTrabajador.length > 0){
            message("error", "Usted ya cuenta con este servicio.", "Error de Dato");
            return false;
        }
        RegistrarServicioPorTrabajador(IDServicio, IDTrabajador, Descripcion);
    } else {
        ActualizarServicioPorTrabajador(IDServicioTrabajador, Descripcion);
    }
});

function RegistrarServicioPorTrabajador(IDServicio, IDTrabajador, Descripcion){
    op = "2";      
    $.get("ControlServicioTrabajador", {op, IDServicio, IDTrabajador, Descripcion}, (response) => {  
        const dato = JSON.parse(response);    
        if(dato > 0){     
            CerrarServicioPorTrabajador();
            SweetAlert("success", "Operación exitosa", "Se registró el servicio satisfactoriamente.");
            ListaServiciosPorTrabajador(IDTrabajador);
        } else {
            SweetAlert("error", "Operación Inválida", "Error al registrar el servicio.");            
        }
    });
}

function ActualizarServicioPorTrabajador(IDServicioTrabajador, Descripcion){
    op = "3";      
    $.get("ControlServicioTrabajador", {op, IDServicioTrabajador, Descripcion}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){  
            CerrarServicioPorTrabajador();
            SweetAlert("success", "Operación exitosa", "Se actualizó el servicio satisfactoriamente.");
            ListaServiciosPorTrabajador(IDTrabajador);
        } else {
            SweetAlert("error", "Operación Inválida", "Error al actualizar el servicio.");            
        }
    });
}

function EliminarServicioPorTrabajador(IDServicioTrabajador){
    op = "4";      
    $.get("ControlServicioTrabajador", {op, IDServicioTrabajador}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){    
            CerrarServicioPorTrabajador();
            SweetAlert("success", "Operación exitosa", "Se eliminó el servicio satisfactoriamente.");
            ListaServiciosPorTrabajador(IDTrabajador);
        } else {
            SweetAlert("error", "Operación Inválida", "Error al eliminar el servicio.");            
        }
    });
}

