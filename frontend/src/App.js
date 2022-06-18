import Navbar from "./Navbar";
import BlogFeed from "./BlogFeed";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Editor from "./Editor";
import {createContext, useState} from "react";

const UserDataContext = createContext();

const getUserDataContext = () => {
  return UserDataContext;
}

function App() {
  const [userData, setUserData] = useState({});

  return (
    <UserDataContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
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