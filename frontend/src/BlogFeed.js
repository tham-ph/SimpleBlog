import BlogCard from "./BlogCard";
import CreateANewBlogButton from "./CreateANewBlogButton";

const BlogFeed = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-2">
      <CreateANewBlogButton/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
  );
}

export default BlogFeed;