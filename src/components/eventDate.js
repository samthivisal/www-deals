import React from 'react';
import moment from 'moment';

const EventDate = (props) => {
  const { startedDate, endedDate } = props;

  const momentEndedDate = moment(startedDate);
  const newEndedDate = moment(momentEndedDate).add(5, 'hours');

  return (
    <div>
      <div className="event-start-time">
        <span className="event-date-key-label">START:</span>
        <span className="event-date-render">{` ${moment(startedDate).format('MMMM Do YYYY, h:mm:ss a')}`}</span>
      </div>
      <div className="event-end-time">
        <span className="event-date-key-label">END:</span>
        <span className="event-date-render">{` ${moment(newEndedDate).format('MMMM Do YYYY, h:mm:ss a')}`}</span>
      </div>
    </div>
  )
};

export default EventDate;