import $ from 'jquery';
import '../scss/common.css';

import courseTab from '../modules/courseTab';

;(($) => {

    const $app = $('#app');

    const init = () => {
        courseTab($, $app).init();
    }

    init();

})($);