function debounce (f, wait) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f()
    }, wait)
  }
}
function throttle (f, wait) {
    let timer = null
  return function (...args) {
    if (!timer)
      timer = setTimeout(() => {
        f()
        timer = null
      }, wait)

  }
}
export default {
  bind: function (el, binding, vnode) {
    let { time, type, fn } = binding.value();
    let f = throttle(fn, time)
    el.addEventListener(type, () => {
      f('a')
    });
  }
}