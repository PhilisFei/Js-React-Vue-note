;(function(doc, tools){

    var Tab = function(options){
        this.oTab = doc.querySelector(options.el);

        this.oNav = doc.createElement('div');
        this.oPage = doc.createElement('div');
        this.oNav.className = 'nav';
        this.oPage.className = 'page';

        this.navItemTpl = doc.getElementById('J_navItemTpl').innerHTML;
        this.pageItemTpl = doc.getElementById('J_pageItemTpl').innerHTML;

        this.cityData = JSON.parse(doc.getElementById('J_cityData').innerHTML);

        this.curIdx = 0;

    }

    //每一个模块都有init方法
    Tab.prototype.init = function(){
        this.render();
        this.bindEvent();
    }

    Tab.prototype.render = function(){
        //文档碎片
        var oFrag = doc.createDocumentFragment(),
            list = this.renderList(this.cityData);

        this.oNav.innerHTML = list.nav;
        this.oPage.innerHTML = list.page;

        oFrag.appendChild(this.oNav);
        oFrag.appendChild(this.oPage);

        this.oTab.appendChild(oFrag);
    }

    Tab.prototype.renderList = function(data){
        var navList = '',
            pageList = '';

        data.forEach(function(item, index){
            navList += tools.tplReplace(this.navItemTpl, {
                navStyleClass: !index ? 'nav-item current' : 'nav-item',
                navItemTitle: item.city_name
            });

            pageList += tools.tplReplace(this.pageItemTpl, {
                pageStyleClass: !index ? 'page-item current' : 'page-item',
                cityName: item.city_name, 
                img: item.img,
                intro: item.intro
            });
        }, this);

        return {
            nav: navList,
            page: pageList
        };
    }

    Tab.prototype.bindEvent = function(){
        this.oNavItems = this.oNav.getElementsByClassName('nav-item');
        this.oPageItems = this.oPage.getElementsByClassName('page-item');

        this.oNav.addEventListener('click', this.onNavClick.bind(this), false);
    }

    Tab.prototype.onNavClick = function(ev){
        var tar = tools.getTarget(ev),
            className = tar.className;

        if(className === 'nav-item'){
            this.setCurrent(this.curIdx, 'remove');
            this.curIdx = [].indexOf.call(this.oNavItems, tar);
            this.setCurrent(this.curIdx, 'add');
        }
    }

    Tab.prototype.setCurrent = function(index, field){
        switch (field) {
            case 'add':
                this.oNavItems[index].className = 'nav-item current';
                this.oPageItems[index].className = 'page-item current';
                break;
            case 'remove':
                this.oNavItems[index].className = 'nav-item';
                this.oPageItems[index].className = 'page-item';
                break;
            default:
                break;
        }
    }

    window.Tab = Tab;
})(document, initToolsModule);