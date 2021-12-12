import React from 'react';
import { Container, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
             <Container>
                <Navbar expand="lg" variant="light" bg="white">
                    {/* <Container> */}
                        <Navbar.Brand href="#" className="fs-1">Spacious</Navbar.Brand>
                    {/* </Container> */}
                </Navbar>
            </Container>
        </div>
    )
}

export default Header
