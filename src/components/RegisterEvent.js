import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RegisterEvent = props => (
  <form onSubmit={props.handleEventSubmit}>
    <h1>Register Event</h1>
    <label>
      Event info:
      <input type="text" value="value" />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

RegisterEvent.propTypes =  {
  handleEventSubmit: PropTypes.func.isRequired
}

export default RegisterEvent;