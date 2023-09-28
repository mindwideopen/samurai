import React from "react";
import s from './Content.module.css'
import My_Posts from "./My Posts/My_Posts";







const Profile = (props) => {
    return (
        <div className={s.profile}>
            <My_Posts posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText} />
        </div>


    );
}

export default Profile;