import React, { Component } from 'react';
import { GlobalConsumer } from '../Context/Context';

class Category extends Component {
    render() {
        return (
            <div className={`container-category ${this.props.calssdiv}`}>
                {this.props.state.category.map((el, index) => {
                    return (
                        <div className={`category-list ${this.props.classList}`} key={index}>{el}</div>
                    )
                })}
            </div>
        )
    }
}

export default GlobalConsumer(Category)

