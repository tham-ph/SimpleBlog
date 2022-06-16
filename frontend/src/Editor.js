import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useState} from "react";

const Editor = () => {
  const [isPreviewMode, setPreviewMode] = useState(false);
  const [rawText, setRawText] = useState("");
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h2 className="text-xl font-bold">Create A New Blog</h2>
      <div className="flex flex-col w-full gap-2">
        <div className="flex">
          <button id="edit-button" className="bg-black text-white p-2 border border-gray-300 rounded hover:bg-black"
            onClick={() => {
              document.getElementById("edit-button").style.backgroundColor = "black";
              document.getElementById("preview-button").style.backgroundColor = "rgb(107 114 128)";
              setPreviewMode(false);
            }}
          >Edit</button>
          <button id="preview-button" className="bg-gray-500 text-white p-2 border border-gray-300 rounded hover:bg-black"
            onClick={() => {
              document.getElementById("edit-button").style.backgroundColor = "rgb(107 114 128)";
              document.getElementById("preview-button").style.backgroundColor = "black";
              setPreviewMode(true);
            }}
          >Preview</button>
        </div>
        {
          isPreviewMode ? (
              <div>
                <ReactMarkdown className="prose"
                               remarkPlugins={[remarkGfm]}>
                  {rawText}
                </ReactMarkdown>
              </div>
          )
          : (
              <textarea className="border-2 border-gray-300 resize-none"
                        rows="20"
                        value={rawText}
                        onChange={(event) => {
                          setRawText(event.target.value);
                        }}
              ></textarea>
          )
        }
      </div>
    </div>
  );
}

export default Editor;