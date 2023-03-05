import type { PageLoad } from "./$types";
import type { LoadEvent } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }: LoadEvent) => {
  console.log(params.slug);

  // const response = await fetch('/api/tags', {
  //   method: 'POST',
  //   body: JSON.stringify({ 'test': 'foo' }),
  //   // headers: {
  //   //   'Content-Type': 'text/html',
  //   // },
  // });

  // const result = await response.json();
  // return result;
};
