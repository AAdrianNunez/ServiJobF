/* Mensajes */
/*------------------------------------------------
_type: 'error','info','success','warning'
_msg: mensaje a mostrar
_title: titulo  a mostrar (puede omitirse)
------------------------------------------------*/
function message(_type, _msg, _title) {
    toastr[_type](_msg, _title);
    toastr.options = {
        closeButton: true,
        debug: false,
        progressBar: true,
        preventDuplicates: true,
        positionClass: "toast-top-right",
        onclick: null,
        showDuration: "400",
        hideDuration: "1000",
        timeOut: "30000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    }
}