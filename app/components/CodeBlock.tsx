"use client"
import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import Copy from "./icons/Copy";
import Copied from "./icons/Copied";
import { firaCode } from "./fonts/fonts";

interface CodeBlockProps {
  language?: string;
  title?: string;
  children?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  language="javascript", // changed the lang from js
  children = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the button after 2 seconds
  };

  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-md">
      <div className="flex justify-between items-center p-3 bg-gray-900 border-b border-gray-700">
        <span className="text-sm font-medium">{language || "Code"}</span>
        <button
          onClick={handleCopy}
          className="p-1 rounded hover:bg-gray-700 transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? <Copied /> : <Copy />}
        </button>
      </div>
      <Highlight
        code={children.trim()}
        language={language}
        theme={themes.nightOwl}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`p-4 ${className} ${firaCode.className} text-sm whitespace-pre-wrap overflow-x-auto leading-relaxed dark:bg-black`}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token, key });
                    return (
                      <span key={key} {...tokenProps} className="text-xs" />
                    );
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
