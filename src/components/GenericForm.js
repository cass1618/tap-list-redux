import React from "react";
import PropTypes from "prop-types";

function GenericForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>

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

                <label for="volume">Update Volume:</label>
                <input
                    type="text"
                    name="volume"/>

                <button type="submit">{props.buttonText}</button>
                <hr/>
            </form>
        </React.Fragment>
    );
};

GenericForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default GenericForm;