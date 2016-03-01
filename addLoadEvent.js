function addLoadEvent(func){
    var oldOnLoad = window.onload;

    if(type window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            if(oldOnLoad){
                oldOnLoad();
            }
            func();
        }
    }
}
