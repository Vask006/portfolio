import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {source}
    </ReactMarkdown>
  );
}
