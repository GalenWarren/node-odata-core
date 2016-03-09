"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* The default get pipeline components
*/
var defaultGetPipelineComponentTypes = [ParseUrlComponent, ParseQueryComponent];

/**
* Create the get pipelie
*/

var GetPipeline = exports.GetPipeline = function (_Pipeline) {
  _inherits(GetPipeline, _Pipeline);

  _createClass(GetPipeline, null, [{
    key: "defaultComponentTypes",


    /**
    * The default component types
    */
    get: function get() {
      return defaultGetPipelineComponentTypes;
    }

    /**
    * Construction
    */

  }]);

  function GetPipeline(_ref) {
    var _ref$componentTypes = _ref.componentTypes;
    var componentTypes = _ref$componentTypes === undefined ? defaultGetPipelineComponentTypes : _ref$componentTypes;
    var container = _ref.container;

    _classCallCheck(this, GetPipeline);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GetPipeline).call(this, {
      components: Pipeline.createComponents({ componentTypes: componentTypes, container: container }),
      container: container
    }));
  }

  return GetPipeline;
}(Pipeline);
//# sourceMappingURL=pipeline.js.map
