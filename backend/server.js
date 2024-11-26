const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

const { GoogleGenerativeAI } = require("@google/generative-ai")
const genAi = new GoogleGenerativeAI(process.env.GOOGLE_GEN_API)

const PORT = process.env.PORT_NUMBER

app.post('/chat', async (req, res) => {
    console.log(req.body.history)
    console.log(req.body.message)
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = model.startChat({
        history: req.body.history,
        message: req.body.message
    })

    const msg = req.body.message
    const result = await chat.sendMessage(msg)
    const response = await result.response
    console.log(response.text());
    // send data to the frontend
    res.send(response.text())


})


app.listen(PORT, () => console.log(`app running on port ${PORT}`))
