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
              width="28.871"
              height="25.641"
              viewBox="0 0 28.871 25.641"
            >
              <g id="black-bird-svgrepo-com" transform="translate(0 -3.551)">
                <g
                  id="Group_73"
                  data-name="Group 73"
                  transform="translate(0 3.551)"
                >
                  <path
                    id="Path_253"
                    data-name="Path 253"
                    d="M25.763,9.75a6.248,6.248,0,0,0-5.808-4.837c-3.117,0-5.684,2.67-6.051,6.116l0,0c-1.477-.243-2.863-2.878-4.283-7.48C6.449,7.851,6.642,12.617,7.6,14.4c-2.019.253-5.9-1.094-7.6-2.148C2.953,19.79,7.177,23.47,11.312,24.48a9.023,9.023,0,0,0,4.7,1.341c.18,0,.356-.022.533-.029L15.7,27.421l-1.778.665.143.5,1.723-.644.81.949.331-.367-.789-.924.956-1.848A9.051,9.051,0,0,0,19,25.3l1.823,2.66-1.545.654.161.494,1.753-.742,1.614.823L23,28.711l-1.647-.841-1.891-2.757c3.822-1.6,6.56-5.766,6.592-10.674.047-.167.092-.327.127-.475.07-.274,2.693-3.258,2.693-3.258Zm-3.427,2.536a1.8,1.8,0,0,1-1.673-1.912,1.8,1.8,0,0,1,1.673-1.911,1.8,1.8,0,0,1,1.675,1.911A1.805,1.805,0,0,1,22.336,12.287Z"
                    transform="translate(0 -3.551)"
                    fill="red"
                  />
                  <path
                    id="Path_254"
                    data-name="Path 254"
                    d="M24.885,9.249h0a.505.505,0,0,1-.448.755.5.5,0,0,1-.4-.2.909.909,0,0,0-.081.376.928.928,0,1,0,.928-.928Z"
                    transform="translate(-2.487 -3.368)"
                    fill="red"
                  />
                </g>
              </g>
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
