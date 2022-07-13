<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">    
        <title>SERVIJOB - Buscar Trabajador</title>
        <jsp:include page="Shared/_link.html" />    
        <link href="Content/SERVIJOB/SearchWorker.css" rel="stylesheet" />    
    </head>
    <body class="ScrollbarPage">
        <jsp:include page="Shared/_topNavbar.html" />
        <div id="wrapper">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row form-group mt-3">
                    <div class="col-12">
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-5">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <select id="ddlUbigeoDistrito" name="ddlUbigeoDistrito" class="select2 form-control" tabindex="2">                                            
                                        </select>
                                    </div>    
                                    <input type="text" id="txtSearch" name="txtSearch" class=" form-control input-sm" autocomplete="off"/>
                                    <div class="input-group-append">
                                        <button type="button" id="btnSearch" class="btn btn-sm btn-warning"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <div id="divWorkers" class="row"></div>
            </div>
        </div>
        <jsp:include page="Shared/_footer.html" />
        <script src="Script/SERVIJOB/SearchWorker.js"></script>
    </body>
</html>
