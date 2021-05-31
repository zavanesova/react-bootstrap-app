import React from 'react';
import aboutimg from './images/aboutimg.jpeg';
import './About.css';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';


function About() {
    const mystyle = {
        width: "70%",
        margin: "auto"
    };

    return (
        <div className="about-container">
        <Card className="text-center" >
          <Card.Body className="card-body" style={mystyle}>
            <Card.Title className="card-title">ABOUT US</Card.Title>
            <Card.Img variant="top" src={aboutimg} />
                <Card.Text className="text">Located in Denver, Colorado since 2016. Visit us for a day of serene relaxation.</Card.Text>
                <Link to="/contact" className="btn btn-light" size="lg">CONTACT US</Link>
          </Card.Body>
        </Card>
        <CommentList></CommentList>
        </div>
    )
}

export default About;
