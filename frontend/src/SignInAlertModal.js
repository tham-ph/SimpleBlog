import Modal from "./Modal";
import UserSignIn from "./UserSignIn";

const SignInAlertModal = () => {
  return (
    <Modal>
      <div className="flex flex-col items-center gap-4 text-lg font-bold text-gray-500 p-8">
        Please sign in before do anything further.
        <UserSignIn/>
      </div>
    </Modal>
  );
}

export default SignInAlertModal;