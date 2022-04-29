const toTree = (items) => {
  const result = []
  const map = new Map()
  for (const item of items) {
    map.set(item._id, { ...item, children: [] })
  }
  for (const item of items) {
    const id = item._id
    const pid = item.pid
    if (map.get(pid)) {
      map.get(pid).children.push(map.get(id))
    } else {
      result.push(map.get(id))
    }
  }

  return result
}
