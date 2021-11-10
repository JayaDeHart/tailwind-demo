import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopButton({ title, icon }) {
  return (
    <div className="sidebar-item">
      <FontAwesomeIcon icon={icon} className="mr-8" />
      {title}
    </div>
  );
}

export default TopButton;
