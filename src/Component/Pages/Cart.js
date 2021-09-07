//libraries
import React, { Component } from 'react'

//component
import { GlobalConsumer } from '../Context/Context'

//style
import '../../assets/css/Cart.css'

export class Cart extends Component {
    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.state.cart);
    }

    totalPrice = () => {
        let total = 0
        this.props.state.cart.map((el) =>
            el.check === true ? total += el.price : total
        )

        return total
    }


    render() {
        return (
            <div className='cart-section'>
                <div className='your-cart'>
                    <h3>Your Cart</h3>

                    {
                        this.props.state.cart.map((el, index) => {
                            return (
                                <div className='card-cart' key={index}>
                                    <input type='checkbox' checked={el.check} value={this.props.state.cart[index]} onChange={this.props.dispatch({ type: 'HANDLE_CHECK_ITEM', index: index })} />
                                    <img src={`/shoes/${el.name}.png`} alt={el.name} />
                                    <div className='cart-desc'>
                                        <p>{el.name}</p>
                                        <p>Size: {el.size}</p>
                                        <h4>Rp. {el.price}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
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
                    <button onClick={this.handleBuy}>Buy it</button>
                </div>
            </div>
        )
    }
}

export default GlobalConsumer(Cart)
