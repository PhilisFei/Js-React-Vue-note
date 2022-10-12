const URL = {
    BASE_URL: process.env.NODE_ENV === 'production' 
              ? 'xxx.jsplusplus.com'
              : 'http://localhost:3001'
};

const DEFAULT_NAV_ITEM = [{
    field: '-1',
    field_name: '全部'
}];

const DEFAULT_NAV_FIELD = '-1';

export {
    URL,
    DEFAULT_NAV_ITEM,
    DEFAULT_NAV_FIELD
}