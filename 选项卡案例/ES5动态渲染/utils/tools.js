var initToolsModule = (function(){

    function getTarget(ev){
        var e = ev || window.event;
        return e.target || e.srcElement;
    }

    function tplReplace(template, replaceObject){
        return template.replace(/{{(.*?)}}/g, function(node, key){
            return replaceObject[key];
        });
    }

    return {
        getTarget: getTarget,
        tplReplace: tplReplace
    };

})();