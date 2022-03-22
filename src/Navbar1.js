import React from "react";
import "./Navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import img from "./Images/TradExpress.svg";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="navb">
      <Navbar bg="" expand="lg" className="mv w-100 m-auto">
        <Container>
          <Link to="./Main">
            <img src={img} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-end">
              <div className="sapa">
                <Link to="./Buy" className="navi ">
                  InstantBuy/Sell
                </Link>

                <Link to="./Learn" className="navi ">
                  Learn
                </Link>

                <Link to="./Login">
                  <button className="navi button">Login</button>
                </Link>
                <Link to="./Getstarted">
                  <button className="navi button1">Get Started</button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
