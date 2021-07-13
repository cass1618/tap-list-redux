import * as c from './ActionTypes';

export const addKeg = (keg) => {
    const {brewery, name, location, description, abv, price, volume, id} = keg;
    return {
        type: c.ADD_KEG,
        brewery: brewery,
        name: name,
        location: location,
        description: description,
        abv: abv, 
        price: price,
        volume: volume,
        id: id
    }
}

export const deleteKeg = id => ({
    type: c.DELETE_KEG,
    id
});

export const toggleForm = () => ({
type: c.TOGGLE_FORM
});