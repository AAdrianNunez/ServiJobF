var fecha = new Date();
var IDTrabajador = '';
var IDCliente = '';

$(document).ready(function () {  
    if(sessionStorage.getItem('NombreCompleto') !== null){
        $("#lblCliente").html(sessionStorage.getItem('NombreCompleto'));  
        IDCliente = sessionStorage.getItem('IDCliente');
    }
    ID = GetParameterByName('IDTrabajador');    
    if(ID !== ''){
        IDTrabajador = parseInt(ID);
        ObtenerInformacionTrabajadorCliente(IDTrabajador);
    }    
    CountCaracters($("#txtComent"),$("#lblCountCharacters"));
    ScrollbarInput();
});

function ObtenerInformacionTrabajadorCliente(IDTrabajador){
    op = "2";  
    $.get("ControlTrabajador", {op, IDTrabajador, IDCliente}, (response) => {  
        const dato = JSON.parse(response);
        if(dato.IDTrabajador !== 0){  
            $("#imgWorker").attr("src","Image/Workers/" + dato.IDTrabajador + ".jpg?time=" + fecha.getSeconds());
            $("#lblName").html(dato.Nombre + " " + dato.Apellido);    
            let TipoDocumento = dato.TipoDocumento === 1 ? "DNI" : "Carnet de extranjeria";          
            let Year = GetEdad(dato.FechaNacimiento);
            let html = `<i class='fa fa-id-card-o' title='` + TipoDocumento + `'></i> <span>` + dato.NumeroDocumento + `</span>
                        <br><i class='fa fa-birthday-cake' title='Edad'></i> <span>` + dato.FechaNacimiento + ` (` + Year + ` Años)</span>
                        <br><i class='fa fa-map-marker' title='Distrito'></i> <span>` + dato.Distrito + `</span>`;
            if(dato.IDSolicitud === 0){
                html += `<br><button type='button' class='btn btn-sm btn-warning mt-2' onclick='Contactar(` + IDCliente + `,` + IDTrabajador + `)'><i class='fa fa-phone'></i> Contactar</button>`;
            } else {
                html += `<br><i class='fa fa-envelope' title='E-mail'></i> <span>` + dato.Email + `</span>       
                         <br><i class='fa fa-mobile-phone' title='Celular'></i> <span>` + dato.Telefono + `</span>`;
            }
            if(dato.EstadoSolicitud === 2){
                $("#divEvaluation").removeClass("d-none");
            }            
            $("#divInformation").html(html);
            $("#divAboutMe").html(dato.Presentacion);
            PuntajeTrabajador(IDTrabajador);
            ListaServiciosPorTrabajador(IDTrabajador);
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
                html += `<i class='fa fa-star-half-o fa-2x ml-1 text-warning'></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;
                break;
                case 1:
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;
                break;
                case 1.5: 
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star-half-o fa-2x ml-1 text-warning'></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;
                break;
                case 2: 
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;
                break;
                case 2.5: 
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star-half-o fa-2x ml-1 text-warning'></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;
                break;
                case 3: 
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;
                break;
                case 3.5: 
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star-half-o fa-2x ml-1 text-warning'></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;
                break;
                case 4: 
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;
                break;
                case 4.5: 
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star-half-o fa-2x ml-1 text-warning'></i>`;
                break;
                case 5: 
                html += `<i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i><i class='fa fa-star fa-2x ml-1 text-warning'></i>`;
                break;
            }
            $("#divStar").html(html); 
        }else {
            html += `<i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i><i class="fa fa-star-o fa-2x ml-1 text-warning"></i>`;            
            $("#divStar").html(html);
        }
    });
}

function ListaServiciosPorTrabajador(IDTrabajador){
    op = "1";      
    $.get("ControlServicioTrabajador", {op, IDTrabajador}, (response) => {  
        const dato = JSON.parse(response);
        if(dato.length > 0){ 
            let count = 0;
            let html = ``;
            dato.forEach(d => {             
                count++;
                html += `<div class="text-justify ` + (dato.length === count ? `` : `border-bottom mb-3`) + `">
                            <h4 class="text-warning"><strong>${d.Servicio}</strong></h4>
                            <p>${d.Descripcion}</p>
                         </div>`;                
            }); 
            $("#divServicesWorker").html(html); 
        }else {
            $("#divServicesWorker").empty();
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

$('#btnComent').click(function () {
    let Comentario = $("#txtComent").val();
    if(!checkRequiret($("#txtComent"))){        
        message("error", "No ha ingresado ningún comentario.", "Error de Dato");
        return false;
    }  
    let Puntaje = parseInt($("input[name=rbtQualification]:checked").val());
    RegistrarCalificacion(IDCliente, IDTrabajador, Puntaje);  
    CrearComentario(IDCliente, IDTrabajador, Comentario);      
});

function CrearComentario(IDCliente, IDTrabajador, Comentario){
    op = "6";      
    $.get("ControlTrabajador", {op, IDCliente, IDTrabajador, Comentario}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            $("#txtComent").val("");
            SweetAlert("success", "Operación Exitosa", "Se registro su evaluación satisfactoriamente.");
            ListarComentarioPorTrabajador(IDTrabajador);               
        } else {
            SweetAlert("error", "Operación Inválida", "Error al crear la cuenta.");            
        }
    });
}

function RegistrarCalificacion(IDCliente, IDTrabajador, Puntaje){
    op = "7";      
    $.get("ControlTrabajador", {op, IDCliente, IDTrabajador, Puntaje}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            PuntajeTrabajador(IDTrabajador);
            $("#divEvaluation").addClass("d-none");
        }
    });
}

function Contactar(IDCliente, IDTrabajador){
    op = "3";      
    $.get("ControlSolicitud", {op, IDCliente, IDTrabajador}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            ObtenerInformacionTrabajadorCliente(IDTrabajador);
            SweetAlert("success", "Solicitud Enviada", "Se envió su solictud al trabajador, este se pondra en contacto con usted. Si requiere comunicarse por urgencia, se le brinda su información para conactarlo.");
        } 
    });
}