// Landing page once a user signs up or logs in. If they have items in their watchlist they should display here

import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap';
import ProfileSearch from './ProfileSearch';
import WatchlistTable from './watchlistDisplay/WatchlistTable';
import APIURL from '../../helpers/environment';



const Profile = (props) => {
    console.log(props);
    const [watchlist, setWatchlist] = useState([]);

    const fetchWatchlist = () => {
        fetch(`${APIURL}/watchlist/view`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(res => res.json())
        .then(json => {
            setWatchlist(json);
            console.log('watchlist', json)
        });
    }

    useEffect(()=> {
        fetchWatchlist();
    }, []);

    
    return (
        <div className='home'>
            <ul className='user'>
                <li onClick={props.clearToken} >Logout</li>
            </ul>
            {/* <Button onClick={props.clearToken}>Logout</Button> */}
            <ProfileSearch token={props.token} fetchWatchlist={fetchWatchlist} />
            <WatchlistTable watchlist={watchlist} fetchWatchlist={fetchWatchlist} token={props.token} />
        </div>
    )
};

export default Profile;