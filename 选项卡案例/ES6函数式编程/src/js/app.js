import Tab from '../modules/Tab';

;((doc) => {

    const oApp = doc.getElementById('app');

    const init = () => {
        new Tab(oApp).init();
    };

    init();

})(document);