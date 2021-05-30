import { Button } from "@material-ui/core";
import React from "react";
import "../style/Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "../DataLayer/reducer";
import { useStateValue } from "../DataLayer/StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    //signin...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebookLogo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="fbText"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
