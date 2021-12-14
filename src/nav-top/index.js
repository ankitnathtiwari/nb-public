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
              width="30"
              height="30"
              viewBox="0 0 40.769 33.577"
            >
              <g
                id="bird-of-black-and-white-feathers-svgrepo-com"
                transform="translate(0 -4.212)"
              >
                <g
                  id="Group_70"
                  data-name="Group 70"
                  transform="translate(0 4.212)"
                >
                  <path
                    id="Path_219"
                    data-name="Path 219"
                    d="M24.885,8.587h0a.5.5,0,0,1,.066.24.515.515,0,0,1-.516.515.506.506,0,0,1-.4-.2.928.928,0,1,0,.848-.552Z"
                    transform="translate(6.969 -2.198)"
                    fill="red"
                  />
                  <path
                    id="Path_220"
                    data-name="Path 220"
                    d="M36.38,10.9a8.78,8.78,0,0,0-8.2-6.689c-4.4,0-8.026,3.693-8.546,8.458l0,0C16.063,19.368,2.391,15.823,0,14.365c4.17,10.419,10.135,15.51,15.974,16.907a12.928,12.928,0,0,0,6.63,1.854c.254,0,.5-.028.752-.041l-1.187,2.252-2.51.92.2.694,2.433-.89,1.145,1.314.468-.507L22.792,35.59l1.35-2.558a12.917,12.917,0,0,0,2.693-.624l2.575,3.679-2.182.907.227.682,2.475-1.028,2.279,1.141.266-.665L30.15,35.96l-2.67-3.814c5.4-2.213,9.263-7.974,9.309-14.76.068-.231.13-.453.18-.657.1-.38,3.8-4.507,3.8-4.507ZM21.41,28.921c-2.875,0-9.755-4.851-9.755-5.98s6.88-5.652,9.755-5.652,5.2,2.6,5.2,5.816S24.284,28.921,21.41,28.921ZM31.541,14.409a2.517,2.517,0,0,1-2.365-2.645,2.379,2.379,0,1,1,4.729,0A2.516,2.516,0,0,1,31.541,14.409Z"
                    transform="translate(0 -4.212)"
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
