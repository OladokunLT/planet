import React from 'react';
import { useState, } from 'react';
import { Modal, Button } from 'react-bootstrap';

import planet1 from '../images/planet1.svg';
import planet2 from '../images/planet2.svg';
import planet3 from '../images/planet3.svg';
import planet4 from '../images/planet4.svg';
import planet5 from '../images/planet5.svg';
import planet6 from '../images/planet6.svg';
import planet7 from '../images/planet7.svg';
import planet8 from '../images/planet8.svg';
import planet9 from '../images/planet9.svg';


import { Col, Card, Container, Row, }  from 'react-bootstrap';


const Mycard = () => {
    const orbits = [
        {
            name: 'Planet Alpha',
            image: planet1,
            id: "pop:235"
        },
        {
            name: 'Planet Alpha',
            image: planet2,
            id: "pop:235"
        },
        {
            name: 'Planet Alpha',
            image: planet3,
            id: "pop:235"
        },
        {
            name: 'Planet Alpha',
            image: planet4,
            id: "pop:235"
        },
        {
            name: 'Planet Alpha',
            image: planet5,
            id: "pop:235"
        },
        {
            name: 'Planet Alpha',
            image: planet6,
            id: "pop:235"
        },
        {
            name: 'Planet Alpha',
            image: planet7,
            id: "pop:235"
        },
        {
            name: 'Planet Alpha',
            image: planet8,
            id: "pop:235"
        },
        {
            name: 'Planet Alpha',
            image: planet9,
            id: "pop:235"
        }
        
    ]

    const [appear, setAppear] = useState(false);
    const handleClose = () => setAppear(false);
    // function name (){
    //     setAppear(true)
    // }

    return (
        <Container>
            <Row>
                {
                    orbits.map( (orbit) =>(
                        <Col md={4} key={orbit.id} className='mb-3'>
                            <Card onClick ={ () => {setAppear(true)} }>
                                <Card.Img variant="top" src={ orbit.image } />    
                                <h4>{orbit.name}</h4>
                                <h3> {orbit.id} </h3>
                            </Card>
                            
                            {
                                appear?  
                                <Modal show={appear} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title> {orbit.name} </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className='mb-3'> 
                                            Planet Alpha is the place to be if you 
                                            like everything related to planets. I know 
                                            it’s a bit meta, but come see by yourself.
                                        </p>
                                        <div className="mb-3"> {orbit.id} </div>
                                        <header>CHARACTER</header>
                                        <div> {orbit.name} </div> 
                                        
                                        <div>
                                            <div> {orbit.image} </div>  <div> {orbit.id} </div>
                                        </div>
                                       

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal> : 
                                "" 
                            }
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Mycard
