import React from 'react';  /* Если что удалить */
import classes from './Post.module.css'


const Post = () => {
  return <div className={classes.item}>
        <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/04/tobey-maguire-as-spider-man-in-2002.png" alt="" />
        post 1
        <div>
        <span>like</span>
        </div>
      </div>
}

export default Post; 