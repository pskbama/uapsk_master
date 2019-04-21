import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import logo from './white-logo.svg'
import './UIFooter.css'

const UIFooter = () => (
  <Container fluid className="footer">
    <Container className="social">
      <Row>
        <Col md="4">
          <a href="https://twitter.com/uaphisig" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-twitter"></span>
          </a>
        </Col>
        <Col md="4">
          <a href="https://www.instagram.com/uaphisig/" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-instagram"></span>
          </a>
        </Col>
        <Col md="4">
          <a href="https://www.facebook.com/uapskod/" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-3x fa-facebook"></span>
          </a>
        </Col>
      </Row>
    </Container>
    <Container fluid className="contact">
      <span className="fa fa-2x fa-map-marker" />
      <h5><b>501 Jefferson Ave</b></h5>
      <h5>Tuscaloosa, AL 35487</h5>
      <br />
      <a href="mailto:pskbama@gmail.com" target="_top">
        <span className="fa fa-2x fa-envelope"></span>
        <h5>Contact Us</h5>
      </a>
    </Container>
    <Container fluid className="footerFoot">
      <a href="https://phisigmakappa.org/"><img src={logo} alt='Nationals' /></a>
      <h6> Website made by <br />
        <a href="https://github.com/jwcorle" target="_blank" rel="noopener noreferrer">
          <b className="text-uppercase">James Corley - UMD</b>
        </a>
      </h6>
      <h6> Adapted for UA use by <br />
          <b className="text-uppercase">Jared Haynie</b>
      </h6>
      <br />
      <h5> © 2019 <b>PHI SIGMA KAPPA</b></h5>
    </Container>
  </Container>
);

export default UIFooter;