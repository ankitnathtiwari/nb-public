import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const NavSide = () => {
  return (
    <div className='nav-side'>
      <div>
        <Link to='/all'>All</Link>
      </div>
      <div>
        <Link to='/politics'>Politics</Link>
      </div>
      <div>
        <Link to='/sports'>Sports</Link>
      </div>

      <div>
        <Link to='/business'>Business</Link>
      </div>

      <div>
        <Link to='/entertainment'> Entertainment</Link>
      </div>

      <div>
        <Link to='/world'>World</Link>
      </div>

      <div>
        <Link to='/scienceandtech'>Science and Technology</Link>
      </div>
    </div>
  );
};
