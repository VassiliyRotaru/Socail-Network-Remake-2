import React from 'react';  /* Если что удалить */
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


const App = () => { 
  return ( 
    <div className='page'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}



export default App;
