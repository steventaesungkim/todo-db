// **another way to think of line 5
// **const pgPromise = require('pg-promise');
// **const pgp = pgPromise();

const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'node-todo-app-db'
});

//pulling from database (query in js)
db.any('SELECT * FROM todos')
    .then((results) =>{
        console.log(results);
    })