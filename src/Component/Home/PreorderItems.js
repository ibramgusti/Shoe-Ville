import React from 'react'

export const PreorderItems = (props) => {
    return (
        <div className='container-poItem'>
            <p className='brandName'>{props.brand}</p>
            <img src={`/shoes/${props.shoeName}.png`} alt={props.shoeName}></img>
            {/* <img src={shoesImg}></img> */}
            <p className='shoeName'>{props.shoeName}</p>
        </div>
    )
}

export default PreorderItems
