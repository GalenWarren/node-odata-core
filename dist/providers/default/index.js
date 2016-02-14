"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _provider = require("./provider");

var _loop = function _loop(_key2) {
  if (_key2 === "default") return "continue";
  Object.defineProperty(exports, _key2, {
    enumerable: true,
    get: function get() {
      return _provider[_key2];
    }
  });
};

for (var _key2 in _provider) {
  var _ret = _loop(_key2);

  if (_ret === "continue") continue;
}
//# sourceMappingURL=index.js.map
