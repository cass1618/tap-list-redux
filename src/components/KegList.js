import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {

    return (
        <React.Fragment>
            <hr/>
            {props.kegList.map((keg) =>
                <Keg 
                    whenKegClicked = {props.onSelectingKeg}
                    whenSellClicked = {props.onClickingSell}
                    brewery = {keg.brewery}
                    name = {keg.name}
                    location = {keg.location}
                    abv = {keg.abv}
                    price = {keg.price}
                    volume = {keg.volume}
                    pints = {keg.volume *8}
                    id = {keg.id}
                    key = {keg.id}
                />
            )}
        </React.Fragment>
    )
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onSelectingKeg: PropTypes.func,
    onSellingPint: PropTypes.func
};

export default KegList;