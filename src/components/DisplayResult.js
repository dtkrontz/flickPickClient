// Displays modal with information but no "add to watchlist" etc. for users not logged in.

import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalHeader, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';

import './DisplayResult.css';

const DisplayResult = (props) => {
    console.log(props);
    const [modal, setModal] = useState(true);

    const handleModal = (event) => {
        setModal(false);
        props.setDisplay(false);
    }

    useEffect (() => {
        setModal(true);
    }, [props.searchFetch]);

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
                            <ListGroup>
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
                        <Button onClick={handleModal}>X</Button>
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

export default DisplayResult;