import React from "react";
import s from './Friends.module.css'
import friendsPageActionCreator, {FRIENDS_PAGE} from "../../redux/friends_reducer";





const Friends = (props) => {
    let showFriends = () => {

        props.dispatch({
            type: FRIENDS_PAGE,
            src: 'https://flxt.tmsimg.com/assets/p183931_b_h10_af.jpg'
        });
    }

  return (
      <div className={s.friends}>
          <button onClick={showFriends}>Click me!</button>
        <img className={s.picture} src={props.image} alt="friends"/>
      </div>


  )
}


export default Friends;
