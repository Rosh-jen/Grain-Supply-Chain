import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import './FooterStyle.css';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3><BiMap /> &nbsp;Federation University Australia, Ballarat</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {new Date().getFullYear()} Grain Supply Chain</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://twitter.com/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /> </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;