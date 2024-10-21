"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./circle.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/Circle.js

var Circle = function Circle(_ref) {
  var _ref$images = _ref.images,
    images = _ref$images === void 0 ? [] : _ref$images,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Browse Food by" : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle = _ref$subtitle === void 0 ? "Categories" : _ref$subtitle;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "Circle shadow-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid wrap_Upper shadow-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title-area text-center"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "sec-title"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sf_init_title"
  }, title), " ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "sf_text-theme"
  }, subtitle))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, images.map(function (imgSrc, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "col-4 d-flex align-items-center justify-content-center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "main"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "name"
    }, "Biryani"), /*#__PURE__*/_react["default"].createElement("img", {
      className: "img-fluid",
      src: imgSrc,
      alt: "Food ".concat(index)
    })));
  })))));
};

// Typechecking for props
Circle.propTypes = {
  images: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  title: _propTypes["default"].string,
  subtitle: _propTypes["default"].string
};
var _default = exports["default"] = Circle;