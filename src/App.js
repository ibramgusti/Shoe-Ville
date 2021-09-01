import React, { Component } from 'react'

//component
import Navbar from './Component/Navbar';


//style
import './App.css';
import GlobalProvider from './Component/Context/Context';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    )
  }
}

export default GlobalProvider(App)
