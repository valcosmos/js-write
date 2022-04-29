// 事件触发之后延迟执行，如果在延迟过程中重新点击，则重新计时，最后只会触发一次

let inp = document.querySelector('input')
inp.oninput = debounce(function () {
  // 可能出现this指向问题，这里的this 是 window
  console.log(this)
}, 500)

const useDebounce = (fn, delay = 300) => {
  let timer = null

  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // 这里的this是 input, 通过call改变this指向
      fn.call(this)
    }, delay)
  }
}
