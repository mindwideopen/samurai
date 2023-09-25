import React from "react";
import s from './Friends.module.css'


const Friends = (props) => {

  return (
      <div className={s.friends}>
        <img className={s.picture} src={props.image} alt="friends"/>
      </div>


  )
}


export default Friends;
