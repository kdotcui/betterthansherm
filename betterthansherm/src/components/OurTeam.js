import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import teamPicture from './images/teampicture.png';

/**
 * Team Page displaying member picture, names and descriptions
 */
const TeamPage = () => {
    return (
        <div>
            <h1>Our Team</h1>
            <section id="team">
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={teamPicture} style={{ width: '100%', height: '180px' }} />
                        <Card.Body>
                            <Card.Title>Josh Liu</Card.Title>
                            <Card.Text>SWE Engineer @ Brandeis University</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={teamPicture} style={{ width: '100%', height: '180px' }} />
                        <Card.Body>
                            <Card.Title>Sherren Jie</Card.Title>
                            <Card.Text>SWE Engineer @ Brandeis University</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={teamPicture} style={{ width: '100%', height: '180px' }} />
                        <Card.Body>
                            <Card.Title>Jason Yang</Card.Title>
                            <Card.Text>SWE Engineer @ Brandeis University</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={teamPicture} style={{ width: '100%', height: '180px' }} />
                        <Card.Body>
                            <Card.Title>Kevin Cui</Card.Title>
                            <Card.Text>SWE Engineer @ Brandeis University</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </section>
        </div>
    );
};

export default TeamPage;
