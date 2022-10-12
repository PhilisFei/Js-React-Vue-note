export default {
    bind(el, binding, vnode){
        const _ops = binding.value,
              _c = el.getElementsByClassName(_ops.className);

        _c[_ops.curIdx].className += ` ${_ops.currentClassName}`;
    },
    update(el, binding, vnode){
        const _ops = binding.value,
              _oOps = binding.oldValue,
              _c = el.getElementsByClassName(_ops.className);

        _c[_oOps.curIdx].className = `${_ops.className}`;
        _c[_ops.curIdx].className += ` ${_ops.currentClassName}`;
    }
};