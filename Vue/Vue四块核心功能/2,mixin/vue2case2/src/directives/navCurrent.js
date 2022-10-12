
export default {
    bind(el, binding, vnode){
        const _ops = binding.value,
              _c = getElementsByClassName(_ops.className);

        _c[_ops.curIdx].className += ` ${_ops.activeClass}`;
    },
    update(el, binding, vnode){
        const _ops = binding.value,
              _oOps = binding.oldValue,
              _c = getElementsByClassName(_ops.className);

        _c[_oOps.curIdx].className = `${_oOps.className}`;
        _c[_ops.curIdx].className += ` ${_ops.activeClass}`;
    }
};