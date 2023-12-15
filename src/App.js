import Header from './components/Header'
import CardContainer from './components/CardContainer'
import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <Container className="text-center mt-4" style={{ fontFamily: 'Segoe UI' }}>
      <Header />
      <CardContainer />
    </Container>
  )
}

export default App