$(document).ready(function () {  
    if(sessionStorage.getItem('NombreCompleto') !== null){
        $("#lblUserName").html(sessionStorage.getItem('NombreCompleto'));    
    }
    if(sessionStorage.getItem('IDCliente') !== null){
        $(".tcliente").removeClass("d-none");
    }
});

$("#btnSessionEnded").on("click", function () {
    sessionStorage.removeItem('IDCliente');
    sessionStorage.removeItem('IDTrabajador');
    sessionStorage.removeItem('NombreCompleto');
    window.location.href = "Login.jsp"; 
});

﻿//Scrollbar Textarea
function ScrollbarInput() {
    $("textarea.scrollbar-input").hover(
        function () {
            $(this).addClass('scrollbar-input-hover');
        }, function () {
            $(this).removeClass('scrollbar-input-hover');
        }
    );
}
//Scrollbar Select(ddl) for Select2
//Nota: Se utilizar de la siguiente forma:
/*-----------------------------------------------
$('.select2').on("select2:open", function (e) {
    ScrollbarSelect();
});
-----------------------------------------------*/
function ScrollbarSelect() {
    $("ul.scrollbar-input").hover(
        function () {
            $(this).addClass('scrollbar-input-hover');
        }, function () {
            $(this).removeClass('scrollbar-input-hover');
        }
    );
}
function CountCaracters(n, t) {
    $(t).html($(n).val().length + " de " + $(n).attr("maxlength") + " caracteres.");
    $(n).keyup(function () {
        var i = $(n).attr("maxlength"),
            r = $(n).val().length;
        $(t).text(r + " de " + i + " caracteres.");
    });
}
function GetParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function GetEdad(date) {
    var now = new Date();
    var dateBirth = new Date(date);
    var year = now.getFullYear() - dateBirth.getFullYear();
    var m = now.getMonth() - dateBirth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < dateBirth.getDate())) {
        year--;
    }
    return year;
}