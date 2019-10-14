import React from 'react';
import Event from './components/event';
import { events } from './fake/events';
import './main.css';
import ButtonAppBar from './components/newAppBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
    };
  }

  render() {
    return (
      <React.Fragment>
        <ButtonAppBar/>
        <div className='main-container'>
          <div className='pub-1'/>
          <div className="events-container">
            {this.state.events.map(event => {
              return (
                <Event key={event.id} event={event}/>
              );
            })}
          </div>
          <div className='pub-2'/>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;