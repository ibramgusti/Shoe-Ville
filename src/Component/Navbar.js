//libraries
import React, { Component } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GlobalConsumer } from "./Context/Context";

// //pages
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Woman from "./Pages/Woman";
import Kid from "./Pages/Kid";
import BrowseAll from "./Pages/BrowseAll";
import AboutUs from "./Pages/AboutUs";
import Detail from './Pages/Detail';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Cart from './Pages/Cart';
// import CartCount from './Detail/CartCount';

//assets
import logo from "../assets/img/logo.svg"
import '../assets/css/Navbar.css'
import OnClickNavbar from './OnClickNavbar';

export class Navbar extends Component {
    handleClicked = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    render() {
        return (
            <Router>
                <div className="navbar">
                    <div className='header-navbar-one'>
                        <div className='nav-burger' onClick={() => this.props.dispatch({ type: 'HANDLE_CLICK_NAVBAR' })}>
                            <AiOutlineMenu />
                        </div>
                        <div className="logo-brand">
                            <Link to='/'>ShoeVille</Link>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="navigation">
                            <ul className="nav-links">
                                <li><Link to='/men'>Men</Link></li>
                                <li><Link to='/woman'>Woman</Link></li>
                                <li> <Link to='/kid'>Kid</Link></li>
                                <li><Link to='/browseAll'>Browse All</Link></li>
                                <li><Link to='/aboutUs'>About Us</Link></li>
                            </ul>
                        </div>
                        <div className="nav-buttons">
                            {/* <CartCount /> */}
                            <button className="active">Register</button>
                            <button >Login</button>
                        </div>
                        <div className='profil-img'>
                            <FaUserCircle />
                        </div>
                    </div>
                    {this.props.state.visible ? <OnClickNavbar /> : null}
                </div>

                <Route exact path='/' component={Home} />
                <Route path='/men' component={Men} />
                <Route path='/woman' component={Woman} />
                <Route path='/kid' component={Kid} />
                <Route path='/browseAll' component={BrowseAll} />
                <Route path='/aboutUs' component={AboutUs} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/detail/:shoesID' component={Detail} />
                <Route path='/cart' component={Cart} />
            </Router>

        )
    }
}

export default GlobalConsumer(Navbar)
