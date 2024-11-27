
import axios from "axios"
import { createContext, useEffect, useState } from "react"
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:5000/auth/login", inputs);
        setUser(res.data);
    }
    const logout = async (input) => {
        await axios.post("http://localhost:5000/auth/logout");
        setUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))

    }, [user])

    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    )
}