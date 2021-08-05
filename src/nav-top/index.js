import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavTopSide } from "../nav-top-side";
import "./index.css";
export const NavTop = ({ sidebar, handleSidebar }) => {
  return (
    <div className='nav-top'>
      <div className='nav-top-bar'>
        <div
          className='nav-top-burger-icon'
          onClick={() => handleSidebar(true)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='20'
            viewBox='0 0 23 20'>
            <path
              id='Menu'
              d='M-6160,20V17.142h14.376V20Zm0-8.571V8.571h23v2.858Zm0-8.571V0h23V2.858Z'
              transform='translate(6160)'
              fill='#fff'
            />
          </svg>
        </div>
        <div className='nav-top-logo'>
          <Link to='/all'>NewsBird</Link>
        </div>
      </div>
      <div className='nav-top-side-bar'>
        <NavTopSide displaySidebar={sidebar} handleSidebar={handleSidebar} />
      </div>
    </div>
  );
};
