export const load = async ({ params }) => {
    const design = await import(`../${params.slug}.md`);
    const { title } = design.metadata;
    const content = design.default;
    return {
        content,
        title,
    };
};
