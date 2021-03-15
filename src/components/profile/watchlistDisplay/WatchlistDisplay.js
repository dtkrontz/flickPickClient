// modal display of search with add to watchlist item.

import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ListGroup, ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap';

import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalHeader, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading} from 'reactstrap';
import WatchlistEdit from './profile/watchlistDisplay/WatchlistEdit';
import WatchlistDelete from './profile/watchlistDisplay/WatchlistDelete';

const WatchlistDisplay = (props) => {
    console.log(props);
    const [modal, setModal] = useState(true);

    console.log(props);
    const [modal, setModal] = useState(true);

    const handleModal = (event) => {
        setModal(false);
    }

    useEffect (() => {
        setModal(true);
    }, [props.handleSubmit]);

    return (
        <div className='modal'>
            {
                props.result.map(r => {
                    return (
            <Modal isOpen={modal} contentClassName='customModal'>
                <ModalHeader><button onClick={handleModal}>X</button></ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            <img src={r.Poster} />
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroupItemHeading>{r.Title}</ListGroupItemHeading>
                                <ListGroupItem>{r.Rated}</ListGroupItem>
                                <ListGroupItem>{r.Runtime}</ListGroupItem>
                                <ListGroupItem>{r.Genre}</ListGroupItem>
                                <ListGroupItem>{r.Plot}</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <WatchlistEdit />
                        </Col>
                        <Col>
                        <WatchlistDelete />
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
                    )
                })
            }
        </div>
    );
};

export default WatchlistDisplay;