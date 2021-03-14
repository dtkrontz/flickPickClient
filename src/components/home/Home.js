import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap';
import WatchlistDisplay from '../profile/watchlistDisplay/WatchlistDisplay.js';

const HomeComponent = (props) => {

    const [result, setResult] = useState([]);
    const [display, setDisplay] = useState(false);
    const [title, setTitle] = useState('');

    const key = '&apikey=87a5adba';
    const url ='http://www.omdbapi.com/?';

    const searchFetch = async () => { 
        await fetch(`${url}t=${title}${key}`)
        .then(res => res.json())
        .then(json => {
            setResult([...result, json]);
            setDisplay(true);
            //console.log(json);
        });
    };

    useEffect (() => {
        setDisplay(false);
        // searchFetch();
    }, []);

    console.log(result);

    return (
        <div className='home'>
            <input type="text" placeholder="movie title" onChange={(e) => setTitle(e.target.value)} />
            <Button onClick={searchFetch}>Search</Button>
            {display ? <WatchlistDisplay result= {result}/> : null}
            {/* <WatchlistDisplay result= {result}/> */}
        </div>
    )
};

export default HomeComponent;

