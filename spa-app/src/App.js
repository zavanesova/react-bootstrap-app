import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import services from './components/services';


function App() {
  const mystyle = {
    marginLeft: "15px",
    fontFamily: "'Roboto Condensed', sans-serif;"
  };
  return (
    <div className="App">
      <header className='App-header'>
      <Router>
      <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/home" href="home" style={mystyle}>SPA MED <i class="fas fa-spa"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about-us" href="about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact"href="contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/services"href="services" href="services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path='/contact' exact component={Contact}></Route>
      <Route path='/services' exact component={services}></Route>
      <Route path='/' exact component={About}></Route>
      <Route path='/home' exact component={About}></Route>
      <Route path='/about-us' exact component={About}></Route>
      </Router>
      </header>
    </div>
  );
}

export default App;
