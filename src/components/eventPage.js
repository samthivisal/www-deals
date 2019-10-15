import React from 'react';
import ButtonAppBar from './newAppBar';
import Event from './event';
import { events } from '../fake/events';

const EventPage = (props) => {
  return (
    <React.Fragment>
      <ButtonAppBar/>
      <div className='main-container'>
        <div className='pub'/>
        <div className="events-container">
          <Event key={1} event={events[0]}/>
        </div>
        <div className='pub'/>
      </div>
    </React.Fragment>
  );
};

export default EventPage;