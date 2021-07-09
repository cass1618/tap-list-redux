import KegListReducer from "../../reducers/keg-list-reducer";

describe('KegListReducer', () => {
    test('Should return default state if there is no action type passed into the reducer', () => {
        expect(KegListReducer({}, { type: null })).toEqual({});
    });
});