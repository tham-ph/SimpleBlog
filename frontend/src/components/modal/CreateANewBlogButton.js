import { Link } from "react-router-dom";
import {useContext} from "react";
import {getUserDataContext} from "../../App";

const CreateANewBlogButton = () => {
  const {userData} = useContext(getUserDataContext());

  let ret;
  if (Object.keys(userData).length === 0) {
    ret = (
      <div>
        <button className="fixed bottom-4 right-4 bg-gray-500 text-white text-lg py-1 px-8 rounded-full hover:bg-black"
          onClick={() => {
            document.getElementById("sign-in-alert-modal").classList.remove("hidden");
          }}
        >
          Create A New Blog
        </button>
      </div>
    );
  } else {
    ret = (
      <div>
        <button className="fixed bottom-4 right-4 bg-gray-500 text-white text-lg py-1 px-8 rounded-full hover:bg-black">
          <Link to="/create">Create A New Blog</Link>
        </button>
      </div>
    );
  }
  return ret;
}

export default CreateANewBlogButton;