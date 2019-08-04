const fs = require('fs');
const server = require('http').createServer();

// Схема аналогичная pipe
/**
 *  readable.on('data', (chunk) => { 
 *    writable.write(chunk);
 *  });
 * 
 *  readable.on('end', () => {
 *    writable.end(); 
 *  });
 */

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);