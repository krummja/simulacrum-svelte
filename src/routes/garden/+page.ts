import type { PageLoad } from "./$types";
import type { LoadEvent } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch }: LoadEvent) => {
  const response = await fetch('/api/garden');
  const posts = await response.json();

  return {
    posts
  };
};
