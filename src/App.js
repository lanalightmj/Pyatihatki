import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Header from './Header/Header.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Profile from './Profile/Profile.jsx';
import Dialogs from './Navbar/Dialogs/Dialogs.jsx';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;