let store = {

    _state: {

        profilePage: {
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

        },
        dialogsPage: {
            messagesData: [{id: 1, message: 'Hi!'}, {id: 2, message: 'How u doing'}, {
                id: 3,
                message: 'How are u doin'
            }, {id: 4, message: 'How were u doin'}, {id: 5, message: 'How will u be doin'}],

            dialogsData: [{id: 1, name: 'Lera'}, {id: 2, name: 'Viktor'}, {id: 3, name: 'Lex'}, {
                id: 4,
                name: 'Dasha'
            }, {id: 5, name: 'Korzh'},

            ]
        }, friendsPage: {
            friendsImage: 'https://flxt.tmsimg.com/assets/p183931_b_h10_af.jpg'
        }
    }, getState() {

        return this._state
    },

    _callSubscriber() {
        console.log('State was changed')
    },


    dispatch(action) {

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            console.log("В поле текст" + this._state.profilePage.newPostText)
            debugger;
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    },

    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        store._callSubscriber(store);
    },

    subscribe(observer) {
        store._callSubscriber = observer;
    }
}
debugger;

export const addPostActionCreator = () => {
    return ({
        type: 'ADD-POST'
    })
}
export const updateNewPostTextActionCreator = (text) => {

    return ({
        type: 'UPDATE-POST-TEXT', newText: text
    })
}
export default store;
window.store = store;
