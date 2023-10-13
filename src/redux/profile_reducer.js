export const ADD_POST = 'ADD-POST';
export const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
export const addPostActionCreator = () => {

    return ({
        type: ADD_POST
    })
}
export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_POST_TEXT,
        newText: text
    })
}


const initialState = {
    posts: [{
        id: 1,
        message: "Hi how are you",
        likesCount: 1
    },
        {
            id: 2,
            message: "Im OK",
            likesCount: 6
        },

        {
            id: 2,
            message: "Almost got it!",
            likesCount: 100
        },
        {
            id: 2,
            message: "Very close",
            likesCount: 1000
        }
    ],
    newPostText: ''

}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;

            return state;
        default:  return state
    }


}

export default profileReducer;