import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigacija from '../../components/navigacija'
import Footer14 from '../../components/footer14'

const DMCA = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="dmca-container1">
        <Head>
          <title>DMCA - Dialo Movies</title>
          <meta name="description" content={translate.raw('static_XnO0Si')} />
          <meta property="og:title" content="DMCA - Dialo Movies" />
          <meta
            property="og:description"
            content={translate.raw('static_axCWqd')}
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5ee843a4-88a7-4e68-9ad2-54516ac6ef7d/1351d939-a068-4042-ac9f-14a2cb7d9447?org_if_sml=1&amp;force_format=original"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <Navigacija
          series={
            <Fragment>
              <span className="dmca-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OWExW1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="dmca-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hDrRw8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="dmca-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jp3jru'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navigacijaroot-class-name1"
        ></Navigacija>
        <span className="dmca-header">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_r6Q4_L'),
            }}
          ></span>
        </span>
        <span className="dmca-text13">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_YrD9hh'),
            }}
          ></span>
        </span>
        <div>
          <div className="dmca-container3">
            <Script
              html={`<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://dialo-movie.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>`}
            ></Script>
          </div>
        </div>
        <Footer14
          link6={
            <Fragment>
              <span className="dmca-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XvP9ea'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="dmca-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Owfuk1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="dmca-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_idh3Nl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="dmca-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8uBtj_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="dmca-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_u_pb2x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="dmca-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dfOgf9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="dmca-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zIjIVJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          copyright={
            <Fragment>
              <span className="dmca-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bpgf_w'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="dmca-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gERZVO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer14root-class-name"
        ></Footer14>
      </div>
      <style jsx>
        {`
          .dmca-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .dmca-text10 {
            display: inline-block;
          }
          .dmca-text11 {
            display: inline-block;
          }
          .dmca-text12 {
            display: inline-block;
          }
          .dmca-header {
            font-size: 30px;
            align-self: flex-start;
            margin-top: 20px;
            text-align: center;
            margin-left: 50px;
          }
          .dmca-text13 {
            color: var(--dl-color-theme-accent1);
            margin-top: 30px;
          }
          .dmca-container3 {
            display: contents;
          }
          .dmca-text14 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .dmca-text15 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .dmca-text16 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .dmca-text17 {
            display: inline-block;
          }
          .dmca-text18 {
            display: inline-block;
          }
          .dmca-text19 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .dmca-text20 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .dmca-text21 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .dmca-text22 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          @media (max-width: 479px) {
            .dmca-text10 {
              color: var(--dl-color-theme-accent1);
            }
          }
        `}
      </style>
    </>
  )
}

export default DMCA

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
