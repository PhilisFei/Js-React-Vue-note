;(function(doc){

    var oMenuBtn = doc.querySelector('.header .fa-bars'),
        oNav = doc.querySelector('.header .header-nav');

    var init = function(){
        setFontSize();
        bindEvent();
    }

    function bindEvent(){
        window.addEventListener('resize', setFontSize, false);
        oMenuBtn.addEventListener('click', showNav, false);
    }

    function setFontSize(){
        //设备宽度
        var cWidth = doc.documentElement.clientWidth;

        if(cWidth <= 414){
            doc.documentElement.style.fontSize = cWidth / 37.5 + 'px';
        }else{
            var fontSize = doc.documentElement.style.fontSize;
            if(fontSize !== '62.5%'){
                doc.documentElement.style.fontSize = '62.5%';
            }
        }

        if(cWidth > 768){
            oNav.style.display = 'block';
        }else{
            oNav.style.display = 'none';
        }
    }

    function showNav(){
        var isShow = oNav.style.display;

        if(isShow === 'block'){
            oNav.style.display = 'none';
        }else{
            oNav.style.display = 'block';
        }
    }

    init();

})(document);