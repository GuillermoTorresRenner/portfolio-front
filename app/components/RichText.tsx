import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface RichTextProps {
  content?: string;
  className?: string;
}

const RichText = ({ content, className = "" }: RichTextProps) => {
  if (!content) {
    return null;
  }

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Personalizar estilos de elementos Markdown
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-4 gradient-text-primary">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mb-3 gradient-text-ocean">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-2 gradient-text-nature">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mb-2 gradient-text-cosmic">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-base font-semibold mb-2 gradient-text-sunset">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-sm font-semibold mb-2 gradient-text-fire">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-200">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="text-gray-300">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 py-2 italic text-gray-400 my-6 bg-blue-500/5 rounded-r-lg">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            return isInline ? (
              <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700 shadow-lg">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="gradient-text-neon hover:underline transition-all duration-300 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-lg shadow-lg my-4 max-w-full h-auto border border-gray-700"
            />
          ),
          hr: () => (
            <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 bg-gray-700 text-left font-semibold text-white border-b border-gray-600">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-gray-300 border-b border-gray-700">
              {children}
            </td>
          ),
          // Soporte para GitHub Flavored Markdown
          input: ({ type, checked, disabled }) => {
            if (type === "checkbox") {
              return (
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={disabled}
                  className="mr-2 accent-blue-500"
                  readOnly
                />
              );
            }
            return null;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default RichText;
