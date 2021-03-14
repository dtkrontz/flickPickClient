import React from 'react';

const DeleteWatchlistItem = (props) => {
    
    const deleteWatchlist = (watchlist) => {
        fetch(`http://localhost:3000/watchlist/${watchlist}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchWatchlist())
    };

    return(
        <div></div>
    );
}

export default DeleteWatchlistItem;