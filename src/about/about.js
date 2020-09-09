import React from "react";
import {Image, Row, Container, Col} from 'react-bootstrap';
import rpasup from '../rpasup.jpg';
export const About = () => {
  return (
    <Container>
    <div className="products">
      <h1>Problem Statement!!</h1>
      <p1>For any user, it’s difficult to manage on storing the products information and how many products to be delivered from the ware house in order to send the products to the customer. It will be good to have one website or a page to manage the orders with product list and the basic information (the cost, quantity) stored and displaying the all products list with quantity and prices.</p1>
      <br></br>
      <p2>Requirement Specification: 
      <br></br>
      •	User should enter URL on browser and user should be able to see about page of the Product list. <br></br>
      •	User can add the product with value. <br></br>
      •	User can add the product quantity. <br></br>
      •	User can view the existing product information (Value and Quantity). </p2><br></br><br></br>
      <h1>Team Mates</h1>
      <br></br>
      <Row>
        <Col xs={6} md={4}>
          <Image src={rpasup} rounded />
        </Col>
        <Col xs={4} md={4}>
          <Image src={rpasup} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={rpasup} thumbnail />
        </Col>
      </Row>      
    </div>
    </Container>
  );
};
