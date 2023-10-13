
import {combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";

let reducers = combineReducers({
    profileReducer,
    dialogReducer
})

let store = createStore(reducers);


export default store;