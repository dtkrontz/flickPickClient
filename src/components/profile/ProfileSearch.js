// Search when logged in to display add to watchlist button when searching.

import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import WatchlistDisplay from './watchlistDisplay/WatchlistDisplay';
import './Profile.css';
import searchIcon from '../assets/searchIcon.png';

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

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Movie Title" onChange={(e) => setTitle(e.target.value)} />
                <img className='searchIcon' src={searchIcon} alt='search' onClick={handleSubmit} />
            </form>
            {/* <Button onClick={(event) => handleSubmit(event)}><img src={searchIcon} alt='search' /></Button> */}
            {display ? <WatchlistDisplay result= {result} handleSubmit={handleSubmit} token={props.token} fetchWatchlist={props.fetchWatchlist}/> : null}
        </div>
    )
};

export default ProfileSearch;

