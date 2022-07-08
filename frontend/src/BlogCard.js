import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useContext, useEffect, useState} from "react";
import Axios from "axios";
import {getUserDataContext} from "./App";

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


  const extractDate = (dateString) => {
    const date = dateString.split("-");

    const day = date[2].substring(0, 2);

    let month = date[1];
    if (month === "01") month = "Jan";
    else if (month === "02") month = "Feb";
    else if (month === "03") month = "Mar";
    else if (month === "04") month = "Apr";
    else if (month === "05") month = "May";
    else if (month === "06") month = "Jun";
    else if (month === "07") month = "July";
    else if (month === "08") month = "Aug";
    else if (month === "09") month = "Sept";
    else if (month === "10") month = "Oct";
    else if (month === "11") month = "Nov";
    else if (month === "12") month = "Dec";

    const year = date[0];

    return day + " " + month + " " + year;
  }

  return (
    <button className="text-left">
      <div className="flex flex-col justify-between w-80 h-80 p-4 gap-2 rounded-lg shadow-lg hover:bg-gray-200">

        <ReactMarkdown className="prose break-words text-xs overflow-hidden"
                       remarkPlugins={[remarkGfm]}>
          {blogData.title + blogData.content}
        </ReactMarkdown>
        {/*<ReactMarkdown className="prose break-words text-sm" remarkPlugins={[remarkGfm]}>*/}
        {/*    {blogData.title}*/}
        {/*</ReactMarkdown>*/}

        {/*<ReactMarkdown className="prose opacity-50 overflow-hidden text-sm" remarkPlugins={[remarkGfm]}>*/}
        {/*    {blogData.content}*/}
        {/*</ReactMarkdown>*/}

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
    </button>
  );
}

export default BlogCard;