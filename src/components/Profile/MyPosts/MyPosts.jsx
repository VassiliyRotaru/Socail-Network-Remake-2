import React from 'react';  /* Если что удалить */
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
  return <div> 
      My posts  
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
    </div>

    <div className={classes.posts_profile}>
     <Post />
     <Post />
     <Post />
    </div>
    </div>
}

export default MyPosts; 