let rerenderEntireTree = () => {
    console.log('State was changed')
}

let state = {
    profilePage: {
        posts:[
            {id: 1, message:"Hi how are you", likesCount: 1},
            {id: 2, message:"Im OK", likesCount: 6},
            {id: 2, message:"Almost got it!", likesCount: 100},
            {id: 2, message:"Very close", likesCount: 1000}
        ],
        newPostText:'test-text'

    },
    dialogsPage:{
        messagesData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How u doin'},
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

        ]
    },
    friendsPage: {
            friendsImage: 'https://flxt.tmsimg.com/assets/p183931_b_h10_af.jpg'
    }
}

window.state = state;

export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
    export let updatePostText = (newText) => {
    state.profilePage.newPostText = newText;

    rerenderEntireTree(state);
    }
    export const subscribe =  (observer) => {
    rerenderEntireTree = observer;

}
export default state;