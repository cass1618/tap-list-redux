import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import BeerDetails from "./BeerDetails";

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            kegArray: [],
            selectedKeg: null
        };
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedKeg: null
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

    handleSelectingKeg = (id) => {
        const selectedKeg = this.state.kegArray.filter(keg => keg.id === id)[0];
        this.setState({selectedKeg: selectedKeg});
    }

    KegList = (newKeg) => {
        const tempKegArray = this.state.kegArray.concat(newKeg);
        this.setState({
            kegArray: tempKegArray,
            formVisibleOnPage: false,
        });
    };

    handleAddingKegToList = (newKeg) => {
        const tempKegArray = this.state.kegArray.concat(newKeg);
        this.setState({
            kegArray : tempKegArray,
            formVisibleOnPage: false
        });
    };

    handleEditingKeg = (id) => {
        const selectedKeg = this.state.kegArray.filter(keg => keg.id === id)[0];
        this.setState({ selectedKeg: selectedKeg });
    }

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

        if (this.state.selectedKeg != null) {
            currentlyVisibleState = <BeerDetails keg = {this.state.selectedKeg}/>
            buttonText = "Back To List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewKegForm onAddingNewKeg = {this.handleAddingKegToList}/>;
            buttonText = "Back To List";
        } else {
            currentlyVisibleState = <KegList kegList = {this.state.kegArray} onSelectingKeg = {this.handleSelectingKeg}/>;
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