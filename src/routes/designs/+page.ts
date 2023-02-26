import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch(`api/designs`);
  const designs = await response.json();

  return {
    designs
  };
};