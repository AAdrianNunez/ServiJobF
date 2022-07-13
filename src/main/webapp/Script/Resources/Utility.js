$(document).ready(function () {  
    if(sessionStorage.getItem('NombreCompleto') !== null){
        $("#lblUserName").html(sessionStorage.getItem('NombreCompleto'));    
    }
});

$("#btnSessionEnded").on("click", function () {
    sessionStorage.removeItem('IDCliente');
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
function CountCaracters(n, t) {
    $(t).html($(n).val().length + " de " + $(n).attr("maxlength") + " caracteres.");
    $(n).keyup(function () {
        var i = $(n).attr("maxlength"),
            r = $(n).val().length;
        $(t).text(r + " de " + i + " caracteres.")
    })
}
function GetParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}