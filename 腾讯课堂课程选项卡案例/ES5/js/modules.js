var courseTab = (function($, initTools){
    //节点对象
    var $courseTab = $('.J_courseTab'),
        $listWrapper = $('.J_listWrapper'),
        $tabList = $courseTab.find('.tab-item-list'),
        $courseList = $listWrapper.find('.course-card-list');

    //模板
    var tabItemTpl = $('#J_tabItemTpl').html(),
        cardTpl = $('#J_cardTpl').html();

    //数据
    var courseData = $.parseJSON($('#J_courseData').html()),
        courseFieldData = $.parseJSON($('#J_courseFieldData').html());

    var field = 'all',
        htmlCache = {};

    var init = function(){
        render();
        bindEvent();
    }

    function render(){
        $tabList.html(renderTab(courseFieldData));
        $courseList.html(renderList(courseData));
    }

    function renderTab(data){
        var list = '';

        list += initTools.tplReplace(tabItemTpl, {
            styleClass: 'tab-item-lk lk-current',
            field: 'all',
            fieldName: '全部'
        });

        data.forEach(function(item, index){
            list += initTools.tplReplace(tabItemTpl, {
                styleClass: 'tab-item-lk',
                field: item.field,
                fieldName: item.field_name
            });
        });

        return list;
    }

    function renderList(data){
        if(!htmlCache[field]){
            var list = '';
            data.forEach(function(item){
                list += initTools.tplReplace(cardTpl, {
                    id: item.id,
                    courseName: item.course_name,
                    priceStyle: item.price === '0' ? 'item-free' : 'item-price',
                    price: item.price === '0' ? '免费' : '￥' + item.price + '.00',
                    img: item.img
                });
            });
            htmlCache[field] = list;

            console.log('from renderList');
        }else{
            console.log('from cache');
        }

        return htmlCache[field];
    }

    function bindEvent(){
        //事件代理
        $courseTab.on('click', '.tab-item-lk', onTabClick);
    }

    function onTabClick(){
        //this指向绑定被代理的子元素
        var $this = $(this),
            index = $this.parent('.tab-item').index();
            
        field = $this.attr('data-field');

        tabChange($this);
        pageChange(field);
    }

    function tabChange(target){
        target.addClass('lk-current')
             .parent('.tab-item')
             .siblings()
             .children('.tab-item-lk')
             .removeClass('lk-current');
    }

    function pageChange(field){
        const data = _filterData(field);
        $courseList.html(renderList(data));
    }

    function _filterData(field){
        return courseData.filter(function(item){
            if(field === 'all'){
                return true;
            }
            return field === item.field;
        });
    }

    return {
        init: init
    };

})(jQuery, initTools);