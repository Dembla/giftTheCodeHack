import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RegisterForm = props => (
  <form onSubmit={props.handleSubmit}>
    <h1>Register Your Child</h1>
    <label>
      Email:
      <input type="text" value={props.email} onChange={props.handleEmailChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

RegisterForm.propTypes =  {
  email: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired
}

export default RegisterForm;