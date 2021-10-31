const http = require('http')
const fs = require('fs')

// response 也是一个流
const server = http.createServer((request, response) => {
  const { url, method, headers } = request
  // 有请求
  console.log('url', url)

  if (url === '/' && method === 'GET') {
    const page = fs.readFileSync('./index.html', err => {
      if (err) {
        // 500
        response.writeHead(500)
        response.end('500 page Error')
        return
      }
    })
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.end(page)
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    // 所有图片，通过Accept可以获取当前的格式
    // readFile
    // response.end
    // 此处还需考虑文件的详细类型，大小等情况
    fs.createReadStream('.' + url).pipe(response)
  } else {
    // 404
    response.writeHead(404)
    response.end('No page...')
  }
})

server.listen(3010, () => {
  console.log('server on http://localhost:3010')
})
