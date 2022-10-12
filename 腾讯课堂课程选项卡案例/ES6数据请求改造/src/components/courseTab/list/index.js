import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils/tools';

export default () => {
    return {
        name: 'list',
        tpl(data){
            let list = '';

            data.forEach((item, index) => {
                list += tplReplace(tpl, {
                    id: item.id,
                    courseName: item.course_name,
                    priceStyle: item.price === '0' ? 'item-free' : 'item-price',
                    price: item.price === '0' ? '免费' : '￥' + item.price + '.00',
                    img: item.img
                });
            });

            return list;
        }
    };
}