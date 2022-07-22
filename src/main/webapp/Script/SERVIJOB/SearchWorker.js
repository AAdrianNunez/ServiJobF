var fecha = new Date();

$(document).ready(function () {  
    ListaUbigeoDistrito();
    ListaTrabajador("",0);  
});

$('#btnSearch').click(function () {
    let Filter = $("#txtSearch").val();
    let IDUbigeoDistrito = $("#ddlUbigeoDistrito").val();
    ListaTrabajador(Filter, IDUbigeoDistrito);    
});

function ListaUbigeoDistrito(){
    op = "1";  
    let html = `<option value="0" selected="selected">Todos</option>`;
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

function ListaTrabajador(Filter, IDUbigeoDistrito){    
    op = "1";  
    $.get("ControlTrabajador", {op, Filter, IDUbigeoDistrito}, (response) => {        
        const dato = JSON.parse(response);
        if(dato.length > 0){  
            let html = ``;
            dato.forEach(d => {
                let Servicios = d.Servicio.replace(",",", ");             
                let TipoDocumento = d.TipoDocumento === 1 ? "DNI" : "Carnet de extranjeria";  
                let Year = GetEdad(d.FechaNacimiento);
                html += `<div class="col-lg-3">
                        <div class="contact-box">
                          <div class="contact-box-body">
                              <img alt="image" class="rounded-circle" src="Image/Workers/${d.IDTrabajador}.jpg?time=` + fecha.getTime() + `">
                            <h3 class="mb-0">
                              <strong>${d.Nombre + " " + d.Apellido}</strong>
                            </h3>
                            <i class='fa fa-id-card-o' title='` + TipoDocumento + `'></i> <span>` + d.NumeroDocumento + `</span>
                            <br><i class="fa fa-birthday-cake" title="Edad"></i> ` + Year + ` Años
                            <div class="font-weight-bold text-info mt-2">` + Servicios + `</div>
                            <address class="mt-1 mb-0">
                              <i class="fa fa-map-marker" title="Distrito"></i> ${d.Distrito}                                     
                            </address>
                         </div>
                          <div class="contact-box-footer">
                            <button type="button" class="btn btn-block btn-sm btn-warning" onclick="ViewWorker(${d.IDTrabajador});"><i class="fa fa-user-plus"></i> Mas Información</button>
                          </div>
                        </div>
                        </div>`;                
                //<br><i class="fa fa-envelope" title="E-mail"></i> ${d.Email}        
                //<br><i class="fa fa-mobile-phone" title="Celular"></i> ${d.Telefono} 
            }); 
            $("#divWorkers").html(html); 
        }else {
            $("#divWorkers").empty();
            let html = `<div class="col-lg-12">
                            <div class="alert alert-info">No se encontro ningún trabajador.</div>
                        </div>`;  
            $("#divWorkers").html(html); 
        }
    });
}

function ViewWorker(IDTrabajador) {
    window.location.href = "ViewWorker.jsp?IDTrabajador=" + IDTrabajador;    
}