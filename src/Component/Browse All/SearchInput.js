import React from 'react'
import { BiSearch } from "react-icons/bi";
import { GlobalConsumer } from '../Context/Context';

const SearchInput = (props) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input id='search-input' value={props.state.search} type='text' placeholder='Search Product...' onChange={props.handleChange} />
            <button id='searchButton'>{<BiSearch />}</button>
        </form>
    )
}

export default GlobalConsumer(SearchInput)
