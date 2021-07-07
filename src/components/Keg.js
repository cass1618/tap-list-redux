import React from "react";
import PropTypes from "prop-types";
import "./KegList.css";

function Keg(props) {
    return(
        <React.Fragment>

        <div className="wrapper">
            <div onClick = {() => props.whenKegClicked(props.id)}>
                <div className="one">DIV 1
                    <h2>{props.brewery} {props.name}</h2>
                    END DIV1
                </div>
            </div>
                <div className="two">
                    DIV 2
                {props.location}
                END DIV 2
                </div>
                <div className="three">
                    D3
                {props.abv}
                D3
                </div>
                <div className="four">
                    D4
                <h3>{props.price}</h3>
                D4
                </div>
                <div className="five">
                    D5
                <h2>{props.volume*8}</h2>
                D5
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
    whenKegClicked: PropTypes.func
}

export default Keg;