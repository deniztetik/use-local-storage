"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useLocalStorage = function useLocalStorage(key) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : localStorage.getItem(key);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  (0, _react.useEffect)(function () {
    if (key && window.localStorage[key]) {
      var itemFromLocalStorage = JSON.parse(window.localStorage[key]);
      setItem(itemFromLocalStorage);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (item) {
      window.localStorage.setItem(key, JSON.stringify(item));
    }
  });
  var finalItem = item ? item : initialValue;
  return [finalItem, setItem];
};

var _default = useLocalStorage;
exports.default = _default;
