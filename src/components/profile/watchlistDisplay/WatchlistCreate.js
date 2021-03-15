// responsible for sending the POST request to create a watchlist row in the server

import React, {useState} from 'react';
import {Button} from 'reactstrap';

const WatchlistCreate = (props) => {
    console.log(props.result);
    console.log(props);

    const [title, setTitle] = useState(props.result.Title);
    const [rated, setRated] = useState(props.result.Rated);
    const [runtime, setRuntime] = useState(props.result.Runtime);
    const [genre, setGenre] = useState(props.result.Genre);
    const [plot, setPlot] = useState(props.result.Plot);
    const [poster, setPoster] = useState(props.result.Poster);
    const [watched, setWatched] = useState(props.result.Watched);
    const [recommend, setRecommend] = useState(props.result.Recommend);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/watchlist/create`, {
            method: 'POST',
            body: JSON.stringify({watchlist: {
                title: title,
                rated: rated,
                runtime: runtime,
                genre: genre,
                plot: plot,
                poster: poster

            }}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            // setTitle('');
            // setRated('');
            // setRuntime('');
            // setGenre('');
            // setPlot('');
            // setPoster('');
            // setWatched('');
            // setRecommend('');
            // props.fetchWatchlist();
        });
    };

    return(
        <div>
            <Button onClick={(event) => handleSubmit(event)}>Add to watchlist</Button>
        </div>
    )
};

export default WatchlistCreate;