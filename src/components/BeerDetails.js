import React from 'react';
import PropTypes from 'prop-types';

function BeerDetails(props) {
    const {keg, onClickingDelete} = props;

    return(
        <React.Fragment>
            <h2>Beer Details</h2>
            <h3>{keg.brewery}</h3>
            <h3>{keg.name}</h3>
            <h3>{keg.location}</h3>
            <h3>{keg.description}</h3>
        </React.Fragment>
    )
}

BeerDetails.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default BeerDetails;