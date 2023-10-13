const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_DIALOG = "ADD-DIALOG"
export const updateNewMessageBody = (newMessageText) => {
    return ({
        type: UPDATE_NEW_MESSAGE_BODY,
        messageBody: newMessageText
    })
}
export const addCurrentDialog = (dialogMessageText) => {
    return ({
        type: ADD_DIALOG,
        dialogMessage: dialogMessageText
    })
}

const initialState =  {
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

}
const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody=action.messageBody;
            return state;
        case ADD_DIALOG:
            let newDialog = {
                id:7,
                message: action.dialogMessage
                }
                state.messagesData.push(newDialog);
            state.newMessageBody='';
            return state;
        default:
            return state


    }

}




export default dialogReducer;
