import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
//import logo from './logo.jpg';

/*
const green = "#7AC143";
const greyLight = "#F2F2F2";
const greyMid = '#606060';
const greyDark = '#404040';

const headerStyle = {
  background: greyLight,
  height: "4em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
*/

const AdminDashboard = props => (
  <div className="admin__page">
    <header className="admin__header">Header</header>
    <nav className="admin__nav">
      <h2>Menu</h2>
      <ul>
        <li className="selected">Create New Event</li>
        <li>View Events</li>
      </ul>
    </nav>
    <main className="admin__main">Main content</main>
  </div>
);

AdminDashboard.propTypes =  {
//
}

export default AdminDashboard;