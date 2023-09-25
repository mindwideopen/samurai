import React from "react";
import s from './Content.module.css'
import My_Posts from "./My Posts/My_Posts";
import {addPost} from "../../redux/state";






const Profile = (props) => {
    return (
        <div className={s.profile}>
            <My_Posts posts={props.posts} updatePostText={props.updateNewText} addPost={addPost} />
        </div>


    );
}

export default Profile;