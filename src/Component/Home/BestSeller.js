import React from 'react'

export const BestSeller = (props) => {
    return (
        <div className='bs-card' style={{ background: props.bg }} onClick={props.handleClick}>
            <p className='bsBrand'>{props.brandName}</p>
            <img src={`/shoes/${props.shoeName}.png`} alt={props.shoeName} />
            <p className='bsShoe'>{props.shoeName}</p>
        </div>
    )
}
