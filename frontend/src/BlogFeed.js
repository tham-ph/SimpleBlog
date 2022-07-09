import BlogCard from "./BlogCard";
import CreateANewBlogButton from "./CreateANewBlogButton";
import {useEffect, useState} from "react";
import Axios from "axios";

const BlogFeed = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    Axios.get("api/blogs/get-all-blogs").then(res => {
      setBlogList(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const blogMap = blogList.map(blogData => {
    return <BlogCard key={blogData.id} blogData={blogData}/>;
  });

  return (
    <div className="flex flex-wrap justify-center gap-4 py-16">
      <CreateANewBlogButton/>
      {blogMap}
    </div>
  );
}

export default BlogFeed;