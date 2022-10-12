import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils/tools';

import courseFieldData from '../../../data/courseFieldData';

export default ($) => {
    return {
        name: 'tab',
        tpl(){
            let list = '';

            list += tplReplace(tpl, {
                styleClass: 'tab-item-lk lk-current',
                field: 'all',
                fieldName: '全部'
            });

            courseFieldData.forEach((item, index) => {
                list += tplReplace(tpl, {
                    styleClass: 'tab-item-lk',
                    field: item.field,
                    fieldName: item.field_name
                });
            });

            list = `<ul class="tab-item-list clearfix">${list}</ul>`;

            return list;
        },

        bindEvent(onTabClick){
            const $courseTab = $('.J_courseTab');
            //事件代理
            $courseTab.on('click', '.tab-item-lk', onTabClick);
        }
    };
}