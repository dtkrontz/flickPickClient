// Search bar on non-verified users

import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import DisplayResult from './DisplayResult';

const SearchComponent = (props) => {

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
        setResult([]);
        searchFetch();
    }

    useEffect (() => {
        setDisplay(false);
    }, []);

    console.log(result);

    return (
        <div className='home'>
            <input type="text" placeholder="movie title" onChange={(e) => setTitle(e.target.value)} />
            <Button onClick={(event) => handleSubmit(event)}>Search</Button>
            {display ? <DisplayResult result= {result} handleSubmit={handleSubmit}/> : null}
        </div>
    )
};

export default SearchComponent;



