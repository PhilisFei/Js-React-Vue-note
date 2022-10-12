import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../utils/tools';

import indexModel from '../../models/index';

// import courseData from '../../data/courseData';
// import courseFieldData from '../../data/courseFieldData';

import tab from './tab';
import list from './list';

export default ($) => {
    const tabComponent = tab($),
      listComponent = list();

    return {
        name: 'courseTab',
        //async函数return一个promise对象
        async tpl(){

            const retFieldData = await indexModel.getCourseFields(),
                  retCourseData = await indexModel.getCourses('all'),
                  courseFieldData = retFieldData.result,
                  courseData = retCourseData.result;

            return tplReplace(tpl, {
                tabList: tabComponent.tpl(courseFieldData),
                cardList: `<ul class="course-card-list clearfix">${listComponent.tpl(courseData)}</ul>`
            });
        },
        tabClick(onTabClick){
            tabComponent.bindEvent(onTabClick);
        }
    };
}