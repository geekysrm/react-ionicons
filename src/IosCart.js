import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCart = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M320 800c-26.496 0-48 21.504-48 48s21.504 48 48 48 48-21.504 48-48-21.504-48-48-48z M769 800c-26.496 0-48 21.504-48 48s21.504 48 48 48 48-21.504 48-48-21.504-48-48-48z M896 256l-649.646-64.708c-3.256-13.944-8.738-29.32-23.676-41.334-18.628-14.98-48.714-21.958-94.678-21.958v32.002c37.228 0 62.334 5.012 74.624 14.894 8.916 7.17 11.288 16.846 14.33 31.978l-0.048 0.008 84.104 467.276c4.826 28.844 14.388 50.418 26.582 65.972 14.494 18.494 33.474 27.87 56.408 27.87h480v-32h-480c-9.454 0-38.272 0.246-51.498-67.51l-10.858-60.32 542.356-96.17 32-256z"></path>
    </SVG>
  )
}


IosCart.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCart.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default IosCart
