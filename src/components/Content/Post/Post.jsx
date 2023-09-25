import React from "react";
import './Post.css'

const Post = (props) => {
    return (

            <div className="all_posts">

                   <div className='post'>

                    <span>{props.post}</span>
                </div>

                <div className='likes'>
                    Likes: {props.likesCount}
                </div>
            </div>





    )
}

export default Post;