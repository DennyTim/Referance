let http = require('http');
let fs = require('fs');

/**
 * Теперь .pipe() самостоятельно слушает события 'data' и'end' потока созданного через fs.createReadStream(). 
 * Этот код не только чище, но теперь и data.txt доставляется по частям по мере чтения его с диска.
 */

let server = http.createServer(function (req, res) {
  let stream = fs.createReadStream(__dirname + '/data.txt');
  stream.pipe(res);
});
server.listen(8000);