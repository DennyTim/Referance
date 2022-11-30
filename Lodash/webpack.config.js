const path = require('path');
module.exports = {
  entry: './quiz/mapping-data.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
};
