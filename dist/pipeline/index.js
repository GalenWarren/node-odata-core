"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pipeline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _bluebird = require("bluebird");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _index = require("../providers/index");

var _parse = require("./parse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// a resolved promise used to end the pipeline
var resolved = _bluebird.Promise.resolve();

/**
* The processing pipeline
*/
var Pipeline = exports.Pipeline = (_dec = (0, _aureliaDependencyInjection.inject)("settings", _parse.ParseComponent), _dec(_class = function () {

  /**
  * Constructor
  */

  function Pipeline(settings) {
    _classCallCheck(this, Pipeline);

    // store the settings
    this.settings = settings;

    /**
    * The process function
    * @param {context}
    */

    for (var _len = arguments.length, components = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      components[_key - 1] = arguments[_key];
    }

    this.process = (0, _lodash2.default)(components).reverse().reduce(function (func, component) {

      return function (context) {
        return component.process(context, function () {
          return func(context);
        });
      };
    }, function () {
      return resolved;
    }).value;
  }

  /**
  * Creates a pipeline against the given provider with the provided settings
  */


  _createClass(Pipeline, null, [{
    key: "create",
    value: function create(_ref) {
      var provider = _ref.provider;
      var _ref$settings = _ref.settings;
      var settings = _ref$settings === undefined ? {} : _ref$settings;


      var container = new _aureliaDependencyInjection.Container();
      container.registerInstance(_index.Provider, provider);
      container.registerInstance("settings", settings);
      return container.get(Pipeline);
    }
  }]);

  return Pipeline;
}()) || _class);
//# sourceMappingURL=index.js.map
