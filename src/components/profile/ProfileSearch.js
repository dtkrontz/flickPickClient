// Search when logged in to display add to watchlist button when searching.

import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import WatchlistDisplay from './watchlistDisplay/WatchlistDisplay';

const ProfileSearch = (props) => {

    const [result, setResult] = useState([]);
    const [display, setDisplay] = useState(false);
    const [title, setTitle] = useState('');

    const key = '&apikey=87a5adba';
    const url ='http://www.omdbapi.com/?';

    const searchFetch = async () => { 
        await fetch(`${url}t=${title}${key}`)
        .then(res => res.json())
        .then(json => {
            setResult([json]);
            setDisplay(true);
            //console.log(json);
        });
    };

    const handleSubmit = (event) => {
        setDisplay(false);
        setResult([]);
        searchFetch();
    }

    // Do we need this?
    useEffect (() => {
        setDisplay(false);
    }, []);

    // console.log(result);

    return (
        <div className='home'>
            <input type="text" placeholder="movie title" onChange={(e) => setTitle(e.target.value)} />
            <Button onClick={(event) => handleSubmit(event)}>Search</Button>
            {display ? <WatchlistDisplay result= {result} handleSubmit={handleSubmit} token={props.token} fetchWatchlist={props.fetchWatchlist}/> : null}
        </div>
    )
};

export default ProfileSearch;

