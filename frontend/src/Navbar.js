
function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black text-white p-2">
      <h1 className="text-2xl font-bold">SimpleBlog</h1>
      <div className="flex gap-2 items-center">
        <p>login</p>
        <p className="border-solid border-2 border-white rounded p-0.5">sign up</p>
      </div>
    </div>
  );
}

export default Navbar;