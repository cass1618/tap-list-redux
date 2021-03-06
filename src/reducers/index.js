import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    kegArray: kegListReducer
});

export default rootReducer;