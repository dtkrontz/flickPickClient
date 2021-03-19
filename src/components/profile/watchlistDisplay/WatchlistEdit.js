// will be called upon in the WatchlistTable to handle marking watched and recommend as "true".

import React, {useState} from 'react';
import { Form, Label, Row, Col} from 'reactstrap';
import Button from '@material-ui/core/Button';
import saveIcon from '../../assets/saveIcon.png';
import deleteIcon from '../../assets/deleteIcon.png';
import APIURL from '../../../helpers/environment';


import './WatchlistDisplay.css';
import '../Profile.css';

const WatchlistEdit = (props) => {
    console.log(props);
    const [editWatched, setEditWatched] = useState(props.watchlist.watched);
    const [editRecommend, setEditRecommend] = useState(props.watchlist.recommend);
    
    const watchlistUpdate = () => {
        // event.preventDefault();
        fetch(`${APIURL}/watchlist/${props.watchlist.id}`, {
            method: 'PUT',
            body: JSON.stringify({watchlist: {
                watched: editWatched,
                recommend: editRecommend
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        // console.log(e);
        .then(() => props.fetchWatchlist())
    }

    const deleteWatchlistItem = (watchlist) => {
        // console.log(watchlist);
        fetch(`${APIURL}/watchlist/${watchlist.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchWatchlist())
        // .then(props.fetchWatchlist)
    };
    
    const handleWatched = () => {
        editWatched ? setEditWatched(false) : setEditWatched(true);
    }
    
    const handleRecommend = () => {
        editRecommend ? setEditRecommend(false) : setEditRecommend(true);
    }
    
    console.log(editWatched, editRecommend);
    // const handleSubmit = (e) => {
    //     watchlistUpdate();
    //     watched ? setWatched(false) : setWatched(true);
    //     recommend ? setRecommend(false) : setRecommend(true);
    //     console.log(watched, recommend);
    // }

    return(
        <div>
            <Form onSubmit={watchlistUpdate}>
                <Row>
                    <Col>
                        <Label>
                            <p>Watched: <input type='checkbox' checked={editWatched} value={editWatched} onChange={(e) => handleWatched(e.target.value)} />
                            </p>
                        </Label>
                        <Label>
                            <p>
                            Recommend: <input type='checkbox' checked={editRecommend} value={editRecommend} onChange={(e) => handleRecommend(e.target.value)} />
                            </p>
                        </Label>
                    </Col>
                </Row>
                <Row>
                    <Col className='save'>
                        <Button color='primary' type='submit'><img className="editIcon" src={saveIcon} alt='save' /> </Button>
                    </Col>
                    <Col className='delete'>
                        <Button size="small" color="primary" onClick={() => {deleteWatchlistItem(props.watchlist)}}><img src={deleteIcon} className="editIcon" alt='delete' /></Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
};

export default WatchlistEdit;



// const editUpdateWatchlist = (watchlist) => {
//     setWatchlistToUpdate(watchlist);
//     console.log(watchlist);
// }

// const updateOn = () => {
//     setUpdateActive(true);
// }

// const updateOff = () => {
//     setUpdateActive(false);
// }