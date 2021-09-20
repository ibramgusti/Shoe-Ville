import React from 'react'
import { Link } from "react-router-dom";
import { GlobalConsumer } from './Context/Context';
// import { AiOutlineClose } from "react-icons/ai";

//pages


const OnClickNavbar = (props) => {
    let x = {
        link: ['/men', '/woman', '/kid', '/browseAll', '/aboutUs', '/login', '/register'],
        name: ['Men', 'Woman', 'Kid', 'BrowseAll', 'AboutUs', 'Login', 'Register']
    }
    return (
        <div className='clickNavbar'>
            {
                x.link.map((el, index) => {
                    return (
                        <Link to={el} key={index} onClick={() => props.dispatch({ type: 'HANDLE_CLICK_NAVIGATION' })}>{x.name[index]}</Link>
                    )
                })
            }
        </div>
    )
}

export default GlobalConsumer(OnClickNavbar)
