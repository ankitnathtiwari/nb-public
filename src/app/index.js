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
import ReactGA from "react-ga";
import axios from "axios";
import { baseUrl } from "../base-url";
export const globalContext = React.createContext();

export const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState({ _id: "", username: "", auth: false });
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const handleSidebar = (item) => setSidebar(item);

  console.log({ data });
  useEffect(() => {
    const initAuthVerification = async () => {
      const data = await axios.get(`${baseUrl}/json_api/auth/publicAuth`, {
        withCredentials: true,
      });
      if (data.data.status) {
        setUser(data.data.user);
      }
    };

    initAuthVerification();
    ReactGA.initialize("UA-215888484-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  console.log({ user });
  return (
    <globalContext.Provider value={{ user, setUser, openModal, setOpenModal }}>
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
    </globalContext.Provider>
  );
};
