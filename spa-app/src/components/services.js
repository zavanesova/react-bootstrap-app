import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import laser from './images/laser.jpeg';
import facial from './images/facial.jpeg';
import massage from './images/massage.jpeg';

function services() {
    const mystyle = {
        height: "100vh",
        textAlign: "center"
    };
    const text = {
        fontSize: "25px"
    };

    return (
        <>
        <div className="row">
            <Card className="text-center col-sm-12">
            <Card.Title className="card-title">SERVICES</Card.Title>
            </Card>
        </div>
        <div className="row">
        <Card className="text-center col-sm-4" >
          <Card.Body className="card-body" style={mystyle}>
            <Card.Title className="card-title" style={text}>MASSAGE</Card.Title>
            <Card.Img variant="top" src={massage} />
                <Card.Text className="text">
                    <ul>60 or 90 Minute Massage</ul>
                    <ul>Hot Stone or Deep Tissue</ul>
                </Card.Text>
                <Link to="/contact" className="btn btn-light" size="lg">BOOK NOW</Link>
          </Card.Body>
        </Card> 
        <Card className="text-center col-sm-4" >
          <Card.Body className="card-body" style={mystyle}>
            <Card.Title className="card-title" style={text}>FACIALS</Card.Title>
            <Card.Img variant="top" src={facial}/>
                <Card.Text className="text">
                    <ul>Detox Facial</ul>
                    <ul>European Facial</ul>
                </Card.Text>
                <Link to="/contact" className="btn btn-light" size="lg">BOOK NOW</Link>
          </Card.Body>
        </Card> 
        <Card className="text-center col-sm-4" >
          <Card.Body className="card-body" style={mystyle}>
            <Card.Title className="card-title" style={text}>MED</Card.Title>
            <Card.Img variant="top" src={laser}/>
                <Card.Text className="text">Laser Treatments</Card.Text>
                <Link to="/contact" className="btn btn-light" size="lg">BOOK NOW</Link>
          </Card.Body>
        </Card> 
        </div>
        </>
    )
}

export default services;
