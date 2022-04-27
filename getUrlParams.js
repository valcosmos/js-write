function getParams1(url) {
  // 创建一个 URLSearchParams实例
  const urlSearchParmas = new URLSearchParams(
    (url && url.split('?')[1]) || window.location.search
  )
  // 将key value转换成对象
  const params = Object.fromEntries(urlSearchParmas.entries())

  return params
}

function getParams2(url) {
  const res = {}
  if (url.includes('?')) {
    const str = url.split('?')[1]
    const arr = str.split('&')
    arr.forEach((item) => {
      const key = item.split('=')[0]
      const value = item.split('=')[1]
      res[key] = decodeURIComponent(value)
    })
  }
  return res
}

// test
const url = 'https://www.valzt.cn?a=1&b=2&c=3'
console.log(getParams1(url))
console.log(getParams2(url))
