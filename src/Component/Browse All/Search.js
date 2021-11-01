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

    closePopUp = () => {
        document.querySelector('.popUp-filter').style.transform = 'translate(0, 100%)'
        document.querySelector('.popUp-bg').style.display = 'none'
    }

    openPopUp = () => {
        document.querySelector('.popUp-filter').style.transform = 'translate(0, 0)'
        document.querySelector('.popUp-bg').style.display = 'flex'
    }

    render() {
        return (
            <div className='container-search'>
                <p>Shoes Catalogue</p>
                <div className='div-search'>
                    <SearchInput handleChange={this.props.dispatch({ type: 'HANDLE_SEARCH' })} />
                    <div className='filter'>
                        <GoSettings onClick={this.openPopUp} />
                    </div>
                </div>
                <div className='sorting'>
                    <SortOption sortBy={this.state.sortBy} filter={this.props.state.filterSort} handleFilter={this.props.dispatch({ type: 'HANDLE_SORT' })} />
                    <SortOption sortBy={this.state.brands} filter={this.props.state.sortedBrand} handleFilter={this.props.dispatch({ type: 'HANDLE_SORT_BRAND' })
                    } />
                    <Category clickcategory={this.props.clickcategory} />
                </div>

                <div className='popUp-bg' onClick={this.closePopUp}></div>
                <div className='popUp-filter'>
                    <div className='filter-pop'>
                        <p className='p-popUp'>Sort By :</p>
                        <SortOption sortBy={this.state.sortBy} filter={this.props.state.filterSort} handleFilter={this.props.dispatch({ type: 'HANDLE_SORT' })} />
                    </div>
                    <div className='filter-pop'>
                        <p className='p-popUp'>Brands :</p>
                        <SortOption sortBy={this.state.brands} filter={this.props.state.sortedBrand} handleFilter={this.props.dispatch({ type: 'HANDLE_SORT_BRAND' })
                        } />

                    </div>
                    <div className='filter-pop'>
                        <p className='p-popUp'>Tags :</p>
                        <Category clickcategory={this.props.clickcategory} calssdiv='invert' classList='invert-two' />
                    </div>
                    <div className='popUp-button'>
                    </div>
                </div>
            </div>
        )
    }
}

export default GlobalConsumer(Search)
