import {getUserDataContext} from "./App";
import UserSignIn from "./UserSignIn";
import UserProfile from "./UserProfile";
import UserDropdown from "./UserDropdown";
import {useContext} from "react";

const UserControl = () => {
  const {userData} = useContext(getUserDataContext());

  return (
    <div>
      {
        Object.keys(userData).length === 0
          ? <UserSignIn/>
          : (
            <UserProfile>
              <UserDropdown/>
            </UserProfile>
          )
      }
    </div>
  );
}

export default UserControl;