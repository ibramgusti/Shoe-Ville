//libraries
import React, { Component } from 'react'
import { GoSettings } from "react-icons/go";
import { GlobalConsumer } from '../Context/Context';

//components
import Category from './Category';
import SearchInput from './SearchInput';
import SortOption from './SortOption';

export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortBy: ['Cheapest', 'Most Expensive', 'Newest', 'Oldest'],
            brands: ['Nike', 'Puma', 'New Balance', 'Adidas'],
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    render() {
        return (
            <div className='container-search'>
                <p>Shoes Catalogue</p>
                <div className='div-search'>
                    <SearchInput handleChange={this.props.dispatch({ type: 'HANDLE_SEARCH' })} />
                    <div className='filter'>
                        <GoSettings />
                    </div>
                </div>
                <div className='sorting'>
                    <SortOption sortBy={this.state.sortBy} />
                    <SortOption sortBy={this.state.brands} />
                    <Category />
                </div>
            </div>
        )
    }
}

export default GlobalConsumer(Search)
