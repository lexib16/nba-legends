import { useState } from 'react'
import Card from 'react-bootstrap/Card'

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true)

  return (
    <Card
      className="rounded-2 m-auto player-card"
      onClick={() => setShowImage(!showImage)}
      role="button"
    >
      {showImage ? (
        <Card.Img variant="top" className="player-logo" src={img} />
      ) : (
        <ul className="m-auto" style={{ padding: '72px' }}>
          {statistics.map((item, i) => {
            return (
              <li
                key={i}
                className="h5 text-start list-unstyled"
                style={{ padding: '2px' }}
              >
                🏀 {item}
              </li>
            )
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  )
}

export default PlayerCard