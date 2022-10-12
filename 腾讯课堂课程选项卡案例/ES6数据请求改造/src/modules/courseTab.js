import courseTab from '../components/courseTab';
import { filterData } from '../lib/courseTab';

// import courseData from '../data/courseData';

import indexModel from '../models/index';

import list from '../components/courseTab/list';

export default ($, $app) => {

    const courseTabComponent = courseTab($),
          listComponent = list();

    let field = 'all',
        $courseList = null,
        dataChche = {};

    const init = () => {
        render();
    }

    function render(){
        //async返回promise对象
        courseTabComponent.tpl().then((res) => {
            $app.append(res);
            $courseList = $('.J_listWrapper').find('.course-card-list');
            courseTabComponent.tabClick(onTabClick);
        });
    }

    function onTabClick(){
        //this指向绑定被代理的子元素
        var $this = $(this),
            index = $this.parent('.tab-item').index();

        field = $this.attr('data-field');

        tabChange($this);
        pageChange(field);
    }

    function tabChange($target){
        $target.addClass('lk-current')
               .parent()
               .siblings('.tab-item')
               .children('.tab-item-lk')
               .removeClass('lk-current');
    }

    async function pageChange(field){
        if(!dataChche[field]){
            const data = await indexModel.getCourses(field);
            dataChche[field] = data.result;

            console.log('from ajax')
        }else{
            console.log('from cache')
        }

        $courseList.html(listComponent.tpl(dataChche[field]));
    }

    return {
        init
    };
}