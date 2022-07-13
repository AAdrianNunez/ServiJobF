<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">    
        <title>SERVIJOB</title>
        <jsp:include page="Shared/_link.html" />
        <link href="Content/SERVIJOB/Index.css" rel="stylesheet" />    
    </head>
    <body class="ScrollbarPage">        
        <nav class="navbar navbar-expand-lg navbar-static-top tooltip-demo" role="navigation">
            <a href="#" class="navbar-brand">
                <i class="fa fa-2x fa-id-card mr-1"></i><span>ServiJob</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-reorder"></i>
            </button>
            <div class="navbar-collapse collapse" id="navbar">
                <ul class="nav navbar-nav mr-auto"></ul>
                <ul class="nav navbar-top-links navbar-right">                                               
                    <li>
                        <button id="btnInicio" type="button" class="btn btn-sm btn-warning"><i class="fa fa-user-secret"></i> Iniciar Sessión</button>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="wrapper">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row row justify-content-center animated fadeInRight">
                    <div class="col-10 p-0">
                        <img width="100%" src='Image/Index/ServiJob.jpg'/>
                    </div>
                    <h2 class="text-warning col-10 p-0 mt-4 font-weight-bold">
                        Datos de la empresa
                    </h2>
                    <ul class="col-10 ul-news mb-5">
                        <li class='row'>
                            <div class='col-4 p-0 img-news1'>
                                <img src='Image/Index/Mision.jpg'/>
                            </div>
                            <div class='col-8 pr-0'>
                                <h2 class='text-warning'>Mision</h2>
                                <p class='text-paragraph'>Ser el software líder a nivel nacional en la búsqueda de especialistas para el hogar</p>
                            </div>
                        </li> 
                        <li class='row'>
                            <div class='col-8 pl-0'>
                                <h2 class='text-warning'>Vision</h2>
                                <p class='text-paragraph'>Facilitar la búsqueda de especialistas calificados en la atención de servicios de mantenimiento, reparación y proyectos para el hogar</p>
                            </div>
                            <div class='col-4 p-0 img-news2'>
                                <img src='Image/Index/Vision.png' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>        
    </div>
    </body>   
    <jsp:include page="Shared/_footer.html" />
    <script src="Script/SERVIJOB/Index.js"></script>
</html>
