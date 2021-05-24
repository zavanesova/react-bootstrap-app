import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import spa from './images/spa.jpeg';

function Contact() {
    const mystyle = {
        width: "70%",
        margin: "auto",
        height: "100vh"
    };

    return (
        <div className="contact-container">
            <Card className="text-center" >
                <Card.Body className="card-body" style={mystyle}>
                <Card.Title className="card-title">CONTACT US</Card.Title>
                <Card.Text className="text">
                    <ul>EMAIL: contactus@spamed.com</ul>
                    <ul>PHONE: 303-415-1234</ul>
                    <ul>ADDRESS: 4321 1st Ave Denver, CO</ul>
                </Card.Text>
                <Card.Img variant="top" src={spa} />
          </Card.Body>
        </Card>
        </div>
    )
}

export default Contact;
