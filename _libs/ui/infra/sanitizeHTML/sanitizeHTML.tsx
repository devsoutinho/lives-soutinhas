import sanitizeHTMLModule from "sanitize-html";

export default function sanitizeHTML(htmlString: string) {
  return sanitizeHTMLModule(htmlString, {
    allowedTags: sanitizeHTMLModule.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ]
    },
  });
}