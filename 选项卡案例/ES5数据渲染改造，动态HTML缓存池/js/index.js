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
        this.htmlCache = {};
    }

    //每一个模块都有init方法
    Tab.prototype.init = function(){
        this.render();
        this.bindEvent();
    }

    Tab.prototype.render = function(){
        //文档碎片
        var oFrag = doc.createDocumentFragment();

        this.oNav.innerHTML = this.renderNav(this.cityData);
        this.oPage.innerHTML = this.renderPage(this.cityData, this.curIdx);

        oFrag.appendChild(this.oNav);
        oFrag.appendChild(this.oPage);

        this.oTab.appendChild(oFrag);
    }

    Tab.prototype.renderNav = function(data){
        var list = '';

        data.forEach(function(item, index){
            list += tools.tplReplace(this.navItemTpl, {
                navStyleClass: !index ? 'nav-item current' : 'nav-item',
                navItemTitle: item.city_name
            });
        }, this);

        return list;
    }

    Tab.prototype.renderPage = function(data, index){
        if(!this.htmlCache[index]){
            var dataItem = data[index];

            this.htmlCache[index] =  tools.tplReplace(this.pageItemTpl, {
                cityName: dataItem.city_name,
                intro: dataItem.intro,
                img: dataItem.img
            });

            console.log('From MakingHTML');
        }else{
            console.log('From HTMLCache');
        }

        return this.htmlCache[index];
    }

    Tab.prototype.bindEvent = function(){
        this.oNavItems = this.oNav.getElementsByClassName('nav-item');
        this.oNav.addEventListener('click', this.onNavClick.bind(this), false);
    }

    Tab.prototype.onNavClick = function(ev){
        var tar = tools.getTarget(ev),
            className = tar.className;

        className === 'nav-item' && this.changePage(tar, this.cityData);
    }

    Tab.prototype.changePage = function(target, data){
        this.setCurrent(this.curIdx, 'remove');
        this.curIdx = [].indexOf.call(this.oNavItems, target);
        this.setCurrent(this.curIdx, 'add');

        this.oPage.innerHTML = this.renderPage(data, this.curIdx);
    }

    Tab.prototype.setCurrent = function(index, field){
        switch (field) {
            case 'add':
                this.oNavItems[index].className = 'nav-item current';
                break;
            case 'remove':
                this.oNavItems[index].className = 'nav-item';
                break;
            default:
                break;
        }
    }

    window.Tab = Tab;
})(document, initToolsModule);