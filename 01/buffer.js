// 申请多大的内存空间
const buf = Buffer.alloc(10)

console.log('buf', buf)

const buf2 = Buffer.from('a')
const buf3 = Buffer.from('中')

console.log(buf2, buf3)

const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString())
