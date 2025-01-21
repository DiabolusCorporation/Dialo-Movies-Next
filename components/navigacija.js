import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navigacija = (props) => {
  const translate = useTranslations()
  return (
    <>
      <header className={`navigacija-container1 ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navigacija-navbar-interactive">
          <Link href="/">
            <a className="navigacija-link">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navigacija-image1"
              />
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="navigacija-desktop-menu">
            <div className="navigacija-container2">
              <nav className="navigacija-links"></nav>
            </div>
            <div className="navigacija-buttons1">
              <button className="navigacija-action11 thq-button-filled thq-button-animated">
                <span className="navigacija-text1">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navigacija-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_KKzpGd'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="navigacija-action21 thq-button-outline thq-button-animated">
                <span className="navigacija-text2">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navigacija-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MsbkAw'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navigacija-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigacija-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navigacija-mobile-menu">
            <div className="navigacija-nav">
              <div className="navigacija-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navigacija-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navigacija-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigacija-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button className="navigacija-action22">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('action2_k1EtjQ'),
                }}
              ></span>
            </button>
            <div className="navigacija-buttons2"></div>
            <button className="navigacija-action12">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('action1_gbhfEx'),
                }}
              ></span>
            </button>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navigacija-container1 {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .navigacija-navbar-interactive {
            width: 1473px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .navigacija-link {
            display: contents;
          }
          .navigacija-image1 {
            height: 3rem;
            text-decoration: none;
          }
          .navigacija-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navigacija-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .navigacija-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navigacija-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigacija-action11 {
            display: flex;
            flex-direction: row;
          }
          .navigacija-action21 {
            display: flex;
            flex-direction: row;
          }
          .navigacija-burger-menu {
            display: none;
          }
          .navigacija-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigacija-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .navigacija-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigacija-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigacija-logo {
            height: 3rem;
          }
          .navigacija-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigacija-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigacija-action22 {
            transition: 0.3s;
          }
          .navigacija-action22:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .navigacija-buttons2 {
            gap: var(--dl-space-space-twounits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
          }
          .navigacija-action12 {
            transition: 0.3s;
          }
          .navigacija-action12:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .navigacija-text3 {
            display: inline-block;
          }
          .navigacija-text4 {
            display: inline-block;
          }
          .navigacija-text5 {
            display: inline-block;
          }
          .navigacijaroot-class-name {
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .navigacijaroot-class-name1 {
            background-color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 991px) {
            .navigacija-container1 {
              z-index: 999;
            }
            .navigacija-mobile-menu {
              background-color: var(--dl-color-theme-neutral-dark);
            }
            .navigacija-icon3 {
              fill: #d9d9d9;
            }
            .navigacija-action22 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .navigacija-buttons2 {
              margin-top: var(--dl-space-space-unit);
              border-width: 0px;
            }
            .navigacija-action12 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
          }
          @media (max-width: 767px) {
            .navigacija-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navigacija-desktop-menu {
              display: none;
            }
            .navigacija-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navigacija-icon1 {
              fill: #d9d9d9;
            }
            .navigacija-mobile-menu {
              background-color: var(--dl-color-theme-neutral-dark);
            }
            .navigacija-icon3 {
              fill: #d9d9d9;
            }
            .navigacija-action22 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .navigacija-buttons2 {
              margin-top: var(--dl-space-space-unit);
              border-width: 0px;
            }
            .navigacija-action12 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
          }
          @media (max-width: 479px) {
            .navigacija-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navigacija-text1 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .navigacija-text2 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .navigacija-mobile-menu {
              padding: var(--dl-space-space-unit);
              background-color: var(--dl-color-theme-neutral-dark);
            }
            .navigacija-nav {
              background-color: var(--dl-color-theme-neutral-dark);
            }
            .navigacija-top {
              background-color: var(--dl-color-theme-neutral-dark);
            }
            .navigacija-icon3 {
              fill: var(--dl-color-theme-accent1);
            }
            .navigacija-action22 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .navigacija-buttons2 {
              margin-top: var(--dl-space-space-unit);
              border-width: 0px;
            }
            .navigacija-action12 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .navigacija-text5 {
              color: var(--dl-color-theme-accent1);
            }
          }
        `}
      </style>
    </>
  )
}

Navigacija.defaultProps = {
  logoAlt: 'logo',
  action2: undefined,
  rootClassName: '',
  logoSrc: '/dialo_logo_fixed-1500h.png',
  action1: undefined,
  series: undefined,
}

Navigacija.propTypes = {
  logoAlt: PropTypes.string,
  action2: PropTypes.element,
  rootClassName: PropTypes.string,
  logoSrc: PropTypes.string,
  action1: PropTypes.element,
  series: PropTypes.element,
}

export default Navigacija
