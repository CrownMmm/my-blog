const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    if (req.method = 'POST') {
        //req数据格式
        console.log('req content-type:', req.headers['content-type']);
        //接受数据 
        let postData = ' '
        req.on('data', chunk => {
            postData += chunk.toString()
        })

        req.on('end', () => {
            console.log('postData:', postData);
            res.end('hello word!')
        })

    }
})
server.listen(8000)
console.log('0k');