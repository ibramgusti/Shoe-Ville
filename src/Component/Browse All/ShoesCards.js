//libraries
import React, { Component } from 'react'

//component
import { GlobalConsumer } from '../Context/Context'


export class ShoesCards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sorted: []
        }
    }

    render() {
        return (
            this.props.state.shoes.filter((val) => {
                return val.name.toLowerCase().includes(this.props.state.search.toLowerCase())
            }).map((el, index) => {
                return (
                    <div className='allCards' style={{ background: el.bg }} key={index} onClick={() => this.props.handleDetail(index)}>
                        {this.props.dispatch({ type: 'LIKE_CLICKED', index: index })}
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



