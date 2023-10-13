
import {combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";
import friendsPageReducer from "./friends_reducer";


let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    friendsPageReducer
})

let store = createStore(reducers);


export default store;