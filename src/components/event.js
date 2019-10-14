import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { Meta } = Card;
const { Text } = Typography;

const Event = (props) => {
  const { id, name, description, user, isModerated, startedDate, endedDate } = props.event;
  const { imageWidth } = props;

  const momentEndedDate = moment(startedDate);
  const newEndedDate = moment(momentEndedDate).add(5, 'hours');

  return (
    <div className='event-container'>
      <Link to={`/events/${id}`}>
        <Card
          hoverable
          style={{ width: imageWidth }}
          cover={<img height='auto' width='auto' alt="example"
                      src={`https://source.unsplash.com/random/1600x90${id}`}/>}
        >
          <Meta
            title={`${name} (has been moderated ${isModerated ? 'yes' : 'no'})`}
            description={description}
          />
          <div className='event-parameters'>
            <Text type="secondary">{`By ${user}`}</Text>
            <Text type="secondary">{`Event starts at : ${moment(startedDate).format('MMMM Do YYYY, h:mm:ss a')}`}</Text>
            <Text type="secondary">{`Event ends at : ${moment(newEndedDate).format('MMMM Do YYYY, h:mm:ss a')}`}</Text>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Event;