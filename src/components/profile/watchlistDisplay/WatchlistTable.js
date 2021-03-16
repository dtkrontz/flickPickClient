// display "GET" watchlist for a user, with watched and recommend and delete fields to "edit".

import React, { useEffect, useState } from 'react';
import {Table, Button} from 'reactstrap';

import WatchlistEdit from './WatchlistEdit';

const WatchlistTable = (props) => {
        const deleteWatchlistItem = (watchlist) => {
            // console.log(watchlist);
            fetch(`http://localhost:3000/watchlist/${watchlist.id}`, {
                method: 'DELETE',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
            .then(() => props.fetchWatchlist())
            // .then(props.fetchWatchlist)
        };
 
        const Mapper = () => {
            return props.watchlist.map((watchlist, index) => {
            //   console.log(index);
                return(
                <tr key={index}>
                    <th scope="row">{watchlist.id}</th>
                    <td>{watchlist.title}</td>
                    <td>{watchlist.rated}</td>
                    <td>{watchlist.runtime}</td>
                    <td><WatchlistEdit watchlist={watchlist} fetchWatchlist={props.fetchWatchlist} /></td>
                    <td><Button color='danger' onClick={() => {deleteWatchlistItem(watchlist)}}>Trashcan</Button></td>
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
