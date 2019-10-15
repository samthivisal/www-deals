import React from 'react';
import moment from 'moment';
import { labelFormat } from '../configuration/labelFormat';

const EventDate = (props) => {
  const { startedDate, endedDate } = props;

  return (
    <div>
      <div className="event-start-time">
        <span className="event-date-key-label">START:</span>
        <span className="event-date-render">{` ${moment(startedDate).format(labelFormat.date)}`}</span>
      </div>
      <div className="event-end-time">
        <span className="event-date-key-label">END:</span>
        <span className="event-date-render">{` ${moment(endedDate).format(labelFormat.date)}`}</span>
      </div>
    </div>
  )
};

export default EventDate;