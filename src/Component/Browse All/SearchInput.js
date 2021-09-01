import React from 'react'
import { BiSearch } from "react-icons/bi";

const SearchInput = (props) => {
    return (
        <form>
            <input type='text' placeholder='Search Product...' onChange={props.handleChange} />
            <button id='searchButton'>{<BiSearch />}</button>
        </form>
    )
}

export default SearchInput
