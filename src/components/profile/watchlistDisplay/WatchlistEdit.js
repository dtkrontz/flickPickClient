// will be called upon in the WatchlistTable to handle marking watched and recommend as "true".

import React, {useState} from 'react';
import {Button, Form, Label} from 'reactstrap';

const WatchlistEdit = (props) => {
    console.log(props);
    const [editWatched, setEditWatched] = useState(props.watchlist.watched);
    const [editRecommend, setEditRecommend] = useState(props.watchlist.recommend);
    
    const watchlistUpdate = () => {
        // event.preventDefault();
        fetch(`http://localhost:3000/watchlist/${props.watchlist.id}`, {
            method: 'PUT',
            body: JSON.stringify({watchlist: {
                watched: editWatched,
                recommend: editRecommend
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        // console.log(e);
        .then(() => props.fetchWatchlist())
    }
    
    const handleWatched = () => {
        editWatched ? setEditWatched(false) : setEditWatched(true);
    }
    
    const handleRecommend = () => {
        editRecommend ? setEditRecommend(false) : setEditRecommend(true);
    }
    
    console.log(editWatched, editRecommend);
    // const handleSubmit = (e) => {
    //     watchlistUpdate();
    //     watched ? setWatched(false) : setWatched(true);
    //     recommend ? setRecommend(false) : setRecommend(true);
    //     console.log(watched, recommend);
    // }

    return(
        <div>
            <Form onSubmit={watchlistUpdate}>
                <Label>
                <p>Watched: <input type='checkbox' checked={editWatched} value={editWatched} onChange={(e) => handleWatched(e.target.value)} />
                </p>
                <p>
                Recommend: <input type='checkbox' checked={editRecommend} value={editRecommend} onChange={(e) => handleRecommend(e.target.value)} />
                </p>
                </Label>
                <Button color='success' type='submit'>Save</Button>
            </Form>
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
