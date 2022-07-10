import Modal from "./Modal";
import Axios from "axios";
import {useNavigate} from "react-router-dom";

const DeleteAlertModal = () => {
  const navigate = useNavigate();

  return (
    <Modal id={"delete-alert-modal"}>
      <div className="flex flex-col items-center p-4 gap-4">
        <p className="font-bold">Are you sure for deleting this blog?</p>
        <div className="flex gap-2">
          <button
            className="bg-red-600 text-white p-2 rounded hover:bg-red-900"
            onClick={() => {
              Axios.post("/api/blogs/delete", {
                blogId: document.getElementById("delete-alert-modal").classList[0]
              }).catch(err => {
                console.log(err);
              });
              navigate("/");
              document.getElementById("delete-alert-modal").classList.add("hidden");
            }}
          >
            Delete
          </button>
          <button
            className="bg-white text-black p-2 border border-black rounded hover:bg-gray-200"
            onClick={() => {
              document.getElementById("delete-alert-modal").classList.add("hidden");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAlertModal;