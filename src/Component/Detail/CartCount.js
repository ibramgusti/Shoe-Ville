//libraries
import React from 'react'
import { GlobalConsumer } from '../Context/Context'
import { AiOutlineShoppingCart } from "react-icons/ai";



const CartCount = (props) => {
    return (
        <div className='cart-container' onClick={props.handleCart}>
            <AiOutlineShoppingCart />
            <div className='cart-count'>{props.state.cart.length}</div>
        </div>
    )
}

export default GlobalConsumer(CartCount)
