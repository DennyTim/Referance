const App = require('./app');

const app = new App();

app.use((req, res, next) => {
    res.write('1st handler');
    next();
});

app.use((req, res, next) => {
    res.write('2nd handler');
    next();
});

app.use((req, res, next) => {
    res.write('3rd handler');
    next();
});

app.listen(3000);