import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import BeerDetails from "./BeerDetails";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            kegArray: [],
            selectedKeg: null,
            editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedKeg: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

    handleSellingPint = (id) => {
        const selectedKeg = this.state.kegArray.filter(keg => keg.id === id)[0];
        if(selectedKeg.volume >= .125) {
            const newVolume = selectedKeg.volume - .125;
            const tempKeg = Object.assign({}, selectedKeg, {volume: newVolume});
            const tempKegArray = this.state.kegArray.filter(keg => keg.id !== selectedKeg.id).concat(tempKeg);
            this.setState({
                kegArray: tempKegArray,
            });
        }
    }

    handleSelectingKeg = (id) => {
        const selectedKeg = this.state.kegArray.filter(keg => keg.id === id)[0];
        this.setState({selectedKeg: selectedKeg});
    }

    handleAddingKegToList = (newKeg) => {
        const tempKegArray = this.state.kegArray.concat(newKeg);
        this.setState({
            kegArray : tempKegArray,
            formVisibleOnPage: false
        });
    };

    handleClickEdit = () => {
        this.setState({editing: true});
    };

    handleEditingKeg = (kegToEdit) => {
        const tempKegArray = this.state.kegArray.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
        this.setState({
            kegArray: tempKegArray,
            editing: false,
            selectedKeg: null
        });
    };

    handleDeletingKeg = (id) => {
        const tempKegArray = this.state.kegArray.filter(keg => keg.id !== id);
        this.setState({
            kegArray: tempKegArray,
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
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewKegForm onAddingNewKeg = {this.handleAddingKegToList}/>;
            buttonText = "Back To List";
        } else {
            currentlyVisibleState = <KegList kegList = {this.state.kegArray} 
            onSelectingKeg = {this.handleSelectingKeg}
            onClickingSell = {this.handleSellingPint}/>
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

export default KegControl;