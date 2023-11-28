import React from 'react';  /* Если что удалить */
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return <main className={classes.content}>
    <div className={classes.photo}>
      <img className={classes.profile_photo} src='https://images.wallpaperscraft.ru/image/single/lodki_buhta_more_1081892_1920x1080.jpg' />
    </div>
    <div className={classes.avatar_description}>
      ava + description
    </div>
 
<MyPosts />
  </main>

}

export default Profile; 