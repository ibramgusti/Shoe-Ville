//libraries
import React, { Component } from 'react'
import { AiOutlineHeart } from "react-icons/ai";

//component
// import SearchInput from '../Browse All/SearchInput';
import HeaderDetail from '../Detail/HeaderDetail';
import SortOption from '../Browse All/SortOption';
import Category from '../Browse All/Category';
import { GlobalConsumer } from "../Context/Context";
// import { } from "../";

//style
import '../../assets/css/Detail.css'

export class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: [39, 40, 41, 42, 43]
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.state.shoes[0].isLike);
    }


    render() {
        const id = this.props.match.params.shoesID
        const shoesData = this.props.state.shoes[id]
        return (
            <div className='container-detail' style={{ background: shoesData.bg }}>
                <HeaderDetail />
                {/* <SearchInput /> */}
                <div className='shoes-content'>
                    <img src={`/shoes/${shoesData.name}.png`} alt={shoesData.name} />
                </div>
                <div className='main-detail'>
                    <div className='detail-title'>
                        <h3>{shoesData.name}</h3>
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
                        <button id='addCart'>Add to Cart</button>
                        <button id='addWish' onClick={this.props.dispatch({ type: 'HANDLE_LIKE', index: id })}>{<AiOutlineHeart />}</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default GlobalConsumer(Detail)


