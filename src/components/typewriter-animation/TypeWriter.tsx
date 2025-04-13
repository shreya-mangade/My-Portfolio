import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  speed: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Reset on new text

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="flex-1 bg-gray-900 text-green-500 text-base p-4 whitespace-pre-wrap relative">
      {displayedText}
      <span className="blinking-cursor"></span>
    </div>
  );
};

export default TypeWriter;
