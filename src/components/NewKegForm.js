import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {
    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({brewery: event.target.brewery.value, name: event.target.name.value, location: event.target.location.value, abv: event.target.abv.value, price: event.target.price.value, pints: event.target.pints.value, id: v4});
    }

    NewKegForm.propTypes = {
        onNewKegCreation: PropTypes.func
    };

    return (
        <React.Fragment>
            <form onSubmit={handleNewKegFormSubmission}>

                <label for="brewery">Brewery:</label>
                <input
                    type="text"
                    name="brewery"/>

                <label for="name">Name:</label>
                <input
                    type="text"
                    name="name"/>

                <label for="location">Location:</label>
                <input
                    type="text"
                    name="location"/>

                <label for="abv">Percent ABV:</label>
                <input
                    type="text"
                    name="abv"/>

                <label for="price">Price:</label>
                <input
                    type="text"
                    name="price"/>

                <label for="description">Summary:</label>
                <textarea
                    name="description"/>
                <button type="submit">Add Keg</button>
            </form>
        </React.Fragment>
    );
}

export default NewKegForm;