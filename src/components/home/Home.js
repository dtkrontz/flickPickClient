import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap';
import SearchComponent from '../Search.js';

const HomeComponent = (props) => {

    
    return (
        <div className='home'>
            <SearchComponent />
        </div>
    )
};

export default HomeComponent;

