// modal display of search with add to watchlist item.

import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalHeader, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading} from 'reactstrap';
import WatchlistCreate from './WatchlistCreate';
import './WatchlistDisplay.css';

const WatchlistDisplay = (props) => {
    // console.log(props);
    const [modal, setModal] = useState(true);

    const handleModal = () => {
        setModal(false);
    }

    useEffect (() => {
        setModal(true);
    }, []);

    return (
        <div className='modal'>
            {
                props.result.map(r => {
                    return (
            <Modal isOpen={modal} contentClassName='customModal'>
                {/* <ModalHeader><button onClick={handleModal}>X</button></ModalHeader> */}
                <ModalBody className="searchModal">
                    <Row>
                        <Col>
                            <img src={r.Poster} />
                        </Col>
                        <Col>
                            <ListGroup className="listGroup">
                                <ListGroupItemHeading>{r.Title}</ListGroupItemHeading>
                                <ListGroupItem color="warning">{r.Rated}</ListGroupItem>
                                <ListGroupItem color="warning">{r.Runtime}</ListGroupItem>
                                <ListGroupItem color="warning">{r.Genre}</ListGroupItem>
                                <ListGroupItem color="warning">{r.Plot}</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <WatchlistCreate result={props.result} token={props.token} fetchWatchlist={props.fetchWatchlist} handleModal={handleModal} setModal={setModal} />
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