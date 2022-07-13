/* Alertas */
/*------------------------------------------------
_type: 'message','loading','search','error','info','success','alert','question'
_text: texto de la alerta a mostrar
_title: titulo de la alerta mostrar
------------------------------------------------*/
//var Route = "/sigo"
var Route = "../.."

// Alerta estandar
function SweetAlert(_type, _title, _text) {
    var jtype
    button = true;
    buttonText = "Aceptar";
    var img = "";
    switch (_type) {
        case "message": jtype = ""; img = Route + "/Images/Icon/message.gif"; break;
        case "loading": jtype = ""; button = false; img = Route + "/Images/Icon/loading.gif"; break;
        case "search": jtype = ""; button = false; img = Route + "/Images/Icon/search.gif"; break;
        case "success": jtype = "success"; break; 
        case "error": jtype = "error"; break;
        case "alert": jtype = "warning"; break;
        case "info": jtype = "info"; break;
        case "question": jtype = "question"; break;
    }
    swal({
        title: _title,
        text: _text,
        type: jtype,
        showConfirmButton: button,
        confirmButtonText: buttonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
        imageUrl: img
    }).catch(swal.noop);
}

//Alerta con texto HTML 
function SweetAlertHTML(_type, _title, _html) {
    var jtype
    button = true;
    buttonText = "Aceptar";
    var img = "";
    switch (_type) {
        case "message": jtype = ""; img = Route + "/Images/Icon/message.gif"; break;
        case "loading": jtype = ""; button = false; img = Route + "/Images/Icon/loading.gif"; break;
        case "search": jtype = ""; button = false; img = Route + "/Images/Icon/search.gif"; break;
        case "success": jtype = "success"; break;
        case "error": jtype = "error"; break;
        case "alert": jtype = "warning"; break;
        case "info": jtype = "info"; break;
        case "question": jtype = "question"; break;
    }
    swal({
        title: _title,
        html: _html,
        type: jtype,
        showConfirmButton: button,
        confirmButtonText: buttonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
        imageUrl: img
    }).catch(swal.noop);
}

//Alerta con texto HTML que permite llamar una función despues de aceptar 
function SweetAlertHTMLFunction(_type, _title, _html, _funtion) {
    var jtype
    button = true;
    buttonText = "Aceptar";
    var img = "";
    switch (_type) {
        case "message": jtype = ""; img = Route + "/Images/Icon/message.gif"; break;
        case "loading": jtype = ""; button = false; img = Route + "/Images/Icon/loading.gif"; break;
        case "search": jtype = ""; button = false; img = Route + "/Images/Icon/search.gif"; break;
        case "success": jtype = "success"; break;
        case "error": jtype = "error"; break;
        case "alert": jtype = "warning"; break;
        case "info": jtype = "info"; break;
        case "question": jtype = "question"; break;
    }
    swal({
        title: _title,
        html: _html,
        type: jtype,
        showConfirmButton: button,
        confirmButtonText: buttonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
        imageUrl: img
    }).then(function () {
        _funtion();
    }).catch(swal.noop);
}

//Alerta para modales (cierra el modal hasta aceptar la alerta) por problemas de focus
function SweetAlertModal(_type, _title, _text,_modal) {
    var jtype
    button = true;
    buttonText = "Aceptar";
    var img = "";
    switch (_type) {
        case "message": jtype = ""; img = Route + "/Images/Icon/message.gif"; break;
        case "loading": jtype = ""; button = false; img = Route + "/Images/Icon/loading.gif"; break;
        case "search": jtype = ""; button = false; img = Route + "/Images/Icon/search.gif"; break;
        case "success": jtype = "success"; break;
        case "error": jtype = "error"; break;
        case "alert": jtype = "warning"; break;
        case "info": jtype = "info"; break;
        case "question": jtype = "question"; break;
    }
    swal({
        title: _title,
        text: _text,
        type: jtype,
        showConfirmButton: button,
        confirmButtonText: buttonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
        imageUrl: img
    },function () {
        _modal.modal("show");  
    }).catch(swal.noop);
}

//Alerta que permite llamar una función despues de aceptar
function SweetAlertFunction(_type, _title, _text, _funtion) {
    var jtype
    button = true;
    buttonText = "Aceptar";
    var img = "";
    switch (_type) {
        case "message": jtype = ""; img = Route + "/Images/Icon/message.gif"; break;
        case "loading": jtype = ""; button = false; img = Route + "/Images/Icon/loading.gif"; break;
        case "search": jtype = ""; button = false; img = Route + "/Images/Icon/search.gif"; break;
        case "success": jtype = "success"; break;
        case "error": jtype = "error"; break;
        case "alert": jtype = "warning"; break;
        case "info": jtype = "info"; break;
        case "question": jtype = "question"; break;
    }
    swal({
        title: _title,
        text: _text,
        type: jtype,
        showConfirmButton: button,
        confirmButtonText: buttonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
        imageUrl: img
    }).then(function () {
        _funtion();
    }).catch(swal.noop);
}

//Alerta de confirmación que permite llamar una función despues de aceptar
function SweetAlertConfirm(_type, _title, _text, _funtion) {
    swal({
        title: _title,
        text: _text,
        type: _type,
        showCancelButton: true,
        confirmButtonText: "Si, Aceptar",
        cancelButtonText: "No, Cancelar",
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then(function (isConfirm) {
        if (isConfirm) {
            _funtion();
        }
    }).catch(swal.noop);;
}

//Alerta con texto HTML que permite llamar una función despues de aceptar 
function SweetConfirmHTMLFunction(_type, _title, _html, _funtion) {
    var jtype
    button = true;
    buttonText = "Aceptar";
    var img = "";
    switch (_type) {
        case "message": jtype = ""; img = Route + "/Images/Icon/message.gif"; break;
        case "loading": jtype = ""; button = false; img = Route + "/Images/Icon/loading.gif"; break;
        case "search": jtype = ""; button = false; img = Route + "/Images/Icon/search.gif"; break;
        case "success": jtype = "success"; break;
        case "error": jtype = "error"; break;
        case "alert": jtype = "warning"; break;
        case "info": jtype = "info"; break;
        case "question": jtype = "question"; break;
    }
    swal({
        title: _title,
        html: _html,
        type: jtype,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        showConfirmButton: button,
        confirmButtonText: buttonText,
        allowOutsideClick: false,
        allowEscapeKey: false,
        imageUrl: img
    }).then(function (isConfirm) {
        if (isConfirm) {
            _funtion();
        }
    }).catch(swal.noop);
}

//Alerta de confirmación que permite llamar una función despues de aceptar
function SweetAlertInfoBack(_title, _text, _funtion) {
    swal({
        title: _title,
        text: _text,
        type: "info",
        showCancelButton: false,
        confirmButtonText: "Retornar",
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then(function (isConfirm) {
        if (isConfirm) {
            _funtion();
        }
    }).catch(swal.noop);;
}

//Ejemplo para confirmación eliminación o registro
//swal({
//    title: "Titulo",
//    text: "Mensaje o Pregunta",
//    type: "warning o question",
//    showCancelButton: true,
//    confirmButtonColor: "",
//    confirmButtonText: "Si, Aceptar",
//    cancelButtonText: "No, Cancelar",
//    allowOutsideClick: false,
//    allowEscapeKey: false
//}).then(function (isConfirm) {
//    if (isConfirm) {
//        //Si
//    } else {
//        //No
//    }
//}).catch(swal.noop);;

//Cerrar una alerta
//Swal.Close();