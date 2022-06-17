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
          <GoogleLogin
            onSuccess={(res) => {
              const userObject = jwt_decode(res.credential);
              Axios.post("api/users/sign-in-with-google", {
                email: userObject.email,
                name: userObject.name,
                pictureURL: userObject.picture
              }).then((res) => {
                console.log(res);
              }).catch((err) => {
                console.log(err)
              });
              setUserData(userObject);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        ) : (
          <div className="flex justify-center items-center gap-2">
            <img className="rounded-full w-8 h-8" src={userData.picture} alt="user's picture"></img>
            <p>{userData.name}</p>
            <div className="relative">
              <button onClick={() => {
                document.getElementById("sign-out-button").classList.toggle("hidden");
              }}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
              <button id="sign-out-button" className="hidden whitespace-nowrap absolute top-9 right-2 bg-white text-black py-2 px-4 rounded shadow-md hover:bg-gray-200">
                Sign Out
              </button>
            </div>
          </div>
        )
      }

    </GoogleOAuthProvider>
  );
}

export default UserControl;