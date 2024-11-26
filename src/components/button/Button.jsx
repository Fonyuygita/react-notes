import React, { useState } from "react"
// why are importing react?
// answer later

export const Button = () => {
    // const state = useState()
    let [count, setCount] = useState(0)
    // console.log(state);



    const increasCount = () => {
        setCount(count++)
        console.log((prev) => prev++)
    }

    const name = "Paul"
    return (
        <div>

            <button onClick={increasCount}>click me {name}</button>
            <h1>{count}</h1>
        </div>

    )
}


// export default Button

// working search input
// working search filter
// useEffect hook