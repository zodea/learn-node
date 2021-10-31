const fs = require('fs')

// 1.png => 2.png
// read => write 当文件大小大于内存时不可取
const rs = fs.createReadStream('1.png')
const ws = fs.createWriteStream('2.png')

rs.pipe(ws)
