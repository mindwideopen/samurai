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


const dialogReducer = (state, action) => {
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
