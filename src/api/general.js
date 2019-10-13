import marked from "marked";

export function getMarkdownAsRawHTML(input) {
    let rawMarkup = marked(input);
    return {__html: rawMarkup};
}