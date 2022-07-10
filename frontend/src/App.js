import Navbar from "./components/screen/Navbar";
import BlogFeed from "./components/blog/BlogFeed";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Editor from "./components/blog/Editor";
import {createContext, useEffect, useState} from "react";
import SignInAlertModal from "./components/modal/SignInAlertModal";
import ChangeUserNameModal from "./components/modal/ChangeUserNameModal";
import BlogPage from "./components/blog/BlogPage";
import DeleteAlertModal from "./components/modal/DeleteAlertModal";

const UserDataContext = createContext();

const getUserDataContext = () => {
  return UserDataContext;
}

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const localStorageUserData = JSON.parse(localStorage.getItem("userData"));
    if (localStorageUserData) {
      setUserData(localStorageUserData);
    }
  }, [])

  return (
    <UserDataContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <SignInAlertModal/>
        <ChangeUserNameModal/>
        <DeleteAlertModal/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<BlogFeed/>} />
          <Route path="/create" element={<Editor/>} />
          <Route path="/blogs/:id" element={<BlogPage/>} />
          <Route path="/blogs/edit/:id" element={<Editor/>} />
        </Routes>
      </BrowserRouter>
    </UserDataContext.Provider>
  );
}

export default App;
export {getUserDataContext};