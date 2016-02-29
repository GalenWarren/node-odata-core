"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pipeline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
* The default execute function, does nothing
*/

var pipelineTerminator = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(context) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function pipelineTerminator(_x) {
    return ref.apply(this, arguments);
  };
}();

/**
* Returns the dependencies for this component, from metadata
*/


var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _toposort = require("toposort");

var _toposort2 = _interopRequireDefault(_toposort);

var _anyPromise = require("any-promise");

var _anyPromise2 = _interopRequireDefault(_anyPromise);

var _decorators = require("./decorators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _anyPromise2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _anyPromise2.default.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function getDependencies(componentType) {

  return [];
}

/**
* A processing pipeline
*/

var Pipeline = exports.Pipeline = function () {

  /**
  * Construction, takes a set of components and assembles the pipeline
  */

  function Pipeline(_ref) {
    var components = _ref.components;

    _classCallCheck(this, Pipeline);

    // build the handle function by combining together all the components
    this.handle = (0, _lodash2.default)(components).reverse().reduce(function (innerExecute, component) {

      return function (context) {
        return component.handle(context, function () {
          return innerExecute(context);
        });
      };
    }, pipelineTerminator);
  }

  /**
  * Creates a pipeline from a set of component types using the provided container
  */


  _createClass(Pipeline, null, [{
    key: "createComponents",
    value: function createComponents(_ref2) {
      var componentTypes = _ref2.componentTypes;
      var factory = _ref2.factory;
      var container = _ref2.container;


      // get the factory function
      var componentFactory = factory || function (componentType) {
        return container.get(componentType);
      };

      // get all dependencies (edge nodes)
      var dependencies = _lodash2.default.flatMap(componentTypes, getDependencies);

      // get the components in sorted order
      var sortedComponentTypes = _toposort2.default.array(componentTypes, dependencies).reverse();

      // create all the component objects
      return _lodash2.default.map(sortedComponentTypes, componentFactory);
    }
  }]);

  return Pipeline;
}();
//# sourceMappingURL=pipeline.js.map
