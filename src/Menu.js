import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ snacks, drinks}) {
  // takes in the variable passed from the route to create the specific links necessary
  function handleLoad(){
    if(snacks){
      return(
      snacks.map(snack => (
        <Link to={`/snacks/${snack.id}`} key={snack.id}>
          <ListGroupItem>{snack.name}</ListGroupItem>
        </Link>
      )))
    }else if(drinks){
      return(
      drinks.map(drink => (
        <Link to={`/drinks/${drink.id}`} key={drink.id}>
          <ListGroupItem>{drink.name}</ListGroupItem>
        </Link>
      )))
    }
  } 
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {handleLoad()}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}


export default Menu;
