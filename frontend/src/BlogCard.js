import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function BlogCard({blogData}) {
  return (
    <div className="flex flex-col justify-between w-80 h-80 p-2 rounded-lg shadow-lg">
      <div>
        <h1>
          <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
            {blogData.title}
          </ReactMarkdown>
        </h1>
        <p className="opacity-50">
          <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
            {blogData.content.substring(0, 250)}
          </ReactMarkdown>
        </p>
        {/*<h1 className="text-xl font-bold">Hello yo yo yo</h1>*/}
        {/*<p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aperiam consequatur deserunt dignissimos dolore eius eum ex expedita, explicabo fuga fugit laboriosam molestiae perferendis quasi quibusdam quidem tempore vitae!</p>*/}
      </div>
      <p>John Domogo</p>
    </div>
  );
}

export default BlogCard;