const fs = require('fs')

// TODO: buffer 缓冲区 描述二进制数据
// const data = fs.readFileSync('./conf.js')

// console.log(data)

// 异步流程控制
// 异步 => 异步 cb => cb
// promise generate async/await eventemit 订阅发布

// 错误优先回调
// fs.readFile('./conf.js', (err, data) => {
//   if (err) console.log(err)
//   else console.log(data.toString())
// })

// 直接使用promise的语法对异步事件进行处理，
// 缺陷：不能确定所有函数都支持promise风格
// const fsp = require('fs').promises

// fsp.readFile('./conf.js').then(data => console.log(data.toString()))

// 修饰成 promise 风格
// const { promisify } = require('util')
const promisify = require('./promisify')

const readFile = promisify(fs.readFile)

readFile('./conf.js').then(data => console.log(data.toString()))

// 手写 promisify
