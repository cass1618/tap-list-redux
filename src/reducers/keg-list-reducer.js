import * as c from "./../actions/ActionTypes.js"

export default (state = {}, action) => {

    const {brewery, name, location, description, abv, price, volume, id} = action;

    switch(action.type) {
        case c.ADD_KEG:
            return Object.assign({}, state, {
                [id]: {
                    brewery: brewery, 
                    name: name,
                    location: location,
                    description: description,
                    abv: abv, 
                    price: price,
                    volume: volume,
                    id: id 
                }
            });

        case c.DELETE_KEG:
            let newState = {...state};
            delete newState[id];
            return newState;

        default:
            return state;
    }
};