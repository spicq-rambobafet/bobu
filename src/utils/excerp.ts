import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

// https://www.paulie.dev/posts/2023/09/how-to-create-excerpts-with-astro/
export const createExcerpt = (body: string) => {
    const full = parser
        .render(body)
        .split('\n')
        .slice(0, 6)
        .map((str) => {
            return str.replace(/<\/?[^>]+(>|$)/g, '').split('\n');
        })
        .flat()
        .join(' ');


    if (full.length <= 140) {
        return full;
    }

    return `${full.substring(0, 140)}...`
};