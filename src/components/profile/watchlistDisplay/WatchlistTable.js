// display "GET" watchlist for a user, with watched and recommend and delete fields to "edit".

import React, { useState } from 'react';
import {
  // Carousel,
  // CarouselItem,
  // CarouselControl,
  // CarouselIndicators,
  CarouselCaption, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardGroup
} from 'reactstrap';
import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
import WatchlistEdit from './WatchlistEdit';

const WatchlistTable = (props) => {

  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

        const slides = props.watchlist.map((watchlist, index) => {
          return (
                  <div key={index} className="cardDiv"><Row>
                    <Col sm="4">
                      <Card className="card">
                        <CardImg className="cardImg" top width="100%" src={watchlist.poster} alt={watchlist.title}/>
                        <CardBody>
                        <CardTitle className="cardTitle" tag="h5">{watchlist.title}</CardTitle>
                        <CardSubtitle tag="h6" className="cardSub">Rated: {watchlist.rated}</CardSubtitle>
                        <CardText><small>{watchlist.plot}</small></CardText>
                        <WatchlistEdit token={props.token} watchlist={watchlist} fetchWatchlist={props.fetchWatchlist}  />
                        </CardBody>
                      </Card></Col></Row>
                </div>
          )}
            )

    return (
      <div>
      <Carousel className="carouselDiv" swipeable={true} draggable={false} showDots={true} responsive={responsive} infinite={true} autoPlaySpeed={1000} keyBoardControl={true} transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["mobile"]} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px" > 
      {slides}
    </Carousel>
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