import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    let newDialog = React.createRef()
    let addDialog = () => {
        let dialogText = newDialog.current.value;
        alert (dialogText);
    }
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>  {props.name}  </NavLink>

        </div>
    )
}

export default DialogItem