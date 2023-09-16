import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>  {props.name}  </NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.dialog}>
            {props.message}
        </div>)
}

const Dialogs = () => {
    let dialogsData = [
        {id:1, name: 'Lera'},
        {id:2, name: 'Viktor'},
        {id:3, name: 'Lex'},
        {id:4, name: 'Dasha'},
        {id:5, name: 'Korzh'},

    ]
    let messagesData =[
        {id:1, message: 'Hi!'}
        {id:2, message: 'How u doin!'}
    ]

    let dialogElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}> </DialogItem>)



    let messagesElements = messagesData.map(message=> <Message message={message.message}></Message>)
    return (
        <div className={s.dialogs}>

            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How u doin!'/>
                <Message message='Joe!'/>
                <Message message='Hi!'/>
                <Message message='How u doin!'/>

            </div>

        </div>

    )
}






export default Dialogs;