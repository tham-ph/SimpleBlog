import { Link } from "react-router-dom";
const CreateANewBlogButton = () => {
  return (
    <button className="fixed bottom-4 right-4 bg-gray-500 text-white text-lg py-1 px-8 rounded-full hover:bg-black">
      <Link to="/create">Create A New Blog</Link>
    </button>
  );
}

export default CreateANewBlogButton;