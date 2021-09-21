//lobraries
import React, { Component } from 'react'

//components
import { GlobalConsumer } from '../Context/Context'
import PreorderDesc from '../Home/PreorderDesc'
import PreorderItems from '../Home/PreorderItems'

export class Hero extends Component {
    render() {
        return (
            <div className={this.props.classDiv} style={{ background: this.props.bg }}>
                <div className='jumbotron'>
                    <p className='title'>New Release !</p>
                    <PreorderDesc handleClickPo={this.props.handleClickPo} poDesc='Originally created for the hardwood, the Dunk later took to the streets—and as they say, the rest is history. ' poDate={this.props.poDate} />
                </div>
                <PreorderItems brand={this.props.brand} shoeName={this.props.shoesName} />

            </div>
        )
    }
}

export default GlobalConsumer(Hero)
