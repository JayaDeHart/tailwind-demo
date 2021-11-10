import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Friend({ image, name }) {
  console.log(image);
  return (
    <div className="sidebar-item">
      <FontAwesomeIcon icon={image} className="mr-4" size="lg" />
      {name}
    </div>
  );
}

export default Friend;
