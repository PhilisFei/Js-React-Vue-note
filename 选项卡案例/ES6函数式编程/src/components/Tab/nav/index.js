import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../../utils/tools';

export default () => {
    return {
        name: 'nav',
        tpl(data){
            const oNav = document.createElement('div');
            oNav.className = 'nav';

            let list = '';

            data.forEach((item, index) => {
                list += tplReplace(tpl, {
                    navClass: !index ? 'nav-item current' : 'nav-item',
                    city_name: item.city_name
                });
            });

            oNav.innerHTML = list;
            return oNav;
        },

        bindEvent(onNavClick){
            const oNav = document.getElementsByClassName('nav')[0];

            oNav.addEventListener('click', onNavClick, false);
        }
    };
}