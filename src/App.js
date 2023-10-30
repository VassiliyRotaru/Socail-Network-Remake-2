import React from 'react';  /* Если что удалить */
import logo from './logo.svg';
import './App.css';


const App = () => { 
  return ( 
    <div className='page'>
      <header className='header'>
        <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIiqFJIIdkejClAqvMhQBtb9Jzia6wOKlkWw&usqp=CAU'/>
        </header>

      <sidebar className='sidebar'>
        <div className='sidebar_nav'><a>Profile</a></div>
        <div className='sidebar_nav'><a>Messages</a></div>
        <div className='sidebar_nav'><a>News</a></div>
        <div className='sidebar_nav'><a>Music</a></div>
        <div className='sidebar_nav'><a>Settings</a></div>
      </sidebar>
      
      <main className='main'>
         <div>
          <img className='main_photo' src='https://images.wallpaperscraft.ru/image/single/lodki_buhta_more_1081892_1920x1080.jpg'/>
          </div>
           <div>
            ava + description
           </div>
          <div>
          My posts
          </div>
          <div>
            New post
          </div>
        <div>
    <div>
      post 1
    </div>
    <div>
      post 2
    </div>
        </div>

      </main>
    </div>
  );
}



export default App;
