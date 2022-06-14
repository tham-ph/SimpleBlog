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
      {
        Object.keys(userData).length === 0 ? (
          <GoogleLogin onSuccess={(res) => {
            const userObject = jwt_decode(res.credential);
            setUserData(userObject);
          }}/>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <img className="rounded-full w-8 h-8" src={userData.picture} alt="user's picture"></img>
            <p>{userData.name}</p>
          </div>
        )
      }

    </GoogleOAuthProvider>
  );
}

export default UserControl;