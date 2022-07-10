import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {useState, useEffect, useContext} from "react";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import {getUserDataContext} from "./App";
import { useNavigate } from "react-router-dom";

const UserSignIn = () => {
  const [clientId, setClientId] = useState("");
  const {setUserData} = useContext(getUserDataContext());
  let navigate = useNavigate();

  useEffect(() => {
    Axios.get("/api/env/google-oauth-client-id").then(res => {
      setClientId(res.data);
    });
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            const userObject = jwt_decode(res.credential);
            Axios.post("api/users/sign-in-with-google", {
              email: userObject.email,
              name: userObject.name,
              pictureURL: userObject.picture
            }).then((res) => {
              setUserData(res.data);
              localStorage.setItem("userData", JSON.stringify(res.data));
            }).catch((err) => {
              console.log(err)
            });

            if (!document.getElementById("sign-in-alert-modal").classList.contains("hidden")) {
              document.getElementById("sign-in-alert-modal").classList.add("hidden")
            }

            {navigate("/")}

          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
    </GoogleOAuthProvider>
  );
}

export default UserSignIn;