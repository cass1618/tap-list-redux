import React from "react";
import PropTypes from "prop-types";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import BeerDetails from "./BeerDetails";
import EditKegForm from "./EditKegForm";
import {connect} from "react-redux";
import * as a from './../actions';

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKeg: null,
            editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
            this.setState({
                selectedKeg: null,
                editing: false
            });
        } else {
            const {dispatch} = this.props;
            const action = a.toggleForm();
            dispatch(action);
        }
    }

    handleClickingSell = (id) => {
        const selectedKeg = this.props.kegArray[id];
        this.setState({selectedKeg: selectedKeg});

        if(selectedKeg.volume >= .125) {
            const newVolume = selectedKeg.volume - .125;
            const editedKeg = Object.assign({}, selectedKeg, {volume: newVolume});

        const {dispatch} = this.props;
        const action = a.addKeg(editedKeg);

        dispatch(action);
        }
        this.setState({
            selectedKeg: null
        });
}

    handleSelectingKeg = (id) => {
        const selectedKeg = this.props.kegArray[id];
        this.setState({selectedKeg: selectedKeg});
    }

    handleAddingKegToList = (newKeg) => {

        const {dispatch} = this.props;
        const action = a.addKeg(newKeg);
        dispatch(action);
        const action2 = a.toggleForm();
        dispatch(action2);
    };

    handleClickEdit = () => {
        this.setState({editing: true});
    };

    handleEditingKeg = (kegToEdit) => {
        const {dispatch} = this.props;
        const action = a.addKeg(kegToEdit);

        dispatch(action);

        this.setState({
            editing: false,
            selectedKeg: null
        });
    };

    handleDeletingKeg = (id) => {
        const {dispatch} = this.props;
        const action = a.deleteKeg(id);

        dispatch(action);

        this.setState({
            selectedKeg: null
        });
    }

    render() {
        
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} 
            onEditingKeg = {this.handleEditingKeg}/>
            buttonText = "Return to List";
        } else if (this.state.selectedKeg != null) {
            currentlyVisibleState = <BeerDetails keg = {this.state.selectedKeg} 
            onClickingDelete = {this.handleDeletingKeg}
            onClickingEdit = {this.handleClickEdit}/>
            buttonText = "Back To List";
        } else if (this.props.formVisibleOnPage) {
            currentlyVisibleState = <NewKegForm onAddingNewKeg = {this.handleAddingKegToList}/>;
            buttonText = "Back To List";
        } else {
            currentlyVisibleState = <KegList kegList = {this.props.kegArray} 
            onSelectingKeg = {this.handleSelectingKeg}
            onClickingSell = {this.handleClickingSell}/>
            buttonText = "Add New Keg";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

KegControl.propTypes = {
    kegArray: PropTypes.object,
    formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        kegArray: state.kegArray,
        formVisibleOnPage: state.formVisibleOnPage
    }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;