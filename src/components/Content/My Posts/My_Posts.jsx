import React from "react";
import Post from "../Post/Post";
import s from './My_Posts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";



const My_Posts = (props) => {



    let postElements = props.posts.map(post => <Post post={post.message} likesCount={post.likesCount}/>)


    let newPostElement= React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }


    let onChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))


    }

    return(
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onChange} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>


            <div className="content">
                {postElements}

            </div>
            </div>

    )


}

export default My_Posts
