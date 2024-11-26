import pg from "pg"

const db = new pg.Client({

    user: "postgres",
    host: "localhost",
    database: "secure_app",
    password: "Fon123.jude",
    port: "5432",
})

export default db;


// db.connect();