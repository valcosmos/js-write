class Commitment {
  static PENDING = '待定'
  static FULFILLED = '成功'
  static REJECTED = '失败'
  constructor(func) {
    // 状态默认为待定
    this.status = Commitment.PENDING
    // resolve 和 reject 都可以传递一个参数，该参数定义为 result
    this.result = null
    // func(this.resolve.bind(this), this.reject.bind(this))
    // 判断当生成实例的时候是否有报错
    try {
      // 如果没有报错 就正常执行 resolve 和 reject
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      // 如果报错就将错误传递给 reject
      this.reject(error)
    }
  }

  resolve(result) {
    // 执行resolve的时候状态是否为待定，如果是待定 就改为 成功
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.FULFILLED
      this.result = result
    }
  }

  reject(result) {
    // 执行reject的时候是否为待定，如果是待定 就改为 失败
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.REJECTED
      this.result = result
    }
  }

  then(onFULFILLED, onREJECTED) {
    // 如果传递过来的参数 不是一个函数 就将它改为空函数
    onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => {}
    onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {}
    if (this.status === Commitment.FULFILLED) {
      onFULFILLED(this.result)
    }
    if (this.status === Commitment.REJECTED) {
      onREJECTED(this.result)
    }
  }
}

let commitment = new Commitment((resolve, reject) => {
  resolve('这次一定')
})

commitment.then(undefined, (err) => console.log(err))
