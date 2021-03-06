// will be called upon in watchlist display to send the delete request

import React from 'react';
import {Button} from 'reactstrap';
import APIURL from '../../../helpers/environment';


const WatchlistDelete = (props) => {
    console.log(props);
    let watchlist = props.watchlist.id;
    console.log(watchlist);
    const deleteWatchlistItem = (watchlist) => {
        // console.log(watchlist);
        fetch(`${APIURL}/watchlist/${watchlist}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchWatchlist())
        // .then(props.fetchWatchlist)
    };

    return(
        <div>
            <Button color='danger' onClick={() => {deleteWatchlistItem(watchlist)}}>Remove from Watchlist</Button>
        </div>
    );
}

export default WatchlistDelete;