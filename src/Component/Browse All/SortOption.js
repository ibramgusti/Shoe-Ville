import React from 'react'

const SortOption = (props) => {
    return (
        <select className='sortOption' value={props.filter} onChange={props.handleFilter}>
            {(props.sortBy).map((el, index) => {
                return (
                    <option value={el} key={index}>{el}</option>
                )
            })}

        </select>
    )
}

export default SortOption
