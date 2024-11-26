import express from "express"
import { login, logout, register } from "../controllers/auth.js"
import { upload } from "../utils/upload.js"
const route = express.Router()
route.post("/register", upload.single('image'), register)
route.post("/login", login)
route.post("/logout", logout)

export default route