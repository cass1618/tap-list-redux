import React from "react";
import PropTypes from "prop-types";
import GenericForm from "./GenericForm";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditingKeg({brewery: event.target.brewery.value, name: event.target.name.value, location: event.target.location.value, abv: event.target.abv.value, price: event.target.price.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <GenericForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditingKeg: PropTypes.func
}

export default EditKegForm;