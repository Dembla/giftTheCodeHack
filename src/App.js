import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import RegisterForm from './components/RegisterForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      numberOfAttendees: 1,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    axios
      .get('/healthcheck')
      .then(res => {
        // response from API
        console.log(res)
      })
      .catch( err => {
        console.log(`! ${err}`)
      })
  }

  handleEmailChange(event) {
    console.log(event.target.value)
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
    axios.post('/registered', {
      email: this.state.email,
      numberOfAttendees: this.state.numberOfAttendees
    });
    // this.clearInput();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RegisterForm 
            email={this.state.email}
            handleEmailChange={this.handleEmailChange}
            handleSubmit={this.handleSubmit}
          />
        </header>
      </div>
    );
  }
}

export default App;
