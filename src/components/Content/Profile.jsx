import React from "react";
import './Content.css'
import Post from "../Post/Post";




const Profile = () => {
    return (

        <div className="content">
         <Post greet = 'HI!'/>  
         <Post greet = 'Finally!'/>
         <Post greet = 'CompletedI!'/>
        </div>
    );
}

export default Profile;