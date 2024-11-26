import express from "express"

const route = express.Router()

route.post("/write", (req, res) => {
    console.log("Creating my first post");
})

route.post("/writeAgain", (req, res) => {
    console.log("posting data...");
})

export default route