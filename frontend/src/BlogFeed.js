import BlogCard from "./BlogCard";
import CreateANewBlogButton from "./CreateANewBlogButton";
import {useEffect, useState} from "react";
import Axios from "axios";

const BlogFeed = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    Axios.get("api/blogs/").then(res => {
      setBlogList(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const blogMap = blogList.map(blogData => {
    return <BlogCard blogData={blogData}/>;
  });

  return (
    <div className="flex flex-wrap justify-center gap-4 p-2">
      <CreateANewBlogButton/>
      {blogMap}
    </div>
  );
}

export default BlogFeed;