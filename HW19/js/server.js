const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    // читаем файл из файловой системы
    const indexHtml = fs.readFileSync('../index.html');
    const { url } = request;
    if (url.includes('img1.jpg')) {
        const mainJs = fs.readFileSync(`..${url}`);
        response.end(mainJs);
    }
    if (url.includes('/main.js')) {
        const mainJs = fs.readFileSync(`..${url}`);
        response.end(mainJs);
    } else {
        response.end(indexHtml);
    }
    // возвращаем клиенту данный файл
}).listen(3000, 'localhost', err => {
    if (err) console.log(err);
    console.log('server running at localhost:3000');
});