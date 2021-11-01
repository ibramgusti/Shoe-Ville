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
    }

    render() {
        return (
            <div className='browseAll'>
                <Search clickcategory={this.props.dispatch({ type: 'HANDLE_CATEGORY', tag: this.props.match.params.tagName })} />
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
