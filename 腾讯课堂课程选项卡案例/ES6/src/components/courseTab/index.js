import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../utils/tools';

import courseData from '../../data/courseData';

import tab from './tab';
import list from './list';

export default ($) => {
    const tabComponent = tab($),
      listComponent = list();

    return {
        name: 'courseTab',
        tpl(){
            return tplReplace(tpl, {
                tabList: tabComponent.tpl(),
                cardList: `<ul class="course-card-list clearfix">${listComponent.tpl(courseData)}</ul>`
            });
        },
        tabClick(onTabClick){
            tabComponent.bindEvent(onTabClick);
        }
    };
}