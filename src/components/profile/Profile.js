// Landing page once a user signs up or logs in. If they have items in their watchlist they should display here

import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap';
import ProfileSearch from './ProfileSearch';


const Profile = (props) => {

    
    return (
        <div className='home'>
            <p>Username:</p>
            <ProfileSearch />
        </div>
    )
};

export default Profile;