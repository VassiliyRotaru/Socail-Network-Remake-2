import React from 'react';  /* Если что удалить */
import classes from './Nav.module.css'

//let classes = {
//'nav': 'Nav_nav__Nb8a6' ,
//'item': 'Nav_item__gJGSi' 
//'active': 'active_item__gJGSi' }

// let c1 = "item"
// let c2 = "active"
// "item active"
//let classes = c1 + "" "" + c2
//let classesNew = `${c1} ${c2}`

const Nav = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <a>Profile</a>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <a>Messages</a>
    </div>
    <div className={classes.item}>
      <a>News</a>
    </div>
    <div className={classes.item}>
      <a>Music</a>
    </div>
    <div className={classes.item}>
      <a>Settings</a>
    </div>
  </nav>

}

export default Nav; 