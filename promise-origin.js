// 传递一个函数作为参数，该函数会被默认执行

// 为函数参数传递参数，resolve reject

// promise 有三种状态 分别是 pending fulfilled rejected

console.log('1')
let promise = new Promise((resolve, reject) => {
  console.log('2')
  // resolve('success')

  setTimeout(() => {
    resolve('这次一定')
    console.log('4')
  })
  // reject('failed')
})

promise.then((res) => {
  console.log(res)
})

console.log('3')
