import rootReducer from "../../reducers/index";
import {createStore} from "redux";
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer",() => {

    test("Should return default state if no action type is recognized", () => {
        expect(rootReducer({}, {type: null})).toEqual({
            formVisibleOnPage: false,
            kegArray: {}
        });
    });

    test("Initial state of keg list reducer should match root reducer", () => {
        expect(store.getState().kegArray).toEqual(kegListReducer(undefined, { type: null }));
    });

});