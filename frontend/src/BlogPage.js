import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {getUserDataContext} from "./App";
import extractDate from "./extractDate";

const BlogPage = () => {
  const blogId = useParams().id;
  const [blogData, setBlogData] = useState({title: "#", content: "#", date: "1-1-2000", ownerId: ""});
  const [ownerData, setOwnerData] = useState({});
  const {userData} = useContext(getUserDataContext());

  useEffect(() => {
    Axios.get("/api/blogs/" + blogId).then(res => {
      setBlogData(res.data);
    }).catch(err => {
      console.log(err);
    });

    Axios.get("/api/users/id/" + blogData.ownerId).then(res => {
      setOwnerData(res.data);
    }).catch(err => {
      console.log(err);
    });

  }, [userData, blogData]);

  return (
  <div className="flex flex-col p-8 gap-4 divide-y-2">

    <div className="flex items-center gap-2">
      <img className="rounded-full w-8 h-8" src={ownerData.pictureURL} alt="user's picture"></img>
      <span className="font-medium break-words w-32">{ownerData.name}</span>
      <span className="opacity-50">{extractDate(blogData.date)}</span>
    </div>

    <ReactMarkdown className="prose break-words py-4" remarkPlugins={[remarkGfm]}>
      {blogData.title + blogData.content}
    </ReactMarkdown>
  </div>
);
}

export default BlogPage;