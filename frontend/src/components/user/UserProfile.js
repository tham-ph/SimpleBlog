import {getUserDataContext} from "../../App";
import {useContext} from "react";

const UserProfile = ({children}) => {
  const {userData} = useContext(getUserDataContext());

  return (
    <div className="flex justify-center items-center gap-2">
      <img className="rounded-full w-8 h-8" src={userData.pictureURL} alt="user's picture"></img>
      <p className="w-24 sm:w-auto break-words">{userData.name}</p>
      {children}
    </div>
  );
}

export default UserProfile;