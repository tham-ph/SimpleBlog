import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {useState, useEffect} from "react";
import Axios from "axios";
import jwt_decode from "jwt-decode";


const UserControl = () => {
  const [clientId, setClientId] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    Axios.get("/api/env/google-oauth-client-id").then(res => {
      setClientId(res.data);
    });
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={(res) => {
        const userObject = jwt_decode(res.credential);
        setUserData(userObject);
      }}/>
    </GoogleOAuthProvider>
  );
}

export default UserControl;