//libraries
import React, { Component } from 'react'

//component
import PreorderDesc from '../Home/PreorderDesc'
import PreorderItems from '../Home/PreorderItems'
import NewCard from "../Home/NewCard";
import { BestSeller } from '../Home/BestSeller';
import { BrandList } from '../Home/BrandList';
import Category from '../Browse All/Category';
import { GlobalConsumer } from '../Context/Context';

//style
import '../../assets/css/Home.css'

export class Home extends Component {
    handleClickck = (id) => {
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        const shoesData = this.props.state.shoes
        return (
            <section id='home'>
                <div className='container-jumbotron'>
                    <div className='jumbotron'>
                        <p className='title'>New Release !</p>
                        <PreorderDesc handleClickPo={() => this.handleClickck(shoesData[shoesData.length - 1].id)} poDesc='Originally created for the hardwood, the Dunk later took to the streets—and as they say, the rest is history. ' poDate={shoesData[shoesData.length - 1].date} />
                    </div>
                    <PreorderItems brand={shoesData[shoesData.length - 1].brand} shoeName={shoesData[shoesData.length - 1].name} />

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
