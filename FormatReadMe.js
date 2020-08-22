let list = []
let res = ''
list.map((item, index) => {
  let title = item.title,
    children = item.children
  res += ('### ' + index + '、' + title + ' -- [(GitHub)](https://github.com/GYQ-LQ/quinn-leetcode/tree/master/01-algorithm-basic/)\n')
  children.map((e, i) => {
    res += (i + 1 + '. ' + e.title + '\n')
  })
})
console.log(res)
