<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">    
        <title>SERVIJOB - Información de Trabajador</title>
        <jsp:include page="Shared/_link.html" />  
        <link href="Content/SERVIJOB/ViewWorker.css" rel="stylesheet" /> 
    </head>
    <body class="ScrollbarPage">
        <jsp:include page="Shared/_topNavbar.html" />
        <div id="wrapper">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row animated fadeInRight">
                    <div class="col-md-4 pr-0">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5 class="text-warning">Información del Profesional</h5>
                            </div>
                        </div>
                        <div class="ibox-content text-center">
                            <img id="imgWorker" alt="image" class="rounded-circle" src="#">
                            <div id="divStar" class="mt-3"></div>
                            <div class="border-bottom mt-3 mb-3"></div>
                            <h5><strong id="lblName"></strong></h5>
                            <address id="divInformation" class="mt-1"></address>
                            <h3 class="text-warning">Sobre mi</h3>
                            <p id="divAboutMe"></p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5 class="text-warning">Mis Servicios</h5>
                            </div>
                        </div>
                        <div id="divServicesWorker" class="ibox-content text-center"></div>
                    </div>
                </div> 
                <div class="row animated fadeInRight mt-3">
                    <div class="col-md-12">
                        <div class="ibox ">
                            <div class="ibox-title">
                                <h5 class="text-warning">Comentarios</h5>
                            </div>
                        </div>
                        <div class="ibox-content mb-5">
                            <div id="divComent"></div>
                            <div class="row ">
                                <div class="col-2 mb-3 text-center">
                                    <i class="fa fa-user-circle fa-4x text-warning mb-2"></i>
                                    <br><strong id="lblCliente"></strong>
                                </div>
                                <div class="col-10 mb-3">                                
                                    <textarea type="text" id="txtComent" name="txtComent" class="form-control input-area scrollbar-input" rows="4" maxlength="1024"></textarea>
                                    <small id="lblCountCharacters" class="text-muted pull-right"></small>
                                    <div class="mt-3">
                                         <button type="button" id="btnComent" class="btn btn-sm btn-warning"><i class="fa fa-commenting-o"></i> Agregar</button>
                                         <div id="divMessage" class="alert alert-danger mt-2 mb-0 d-none">Error, no se puedo realizar la operación.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <jsp:include page="Shared/_footer.html" />
        <script src="Script/SERVIJOB/ViewWorker.js"></script>
    </body>
</html>
