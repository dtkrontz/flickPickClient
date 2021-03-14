import React, {useState} from 'react';


const WatchlistEdit = () => {

    const [watched, setWatched] = useState(false);
    const [recommend, setRecommend] = useState(false);

    const watchlistUpdate = (event, workout) => {
        event.preventDefault();
        fetch(`http://localhost:3000/watchlist/${props}`, {
            method: 'PUT',
            body: JSON.stringify({watchlist: {description: editDesc, definition: editDef, result: editRes}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchWorkouts();
            props.updateOff();
        })
    }

    return (
        <div>
            <form onSubmit={watchlistUpdate}>

            </form>
        </div>
    )
}

export default WatchlistEdit;