import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {useState, useEffect} from "react";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import {useUserData} from "./App";

const UserSignIn = () => {
  const [clientId, setClientId] = useState("");
  const {setUserData} = useUserData();

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
            }).catch((err) => {
              console.log(err)
            });
            setUserData(userObject);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
    </GoogleOAuthProvider>
  );
}

export default UserSignIn;