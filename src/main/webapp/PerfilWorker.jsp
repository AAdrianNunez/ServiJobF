<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">    
        <title>SERVIJOB - Perfil Trabajador</title>
        <jsp:include page="Shared/_link.html" />      
        <link href="Content/plugins/dropzone/dropzone.css" rel="stylesheet" type="text/css"/>
        <link href="Content/SERVIJOB/PerfilWorker.css" rel="stylesheet" type="text/css"/>
    </head>
    <body class="ScrollbarPage">
         <jsp:include page="Shared/_topNavbar.html" />
         <div id="wrapper">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row animated fadeInRight">
                    <div class="col-md-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5 class="text-warning"><i class="fa fa-user-circle-o"></i> Mi información</h5>
                            </div>
                            <div class="ibox-tools mr-2">
                                <button type="button" id="btnUpdateTrabajador" class="btn btn-sm btn-warning"><i class="fa fa-save"></i> Guardar</button>                                                
                            </div>
                            <div class="ibox-content">
                                <div class="row">
                                    <div class="col-lg-9">                            
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group row">
                                                    <label class="col-lg-1 col-form-label">Nombres</label>
                                                    <div class="col-lg-3">
                                                        <input type="text" id="txtNombre" class="form-control" autocomplete="off" disabled>
                                                    </div> 
                                                    <label class="col-lg-1 col-form-label">Teléfono</label>
                                                    <div class="col-lg-3">
                                                        <div class="input-group">
                                                            <input type="text" id="txtTelefono" class="form-control" autocomplete="off" maxlength="9" onkeypress="return OnlyPhoneNumber(this, event);">
                                                            <div class="input-group-append">
                                                                <span class="input-group-text"><i class="fa fa-mobile-phone"></i></span>
                                                            </div>
                                                        </div>                                                    
                                                    </div> 
                                                    <label class="col-lg-2 col-form-label">Tipo de documento</label>
                                                    <div class="col-lg-2">
                                                        <select id="ddlTipoDocumento" name="ddlTipoDocumento" class="select2 form-control" tabindex="2" disabled>                                            
                                                            <option value="0" selected="selected">Seleccionar</option>
                                                            <option value="1">DNI</option>
                                                            <option value="2">Carnet de Extranjeria</option>
                                                        </select> 
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-lg-12">
                                                <div class="form-group row">
                                                    <label class="col-lg-1 col-form-label">Apellidos</label>
                                                    <div class="col-lg-3">
                                                        <input type="text" id="txtApellido" class="form-control" autocomplete="off" disabled>
                                                    </div>
                                                    <label class="col-lg-1 col-form-label">Distrito</label>
                                                    <div class="col-lg-3">
                                                        <select id="ddlUbigeoDistrito" name="ddlUbigeoDistrito" class="select2 form-control" tabindex="2">                                            
                                                        </select>
                                                    </div>
                                                    <label class="col-lg-2 col-form-label">Numero de documento</label>
                                                    <div class="col-lg-2">
                                                        <input type="text" id="txtNumeroDocumento" class="form-control" maxlength="12" autocomplete="off" disabled>
                                                    </div>                          
                                                </div>
                                            </div> 
                                            <div class="col-lg-12">
                                                <div class="form-group row">
                                                    <label class="col-lg-1 col-form-label">Email</label>
                                                    <div class="col-lg-3">
                                                        <input type="text" id="txtEmail" class="form-control" autocomplete="off">
                                                    </div> 
                                                    <label class="col-lg-1 col-form-label">Contraseña</label>
                                                    <div class="col-lg-3">
                                                        <input type="password" id="txtPassword" class="form-control" autocomplete="off" onkeypress="return OnlyLettersSpaceless(event);">
                                                    </div>   
                                                    <label class="col-lg-2 col-form-label" >Fecha de nacimiento</label>
                                                    <div class="col-lg-2">
                                                        <div class="input-group">
                                                            <input type="text" id="txtFechaNacimiento" name="txtFechaNacimiento" class="text-right cursor-pointer form-control" disabled/>
                                                            <div class="input-group-append">
                                                                <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <label class="col-lg-1 col-form-label">Presentación</label>
                                                    <div class="col-lg-11">
                                                        <textarea type="text" id="txtPresentacion" name="txtPresentacion" class="form-control input-area scrollbar-input" rows="4" maxlength="1024"></textarea>
                                                        <small id="lblCountCharacters" class="text-muted pull-right"></small>
                                                    </div>                         
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="col-lg-3">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group row">
                                                    <div class="col-lg-12 text-center">
                                                        <img id="imgTrabajador" src="#" class="rounded-circle" onerror="this.src='Image/image-error.png'">
                                                        <div id="divStar" class="mt-2"></div>
                                                    </div>                                                 
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-12 text-center">
                                                        <fieldset>
                                                            <div class="p-xs">
                                                                <div id="UploadFile" class="dropzone">
                                                                    <div class="dz-default dz-message">
                                                                        <i class="fa fa-3x fa-cloud-upload"></i><br />
                                                                        <small>Arrastre y suelte una imagen.<br />Tipos aceptados: <span class="lblType"></span><br />Tamaño máximo: <span class="lblMB"></span></small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </div>  
                                                </div>
                                            </div>  
                                        </div>
                                    </div>                         
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="row animated fadeInRight mt-3">
                    <div class="col-md-6 pr-0">
                        <div class="ibox">
                            <div class="ibox-title">
                                <h5 class="text-warning">Mis Servicios</h5>
                                <div class="ibox-tools">
                                    <button type="button" id="btnNewService" class="btn btn-sm btn-dark"><i class="fa fa-suitcase"></i> Nuevo</button>                                                
                                    <button type="button" id="btnCancelService" class="btn btn-sm btn-danger d-none"><i class="fa fa-times"></i> Cancelar</button>                                                
                                    <button type="button" id="btnSaveService" class="btn btn-sm btn-success d-none"><i class="fa fa-save"></i> Guardar</button>                                                
                                </div>
                            </div>                        
                            <div class="ibox-content text-center">
                                <div id="divNewService" class="row form-group d-none animated fadeInDown">
                                    <div class="col-lg-12">
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Servicio</label>
                                            <div class="col-lg-10 text-left">
                                                <select id="ddlServicio" name="ddlServicio" class="select2 form-control" tabindex="2">                                            
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">                                            
                                            <div class="col-lg-12">
                                                <textarea type="text" id="txtDescripcion" name="txtDescripcion" class="form-control input-area scrollbar-input" rows="4" maxlength="1024" placeholder="Descripción"></textarea>
                                                <small id="lblCountDescripcion" class="text-muted pull-right"></small>
                                            </div>                         
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="border-bottom"></div>
                                    </div>
                                </div>
                                <div id="divServicesWorker" class="row"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="ibox">
                            <div class="ibox-title">
                                <h5 class="text-warning">Mis Solicitudes</h5>
                            </div>                        
                            <div class="ibox-content text-center">
                                <div id="divRequestsWorker" class="row"></div>
                            </div>
                        </div>
                    </div>
                </div>                 
                <div class="row animated fadeInRight mt-3">
                    <div class="col-md-12">
                        <div class="ibox mb-5">
                            <div class="ibox-title">
                                <h5 class="text-warning">Comentarios De Mis Servicios</h5>
                            </div>
                            <div id="divComent" class="ibox-content mb-5">
                                                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>         
         <jsp:include page="Shared/_footer.html" />
         <script src="Script/plugins/dropzone/dropzone.js"></script>
         <script src="Script/Resources/Validate.js"></script>         
         <script src="Script/SERVIJOB/PerfilWorker.js"></script>
    </body>
</html>
