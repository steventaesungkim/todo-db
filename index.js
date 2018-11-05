// **another way to think of line 5
// **const pgPromise = require('pg-promise');
// **const pgp = pgPromise();

// const pgp = require('pg-promise')();
// const db = pgp({
//     host: 'localhost',
//     port: 5432,
//     database: 'node-todo-app-db'
// });

// 000000000
// CRUD
// 000000000

// ------  
// pulling from database (query in js) grabbing all the rows
// function getAll(){
//     return db.any(`
//         SELECT * FROM todos
//     `);
// };
// getAll()
    // .then((results) =>{
    //     // console.log(results);
    //     // console.log(`get all rows`);
    // })


// ------  
// example of grabbing one row
// RETRIEVE
// -=- the ids will be configurable and needs to be dynamic so change into function
// function getById(id){
//     // second way to debug is to use "any" instead of "one" and remove .catch
//     // also put return infront of db to return it to be called on function later
//     return db.one(`
//          SELECT * FROM todos 
//             WHERE id = $1
//     `, [id]
//     );
    
//     // one way to debug 
//     .catch((err) =>{
//         // if nothing, return empty {}
//         return {
//             name: 'no todos found'
//         };
//     })
// };
// getById(2)
//     .then((result) =>{
//         // console.log(result);
//         // console.log(`one row of result`);
//         // returns one object
//     })

// getById(20000)
//     .then((result) =>{
//         // console.log(result);
//         // returns one object
//     })


// ------    
// // example of adding a row
// // CREATE
// function add(name, completed) {
//     return db.result(`
//         INSERT INTO todos
//             (name, completed)
//         VALUES
//             ($1, $2)
//         RETURNING id
//     `, [name, completed]
//     );
// };
// // when adding, use catch in function
// add('walk the chewbacca', false)
//     .catch((err) => {
//         console.log(err);
//     })
//     .then((result) =>{
//         console.log(result);
//     })


// ------ 
// example of deleting a row
// DELETE
// function deleteById(id){
//         return db.result(`
//             DELETE FROM todos 
//                 WHERE id = $1`
//         , [id]
//         );
//     };
// deleteById(7)
//     .then((result) => {
//             console.log(result.rowCount);
//     })


// ------ 
// example of updating a row
// UPDATE
// function updateName(id, name){
//     return db.result(`
//         UPDATE todos
//         SET name = $2
//             where id = $1
//     `, [id, name]
//     );
// };

// updateName(2, 'buy new hypderdrive')
//     .then((result) => {
//         console.log(result);
//     })

// function updateCompleted(id, didComplete){
//     return db.result(`
//         UPDATE todos
//         SET completed = $2
//             WHERE id = $1 
//     `, [id, didComplete]
//     );
// };

// function markCompleted(id){
//     return updateCompleted(id, true);
//     return db.result(`
//         UPDATE todos
// 	    SET completed = $2
//             WHERE id = $1
//     `, [id, true]
//     );
// };

// function markPending(id){
//     return updateCompleted(id, false);
//     return db.result(`
//         UPDATE todos
// 	    SET completed = $2
//             WHERE id = $1
//     `, [id, false]
//     );
// };

// markPending(1)
//     .then ((result) =>{
//         console.log(result);
//     })



const Todo = require('./models/Todos');

Todo.getAll()
    .then((results) =>{
        console.log(results);
        // console.log(`get all rows`);
    })


Todo.getById(2)
    .then((result) =>{
        console.log(result);
        // console.log(`one row of result`);
        // returns one object
    })

Todo.getById(20000)
    .then((result) =>{
        console.log(result);
        // returns one object
    })

Todo.add('walk the chewbacca', false)
    .catch((err) => {
        console.log(err);
    })
    .then((result) =>{
        console.log(result);
    })

Todo.updateName(2, 'buy new hypderdrive')
    .then((result) => {
        console.log(result);
    })

Todo.markPending(1)
    .then ((result) =>{
        console.log(result);
    })

Todo.deleteById(7)
    .then((result) => {
            console.log(result.rowCount);
    })