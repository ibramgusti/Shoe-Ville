//libraries
// import React, { Component } from 'react'
import React, { Component } from 'react'

//component
import Search from '../Browse All/Search'
import ShoesCards from '../Browse All/ShoesCards';
import { GlobalConsumer } from '../Context/Context';

//style
import "../../assets/css/Browse All.css";

export class BrowseAll extends Component {
    handleDetail = (id) => {
        this.props.history.push(`/detail/${id}`)
    }

    handleFilterSort = (e) => {
        let prices = this.props.state.shoes
        console.log(this.props.state.filterSort);
        if (e.target.value === 'Cheapest') {
            prices.sort((a, b) => { return a.price - b.price })
            this.props.history.push('/browseAll')
            return (prices);
        }

        if (e.target.value === 'Most Expensive') {
            prices.sort((b, a) => { return a.price - b.price })
            this.props.history.push('/browseAll')
            return (prices);
        }

        if (e.target.value === 'All') {
            window.location.reload()
        }

        // if (e.target.value === 'Nike') {
        //     return prices.filter(val => {
        //         return (val.brand.includes(e.target.value))
        //     })
        //     this.props.dispatch({ type: 'HANDLE_SORT_BRAND' })
        //     console.log(this.props.state);
        // }

        // if (e.target.value === 'Adidas') {
        //     prices.filter(val => {
        //         if (val.brand.includes(e.target.value)) {
        //             console.log(val);
        //             return val
        //         }
        //     })
        // }

        // if (e.target.value === 'New Balance') {
        //     prices.filter(val => {
        //         if (val.brand.includes(e.target.value)) {
        //             console.log(val);
        //             return val
        //         }
        //     })
        // }

        // if (e.target.value === 'Puma') {
        //     prices.filter(val => {
        //         if (val.brand.includes(e.target.value)) {
        //             console.log(val);
        //             return val
        //         }
        //     })
        // }
    }


    render() {
        return (
            <div className='browseAll'>
                <Search handleFilter={this.handleFilterSort} />
                {/* <Search /> */}
                <div className='container-cards'>
                    <div className='wrap-cards'>
                        <ShoesCards handleDetail={this.handleDetail} />
                    </div>
                </div>
            </div>
        )
    }
}

export default GlobalConsumer(BrowseAll)
