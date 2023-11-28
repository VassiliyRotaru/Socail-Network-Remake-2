import React from 'react';  /* Если что удалить */
import s from './Header.module.css'


const Header = () => {
return  <header className={s.header}>
        <img className={s.header__img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIiqFJIIdkejClAqvMhQBtb9Jzia6wOKlkWw&usqp=CAU'/>
        </header>
}

export default Header; 