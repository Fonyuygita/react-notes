import React from "react"
import "./hero.css"
import Left from "../left/Left"
import Right from "../right/Right"

export const HeroSection = () => {
    return (
        <div className="hero">
            <div className="left">
                <Left />
            </div>
            <div className="right">
                <Right />
            </div>

        </div>
    )
}