//libraries
import React, { Component } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

//component
import { GlobalConsumer } from '../Context/Context'


export class ShoesCards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sorted: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('update');
        // this.setState({
        //     sorted: this.props.state.shoes
        // })
        // console.log(prevProps);
        //     let prices = document.getElementsByClassName('price')
        //     console.log(prices);
        //     this.showShoes(prices)
        //     if (this.props.state.sortCategory === 'Cheapest') {

        //         prices.sort((a, b) => { return a.innerText.split(' ') - b.innerText.split(' ') })
        //         console.log(prices);
        //         return (prices);
        //     }
        //     if (this.props.state.sortCategory === 'Most Expensive') {
        //         console.log(typeof prices);
        //         console.log(prices[0]);

        //         prices.sort((b, a) => { return a.innerText.split(' ') - b.innerText.split(' ') })
        //         return (prices);
        //     }
        // }

        // changeState = () => {
        //     this.setState({
        //         sorted: this.props.state.shoes
        //     })
    }


    showShoes = (el) => {
        return (
            el.filter((val) => {
                return val.name.toLowerCase().includes(this.props.state.search.toLowerCase())
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

    render() {

        // if (this.state.sorted.length > 0) {
        //     let shoes = this.props.state.sorted
        //     console.log(shoes);
        //     return this.showShoes(shoes)
        // } else {
        //     let shoes = this.props.state.shoes
        //     return this.showShoes(shoes)
        // }
        return (
            this.props.state.shoes.filter((val) => {
                return val.name.toLowerCase().includes(this.props.state.search.toLowerCase())
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



