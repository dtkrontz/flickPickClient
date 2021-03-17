// display "GET" watchlist for a user, with watched and recommend and delete fields to "edit".


import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import WatchlistEdit from './WatchlistEdit';
import '../Profile.css';

const WatchlistTable = (props) => {

        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === props.watchlist.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? props.watchlist.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }

    

        // const deleteWatchlistItem = (watchlist) => {
        //     // console.log(watchlist);
        //     fetch(`http://localhost:3000/watchlist/${watchlist.id}`, {
        //         method: 'DELETE',
        //         headers: new Headers ({
        //             'Content-Type': 'application/json',
        //             'Authorization': props.token
        //         })
        //     })
        //     .then(() => props.fetchWatchlist())
        //     // .then(props.fetchWatchlist)
        // };
 
        const slides = props.watchlist.map((watchlist, index) => {
          return (
                <CarouselItem className='carouselItem' onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={index}>
                  <Card>
                    <CardImg top width="100%" src={watchlist.poster} alt={watchlist.title} />
                    <CardBody>
                    <CardTitle tag="h5">{watchlist.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Rated: {watchlist.rated}</CardSubtitle>
                    <CardText>{watchlist.plot}</CardText>
                    <WatchlistEdit token={props.token} watchlist={watchlist} fetchWatchlist={props.fetchWatchlist}  />
                    </CardBody>
                </Card>
              </CarouselItem>
          )}
            )

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} >
              <CarouselIndicators items={props.watchlist} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
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