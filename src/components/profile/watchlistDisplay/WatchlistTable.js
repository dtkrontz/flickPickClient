// display "GET" watchlist for a user, with watched and recommend and delete fields to "edit".

import React, { useEffect, useState } from 'react';
//import {Table, Button} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import WatchlistEdit from './WatchlistEdit';

const useStyles = makeStyles({
    card: {
      minWidth: 300,
      minHeight: 300,
    },
  });

  const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Wrapper = styled.div`
    display: block;
    margin: auto;
    padding: 2em;
`;



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
            //   console.log(index);
//                     <td><WatchlistEdit token={props.token} watchlist={watchlist} fetchWatchlist={props.fetchWatchlist} /></td>
//                     <td><Button color='danger' onClick={() => {deleteWatchlistItem(watchlist)}}>Trashcan</Button></td>
            const classes = useStyles();

            return props.watchlist.map((watchlist, index) => (
                <Column key={index}>
                <Wrapper>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia component="img" alt={watchlist.title} height="180"
                            image={watchlist.poster}
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {watchlist.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {watchlist.plot}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                         <CardActions>
                         <Button size="small" color="primary" onClick={() => {deleteWatchlistItem(watchlist)}}>Trash</Button>
                         <WatchlistEdit token={props.token} watchlist={watchlist} fetchWatchlist={props.fetchWatchlist} />
                        </CardActions>
                     </Card>
                </Wrapper>
            </Column>
                )
            )
        }

    return (
        <div>
            <Row>
                {Mapper()}
            </Row>
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


                // <tr key={index}>
                //     <td><img src={watchlist.poster}/></td>
                //     <td>{watchlist.title}</td>
                //     <td>{watchlist.rated}</td>
                //     <td>{watchlist.runtime}</td>
                //     <td>Watched</td>
                //     <td>Recommend</td>
                //     <td>Save</td>
                //     <td><Button color='danger' onClick={() => {deleteWatchlistItem(watchlist)}}>Remove from Watchlist</Button></td>
                // </tr>