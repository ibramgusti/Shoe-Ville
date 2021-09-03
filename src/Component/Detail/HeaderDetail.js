//libraries
import React from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineLeft } from "react-icons/ai";
import { GlobalConsumer } from '../Context/Context';

const HeaderDetail = (props) => {
    let history = useHistory()

    const goBack = () => {
        history.push('/browseAll')
    }

    return (
        <div className='detail-header'>
            <AiOutlineLeft className='back-button' onClick={goBack} />
            <h3>{props.title}</h3>
            <div className='cart-container'>
                <AiOutlineShoppingCart />
                <div className='cart-count'>{props.state.cart.length}</div>
            </div>
        </div>
    )
}

export default GlobalConsumer(HeaderDetail)
