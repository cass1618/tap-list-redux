import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
    return(
        <React.Fragment>
            <div onClick = {() => props.whenKegClicked(props.id)}>
                <h2>{props.brewery}</h2>
                <h2>{props.name}</h2>
                <h3>{props.location}</h3>
                <h3>{props.description}</h3>
                <h3>{props.abv}</h3>
                <h3>{props.price}</h3>
                <h2>{props.pints}</h2>
            </div>
        </React.Fragment>
    );
}

Keg.propTypes = {
    brewery: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string,
    abv: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    volume: PropTypes.number,
    whenKegClicked: PropTypes.func
}

export default Keg;