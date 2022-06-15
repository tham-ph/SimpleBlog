import Navbar from "./Navbar";
import BlogFeed from "./BlogFeed";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Editor from "./Editor";

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<BlogFeed/>} />
        <Route path="/create" element={<Editor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
