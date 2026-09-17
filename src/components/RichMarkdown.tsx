import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Maximize2, X, ExternalLink } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

export function createHeadingSlug(text: string): string {
  const cleaned = text
    .toLowerCase()
    .trim()
    .replace(/[^\w\u1780-\u17FF0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return cleaned || 'heading';
}

export function extractNodeText(node: React.ReactNode): string {
  if (!node) return '';
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractNodeText).join('');
  }
  if (React.isValidElement(node) && (node.props as any)?.children) {
    return extractNodeText((node.props as any).children);
  }
  return '';
}

interface RichMarkdownProps {
  content: string;
  onRunCode?: (code: string) => void;
  className?: string;
  inline?: boolean;
}

export const RichMarkdown: React.FC<RichMarkdownProps> = ({
  content,
  onRunCode,
  className = '',
  inline = false
}) => {
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; alt?: string } | null>(null);

  if (inline) {
    return (
      <span className={`inline font-sans ${className}`}>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => <span className="inline">{children}</span>,
            strong: ({ children }) => (
              <strong className="font-semibold text-slate-900 dark:text-white mx-0.5">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-slate-800 dark:text-slate-200">{children}</em>
            ),
            code: ({ children }) => (
              <code className="px-1.5 py-0.5 mx-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono text-[11px] sm:text-xs border border-blue-200 dark:border-blue-800/60 font-medium">
                {children}
              </code>
            ),
            a: ({ href, children }) => {
              const isExternal = href?.startsWith('http://') || href?.startsWith('https://');
              return (
                <a
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="app-link inline-flex items-center gap-0.5 font-semibold mx-0.5 cursor-pointer"
                >
                  <span>{children}</span>
                  {isExternal && <ExternalLink className="w-2.5 h-2.5 opacity-70 inline-block ml-0.5" />}
                </a>
              );
            }
          }}
        >
          {content}
        </Markdown>
      </span>
    );
  }

  return (
    <div className={`prose dark:prose-invert max-w-none font-sans text-slate-800 dark:text-slate-300 ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const isExternal = href?.startsWith('http://') || href?.startsWith('https://');
            return (
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="app-link inline-flex items-center gap-1 font-semibold mx-0.5 cursor-pointer"
              >
                <span>{children}</span>
                {isExternal && <ExternalLink className="w-3 h-3 opacity-75 inline-block" />}
              </a>
            );
          },
          h1: ({ children }) => {
            const text = extractNodeText(children);
            const id = createHeadingSlug(text);
            return (
              <h1 id={id} className="scroll-mt-24 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-7 mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
                {children}
              </h1>
            );
          },
          h2: ({ children }) => {
            const text = extractNodeText(children);
            const id = createHeadingSlug(text);
            return (
              <h2 id={id} className="scroll-mt-24 text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3 border-b border-slate-200 dark:border-slate-800/60 pb-2 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 inline-block"></span>
                <span>{children}</span>
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = extractNodeText(children);
            const id = createHeadingSlug(text);
            return (
              <h3 id={id} className="scroll-mt-24 text-base sm:text-lg font-bold text-blue-700 dark:text-blue-300 mt-6 mb-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800/40 pb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 inline-block flex-shrink-0"></span>
                <span>{children}</span>
              </h3>
            );
          },
          h4: ({ children }) => {
            const text = extractNodeText(children);
            const id = createHeadingSlug(text);
            return (
              <h4 id={id} className="scroll-mt-24 text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-300 mt-4 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-xs bg-indigo-600 dark:bg-indigo-400 inline-block flex-shrink-0"></span>
                <span>{children}</span>
              </h4>
            );
          },
          p: (props: any) => {
            const { children, node } = props;
            const hasBlockOrImage =
              node?.children?.some(
                (child: any) =>
                  child.type === 'element' &&
                  (child.tagName === 'img' || child.tagName === 'figure' || child.tagName === 'div')
              ) ||
              React.Children.toArray(children).some(
                (child: any) =>
                  React.isValidElement(child) &&
                  (child.type === 'img' || (child.props as any)?.src !== undefined)
              );

            if (hasBlockOrImage) {
              return (
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                  {children}
                </div>
              );
            }
            return (
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                {children}
              </p>
            );
          },
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900 dark:text-white tracking-wide">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-800 dark:text-slate-200">
              {children}
            </em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 space-y-1.5 my-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 space-y-1.5 my-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed pl-1 text-slate-700 dark:text-slate-300">
              {children}
            </li>
          ),
          hr: () => (
            <hr className="my-6 border-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
          ),
          blockquote: ({ children }) => {
            const rawText = extractNodeText(children).toLowerCase();
            let styleClass = 'bg-blue-50/80 dark:bg-blue-950/30 border-blue-600 dark:border-blue-500 text-slate-800 dark:text-slate-200';

            if (rawText.includes('⚠️') || rawText.includes('ប្រយ័ត្ន') || rawText.includes('warning') || rawText.includes('caution')) {
              styleClass = 'bg-amber-50 dark:bg-amber-950/35 border-amber-500 dark:border-amber-400 text-amber-950 dark:text-amber-100';
            } else if (rawText.includes('💡') || rawText.includes('ព័ត៌មាន') || rawText.includes('info') || rawText.includes('note')) {
              styleClass = 'bg-sky-50 dark:bg-sky-950/35 border-sky-500 dark:border-sky-400 text-sky-950 dark:text-sky-100';
            } else if (rawText.includes('❌') || rawText.includes('កំហុស') || rawText.includes('danger') || rawText.includes('error')) {
              styleClass = 'bg-rose-50 dark:bg-rose-950/35 border-rose-500 dark:border-rose-400 text-rose-950 dark:text-rose-100';
            } else if (rawText.includes('✅') || rawText.includes('គន្លឹះ') || rawText.includes('ជោគជ័យ') || rawText.includes('success')) {
              styleClass = 'bg-emerald-50 dark:bg-emerald-950/35 border-emerald-500 dark:border-emerald-400 text-emerald-950 dark:text-emerald-100';
            }

            return (
              <blockquote className={`p-4 my-4 rounded-xl border-l-4 text-xs sm:text-sm leading-relaxed shadow-2xs ${styleClass}`}>
                {children}
              </blockquote>
            );
          },
          table: ({ children }) => (
            <div className="my-5 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 border-b-2 border-slate-200 dark:border-slate-700 font-bold tracking-wide">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-blue-50/40 dark:hover:bg-slate-800/60 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3.5 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 whitespace-nowrap">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-slate-700 dark:text-slate-300 align-top">
              {children}
            </td>
          ),
          code: ({ className: codeClassName, children, ...props }) => {
            const isBlock = String(children).includes('\n') || (codeClassName && codeClassName.startsWith('language-'));
            const codeString = String(children).replace(/\n$/, '');

            if (!isBlock) {
              return (
                <code
                  className="px-1.5 py-0.5 mx-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono text-[11px] sm:text-xs border border-blue-200 dark:border-blue-800/60 font-medium"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            const langMatch = codeClassName ? /language-([a-zA-Z0-9_-]+)/.exec(codeClassName) : null;
            const language = langMatch ? langMatch[1] : undefined;

            return (
              <div className="my-4 not-prose">
                <CodeBlock
                  code={codeString}
                  language={language}
                  onRun={onRunCode}
                  showLineNumbers={true}
                />
              </div>
            );
          },
          img: ({ src, alt }) => {
            if (!src) return null;
            return (
              <figure className="my-5 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-md transition-shadow group">
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveModalImage({ src, alt: typeof alt === 'string' ? alt : undefined })}
                >
                  <img
                    src={src}
                    alt={typeof alt === 'string' ? alt : ''}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalImage({ src, alt: typeof alt === 'string' ? alt : undefined });
                    }}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors opacity-80 group-hover:opacity-100"
                    title="ពង្រីករូបភាព"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
                {alt && (
                  <figcaption className="p-3 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                    <span className="font-semibold text-slate-900 dark:text-white">រូបភាព៖</span>
                    <span>{alt}</span>
                  </figcaption>
                )}
              </figure>
            );
          }
        }}
      >
        {content}
      </Markdown>

      {/* Lightbox / Zoom Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.alt || ''}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-all shadow-md"
                title="បិទ (Close)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {activeModalImage.alt && (
              <div className="p-4 text-white text-xs sm:text-sm bg-slate-900 border-t border-slate-800 font-medium">
                {activeModalImage.alt}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
