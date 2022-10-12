import $ from 'jquery';

import { API } from '../utils/config';

class IndexModel {
    getCourseFields(){
        //返回成功后的数据
        return $.ajax({
            url: API.getCourseFields,
            type: 'GET',
            dataType: 'JSONP'
        });
    }

    getCourses(field){
        //返回成功后的数据
        return $.ajax({
            url: API.getCourses + field,
            type: 'GET',
            dataType: 'JSONP'
        });
    }
}

export default new IndexModel();