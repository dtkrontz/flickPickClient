import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap';
import SearchComponent from '../Search.js';
import '../home/Home.css';

const HomeComponent = (props) => {

    
    return (
        <div className='home'>
            <Button>login</Button>
            <Button>signup</Button>
            <SearchComponent />
        </div>
    )
};

export default HomeComponent;

