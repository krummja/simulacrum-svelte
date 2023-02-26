export const load = async ({ fetch }) => {
    const response = await fetch(`api/designs`);
    const designs = await response.json();
    return {
        designs
    };
};
