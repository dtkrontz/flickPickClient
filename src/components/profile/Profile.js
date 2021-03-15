// Landing page once a user signs up or logs in. If they have items in their watchlist they should display here

import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap';
import ProfileSearch from './ProfileSearch';
import WatchlistTable from './watchlistDisplay/WatchlistTable';




const Profile = (props) => {

    
    
    return (
        <div className='home'>
            <p>Username:</p>
            <Button onClick={props.clearToken}>Logout</Button>
            <ProfileSearch token={props.token}/>
            <WatchlistTable token={props.token} />
        </div>
    )
};

export default Profile;