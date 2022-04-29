// throttle 控制执行次数

window.onscroll = throttle(function () {}, 300)

function throttle(fn, delay) {
  let flag = true
  return function () {
    if (flag) {
      setTimeout(() => {
        fn.call(this)
        flag = true
      }, delay)
    }
    flag = false
  }
}
