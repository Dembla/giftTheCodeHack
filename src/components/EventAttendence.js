import React, { Component } from 'react';
import PropTypes from 'prop-types';

const  EventAttendence = (props) => {
  console.log(props)
  return(
  <div>
    <h1>Event Attendence</h1>
    <ul>
      {props.participants.map(function(participant, index){
        return <li key={ index }>{ participant.numberOfAttendees } child(ren) from {participant.email}</li>
      })}
    </ul>
  </div>
  )
};

EventAttendence.propTypes =  {
  participants: PropTypes.array.isRequired
}

export default EventAttendence;