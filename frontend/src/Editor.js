import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useState} from "react";

const Editor = () => {
  const [mode, setMode] = useState(0);
  const [rawText, setRawText] = useState("");

  let screen;
  if (mode === 0) {
    screen = <textarea className="border-2 border-gray-300 resize-none"
                    rows="20"
                    value={rawText}
                    onChange={(event) => {
                      setRawText(event.target.value);
                    }}
            >
            </textarea>
  } else if (mode === 1) {
    screen =
      <div className="border-2 border-gray-300">
        <ReactMarkdown className="prose"
                       remarkPlugins={[remarkGfm]}
        >
          {rawText}
        </ReactMarkdown>
      </div>
  } else if (mode === 2) {
    screen =
      <div className="flex gap-2 items-start">
        <textarea className="w-1/2 border-2 border-gray-300 resize-none"
                rows="20"
                value={rawText}
                onChange={(event) => {
                  setRawText(event.target.value);
                }}
        >
        </textarea>
        <div className="w-1/2 border-2 border-gray-300">
          <ReactMarkdown className="prose"
                         remarkPlugins={[remarkGfm]}
          >
            {rawText}
          </ReactMarkdown>
        </div>
      </div>
  }
  return (
    <div className="flex flex-col p-4 gap-8">
      <h2 className="text-xl font-bold">Create A New Blog</h2>
      <div className="flex flex-col w-full gap-2">
        <div className="flex">
          <button id="edit-button" className="bg-black text-white p-2 border border-gray-300 rounded hover:bg-black"
                  onClick={() => {
                    document.getElementById("edit-button").classList.remove("bg-gray-500");
                    document.getElementById("edit-button").classList.add("bg-black");
                    document.getElementById("preview-button").classList.remove("bg-black");
                    document.getElementById("preview-button").classList.add("bg-gray-500");
                    document.getElementById("split-button").classList.remove("bg-black");
                    document.getElementById("split-button").classList.add("bg-gray-500");
                    setMode(0);
                  }}
          >Edit
          </button>
          <button id="preview-button"
                  className="bg-gray-500 text-white p-2 border border-gray-300 rounded hover:bg-black"
                  onClick={() => {
                    document.getElementById("edit-button").classList.remove("bg-black");
                    document.getElementById("edit-button").classList.add("bg-gray-500");
                    document.getElementById("preview-button").classList.remove("bg-gray-500");
                    document.getElementById("preview-button").classList.add("bg-black");
                    document.getElementById("split-button").classList.remove("bg-black");
                    document.getElementById("split-button").classList.add("bg-gray-500");
                    setMode(1);
                  }}
          >Preview
          </button>
          <button id="split-button"
                  className="bg-gray-500 text-white p-2 border border-gray-300 rounded hover:bg-black"
                  onClick={() => {
                    document.getElementById("edit-button").classList.remove("bg-black");
                    document.getElementById("edit-button").classList.add("bg-gray-500");
                    document.getElementById("preview-button").classList.remove("bg-black");
                    document.getElementById("preview-button").classList.add("bg-gray-500");
                    document.getElementById("split-button").classList.remove("bg-gray-500");
                    document.getElementById("split-button").classList.add("bg-black");
                    setMode(2);
                  }}
          >Split Edit | Preview
          </button>
        </div>
      </div>
      {screen}
      <div className="flex justify-end gap-2">
        <button className="bg-gray-500 text-white p-2 rounded hover:bg-black">Create</button>
        <button className="bg-white text-black p-2 border border-black rounded hover:bg-gray-200">Cancel</button>
      </div>
    </div>
  );
}

export default Editor;