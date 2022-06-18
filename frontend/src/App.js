import Navbar from "./Navbar";
import BlogFeed from "./BlogFeed";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Editor from "./Editor";
import {createContext, useState, useContext} from "react";

const Context = createContext();

const useUserData = () => {
  return useContext(Context);
}

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Context.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<BlogFeed/>} />
          <Route path="/create" element={<Editor/>} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
export {useUserData};