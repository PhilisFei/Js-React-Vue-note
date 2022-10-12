var initTools = (function(){
    function tplReplace(template, replaceObject){
        return template.replace(/{{(.*?)}}/g, function(node, key){
            return replaceObject[key];
        });
    }

    return {
        tplReplace: tplReplace
    }
})();