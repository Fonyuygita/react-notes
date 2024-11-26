import React, { useEffect, useState } from 'react'

const LearnState = () => {

    let [name, setName] = useState("seed")
    let [info, setInfo] = useState({
        name: "",
        selected: false
    })

    const handleAdd = () => {
        setInfo((prev) => ({ ...prev, name }))
    }

    const handleSelect = () => {
        setInfo((prev) => ({ ...prev, selected: true }))
    }


    // useEffect

    // use effect runs even tho info has not run
    useEffect(() => {
        console.log("the state has changed....")
    }, [info])

    console.log("Component runs......")
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleAdd}>Add Name</button>
            <button onClick={handleSelect}>select</button>
            <div>
                {`{
               name:${info.name}
               selected:${info.selected} 
                    }`}
            </div>
        </div>
    )
}

export default LearnState
