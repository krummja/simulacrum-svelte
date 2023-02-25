import { writable } from 'svelte/store';

function updateLinks()
{
  const { subscribe, set, update } = writable(0);
  return {};
}

export const update = updateLinks();
