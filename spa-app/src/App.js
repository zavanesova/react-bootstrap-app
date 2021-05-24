import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
        <Navbar.Brand href="home" style={mystyle}>SPA MED <i class="fas fa-spa"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="about-us">About Us</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/about-us' exact component={About}></Route>
        <Route path='/contact' exact component={Contact}></Route>
        <Route path='/services' exact component={services}></Route>
        <Route path='/' exact component={About}></Route>
        <Route path='/home' exact component={About}></Route>
      </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
