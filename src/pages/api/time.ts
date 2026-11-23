import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ now: new Date().toISOString(), node: process.version }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
