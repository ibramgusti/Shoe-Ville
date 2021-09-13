import React from 'react'

const HistoryBuy = (props) => {
    return (
        <div className='history-desc'>
            <div className='date-history'>
                <p>{props.dateBuy}</p>
                <p>{props.datePoBuy}</p>
            </div>
            <div className='desc-wrap'>
                <div className='history-desc-left'>
                    <img src={`/shoes/${props.name}.png`} alt={props.name} />
                </div>
                <div className='history-desc-right'>
                    <p>{props.name}</p>
                    <p>Size: {props.size}</p>
                    <h4>Rp. {props.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default HistoryBuy

