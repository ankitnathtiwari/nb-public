import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavTopSide } from "../nav-top-side";
import "./index.css";
export const NavTop = ({ sidebar, handleSidebar }) => {
  return (
    <div className="nav-top">
      <div className="nav-top-bar">
        <div
          className="nav-top-burger-icon"
          onClick={() => handleSidebar(true)}
        >
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28px"
            height="48px"
          >
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
          </svg>

          {/* <svg
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
          </svg> */}
        </div>
        <div className="nav-top-logo">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 30.27 28.727"
            >
              <g id="NEWSBIRD-_1_1" transform="translate(-61.797 122.785)">
                <path
                  id="Path_257"
                  data-name="Path 257"
                  d="M62.5-121.965a28.976,28.976,0,0,0,4.228,7.357,5.589,5.589,0,0,1,1.285,1.86,3.387,3.387,0,0,1-1.7-.248c-1.824-.5-4.436-.372-4.519.248-.083.785,3.9,3.1,6.343,3.6,2.653.537,2.86.827,1.658,2.149-2.2,2.439-6.84,12.193-6.135,12.9.373.372,3.731-1.488,5.182-2.893A11.764,11.764,0,0,0,71-99.728c.746-1.405.829-1.488,3.234-1.529,6.011-.165,10.488-4.547,11.11-10.912a14.764,14.764,0,0,1,1.119-4.216c.871-1.529.871-1.529,3.565-1.571,1.99-.041,2.446-.124,1.7-.372a14.618,14.618,0,0,0-2.653-.372c-1.327-.041-1.866-.331-2.943-1.612-1.2-1.364-1.575-1.529-3.275-1.529-2.57,0-3.98,1.364-4.27,4.175-.373,3.183-.746,3.307-3.068.992a21.733,21.733,0,0,0-11.69-5.952C62.3-122.915,62.254-122.874,62.5-121.965Z"
                  transform="translate(0)"
                  fill="red"
                />
              </g>
            </svg>
          </div>
          <div>
            <Link to="/videos">NEWSBIRD</Link>
          </div>
        </div>
      </div>
      <div className="nav-top-side-bar">
        <NavTopSide displaySidebar={sidebar} handleSidebar={handleSidebar} />
      </div>
    </div>
  );
};
