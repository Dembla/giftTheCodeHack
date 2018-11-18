import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import RegisterParticipant from './components/RegisterParticipant';
import RegisterEvent from './components/RegisterEvent';
import EventAttendence from './components/EventAttendence';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  state = {
    email: '',
    numberOfAttendees: 1,
    participants: []
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

  handleEmailChange = (event) => {
    console.log(event.target.value)
    this.setState({email: event.target.value});
  }

  handleAttendeesChange = (event) => {
    console.log(event.target.value)
    this.setState({numberOfAttendees: event.target.value});
  }

  handleSubmit = (event) => {
    // alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
    axios.post('/registered', {
      email: this.state.email,
      numberOfAttendees: this.state.numberOfAttendees
    });

    // temp //
    this.setState(prevState => ({
      participants: [...prevState.participants, {
        email: this.state.email,
        numberOfAttendees: this.state.numberOfAttendees
      }]
    }))


    // this.clearInput();
  }

  handleEventSubmit(event) {
    // alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
    // axios.post('/registered', {
    // });
    // this.clearInput();
  }

  render() {
    return (
      <div className="App">      
        <header className="App-header">
          <RegisterParticipant 
            numberOfAttendees={this.state.numberOfAttendees}
            email={this.state.email}
            handleEmailChange={this.handleEmailChange}
            handleAttendeesChange={this.handleAttendeesChange}
            handleSubmit={this.handleSubmit}
          />
          <RegisterEvent 
            handleEventSubmit={this.handleEventSubmit}
          />
          <EventAttendence 
            participants={this.state.participants}
          />
        </header>
      </div>
    );
  }
}


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Link to="/" exact={true}>HOME</Link>
      <Link to='/Dashboard'>Admin Dashboard</Link>

      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

const Dashboard = () => (
  <div>
    <h1>This will be the dashboard</h1>
  </div>
)

const PageNotFound = () => (
  <div>
    HELLO. Page not found. 
  </div>
)



export default AppRouter;