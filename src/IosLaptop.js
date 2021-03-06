import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosLaptop = props => {
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
      <path d="M896 735v-476.8c0-18.8-15.8-34.2-34.4-34.2h-699.2c-18.6 0-34.4 15.2-34.4 34.2v476.8h-96.2v31.2c0 6.2 62 33.8 104.2 33.8h752c48.6 0 104-28.2 104.2-33v-32h-96.2zM512 240c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8c0-4.4 3.6-8 8-8zM160 272.4h704v430.6h-704v-430.6zM596.6 751c0 0-158.6 0-169.2 0s-19.4-12-19.4-15h208c0 3-6 15-19.4 15z"></path>
    </SVG>
  )
}


IosLaptop.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLaptop.propTypes = {
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


export default IosLaptop
