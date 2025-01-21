import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="banner3-container1 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="banner3-image thq-img-ratio-16-9"
        />
        <div className="banner3-container2"></div>
        <div className="banner3-max-width thq-section-max-width">
          <div className="banner3-container3"></div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="banner3-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hubpLg'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner3-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner3-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            box-shadow: 5px 5px 10px 3px rgba(249, 237, 237, 0.51);
            border-radius: var(--dl-radius-radius-radius2);
          }
          .banner3-container2 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .banner3-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner3-container3 {
            gap: var(--dl-space-space-halfunit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner3-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner3.defaultProps = {
  image1Alt: 'Adventure banner image',
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  action1: undefined,
}

Banner3.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.element,
}

export default Banner3
