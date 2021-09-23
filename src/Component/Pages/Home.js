//libraries
import React, { Component } from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

//component
// import PreorderDesc from '../Home/PreorderDesc'
// import PreorderItems from '../Home/PreorderItems'
import NewCard from "../Home/NewCard";
import { BestSeller } from '../Home/BestSeller';
import { BrandList } from '../Home/BrandList';
import Category from '../Browse All/Category';
import { GlobalConsumer } from '../Context/Context';
import { Hero } from '../Home/Hero';

//style
import '../../assets/css/Home.css'

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            slides: 0
        }
    }

    handleClickck = (id) => {
        return this.props.history.push(`/detail/${id}`)
    }

    nextSlide = () => {
        this.setState({
            slides: this.state.slides === this.props.state.shoes.filter(val => val.po).length - 1 ? 0 : this.state.slides + 1
        })
    }

    prevSlide = () => {
        this.setState({
            slides: this.state.slides === 0 ? this.props.state.shoes.filter(val => val.po).length - 1 : this.state.slides - 1
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.nextSlide, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const shoesData = this.props.state.shoes
        const poShoes = shoesData.filter(val => val.po)
        // setTimeout(this.nextSlide, 5000)
        return (

            <section id='home'>
                <div className='container-jumbotron'>
                    <AiOutlineLeft className='slide prev' onClick={this.prevSlide} />
                    <AiOutlineRight className='slide next' onClick={this.nextSlide} />
                    {
                        poShoes.map((el, index) => {
                            return (
                                this.state.slides === index && (
                                    <Hero
                                        key={index}
                                        classDiv={this.state.slides === index ? `hero onScreen` : `hero`}
                                        bg={el.bg}
                                        handleClickPo={() => this.handleClickck(el.id)}
                                        poDate={el.date}
                                        brand={el.brand}
                                        shoesName={el.name}
                                    />
                                )
                            )
                        })
                    }
                </div>
                <div className='container-release'>
                    <p className='title on'>New Release !</p>
                    <div className='cards'>
                        {shoesData.map((el, index) => {
                            return el.po && index < 24 ? <NewCard brand={el.brand} date={el.date} shoeName={el.name} bgColor={el.bg} key={index} handleClick={() => this.handleClickck(index)} /> : null

                        })}
                    </div>
                </div>
                <BrandList />
                <div className='bestSeller'>
                    <p className='title'>Best Seller</p>
                    <div className='cards'>
                        {
                            shoesData.map((el, index) => {
                                return el.bestSeller ? <BestSeller brandName={el.brand} shoeName={el.name} bg={el.bg} key={index} handleClick={() => this.handleClickck(index)} /> : null
                            })
                        }
                    </div>
                </div>
                <div className='categoryList'>
                    <p className='title'>Category</p>
                    <Category calssdiv='invert' classList='invert-two' />
                </div>
            </section>
        )
    }
}

export default GlobalConsumer(Home)
