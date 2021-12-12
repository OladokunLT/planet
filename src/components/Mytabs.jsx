import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'react-bootstrap';

const Mytabs = () => {
    return (
        <div>
            <Container>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="PLANETS">
                    </Tab>
                    <Tab eventKey="profile" title="CHARACTERS">
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default Mytabs
