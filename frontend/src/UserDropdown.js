import {getUserDataContext} from "./App";
import {useContext} from "react";

const UserDropdown = () => {
  const {userData, setUserData} = useContext(getUserDataContext());

  return (
    <div className="relative">

      {/*dropdown svg*/}
      <button onClick={() => {
        document.getElementById("dropdown").classList.toggle("hidden");
      }}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
        </svg>
      </button>

      {/*dropdown list*/}
      <div id="dropdown" className="hidden flex flex-col whitespace-nowrap absolute top-9 right-2 bg-gray-400 text-white shadow-md rounded">
        <button className="py-2 px-4 rounded hover:bg-black">
          Change the username
        </button>
        <button className="py-2 px-4 rounded hover:bg-black">
          Sign Out
        </button>
      </div>

    </div>
  );
}

export default UserDropdown;