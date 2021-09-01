//libraries
import React, { Component } from 'react'

//component
import PreorderDesc from '../Home/PreorderDesc'
import PreorderItems from '../Home/PreorderItems'
import NewCard from "../Home/NewCard";
import { BestSeller } from '../Home/BestSeller';
import { BrandList } from '../Home/BrandList';
import Category from '../Browse All/Category';

//style
import '../../assets/css/Home.css'

export class Home extends Component {

    render() {
        const shoeRelease = [
            // { brand: 'Nike', name: 'Dunk Low', date: '14/04/2021', bg: 'linear-gradient( rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%), linear-gradient( #F0DBC1, #F0DBC1)' },
            { brand: 'Nike', name: 'Overbreak Khaki', date: '13/04/2021', bg: 'linear-gradient( rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%), linear-gradient( #F0DBC1, #F0DBC1)' },
            { brand: 'Nike', name: 'Zoom Letter Bro', date: '17/04/2021', bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%), #F9B9C3' },
            { brand: 'Nike', name: 'Kobe 5x Champ', date: '19/04/2021', bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%), #D2CCE6' },
        ]
        const bestSeller = [
            // { brand: 'Nike', name: 'Dunk Low', date: '14/04/2021', bg: 'linear-gradient( rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%), linear-gradient( #F0DBC1, #F0DBC1)' },
            { brand: 'Nike', name: 'Lebron 8', bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #8EA4D7' },
            { brand: 'Adidas', name: 'Dame 7', bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #86C6DF' },
            { brand: 'Adidas', name: 'D Rose 11', bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #9BCAB4' },
        ]
        return (
            <section id='home'>
                <div className='container-jumbotron'>
                    <div className='jumbotron'>
                        <p className='title'>New Release !</p>
                        <PreorderDesc poDesc='Originally created for the hardwood, the Dunk later took to the streets—and as they say, the rest is history. ' poDate='14/04/2021' />
                    </div>
                    <PreorderItems brand='NIKE' shoeName='Dunk Low' />

                </div>
                <div className='container-release'>
                    <p className='title on'>New Release !</p>
                    <div className='cards'>
                        {shoeRelease.map((el, index) => {
                            return (
                                <NewCard brand={el.brand} date={el.date} shoeName={el.name} bgColor={el.bg} key={index} />
                            )
                        })}
                    </div>
                </div>
                <BrandList />
                {/* <div className='brandList'></div> */}
                <div className='bestSeller'>
                    <p className='title'>Best Seller</p>
                    <div className='cards'>
                        {
                            bestSeller.map((el, index) => {
                                return (
                                    <BestSeller brandName={el.brand} shoeName={el.name} bg={el.bg} key={index} />
                                )
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

export default Home
