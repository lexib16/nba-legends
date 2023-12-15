import PlayerCard from './PlayerCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {data} from '../helper/data'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const CardContainer = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        aria-label="Search"
        aria-describedby="basic-addon1"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        className="w-50 m-auto"
      />
      <Container className="rounded-4 my-4 p-3 bg-light card-container">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((player, index) => {
              return (
                <Col md={6} lg={4} xl={3} key={index}>
                  <PlayerCard {...player} />
                </Col>
              )
            })}
        </Row>
      </Container>
    </>
  )
}

export default CardContainer
