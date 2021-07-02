import React from "react";
import logo from './logo.svg';
import logo1 from './logo.png';

function Header(props) {
    return (
        <React.Fragment>
            <img src={logo} className="App-logo" alt="svg logo" />
            <img src={logo1} className="App-logo" alt="logo" />
        </React.Fragment>
    );
}

export default Header;