import React from 'react'


export const BrandList = (props) => {
    const brand = ['puma', 'adidas', 'new balance', 'nike']

    return (
        <div className='theBrand'>
            <p className='title'>Brand</p>
            <div className='brandList'>
                {
                    brand.map((el, index) => {
                        return (
                            <img src={`/brands/${el}.svg`} alt={el} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
