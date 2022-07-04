import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useContext, useEffect, useState} from "react";
import {getUserDataContext} from "./App";
import {Link} from "react-router-dom";
import Axios from "axios";

const Editor = () => {
  const {userData} = useContext(getUserDataContext());
  const [mode, setMode] = useState(0);
  const [rawTitleText, setRawTitleText] = useState("");
  const [rawContentText, setRawContentText] = useState("");

  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      document.getElementById("sign-in-alert-modal").classList.remove("hidden");
      document.querySelector("#sign-in-alert-modal .cross-close-button").classList.add("hidden");
    }
  }, []);


  let content;
  if (mode === 0) {
    content =
      <textarea className="border-2 border-gray-300 resize-none"
        rows="20"
        value={rawContentText}
        placeholder="Write your content here"
        onChange={(event) => {
          setRawContentText(event.target.value);
        }}
      >
      </textarea>
  } else if (mode === 1) {
    content =
      <div className="border-2 border-gray-300">
        <ReactMarkdown className="prose"
                       remarkPlugins={[remarkGfm]}
        >
          {rawTitleText + rawContentText}
        </ReactMarkdown>
      </div>
  } else if (mode === 2) {
    content =
      <div className="flex gap-2 items-start">
        <textarea className="w-1/2 border-2 border-gray-300 resize-none"
          rows="20"
          value={rawContentText}
          placeholder="Write your content here"
          onChange={(event) => {
            setRawContentText(event.target.value);
          }}
        >
        </textarea>
        <div className="w-1/2 border-2 border-gray-300">
          <ReactMarkdown className="prose"
                         remarkPlugins={[remarkGfm]}
          >
            {rawTitleText + rawContentText}
          </ReactMarkdown>
        </div>
      </div>
  }

  return (
    <div className="flex flex-col p-4 gap-8">
      <h2 className="text-2xl font-bold">Create A New Blog</h2>

      {/*Title input*/}
      <div>
        <label className="font-bold">Title: </label>
        <form>
          <input
            className="border-2 border-gray-300 w-full text-4xl"
            placeholder="Title"
            type="text"
            onChange={(event) => {
              setRawTitleText("# " + event.target.value + "\n");
            }}
          />
        </form>
      </div>

      <div className="flex flex-col w-full gap-2">
        <label className="font-bold">Content: </label>

        {/*Switch viwer buttons*/}
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
        <p className="text-red-500">
          This is a Markdown editor (not support HTML tags).
          <br/>
          <a className="underline" href="https://www.markdownguide.org/basic-syntax/">Basic Markdown Syntax</a>
        </p>
      </div>

      {content}

      {/*Create and Cancel buttons*/}
      <div className="flex justify-end gap-2">

        <button className="bg-gray-500 text-white p-2 rounded hover:bg-black"
          onClick={() => {
            Axios.post("/api/blogs/create", {
              title: rawTitleText,
              content: rawContentText,
              owner_id: userData.id
            }).catch(err => {
              console.log(err);
            });
          }}
        >
          <Link to="/">Create</Link>
        </button>

        <button className="bg-white text-black p-2 border border-black rounded hover:bg-gray-200">
            <Link to="/">Cancel</Link>
        </button>

      </div>

    </div>
  );
}

export default Editor;