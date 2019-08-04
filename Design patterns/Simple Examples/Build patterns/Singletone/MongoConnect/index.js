const Database = require('./database');

(async () => {
    const connection = await Database.getInstance();

    //Database.close();
})();


