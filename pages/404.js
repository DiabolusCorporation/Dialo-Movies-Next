import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Page = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Dialo Movies</title>
          <meta
            name="description"
            content="Dialo Movies is a web platform where you can watch movies for free with subtitles on many languages so everyone from all around the world can enjoy in series"
          />
          <meta property="og:title" content="Page - Dialo Movies" />
          <meta
            property="og:description"
            content="Dialo Movies is a web platform where you can watch movies for free with subtitles on many languages so everyone from all around the world can enjoy in movies and series"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5ee843a4-88a7-4e68-9ad2-54516ac6ef7d/1351d939-a068-4042-ac9f-14a2cb7d9447?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <span className="page-fof">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('fof_KKSc57'),
            }}
          ></span>
        </span>
        <span className="page-notfound">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('notfound_JdnB2g'),
            }}
          ></span>
        </span>
        <Link href="/">
          <a className="page-link thq-button-filled thq-button-animated">
            <span className="page-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_EwCig6'),
                }}
              ></span>
            </span>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .page-fof {
            fill: var(--dl-color-theme-primary2);
            color: var(--dl-color-theme-primary2);
            opacity: 0.35;
            font-size: 200px;
            font-style: normal;
            text-align: center;
            font-weight: 800;
          }
          .page-notfound {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 25px;
          }
          .page-link {
            display: flex;
            margin-top: 10px;
            flex-direction: row;
            text-decoration: none;
          }
          .page-text {
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  )
}

export default Page

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
