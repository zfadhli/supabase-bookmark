import Head from 'next/head'
import { LinkPreview } from '@dhaiwat10/react-link-preview'
import { supabaseAdmin } from '../lib/supabase'

export default function Home({ bookmarks }) {
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
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {bookmarks.map((bookmark) => (
                <div key={bookmark.id}>
                  <LinkPreview url={bookmark.url} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className='py-8 text-center'>
          <div className='text-sm'>
            Build with ❤ by{' '}
            <a className='font-bold' href='https://github.com/zfadhli'>
              zfadhli
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await supabaseAdmin.from('bookmark').select('*').order('id')
  return {
    props: {
      bookmarks: data,
    },
  }
}
