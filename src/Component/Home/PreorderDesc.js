import React from 'react'

function PreorderDesc(props) {
    return (
        <div className='poClass'>
            <button id='poButton'>Pre-Order Now</button>
            <p className='po Desc'>{props.poDesc}</p>
            <p className='po Date'>{props.poDate}</p>
        </div>
    )
}

export default PreorderDesc
