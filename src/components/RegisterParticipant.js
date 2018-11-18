import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inputStyle = {
  
};

const RegisterParticipant = props => (
  <form onSubmit={props.handleSubmit}>
    <h1>Register Your Child</h1>
    <label>Number Of Children
      <input type="text"
        value={props.numberOfAttendees} 
        onChange={props.handleAttendeesChange} />
    </label>
    <br />
    <label>
      Email:
      <input type="text" 
        value={props.email} 
        onChange={props.handleEmailChange} />
    </label>
    <br/>
    <input type="submit" value="Submit" />
  </form>
);

RegisterParticipant.propTypes =  {
  numberOfAttendees: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handleAttendeesChange: PropTypes.func.isRequired
}

export default RegisterParticipant;