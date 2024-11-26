import React from 'react'

const Card = (prop) => {
    return (
        <div className='card'>
            <img src={prop.img} alt="" style={{ width: "300px", height: "200px" }} />
            <p>{prop.name}</p>
            <p>{prop.role}</p>
            <p>{prop.desc}</p>
        </div>
    )
}

export default Card
