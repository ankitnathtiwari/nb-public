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
              id="nb_bird"
              xmlns="http://www.w3.org/2000/svg"
              width="26.261"
              height="21.3"
              viewBox="0 0 26.261 21.3"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M46.316,23.3A15.183,15.183,0,0,0,61.635,7.982V7.252A11.859,11.859,0,0,0,64.261,4.48a12.111,12.111,0,0,1-3.064.875,5.676,5.676,0,0,0,2.334-2.918,13.382,13.382,0,0,1-3.356,1.313A5.21,5.21,0,0,0,56.237,2a5.481,5.481,0,0,0-5.4,5.4,2.844,2.844,0,0,0,.146,1.167A15.084,15.084,0,0,1,39.9,2.875a5.587,5.587,0,0,0-.729,2.772A5.8,5.8,0,0,0,41.5,10.17a4.918,4.918,0,0,1-2.48-.729h0A5.332,5.332,0,0,0,43.4,14.693a4.5,4.5,0,0,1-1.459.146,2.483,2.483,0,0,1-1.021-.146,5.527,5.527,0,0,0,5.106,3.793,11.015,11.015,0,0,1-6.711,2.334A4.039,4.039,0,0,1,38,20.674,13.771,13.771,0,0,0,46.316,23.3"
                transform="translate(-38 -2)"
                fill="#fb2626"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <Link to="/allpost">NEWSBIRD</Link>
          </div>
        </div>
      </div>
      <div className="nav-top-side-bar">
        <NavTopSide displaySidebar={sidebar} handleSidebar={handleSidebar} />
      </div>
    </div>
  );
};
