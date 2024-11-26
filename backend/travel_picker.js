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

let countries = []

db.connect();



// const countries = [
//     { id: 1, name: 'France', capital: 'Paris' },
//     { id: 2, name: 'Japan', capital: 'Tokyo' },
//     { id: 3, name: 'Brazil', capital: 'Brasília' },
//     // Add more countries as needed
// ];

app.post("/tracker", async (req, res) => {
    console.log("tracker route executing")
    console.log(req.body.name)

    const q = "SELECT * FROM travel WHERE country_name=$1"
    const data = await db.query(q, [req.body.name])

    // res.send(req.body.name)
})

app.get('/travel', (req, res) => {
    // const response = res.json(countries);
    // console.log(response)

    db.query("SELECT * FROM travel", (err, data) => {
        if (err) {
            console.log("Error executing query", err.stack);

        }
        else {
            countries = data.rows;
            console.log(countries);
            // console.log(data)
            // res.json(countries)
        }
        db.end()
    })
    res.json(countries)

});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
