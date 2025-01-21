import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MovieTamplate = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`movie-tamplate-container1 ${props.rootClassName} `}>
        <div className="movie-tamplate-container2">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            loading="eager"
            className="movie-tamplate-image"
          />
          <span className="movie-tamplate-text1">
            {props.text ?? (
              <Fragment>
                <span className="movie-tamplate-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5bK2cB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <span className="movie-tamplate-text2">
            {props.text1 ?? (
              <Fragment>
                <span className="movie-tamplate-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OmG8m1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .movie-tamplate-container1 {
            width: 234px;
            height: 262px;
            display: flex;
            position: relative;
            align-items: center;
            border-color: rgba(25, 24, 24, 0);
            border-width: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .movie-tamplate-container2 {
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-theme-accent1);
            border-style: solid;
            border-width: 3px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: #6d2027;
          }
          .movie-tamplate-image {
            width: 75%;
            height: 75%;
            display: flex;
            align-self: center;
            object-fit: fill;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: 0px;
          }
          .movie-tamplate-image:hover {
            width: 90%;
            height: 82%;
          }
          .movie-tamplate-text1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 16px;
            font-style: normal;
            margin-top: 5px;
            text-align: center;
            font-weight: 600;
          }
          .movie-tamplate-text2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 13px;
            text-align: center;
          }
          .movie-tamplate-text3 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
          .movie-tamplate-text4 {
            color: var(--dl-color-theme-accent1);
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

MovieTamplate.defaultProps = {
  text: undefined,
  text1: undefined,
  imageSrc: '/Covers/fridaythe13th-300h.jpg',
  imageAlt: 'image',
  rootClassName: '',
}

MovieTamplate.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MovieTamplate
