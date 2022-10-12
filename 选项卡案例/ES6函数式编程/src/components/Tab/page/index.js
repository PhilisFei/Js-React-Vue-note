import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils/tools';

export default () => {
    return {
        name: 'page',
        tpl(dataItem){
            const oPage = document.createElement('div'),
                  pageHtml = this.renderPage(dataItem);
            oPage.className = 'page';

            oPage.innerHTML = pageHtml;

            return {
                oPage,
                pageHtml
            };
        },

        renderPage(dataItem){
            return tplReplace(tpl, {
                city_name: dataItem.city_name,
                img: dataItem.img,
                intro: dataItem.intro
            });
        }
    };
}