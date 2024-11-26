import React, { useState } from 'react'

const SearchInput = () => {
    const [value, setValue] = useState("")
    const [show, setShow] = useState(false)
    // const value = "start typing..."


    const handleInputChange = (e) => {
        // alert(e.target.value)
        console.log(e.target.value)
        setValue(e.target.value)
    }

    const handleClear = () => {
        // handle logic here
        setValue("")
        setShow(false)
    }

    const handleShow = () => {
        // what should happen here
        setShow(true)
    }
    return (
        <div className='search'>
            <input type="text" onChange={handleInputChange} value={value} />
            {show ? (<p style={{ color: "red", backgroundColor: "black" }}>{value}</p>) : (
                <></>
            )}

            { /*button that clears the value of the input from p tag*/}
            <button onClick={handleClear}>clear</button>
            <button onClick={handleShow}>show</button>
        </div>
    )
}

export default SearchInput
