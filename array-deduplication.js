const arr = [111, 2, 2, 33, 33, 3, 444]

function getUniqueArr(arr) {
  // const res = Array.from(new Set(arr))
  const res = [...new Set(arr)]
  return res
}

function getUniqueArr1(arr) {
  const res = []
  arr.forEach((item) => {
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  })
  return res
}

function getUniqueArr2(arr) {
  const res = arr.filters((item, index) => {
    return arr.indexOf(item) === index
  })

  return res
}

console.log(getUniqueArr1(arr))
