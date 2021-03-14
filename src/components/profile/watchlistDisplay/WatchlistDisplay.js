import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';


const WatchlistDisplay = (props) => {

    return (
        <div>
            {
            props.result.map( r => {
                return(
                    <>
                    <img src={r.Poster} />
        <ListGroup>
                <ListGroupItemHeading>{r.Title}</ListGroupItemHeading>
                <ListGroupItem>{r.Rated}</ListGroupItem>
                <ListGroupItem>{r.Runtime}</ListGroupItem>
                <ListGroupItem>{r.Genre}</ListGroupItem>
                <ListGroupItem>{r.Plot}</ListGroupItem>
        </ListGroup>
        </>
                )
            })
        }
        </div>
    );
};

export default WatchlistDisplay;