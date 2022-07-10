import UserControl from "../user/UserControl";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-gray-500 text-white p-2">
      <h1 className="text-2xl font-bold">
        <Link to="/">
          SimpleBlog
        </Link>
      </h1>
      <UserControl/>
    </div>
  );
}

export default Navbar;