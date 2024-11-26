import React from 'react'
import "./leftBar.css"

const LeftBar = () => {
    return (
        <div className='right-container'>
            <div className="cards">
                <div className="card">
                    <div className="imgBox">
                        <img src="/podast.png" alt="" />

                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt optio, aliquid quaerat dolorem ipsa minima
                    </div>
                </div>


            </div>

            <div className="cards">
                <div className="card">
                    <div className="imgBox">
                        <img src="/ai.png" alt="" />

                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt optio, aliquid quaerat dolorem ipsa minima
                    </div>
                </div>


            </div>

        </div>
    )
}

export default LeftBar
