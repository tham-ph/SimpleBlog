import {useUserData} from "./App";
import UserSignIn from "./UserSignIn";
import UserProfile from "./UserProfile";
import UserDropdown from "./UserDropdown";

const UserControl = () => {
  const {userData} = useUserData();

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