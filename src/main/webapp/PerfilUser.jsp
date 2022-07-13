<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">    
        <title>SERVIJOB - Perfil</title>
        <jsp:include page="Shared/_link.html" />
    </head>
    <body class="ScrollbarPage">
         <jsp:include page="Shared/_topNavbar.html" />
         <div id="wrapper">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row animated fadeInRight">
                    <div class="col-md-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5 class="text-warning"><i class="fa fa-user-circle-o"></i> Mi Perfil</h5>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label">Nombres</label>
                                                <div class="col-lg-8">
                                                    <input type="text" id="txtNombre" class="form-control" autocomplete="off">
                                                </div>                                   
                                            </div>
                                        </div>  
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label">Apellidos</label>
                                                <div class="col-lg-8">
                                                    <input type="text" id="txtApellido" class="form-control" autocomplete="off">
                                                </div>                                   
                                            </div>
                                        </div> 
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label">Tipo de documento</label>
                                                <div class="col-lg-8">
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
                                                <label class="col-lg-4 col-form-label">Numero de documento</label>
                                                <div class="col-lg-4">
                                                    <input type="text" id="txtNumeroDocumento" class="form-control" maxlength="12" autocomplete="off" disabled>
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label">Teléfono</label>
                                                <div class="col-lg-4">
                                                    <input type="text" id="txtTelefono" class="form-control" autocomplete="off" maxlength="9" onkeypress="return OnlyPhoneNumber(this, event);">
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label">Email</label>
                                                <div class="col-lg-8">
                                                    <input type="text" id="txtEmail" class="form-control" autocomplete="off">
                                                </div>                                   
                                            </div>
                                        </div> 
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label">Contraseña</label>
                                                <div class="col-lg-8">
                                                    <input type="password" id="txtPassword" class="form-control" autocomplete="off" onkeypress="return OnlyLettersSpaceless(event);">
                                                </div>                                   
                                            </div>
                                        </div> 
                                        <div id="divMessage" class="col-lg-12"></div> 
                                        <div class="col-lg-12 text-right">                                            
                                            <button type="button" id="btnUpdate" class="btn btn-sm btn-warning"><i class="fa fa-user-plus"></i> Guardar</button>                                                
                                        </div>                                             
                                    </div>
                                </div>
                                <div class="col-lg-6 text-center text-muted">
                                    <i class="fa fa-user-o fa-5x mt-5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <jsp:include page="Shared/_footer.html" />
         <script src="Script/Resources/Validate.js"></script>
         <script src="Script/SERVIJOB/PerfilUser.js"></script>
    </body>
</html>
