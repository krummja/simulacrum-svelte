import type { PageLoad } from './$types';
import type { LoadEvent } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }: LoadEvent) => {
  const post = await import(`../${params.slug}.md`);

  const { title, date, tags } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
    tags,
  };
};
