"use client";

import { useState } from "react";
import { FaFile } from "react-icons/fa";
import TypeWriter from "./TypeWriter";
interface Props {
  files: Record<string, string>;
  screenTitle: string;
  speed: number;
}

const EditorWindow: React.FC<Props> = ({ files, screenTitle, speed }) => {
  const [activeFile, setActiveFile] = useState("info.txt");

  return (
    <div className="bg-[var(--color-bg-blend)] text-white flex flex-col">
      <div className="bg-[var(--color-bg-blend)] px-4 py-2 flex items-center justify-between">
        <div className="font-bold">{screenTitle}</div>
        <div className="text-gray-400">🟢 Connected</div>
      </div>

      <div className="bg-gray-700 px-2 py-1 flex space-x-2 border-b border-gray-600">
        {Object.keys(files).map((file) => (
          <button
            key={file}
            onClick={() => setActiveFile(file)}
            className={`px-3 py-1 text-sm rounded-t ${
              activeFile === file
                ? "bg-gray-900 border-t-2 border-l-2 border-r-2 border-gray-600"
                : "bg-gray-700 text-gray-400 hover:bg-gray-600"
            }`}
          >
            <FaFile size={20} className="mr-1" />
            {file}
          </button>
        ))}
      </div>

      <TypeWriter text={files[activeFile]} speed={speed} />
    </div>
  );
};

export default EditorWindow;
