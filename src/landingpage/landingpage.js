import React from "react";
import {Image, Container } from 'react-bootstrap';
import batch23_img from '../Devopstools.png';

export const Landingpage = () => {
  return (

    <Container>
    <div className="products">
        <h1>!! welcome to Devops page !!</h1>
    </div>
    <Image src={batch23_img} rounded />
    </Container>
  );
};
