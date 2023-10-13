import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import friendsPageReducer from "./friends_reducer";



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
            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How u doing'},
                {id: 3, message: 'How are u doin'},
                {id: 4, message: 'How were u doin'},
                {id: 5, message: 'How will u be doin'}
            ],

            dialogsData: [
                {id: 1, name: 'Lera'},
                {id: 2, name: 'Viktor'},
                {id: 3, name: 'Lex'},
                {id: 4, name: 'Dasha'},
                {id: 5, name: 'Korzh'},

            ],
            newMessageBody: ''

        },

        friendsPage: {
            friendsImage: ''/*'https://flxt.tmsimg.com/assets/p183931_b_h10_af.jpg'*/
        }
    },

    getState() {

        return this._state
    },

    _callSubscriber() {
        console.log('State was changed')
    },
        subscribe(observer) {
            store._callSubscriber = observer;
        },


    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsPageReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);
        }
}

export default store;
window.store = store;
