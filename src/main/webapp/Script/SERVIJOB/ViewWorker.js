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
            $("#imgWorker").attr("src","Image/Workers/" + dato.IDTrabajador + ".jpg");
            $("#lblName").html(dato.Nombre + " " + dato.Apellido);    
            TipoDocumento = dato.TipoDocumento === 1 ? "DNI" : "Carnet de extranjeria";            
            let html = `<i class='fa fa-id-card-o' title='` + TipoDocumento + `'></i> <span>` + TipoDocumento + `</span>
                        <br><i class='fa fa-birthday-cake' title='Edad'></i> <span>` + dato.FechaNacimiento + `</span>
                        <br><i class='fa fa-map-marker' title='Distrito'></i> <span>` + dato.Distrito + `</span>`;
            if(dato.IDSolicitud === 0){
                html += `<br><button type='button' class='btn btn-sm btn-warning mt-2' onclick='Contactar(` + IDCliente + `,` + IDTrabajador + `)'><i class='fa fa-phone'></i> Contactar</button>`
            } else {
                html += `<br><i class='fa fa-envelope' title='E-mail'></i> <span>` + dato.Email + `</span>       
                         <br><i class='fa fa-mobile-phone' title='Celular'></i> <span>` + dato.Telefono + `</span>`;
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
    op = "4";      
    $.get("ControlTrabajador", {op, IDTrabajador}, (response) => {  
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
                html += `<div class="row border-bottom mb-3">
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
    let IDCliente = 0;
    let Comentario = $("#txtComent").val();
    if(sessionStorage.getItem('NombreCompleto') !== null){
        IDCliente = parseInt(sessionStorage.getItem('IDCliente'));
    }    
    CrearComentario(IDCliente, IDTrabajador, Comentario);    
});

function CrearComentario(IDCliente, IDTrabajador, Comentario){
    op = "6";      
    $.get("ControlTrabajador", {op, IDCliente, IDTrabajador, Comentario}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            $("#txtComent").val("");
            $("#divMessage").addClass("d-none");
            ListarComentarioPorTrabajador(IDTrabajador);
        } else {
            $("#divMessage").removeClass()("d-none");
        }
    });
}

function Contactar(IDCliente, IDTrabajador){
    op = "8";      
    $.get("ControlTrabajador", {op, IDCliente, IDTrabajador}, (response) => {  
        const dato = JSON.parse(response);
        if(dato > 0){ 
            ObtenerInformacionTrabajadorCliente(IDTrabajador);
            SweetAlert("success", "Solicitud Enviada", "Se envió su solictud al trabajador, este se pondra en contacto con usted. Si requiere comunicarse por urgencia, se le brinda su información para conactarlo.");
        } 
    });
}