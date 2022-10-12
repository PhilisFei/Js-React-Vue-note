;(function(doc, initTools, initCompute){

    var oCalculator = doc.getElementsByClassName('J_calculator')[0],
    oResult = oCalculator.getElementsByClassName('result')[0],
    oInputs = oCalculator.getElementsByTagName('input'),
    oBtnGroup = oCalculator.getElementsByClassName('btn-group')[0];

    var init = function(){
        bindEvent();
    }

    function bindEvent(){
        oBtnGroup.addEventListener('click', onBtnClick, false);
    }

    function onBtnClick(ev){
        var tar = initTools.getTarget(ev),
            tagName = tar.tagName.toLowerCase();
              
        if(tagName === 'button'){
            var method = tar.getAttribute('data-method'),
                fVal = initTools.digitalize(oInputs[0].value),
                sVal = initTools.digitalize(oInputs[1].value);

            renderResult(initCompute[method](fVal, sVal));
        }
    }

    function renderResult(result){
        oResult.innerText = result;
    }

    init();//管理模块的运行
})(document, initTools, initCompute);