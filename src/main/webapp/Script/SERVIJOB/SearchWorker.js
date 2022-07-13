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
                html += `<div class="col-lg-3">
                        <div class="contact-box">
                          <div class="contact-box-body">
                              <img alt="image" class="rounded-circle" src="Image/Workers/${d.IDTrabajador}.jpg">
                            <h3 class="mb-0">
                              <strong>${d.Nombre + " " + d.Apellido}</strong>
                            </h3>
                            <i class="fa fa-birthday-cake" title="Edad"></i> ${d.FechaNacimiento} 
                            <div class="font-weight-bold mt-2">` + Servicios + `</div>
                            <address class="mt-1 mb-0">
                              <i class="fa fa-map-marker" title="Distrito"></i> ${d.Distrito}
                              <br><i class="fa fa-envelope" title="E-mail"></i> ${d.Email}        
                              <br><i class="fa fa-mobile-phone" title="Celular"></i> ${d.Telefono}        
                            </address>
                         </div>
                          <div class="contact-box-footer">
                            <button type="button" class="btn btn-block btn-sm btn-warning" onclick="ViewWorker(${d.IDTrabajador});"><i class="fa fa-user-plus"></i> Mas Infromación</button>
                          </div>
                        </div>
                        </div>`;                
            }); 
            $("#divWorkers").html(html); 
        }else {
            $("#divWorkers").empty();
        }
    });
}

function ViewWorker(IDTrabajador) {
    window.location.href = "ViewWorker.jsp?IDTrabajador=" + IDTrabajador;    
}