import express from "express"
import authRoute from "./routes/auth.js"
import postRoute from "./routes/posts.js"
import cors from "cors";


const app = express();
const PORT = 5000


// use it as a middleware
app.use(cors())
app.use(express.json())
app.use("/auth", authRoute)
app.use("/post", postRoute)

app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`)
})