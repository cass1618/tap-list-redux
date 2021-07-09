import kegListReducer from "../../reducers/keg-list-reducer";
import * as c from "./../../actions/ActionTypes.js";

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
        expect(kegListReducer({}, { type: null })).toEqual({});
    });

    test("Should add new keg to kegArray", () => {
        const {brewery, name, location, description, abv, price, volume, id} = kegData;
        action = {
            type: c.ADD_KEG,
            brewery: "Modern Times",
            name: "Black House Coffee Stout",
            location: "San Diego, CA",
            description: "Oatmeal coffee stout positively redolent with coffee aroma and flavor.",
            abv: "5.80%", 
            price: "$8",
            volume: 15.5,
            id: 1
        };

        expect(kegListReducer({}, action)).toEqual({
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