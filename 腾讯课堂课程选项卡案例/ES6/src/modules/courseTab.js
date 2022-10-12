import courseTab from '../components/courseTab';
import { filterData } from '../lib/courseTab';

import courseData from '../data/courseData';

import list from '../components/courseTab/list';

export default ($, $app) => {

    const courseTabComponent = courseTab($),
          listComponent = list();

    let field = 'all',
        $courseList = null,
        htmlCache = {};

    const init = () => {
        render();
        courseTabComponent.tabClick(onTabClick);
    }

    function render(){
        $app.append(courseTabComponent.tpl());
        $courseList = $('.J_listWrapper').find('.course-card-list');
    }

    function onTabClick(){
        //this指向绑定被代理的子元素
        var $this = $(this),
            index = $this.parent('.tab-item').index();

        field = $this.attr('data-field');

        tabChange($this);
        pageChange(courseData, field);
    }

    function tabChange($target){
        $target.addClass('lk-current')
               .parent()
               .siblings('.tab-item')
               .children('.tab-item-lk')
               .removeClass('lk-current');
    }

    function pageChange(data, field){
        if(!htmlCache[field]){
            const _data = filterData(data, field);
            htmlCache[field] = listComponent.tpl(_data);

            console.log('from component');

        }else{

            console.log('from cache');
            
        }

        $courseList.html(htmlCache[field]);
    }

    return {
        init
    };
}