import React, { Component } from 'react';
import { GlobalConsumer } from '../Context/Context';
import { AiOutlineClose } from "react-icons/ai";

class Category extends Component {
    render() {
        return (
            <div className={`container-category ${this.props.calssdiv}`}>
                {this.props.state.category.map((el, index) => {
                    return (
                        <div className={`category-list ${this.props.classList}`} key={index}>
                            <p onClick={this.props.clickcategory}>{el}</p>
                            <AiOutlineClose onClick={this.props.dispatch({ type: 'HANDLE_CLOSE_TAG' })} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GlobalConsumer(Category)

