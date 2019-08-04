const Writable = require('stream').Writable;
const ws = Writable();
ws._write = function (chunk, enc, next) {
  console.dir(chunk);
  next();
};
process.stdin.pipe(ws);