// 当function(x,y)得到的返回值小于0，x会被移动到y前面----生序，从小到大

// 当function(x,y)得到的返回值大于0，x会被移动到y的后面----降序，从大到小

const arr = [1, 2, 32, 3, 243, 43, 454, 54, 5, 45]

// 升序
console.log(arr.sort((x, y) => x - y))

// 降序

console.log(arr.sort((x, y) => y - x))
