# Astro SSR on Node (InstaPods example)

Minimal Astro 5 site using `@astrojs/node` in `standalone` mode.

- `/` renders on every request (prints the request time)
- `/api/time` is a JSON API route

`npm run build` emits `dist/server/entry.mjs`; `node dist/server/entry.mjs` serves it. The server reads `HOST` and `PORT` from the environment.
