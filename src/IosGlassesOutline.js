import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosGlassesOutline = props => {
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
      <path d="M930.8 494c-4.4-44-24.8-86-57.8-116.8-34.2-31.8-78.6-49.4-125.4-49.4-83 0-154.6 54.8-177 134-14-14-37-23.4-58.6-23.4s-44.6 9.4-58.6 23.4c-22.4-79.2-94-134-177-134-46.6 0-91.2 17.4-125.4 49.2-33 31-53.4 73-57.8 117h-29.2v36h29.2c4.4 44 24.8 86 57.8 116.8 34.2 31.8 78.6 49.4 125.4 49.4 101.6 0 184.2-82.4 184.2-184 0-0.2 0-0.2 0-0.2v0c0-19.8 23-43.2 51.4-43.2s51.4 23.4 51.4 43.2v0c0 0 0 0 0 0.2 0 101.6 82.6 184 184.2 184 46.6 0 91.2-17.4 125.4-49.4 33-30.8 53.4-73 57.8-117h29.2v-36h-29.2zM747.6 666c-85 0-154-69.2-154-154 0-85 69.2-154 154-154 85 0 154 69.2 154 154 0 85-69 154-154 154zM276.4 666c-85 0-154-69.2-154-154 0-85 69.2-154 154-154 85 0 154 69.2 154 154 0 85-69 154-154 154z"></path>
    </SVG>
  )
}


IosGlassesOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGlassesOutline.propTypes = {
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


export default IosGlassesOutline
