import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface MarkdownProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownProps) {
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Code blocks
      if (line.startsWith('```')) {
        const language = line.replace('```', '').trim() || 'text';
        const codeLines: string[] = [];
        i++; // Skip opening ```
        
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        
        const codeContent = codeLines.join('\n');
        elements.push(
          <div key={elements.length} className="mb-12">
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              customStyle={{
                margin: 0,
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                lineHeight: '1.5',
              }}
              showLineNumbers={true}
              wrapLines={true}
            >
              {codeContent}
            </SyntaxHighlighter>
          </div>
        );
        i++; // Skip closing ```
        continue;
      }
      
      // Headers
      if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={elements.length}
            className="text-xl font-semibold text-foreground mt-12 mb-6"
          >
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={elements.length}
            className="text-2xl font-bold text-foreground mt-16 mb-6"
            style={{ marginTop: '4rem' }}
          >
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        elements.push(
          <h1
            key={elements.length}
            className="text-3xl font-bold text-foreground mt-20 mb-10"
          >
            {line.replace('# ', '')}
          </h1>
        );
      }
      // Inline code
      else if (line.includes('`')) {
        const parts = line.split('`');
        elements.push(
          <p
            key={elements.length}
            className="mb-4 text-muted-foreground leading-relaxed"
          >
            {parts.map((part, partIndex) =>
              partIndex % 2 === 1 ? (
                <code key={partIndex} className="bg-muted px-2 py-1 rounded text-sm font-mono">
                  {part}
                </code>
              ) : (
                part
              ),
            )}
          </p>
        );
      }
      // Lists
      else if (line.startsWith('- **')) {
        const content = line.replace('- **', '').replace('**', '');
        const [bold, rest] = content.split('** ');
        elements.push(
          <li key={elements.length} className="mb-2 ml-4">
            <strong className="text-foreground">{bold}</strong> {rest}
          </li>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={elements.length} className="mb-2 text-muted-foreground ml-4 list-disc">
            {line.replace('- ', '')}
          </li>
        );
      }
      // Numbered lists
      else if (/^\d+\./.test(line)) {
        elements.push(
          <li key={elements.length} className="mb-2 text-muted-foreground ml-4 list-decimal">
            {line.replace(/^\d+\.\s/, '')}
          </li>
        );
      }
      // Bold text
      else if (line.includes('**')) {
        const parts = line.split('**');
        elements.push(
          <p
            key={elements.length}
            className="mb-4 text-muted-foreground leading-relaxed"
          >
            {parts.map((part, partIndex) =>
              partIndex % 2 === 1 ? (
                <strong key={partIndex} className="text-foreground">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </p>
        );
      }
      // Links
      else if (line.includes('[') && line.includes('](')) {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = line.split(linkRegex);
        elements.push(
          <p
            key={elements.length}
            className="mb-4 text-muted-foreground leading-relaxed"
          >
            {parts.map((part, partIndex) => {
              if (partIndex % 3 === 1) {
                // This is link text
                return (
                  <a
                    key={partIndex}
                    href={parts[partIndex + 1]}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {part}
                  </a>
                );
              } else if (partIndex % 3 === 2) {
                // This is the URL, skip it
                return null;
              } else {
                // Regular text
                return part;
              }
            })}
          </p>
        );
      }
      // Regular paragraphs
      else if (line.trim() && !line.startsWith('#')) {
        elements.push(
          <p
            key={elements.length}
            className="mb-4 text-muted-foreground leading-relaxed"
          >
            {line}
          </p>
        );
      }
      
      i++;
    }
    
    return elements;
  };

  return <div className="prose prose-lg max-w-none space-y-6">{formatContent(content)}</div>;
}
