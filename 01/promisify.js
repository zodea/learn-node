function promisify(fn) {
  console.log('fn', fn)
  return function (...args) {
    console.log('args', ...args)
    return new Promise(function (resolve, reject) {
      args.push(function (err, ...arg) {
        console.log('err', err, 'args', ...args)
        if (err) reject(err)
        resolve(...arg)
      })
      console.log('all', ...args)
      fn.apply(null, args)
    })
  }
}

module.exports = promisify
