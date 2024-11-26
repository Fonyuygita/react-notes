import pg from "pg"

const db = new pg.Client({

    user: "postgres",
    host: "localhost",
    database: "capitals",
    password: "Fon123.jude",
    port: "5432",
})

let quiz = []

db.connect();

db.query("SELECT * FROM capitals", (err, res) => {
    if (err) {
        console.log("Error executing query", err.stack);

    }
    else {
        quiz = res.rows;
        console.log(quiz)
        console.log("data is back bro")
    }
    db.end()
    // let data = res.json(quiz)
    // console.log(data)
})

