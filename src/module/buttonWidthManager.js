import React from 'react';
import NewButton from '../components/newButton';

class ButtonWidthManager extends React.Component {
  render() {
    return (
      <div className="event-width-buttons">
        <NewButton onClicked={this.props.handleWidthChange} label='Large' content={800}/>
        <NewButton onClicked={this.props.handleWidthChange} label='Medium' content={500}/>
        <NewButton onClicked={this.props.handleWidthChange} label='small' content={300}/>
      </div>
    );
  }
}

export default ButtonWidthManager;