import React, {useState} from 'react';

const WatchlistCreate = (props) => {

    const [title, setTitle] = useState('');
    const [rated, setRated] = useState('');
    const [runtime, setRuntime] = useState('');
    const [genre, setgenre] = useState('');
    const [plot, setPlot] = useState('');
    const [poster, setPoster] = useState('');
    const [watched, setWatched] = useState('');
    const [recommend, setRecommend] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/watchlist/${something}`, {
            method: 'POST',
            body: JSON.stringify({watchlist: {}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })

        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setTitle('');
            setRated('');
            setRuntime('');
            setGenre('');
            setPlot('');
            setPoster('');
            setWatched('');
            setRecommend('');
            props.fetchWatchlist();
        })
    }

    return(
        <div></div>
    )
};

export default WatchlistCreate;