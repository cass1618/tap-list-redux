import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import GenericForm from "./GenericForm";

function NewKegForm(props) {
    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({brewery: event.target.brewery.value, name: event.target.name.value, location: event.target.location.value, abv: event.target.abv.value, price: event.target.price.value, id: v4});
    }

    return (
        <React.Fragment>
            <GenericForm
                formSubmissionHandler = {handleNewKegFormSubmission}
                button = "Add Keg"/> 
        </React.Fragment>
    );
}

NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default NewKegForm;