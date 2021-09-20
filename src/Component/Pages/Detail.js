//libraries
import React, { Component } from 'react'

//component
// import SearchInput from '../Browse All/SearchInput';
import HeaderDetail from '../Detail/HeaderDetail';
import SortOption from '../Browse All/SortOption';
import Category from '../Browse All/Category';
import { GlobalConsumer } from "../Context/Context";
// import { ShoesCards } from '../Browse All/ShoesCards';

//style
import '../../assets/css/Detail.css'
import Notif from '../Detail/Notif';

export class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: [39, 40, 41, 42, 43]
        }
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('cart', JSON.stringify(this.props.state.cart))
    }


    handleCart = () => {
        this.props.history.push('/cart')
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        const id = this.props.match.params.shoesID
        const shoesData = this.props.state.shoes.filter(el => el.id === parseInt(id))[0]
        return (
            <div className='container-detail' style={{ background: shoesData.bg }}>
                <Notif message='Barangmu sudah masuk keranjang!' />
                <HeaderDetail handleCart={this.handleCart} />
                {/* <SearchInput /> */}
                <div className='container-all-detail'>
                    <div className='shoes-content'>
                        <img src={`/shoes/${shoesData.name}.png`} alt={shoesData.name} />
                    </div>
                    <div className='main-detail'>
                        <div className='detail-title'>
                            <h3>{shoesData.name} <span>{shoesData.poLong ? `(Pre-Order ${shoesData.poLong} Days)` : null}</span></h3>
                            <p>Rp. {shoesData.price}</p>
                        </div>
                        <div className='shoes-size'>
                            <h5>Size</h5>
                            <SortOption sortBy={this.state.size} />
                        </div>
                        <div className='detail-content'>
                            <h5>Category</h5>
                            <Category calssdiv='invert' classList='invert-two' />
                        </div>
                        <div className='detail-content'>
                            <h5>Description</h5>
                            <p>The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness.</p>
                        </div>
                        <div className='detail-buttons'>
                            <button id='addCart' onClick={this.props.dispatch({ type: 'HANDLE_CART', shoes: { name: shoesData.name, price: shoesData.price, check: true, poLong: shoesData.poLong }, index: id })}>{shoesData.po ? `Pre-Order` : `Add to Cart`}</button>
                            <button id='addWish' onClick={this.props.dispatch({ type: 'HANDLE_LIKE', index: id })}>{this.props.dispatch({ type: 'LIKE_CLICKED', index: id })}</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default GlobalConsumer(Detail)


