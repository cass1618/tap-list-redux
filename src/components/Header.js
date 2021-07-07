import React from "react";
import logo from './logo.svg';
import logo1 from './logo.png';
import "./KegList.css";

function Header() {
    return (
        <React.Fragment>
        <div className="wrapper">
            ONE
            <div className="one">DIV 1</div>
        <div className="two">TWO</div>
        </div>
            <img src={logo} className="App-logo" alt="svg logo"/>
            <img src={logo1} className="App-logo" alt="logo"/>
        </React.Fragment>
    )
}

export default Header;