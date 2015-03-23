var poppy = poppy || {};

(function(scope){
    'use strict';

    var OPACITY_STEP = 0.01,
        FADE_IN_INTERVAL = 20,
        FADE_OUT_INTERVAL = 60;

    function pop(type, title, message, callback) {
        var popup;
        switch (type) {
            case 'success' : popup = new poppy._modules.Success(title, message); break;
            case 'info' : popup = new poppy._modules.Info(title, message); break;
            case 'error' : popup = new poppy._modules.Error(title, message); break;
            case 'warning' : popup = new poppy._modules.Warning(title, message, callback); break;
        }

        // generate view from view factory
        var view = poppy._createPopupView(popup);

        processPopup(view, popup);
    }

    function processPopup(domView, popup) {
        if(popup._popupData.closeButton === true){
            var button = document.getElementById('poppy-close-button');
            domView.addEventListener('click', function(){
                document.body.removeChild(domView);
            });
        }

        if(popup._popupData.autoHide == true){
            fadeOut(domView, FADE_OUT_INTERVAL);
        }

        if(popup._popupData.callback){
            domView.addEventListener('click', function(){
               popup._popupData.callback();
            });
        }

        domView.style.opasity = "0";
        var body = document.getElementById('body');
        body.appendChild(domView);
        fadeIn(domView, FADE_IN_INTERVAL);
    }

    function fadeOut(element, interval) {
        var opacity = 1,
            disappearInterval = setInterval(function() {
                if (opacity <= 0) {
                    document.body.removeChild(element);
                    clearInterval(disappearInterval);
                }

                element.style.opacity = opacity;
                opacity -= OPACITY_STEP;
            }, interval);
    }


    function fadeIn(element, interval) {
        var opacity = 0,
            disappearInterval = setInterval(function() {
                if (opacity >= 1) {
                    clearInterval(disappearInterval);
                }

                element.style.opacity = opacity;
                opacity += OPACITY_STEP;
            }, interval);
    }

    scope._pop = pop;
}(poppy));


