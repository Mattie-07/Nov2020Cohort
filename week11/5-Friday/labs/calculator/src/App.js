
import './App.css';
import './assets/styles/global.css'
import Calculator from './components/calc';

class App extends Component {
  render(){
  return 
    <>
        <Container fluid>
        <Row>
        <Col>

          <Calculator/>
          
        </Col>
        </Row>
        </Container>
    </>
  
}
}
export default App;
