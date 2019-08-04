const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://Den:15935728bl@ds117730.mlab.com:17730/testdanitdb';
const dbName = 'testdanitdb';

/** Реализация одиночки, singleton - 
 * нам требуется каждый раз при обращение к бд одно и тоже подключение
 * то бишь данный инстанс требуется в одном экземпляре, для постоянной работы с ним*/

class Database {
    static async getInstance() {
        if (!Database.instance) {
            const client = await MongoClient.connect(url); // подключаемся к бд

            Database.client = client;  // сохраняем подключение, чтобы закрыть соединение
            Database.instance = client.db(dbName);  // присваеваем подключение инстансу
        }
        return await Database.instance; //возвращаем обьект подключения
    }

    static close() {  //метод для того чтобы закрыть соединение
        if (Database.client) {
            Database.client.close();
        }
    }
}

module.exports = Database;