import React, { useState } from 'react'
import { FaArrowLeft, FaUser, FaSignInAlt, Fa500Px, FaRegistered, FaArrowRight } from 'react-icons/fa';
import Button from '../button/Button';
const States = () => {

    // first thing inside of your component
    let [count, setCount] = useState(0);



    //  LIMITATIONS OF USING VARIABLES AS STATES IN REACT
    // let count = 0;
    const updateCount = () => {
        setCount(count++)
        // 0 +1=1=count

        // count=1 +1=2

        // count=2 +1=3
        // count=3+1=4
    }





    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick={updateCount}>ADD 1</button>
            <FaArrowLeft color="red" size={23} />
            <Button
                title="Register"
                icon=<FaUser />
                styling={{ backgroundColor: 'teal', color: "white", flexDirection: "row-reverse" }}

            />

            <Button
                title="Login"
                icon=<FaRegistered />
                styling={{ backgroundColor: 'red', color: "white", flexDirection: "" }}

            />

            <Button
                title="Read More"
                icon=<FaArrowRight />
                styling={{ backgroundColor: 'purple', color: "white", flexDirection: "" }}

            />
        </div>
    )
}

export default States
