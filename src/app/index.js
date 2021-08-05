import React, { useState, useEffect } from "react";
import { NavSide } from "../nav-side";
import { NavTop } from "../nav-top";
import { PostList } from "../post-list";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import "./index.css";
import { AllPost } from "../allpost";
export const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = (item) => setSidebar(item);

  return (
    <BrowserRouter>
      <div className='app'>
        <NavTop sidebar={sidebar} handleSidebar={handleSidebar} />
        <div className='app-content' onClick={() => handleSidebar(false)}>
          <NavSide />
          <Route path='/'>
            <AllPost />
          </Route>

          {/* <PostList /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};
