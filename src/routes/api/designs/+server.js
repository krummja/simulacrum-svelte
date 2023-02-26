import { fetchDesignPages } from "$lib/utils";
import { json } from "@sveltejs/kit";
export const GET = async () => {
    const allPages = await fetchDesignPages();
    return json(allPages);
    // const sortedPages = allPages.sort((a, b) => {
    // })
};
