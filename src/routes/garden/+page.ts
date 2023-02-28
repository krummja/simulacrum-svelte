import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch(`api/garden`);
  const posts = await response.json();

  return {
    posts
  };
};
