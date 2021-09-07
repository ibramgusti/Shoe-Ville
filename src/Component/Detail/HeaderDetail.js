//libraries
import React from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineLeft } from "react-icons/ai";
import { GlobalConsumer } from '../Context/Context';
import CartCount from './CartCount';

const HeaderDetail = (props) => {
    let history = useHistory()

    const goBack = () => {
        history.push('/browseAll')
    }

    return (
        <div className='detail-header'>
            <AiOutlineLeft className='back-button' onClick={goBack} />
            <h3>{props.title}</h3>
            <CartCount handleCart={props.handleCart} />
        </div>
    )
}

export default GlobalConsumer(HeaderDetail)
