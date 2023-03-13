import { writable, type Writable } from 'svelte/store';

const prefersDark: Writable<boolean> = writable(false);
const theme: Writable<string> = writable();

if (typeof localStorage !== 'undefined') {
  const themeSetting = window.localStorage.getItem('theme');
  theme.set(themeSetting);
} else {
  const themeSetting = prefersDark ? 'dark' : 'light';
  theme.set(themeSetting);
}

theme.subscribe(value => {
  if (typeof window !== 'undefined')
    window.localStorage.setItem("theme", value);
});

export { theme, prefersDark };
