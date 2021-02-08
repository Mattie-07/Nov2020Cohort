// import logo from './logo.svg';
// import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <Contacts firstName="Matthew" lastName= "Roberts" ph="555-555-555" email="Me@me.com"/>
      <Contacts firstName="Zack" lastName="Joes" ph="666-666-6666" email="me1@me.com" />
      <Contacts firstName="zoo" lastName="Museum" ph="777-666-7755" email="me2@me.com"/>
    </>
  );
}

export default App;
