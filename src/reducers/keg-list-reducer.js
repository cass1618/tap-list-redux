export default (state = {}, action) => {

    const {brewery, name, location, description, abv, price, volume, id} = action;

    switch(action.type) {
        case "ADD_KEG":
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

            default:
                return state;
    }
};