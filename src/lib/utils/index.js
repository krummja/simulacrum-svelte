export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);
    const allPosts = await Promise.all(iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const postPath = path.slice(11, -3);
        return {
            meta: metadata,
            path: postPath,
        };
    }));
    return allPosts;
};
export const fetchDesignPages = async () => {
    const allDesignPages = import.meta.glob('/src/routes/designs/*.md');
    const iterableDesignPages = Object.entries(allDesignPages);
    const allPages = await Promise.all(iterableDesignPages.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const pagePath = path.slice(11, -3);
        return {
            meta: metadata,
            path: pagePath,
        };
    }));
    return allPages;
};
