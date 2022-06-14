import UserControl from "./UserControl";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-black text-white p-2">
      <h1 className="text-2xl font-bold">SimpleBlog</h1>
      <UserControl/>
    </div>
  );
}

export default Navbar;