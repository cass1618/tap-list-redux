import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function List(props) {
    return (
        <React.Fragment>
            <hr/>
            {props.List.map((keg, index) =>
                <Keg 
                    brewery = {props.brewery}
                    name = {props.name}
                    location = {props.location}
                    abv = {props.abv}
                    price = {props.price}
                    pints = {props.pints}/>
            )};
        </React.Fragment>
    );
}

List.propTypes = {
    List: PropTypes.array
};

export default List;