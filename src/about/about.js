import React from "react";
import {Row, Container, Col, Card} from 'react-bootstrap';
import rpasup from '../rpasup.jpg';
import somdev from '../somdev.jpg';
import divya from '../divya.jpg';

export const About = () => {
  return (
    <Container>
    <div className="products">
      <h1>!! Problem Statement !!</h1>
      <p1>For any user, it’s difficult to manage on storing the products information and how many products to be delivered from the ware house in order to send the products to the customer. It will be good to have one website or a page to manage the orders with product list and the basic information (the cost, quantity) stored and displaying the all products list with quantity and prices.</p1>
      <br></br>
      <br></br>
      In this application : 
      <br></br>
      <p2>
      <br></br>
      •	User should be able to see about Product list information <br></br>
      •	User can add the product with value. <br></br>
      •	User can add the product quantity. <br></br>
      •	User can view the existing product information (Value and Quantity). </p2><br></br><br></br>
      <h1>Team Mates</h1>
      <br></br>
      <Row>
        <Col xs={4} md={3}>
        <Card>
          <Card.Img variant="top" src={somdev} />
          <Card.Body>
          <Card.Title> Somdev Urmaliya </Card.Title>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={4} md={3}>
        <Card>
          <Card.Img variant="top" src={rpasup} />
          <Card.Body>
          <Card.Title>Rajasekhar Pasupula </Card.Title>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={4} md={3}>
        <Card>
          <Card.Img variant="top" src={divya} />
          <Card.Body>
          <Card.Title>Divyashree Hegde </Card.Title>
          </Card.Body>
        </Card>
        </Col>
      </Row>      
    </div>
    </Container>
  );
};
