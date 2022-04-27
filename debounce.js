// 事件触发之后延迟执行，如果在延迟过程中重新点击，则重新计时，最后只会触发一次

function useDebounce(cb, delay = 300, immediate) {
  let timer
  return function () {
    const ctx = this
    const arg = arguments
    const later = function () {
      timer = null
      if (!immediate) cb.apply(ctx, args)
    }
    let exec = immediate && !timer
    clearTimeout(timer)
    timer = setTimeout(later, delay)
    if (exec) cb.apply(ctx.args)
  }
}
