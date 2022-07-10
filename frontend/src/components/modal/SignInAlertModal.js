import Modal from "./Modal";
import UserSignIn from "../user/UserSignIn";

const SignInAlertModal = () => {
  return (
    <Modal id={"sign-in-alert-modal"}>
      <div className="flex flex-col items-center gap-4 text-lg font-bold text-gray-500 p-6">
        Please sign in before do anything further.
        <UserSignIn/>
      </div>
    </Modal>
  );
}

export default SignInAlertModal;