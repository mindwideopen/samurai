import React from "react";
import s from './Friends.module.css'
import {friendsPageActionCreator} from "../../redux/friends_reducer";






const Friends = (props) => {
    let showFriends = () => {

        props.dispatch(friendsPageActionCreator())
        debugger;
    }

  return (
      <div className={s.friends}>
          <button onClick={showFriends}>Click ME!</button>
        <img className={s.picture} src={props.image} />
      </div>


  )
}


export default Friends;
