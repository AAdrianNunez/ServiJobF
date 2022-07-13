<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">    
        <title>SERVIJOB - Iniciar sessión</title>
        <jsp:include page="Shared/_link.html" />
        <link href="Content/SERVIJOB/Login.css" rel="stylesheet" />    
    </head>
    <body class="ScrollbarPage">
        <div class="outer">
            <div class="middle animated fadeInRight">
                <div class="login_panel" role="form">
                    <div class="ibox-content">
                        <div class="logo mb-4">
                            <i class="fa fa-3x fa-id-card mr-1"></i><span>ServiJob</span>
                        </div> 
                        <h3 class="text-muted mb-3">Inicio de sesión</h3>
                        <form action="" method="POST">
                            <div class="form-group">
                                <input id="txtNetworkUser" name="txtNetworkUser" placeholder="Usuario" class="form-control" type="text" tabindex="1" autocomplete="off" onkeyup="javascript:this.value=this.value.toLowerCase();" />
                            </div>
                            <div class="form-group group-password">
                                <input id="txtPassword" name="txtPassword" placeholder="Contraseña" class="form-control" type="password" tabindex="2" autocomplete="off" />
                                <i class="fa fa-eye-slash vision-password" data-toggle="tooltip" data-placement="bottom" title="Mostrar Contraseña"></i>
                            </div>
                            <button type="button" id="btnLogin" class="btn btn-block btn-warning">Iniciar Sesión</button>
                            <div class="mt-2 text-center">
                                <a href="Registro.jsp">Crear cuenta</a>
                            </div>
                            <div id="divMessage"></div>
                        </form>                          
                    </div>
                </div>
            </div>
        </div>
        <jsp:include page="Shared/_footer.html"/>
        <script src="Script/Resources/Validate.js"></script>
        <script src="Script/SERVIJOB/Login.js"></script>
    </body>
