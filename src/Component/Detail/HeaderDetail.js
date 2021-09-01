//libraries
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineLeft } from "react-icons/ai";

const HeaderDetail = (props) => {
    return (
        <div className='detail-header'>
            <AiOutlineLeft />
            <h3>{props.title}</h3>
            <AiOutlineShoppingCart />
        </div>
    )
}

export default HeaderDetail
