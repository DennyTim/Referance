// process.stdin.on('readable', function () {
//   var buf = process.stdin.read();
//   console.dir(buf);
// });

//Пример чтения в буффер порциями по 3 байта:
// process.stdin.on('readable', function () {
//   var buf = process.stdin.read(3);
//   console.dir(buf.toString());
//   process.stdin.read(0);
// });

//создадим парсер который разделяет абзац на строки с делителем - переносом строки:
var offset = 0;
process.stdin.on('readable', function () {
  var buf = process.stdin.read();
  if (!buf) return;
  for (; offset < buf.length; offset++) {
    if (buf[offset] === 0x0a) {
      console.dir(buf.slice(0, offset).toString());
      buf = buf.slice(offset + 1);
      offset = 0;
      process.stdin.unshift(buf);
      return;
    }
  }
  process.stdin.unshift(buf);
});