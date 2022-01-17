import React, { useState, useEffect } from "react";
import { NavSide } from "../nav-side";
import { NavTop } from "../nav-top";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import ShortVideos from "../short-videos";
import "./index.css";
import { AllPost } from "../allpost";
import { BottomNav } from "../bottom-nav";

export const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = (item) => setSidebar(item);

  return (
    <BrowserRouter>
      <div className="app">
        <NavTop sidebar={sidebar} handleSidebar={handleSidebar} />
        <div className="app-content" onClick={() => handleSidebar(false)}>
          <NavSide />
          <Switch>
            <Route path="/videos">
              <ShortVideos />
            </Route>
            <Route path="/posts">
              <AllPost />
            </Route>
            <Route exact path="/">
              <Redirect to="/videos" />
            </Route>
          </Switch>
        </div>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
};
