import React from "react";
import {Image, Container } from 'react-bootstrap';
import batch23_img from '../Devopstools.png';

export const Extrainfo = () => {
  return (

    <Container>
    <div className="products">
        <h1>!! What can be Improved !!</h1>
        1. Designs can be better <br></br>
        2. Connect to the data base and get the deliver status  <br></br>
        3. Below is the tool set we are using for perform complete Devops
    </div>
    <Image src={batch23_img} rounded />
    </Container>
  );
};
