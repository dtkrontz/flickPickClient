import React, {useState} from 'react';

const WatchlistEdit = (props) => {

    const [watchlist, setWatchlist] = useState([]);
    const [watched, setWatched] = useState(false);
    const [recommend, setRecommend] = useState(false);

    const watchlistUpdate = (event, watchlist) => {
        event.preventDefault();
        fetch(`http://localhost:3000/watchlist/${props.watchlistToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({watchlist: {}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchWatchlist();
            props.updateOff();
        })
    }

    return(
        <Button color='danger' type='submit'>Add to Watchlist</Button>
    )
};

export default WatchlistEdit;



const editUpdateWatchlist = (watchlist) => {
    setWatchlistToUpdate(watchlist);
    console.log(watchlist);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false);
}