// responsible for sending the POST request to create a watchlist row in the server

import React, {useState} from 'react';
import {Button} from 'reactstrap';

const WatchlistCreate = (props) => {
    console.log(props);

    const [title, setTitle] = useState(props.result[0].Title);
    const [rated, setRated] = useState(props.result[0].Rated);
    const [runtime, setRuntime] = useState(props.result[0].Runtime);
    const [genre, setGenre] = useState(props.result[0].Genre);
    const [plot, setPlot] = useState(props.result[0].Plot);
    const [poster, setPoster] = useState(props.result[0].Poster);
    const [watched, setWatched] = useState(props.result[0].Watched);
    const [recommend, setRecommend] = useState(props.result[0].Recommend);

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