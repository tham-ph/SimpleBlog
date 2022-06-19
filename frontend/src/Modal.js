
const Modal = ({children}) => {
  return (
    <div id="sign-in-alert-modal" className="hidden fixed z-10 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 flex flex-col items-end">

        <button className="text-gray-500 hover:text-black"
          onClick={() => {
            document.getElementById("sign-in-alert-modal").classList.add("hidden");
          }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
          </svg>
        </button>

        {children}

      </div>
    </div>
  );
}

export default Modal;