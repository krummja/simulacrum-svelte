import type { PageLoad } from "./$types";
import type { LoadEvent } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch, params }: LoadEvent) => {
  const response = await fetch(`api/garden`);
  const posts = await response.json();
  const allTags = [];

  for (const post of posts) {
    allTags.push(...post.meta.tags);
  }

  const tags = [...new Set(allTags)];

  return {
    posts,
    tags,
  };
};
