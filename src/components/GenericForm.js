import React from "react";
import PropTypes from "prop-types";

function GenericForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>

                <label htmlFor="brewery">Brewery:</label>
                <input
                    type="text"
                    name="brewery"/>

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"/>

                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    name="location"/>

                <label htmlFor="abv">Percent ABV:</label>
                <input
                    type="text"
                    name="abv"/>

                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    name="price"/>

                <label htmlFor="description">Summary:</label>
                <textarea
                    name="description"/>

                <label htmlFor="volume">Update Volume:</label>
                <input
                    type="text"
                    name="volume"/>

                <button type="submit">{props.buttonText}</button>
                <hr/>
            </form>
        </React.Fragment>
    )
}

GenericForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
}

export default GenericForm;