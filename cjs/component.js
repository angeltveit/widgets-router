"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageRouter = void 0;

var _widgets = require("@scoutgg/widgets");

var _component = require("@scoutgg/widgets/cjs/decorators/component");

var _decorator = require("./decorator");

var _lodash = require("lodash");

var _page = _interopRequireDefault(require("page"));

var _dec, _dec2, _dec3, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageRouter = (_dec = (0, _widgets.Component)('ang'), _dec2 = (0, _widgets.Attribute)('hashbang', Boolean, {
  default: false
}), _dec3 = (0, _widgets.Template)(function (html) {
  html(_templateObject(), this.route);
}), _dec(_class = _dec2(_class = _dec3(_class =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(PageRouter, _HTMLElement);

  function PageRouter() {
    _classCallCheck(this, PageRouter);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageRouter).apply(this, arguments));
  }

  _createClass(PageRouter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      this.route = '';

      _decorator.routes.forEach(function (route) {
        (0, _page.default)(route.route, function (context, next) {
          var tagname = _this.route && _this.route.tagName.toLowerCase();

          if (!_this.route || tagname !== (0, _component.getTagName)(route.self)) {
            var elem = document.createElement((0, _component.getTagName)(route.self));
            _this.route = elem;
          }

          Object.keys(context.params).forEach(function (attribute) {
            if (!isNaN(attribute)) return;

            _this.route.setAttribute((0, _lodash.kebabCase)(attribute), context.params[attribute]);
          });

          _this.render();
        });
      });

      (0, _page.default)({
        hashbang: this.hashbang
      });
    }
  }]);

  return PageRouter;
}(_wrapNativeSuper(HTMLElement))) || _class) || _class) || _class);
exports.PageRouter = PageRouter;