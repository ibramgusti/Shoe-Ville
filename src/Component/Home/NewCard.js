import React from 'react'

function NewCard(props) {
    return (
        <div className='newCard' style={{ background: props.bgColor }}>
            <div className='card-header'>
                <p className='brandName-new'>{props.brand}</p>
                <p className='Date-new'>{props.date}</p>
            </div>
            <img src={`/shoes/${props.shoeName}.png`} alt={props.shoeName} />
            <p className='shoeName-new'>{props.shoeName}</p>
        </div>
    )
}

export default NewCard
