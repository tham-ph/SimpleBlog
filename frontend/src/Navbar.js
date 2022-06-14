import SignIn from "./SignIn";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black text-white p-2">
      <h1 className="text-2xl font-bold">SimpleBlog</h1>
      <SignIn/>
    </div>
  );
}

export default Navbar;