import React from 'react'

const Filter = () => {
    const handleFilter = () => {
        // our logic goes here
    }

    const handleClickFilter = () => {
        // filter click logic goes here
    }
    return (
        <div className='input'>
            <input type="text" value="" placeholder='search names' onChange={handleFilter} />
            <button onClick={handleClickFilter}>filter</button>
        </div>
    )
}

export default Filter




