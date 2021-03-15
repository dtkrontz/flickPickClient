import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HomeComponent from './components/home/Home';
import Profile from './components/profile/Profile';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     setSessionToken(localStorage.getItem('token'));
  //   }
  // }, [])

  // const updateToken = (newToken) => {
  //   localStorage.setItem('token', newToken);
  //   setSessionToken(newToken);
  //   // console.log(sessionToken);
  // }

  const authorizedViews = () => {
    // return (sessionToken !== localstorage.getItem('token') ? <Profile token={sessionToken} /> : <HomeComponent />)
    return (sessionToken !== sessionToken ? <Profile token={sessionToken} /> : <HomeComponent /*updateToken={updateToken}*/ />)
  }

  return (
    <div className="App">
      {authorizedViews()}
    </div>
  );
}

export default App;
