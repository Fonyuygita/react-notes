// const express = require('express');
import express from "express"
import cors from "cors"
import pg from "pg"

// const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors())
app.use(express.json())


const db = new pg.Client({

    user: "postgres",
    host: "localhost",
    database: "countries",
    password: "Fon123.jude",
    port: "5432",
})

let quiz = []

db.connect();



// const countries = [
//     { id: 1, name: 'France', capital: 'Paris' },
//     { id: 2, name: 'Japan', capital: 'Tokyo' },
//     { id: 3, name: 'Brazil', capital: 'Brasília' },
//     // Add more countries as needed
// ];

app.get('/countries', (req, res) => {

    db.query("SELECT * FROM capitals", (err, res) => {
        if (err) {
            console.log("Error executing query", err.stack);

        }
        else {
            quiz = res.rows;
            console.log(quiz);
        }
        db.end()
    })
    res.json(quiz)

});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
