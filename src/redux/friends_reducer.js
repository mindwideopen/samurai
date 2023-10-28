import {UPDATE_POST_TEXT} from "./profile_reducer";

export const FRIENDS_PAGE = 'FRIENDS-PAGE';
export const friendsPageActionCreator = () => {
    return ({
        type: FRIENDS_PAGE,
        src: 'https://flxt.tmsimg.com/assets/p183931_b_h10_af.jpg'
    })

}
const initialState = {
    friendsImage: 'https://yt3.googleusercontent.com/Jv_qPbZo8iNMT9W2v6ZQRb3chJJZDFMI2MiIbd57_zJcvcBYUusmJfdN5-3rdWZ95CsbJ7Ro=s900-c-k-c0x00ffffff-no-rj'
}

const friendsPageReducer = (state = initialState, action) => {
debugger;
    switch (action.type) {
        case FRIENDS_PAGE:
            state.friendsImage = action.src
            return state;
        default:

            return state
    }

}

    export default friendsPageReducer;

