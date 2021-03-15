// will be called upon in watchlist display to send the delete request

import React from 'react';
import {Button} from 'reactstrap';

const WatchlistDelete = (props) => {
    
    // const deleteWatchlist = (watchlist) => {
    //     fetch(`http://localhost:3000/watchlist/${watchlist.id}`, {
    //         method: 'DELETE',
    //         headers: new Headers ({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     })
    //     .then(() => props.fetchWatchlist())
    //     .then(props.fetchWatchlist)
    // };

    return(
        <div>
            <Button color='danger' type='submit' /*onClick={deleteWatchListItem}*/>Remove from Watchlist</Button>
        </div>
    );
}

export default WatchlistDelete;