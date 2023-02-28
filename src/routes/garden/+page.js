export const load = async ({ fetch }) => {
    const response = await fetch(`api/garden`);
    const posts = await response.json();
    return {
        posts
    };
};
