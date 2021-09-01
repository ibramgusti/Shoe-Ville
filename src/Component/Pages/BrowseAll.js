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

    render() {
        return (
            <div className='browseAll'>
                <Search />
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
