// responsible for sending the POST request to create a watchlist row in the server

import React, {useState} from 'react';
import {Button, Row, Col} from 'reactstrap';
import addIcon from '../../assets/addIcon.png';
import APIURL from '../../../helpers/environment';


const WatchlistCreate = (props) => {
    // console.log(props.result);
    // console.log(props);

    const [title, setTitle] = useState(props.result[0].Title);
    const [rated, setRated] = useState(props.result[0].Rated);
    const [runtime, setRuntime] = useState(props.result[0].Runtime);
    const [genre, setGenre] = useState(props.result[0].Genre);
    const [plot, setPlot] = useState(props.result[0].Plot);
    const [poster, setPoster] = useState(props.result[0].Poster);
    const [watched, setWatched] = useState(false);
    const [recommend, setRecommend] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/watchlist/create`, {
            method: 'POST',
            body: JSON.stringify({watchlist: {
                title: title,
                rated: rated,
                runtime: runtime,
                genre: genre,
                plot: plot,
                poster: poster,
                watched: watched,
                recommend: recommend

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
            props.fetchWatchlist();
            props.setModal(false);
        });
    };

    return(
        <div>
            <Row>
                <Col>
                <Button onClick={(event) => handleSubmit(event)}><img src={addIcon} alt='Add to Watchlist' /></Button>
                </Col>
                <Col>
                <Button onClick={props.handleModal}>X</Button>
                </Col>
            </Row>
        </div>
    )
};

export default WatchlistCreate;