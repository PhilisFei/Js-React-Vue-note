import '../scss/Tab.scss';

import nav from '../components/Tab/nav';
import page from '../components/Tab/page';

import cityData from '../data/city';

export default class Tab{
    constructor(app){
        this.app = app;
        this.oTab = document.createElement('div');
        this.oTab.className = 'tab J_tab';

        this.navComponent = nav();
        this.pageComponent = page();

        this.curIdx = 0;
        this.htmlCache = {};
    }

    init(){
        this.render();
        this.getElements();
        this.navComponent.bindEvent(this.onNavClick.bind(this));
    }

    render(){
        const tpl = this.pageComponent.tpl(cityData[this.curIdx]);

        this.oTab.appendChild(this.navComponent.tpl(cityData));
        this.oTab.appendChild(tpl.oPage);
        this.htmlCache[this.curIdx] = tpl.pageHtml;

        this.app.appendChild(this.oTab);
    }

    getElements(){
        this.oNavItems = this.oTab.getElementsByClassName('nav-item');
        this.oPage = this.oTab.getElementsByClassName('page')[0];
    }

    onNavClick(ev){
        const e = ev || window.event,
              tar = e.target || e.srcElement,
              className = tar.className;

        className === 'nav-item' && this.pageChange(tar);
    }

    pageChange(target){
        this.oNavItems[this.curIdx].className = 'nav-item';
        this.curIdx = [].indexOf.call(this.oNavItems, target);
        this.oNavItems[this.curIdx].className += ' current';

        this.oPage.innerHTML = this.renderHTML(cityData, this.curIdx);
    }

    renderHTML(data, index){
        if(!this.htmlCache[index]){
            this.htmlCache[index] = this.pageComponent.renderPage(data[this.curIdx]);
            console.log('from component');
        }else{
            console.log('from cache');
        }

        return this.htmlCache[index];
    }
}