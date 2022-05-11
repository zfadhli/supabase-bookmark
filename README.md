# Supabase Bookmark

A bookmark application build with Next.js and Supabase. Deployed on [supabase-bookmark.vercel.app](http://supabase-bookmark.vercel.app/).

## Tech Stacks

- Next.js
- Tailwind CSS
- Supabase
- LinkPreview ([@dhaiwat10/react-link-preview](https://github.com/dhaiwat10/react-link-preview))

## How it works

This application fetches data from supabase and rendered it statically using Next.js on-demand ISR (incremental static regeneration) features. The application flow are:

1. Insert data from the supabase admin panel
2. Supabase hooks will trigger and send the information to '/api/revalidate'
3. on-demand ISR will regenerate new pages

## Getting Started

```bash
pnpx degit zfadhli/supabase-bookmark
pnpm i
pnpm run dev
```
