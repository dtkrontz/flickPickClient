//Landing page for users to search, signup, login

import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap';
import SearchComponent from '../Search.js';
import '../home/Home.css';

const HomeComponent = (props) => {

    
    return (
        <div className='home'>
            <button>login</button>
            <Button>signup</Button>
            <SearchComponent />
        </div>
        // <div className='home'>
        //  thing ? <Signup updateToken={props.updateToken} /> : <div><p>Signup</p></div>
        //  thing ? <Login updateToken={props.updateToken} /> : <div><p>Login</p></div>
        // <SearchComponent />
        // </div>
    )
};

export default HomeComponent;

