import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdFlower = props => {
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
      <path d="M810.2 512c50.4-23.8 85.8-74.2 85.8-133.8 0-82-67.2-148.6-150-148.6-31.8 0-60.6 9.6-85.2 26.2l1.2-11.2c0-82-67.2-148.6-150-148.6s-150 66.6-150 148.6l1.2 11.2c-24-16.6-53.4-26.2-85.2-26.2-82.8 0-150 66.6-150 148.6 0 59.4 35.4 110 85.8 133.8-50.4 23.8-85.8 74.2-85.8 133.8 0 82 67.2 148.6 150 148.6 31.8 0 60.6-9.6 85.2-26.2l-1.2 11.2c0 82 67.2 148.6 150 148.6s150-66.6 150-148.6l-1.2-11.2c24 16.6 53.4 26.2 85.2 26.2 82.8 0 150-66.6 150-148.6 0-59.6-35.4-110-85.8-133.8zM512 660.6c-82.8 0-150-66.6-150-148.6s67.2-148.6 150-148.6 150 66.6 150 148.6c0 82-67.2 148.6-150 148.6z"></path>
    </SVG>
  )
}


MdFlower.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdFlower.propTypes = {
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


export default MdFlower
