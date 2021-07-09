import KegListReducer from "../../reducers/keg-list-reducer";

describe("KegListReducer", () => {

    let action;
    const kegData = {
        brewery: "Modern Times",
        name: "Black House Coffee Stout",
        location: "San Diego, CA",
        description: "Oatmeal coffee stout positively redolent with coffee aroma and flavor.",
        abv: "5.80%", 
        price: "$8",
        volume: 15.5,
        id: 1
    }
    
    test("Should return default state when no action is passed to reducer", () => {
        expect(KegListReducer({}, { type: null })).toEqual({});
    });

    test("Should add new keg to kegArray", () => {
        const {brewery, name, location, description, abv, price, volume, id} = kegData;
        action = {
            type: "ADD_KEG",
            brewery: "Modern Times",
            name: "Black House Coffee Stout",
            location: "San Diego, CA",
            description: "Oatmeal coffee stout positively redolent with coffee aroma and flavor.",
            abv: "5.80%", 
            price: "$8",
            volume: 15.5,
            id: 1
        };

        expect(ticketListReducer({}, action)).toEqual({
            [id] : {
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
    });
});