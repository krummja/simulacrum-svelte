import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }: any) => {
  const design = await import(`../${params.slug}.md`);
  const { title } = design.metadata;
  const content = design.default;

  return {
    content,
    title,
  };
};