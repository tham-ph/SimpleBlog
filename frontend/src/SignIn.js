import Axios from "axios";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";

const handleCallbackResponse = (res) => {
  console.log(jwt_decode(res.credential));
}

const SignIn = () => {
  useEffect(() => {
    /* global google */
    Axios.get("/api/env/google-oauth-client-id").then(res => {
      google.accounts.id.initialize({
        client_id: res.data,
        callback: handleCallbackResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
      );
    });
  }, []);

  return (
    <div id="signInDiv"></div>
  );
}

export default SignIn;