// Search bar on non-verified users

import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import DisplayResult from './DisplayResult';
import './home/Home.css';
import searchIcon from './assets/searchIcon.png';

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

    const handleSubmit = () => {
        setResult([]);
        searchFetch();
    }

    useEffect (() => {
        setDisplay(false);
    }, []);

    console.log(result);

    return (
        <div className='home'>
            <input type="text" placeholder="Movie Title" onChange={(e) => setTitle(e.target.value)} />
            <img className='searchIcon' src={searchIcon} alt='search' onClick={handleSubmit} />
            {/* <Button onClick={(event) => handleSubmit(event)}>Search</Button> */}
            {display ? <DisplayResult result= {result} handleSubmit={handleSubmit} searchFetch={searchFetch} setDisplay={setDisplay} /> : null}
        </div>
    )
};

export default SearchComponent;



