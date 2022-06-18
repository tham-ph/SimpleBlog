import {useUserData} from "./App";

const UserProfile = ({children}) => {
  const {userData} = useUserData();

  return (
    <div className="flex justify-center items-center gap-2">
      <img className="rounded-full w-8 h-8" src={userData.pictureURL} alt="user's picture"></img>
      <p>{userData.name}</p>
      {children}
    </div>
  );
}

export default UserProfile;