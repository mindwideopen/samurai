import React from "react";
import './Post.css'

const Post = (props) => {
    return (
       <div className = 'post'>        
        {props.greet}
        </div>
        
       

        )
}

export default Post;