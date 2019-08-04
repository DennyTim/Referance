const Movie = require('./movie');
const MoviePrinter = require('./movie-printer');
const BasicFormatter = require('./basic-formatter');
const HtmlFormatter = require('./html-formatter');

const movie = new Movie('Deadpool 2', 2018, '2:22:00', 'Action');
const printer = new MoviePrinter(movie);
//const basicFormatter = new BasicFormatter();
const htmlFormatter = new HtmlFormatter();

//const result = printer.print(basicFormatter);
const result = printer.print(htmlFormatter);

console.log(result);