import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import EventDate from './eventDate';

const { Meta } = Card;
const { Text } = Typography;

const Event = (props) => {
  const { id, name, description, user, isModerated, startedDate, endedDate } = props.event;
  const { imageWidth } = props;

  return (
    <div className='event-container'>
      <Link to={`/events/${id}`}>
        <Card
          hoverable
          style={{ width: imageWidth }}
          cover={<img height='auto' width='auto' alt="example" src={`https://source.unsplash.com/random/1600x90${id}`}/>}
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
            <i>{`Posted by ${user}`}</i>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Event;