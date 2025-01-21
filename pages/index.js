import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navigacija from '../components/navigacija'
import Banner3 from '../components/banner3'
import MovieTamplate from '../components/movie-tamplate'
import Footer14 from '../components/footer14'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>{translate.raw('static_DDZS8P')}</title>
          <meta name="description" content={translate.raw('static_hRvvy_')} />
          <meta property="og:title" content={translate.raw('static_DDZS8P')} />
          <meta
            property="og:description"
            content="Dialo Movies is a web platform where you can watch movies for free with subtitles on many languages so everyone from all around the world can enjoy in movies and series"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5ee843a4-88a7-4e68-9ad2-54516ac6ef7d/9c53c0aa-66ab-4ed6-934f-bbe35c70194b?org_if_sml=1&amp;force_format=original"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <Navigacija
          series={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_g-48zA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_leIC6I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K0B8aL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          logoSrc="/dialo_logo_fixed-1500h.png"
          rootClassName="navigacijaroot-class-name"
        ></Navigacija>
        <Banner3
          action1={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FjoidS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          image1Src="/banner-1500w.jpg"
        ></Banner3>
        <div className="home-container2"></div>
        <span className="home-text14">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_4YH9ZX'),
            }}
          ></span>
        </span>
        <div className="home-container3"></div>
        <div className="home-container4">
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7tZKm_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0e9J97'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/fridaythe13th-300h.jpg"
            rootClassName="movie-tamplateroot-class-name8"
          ></MovieTamplate>
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2Bd4sJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qH_f3O'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/stravauulicibrestola-200w.jpg"
            rootClassName="movie-tamplateroot-class-name9"
          ></MovieTamplate>
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GszLwr'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KV_BtX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/halloween-300h.jpg"
            rootClassName="movie-tamplateroot-class-name10"
          ></MovieTamplate>
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__f9dFC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZYZHH5'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/theprowler-300h.jpg"
            rootClassName="movie-tamplateroot-class-name11"
          ></MovieTamplate>
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KENKKL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__eMMzI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/alien-300h.jpg"
            rootClassName="movie-tamplateroot-class-name12"
          ></MovieTamplate>
        </div>
        <div className="home-container5"></div>
        <span className="home-text25">
          <span
            dangerouslySetInnerHTML={{
              __html: translate.raw('text_skHo4C'),
            }}
          ></span>
        </span>
        <div className="home-container6"></div>
        <div className="home-container7">
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RCsE5N'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Ky0qVr'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/squidgame-300h.jpg"
            rootClassName="movie-tamplateroot-class-name3"
          ></MovieTamplate>
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fyEQvX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dZw8r_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/breakingbad-200w.jpg"
            rootClassName="movie-tamplateroot-class-name5"
          ></MovieTamplate>
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_i43VgP'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NkGImY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/thewalkingdead-300h.jpg"
            rootClassName="movie-tamplateroot-class-name4"
          ></MovieTamplate>
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ktrOsk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Ng7YT2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/avatar-300h.jpg"
            rootClassName="movie-tamplateroot-class-name6"
          ></MovieTamplate>
          <MovieTamplate
            text={
              <Fragment>
                <span className="home-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rhOxky'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QKIluj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            imageSrc="/Covers/got-300h.jpg"
            rootClassName="movie-tamplateroot-class-name7"
          ></MovieTamplate>
        </div>
        <div className="home-container8"></div>
        <Footer14
          link6={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ikVRlA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ry5Q3R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TdFKm2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X2m_wO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pGjJBe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          logoSrc="/dialo_logo_fixed-1500h.png"
          content1={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cdze1a'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1L86k4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          copyright={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jWUNmR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          column2Title={
            <Fragment>
              <span className="home-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2XY-Yt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer14>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .home-text10 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
            text-transform: uppercase;
          }
          .home-container2 {
            width: 100%;
            height: 20px;
            display: flex;
            align-items: flex-start;
          }
          .home-text14 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 25px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
            line-height: 1.15;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container3 {
            width: 100%;
            height: 25px;
            display: flex;
            align-items: flex-start;
          }
          .home-container4 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 260px;
            display: grid;
            place-items: center;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }
          .home-text15 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text16 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text17 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
            font-size: 14px;
          }
          .home-text18 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text19 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text20 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text21 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text22 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text23 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text24 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-container5 {
            width: 100%;
            height: 14px;
            display: flex;
            align-items: flex-start;
          }
          .home-text25 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .home-container6 {
            width: 100%;
            height: 25px;
            display: flex;
            align-items: flex-start;
          }
          .home-container7 {
            gap: 0;
            width: 100%;
            height: 260px;
            display: grid;
            place-items: center;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }
          .home-text26 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text27 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text28 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text29 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text30 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text31 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text32 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text33 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text34 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text35 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-container8 {
            width: 100%;
            height: 23px;
            display: flex;
            align-items: flex-start;
          }
          .home-text36 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text37 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text38 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text42 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text43 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .home-text44 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          @media (max-width: 991px) {
            .home-container4 {
              height: 533px;
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-container7 {
              gap: var(--dl-space-space-halfunit);
              height: 550px;
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .home-container4 {
              height: 822px;
              grid-template-columns: 1fr 1fr;
            }
            .home-container7 {
              height: 840px;
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .home-container4 {
              height: 1421px;
              grid-template-columns: 1fr;
            }
            .home-container7 {
              height: 1362px;
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

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
