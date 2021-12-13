import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import character1 from '../images/character1.png';
import character2 from '../images/character2.png';
import character3 from '../images/character3.png';
import character4 from '../images/character4.png';
import character5 from '../images/character5.png';
import character6 from '../images/character6.png';
import character7 from '../images/character7.svg';
import character8 from '../images/character4.png';
import character9 from '../images/character9.png';
import character10 from '../images/character10.png';
import character11 from '../images/character11.png';
import character12 from '../images/character12.png';


import { Col, Card, Container, Row, }  from 'react-bootstrap';


const Characters = () => {
    const character = [
        {
            name: 'Brooklyn Simmons',
            image: character1,
            id: "23 friends"
        },
        {
            name: 'Cameron Williamson',
            image: character2,
            id: "23 friends"
        },
        {
            name: 'Leslie Alexander',
            image: character3,
            id: "23 friends"
        },
        {
            name: 'Kristin Watson',
            image: character4,
            id: "23 friends"
        },
        {
            name: 'Jenny Wilson',
            image: character5,
            id: "23 friends"
        },
        {
            name: 'Jerome Bell',
            image: character6,
            id: "23 friends"
        },
        {
            name: 'Guy Hawkins',
            image: character7,
            id: "23 friends"
        },
        {
            name: 'Lukman Oladokun',
            image: character8,
            id: "23 friends"
        },
        {
            name: 'Mrs Promise',
            image: character9,
            id: "23 friends"
        },
        {
            name: 'Imoleayo Bisiolu',
            image: character10,
            id: "23 friends"
        },
        {
            name: 'Mr Franklin',
            image: character11,
            id: "23 friends"
        },
        {
            name: 'Mr Ogochukwu',
            image: character12,
            id: "23 friends"
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
                    characters.map( (character) =>(
                        <Col md={3} key={orbit.id} className='mb-3'>
                            <Card onClick ={ () => {setAppear(true)} }>
                                <Card.Img variant="top" src={ character.image } />    
                                <h4>{character.name}</h4>
                                <h3> {character.id} </h3>
                            </Card>
                            
                            {
                                appear?  
                                <Modal show={appear} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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

export default Characters
