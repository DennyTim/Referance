// Принцип предполагает, что один класс должен иметь всего лишь один функционал (добав. и удал. записей)
// Все остальные методы, которые не касаются текущего фу-ала выносяться в отдельный класс.
// Singleton является антипаттерном, потому как в себе содержить все возможные полотна методов 
// для работы с обьектом

const fs = require('fs');

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }
  // save(filename)
  // {
  //   fs.writeFileSync(filename, this.toString());
  // }
  //
  // load(filename)
  // {
  //   //
  // }
  //
  // loadFromUrl(url)
  // {
  //   //
  // }
}
Journal.count = 0;

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

let p = new PersistenceManager();
let filename = __dirname + 'journal.txt';
p.saveToFile(j, filename);

// separation of concerns