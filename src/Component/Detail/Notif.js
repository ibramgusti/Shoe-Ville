import React from 'react'

const Notif = (props) => {
    return (
        <div className='notif'>
            <p>{props.message}</p>
            <button onClick={() => document.querySelector('.notif').classList.remove('enable')}>OK</button>
        </div>
    )
}

export default Notif
