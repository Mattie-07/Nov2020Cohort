import './App.css';

class App extends React.Component() {
  constructor(props){ // explain what it means to pass the props here
    super(props);
    this.state = {
      credentials:{
        huxley:{
          password:"s3kret"
        }
      }
    }
  }
  render(){
    return (
      <div className="App">

      </div>
      );
  }
  checkCredientials = (username, password) => {
    //compare the arguments to the contents of this.state.credentials
  }
}

export default App;
