const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'node-todo-app-db'
});


// CREATE
function add(name, completed) {
    return db.result(`
        INSERT INTO todos
            (name, completed)
        VALUES
            ($1, $2)
        RETURNING id
    `, [name, completed]
    );
};


// RETRIEVE
function getAll(){
    return db.any(`
        SELECT * FROM todos
    `);
};

function getById(id){
    return db.one(`
         SELECT * FROM todos 
            WHERE id = $1
    `, [id]
    )
    .catch((err) =>{
        // if nothing, return empty {}
        return {
            name: 'no todos found'
        };
    })
};


// UPDATE
function updateName(id, name){
    return db.result(`
        UPDATE todos
        SET name = $2
            where id = $1
    `, [id, name]
    );
};

function updateCompleted(id, didComplete){
    return db.result(`
        UPDATE todos
        SET completed = $2
            WHERE id = $1 
    `, [id, didComplete]
    );
};

function markPending(id){
    return updateCompleted(id, false);
    return db.result(`
        UPDATE todos
	    SET completed = $2
            WHERE id = $1
    `, [id, false]
    );
};

function markCompleted(id){
    return updateCompleted(id, true);
    return db.result(`
        UPDATE todos
	    SET completed = $2
            WHERE id = $1
    `, [id, true]
    );
};

// DELETE
function deleteById(id){
    return db.result(`
        DELETE FROM todos 
            WHERE id = $1`
    , [id]
    );
};

module.exports = {
    add,
    deleteById,
    getAll,
    getById,
    markCompleted,
    markPending,
    updateName
};