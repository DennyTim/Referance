const fs = require('./fs');

fs.readFile('text.md', 'utf-8', (error, file) => {
    if (error) return console.error(error);
    
    console.log(file);
});