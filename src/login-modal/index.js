import React, { useContext, useState } from "react";
import { Button } from "../shared/button";
import "./index.css";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { appConfig } from "../app-config";
import { globalContext } from "../app";
import { Loading } from "../shared/loading";

export const LoginModal = ({ setOpenModal }) => {
  const { user, setUser } = useContext(globalContext);
  const [loading, setLoading] = useState(false);

  const responseGoogle = async (response) => {
    console.log({ response }, appConfig.oAuth, "google response");
    if (!response.error) {
      setLoading(true);
      const authData = await axios.get(
        `${appConfig.url.api}/auth/googleLogin?token=${response.tokenId}`,
        {
          withCredentials: true,
        }
      );

      if (authData.data.status) {
        setUser(authData.data.user);
        setLoading(false);
        setOpenModal(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="google-login">
        <Loading />
      </div>
    );
  }

  return (
    <div className="google-login">
      <GoogleLogin
        clientId={appConfig.oAuth.googleId}
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
