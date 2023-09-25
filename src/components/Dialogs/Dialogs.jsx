import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";







const Dialogs = (props) => {


    let dialogElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}> </DialogItem>)


    let messagesElements = props.messagesData.map(message => <Message message={message.message}></Message>)


    let newDialog = React.createRef();

    let addDialog = () => {
        let text = newDialog.current.value;
        alert (text);
    }

    return (


        <div className={s.dialogs}>

            <div>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <textarea ref={newDialog}></textarea>

            <button onClick={addDialog}>Add Dialog</button>

        </div>

    )
}


export default Dialogs;