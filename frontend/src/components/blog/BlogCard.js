import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useContext, useEffect, useState} from "react";
import Axios from "axios";
import {getUserDataContext} from "../../App";
import {Link} from "react-router-dom";
import extractDate from "../../utils/extractDate";

const BlogCard = ({blogData}) => {
  const {userData} = useContext(getUserDataContext());
  const [ownerData, setOwnerData] = useState({});

  useEffect(() => {
    Axios.get("api/users/id/" + blogData.ownerId).then(res => {
      setOwnerData(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [userData]);

  return (
    <button className="text-left" onClick={() => {
      Axios.post("/api/blogs/update-views", {
        blogId: blogData.id
      }).catch(err => {
        console.log(err);
      })
    }}>
      <Link to={`/blogs/${blogData.id}`}>

        <div className="flex flex-col justify-between w-80 h-80 p-4 gap-2 rounded-lg shadow-lg hover:bg-gray-200">

          <ReactMarkdown className="prose break-words text-xs line-clamp-10"
                         remarkPlugins={[remarkGfm]}
          >
            {blogData.title + blogData.content}
          </ReactMarkdown>

          <div className="flex justify-between text-sm">

            <div className="flex items-center gap-2">
              <img className="rounded-full w-8 h-8" src={ownerData.pictureURL} alt="user's picture"></img>
              <span className="font-medium break-words w-20">{ownerData.name}</span>
              <span className="opacity-50">{extractDate(blogData.date)}</span>
            </div>

            <div className="flex items-center gap-0.5">
              <span className="opacity-50">{blogData.views}</span>
              <svg className="opacity-50 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
          </div>

        </div>

      </Link>
    </button>
  );
}

export default BlogCard;