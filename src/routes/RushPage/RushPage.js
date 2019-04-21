import React from 'react'
import { Container } from 'reactstrap'
import App from '../../components/App'
import Event from '../../components/Event'
import './RushPage.css'

const RushPage = () => (
  <App>
    <Container fluid>
      <h1 className='pageTitle' data-aos='fade-down'> Rush Events </h1>
      <h2 className='pageSubtitle' data-aos='fade-down' data-aos-delay='100'> Fall 2019 </h2>


        <Container fluid className="contact">
      <center>
      <a href="mailto:pskbama@gmail.com" target="_top">
        <span className="fa fa-2x fa-envelope"></span>
        <h5>Contact our Rush Chair for more information</h5>
      </a>
      </center>
    </Container>

    <br />

      <Event date={'Summer Info'} month={'May-August'} eventName={'Bama Bound'} location={'501 Jefferson Avenue'} alt>
        <p><b> Availability Varies </b></p>
        <p> If you're coming down for a Bama Bound session during the summer and want to check out the house or learn more about us, please feel free to email our Rush Chair with the button above.  </p>
      </Event>
    </Container>

  </App>
);

export default RushPage;


     // eslint-disable-next-line
     // [<h3 className='text-center' data-aos='fade-down' data-aos-delay='200'> Rushees must register with Campus Director before <b> TBD </b> if they want to join any fraternity. </h3>]
    
