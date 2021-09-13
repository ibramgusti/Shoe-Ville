//libraries
import React, { Component } from 'react'

//component
import { GlobalConsumer } from '../Context/Context'
import { FaTrash } from "react-icons/fa";
import HistoryBuy from '../Cart/HistoryBuy';

//style
import '../../assets/css/Cart.css'

export class Cart extends Component {

    totalPrice = () => {
        let total = 0
        this.props.state.cart.map((el) =>
            el.check === true ? total += el.price : total
        )

        return total
    }

    render() {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
        return (
            <div className='cart-section'>
                <div className='your-cart'>
                    <h3>Your Cart</h3>

                    {
                        this.props.state.cart.map((el, index) => {
                            return (
                                <div className='card-cart' key={index}>
                                    <input type='checkbox' checked={el.check} value={cart[index]} onChange={this.props.dispatch({ type: 'HANDLE_CHECK_ITEM', index: index })} />
                                    <img src={`/shoes/${el.name}.png`} alt={el.name} />
                                    <div className='cart-desc'>
                                        <p>{el.name} <span> {el.poLong ? `(Pre-Order ${el.poLong} Days)` : null}</span></p>
                                        <p>Size: {el.size}</p>
                                        <h4>Rp. {el.price}</h4>
                                    </div>
                                    <span onClick={this.props.dispatch({ type: 'HANDLE_DELETE_ITEM', index: index })}><FaTrash /></span>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='container-side'>
                    <div className='checkout'>
                        <h4>Shopping Summary</h4>
                        <div className='total-price'>
                            <p>Total</p>
                            <p>Rp. {this.totalPrice()}</p>
                        </div>
                        <hr />
                        <div className='total-price'>
                            <p>Total</p>
                            <p>Rp. {this.totalPrice()}</p>
                        </div>
                        <button onClick={this.props.dispatch({ type: 'HANDLE_BUY' })}>Buy it</button>
                    </div>
                    <div className='list-history'>
                        <h4>Daftar Transaksi</h4>
                        {
                            history.map((el, index) => {
                                return (
                                    <HistoryBuy dateBuy={el.dateBuy} name={el.name} size={el.size} price={el.price} key={index} datePoBuy={el.dateCount ? `Sent to you on ${el.dateCount}` : null} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default GlobalConsumer(Cart)
