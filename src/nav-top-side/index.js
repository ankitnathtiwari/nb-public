import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const NavTopSide = ({ displaySidebar, handleSidebar }) => {
  return displaySidebar ? (
    <div className="nav-top-side">
      <div className="nav-top-side-instruction">
        <p>Topics</p>
      </div>
      <div>
        <Link to="/?top=allpost">All</Link>
      </div>
      <div>
        <Link to="/?top=politics">Politics</Link>
      </div>
      <div>
        <Link to="/?top=sports">Sports</Link>
      </div>

      <div>
        <Link to="/?top=entertainment"> Entertainment</Link>
      </div>
      <div>
        <Link to="/?top=national"> National </Link>
      </div>
      <div>
        <Link to="/?top=international"> International</Link>
      </div>
      <div>
        <Link to="/?top=miscellaneous"> Miscellaneous</Link>
      </div>
      <div>
        <Link to="/?top=scienceandtech">Science and Technology</Link>
      </div>

      <div className="nav-top-side-close">
        <button onClick={() => handleSidebar(false)}>Close</button>
      </div>
    </div>
  ) : null;
};
