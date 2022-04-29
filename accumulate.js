function accumulate() {
  const args = [...arguments]
  return args.reduce((prev, curr) => prev + curr)
}

console.log(accumulate(1, 2, 3))
