import React from "react";
import { parseMarkdownToHTML } from "../../parsers/parseMarkdownToHTML/parseMarkdownToHTML";
import sanitizeHTML from "../../infra/sanitizeHTML/sanitizeHTML";

type Tag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | "span";

interface TextProps {
  // Autocomplete de String mas que permite passar algo desconhecido
  tag?: Tag | (string & {});
  /** If you want to make the component enable markdown renderization set this as true */
  markdown?: boolean;
  children: React.ReactNode;
}
export function Text({ tag = "p", markdown, children }: TextProps) {
  const Tag = tag as Tag;
  const markdownChildren = children as string;

  const isMarkdown = markdown;
  const isCustomRender = isMarkdown;
  
  if(isCustomRender) {
    const parsedMarkdown = parseMarkdownToHTML({
      markdown: markdownChildren,
      singleLine: true,
    });
    console.log("parsedMarkdown", parsedMarkdown);
    const parsedAndSanitizedMarkdown = sanitizeHTML(parsedMarkdown);
    console.log("parsedAndSanitizedMarkdown", parsedAndSanitizedMarkdown);
    return (
      <Tag
        dangerouslySetInnerHTML={{ __html: parsedAndSanitizedMarkdown }}
      />
    );
  }
  
  return (
    <Tag>
      {!isCustomRender && children}
    </Tag>
  );
}