"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp;

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
var GetPipeline = exports.GetPipeline = (_temp = _class = function (_Pipeline) {
  _inherits(GetPipeline, _Pipeline);

  function GetPipeline(_ref) {
    var _ref$componentTypes = _ref.componentTypes;
    var componentTypes = _ref$componentTypes === undefined ? defaultGetPipelineComponentTypes : _ref$componentTypes;
    var container = _ref.container;

    _classCallCheck(this, GetPipeline);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GetPipeline).call(this, { components: Pipeline.createComponents(), container: container }));
  }

  return GetPipeline;
}(Pipeline), _class.defaultComponentTypes = defaultGetPipelineComponentTypes, _temp);
//# sourceMappingURL=pipeline.js.map
