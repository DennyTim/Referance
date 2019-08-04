let http = require('http');
let fs = require('fs');
/**
 * Этот код работает, но он буферизирует весь data.txt в память при каждом запросе. Если data.txt 
 * достаточно большой, ваша программа начнет потреблять слишком много оперативной памяти, особенно при 
 * большом количестве подключений пользователей с медленными каналами связи.
 */
let server = http.createServer((req, res) => {
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    res.end(data);
  });
});

server.listen(8000);