import pg from "pg"

const db = new pg.Client({

    user: "postgres",
    host: "localhost",
    database: "todo_app",
    password: "Fon123.jude",
    port: "5432",
})

export default db;


// db.connect();