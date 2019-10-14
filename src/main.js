import React from 'react';
import Event from './components/event';
import { events } from './fake/events';
import './main.css';
import ButtonWidthManager from './module/buttonWidthManager';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      imageWidth: 800,
    };
  }

  handleWidthChange = (newWidth) => {
    this.setState({ imageWidth: newWidth });
  };

  render() {
    return (
      <div className='main-container'>
        <div className='pub-1'/>
        <div className="events-container">
          <ButtonWidthManager handleWidthChange={this.handleWidthChange} />
          {this.state.events.map(event => {
            return (
              <Event key={event.id} event={event} imageWidth={this.state.imageWidth}/>
            );
          })}
        </div>
        <div className='pub-2'/>
      </div>
    );
  }
}

export default Main;