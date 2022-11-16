
import HeaderMenu from './components/header'
import Footer from './components/footer'
import CarContent from './components/carcontent'
import Container from 'react-bootstrap/Container';

import './App.css';

function App() {
  return (
    <Container className="App">
      <HeaderMenu />
      <h2>Recomendação para você</h2>
      <CarContent />
      <h2>Carros mais buscados</h2>
      <CarContent />
      <Footer />
    </Container>
  );
}

export default App;
