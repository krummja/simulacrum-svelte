import type { RequestHandler } from "./$types";

import { fetchMarkdownPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const allPosts = await fetchMarkdownPosts();
  return json(allPosts);
}

export const POST: RequestHandler = async ({ request }) => {
  // const allPosts = await fetchMarkdownPosts();

  const data = await request.json();
  return json({ item: 10, ...data });
};
