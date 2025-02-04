import MarkdownIt from 'markdown-it';
import type {BlogData} from "../content.config.ts";
const parser = new MarkdownIt();

export const createExcerpt = (body: string, data: BlogData) => {
    if(data.excerpt) {
        return data.excerpt;
    }

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