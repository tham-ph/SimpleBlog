import Navbar from "./Navbar";
import BlogFeed from "./BlogFeed";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Editor from "./Editor";
import {createContext, useState} from "react";
import SignInAlertModal from "./SignInAlertModal";
import ChangeUserNameModal from "./ChangeUserNameModal";

const UserDataContext = createContext();

const getUserDataContext = () => {
  return UserDataContext;
}

function App() {
  const [userData, setUserData] = useState({});

  return (
    <UserDataContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <SignInAlertModal/>
        <ChangeUserNameModal/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<BlogFeed/>} />
          <Route path="/create" element={<Editor/>} />
        </Routes>
      </BrowserRouter>
    </UserDataContext.Provider>
  );
}

export default App;
export {getUserDataContext};