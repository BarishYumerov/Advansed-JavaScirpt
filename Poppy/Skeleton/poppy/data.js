var poppy = poppy || {};

(function(scope){
    'use strict';
    function Popup(title, message, type, position, autoHide, timeOut, closeButton, callback ){
        this._popupData = {
            title: title,
            message: message,
            position: position,
            type: type,
            autoHide: autoHide,
            timeOut: timeOut,
            closeButton: closeButton,
            callback: callback
        }
    }

    function Success(title, message){
        Popup.call(this, title, message, 'success', 'bottomLeft', false, false, false, false);
    }

    function Info(title, message){
        Popup.call(this, title, message, 'info', 'topLeft', false, false, true, false);
    }

    function Error(title, message){
        Popup.call(this, title, message, 'error', 'topRight', true, 4000, false, false);
    }

    function Warning(title, message, callback){
        Popup.call(this, title, message, 'warning', 'bottomRight', false, false, false, callback);
    }

    scope._modules = {
        Success: Success,
        Info: Info,
        Error: Error,
        Warning: Warning
    }
}(poppy));
