import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import EventDate from './eventDate';
import moment from 'moment';
import { labelFormat } from '../configuration/labelFormat';

const { Meta } = Card;

const Event = (props) => {
  const { id, name, description, postedUser, postedDate, isModerated, startedDate, endedDate } = props.event;

  return (
    <div className='event-container'>
      <Link to={`/events/${id}`}>
        <Card
          hoverable
          cover={<img height='auto' width='auto' alt="example"
                      src={`https://source.unsplash.com/random/1600x90${id}`}/>}
        >
          <Meta
            title={`${name} (has been moderated ${isModerated ? 'yes' : 'no'})`}
            description={description}
          />
          <div className='event-parameters'>
            <EventDate
              startedDate={startedDate}
              endedDate={endedDate}
            />
            <i>{`Posted by ${postedUser} at ${moment(postedDate).format(labelFormat.date)}`}</i>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Event;