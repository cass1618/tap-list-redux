import React from "react";
import logo from './logo.svg';
import "./KegList.css";

function Header() {
    return (
        <React.Fragment>
            <img src={logo} className="App-logo" alt="svg logo"/><h1>TAP LIST</h1>
        </React.Fragment>
    )
}

export default Header;