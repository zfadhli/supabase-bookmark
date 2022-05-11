import Head from 'next/head'
import { LinkPreview } from '@dhaiwat10/react-link-preview'
import { supabaseAdmin } from '../lib/supabase'

export default function Home({ bookmarks }) {
  console.log({ bookmarks })
  return (
    <>
      <Head>
        <title>Supabase Bookmark</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full min-h-screen antialiased font-inter text-slate-900 bg-slate-50'>
        <section className='section'>
          <div className='container text-center'>
            <h1 className='text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'>
              Supabase Bookmark
            </h1>
            <div className='pt-8 text-xl font-medium text-slate-500'>
              A bookmark application build with Next.js and Supabase.
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <div className='grid grid-cols-3 gap-8'>
              {bookmarks.map((bookmark) => (
                <div key={bookmark.id}>
                  <LinkPreview url={bookmark.url} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await supabaseAdmin.from('bookmark').select('*').order('id')
  console.log({ data })
  return {
    props: {
      bookmarks: data,
    },
  }
}
