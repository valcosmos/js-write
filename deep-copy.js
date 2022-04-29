const oldObj = {
  name: 'Cupid',
  age: 20,
  colors: ['orange', 'red'],
  friend: {
    name: 'Valentine'
  }
}

function deepClone(obj = {}) {
  // 如果传递的值 不是对象
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let result

  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 不需要拷贝对象原型上的属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

const newObj = deepClone(oldObj)
// const newObj = JSON.parse(JSON.stringify(oldObj))
newObj.name = 'cc'
newObj.colors[0] = 1
// js 中对于对象的拷贝 是浅拷贝，一变都变
console.log('new==>', newObj)
console.log('old==>', oldObj)
