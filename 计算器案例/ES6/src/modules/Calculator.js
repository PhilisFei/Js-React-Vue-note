import compute from "../lib/compute";
import { trimSpace, digitalize } from "../utils/tools";

import ResultComponent from "../components/Result";
import InputGroupComponent from "../components/InputGroup";
import BtnGroupComponent from "../components/BtnGroup";

@compute //Calculator传给target
export default class Calculator {
    constructor(el){
        //super();是继承必须写的

        this.name = 'Calculator';

        this.el = el;

        this.resultComponent = new ResultComponent();
        this.inputGroupComponent = new InputGroupComponent();
        this.btnGroupComponent = new BtnGroupComponent();

        //设置属性的时候拦截并添加其他功能
        this.data = this.defineData();

        this.selectedIndex = 0;
    }

    init(){
        this.render();
        this.bindEvent();
    }

    defineData(){
        /*
        使用defineProperties通过数据控制视图
        let _obj = {},
            method = 'plus',
            fVal = 0,
            sVal = 0;

        const _self = this;

        Object.defineProperties(_obj, {
            method: {
                get(){
                    return method;
                },

                set(newVal){
                    method = newVal;
                    _self.setResult(_self.data.method, _self.data.fVal, _self.data.sVal);
                }
            },

            fVal: {
                get(){
                    return fVal;
                },

                set(newVal){
                    fVal = newVal;
                    _self.setResult(_self.data.method, _self.data.fVal, _self.data.sVal);
                }
            },

            sVal: {
                get(){
                    return sVal;
                },

                set(newVal){
                    sVal = newVal;
                    _self.setResult(_self.data.method, _self.data.fVal, _self.data.sVal);
                }
            }
        });

        return _obj;
        */

        let target = {
            method: 'plus',
            fVal: 0,
            sVal: 0
        };

        const _self = this;

        return new Proxy(target, {
            get(target, prop){
                return target[prop];
            },
            set(target, prop, value){
                target[prop] = value;
                _self.setResult(_self.data.method, _self.data.fVal, _self.data.sVal);
                return true;
            }
        });
    }

    render(){
        const oFrag = document.createDocumentFragment(); //文档碎片

        oFrag.appendChild(this.resultComponent.tpl());
        oFrag.appendChild(this.inputGroupComponent.tpl());
        oFrag.appendChild(this.btnGroupComponent.tpl());

        this.el.appendChild(oFrag);
    }

    bindEvent(){
        const el = this.el;

        this.oResult = el.getElementsByClassName('result')[0];
        this.oBtnGroup = el.getElementsByClassName('btn-group')[0];
        this.oInputs = el.getElementsByClassName('num-input');
        this.oBtns = this.oBtnGroup.getElementsByClassName('btn');

        this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false);
        this.oInputs[0].addEventListener('input', this.onInput.bind(this), false);
        this.oInputs[1].addEventListener('input', this.onInput.bind(this), false);
    }

    onInput(ev){
        const e = ev || window.event,
              tar = e.target || e.srcElement,
              id = tar.getAttribute('data-id'),
              val = digitalize(trimSpace(tar.value)) || 0;
        
        this.setData(id, val);
        // this.setResult(this.data.method, this.data.fVal, this.data.sVal);
    }

    setData(field, newVal){
        switch (field) {
            case 'method':
                this.data.method = newVal;
                break;
            case 'fVal':
                this.data.fVal = newVal;
                break;
            case 'sVal':
                this.data.sVal = newVal;
                break;
            default:
                break;
        }
    }

    onBtnClick(ev){
        const e = ev || window.event,
              tar = e.target || e.srcElement,
              tagName = tar.tagName.toLowerCase();

        if(tagName === 'button'){
            const method = tar.getAttribute('data-method');
            //       fVal = digitalize(trimSpace(this.oInputs[0].value)),
            //       sVal = digitalize(trimSpace(this.oInputs[1].value));
            // this.setResult(method, fVal, sVal);
            this.setData('method', method);
            this.setBtnSelected(tar);
            // this.setResult(this.data.method, this.data.fVal, this.data.sVal);
        }
    }

    setBtnSelected(target){
        this.oBtns[this.selectedIndex].className = 'btn';
        this.selectedIndex = [].indexOf.call(this.oBtns, target);
        this.oBtns[this.selectedIndex].className += ' selected';
    }

    setResult(method, fVal, sVal){
        this.oResult.innerText = this[method](fVal, sVal);
    }
}
