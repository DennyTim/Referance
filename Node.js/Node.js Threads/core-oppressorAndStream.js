const http = require('http');
const fs = require('fs');
const oppressor = require('oppressor');
/**
 * Теперь наш файл cжимается для браузеров, которые поддерживают gzip или deflate! 
 * Мы просто отдаем модулю opressor всю логику обработки content-encoding и забываем про нее.
 */
const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream(__dirname + '/data.txt');
  stream.pipe(oppressor(req)).pipe(res);
});
server.listen(8000);