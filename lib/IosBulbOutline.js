'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IosBulbOutline = function IosBulbOutline(props) {
  return _react2.default.createElement(
    _SVG2.default,
    {
      style: props.style,
      className: props.className,
      fill: props.color,
      width: props.fontSize,
      height: props.fontSize,
      viewBox: '0 0 1024 1024',
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('path', { d: 'M800 377.6c0-155.8-132.2-281.6-288-281.6s-288 125.8-288 281.6c0 62.2 26.4 118.2 60.4 166.2h-0.6c21.8 30 42.8 55.4 63 90 44 75.6 37.2 148.6 37.4 163v3h256v-3c0-17.8-7.2-87.4 36.8-163 20.2-34.6 41.2-60 63-90h-0.2c33.8-47.8 60.2-104 60.2-166.2zM702 540.6c-1.2 1.6-2.2 3-3.4 4.6-16.2 21.8-33 44.4-49.4 72.4-34.6 59.4-40.8 116.4-41.6 150.4h-31.6v-224.2l64-127.8h-33.2l-62.8 127.8v224.2h-64v-224.2l-62.8-127.8h-33.2l64 127.8v224.2h-31.8c-1-34-7.8-91.4-41.8-150-9-15.4-18.2-30-27.4-42h0.4l-37.2-51.2c-31.6-43.2-54.2-94.2-54.2-147.2 0-66.8 32-129.8 79.2-177s110-73 176.8-73 129.6 25.6 176.8 72.8c47.2 47.2 79.2 110 79.2 176.8 0 53-22.6 103.8-54.2 147.2l-11.8 16.2z M448 896h128v32h-128v-32z M416 832h192v32h-192v-32z' })
  );
};

IosBulbOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBulbOutline.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = IosBulbOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBulbOutline.js.map