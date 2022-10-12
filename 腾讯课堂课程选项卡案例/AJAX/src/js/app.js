import $ from 'jquery';

//http://localhost:3001/course/get_course_fields
//http://localhost:3001/course/get_courses/field

let field = 'all';

const $tab = $('#J_tab'),
      $list = $('#J_list');

//GET 请求数据 -> jsonp
getCourseFields();
getCourses(field);

$tab.on('click', function(ev){
    const e = ev || window.event,
          tar = e.target || e.srcElement,
          tagName = tar.tagName.toLowerCase();

    if(tagName === 'a'){
        const field = $(tar).attr('data-field');

        getCourses(field);
    }
});

function getCourseFields(){
    $.ajax({
        url: 'http://localhost:3001/course/get_course_fields',
        type: 'GET',
        dataType: 'jsonp',
        success(data){
            let list = '';

            list += '<a href="javascript:;" data-field="all">全部</a> ';

            data.result.forEach((item) => {
                list += `<a href="javascript:;" data-field="${item.field}">${item.field_name}</a> `
            });

            $tab.append(list);
        }
    });
}

function getCourses(field){
    $.ajax({
        url: `http://localhost:3001/course/get_courses/${field}`,
        type: 'GET',
        dataType: 'jsonp',
        success(data){
            let list = '';

            data.result.forEach((item) => {
                list += `<li>${item.course_name}</li>`;
            });

            $list.html(list);
        }
    });
}