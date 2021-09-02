//libraries
import React, { Component } from 'react'
import { GoSettings } from "react-icons/go";

//components
import { GlobalConsumer } from '../Context/Context';
import Category from './Category';
import SearchInput from './SearchInput';
import SortOption from './SortOption';

export class Search extends Component {
    state = {
        sortBy: ['All', 'Cheapest', 'Most Expensive'],
        brands: ['All', 'Nike', 'Puma', 'New Balance', 'Adidas'],
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
                    <SortOption sortBy={this.state.sortBy} filter={this.props.state.filterSort} handleFilter={this.props.dispatch({ type: 'HANDLE_SORT' })} />
                    {/* <SortOption sortBy={this.state.sortBy} handleFilter={this.props.handleFilter} filter={this.props.state.filterSort} /> */}
                    <SortOption sortBy={this.state.brands} handleFilter={this.props.dispatch({ type: 'HANDLE_SORT_BRAND' })
                    } />
                    <Category />
                </div>
            </div>
        )
    }
}

export default GlobalConsumer(Search)
