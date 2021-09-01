//libraries
import React, { Component } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

//component
import { GlobalConsumer } from '../Context/Context'


export class ShoesCards extends Component {
    render() {
        let shoes = this.props.state.shoes
        // console.log(shoes.name);
        return (
            shoes.filter((val) => {
                if (this.props.state.search === '') {
                    return val
                } else if (val.name.toLowerCase().includes(this.props.state.search.toLowerCase())) {
                    return val
                }
            }).map((el, index) => {
                return (
                    <div className='allCards' style={{ background: el.bg }} key={index} onClick={() => this.props.handleDetail(index)}>
                        <AiOutlineHeart />
                        <img src={`/shoes/${el.name}.png`} alt={el.name} />
                        <p className='shoesCategory'>{el.category}</p>
                        <h4>{el.name}</h4>
                        <p className='price'>Rp. {el.price}</p>
                    </div>
                )
            })
        )
    }
}

export default GlobalConsumer(ShoesCards)



