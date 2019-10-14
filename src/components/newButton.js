import React from 'react';
import { Button } from 'antd';

const NewButton = (props) => {
  const { onClicked, label, content} = props;

  return (
    <Button
      onClick={() => onClicked(content)}
    >
      {label}
    </Button>
  );
};

export default NewButton;