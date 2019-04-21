import React from 'react'
import { Container, Row } from 'reactstrap'
import App from '../../components/App'
import Award from '../../components/Award'
import './AwardsPage.css'

export default class AwardsPage extends React.Component {
  render() {
    return (
      <App>
        <Container fluid>
          <h1 className='pageTitle' data-aos='fade-down'> Awards </h1>
          <Row className='awards'>
            <Award year={'2018'} awardName={'Recruitment Award'} alt/>
             <Award year={'2018'} awardName={'New Member Education Award'} />
            <Award year={'2018'} awardName={'Risk Management Award'} alt/>
          </Row>
        </Container>
      </App>
    )
  }
}
