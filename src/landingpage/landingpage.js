import React from "react";
import { Image, Container } from 'react-bootstrap';
import devopslifecycle from '../devopslifecycle.jpg';

export const Landingpage = () => {
  return (

    <Container>
        DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). 
        It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
        DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.
        <br></br><br></br>
        <Image src={devopslifecycle} height={450} width={1000} style={{ alignSelf: 'center' }}/>
    </Container>
  );
};
