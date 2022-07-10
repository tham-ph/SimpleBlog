import Modal from "./Modal";
import {useContext, useEffect, useState} from "react";
import {getUserDataContext} from "../../App";
import Axios from "axios";

const ChangeUserNameModal = () => {
  const {userData, setUserData} = useContext(getUserDataContext());
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    setInputName(userData.name);
  }, [userData]);

  return (
    <Modal id={"change-user-name-modal"}>
        <div className="flex flex-col items-center gap-8 text-lg font-bold text-gray-500 p-4">
          Change Username
          <form>
            <input className="border border-gray-300 rounded-md p-2 text-black"
                   type="text"
                   value={inputName || ""}
                   onChange={(event) => {
                     setInputName(event.target.value);
                   }}
            />
          </form>
          <div>
            <div className="flex justify-end gap-2">
              <button className="bg-gray-500 text-white p-2 rounded hover:bg-black"
                onClick={async () => {
                  Axios.post("/api/users/change-user-name", {
                    userId: userData.id,
                    newName: inputName
                  }).then((res) => {
                    setUserData(res.data);
                  }).catch((err) => {
                    console.log(err);
                  });
                  document.getElementById("change-user-name-modal").classList.add("hidden");
                }}
              >Change</button>
              <button className="bg-white text-black p-2 border border-black rounded hover:bg-gray-200"
                onClick={() => {
                  document.getElementById("change-user-name-modal").classList.add("hidden");
                }}
              >Cancel</button>
            </div>
          </div>
        </div>
    </Modal>
  );
}

export default ChangeUserNameModal;