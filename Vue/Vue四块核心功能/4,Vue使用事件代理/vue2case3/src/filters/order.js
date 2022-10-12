export default {
    setOrderStatus(status){
        switch (status) {
            case 1:
                return "待付款";
            case 2:
                return "待发货";
            case 3:
                return "待收货";
            case 4:
                return "待评价";
            default:
                return "未获取到状态";
        }
    }
};