// import LoginDisplay from './components/home/login/loginDisplay/LoginDisplay'
//Landing page for users to search, signup, login

import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap';
import '../home/Home.css';
import Signup from './signup/Signup'
import SearchComponent from '../Search.js';
import LoginDisplay from './login/loginDisplay/LoginDisplay';


const HomeComponent = (props) => {

    const [signup, setSignup] = useState(false);
    const [login, setLogin] = useState(false);

    const signupHandler = () => {
        setSignup(true);
    }

    const loginHandler = () => {
        setLogin(true);
    }

    return (
        // <div className='home'>
        //     <button>login</button>
        //     <Button>signup</Button>
        //     {/* <LoginDisplay /> */}
        //     <SearchComponent />
        // </div>
        <div className='home'>
            <button onClick={(e) => signupHandler(e)}>Signup</button>
            <button onClick={(e) => loginHandler(e)}>Login</button>
            {signup ? <Signup updateToken={props.updateToken} signup={setSignup}/> : null}
            {login ? <LoginDisplay updateToken={props.updateToken} login={setLogin}/> : null}
        <SearchComponent />
        <h1 className='homeTitle'>Flick Pick</h1>
        </div>
    )
};

export default HomeComponent;

