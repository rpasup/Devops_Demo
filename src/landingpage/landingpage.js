import React from "react";
import { Image, Container } from 'react-bootstrap';
import devopslifecycle from '../devopslifecycle.jpg';
import './landling.css';

export const Landingpage = () => {
  return (

    <Container>
        Demo DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). 
        It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
        DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.
        <br></br><br></br>
        <Image src={devopslifecycle} height={'50%'} width={'50%'} className="image" />
    </Container>
  );
};
