// display "GET" watchlist for a user, with watched and recommend and delete fields to "edit".

import React, { useEffect, useState } from 'react';
import {Table} from 'reactstrap';

// import WatchlistEdit from './profile/watchlistDisplay/WatchlistEdit';
// import WatchlistDelete from './profile/watchlistDisplay/WatchlistDelete';

const WatchlistTable = (props) => {

    const [watchlist, setWatchlist] = useState([]);

        const fetchWatchlist = () => {
            fetch(`http://localhost:3000/watchlist/view`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then(res => res.json())
            .then(json => {
                setWatchlist(json)
            });
        }

        useEffect(()=> {
            fetchWatchlist();
        }, []);

        const Mapper = () => {
            return watchlist.map((watchlist, index) => {
                return(
                <tr key={index}>
                    <th scope="row">{watchlist.id}</th>
                    <td>{watchlist.title}</td>
                    <td>{watchlist.rated}</td>
                    <td>{watchlist.runtime}</td>
                </tr>
                )
            })
        }

    return (
        <div>
            <Table>
                {Mapper()}                                 
            </Table>
        </div>

    );
};

export default WatchlistTable;

// make a form on the end of the map (watchlist item row) the form will have the save img or delete buttons (small to fit things)

/*
Map => 
Column key
Wrapper
Card
CardActionArea
CardMedia/
Card Content
Typography
Card Content/
CardActionArea/
CardActions
edit/delete things
CardActions/
Card/
Wrapper/
Column/
*/
