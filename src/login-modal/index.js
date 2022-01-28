import React, { useContext, useState } from "react";
import { Button } from "../shared/button";
import "./index.css";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { baseUrl } from "../base-url";
import { globalContext } from "../app";
import { Loading } from "../shared/loading";

export const LoginModal = ({ setOpenModal }) => {
  const { user, setUser } = useContext(globalContext);
  const [loading, setLoading] = useState(false);

  const responseGoogle = async (response) => {
    setLoading(true);
    const authData = await axios.get(
      `${baseUrl}/auth/googleLogin?token=${response.tokenId}`,
      {
        withCredentials: true,
      }
    );

    if (authData.data.status) {
      setUser(authData.data.user);
      setOpenModal(false);
      setLoading(false);
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
        clientId="707182129646-je9tjuk017sjhejbum688i8lbcshje8o.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
