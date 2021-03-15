// will be called upon in the WatchlistTable to handle marking watched and recommend as "true".

import React, {useState} from 'react';
import {Button, Form, Label} from 'reactstrap';

const WatchlistEdit = (props) => {

    const [watchlist, setWatchlist] = useState([]);
    const [watched, setWatched] = useState(props.fetch.watched);
    const [recommend, setRecommend] = useState(props.fetch.recommend);

    // const watchlistUpdate = (event, watchlist) => {
    //     event.preventDefault();
    //     fetch(`http://localhost:3000/watchlist/${props.watchlistToUpdate.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({watchlist: {}}),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     })
    //     .then((res) => {
    //         props.fetchWatchlist();
    //         props.updateOff();
    //     })
    // }

    const handleSubmit = (e) => {
        // watchlistUpdate();
        setWatched ? setWatched(false) : setWatched(true);
        setRecommend ? setRecommend(false) : setRecommend(true);
    }

    return(
        <div>
            <Form>
                <Label>
                <p>Watched: <input type='checkbox' value='Watched' onClick={(e) => handleSubmit(e)} />
                </p>
                </Label>
                <br />
                <Label>
                <p>Recommend: <input type='checkbox' value='Watched' onClick={(e) => handleSubmit(e)} />
                </p>
                </Label>
            </Form>
            <Button color='success' type='submit'>Add to Watchlist</Button>
        </div>
    )
};

export default WatchlistEdit;



// const editUpdateWatchlist = (watchlist) => {
//     setWatchlistToUpdate(watchlist);
//     console.log(watchlist);
// }

// const updateOn = () => {
//     setUpdateActive(true);
// }

// const updateOff = () => {
//     setUpdateActive(false);
// }
