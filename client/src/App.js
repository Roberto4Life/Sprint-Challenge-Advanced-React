import React from 'react';
import axios from 'axios';
import Cards from './Cards';
import Navbar from './Components/Navbar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
    console.log('The constructor')
  }
  

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(responce => {
        console.log('this is the axios responce', responce);
        this.setState({
          people: responce.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log('This is the Render', this.state.people.length)
    return (
      <div className="navi">
        <Navbar />
        <div className="App">
          <Cards people={this.state.people} />
        </div>
      </div>
    );
  }
}
export default App;
