import React, { useState } from 'react';
import { Link } from "react-router-dom";

const StoryMenu = props => {
  
  const [open, setOpen] = useState(false);

  return (
    <div className="Story-menu-container">
        <div className="Story-menu-popup-arrow">
          <i className="fa fa-angle-up"></i>
        </div>
        <div className="Story-menu-popup-inner">
          <ul className="Story-menu-link-container">
            
          </ul>
        </div>
    </div>
  )
};

export default StoryMenu;

