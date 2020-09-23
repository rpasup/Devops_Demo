import React from "react";
import {Image, Container } from 'react-bootstrap';
import batch23_img from '../Devopstools.png';

export const Extrainfo = () => {
  return (

    <Container>
    <div className="products">
        <h1>!! Tools Used !!</h1>
        * Below is the tool set we are using for performing complete Devops
    </div>
    <Image src={batch23_img} height={'50%'} width={'50%'} className="image" /> />
    </Container>
  );
};
