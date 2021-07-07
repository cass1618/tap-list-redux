import React from "react";
import PropTypes from "prop-types";
import "./KegList.css";
import "./KegControl.js";

function Keg(props) {
    return(
        <React.Fragment>

            <div className="wrapper">
                <div onClick = {() => props.whenKegClicked(props.id)}>
                    <div className="one">
                        <h2>{props.brewery} {props.name}</h2>
                        <h3>{props.location}</h3>
                    </div>
                </div>

                <div className="two">
                    <h1>{props.abv}</h1>
                </div>

                <div className="three">
                    <h1>{props.price}</h1>
                </div>

                <div className="four">
                    <h1>{props.volume*8} Pints Left</h1>
                </div>

                <div className="five">
                    <button onClick = {() => props.whenSellClicked(props.id)}>Sell Pint</button>
                </div>

            </div>
            
        </React.Fragment>
    );
}

Keg.propTypes = {
    brewery: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    volume: PropTypes.number,
    whenKegClicked: PropTypes.func,
    whenSellClicked: PropTypes.func
}

export default Keg;