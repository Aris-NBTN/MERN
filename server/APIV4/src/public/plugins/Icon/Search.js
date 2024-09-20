"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
!function () {
  "use strict";

  !function () {
    function e() {}
    function t(e, t) {
      for (var _n2 in t) e[_n2] = t[_n2];
      return e;
    }
    function n(e) {
      return e();
    }
    function i() {
      return Object.create(null);
    }
    function o(e) {
      e.forEach(n);
    }
    function r(e) {
      return "function" == typeof e;
    }
    function s(e, t) {
      return e != e ? t == t : e !== t || e && "object" == (0, _typeof2["default"])(e) || "function" == typeof e;
    }
    function c(e) {
      var t = {};
      for (var _n3 in e) "$" !== _n3[0] && (t[_n3] = e[_n3]);
      return t;
    }
    function l(e, t, n) {
      e.insertBefore(t, n || null);
    }
    function a(e) {
      e.parentNode.removeChild(e);
    }
    function u() {
      return e = "", document.createTextNode(e);
      var e;
    }
    function f(e, t, n) {
      null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
    }
    function d(e, t) {
      for (var _n4 in t) f(e, _n4, t[_n4]);
    }
    var p;
    function h(e) {
      p = e;
    }
    function g() {
      if (!p) throw new Error("Function called outside component initialization");
      return p;
    }
    var m = [],
      y = [],
      $ = [],
      v = [],
      b = Promise.resolve();
    var k = !1;
    function _(e) {
      $.push(e);
    }
    var w = !1;
    var x = new Set();
    function C() {
      if (!w) {
        w = !0;
        do {
          for (var _e2 = 0; _e2 < m.length; _e2 += 1) {
            var _t2 = m[_e2];
            h(_t2), j(_t2.$$);
          }
          for (h(null), m.length = 0; y.length;) y.pop()();
          for (var _e3 = 0; _e3 < $.length; _e3 += 1) {
            var _t3 = $[_e3];
            x.has(_t3) || (x.add(_t3), _t3());
          }
          $.length = 0;
        } while (m.length);
        for (; v.length;) v.pop()();
        k = !1, w = !1, x.clear();
      }
    }
    function j(e) {
      if (null !== e.fragment) {
        e.update(), o(e.before_update);
        var _t4 = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, _t4), e.after_update.forEach(_);
      }
    }
    var I = new Set();
    function P(e, t) {
      -1 === e.$$.dirty[0] && (m.push(e), k || (k = !0, b.then(C)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
    }
    function O(t, s, c, l, u, f) {
      var d = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
      var g = p;
      h(t);
      var m = s.props || {},
        y = t.$$ = {
          fragment: null,
          ctx: null,
          props: f,
          update: e,
          not_equal: u,
          bound: i(),
          on_mount: [],
          on_destroy: [],
          before_update: [],
          after_update: [],
          context: new Map(g ? g.$$.context : []),
          callbacks: i(),
          dirty: d,
          skip_bound: !1
        };
      var $ = !1;
      if (y.ctx = c ? c(t, m, function (e, n) {
        var o = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : n;
        return y.ctx && u(y.ctx[e], y.ctx[e] = o) && (!y.skip_bound && y.bound[e] && y.bound[e](o), $ && P(t, e)), n;
      }) : [], y.update(), $ = !0, o(y.before_update), y.fragment = !!l && l(y.ctx), s.target) {
        if (s.hydrate) {
          var _e4 = function (e) {
            return Array.from(e.childNodes);
          }(s.target);
          y.fragment && y.fragment.l(_e4), _e4.forEach(a);
        } else y.fragment && y.fragment.c();
        s.intro && (v = t.$$.fragment) && v.i && (I["delete"](v), v.i(b)), function (e, t, i) {
          var _e$$$ = e.$$,
            s = _e$$$.fragment,
            c = _e$$$.on_mount,
            l = _e$$$.on_destroy,
            a = _e$$$.after_update;
          s && s.m(t, i), _(function () {
            var t = c.map(n).filter(r);
            l ? l.push.apply(l, (0, _toConsumableArray2["default"])(t)) : o(t), e.$$.on_mount = [];
          }), a.forEach(_);
        }(t, s.target, s.anchor), C();
      }
      var v, b;
      h(g);
    }
    function S(e, t, n) {
      return e(n = {
        path: t,
        exports: {},
        require: function require(e, t) {
          return function () {
            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
          }(null == t && n.path);
        }
      }, n.exports), n.exports;
    }
    var E = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.validateIcon = t.stringToIcon = void 0;
        var n = /^[a-z0-9]+(-[a-z0-9]+)*$/;
        t.stringToIcon = function (e, n, i) {
          var o = "";
          var r = e.split(":");
          if ("@" === e.slice(0, 1)) {
            if (r.length < 2 || r.length > 3) return null;
            o = r.shift().slice(1);
          }
          if (r.length > 3 || !r.length) return null;
          if (r.length > 1) {
            var _e5 = r.pop(),
              _i2 = r.pop(),
              _s2 = {
                provider: r.length > 0 ? r[0] : o,
                prefix: _i2,
                name: _e5
              };
            return n && !t.validateIcon(_s2) ? null : _s2;
          }
          var s = r[0],
            c = s.split("-");
          if (c.length > 1) {
            var _e6 = {
              provider: o,
              prefix: c.shift(),
              name: c.join("-")
            };
            return n && !t.validateIcon(_e6) ? null : _e6;
          }
          if (i && "" === o) {
            var _e7 = {
              provider: o,
              prefix: "",
              name: s
            };
            return n && !t.validateIcon(_e7, i) ? null : _e7;
          }
          return null;
        };
        t.validateIcon = function (e, t) {
          return !!e && !("" !== e.provider && !e.provider.match(n) || !(t && "" === e.prefix || e.prefix.match(n)) || !e.name.match(n));
        };
      }),
      M = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.merge = void 0, t.merge = function (e, t, n) {
          var i = Object.create(null),
            o = [e, t, n];
          for (var _e8 = 0; _e8 < 3; _e8++) {
            var _t5 = o[_e8];
            if ("object" == (0, _typeof2["default"])(_t5) && _t5) for (var _e9 in _t5) {
              var _n5 = _t5[_e9];
              void 0 !== _n5 && (i[_e9] = _n5);
            }
          }
          return i;
        };
      }),
      T = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.fullIcon = t.iconDefaults = void 0, t.iconDefaults = Object.freeze({
          body: "",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          rotate: 0,
          vFlip: !1,
          hFlip: !1
        }), t.fullIcon = function (e) {
          return M.merge(t.iconDefaults, e);
        };
      }),
      A = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.mergeIcons = void 0;
        var n = Object.keys(T.iconDefaults);
        t.mergeIcons = function (e, t) {
          var i = Object.create(null);
          return n.forEach(function (n) {
            if (void 0 !== e[n]) {
              if (void 0 !== t[n]) switch (n) {
                case "rotate":
                  return void (i[n] = (e[n] + t[n]) % 4);
                case "hFlip":
                case "vFlip":
                  return void (i[n] = e[n] !== t[n]);
                default:
                  i[n] = t[n];
              } else i[n] = e[n];
            } else void 0 !== t[n] && (i[n] = t[n]);
          }), i;
        };
      }),
      R = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.parseIconSet = void 0;
        var n = Object.keys(T.iconDefaults);
        function i(e, t, n) {
          var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var r = e.parent;
          if (void 0 !== t[r]) return A.mergeIcons(t[r], e);
          if (void 0 !== n[r]) {
            if (o > 2) return null;
            var _s3 = i(n[r], t, n, o + 1);
            if (_s3) return A.mergeIcons(_s3, e);
          }
          return null;
        }
        t.parseIconSet = function (e, t) {
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "none";
          var r = [];
          if ("object" != (0, _typeof2["default"])(e)) return "none" !== o && r;
          if (e.not_found instanceof Array && e.not_found.forEach(function (e) {
            t(e, null), "all" === o && r.push(e);
          }), "object" != (0, _typeof2["default"])(e.icons)) return "none" !== o && r;
          var s = Object.create(null);
          n.forEach(function (t) {
            void 0 !== e[t] && "object" != (0, _typeof2["default"])(e[t]) && (s[t] = e[t]);
          });
          var c = e.icons;
          if (Object.keys(c).forEach(function (e) {
            var n = c[e];
            "string" == typeof n.body && (t(e, Object.freeze(M.merge(T.iconDefaults, s, n))), r.push(e));
          }), "object" == (0, _typeof2["default"])(e.aliases)) {
            var _n6 = e.aliases;
            Object.keys(_n6).forEach(function (e) {
              var o = i(_n6[e], c, _n6, 1);
              o && (t(e, Object.freeze(M.merge(T.iconDefaults, s, o))), r.push(e));
            });
          }
          return "none" === o ? r.length > 0 : r;
        };
      }),
      F = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.listIcons = t.getIcon = t.iconExists = t.addIcon = t.addIconSet = t.getStorage = t.newStorage = void 0;
        var n = Object.create(null);
        function i(e, t) {
          return {
            provider: e,
            prefix: t,
            icons: Object.create(null),
            missing: Object.create(null)
          };
        }
        function o(e, t) {
          void 0 === n[e] && (n[e] = Object.create(null));
          var o = n[e];
          return void 0 === o[t] && (o[t] = i(e, t)), o[t];
        }
        t.newStorage = i, t.getStorage = o, t.addIconSet = function (e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "none";
          var i = Date.now();
          return R.parseIconSet(t, function (t, n) {
            null === n ? e.missing[t] = i : e.icons[t] = n;
          }, n);
        }, t.addIcon = function (e, t, n) {
          try {
            if ("string" == typeof n.body) return e.icons[t] = Object.freeze(T.fullIcon(n)), !0;
          } catch (e) {}
          return !1;
        }, t.iconExists = function (e, t) {
          return void 0 !== e.icons[t];
        }, t.getIcon = function (e, t) {
          var n = e.icons[t];
          return void 0 === n ? null : n;
        }, t.listIcons = function (e, t) {
          var i,
            r = [];
          return i = "string" == typeof e ? [e] : Object.keys(n), i.forEach(function (e) {
            var i;
            i = "string" == typeof e && "string" == typeof t ? [t] : void 0 === n[e] ? [] : Object.keys(n[e]), i.forEach(function (t) {
              var n = o(e, t),
                i = Object.keys(n.icons).map(function (n) {
                  return ("" !== e ? "@" + e + ":" : "") + t + ":" + n;
                });
              r = r.concat(i);
            });
          }), r;
        };
      }),
      L = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.storageFunctions = t.addCollection = t.addIcon = t.getIconData = t.allowSimpleNames = void 0;
        var n = !1;
        function i(e) {
          var t = "string" == typeof e ? E.stringToIcon(e, !0, n) : e;
          return t ? F.getIcon(F.getStorage(t.provider, t.prefix), t.name) : null;
        }
        function o(e, t) {
          var i = E.stringToIcon(e, !0, n);
          if (!i) return !1;
          var o = F.getStorage(i.provider, i.prefix);
          return F.addIcon(o, i.name, t);
        }
        function r(e, t) {
          if ("object" != (0, _typeof2["default"])(e)) return !1;
          if ("string" != typeof t && (t = "string" == typeof e.provider ? e.provider : ""), n && "" === t && ("string" != typeof e.prefix || "" === e.prefix)) {
            var _t6 = !1;
            return R.parseIconSet(e, function (e, n) {
              null !== n && o(e, n) && (_t6 = !0);
            }), _t6;
          }
          if ("string" != typeof e.prefix || !E.validateIcon({
            provider: t,
            prefix: e.prefix,
            name: "a"
          })) return !1;
          var i = F.getStorage(t, e.prefix);
          return !!F.addIconSet(i, e);
        }
        t.allowSimpleNames = function (e) {
          return "boolean" == typeof e && (n = e), n;
        }, t.getIconData = i, t.addIcon = o, t.addCollection = r, t.storageFunctions = {
          iconExists: function iconExists(e) {
            return null !== i(e);
          },
          getIcon: function getIcon(e) {
            var t = i(e);
            return t ? M.merge(t) : null;
          },
          listIcons: F.listIcons,
          addIcon: o,
          addCollection: r
        };
      }),
      N = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.replaceIDs = void 0;
        var n = /\sid="(\S+)"/g,
          i = "IconifyId-" + Date.now().toString(16) + "-" + (16777216 * Math.random() | 0).toString(16) + "-";
        var o = 0;
        function r(e, t, n) {
          var i = 0;
          for (; -1 !== (i = n.indexOf(e, i));) n = n.slice(0, i) + t + n.slice(i + e.length), i += t.length;
          return n;
        }
        t.replaceIDs = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i;
          var s = [];
          var c;
          for (; c = n.exec(e);) s.push(c[1]);
          return s.length ? (s.forEach(function (n) {
            var i = "function" == typeof t ? t() : t + o++;
            e = r('="' + n + '"', '="' + i + '"', e), e = r('="#' + n + '"', '="#' + i + '"', e), e = r("(#" + n + ")", "(#" + i + ")", e);
          }), e) : e;
        };
      }),
      B = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.calculateSize = void 0;
        var n = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
          i = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
        t.calculateSize = function (e, t, o) {
          if (1 === t) return e;
          if (o = void 0 === o ? 100 : o, "number" == typeof e) return Math.ceil(e * t * o) / o;
          if ("string" != typeof e) return e;
          var r = e.split(n);
          if (null === r || !r.length) return e;
          var s = [];
          var c = r.shift(),
            l = i.test(c);
          for (;;) {
            if (l) {
              var _e10 = parseFloat(c);
              isNaN(_e10) ? s.push(c) : s.push(Math.ceil(_e10 * t * o) / o);
            } else s.push(c);
            if (c = r.shift(), void 0 === c) return s.join("");
            l = !l;
          }
        };
      }),
      V = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.mergeCustomisations = t.defaults = void 0, t.defaults = Object.freeze({
          inline: !1,
          width: null,
          height: null,
          hAlign: "center",
          vAlign: "middle",
          slice: !1,
          hFlip: !1,
          vFlip: !1,
          rotate: 0
        }), t.mergeCustomisations = function (e, t) {
          var n = {};
          for (var _i3 in e) {
            var _o2 = _i3;
            if (n[_o2] = e[_o2], void 0 === t[_o2]) continue;
            var _r2 = t[_o2];
            switch (_o2) {
              case "inline":
              case "slice":
                "boolean" == typeof _r2 && (n[_o2] = _r2);
                break;
              case "hFlip":
              case "vFlip":
                !0 === _r2 && (n[_o2] = !n[_o2]);
                break;
              case "hAlign":
              case "vAlign":
                "string" == typeof _r2 && "" !== _r2 && (n[_o2] = _r2);
                break;
              case "width":
              case "height":
                ("string" == typeof _r2 && "" !== _r2 || "number" == typeof _r2 && _r2 || null === _r2) && (n[_o2] = _r2);
                break;
              case "rotate":
                "number" == typeof _r2 && (n[_o2] += _r2);
            }
          }
          return n;
        };
      }),
      D = S(function (e, t) {
        function n(e) {
          var t = "";
          switch (e.hAlign) {
            case "left":
              t += "xMin";
              break;
            case "right":
              t += "xMax";
              break;
            default:
              t += "xMid";
          }
          switch (e.vAlign) {
            case "top":
              t += "YMin";
              break;
            case "bottom":
              t += "YMax";
              break;
            default:
              t += "YMid";
          }
          return t += e.slice ? " slice" : " meet", t;
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.iconToSVG = void 0, t.iconToSVG = function (e, t) {
          var i = {
            left: e.left,
            top: e.top,
            width: e.width,
            height: e.height
          };
          var o,
            r,
            s = e.body;
          [e, t].forEach(function (e) {
            var t = [],
              n = e.hFlip,
              o = e.vFlip;
            var r,
              c = e.rotate;
            switch (n ? o ? c += 2 : (t.push("translate(" + (i.width + i.left) + " " + (0 - i.top) + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : o && (t.push("translate(" + (0 - i.left) + " " + (i.height + i.top) + ")"), t.push("scale(1 -1)"), i.top = i.left = 0), c < 0 && (c -= 4 * Math.floor(c / 4)), c %= 4, c) {
              case 1:
                r = i.height / 2 + i.top, t.unshift("rotate(90 " + r + " " + r + ")");
                break;
              case 2:
                t.unshift("rotate(180 " + (i.width / 2 + i.left) + " " + (i.height / 2 + i.top) + ")");
                break;
              case 3:
                r = i.width / 2 + i.left, t.unshift("rotate(-90 " + r + " " + r + ")");
            }
            c % 2 == 1 && (0 === i.left && 0 === i.top || (r = i.left, i.left = i.top, i.top = r), i.width !== i.height && (r = i.width, i.width = i.height, i.height = r)), t.length && (s = '<g transform="' + t.join(" ") + '">' + s + "</g>");
          }), null === t.width && null === t.height ? (r = "1em", o = B.calculateSize(r, i.width / i.height)) : null !== t.width && null !== t.height ? (o = t.width, r = t.height) : null !== t.height ? (r = t.height, o = B.calculateSize(r, i.width / i.height)) : (o = t.width, r = B.calculateSize(o, i.height / i.width)), "auto" === o && (o = i.width), "auto" === r && (r = i.height), o = "string" == typeof o ? o : o + "", r = "string" == typeof r ? r : r + "";
          var c = {
            attributes: {
              width: o,
              height: r,
              preserveAspectRatio: n(t),
              viewBox: i.left + " " + i.top + " " + i.width + " " + i.height
            },
            body: s
          };
          return t.inline && (c.inline = !0), c;
        };
      }),
      z = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.builderFunctions = void 0, t.builderFunctions = {
          replaceIDs: N.replaceIDs,
          calculateSize: B.calculateSize,
          buildIcon: function buildIcon(e, t) {
            return D.iconToSVG(T.fullIcon(e), V.mergeCustomisations(V.defaults, t));
          }
        };
      }),
      q = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.coreModules = void 0, t.coreModules = {};
      }),
      U = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultConfig = void 0, t.defaultConfig = {
          resources: [],
          index: 0,
          timeout: 2e3,
          rotate: 750,
          random: !1,
          dataAfterTimeout: !1
        };
      }),
      H = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.sendQuery = void 0, t.sendQuery = function (e, t, n, i, o) {
          var r = e.resources.length,
            s = e.random ? Math.floor(Math.random() * r) : e.index;
          var c;
          if (e.random) {
            var _t7 = e.resources.slice(0);
            for (c = []; _t7.length > 1;) {
              var _e11 = Math.floor(Math.random() * _t7.length);
              c.push(_t7[_e11]), _t7 = _t7.slice(0, _e11).concat(_t7.slice(_e11 + 1));
            }
            c = c.concat(_t7);
          } else c = e.resources.slice(s).concat(e.resources.slice(0, s));
          var l = Date.now();
          var a,
            u = "pending",
            f = 0,
            d = null,
            p = [],
            h = [];
          function g() {
            d && (clearTimeout(d), d = null);
          }
          function m() {
            "pending" === u && (u = "aborted"), g(), p.forEach(function (e) {
              e.abort && e.abort(), "pending" === e.status && (e.status = "aborted");
            }), p = [];
          }
          function y(e, t) {
            t && (h = []), "function" == typeof e && h.push(e);
          }
          function $() {
            return {
              startTime: l,
              payload: t,
              status: u,
              queriesSent: f,
              queriesPending: p.length,
              subscribe: y,
              abort: m
            };
          }
          function v() {
            u = "failed", h.forEach(function (e) {
              e(void 0, a);
            });
          }
          function b() {
            p = p.filter(function (e) {
              return "pending" === e.status && (e.status = "aborted"), e.abort && e.abort(), !1;
            });
          }
          function k() {
            if ("pending" !== u) return;
            g();
            var i = c.shift();
            if (void 0 === i) {
              if (p.length) {
                var _t8 = "function" == typeof e.timeout ? e.timeout(l) : e.timeout;
                if (_t8) return void (d = setTimeout(function () {
                  g(), "pending" === u && (b(), v());
                }, _t8));
              }
              return void v();
            }
            var r = {
              getQueryStatus: $,
              status: "pending",
              resource: i,
              done: function done(t, n) {
                !function (t, n, i) {
                  var r = void 0 === n;
                  switch (p = p.filter(function (e) {
                    return e !== t;
                  }), u) {
                    case "pending":
                      break;
                    case "failed":
                      if (r || !e.dataAfterTimeout) return;
                      break;
                    default:
                      return;
                  }
                  if (r) return void 0 !== i && (a = i), void (p.length || (c.length ? k() : v()));
                  if (g(), b(), o && !e.random) {
                    var _n7 = e.resources.indexOf(t.resource);
                    -1 !== _n7 && _n7 !== e.index && o(_n7);
                  }
                  u = "completed", h.forEach(function (e) {
                    e(n);
                  });
                }(r, t, n);
              }
            };
            p.push(r), f++;
            var s = "function" == typeof e.rotate ? e.rotate(f, l) : e.rotate;
            d = setTimeout(k, s), n(i, t, r);
          }
          return "function" == typeof i && h.push(i), setTimeout(k), $;
        };
      }),
      K = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.initRedundancy = void 0, t.initRedundancy = function (e) {
          var t = function (e) {
            if (!("object" == (0, _typeof2["default"])(e) && "object" == (0, _typeof2["default"])(e.resources) && e.resources instanceof Array && e.resources.length)) throw new Error("Invalid Reduncancy configuration");
            var t = Object.create(null);
            var n;
            for (n in U.defaultConfig) void 0 !== e[n] ? t[n] = e[n] : t[n] = U.defaultConfig[n];
            return t;
          }(e);
          var n = [];
          function i() {
            n = n.filter(function (e) {
              return "pending" === e().status;
            });
          }
          return {
            query: function query(e, o, r) {
              var s = H.sendQuery(t, e, o, function (e, t) {
                i(), r && r(e, t);
              }, function (e) {
                t.index = e;
              });
              return n.push(s), s;
            },
            find: function find(e) {
              var t = n.find(function (t) {
                return e(t);
              });
              return void 0 !== t ? t : null;
            },
            setIndex: function setIndex(e) {
              t.index = e;
            },
            getIndex: function getIndex() {
              return t.index;
            },
            cleanup: i
          };
        };
      }),
      G = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.sortIcons = void 0, t.sortIcons = function (e) {
          var t = {
              loaded: [],
              missing: [],
              pending: []
            },
            n = Object.create(null);
          e.sort(function (e, t) {
            return e.provider !== t.provider ? e.provider.localeCompare(t.provider) : e.prefix !== t.prefix ? e.prefix.localeCompare(t.prefix) : e.name.localeCompare(t.name);
          });
          var i = {
            provider: "",
            prefix: "",
            name: ""
          };
          return e.forEach(function (e) {
            if (i.name === e.name && i.prefix === e.prefix && i.provider === e.provider) return;
            i = e;
            var o = e.provider,
              r = e.prefix,
              s = e.name;
            void 0 === n[o] && (n[o] = Object.create(null));
            var c = n[o];
            void 0 === c[r] && (c[r] = F.getStorage(o, r));
            var l = c[r];
            var a;
            a = void 0 !== l.icons[s] ? t.loaded : "" === r || void 0 !== l.missing[s] ? t.missing : t.pending;
            var u = {
              provider: o,
              prefix: r,
              name: s
            };
            a.push(u);
          }), t;
        };
      }),
      J = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.storeCallback = t.updateCallbacks = t.callbacks = void 0, t.callbacks = Object.create(null);
        var n = Object.create(null);
        function i(e, n) {
          e.forEach(function (e) {
            var i = e.provider;
            if (void 0 === t.callbacks[i]) return;
            var o = t.callbacks[i],
              r = e.prefix,
              s = o[r];
            s && (o[r] = s.filter(function (e) {
              return e.id !== n;
            }));
          });
        }
        t.updateCallbacks = function (e, o) {
          void 0 === n[e] && (n[e] = Object.create(null));
          var r = n[e];
          r[o] || (r[o] = !0, setTimeout(function () {
            if (r[o] = !1, void 0 === t.callbacks[e] || void 0 === t.callbacks[e][o]) return;
            var n = t.callbacks[e][o].slice(0);
            if (!n.length) return;
            var s = F.getStorage(e, o);
            var c = !1;
            n.forEach(function (t) {
              var n = t.icons,
                r = n.pending.length;
              n.pending = n.pending.filter(function (t) {
                if (t.prefix !== o) return !0;
                var i = t.name;
                if (void 0 !== s.icons[i]) n.loaded.push({
                  provider: e,
                  prefix: o,
                  name: i
                });else {
                  if (void 0 === s.missing[i]) return c = !0, !0;
                  n.missing.push({
                    provider: e,
                    prefix: o,
                    name: i
                  });
                }
                return !1;
              }), n.pending.length !== r && (c || i([{
                provider: e,
                prefix: o
              }], t.id), t.callback(n.loaded.slice(0), n.missing.slice(0), n.pending.slice(0), t.abort));
            });
          }));
        };
        var o = 0;
        t.storeCallback = function (e, n, r) {
          var s = o++,
            c = i.bind(null, r, s);
          if (!n.pending.length) return c;
          var l = {
            id: s,
            icons: n,
            callback: e,
            abort: c
          };
          return r.forEach(function (e) {
            var n = e.provider,
              i = e.prefix;
            void 0 === t.callbacks[n] && (t.callbacks[n] = Object.create(null));
            var o = t.callbacks[n];
            void 0 === o[i] && (o[i] = []), o[i].push(l);
          }), c;
        };
      }),
      W = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getAPIModule = t.setAPIModule = void 0;
        var n = Object.create(null);
        t.setAPIModule = function (e, t) {
          n[e] = t;
        }, t.getAPIModule = function (e) {
          return void 0 === n[e] ? n[""] : n[e];
        };
      }),
      Q = S(function (e, t) {
        function n(e) {
          var t;
          if ("string" == typeof e.resources) t = [e.resources];else if (t = e.resources, !(t instanceof Array && t.length)) return null;
          return {
            resources: t,
            path: void 0 === e.path ? "/" : e.path,
            maxURL: e.maxURL ? e.maxURL : 500,
            rotate: e.rotate ? e.rotate : 750,
            timeout: e.timeout ? e.timeout : 5e3,
            random: !0 === e.random,
            index: e.index ? e.index : 0,
            dataAfterTimeout: !1 !== e.dataAfterTimeout
          };
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getAPIConfig = t.setAPIConfig = void 0;
        var i = Object.create(null),
          o = ["https://api.simplesvg.com", "https://api.unisvg.com"],
          r = [];
        for (; o.length > 0;) 1 === o.length || Math.random() > .5 ? r.push(o.shift()) : r.push(o.pop());
        i[""] = n({
          resources: ["https://api.iconify.design"].concat(r)
        }), t.setAPIConfig = function (e, t) {
          var o = n(t);
          return null !== o && (i[e] = o, !0);
        };
        t.getAPIConfig = function (e) {
          return i[e];
        };
      }),
      Y = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getProviders = t.listToIcons = void 0, t.listToIcons = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          var i = [];
          return e.forEach(function (e) {
            var o = "string" == typeof e ? E.stringToIcon(e, !1, n) : e;
            t && !E.validateIcon(o, n) || i.push({
              provider: o.provider,
              prefix: o.prefix,
              name: o.name
            });
          }), i;
        }, t.getProviders = function (e) {
          var t = Object.create(null);
          return e.forEach(function (e) {
            t[e.provider] = !0;
          }), Object.keys(t);
        };
      }),
      X = S(function (e, t) {
        function n() {}
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.API = t.getRedundancyCache = void 0;
        var i = Object.create(null),
          o = Object.create(null),
          r = Object.create(null),
          s = Object.create(null),
          c = Object.create(null);
        function l(e) {
          if (void 0 === c[e]) {
            var _t9 = Q.getAPIConfig(e);
            if (!_t9) return;
            var _n8 = {
              config: _t9,
              redundancy: K.initRedundancy(_t9)
            };
            c[e] = _n8;
          }
          return c[e];
        }
        t.getRedundancyCache = l;
        var a = Object.create(null);
        function u(e, t, n) {
          function c() {
            var n = ("" === e ? "" : "@" + e + ":") + t,
              i = Math.floor(Date.now() / 6e4);
            a[n] < i && (a[n] = i, console.error('Unable to retrieve icons for "' + n + '" because API is not configured properly.'));
          }
          void 0 === o[e] && (o[e] = Object.create(null));
          var u = o[e];
          void 0 === s[e] && (s[e] = Object.create(null));
          var f = s[e];
          void 0 === i[e] && (i[e] = Object.create(null));
          var d = i[e];
          var p;
          void 0 === u[t] ? u[t] = n : u[t] = u[t].concat(n).sort(), f[t] || (f[t] = !0, setTimeout(function () {
            f[t] = !1;
            var n = u[t];
            delete u[t];
            var i = W.getAPIModule(e);
            if (!i) return void c();
            if (void 0 === p) {
              var _t10 = l(e);
              if (void 0 === _t10) return void c();
              p = _t10;
            }
            i.prepare(e, t, n).forEach(function (n) {
              p.redundancy.query(n, i.send, function (i, o) {
                var s = F.getStorage(e, t);
                if ("object" != (0, _typeof2["default"])(i)) {
                  if (404 !== o) return;
                  var _e12 = Date.now();
                  n.icons.forEach(function (t) {
                    s.missing[t] = _e12;
                  });
                } else try {
                  var _n9 = F.addIconSet(s, i, "all");
                  if ("boolean" == typeof _n9) return;
                  var _o3 = d[t];
                  _n9.forEach(function (e) {
                    delete _o3[e];
                  }), q.coreModules.cache && q.coreModules.cache(e, i);
                } catch (e) {
                  console.error(e);
                }
                !function (e, t) {
                  void 0 === r[e] && (r[e] = Object.create(null));
                  var n = r[e];
                  n[t] || (n[t] = !0, setTimeout(function () {
                    n[t] = !1, J.updateCallbacks(e, t);
                  }));
                }(e, t);
              });
            });
          }));
        }
        t.API = {
          isPending: function isPending(e) {
            return void 0 !== i[e.provider] && void 0 !== i[e.provider][e.prefix] && void 0 !== i[e.provider][e.prefix][e.name];
          },
          loadIcons: function loadIcons(e, t) {
            var o = Y.listToIcons(e, !0, L.allowSimpleNames()),
              r = G.sortIcons(o);
            if (!r.pending.length) {
              var _e13 = !0;
              return t && setTimeout(function () {
                _e13 && t(r.loaded, r.missing, r.pending, n);
              }), function () {
                _e13 = !1;
              };
            }
            var s = Object.create(null),
              c = [];
            var l, a;
            r.pending.forEach(function (e) {
              var t = e.provider,
                n = e.prefix;
              if (n === a && t === l) return;
              l = t, a = n, c.push({
                provider: t,
                prefix: n
              }), void 0 === i[t] && (i[t] = Object.create(null));
              var o = i[t];
              void 0 === o[n] && (o[n] = Object.create(null)), void 0 === s[t] && (s[t] = Object.create(null));
              var r = s[t];
              void 0 === r[n] && (r[n] = []);
            });
            var f = Date.now();
            return r.pending.forEach(function (e) {
              var t = e.provider,
                n = e.prefix,
                o = e.name,
                r = i[t][n];
              void 0 === r[o] && (r[o] = f, s[t][n].push(o));
            }), c.forEach(function (e) {
              var t = e.provider,
                n = e.prefix;
              s[t][n].length && u(t, n, s[t][n]);
            }), t ? J.storeCallback(t, r, c) : n;
          }
        };
      }),
      Z = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.APIInternalFunctions = t.APIFunctions = void 0, t.APIFunctions = {
          loadIcons: X.API.loadIcons,
          addAPIProvider: Q.setAPIConfig
        }, t.APIInternalFunctions = {
          getAPI: X.getRedundancyCache,
          getAPIConfig: Q.getAPIConfig,
          setAPIModule: W.setAPIModule
        };
      }),
      ee = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getAPIModule = void 0;
        var n = null,
          i = "{prefix}.js?icons={icons}&callback={callback}";
        var o = Object.create(null),
          r = Object.create(null);
        function s() {
          if (null === n) {
            var _e14 = self;
            var _t11 = "Iconify",
              _o4 = ".cb";
            if (void 0 === _e14[_t11]) _t11 = "IconifyJSONP", _o4 = "", void 0 === _e14[_t11] && (_e14[_t11] = Object.create(null)), n = _e14[_t11];else {
              var _i4 = _e14[_t11];
              void 0 === _i4.cb && (_i4.cb = Object.create(null)), n = _i4.cb;
            }
            i = i.replace("{callback}", _t11 + _o4 + ".{cb}");
          }
          return n;
        }
        t.getAPIModule = function (e) {
          return {
            prepare: function prepare(t, n, c) {
              var l = [];
              var a = o[t + ":" + n];
              void 0 === a && (a = function (t, n) {
                var c = e(t);
                if (!c) return 0;
                var l;
                if (c.maxURL) {
                  var _e15 = 0;
                  c.resources.forEach(function (t) {
                    var n = t;
                    _e15 = Math.max(_e15, n.length);
                  }), s();
                  var _o5 = 3;
                  l = c.maxURL - _e15 - c.path.length - i.replace("{provider}", t).replace("{prefix}", n).replace("{icons}", "").length - _o5;
                } else l = 0;
                var a = t + ":" + n;
                return r[a] = c.path, o[a] = l, l;
              }(t, n));
              var u = {
                  provider: t,
                  prefix: n,
                  icons: []
                },
                f = 0;
              return c.forEach(function (e, i) {
                f += e.length + 1, f >= a && i > 0 && (l.push(u), u = {
                  provider: t,
                  prefix: n,
                  icons: []
                }, f = e.length), u.icons.push(e);
              }), l.push(u), l;
            },
            send: function send(e, t, n) {
              var o = t.provider,
                c = t.prefix,
                l = t.icons.join(","),
                a = o + ":" + c,
                u = c.split("-").shift().slice(0, 3),
                f = s();
              var d = function (e) {
                var t,
                  n = 0;
                for (t = e.length - 1; t >= 0; t--) n += e.charCodeAt(t);
                return n % 999;
              }(o + ":" + e + ":" + c + ":" + l);
              for (; void 0 !== f[u + d];) d++;
              var p = u + d,
                h = r[a] + i.replace("{provider}", o).replace("{prefix}", c).replace("{icons}", l).replace("{cb}", p);
              f[p] = function (e) {
                delete f[p], n.done(e);
              };
              var g = e + h,
                m = document.createElement("script");
              m.type = "text/javascript", m.async = !0, m.src = g, document.head.appendChild(m);
            }
          };
        };
      }),
      te = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getAPIModule = t.setFetch = void 0;
        var n = "{prefix}.json?icons={icons}",
          i = Object.create(null),
          o = Object.create(null);
        var r = null;
        try {
          r = fetch;
        } catch (e) {}
        t.setFetch = function (e) {
          r = e;
        };
        t.getAPIModule = function (e) {
          return {
            prepare: function prepare(t, r, s) {
              var c = [];
              var l = i[r];
              void 0 === l && (l = function (t, r) {
                var s = e(t);
                if (!s) return 0;
                var c;
                if (s.maxURL) {
                  var _e16 = 0;
                  s.resources.forEach(function (t) {
                    var n = t;
                    _e16 = Math.max(_e16, n.length);
                  }), c = s.maxURL - _e16 - s.path.length - n.replace("{provider}", t).replace("{prefix}", r).replace("{icons}", "").length;
                } else c = 0;
                var l = t + ":" + r;
                return o[l] = s.path, i[l] = c, c;
              }(t, r));
              var a = {
                  provider: t,
                  prefix: r,
                  icons: []
                },
                u = 0;
              return s.forEach(function (e, n) {
                u += e.length + 1, u >= l && n > 0 && (c.push(a), a = {
                  provider: t,
                  prefix: r,
                  icons: []
                }, u = e.length), a.icons.push(e);
              }), c.push(a), c;
            },
            send: function send(e, t, i) {
              var s = t.provider,
                c = t.prefix,
                l = t.icons.join(","),
                a = o[s + ":" + c] + n.replace("{provider}", s).replace("{prefix}", c).replace("{icons}", l);
              r ? r(e + a).then(function (e) {
                if (200 === e.status) return e.json();
                i.done(void 0, e.status);
              }).then(function (e) {
                "object" == (0, _typeof2["default"])(e) && null !== e && i.done(e);
              })["catch"](function (e) {
                i.done(void 0, e.errno);
              }) : i.done(void 0, 424);
            }
          };
        };
      }),
      ne = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.storeCache = t.loadCache = t.mock = t.emptyList = t.count = t.config = void 0;
        var n = "iconify2",
          i = "iconify",
          o = "iconify-count",
          r = "iconify-version",
          s = 36e5;
        t.config = {
          local: !0,
          session: !0
        };
        var c = !1;
        t.count = {
          local: 0,
          session: 0
        }, t.emptyList = {
          local: [],
          session: []
        };
        var l = "undefined" == typeof window ? {} : window;
        function a(e) {
          var n = e + "Storage";
          try {
            if (l && l[n] && "number" == typeof l[n].length) return l[n];
          } catch (e) {}
          return t.config[e] = !1, null;
        }
        function u(e, n, i) {
          try {
            return e.setItem(o, i + ""), t.count[n] = i, !0;
          } catch (e) {
            return !1;
          }
        }
        function f(e) {
          var t = e.getItem(o);
          if (t) {
            var _e17 = parseInt(t);
            return _e17 || 0;
          }
          return 0;
        }
        t.mock = function (e) {
          c = !1, l = e;
        };
        t.loadCache = function () {
          if (c) return;
          c = !0;
          var e = Math.floor(Date.now() / s) - 168;
          function o(o) {
            var s = a(o);
            if (!s) return;
            var c = function c(t) {
              var n = i + t,
                o = s.getItem(n);
              if ("string" != typeof o) return !1;
              var r = !0;
              try {
                var _t12 = JSON.parse(o);
                if ("object" != (0, _typeof2["default"])(_t12) || "number" != typeof _t12.cached || _t12.cached < e || "string" != typeof _t12.provider || "object" != (0, _typeof2["default"])(_t12.data) || "string" != typeof _t12.data.prefix) r = !1;else {
                  var _e18 = _t12.provider,
                    _n10 = _t12.data.prefix,
                    _i5 = F.getStorage(_e18, _n10);
                  r = F.addIconSet(_i5, _t12.data);
                }
              } catch (e) {
                r = !1;
              }
              return r || s.removeItem(n), r;
            };
            try {
              var _e19 = s.getItem(r);
              if (_e19 !== n) return _e19 && function (e) {
                try {
                  var _t13 = f(e);
                  for (var _n11 = 0; _n11 < _t13; _n11++) e.removeItem(i + _n11);
                } catch (e) {}
              }(s), void function (e, t) {
                try {
                  e.setItem(r, n);
                } catch (e) {}
                u(e, t, 0);
              }(s, o);
              var _l2 = f(s);
              for (var _e20 = _l2 - 1; _e20 >= 0; _e20--) c(_e20) || (_e20 === _l2 - 1 ? _l2-- : t.emptyList[o].push(_e20));
              u(s, o, _l2);
            } catch (e) {}
          }
          for (var _e21 in t.config) o(_e21);
        };
        t.storeCache = function (e, n) {
          function o(o) {
            if (!t.config[o]) return !1;
            var r = a(o);
            if (!r) return !1;
            var c = t.emptyList[o].shift();
            if (void 0 === c && (c = t.count[o], !u(r, o, c + 1))) return !1;
            try {
              var _t14 = {
                cached: Math.floor(Date.now() / s),
                provider: e,
                data: n
              };
              r.setItem(i + c, JSON.stringify(_t14));
            } catch (e) {
              return !1;
            }
            return !0;
          }
          c || t.loadCache(), o("local") || o("session");
        };
      }),
      ie = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.toggleBrowserCache = void 0, t.toggleBrowserCache = function (e, t) {
          switch (e) {
            case "local":
            case "session":
              ne.config[e] = t;
              break;
            case "all":
              for (var _e22 in ne.config) ne.config[_e22] = t;
          }
        };
      }),
      oe = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.alignmentFromString = t.flipFromString = void 0;
        var n = /[\s,]+/;
        t.flipFromString = function (e, t) {
          t.split(n).forEach(function (t) {
            switch (t.trim()) {
              case "horizontal":
                e.hFlip = !0;
                break;
              case "vertical":
                e.vFlip = !0;
            }
          });
        }, t.alignmentFromString = function (e, t) {
          t.split(n).forEach(function (t) {
            var n = t.trim();
            switch (n) {
              case "left":
              case "center":
              case "right":
                e.hAlign = n;
                break;
              case "top":
              case "middle":
              case "bottom":
                e.vAlign = n;
                break;
              case "slice":
              case "crop":
                e.slice = !0;
                break;
              case "meet":
                e.slice = !1;
            }
          });
        };
      }),
      re = S(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.rotateFromString = void 0, t.rotateFromString = function (e) {
          var t = e.replace(/^-?[0-9.]*/, "");
          function n(e) {
            for (; e < 0;) e += 4;
            return e % 4;
          }
          if ("" === t) {
            var _t15 = parseInt(e);
            return isNaN(_t15) ? 0 : n(_t15);
          }
          if (t !== e) {
            var _i6 = 0;
            switch (t) {
              case "%":
                _i6 = 25;
                break;
              case "deg":
                _i6 = 90;
            }
            if (_i6) {
              var _o6 = parseFloat(e.slice(0, e.length - t.length));
              return isNaN(_o6) ? 0 : (_o6 /= _i6, _o6 % 1 == 0 ? n(_o6) : 0);
            }
          }
          return 0;
        };
      });
    var se = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": !0,
      role: "img"
    };
    L.storageFunctions.iconExists;
    var ce = L.storageFunctions.getIcon;
    L.storageFunctions.listIcons, L.storageFunctions.addIcon;
    var le = L.storageFunctions.addCollection,
      ae = z.builderFunctions.calculateSize;
    z.builderFunctions.replaceIDs, z.builderFunctions.buildIcon;
    var ue = Z.APIFunctions.loadIcons,
      fe = Z.APIFunctions.addAPIProvider,
      de = Z.APIInternalFunctions;
    L.allowSimpleNames(!0), q.coreModules.api = X.API;
    var pe = te.getAPIModule;
    try {
      "undefined" != typeof document && "undefined" != typeof window && (pe = "function" == typeof fetch && "function" == typeof Promise ? te.getAPIModule : ee.getAPIModule);
    } catch (e) {}
    if (W.setAPIModule("", pe(Q.getAPIConfig)), de.setFetch = function (e) {
      te.setFetch(e), pe !== te.getAPIModule && (pe = te.getAPIModule, W.setAPIModule("", pe(Q.getAPIConfig)));
    }, "undefined" != typeof document && "undefined" != typeof window) {
      q.coreModules.cache = ne.storeCache, ne.loadCache();
      var _e23 = window;
      if (void 0 !== _e23.IconifyPreload) {
        var _t16 = _e23.IconifyPreload,
          _n12 = "Invalid IconifyPreload syntax.";
        "object" == (0, _typeof2["default"])(_t16) && null !== _t16 && (_t16 instanceof Array ? _t16 : [_t16]).forEach(function (e) {
          try {
            ("object" != (0, _typeof2["default"])(e) || null === e || e instanceof Array || "object" != (0, _typeof2["default"])(e.icons) || "string" != typeof e.prefix || !le(e)) && console.error(_n12);
          } catch (e) {
            console.error(_n12);
          }
        });
      }
      if (void 0 !== _e23.IconifyProviders) {
        var _t17 = _e23.IconifyProviders;
        if ("object" == (0, _typeof2["default"])(_t17) && null !== _t17) for (var _e24 in _t17) {
          var _n13 = "IconifyProviders[" + _e24 + "] is invalid.";
          try {
            var _i7 = _t17[_e24];
            if ("object" != (0, _typeof2["default"])(_i7) || !_i7 || void 0 === _i7.resources) continue;
            Q.setAPIConfig(_e24, _i7) || console.error(_n13);
          } catch (e) {
            console.error(_n13);
          }
        }
      }
    }
    function he(e, t) {
      return e ? function (e, t) {
        var n = V.mergeCustomisations(V.defaults, t),
          i = M.merge(se);
        var o = "string" == typeof t.style ? t.style : "";
        for (var _e25 in t) {
          var _r3 = t[_e25];
          if (void 0 !== _r3) switch (_e25) {
            case "icon":
            case "style":
            case "onLoad":
              break;
            case "inline":
            case "hFlip":
            case "vFlip":
              n[_e25] = !0 === _r3 || "true" === _r3 || 1 === _r3;
              break;
            case "flip":
              "string" == typeof _r3 && oe.flipFromString(n, _r3);
              break;
            case "align":
              "string" == typeof _r3 && oe.alignmentFromString(n, _r3);
              break;
            case "color":
              o = o + (o.length > 0 && ";" !== o.trim().slice(-1) ? ";" : "") + "color: " + _r3 + "; ";
              break;
            case "rotate":
              "string" == typeof _r3 ? n[_e25] = re.rotateFromString(_r3) : "number" == typeof _r3 && (n[_e25] = _r3);
              break;
            case "ariaHidden":
            case "aria-hidden":
              !0 !== _r3 && "true" !== _r3 && delete i["aria-hidden"];
              break;
            default:
              void 0 === V.defaults[_e25] && (i[_e25] = _r3);
          }
        }
        var r = D.iconToSVG(e, n);
        for (var _e26 in r.attributes) i[_e26] = r.attributes[_e26];
        r.inline && (o = "vertical-align: -0.125em; " + o), "" !== o && (i.style = o);
        var s = 0;
        var c = t.id;
        return {
          attributes: i,
          body: N.replaceIDs(r.body, c ? function () {
            return c + "-" + s++;
          } : "iconify-svelte-")
        };
      }(e, t) : null;
    }
    function ge(e) {
      var n,
        i = e[0].body + "",
        o = [e[0].attributes],
        r = {};
      for (var _e27 = 0; _e27 < o.length; _e27 += 1) r = t(r, o[_e27]);
      return {
        c: function c() {
          n = function (e) {
            return document.createElementNS("http://www.w3.org/2000/svg", e);
          }("svg"), d(n, r);
        },
        m: function m(e, t) {
          l(e, n, t), n.innerHTML = i;
        },
        p: function p(e, t) {
          1 & t && i !== (i = e[0].body + "") && (n.innerHTML = i), d(n, r = function (e, t) {
            var n = {},
              i = {},
              o = {
                $$scope: 1
              };
            var r = e.length;
            for (; r--;) {
              var _s4 = e[r],
                _c2 = t[r];
              if (_c2) {
                for (var _e28 in _s4) _e28 in _c2 || (i[_e28] = 1);
                for (var _e29 in _c2) o[_e29] || (n[_e29] = _c2[_e29], o[_e29] = 1);
                e[r] = _c2;
              } else for (var _e30 in _s4) o[_e30] = 1;
            }
            for (var _e31 in i) _e31 in n || (n[_e31] = void 0);
            return n;
          }(o, [1 & t && e[0].attributes]));
        },
        d: function d(e) {
          e && a(n);
        }
      };
    }
    function me(t) {
      var n,
        i = null !== t[0] && ge(t);
      return {
        c: function c() {
          i && i.c(), n = u();
        },
        m: function m(e, t) {
          i && i.m(e, t), l(e, n, t);
        },
        p: function p(e, _ref) {
          var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
            t = _ref2[0];
          null !== e[0] ? i ? i.p(e, t) : (i = ge(e), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null);
        },
        i: e,
        o: e,
        d: function d(e) {
          i && i.d(e), e && a(n);
        }
      };
    }
    function ye(e, n, i) {
      var o = {
        name: "",
        loading: null,
        destroyed: !1
      };
      var r,
        s = !1,
        l = 0;
      function a() {
        i(3, l++, l);
      }
      var u;
      return u = function u() {
        i(2, s = !0);
      }, g().$$.on_mount.push(u), function (e) {
        g().$$.on_destroy.push(e);
      }(function () {
        i(1, o.destroyed = !0, o), o.loading && (o.loading.abort(), i(1, o.loading = null, o));
      }), e.$$set = function (e) {
        i(5, n = t(t({}, n), c(e)));
      }, e.$$.update = function () {
        {
          var _e32 = function (e, t, n, i, o) {
            function r() {
              t.loading && (t.loading.abort(), t.loading = null);
            }
            if ("object" == (0, _typeof2["default"])(e) && null !== e && "string" == typeof e.body) return t.name = "", r(), {
              data: T.fullIcon(e)
            };
            var s;
            if ("string" != typeof e || null === (s = E.stringToIcon(e, !1, !0))) return r(), null;
            var c = L.getIconData(s);
            if (null === c) return !n || t.loading && t.loading.name === e || (r(), t.name = "", t.loading = {
              name: e,
              abort: X.API.loadIcons([s], i)
            }), null;
            r(), t.name !== e && (t.name = e, o && !t.destroyed && o(e));
            var l = ["iconify"];
            return "" !== s.prefix && l.push("iconify--" + s.prefix), "" !== s.provider && l.push("iconify--" + s.provider), {
              data: c,
              classes: l
            };
          }(n.icon, o, s, a, n.onLoad);
          i(0, r = _e32 ? he(_e32.data, n) : null), r && _e32.classes && i(0, r.attributes["class"] = ("string" == typeof n["class"] ? n["class"] + " " : "") + _e32.classes.join(" "), r);
        }
      }, n = c(n), [r, o, s, l];
    }
    var $e = /*#__PURE__*/function (_ref3) {
      (0, _inherits2["default"])($e, _ref3);
      var _super = _createSuper($e);
      function $e(e) {
        var _this;
        (0, _classCallCheck2["default"])(this, $e);
        _this = _super.call(this), O((0, _assertThisInitialized2["default"])(_this), e, ye, me, s, {});
        return _this;
      }
      return (0, _createClass2["default"])($e);
    }( /*#__PURE__*/function () {
      function _class() {
        (0, _classCallCheck2["default"])(this, _class);
      }
      (0, _createClass2["default"])(_class, [{
        key: "$destroy",
        value: function $destroy() {
          !function (e, t) {
            var n = e.$$;
            null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
          }(this, 1), this.$destroy = e;
        }
      }, {
        key: "$on",
        value: function $on(e, t) {
          var n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(t), function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          };
        }
      }, {
        key: "$set",
        value: function $set(e) {
          var t;
          this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
        }
      }]);
      return _class;
    }());
    function ve(e) {
      var t = {
        exports: {}
      };
      return e(t, t.exports), t.exports;
    }
    var be = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.match = t.compareObjects = t.cloneObject = void 0, t.cloneObject = function e(t) {
          if ("object" != (0, _typeof2["default"])(t) || null === t) return t;
          if (t instanceof Array) return t.map(function (t) {
            return "object" == (0, _typeof2["default"])(t) ? e(t) : t;
          });
          var n = {};
          var i;
          for (i in t) "object" != (0, _typeof2["default"])(t[i]) ? n[i] = t[i] : n[i] = e(t[i]);
          return n;
        }, t.compareObjects = function e(t, n) {
          if ("object" != (0, _typeof2["default"])(t) || "object" != (0, _typeof2["default"])(n)) return t === n;
          if (t === n) return !0;
          if (null === t || null === n) return !1;
          if (t instanceof Array) {
            if (!(n instanceof Array)) return !1;
            if (t.length !== n.length) return !1;
            for (var _i8 = 0; _i8 < t.length; _i8++) {
              var _o7 = t[_i8],
                _r4 = n[_i8];
              if (_o7 !== _r4 && ("object" != (0, _typeof2["default"])(_o7) || "object" != (0, _typeof2["default"])(_r4) || !e(_o7, _r4))) return !1;
            }
            return !0;
          }
          if (n instanceof Array) return !1;
          var i = Object.keys(t),
            o = Object.keys(n);
          if (i.length !== o.length) return !1;
          for (var _o8 = 0; _o8 < i.length; _o8++) {
            var _r5 = i[_o8];
            if ((0, _typeof2["default"])(t[_r5]) != (0, _typeof2["default"])(n[_r5])) return !1;
            if ("object" == (0, _typeof2["default"])(t[_r5])) {
              if (!e(t[_r5], n[_r5])) return !1;
            } else if (t[_r5] !== n[_r5]) return !1;
          }
          return !0;
        }, t.match = function e(t, n) {
          if ("number" == typeof t && (t = "" + t), "string" == typeof t) return -1 !== t.toLowerCase().indexOf(n);
          if ("object" != (0, _typeof2["default"])(t) || null === t) return !1;
          if (t instanceof Array) {
            for (var _i9 = 0; _i9 < t.length; _i9++) if (e(t[_i9], n)) return !0;
            return !1;
          }
          for (var _i10 in t) if (e(t[_i10], n)) return !0;
          return !1;
        };
      }),
      ke = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.customisedConfig = t.createConfig = t.mergeConfig = t.setComponentsConfig = void 0;
        var n = {
          ui: {
            itemsPerPage: 52,
            viewUpdateDelay: 300,
            showSiblingCollections: 2
          },
          router: {
            home: "",
            syncRender: !1
          },
          components: {}
        };
        function i(e, t) {
          for (var _n14 in t) {
            var _i11 = _n14,
              _o9 = e[_i11];
            if (void 0 === _o9) continue;
            var _r6 = t[_i11];
            for (var _e33 in _r6) {
              var _t18 = _e33;
              void 0 !== _o9[_t18] && (_o9[_t18] = _r6[_t18]);
            }
          }
        }
        t.setComponentsConfig = function (e) {
          n.components = Object.assign(e);
        }, t.mergeConfig = i, t.createConfig = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t = be.cloneObject(n);
          return e && i(t, e), t;
        }, t.customisedConfig = function (e) {
          var t = {};
          for (var _i12 in e) {
            var _o10 = _i12,
              _r7 = n[_o10],
              _s5 = e[_o10],
              _c3 = {};
            var _l3 = !1;
            for (var _e34 in _s5) {
              var _t19 = _e34;
              _s5[_t19] !== _r7[_t19] && (_c3[_t19] = _s5[_t19], _l3 = !0);
            }
            _l3 && (t[_o10] = _c3);
          }
          return t;
        };
      }),
      _e = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Events = void 0;
        t.Events = /*#__PURE__*/function () {
          function _class2() {
            (0, _classCallCheck2["default"])(this, _class2);
            this._subscribers = Object.create(null);
          }
          (0, _createClass2["default"])(_class2, [{
            key: "subscribe",
            value: function subscribe(e, t, n) {
              void 0 === this._subscribers[e] ? this._subscribers[e] = [] : "string" == typeof n && (this._subscribers[e] = this._subscribers[e].filter(function (e) {
                return e.key !== n;
              })), this._subscribers[e].push({
                callback: t,
                key: n
              });
            }
          }, {
            key: "unsubscribe",
            value: function unsubscribe(e, t) {
              if (void 0 === this._subscribers[e]) return;
              var n;
              switch ((0, _typeof2["default"])(t)) {
                case "function":
                  n = "callback";
                  break;
                case "string":
                  n = "key";
                  break;
                default:
                  return;
              }
              this._subscribers[e] = this._subscribers[e].filter(function (e) {
                return e[n] !== t;
              });
            }
          }, {
            key: "hasListeners",
            value: function hasListeners(e) {
              return void 0 !== this._subscribers[e] && this._subscribers[e].length > 0;
            }
          }, {
            key: "fire",
            value: function fire(e, t) {
              var _this2 = this;
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
              this.hasListeners(e) && (n ? setTimeout(function () {
                _this2._fire(e, t);
              }) : this._fire(e, t));
            }
          }, {
            key: "_fire",
            value: function _fire(e, t) {
              this._subscribers[e].forEach(function (n) {
                n.callback(t, e);
              });
            }
          }]);
          return _class2;
        }();
      }),
      we = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.setIconify = t.Iconify = void 0, t.Iconify = {}, t.setIconify = function (e) {
          [e, e._api].forEach(function (e) {
            if ("object" == (0, _typeof2["default"])(e)) for (var _n15 in e) {
              var _i13 = e[_n15];
              "function" == typeof _i13 && (t.Iconify[_n15] = _i13);
            }
          });
        };
      }),
      xe = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.fullIcon = t.iconDefaults = t.minifyProps = t.matchName = void 0, t.matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/, t.minifyProps = ["width", "height", "top", "left"], t.iconDefaults = Object.freeze({
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          rotate: 0,
          vFlip: !1,
          hFlip: !1
        }), t.fullIcon = function (e) {
          return _objectSpread(_objectSpread({}, t.iconDefaults), e);
        };
      }),
      Ce = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.listProviders = t.addProvider = t.getProvider = t.convertProviderData = t.internalSourceCache = void 0;
        var n = {
            home: "",
            collection: "",
            icon: ""
          },
          i = {
            "package": "",
            icon: ""
          },
          o = {
            provider: "",
            title: "",
            api: "",
            links: n,
            npm: i
          };
        t.internalSourceCache = Object.create(null);
        var r = Object.create(null),
          s = "https://iconify.design/icon-sets/",
          c = "@iconify/icons-{prefix}";
        t.internalSourceCache[""] = {
          config: {},
          title: "Iconify",
          links: {
            home: s,
            collection: s + "{prefix}/",
            icon: s + "{prefix}/{name}.html"
          },
          npm: {
            "package": c,
            icon: c + "/{name}"
          }
        };
        var l = {
          title: "",
          links: n,
          npm: i
        };
        t.convertProviderData = function (e, t) {
          var n = t.provider;
          if ("string" != typeof n || "" !== n && !n.match(xe.matchName)) return null;
          var i = {};
          for (var _r8 in o) {
            var _s6 = _r8;
            var _c4 = void 0,
              _l4 = void 0;
            switch (_s6) {
              case "title":
                i.title = "string" == typeof t.title ? t.title : n;
                break;
              case "provider":
                i.provider = n;
                break;
              case "api":
                if ("string" == typeof t.api && "" !== t.api) i.api = [t.api];else if (t.api instanceof Array) i.api = t.api;else {
                  if ("" === e) return null;
                  i.api = [e];
                }
                break;
              case "npm":
              case "links":
                if (_c4 = o[_s6], "object" == (0, _typeof2["default"])(t[_s6]) && t[_s6]) {
                  var _e35 = t[_s6];
                  _l4 = {};
                  for (var _t20 in _c4) {
                    var _n16 = _t20;
                    "string" == typeof _e35[_n16] ? _l4[_n16] = _e35[_n16] : _l4[_n16] = _c4[_n16];
                  }
                } else _l4 = _c4;
                i[_s6] = _l4;
            }
          }
          var r = i;
          return {
            config: {
              resources: r.api
            },
            title: r.title,
            links: r.links,
            npm: r.npm
          };
        }, t.getProvider = function (e) {
          if (void 0 === r[e]) {
            if (void 0 === t.internalSourceCache[e]) return null;
            var _n17 = t.internalSourceCache[e],
              _i14 = we.Iconify.getAPI ? we.Iconify.getAPI(e) : void 0;
            if (void 0 === _i14) r[e] = null;else {
              r[e] = {
                config: _i14.config,
                redundancy: _i14.redundancy
              };
              var _t21 = r[e],
                _o11 = _n17;
              for (var _e36 in l) void 0 !== _o11[_e36] ? _t21[_e36] = _o11[_e36] : _t21[_e36] = l[_e36];
            }
          }
          return r[e];
        }, t.addProvider = function (e, n) {
          we.Iconify.addAPIProvider && void 0 === t.internalSourceCache[e] && (void 0 === n.title && (n.title = e), t.internalSourceCache[e] = n, we.Iconify.addAPIProvider(e, n.config));
        }, t.listProviders = function () {
          return Object.keys(t.internalSourceCache).sort();
        };
      }),
      je = ve(function (e, t) {
        function n(e, t) {
          var n = e,
            i = -1 !== n.indexOf("?");
          function o(e, t) {
            switch ((0, _typeof2["default"])(e)) {
              case "boolean":
                if (t) throw new Error("Nested boolean items are not allowed");
                return e ? "true" : "false";
              case "number":
              case "string":
                return encodeURIComponent(e);
              case "object":
                if (t) throw new Error("Nested objects are not allowed");
                if (e instanceof Array) return e.map(function (e) {
                  return o(e, !0);
                }).join(",");
                throw new Error("Objects are not allowed");
              default:
                throw new Error("Invalid type");
            }
          }
          return Object.keys(t).forEach(function (e) {
            var r;
            try {
              r = o(t[e], !1);
            } catch (e) {
              return;
            }
            n += (i ? "&" : "?") + encodeURIComponent(e) + "=" + r, i = !0;
          }), n;
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.searchCacheKey = t.collectionCacheKey = t.collectionsCacheKey = t.BaseAPI = t.mergeQuery = void 0, t.mergeQuery = n;
        t.BaseAPI = /*#__PURE__*/function () {
          function _class3(e) {
            (0, _classCallCheck2["default"])(this, _class3);
            this._cache = Object.create(null), this._registry = e, this._query = this._query.bind(this);
          }
          (0, _createClass2["default"])(_class3, [{
            key: "query",
            value: function query(e, t, i, o) {
              var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
              var s = n(t, i),
                c = "string" == typeof r ? r : s;
              void 0 === this._cache[e] && (this._cache[e] = Object.create(null));
              var l = this._cache[e];
              if (!1 !== r && void 0 !== l[c]) {
                var _e37 = l[c];
                return void o(null === _e37 ? null : JSON.parse(_e37), void 0, !0);
              }
              var a = this._getRedundancy(e);
              if (!a) return void o(null, !1);
              var u = a.find(function (e) {
                var t = e();
                return "pending" === t.status && t.payload === s;
              });
              null === u ? a.query(s, this._query.bind(this, e, !1 === r ? null : c), function (e, t) {
                o(e, t, !1);
              }) : u().subscribe(function (e, t) {
                o(e, t, !1);
              });
            }
          }, {
            key: "isCached",
            value: function isCached(e, t, i) {
              var o = n(t, i);
              return void 0 !== this._cache[e] && void 0 !== this._cache[e][o];
            }
          }, {
            key: "isPending",
            value: function isPending(e, t, i) {
              var o = this._getRedundancy(e);
              if (!o) return !1;
              var r = n(t, i);
              return null !== o.find(function (e) {
                var t = e();
                return "pending" === t.status && t.payload === r;
              });
            }
          }, {
            key: "_query",
            value: function _query(e, t, n, i, o) {
              throw new Error("_query() should not be called on base API class");
            }
          }, {
            key: "storeCache",
            value: function storeCache(e, t, n) {
              void 0 === this._cache[e] && (this._cache[e] = Object.create(null)), this._cache[e][t] = null === n ? null : JSON.stringify(n);
            }
          }, {
            key: "clearCache",
            value: function clearCache() {
              this._cache = Object.create(null);
            }
          }, {
            key: "_getRedundancy",
            value: function _getRedundancy(e) {
              var t = Ce.getProvider(e);
              return t ? t.redundancy : null;
            }
          }]);
          return _class3;
        }(), t.collectionsCacheKey = function () {
          return "collections";
        }, t.collectionCacheKey = function (e) {
          return "collection." + e;
        }, t.searchCacheKey = function (e, t) {
          return "search." + e + "." + t;
        };
      }),
      Ie = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.API = t.setFetch = void 0;
        var n = null;
        try {
          n = fetch;
        } catch (e) {}
        t.setFetch = function (e) {
          n = e;
        };
        var i = /*#__PURE__*/function (_je$BaseAPI) {
          (0, _inherits2["default"])(i, _je$BaseAPI);
          var _super2 = _createSuper(i);
          function i() {
            (0, _classCallCheck2["default"])(this, i);
            return _super2.apply(this, arguments);
          }
          (0, _createClass2["default"])(i, [{
            key: "sendQuery",
            value: function sendQuery(e, t, _i15) {
              n ? n(e + t).then(function (e) {
                if (200 === e.status) return e.json();
                _i15(void 0, e.status);
              }).then(function (e) {
                void 0 !== e && ("object" == (0, _typeof2["default"])(e) && null !== e ? _i15(e) : _i15(void 0, null));
              })["catch"](function (e) {
                _i15(void 0, null == e ? void 0 : e.errno);
              }) : _i15(void 0, 424);
            }
          }, {
            key: "_query",
            value: function _query(e, t, n, _i16, o) {
              var _this3 = this;
              this.sendQuery(n, _i16, function (n, _i17) {
                void 0 !== n && null !== t && _this3.storeCache(e, t, n), o.done(n, _i17);
              });
            }
          }]);
          return i;
        }(je.BaseAPI);
        t.API = i;
      }),
      Pe = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getRegistry = t.destroyRegistry = t.getSharedData = t.saveRegistry = t.addRegistry = t.uniqueId = void 0;
        var n = Object.create(null),
          i = Object.create(null);
        t.uniqueId = function (e) {
          var t,
            n = 0;
          for (; void 0 !== i[t = e + n];) n++;
          return t;
        }, t.addRegistry = function (e) {
          var t = e.namespace,
            i = e.id;
          return void 0 === n[t] ? (n[t] = {
            ids: [i],
            data: Object.create(null)
          }, !0) : (n[t].ids.push(i), !1);
        }, t.saveRegistry = function (e) {
          i[e.id] = e;
        }, t.getSharedData = function (e) {
          return n[e].data;
        }, t.destroyRegistry = function (e) {
          void 0 !== i[e.id] && (delete i[e.id], n[e.namespace].ids = n[e.namespace].ids.filter(function (t) {
            return t !== e.id;
          }));
        };
        t.getRegistry = function (e) {
          return i[e];
        };
      }),
      Oe = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.emptyRouteMinimum = t.customRouteMinimum = t.searchRouteMinimum = t.collectionRouteMinimum = t.collectionsRouteMinimum = t.emptyRouteDefaults = t.customRouteDefaults = t.searchRouteDefaults = t.collectionRouteDefaults = t.collectionsRouteDefaults = void 0, t.collectionsRouteDefaults = {
          provider: "",
          filter: "",
          category: null
        }, t.collectionRouteDefaults = {
          provider: "",
          prefix: "",
          filter: "",
          icon: "",
          page: 0,
          tag: null,
          themePrefix: null,
          themeSuffix: null
        }, t.searchRouteDefaults = {
          provider: "",
          search: "",
          "short": !0,
          page: 0
        }, t.customRouteDefaults = {
          customType: "",
          filter: "",
          page: 0
        }, t.emptyRouteDefaults = {}, t.collectionsRouteMinimum = {}, t.collectionRouteMinimum = {
          prefix: ""
        }, t.searchRouteMinimum = {
          search: ""
        }, t.customRouteMinimum = {
          customType: ""
        }, t.emptyRouteMinimum = {};
      }),
      Se = ve(function (e, t) {
        function n(e) {
          var t, n;
          switch (e) {
            case "collections":
              t = Oe.collectionsRouteDefaults, n = Oe.collectionsRouteMinimum;
              break;
            case "collection":
              t = Oe.collectionRouteDefaults, n = Oe.collectionRouteMinimum;
              break;
            case "search":
              t = Oe.searchRouteDefaults, n = Oe.searchRouteMinimum;
              break;
            case "custom":
              t = Oe.customRouteDefaults, n = Oe.customRouteMinimum;
              break;
            case "empty":
              t = Oe.emptyRouteDefaults, n = Oe.emptyRouteMinimum;
              break;
            default:
              throw new Error("Unknown route type: ".concat(e));
          }
          return {
            defaults: t,
            required: n
          };
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.objectToRoute = t.objectToRouteParams = t.routeToObject = t.routeParamsToObject = void 0;
        t.routeParamsToObject = function (e, t) {
          var i = {},
            _n18 = n(e),
            o = _n18.defaults,
            r = _n18.required;
          for (var _e38 in o) {
            var _n19 = t[_e38];
            void 0 === r[_e38] && _n19 === o[_e38] || (i[_e38] = _n19);
          }
          return i;
        };
        t.routeToObject = function (e) {
          var n = {
              type: e.type
            },
            i = t.routeParamsToObject(e.type, e.params);
          if (Object.keys(i).length > 0 && (n.params = i), e.parent) {
            var _i18 = t.routeToObject(e.parent);
            _i18 && (n.parent = _i18);
          }
          return n;
        };
        var i = ["filter", "search", "provider"];
        t.objectToRouteParams = function (e, t) {
          var o = {},
            _n20 = n(e),
            r = _n20.defaults,
            s = _n20.required;
          for (var _e39 in s) if ((0, _typeof2["default"])(t[_e39]) != (0, _typeof2["default"])(s[_e39]) || t[_e39] === s[_e39]) throw new Error("Missing required route parameter \"".concat(_e39, "\" in objectToRouteParams()"));
          for (var _n21 in r) {
            var _s7 = r[_n21];
            if (void 0 === t[_n21]) {
              o[_n21] = _s7;
              continue;
            }
            var _c5 = t[_n21];
            var _l5 = null === _s7 ? "string" : (0, _typeof2["default"])(_s7);
            (0, _typeof2["default"])(_c5) !== _l5 ? o[_n21] = null !== _c5 || "page" !== _n21 || "collection" !== e ? _s7 : _c5 : ("string" === _l5 && -1 !== i.indexOf(_n21) && (_c5 = _c5.toLowerCase()), o[_n21] = _c5);
          }
          return o;
        };
        t.objectToRoute = function (e) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          if (null === e || "object" != (0, _typeof2["default"])(e) || "string" != typeof e.type) return n;
          var i = e.type;
          switch (i) {
            case "collections":
            case "collection":
            case "custom":
            case "search":
            case "empty":
              break;
            default:
              return n;
          }
          var o;
          try {
            o = t.objectToRouteParams(i, "object" == (0, _typeof2["default"])(e.params) ? e.params : {});
          } catch (e) {
            return n;
          }
          var r = null;
          return "object" == (0, _typeof2["default"])(e.parent) && null !== e.parent && (r = t.objectToRoute(e.parent, null), null === r) ? n : {
            type: i,
            params: o,
            parent: r
          };
        };
      }),
      Ee = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.BaseView = void 0;
        t.BaseView = /*#__PURE__*/function () {
          function _class4() {
            (0, _classCallCheck2["default"])(this, _class4);
            this.type = "", this.parent = null, this.updating = !1, this.error = "", this.blocksRequireUpdate = !0, this.loading = !0, this._loadingTimer = null, this._alreadyLoaded = !1, this._startedLoading = !1, this.onLoad = null, this._mustWaitForParent = !1, this._isSync = null;
          }
          (0, _createClass2["default"])(_class4, [{
            key: "_checkSync",
            value: function _checkSync() {
              return null === this._isSync && (this._isSync = !!Pe.getRegistry(this._instance).config.router.syncRender), this._isSync;
            }
          }, {
            key: "_parentAction",
            value: function _parentAction(e) {
              if (null === this.parent) return;
              var t = "number" == typeof e && e > 0 ? e : 1;
              Pe.getRegistry(this._instance).router.setParentView(t);
            }
          }, {
            key: "_providerAction",
            value: function _providerAction(e) {
              if ("string" != typeof e) return;
              if (!Ce.getProvider(e)) return;
              Pe.getRegistry(this._instance).router.home(e);
            }
          }, {
            key: "startLoading",
            value: function startLoading() {
              this._startedLoading || (this.loading ? (this._mustWaitForParent && null !== this.parent && this.parent.startLoading(), this._startLoading()) : this._startedLoading = !0);
            }
          }, {
            key: "_startLoading",
            value: function _startLoading() {
              var _this4 = this;
              this._startedLoading = !0, this._checkSync() ? this._startLoadingData() : setTimeout(function () {
                _this4._startLoadingData();
              });
            }
          }, {
            key: "_startLoadingData",
            value: function _startLoadingData() {
              throw new Error("startLoading should not be called on base view");
            }
          }, {
            key: "_searchAction",
            value: function _searchAction(e, t) {
              if ("string" != typeof t || "" === t.trim()) return;
              var n = t.trim().toLowerCase();
              var i = this,
                o = 0;
              for (; "collections" !== i.type;) {
                if (null === i.parent) return;
                i = i.parent, o++;
              }
              Pe.getRegistry(this._instance).router.createChildView({
                type: "search",
                params: {
                  provider: e,
                  search: n
                }
              }, o);
            }
          }, {
            key: "_loadAPI",
            value: function _loadAPI(e, t, n) {
              var _this5 = this;
              var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
              Pe.getRegistry(this._instance).api.query(e, t, n, function (e, t) {
                void 0 !== e ? null !== e && _this5._mustWaitForParent ? _this5._waitForParent(function () {
                  _this5._parseAPIData(e);
                }) : _this5._parseAPIData(e) : _this5.loading && (_this5.error = 404 === t ? "not_found" : "timeout", _this5.loading = !1, _this5._triggerLoaded());
              }, i);
            }
          }, {
            key: "_waitForParent",
            value: function _waitForParent(e) {
              this._mustWaitForParent && null !== this.parent && this.parent.loading ? this.parent.onLoad = e : e();
            }
          }, {
            key: "_parseAPIData",
            value: function _parseAPIData(e) {
              throw new Error("_parseAPIData should not be called on base view");
            }
          }, {
            key: "_triggerLoaded",
            value: function _triggerLoaded() {
              if (this._alreadyLoaded) return void this._triggerUpdated();
              this._alreadyLoaded = !0;
              if (Pe.getRegistry(this._instance).events.fire("view-loaded", this), null !== this.onLoad) {
                var _e40 = this.onLoad;
                this.onLoad = null, _e40();
              }
            }
          }, {
            key: "_triggerUpdated",
            value: function _triggerUpdated() {
              var _this6 = this;
              if (!this.updating) {
                this.updating = !0;
                var _e41 = function _e41() {
                  _this6.updating = !1;
                  Pe.getRegistry(_this6._instance).events.fire("view-updated", _this6);
                };
                this._checkSync() ? _e41() : setTimeout(_e41);
              }
            }
          }]);
          return _class4;
        }();
      }),
      Me = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isCollectionsFilterBlockEmpty = t.defaultCollectionsFilterBlock = void 0;
        t.defaultCollectionsFilterBlock = function () {
          return {
            type: "collections-filter",
            keyword: ""
          };
        }, t.isCollectionsFilterBlockEmpty = function (e) {
          return null == e || "" === e.keyword.trim();
        };
      }),
      Te = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.dataToCollectionInfo = void 0;
        t.dataToCollectionInfo = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          if ("object" != (0, _typeof2["default"])(e) || null === e) return null;
          var n = e,
            i = function i(e, t) {
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
              if ("object" != (0, _typeof2["default"])(n[e])) return i;
              var o = n[e];
              return "string" == typeof o[t] ? o[t] : i;
            };
          var o, r;
          if ("string" == typeof n.name) o = n.name;else {
            if ("string" != typeof n.title) return null;
            o = n.title;
          }
          if ("" === t) {
            if ("string" != typeof n.prefix) return null;
            r = n.prefix;
          } else {
            if ("string" == typeof n.prefix && n.prefix !== t) return null;
            r = t;
          }
          var s = {
            prefix: r,
            name: o,
            total: "number" == typeof n.total ? n.total : 0,
            version: "string" == typeof n.version ? n.version : "",
            author: {
              name: i("author", "name", "string" == typeof n.author ? n.author : "Unknown"),
              url: i("author", "url", "")
            },
            license: {
              title: i("license", "title", "string" == typeof n.license ? n.license : "Unknown"),
              spdx: i("license", "spdx", ""),
              url: i("license", "url", "")
            },
            samples: [],
            category: "string" == typeof n.category ? n.category : "",
            palette: "boolean" == typeof n.palette && n.palette
          };
          if ("string" == typeof n.total) {
            var _e42 = parseInt(n.total);
            _e42 > 0 && (s.total = _e42);
          }
          if (n.samples instanceof Array && n.samples.forEach(function (e) {
            s.samples.length < 3 && "string" == typeof e && s.samples.push(e);
          }), "number" == typeof n.height || "string" == typeof n.height) {
            var _e43 = parseInt(n.height);
            _e43 > 0 && (s.height = _e43);
          }
          if (n.height instanceof Array) switch (n.height.forEach(function (e) {
            var t = parseInt(e);
            t > 0 && (s.height instanceof Array || (s.height = []), s.height.push(t));
          }), s.height.length) {
            case 0:
              delete s.height;
              break;
            case 1:
              s.height = s.height[0];
          }
          if ("number" == typeof s.height) {
            for (s.displayHeight = s.height; s.displayHeight < 16;) s.displayHeight *= 2;
            for (; s.displayHeight > 24;) s.displayHeight /= 2;
            (s.displayHeight !== Math.round(s.displayHeight) || s.displayHeight < 16 || s.displayHeight > 24) && delete s.displayHeight;
          }
          if ("number" == typeof n.displayHeight || "string" == typeof n.displayHeight) {
            var _e44 = parseInt(n.displayHeight);
            _e44 >= 16 && _e44 <= 24 && Math.round(_e44) === _e44 && (s.displayHeight = _e44);
          }
          if ("string" == typeof n.palette) switch (n.palette.toLowerCase()) {
            case "colorless":
            case "false":
              s.palette = !1;
              break;
            case "colorful":
            case "true":
              s.palette = !0;
          }
          return Object.keys(n).forEach(function (e) {
            var t = n[e];
            if ("string" == typeof t) switch (e) {
              case "url":
              case "uri":
                s.author.url = t;
                break;
              case "licenseURL":
              case "licenseURI":
                s.license.url = t;
                break;
              case "licenseID":
              case "licenseSPDX":
                s.license.spdx = t;
            }
          }), s;
        };
      }),
      Ae = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.autoIndexCollections = t.filterCollections = t.collectionsPrefixes = t.dataToCollections = void 0, t.dataToCollections = function (e) {
          var t = Object.create(null),
            n = Object.create(null);
          return "object" != (0, _typeof2["default"])(e) || null === e || (Object.keys(e).forEach(function (i) {
            var o = e[i];
            if ("object" != (0, _typeof2["default"])(o) || null === o || "string" != typeof o.category) return;
            var r = Te.dataToCollectionInfo(o, i);
            if (null === r) return;
            var s = o.category;
            "" !== s ? (void 0 === t[s] && (t[s] = Object.create(null)), t[s][i] = r) : n[i] = r;
          }), Object.keys(n).length > 0 && (t[""] = n)), t;
        }, t.collectionsPrefixes = function (e) {
          var t = [];
          return Object.keys(e).forEach(function (n) {
            t = t.concat(Object.keys(e[n]));
          }), t;
        }, t.filterCollections = function (e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          var i = Object.create(null);
          return Object.keys(e).forEach(function (o) {
            n && (i[o] = Object.create(null)), Object.keys(e[o]).forEach(function (n) {
              var r = e[o][n];
              t(r, o, n) && (void 0 === i[o] && (i[o] = Object.create(null)), i[o][n] = r);
            });
          }), i;
        }, t.autoIndexCollections = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = t;
          Object.keys(e).forEach(function (t) {
            var i = e[t];
            Object.keys(i).forEach(function (e) {
              i[e].index = n++;
            });
          });
        };
      }),
      Re = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.autoIndexFilters = t.enableFilters = t.isFiltersBlockEmpty = t.defaultFiltersBlock = t.defaultFilter = void 0;
        t.defaultFilter = function (e) {
          return {
            title: e,
            index: 0,
            disabled: !1
          };
        };
        t.defaultFiltersBlock = function () {
          return {
            type: "filters",
            filterType: "",
            active: null,
            filters: Object.create(null)
          };
        }, t.isFiltersBlockEmpty = function (e) {
          return null == e || Object.keys(e.filters).length < 2;
        }, t.enableFilters = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          Object.keys(e.filters).forEach(function (n) {
            e.filters[n].disabled = !t;
          });
        }, t.autoIndexFilters = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = t;
          return Object.keys(e.filters).forEach(function (t) {
            e.filters[t].index = n++;
          }), n;
        };
      }),
      Fe = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.applyCollectionsFilter = t.disableInactiveCategories = t.filterCollectionsBlock = t.iterateCollectionsBlock = t.collectionsPrefixesWithInfo = t.getCollectionsBlockPrefixes = t.getCollectionsBlockCategories = t.isCollectionsBlockEmpty = t.defaultCollectionsListBlock = void 0;
        function n(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return {
            type: "collections-list",
            showCategories: e.showCategories,
            collections: Ae.filterCollections(e.collections, t, n)
          };
        }
        t.defaultCollectionsListBlock = function () {
          return {
            type: "collections-list",
            showCategories: !0,
            collections: Object.create(null)
          };
        }, t.isCollectionsBlockEmpty = function (e) {
          if (null == e) return !0;
          var t = Object.keys(e.collections);
          for (var _n22 = 0; _n22 < t.length; _n22++) if (Object.keys(e.collections[t[_n22]]).length > 0) return !1;
          return !0;
        }, t.getCollectionsBlockCategories = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var n = Object.keys(e.collections);
          return t && (n = n.filter(function (t) {
            return Object.keys(e.collections[t]).length > 0;
          })), n;
        }, t.getCollectionsBlockPrefixes = function (e) {
          return Ae.collectionsPrefixes(e.collections);
        }, t.collectionsPrefixesWithInfo = function (e) {
          var t = [];
          return Object.keys(e.collections).forEach(function (n) {
            var i = e.collections[n];
            Object.keys(i).forEach(function (e) {
              null !== i[e] && t.push(i[e]);
            });
          }), t;
        }, t.iterateCollectionsBlock = function (e, t) {
          Object.keys(e.collections).forEach(function (n) {
            var i = e.collections[n];
            Object.keys(i).forEach(function (e) {
              t(i[e], e, n);
            });
          });
        }, t.filterCollectionsBlock = n, t.disableInactiveCategories = function (e, t) {
          if (null === t) return e;
          var n = {
            type: "collections-list",
            showCategories: e.showCategories,
            collections: Object.create(null)
          };
          return void 0 !== e.collections[t] && (n.collections[t] = e.collections[t]), n;
        };
        var i = ["prefix", "name", "author", "license", "category", "palette", "height"];
        t.applyCollectionsFilter = function (e, t, o) {
          var r = t.keyword.trim(),
            s = null !== o && "categories" === o.filterType,
            c = o;
          if ("" === r) return s && Re.enableFilters(c, !0), e;
          var l = {};
          return s && Re.enableFilters(c, !1), n(e, function (e, t) {
            for (var _n23 = i.length - 1; _n23 >= 0; _n23--) {
              var _o12 = i[_n23];
              if (void 0 !== e[_o12] && be.match(e[_o12], r)) return s && !0 !== l[t] && (l[t] = !0, void 0 !== c.filters[t] && (c.filters[t].disabled = !1)), !0;
            }
            return !1;
          }, !1);
        };
      }),
      Le = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getCollectionTitle = t.getCollectionInfo = t.setCollectionInfo = void 0, t.setCollectionInfo = function (e, t, n, i) {
          void 0 === e[t] && (e[t] = Object.create(null));
          var o = e[t];
          (void 0 === o[n] || i.index) && (o[n] = i);
        }, t.getCollectionInfo = function (e, t, n) {
          return void 0 === e[t] || void 0 === e[t][n] ? null : e[t][n];
        }, t.getCollectionTitle = function (e, t, n) {
          return void 0 === e[t] || void 0 === e[t][n] ? n : e[t][n].name;
        };
      }),
      Ne = ve(function (e, t) {
        function n(e, t, n) {
          var i = {
              prefix: {
                hasEmpty: !1,
                hasUncategorized: !1,
                values: [],
                titles: Object.create(null),
                found: Object.create(null),
                test: function test(e, t) {
                  return e.slice(0, t.length) === t;
                }
              },
              suffix: {
                hasEmpty: !1,
                hasUncategorized: !1,
                values: [],
                titles: Object.create(null),
                found: Object.create(null),
                test: function test(e, t) {
                  return e.slice(0 - t.length) === t;
                }
              }
            },
            o = ["prefix", "suffix"],
            r = {
              prefix: null,
              suffix: null
            };
          if ("object" == (0, _typeof2["default"])(e.themes) && e.themes) {
            var _t22 = e.themes;
            Object.keys(_t22).forEach(function (e) {
              var n = _t22[e];
              o.forEach(function (e) {
                var t = e;
                if ("string" == typeof n[t]) {
                  var _i19 = n[t];
                  null === r[e] && (r[e] = Object.create(null)), r[e][_i19] = n.title;
                }
              });
            });
          }
          o.forEach(function (t) {
            var n = t + "es";
            if ("object" == (0, _typeof2["default"])(e[n]) && null !== e[n] && (r[t] = e[n]), !r[t]) return void delete i[t];
            var o = i[t],
              s = r[t];
            Object.keys(s).forEach(function (e) {
              var n = s[e];
              if ("" !== e) switch (t) {
                case "prefix":
                  "-" !== e.slice(-1) && (e += "-");
                  break;
                case "suffix":
                  "-" !== e.slice(0, 1) && (e = "-" + e);
              }
              void 0 === o.titles[e] && ("" === e ? o.hasEmpty = !0 : o.values.push(e), o.titles[e] = n, o.found[e] = 0);
            }), Object.keys(o.titles).length || delete i[t];
          }), Object.keys(i).forEach(function (e) {
            var o = i[e],
              r = o.values,
              s = "prefix" === e ? "themePrefixes" : "themeSuffixes";
            r.sort(function (e, t) {
              return e.length === t.length ? e.localeCompare(t) : t.length - e.length;
            }), t.forEach(function (e) {
              (e.aliases ? [e.name].concat(e.aliases) : [e.name]).forEach(function (t, n) {
                var i = null;
                for (var _e45 = 0; _e45 < r.length; _e45++) {
                  var _n24 = r[_e45];
                  if (o.test(t, _n24)) {
                    o.found[_n24]++, i = _n24;
                    break;
                  }
                }
                null === i && o.hasEmpty && !n && (i = "", o.found[""]++);
                var c = null === i ? "" : o.titles[i];
                if (null === i) {
                  if (n > 0) return;
                  o.hasUncategorized = !0, i = "";
                }
                if (void 0 === e[s]) return void (e[s] = [c]);
                var l = e[s];
                -1 === l.indexOf(c) && l.push(c);
              });
            });
            var c = [];
            switch (Object.keys(o.titles).forEach(function (e) {
              o.found[e] && c.push(o.titles[e]);
            }), o.hasUncategorized && c.push(""), c.length) {
              case 0:
                break;
              case 1:
                t.forEach(function (e) {
                  delete e[s];
                });
                break;
              default:
                n[s] = c;
            }
          });
        }
        function i(e, t) {
          Object.keys(e).forEach(function (n) {
            var i = e[n];
            if (void 0 !== t[i]) {
              var _e46 = t[i];
              void 0 === _e46.chars && (_e46.chars = []), _e46.chars.push(n);
            }
          });
        }
        function o(e) {
          var t = [];
          return Object.keys(e).sort(function (e, t) {
            return e.localeCompare(t);
          }).forEach(function (n) {
            t.push(e[n]);
          }), t;
        }
        function r(e, t) {
          return "" === e ? 1 : "" === t ? -1 : e.localeCompare(t);
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.rawDataToCollection = t.dataToCollection = void 0, t.dataToCollection = function (e, t) {
          if ("object" != (0, _typeof2["default"])(t) || null === t) return null;
          var s = t;
          if ("string" != typeof s.prefix) return null;
          var c = {
            provider: e,
            prefix: s.prefix,
            name: "",
            total: 0,
            icons: []
          };
          if ("object" == (0, _typeof2["default"])(s.info) && null !== s.info) {
            var _e47 = Te.dataToCollectionInfo(s.info, c.prefix);
            if (null === _e47) return null;
            c.info = _e47;
          }
          if ("string" == typeof s.name) c.name = s.name;else if ("string" == typeof s.title) c.name = s.title;else {
            if (void 0 === c.info) return null;
            c.name = c.info.name;
          }
          var l = "object" == (0, _typeof2["default"])(s.categories) && null !== s.categories ? Object.keys(s.categories) : [],
            a = !1,
            u = "uncategorized";
          ["uncategorized", "uncategorised"].forEach(function (e) {
            "object" == (0, _typeof2["default"])(s[e]) && s[e] instanceof Array && s[e].length > 0 && (u = e, a = !0);
          });
          var f = Object.create(null);
          function d(t, n) {
            var i = !1;
            return t.forEach(function (t) {
              if ("string" == typeof t) if (i = !0, void 0 !== f[t]) void 0 === f[t].tags && (f[t].tags = []), -1 === f[t].tags.indexOf(n) && f[t].tags.push(n);else {
                var _i20 = {
                  provider: e,
                  prefix: c.prefix,
                  name: t,
                  tags: [n]
                };
                f[t] = _i20;
              }
            }), i;
          }
          l = l.filter(function (e) {
            var t = !1;
            var n = s.categories[e];
            return n instanceof Array ? t = d(n, e) : Object.keys(n).forEach(function (i) {
              var o = n[i];
              o instanceof Array && (t = d(o, e) || t);
            }), t;
          });
          var p = l.length > 0;
          if (a) {
            s[u].forEach(function (t) {
              if ("string" == typeof t && void 0 === f[t]) {
                var _n25 = {
                  provider: e,
                  prefix: c.prefix,
                  name: t
                };
                return p && (_n25.tags = [""]), void (f[t] = _n25);
              }
            }), p && l.push("");
          }
          "object" == (0, _typeof2["default"])(s.chars) && i(s.chars, f);
          var h = Object.create(null);
          if ("object" == (0, _typeof2["default"])(s.aliases)) {
            var _e48 = s.aliases;
            Object.keys(_e48).forEach(function (t) {
              var n = _e48[t];
              if (void 0 !== f[n]) {
                var _e49 = f[n];
                return void 0 === _e49.aliases && (_e49.aliases = []), void _e49.aliases.push(t);
              }
              void 0 === h[n] && (h[n] = []), h[n].push(t);
            });
          }
          if (s.hidden instanceof Array) {
            var _e50 = [];
            s.hidden.forEach(function (t) {
              _e50.push(t), void 0 !== h[t] && (_e50 = _e50.concat(h[t]));
            }), c.hidden = _e50;
          }
          var g = o(f);
          return l.length > 1 ? c.tags = l.sort(r) : p && g.forEach(function (e) {
            delete e.tags;
          }), n(s, g, c), c.icons = g, c.total = c.icons.length, c.info && (c.info.total = c.total), c;
        }, t.rawDataToCollection = function (e) {
          function t(n) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (i > 3) return null;
            if (void 0 !== a[n]) return n;
            if (void 0 !== e.icons[n]) return e.icons[n].hidden ? null : (a[n] = {
              provider: c.provider,
              prefix: c.prefix,
              name: n,
              tags: []
            }, n);
            if (e.aliases && void 0 !== e.aliases[n] && !e.aliases[n].hidden) {
              var _o13 = e.aliases[n],
                _r9 = t(_o13.parent, i + 1);
              if (null !== _r9) {
                if (_o13.rotate || _o13.hFlip || _o13.vFlip) return a[n] = {
                  provider: c.provider,
                  prefix: c.prefix,
                  name: n,
                  tags: []
                }, n;
                {
                  var _e51 = a[_r9];
                  return _e51.aliases ? -1 === _e51.aliases.indexOf(n) && _e51.aliases.push(n) : _e51.aliases = [n], _r9;
                }
              }
            }
            return null;
          }
          function s(e, t) {
            var n = !1;
            return e.forEach(function (e) {
              void 0 !== a[e] && -1 === a[e].tags.indexOf(t) && (a[e].tags.push(t), n = !0);
            }), n;
          }
          if ("string" != typeof e.prefix) return null;
          var c = {
            provider: "string" == typeof e.provider ? e.provider : "",
            prefix: e.prefix,
            name: "",
            total: 0,
            icons: []
          };
          if ("object" != (0, _typeof2["default"])(e.info) || null === e.info) return null;
          var l = Te.dataToCollectionInfo(e.info, c.prefix);
          if (null === l) return null;
          c.info = l, c.name = c.info.name;
          var a = Object.create(null);
          Object.keys(e.icons).forEach(function (e) {
            return t(e);
          }), "object" == (0, _typeof2["default"])(e.aliases) && Object.keys(e.aliases).forEach(function (e) {
            return t(e);
          });
          var u = Object.keys(a),
            f = [];
          if ("object" == (0, _typeof2["default"])(e.categories) && null !== e.categories) {
            var _t23 = !1;
            var _n26 = e.categories;
            Object.keys(_n26).forEach(function (e) {
              var t = _n26[e];
              t instanceof Array ? s(t, e) && f.push(e) : "object" == (0, _typeof2["default"])(t) && Object.keys(t).forEach(function (n) {
                var i = t[n];
                i instanceof Array && s(i, e) && -1 === f.indexOf(e) && f.push(e);
              });
            }), u.forEach(function (e) {
              a[e].tags.length || (a[e].tags.push(""), _t23 = !0);
            }), _t23 && f.push("");
          }
          f.length < 2 ? Object.keys(a).forEach(function (e) {
            delete a[e].tags;
          }) : c.tags = f.sort(r), "object" == (0, _typeof2["default"])(e.chars) && i(e.chars, a);
          var d = o(a);
          return n(e, d, c), c.icons = d, c.total = c.info.total = c.icons.length, c;
        };
      }),
      Be = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.mergeCollections = t.convertCustomSets = t.emptyConvertedSet = void 0, t.emptyConvertedSet = {
          merge: "custom-last",
          providers: Object.create(null)
        }, t.convertCustomSets = function (e) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          if (!e.iconSets || !e.iconSets.length) return t.emptyConvertedSet;
          var i = "only-custom";
          switch (e.merge) {
            case "custom-first":
            case "custom-last":
            case "only-custom":
              i = e.merge;
              break;
            case void 0:
              break;
            default:
              e.merge;
          }
          var o = {
              merge: i,
              providers: Object.create(null)
            },
            r = Object.create(null);
          return e.iconSets.forEach(function (t) {
            if ("string" != typeof t.prefix) return;
            "string" == typeof e.provider && (t.provider = e.provider);
            var i = "string" == typeof t.provider ? t.provider : "";
            !t.info && e.info && e.info[t.prefix] && (t.info = e.info[t.prefix]);
            var s = Ne.rawDataToCollection(t);
            if (!s) return;
            void 0 === o.providers[i] && (o.providers[i] = {
              total: 0,
              data: Object.create(null),
              collections: {}
            });
            var c = o.providers[i];
            if (void 0 !== c.data[s.prefix]) return;
            c.data[s.prefix] = s, c.total++, void 0 === r[i] && (r[i] = Object.create(null));
            var l = Object.assign({}, t.info);
            l.total = s.total, r[i][s.prefix] = l, n && we.Iconify.addCollection && we.Iconify.addCollection(t);
          }), Object.keys(r).forEach(function (e) {
            o.providers[e].collections = Ae.dataToCollections(r[e]);
          }), o;
        }, t.mergeCollections = function (e, t, n) {
          var i = [];
          if (t && i.push({
            isCustom: !1,
            categories: t
          }), n) {
            var _t24 = n.providers[e].collections;
            i["custom-first" === n.merge ? "unshift" : "push"]({
              isCustom: !0,
              categories: _t24
            });
          }
          var o = Object.create(null),
            r = Object.create(null);
          return i.forEach(function (e) {
            var t = e.categories;
            Object.keys(t).forEach(function (n) {
              var i = t[n];
              Object.keys(i).forEach(function (t) {
                if (void 0 !== r[t]) {
                  if (!e.isCustom) return;
                  delete o[r[t]][t];
                }
                r[t] = n, void 0 === o[n] && (o[n] = Object.create(null)), o[n][t] = i[t];
              });
            });
          }), o;
        };
      }),
      Ve = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.CollectionsView = void 0;
        var n = /*#__PURE__*/function (_Ee$BaseView) {
          (0, _inherits2["default"])(n, _Ee$BaseView);
          var _super3 = _createSuper(n);
          function n(e, t) {
            var _this7;
            var _n27 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            (0, _classCallCheck2["default"])(this, n);
            _this7 = _super3.call(this), _this7._data = null, _this7._blocks = null, _this7.type = "collections", _this7._instance = e, _this7.route = t, _this7.provider = t.params.provider, _this7.parent = _n27;
            var i = Pe.getRegistry(_this7._instance),
              o = i.customIconSets;
            void 0 !== o.providers[_this7.provider] ? _this7._sources = {
              custom: !0,
              api: "only-custom" !== o.merge,
              merge: o.merge
            } : _this7._sources = {
              custom: !1,
              api: !0
            };
            var r = i.getCustom("core-cache");
            if ("object" == (0, _typeof2["default"])(r)) {
              var _e52 = r[_this7.provider];
              _e52 && _e52.collections && (_this7._data = _e52.collections);
            }
            return _this7;
          }
          (0, _createClass2["default"])(n, [{
            key: "_startLoadingData",
            value: function _startLoadingData() {
              !this._data && this._sources.api ? this._loadAPI(this.provider, "/collections", {}, je.collectionsCacheKey()) : this._parseAPIData(null);
            }
          }, {
            key: "action",
            value: function action(e, t) {
              switch (e) {
                case "parent":
                  return void this._parentAction(t);
                case "provider":
                  return void (t !== this.provider && this._providerAction(t));
                case "search":
                  return void (this._sources.api && this._searchAction(this.provider, t));
                case "filter":
                  if ("string" != typeof t) return;
                  if (t = t.trim().toLowerCase(), this.route.params.filter === t) return;
                  this.route.params.filter = t, this.blocksRequireUpdate = !0;
                  break;
                case "categories":
                  if (null !== t && "string" != typeof t || t === this.route.params.category) return;
                  this.route.params.category = t, this.blocksRequireUpdate = !0;
                  break;
                case "collections-internal":
                  if ("string" != typeof t || "" === t) return;
                  return void this._triggerCollectionAction(t, 1);
                case "collections":
                  if ("string" != typeof t || "" === t) return;
                  return void this._triggerCollectionAction(t, 0);
                default:
                  return;
              }
              this._triggerUpdated();
            }
          }, {
            key: "_triggerCollectionAction",
            value: function _triggerCollectionAction(e, t) {
              if (!this.loading && null !== this._data && "" === this.error) {
                var _t25 = Object.keys(this._data);
                var _n28 = !1;
                for (var _i21 = 0; _i21 < _t25.length; _i21++) if (void 0 !== this._data[_t25[_i21]][e]) {
                  _n28 = !0;
                  break;
                }
                if (!_n28) return;
              }
              Pe.getRegistry(this._instance).router.createChildView({
                type: "collection",
                params: {
                  provider: this.provider,
                  prefix: e
                }
              }, t);
            }
          }, {
            key: "render",
            value: function render() {
              if (this.loading || null === this._blocks || null === this._data) return null;
              if (!this.blocksRequireUpdate || "" !== this.error) return this._blocks;
              this.blocksRequireUpdate = !1;
              var e = this._blocks,
                t = "string" == typeof this.route.params.filter ? this.route.params.filter : "",
                _n29 = "string" == typeof this.route.params.category ? this.route.params.category : null;
              return e.filter.keyword = t, e.categories.active = _n29, e.collections.collections = this._data, e.collections = Fe.applyCollectionsFilter(e.collections, e.filter, e.categories), null !== _n29 && (e.collections = Fe.disableInactiveCategories(e.collections, _n29)), e;
            }
          }, {
            key: "getCollectionsBlock",
            value: function getCollectionsBlock() {
              if (this.loading || "" !== this.error) return null;
              var e = this.render();
              return null !== e && null !== e.collections ? e.collections : null;
            }
          }, {
            key: "_parseAPIData",
            value: function _parseAPIData(e) {
              var _this8 = this;
              if (!this._sources.api || e || this._data ? this._data || (this._data = Be.mergeCollections(this.route.params.provider, this._sources.api ? Ae.dataToCollections(e) : null, this._sources.custom ? Pe.getRegistry(this._instance).customIconSets : null)) : this._data = null, this.loading = !1, this.blocksRequireUpdate = !0, this.error = "", this._blocks = {
                filter: Me.defaultCollectionsFilterBlock(),
                categories: Re.defaultFiltersBlock(),
                collections: Fe.defaultCollectionsListBlock()
              }, this._blocks.categories.filterType = "categories", null === this._data) this.error = null === e ? "not_found" : "invalid_data";else {
                Ae.autoIndexCollections(this._data), this._blocks.collections.collections = this._data;
                var _e53 = Fe.getCollectionsBlockCategories(this._blocks.collections, !0);
                if (0 === _e53.length) this.error = "empty";else {
                  if (_e53.length > 1) {
                    this._blocks.collections.showCategories = !0;
                    var _t26 = this._blocks.categories.filters;
                    _e53.forEach(function (e) {
                      _t26[e] = Re.defaultFilter(e);
                    }), Re.autoIndexFilters(this._blocks.categories);
                  } else this._blocks.collections.showCategories = !1;
                  var _t27 = Pe.getRegistry(this._instance).collections;
                  Fe.iterateCollectionsBlock(this._blocks.collections, function (e, _n30) {
                    Le.setCollectionInfo(_t27, _this8.provider, _n30, e);
                  });
                }
              }
              this._triggerLoaded();
            }
          }]);
          return n;
        }(Ee.BaseView);
        t.CollectionsView = n;
      }),
      De = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isCollectionInfoBlockEmpty = t.defaultCollectionInfoBlock = void 0;
        t.defaultCollectionInfoBlock = function () {
          return {
            type: "collection-info",
            prefix: "",
            info: null
          };
        }, t.isCollectionInfoBlockEmpty = function (e) {
          return null == e || null === e.info;
        };
      }),
      ze = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.applyIconFilters = t.isIconsListBlockEmpty = t.defaultIconsListBlock = void 0;
        t.defaultIconsListBlock = function () {
          return {
            type: "icons-list",
            icons: []
          };
        }, t.isIconsListBlockEmpty = function (e) {
          return null == e || e.icons.length < 1;
        };
        var n = ["name", "chars", "aliases"],
          i = ["prefix", "name", "chars", "aliases"];
        t.applyIconFilters = function (e, t) {
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
          var s = e.icons.slice(0);
          var c = r ? i : n,
            l = t ? t.keyword.trim() : "";
          if ("" !== l) {
            var _e54 = l.toLowerCase().split(/[\s:]/).map(function (e) {
              return e.trim();
            }).filter(function (e) {
              return e.length > 0;
            });
            if (_e54.length) {
              var _t28 = c.slice(0);
              _e54.forEach(function (e) {
                var n = !1;
                ("-" !== e.slice(0, 1) || (n = !0, (e = e.slice(1)).length)) && (s = s.filter(function (i) {
                  var o = i;
                  var r = !1;
                  return _t28.forEach(function (t) {
                    r || void 0 === o[t] || ("string" != typeof o[t] ? o[t] instanceof Array && o[t].forEach(function (t) {
                      r = r || -1 !== t.indexOf(e);
                    }) : r = -1 !== o[t].indexOf(e));
                  }), n ? !r : r;
                }));
              });
            }
          }
          var a = s.length !== e.icons.length;
          return o.forEach(function (e) {
            if (Re.enableFilters(e, !0), !a) return;
            var t = e.filterType;
            null !== t && Object.keys(e.filters).forEach(function (n) {
              for (var _e55 = s.length - 1; _e55 >= 0; _e55--) {
                var _i22 = s[_e55][t];
                if (null != _i22) if ("string" != typeof _i22) {
                  if (_i22 instanceof Array && -1 !== _i22.indexOf(n)) return;
                } else if (_i22 === n) return;
              }
              e.filters[n].disabled = !0;
            });
          }), o.forEach(function (e) {
            if (null === e.active) return;
            var t = e.active,
              n = e.filterType;
            null !== n && (s = s.filter(function (e) {
              var i = e[n];
              return null != i && ("string" == typeof i ? i === t : i instanceof Array && -1 !== i.indexOf(t));
            }));
          }), e.icons = s, e;
        };
      }),
      qe = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.showPagination = t.getPageForIndex = t.maxPage = t.isPaginationEmpty = t.defaultPaginationBlock = void 0;
        function n(e) {
          return e.perPage && e.length > 0 ? Math.floor((e.length - 1) / e.perPage) : 0;
        }
        t.defaultPaginationBlock = function () {
          return {
            type: "pagination",
            page: 0,
            length: 0,
            perPage: 24,
            more: !1
          };
        }, t.isPaginationEmpty = function (e) {
          return null == e || e.length <= e.perPage;
        }, t.maxPage = n, t.getPageForIndex = function (e, t) {
          return e && t > 0 ? Math.floor(t / e) : 0;
        }, t.showPagination = function (e) {
          var t = e.length ? n(e) + 1 : 0,
            i = [];
          var o, r;
          if (t < 2) return i;
          if (t < 14) {
            for (o = 0; o < t; o++) i.push(o);
            return i;
          }
          for (o = 0; o < Math.min(t, 3); o++) i.push(o);
          if ((r = o) >= t) return i;
          for (o = r === e.page - 3 ? r : Math.max(e.page - 2, r); o < Math.min(e.page + 3, t); o++) i.push(o);
          if ((r = o) >= t) return i;
          for (o = r === t - 4 ? t - 4 : Math.max(t - 3, r); o < t; o++) i.push(o);
          return i;
        };
      }),
      Ue = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isSearchBlockEmpty = t.defaultSearchBlock = void 0;
        t.defaultSearchBlock = function () {
          return {
            type: "search",
            keyword: ""
          };
        }, t.isSearchBlockEmpty = function (e) {
          return null == e || "" === e.keyword.trim();
        };
      }),
      He = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.CollectionView = void 0;
        var n = ["tags", "themePrefixes", "themeSuffixes"];
        var i = /*#__PURE__*/function (_Ee$BaseView2) {
          (0, _inherits2["default"])(i, _Ee$BaseView2);
          var _super4 = _createSuper(i);
          function i(e, t) {
            var _this9;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            (0, _classCallCheck2["default"])(this, i);
            _this9 = _super4.call(this), _this9._data = null, _this9._blocks = null, _this9.type = "collection", _this9._instance = e, _this9.route = t, _this9.provider = t.params.provider, _this9.parent = n, _this9.prefix = t.params.prefix;
            var _i23 = Pe.getRegistry(_this9._instance),
              o = _i23.customIconSets;
            if (void 0 !== o.providers[_this9.provider] && void 0 !== o.providers[_this9.provider].data[_this9.prefix] ? (_this9._isCustom = !0, _this9._data = o.providers[_this9.provider].data[_this9.prefix]) : _this9._isCustom = !1, _this9._mustWaitForParent = null !== n && ("search" === n.type || "collections" === n.type), !_this9._data) {
              var _e56 = _i23.getCustom("core-cache");
              if ("object" == (0, _typeof2["default"])(_e56) && _e56[_this9.provider]) {
                var _t29 = _e56[_this9.provider].collection;
                _t29 && _t29[_this9.prefix] && (_this9._data = _t29[_this9.prefix]);
              }
            }
            return _this9;
          }
          (0, _createClass2["default"])(i, [{
            key: "_startLoadingData",
            value: function _startLoadingData() {
              if (this._data) this._parseAPIData(null);else {
                var _e57 = {
                  prefix: this.prefix,
                  info: "true",
                  chars: "true",
                  aliases: "true"
                };
                "" !== this.route.params.icon && (_e57.hidden = "true"), this._loadAPI(this.provider, "/collection", _e57, je.collectionCacheKey(this.prefix));
              }
            }
          }, {
            key: "action",
            value: function action(e, t) {
              switch (e) {
                case "parent":
                  return void this._parentAction(t);
                case "provider":
                  return void (t !== this.provider && this._providerAction(t));
                case "search":
                  return void this._searchAction(this.provider, t);
                case "filter":
                  if ("string" != typeof t) return;
                  if ((t = t.trim().toLowerCase()) === this.route.params.filter) return;
                  this.route.params.filter = t, this.blocksRequireUpdate = !0;
                  break;
                case "pagination":
                  if ("string" == typeof t && (t = parseInt(t)), "number" != typeof t || isNaN(t) || t < 0 || t === this.route.params.page) return;
                  this.route.params.page = t, this.blocksRequireUpdate = !0;
                  break;
                case "icons-nav":
                  if ("" === t || null === t) {
                    this.route.params.icon = "";
                    break;
                  }
                  if ("string" != typeof t) return;
                  this.route.params.icon = t, this.route.params.page = null, this.blocksRequireUpdate = !0;
                  break;
                case "tags":
                  return void this._filterAction("tag", t);
                case "themePrefixes":
                  return void this._filterAction("themePrefix", t);
                case "themeSuffixes":
                  return void this._filterAction("themeSuffix", t);
                case "collections":
                  return void this._collectionsAction(t);
                default:
                  return;
              }
              this._triggerUpdated();
            }
          }, {
            key: "_filterAction",
            value: function _filterAction(e, t) {
              null !== t && "string" != typeof t || this.route.params[e] !== t && (this.route.params[e] = t, this.blocksRequireUpdate = !0, this._triggerUpdated());
            }
          }, {
            key: "_collectionsAction",
            value: function _collectionsAction(e) {
              null === this.parent || "search" !== this.parent.type && "collections" !== this.parent.type || (e !== this.prefix && null !== e ? "string" == typeof e && this.parent.action("collections-internal", e) : this._parentAction(1));
            }
          }, {
            key: "_getIconIndex",
            value: function _getIconIndex(e, t) {
              for (var _n31 = 0; _n31 < e.length; _n31++) {
                var _i24 = e[_n31];
                if (_i24.name === t) return _n31;
                if (_i24.aliases) {
                  var _e58 = _i24.aliases;
                  for (var _i29 = 0; _i29 < _e58.length; _i29++) if (_e58[_i29] === t) return _n31;
                }
              }
              return !1;
            }
          }, {
            key: "render",
            value: function render() {
              if (this.loading || null === this._blocks || null === this._data) return null;
              if (!this.blocksRequireUpdate || "" !== this.error) return this._blocks;
              this.blocksRequireUpdate = !1;
              var e = this._blocks;
              e.icons.icons = this._data.icons.slice(0), e.filter.keyword = this.route.params.filter, null !== e.tags && (e.tags.active = this.route.params.tag), null !== e.themePrefixes && (e.themePrefixes.active = this.route.params.themePrefix), null !== e.themeSuffixes && (e.themeSuffixes.active = this.route.params.themeSuffix);
              var t = e.icons.icons;
              var _i26 = this.route.params.icon;
              var o = "" !== _i26 && this._getIconIndex(t, _i26);
              if (!1 !== o) {
                var _n32 = t.length - 1;
                e["icons-nav"] = {
                  type: "icons-nav",
                  first: t[0],
                  last: t[_n32],
                  reference: t[o],
                  prev: o > 0 ? t[o - 1] : void 0,
                  next: o < _n32 ? t[o + 1] : void 0
                };
              } else "" !== _i26 && this._data.hidden && -1 !== this._data.hidden.indexOf(_i26) ? e["icons-nav"] = {
                type: "icons-nav",
                first: t[0],
                last: t[t.length - 1],
                reference: {
                  provider: this.provider,
                  prefix: this.prefix,
                  name: _i26
                }
              } : e["icons-nav"] = null;
              e.icons = ze.applyIconFilters(e.icons, e.filter, n.filter(function (t) {
                return null !== e[t];
              }).map(function (t) {
                return e[t];
              })), t = e.icons.icons;
              var r = e.pagination.perPage;
              var s;
              null !== this.route.params.page ? s = this.route.params.page : "" === _i26 ? s = 0 : (t.length !== this._data.icons.length && (o = this._getIconIndex(t, _i26)), s = !1 === o ? 0 : qe.getPageForIndex(r, o)), e.pagination.length = e.icons.icons.length, e.pagination.page = s;
              var c = qe.maxPage(e.pagination);
              c < e.pagination.page && (this.route.params.page = e.pagination.page = c);
              var l = e.pagination.page * r;
              return e.icons.icons = t.slice(l, l + r), this._blocks;
            }
          }, {
            key: "_parseAPIData",
            value: function _parseAPIData(e) {
              this._data || this._isCustom || (this._data = Ne.dataToCollection(this.provider, e)), this.loading = !1, this.blocksRequireUpdate = !0, this.error = "", this._blocks = {
                info: De.defaultCollectionInfoBlock(),
                filter: Object.assign(Ue.defaultSearchBlock(), {
                  keyword: this.route.params.filter,
                  searchType: "collection",
                  title: this.prefix
                }),
                collections: null,
                tags: null,
                themePrefixes: null,
                themeSuffixes: null,
                icons: ze.defaultIconsListBlock(),
                pagination: qe.defaultPaginationBlock(),
                "icons-nav": null
              };
              var t = this._blocks;
              if (null === this._data) return this.error = null === e ? "not_found" : "invalid_data", void this._triggerLoaded();
              var _i27 = this._data;
              if (this.prefix !== _i27.prefix) return this.error = "invalid_data", void this._triggerLoaded();
              var o = Pe.getRegistry(this._instance),
                r = o.config,
                s = o.collections;
              if (t.info.prefix = this.prefix, void 0 !== _i27.info && Le.setCollectionInfo(s, this.provider, this.prefix, _i27.info), t.info.info = Le.getCollectionInfo(s, this.provider, this.prefix), null !== t.info.info && (t.filter.title = t.info.info.name), _i27.total < 1) this.error = "empty";else {
                var _e59 = t.pagination;
                _e59.perPage = r.ui.itemsPerPage, _e59.fullLength = _e59.length = _i27.icons.length;
                var _o14 = this.route.params.page;
                if (_e59.page = null === _o14 ? 0 : Math.min(_o14, qe.maxPage(_e59)), this.parent && !this.parent.loading) if ("search" === this.parent.type) {
                  var _e60 = this.parent.getCollectionsBlock();
                  null !== _e60 && (this._blocks.collections = _e60, this._blocks.collections.active = this.prefix);
                } else "collections" === this.parent.type && (this._blocks.collections = this._findSiblingCollections());
                var _s8 = 0;
                n.forEach(function (e) {
                  var n = e;
                  if (void 0 !== _i27[n]) {
                    var _o15 = _i27[n];
                    if (_o15 instanceof Array && _o15.length > 1) {
                      var _n33 = Re.defaultFiltersBlock();
                      _n33.filterType = e, t[e] = _n33, _o15.forEach(function (e) {
                        _n33.filters[e] = Re.defaultFilter(e);
                      }), _s8 = Re.autoIndexFilters(_n33, _s8);
                    }
                  }
                });
              }
              this._triggerLoaded();
            }
          }, {
            key: "_findSiblingCollections",
            value: function _findSiblingCollections() {
              var _this10 = this;
              var e = this.parent.getCollectionsBlock();
              if (null === e) return null;
              var t = Fe.collectionsPrefixesWithInfo(e),
                n = t.find(function (e) {
                  return e.prefix === _this10.prefix;
                });
              if (void 0 === n || t.length < 2) return null;
              var _i28 = Pe.getRegistry(this._instance).config.ui.showSiblingCollections;
              var o = [];
              if (t.length < 2 * _i28 + 2) o = t.slice(0);else {
                var _e61 = t.indexOf(n);
                for (var _n34 = _e61 - _i28; _n34 < _e61; _n34++) o.push(t[(_n34 + t.length) % t.length]);
                o.push(n);
                for (var _n35 = _e61 + 1; _n35 <= _e61 + _i28; _n35++) o.push(t[_n35 % t.length]);
              }
              var r = Re.defaultFiltersBlock();
              return r.filterType = "collections", r.active = this.prefix, o.forEach(function (e) {
                var t = Re.defaultFilter(e.name);
                t.index = e.index, r.filters[e.prefix] = t;
              }), r;
            }
          }]);
          return i;
        }(Ee.BaseView);
        t.CollectionView = i;
      }),
      Ke = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.validateIcon = t.stringToIcon = void 0;
        t.stringToIcon = function (e, n, i) {
          var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
          var r = e.split(":");
          if ("@" === e.slice(0, 1)) {
            if (r.length < 2 || r.length > 3) return null;
            o = r.shift().slice(1);
          }
          if (r.length > 3 || !r.length) return null;
          if (r.length > 1) {
            var _e62 = r.pop(),
              _i30 = r.pop(),
              _s9 = {
                provider: r.length > 0 ? r[0] : o,
                prefix: _i30,
                name: _e62
              };
            return n && !t.validateIcon(_s9) ? null : _s9;
          }
          var s = r[0],
            c = s.split("-");
          if (c.length > 1) {
            var _e63 = {
              provider: o,
              prefix: c.shift(),
              name: c.join("-")
            };
            return n && !t.validateIcon(_e63) ? null : _e63;
          }
          if (i && "" === o) {
            var _e64 = {
              provider: o,
              prefix: "",
              name: s
            };
            return n && !t.validateIcon(_e64, i) ? null : _e64;
          }
          return null;
        };
        t.validateIcon = function (e, t) {
          return !!e && !("" !== e.provider && !e.provider.match(xe.matchName) || !(t && "" === e.prefix || e.prefix.match(xe.matchName)) || !e.name.match(xe.matchName));
        };
      }),
      Ge = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.iconToString = t.compareIcons = t.validateIcon = t.stringToIcon = t.match = void 0, Object.defineProperty(t, "validateIcon", {
          enumerable: !0,
          get: function get() {
            return Ke.validateIcon;
          }
        }), t.match = /^[a-z0-9]+(-[a-z0-9]+)*$/;
        t.stringToIcon = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          return Ke.stringToIcon(e, t, !1, n);
        };
        t.compareIcons = function (e, t) {
          return null !== e && null !== t && e.provider === t.provider && e.name === t.name && e.prefix === t.prefix;
        };
        t.iconToString = function (e) {
          return ("" === e.provider ? "" : "@" + e.provider + ":") + e.prefix + ":" + e.name;
        };
      }),
      Je = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.dataToSearchResults = void 0, t.dataToSearchResults = function (e, t) {
          if ("object" != (0, _typeof2["default"])(t) || null === t) return null;
          var n = t;
          if ("object" != (0, _typeof2["default"])(n.request) || null === n.request) return null;
          var i = n.request;
          if ("string" != typeof i.query) return null;
          if ("number" != typeof n.total || "number" != typeof n.limit) return null;
          var o = {
            provider: e,
            query: i.query,
            total: n.total,
            limit: n.limit,
            icons: [],
            collections: Object.create(null)
          };
          if ("object" != (0, _typeof2["default"])(n.collections) || !(n.icons instanceof Array)) return null;
          var r = n.icons,
            s = n.collections;
          try {
            r.forEach(function (t) {
              var n = Ge.stringToIcon(t, !0, e);
              if (null === n) throw new Error("Invalid icon");
              o.icons.push(n);
              var i = n.prefix;
              if (void 0 === o.collections[i]) {
                if (void 0 === s[i]) throw new Error("Missing data for prefix ".concat(i));
                var _e65 = Te.dataToCollectionInfo(s[i], i);
                if (null === _e65) throw new Error("Invalid data for prefix ".concat(i));
                o.collections[i] = _e65;
              }
            });
          } catch (e) {
            return null;
          }
          return o.total = o.icons.length, o;
        };
      }),
      We = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SearchView = void 0;
        var n = /*#__PURE__*/function (_Ee$BaseView3) {
          (0, _inherits2["default"])(n, _Ee$BaseView3);
          var _super5 = _createSuper(n);
          function n(e, t) {
            var _this11;
            var _n36 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            (0, _classCallCheck2["default"])(this, n);
            _this11 = _super5.call(this), _this11._data = null, _this11._blocks = null, _this11.type = "search", _this11._instance = e, _this11.route = t, _this11.provider = t.params.provider, _this11.parent = _n36, _this11.keyword = t.params.search;
            var i = Pe.getRegistry(_this11._instance),
              o = i.config;
            _this11.itemsPerPage = o.ui.itemsPerPage, _this11.route.params.page > 1 && (_this11.route.params["short"] = !1);
            var r = i.getCustom("core-cache");
            if ("object" == (0, _typeof2["default"])(r) && r[_this11.provider]) {
              var _e66 = r[_this11.provider].search;
              _e66 && _e66[_this11.keyword] && (_this11._data = _e66[_this11.keyword], _this11.route.params["short"] = !1);
            }
            _this11.itemsLimit = _this11.route.params["short"] ? 2 * _this11.itemsPerPage : 999;
            return _this11;
          }
          (0, _createClass2["default"])(n, [{
            key: "_startLoadingData",
            value: function _startLoadingData() {
              if (this._data) this._parseAPIData(null);else {
                var _e67 = this.keyword,
                  _t30 = this.itemsLimit;
                this._loadAPI(this.provider, "/search", {
                  query: _e67,
                  limit: _t30
                }, je.searchCacheKey(_e67, _t30));
              }
            }
          }, {
            key: "action",
            value: function action(e, t) {
              switch (e) {
                case "parent":
                  return void this._parentAction(t);
                case "provider":
                  return void (t !== this.provider && this._providerAction(t));
                case "search":
                  if ("string" != typeof t) return;
                  if ((t = t.trim().toLowerCase()) === this.keyword) return;
                  return void this._searchAction(this.provider, t);
                case "pagination":
                  if ("more" === t && this._showMoreButton() && (t = this.route.params.page + 1), "string" == typeof t && (t = parseInt(t)), "number" != typeof t || isNaN(t) || t === this.route.params.page || t < 0) return;
                  if (t > 0 && this._showMoreButton()) return void this._triggerFullResults(t);
                  this.route.params.page = t, this.blocksRequireUpdate = !0;
                  break;
                case "collections":
                  return void this._collectionsAction(t, 0);
                case "collections-internal":
                  return void this._collectionsAction(t, 1);
                default:
                  return;
              }
              this._triggerUpdated();
            }
          }, {
            key: "_collectionsAction",
            value: function _collectionsAction(e, t) {
              if (null !== e && "string" != typeof e) return;
              if (this.loading || null === this._blocks || null === this._blocks.collections) return;
              var _n37 = Pe.getRegistry(this._instance).router;
              if (null === e) return void _n37.setParentView(t);
              var i = e;
              _n37.createChildView({
                type: "collection",
                params: {
                  provider: this.provider,
                  prefix: i,
                  filter: this.keyword
                }
              }, t);
            }
          }, {
            key: "_triggerFullResults",
            value: function _triggerFullResults(e) {
              Pe.getRegistry(this._instance).router.createChildView({
                type: "search",
                params: Object.assign({}, this.route.params, {
                  page: e,
                  "short": !1
                })
              }, 1);
            }
          }, {
            key: "render",
            value: function render() {
              if (this.loading || null === this._blocks || null === this._data) return null;
              if (!this.blocksRequireUpdate || "" !== this.error) return this._blocks;
              this.blocksRequireUpdate = !1;
              var e = this._blocks;
              e.icons.icons = this._data.icons.slice(0), null !== e.collections && (e.collections.active = null), e.pagination.length = e.icons.icons.length, e.pagination.page = this.route.params.page;
              var t = qe.maxPage(e.pagination);
              t < e.pagination.page && (this.route.params.page = e.pagination.page = t);
              var _n38 = e.pagination.page * this.itemsPerPage;
              return e.icons.icons = e.icons.icons.slice(_n38, _n38 + this.itemsPerPage), this._blocks;
            }
          }, {
            key: "getCollectionsBlock",
            value: function getCollectionsBlock() {
              if (this.loading || "" !== this.error) return null;
              var e = this.render();
              return null !== e && null !== e.collections ? be.cloneObject(e.collections) : null;
            }
          }, {
            key: "_showMoreButton",
            value: function _showMoreButton() {
              return null !== this._data && this.route.params["short"] && this._data.total === this._data.limit;
            }
          }, {
            key: "_parseAPIData",
            value: function _parseAPIData(e) {
              var _this12 = this;
              this._data || (this._data = Je.dataToSearchResults(this.provider, e)), this.loading = !1, this.blocksRequireUpdate = !0, this.error = "", this._blocks = {
                collections: null,
                icons: ze.defaultIconsListBlock(),
                pagination: qe.defaultPaginationBlock()
              };
              var t = this._blocks;
              if (null === this._data) return this.error = null === e ? "not_found" : "invalid_data", void this._triggerLoaded();
              var _n39 = this._data;
              if (this.keyword !== _n39.query) return this.error = "invalid_data", void this._triggerLoaded();
              if (_n39.limit && (this.itemsLimit = _n39.limit), _n39.total < 1) this.error = "empty";else {
                var _e68 = t.pagination;
                _e68.perPage = this.itemsPerPage, _e68.fullLength = _e68.length = _n39.icons.length, _e68.page = Math.min(this.route.params.page, qe.maxPage(_e68)), _e68.more = this._showMoreButton();
                var _i31 = Object.keys(_n39.collections),
                  _o16 = Pe.getRegistry(this._instance).collections;
                if (_i31.forEach(function (e) {
                  Le.setCollectionInfo(_o16, _this12.provider, e, _n39.collections[e]);
                }), _i31.length > 1) {
                  var _e69 = Re.defaultFiltersBlock();
                  this._blocks.collections = _e69, _e69.filterType = "collections", _i31.forEach(function (t) {
                    _e69.filters[t] = Re.defaultFilter(_n39.collections[t].name);
                  }), Re.autoIndexFilters(_e69);
                }
              }
              this._triggerLoaded();
            }
          }]);
          return n;
        }(Ee.BaseView);
        t.SearchView = n;
      }),
      Qe = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.CustomView = void 0;
        var n = /*#__PURE__*/function (_Ee$BaseView4) {
          (0, _inherits2["default"])(n, _Ee$BaseView4);
          var _super6 = _createSuper(n);
          function n(e, t) {
            var _this13;
            var _n40 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            (0, _classCallCheck2["default"])(this, n);
            _this13 = _super6.call(this), _this13._data = null, _this13._blocks = null, _this13.type = "custom", _this13._instance = e, _this13.route = t, _this13.parent = _n40, _this13.customType = t.params.customType, _this13._mustWaitForParent = !0;
            return _this13;
          }
          (0, _createClass2["default"])(n, [{
            key: "_startLoadingData",
            value: function _startLoadingData() {
              if (null !== this._data) return;
              Pe.getRegistry(this._instance).events.fire("load-" + this.customType, this.setIcons.bind(this));
            }
          }, {
            key: "action",
            value: function action(e, t) {
              switch (e) {
                case "parent":
                  return void this._parentAction(t);
                case "provider":
                  return void this._providerAction(t);
                case "set":
                  return void this.setIcons(t);
                case "filter":
                  if ("string" != typeof t) return;
                  if ((t = t.trim().toLowerCase()) === this.route.params.filter) return;
                  this.route.params.filter = t, this.blocksRequireUpdate = !0;
                  break;
                case "pagination":
                  if ("string" == typeof t && (t = parseInt(t)), "number" != typeof t || isNaN(t) || t < 0 || t === this.route.params.page) return;
                  this.route.params.page = t, this.blocksRequireUpdate = !0;
                  break;
                default:
                  return;
              }
              this._triggerUpdated();
            }
          }, {
            key: "render",
            value: function render() {
              if (this.loading || null === this._blocks || null === this._data) return null;
              if (!this.blocksRequireUpdate || "" !== this.error) return this._blocks;
              this.blocksRequireUpdate = !1;
              var e = this._blocks;
              e.icons.icons = this._data.slice(0), e.filter.keyword = this.route.params.filter, e.icons = ze.applyIconFilters(e.icons, e.filter, [], !0);
              var t = Pe.getRegistry(this._instance).config.ui.itemsPerPage;
              e.pagination.length = e.icons.icons.length, e.pagination.page = this.route.params.page;
              var _n41 = qe.maxPage(e.pagination);
              _n41 < e.pagination.page && (this.route.params.page = e.pagination.page = _n41);
              var i = e.pagination.page * t;
              return e.icons.icons = e.icons.icons.slice(i, i + t), this._blocks;
            }
          }, {
            key: "setIcons",
            value: function setIcons(e) {
              var _this14 = this;
              this._waitForParent(function () {
                _this14._checkSync() ? _this14._setIcons(e) : setTimeout(function () {
                  _this14._setIcons(e);
                });
              });
            }
          }, {
            key: "_setIcons",
            value: function _setIcons(e) {
              var t = e,
                _n42 = !1;
              t instanceof Array || (_n42 = !0, t = []);
              var i = t.map(function (e) {
                if ("string" == typeof e && (e = Ge.stringToIcon(e)), "object" == (0, _typeof2["default"])(e) && Ge.validateIcon(e)) {
                  var _t31 = e;
                  return {
                    provider: _t31.provider,
                    prefix: _t31.prefix,
                    name: _t31.name
                  };
                }
                return null;
              }).filter(function (e) {
                return null !== e;
              });
              this._data = i, this.loading = !1, this.blocksRequireUpdate = !0, this.error = "", this._blocks = {
                filter: Object.assign(Ue.defaultSearchBlock(), {
                  keyword: this.route.params.filter,
                  searchType: "custom",
                  title: this.customType
                }),
                icons: ze.defaultIconsListBlock(),
                pagination: qe.defaultPaginationBlock()
              };
              var o = this._blocks;
              if (_n42) return this.error = null === e ? "not_found" : "invalid_data", void this._triggerLoaded();
              if (i.length < 1) this.error = "empty";else {
                var _e70 = Pe.getRegistry(this._instance).config,
                  _t32 = o.pagination;
                _t32.perPage = _e70.ui.itemsPerPage, _t32.fullLength = _t32.length = i.length, _t32.page = Math.min(this.route.params.page, qe.maxPage(_t32));
              }
              this._triggerLoaded();
            }
          }, {
            key: "getIcons",
            value: function getIcons() {
              return this.loading || null === this._blocks || null === this._data ? null : be.cloneObject(this._data);
            }
          }]);
          return n;
        }(Ee.BaseView);
        t.CustomView = n;
      }),
      Ye = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.EmptyView = void 0;
        var n = /*#__PURE__*/function (_Ee$BaseView5) {
          (0, _inherits2["default"])(n, _Ee$BaseView5);
          var _super7 = _createSuper(n);
          function n(e, t) {
            var _this15;
            var _n43 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            (0, _classCallCheck2["default"])(this, n);
            _this15 = _super7.call(this), _this15.type = "empty", _this15._instance = e, _this15.route = t, _this15.parent = _n43;
            return _this15;
          }
          (0, _createClass2["default"])(n, [{
            key: "_startLoadingData",
            value: function _startLoadingData() {
              this.loading = !1, this._triggerLoaded();
            }
          }, {
            key: "action",
            value: function action(e, t) {
              switch (e) {
                case "parent":
                  return void this._parentAction(t);
                case "provider":
                  return void this._providerAction(t);
              }
            }
          }, {
            key: "render",
            value: function render() {
              return {};
            }
          }]);
          return n;
        }(Ee.BaseView);
        t.EmptyView = n;
      }),
      Xe = ve(function (e, t) {
        function n(e, t) {
          switch (e.type) {
            case "collections":
            case "collection":
            case "search":
              void 0 === e.params && (e.params = {}), e.params.provider = t;
          }
          e.parent && n(e.parent, t);
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Router = void 0;
        t.Router = /*#__PURE__*/function () {
          function _class5(e) {
            var _this16 = this;
            (0, _classCallCheck2["default"])(this, _class5);
            this._view = null, this._visibleView = null, this._timer = null, this.defaultProvider = "", this._instance = e;
            var t = Pe.getRegistry(this._instance).events;
            t.subscribe("view-loaded", function (e) {
              _this16._viewEvent(e);
            }), t.subscribe("view-updated", function (e) {
              _this16._viewEvent(e);
            });
          }
          (0, _createClass2["default"])(_class5, [{
            key: "error",
            value: function error() {
              return null === this._visibleView || this._visibleView.loading ? "loading" : this._visibleView.error;
            }
          }, {
            key: "render",
            value: function render() {
              return null === this._visibleView ? null : this._visibleView.render();
            }
          }, {
            key: "partialRoute",
            get: function get() {
              return this._visibleView ? Se.routeToObject(this._visibleView.route) : null;
            },
            set: function set(e) {
              this._setRoute(e ? Se.objectToRoute(e) : null);
            }
          }, {
            key: "fullRoute",
            get: function get() {
              return this._visibleView ? this._visibleView.route : null;
            },
            set: function set(e) {
              this._setRoute(e);
            }
          }, {
            key: "home",
            value: function home() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              var t = Pe.getRegistry(this._instance),
                i = t.config.router.home;
              var o = null;
              if ("" !== i) o = Se.objectToRoute(JSON.parse(i));else {
                var _n44 = t.customIconSets,
                  _i32 = "string" == typeof e ? e : this.defaultProvider;
                if (void 0 === _n44.providers[_i32]) o = Se.objectToRoute({
                  type: "collections"
                });else {
                  var _e71 = _n44.providers[_i32];
                  var _t33 = _e71.total > 1;
                  _t33 || "only-custom" === _n44.merge || (_t33 = this._checkProvider(_i32, !1)), o = Se.objectToRoute(_t33 ? {
                    type: "collections",
                    params: {
                      provider: _i32
                    }
                  } : {
                    type: "collection",
                    params: {
                      provider: _i32,
                      prefix: Object.keys(_e71.data).shift()
                    }
                  });
                }
              }
              if (null === o) throw new Error("Error resetting route");
              n(o, null !== e && this._checkProvider(e) ? e : this.defaultProvider);
              var r = this._viewFromRoute(o);
              if (null === r) throw new Error("Error resetting route");
              this._setView(r, !0);
            }
          }, {
            key: "action",
            value: function action(e, t) {
              null !== this._visibleView && (this._changeCurrentView(), this._visibleView.action(e, t));
            }
          }, {
            key: "setCustomIcons",
            value: function setCustomIcons(e, t) {
              var n = this._getCustomView(e);
              return null !== n && (n.setIcons(t), !0);
            }
          }, {
            key: "getCustomIcons",
            value: function getCustomIcons(e) {
              var t = this._getCustomView(e);
              return null === t ? null : t.getIcons();
            }
          }, {
            key: "_setRoute",
            value: function _setRoute(e) {
              var t;
              if (e && e.params) {
                var _t34 = e.params.provider;
                "string" != typeof _t34 || "" === _t34 || this._checkProvider(_t34) || (e = null);
              }
              null === e || null === (t = this._viewFromRoute(e)) ? this.home() : this._setView(t, !0);
            }
          }, {
            key: "_getCustomView",
            value: function _getCustomView(e) {
              return null === this._visibleView || null === this._view ? null : "custom" === this._visibleView.type && this._visibleView.type === e ? this._visibleView : "custom" === this._view.type && this._view.type === e ? this._view : null;
            }
          }, {
            key: "createChildView",
            value: function createChildView(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var n = null === e ? null : Se.objectToRoute(e);
              if (null === n) return;
              var i = this._visibleView;
              for (var _e72 = 0; _e72 < t; _e72++) null !== i && (i = i.parent);
              var o = this._viewFromRoute(n, i);
              null !== o && (this._changeCurrentView(), this._setView(o, !1));
            }
          }, {
            key: "setParentView",
            value: function setParentView() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              var t = this._visibleView;
              for (var _n45 = 0; _n45 < e; _n45++) {
                if (null === t || null === t.parent) return;
                t = t.parent;
              }
              t !== this._visibleView && this._setView(t, !0);
            }
          }, {
            key: "_setView",
            value: function _setView(e, t) {
              this._view = e, e.startLoading(), this._visibleView !== e && (t || !e.loading || null === this._visibleView ? (this._visibleView = e, this._triggerChange(!0)) : this._startTimer());
            }
          }, {
            key: "_changeCurrentView",
            value: function _changeCurrentView() {
              return this._view !== this._visibleView && (this._view = this._visibleView, this._stopTimer(), !0);
            }
          }, {
            key: "_changeVisibleView",
            value: function _changeVisibleView() {
              return this._view !== this._visibleView && (this._visibleView = this._view, this._stopTimer(), this._triggerChange(!0), !0);
            }
          }, {
            key: "_viewFromRoute",
            value: function _viewFromRoute(e, t) {
              var n = null;
              if (void 0 !== t) n = t, e.parent = null === t ? null : t.route;else if (null !== e.parent && (n = this._viewFromRoute(e.parent), null === n)) return null;
              switch (e.type) {
                case "collections":
                  return new Ve.CollectionsView(this._instance, e, n);
                case "collection":
                  return new He.CollectionView(this._instance, e, n);
                case "search":
                  return new We.SearchView(this._instance, e, n);
                case "custom":
                  return new Qe.CustomView(this._instance, e, n);
                case "empty":
                  return new Ye.EmptyView(this._instance, e, n);
                default:
                  return null;
              }
            }
          }, {
            key: "_viewEvent",
            value: function _viewEvent(e) {
              e === this._view && (this._changeVisibleView() || this._triggerChange(!1));
            }
          }, {
            key: "_triggerChange",
            value: function _triggerChange(e) {
              var t = Pe.getRegistry(this._instance).events,
                n = this.render(),
                i = {
                  viewChanged: e,
                  error: this.error(),
                  route: this.partialRoute,
                  blocks: n
                };
              t.fire("render", i);
            }
          }, {
            key: "_startTimer",
            value: function _startTimer() {
              var _this17 = this;
              this._stopTimer();
              var e = Pe.getRegistry(this._instance).config.ui.viewUpdateDelay;
              if (e) {
                var _t35 = this._view;
                this._timer = setTimeout(function () {
                  _this17._view === _t35 && _this17._changeVisibleView();
                }, e);
              } else this._changeVisibleView();
            }
          }, {
            key: "_stopTimer",
            value: function _stopTimer() {
              null !== this._timer && (clearTimeout(this._timer), this._timer = null);
            }
          }, {
            key: "_checkProvider",
            value: function _checkProvider(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
              if (null !== Ce.getProvider(e)) return !0;
              if (!t) return !1;
              return void 0 !== Pe.getRegistry(this._instance).customIconSets.providers[e];
            }
          }]);
          return _class5;
        }();
      }),
      Ze = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Registry = void 0;
        t.Registry = /*#__PURE__*/function () {
          function _class6(e) {
            (0, _classCallCheck2["default"])(this, _class6);
            this._data = Object.create(null);
            var t = "string" == typeof e ? e : "object" == (0, _typeof2["default"])(e) && "string" == typeof e.namespace ? e.namespace : "iconify";
            this.namespace = t, this.id = Pe.uniqueId(t), this.initialised = Pe.addRegistry(this), this._sharedData = Pe.getSharedData(t), this.params = "object" == (0, _typeof2["default"])(e) ? e : {}, this._save();
          }
          (0, _createClass2["default"])(_class6, [{
            key: "_save",
            value: function _save() {
              Pe.saveRegistry(this);
            }
          }, {
            key: "config",
            get: function get() {
              return void 0 === this._sharedData.config && (this._sharedData.config = ke.createConfig(this.params.config)), this._sharedData.config;
            },
            set: function set(e) {
              this._sharedData.config = e;
            }
          }, {
            key: "events",
            get: function get() {
              return void 0 === this._data.events && (this._data.events = new _e.Events()), this._data.events;
            },
            set: function set(e) {
              this._data.events = e;
            }
          }, {
            key: "api",
            get: function get() {
              return void 0 === this._sharedData.api && (this._sharedData.api = new Ie.API(this)), this._sharedData.api;
            },
            set: function set(e) {
              this._sharedData.api = e;
            }
          }, {
            key: "customIconSets",
            get: function get() {
              return void 0 === this._data.customIconSets && (this._data.customIconSets = Be.emptyConvertedSet), this._data.customIconSets;
            },
            set: function set(e) {
              this._data.customIconSets = e;
            }
          }, {
            key: "collections",
            get: function get() {
              return void 0 === this._sharedData.collections && (this._sharedData.collections = Object.create(null)), this._sharedData.collections;
            },
            set: function set(e) {
              this._sharedData.collections = e;
            }
          }, {
            key: "router",
            get: function get() {
              return void 0 === this._data.router && (this._data.router = new Xe.Router(this.id)), this._data.router;
            },
            set: function set(e) {
              this._data.router = e;
            }
          }, {
            key: "fullRoute",
            get: function get() {
              return this.router.fullRoute;
            },
            set: function set(e) {
              this.router.fullRoute = e;
            }
          }, {
            key: "partialRoute",
            get: function get() {
              return this.router.partialRoute;
            },
            set: function set(e) {
              this.router.partialRoute = e;
            }
          }, {
            key: "getCustom",
            value: function getCustom(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
              var n = t ? this._data : this._sharedData;
              if (void 0 !== n.custom) return n.custom[e];
            }
          }, {
            key: "setCustom",
            value: function setCustom(e, t) {
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
              var i = n ? this._data : this._sharedData;
              void 0 === i.custom && (i.custom = Object.create(null));
              var o = i.custom;
              n && void 0 === o[e] && Object.defineProperty(this, e, {
                get: function get() {
                  return o[e];
                },
                set: function set(t) {
                  o[e] = t;
                }
              }), o[e] = t;
            }
          }, {
            key: "destroy",
            value: function destroy() {
              Pe.destroyRegistry(this);
            }
          }]);
          return _class6;
        }();
      }),
      et = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isBlockEmpty = void 0, t.isBlockEmpty = function (e) {
          if (null == e) return !0;
          switch (e.type) {
            case "collection-info":
              return De.isCollectionInfoBlockEmpty(e);
            case "collections-filter":
              return Me.isCollectionsFilterBlockEmpty(e);
            case "collections-list":
              return Fe.isCollectionsBlockEmpty(e);
            case "filters":
              return Re.isFiltersBlockEmpty(e);
            case "icons-list":
              return ze.isIconsListBlockEmpty(e);
            case "pagination":
              return qe.isPaginationEmpty(e);
            case "search":
              return Ue.isSearchBlockEmpty(e);
            case "icons-nav":
              return !1;
            default:
              return !0;
          }
        };
      }),
      tt = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.getCoreInstance = t.IconFinderCore = t.cloneObject = t.compareObjects = t.stringToIcon = t.compareIcons = t.validateIcon = t.iconToString = t.setComponentsConfig = t.mergeConfig = t.customisedConfig = t.getCollectionTitle = t.getCollectionInfo = t.objectToRoute = t.listProviders = t.convertProviderData = t.getProvider = t.addProvider = t.setIconify = t.maxPage = t.showPagination = t.iterateCollectionsBlock = t.getCollectionsBlockPrefixes = t.getCollectionsBlockCategories = t.isBlockEmpty = void 0, Object.defineProperty(t, "getCollectionInfo", {
          enumerable: !0,
          get: function get() {
            return Le.getCollectionInfo;
          }
        }), Object.defineProperty(t, "isBlockEmpty", {
          enumerable: !0,
          get: function get() {
            return et.isBlockEmpty;
          }
        }), Object.defineProperty(t, "getCollectionsBlockCategories", {
          enumerable: !0,
          get: function get() {
            return Fe.getCollectionsBlockCategories;
          }
        }), Object.defineProperty(t, "getCollectionsBlockPrefixes", {
          enumerable: !0,
          get: function get() {
            return Fe.getCollectionsBlockPrefixes;
          }
        }), Object.defineProperty(t, "iterateCollectionsBlock", {
          enumerable: !0,
          get: function get() {
            return Fe.iterateCollectionsBlock;
          }
        }), Object.defineProperty(t, "showPagination", {
          enumerable: !0,
          get: function get() {
            return qe.showPagination;
          }
        }), Object.defineProperty(t, "maxPage", {
          enumerable: !0,
          get: function get() {
            return qe.maxPage;
          }
        }), Object.defineProperty(t, "setIconify", {
          enumerable: !0,
          get: function get() {
            return we.setIconify;
          }
        }), Object.defineProperty(t, "addProvider", {
          enumerable: !0,
          get: function get() {
            return Ce.addProvider;
          }
        }), Object.defineProperty(t, "getProvider", {
          enumerable: !0,
          get: function get() {
            return Ce.getProvider;
          }
        }), Object.defineProperty(t, "convertProviderData", {
          enumerable: !0,
          get: function get() {
            return Ce.convertProviderData;
          }
        }), Object.defineProperty(t, "listProviders", {
          enumerable: !0,
          get: function get() {
            return Ce.listProviders;
          }
        }), Object.defineProperty(t, "objectToRoute", {
          enumerable: !0,
          get: function get() {
            return Se.objectToRoute;
          }
        });
        var n = Le;
        Object.defineProperty(t, "getCollectionTitle", {
          enumerable: !0,
          get: function get() {
            return n.getCollectionTitle;
          }
        }), Object.defineProperty(t, "customisedConfig", {
          enumerable: !0,
          get: function get() {
            return ke.customisedConfig;
          }
        }), Object.defineProperty(t, "mergeConfig", {
          enumerable: !0,
          get: function get() {
            return ke.mergeConfig;
          }
        }), Object.defineProperty(t, "setComponentsConfig", {
          enumerable: !0,
          get: function get() {
            return ke.setComponentsConfig;
          }
        }), Object.defineProperty(t, "iconToString", {
          enumerable: !0,
          get: function get() {
            return Ge.iconToString;
          }
        }), Object.defineProperty(t, "validateIcon", {
          enumerable: !0,
          get: function get() {
            return Ge.validateIcon;
          }
        }), Object.defineProperty(t, "compareIcons", {
          enumerable: !0,
          get: function get() {
            return Ge.compareIcons;
          }
        }), Object.defineProperty(t, "stringToIcon", {
          enumerable: !0,
          get: function get() {
            return Ge.stringToIcon;
          }
        }), Object.defineProperty(t, "compareObjects", {
          enumerable: !0,
          get: function get() {
            return be.compareObjects;
          }
        }), Object.defineProperty(t, "cloneObject", {
          enumerable: !0,
          get: function get() {
            return be.cloneObject;
          }
        });
        t.IconFinderCore = /*#__PURE__*/function () {
          function _class7(e) {
            var _this18 = this;
            (0, _classCallCheck2["default"])(this, _class7);
            this.params = e;
            var t = this.registry = new Ze.Registry(e);
            this.id = t.id, t.setCustom("core", this, !0), e.iconSets && (t.customIconSets = Be.convertCustomSets(e.iconSets));
            var n = this.router = t.router,
              i = t.events;
            i.subscribe("render", this._routerEvent.bind(this)), "object" == (0, _typeof2["default"])(e.custom) && null !== e.custom && Object.keys(e.custom).forEach(function (e) {
              i.subscribe("load-" + e, _this18._loadCustomIconsEvent.bind(_this18, e));
            }), setTimeout(function () {
              null === n.fullRoute && (void 0 !== e.route ? n.partialRoute = e.route : n.home());
            });
          }
          (0, _createClass2["default"])(_class7, [{
            key: "getCollection",
            value: function getCollection(e, t) {
              return Le.getCollectionInfo(this.registry.collections, e, t);
            }
          }, {
            key: "_routerEvent",
            value: function _routerEvent(e) {
              this.params.callback(e, this);
            }
          }, {
            key: "_loadCustomIconsEvent",
            value: function _loadCustomIconsEvent(e, t) {
              void 0 !== this.params.custom && this.params.custom[e](t);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.registry.destroy();
            }
          }]);
          return _class7;
        }(), t.getCoreInstance = function (e) {
          var t = Pe.getRegistry(e);
          return t ? t.getCustom("core", !0) : void 0;
        };
      }),
      nt = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.mergeCustomisations = t.defaults = void 0, t.defaults = Object.freeze({
          inline: !1,
          width: null,
          height: null,
          hAlign: "center",
          vAlign: "middle",
          slice: !1,
          hFlip: !1,
          vFlip: !1,
          rotate: 0
        }), t.mergeCustomisations = function (e, t) {
          var n = {};
          for (var _i33 in e) {
            var _o17 = _i33;
            if (n[_o17] = e[_o17], void 0 === t[_o17]) continue;
            var _r10 = t[_o17];
            switch (_o17) {
              case "inline":
              case "slice":
                "boolean" == typeof _r10 && (n[_o17] = _r10);
                break;
              case "hFlip":
              case "vFlip":
                !0 === _r10 && (n[_o17] = !n[_o17]);
                break;
              case "hAlign":
              case "vAlign":
                "string" == typeof _r10 && "" !== _r10 && (n[_o17] = _r10);
                break;
              case "width":
              case "height":
                ("string" == typeof _r10 && "" !== _r10 || "number" == typeof _r10 && _r10 || null === _r10) && (n[_o17] = _r10);
                break;
              case "rotate":
                "number" == typeof _r10 && (n[_o17] += _r10);
            }
          }
          return n;
        };
      }),
      it = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.filterCustomisations = t.mergeCustomisations = t.defaultCustomisations = t.emptyCustomisations = void 0;
        var n = {
          color: ""
        };
        t.emptyCustomisations = _objectSpread(_objectSpread({}, nt.defaults), n), t.defaultCustomisations = _objectSpread({}, t.emptyCustomisations), t.mergeCustomisations = function (e, t) {
          var i = nt.mergeCustomisations(e, t);
          for (var _o18 in n) {
            var _n46 = _o18;
            i[_n46] = t && (0, _typeof2["default"])(t[_n46]) == (0, _typeof2["default"])(e[_n46]) ? t[_n46] : e[_n46];
          }
          return i;
        }, t.filterCustomisations = function (e) {
          var n = {};
          for (var _i34 in t.defaultCustomisations) {
            var _o19 = _i34;
            e[_o19] !== t.defaultCustomisations[_o19] && e[_o19] !== t.emptyCustomisations[_o19] && (n[_o19] = e[_o19]);
          }
          return n;
        };
      });
    function ot(e, t) {
      void 0 === e[t.provider] && (e[t.provider] = Object.create(null));
      var n = e[t.provider];
      void 0 === n[t.prefix] && (n[t.prefix] = []);
      var i = n[t.prefix];
      return -1 === i.indexOf(t.name) && (i.push(t.name), !0);
    }
    function rt(e, t) {
      if (void 0 === e[t.provider]) return !1;
      var n = e[t.provider];
      if (void 0 === n[t.prefix]) return !1;
      var i = n[t.prefix];
      if (-1 !== i.indexOf(t.name)) return !0;
      if (t.aliases) for (var _e73 = 0; _e73 < t.aliases.length; _e73++) if (-1 !== i.indexOf(t.aliases[_e73])) return !0;
      return !1;
    }
    function st(e) {
      var t = [];
      return Object.keys(e).forEach(function (n) {
        Object.keys(e[n]).forEach(function (i) {
          e[n][i].forEach(function (e) {
            t.push({
              provider: n,
              prefix: i,
              name: e
            });
          });
        });
      }), t;
    }
    var ct = [];
    var lt = "icon-finder-theme";
    var at = {
      reset: "line-md:close",
      search: "line-md:search",
      down: "line-md:chevron-down",
      left: "line-md:chevron-left",
      right: "line-md:chevron-right",
      parent: "line-md:chevron-small-left",
      expand: "line-md:chevron-small-right",
      grid: "line-md:grid-3-solid",
      list: "line-md:list-3-solid",
      "check-list": "line-md:check-list-3-solid",
      "check-list-checked": "line-md:check-list-3-twotone",
      "error-loading": "icon-finder-theme:error-loading",
      "icon-width": "line-md:double-arrow-horizontal",
      "icon-height": "line-md:double-arrow-vertical",
      color: "line-md:paint-drop-half-twotone",
      "color-filled": "line-md:paint-drop-filled",
      rotate0: "line-md:close",
      rotate1: "line-md:rotate-90",
      rotate2: "line-md:rotate-180",
      rotate3: "line-md:rotate-270",
      "h-flip": "line-md:double-arrow-horizontal",
      "v-flip": "line-md:double-arrow-vertical",
      plus: "line-md:plus",
      link: "line-md:external-link",
      clipboard: "line-md:clipboard-arrow-twotone",
      confirm: "line-md:confirm",
      docs: "line-md:document-list-twotone",
      "mode-block": "line-md:valign-baseline",
      "mode-inline": "line-md:valign-middle",
      "selecting-selected": "line-md:confirm",
      "selecting-unselected": "icon-finder-theme:empty"
    };
    function ut() {}
    function ft(e, t) {
      for (var _n47 in t) e[_n47] = t[_n47];
      return e;
    }
    function dt(e) {
      return e();
    }
    function pt() {
      return Object.create(null);
    }
    function ht(e) {
      e.forEach(dt);
    }
    function gt(e) {
      return "function" == typeof e;
    }
    function mt(e, t) {
      return e != e ? t == t : e !== t || e && "object" == (0, _typeof2["default"])(e) || "function" == typeof e;
    }
    function yt(e, t, n, i) {
      if (e) {
        var _o20 = $t(e, t, n, i);
        return e[0](_o20);
      }
    }
    function $t(e, t, n, i) {
      return e[1] && i ? ft(n.ctx.slice(), e[1](i(t))) : n.ctx;
    }
    function vt(e, t, n, i, o, r, s) {
      var c = function (e, t, n, i) {
        if (e[2] && i) {
          var _o21 = e[2](i(n));
          if (void 0 === t.dirty) return _o21;
          if ("object" == (0, _typeof2["default"])(_o21)) {
            var _e74 = [],
              _n48 = Math.max(t.dirty.length, _o21.length);
            for (var _i35 = 0; _i35 < _n48; _i35 += 1) _e74[_i35] = t.dirty[_i35] | _o21[_i35];
            return _e74;
          }
          return t.dirty | _o21;
        }
        return t.dirty;
      }(t, i, o, r);
      if (c) {
        var _o22 = $t(t, n, i, s);
        e.p(_o22, c);
      }
    }
    function bt(e, t) {
      e.appendChild(t);
    }
    function kt(e, t, n) {
      e.insertBefore(t, n || null);
    }
    function _t(e) {
      e.parentNode.removeChild(e);
    }
    function wt(e, t) {
      for (var _n49 = 0; _n49 < e.length; _n49 += 1) e[_n49] && e[_n49].d(t);
    }
    function xt(e) {
      return document.createElement(e);
    }
    function Ct(e) {
      return document.createTextNode(e);
    }
    function jt() {
      return Ct(" ");
    }
    function It() {
      return Ct("");
    }
    function Pt(e, t, n, i) {
      return e.addEventListener(t, n, i), function () {
        return e.removeEventListener(t, n, i);
      };
    }
    function Ot(e) {
      return function (t) {
        return t.preventDefault(), e.call(this, t);
      };
    }
    function St(e, t, n) {
      null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
    }
    function Et(e, t) {
      t = "" + t, e.wholeText !== t && (e.data = t);
    }
    function Mt(e, t) {
      e.value = null == t ? "" : t;
    }
    var Tt = /*#__PURE__*/function () {
      function Tt() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        (0, _classCallCheck2["default"])(this, Tt);
        this.a = e, this.e = this.n = null;
      }
      (0, _createClass2["default"])(Tt, [{
        key: "m",
        value: function m(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          this.e || (this.e = xt(t.nodeName), this.t = t, this.h(e)), this.i(n);
        }
      }, {
        key: "h",
        value: function h(e) {
          this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
        }
      }, {
        key: "i",
        value: function i(e) {
          for (var _t36 = 0; _t36 < this.n.length; _t36 += 1) kt(this.t, this.n[_t36], e);
        }
      }, {
        key: "p",
        value: function p(e) {
          this.d(), this.h(e), this.i(this.a);
        }
      }, {
        key: "d",
        value: function d() {
          this.n.forEach(_t);
        }
      }]);
      return Tt;
    }();
    var At;
    function Rt(e) {
      At = e;
    }
    function Ft() {
      if (!At) throw new Error("Function called outside component initialization");
      return At;
    }
    function Lt(e) {
      Ft().$$.on_mount.push(e);
    }
    function Nt(e) {
      Ft().$$.on_destroy.push(e);
    }
    function Bt(e) {
      return Ft().$$.context.get(e);
    }
    var Vt = [],
      Dt = [],
      zt = [],
      qt = [],
      Ut = Promise.resolve();
    var Ht = !1;
    function Kt(e) {
      zt.push(e);
    }
    function Gt(e) {
      qt.push(e);
    }
    var Jt = !1;
    var Wt = new Set();
    function Qt() {
      if (!Jt) {
        Jt = !0;
        do {
          for (var _e75 = 0; _e75 < Vt.length; _e75 += 1) {
            var _t37 = Vt[_e75];
            Rt(_t37), Yt(_t37.$$);
          }
          for (Rt(null), Vt.length = 0; Dt.length;) Dt.pop()();
          for (var _e76 = 0; _e76 < zt.length; _e76 += 1) {
            var _t38 = zt[_e76];
            Wt.has(_t38) || (Wt.add(_t38), _t38());
          }
          zt.length = 0;
        } while (Vt.length);
        for (; qt.length;) qt.pop()();
        Ht = !1, Jt = !1, Wt.clear();
      }
    }
    function Yt(e) {
      if (null !== e.fragment) {
        e.update(), ht(e.before_update);
        var _t39 = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, _t39), e.after_update.forEach(Kt);
      }
    }
    var Xt = new Set();
    var Zt;
    function en() {
      Zt = {
        r: 0,
        c: [],
        p: Zt
      };
    }
    function tn() {
      Zt.r || ht(Zt.c), Zt = Zt.p;
    }
    function nn(e, t) {
      e && e.i && (Xt["delete"](e), e.i(t));
    }
    function on(e, t, n, i) {
      if (e && e.o) {
        if (Xt.has(e)) return;
        Xt.add(e), Zt.c.push(function () {
          Xt["delete"](e), i && (n && e.d(1), i());
        }), e.o(t);
      }
    }
    function rn(e, t) {
      e.d(1), t["delete"](e.key);
    }
    function sn(e, t) {
      on(e, 1, 1, function () {
        t["delete"](e.key);
      });
    }
    function cn(e, t, n, i, o, r, s, c, l, a, u, f) {
      var d = e.length,
        p = r.length,
        h = d;
      var g = {};
      for (; h--;) g[e[h].key] = h;
      var m = [],
        y = new Map(),
        $ = new Map();
      for (h = p; h--;) {
        var _e77 = f(o, r, h),
          _c6 = n(_e77);
        var _l6 = s.get(_c6);
        _l6 ? i && _l6.p(_e77, t) : (_l6 = a(_c6, _e77), _l6.c()), y.set(_c6, m[h] = _l6), _c6 in g && $.set(_c6, Math.abs(h - g[_c6]));
      }
      var v = new Set(),
        b = new Set();
      function k(e) {
        nn(e, 1), e.m(c, u), s.set(e.key, e), u = e.first, p--;
      }
      for (; d && p;) {
        var _t40 = m[p - 1],
          _n50 = e[d - 1],
          _i36 = _t40.key,
          _o23 = _n50.key;
        _t40 === _n50 ? (u = _t40.first, d--, p--) : y.has(_o23) ? !s.has(_i36) || v.has(_i36) ? k(_t40) : b.has(_o23) ? d-- : $.get(_i36) > $.get(_o23) ? (b.add(_i36), k(_t40)) : (v.add(_o23), d--) : (l(_n50, s), d--);
      }
      for (; d--;) {
        var _t41 = e[d];
        y.has(_t41.key) || l(_t41, s);
      }
      for (; p;) k(m[p - 1]);
      return m;
    }
    function ln(e, t) {
      var n = {},
        i = {},
        o = {
          $$scope: 1
        };
      var r = e.length;
      for (; r--;) {
        var _s10 = e[r],
          _c7 = t[r];
        if (_c7) {
          for (var _e78 in _s10) _e78 in _c7 || (i[_e78] = 1);
          for (var _e79 in _c7) o[_e79] || (n[_e79] = _c7[_e79], o[_e79] = 1);
          e[r] = _c7;
        } else for (var _e80 in _s10) o[_e80] = 1;
      }
      for (var _e81 in i) _e81 in n || (n[_e81] = void 0);
      return n;
    }
    function an(e) {
      return "object" == (0, _typeof2["default"])(e) && null !== e ? e : {};
    }
    function un(e, t, n) {
      var i = e.$$.props[t];
      void 0 !== i && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
    }
    function fn(e) {
      e && e.c();
    }
    function dn(e, t, n, i) {
      var _e$$$2 = e.$$,
        o = _e$$$2.fragment,
        r = _e$$$2.on_mount,
        s = _e$$$2.on_destroy,
        c = _e$$$2.after_update;
      o && o.m(t, n), i || Kt(function () {
        var t = r.map(dt).filter(gt);
        s ? s.push.apply(s, (0, _toConsumableArray2["default"])(t)) : ht(t), e.$$.on_mount = [];
      }), c.forEach(Kt);
    }
    function pn(e, t) {
      var n = e.$$;
      null !== n.fragment && (ht(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
    }
    function hn(e, t) {
      -1 === e.$$.dirty[0] && (Vt.push(e), Ht || (Ht = !0, Ut.then(Qt)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
    }
    function gn(e, t, n, i, o, r) {
      var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
      var c = At;
      Rt(e);
      var l = e.$$ = {
        fragment: null,
        ctx: null,
        props: r,
        update: ut,
        not_equal: o,
        bound: pt(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(c ? c.$$.context : t.context || []),
        callbacks: pt(),
        dirty: s,
        skip_bound: !1
      };
      var a = !1;
      if (l.ctx = n ? n(e, t.props || {}, function (t, n) {
        var r = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : n;
        return l.ctx && o(l.ctx[t], l.ctx[t] = r) && (!l.skip_bound && l.bound[t] && l.bound[t](r), a && hn(e, t)), n;
      }) : [], l.update(), a = !0, ht(l.before_update), l.fragment = !!i && i(l.ctx), t.target) {
        if (t.hydrate) {
          var _e82 = function (e) {
            return Array.from(e.childNodes);
          }(t.target);
          l.fragment && l.fragment.l(_e82), _e82.forEach(_t);
        } else l.fragment && l.fragment.c();
        t.intro && nn(e.$$.fragment), dn(e, t.target, t.anchor, t.customElement), Qt();
      }
      Rt(c);
    }
    var mn = /*#__PURE__*/function () {
      function mn() {
        (0, _classCallCheck2["default"])(this, mn);
      }
      (0, _createClass2["default"])(mn, [{
        key: "$destroy",
        value: function $destroy() {
          pn(this, 1), this.$destroy = ut;
        }
      }, {
        key: "$on",
        value: function $on(e, t) {
          var n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(t), function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          };
        }
      }, {
        key: "$set",
        value: function $set(e) {
          var t;
          this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
        }
      }]);
      return mn;
    }();
    function yn(e) {
      var t, n;
      var i = e[1]["default"],
        _o24 = yt(i, e, e[0], null);
      return {
        c: function c() {
          t = xt("div"), _o24 && _o24.c(), St(t, "class", "iif-wrapper");
        },
        m: function m(e, i) {
          kt(e, t, i), _o24 && _o24.m(t, null), n = !0;
        },
        p: function p(e, _ref4) {
          var _ref5 = (0, _slicedToArray2["default"])(_ref4, 1),
            t = _ref5[0];
          _o24 && _o24.p && (!n || 1 & t) && vt(_o24, i, e, e[0], t, null, null);
        },
        i: function i(e) {
          n || (nn(_o24, e), n = !0);
        },
        o: function o(e) {
          on(_o24, e), n = !1;
        },
        d: function d(e) {
          e && _t(t), _o24 && _o24.d(e);
        }
      };
    }
    function $n(e, t, n) {
      var _t$$$slots = t.$$slots,
        i = _t$$$slots === void 0 ? {} : _t$$$slots,
        o = t.$$scope;
      return e.$$set = function (e) {
        "$$scope" in e && n(0, o = e.$$scope);
      }, [o, i];
    }
    var vn = /*#__PURE__*/function (_mn) {
      (0, _inherits2["default"])(vn, _mn);
      var _super8 = _createSuper(vn);
      function vn(e) {
        var _this19;
        (0, _classCallCheck2["default"])(this, vn);
        _this19 = _super8.call(this), gn((0, _assertThisInitialized2["default"])(_this19), e, $n, yn, mt, {});
        return _this19;
      }
      return (0, _createClass2["default"])(vn);
    }(mn);
    var bn = "#000",
      kn = 200,
      _n = 300,
      wn = {
        submit: {
          type: "primary",
          display: "icons"
        },
        cancel: {
          type: "secondary"
        }
      },
      xn = {
        lang: "English",
        search: {
          placeholder: {
            collection: "Search {name}",
            collections: "Lọc bộ sưu tập"
          },
          defaultPlaceholder: "Tìm kiếm toàn bộ icon",
          button: "Tìm kiếm icons"
        },
        errors: {
          noCollections: "No matching icon sets found.",
          noIconsFound: "No icons found.",
          defaultError: "Error loading Iconify Icon Finder.",
          custom: {
            loading: "Loading...",
            timeout: "Could not connect to Iconify API.",
            invalid_data: "Invalid response from Iconify API.",
            empty: "Nothing to show.",
            not_found: "Collection {prefix} does not exist.",
            bad_route: "Invalid route.",
            home: "Click here to return to main page."
          }
        },
        icons: {
          header: {
            full: "Displaying {count} icons:",
            more: "Displaying {count} icons (click second page to load more results):",
            modes: {
              list: "Display icons as list",
              grid: "Display icons as grid"
            },
            select: "Select multiple icons"
          },
          headerWithCount: {
            0: "No icons to display.",
            1: "Displaying 1 icon:"
          },
          tooltip: {
            size: "\nSize: {size}",
            colorless: "",
            colorful: "\nHas palette",
            "char": "\nIcon font character: {char}",
            length: ""
          },
          more: "Find more icons",
          moreAsNumber: !1
        },
        pagination: {
          prev: "Previous page",
          next: "Next page"
        },
        filters: {
          uncategorised: "Uncategorised",
          collections: "Filter search results by icon set:",
          "collections-collections": "",
          tags: "Filter by category:",
          themePrefixes: "Icon type:",
          themeSuffixes: "Icon type:"
        },
        collectionInfo: {
          total: "Number of icons:",
          height: "Height of icons:",
          author: "Author:",
          license: "License:",
          palette: "Palette:",
          colorless: "Colorless",
          colorful: "Has colors",
          link: "Show all icons"
        },
        parent: {
          "default": "Return to previous page",
          collections: "Return to collections list",
          collection: "Return to {name}",
          search: "Return to search results"
        },
        collection: {
          by: "by "
        },
        providers: {
          section: "Icons source:",
          add: "Add Provider",
          addForm: {
            title: "Enter API provider's host name:",
            placeholder: "https://api.iconify.design",
            submit: "Add API Provider",
            invalid: "Example of a valid API host name: https://api.iconify.design"
          },
          status: {
            loading: "Checking {host}...",
            error: "{host} is not a valid Iconify API.",
            exists: "API from {host} is already available or API has wrong configuration.",
            unsupported: "API from {host} does not support icon search."
          }
        },
        footer: {
          iconName: "Selected icon:",
          iconNamePlaceholder: "Enter icon by name...",
          inlineSample: {
            before: "Text with icon sample",
            after: "to show icon alignment in text."
          },
          remove: "Remove {name}",
          select: "Select {name}",
          about: "Aboout {title}"
        },
        footerButtons: {
          submit: "Submit",
          change: "Change",
          select: "Select",
          cancel: "Cancel",
          close: "Close"
        },
        footerBlocks: {
          title: "Customize icon",
          title2: "Customize icons",
          color: "Color",
          flip: "Flip",
          hFlip: "Horizontal",
          vFlip: "Vertical",
          rotate: "Rotate",
          width: "Width",
          height: "Height",
          size: "Size",
          alignment: "Alignment",
          mode: "Mode",
          icons: "Selected icons"
        },
        footerOptionButtons: {
          hFlip: "Horizontal",
          vFlip: "Vertical",
          rotate: "{num}" + String.fromCharCode(176),
          rotateTitle: "Rotate {num}" + String.fromCharCode(176),
          inline: "Inline",
          block: "Block",
          inlineHint: "Icon is vertically aligned slightly below baseline, like icon font, fitting perfectly in text.",
          blockHint: "Icon is rendered as is, without custom vertical alignment."
        },
        codeSamples: {
          copy: "Copy to clipboard",
          copied: "Copied to clipboard.",
          heading: 'How to use "{name}" icon',
          childTabTitle: "{key} versions:",
          childTabTitles: {
            react: "React component versions:",
            svg: "SVG options:"
          },
          docsDefault: "Click here for more information about {title} component.",
          docs: {
            iconify: "Click here for more information about Iconify SVG framework."
          },
          intro: {
            "svg-box": "This SVG contains extra empty rectangle that matches viewBox. It is needed to keep icon dimensions when importing icon in software that ignores viewBox attribute.",
            "svg-uri": "You can use this as background image or as content for pseudo element in stylesheet."
          },
          component: {
            install: "Install component and icon set:",
            install1: "Install component:",
            "import": "Import component and icon data:",
            import1: "Import component:",
            vue: "Add icon data and icon component to your component:",
            use: "Use it in your code:"
          },
          iconify: {
            intro1: 'Iconify SVG framework makes using icons as easy as icon fonts. To use "{name}" in HTML, add this code to the document:',
            intro2: "Iconify SVG framework will load icon data from Iconify API and replace that placeholder with SVG.",
            head: "Make sure you import Iconify SVG framework:"
          }
        }
      };
    function Cn(e) {
      var t;
      var n = e[6]["default"],
        _i37 = yt(n, e, e[5], null);
      return {
        c: function c() {
          _i37 && _i37.c();
        },
        m: function m(e, n) {
          _i37 && _i37.m(e, n), t = !0;
        },
        p: function p(e, o) {
          _i37 && _i37.p && (!t || 32 & o) && vt(_i37, n, e, e[5], o, null, null);
        },
        i: function i(e) {
          t || (nn(_i37, e), t = !0);
        },
        o: function o(e) {
          on(_i37, e), t = !1;
        },
        d: function d(e) {
          _i37 && _i37.d(e);
        }
      };
    }
    function jn(e) {
      var t, n, _i38;
      t = new $e({
        props: {
          icon: e[1],
          "class": "iconify--line-md",
          onLoad: e[2]
        }
      });
      var _o25 = !e[0] && In(e);
      return {
        c: function c() {
          fn(t.$$.fragment), _o25 && _o25.c(), n = It();
        },
        m: function m(e, r) {
          dn(t, e, r), _o25 && _o25.m(e, r), kt(e, n, r), _i38 = !0;
        },
        p: function p(e, i) {
          var r = {};
          2 & i && (r.icon = e[1]), t.$set(r), e[0] ? _o25 && (en(), on(_o25, 1, 1, function () {
            _o25 = null;
          }), tn()) : _o25 ? (_o25.p(e, i), 1 & i && nn(_o25, 1)) : (_o25 = In(e), _o25.c(), nn(_o25, 1), _o25.m(n.parentNode, n));
        },
        i: function i(e) {
          _i38 || (nn(t.$$.fragment, e), nn(_o25), _i38 = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), on(_o25), _i38 = !1;
        },
        d: function d(e) {
          pn(t, e), _o25 && _o25.d(e), e && _t(n);
        }
      };
    }
    function In(e) {
      var t;
      var n = e[6]["default"],
        _i39 = yt(n, e, e[5], null);
      return {
        c: function c() {
          _i39 && _i39.c();
        },
        m: function m(e, n) {
          _i39 && _i39.m(e, n), t = !0;
        },
        p: function p(e, o) {
          _i39 && _i39.p && (!t || 32 & o) && vt(_i39, n, e, e[5], o, null, null);
        },
        i: function i(e) {
          t || (nn(_i39, e), t = !0);
        },
        o: function o(e) {
          on(_i39, e), t = !1;
        },
        d: function d(e) {
          _i39 && _i39.d(e);
        }
      };
    }
    function Pn(e) {
      var t, n, i, _o26;
      var r = [jn, Cn],
        s = [];
      function c(e, t) {
        return null !== e[1] ? 0 : 1;
      }
      return t = c(e), n = s[t] = r[t](e), {
        c: function c() {
          n.c(), i = It();
        },
        m: function m(e, n) {
          s[t].m(e, n), kt(e, i, n), _o26 = !0;
        },
        p: function p(e, _ref6) {
          var _ref7 = (0, _slicedToArray2["default"])(_ref6, 1),
            o = _ref7[0];
          var l = t;
          t = c(e), t === l ? s[t].p(e, o) : (en(), on(s[l], 1, 1, function () {
            s[l] = null;
          }), tn(), n = s[t], n ? n.p(e, o) : (n = s[t] = r[t](e), n.c()), nn(n, 1), n.m(i.parentNode, i));
        },
        i: function i(e) {
          _o26 || (nn(n), _o26 = !0);
        },
        o: function o(e) {
          on(n), _o26 = !1;
        },
        d: function d(e) {
          s[t].d(e), e && _t(i);
        }
      };
    }
    var On = !0;
    function Sn(e, t, n) {
      var i,
        _t$$$slots2 = t.$$slots,
        o = _t$$$slots2 === void 0 ? {} : _t$$$slots2,
        r = t.$$scope,
        s = t.icon,
        _t$onLoad = t.onLoad,
        c = _t$onLoad === void 0 ? null : _t$onLoad,
        l = !1;
      return Lt(function () {
        On && (On = !1, ue(Object.values(at).filter(function (e) {
          return !!e;
        })));
      }), e.$$set = function (e) {
        "icon" in e && n(3, s = e.icon), "onLoad" in e && n(4, c = e.onLoad), "$$scope" in e && n(5, r = e.$$scope);
      }, e.$$.update = function () {
        8 & e.$$.dirty && n(1, i = "string" == typeof at[s] ? at[s] : -1 === s.indexOf(":") ? null : s);
      }, [l, i, function () {
        n(0, l = !0), c && c();
      }, s, c, r, o];
    }
    var En = /*#__PURE__*/function (_mn2) {
      (0, _inherits2["default"])(En, _mn2);
      var _super9 = _createSuper(En);
      function En(e) {
        var _this20;
        (0, _classCallCheck2["default"])(this, En);
        _this20 = _super9.call(this), gn((0, _assertThisInitialized2["default"])(_this20), e, Sn, Pn, mt, {
          icon: 3,
          onLoad: 4
        });
        return _this20;
      }
      return (0, _createClass2["default"])(En);
    }(mn);
    function Mn(e) {
      var t, n, _i40;
      return n = new En({
        props: {
          icon: e[4],
          onLoad: e[10]
        }
      }), {
        c: function c() {
          t = xt("div"), fn(n.$$.fragment), St(t, "class", "iif-input-icon"), St(t, "style", e[7]);
        },
        m: function m(e, o) {
          kt(e, t, o), dn(n, t, null), _i40 = !0;
        },
        p: function p(e, o) {
          var r = {};
          16 & o && (r.icon = e[4]), n.$set(r), (!_i40 || 128 & o) && St(t, "style", e[7]);
        },
        i: function i(e) {
          _i40 || (nn(n.$$.fragment, e), _i40 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i40 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n);
        }
      };
    }
    function Tn(e) {
      var t, n;
      return {
        c: function c() {
          t = xt("div"), n = Ct(e[1]), St(t, "class", "iif-input-placeholder");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, t) {
          2 & t && Et(n, e[1]);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function An(e) {
      var t, n, _i41, o, r;
      return n = new En({
        props: {
          icon: "reset",
          $$slots: {
            "default": [Rn]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          t = xt("a"), fn(n.$$.fragment), St(t, "class", "iif-input-reset"), St(t, "href", "# ");
        },
        m: function m(s, c) {
          kt(s, t, c), dn(n, t, null), _i41 = !0, o || (r = Pt(t, "click", Ot(e[11])), o = !0);
        },
        p: function p(e, t) {
          var i = {};
          4194304 & t && (i.$$scope = {
            dirty: t,
            ctx: e
          }), n.$set(i);
        },
        i: function i(e) {
          _i41 || (nn(n.$$.fragment, e), _i41 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i41 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n), o = !1, r();
        }
      };
    }
    function Rn(e) {
      var t;
      return {
        c: function c() {
          t = Ct("x");
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Fn(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        _c8,
        l,
        a,
        u,
        f = e[9] && "" !== e[4] && Mn(e),
        _d = e[9] && "" === e[0] && "" !== e[1] && Tn(e),
        _p = e[9] && "" !== e[0] && An(e);
      return {
        c: function c() {
          t = xt("div"), n = xt("div"), f && f.c(), i = jt(), o = xt("input"), s = jt(), _d && _d.c(), _c8 = jt(), _p && _p.c(), St(o, "type", "text"), St(o, "title", r = e[2] ? e[2] : e[1]), St(o, "spellcheck", !1), St(o, "autocomplete", "off"), St(o, "autocorrect", "off"), St(o, "autocapitalize", "off"), o.disabled = e[3], St(n, "class", e[6]), St(t, "class", e[5]);
        },
        m: function m(r, h) {
          kt(r, t, h), bt(t, n), f && f.m(n, null), bt(n, i), bt(n, o), Mt(o, e[0]), e[21](o), bt(n, s), _d && _d.m(n, null), bt(n, _c8), _p && _p.m(n, null), l = !0, a || (u = [Pt(o, "input", e[20]), Pt(o, "input", e[12]), Pt(o, "blur", e[13])], a = !0);
        },
        p: function p(e, _ref8) {
          var _ref9 = (0, _slicedToArray2["default"])(_ref8, 1),
            s = _ref9[0];
          e[9] && "" !== e[4] ? f ? (f.p(e, s), 528 & s && nn(f, 1)) : (f = Mn(e), f.c(), nn(f, 1), f.m(n, i)) : f && (en(), on(f, 1, 1, function () {
            f = null;
          }), tn()), (!l || 6 & s && r !== (r = e[2] ? e[2] : e[1])) && St(o, "title", r), (!l || 8 & s) && (o.disabled = e[3]), 1 & s && o.value !== e[0] && Mt(o, e[0]), e[9] && "" === e[0] && "" !== e[1] ? _d ? _d.p(e, s) : (_d = Tn(e), _d.c(), _d.m(n, _c8)) : _d && (_d.d(1), _d = null), e[9] && "" !== e[0] ? _p ? (_p.p(e, s), 513 & s && nn(_p, 1)) : (_p = An(e), _p.c(), nn(_p, 1), _p.m(n, null)) : _p && (en(), on(_p, 1, 1, function () {
            _p = null;
          }), tn()), (!l || 64 & s) && St(n, "class", e[6]), (!l || 32 & s) && St(t, "class", e[5]);
        },
        i: function i(e) {
          l || (nn(f), nn(_p), l = !0);
        },
        o: function o(e) {
          on(f), on(_p), l = !1;
        },
        d: function d(n) {
          n && _t(t), f && f.d(), e[21](null), _d && _d.d(), _p && _p.d(), a = !1, ht(u);
        }
      };
    }
    function Ln(e, t, n) {
      var i,
        o,
        r,
        s,
        _t$placeholder = t.placeholder,
        c = _t$placeholder === void 0 ? "" : _t$placeholder,
        _t$title = t.title,
        l = _t$title === void 0 ? "" : _t$title,
        _t$value = t.value,
        a = _t$value === void 0 ? "" : _t$value,
        _t$disabled = t.disabled,
        u = _t$disabled === void 0 ? !1 : _t$disabled,
        _t$icon = t.icon,
        f = _t$icon === void 0 ? "" : _t$icon,
        _t$type = t.type,
        d = _t$type === void 0 ? "" : _t$type,
        _t$extra = t.extra,
        p = _t$extra === void 0 ? "" : _t$extra,
        _t$onInput = t.onInput,
        h = _t$onInput === void 0 ? null : _t$onInput,
        _t$onBlur = t.onBlur,
        g = _t$onBlur === void 0 ? null : _t$onBlur,
        _t$autofocus = t.autofocus,
        m = _t$autofocus === void 0 ? !1 : _t$autofocus,
        y = !1;
      function $() {
        h && h(a);
      }
      var v = !1;
      return Lt(function () {
        n(9, v = !0), m && s.focus();
      }), e.$$set = function (e) {
        "placeholder" in e && n(1, c = e.placeholder), "title" in e && n(2, l = e.title), "value" in e && n(0, a = e.value), "disabled" in e && n(3, u = e.disabled), "icon" in e && n(4, f = e.icon), "type" in e && n(14, d = e.type), "extra" in e && n(15, p = e.extra), "onInput" in e && n(16, h = e.onInput), "onBlur" in e && n(17, g = e.onBlur), "autofocus" in e && n(18, m = e.autofocus);
      }, e.$$.update = function () {
        41 & e.$$.dirty && (n(5, i = "iif-input-wrapper"), n(5, i += " " + i + ("" === a ? "--empty" : "--has-content") + (u ? " " + i + "--disabled" : ""))), 540682 & e.$$.dirty && n(6, o = "iif-input iif-input--with" + ("" === c ? "out" : "") + "-placeholder" + (y ? " iif-input--with-icon" : "") + ("" !== d ? " iif-input--" + d : "") + (u ? " iif-input--disabled" : "")), 49152 & e.$$.dirty && (n(7, r = ""), "color" === d && "" !== p && n(7, r = "opacity: 1; color: " + p));
      }, [a, c, l, u, f, i, o, r, s, v, function () {
        n(19, y = !0);
      }, function () {
        n(0, a = ""), $();
      }, $, function () {
        g && g(a);
      }, d, p, h, g, m, y, function () {
        a = this.value, n(0, a);
      }, function (e) {
        Dt[e ? "unshift" : "push"](function () {
          s = e, n(8, s);
        });
      }];
    }
    var Nn = /*#__PURE__*/function (_mn3) {
      (0, _inherits2["default"])(Nn, _mn3);
      var _super10 = _createSuper(Nn);
      function Nn(e) {
        var _this21;
        (0, _classCallCheck2["default"])(this, Nn);
        _this21 = _super10.call(this), gn((0, _assertThisInitialized2["default"])(_this21), e, Ln, Fn, mt, {
          placeholder: 1,
          title: 2,
          value: 0,
          disabled: 3,
          icon: 4,
          type: 14,
          extra: 15,
          onInput: 16,
          onBlur: 17,
          autofocus: 18
        });
        return _this21;
      }
      return (0, _createClass2["default"])(Nn);
    }(mn);
    function Bn(e) {
      var t, n;
      var i = e[5]["default"],
        _o27 = yt(i, e, e[4], null);
      return {
        c: function c() {
          t = xt("div"), _o27 && _o27.c(), St(t, "class", e[0]);
        },
        m: function m(e, i) {
          kt(e, t, i), _o27 && _o27.m(t, null), n = !0;
        },
        p: function p(e, _ref10) {
          var _ref11 = (0, _slicedToArray2["default"])(_ref10, 1),
            r = _ref11[0];
          _o27 && _o27.p && (!n || 16 & r) && vt(_o27, i, e, e[4], r, null, null), (!n || 1 & r) && St(t, "class", e[0]);
        },
        i: function i(e) {
          n || (nn(_o27, e), n = !0);
        },
        o: function o(e) {
          on(_o27, e), n = !1;
        },
        d: function d(e) {
          e && _t(t), _o27 && _o27.d(e);
        }
      };
    }
    var Vn = "iif-block";
    function Dn(e, t, n) {
      var i,
        _t$$$slots3 = t.$$slots,
        o = _t$$$slots3 === void 0 ? {} : _t$$$slots3,
        r = t.$$scope,
        _t$type2 = t.type,
        s = _t$type2 === void 0 ? "" : _t$type2,
        _t$name = t.name,
        c = _t$name === void 0 ? "" : _t$name,
        _t$extra2 = t.extra,
        l = _t$extra2 === void 0 ? "" : _t$extra2;
      return e.$$set = function (e) {
        "type" in e && n(1, s = e.type), "name" in e && n(2, c = e.name), "extra" in e && n(3, l = e.extra), "$$scope" in e && n(4, r = e.$$scope);
      }, e.$$.update = function () {
        if (15 & e.$$.dirty) {
          if (n(0, i = Vn), "" !== s) {
            var _e83 = " iif-block--" + s;
            n(0, i += _e83), "" !== c && n(0, i += _e83 + "--" + c);
          }
          "" !== l && n(0, i += " iif-block--" + l);
        }
      }, [i, s, c, l, r, o];
    }
    var zn = /*#__PURE__*/function (_mn4) {
      (0, _inherits2["default"])(zn, _mn4);
      var _super11 = _createSuper(zn);
      function zn(e) {
        var _this22;
        (0, _classCallCheck2["default"])(this, zn);
        _this22 = _super11.call(this), gn((0, _assertThisInitialized2["default"])(_this22), e, Dn, Bn, mt, {
          type: 1,
          name: 2,
          extra: 3
        });
        return _this22;
      }
      return (0, _createClass2["default"])(zn);
    }(mn);
    function qn(e, t, n) {
      var i = e.slice();
      return i[10] = t[n], i[12] = n, i;
    }
    function Un(e, t) {
      var n, _i42, o, r;
      function s(e) {
        t[6](e);
      }
      var c = {
        type: "text",
        placeholder: t[2].defaultPlaceholder,
        icon: "search",
        autofocus: t[10]
      };
      return void 0 !== t[0] && (c.value = t[0]), _i42 = new Nn({
        props: c
      }), Dt.push(function () {
        return un(_i42, "value", s);
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i42.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i42, e, t), r = !0;
        },
        p: function p(e, n) {
          t = e;
          var r = {};
          2 & n && (r.autofocus = t[10]), !o && 1 & n && (o = !0, r.value = t[0], Gt(function () {
            return o = !1;
          })), _i42.$set(r);
        },
        i: function i(e) {
          r || (nn(_i42.$$.fragment, e), r = !0);
        },
        o: function o(e) {
          on(_i42.$$.fragment, e), r = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i42, e);
        }
      };
    }
    function Hn(e) {
      var t,
        n,
        i,
        _o28,
        r,
        s,
        _c9 = [],
        l = new Map(),
        a = [e[1]];
      var u = function u(e) {
        return e[10];
      };
      for (var _t42 = 0; _t42 < 1; _t42 += 1) {
        var _n51 = qn(e, a, _t42),
          _i43 = u(_n51);
        l.set(_i43, _c9[_t42] = Un(_i43, _n51));
      }
      return {
        c: function c() {
          t = xt("form");
          for (var _e84 = 0; _e84 < 1; _e84 += 1) _c9[_e84].c();
          n = jt(), i = xt("button"), i.textContent = "".concat(e[2].button), St(i, "class", "iif-form-button iif-form-button--primary"), St(i, "type", "submit"), St(t, "class", "iif-block--search-form");
        },
        m: function m(l, a) {
          kt(l, t, a);
          for (var _e85 = 0; _e85 < 1; _e85 += 1) _c9[_e85].m(t, null);
          bt(t, n), bt(t, i), _o28 = !0, r || (s = Pt(t, "submit", Ot(e[3])), r = !0);
        },
        p: function p(e, i) {
          7 & i && (a = [e[1]], en(), _c9 = cn(_c9, i, u, 1, e, a, l, t, sn, Un, n, qn), tn());
        },
        i: function i(e) {
          if (!_o28) {
            for (var _e86 = 0; _e86 < 1; _e86 += 1) nn(_c9[_e86]);
            _o28 = !0;
          }
        },
        o: function o(e) {
          for (var _e87 = 0; _e87 < 1; _e87 += 1) on(_c9[_e87]);
          _o28 = !1;
        },
        d: function d(e) {
          e && _t(t);
          for (var _e88 = 0; _e88 < 1; _e88 += 1) _c9[_e88].d();
          r = !1, s();
        }
      };
    }
    function Kn(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "search",
          name: "global",
          $$slots: {
            "default": [Hn]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref12) {
          var _ref13 = (0, _slicedToArray2["default"])(_ref12, 1),
            n = _ref13[0];
          var i = {};
          8195 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Gn(e, t, n) {
      var i = t.viewChanged,
        o = t.route;
      var r = Bt("registry"),
        s = xn.search;
      var c,
        l = "";
      function a(e) {
        return !(!e || "search" !== e.type || !e.params || "" !== l && l === e.params.search) && (n(0, c = e.params.search), l = c, !0);
      }
      return e.$$set = function (e) {
        "viewChanged" in e && n(4, i = e.viewChanged), "route" in e && n(5, o = e.route);
      }, e.$$.update = function () {
        49 & e.$$.dirty && (null === c ? (n(0, c = ""), null !== o && !a(o) && o.parent && a(o.parent)) : i ? a(o) : l = ""), e.$$.dirty;
      }, [c, !1, s, function () {
        if ("string" == typeof c) {
          var _e89 = c.trim().toLowerCase();
          "" !== _e89 && (l = _e89, r.router.action("search", _e89));
        }
      }, i, o, function (e) {
        c = e, n(0, c), n(5, o), n(4, i);
      }];
    }
    var Jn = /*#__PURE__*/function (_mn5) {
      (0, _inherits2["default"])(Jn, _mn5);
      var _super12 = _createSuper(Jn);
      function Jn(e) {
        var _this23;
        (0, _classCallCheck2["default"])(this, Jn);
        _this23 = _super12.call(this), gn((0, _assertThisInitialized2["default"])(_this23), e, Gn, Kn, mt, {
          viewChanged: 4,
          route: 5
        });
        return _this23;
      }
      return (0, _createClass2["default"])(Jn);
    }(mn);
    function Wn(e) {
      var t, n, i, o, r, s, c, l;
      return n = new En({
        props: {
          icon: "parent"
        }
      }), {
        c: function c() {
          t = xt("div"), fn(n.$$.fragment), i = jt(), o = xt("a"), r = Ct(e[0]), St(o, "href", "# "), St(t, "class", "iif-parent-link");
        },
        m: function m(a, u) {
          kt(a, t, u), dn(n, t, null), bt(t, i), bt(t, o), bt(o, r), s = !0, c || (l = Pt(o, "click", Ot(function () {
            gt(e[1]) && e[1].apply(this, arguments);
          })), c = !0);
        },
        p: function p(t, _ref14) {
          var _ref15 = (0, _slicedToArray2["default"])(_ref14, 1),
            n = _ref15[0];
          e = t, (!s || 1 & n) && Et(r, e[0]);
        },
        i: function i(e) {
          s || (nn(n.$$.fragment, e), s = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), s = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n), c = !1, l();
        }
      };
    }
    function Qn(e, t, n) {
      var i = t.text,
        o = t.onClick;
      return e.$$set = function (e) {
        "text" in e && n(0, i = e.text), "onClick" in e && n(1, o = e.onClick);
      }, [i, o];
    }
    var Yn = /*#__PURE__*/function (_mn6) {
      (0, _inherits2["default"])(Yn, _mn6);
      var _super13 = _createSuper(Yn);
      function Yn(e) {
        var _this24;
        (0, _classCallCheck2["default"])(this, Yn);
        _this24 = _super13.call(this), gn((0, _assertThisInitialized2["default"])(_this24), e, Qn, Wn, mt, {
          text: 0,
          onClick: 1
        });
        return _this24;
      }
      return (0, _createClass2["default"])(Yn);
    }(mn);
    function Xn(e, t, n) {
      var i = e.slice();
      return i[7] = t[n], i[9] = n, i;
    }
    function Zn(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "parent",
          $$slots: {
            "default": [ti]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          1025 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function ei(e, t) {
      var n, _i44, _o29;
      function r() {
        return t[3](t[7]);
      }
      return _i44 = new Yn({
        props: {
          text: t[7].text,
          onClick: r
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i44.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i44, e, t), _o29 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          1 & n && (o.text = t[7].text), 1 & n && (o.onClick = r), _i44.$set(o);
        },
        i: function i(e) {
          _o29 || (nn(_i44.$$.fragment, e), _o29 = !0);
        },
        o: function o(e) {
          on(_i44.$$.fragment, e), _o29 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i44, e);
        }
      };
    }
    function ti(e) {
      var t,
        n,
        _i45 = [],
        o = new Map(),
        r = e[0];
      var s = function s(e) {
        return e[7].key;
      };
      for (var _t43 = 0; _t43 < r.length; _t43 += 1) {
        var _n52 = Xn(e, r, _t43),
          _c10 = s(_n52);
        o.set(_c10, _i45[_t43] = ei(_c10, _n52));
      }
      return {
        c: function c() {
          for (var _e90 = 0; _e90 < _i45.length; _e90 += 1) _i45[_e90].c();
          t = It();
        },
        m: function m(e, o) {
          for (var _t44 = 0; _t44 < _i45.length; _t44 += 1) _i45[_t44].m(e, o);
          kt(e, t, o), n = !0;
        },
        p: function p(e, n) {
          3 & n && (r = e[0], en(), _i45 = cn(_i45, n, s, 1, e, r, o, t.parentNode, sn, ei, t, Xn), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e91 = 0; _e91 < r.length; _e91 += 1) nn(_i45[_e91]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e92 = 0; _e92 < _i45.length; _e92 += 1) on(_i45[_e92]);
          n = !1;
        },
        d: function d(e) {
          for (var _t45 = 0; _t45 < _i45.length; _t45 += 1) _i45[_t45].d(e);
          e && _t(t);
        }
      };
    }
    function ni(e) {
      var t,
        n,
        _i46 = e[0].length > 0 && Zn(e);
      return {
        c: function c() {
          _i46 && _i46.c(), t = It();
        },
        m: function m(e, o) {
          _i46 && _i46.m(e, o), kt(e, t, o), n = !0;
        },
        p: function p(e, _ref16) {
          var _ref17 = (0, _slicedToArray2["default"])(_ref16, 1),
            n = _ref17[0];
          e[0].length > 0 ? _i46 ? (_i46.p(e, n), 1 & n && nn(_i46, 1)) : (_i46 = Zn(e), _i46.c(), nn(_i46, 1), _i46.m(t.parentNode, t)) : _i46 && (en(), on(_i46, 1, 1, function () {
            _i46 = null;
          }), tn());
        },
        i: function i(e) {
          n || (nn(_i46), n = !0);
        },
        o: function o(e) {
          on(_i46), n = !1;
        },
        d: function d(e) {
          _i46 && _i46.d(e), e && _t(t);
        }
      };
    }
    function ii(e, t, n) {
      var i = t.route;
      var o = Bt("registry"),
        r = xn.parent,
        s = o.collections;
      function c(e) {
        o.router.action("parent", e);
      }
      var l;
      return e.$$set = function (e) {
        "route" in e && n(2, i = e.route);
      }, e.$$.update = function () {
        if (5 & e.$$.dirty) {
          n(0, l = []), i.parent && function e(t, n) {
            var i = t.params;
            var o = r["default"];
            "custom" === t.type && void 0 !== r[t.params.customType] ? o = r[i.customType] : void 0 !== r[t.type] && (o = r[t.type], "collection" === t.type && (o = o.replace("{name}", tt.getCollectionTitle(s, i.provider, i.prefix))));
            var c = t.type + "-" + n + "-";
            switch (t.type) {
              case "collection":
                c += i.provider + ":" + i.prefix;
                break;
              case "custom":
                c += i.customType;
            }
            l.unshift({
              key: c,
              level: n,
              route: t,
              text: o
            }), t.parent && e(t.parent, n + 1);
          }(i.parent, 1);
        }
      }, [l, c, i, function (e) {
        return c(e.level);
      }];
    }
    var oi = /*#__PURE__*/function (_mn7) {
      (0, _inherits2["default"])(oi, _mn7);
      var _super14 = _createSuper(oi);
      function oi(e) {
        var _this25;
        (0, _classCallCheck2["default"])(this, oi);
        _this25 = _super14.call(this), gn((0, _assertThisInitialized2["default"])(_this25), e, ii, ni, mt, {
          route: 2
        });
        return _this25;
      }
      return (0, _createClass2["default"])(oi);
    }(mn);
    function ri(e, t, n) {
      var i = e.slice();
      return i[4] = t[n], i[6] = n, i;
    }
    function si(e, t, n) {
      var i = e.slice();
      return i[7] = t[n], i[9] = n, i;
    }
    function ci(e) {
      var t,
        n,
        i,
        _o30,
        r = [],
        s = new Map(),
        c = e[4].items;
      var l = function l(e) {
        return e[7].key;
      };
      for (var _t46 = 0; _t46 < c.length; _t46 += 1) {
        var _n53 = si(e, c, _t46),
          _i47 = l(_n53);
        s.set(_i47, r[_t46] = ui(_i47, _n53));
      }
      return {
        c: function c() {
          t = xt("div");
          for (var _e93 = 0; _e93 < r.length; _e93 += 1) r[_e93].c();
          n = jt(), St(t, "class", i = pi + "-" + e[4].side);
        },
        m: function m(e, i) {
          kt(e, t, i);
          for (var _e94 = 0; _e94 < r.length; _e94 += 1) r[_e94].m(t, null);
          bt(t, n), _o30 = !0;
        },
        p: function p(e, a) {
          1 & a && (c = e[4].items, en(), r = cn(r, a, l, 1, e, c, s, t, sn, ui, n, si), tn()), (!_o30 || 1 & a && i !== (i = pi + "-" + e[4].side)) && St(t, "class", i);
        },
        i: function i(e) {
          if (!_o30) {
            for (var _e95 = 0; _e95 < c.length; _e95 += 1) nn(r[_e95]);
            _o30 = !0;
          }
        },
        o: function o(e) {
          for (var _e96 = 0; _e96 < r.length; _e96 += 1) on(r[_e96]);
          _o30 = !1;
        },
        d: function d(e) {
          e && _t(t);
          for (var _e97 = 0; _e97 < r.length; _e97 += 1) r[_e97].d();
        }
      };
    }
    function li(e) {
      var t, n;
      return t = new En({
        props: {
          icon: e[7].icon
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          1 & n && (i.icon = e[7].icon), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function ai(e) {
      var t,
        n = e[7].title + "";
      return {
        c: function c() {
          t = Ct(n);
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        p: function p(e, i) {
          1 & i && n !== (n = e[7].title + "") && Et(t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function ui(e, t) {
      var n,
        i,
        o,
        r,
        s,
        c,
        l,
        a,
        u = t[7].icon && li(t),
        f = "" !== t[7].title && ai(t);
      return {
        key: e,
        first: null,
        c: function c() {
          n = xt("a"), u && u.c(), i = jt(), f && f.c(), St(n, "href", o = t[7].href), St(n, "class", r = t[7].className), St(n, "title", s = t[7].hint), this.first = n;
        },
        m: function m(e, o) {
          kt(e, n, o), u && u.m(n, null), bt(n, i), f && f.m(n, null), c = !0, l || (a = Pt(n, "click", Ot(function () {
            gt(t[7].onClick) && t[7].onClick.apply(this, arguments);
          })), l = !0);
        },
        p: function p(e, l) {
          (t = e)[7].icon ? u ? (u.p(t, l), 1 & l && nn(u, 1)) : (u = li(t), u.c(), nn(u, 1), u.m(n, i)) : u && (en(), on(u, 1, 1, function () {
            u = null;
          }), tn()), "" !== t[7].title ? f ? f.p(t, l) : (f = ai(t), f.c(), f.m(n, null)) : f && (f.d(1), f = null), (!c || 1 & l && o !== (o = t[7].href)) && St(n, "href", o), (!c || 1 & l && r !== (r = t[7].className)) && St(n, "class", r), (!c || 1 & l && s !== (s = t[7].hint)) && St(n, "title", s);
        },
        i: function i(e) {
          c || (nn(u), c = !0);
        },
        o: function o(e) {
          on(u), c = !1;
        },
        d: function d(e) {
          e && _t(n), u && u.d(), f && f.d(), l = !1, a();
        }
      };
    }
    function fi(e, t) {
      var n,
        i,
        _o31,
        r = !t[4].empty && ci(t);
      return {
        key: e,
        first: null,
        c: function c() {
          n = It(), r && r.c(), i = It(), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), r && r.m(e, t), kt(e, i, t), _o31 = !0;
        },
        p: function p(e, n) {
          (t = e)[4].empty ? r && (en(), on(r, 1, 1, function () {
            r = null;
          }), tn()) : r ? (r.p(t, n), 1 & n && nn(r, 1)) : (r = ci(t), r.c(), nn(r, 1), r.m(i.parentNode, i));
        },
        i: function i(e) {
          _o31 || (nn(r), _o31 = !0);
        },
        o: function o(e) {
          on(r), _o31 = !1;
        },
        d: function d(e) {
          e && _t(n), r && r.d(e), e && _t(i);
        }
      };
    }
    function di(e) {
      var t,
        n,
        _i48 = [],
        o = new Map(),
        r = e[0];
      var s = function s(e) {
        return e[4].side;
      };
      for (var _t47 = 0; _t47 < r.length; _t47 += 1) {
        var _n54 = ri(e, r, _t47),
          _c11 = s(_n54);
        o.set(_c11, _i48[_t47] = fi(_c11, _n54));
      }
      return {
        c: function c() {
          t = xt("div");
          for (var _e98 = 0; _e98 < _i48.length; _e98 += 1) _i48[_e98].c();
          St(t, "class", pi);
        },
        m: function m(e, o) {
          kt(e, t, o);
          for (var _e99 = 0; _e99 < _i48.length; _e99 += 1) _i48[_e99].m(t, null);
          n = !0;
        },
        p: function p(e, _ref18) {
          var _ref19 = (0, _slicedToArray2["default"])(_ref18, 1),
            n = _ref19[0];
          1 & n && (r = e[0], en(), _i48 = cn(_i48, n, s, 1, e, r, o, t, sn, fi, null, ri), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e100 = 0; _e100 < r.length; _e100 += 1) nn(_i48[_e100]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e101 = 0; _e101 < _i48.length; _e101 += 1) on(_i48[_e101]);
          n = !1;
        },
        d: function d(e) {
          e && _t(t);
          for (var _e102 = 0; _e102 < _i48.length; _e102 += 1) _i48[_e102].d();
        }
      };
    }
    var pi = "iif-tabs";
    function hi(e, t, n) {
      var i = t.tabs,
        o = t.selected,
        r = t.onClick,
        s = [];
      return e.$$set = function (e) {
        "tabs" in e && n(1, i = e.tabs), "selected" in e && n(2, o = e.selected), "onClick" in e && n(3, r = e.onClick);
      }, e.$$.update = function () {
        if (15 & e.$$.dirty) {
          var _e103 = [],
            _t48 = [];
          i.forEach(function (n) {
            var i = n.key,
              c = (void 0 === n.index ? s.length : n.index) % 11,
              l = "iif-tab iif-tab--" + c + (i === o ? " iif-tab--selected" : "") + (n.type ? " iif-tab--" + n.type : ""),
              a = {
                key: i,
                className: l,
                title: n.title,
                index: c,
                href: void 0 === n.href ? "# " : n.href,
                icon: n.icon,
                hint: n.hint,
                onClick: void 0 === n.onClick ? function () {
                  return r(i);
                } : n.onClick
              };
            n.right ? _t48.push(a) : _e103.push(a);
          }), n(0, s = [{
            side: "left",
            items: _e103,
            empty: !_e103.length
          }, {
            side: "right",
            items: _t48,
            empty: !_t48.length
          }]);
        }
      }, [s, i, o, r];
    }
    var gi = /*#__PURE__*/function (_mn8) {
      (0, _inherits2["default"])(gi, _mn8);
      var _super15 = _createSuper(gi);
      function gi(e) {
        var _this26;
        (0, _classCallCheck2["default"])(this, gi);
        _this26 = _super15.call(this), gn((0, _assertThisInitialized2["default"])(_this26), e, hi, di, mt, {
          tabs: 1,
          selected: 2,
          onClick: 3
        });
        return _this26;
      }
      return (0, _createClass2["default"])(gi);
    }(mn);
    function mi(e) {
      var t,
        n,
        i = e[1].title + "";
      return {
        c: function c() {
          t = xt("div"), n = Ct(i), St(t, "class", "iif-block--add-form-title");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, t) {
          2 & t && i !== (i = e[1].title + "") && Et(n, i);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function yi(e) {
      var t, n;
      return t = new En({
        props: {
          icon: "plus"
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function $i(e) {
      var t, n;
      return {
        c: function c() {
          t = xt("div"), n = Ct(e[4]), St(t, "class", "iif-block--add-form-status");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, t) {
          16 & t && Et(n, e[4]);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function vi(e) {
      var t,
        n,
        i = e[1].invalid + "";
      return {
        c: function c() {
          t = xt("div"), n = Ct(i), St(t, "class", "iif-block--add-form-invalid");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, t) {
          2 & t && i !== (i = e[1].invalid + "") && Et(n, i);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function bi(e) {
      var t,
        n,
        i,
        _o32,
        r,
        s,
        _c12,
        l,
        a,
        u,
        f,
        d,
        p,
        h,
        g = e[1].submit + "",
        _m = e[1].title && mi(e);
      function y(t) {
        e[10](t);
      }
      var $ = {
        type: "text",
        placeholder: e[1].placeholder,
        icon: e[3]
      };
      void 0 !== e[0] && ($.value = e[0]), _o32 = new Nn({
        props: $
      }), Dt.push(function () {
        return un(_o32, "value", y);
      });
      var v = e[2] && yi(),
        b = e[4] && $i(e),
        k = !e[5] && e[1].invalid && vi(e);
      return {
        c: function c() {
          t = xt("div"), _m && _m.c(), n = jt(), i = xt("form"), fn(_o32.$$.fragment), s = jt(), _c12 = xt("button"), v && v.c(), l = jt(), a = Ct(g), u = jt(), b && b.c(), f = jt(), k && k.c(), St(_c12, "class", e[6]), St(_c12, "type", "submit"), St(i, "class", "iif-block--add-form-form"), St(t, "class", "iif-block--add-form");
        },
        m: function m(r, g) {
          kt(r, t, g), _m && _m.m(t, null), bt(t, n), bt(t, i), dn(_o32, i, null), bt(i, s), bt(i, _c12), v && v.m(_c12, null), bt(_c12, l), bt(_c12, a), bt(t, u), b && b.m(t, null), bt(t, f), k && k.m(t, null), d = !0, p || (h = Pt(i, "submit", Ot(e[7])), p = !0);
        },
        p: function p(e, _ref20) {
          var _ref21 = (0, _slicedToArray2["default"])(_ref20, 1),
            i = _ref21[0];
          e[1].title ? _m ? _m.p(e, i) : (_m = mi(e), _m.c(), _m.m(t, n)) : _m && (_m.d(1), _m = null);
          var s = {};
          2 & i && (s.placeholder = e[1].placeholder), 8 & i && (s.icon = e[3]), !r && 1 & i && (r = !0, s.value = e[0], Gt(function () {
            return r = !1;
          })), _o32.$set(s), e[2] ? v ? 4 & i && nn(v, 1) : (v = yi(), v.c(), nn(v, 1), v.m(_c12, l)) : v && (en(), on(v, 1, 1, function () {
            v = null;
          }), tn()), (!d || 2 & i) && g !== (g = e[1].submit + "") && Et(a, g), (!d || 64 & i) && St(_c12, "class", e[6]), e[4] ? b ? b.p(e, i) : (b = $i(e), b.c(), b.m(t, f)) : b && (b.d(1), b = null), !e[5] && e[1].invalid ? k ? k.p(e, i) : (k = vi(e), k.c(), k.m(t, null)) : k && (k.d(1), k = null);
        },
        i: function i(e) {
          d || (nn(_o32.$$.fragment, e), nn(v), d = !0);
        },
        o: function o(e) {
          on(_o32.$$.fragment, e), on(v), d = !1;
        },
        d: function d(e) {
          e && _t(t), _m && _m.d(), pn(_o32), v && v.d(), b && b.d(), k && k.d(), p = !1, h();
        }
      };
    }
    function ki(e, t, n) {
      var i,
        o,
        r = t.phrases,
        _t$buttonIcon = t.buttonIcon,
        s = _t$buttonIcon === void 0 ? !1 : _t$buttonIcon,
        _t$inputIcon = t.inputIcon,
        c = _t$inputIcon === void 0 ? "" : _t$inputIcon,
        l = t.value,
        a = t.onSubmit,
        _t$onValidate = t.onValidate,
        u = _t$onValidate === void 0 ? null : _t$onValidate,
        _t$status = t.status,
        f = _t$status === void 0 ? "" : _t$status;
      return e.$$set = function (e) {
        "phrases" in e && n(1, r = e.phrases), "buttonIcon" in e && n(2, s = e.buttonIcon), "inputIcon" in e && n(3, c = e.inputIcon), "value" in e && n(0, l = e.value), "onSubmit" in e && n(8, a = e.onSubmit), "onValidate" in e && n(9, u = e.onValidate), "status" in e && n(4, f = e.status);
      }, e.$$.update = function () {
        1 & e.$$.dirty && n(5, i = function (e) {
          return "function" != typeof u || u(e);
        }(l)), 4 & e.$$.dirty && n(6, o = "iif-form-button iif-form-button--primary" + (s ? " iif-form-button--with-icon" : ""));
      }, [l, r, s, c, f, i, o, function () {
        a(l);
      }, a, u, function (e) {
        l = e, n(0, l);
      }];
    }
    var _i = /*#__PURE__*/function (_mn9) {
      (0, _inherits2["default"])(_i, _mn9);
      var _super16 = _createSuper(_i);
      function _i(e) {
        var _this27;
        (0, _classCallCheck2["default"])(this, _i);
        _this27 = _super16.call(this), gn((0, _assertThisInitialized2["default"])(_this27), e, ki, bi, mt, {
          phrases: 1,
          buttonIcon: 2,
          inputIcon: 3,
          value: 0,
          onSubmit: 8,
          onValidate: 9,
          status: 4
        });
        return _this27;
      }
      return (0, _createClass2["default"])(_i);
    }(mn);
    function wi(e) {
      var t = e.toLowerCase().split("/");
      var n = t.shift();
      switch (n) {
        case "http:":
        case "https:":
          break;
        default:
          return null;
      }
      if ("" !== t.shift()) return null;
      var i = t.shift();
      if ("string" != typeof i) return null;
      var o = i.split(":");
      if (o.length > 2) return null;
      var r = o.shift();
      if (!r || !r.match(/^[a-z0-9.-]+$/)) return null;
      var s = o.shift();
      return void 0 === s || s.match(/^[0-9]+$/) ? n + "//" + i : null;
    }
    function xi(e) {
      var t, n;
      return t = new _i({
        props: {
          phrases: e[4].addForm,
          inputIcon: "link",
          buttonIcon: !0,
          value: "",
          onValidate: e[6],
          onSubmit: e[7],
          status: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          8 & n && (i.status = e[3]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Ci(e) {
      var t, n, i, _o33;
      t = new gi({
        props: {
          tabs: e[2],
          selected: e[0],
          onClick: e[5]
        }
      });
      var r = e[1] && xi(e);
      return {
        c: function c() {
          fn(t.$$.fragment), n = jt(), r && r.c(), i = It();
        },
        m: function m(e, s) {
          dn(t, e, s), kt(e, n, s), r && r.m(e, s), kt(e, i, s), _o33 = !0;
        },
        p: function p(e, n) {
          var o = {};
          4 & n && (o.tabs = e[2]), 1 & n && (o.selected = e[0]), t.$set(o), e[1] ? r ? (r.p(e, n), 2 & n && nn(r, 1)) : (r = xi(e), r.c(), nn(r, 1), r.m(i.parentNode, i)) : r && (en(), on(r, 1, 1, function () {
            r = null;
          }), tn());
        },
        i: function i(e) {
          _o33 || (nn(t.$$.fragment, e), nn(r), _o33 = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), on(r), _o33 = !1;
        },
        d: function d(e) {
          pn(t, e), e && _t(n), r && r.d(e), e && _t(i);
        }
      };
    }
    function ji(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "providers",
          $$slots: {
            "default": [Ci]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref22) {
          var _ref23 = (0, _slicedToArray2["default"])(_ref22, 1),
            n = _ref23[0];
          var i = {};
          2063 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Ii(e, t, n) {
      var i = t.activeProvider,
        o = t.providers;
      var r = Bt("registry"),
        s = xn.providers;
      var c,
        l = !1,
        a = "";
      return e.$$set = function (e) {
        "activeProvider" in e && n(0, i = e.activeProvider), "providers" in e && n(8, o = e.providers);
      }, e.$$.update = function () {
        262 & e.$$.dirty && (n(2, c = []), o.forEach(function (e, t) {
          var n = tt.getProvider(e);
          n && c.push({
            key: e,
            title: n.title,
            index: t
          });
        }));
      }, [i, l, c, a, s, function (e) {
        n(1, l = !1), r.router.action("provider", e);
      }, function (e) {
        return "" !== a && n(3, a = ""), null !== wi(e);
      }, function (e) {
        var t = wi(e);
        t && (n(3, a = s.status.loading.replace("{host}", t)), function (e, t, n) {
          e.api.sendQuery(t, "/provider", function (e, i) {
            var o = i;
            var r,
              s = "error";
            switch (e) {
              case "success":
                if ("object" != (0, _typeof2["default"])(o)) break;
                if ("string" != typeof o.provider) {
                  s = "unsupported";
                  break;
                }
                if (r = tt.convertProviderData(t, o), !r) break;
                var _e104 = o.provider;
                if (-1 !== tt.listProviders().indexOf(_e104)) {
                  s = "exists";
                  break;
                }
                return tt.addProvider(_e104, r), void n(t, !0, _e104);
            }
            n(t, !1, s);
          });
        }(r, t, function (e, t, i) {
          if (t) n(3, a = ""), n(1, l = !1), r.router.action("provider", i);else {
            var _t49 = i;
            n(3, a = s.status[_t49].replace("{host}", e));
          }
        }));
      }, o];
    }
    var Pi = /*#__PURE__*/function (_mn10) {
      (0, _inherits2["default"])(Pi, _mn10);
      var _super17 = _createSuper(Pi);
      function Pi(e) {
        var _this28;
        (0, _classCallCheck2["default"])(this, Pi);
        _this28 = _super17.call(this), gn((0, _assertThisInitialized2["default"])(_this28), e, Ii, ji, mt, {
          activeProvider: 0,
          providers: 8
        });
        return _this28;
      }
      return (0, _createClass2["default"])(Pi);
    }(mn);
    function Oi(e) {
      var t, n, i, o, r;
      return {
        c: function c() {
          t = xt("button"), n = Ct(e[1]), St(t, "class", e[4]), t.disabled = i = e[0].disabled;
        },
        m: function m(i, s) {
          kt(i, t, s), bt(t, n), o || (r = Pt(t, "click", Ot(function () {
            gt(e[2]) && e[2].apply(this, arguments);
          })), o = !0);
        },
        p: function p(o, r) {
          e = o, 2 & r && Et(n, e[1]), 16 & r && St(t, "class", e[4]), 1 & r && i !== (i = e[0].disabled) && (t.disabled = i);
        },
        d: function d(e) {
          e && _t(t), o = !1, r();
        }
      };
    }
    function Si(e) {
      var t, n, i, o;
      return {
        c: function c() {
          t = xt("a"), n = Ct(e[1]), St(t, "class", e[4]), St(t, "href", e[3]);
        },
        m: function m(r, s) {
          kt(r, t, s), bt(t, n), i || (o = Pt(t, "click", Ot(function () {
            gt(e[2]) && e[2].apply(this, arguments);
          })), i = !0);
        },
        p: function p(i, o) {
          e = i, 2 & o && Et(n, e[1]), 16 & o && St(t, "class", e[4]), 8 & o && St(t, "href", e[3]);
        },
        d: function d(e) {
          e && _t(t), i = !1, o();
        }
      };
    }
    function Ei(e) {
      var t;
      function n(e, t) {
        return e[3] ? Si : Oi;
      }
      var i = n(e),
        o = i(e);
      return {
        c: function c() {
          o.c(), t = It();
        },
        m: function m(e, n) {
          o.m(e, n), kt(e, t, n);
        },
        p: function p(e, _ref24) {
          var _ref25 = (0, _slicedToArray2["default"])(_ref24, 1),
            r = _ref25[0];
          i === (i = n(e)) && o ? o.p(e, r) : (o.d(1), o = i(e), o && (o.c(), o.m(t.parentNode, t)));
        },
        i: ut,
        o: ut,
        d: function d(e) {
          o.d(e), e && _t(t);
        }
      };
    }
    var Mi = "iif-filter";
    function Ti(e, t, n) {
      var i,
        _t$active = t.active,
        o = _t$active === void 0 ? !1 : _t$active,
        _t$hasActive = t.hasActive,
        r = _t$hasActive === void 0 ? !1 : _t$hasActive,
        s = t.filter,
        c = t.title,
        l = t.onClick,
        _t$link = t.link,
        a = _t$link === void 0 ? "# " : _t$link;
      return e.$$set = function (e) {
        "active" in e && n(5, o = e.active), "hasActive" in e && n(6, r = e.hasActive), "filter" in e && n(0, s = e.filter), "title" in e && n(1, c = e.title), "onClick" in e && n(2, l = e.onClick), "link" in e && n(3, a = e.link);
      }, e.$$.update = function () {
        97 & e.$$.dirty && n(4, i = Mi + (o ? " iif-filter--selected" : r ? " iif-filter--unselected" : "") + (s.index ? " iif-filter--" + s.index % 11 : ""));
      }, [s, c, l, a, i, o, r];
    }
    var Ai = /*#__PURE__*/function (_mn11) {
      (0, _inherits2["default"])(Ai, _mn11);
      var _super18 = _createSuper(Ai);
      function Ai(e) {
        var _this29;
        (0, _classCallCheck2["default"])(this, Ai);
        _this29 = _super18.call(this), gn((0, _assertThisInitialized2["default"])(_this29), e, Ti, Ei, mt, {
          active: 5,
          hasActive: 6,
          filter: 0,
          title: 1,
          onClick: 2,
          link: 3
        });
        return _this29;
      }
      return (0, _createClass2["default"])(Ai);
    }(mn);
    function Ri(e, t, n) {
      var i = e.slice();
      return i[13] = t[n][0], i[14] = t[n][1], i[16] = n, i;
    }
    function Fi(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "filters",
          name: e[0],
          extra: e[5],
          $$slots: {
            "default": [Bi]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          1 & n && (i.name = e[0]), 32 & n && (i.extra = e[5]), 131086 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Li(e) {
      var t, n;
      return {
        c: function c() {
          t = xt("div"), n = Ct(e[3]), St(t, "class", "iif-filters-header");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, t) {
          8 & t && Et(n, e[3]);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Ni(e, t) {
      var n, _i49, _o34;
      function r() {
        return t[11](t[13]);
      }
      return _i49 = new Ai({
        props: {
          active: t[13] === t[1].active,
          hasActive: null !== t[1].active,
          filter: t[14],
          link: t[2] ? t[2].replace("{prefix}", t[13]) : void 0,
          title: "" === t[14].title ? xn.filters.uncategorised : t[14].title,
          onClick: r
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i49.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i49, e, t), _o34 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          2 & n && (o.active = t[13] === t[1].active), 2 & n && (o.hasActive = null !== t[1].active), 2 & n && (o.filter = t[14]), 6 & n && (o.link = t[2] ? t[2].replace("{prefix}", t[13]) : void 0), 2 & n && (o.title = "" === t[14].title ? xn.filters.uncategorised : t[14].title), 2 & n && (o.onClick = r), _i49.$set(o);
        },
        i: function i(e) {
          _o34 || (nn(_i49.$$.fragment, e), _o34 = !0);
        },
        o: function o(e) {
          on(_i49.$$.fragment, e), _o34 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i49, e);
        }
      };
    }
    function Bi(e) {
      var t,
        n,
        _i51,
        _o35 = [],
        r = new Map(),
        s = "" !== e[3] && Li(e),
        c = Object.entries(e[1].filters);
      var l = function l(e) {
        return e[13];
      };
      for (var _t50 = 0; _t50 < c.length; _t50 += 1) {
        var _n55 = Ri(e, c, _t50),
          _i50 = l(_n55);
        r.set(_i50, _o35[_t50] = Ni(_i50, _n55));
      }
      return {
        c: function c() {
          s && s.c(), t = jt(), n = xt("div");
          for (var _e105 = 0; _e105 < _o35.length; _e105 += 1) _o35[_e105].c();
          St(n, "class", "iif-filters-list");
        },
        m: function m(e, r) {
          s && s.m(e, r), kt(e, t, r), kt(e, n, r);
          for (var _e106 = 0; _e106 < _o35.length; _e106 += 1) _o35[_e106].m(n, null);
          _i51 = !0;
        },
        p: function p(e, i) {
          "" !== e[3] ? s ? s.p(e, i) : (s = Li(e), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), 70 & i && (c = Object.entries(e[1].filters), en(), _o35 = cn(_o35, i, l, 1, e, c, r, n, sn, Ni, null, Ri), tn());
        },
        i: function i(e) {
          if (!_i51) {
            for (var _e107 = 0; _e107 < c.length; _e107 += 1) nn(_o35[_e107]);
            _i51 = !0;
          }
        },
        o: function o(e) {
          for (var _e108 = 0; _e108 < _o35.length; _e108 += 1) on(_o35[_e108]);
          _i51 = !1;
        },
        d: function d(e) {
          s && s.d(e), e && _t(t), e && _t(n);
          for (var _e109 = 0; _e109 < _o35.length; _e109 += 1) _o35[_e109].d();
        }
      };
    }
    function Vi(e) {
      var t,
        n,
        _i52 = e[4].length > 1 && Fi(e);
      return {
        c: function c() {
          _i52 && _i52.c(), t = It();
        },
        m: function m(e, o) {
          _i52 && _i52.m(e, o), kt(e, t, o), n = !0;
        },
        p: function p(e, _ref26) {
          var _ref27 = (0, _slicedToArray2["default"])(_ref26, 1),
            n = _ref27[0];
          e[4].length > 1 ? _i52 ? (_i52.p(e, n), 16 & n && nn(_i52, 1)) : (_i52 = Fi(e), _i52.c(), nn(_i52, 1), _i52.m(t.parentNode, t)) : _i52 && (en(), on(_i52, 1, 1, function () {
            _i52 = null;
          }), tn());
        },
        i: function i(e) {
          n || (nn(_i52), n = !0);
        },
        o: function o(e) {
          on(_i52), n = !1;
        },
        d: function d(e) {
          _i52 && _i52.d(e), e && _t(t);
        }
      };
    }
    function Di(e, t, n) {
      var i = t.name,
        o = t.block,
        _t$parent = t.parent,
        r = _t$parent === void 0 ? "" : _t$parent,
        _t$link2 = t.link,
        s = _t$link2 === void 0 ? "" : _t$link2,
        _t$onClick = t.onClick,
        c = _t$onClick === void 0 ? null : _t$onClick,
        _t$showTitle = t.showTitle,
        l = _t$showTitle === void 0 ? !1 : _t$showTitle,
        _t$title2 = t.title,
        a = _t$title2 === void 0 ? "" : _t$title2;
      var u = Bt("registry");
      function f(e) {
        "function" == typeof c ? c(e) : u.router.action(i, e === o.active ? null : e);
      }
      var d, p, h;
      return e.$$set = function (e) {
        "name" in e && n(0, i = e.name), "block" in e && n(1, o = e.block), "parent" in e && n(7, r = e.parent), "link" in e && n(2, s = e.link), "onClick" in e && n(8, c = e.onClick), "showTitle" in e && n(9, l = e.showTitle), "title" in e && n(10, a = e.title);
      }, e.$$.update = function () {
        if (1665 & e.$$.dirty) if (!1 === l) n(3, d = "");else if ("string" == typeof a) n(3, d = a);else {
          var _e110 = i;
          "" !== r && void 0 !== xn.filters[i + "-" + r] && (_e110 = i + "-" + r), n(3, d = void 0 === xn.filters[_e110] ? "" : xn.filters[_e110]);
        }
        2 & e.$$.dirty && n(4, p = null === o ? [] : Object.keys(o.filters)), 2 & e.$$.dirty && n(5, h = null === o || null === o.active ? "" : "filters--active");
      }, [i, o, s, d, p, h, f, r, c, l, a, function (e) {
        return f(e);
      }];
    }
    var zi = /*#__PURE__*/function (_mn12) {
      (0, _inherits2["default"])(zi, _mn12);
      var _super19 = _createSuper(zi);
      function zi(e) {
        var _this30;
        (0, _classCallCheck2["default"])(this, zi);
        _this30 = _super19.call(this), gn((0, _assertThisInitialized2["default"])(_this30), e, Di, Vi, mt, {
          name: 0,
          block: 1,
          parent: 7,
          link: 2,
          onClick: 8,
          showTitle: 9,
          title: 10
        });
        return _this30;
      }
      return (0, _createClass2["default"])(zi);
    }(mn);
    function qi(e) {
      var t, n, _i53;
      function o(t) {
        e[4](t);
      }
      var r = {
        type: "text",
        icon: "search",
        placeholder: e[1]
      };
      return void 0 !== e[0] && (r.value = e[0]), t = new Nn({
        props: r
      }), Dt.push(function () {
        return un(t, "value", o);
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, n) {
          dn(t, e, n), _i53 = !0;
        },
        p: function p(e, i) {
          var o = {};
          !n && 1 & i && (n = !0, o.value = e[0], Gt(function () {
            return n = !1;
          })), t.$set(o);
        },
        i: function i(e) {
          _i53 || (nn(t.$$.fragment, e), _i53 = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), _i53 = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Ui(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "filter",
          $$slots: {
            "default": [qi]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref28) {
          var _ref29 = (0, _slicedToArray2["default"])(_ref28, 1),
            n = _ref29[0];
          var i = {};
          129 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Hi(e, t, n) {
      var i = t.name,
        o = t.block;
      var r = Bt("registry");
      var s = o.keyword;
      var c = xn.search,
        l = void 0 === c.placeholder.collections ? c.defaultPlaceholder : c.placeholder.collections;
      return e.$$set = function (e) {
        "name" in e && n(2, i = e.name), "block" in e && n(3, o = e.block);
      }, e.$$.update = function () {
        13 & e.$$.dirty && s !== o.keyword && r.router.action(i, s);
      }, [s, l, i, o, function (e) {
        s = e, n(0, s);
      }];
    }
    var Ki = /*#__PURE__*/function (_mn13) {
      (0, _inherits2["default"])(Ki, _mn13);
      var _super20 = _createSuper(Ki);
      function Ki(e) {
        var _this31;
        (0, _classCallCheck2["default"])(this, Ki);
        _this31 = _super20.call(this), gn((0, _assertThisInitialized2["default"])(_this31), e, Hi, Ui, mt, {
          name: 2,
          block: 3
        });
        return _this31;
      }
      return (0, _createClass2["default"])(Ki);
    }(mn);
    function Gi(e) {
      var t, n;
      return {
        c: function c() {
          n = It(), t = new Tt(n);
        },
        m: function m(i, o) {
          t.m(e[1], i, o), kt(i, n, o);
        },
        p: function p(e, n) {
          2 & n && t.p(e[1]);
        },
        d: function d(e) {
          e && _t(n), e && t.d();
        }
      };
    }
    function Ji(e) {
      var t,
        n = e[0] && Gi(e);
      return {
        c: function c() {
          n && n.c(), t = It();
        },
        m: function m(e, i) {
          n && n.m(e, i), kt(e, t, i);
        },
        p: function p(e, _ref30) {
          var _ref31 = (0, _slicedToArray2["default"])(_ref30, 1),
            i = _ref31[0];
          e[0] ? n ? n.p(e, i) : (n = Gi(e), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
        },
        i: ut,
        o: ut,
        d: function d(e) {
          n && n.d(e), e && _t(t);
        }
      };
    }
    function Wi(e, t, n) {
      var i = t.text,
        o = !1;
      Lt(function () {
        n(0, o = !0);
      });
      var r = {
          0: {
            paths: ["M24 68h8c6 0 12 6 12 12v32c0 6-6 12-12 12H16c-6 0-12-6-12-12V80c0-6 5-12 12-12h8z"],
            width: 48
          },
          1: {
            paths: ["M4 68c6 0 12 6 12 12v44H4h24"],
            width: 32
          },
          2: {
            paths: ["M4 80c0-6 6-12 12-12h16c6 0 12 6 12 12v8c0 6-6 12-12 12H16c-6 0-12 6-12 12v12h40"],
            width: 48
          },
          3: {
            paths: ["M4 80c0-6 6-12 12-12h16c6 0 12 6 12 12v4c0 6-6 12-12 12h-4 4c6 0 12 6 12 12v4c0 6-6 12-12 12H16c-6 0-12-6-12-12"],
            width: 48
          },
          4: {
            paths: ["M4 68v20c0 6 6 12 12 12h16c6 0 12-6 12-12V68v56"],
            width: 48
          },
          5: {
            paths: ["M44 68H4v24h28c6 0 12 6 12 12v8c0 6-6 12-12 12H16c-6 0-12-6-12-12"],
            width: 48
          },
          6: {
            paths: ["M44 80c0-6-6-12-12-12H16c-6 0-12 6-12 12v32c0 6 6 12 12 12h16c6 0 12-6 12-12v-8c0-6-6-12-12-12H16c-6 0-12 6-12 12"],
            width: 48
          },
          7: {
            paths: ["M4 68h28c6 0 12 6 12 12 0 4-6.667 18.667-20 44"],
            width: 48
          },
          8: {
            paths: ["M24 68h8c6 0 12 6 12 12v4c0 6-6 12-12 12 6 0 12 6 12 12v4c0 6-6 12-12 12H16c-6 0-12-6-12-12v-4c0-6 6-12 12-12-6 0-12-6-12-12v-4c0-6 6-12 12-12h8z"],
            width: 48
          },
          9: {
            paths: ["M44 88c0 6-6 12-12 12H16c-6 0-12-6-12-12v-8c0-6 6-12 12-12h16c6 0 12 6 12 12v32c0 6-6 12-12 12H16c-6 0-12-6-12-12"],
            width: 48
          },
          "|": {
            paths: ["M4 48l24-24 24 24", "M4 144l24 24 24-24", "M28 48v96"],
            width: 56
          },
          ",": {
            paths: ["M8 124c-2 0-4-2-4-4s2-4 4-4 4 2 4 4v8c0 2-2 6-4 8"],
            width: 16
          },
          ".": {
            paths: ["M8 116c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4z"],
            width: 16
          }
        },
        s = {
          line: !1,
          animate: !1,
          height: 24
        };
      var c;
      return e.$$set = function (e) {
        "text" in e && n(2, i = e.text);
      }, e.$$.update = function () {
        4 & e.$$.dirty && n(1, c = function (e, t) {
          var n,
            i,
            o,
            c,
            l = 8,
            a = 192,
            u = "";
          "number" == typeof e && (e = "" + e);
          var f = Object.assign({}, s, "object" == (0, _typeof2["default"])(t) ? t : {});
          for (c = a / f.height, f.line && (l += 8), n = 0; n < e.length; n++) i = e.slice(n, n + 1), void 0 !== r[i] ? ("|" === i && (f.line = !0), o = r[i], l > 8 && (u += '<g transform="translate(' + l + ')">'), o.paths.forEach(function (e) {
            u += '<path d="' + e + '" />';
          }), l > 8 && (u += "</g>"), l += o.width + 8) : " " === i && (l += 16);
          return f.line && (u += '<path d="M4 4h' + (l - 8) + '" />', u += '<path d="M4 188h' + (l - 8) + '" />'), u = '<g stroke-width="8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">' + u + "</g>", '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="' + l / c + '" height="' + a / c + '" viewBox="0 0 ' + l + ' 192"> ' + u + "</svg>";
        }(i));
      }, [o, c, i];
    }
    var Qi = /*#__PURE__*/function (_mn14) {
      (0, _inherits2["default"])(Qi, _mn14);
      var _super21 = _createSuper(Qi);
      function Qi(e) {
        var _this32;
        (0, _classCallCheck2["default"])(this, Qi);
        _this32 = _super21.call(this), gn((0, _assertThisInitialized2["default"])(_this32), e, Wi, Ji, mt, {
          text: 2
        });
        return _this32;
      }
      return (0, _createClass2["default"])(Qi);
    }(mn);
    function Yi(e, t, n) {
      var i = e.slice();
      return i[15] = t[n], i;
    }
    function Xi(e) {
      var t,
        n,
        i,
        o = xn.collection.by + "";
      function r(e, t) {
        return e[2].author.url ? eo : Zi;
      }
      var s = r(e),
        _c13 = s(e);
      return {
        c: function c() {
          t = xt("small"), n = Ct(o), i = jt(), _c13.c();
        },
        m: function m(e, o) {
          kt(e, t, o), bt(t, n), bt(t, i), _c13.m(t, null);
        },
        p: function p(e, n) {
          s === (s = r(e)) && _c13 ? _c13.p(e, n) : (_c13.d(1), _c13 = s(e), _c13 && (_c13.c(), _c13.m(t, null)));
        },
        d: function d(e) {
          e && _t(t), _c13.d();
        }
      };
    }
    function Zi(e) {
      var t,
        n = e[2].author.name + "";
      return {
        c: function c() {
          t = Ct(n);
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        p: function p(e, i) {
          4 & i && n !== (n = e[2].author.name + "") && Et(t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function eo(e) {
      var t,
        n,
        i,
        o,
        r,
        s = e[2].author.name + "";
      return {
        c: function c() {
          t = xt("a"), n = Ct(s), St(t, "href", i = e[2].author.url), St(t, "target", "_blank");
        },
        m: function m(i, s) {
          kt(i, t, s), bt(t, n), o || (r = Pt(t, "click", e[6]), o = !0);
        },
        p: function p(e, o) {
          4 & o && s !== (s = e[2].author.name + "") && Et(n, s), 4 & o && i !== (i = e[2].author.url) && St(t, "href", i);
        },
        d: function d(e) {
          e && _t(t), o = !1, r();
        }
      };
    }
    function to(e) {
      var t, n;
      return t = new $e({
        props: {
          "class": "iconify",
          icon: ("" === e[0] ? "" : "@" + e[0] + ":") + e[1] + ":" + e[15]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          3 & n && (i.icon = ("" === e[0] ? "" : "@" + e[0] + ":") + e[1] + ":" + e[15]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function no(e) {
      var t, n, _i54;
      return n = new Qi({
        props: {
          text: e[9]
        }
      }), {
        c: function c() {
          t = xt("div"), fn(n.$$.fragment), St(t, "class", "iif-collection-height");
        },
        m: function m(e, o) {
          kt(e, t, o), dn(n, t, null), _i54 = !0;
        },
        p: ut,
        i: function i(e) {
          _i54 || (nn(n.$$.fragment, e), _i54 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i54 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n);
        }
      };
    }
    function io(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        _c14,
        l,
        a,
        u,
        f,
        d,
        p,
        h,
        g = e[2].name + "",
        _m2 = e[2].author && Xi(e),
        y = e[7].length > 0 && function (e) {
          var t,
            n,
            _i55 = e[7],
            _o36 = [];
          for (var _t51 = 0; _t51 < _i55.length; _t51 += 1) _o36[_t51] = to(Yi(e, _i55, _t51));
          var r = function r(e) {
            return on(_o36[e], 1, 1, function () {
              _o36[e] = null;
            });
          };
          return {
            c: function c() {
              t = xt("div");
              for (var _e111 = 0; _e111 < _o36.length; _e111 += 1) _o36[_e111].c();
              St(t, "class", "iif-collection-samples" + (e[8] ? " iif-collection-samples--" + e[8] : ""));
            },
            m: function m(e, i) {
              kt(e, t, i);
              for (var _e112 = 0; _e112 < _o36.length; _e112 += 1) _o36[_e112].m(t, null);
              n = !0;
            },
            p: function p(e, n) {
              if (131 & n) {
                var _s11;
                for (_i55 = e[7], _s11 = 0; _s11 < _i55.length; _s11 += 1) {
                  var _r11 = Yi(e, _i55, _s11);
                  _o36[_s11] ? (_o36[_s11].p(_r11, n), nn(_o36[_s11], 1)) : (_o36[_s11] = to(_r11), _o36[_s11].c(), nn(_o36[_s11], 1), _o36[_s11].m(t, null));
                }
                for (en(), _s11 = _i55.length; _s11 < _o36.length; _s11 += 1) r(_s11);
                tn();
              }
            },
            i: function i(e) {
              if (!n) {
                for (var _e113 = 0; _e113 < _i55.length; _e113 += 1) nn(_o36[_e113]);
                n = !0;
              }
            },
            o: function o(e) {
              _o36 = _o36.filter(Boolean);
              for (var _e114 = 0; _e114 < _o36.length; _e114 += 1) on(_o36[_e114]);
              n = !1;
            },
            d: function d(e) {
              e && _t(t), wt(_o36, e);
            }
          };
        }(e),
        $ = e[2].height && no(e);
      return f = new Qi({
        props: {
          text: e[2].total + ""
        }
      }), {
        c: function c() {
          t = xt("li"), n = xt("div"), i = xt("a"), o = Ct(g), r = jt(), _m2 && _m2.c(), s = jt(), _c14 = xt("div"), y && y.c(), l = jt(), $ && $.c(), a = jt(), u = xt("div"), fn(f.$$.fragment), St(i, "href", e[4]), St(n, "class", "iif-collection-text"), St(u, "class", "iif-collection-total"), St(_c14, "class", "iif-collection-data"), St(t, "class", e[5]);
        },
        m: function m(g, v) {
          kt(g, t, v), bt(t, n), bt(n, i), bt(i, o), bt(n, r), _m2 && _m2.m(n, null), bt(t, s), bt(t, _c14), y && y.m(_c14, null), bt(_c14, l), $ && $.m(_c14, null), bt(_c14, a), bt(_c14, u), dn(f, u, null), d = !0, p || (h = [Pt(i, "click", Ot(e[11])), Pt(t, "click", e[10])], p = !0);
        },
        p: function p(e, _ref32) {
          var _ref33 = (0, _slicedToArray2["default"])(_ref32, 1),
            r = _ref33[0];
          (!d || 4 & r) && g !== (g = e[2].name + "") && Et(o, g), (!d || 16 & r) && St(i, "href", e[4]), e[2].author ? _m2 ? _m2.p(e, r) : (_m2 = Xi(e), _m2.c(), _m2.m(n, null)) : _m2 && (_m2.d(1), _m2 = null), e[7].length > 0 && y.p(e, r), e[2].height ? $ ? ($.p(e, r), 4 & r && nn($, 1)) : ($ = no(e), $.c(), nn($, 1), $.m(_c14, a)) : $ && (en(), on($, 1, 1, function () {
            $ = null;
          }), tn());
          var s = {};
          4 & r && (s.text = e[2].total + ""), f.$set(s), (!d || 32 & r) && St(t, "class", e[5]);
        },
        i: function i(e) {
          d || (nn(y), nn($), nn(f.$$.fragment, e), d = !0);
        },
        o: function o(e) {
          on(y), on($), on(f.$$.fragment, e), d = !1;
        },
        d: function d(e) {
          e && _t(t), _m2 && _m2.d(), y && y.d(), $ && $.d(), pn(f), p = !1, ht(h);
        }
      };
    }
    var oo = "iif-collection";
    function ro(e, t, n) {
      var i = t.provider,
        o = t.prefix,
        r = t.info,
        s = t.onClick;
      var c = Bt("registry").link;
      var l, a;
      var u = function () {
          if (r.samples instanceof Array) return r.samples.slice(0, 3);
          return [];
        }(),
        f = function () {
          if (r.displayHeight) return r.displayHeight;
          if ("number" == typeof r.height) return r.height;
          return 0;
        }(),
        d = "|" + ("object" != (0, _typeof2["default"])(r.height) ? r.height : r.height.join(", "));
      return e.$$set = function (e) {
        "provider" in e && n(0, i = e.provider), "prefix" in e && n(1, o = e.prefix), "info" in e && n(2, r = e.info), "onClick" in e && n(3, s = e.onClick);
      }, e.$$.update = function () {
        if (19 & e.$$.dirty) {
          var _e115 = tt.getProvider(i);
          _e115 ? (n(4, l = _e115.links.collection.replace("{prefix}", o)), "" === l && n(4, l = "#")) : n(4, l = "#");
        }
        7 & e.$$.dirty && n(5, a = oo + " " + oo + "--prefix--" + o + ("" === i ? "" : " iif-collection--provider--" + i) + (r.index ? " iif-collection--" + r.index % 11 : ""));
      }, [i, o, r, s, l, a, c, u, f, d, function (e) {}, function () {
        return s(o);
      }];
    }
    var so = /*#__PURE__*/function (_mn15) {
      (0, _inherits2["default"])(so, _mn15);
      var _super22 = _createSuper(so);
      function so(e) {
        var _this33;
        (0, _classCallCheck2["default"])(this, so);
        _this33 = _super22.call(this), gn((0, _assertThisInitialized2["default"])(_this33), e, ro, io, mt, {
          provider: 0,
          prefix: 1,
          info: 2,
          onClick: 3
        });
        return _this33;
      }
      return (0, _createClass2["default"])(so);
    }(mn);
    function co(e, t, n) {
      var i = e.slice();
      return i[5] = t[n][0], i[6] = t[n][1], i[8] = n, i;
    }
    function lo(e) {
      var t, n;
      return {
        c: function c() {
          t = xt("div"), n = Ct(e[1]), St(t, "class", "iif-collections-list-title");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, t) {
          2 & t && Et(n, e[1]);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function ao(e, t) {
      var n, _i56, _o37;
      return _i56 = new so({
        props: {
          provider: t[3],
          prefix: t[5],
          info: t[6],
          onClick: t[4]
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i56.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i56, e, t), _o37 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          8 & n && (o.provider = t[3]), 4 & n && (o.prefix = t[5]), 4 & n && (o.info = t[6]), 16 & n && (o.onClick = t[4]), _i56.$set(o);
        },
        i: function i(e) {
          _o37 || (nn(_i56.$$.fragment, e), _o37 = !0);
        },
        o: function o(e) {
          on(_i56.$$.fragment, e), _o37 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i56, e);
        }
      };
    }
    function uo(e) {
      var t,
        n,
        i,
        _o38,
        r = [],
        s = new Map(),
        _c15 = e[0] && lo(e),
        l = Object.entries(e[2]);
      var a = function a(e) {
        return e[5];
      };
      for (var _t52 = 0; _t52 < l.length; _t52 += 1) {
        var _n56 = co(e, l, _t52),
          _i57 = a(_n56);
        s.set(_i57, r[_t52] = ao(_i57, _n56));
      }
      return {
        c: function c() {
          t = xt("div"), _c15 && _c15.c(), n = jt(), i = xt("ul");
          for (var _e116 = 0; _e116 < r.length; _e116 += 1) r[_e116].c();
          St(i, "class", "iif-collections-list-items"), St(t, "class", "iif-collections-list-category");
        },
        m: function m(e, s) {
          kt(e, t, s), _c15 && _c15.m(t, null), bt(t, n), bt(t, i);
          for (var _e117 = 0; _e117 < r.length; _e117 += 1) r[_e117].m(i, null);
          _o38 = !0;
        },
        p: function p(e, _ref34) {
          var _ref35 = (0, _slicedToArray2["default"])(_ref34, 1),
            o = _ref35[0];
          e[0] ? _c15 ? _c15.p(e, o) : (_c15 = lo(e), _c15.c(), _c15.m(t, n)) : _c15 && (_c15.d(1), _c15 = null), 28 & o && (l = Object.entries(e[2]), en(), r = cn(r, o, a, 1, e, l, s, i, sn, ao, null, co), tn());
        },
        i: function i(e) {
          if (!_o38) {
            for (var _e118 = 0; _e118 < l.length; _e118 += 1) nn(r[_e118]);
            _o38 = !0;
          }
        },
        o: function o(e) {
          for (var _e119 = 0; _e119 < r.length; _e119 += 1) on(r[_e119]);
          _o38 = !1;
        },
        d: function d(e) {
          e && _t(t), _c15 && _c15.d();
          for (var _e120 = 0; _e120 < r.length; _e120 += 1) r[_e120].d();
        }
      };
    }
    function fo(e, t, n) {
      var i = t.showCategories,
        _t$category = t.category,
        o = _t$category === void 0 ? "" : _t$category,
        r = t.items,
        s = t.provider,
        c = t.onClick;
      return e.$$set = function (e) {
        "showCategories" in e && n(0, i = e.showCategories), "category" in e && n(1, o = e.category), "items" in e && n(2, r = e.items), "provider" in e && n(3, s = e.provider), "onClick" in e && n(4, c = e.onClick);
      }, [i, o, r, s, c];
    }
    var po = /*#__PURE__*/function (_mn16) {
      (0, _inherits2["default"])(po, _mn16);
      var _super23 = _createSuper(po);
      function po(e) {
        var _this34;
        (0, _classCallCheck2["default"])(this, po);
        _this34 = _super23.call(this), gn((0, _assertThisInitialized2["default"])(_this34), e, fo, uo, mt, {
          showCategories: 0,
          category: 1,
          items: 2,
          provider: 3,
          onClick: 4
        });
        return _this34;
      }
      return (0, _createClass2["default"])(po);
    }(mn);
    function ho(e) {
      var t, n;
      return {
        c: function c() {
          t = xt("div"), n = Ct(e[0]), St(t, "class", "iif-content-error");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, _ref36) {
          var _ref37 = (0, _slicedToArray2["default"])(_ref36, 1),
            t = _ref37[0];
          1 & t && Et(n, e[0]);
        },
        i: ut,
        o: ut,
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function go(e, t, n) {
      var i = t.error;
      return e.$$set = function (e) {
        "error" in e && n(0, i = e.error);
      }, [i];
    }
    var mo = /*#__PURE__*/function (_mn17) {
      (0, _inherits2["default"])(mo, _mn17);
      var _super24 = _createSuper(mo);
      function mo(e) {
        var _this35;
        (0, _classCallCheck2["default"])(this, mo);
        _this35 = _super24.call(this), gn((0, _assertThisInitialized2["default"])(_this35), e, go, ho, mt, {
          error: 0
        });
        return _this35;
      }
      return (0, _createClass2["default"])(mo);
    }(mn);
    function yo(e, t, n) {
      var i = e.slice();
      return i[5] = t[n][0], i[6] = t[n][1], i[8] = n, i;
    }
    function $o(e) {
      var t, n;
      return t = new mo({
        props: {
          error: xn.errors.noCollections
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: ut,
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function vo(e, t) {
      var n, _i58, _o39;
      return _i58 = new po({
        props: {
          onClick: t[2],
          showCategories: t[0].showCategories,
          category: t[5],
          provider: t[1],
          items: t[6]
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i58.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i58, e, t), _o39 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          1 & n && (o.showCategories = t[0].showCategories), 1 & n && (o.category = t[5]), 2 & n && (o.provider = t[1]), 1 & n && (o.items = t[6]), _i58.$set(o);
        },
        i: function i(e) {
          _o39 || (nn(_i58.$$.fragment, e), _o39 = !0);
        },
        o: function o(e) {
          on(_i58.$$.fragment, e), _o39 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i58, e);
        }
      };
    }
    function bo(e) {
      var t,
        n,
        _i59 = [],
        o = new Map(),
        r = Object.entries(e[0].collections);
      var s = function s(e) {
        return e[5];
      };
      for (var _t53 = 0; _t53 < r.length; _t53 += 1) {
        var _n57 = yo(e, r, _t53),
          _c16 = s(_n57);
        o.set(_c16, _i59[_t53] = vo(_c16, _n57));
      }
      var _c17 = null;
      return r.length || (_c17 = $o()), {
        c: function c() {
          for (var _e121 = 0; _e121 < _i59.length; _e121 += 1) _i59[_e121].c();
          t = It(), _c17 && _c17.c();
        },
        m: function m(e, o) {
          for (var _t54 = 0; _t54 < _i59.length; _t54 += 1) _i59[_t54].m(e, o);
          kt(e, t, o), _c17 && _c17.m(e, o), n = !0;
        },
        p: function p(e, n) {
          7 & n && (r = Object.entries(e[0].collections), en(), _i59 = cn(_i59, n, s, 1, e, r, o, t.parentNode, sn, vo, t, yo), tn(), !r.length && _c17 ? _c17.p(e, n) : r.length ? _c17 && (en(), on(_c17, 1, 1, function () {
            _c17 = null;
          }), tn()) : (_c17 = $o(), _c17.c(), nn(_c17, 1), _c17.m(t.parentNode, t)));
        },
        i: function i(e) {
          if (!n) {
            for (var _e122 = 0; _e122 < r.length; _e122 += 1) nn(_i59[_e122]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e123 = 0; _e123 < _i59.length; _e123 += 1) on(_i59[_e123]);
          n = !1;
        },
        d: function d(e) {
          for (var _t55 = 0; _t55 < _i59.length; _t55 += 1) _i59[_t55].d(e);
          e && _t(t), _c17 && _c17.d(e);
        }
      };
    }
    function ko(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "collections",
          $$slots: {
            "default": [bo]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref38) {
          var _ref39 = (0, _slicedToArray2["default"])(_ref38, 1),
            n = _ref39[0];
          var i = {};
          515 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function _o(e, t, n) {
      var i = t.name,
        o = t.block,
        r = t.provider;
      var s = Bt("registry");
      return e.$$set = function (e) {
        "name" in e && n(3, i = e.name), "block" in e && n(0, o = e.block), "provider" in e && n(1, r = e.provider);
      }, [o, r, function (e) {
        s.router.action(i, e);
      }, i];
    }
    var wo = /*#__PURE__*/function (_mn18) {
      (0, _inherits2["default"])(wo, _mn18);
      var _super25 = _createSuper(wo);
      function wo(e) {
        var _this36;
        (0, _classCallCheck2["default"])(this, wo);
        _this36 = _super25.call(this), gn((0, _assertThisInitialized2["default"])(_this36), e, _o, ko, mt, {
          name: 3,
          block: 0,
          provider: 1
        });
        return _this36;
      }
      return (0, _createClass2["default"])(wo);
    }(mn);
    function xo(e) {
      var t, n;
      return t = new zi({
        props: {
          name: "categories",
          block: e[0].categories
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          1 & n && (i.block = e[0].categories), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Co(e) {
      var t,
        n,
        i,
        _o40,
        r,
        s,
        c,
        l = e[0].categories && xo(e);
      return _o40 = new Ki({
        props: {
          name: "filter",
          block: e[0].filter
        }
      }), s = new wo({
        props: {
          provider: e[1].params.provider,
          name: "collections",
          block: e[0].collections
        }
      }), {
        c: function c() {
          t = xt("div"), n = xt("div"), l && l.c(), i = jt(), fn(_o40.$$.fragment), r = jt(), fn(s.$$.fragment), St(n, "class", "iif-collections-header"), St(t, "class", "iif-view iif-view--collections");
        },
        m: function m(e, a) {
          kt(e, t, a), bt(t, n), l && l.m(n, null), bt(n, i), dn(_o40, n, null), bt(t, r), dn(s, t, null), c = !0;
        },
        p: function p(e, _ref40) {
          var _ref41 = (0, _slicedToArray2["default"])(_ref40, 1),
            t = _ref41[0];
          e[0].categories ? l ? (l.p(e, t), 1 & t && nn(l, 1)) : (l = xo(e), l.c(), nn(l, 1), l.m(n, i)) : l && (en(), on(l, 1, 1, function () {
            l = null;
          }), tn());
          var r = {};
          1 & t && (r.block = e[0].filter), _o40.$set(r);
          var c = {};
          2 & t && (c.provider = e[1].params.provider), 1 & t && (c.block = e[0].collections), s.$set(c);
        },
        i: function i(e) {
          c || (nn(l), nn(_o40.$$.fragment, e), nn(s.$$.fragment, e), c = !0);
        },
        o: function o(e) {
          on(l), on(_o40.$$.fragment, e), on(s.$$.fragment, e), c = !1;
        },
        d: function d(e) {
          e && _t(t), l && l.d(), pn(_o40), pn(s);
        }
      };
    }
    function jo(e, t, n) {
      var i = t.blocks,
        o = t.route;
      return e.$$set = function (e) {
        "blocks" in e && n(0, i = e.blocks), "route" in e && n(1, o = e.route);
      }, [i, o];
    }
    var Io = /*#__PURE__*/function (_mn19) {
      (0, _inherits2["default"])(Io, _mn19);
      var _super26 = _createSuper(Io);
      function Io(e) {
        var _this37;
        (0, _classCallCheck2["default"])(this, Io);
        _this37 = _super26.call(this), gn((0, _assertThisInitialized2["default"])(_this37), e, jo, Co, mt, {
          blocks: 0,
          route: 1
        });
        return _this37;
      }
      return (0, _createClass2["default"])(Io);
    }(mn);
    function Po(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "collection-info",
          extra: e[0],
          $$slots: {
            "default": [No]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          1 & n && (i.extra = e[0]), 270 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Oo(e) {
      var t,
        n,
        i = e[3].name + "";
      return {
        c: function c() {
          t = xt("div"), n = Ct(i), St(t, "class", "iif-collection-info-title");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, t) {
          8 & t && i !== (i = e[3].name + "") && Et(n, i);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function So(e) {
      var t, n, i;
      function o(e, t) {
        return e[3].author.url ? Mo : Eo;
      }
      var r = o(e),
        s = r(e);
      return {
        c: function c() {
          t = xt("dl"), n = xt("dt"), n.textContent = "".concat(e[4].author), i = xt("dd"), s.c();
        },
        m: function m(e, o) {
          kt(e, t, o), bt(t, n), bt(t, i), s.m(i, null);
        },
        p: function p(e, t) {
          r === (r = o(e)) && s ? s.p(e, t) : (s.d(1), s = r(e), s && (s.c(), s.m(i, null)));
        },
        d: function d(e) {
          e && _t(t), s.d();
        }
      };
    }
    function Eo(e) {
      var t,
        n = e[3].author.name + "";
      return {
        c: function c() {
          t = Ct(n);
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        p: function p(e, i) {
          8 & i && n !== (n = e[3].author.name + "") && Et(t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Mo(e) {
      var t,
        n,
        i,
        o,
        r,
        s = e[3].author.name + "";
      return {
        c: function c() {
          t = xt("a"), n = Ct(s), St(t, "href", i = e[3].author.url), St(t, "target", "_blank");
        },
        m: function m(i, s) {
          kt(i, t, s), bt(t, n), o || (r = Pt(t, "click", e[5]), o = !0);
        },
        p: function p(e, o) {
          8 & o && s !== (s = e[3].author.name + "") && Et(n, s), 8 & o && i !== (i = e[3].author.url) && St(t, "href", i);
        },
        d: function d(e) {
          e && _t(t), o = !1, r();
        }
      };
    }
    function To(e) {
      var t, n, i;
      function o(e, t) {
        return e[3].license.url ? Ro : Ao;
      }
      var r = o(e),
        s = r(e);
      return {
        c: function c() {
          t = xt("dl"), n = xt("dt"), n.textContent = "".concat(e[4].license), i = xt("dd"), s.c();
        },
        m: function m(e, o) {
          kt(e, t, o), bt(t, n), bt(t, i), s.m(i, null);
        },
        p: function p(e, t) {
          r === (r = o(e)) && s ? s.p(e, t) : (s.d(1), s = r(e), s && (s.c(), s.m(i, null)));
        },
        d: function d(e) {
          e && _t(t), s.d();
        }
      };
    }
    function Ao(e) {
      var t,
        n = e[3].license.title + "";
      return {
        c: function c() {
          t = Ct(n);
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        p: function p(e, i) {
          8 & i && n !== (n = e[3].license.title + "") && Et(t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Ro(e) {
      var t,
        n,
        i,
        o,
        r,
        s = e[3].license.title + "";
      return {
        c: function c() {
          t = xt("a"), n = Ct(s), St(t, "href", i = e[3].license.url), St(t, "target", "_blank");
        },
        m: function m(i, s) {
          kt(i, t, s), bt(t, n), o || (r = Pt(t, "click", e[5]), o = !0);
        },
        p: function p(e, o) {
          8 & o && s !== (s = e[3].license.title + "") && Et(n, s), 8 & o && i !== (i = e[3].license.url) && St(t, "href", i);
        },
        d: function d(e) {
          e && _t(t), o = !1, r();
        }
      };
    }
    function Fo(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        _c18 = e[3].total + "",
        l = e[3].height && Lo(e);
      return {
        c: function c() {
          t = xt("dl"), n = xt("dt"), n.textContent = "".concat(e[4].total), i = xt("dd"), o = Ct(_c18), r = jt(), l && l.c(), s = It();
        },
        m: function m(e, c) {
          kt(e, t, c), bt(t, n), bt(t, i), bt(i, o), kt(e, r, c), l && l.m(e, c), kt(e, s, c);
        },
        p: function p(e, t) {
          8 & t && _c18 !== (_c18 = e[3].total + "") && Et(o, _c18), e[3].height ? l ? l.p(e, t) : (l = Lo(e), l.c(), l.m(s.parentNode, s)) : l && (l.d(1), l = null);
        },
        d: function d(e) {
          e && _t(t), e && _t(r), l && l.d(e), e && _t(s);
        }
      };
    }
    function Lo(e) {
      var t,
        n,
        i,
        o,
        r = ("object" == (0, _typeof2["default"])(e[3].height) ? e[3].height.join(", ") : e[3].height) + "";
      return {
        c: function c() {
          t = xt("dl"), n = xt("dt"), n.textContent = "".concat(e[4].height), i = xt("dd"), o = Ct(r);
        },
        m: function m(e, r) {
          kt(e, t, r), bt(t, n), bt(t, i), bt(i, o);
        },
        p: function p(e, t) {
          8 & t && r !== (r = ("object" == (0, _typeof2["default"])(e[3].height) ? e[3].height.join(", ") : e[3].height) + "") && Et(o, r);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function No(e) {
      var t,
        n,
        i,
        o,
        r = e[2] && Oo(e),
        s = e[3].author && So(e),
        _c19 = e[3].license && To(e),
        l = !e[1] && Fo(e);
      return {
        c: function c() {
          r && r.c(), t = jt(), s && s.c(), n = jt(), _c19 && _c19.c(), i = jt(), l && l.c(), o = It();
        },
        m: function m(e, a) {
          r && r.m(e, a), kt(e, t, a), s && s.m(e, a), kt(e, n, a), _c19 && _c19.m(e, a), kt(e, i, a), l && l.m(e, a), kt(e, o, a);
        },
        p: function p(e, a) {
          e[2] ? r ? r.p(e, a) : (r = Oo(e), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null), e[3].author ? s ? s.p(e, a) : (s = So(e), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), e[3].license ? _c19 ? _c19.p(e, a) : (_c19 = To(e), _c19.c(), _c19.m(i.parentNode, i)) : _c19 && (_c19.d(1), _c19 = null), e[1] ? l && (l.d(1), l = null) : l ? l.p(e, a) : (l = Fo(e), l.c(), l.m(o.parentNode, o));
        },
        d: function d(e) {
          r && r.d(e), e && _t(t), s && s.d(e), e && _t(n), _c19 && _c19.d(e), e && _t(i), l && l.d(e), e && _t(o);
        }
      };
    }
    function Bo(e) {
      var t,
        n,
        _i60 = e[3] && Po(e);
      return {
        c: function c() {
          _i60 && _i60.c(), t = It();
        },
        m: function m(e, o) {
          _i60 && _i60.m(e, o), kt(e, t, o), n = !0;
        },
        p: function p(e, _ref42) {
          var _ref43 = (0, _slicedToArray2["default"])(_ref42, 1),
            n = _ref43[0];
          e[3] ? _i60 ? (_i60.p(e, n), 8 & n && nn(_i60, 1)) : (_i60 = Po(e), _i60.c(), nn(_i60, 1), _i60.m(t.parentNode, t)) : _i60 && (en(), on(_i60, 1, 1, function () {
            _i60 = null;
          }), tn());
        },
        i: function i(e) {
          n || (nn(_i60), n = !0);
        },
        o: function o(e) {
          on(_i60), n = !1;
        },
        d: function d(e) {
          _i60 && _i60.d(e), e && _t(t);
        }
      };
    }
    function Vo(e, t, n) {
      var i = t.name,
        o = t.block,
        _t$short = t["short"],
        r = _t$short === void 0 ? !1 : _t$short,
        _t$showTitle2 = t.showTitle,
        s = _t$showTitle2 === void 0 ? !0 : _t$showTitle2;
      var c = xn.collectionInfo,
        l = Bt("registry").link;
      var a;
      return e.$$set = function (e) {
        "name" in e && n(0, i = e.name), "block" in e && n(6, o = e.block), "short" in e && n(1, r = e["short"]), "showTitle" in e && n(2, s = e.showTitle);
      }, e.$$.update = function () {
        64 & e.$$.dirty && n(3, a = o.info);
      }, [i, r, s, a, c, l, o];
    }
    var Do = /*#__PURE__*/function (_mn20) {
      (0, _inherits2["default"])(Do, _mn20);
      var _super27 = _createSuper(Do);
      function Do(e) {
        var _this38;
        (0, _classCallCheck2["default"])(this, Do);
        _this38 = _super27.call(this), gn((0, _assertThisInitialized2["default"])(_this38), e, Vo, Bo, mt, {
          name: 0,
          block: 6,
          "short": 1,
          showTitle: 2
        });
        return _this38;
      }
      return (0, _createClass2["default"])(Do);
    }(mn);
    function zo(e, t, n) {
      var i = e.slice();
      return i[14] = t[n], i;
    }
    function qo(e) {
      var t, n, i, _o41;
      t = new $e({
        props: {
          icon: e[0],
          width: "1em",
          height: "1em"
        }
      });
      var r = e[7] && Uo(e);
      return {
        c: function c() {
          fn(t.$$.fragment), n = jt(), r && r.c(), i = It();
        },
        m: function m(e, s) {
          dn(t, e, s), kt(e, n, s), r && r.m(e, s), kt(e, i, s), _o41 = !0;
        },
        p: function p(e, n) {
          var o = {};
          1 & n && (o.icon = e[0]), t.$set(o), e[7] ? r ? (r.p(e, n), 128 & n && nn(r, 1)) : (r = Uo(e), r.c(), nn(r, 1), r.m(i.parentNode, i)) : r && (en(), on(r, 1, 1, function () {
            r = null;
          }), tn());
        },
        i: function i(e) {
          _o41 || (nn(t.$$.fragment, e), nn(r), _o41 = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), on(r), _o41 = !1;
        },
        d: function d(e) {
          pn(t, e), e && _t(n), r && r.d(e), e && _t(i);
        }
      };
    }
    function Uo(e) {
      var t, n;
      return t = new En({
        props: {
          icon: e[4] ? "selecting-selected" : "selecting-unselected"
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          16 & n && (i.icon = e[4] ? "selecting-selected" : "selecting-unselected"), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Ho(e) {
      var t,
        n,
        i,
        o,
        r = e[9].width + "",
        s = e[9].height + "";
      return {
        c: function c() {
          t = xt("div"), n = Ct(r), i = Ct(" x "), o = Ct(s), St(t, "class", "iif-icon-size");
        },
        m: function m(e, r) {
          kt(e, t, r), bt(t, n), bt(t, i), bt(t, o);
        },
        p: function p(e, t) {
          512 & t && r !== (r = e[9].width + "") && Et(n, r), 512 & t && s !== (s = e[9].height + "") && Et(o, s);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Ko(e) {
      var t,
        n,
        _i61 = e[8],
        _o42 = [];
      for (var _t56 = 0; _t56 < _i61.length; _t56 += 1) _o42[_t56] = Go(zo(e, _i61, _t56));
      var r = function r(e) {
        return on(_o42[e], 1, 1, function () {
          _o42[e] = null;
        });
      };
      return {
        c: function c() {
          for (var _e124 = 0; _e124 < _o42.length; _e124 += 1) _o42[_e124].c();
          t = It();
        },
        m: function m(e, i) {
          for (var _t57 = 0; _t57 < _o42.length; _t57 += 1) _o42[_t57].m(e, i);
          kt(e, t, i), n = !0;
        },
        p: function p(e, n) {
          if (320 & n) {
            var _s12;
            for (_i61 = e[8], _s12 = 0; _s12 < _i61.length; _s12 += 1) {
              var _r12 = zo(e, _i61, _s12);
              _o42[_s12] ? (_o42[_s12].p(_r12, n), nn(_o42[_s12], 1)) : (_o42[_s12] = Go(_r12), _o42[_s12].c(), nn(_o42[_s12], 1), _o42[_s12].m(t.parentNode, t));
            }
            for (en(), _s12 = _i61.length; _s12 < _o42.length; _s12 += 1) r(_s12);
            tn();
          }
        },
        i: function i(e) {
          if (!n) {
            for (var _e125 = 0; _e125 < _i61.length; _e125 += 1) nn(_o42[_e125]);
            n = !0;
          }
        },
        o: function o(e) {
          _o42 = _o42.filter(Boolean);
          for (var _e126 = 0; _e126 < _o42.length; _e126 += 1) on(_o42[_e126]);
          n = !1;
        },
        d: function d(e) {
          wt(_o42, e), e && _t(t);
        }
      };
    }
    function Go(e) {
      var t, n;
      function i() {
        return e[13](e[14]);
      }
      return t = new Ai({
        props: {
          filter: e[14].item,
          title: "" === e[14].item.title ? xn.filters.uncategorised : e[14].item.title,
          onClick: i
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(n, o) {
          e = n;
          var r = {};
          256 & o && (r.filter = e[14].item), 256 & o && (r.title = "" === e[14].item.title ? xn.filters.uncategorised : e[14].item.title), 320 & o && (r.onClick = i), t.$set(r);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Jo(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        _c20,
        l,
        a,
        u,
        f,
        _d2,
        p,
        h = e[3] && qo(e),
        g = e[9] && Ho(e),
        _m3 = e[8] && Ko(e);
      return {
        c: function c() {
          t = xt("li"), n = xt("div"), i = xt("a"), h && h.c(), o = jt(), r = xt("div"), s = xt("a"), _c20 = Ct(e[2]), l = jt(), g && g.c(), a = jt(), _m3 && _m3.c(), St(i, "href", e[5]), St(i, "target", "_blank"), St(i, "title", e[1]), St(n, "class", "iif-icon-sample"), St(s, "class", "iif-icon-name"), St(s, "href", e[5]), St(s, "title", e[1]), St(r, "class", u = "iif-icon-data iif-icon-data--filters--" + e[8].length), St(t, "class", e[10]);
        },
        m: function m(u, y) {
          kt(u, t, y), bt(t, n), bt(n, i), h && h.m(i, null), bt(t, o), bt(t, r), bt(r, s), bt(s, _c20), bt(r, l), g && g.m(r, null), bt(r, a), _m3 && _m3.m(r, null), f = !0, _d2 || (p = [Pt(i, "click", Ot(e[11])), Pt(s, "click", Ot(e[11]))], _d2 = !0);
        },
        p: function p(e, _ref44) {
          var _ref45 = (0, _slicedToArray2["default"])(_ref44, 1),
            n = _ref45[0];
          e[3] ? h ? (h.p(e, n), 8 & n && nn(h, 1)) : (h = qo(e), h.c(), nn(h, 1), h.m(i, null)) : h && (en(), on(h, 1, 1, function () {
            h = null;
          }), tn()), (!f || 32 & n) && St(i, "href", e[5]), (!f || 2 & n) && St(i, "title", e[1]), (!f || 4 & n) && Et(_c20, e[2]), (!f || 32 & n) && St(s, "href", e[5]), (!f || 2 & n) && St(s, "title", e[1]), e[9] ? g ? g.p(e, n) : (g = Ho(e), g.c(), g.m(r, a)) : g && (g.d(1), g = null), e[8] ? _m3 ? (_m3.p(e, n), 256 & n && nn(_m3, 1)) : (_m3 = Ko(e), _m3.c(), nn(_m3, 1), _m3.m(r, null)) : _m3 && (en(), on(_m3, 1, 1, function () {
            _m3 = null;
          }), tn()), (!f || 256 & n && u !== (u = "iif-icon-data iif-icon-data--filters--" + e[8].length)) && St(r, "class", u), (!f || 1024 & n) && St(t, "class", e[10]);
        },
        i: function i(e) {
          f || (nn(h), nn(_m3), f = !0);
        },
        o: function o(e) {
          on(h), on(_m3), f = !1;
        },
        d: function d(e) {
          e && _t(t), h && h.d(), g && g.d(), _m3 && _m3.d(), _d2 = !1, ht(p);
        }
      };
    }
    var Wo = "iif-icon-list";
    function Qo(e, t, n) {
      var i,
        o = t.name,
        r = t.tooltip,
        s = t.text,
        c = t.icon,
        l = t.exists,
        a = t.selected,
        u = t.link,
        f = t.onClick,
        d = t.isSelecting,
        p = t.filters,
        h = null;
      return e.$$set = function (e) {
        "name" in e && n(0, o = e.name), "tooltip" in e && n(1, r = e.tooltip), "text" in e && n(2, s = e.text), "icon" in e && n(12, c = e.icon), "exists" in e && n(3, l = e.exists), "selected" in e && n(4, a = e.selected), "link" in e && n(5, u = e.link), "onClick" in e && n(6, f = e.onClick), "isSelecting" in e && n(7, d = e.isSelecting), "filters" in e && n(8, p = e.filters);
      }, e.$$.update = function () {
        if (24 & e.$$.dirty && n(10, i = Wo + " " + Wo + (l ? "--loaded" : "--loading") + (a ? " iif-icon-list--selected" : "")), 521 & e.$$.dirty) {
          var _e127 = l ? ce(o) : null;
          _e127 !== h && n(9, h = _e127);
        }
      }, [o, r, s, l, a, u, f, d, p, h, i, function () {
        f(d ? a ? "deselect" : "select" : "toggle", c);
      }, c, function (e) {
        return f(e.action, e.value);
      }];
    }
    var Yo = /*#__PURE__*/function (_mn21) {
      (0, _inherits2["default"])(Yo, _mn21);
      var _super28 = _createSuper(Yo);
      function Yo(e) {
        var _this39;
        (0, _classCallCheck2["default"])(this, Yo);
        _this39 = _super28.call(this), gn((0, _assertThisInitialized2["default"])(_this39), e, Qo, Jo, mt, {
          name: 0,
          tooltip: 1,
          text: 2,
          icon: 12,
          exists: 3,
          selected: 4,
          link: 5,
          onClick: 6,
          isSelecting: 7,
          filters: 8
        });
        return _this39;
      }
      return (0, _createClass2["default"])(Yo);
    }(mn);
    function Xo(e) {
      var t,
        n,
        i = e[2].name + "";
      return {
        c: function c() {
          t = xt("span"), n = Ct(i), St(t, "class", "iif-icon-loading");
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
        },
        p: function p(e, t) {
          4 & t && i !== (i = e[2].name + "") && Et(n, i);
        },
        i: ut,
        o: ut,
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Zo(e) {
      var t, n, i, _o43;
      t = new $e({
        props: {
          icon: e[0],
          width: "1em",
          height: "1em"
        }
      });
      var r = e[6] && er(e);
      return {
        c: function c() {
          fn(t.$$.fragment), n = jt(), r && r.c(), i = It();
        },
        m: function m(e, s) {
          dn(t, e, s), kt(e, n, s), r && r.m(e, s), kt(e, i, s), _o43 = !0;
        },
        p: function p(e, n) {
          var o = {};
          1 & n && (o.icon = e[0]), t.$set(o), e[6] ? r ? (r.p(e, n), 64 & n && nn(r, 1)) : (r = er(e), r.c(), nn(r, 1), r.m(i.parentNode, i)) : r && (en(), on(r, 1, 1, function () {
            r = null;
          }), tn());
        },
        i: function i(e) {
          _o43 || (nn(t.$$.fragment, e), nn(r), _o43 = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), on(r), _o43 = !1;
        },
        d: function d(e) {
          pn(t, e), e && _t(n), r && r.d(e), e && _t(i);
        }
      };
    }
    function er(e) {
      var t, n;
      return t = new En({
        props: {
          icon: e[4] ? "selecting-selected" : "selecting-unselected"
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          16 & n && (i.icon = e[4] ? "selecting-selected" : "selecting-unselected"), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function tr(e) {
      var t, n, i, _o44, r, s, c;
      var l = [Zo, Xo],
        a = [];
      function u(e, t) {
        return e[3] ? 0 : 1;
      }
      return i = u(e), _o44 = a[i] = l[i](e), {
        c: function c() {
          t = xt("li"), n = xt("a"), _o44.c(), St(n, "href", e[5]), St(n, "target", "_blank"), St(n, "title", e[1]), St(t, "class", e[7]);
        },
        m: function m(o, l) {
          kt(o, t, l), bt(t, n), a[i].m(n, null), r = !0, s || (c = Pt(n, "click", Ot(e[8])), s = !0);
        },
        p: function p(e, _ref46) {
          var _ref47 = (0, _slicedToArray2["default"])(_ref46, 1),
            s = _ref47[0];
          var c = i;
          i = u(e), i === c ? a[i].p(e, s) : (en(), on(a[c], 1, 1, function () {
            a[c] = null;
          }), tn(), _o44 = a[i], _o44 ? _o44.p(e, s) : (_o44 = a[i] = l[i](e), _o44.c()), nn(_o44, 1), _o44.m(n, null)), (!r || 32 & s) && St(n, "href", e[5]), (!r || 2 & s) && St(n, "title", e[1]), (!r || 128 & s) && St(t, "class", e[7]);
        },
        i: function i(e) {
          r || (nn(_o44), r = !0);
        },
        o: function o(e) {
          on(_o44), r = !1;
        },
        d: function d(e) {
          e && _t(t), a[i].d(), s = !1, c();
        }
      };
    }
    var nr = "iif-icon-grid";
    function ir(e, t, n) {
      var i,
        o = t.name,
        r = t.tooltip,
        s = t.icon,
        c = t.exists,
        l = t.selected,
        a = t.link,
        u = t.onClick,
        f = t.isSelecting;
      return e.$$set = function (e) {
        "name" in e && n(0, o = e.name), "tooltip" in e && n(1, r = e.tooltip), "icon" in e && n(2, s = e.icon), "exists" in e && n(3, c = e.exists), "selected" in e && n(4, l = e.selected), "link" in e && n(5, a = e.link), "onClick" in e && n(9, u = e.onClick), "isSelecting" in e && n(6, f = e.isSelecting);
      }, e.$$.update = function () {
        24 & e.$$.dirty && n(7, i = nr + " " + nr + (c ? "--loaded" : "--loading") + (l ? " iif-icon-grid--selected" : ""));
      }, [o, r, s, c, l, a, f, i, function () {
        u(f ? l ? "deselect" : "select" : "toggle", s);
      }, u];
    }
    var or = /*#__PURE__*/function (_mn22) {
      (0, _inherits2["default"])(or, _mn22);
      var _super29 = _createSuper(or);
      function or(e) {
        var _this40;
        (0, _classCallCheck2["default"])(this, or);
        _this40 = _super29.call(this), gn((0, _assertThisInitialized2["default"])(_this40), e, ir, tr, mt, {
          name: 0,
          tooltip: 1,
          icon: 2,
          exists: 3,
          selected: 4,
          link: 5,
          onClick: 9,
          isSelecting: 6
        });
        return _this40;
      }
      return (0, _createClass2["default"])(or);
    }(mn);
    function rr(e, t, n) {
      var i = e.slice();
      return i[16] = t[n], i[18] = n, i;
    }
    function sr(e) {
      var t, n;
      var i = [e[16], {
        onClick: e[3]
      }, {
        isSelecting: e[1]
      }];
      var o = {};
      for (var _e128 = 0; _e128 < i.length; _e128 += 1) o = ft(o, i[_e128]);
      return t = new or({
        props: o
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var o = 14 & n ? ln(i, [4 & n && an(e[16]), 8 & n && {
            onClick: e[3]
          }, 2 & n && {
            isSelecting: e[1]
          }]) : {};
          t.$set(o);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function cr(e) {
      var t, n;
      var i = [e[16], {
        onClick: e[3]
      }, {
        isSelecting: e[1]
      }];
      var o = {};
      for (var _e129 = 0; _e129 < i.length; _e129 += 1) o = ft(o, i[_e129]);
      return t = new Yo({
        props: o
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var o = 14 & n ? ln(i, [4 & n && an(e[16]), 8 & n && {
            onClick: e[3]
          }, 2 & n && {
            isSelecting: e[1]
          }]) : {};
          t.$set(o);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function lr(e, t) {
      var n, i, _o45, r, s;
      var c = [cr, sr],
        l = [];
      function a(e, t) {
        return e[0] ? 0 : 1;
      }
      return i = a(t), _o45 = l[i] = c[i](t), {
        key: e,
        first: null,
        c: function c() {
          n = It(), _o45.c(), r = It(), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), l[i].m(e, t), kt(e, r, t), s = !0;
        },
        p: function p(e, n) {
          var s = i;
          i = a(t = e), i === s ? l[i].p(t, n) : (en(), on(l[s], 1, 1, function () {
            l[s] = null;
          }), tn(), _o45 = l[i], _o45 ? _o45.p(t, n) : (_o45 = l[i] = c[i](t), _o45.c()), nn(_o45, 1), _o45.m(r.parentNode, r));
        },
        i: function i(e) {
          s || (nn(_o45), s = !0);
        },
        o: function o(e) {
          on(_o45), s = !1;
        },
        d: function d(e) {
          e && _t(n), l[i].d(e), e && _t(r);
        }
      };
    }
    function ar(e) {
      var t,
        n,
        i,
        _o46,
        r = [],
        s = new Map(),
        c = e[2];
      var l = function l(e) {
        return e[16].name;
      };
      for (var _t58 = 0; _t58 < c.length; _t58 += 1) {
        var _n58 = rr(e, c, _t58),
          _i62 = l(_n58);
        s.set(_i62, r[_t58] = lr(_i62, _n58));
      }
      return {
        c: function c() {
          t = xt("div"), n = xt("ul");
          for (var _e130 = 0; _e130 < r.length; _e130 += 1) r[_e130].c();
          St(t, "class", i = ur + " " + ur + (e[0] ? "--list" : "--grid") + (e[1] ? " " + ur + "--selecting" : ""));
        },
        m: function m(e, i) {
          kt(e, t, i), bt(t, n);
          for (var _e131 = 0; _e131 < r.length; _e131 += 1) r[_e131].m(n, null);
          _o46 = !0;
        },
        p: function p(e, _ref48) {
          var _ref49 = (0, _slicedToArray2["default"])(_ref48, 1),
            a = _ref49[0];
          15 & a && (c = e[2], en(), r = cn(r, a, l, 1, e, c, s, n, sn, lr, null, rr), tn()), (!_o46 || 3 & a && i !== (i = ur + " " + ur + (e[0] ? "--list" : "--grid") + (e[1] ? " " + ur + "--selecting" : ""))) && St(t, "class", i);
        },
        i: function i(e) {
          if (!_o46) {
            for (var _e132 = 0; _e132 < c.length; _e132 += 1) nn(r[_e132]);
            _o46 = !0;
          }
        },
        o: function o(e) {
          for (var _e133 = 0; _e133 < r.length; _e133 += 1) on(r[_e133]);
          _o46 = !1;
        },
        d: function d(e) {
          e && _t(t);
          for (var _e134 = 0; _e134 < r.length; _e134 += 1) r[_e134].d();
        }
      };
    }
    var ur = "iif-icons";
    function fr(e, t, n) {
      var i = t.route,
        o = t.selection,
        r = t.blocks,
        s = t.isList,
        c = t.isSelecting;
      var l = Bt("registry"),
        a = ["tags", "themePrefixes", "themeSuffixes"],
        u = xn.icons.tooltip;
      var f,
        d = 0,
        p = null,
        h = 0;
      var g = function g() {
        n(10, h++, h);
      };
      Lt(function () {
        n(8, d = 1);
      });
      var m = [];
      return Nt(function () {
        null !== p && (p(), n(9, p = null));
      }), e.$$set = function (e) {
        "route" in e && n(4, i = e.route), "selection" in e && n(5, o = e.selection), "blocks" in e && n(6, r = e.blocks), "isList" in e && n(0, s = e.isList), "isSelecting" in e && n(1, c = e.isSelecting);
      }, e.$$.update = function () {
        if (16 & e.$$.dirty && n(7, f = "collection" !== i.type), 2021 & e.$$.dirty) {
          var _e135 = [],
            _t59 = [];
          var _c21 = Object.create(null);
          2 === d ? m.forEach(function (e) {
            _c21[e.name] = e;
          }) : 1 === d && n(8, d = 2);
          var _l7 = !1;
          r.icons.icons.forEach(function (n) {
            var d = tt.iconToString(n),
              p = ce(d),
              h = null !== p,
              g = f ? d : n.name;
            var m = g;
            p && (m += u.size.replace("{size}", p.width + " x " + p.height), m += u.length.replace("{length}", p.body.length + ""), void 0 !== n.chars && (m += u["char"].replace("{char}", "string" == typeof n.chars ? n.chars : n.chars.join(", "))), m += u[-1 === p.body.indexOf("currentColor") ? "colorful" : "colorless"]);
            var y = tt.getProvider(n.provider);
            var $;
            y ? ($ = y.links.icon.replace("{prefix}", n.prefix).replace("{name}", n.name), "" === $ && ($ = "#")) : $ = "#";
            var v = {
              name: d,
              text: g,
              tooltip: m,
              icon: tt.cloneObject(n),
              exists: h,
              link: $,
              selected: rt(o, n)
            };
            s && (v.filters = function (e) {
              var t = [];
              var n = e.icon;
              if (a.forEach(function (e) {
                var i = e;
                if (!r[i]) return;
                if (void 0 === n[i]) return;
                var o = r[i],
                  s = o.active,
                  c = n[i];
                ("string" == typeof c ? [c] : c instanceof Array ? c : []).forEach(function (e) {
                  e !== s && void 0 !== o.filters[e] && t.push({
                    action: i,
                    value: e,
                    item: o.filters[e]
                  });
                });
              }), "search" === i.type) {
                var _n59 = r;
                if (_n59.collections) {
                  var _i63 = e.icon.prefix;
                  _n59.collections.filters[_i63] && t.push({
                    action: "collections",
                    value: _i63,
                    item: _n59.collections.filters[_i63]
                  });
                }
              }
              return t;
            }(v)), void 0 === _c21[d] ? (_l7 = !0, h || _t59.push(d)) : tt.compareObjects(_c21[d], v) ? v = _c21[d] : _l7 = !0, _e135.push(v);
          }), d > 0 && _t59.length && (null !== p && p(), n(9, p = ue(_t59, g))), (_l7 || m.length !== _e135.length) && n(2, m = _e135);
        }
      }, [s, c, m, function (e, t) {
        "toggle" !== e ? "select" !== e && "deselect" !== e ? l.router.action(e, t) : l.callback({
          type: "selection",
          icon: t,
          selected: "select" === e
        }) : l.callback({
          type: "selection",
          icon: t
        });
      }, i, o, r, f, d, p, h];
    }
    var dr = /*#__PURE__*/function (_mn23) {
      (0, _inherits2["default"])(dr, _mn23);
      var _super30 = _createSuper(dr);
      function dr(e) {
        var _this41;
        (0, _classCallCheck2["default"])(this, dr);
        _this41 = _super30.call(this), gn((0, _assertThisInitialized2["default"])(_this41), e, fr, ar, mt, {
          route: 4,
          selection: 5,
          blocks: 6,
          isList: 0,
          isSelecting: 1
        });
        return _this41;
      }
      return (0, _createClass2["default"])(dr);
    }(mn);
    function pr(e) {
      var t, n, _i64, o, r;
      return n = new En({
        props: {
          icon: e[0]
        }
      }), {
        c: function c() {
          t = xt("button"), fn(n.$$.fragment), St(t, "class", "iif-icon-button"), St(t, "title", e[1]);
        },
        m: function m(s, c) {
          kt(s, t, c), dn(n, t, null), _i64 = !0, o || (r = Pt(t, "click", function () {
            gt(e[2]) && e[2].apply(this, arguments);
          }), o = !0);
        },
        p: function p(o, _ref50) {
          var _ref51 = (0, _slicedToArray2["default"])(_ref50, 1),
            r = _ref51[0];
          e = o;
          var s = {};
          1 & r && (s.icon = e[0]), n.$set(s), (!_i64 || 2 & r) && St(t, "title", e[1]);
        },
        i: function i(e) {
          _i64 || (nn(n.$$.fragment, e), _i64 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i64 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n), o = !1, r();
        }
      };
    }
    function hr(e, t, n) {
      var i = t.icon,
        o = t.title,
        r = t.onClick;
      return e.$$set = function (e) {
        "icon" in e && n(0, i = e.icon), "title" in e && n(1, o = e.title), "onClick" in e && n(2, r = e.onClick);
      }, [i, o, r];
    }
    var gr = /*#__PURE__*/function (_mn24) {
      (0, _inherits2["default"])(gr, _mn24);
      var _super31 = _createSuper(gr);
      function gr(e) {
        var _this42;
        (0, _classCallCheck2["default"])(this, gr);
        _this42 = _super31.call(this), gn((0, _assertThisInitialized2["default"])(_this42), e, hr, pr, mt, {
          icon: 0,
          title: 1,
          onClick: 2
        });
        return _this42;
      }
      return (0, _createClass2["default"])(gr);
    }(mn);
    function mr(e, t, n) {
      var i = e.slice();
      return i[11] = t[n], i;
    }
    function yr(e) {
      var t,
        n,
        _i65,
        _o47 = e[3] && $r(e),
        r = e[1] && vr(e);
      return {
        c: function c() {
          t = xt("div"), _o47 && _o47.c(), n = jt(), r && r.c(), St(t, "class", "iif-icons-header-modes");
        },
        m: function m(e, s) {
          kt(e, t, s), _o47 && _o47.m(t, null), bt(t, n), r && r.m(t, null), _i65 = !0;
        },
        p: function p(e, i) {
          e[3] ? _o47 ? (_o47.p(e, i), 8 & i && nn(_o47, 1)) : (_o47 = $r(e), _o47.c(), nn(_o47, 1), _o47.m(t, n)) : _o47 && (en(), on(_o47, 1, 1, function () {
            _o47 = null;
          }), tn()), e[1] ? r ? (r.p(e, i), 2 & i && nn(r, 1)) : (r = vr(e), r.c(), nn(r, 1), r.m(t, null)) : r && (en(), on(r, 1, 1, function () {
            r = null;
          }), tn());
        },
        i: function i(e) {
          _i65 || (nn(_o47), nn(r), _i65 = !0);
        },
        o: function o(e) {
          on(_o47), on(r), _i65 = !1;
        },
        d: function d(e) {
          e && _t(t), _o47 && _o47.d(), r && r.d();
        }
      };
    }
    function $r(e) {
      var t, n;
      return t = new gr({
        props: {
          icon: e[7],
          onClick: e[4],
          title: e[8].select
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          128 & n && (i.icon = e[7]), 16 & n && (i.onClick = e[4]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function vr(e) {
      var t,
        n,
        _i66 = [],
        o = new Map(),
        r = [e[6]];
      var s = function s(e) {
        return e[11];
      };
      for (var _t60 = 0; _t60 < 1; _t60 += 1) {
        var _n60 = mr(e, r, _t60),
          _c22 = s(_n60);
        o.set(_c22, _i66[_t60] = br(_c22, _n60));
      }
      return {
        c: function c() {
          for (var _e136 = 0; _e136 < 1; _e136 += 1) _i66[_e136].c();
          t = It();
        },
        m: function m(e, o) {
          for (var _t61 = 0; _t61 < 1; _t61 += 1) _i66[_t61].m(e, o);
          kt(e, t, o), n = !0;
        },
        p: function p(e, n) {
          324 & n && (r = [e[6]], en(), _i66 = cn(_i66, n, s, 1, e, r, o, t.parentNode, sn, br, t, mr), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e137 = 0; _e137 < 1; _e137 += 1) nn(_i66[_e137]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e138 = 0; _e138 < 1; _e138 += 1) on(_i66[_e138]);
          n = !1;
        },
        d: function d(e) {
          for (var _t62 = 0; _t62 < 1; _t62 += 1) _i66[_t62].d(e);
          e && _t(t);
        }
      };
    }
    function br(e, t) {
      var n, _i67, _o48;
      return _i67 = new gr({
        props: {
          icon: t[11],
          onClick: t[2],
          title: t[8].modes[t[11]]
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i67.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i67, e, t), _o48 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          64 & n && (o.icon = t[11]), 4 & n && (o.onClick = t[2]), 64 & n && (o.title = t[8].modes[t[11]]), _i67.$set(o);
        },
        i: function i(e) {
          _o48 || (nn(_i67.$$.fragment, e), _o48 = !0);
        },
        o: function o(e) {
          on(_i67.$$.fragment, e), _o48 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i67, e);
        }
      };
    }
    function kr(e) {
      var t,
        n,
        i,
        o,
        r,
        s = e[5] && (e[1] || e[3]) && yr(e);
      return {
        c: function c() {
          t = xt("div"), n = xt("div"), i = Ct(e[0]), o = jt(), s && s.c(), St(n, "class", "iif-icons-header-text"), St(t, "class", "iif-icons-header");
        },
        m: function m(e, c) {
          kt(e, t, c), bt(t, n), bt(n, i), bt(t, o), s && s.m(t, null), r = !0;
        },
        p: function p(e, _ref52) {
          var _ref53 = (0, _slicedToArray2["default"])(_ref52, 1),
            n = _ref53[0];
          (!r || 1 & n) && Et(i, e[0]), e[5] && (e[1] || e[3]) ? s ? (s.p(e, n), 42 & n && nn(s, 1)) : (s = yr(e), s.c(), nn(s, 1), s.m(t, null)) : s && (en(), on(s, 1, 1, function () {
            s = null;
          }), tn());
        },
        i: function i(e) {
          r || (nn(s), r = !0);
        },
        o: function o(e) {
          on(s), r = !1;
        },
        d: function d(e) {
          e && _t(t), s && s.d();
        }
      };
    }
    function _r(e, t, n) {
      var i = t.headerText,
        o = t.isList,
        r = t.canChangeLayout,
        s = t.changeLayout,
        c = t.canSelectMultiple,
        l = t.isSelecting,
        a = t.toggleSelection,
        u = !1;
      Lt(function () {
        n(5, u = !0);
      });
      var f = xn.icons.header;
      var d, p;
      return e.$$set = function (e) {
        "headerText" in e && n(0, i = e.headerText), "isList" in e && n(9, o = e.isList), "canChangeLayout" in e && n(1, r = e.canChangeLayout), "changeLayout" in e && n(2, s = e.changeLayout), "canSelectMultiple" in e && n(3, c = e.canSelectMultiple), "isSelecting" in e && n(10, l = e.isSelecting), "toggleSelection" in e && n(4, a = e.toggleSelection);
      }, e.$$.update = function () {
        512 & e.$$.dirty && n(6, d = o ? "grid" : "list"), 1024 & e.$$.dirty && n(7, p = "check-list" + (l ? "-checked" : ""));
      }, [i, r, s, c, a, u, d, p, f, o, l];
    }
    var wr = /*#__PURE__*/function (_mn25) {
      (0, _inherits2["default"])(wr, _mn25);
      var _super32 = _createSuper(wr);
      function wr(e) {
        var _this43;
        (0, _classCallCheck2["default"])(this, wr);
        _this43 = _super32.call(this), gn((0, _assertThisInitialized2["default"])(_this43), e, _r, kr, mt, {
          headerText: 0,
          isList: 9,
          canChangeLayout: 1,
          changeLayout: 2,
          canSelectMultiple: 3,
          isSelecting: 10,
          toggleSelection: 4
        });
        return _this43;
      }
      return (0, _createClass2["default"])(wr);
    }(mn);
    function xr(e, t, n) {
      var i = e.slice();
      return i[13] = t[n], i[15] = n, i;
    }
    function Cr(e) {
      var t,
        n,
        i,
        o,
        r,
        s = [],
        c = new Map(),
        l = -1 !== e[2] && jr(e),
        a = e[1];
      var u = function u(e) {
        return e[13].page;
      };
      for (var _t63 = 0; _t63 < a.length; _t63 += 1) {
        var _n61 = xr(e, a, _t63),
          _i68 = u(_n61);
        c.set(_i68, s[_t63] = Or(_i68, _n61));
      }
      var f = e[0].more && Sr(e),
        _d3 = -1 !== e[3] && Er(e);
      return {
        c: function c() {
          t = xt("div"), l && l.c(), n = jt();
          for (var _e139 = 0; _e139 < s.length; _e139 += 1) s[_e139].c();
          i = jt(), f && f.c(), o = jt(), _d3 && _d3.c(), St(t, "class", "iif-pagination");
        },
        m: function m(e, c) {
          kt(e, t, c), l && l.m(t, null), bt(t, n);
          for (var _e140 = 0; _e140 < s.length; _e140 += 1) s[_e140].m(t, null);
          bt(t, i), f && f.m(t, null), bt(t, o), _d3 && _d3.m(t, null), r = !0;
        },
        p: function p(e, r) {
          -1 !== e[2] ? l ? (l.p(e, r), 4 & r && nn(l, 1)) : (l = jr(e), l.c(), nn(l, 1), l.m(t, n)) : l && (en(), on(l, 1, 1, function () {
            l = null;
          }), tn()), 2 & r && (a = e[1], s = cn(s, r, u, 1, e, a, c, t, rn, Or, i, xr)), e[0].more ? f ? f.p(e, r) : (f = Sr(e), f.c(), f.m(t, o)) : f && (f.d(1), f = null), -1 !== e[3] ? _d3 ? (_d3.p(e, r), 8 & r && nn(_d3, 1)) : (_d3 = Er(e), _d3.c(), nn(_d3, 1), _d3.m(t, null)) : _d3 && (en(), on(_d3, 1, 1, function () {
            _d3 = null;
          }), tn());
        },
        i: function i(e) {
          r || (nn(l), nn(_d3), r = !0);
        },
        o: function o(e) {
          on(l), on(_d3), r = !1;
        },
        d: function d(e) {
          e && _t(t), l && l.d();
          for (var _e141 = 0; _e141 < s.length; _e141 += 1) s[_e141].d();
          f && f.d(), _d3 && _d3.d();
        }
      };
    }
    function jr(e) {
      var t, n, _i69, o, r;
      return n = new En({
        props: {
          icon: "left",
          $$slots: {
            "default": [Ir]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          t = xt("a"), fn(n.$$.fragment), St(t, "href", "# "), St(t, "class", e[4] + "prev"), St(t, "title", xn.pagination.prev);
        },
        m: function m(s, c) {
          kt(s, t, c), dn(n, t, null), _i69 = !0, o || (r = Pt(t, "click", Ot(e[8])), o = !0);
        },
        p: function p(e, t) {
          var i = {};
          65536 & t && (i.$$scope = {
            dirty: t,
            ctx: e
          }), n.$set(i);
        },
        i: function i(e) {
          _i69 || (nn(n.$$.fragment, e), _i69 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i69 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n), o = !1, r();
        }
      };
    }
    function Ir(e) {
      var t;
      return {
        c: function c() {
          t = Ct("<");
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Pr(e) {
      var t;
      return {
        c: function c() {
          t = xt("span"), t.textContent = "...";
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Or(e, t) {
      var n,
        i,
        o,
        r,
        s,
        _c23,
        l,
        a,
        u = t[13].text + "",
        f = t[13].dot && Pr();
      return {
        key: e,
        first: null,
        c: function c() {
          n = It(), f && f.c(), i = jt(), o = xt("a"), r = Ct(u), St(o, "href", s = t[13].selected ? void 0 : "# "), St(o, "class", _c23 = t[13].className), this.first = n;
        },
        m: function m(e, s) {
          kt(e, n, s), f && f.m(e, s), kt(e, i, s), kt(e, o, s), bt(o, r), l || (a = Pt(o, "click", Ot(function () {
            gt(t[13].onClick) && t[13].onClick.apply(this, arguments);
          })), l = !0);
        },
        p: function p(e, n) {
          (t = e)[13].dot ? f || (f = Pr(), f.c(), f.m(i.parentNode, i)) : f && (f.d(1), f = null), 2 & n && u !== (u = t[13].text + "") && Et(r, u), 2 & n && s !== (s = t[13].selected ? void 0 : "# ") && St(o, "href", s), 2 & n && _c23 !== (_c23 = t[13].className) && St(o, "class", _c23);
        },
        d: function d(e) {
          e && _t(n), f && f.d(e), e && _t(i), e && _t(o), l = !1, a();
        }
      };
    }
    function Sr(e) {
      var t,
        n,
        i,
        o,
        r = xn.icons.more + "";
      return {
        c: function c() {
          t = xt("a"), n = Ct(r), St(t, "href", "# "), St(t, "class", e[5]);
        },
        m: function m(r, s) {
          kt(r, t, s), bt(t, n), i || (o = Pt(t, "click", Ot(e[9])), i = !0);
        },
        p: ut,
        d: function d(e) {
          e && _t(t), i = !1, o();
        }
      };
    }
    function Er(e) {
      var t, n, _i70, o, r;
      return n = new En({
        props: {
          icon: "right",
          $$slots: {
            "default": [Mr]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          t = xt("a"), fn(n.$$.fragment), St(t, "href", "# "), St(t, "class", e[4] + "next"), St(t, "title", xn.pagination.next);
        },
        m: function m(s, c) {
          kt(s, t, c), dn(n, t, null), _i70 = !0, o || (r = Pt(t, "click", Ot(e[10])), o = !0);
        },
        p: function p(e, t) {
          var i = {};
          65536 & t && (i.$$scope = {
            dirty: t,
            ctx: e
          }), n.$set(i);
        },
        i: function i(e) {
          _i70 || (nn(n.$$.fragment, e), _i70 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i70 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n), o = !1, r();
        }
      };
    }
    function Mr(e) {
      var t;
      return {
        c: function c() {
          t = Ct(">");
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Tr(e) {
      var t,
        n,
        _i71 = e[1].length > 0 && Cr(e);
      return {
        c: function c() {
          _i71 && _i71.c(), t = It();
        },
        m: function m(e, o) {
          _i71 && _i71.m(e, o), kt(e, t, o), n = !0;
        },
        p: function p(e, _ref54) {
          var _ref55 = (0, _slicedToArray2["default"])(_ref54, 1),
            n = _ref55[0];
          e[1].length > 0 ? _i71 ? (_i71.p(e, n), 2 & n && nn(_i71, 1)) : (_i71 = Cr(e), _i71.c(), nn(_i71, 1), _i71.m(t.parentNode, t)) : _i71 && (en(), on(_i71, 1, 1, function () {
            _i71 = null;
          }), tn());
        },
        i: function i(e) {
          n || (nn(_i71), n = !0);
        },
        o: function o(e) {
          on(_i71), n = !1;
        },
        d: function d(e) {
          _i71 && _i71.d(e), e && _t(t);
        }
      };
    }
    var Ar = "iif-page";
    function Rr(e, t, n) {
      var i = t.name,
        o = t.block;
      var r = Bt("registry");
      var s,
        c,
        l = [];
      function a(e) {
        r.router.action(i, e);
      }
      return e.$$set = function (e) {
        "name" in e && n(7, i = e.name), "block" in e && n(0, o = e.block);
      }, e.$$.update = function () {
        if (3 & e.$$.dirty) {
          var _e142 = tt.showPagination(o);
          _e142.length ? (n(3, c = o.more || _e142[_e142.length - 1] > o.page ? o.page + 1 : -1), n(2, s = o.page > 0 ? o.page - 1 : -1), n(1, l = _e142.map(function (t, n) {
            var i = n > 0 && _e142[n - 1] < t - 1,
              r = t === o.page;
            return {
              selected: r,
              dot: i,
              page: t,
              text: t + 1 + "",
              className: r ? "iif-page iif-page--selected" : Ar,
              onClick: function onClick() {
                return a(t);
              }
            };
          }))) : l.length && (n(1, l = []), n(2, s = -1), n(3, c = -1));
        }
      }, [o, l, s, c, "iif-page iif-page--arrow iif-page--", "iif-page iif-page--more", a, i, function () {
        return a(s);
      }, function () {
        return a("more");
      }, function () {
        return a(c);
      }];
    }
    var Fr = /*#__PURE__*/function (_mn26) {
      (0, _inherits2["default"])(Fr, _mn26);
      var _super33 = _createSuper(Fr);
      function Fr(e) {
        var _this44;
        (0, _classCallCheck2["default"])(this, Fr);
        _this44 = _super33.call(this), gn((0, _assertThisInitialized2["default"])(_this44), e, Rr, Tr, mt, {
          name: 7,
          block: 0
        });
        return _this44;
      }
      return (0, _createClass2["default"])(Fr);
    }(mn);
    function Lr(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "icons",
          $$slots: {
            "default": [Br]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          33007 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Nr(e) {
      var t, n;
      return t = new mo({
        props: {
          error: xn.errors.noIconsFound
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: ut,
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Br(e) {
      var t, n, _i72, o, r, s;
      return t = new wr({
        props: {
          headerText: e[5],
          isList: e[6],
          canChangeLayout: e[8],
          changeLayout: e[9],
          canSelectMultiple: e[10],
          isSelecting: e[7],
          toggleSelection: e[11]
        }
      }), _i72 = new dr({
        props: {
          selection: e[1],
          blocks: e[2],
          route: e[0],
          isList: e[6],
          isSelecting: e[7]
        }
      }), r = new Fr({
        props: {
          name: "pagination",
          block: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment), n = jt(), fn(_i72.$$.fragment), o = jt(), fn(r.$$.fragment);
        },
        m: function m(e, c) {
          dn(t, e, c), kt(e, n, c), dn(_i72, e, c), kt(e, o, c), dn(r, e, c), s = !0;
        },
        p: function p(e, n) {
          var o = {};
          32 & n && (o.headerText = e[5]), 64 & n && (o.isList = e[6]), 128 & n && (o.isSelecting = e[7]), t.$set(o);
          var s = {};
          2 & n && (s.selection = e[1]), 4 & n && (s.blocks = e[2]), 1 & n && (s.route = e[0]), 64 & n && (s.isList = e[6]), 128 & n && (s.isSelecting = e[7]), _i72.$set(s);
          var c = {};
          8 & n && (c.block = e[3]), r.$set(c);
        },
        i: function i(e) {
          s || (nn(t.$$.fragment, e), nn(_i72.$$.fragment, e), nn(r.$$.fragment, e), s = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), on(_i72.$$.fragment, e), on(r.$$.fragment, e), s = !1;
        },
        d: function d(e) {
          pn(t, e), e && _t(n), pn(_i72, e), e && _t(o), pn(r, e);
        }
      };
    }
    function Vr(e) {
      var t, n, i, _o49;
      var r = [Nr, Lr],
        s = [];
      function c(e, t) {
        return e[4] ? 0 : 1;
      }
      return t = c(e), n = s[t] = r[t](e), {
        c: function c() {
          n.c(), i = It();
        },
        m: function m(e, n) {
          s[t].m(e, n), kt(e, i, n), _o49 = !0;
        },
        p: function p(e, _ref56) {
          var _ref57 = (0, _slicedToArray2["default"])(_ref56, 1),
            o = _ref57[0];
          var l = t;
          t = c(e), t === l ? s[t].p(e, o) : (en(), on(s[l], 1, 1, function () {
            s[l] = null;
          }), tn(), n = s[t], n ? n.p(e, o) : (n = s[t] = r[t](e), n.c()), nn(n, 1), n.m(i.parentNode, i));
        },
        i: function i(e) {
          _o49 || (nn(n), _o49 = !0);
        },
        o: function o(e) {
          on(n), _o49 = !1;
        },
        d: function d(e) {
          s[t].d(e), e && _t(i);
        }
      };
    }
    function Dr(e, t, n) {
      var i = t.route,
        o = t.selection,
        r = t.blocks;
      var s = Bt("registry"),
        c = s.config.components;
      var l, a, u;
      var f = c.toggleList;
      var d = c.list;
      var p = c.multiSelect;
      var h = !1;
      return e.$$set = function (e) {
        "route" in e && n(0, i = e.route), "selection" in e && n(1, o = e.selection), "blocks" in e && n(2, r = e.blocks);
      }, e.$$.update = function () {
        4 & e.$$.dirty && n(3, l = r.pagination), 28 & e.$$.dirty && (n(4, a = !l || !r.icons || r.icons.icons.length < 1), a || n(5, u = function () {
          var e = l.length,
            t = xn.icons;
          return l.more && e > 0 ? t.header.full : void 0 !== t.headerWithCount[e] ? t.headerWithCount[e] : t.header.full;
        }().replace("{count}", l.length + "")));
      }, [i, o, r, l, a, u, d, h, f, function () {
        f && (n(6, d = c.list = !c.list), s.callback({
          type: "config"
        }));
      }, p, function () {
        n(7, h = !h);
      }];
    }
    var zr = /*#__PURE__*/function (_mn27) {
      (0, _inherits2["default"])(zr, _mn27);
      var _super34 = _createSuper(zr);
      function zr(e) {
        var _this45;
        (0, _classCallCheck2["default"])(this, zr);
        _this45 = _super34.call(this), gn((0, _assertThisInitialized2["default"])(_this45), e, Dr, Vr, mt, {
          route: 0,
          selection: 1,
          blocks: 2
        });
        return _this45;
      }
      return (0, _createClass2["default"])(zr);
    }(mn);
    function qr(e) {
      var t, n;
      return t = new Nn({
        props: {
          type: "text",
          value: e[1].keyword,
          onInput: e[3],
          placeholder: e[2],
          icon: "search",
          autofocus: false
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          2 & n && (i.value = e[1].keyword), 4 & n && (i.placeholder = e[2]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Ur(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "search",
          name: e[0],
          extra: "search-form",
          $$slots: {
            "default": [qr]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref58) {
          var _ref59 = (0, _slicedToArray2["default"])(_ref58, 1),
            n = _ref59[0];
          var i = {};
          1 & n && (i.name = e[0]), 262 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Hr(e, t, n) {
      var i = t.name,
        o = t.block,
        _t$info = t.info,
        r = _t$info === void 0 ? null : _t$info,
        _t$customType = t.customType,
        s = _t$customType === void 0 ? "" : _t$customType;
      var c = Bt("registry"),
        l = xn.search;
      var a;
      return e.$$set = function (e) {
        "name" in e && n(0, i = e.name), "block" in e && n(1, o = e.block), "info" in e && n(4, r = e.info), "customType" in e && n(5, s = e.customType);
      }, e.$$.update = function () {
        48 & e.$$.dirty && ("" !== s && void 0 !== l.placeholder[s] ? n(2, a = l.placeholder[s]) : r && r.name && void 0 !== l.placeholder.collection ? n(2, a = l.placeholder.collection.replace("{name}", r.name)) : n(2, a = l.defaultPlaceholder));
      }, [i, o, a, function (e) {
        c.router.action(i, e.trim().toLowerCase());
      }, r, s];
    }
    var Kr = /*#__PURE__*/function (_mn28) {
      (0, _inherits2["default"])(Kr, _mn28);
      var _super35 = _createSuper(Kr);
      function Kr(e) {
        var _this46;
        (0, _classCallCheck2["default"])(this, Kr);
        _this46 = _super35.call(this), gn((0, _assertThisInitialized2["default"])(_this46), e, Hr, Ur, mt, {
          name: 0,
          block: 1,
          info: 4,
          customType: 5
        });
        return _this46;
      }
      return (0, _createClass2["default"])(Kr);
    }(mn);
    function Gr(e, t, n) {
      var i = e.slice();
      return i[9] = t[n], i[11] = n, i;
    }
    function Jr(e) {
      var t, n, _i73;
      return n = new zi({
        props: {
          name: "collections",
          parent: e[2].parent ? e[2].parent.type : "collections",
          link: e[6],
          block: e[1].collections
        }
      }), {
        c: function c() {
          t = xt("div"), fn(n.$$.fragment), St(t, "class", "iff-filters");
        },
        m: function m(e, o) {
          kt(e, t, o), dn(n, t, null), _i73 = !0;
        },
        p: function p(e, t) {
          var i = {};
          4 & t && (i.parent = e[2].parent ? e[2].parent.type : "collections"), 64 & t && (i.link = e[6]), 2 & t && (i.block = e[1].collections), n.$set(i);
        },
        i: function i(e) {
          _i73 || (nn(n.$$.fragment, e), _i73 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i73 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n);
        }
      };
    }
    function Wr(e) {
      var t, n;
      return t = new Do({
        props: {
          name: "info",
          block: e[1].info
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          2 & n && (i.block = e[1].info), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Qr(e) {
      var t,
        n,
        _i74 = [],
        o = new Map(),
        r = e[7];
      var s = function s(e) {
        return e[9].key;
      };
      for (var _t64 = 0; _t64 < r.length; _t64 += 1) {
        var _n62 = Gr(e, r, _t64),
          _c24 = s(_n62);
        o.set(_c24, _i74[_t64] = Yr(_c24, _n62));
      }
      return {
        c: function c() {
          t = xt("div");
          for (var _e143 = 0; _e143 < _i74.length; _e143 += 1) _i74[_e143].c();
          St(t, "class", "iff-filters");
        },
        m: function m(e, o) {
          kt(e, t, o);
          for (var _e144 = 0; _e144 < _i74.length; _e144 += 1) _i74[_e144].m(t, null);
          n = !0;
        },
        p: function p(e, n) {
          128 & n && (r = e[7], en(), _i74 = cn(_i74, n, s, 1, e, r, o, t, sn, Yr, null, Gr), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e145 = 0; _e145 < r.length; _e145 += 1) nn(_i74[_e145]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e146 = 0; _e146 < _i74.length; _e146 += 1) on(_i74[_e146]);
          n = !1;
        },
        d: function d(e) {
          e && _t(t);
          for (var _e147 = 0; _e147 < _i74.length; _e147 += 1) _i74[_e147].d();
        }
      };
    }
    function Yr(e, t) {
      var n, _i75, _o50;
      return _i75 = new zi({
        props: {
          name: t[9].key,
          block: t[9].item
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i75.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i75, e, t), _o50 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          128 & n && (o.name = t[9].key), 128 & n && (o.block = t[9].item), _i75.$set(o);
        },
        i: function i(e) {
          _o50 || (nn(_i75.$$.fragment, e), _o50 = !0);
        },
        o: function o(e) {
          on(_i75.$$.fragment, e), _o50 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i75, e);
        }
      };
    }
    function Xr(e) {
      var t,
        n,
        i,
        _o51,
        r,
        s,
        _c25,
        l,
        a,
        u = e[1].collections && Jr(e),
        f = null !== e[5] && Wr(e);
      _o51 = new Kr({
        props: {
          name: "filter",
          block: e[1].filter,
          info: e[5]
        }
      });
      var _d4 = e[7].length > 0 && Qr(e);
      return _c25 = new zr({
        props: {
          blocks: e[1],
          selection: e[0],
          route: e[2]
        }
      }), {
        c: function c() {
          t = xt("div"), u && u.c(), n = jt(), f && f.c(), i = jt(), fn(_o51.$$.fragment), r = jt(), _d4 && _d4.c(), s = jt(), fn(_c25.$$.fragment), St(t, "class", l = "iif-view " + Zr + "\r\n\t\t" + Zr + "--prefix--" + e[4] + ("" === e[3] ? "" : " " + Zr + "--provider--" + e[3]));
        },
        m: function m(e, l) {
          kt(e, t, l), u && u.m(t, null), bt(t, n), f && f.m(t, null), bt(t, i), dn(_o51, t, null), bt(t, r), _d4 && _d4.m(t, null), bt(t, s), dn(_c25, t, null), a = !0;
        },
        p: function p(e, _ref60) {
          var _ref61 = (0, _slicedToArray2["default"])(_ref60, 1),
            r = _ref61[0];
          e[1].collections ? u ? (u.p(e, r), 2 & r && nn(u, 1)) : (u = Jr(e), u.c(), nn(u, 1), u.m(t, n)) : u && (en(), on(u, 1, 1, function () {
            u = null;
          }), tn()), null !== e[5] ? f ? (f.p(e, r), 32 & r && nn(f, 1)) : (f = Wr(e), f.c(), nn(f, 1), f.m(t, i)) : f && (en(), on(f, 1, 1, function () {
            f = null;
          }), tn());
          var p = {};
          2 & r && (p.block = e[1].filter), 32 & r && (p.info = e[5]), _o51.$set(p), e[7].length > 0 ? _d4 ? (_d4.p(e, r), 128 & r && nn(_d4, 1)) : (_d4 = Qr(e), _d4.c(), nn(_d4, 1), _d4.m(t, s)) : _d4 && (en(), on(_d4, 1, 1, function () {
            _d4 = null;
          }), tn());
          var h = {};
          2 & r && (h.blocks = e[1]), 1 & r && (h.selection = e[0]), 4 & r && (h.route = e[2]), _c25.$set(h), (!a || 24 & r && l !== (l = "iif-view " + Zr + "\r\n\t\t" + Zr + "--prefix--" + e[4] + ("" === e[3] ? "" : " " + Zr + "--provider--" + e[3]))) && St(t, "class", l);
        },
        i: function i(e) {
          a || (nn(u), nn(f), nn(_o51.$$.fragment, e), nn(_d4), nn(_c25.$$.fragment, e), a = !0);
        },
        o: function o(e) {
          on(u), on(f), on(_o51.$$.fragment, e), on(_d4), on(_c25.$$.fragment, e), a = !1;
        },
        d: function d(e) {
          e && _t(t), u && u.d(), f && f.d(), pn(_o51), _d4 && _d4.d(), pn(_c25);
        }
      };
    }
    var Zr = "iif-view--collection";
    function es(e, t, n) {
      var i = t.selection,
        o = t.blocks,
        r = t.route;
      var s = ["tags", "themePrefixes", "themeSuffixes"];
      var c, l, a, u, f;
      return e.$$set = function (e) {
        "selection" in e && n(0, i = e.selection), "blocks" in e && n(1, o = e.blocks), "route" in e && n(2, r = e.route);
      }, e.$$.update = function () {
        if (14 & e.$$.dirty) {
          n(3, c = r.params.provider), "string" != typeof c && n(3, c = ""), n(4, l = r.params.prefix), n(5, a = null === o.info ? null : o.info.info);
          var _e148 = tt.getProvider(c);
          n(6, u = _e148 ? _e148.links.collection : "");
        }
        2 & e.$$.dirty && n(7, f = s.filter(function (e) {
          return !!o[e];
        }).map(function (e) {
          return {
            key: e,
            item: o[e]
          };
        }));
      }, [i, o, r, c, l, a, u, f];
    }
    var ts = /*#__PURE__*/function (_mn29) {
      (0, _inherits2["default"])(ts, _mn29);
      var _super36 = _createSuper(ts);
      function ts(e) {
        var _this47;
        (0, _classCallCheck2["default"])(this, ts);
        _this47 = _super36.call(this), gn((0, _assertThisInitialized2["default"])(_this47), e, es, Xr, mt, {
          selection: 0,
          blocks: 1,
          route: 2
        });
        return _this47;
      }
      return (0, _createClass2["default"])(ts);
    }(mn);
    function ns(e) {
      var t, n;
      return t = new zi({
        props: {
          name: "collections",
          block: e[2].collections,
          link: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          4 & n && (i.block = e[2].collections), 8 & n && (i.link = e[3]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function is(e) {
      var t,
        n,
        _i76,
        _o52,
        r = e[2].collections && ns(e);
      return _i76 = new zr({
        props: {
          blocks: e[2],
          selection: e[1],
          route: e[0]
        }
      }), {
        c: function c() {
          t = xt("div"), r && r.c(), n = jt(), fn(_i76.$$.fragment), St(t, "class", "iif-view iif-view--search");
        },
        m: function m(e, s) {
          kt(e, t, s), r && r.m(t, null), bt(t, n), dn(_i76, t, null), _o52 = !0;
        },
        p: function p(e, _ref62) {
          var _ref63 = (0, _slicedToArray2["default"])(_ref62, 1),
            o = _ref63[0];
          e[2].collections ? r ? (r.p(e, o), 4 & o && nn(r, 1)) : (r = ns(e), r.c(), nn(r, 1), r.m(t, n)) : r && (en(), on(r, 1, 1, function () {
            r = null;
          }), tn());
          var s = {};
          4 & o && (s.blocks = e[2]), 2 & o && (s.selection = e[1]), 1 & o && (s.route = e[0]), _i76.$set(s);
        },
        i: function i(e) {
          _o52 || (nn(r), nn(_i76.$$.fragment, e), _o52 = !0);
        },
        o: function o(e) {
          on(r), on(_i76.$$.fragment, e), _o52 = !1;
        },
        d: function d(e) {
          e && _t(t), r && r.d(), pn(_i76);
        }
      };
    }
    function os(e, t, n) {
      var i,
        o = t.route,
        r = t.selection,
        s = t.blocks;
      return e.$$set = function (e) {
        "route" in e && n(0, o = e.route), "selection" in e && n(1, r = e.selection), "blocks" in e && n(2, s = e.blocks);
      }, e.$$.update = function () {
        if (1 & e.$$.dirty) {
          var _e149 = o.params.provider;
          "string" != typeof _e149 && (_e149 = "");
          var _t65 = tt.getProvider(_e149);
          n(3, i = _t65 ? _t65.links.collection : "");
        }
      }, [o, r, s, i];
    }
    var rs = /*#__PURE__*/function (_mn30) {
      (0, _inherits2["default"])(rs, _mn30);
      var _super37 = _createSuper(rs);
      function rs(e) {
        var _this48;
        (0, _classCallCheck2["default"])(this, rs);
        _this48 = _super37.call(this), gn((0, _assertThisInitialized2["default"])(_this48), e, os, is, mt, {
          route: 0,
          selection: 1,
          blocks: 2
        });
        return _this48;
      }
      return (0, _createClass2["default"])(rs);
    }(mn);
    function ss(e) {
      var t, n, i, _o53, r, s;
      return n = new Kr({
        props: {
          name: "filter",
          block: e[2].filter,
          customType: e[0].params.customType
        }
      }), _o53 = new zr({
        props: {
          blocks: e[2],
          selection: e[1],
          route: e[0]
        }
      }), {
        c: function c() {
          t = xt("div"), fn(n.$$.fragment), i = jt(), fn(_o53.$$.fragment), St(t, "class", r = "iif-view iif-view--custom iif-view--custom--" + e[0].params.customType);
        },
        m: function m(e, r) {
          kt(e, t, r), dn(n, t, null), bt(t, i), dn(_o53, t, null), s = !0;
        },
        p: function p(e, _ref64) {
          var _ref65 = (0, _slicedToArray2["default"])(_ref64, 1),
            i = _ref65[0];
          var c = {};
          4 & i && (c.block = e[2].filter), 1 & i && (c.customType = e[0].params.customType), n.$set(c);
          var l = {};
          4 & i && (l.blocks = e[2]), 2 & i && (l.selection = e[1]), 1 & i && (l.route = e[0]), _o53.$set(l), (!s || 1 & i && r !== (r = "iif-view iif-view--custom iif-view--custom--" + e[0].params.customType)) && St(t, "class", r);
        },
        i: function i(e) {
          s || (nn(n.$$.fragment, e), nn(_o53.$$.fragment, e), s = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), on(_o53.$$.fragment, e), s = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n), pn(_o53);
        }
      };
    }
    function cs(e, t, n) {
      var i = t.route,
        o = t.selection,
        r = t.blocks;
      return e.$$set = function (e) {
        "route" in e && n(0, i = e.route), "selection" in e && n(1, o = e.selection), "blocks" in e && n(2, r = e.blocks);
      }, [i, o, r];
    }
    var ls = /*#__PURE__*/function (_mn31) {
      (0, _inherits2["default"])(ls, _mn31);
      var _super38 = _createSuper(ls);
      function ls(e) {
        var _this49;
        (0, _classCallCheck2["default"])(this, ls);
        _this49 = _super38.call(this), gn((0, _assertThisInitialized2["default"])(_this49), e, cs, ss, mt, {
          route: 0,
          selection: 1,
          blocks: 2
        });
        return _this49;
      }
      return (0, _createClass2["default"])(ls);
    }(mn);
    function as(e, t, n) {
      var i = e.slice();
      return i[7] = t[n], i;
    }
    function us(e) {
      var t, n, i, o, r;
      return {
        c: function c() {
          t = xt("br"), n = jt(), i = xt("a"), i.textContent = "".concat(e[3].custom.home), St(i, "href", "# ");
        },
        m: function m(s, c) {
          kt(s, t, c), kt(s, n, c), kt(s, i, c), o || (r = Pt(i, "click", Ot(e[4])), o = !0);
        },
        p: ut,
        d: function d(e) {
          e && _t(t), e && _t(n), e && _t(i), o = !1, r();
        }
      };
    }
    function fs(e) {
      var t, n, i, o, r, s, c;
      t = new En({
        props: {
          icon: "error-" + e[7]
        }
      });
      var l = e[2] && us(e);
      return {
        c: function c() {
          fn(t.$$.fragment), n = jt(), i = xt("p"), o = Ct(e[1]), r = jt(), l && l.c(), s = jt();
        },
        m: function m(e, a) {
          dn(t, e, a), kt(e, n, a), kt(e, i, a), bt(i, o), bt(i, r), l && l.m(i, null), kt(e, s, a), c = !0;
        },
        p: function p(e, n) {
          var r = {};
          1 & n && (r.icon = "error-" + e[7]), t.$set(r), (!c || 2 & n) && Et(o, e[1]), e[2] ? l ? l.p(e, n) : (l = us(e), l.c(), l.m(i, null)) : l && (l.d(1), l = null);
        },
        i: function i(e) {
          c || (nn(t.$$.fragment, e), c = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), c = !1;
        },
        d: function d(e) {
          pn(t, e), e && _t(n), e && _t(i), l && l.d(), e && _t(s);
        }
      };
    }
    function ds(e, t) {
      var n, _i77, _o54;
      return _i77 = new zn({
        props: {
          type: "error",
          extra: "error--" + t[7],
          $$slots: {
            "default": [fs]
          },
          $$scope: {
            ctx: t
          }
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i77.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i77, e, t), _o54 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          1 & n && (o.extra = "error--" + t[7]), 1031 & n && (o.$$scope = {
            dirty: n,
            ctx: t
          }), _i77.$set(o);
        },
        i: function i(e) {
          _o54 || (nn(_i77.$$.fragment, e), _o54 = !0);
        },
        o: function o(e) {
          on(_i77.$$.fragment, e), _o54 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i77, e);
        }
      };
    }
    function ps(e) {
      var t,
        n,
        _i78 = [],
        o = new Map(),
        r = [e[0]];
      var s = function s(e) {
        return e[7];
      };
      for (var _t66 = 0; _t66 < 1; _t66 += 1) {
        var _n63 = as(e, r, _t66),
          _c26 = s(_n63);
        o.set(_c26, _i78[_t66] = ds(_c26, _n63));
      }
      return {
        c: function c() {
          for (var _e150 = 0; _e150 < 1; _e150 += 1) _i78[_e150].c();
          t = It();
        },
        m: function m(e, o) {
          for (var _t67 = 0; _t67 < 1; _t67 += 1) _i78[_t67].m(e, o);
          kt(e, t, o), n = !0;
        },
        p: function p(e, _ref66) {
          var _ref67 = (0, _slicedToArray2["default"])(_ref66, 1),
            n = _ref67[0];
          31 & n && (r = [e[0]], en(), _i78 = cn(_i78, n, s, 1, e, r, o, t.parentNode, sn, ds, t, as), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e151 = 0; _e151 < 1; _e151 += 1) nn(_i78[_e151]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e152 = 0; _e152 < 1; _e152 += 1) on(_i78[_e152]);
          n = !1;
        },
        d: function d(e) {
          for (var _t68 = 0; _t68 < 1; _t68 += 1) _i78[_t68].d(e);
          e && _t(t);
        }
      };
    }
    function hs(e, t, n) {
      var i = t.error,
        o = t.route;
      var r = Bt("registry"),
        s = xn.errors;
      var c, l;
      return e.$$set = function (e) {
        "error" in e && n(0, i = e.error), "route" in e && n(5, o = e.route);
      }, e.$$.update = function () {
        if (35 & e.$$.dirty) switch (n(2, l = !(!o || !("collections" !== o.type || o.parent || o.params && o.params.provider) || void 0 === s.custom.home)), n(1, c = void 0 === s.custom[i] ? s.defaultError : s.custom[i]), i) {
          case "not_found":
            n(1, c = c.replace("{prefix}", o && "collection" === o.type ? '"' + o.params.prefix + '"' : ""));
            break;
          case "bad_route":
            n(2, l = void 0 !== s.custom.home);
        }
      }, [i, c, l, s, function () {
        var e = r.router;
        o && "collections" === o.type ? e.home("") : e.home();
      }, o];
    }
    var gs = /*#__PURE__*/function (_mn32) {
      (0, _inherits2["default"])(gs, _mn32);
      var _super39 = _createSuper(gs);
      function gs(e) {
        var _this50;
        (0, _classCallCheck2["default"])(this, gs);
        _this50 = _super39.call(this), gn((0, _assertThisInitialized2["default"])(_this50), e, hs, ps, mt, {
          error: 0,
          route: 5
        });
        return _this50;
      }
      return (0, _createClass2["default"])(gs);
    }(mn);
    function ms(e) {
      var t, n;
      return t = new Pi({
        props: {
          providers: e[6],
          activeProvider: e[9]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          64 & n && (i.providers = e[6]), 512 & n && (i.activeProvider = e[9]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function ys(e) {
      var t, n;
      return t = new Jn({
        props: {
          viewChanged: e[1],
          route: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          2 & n && (i.viewChanged = e[1]), 8 & n && (i.route = e[3]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function $s(e) {
      var t, n;
      return t = new oi({
        props: {
          route: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          8 & n && (i.route = e[3]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function vs(e) {
      var t, n, i, _o55;
      var r = [Cs, xs, ws, _s, ks, bs],
        s = [];
      function c(e, t) {
        return "" === e[2] && e[3] ? "collections" === e[3].type ? 1 : "collection" === e[3].type ? 2 : "search" === e[3].type ? 3 : "custom" === e[3].type ? 4 : 5 : 0;
      }
      return t = c(e), n = s[t] = r[t](e), {
        c: function c() {
          n.c(), i = It();
        },
        m: function m(e, n) {
          s[t].m(e, n), kt(e, i, n), _o55 = !0;
        },
        p: function p(e, o) {
          var l = t;
          t = c(e), t === l ? s[t].p(e, o) : (en(), on(s[l], 1, 1, function () {
            s[l] = null;
          }), tn(), n = s[t], n ? n.p(e, o) : (n = s[t] = r[t](e), n.c()), nn(n, 1), n.m(i.parentNode, i));
        },
        i: function i(e) {
          _o55 || (nn(n), _o55 = !0);
        },
        o: function o(e) {
          on(n), _o55 = !1;
        },
        d: function d(e) {
          s[t].d(e), e && _t(i);
        }
      };
    }
    function bs(e) {
      var t, n;
      return t = new gs({
        props: {
          error: "bad_route",
          route: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          8 & n && (i.route = e[3]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function ks(e) {
      var t, n;
      return t = new ls({
        props: {
          route: e[3],
          blocks: e[4],
          selection: e[0]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          8 & n && (i.route = e[3]), 16 & n && (i.blocks = e[4]), 1 & n && (i.selection = e[0]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function _s(e) {
      var t, n;
      return t = new rs({
        props: {
          route: e[3],
          blocks: e[4],
          selection: e[0]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          8 & n && (i.route = e[3]), 16 & n && (i.blocks = e[4]), 1 & n && (i.selection = e[0]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function ws(e) {
      var t, n;
      return t = new ts({
        props: {
          route: e[3],
          blocks: e[4],
          selection: e[0]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          8 & n && (i.route = e[3]), 16 & n && (i.blocks = e[4]), 1 & n && (i.selection = e[0]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function xs(e) {
      var t, n;
      return t = new Io({
        props: {
          route: e[3],
          blocks: e[4]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          8 & n && (i.route = e[3]), 16 & n && (i.blocks = e[4]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Cs(e) {
      var t, n;
      return t = new gs({
        props: {
          error: "" !== e[2] ? e[2] : "bad_route",
          route: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          4 & n && (i.error = "" !== e[2] ? e[2] : "bad_route"), 8 & n && (i.route = e[3]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function js(e) {
      var _e$;
      var t,
        n,
        i,
        o,
        r,
        s = e[8] && ms(e),
        _c27 = e[5] && ys(e),
        l = ((_e$ = e[3]) === null || _e$ === void 0 ? void 0 : _e$.parent) && $s(e),
        a = (!e[3] || "empty" !== e[3].type) && vs(e);
      return {
        c: function c() {
          t = xt("div"), s && s.c(), n = jt(), _c27 && _c27.c(), i = jt(), l && l.c(), o = jt(), a && a.c(), St(t, "class", e[7]);
        },
        m: function m(e, u) {
          kt(e, t, u), s && s.m(t, null), bt(t, n), _c27 && _c27.m(t, null), bt(t, i), l && l.m(t, null), bt(t, o), a && a.m(t, null), r = !0;
        },
        p: function p(e, _ref68) {
          var _e$2;
          var _ref69 = (0, _slicedToArray2["default"])(_ref68, 1),
            u = _ref69[0];
          e[8] ? s ? (s.p(e, u), 256 & u && nn(s, 1)) : (s = ms(e), s.c(), nn(s, 1), s.m(t, n)) : s && (en(), on(s, 1, 1, function () {
            s = null;
          }), tn()), e[5] ? _c27 ? (_c27.p(e, u), 32 & u && nn(_c27, 1)) : (_c27 = ys(e), _c27.c(), nn(_c27, 1), _c27.m(t, i)) : _c27 && (en(), on(_c27, 1, 1, function () {
            _c27 = null;
          }), tn()), (_e$2 = e[3]) !== null && _e$2 !== void 0 && _e$2.parent ? l ? (l.p(e, u), 8 & u && nn(l, 1)) : (l = $s(e), l.c(), nn(l, 1), l.m(t, o)) : l && (en(), on(l, 1, 1, function () {
            l = null;
          }), tn()), e[3] && "empty" === e[3].type ? a && (en(), on(a, 1, 1, function () {
            a = null;
          }), tn()) : a ? (a.p(e, u), 8 & u && nn(a, 1)) : (a = vs(e), a.c(), nn(a, 1), a.m(t, null)), (!r || 128 & u) && St(t, "class", e[7]);
        },
        i: function i(e) {
          r || (nn(s), nn(_c27), nn(l), nn(a), r = !0);
        },
        o: function o(e) {
          on(s), on(_c27), on(l), on(a), r = !1;
        },
        d: function d(e) {
          e && _t(t), s && s.d(), _c27 && _c27.d(), l && l.d(), a && a.d();
        }
      };
    }
    var Is = "iif-content";
    function Ps(e, t, n) {
      var i,
        o,
        r = t.selection,
        s = t.viewChanged,
        c = t.error,
        l = t.route,
        a = t.blocks,
        u = false;
      return e.$$set = function (e) {
        "selection" in e && n(0, r = e.selection), "viewChanged" in e && n(1, s = e.viewChanged), "error" in e && n(2, c = e.error), "route" in e && n(3, l = e.route), "blocks" in e && n(4, a = e.blocks);
      }, e.$$.update = function () {
        if (140 & e.$$.dirty && (n(7, i = Is), "" !== c ? n(7, i += " iif-content--error iif-content--error--" + c) : (n(7, i += " iif-content--view iif-content--view--" + l.type), l.params && ("search" === l.type || "collections" === l.type || "collection" === l.type) && l.params.provider && n(7, i += " iif-content--view--" + l.type + "--provider--" + l.params.provider), "collection" === l.type ? n(7, i += " iif-content--view--collection--prefix--" + l.params.prefix) : "custom" === l.type && n(7, i += " iif-content--view--custom--" + l.params.customType))), 40 & e.$$.dirty) {
          n(5, o = !1);
          var _e153 = l;
          for (; !o && _e153;) "collections" === _e153.type ? n(5, o = !0) : _e153 = _e153.parent;
        }
        72 & e.$$.dirty && n(8, u = !1);
      }, [r, s, c, l, a, o, [""], i, u, ""];
    }
    var Os = /*#__PURE__*/function (_mn33) {
      (0, _inherits2["default"])(Os, _mn33);
      var _super40 = _createSuper(Os);
      function Os(e) {
        var _this51;
        (0, _classCallCheck2["default"])(this, Os);
        _this51 = _super40.call(this), gn((0, _assertThisInitialized2["default"])(_this51), e, Ps, js, mt, {
          selection: 0,
          viewChanged: 1,
          error: 2,
          route: 3,
          blocks: 4
        });
        return _this51;
      }
      return (0, _createClass2["default"])(Os);
    }(mn);
    function Ss(e, t, n) {
      var i = e.slice();
      return i[11] = t[n], i[13] = n, i;
    }
    function Es(e) {
      var t, n;
      return t = new En({
        props: {
          icon: e[11].icon
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          2 & n && (i.icon = e[11].icon), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Ms(e, t) {
      var n,
        i,
        o,
        r,
        s,
        c,
        l,
        a,
        u = t[3](t[11]).replace("{icon}", t[2]).replace("{count}", t[0].length + "") + "",
        f = t[11].icon && Es(t);
      function d() {
        return t[6](t[11]);
      }
      return {
        key: e,
        first: null,
        c: function c() {
          n = xt("button"), f && f.c(), i = jt(), o = Ct(u), r = jt(), St(n, "class", s = t[11].className), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), f && f.m(n, null), bt(n, i), bt(n, o), bt(n, r), c = !0, l || (a = Pt(n, "click", Ot(d)), l = !0);
        },
        p: function p(e, r) {
          (t = e)[11].icon ? f ? (f.p(t, r), 2 & r && nn(f, 1)) : (f = Es(t), f.c(), nn(f, 1), f.m(n, i)) : f && (en(), on(f, 1, 1, function () {
            f = null;
          }), tn()), (!c || 7 & r) && u !== (u = t[3](t[11]).replace("{icon}", t[2]).replace("{count}", t[0].length + "") + "") && Et(o, u), (!c || 2 & r && s !== (s = t[11].className)) && St(n, "class", s);
        },
        i: function i(e) {
          c || (nn(f), c = !0);
        },
        o: function o(e) {
          on(f), c = !1;
        },
        d: function d(e) {
          e && _t(n), f && f.d(), l = !1, a();
        }
      };
    }
    function Ts(e) {
      var t,
        n,
        _i79 = [],
        o = new Map(),
        r = e[1];
      var s = function s(e) {
        return e[11].key;
      };
      for (var _t69 = 0; _t69 < r.length; _t69 += 1) {
        var _n64 = Ss(e, r, _t69),
          _c28 = s(_n64);
        o.set(_c28, _i79[_t69] = Ms(_c28, _n64));
      }
      return {
        c: function c() {
          t = xt("div");
          for (var _e154 = 0; _e154 < _i79.length; _e154 += 1) _i79[_e154].c();
          St(t, "class", "iif-footer-buttons");
        },
        m: function m(e, o) {
          kt(e, t, o);
          for (var _e155 = 0; _e155 < _i79.length; _e155 += 1) _i79[_e155].m(t, null);
          n = !0;
        },
        p: function p(e, _ref70) {
          var _ref71 = (0, _slicedToArray2["default"])(_ref70, 1),
            n = _ref71[0];
          31 & n && (r = e[1], en(), _i79 = cn(_i79, n, s, 1, e, r, o, t, sn, Ms, null, Ss), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e156 = 0; _e156 < r.length; _e156 += 1) nn(_i79[_e156]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e157 = 0; _e157 < _i79.length; _e157 += 1) on(_i79[_e157]);
          n = !1;
        },
        d: function d(e) {
          e && _t(t);
          for (var _e158 = 0; _e158 < _i79.length; _e158 += 1) _i79[_e158].d();
        }
      };
    }
    var As = "iif-form-button";
    function Rs(e, t, n) {
      var i = t.icons,
        o = t.route;
      var r = Bt("registry"),
        s = xn.footerButtons;
      function c(e, t) {
        return {
          key: e,
          button: t,
          registry: r,
          icons: i,
          route: o
        };
      }
      var l = Object.keys(wn).map(function (e) {
        var t = wn[e];
        return Object.assign(Object.assign({}, t), {
          key: e,
          className: As + (t.type ? " iif-form-button--" + t.type : "") + (t.icon ? " iif-form-button--with-icon" : "")
        });
      });
      var a, u;
      function f(e) {
        r.callback({
          type: "button",
          button: e
        });
      }
      return e.$$set = function (e) {
        "icons" in e && n(0, i = e.icons), "route" in e && n(5, o = e.route);
      }, e.$$.update = function () {
        if (1 & e.$$.dirty) {
          var _e159 = i.length;
          n(1, a = l.filter(function (t) {
            var n = t.display;
            switch (n) {
              case void 0:
              case "always":
                return !0;
              case "empty":
                return 0 === _e159;
              case "icons":
                return _e159 > 0;
              case "one-icon":
                return 1 === _e159;
              case "many-icons":
                return _e159 > 1;
              default:
                if ("function" == typeof n) return n(c(t.key, t));
            }
          })), n(2, u = _e159 > 0 ? tt.iconToString(i[0]) : "icon");
        }
      }, [i, a, u, function (e) {
        if ("function" == typeof e.text) return e.text(c(e.key, e));
        if ("string" == typeof e.text) return e.text;
        var t = e.key;
        return "string" == typeof s[t] ? s[t] : t.split("-").map(function (e) {
          return e.slice(0, 1).toUpperCase() + e.slice(1);
        }).join(" ");
      }, f, o, function (e) {
        return f(e.key);
      }];
    }
    var Fs = /*#__PURE__*/function (_mn34) {
      (0, _inherits2["default"])(Fs, _mn34);
      var _super41 = _createSuper(Fs);
      function Fs(e) {
        var _this52;
        (0, _classCallCheck2["default"])(this, Fs);
        _this52 = _super41.call(this), gn((0, _assertThisInitialized2["default"])(_this52), e, Rs, Ts, mt, {
          icons: 0,
          route: 5
        });
        return _this52;
      }
      return (0, _createClass2["default"])(Fs);
    }(mn);
    function Ls(e) {
      var t,
        n,
        _i80,
        _o56 = !e[1] && Ns();
      var r = function (e, t) {
        return e[3] ? Vs : Bs;
      }(e)(e);
      return {
        c: function c() {
          t = xt("p"), _o56 && _o56.c(), n = jt(), r.c(), St(t, "class", "iif-footer-block-title");
        },
        m: function m(e, s) {
          kt(e, t, s), _o56 && _o56.m(t, null), bt(t, n), r.m(t, null), _i80 = !0;
        },
        p: function p(e, i) {
          e[1] ? _o56 && (en(), on(_o56, 1, 1, function () {
            _o56 = null;
          }), tn()) : _o56 ? 2 & i && nn(_o56, 1) : (_o56 = Ns(), _o56.c(), nn(_o56, 1), _o56.m(t, n)), r.p(e, i);
        },
        i: function i(e) {
          _i80 || (nn(_o56), _i80 = !0);
        },
        o: function o(e) {
          on(_o56), _i80 = !1;
        },
        d: function d(e) {
          e && _t(t), _o56 && _o56.d(), r.d();
        }
      };
    }
    function Ns(e) {
      var t, n;
      return t = new En({
        props: {
          icon: "expand"
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Bs(e) {
      var t,
        n = e[0] + ":";
      return {
        c: function c() {
          t = Ct(n);
        },
        m: function m(e, n) {
          kt(e, t, n);
        },
        p: function p(e, i) {
          1 & i && n !== (n = e[0] + ":") && Et(t, n);
        },
        d: function d(e) {
          e && _t(t);
        }
      };
    }
    function Vs(e) {
      var t,
        n,
        i,
        o,
        r = e[0] + (e[1] ? ":" : "");
      return {
        c: function c() {
          t = xt("a"), n = Ct(r), St(t, "href", "# ");
        },
        m: function m(r, s) {
          kt(r, t, s), bt(t, n), i || (o = Pt(t, "click", Ot(e[4])), i = !0);
        },
        p: function p(e, t) {
          3 & t && r !== (r = e[0] + (e[1] ? ":" : "")) && Et(n, r);
        },
        d: function d(e) {
          e && _t(t), i = !1, o();
        }
      };
    }
    function Ds(e) {
      var t;
      var n = e[7]["default"],
        _i81 = yt(n, e, e[6], null);
      return {
        c: function c() {
          _i81 && _i81.c();
        },
        m: function m(e, n) {
          _i81 && _i81.m(e, n), t = !0;
        },
        p: function p(e, o) {
          _i81 && _i81.p && (!t || 64 & o) && vt(_i81, n, e, e[6], o, null, null);
        },
        i: function i(e) {
          t || (nn(_i81, e), t = !0);
        },
        o: function o(e) {
          on(_i81, e), t = !1;
        },
        d: function d(e) {
          _i81 && _i81.d(e);
        }
      };
    }
    function zs(e) {
      var t,
        n,
        _i82,
        _o57 = "" !== e[0] && Ls(e),
        r = e[1] && Ds(e);
      return {
        c: function c() {
          t = xt("div"), _o57 && _o57.c(), n = jt(), r && r.c(), St(t, "class", e[2]);
        },
        m: function m(e, s) {
          kt(e, t, s), _o57 && _o57.m(t, null), bt(t, n), r && r.m(t, null), _i82 = !0;
        },
        p: function p(e, _ref72) {
          var _ref73 = (0, _slicedToArray2["default"])(_ref72, 1),
            s = _ref73[0];
          "" !== e[0] ? _o57 ? (_o57.p(e, s), 1 & s && nn(_o57, 1)) : (_o57 = Ls(e), _o57.c(), nn(_o57, 1), _o57.m(t, n)) : _o57 && (en(), on(_o57, 1, 1, function () {
            _o57 = null;
          }), tn()), e[1] ? r ? (r.p(e, s), 2 & s && nn(r, 1)) : (r = Ds(e), r.c(), nn(r, 1), r.m(t, null)) : r && (en(), on(r, 1, 1, function () {
            r = null;
          }), tn()), (!_i82 || 4 & s) && St(t, "class", e[2]);
        },
        i: function i(e) {
          _i82 || (nn(_o57), nn(r), _i82 = !0);
        },
        o: function o(e) {
          on(_o57), on(r), _i82 = !1;
        },
        d: function d(e) {
          e && _t(t), _o57 && _o57.d(), r && r.d();
        }
      };
    }
    var qs = "iif-footer-block";
    function Us(e, t, n) {
      var _t$$$slots4 = t.$$slots,
        i = _t$$$slots4 === void 0 ? {} : _t$$$slots4,
        o = t.$$scope,
        r = t.name,
        s = t.title,
        c = r + "Visible";
      var l = Bt("registry"),
        a = l.config.components;
      var u,
        f = !0;
      return e.$$set = function (e) {
        "name" in e && n(5, r = e.name), "title" in e && n(0, s = e.title), "$$scope" in e && n(6, o = e.$$scope);
      }, e.$$.update = function () {
        34 & e.$$.dirty && n(2, u = qs + " " + qs + "--" + r + " " + qs + "--" + (f ? "expanded" : "collapsed"));
      }, [s, f, u, false, function () {
        n(1, f = a[c] = !f), l.callback({
          type: "config"
        });
      }, r, o, i];
    }
    var Hs = /*#__PURE__*/function (_mn35) {
      (0, _inherits2["default"])(Hs, _mn35);
      var _super42 = _createSuper(Hs);
      function Hs(e) {
        var _this53;
        (0, _classCallCheck2["default"])(this, Hs);
        _this53 = _super42.call(this), gn((0, _assertThisInitialized2["default"])(_this53), e, Us, zs, mt, {
          name: 5,
          title: 0
        });
        return _this53;
      }
      return (0, _createClass2["default"])(Hs);
    }(mn);
    var Ks = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.extendedColorKeywords = t.baseColorKeywords = void 0, t.baseColorKeywords = {
          silver: [192, 192, 192],
          gray: [128, 128, 128],
          white: [255, 255, 255],
          maroon: [128, 0, 0],
          red: [255, 0, 0],
          purple: [128, 0, 128],
          fuchsia: [255, 0, 255],
          green: [0, 128, 0],
          lime: [0, 255, 0],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          navy: [0, 0, 128],
          blue: [0, 0, 255],
          teal: [0, 128, 128],
          aqua: [0, 255, 255]
        }, t.extendedColorKeywords = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
          rebeccapurple: [102, 51, 153]
        };
      }),
      Gs = ve(function (e, t) {
        function n(e) {
          return {
            r: e[0],
            g: e[1],
            b: e[2],
            a: 1
          };
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.colorToString = t.stringToColor = void 0, t.stringToColor = function (e) {
          if (e = e.toLowerCase(), void 0 !== Ks.baseColorKeywords[e]) return n(Ks.baseColorKeywords[e]);
          if (void 0 !== Ks.extendedColorKeywords[e]) return n(Ks.extendedColorKeywords[e]);
          if (-1 === e.indexOf("(")) return function (e) {
            if ("#" === e.slice(0, 1) && (e = e.slice(1)), !/^[\da-f]+$/i.test(e)) return null;
            var t,
              n,
              i,
              o = "",
              r = 0;
            switch (e.length) {
              case 4:
                o = e.slice(-1), o += o;
              case 3:
                t = e.slice(r, ++r), t += t, n = e.slice(r, ++r), n += n, i = e.slice(r, ++r), i += i;
                break;
              case 8:
                o = e.slice(-2);
              case 6:
                t = e.slice(r++, ++r), n = e.slice(r++, ++r), i = e.slice(r++, ++r);
                break;
              default:
                return null;
            }
            return {
              r: parseInt(t, 16),
              g: parseInt(n, 16),
              b: parseInt(i, 16),
              a: "" === o ? 1 : parseInt(o, 16) / 255
            };
          }(e);
          if (")" !== (e = e.replace(/\s+/g, "")).slice(-1)) return null;
          var t = (e = e.slice(0, e.length - 1)).split("(");
          if (2 !== t.length || /[^\d.,%-]/.test(t[1])) return null;
          var i = t[0],
            o = t[1].split(",");
          if (3 !== o.length && 4 !== o.length) return null;
          var r,
            s,
            c,
            l,
            a,
            u = 1;
          if (4 === o.length) {
            var _e160 = o.pop();
            if (u = parseFloat(_e160) * ("%" === _e160.slice(-1) ? .01 : 1), isNaN(u)) return null;
            u = u < 0 ? 0 : u > 1 ? 1 : u;
          }
          switch (i) {
            case "rgb":
            case "rgba":
              return l = "%" === o[0].slice(-1), "%" === o[1].slice(-1) !== l || "%" === o[2].slice(-1) !== l ? null : (a = l ? 2.55 : 1, r = parseFloat(o[0]) * a, s = parseFloat(o[1]) * a, c = parseFloat(o[2]) * a, {
                r: isNaN(r) || r < 0 ? 0 : r > 255 ? 255 : r,
                g: isNaN(s) || s < 0 ? 0 : s > 255 ? 255 : s,
                b: isNaN(c) || c < 0 ? 0 : c > 255 ? 255 : c,
                a: u
              });
            case "hsl":
            case "hsla":
              return -1 !== o[0].indexOf("%") || "%" !== o[1].slice(-1) || "%" !== o[2].slice(-1) ? null : (r = parseFloat(o[0]), s = parseFloat(o[1]), c = parseFloat(o[2]), {
                h: isNaN(r) ? 0 : r < 0 ? r % 360 + 360 : r >= 360 ? r % 360 : r,
                s: isNaN(s) || s < 0 ? 0 : s > 100 ? 100 : s,
                l: isNaN(c) || c < 0 ? 0 : c > 100 ? 100 : c,
                a: u
              });
          }
          return null;
        }, t.colorToString = function (e) {
          var t;
          try {
            t = void 0 !== e.r ? e : function (e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
              function n(e, t, n) {
                return (n = n < 0 ? n % 360 + 360 : n >= 360 ? n % 360 : n) >= 240 ? e : n < 60 ? e + (t - e) * n / 60 : n < 180 ? t : e + (t - e) * (240 - n) / 60;
              }
              var i = e.h < 0 ? e.h % 360 + 360 : e.h >= 360 ? e.h % 360 : e.h,
                o = e.s < 0 ? 0 : e.s > 100 ? 1 : e.s / 100,
                r = e.l < 0 ? 0 : e.l > 100 ? 1 : e.l / 100;
              var s;
              s = r <= .5 ? r * (1 + o) : r + o * (1 - r);
              var c = 2 * r - s;
              var l, a, u;
              return 0 === o && 0 === i ? (l = r, a = r, u = r) : (l = n(c, s, i + 120), a = n(c, s, i), u = n(c, s, i - 120)), {
                r: t ? Math.round(255 * l) : 255 * l,
                g: t ? Math.round(255 * a) : 255 * a,
                b: t ? Math.round(255 * u) : 255 * u,
                a: e.a
              };
            }(e);
          } catch (e) {
            return "";
          }
          var n = t.r === Math.round(t.r) && t.g === Math.round(t.g) && t.b === Math.round(t.b);
          if (n && 1 === e.a) {
            var _e161 = function (e) {
              var t = [Ks.baseColorKeywords, Ks.extendedColorKeywords];
              for (var _n65 = 0; _n65 < t.length; _n65++) {
                var _i83 = t[_n65],
                  _o58 = Object.keys(_i83);
                var _r13 = void 0;
                for (; void 0 !== (_r13 = _o58.shift());) {
                  var _t70 = _i83[_r13];
                  if (_t70[0] === e.r && _t70[1] === e.g && _t70[2] === e.b) return _r13;
                }
              }
              return null;
            }(t);
            if ("string" == typeof _e161) return _e161;
            var _n66 = "",
              _i84 = !0;
            try {
              ["r", "g", "b"].forEach(function (e) {
                var o = t[e];
                if (o < 0 || o > 255) throw new Error("Invalid color");
                var r = (o < 16 ? "0" : "") + o.toString(16);
                _n66 += r, _i84 = _i84 && r[0] === r[1];
              });
            } catch (e) {
              return "";
            }
            return "#" + (_i84 ? _n66[0] + _n66[2] + _n66[4] : _n66);
          }
          if (!n && void 0 !== e.h) {
            var _t71 = e,
              _n67 = [];
            try {
              var _e162 = _t71.h % 360;
              for (; _e162 < 0;) _e162 += 360;
              _n67.push(_e162 + ""), ["s", "l"].forEach(function (e) {
                var i = _t71[e];
                if (i < 0 || i > 100) throw new Error("Invalid color");
                _n67.push(i + "%");
              });
            } catch (e) {
              return "";
            }
            return 1 !== _t71.a && _n67.push(_t71.a + ""), (1 === _t71.a ? "hsl(" : "hsla(") + _n67.join(", ") + ")";
          }
          var i = [];
          try {
            ["r", "g", "b"].forEach(function (e) {
              var n = t[e];
              if (n < 0 || n > 255) throw new Error("Invalid color");
              i.push(n + "");
            });
          } catch (e) {
            return "";
          }
          return 1 !== t.a && i.push(t.a + ""), (1 === t.a ? "rgb(" : "rgba(") + i.join(", ") + ")";
        };
      });
    function Js(e) {
      var t, n, i, o, r, s, c;
      var l = e[3]["default"],
        a = yt(l, e, e[2], null);
      return {
        c: function c() {
          t = xt("div"), n = xt("p"), i = Ct(e[1]), o = jt(), r = xt("div"), a && a.c(), St(t, "class", s = Ws + " " + Ws + "--" + e[0]);
        },
        m: function m(e, s) {
          kt(e, t, s), bt(t, n), bt(n, i), bt(t, o), bt(t, r), a && a.m(r, null), c = !0;
        },
        p: function p(e, _ref74) {
          var _ref75 = (0, _slicedToArray2["default"])(_ref74, 1),
            n = _ref75[0];
          (!c || 2 & n) && Et(i, e[1]), a && a.p && (!c || 4 & n) && vt(a, l, e, e[2], n, null, null), (!c || 1 & n && s !== (s = Ws + " " + Ws + "--" + e[0])) && St(t, "class", s);
        },
        i: function i(e) {
          c || (nn(a, e), c = !0);
        },
        o: function o(e) {
          on(a, e), c = !1;
        },
        d: function d(e) {
          e && _t(t), a && a.d(e);
        }
      };
    }
    var Ws = "iif-footer-options-block";
    function Qs(e, t, n) {
      var i,
        _t$$$slots5 = t.$$slots,
        o = _t$$$slots5 === void 0 ? {} : _t$$$slots5,
        r = t.$$scope,
        s = t.type;
      return e.$$set = function (e) {
        "type" in e && n(0, s = e.type), "$$scope" in e && n(2, r = e.$$scope);
      }, e.$$.update = function () {
        if (1 & e.$$.dirty) {
          var _e163 = xn.footerBlocks;
          n(1, i = void 0 === _e163[s] ? s.split(" ").map(function (e) {
            return e.slice(0, 1).toUpperCase() + e.slice(1);
          }).join(" ") : _e163[s]);
        }
      }, [s, i, r, o];
    }
    var Ys = /*#__PURE__*/function (_mn36) {
      (0, _inherits2["default"])(Ys, _mn36);
      var _super43 = _createSuper(Ys);
      function Ys(e) {
        var _this54;
        (0, _classCallCheck2["default"])(this, Ys);
        _this54 = _super43.call(this), gn((0, _assertThisInitialized2["default"])(_this54), e, Qs, Js, mt, {
          type: 0
        });
        return _this54;
      }
      return (0, _createClass2["default"])(Ys);
    }(mn);
    function Xs(e) {
      var t, n;
      return t = new Ys({
        props: {
          type: "color",
          $$slots: {
            "default": [Zs]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          2053 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Zs(e) {
      var t, n;
      return t = new Nn({
        props: {
          value: e[2],
          placeholder: bn,
          title: e[3],
          onInput: e[4],
          onBlur: e[5],
          icon: void 0 === e[0] || "" === e[0] ? "color" : "color-filled",
          extra: void 0 === e[0] ? "" : e[0],
          type: "color"
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          4 & n && (i.value = e[2]), 1 & n && (i.icon = void 0 === e[0] || "" === e[0] ? "color" : "color-filled"), 1 & n && (i.extra = void 0 === e[0] ? "" : e[0]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function ec(e) {
      var t,
        n,
        _i85 = e[1] && Xs(e);
      return {
        c: function c() {
          _i85 && _i85.c(), t = It();
        },
        m: function m(e, o) {
          _i85 && _i85.m(e, o), kt(e, t, o), n = !0;
        },
        p: function p(e, _ref76) {
          var _ref77 = (0, _slicedToArray2["default"])(_ref76, 1),
            n = _ref77[0];
          e[1] ? _i85 ? (_i85.p(e, n), 2 & n && nn(_i85, 1)) : (_i85 = Xs(e), _i85.c(), nn(_i85, 1), _i85.m(t.parentNode, t)) : _i85 && (en(), on(_i85, 1, 1, function () {
            _i85 = null;
          }), tn());
        },
        i: function i(e) {
          n || (nn(_i85), n = !0);
        },
        o: function o(e) {
          on(_i85), n = !1;
        },
        d: function d(e) {
          _i85 && _i85.d(e), e && _t(t);
        }
      };
    }
    function tc(e, t, n) {
      var i;
      var o,
        r = t.icons,
        s = t.value,
        c = t.customise;
      var l = xn.footerBlocks.color;
      var a = s,
        u = s;
      return e.$$set = function (e) {
        "icons" in e && n(6, r = e.icons), "value" in e && n(0, s = e.value), "customise" in e && n(7, c = e.customise);
      }, e.$$.update = function () {
        if (320 & e.$$.dirty) {
          n(1, o = !1);
          for (var _e164 = 0; _e164 < r.length; _e164++) {
            var _t72 = null === n(8, i = we.Iconify.getIcon) || void 0 === i ? void 0 : i.call(we.Iconify, tt.iconToString(r[_e164]));
            if (_t72 && -1 !== _t72.body.indexOf("currentColor")) {
              n(1, o = !0);
              break;
            }
          }
        }
        513 & e.$$.dirty && a !== s && (n(9, a = s), n(2, u = s));
      }, [s, o, u, l, function (e) {
        if (n(2, u = e), "" === e) return void c("color", "");
        var t = function (e, t) {
          var n = Gs.stringToColor(e);
          if (!n) return t;
          var i = Gs.colorToString(n);
          return "" === i ? t : i;
        }(e, null);
        null !== t && (n(9, a = n(0, s = t)), c("color", t));
      }, function () {
        n(2, u = s);
      }, r, c, i, a];
    }
    var nc = /*#__PURE__*/function (_mn37) {
      (0, _inherits2["default"])(nc, _mn37);
      var _super44 = _createSuper(nc);
      function nc(e) {
        var _this55;
        (0, _classCallCheck2["default"])(this, nc);
        _this55 = _super44.call(this), gn((0, _assertThisInitialized2["default"])(_this55), e, tc, ec, mt, {
          icons: 6,
          value: 0,
          customise: 7
        });
        return _this55;
      }
      return (0, _createClass2["default"])(nc);
    }(mn);
    function ic(e) {
      var t, n;
      return t = new Nn({
        props: {
          value: e[3],
          placeholder: e[1],
          title: e[2],
          onInput: e[4],
          onBlur: e[5],
          icon: "icon-" + e[0],
          type: "number"
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref78) {
          var _ref79 = (0, _slicedToArray2["default"])(_ref78, 1),
            n = _ref79[0];
          var i = {};
          8 & n && (i.value = e[3]), 2 & n && (i.placeholder = e[1]), 4 & n && (i.title = e[2]), 1 & n && (i.icon = "icon-" + e[0]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function oc(e, t, n) {
      var i,
        o = t.prop,
        r = t.value,
        s = t.placeholder,
        c = t.customise,
        l = r,
        a = r;
      return e.$$set = function (e) {
        "prop" in e && n(0, o = e.prop), "value" in e && n(6, r = e.value), "placeholder" in e && n(1, s = e.placeholder), "customise" in e && n(7, c = e.customise);
      }, e.$$.update = function () {
        1 & e.$$.dirty && n(2, i = xn.footerBlocks[o]), 320 & e.$$.dirty && l !== r && (n(8, l = r), n(3, a = r));
      }, [o, s, i, a, function (e) {
        n(3, a = e);
        var t = e;
        if ("" !== e) {
          var _n68 = parseFloat(e);
          if (t = "" + _n68, isNaN(_n68) || t !== e || _n68 <= 0) return;
        }
        c(o, t);
      }, function () {
        n(3, a = r);
      }, r, c, l];
    }
    var rc = /*#__PURE__*/function (_mn38) {
      (0, _inherits2["default"])(rc, _mn38);
      var _super45 = _createSuper(rc);
      function rc(e) {
        var _this56;
        (0, _classCallCheck2["default"])(this, rc);
        _this56 = _super45.call(this), gn((0, _assertThisInitialized2["default"])(_this56), e, oc, ic, mt, {
          prop: 0,
          value: 6,
          placeholder: 1,
          customise: 7
        });
        return _this56;
      }
      return (0, _createClass2["default"])(rc);
    }(mn);
    function sc(e, t, n) {
      var i = e.slice();
      return i[8] = t[n], i[10] = n, i;
    }
    function cc(e, t) {
      var n, _i86, _o59;
      return _i86 = new rc({
        props: {
          prop: t[8],
          value: null === t[0][t[8]] ? "" : t[0][t[8]] + "",
          placeholder: t[2][t[8]],
          customise: t[1]
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i86.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i86, e, t), _o59 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          1 & n && (o.value = null === t[0][t[8]] ? "" : t[0][t[8]] + ""), 4 & n && (o.placeholder = t[2][t[8]]), 2 & n && (o.customise = t[1]), _i86.$set(o);
        },
        i: function i(e) {
          _o59 || (nn(_i86.$$.fragment, e), _o59 = !0);
        },
        o: function o(e) {
          on(_i86.$$.fragment, e), _o59 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i86, e);
        }
      };
    }
    function lc(e) {
      var t,
        n,
        _i87 = [],
        o = new Map(),
        r = e[4];
      var s = function s(e) {
        return e[8];
      };
      for (var _t73 = 0; _t73 < r.length; _t73 += 1) {
        var _n69 = sc(e, r, _t73),
          _c29 = s(_n69);
        o.set(_c29, _i87[_t73] = cc(_c29, _n69));
      }
      return {
        c: function c() {
          for (var _e165 = 0; _e165 < _i87.length; _e165 += 1) _i87[_e165].c();
          t = It();
        },
        m: function m(e, o) {
          for (var _t74 = 0; _t74 < _i87.length; _t74 += 1) _i87[_t74].m(e, o);
          kt(e, t, o), n = !0;
        },
        p: function p(e, n) {
          23 & n && (r = e[4], en(), _i87 = cn(_i87, n, s, 1, e, r, o, t.parentNode, sn, cc, t, sc), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e166 = 0; _e166 < r.length; _e166 += 1) nn(_i87[_e166]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e167 = 0; _e167 < _i87.length; _e167 += 1) on(_i87[_e167]);
          n = !1;
        },
        d: function d(e) {
          for (var _t75 = 0; _t75 < _i87.length; _t75 += 1) _i87[_t75].d(e);
          e && _t(t);
        }
      };
    }
    function ac(e) {
      var t, n;
      return t = new Ys({
        props: {
          type: e[3],
          $$slots: {
            "default": [lc]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref80) {
          var _ref81 = (0, _slicedToArray2["default"])(_ref80, 1),
            n = _ref81[0];
          var i = {};
          2055 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function uc(e, t, n) {
      var i = t.icons,
        o = t.customisations,
        r = t.customise;
      var s = {
        width: "",
        height: ""
      };
      var c, l;
      return e.$$set = function (e) {
        "icons" in e && n(5, i = e.icons), "customisations" in e && n(0, o = e.customisations), "customise" in e && n(1, r = e.customise);
      }, e.$$.update = function () {
        if (32 & e.$$.dirty) {
          var _e168 = 0,
            _t76 = 0,
            _o60 = !0,
            _r14 = !0,
            _s13 = 1,
            _l8 = !0;
          i.forEach(function (n) {
            var i;
            if (!_o60 && !_r14) return;
            var c = tt.iconToString(n),
              a = null === (i = we.Iconify.getIcon) || void 0 === i ? void 0 : i.call(we.Iconify, c);
            if (a) {
              if (!_e168) return _e168 = a.width, _t76 = a.height, void (_s13 = _e168 / _t76);
              _o60 && _e168 !== a.width && (_o60 = !1), _r14 && _t76 !== a.height && (_r14 = !1), _l8 && a.width / a.height !== _s13 && (_l8 = !1);
            }
          }), n(6, c = {
            width: _o60 ? _e168 : 0,
            height: _r14 ? _t76 : 0,
            ratio: _l8 ? _s13 : 0
          });
        }
        if (65 & e.$$.dirty) {
          n(2, l = {
            width: "",
            height: ""
          });
          var _e169 = !(!o.rotate || o.rotate % 2 != 1);
          if (0 !== c.ratio) {
            var _t77 = ["width", "height"];
            _t77.forEach(function (i, r) {
              var a = _t77[1 - r],
                u = _e169 ? a : i;
              var f = "",
                d = !1;
              var p = o[_e169 ? i : a];
              p ? (f = p, d = !0) : "" !== s[i] ? f = s[i] : "" !== s[a] ? (f = s[a], d = !0) : c[i] && (f = c[i]), "" !== f && n(2, l[u] = (d ? ae(f, "width" === i ? c.ratio : 1 / c.ratio) : f) + "", l);
            });
          }
        }
      }, [o, r, l, "size", ["width", "height"], i, c];
    }
    var fc = /*#__PURE__*/function (_mn39) {
      (0, _inherits2["default"])(fc, _mn39);
      var _super46 = _createSuper(fc);
      function fc(e) {
        var _this57;
        (0, _classCallCheck2["default"])(this, fc);
        _this57 = _super46.call(this), gn((0, _assertThisInitialized2["default"])(_this57), e, uc, ac, mt, {
          icons: 5,
          customisations: 0,
          customise: 1
        });
        return _this57;
      }
      return (0, _createClass2["default"])(fc);
    }(mn);
    function dc(e) {
      var t, n;
      return t = new En({
        props: {
          icon: e[0]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          1 & n && (i.icon = e[0]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function pc(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        c,
        l = (e[3] ? e[3] : e[2]) + "",
        a = e[0] && dc(e);
      return {
        c: function c() {
          t = xt("button"), a && a.c(), n = jt(), i = xt("span"), o = Ct(l), St(t, "class", e[4]), St(t, "title", e[2]);
        },
        m: function m(l, u) {
          kt(l, t, u), a && a.m(t, null), bt(t, n), bt(t, i), bt(i, o), r = !0, s || (c = Pt(t, "click", function () {
            gt(e[1]) && e[1].apply(this, arguments);
          }), s = !0);
        },
        p: function p(i, _ref82) {
          var _ref83 = (0, _slicedToArray2["default"])(_ref82, 1),
            s = _ref83[0];
          (e = i)[0] ? a ? (a.p(e, s), 1 & s && nn(a, 1)) : (a = dc(e), a.c(), nn(a, 1), a.m(t, n)) : a && (en(), on(a, 1, 1, function () {
            a = null;
          }), tn()), (!r || 12 & s) && l !== (l = (e[3] ? e[3] : e[2]) + "") && Et(o, l), (!r || 16 & s) && St(t, "class", e[4]), (!r || 4 & s) && St(t, "title", e[2]);
        },
        i: function i(e) {
          r || (nn(a), r = !0);
        },
        o: function o(e) {
          on(a), r = !1;
        },
        d: function d(e) {
          e && _t(t), a && a.d(), s = !1, c();
        }
      };
    }
    var hc = "iif-option-button";
    function gc(e, t, n) {
      var i,
        _t$icon2 = t.icon,
        o = _t$icon2 === void 0 ? "" : _t$icon2,
        r = t.onClick,
        s = t.title,
        _t$text = t.text,
        c = _t$text === void 0 ? null : _t$text,
        _t$textOptional = t.textOptional,
        l = _t$textOptional === void 0 ? !1 : _t$textOptional,
        _t$status2 = t.status,
        a = _t$status2 === void 0 ? "" : _t$status2;
      return e.$$set = function (e) {
        "icon" in e && n(0, o = e.icon), "onClick" in e && n(1, r = e.onClick), "title" in e && n(2, s = e.title), "text" in e && n(3, c = e.text), "textOptional" in e && n(5, l = e.textOptional), "status" in e && n(6, a = e.status);
      }, e.$$.update = function () {
        105 & e.$$.dirty && n(4, i = hc + " " + hc + (o ? "--with-icon" : "--without-icon") + " " + hc + (c && !l || !o ? "--with-text" : "--without-text") + ("" === a ? "" : " " + hc + "--" + a));
      }, [o, r, s, c, i, l, a];
    }
    var mc = /*#__PURE__*/function (_mn40) {
      (0, _inherits2["default"])(mc, _mn40);
      var _super47 = _createSuper(mc);
      function mc(e) {
        var _this58;
        (0, _classCallCheck2["default"])(this, mc);
        _this58 = _super47.call(this), gn((0, _assertThisInitialized2["default"])(_this58), e, gc, pc, mt, {
          icon: 0,
          onClick: 1,
          title: 2,
          text: 3,
          textOptional: 5,
          status: 6
        });
        return _this58;
      }
      return (0, _createClass2["default"])(mc);
    }(mn);
    function yc(e, t, n) {
      var i = e.slice();
      return i[6] = t[n].count, i[7] = t[n].key, i[9] = n, i;
    }
    function $c(e, t) {
      var n, _i88, _o61;
      function r() {
        return t[5](t[6]);
      }
      return _i88 = new mc({
        props: {
          icon: "rotate" + t[6],
          title: t[2].rotateTitle.replace("{num}", 90 * t[6] + ""),
          text: t[2].rotate.replace("{num}", 90 * t[6] + ""),
          status: t[0] === t[6] ? "checked" : "unchecked",
          onClick: r
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i88.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i88, e, t), _o61 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          2 & n && (o.icon = "rotate" + t[6]), 2 & n && (o.title = t[2].rotateTitle.replace("{num}", 90 * t[6] + "")), 2 & n && (o.text = t[2].rotate.replace("{num}", 90 * t[6] + "")), 3 & n && (o.status = t[0] === t[6] ? "checked" : "unchecked"), 2 & n && (o.onClick = r), _i88.$set(o);
        },
        i: function i(e) {
          _o61 || (nn(_i88.$$.fragment, e), _o61 = !0);
        },
        o: function o(e) {
          on(_i88.$$.fragment, e), _o61 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i88, e);
        }
      };
    }
    function vc(e) {
      var t,
        n,
        _i89 = [],
        o = new Map(),
        r = e[1];
      var s = function s(e) {
        return e[7];
      };
      for (var _t78 = 0; _t78 < r.length; _t78 += 1) {
        var _n70 = yc(e, r, _t78),
          _c30 = s(_n70);
        o.set(_c30, _i89[_t78] = $c(_c30, _n70));
      }
      return {
        c: function c() {
          for (var _e170 = 0; _e170 < _i89.length; _e170 += 1) _i89[_e170].c();
          t = It();
        },
        m: function m(e, o) {
          for (var _t79 = 0; _t79 < _i89.length; _t79 += 1) _i89[_t79].m(e, o);
          kt(e, t, o), n = !0;
        },
        p: function p(e, n) {
          15 & n && (r = e[1], en(), _i89 = cn(_i89, n, s, 1, e, r, o, t.parentNode, sn, $c, t, yc), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e171 = 0; _e171 < r.length; _e171 += 1) nn(_i89[_e171]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e172 = 0; _e172 < _i89.length; _e172 += 1) on(_i89[_e172]);
          n = !1;
        },
        d: function d(e) {
          for (var _t80 = 0; _t80 < _i89.length; _t80 += 1) _i89[_t80].d(e);
          e && _t(t);
        }
      };
    }
    function bc(e) {
      var t, n;
      return t = new Ys({
        props: {
          type: "rotate",
          $$slots: {
            "default": [vc]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref84) {
          var _ref85 = (0, _slicedToArray2["default"])(_ref84, 1),
            n = _ref85[0];
          var i = {};
          1027 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function kc(e, t, n) {
      var i = t.value,
        o = t.customise;
      var r = xn.footerOptionButtons;
      var s;
      function c(e) {
        (e || i) && o("rotate", e === i ? 0 : e);
      }
      return e.$$set = function (e) {
        "value" in e && n(0, i = e.value), "customise" in e && n(4, o = e.customise);
      }, e.$$.update = function () {
        if (3 & e.$$.dirty) {
          var _e173 = [];
          for (var _n71 = 0; _n71 < 4; _n71++) if (s && s[_n71] && i !== _n71) {
            var _t81 = s[_n71];
            _t81.selected = !1, _e173.push(_t81);
          } else _e173.push((t = _n71, o = i === _n71, r = s && s[_n71] ? s[_n71].temp + 1 : 0, {
            count: t,
            key: t + "-" + r,
            selected: o,
            temp: r
          }));
          n(1, s = _e173);
        }
        var t, o, r;
      }, [i, s, r, c, o, function (e) {
        return c(e);
      }];
    }
    var _c = /*#__PURE__*/function (_mn41) {
      (0, _inherits2["default"])(_c, _mn41);
      var _super48 = _createSuper(_c);
      function _c(e) {
        var _this59;
        (0, _classCallCheck2["default"])(this, _c);
        _this59 = _super48.call(this), gn((0, _assertThisInitialized2["default"])(_this59), e, kc, bc, mt, {
          value: 0,
          customise: 4
        });
        return _this59;
      }
      return (0, _createClass2["default"])(_c);
    }(mn);
    function wc(e, t, n) {
      var i = e.slice();
      return i[6] = t[n], i[8] = n, i;
    }
    function xc(e, t) {
      var n, _i90, _o62;
      function r() {
        return t[4](t[6]);
      }
      return _i90 = new mc({
        props: {
          icon: t[6].icon,
          title: t[6].title,
          status: t[0][t[6].prop] ? "checked" : "unchecked",
          onClick: r
        }
      }), {
        key: e,
        first: null,
        c: function c() {
          n = It(), fn(_i90.$$.fragment), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), dn(_i90, e, t), _o62 = !0;
        },
        p: function p(e, n) {
          t = e;
          var o = {};
          2 & n && (o.icon = t[6].icon), 2 & n && (o.title = t[6].title), 3 & n && (o.status = t[0][t[6].prop] ? "checked" : "unchecked"), 2 & n && (o.onClick = r), _i90.$set(o);
        },
        i: function i(e) {
          _o62 || (nn(_i90.$$.fragment, e), _o62 = !0);
        },
        o: function o(e) {
          on(_i90.$$.fragment, e), _o62 = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_i90, e);
        }
      };
    }
    function Cc(e) {
      var t,
        n,
        _i91 = [],
        o = new Map(),
        r = e[1];
      var s = function s(e) {
        return e[6].key;
      };
      for (var _t82 = 0; _t82 < r.length; _t82 += 1) {
        var _n72 = wc(e, r, _t82),
          _c31 = s(_n72);
        o.set(_c31, _i91[_t82] = xc(_c31, _n72));
      }
      return {
        c: function c() {
          for (var _e174 = 0; _e174 < _i91.length; _e174 += 1) _i91[_e174].c();
          t = It();
        },
        m: function m(e, o) {
          for (var _t83 = 0; _t83 < _i91.length; _t83 += 1) _i91[_t83].m(e, o);
          kt(e, t, o), n = !0;
        },
        p: function p(e, n) {
          7 & n && (r = e[1], en(), _i91 = cn(_i91, n, s, 1, e, r, o, t.parentNode, sn, xc, t, wc), tn());
        },
        i: function i(e) {
          if (!n) {
            for (var _e175 = 0; _e175 < r.length; _e175 += 1) nn(_i91[_e175]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e176 = 0; _e176 < _i91.length; _e176 += 1) on(_i91[_e176]);
          n = !1;
        },
        d: function d(e) {
          for (var _t84 = 0; _t84 < _i91.length; _t84 += 1) _i91[_t84].d(e);
          e && _t(t);
        }
      };
    }
    function jc(e) {
      var t, n;
      return t = new Ys({
        props: {
          type: "flip",
          $$slots: {
            "default": [Cc]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref86) {
          var _ref87 = (0, _slicedToArray2["default"])(_ref86, 1),
            n = _ref87[0];
          var i = {};
          515 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Ic(e, t, n) {
      var i,
        o = t.customisations,
        r = t.customise;
      function s(e, t) {
        var n = e + "Flip";
        return {
          prop: n,
          icon: e + "-flip",
          key: e + "Flip" + (t ? "!" : ""),
          title: xn.footerOptionButtons[n]
        };
      }
      function c(e) {
        r(e, !o[e]);
      }
      return e.$$set = function (e) {
        "customisations" in e && n(0, o = e.customisations), "customise" in e && n(3, r = e.customise);
      }, e.$$.update = function () {
        1 & e.$$.dirty && n(1, i = [s("h", o.hFlip), s("v", o.vFlip)]);
      }, [o, i, c, r, function (e) {
        return c(e.prop);
      }];
    }
    var Pc = /*#__PURE__*/function (_mn42) {
      (0, _inherits2["default"])(Pc, _mn42);
      var _super49 = _createSuper(Pc);
      function Pc(e) {
        var _this60;
        (0, _classCallCheck2["default"])(this, Pc);
        _this60 = _super49.call(this), gn((0, _assertThisInitialized2["default"])(_this60), e, Ic, jc, mt, {
          customisations: 0,
          customise: 3
        });
        return _this60;
      }
      return (0, _createClass2["default"])(Pc);
    }(mn);
    function Oc(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        _c32 = function (e) {
          var t, n;
          return t = new nc({
            props: {
              icons: e[0],
              value: "string" == typeof e[1].color ? e[1].color : "",
              customise: e[2]
            }
          }), {
            c: function c() {
              fn(t.$$.fragment);
            },
            m: function m(e, i) {
              dn(t, e, i), n = !0;
            },
            p: function p(e, n) {
              var i = {};
              1 & n && (i.icons = e[0]), 2 & n && (i.value = "string" == typeof e[1].color ? e[1].color : ""), 4 & n && (i.customise = e[2]), t.$set(i);
            },
            i: function i(e) {
              n || (nn(t.$$.fragment, e), n = !0);
            },
            o: function o(e) {
              on(t.$$.fragment, e), n = !1;
            },
            d: function d(e) {
              pn(t, e);
            }
          };
        }(e),
        l = function (e) {
          var t, n;
          return t = new fc({
            props: {
              icons: e[0],
              customisations: e[1],
              customise: e[2]
            }
          }), {
            c: function c() {
              fn(t.$$.fragment);
            },
            m: function m(e, i) {
              dn(t, e, i), n = !0;
            },
            p: function p(e, n) {
              var i = {};
              1 & n && (i.icons = e[0]), 2 & n && (i.customisations = e[1]), 4 & n && (i.customise = e[2]), t.$set(i);
            },
            i: function i(e) {
              n || (nn(t.$$.fragment, e), n = !0);
            },
            o: function o(e) {
              on(t.$$.fragment, e), n = !1;
            },
            d: function d(e) {
              pn(t, e);
            }
          };
        }(e),
        a = function (e) {
          var t, n;
          return t = new Pc({
            props: {
              customisations: e[1],
              customise: e[2]
            }
          }), {
            c: function c() {
              fn(t.$$.fragment);
            },
            m: function m(e, i) {
              dn(t, e, i), n = !0;
            },
            p: function p(e, n) {
              var i = {};
              2 & n && (i.customisations = e[1]), 4 & n && (i.customise = e[2]), t.$set(i);
            },
            i: function i(e) {
              n || (nn(t.$$.fragment, e), n = !0);
            },
            o: function o(e) {
              on(t.$$.fragment, e), n = !1;
            },
            d: function d(e) {
              pn(t, e);
            }
          };
        }(e),
        u = function (e) {
          var t, n;
          return t = new _c({
            props: {
              value: e[1].rotate,
              customise: e[2]
            }
          }), {
            c: function c() {
              fn(t.$$.fragment);
            },
            m: function m(e, i) {
              dn(t, e, i), n = !0;
            },
            p: function p(e, n) {
              var i = {};
              2 & n && (i.value = e[1].rotate), 4 & n && (i.customise = e[2]), t.$set(i);
            },
            i: function i(e) {
              n || (nn(t.$$.fragment, e), n = !0);
            },
            o: function o(e) {
              on(t.$$.fragment, e), n = !1;
            },
            d: function d(e) {
              pn(t, e);
            }
          };
        }(e);
      return {
        c: function c() {
          t = xt("div"), _c32 && _c32.c(), n = jt(), l && l.c(), i = jt(), a && a.c(), o = jt(), u && u.c(), r = jt();
        },
        m: function m(e, f) {
          kt(e, t, f), _c32 && _c32.m(t, null), bt(t, n), l && l.m(t, null), bt(t, i), a && a.m(t, null), bt(t, o), u && u.m(t, null), bt(t, r), s = !0;
        },
        p: function p(e, t) {
          _c32.p(e, t), l.p(e, t), a.p(e, t), u.p(e, t);
        },
        i: function i(e) {
          s || (nn(_c32), nn(l), nn(a), nn(u), nn(false), s = !0);
        },
        o: function o(e) {
          on(_c32), on(l), on(a), on(u), on(false), s = !1;
        },
        d: function d(e) {
          e && _t(t), _c32 && _c32.d(), l && l.d(), a && a.d(), u && u.d();
        }
      };
    }
    function Sc(e) {
      var t, n;
      return t = new Hs({
        props: {
          name: "props",
          title: e[3],
          $$slots: {
            "default": [Oc]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref88) {
          var _ref89 = (0, _slicedToArray2["default"])(_ref88, 1),
            n = _ref89[0];
          var i = {};
          8 & n && (i.title = e[3]), 23 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Ec(e, t, n) {
      var i,
        o = t.icons,
        r = t.customisations,
        s = t.customise;
      return e.$$set = function (e) {
        "icons" in e && n(0, o = e.icons), "customisations" in e && n(1, r = e.customisations), "customise" in e && n(2, s = e.customise);
      }, e.$$.update = function () {
        1 & e.$$.dirty && n(3, i = "");
      }, [o, r, s, i];
    }
    var Mc = /*#__PURE__*/function (_mn43) {
      (0, _inherits2["default"])(Mc, _mn43);
      var _super50 = _createSuper(Mc);
      function Mc(e) {
        var _this61;
        (0, _classCallCheck2["default"])(this, Mc);
        _this61 = _super50.call(this), gn((0, _assertThisInitialized2["default"])(_this61), e, Ec, Sc, mt, {
          icons: 0,
          customisations: 1,
          customise: 2
        });
        return _this61;
      }
      return (0, _createClass2["default"])(Mc);
    }(mn);
    function Tc(e, t, n, i) {
      return e && t ? {
        width: i ? t : e,
        height: i ? e : t
      } : (t ? e = ae(t, i ? 1 / n : n) : t = ae(e, i ? n : 1 / n), {
        width: e,
        height: t
      });
    }
    function Ac(e) {
      var t, n, _i92;
      var o = [{
        icon: e[0].name
      }, e[2]];
      var r = {};
      for (var _e177 = 0; _e177 < o.length; _e177 += 1) r = ft(r, o[_e177]);
      return n = new $e({
        props: r
      }), {
        c: function c() {
          t = xt("div"), fn(n.$$.fragment), St(t, "class", "iif-footer-sample iif-footer-sample--block iif-footer-sample--loaded"), St(t, "style", e[1]);
        },
        m: function m(e, o) {
          kt(e, t, o), dn(n, t, null), _i92 = !0;
        },
        p: function p(e, _ref90) {
          var _ref91 = (0, _slicedToArray2["default"])(_ref90, 1),
            r = _ref91[0];
          var s = 5 & r ? ln(o, [1 & r && {
            icon: e[0].name
          }, 4 & r && an(e[2])]) : {};
          n.$set(s), (!_i92 || 2 & r) && St(t, "style", e[1]);
        },
        i: function i(e) {
          _i92 || (nn(n.$$.fragment, e), _i92 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i92 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n);
        }
      };
    }
    function Rc(e, t, n) {
      var i = t.icon,
        o = t.customisations;
      var r = [2.5, 3, 3.5],
        s = kn,
        c = _n,
        l = Math.floor(s / 2),
        a = Math.floor(c / 2);
      function u(e, t) {
        for (; e.width > s || e.height > c;) {
          var _t85 = e.width / 2,
            _n73 = e.height / 2;
          if (Math.round(_t85) !== _t85 || Math.round(_n73) !== _n73) for (var _i93 = 0; _i93 < r.length; _i93++) {
            var _o63 = r[_i93],
              _s14 = e.width / _o63,
              _c33 = e.height / _o63;
            if (Math.round(_s14) === _s14 && Math.round(_c33) === _c33) {
              _t85 = _s14, _n73 = _c33;
              break;
            }
          }
          e.width = _t85, e.height = _n73;
        }
        if (t) for (; e.width < l && e.height < a;) e.width *= 2, e.height *= 2;
      }
      var f, d, p;
      return e.$$set = function (e) {
        "icon" in e && n(3, i = e.icon), "customisations" in e && n(4, o = e.customisations);
      }, e.$$.update = function () {
        if (24 & e.$$.dirty) {
          var _e178 = tt.iconToString(i),
            _t86 = we.Iconify.getIcon(_e178),
            _r15 = !(_t86.width === _t86.height || !o.rotate || o.rotate % 2 != 1),
            _s15 = _t86.width / _t86.height;
          n(0, f = {
            name: _e178,
            data: _t86,
            rotated: _r15,
            ratio: _s15
          });
        }
        if (19 & e.$$.dirty && (n(1, d = ""), o.color ? n(1, d += "color: " + o.color + ";") : n(1, d += "color: #000;"), !o.width && !o.height)) {
          var _e179;
          _e179 = Tc(f.data.width, f.data.height, f.ratio, f.rotated), u(_e179, !0), n(1, d += "font-size: " + _e179.height + "px;");
        }
        if (17 & e.$$.dirty) {
          var _e180;
          n(2, p = {}), ["hFlip", "vFlip", "rotate"].forEach(function (e) {
            var t = e;
            o[t] && n(2, p[t] = o[t], p);
          });
          var _t87 = o.width,
            _i94 = o.height;
          (_t87 || _i94) && (_e180 = Tc(_t87 || "", _i94 || "", f.ratio, f.rotated)), void 0 !== _e180 && (u(_e180, !1), n(2, p.width = _e180.width + "", p), n(2, p.height = _e180.height + "", p));
        }
      }, [f, d, p, i, o];
    }
    var Fc = /*#__PURE__*/function (_mn44) {
      (0, _inherits2["default"])(Fc, _mn44);
      var _super51 = _createSuper(Fc);
      function Fc(e) {
        var _this62;
        (0, _classCallCheck2["default"])(this, Fc);
        _this62 = _super51.call(this), gn((0, _assertThisInitialized2["default"])(_this62), e, Rc, Ac, mt, {
          icon: 3,
          customisations: 4
        });
        return _this62;
      }
      return (0, _createClass2["default"])(Fc);
    }(mn);
    function Lc(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        _c34,
        l,
        a,
        u = e[2].before + "",
        f = e[2].after + "";
      var d = [e[0]];
      var p = {};
      for (var _e181 = 0; _e181 < d.length; _e181 += 1) p = ft(p, d[_e181]);
      return s = new $e({
        props: p
      }), {
        c: function c() {
          t = xt("div"), n = xt("p"), i = Ct(u), o = jt(), r = xt("span"), fn(s.$$.fragment), _c34 = jt(), l = Ct(f), St(r, "style", e[1]), St(t, "class", "iif-footer-sample iif-footer-sample--inline iif-footer-sample--loaded");
        },
        m: function m(e, u) {
          kt(e, t, u), bt(t, n), bt(n, i), bt(n, o), bt(n, r), dn(s, r, null), bt(n, _c34), bt(n, l), a = !0;
        },
        p: function p(e, _ref92) {
          var _ref93 = (0, _slicedToArray2["default"])(_ref92, 1),
            t = _ref93[0];
          var n = 1 & t ? ln(d, [an(e[0])]) : {};
          s.$set(n), (!a || 2 & t) && St(r, "style", e[1]);
        },
        i: function i(e) {
          a || (nn(s.$$.fragment, e), a = !0);
        },
        o: function o(e) {
          on(s.$$.fragment, e), a = !1;
        },
        d: function d(e) {
          e && _t(t), pn(s);
        }
      };
    }
    function Nc(e, t, n) {
      var i = t.icon,
        o = t.customisations;
      var r = xn.footer.inlineSample,
        s = kn,
        c = _n;
      var l, a;
      return e.$$set = function (e) {
        "icon" in e && n(3, i = e.icon), "customisations" in e && n(4, o = e.customisations);
      }, e.$$.update = function () {
        if (25 & e.$$.dirty && (n(0, l = {
          icon: tt.iconToString(i)
        }), n(1, a = ""), Object.keys(o).forEach(function (e) {
          var t = e,
            i = o[t];
          void 0 !== i && "" !== i && 0 !== i && !1 !== i && ("color" === t ? n(1, a = "color: " + i + ";") : n(0, l[t] = i, l));
        }), l.width || l.height)) {
          var _e182 = !!(o.rotate % 2);
          var _t88 = _e182 ? "height" : "width";
          l[_t88] && l[_t88] > s && n(0, l[_t88] = s, l), _t88 = _e182 ? "width" : "height", l[_t88] && l[_t88] > c && n(0, l[_t88] = c, l);
        }
      }, [l, a, r, i, o];
    }
    var Bc = /*#__PURE__*/function (_mn45) {
      (0, _inherits2["default"])(Bc, _mn45);
      var _super52 = _createSuper(Bc);
      function Bc(e) {
        var _this63;
        (0, _classCallCheck2["default"])(this, Bc);
        _this63 = _super52.call(this), gn((0, _assertThisInitialized2["default"])(_this63), e, Nc, Lc, mt, {
          icon: 3,
          customisations: 4
        });
        return _this63;
      }
      return (0, _createClass2["default"])(Bc);
    }(mn);
    function Vc(e, t, n) {
      if (!e) return n;
      switch (e.type) {
        case "collections":
        case "search":
        case "collection":
          break;
        default:
          return n;
      }
      var i = e.params,
        o = i && "string" == typeof i.provider ? i.provider : "";
      return t.provider !== o ? n : "collection" === e.type && t.prefix === e.params.prefix ? t.name : t.prefix + ":" + t.name;
    }
    function Dc(e, t, n) {
      var i = e.slice();
      return i[13] = t[n], i[15] = n, i;
    }
    function zc(e) {
      var t, n, _i95;
      return n = new En({
        props: {
          icon: "reset"
        }
      }), {
        c: function c() {
          t = xt("span"), fn(n.$$.fragment), St(t, "class", "iif-footer-icons-reset");
        },
        m: function m(e, o) {
          kt(e, t, o), dn(n, t, null), _i95 = !0;
        },
        i: function i(e) {
          _i95 || (nn(n.$$.fragment, e), _i95 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _i95 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n);
        }
      };
    }
    function qc(e) {
      var t, n, i, _o64, r, s;
      function c() {
        return e[10](e[13]);
      }
      return n = new En({
        props: {
          icon: "reset"
        }
      }), {
        c: function c() {
          t = xt("a"), fn(n.$$.fragment), St(t, "href", "# "), St(t, "class", "iif-footer-icons-reset"), St(t, "title", i = e[13].removeTitle);
        },
        m: function m(e, i) {
          kt(e, t, i), dn(n, t, null), _o64 = !0, r || (s = Pt(t, "click", Ot(c)), r = !0);
        },
        p: function p(n, r) {
          e = n, (!_o64 || 2 & r && i !== (i = e[13].removeTitle)) && St(t, "title", i);
        },
        i: function i(e) {
          _o64 || (nn(n.$$.fragment, e), _o64 = !0);
        },
        o: function o(e) {
          on(n.$$.fragment, e), _o64 = !1;
        },
        d: function d(e) {
          e && _t(t), pn(n), r = !1, s();
        }
      };
    }
    function Uc(e, t) {
      var n, i, _o65, r, s, _c35, l, a, u, f;
      var d = [{
        icon: t[13].name
      }, t[2]];
      var p = {};
      for (var _e183 = 0; _e183 < d.length; _e183 += 1) p = ft(p, d[_e183]);
      _o65 = new $e({
        props: p
      });
      var h = !t[0] && zc();
      function g() {
        return t[9](t[13]);
      }
      var _m4 = t[0] && qc(t);
      return {
        key: e,
        first: null,
        c: function c() {
          n = xt("li"), i = xt("a"), fn(_o65.$$.fragment), r = jt(), h && h.c(), _c35 = jt(), _m4 && _m4.c(), l = jt(), St(i, "href", "# "), St(i, "title", s = t[13].selectTitle), this.first = n;
        },
        m: function m(e, t) {
          kt(e, n, t), bt(n, i), dn(_o65, i, null), bt(i, r), h && h.m(i, null), bt(n, _c35), _m4 && _m4.m(n, null), bt(n, l), a = !0, u || (f = Pt(i, "click", Ot(g)), u = !0);
        },
        p: function p(e, r) {
          t = e;
          var c = 6 & r ? ln(d, [2 & r && {
            icon: t[13].name
          }, 4 & r && an(t[2])]) : {};
          _o65.$set(c), t[0] ? h && (en(), on(h, 1, 1, function () {
            h = null;
          }), tn()) : h ? 1 & r && nn(h, 1) : (h = zc(), h.c(), nn(h, 1), h.m(i, null)), (!a || 2 & r && s !== (s = t[13].selectTitle)) && St(i, "title", s), t[0] ? _m4 ? (_m4.p(t, r), 1 & r && nn(_m4, 1)) : (_m4 = qc(t), _m4.c(), nn(_m4, 1), _m4.m(n, l)) : _m4 && (en(), on(_m4, 1, 1, function () {
            _m4 = null;
          }), tn());
        },
        i: function i(e) {
          a || (nn(_o65.$$.fragment, e), nn(h), nn(_m4), a = !0);
        },
        o: function o(e) {
          on(_o65.$$.fragment, e), on(h), on(_m4), a = !1;
        },
        d: function d(e) {
          e && _t(n), pn(_o65), h && h.d(), _m4 && _m4.d(), u = !1, f();
        }
      };
    }
    function Hc(e) {
      var t,
        n,
        _i96 = [],
        o = new Map(),
        r = e[1];
      var s = function s(e) {
        return e[13].name;
      };
      for (var _t89 = 0; _t89 < r.length; _t89 += 1) {
        var _n74 = Dc(e, r, _t89),
          _c36 = s(_n74);
        o.set(_c36, _i96[_t89] = Uc(_c36, _n74));
      }
      return {
        c: function c() {
          t = xt("ul");
          for (var _e184 = 0; _e184 < _i96.length; _e184 += 1) _i96[_e184].c();
          St(t, "class", "iif-footer-icons"), St(t, "style", e[3]);
        },
        m: function m(e, o) {
          kt(e, t, o);
          for (var _e185 = 0; _e185 < _i96.length; _e185 += 1) _i96[_e185].m(t, null);
          n = !0;
        },
        p: function p(e, c) {
          23 & c && (r = e[1], en(), _i96 = cn(_i96, c, s, 1, e, r, o, t, sn, Uc, null, Dc), tn()), (!n || 8 & c) && St(t, "style", e[3]);
        },
        i: function i(e) {
          if (!n) {
            for (var _e186 = 0; _e186 < r.length; _e186 += 1) nn(_i96[_e186]);
            n = !0;
          }
        },
        o: function o(e) {
          for (var _e187 = 0; _e187 < _i96.length; _e187 += 1) on(_i96[_e187]);
          n = !1;
        },
        d: function d(e) {
          e && _t(t);
          for (var _e188 = 0; _e188 < _i96.length; _e188 += 1) _i96[_e188].d();
        }
      };
    }
    function Kc(e) {
      var t, n;
      return t = new Ys({
        props: {
          type: "icons",
          $$slots: {
            "default": [Hc]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref94) {
          var _ref95 = (0, _slicedToArray2["default"])(_ref94, 1),
            n = _ref95[0];
          var i = {};
          65551 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function Gc(e, t, n) {
      var i = t.icons,
        o = t.customisations,
        r = t.route,
        _t$selected = t.selected,
        s = _t$selected === void 0 ? "" : _t$selected,
        _t$onSelect = t.onSelect,
        c = _t$onSelect === void 0 ? null : _t$onSelect;
      var l = Bt("registry");
      var a;
      var u = ["rotate", "hFlip", "vFlip"];
      var f, d;
      function p(e, t) {
        e && c ? c(t) : l.callback({
          type: "selection",
          icon: t,
          selected: !1
        });
      }
      return e.$$set = function (e) {
        "icons" in e && n(5, i = e.icons), "customisations" in e && n(6, o = e.customisations), "route" in e && n(7, r = e.route), "selected" in e && n(8, s = e.selected), "onSelect" in e && n(0, c = e.onSelect);
      }, e.$$.update = function () {
        419 & e.$$.dirty && (n(1, a = []), i.forEach(function (e) {
          var t = tt.iconToString(e),
            n = Vc(r, e, t),
            i = xn.footer.remove.replace("{name}", n),
            o = {
              icon: e,
              name: t,
              text: n,
              removeTitle: i,
              selectTitle: c ? xn.footer.select.replace("{name}", n) : i,
              selected: t === s
            };
          a.push(o);
        })), 64 & e.$$.dirty && (n(2, f = {}), u.forEach(function (e) {
          o[e] && n(2, f[e] = o[e], f);
        }), "number" == typeof o.height && o.height < 32 && (n(2, f.height = o.height, f), o.width && n(2, f.width = o.width, f)), n(3, d = ""), "" !== o.color && n(3, d = "color: " + o.color + ";"));
      }, [c, a, f, d, p, i, o, r, s, function (e) {
        p(!0, e.icon);
      }, function (e) {
        p(!1, e.icon);
      }];
    }
    var Jc = /*#__PURE__*/function (_mn46) {
      (0, _inherits2["default"])(Jc, _mn46);
      var _super53 = _createSuper(Jc);
      function Jc(e) {
        var _this64;
        (0, _classCallCheck2["default"])(this, Jc);
        _this64 = _super53.call(this), gn((0, _assertThisInitialized2["default"])(_this64), e, Gc, Kc, mt, {
          icons: 5,
          customisations: 6,
          route: 7,
          selected: 8,
          onSelect: 0
        });
        return _this64;
      }
      return (0, _createClass2["default"])(Jc);
    }(mn);
    function Wc(e) {
      var t, n, i, o, r, s, _c37, l, a, u;
      return r = new $e({
        props: {
          icon: e[0]
        }
      }), {
        c: function c() {
          t = xt("div"), n = xt("dl"), i = xt("dt"), i.textContent = "".concat(xn.footer.iconName), o = xt("dd"), fn(r.$$.fragment), s = jt(), _c37 = xt("div"), l = xt("span"), a = Ct(e[1]), St(_c37, "class", "iif-footer-icon-name-input"), St(t, "class", "iif-footer-icon-name iif-footer-icon-name--simple");
        },
        m: function m(e, f) {
          kt(e, t, f), bt(t, n), bt(n, i), bt(n, o), dn(r, o, null), bt(o, s), bt(o, _c37), bt(_c37, l), bt(l, a), u = !0;
        },
        p: function p(e, _ref96) {
          var _ref97 = (0, _slicedToArray2["default"])(_ref96, 1),
            t = _ref97[0];
          var n = {};
          1 & t && (n.icon = e[0]), r.$set(n), (!u || 2 & t) && Et(a, e[1]);
        },
        i: function i(e) {
          u || (nn(r.$$.fragment, e), u = !0);
        },
        o: function o(e) {
          on(r.$$.fragment, e), u = !1;
        },
        d: function d(e) {
          e && _t(t), pn(r);
        }
      };
    }
    function Qc(e, t, n) {
      var i,
        o,
        r = t.icon,
        s = t.route;
      return e.$$set = function (e) {
        "icon" in e && n(2, r = e.icon), "route" in e && n(3, s = e.route);
      }, e.$$.update = function () {
        13 & e.$$.dirty && (n(0, i = tt.iconToString(r)), n(1, o = Vc(s, r, i)));
      }, [i, o, r, s];
    }
    var Yc = /*#__PURE__*/function (_mn47) {
      (0, _inherits2["default"])(Yc, _mn47);
      var _super54 = _createSuper(Yc);
      function Yc(e) {
        var _this65;
        (0, _classCallCheck2["default"])(this, Yc);
        _this65 = _super54.call(this), gn((0, _assertThisInitialized2["default"])(_this65), e, Qc, Wc, mt, {
          icon: 2,
          route: 3
        });
        return _this65;
      }
      return (0, _createClass2["default"])(Yc);
    }(mn);
    var Xc = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.capitalize = void 0;
        var n = /([0-9]+[0-9.]*)/g;
        t.capitalize = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";
          return e.split(t).map(function (e) {
            return e.split(n).filter(function (e) {
              return e.length > 0;
            }).map(function (e) {
              return e.slice(0, 1).toUpperCase() + e.slice(1);
            }).join(" ");
          }).join(" ");
        };
      }),
      Zc = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.translateCodeSampleTitles = t.codeSampleTitles = void 0, t.codeSampleTitles = {
          iconify: "SVG Framework",
          svg: "SVG",
          "svg-raw": "SVG",
          "svg-box": "SVG with viewBox rectangle",
          "svg-uri": "SVG as data: URI",
          "react-npm": "React",
          "react-api": "React with Iconify API"
        }, t.translateCodeSampleTitles = function (e) {
          for (var _n75 in e) {
            var _i97 = _n75;
            t.codeSampleTitles[_i97] = e[_i97];
          }
        };
      });
    ve(function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getCodeSamplesTree = void 0;
      var n = {
        iconify: "api",
        react: {
          "react-npm": "npm",
          "react-api": "api"
        },
        vue: {
          vue3: "npm",
          vue2: "npm"
        },
        svelte: "npm",
        svg: {
          "svg-raw": "raw",
          "svg-box": "raw",
          "svg-uri": "raw"
        }
      };
      t.getCodeSamplesTree = function (e) {
        var t = [];
        function i(t, n) {
          switch (t) {
            case "svg-box":
            case "svg-raw":
            case "svg-uri":
              if (!we.Iconify.getIcon) return !1;
          }
          switch (n) {
            case "raw":
              return e[n];
            case "api":
              return void 0 !== e.api;
            case "npm":
              return void 0 !== e.npmES || void 0 !== e.npmCJS;
          }
        }
        function o(e) {
          return void 0 !== Zc.codeSampleTitles[e] ? Zc.codeSampleTitles[e] : Xc.capitalize(e);
        }
        for (var _e189 in n) {
          var _r16 = _e189,
            _s16 = n[_e189];
          if ("string" == typeof _s16) {
            var _e190 = _r16;
            if (i(_e190, _s16)) {
              var _n76 = {
                mode: _e190,
                type: _s16,
                title: o(_r16)
              };
              t.push(_n76);
            }
            continue;
          }
          var _c38 = [];
          for (var _e191 in _s16) {
            var _t90 = _e191,
              _n77 = _s16[_t90];
            if (i(_t90, _n77)) {
              var _e192 = {
                mode: _t90,
                type: _n77,
                title: o(_t90)
              };
              _c38.push(_e192);
            }
          }
          var _l9 = void 0;
          var _a = _r16,
            _u = o(_a);
          switch (_c38.length) {
            case 0:
              break;
            case 1:
              _l9 = _c38[0], t.push({
                tab: _a,
                mode: _l9.mode,
                type: _l9.type,
                title: _u
              });
              break;
            default:
              t.push({
                tab: _a,
                children: _c38,
                title: _u
              });
          }
        }
        return t;
      };
    });
    ({
      providers: Object.create(null),
      defaultProvider: {
        raw: !0
      }
    }).providers[""] = {
      api: "",
      npmES: {
        "package": "@iconify-icons/{prefix}",
        file: "/{name}"
      },
      npmCJS: {
        "package": "@iconify/icons-{prefix}",
        file: "/{name}"
      },
      raw: !0
    };
    var el = ve(function (e, t) {
        function n(e) {
          var t = "";
          var n = e.split("-");
          return n.forEach(function (e, n) {
            t += n ? e.slice(0, 1).toUpperCase() + e.slice(1) : e;
          }), t.charCodeAt(0) < 97 || t.charCodeAt(0) > 122 ? t = "icon" + t.slice(0, 1).toUpperCase() + t.slice(1) : n.length < 2 && (t += "Icon"), t;
        }
        function i(e) {
          switch ((0, _typeof2["default"])(e)) {
            case "number":
              return e + "";
            case "string":
              return e;
            default:
              return JSON.stringify(e);
          }
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.codeParser = t.getCustomisationAttributes = t.varName = void 0, t.varName = n;
        var o = ["width", "height", "rotate", "hFlip", "vFlip", "hAlign", "vAlign", "slice"];
        function r(e, t) {
          var n = o.slice(0);
          return e && n.push("color"), t && n.push("inline"), n;
        }
        t.getCustomisationAttributes = r;
        var s = "https://docs.iconify.design/implementations/";
        var c = Object.create(null);
        t.codeParser = function (e) {
          return void 0 === c[e] && (c[e] = function (e) {
            function t(e, t, n) {
              e[t] = {
                key: t,
                value: n
              };
            }
            function o(e, t, n, i) {
              var o;
              switch ((0, _typeof2["default"])(n)) {
                case "boolean":
                  o = n ? "true" : "false";
                  break;
                case "object":
                  o = JSON.stringify(n);
                  break;
                default:
                  o = n;
              }
              e[t] = {
                key: t,
                value: o,
                syntax: i
              };
            }
            function c(e, n, i) {
              "string" == typeof i && "icon" !== n ? t(e, n, i) : o(e, n, i, "{var}={{value}}");
            }
            function l(e, n, i) {
              "string" == typeof i && "icon" !== n ? t(e, n, i) : o(e, n, i, ':{var}="{value}"');
            }
            function a(e, t, n, i) {
              var o = "object" == (0, _typeof2["default"])(e[t]) ? e[t] : void 0;
              e[t] = {
                key: t,
                value: (o ? o.value + i : "") + n,
                syntax: o ? o.syntax : void 0
              };
            }
            function u(e, t, n) {
              return t.forEach(function (t) {
                void 0 === e.parsers[t] && (e.parsers[t] = function (e, i) {
                  return n(e, t, i);
                });
              }), e;
            }
            function f(e) {
              return Object.keys(e).map(function (t) {
                var n = e[t];
                return "object" == (0, _typeof2["default"])(n) ? ("string" == typeof n.syntax ? n.syntax : '{var}="{value}"').replace("{var}", n.key).replace("{value}", n.value) : n;
              }).join(" ");
            }
            function d(e) {
              var t = {
                iconParser: function iconParser(e, t, i) {
                  return l(e, "icon", "icons." + n(i.name));
                },
                parsers: {
                  hFlip: function hFlip(e, t) {
                    return l(e, "horizontalFlip", t);
                  },
                  vFlip: function vFlip(e, t) {
                    return l(e, "verticalFlip", t);
                  },
                  hAlign: function hAlign(e, t) {
                    return l(e, "horizontalAlign", t);
                  },
                  vAlign: function vAlign(e, t) {
                    return l(e, "verticalAlign", t);
                  },
                  inline: function inline(e, t) {
                    return l(e, "inline", t);
                  }
                },
                merge: f,
                template: function template(e, t) {
                  return "<template>\n\t<Icon {attr} />\n</template>".replace("{attr}", e);
                },
                vueTemplate: function vueTemplate(e, t) {
                  return "export default {\n\tcomponents: {\n\t\tIcon,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\ticons: {\n\t\t\t\t{varName},\n\t\t\t},\n\t\t};\n\t},\n});".replace("{attr}", e);
                },
                docs: {
                  type: "vue",
                  href: s + (e ? "vue/" : "vue2/")
                },
                npm: e ? {
                  install: "@iconify/vue@beta",
                  "import": function _import(e, t) {
                    return "import { Icon } from '@iconify/vue';";
                  }
                } : {
                  install: "@iconify/vue@^1",
                  "import": "import Icon from '@iconify/vue';"
                }
              };
              return u(t, r(!0, !1), l), t;
            }
            var p;
            switch (e) {
              case "iconify":
                return {
                  init: function init(e) {
                    return {
                      "class": 'class="' + (e.inline ? "iconify-inline" : "iconify") + '"'
                    };
                  },
                  iconParser: function iconParser(e, n, i) {
                    return t(e, "data-icon", n);
                  },
                  parsers: {
                    color: function color(e, t) {
                      return a(e, "style", "color: " + t + ";", " ");
                    },
                    onlyHeight: function onlyHeight(e, t) {
                      return a(e, "style", "font-size: " + t + (function (e) {
                        return "number" == typeof e || "string" == typeof e && !!e.match(/^-?[0-9.]+$/);
                      }(t) ? "px;" : ";"), " ");
                    },
                    width: function width(e, n) {
                      return t(e, "data-width", i(n));
                    },
                    height: function height(e, n) {
                      return t(e, "data-height", i(n));
                    },
                    rotate: function rotate(e, n) {
                      return t(e, "data-rotate", function (e) {
                        return 90 * e + "deg";
                      }(n));
                    },
                    hFlip: function hFlip(e) {
                      return a(e, "data-flip", "horizontal", ",");
                    },
                    vFlip: function vFlip(e) {
                      return a(e, "data-flip", "vertical", ",");
                    },
                    hAlign: function hAlign(e, t) {
                      return a(e, "data-align", t, ",");
                    },
                    vAlign: function vAlign(e, t) {
                      return a(e, "data-align", t, ",");
                    },
                    slice: function slice(e) {
                      return a(e, "data-align", "slice", ",");
                    }
                  },
                  merge: f,
                  template: "<span {attr}></span>",
                  docs: {
                    type: "iconify",
                    href: s + "svg-framework/"
                  }
                };
              case "svg-raw":
              case "svg-uri":
              case "svg-box":
                return p = {
                  parsers: {}
                }, u(p, r(!1, !0), function (e, t, n) {
                  e[t] = n;
                }), p;
              case "react-npm":
                return p = {
                  iconParser: function iconParser(e, t, i) {
                    return c(e, "icon", n(i.name));
                  },
                  parsers: {},
                  merge: f,
                  template: function template(e, t) {
                    return "<Icon " + e + " />";
                  },
                  docs: {
                    type: "react",
                    href: s + "react/"
                  },
                  npm: {
                    install: "@iconify/react@beta",
                    "import": function _import(e, t) {
                      return "import { Icon } from '@iconify/react';";
                    }
                  }
                }, u(p, r(!0, !0), c), p;
              case "react-api":
                return p = {
                  iconParser: function iconParser(e, n, i) {
                    return t(e, "icon", n);
                  },
                  parsers: {},
                  merge: f,
                  template: function template(e, t) {
                    return "<Icon " + e + " />";
                  },
                  docs: {
                    type: "react",
                    href: s + "react/"
                  },
                  npm: {
                    install: "@iconify/react@alpha",
                    "import": function _import(e, t) {
                      return "import { Icon } from '@iconify/react';";
                    }
                  }
                }, u(p, r(!0, !0), c), p;
              case "vue2":
                return d(!1);
              case "vue3":
                return d(!0);
              case "svelte":
                return p = {
                  iconParser: function iconParser(e, t, i) {
                    return c(e, "icon", n(i.name));
                  },
                  parsers: {},
                  merge: f,
                  template: "<Icon {attr} />",
                  docs: {
                    type: "svelte",
                    href: s + "svelte/"
                  },
                  npm: {
                    install: "@iconify/svelte",
                    "import": "import Icon from '@iconify/svelte';"
                  }
                }, u(p, r(!0, !0), c), p;
            }
          }(e)), c[e];
        };
      }),
      tl = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.calculateSize = void 0;
        var n = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
          i = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
        t.calculateSize = function (e, t, o) {
          if (1 === t) return e;
          if (o = void 0 === o ? 100 : o, "number" == typeof e) return Math.ceil(e * t * o) / o;
          if ("string" != typeof e) return e;
          var r = e.split(n);
          if (null === r || !r.length) return e;
          var s = [];
          var c = r.shift(),
            l = i.test(c);
          for (;;) {
            if (l) {
              var _e193 = parseFloat(c);
              isNaN(_e193) ? s.push(c) : s.push(Math.ceil(_e193 * t * o) / o);
            } else s.push(c);
            if (c = r.shift(), void 0 === c) return s.join("");
            l = !l;
          }
        };
      }),
      nl = ve(function (e, t) {
        function n(e) {
          var t = "";
          switch (e.hAlign) {
            case "left":
              t += "xMin";
              break;
            case "right":
              t += "xMax";
              break;
            default:
              t += "xMid";
          }
          switch (e.vAlign) {
            case "top":
              t += "YMin";
              break;
            case "bottom":
              t += "YMax";
              break;
            default:
              t += "YMid";
          }
          return t += e.slice ? " slice" : " meet", t;
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.iconToSVG = void 0, t.iconToSVG = function (e, t) {
          var i = {
            left: e.left,
            top: e.top,
            width: e.width,
            height: e.height
          };
          var o,
            r,
            s = e.body;
          [e, t].forEach(function (e) {
            var t = [],
              n = e.hFlip,
              o = e.vFlip;
            var r,
              c = e.rotate;
            switch (n ? o ? c += 2 : (t.push("translate(" + (i.width + i.left) + " " + (0 - i.top) + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : o && (t.push("translate(" + (0 - i.left) + " " + (i.height + i.top) + ")"), t.push("scale(1 -1)"), i.top = i.left = 0), c < 0 && (c -= 4 * Math.floor(c / 4)), c %= 4, c) {
              case 1:
                r = i.height / 2 + i.top, t.unshift("rotate(90 " + r + " " + r + ")");
                break;
              case 2:
                t.unshift("rotate(180 " + (i.width / 2 + i.left) + " " + (i.height / 2 + i.top) + ")");
                break;
              case 3:
                r = i.width / 2 + i.left, t.unshift("rotate(-90 " + r + " " + r + ")");
            }
            c % 2 == 1 && (0 === i.left && 0 === i.top || (r = i.left, i.left = i.top, i.top = r), i.width !== i.height && (r = i.width, i.width = i.height, i.height = r)), t.length && (s = '<g transform="' + t.join(" ") + '">' + s + "</g>");
          }), null === t.width && null === t.height ? (r = "1em", o = tl.calculateSize(r, i.width / i.height)) : null !== t.width && null !== t.height ? (o = t.width, r = t.height) : null !== t.height ? (r = t.height, o = tl.calculateSize(r, i.width / i.height)) : (o = t.width, r = tl.calculateSize(o, i.height / i.width)), "auto" === o && (o = i.width), "auto" === r && (r = i.height), o = "string" == typeof o ? o : o + "", r = "string" == typeof r ? r : r + "";
          var c = {
            attributes: {
              width: o,
              height: r,
              preserveAspectRatio: n(t),
              viewBox: i.left + " " + i.top + " " + i.width + " " + i.height
            },
            body: s
          };
          return t.inline && (c.inline = !0), c;
        };
      }),
      il = ve(function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.renderHTML = void 0, t.renderHTML = function (e, t, n) {
          var i = nl.iconToSVG(e, t),
            o = [];
          t.inline && o.push("vertical-align: -0.125em");
          var r = {};
          "string" == typeof n && "" !== n && (r["class"] = n), o.length && (r.style = o.join("; ") + ";");
          var s = _objectSpread(_objectSpread({
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "aria-hidden": "true",
            role: "img"
          }, r), i.attributes);
          var c = i.body;
          return "" !== t.color && (c = c.replace(/currentColor/g, t.color)), "<svg " + Object.keys(s).map(function (e) {
            return e + '="' + s[e] + '"';
          }).join(" ") + ">" + c + "</svg>";
        };
      });
    function ol(e) {
      var t, n;
      return t = new zn({
        props: {
          type: "footer",
          $$slots: {
            "default": [pl]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          767 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function rl(e) {
      var t, n, i, _o66;
      var r = [cl, sl],
        s = [];
      return t = 1, n = s[t] = r[t](e), {
        c: function c() {
          n.c(), i = It();
        },
        m: function m(e, n) {
          s[t].m(e, n), kt(e, i, n), _o66 = !0;
        },
        p: function p(e, o) {
          var c = t;
          t = 1, t === c ? s[t].p(e, o) : (en(), on(s[c], 1, 1, function () {
            s[c] = null;
          }), tn(), n = s[t], n ? n.p(e, o) : (n = s[t] = r[t](e), n.c()), nn(n, 1), n.m(i.parentNode, i));
        },
        i: function i(e) {
          _o66 || (nn(n), _o66 = !0);
        },
        o: function o(e) {
          on(n), _o66 = !1;
        },
        d: function d(e) {
          s[t].d(e), e && _t(i);
        }
      };
    }
    function sl(e) {
      var t, n;
      return t = new Fc({
        props: {
          icon: e[4],
          customisations: e[2]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          16 & n && (i.icon = e[4]), 4 & n && (i.customisations = e[2]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function cl(e) {
      var t, n;
      return t = new Bc({
        props: {
          icon: e[4],
          customisations: e[2]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          16 & n && (i.icon = e[4]), 4 & n && (i.customisations = e[2]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function ll(e) {
      var t, n;
      return t = new Jc({
        props: {
          route: e[3],
          icons: e[0],
          customisations: e[2]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          8 & n && (i.route = e[3]), 1 & n && (i.icons = e[0]), 4 & n && (i.customisations = e[2]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function al(e) {
      var t, n;
      return t = new Yc({
        props: {
          icon: e[4],
          route: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          16 & n && (i.icon = e[4]), 8 & n && (i.route = e[3]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function ul(e) {
      var t, n;
      return t = new Hs({
        props: {
          name: "info",
          title: e[7],
          $$slots: {
            "default": [fl]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          128 & n && (i.title = e[7]), 576 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function fl(e) {
      var t, n;
      return t = new Do({
        props: {
          name: "info",
          block: e[6],
          "short": !0,
          showTitle: !1
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          64 & n && (i.block = e[6]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function dl(e) {
      var t, n;
      return t = new Mc({
        props: {
          icons: e[0],
          customise: e[1],
          customisations: e[2]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          1 & n && (i.icons = e[0]), 2 & n && (i.customise = e[1]), 4 & n && (i.customisations = e[2]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function pl(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        _c39,
        l,
        a,
        u,
        f,
        d,
        _p2 = e[4] && rl(e);
      var h = [al, ll],
        g = [];
      function m(e, t) {
        return e[4] ? 0 : e[5] ? 1 : -1;
      }
      ~(o = m(e)) && (r = g[o] = h[o](e));
      var y = e[6] && ul(e),
        $ = e[5] && dl(e),
        v = function (e) {
          var t, n;
          return t = new Fs({
            props: {
              icons: e[0],
              route: e[3]
            }
          }), {
            c: function c() {
              fn(t.$$.fragment);
            },
            m: function m(e, i) {
              dn(t, e, i), n = !0;
            },
            p: function p(e, n) {
              var i = {};
              1 & n && (i.icons = e[0]), 8 & n && (i.route = e[3]), t.$set(i);
            },
            i: function i(e) {
              n || (nn(t.$$.fragment, e), n = !0);
            },
            o: function o(e) {
              on(t.$$.fragment, e), n = !1;
            },
            d: function d(e) {
              pn(t, e);
            }
          };
        }(e);
      return {
        c: function c() {
          t = xt("div"), _p2 && _p2.c(), n = jt(), i = xt("div"), r && r.c(), s = jt(), y && y.c(), _c39 = jt(), $ && $.c(), l = jt(), a = jt(), v && v.c(), St(i, "class", u = e[4] ? "iif-footer-full-content" : ""), St(t, "class", f = e[4] ? "iif-footer-full" : "");
        },
        m: function m(e, r) {
          kt(e, t, r), _p2 && _p2.m(t, null), bt(t, n), bt(t, i), ~o && g[o].m(i, null), bt(i, s), y && y.m(i, null), bt(i, _c39), $ && $.m(i, null), bt(i, l), bt(i, a), v && v.m(i, null), d = !0;
        },
        p: function p(e, a) {
          e[4] ? _p2 ? (_p2.p(e, a), 16 & a && nn(_p2, 1)) : (_p2 = rl(e), _p2.c(), nn(_p2, 1), _p2.m(t, n)) : _p2 && (en(), on(_p2, 1, 1, function () {
            _p2 = null;
          }), tn());
          var b = o;
          o = m(e), o === b ? ~o && g[o].p(e, a) : (r && (en(), on(g[b], 1, 1, function () {
            g[b] = null;
          }), tn()), ~o ? (r = g[o], r ? r.p(e, a) : (r = g[o] = h[o](e), r.c()), nn(r, 1), r.m(i, s)) : r = null), e[6] ? y ? (y.p(e, a), 64 & a && nn(y, 1)) : (y = ul(e), y.c(), nn(y, 1), y.m(i, _c39)) : y && (en(), on(y, 1, 1, function () {
            y = null;
          }), tn()), e[5] ? $ ? ($.p(e, a), 32 & a && nn($, 1)) : ($ = dl(e), $.c(), nn($, 1), $.m(i, l)) : $ && (en(), on($, 1, 1, function () {
            $ = null;
          }), tn()), v.p(e, a), (!d || 16 & a && u !== (u = e[4] ? "iif-footer-full-content" : "")) && St(i, "class", u), (!d || 16 & a && f !== (f = e[4] ? "iif-footer-full" : "")) && St(t, "class", f);
        },
        i: function i(e) {
          d || (nn(_p2), nn(r), nn(y), nn($), nn(false), nn(v), d = !0);
        },
        o: function o(e) {
          on(_p2), on(r), on(y), on($), on(false), on(v), d = !1;
        },
        d: function d(e) {
          e && _t(t), _p2 && _p2.d(), ~o && g[o].d(), y && y.d(), $ && $.d(), v && v.d();
        }
      };
    }
    function hl(e) {
      var t,
        n,
        _i98 = ol(e);
      return {
        c: function c() {
          _i98 && _i98.c(), t = It();
        },
        m: function m(e, o) {
          _i98 && _i98.m(e, o), kt(e, t, o), n = !0;
        },
        p: function p(e, _ref98) {
          var _ref99 = (0, _slicedToArray2["default"])(_ref98, 1),
            n = _ref99[0];
          _i98 ? (_i98.p(e, n), 32 & n && nn(_i98, 1)) : (_i98 = ol(e), _i98.c(), nn(_i98, 1), _i98.m(t.parentNode, t));
        },
        i: function i(e) {
          n || (nn(_i98), n = !0);
        },
        o: function o(e) {
          on(_i98), n = !1;
        },
        d: function d(e) {
          _i98 && _i98.d(e), e && _t(t);
        }
      };
    }
    function gl(e, t, n) {
      var i = t.icons,
        o = t.customise,
        r = t.customisations,
        s = t.route;
      var c = Bt("registry");
      var l, a, u, f;
      return e.$$set = function (e) {
        "icons" in e && n(0, i = e.icons), "customise" in e && n(1, o = e.customise), "customisations" in e && n(2, r = e.customisations), "route" in e && n(3, s = e.route);
      }, e.$$.update = function () {
        if (1 & e.$$.dirty && (n(5, a = i.length > 0), n(4, l = 1 === i.length ? i[0] : null)), 25 & e.$$.dirty) {
          var _e194 = !0,
            _t91 = "",
            _o67 = "";
          if (i.length) {
            if (l) _t91 = l.provider, _o67 = l.prefix;else for (var _n78 = 0; _n78 < i.length; _n78++) {
              var _r17 = i[_n78];
              if (_n78) {
                if (_r17.provider !== _t91 || _r17.prefix !== _o67) {
                  _e194 = !1;
                  break;
                }
              } else _o67 = _r17.prefix, _t91 = _r17.provider;
            }
          } else _e194 = !1;
          if (_e194 && "collection" === s.type && _t91 === s.params.provider && _o67 === s.params.prefix && (_e194 = !1), _e194) {
            var _e195 = tt.getCollectionInfo(c.collections, _t91, _o67);
            _e195 ? (n(6, u = {
              type: "collection-info",
              prefix: _o67,
              info: _e195
            }), n(7, f = xn.footer.about.replace("{title}", _e195.name))) : (n(6, u = null), n(7, f = ""));
          } else n(6, u = null), n(7, f = "");
        }
      }, [i, o, r, s, l, a, u, f];
    }
    ve(function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getIconCode = t.codeOutputComponentKeys = void 0;
      function n(e, t, n) {
        return "string" == typeof e ? e.replace("{attr}", t) : e(t, n);
      }
      t.codeOutputComponentKeys = ["install", "install1", "import", "import1", "vue", "use"], t.getIconCode = function (e, t, i, o) {
        var r;
        var s = el.codeParser(e);
        if (!s) return null;
        var c = Ge.iconToString(t),
          l = s.init ? s.init(i) : {},
          a = s.parsers;
        s.iconParser && s.iconParser(l, c, t), "" !== i.color && a.color && a.color(l, i.color), "" === i.width && "" !== i.height && a.onlyHeight ? a.onlyHeight(l, i.height) : ["width", "height"].forEach(function (e) {
          var t = e,
            n = i[t];
          null !== n && "" !== n && a[t] && a[t](l, n);
        }), ["rotate", "hFlip", "vFlip", "hAlign", "vAlign", "slice"].forEach(function (e) {
          var t = e,
            n = i[t];
          void 0 !== n && n !== it.emptyCustomisations[t] && a[t] && a[t](l, n);
        }), i.inline && a.inline && a.inline(l, !0);
        var u = s.merge ? s.merge(l) : "",
          f = s.template ? n(s.template, u, i) : "",
          d = {
            docs: s.docs
          };
        switch (e) {
          case "iconify":
            {
              var _e196 = we.Iconify.getVersion ? we.Iconify.getVersion() : "2.0.1";
              return d.iconify = {
                head: '<script src="https://code.iconify.design/' + _e196.split(".").shift() + "/" + _e196 + '/iconify.min.js"><\/script>',
                html: f
              }, d;
            }
          case "svg-raw":
          case "svg-box":
          case "svg-uri":
            {
              var _t92 = null === (r = we.Iconify.getIcon) || void 0 === r ? void 0 : r.call(we.Iconify, c);
              if (!_t92) return null;
              var _n79 = il.renderHTML(_t92, i);
              if ("svg-box" === e) {
                if (!_t92) return null;
                _n79 = _n79.replace(">", '><rect x="' + _t92.left + '" y="' + _t92.top + '" width="' + _t92.width + '" height="' + _t92.height + '" fill="none" stroke="none" />');
              }
              if ("svg-uri" === e) {
                var _e197 = _n79.split(">");
                var _t93 = _e197.shift();
                ["aria-hidden", "focusable", "role", "class", "style"].forEach(function (e) {
                  _t93 = _t93.replace(new RegExp("\\s" + e + '="[^"]*"'), "");
                }), _e197.unshift(_t93), _n79 = _e197.join(">"), _n79 = "url('data:image/svg+xml," + encodeURIComponent(_n79) + "')";
              }
              return d.raw = [_n79], d;
            }
          case "react-npm":
          case "svelte":
          case "vue2":
          case "vue3":
            {
              if (!s.npm || !o.npmCJS && !o.npmES) return null;
              var _r18 = function (e) {
                var n = el.varName(t.name),
                  i = e ? o.npmES ? o.npmES : o.npmCJS : o.npmCJS ? o.npmCJS : o.npmES;
                if (!i) return null;
                var r = "string" == typeof i["package"] ? i["package"].replace("{prefix}", t.prefix) : "function" == typeof i["package"] ? i["package"](o, t) : null;
                if ("string" != typeof r) return null;
                var s = "string" == typeof i.file ? i.file.replace("{name}", t.name) : "function" == typeof i.file ? i.file(o, t) : null;
                return "string" != typeof s ? null : {
                  name: n,
                  "package": r,
                  file: s
                };
              }("vue3" === e);
              if (!_r18) return null;
              if (d.component = {
                install: "npm install --save-dev " + s.npm.install + " " + _r18["package"],
                "import": n(s.npm["import"], u, i) + "\nimport " + _r18.name + " from '" + _r18["package"] + _r18.file + "';",
                use: f.replace(/{varName}/g, _r18.name).replace("{iconPackage}", _r18["package"] + _r18.file)
              }, void 0 !== s.vueTemplate) {
                var _e198 = "function" == typeof s.vueTemplate ? n(s.vueTemplate, u, i) : s.vueTemplate;
                "string" == typeof _e198 && (d.component.vue = _e198.replace(/{varName}/g, _r18.name).replace("{iconPackage}", _r18["package"] + _r18.file));
              }
              return d;
            }
          case "react-api":
            return s.npm ? (d.component = {
              install1: "npm install --save-dev " + s.npm.install,
              import1: n(s.npm["import"], u, i),
              use: f
            }, d) : null;
        }
      };
    });
    var ml = /*#__PURE__*/function (_mn48) {
      (0, _inherits2["default"])(ml, _mn48);
      var _super55 = _createSuper(ml);
      function ml(e) {
        var _this66;
        (0, _classCallCheck2["default"])(this, ml);
        _this66 = _super55.call(this), gn((0, _assertThisInitialized2["default"])(_this66), e, gl, hl, mt, {
          icons: 0,
          customise: 1,
          customisations: 2,
          route: 3
        });
        return _this66;
      }
      return (0, _createClass2["default"])(ml);
    }(mn);
    function yl(e) {
      var t, n;
      return t = new ml({
        props: {
          icons: e[2],
          customisations: e[0],
          route: e[1],
          customise: e[3]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, _ref100) {
          var _ref101 = (0, _slicedToArray2["default"])(_ref100, 1),
            n = _ref101[0];
          var i = {};
          4 & n && (i.icons = e[2]), 1 & n && (i.customisations = e[0]), 2 & n && (i.route = e[1]), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function $l(e, t, n) {
      var i = t.selection,
        o = t.selectionLength,
        r = t.customisations,
        s = t.route;
      var c = Bt("registry");
      var l,
        a,
        u = !1,
        f = 0,
        d = null;
      function p() {
        n(7, f++, f);
      }
      return Lt(function () {
        n(6, u = !0);
      }), Nt(function () {
        null !== d && d();
      }), e.$$set = function (e) {
        "selection" in e && n(4, i = e.selection), "selectionLength" in e && n(5, o = e.selectionLength), "customisations" in e && n(0, r = e.customisations), "route" in e && n(1, s = e.route);
      }, e.$$.update = function () {
        if (1012 & e.$$.dirty) {
          n(2, l = []);
          var _e199 = [],
            _t94 = [];
          (o ? st(i) : []).forEach(function (n) {
            var i;
            var o = tt.iconToString(n);
            (null === (i = we.Iconify.getIcon) || void 0 === i ? void 0 : i.call(we.Iconify, o)) ? l.push(n) : d && a && -1 !== a.indexOf(o) ? _e199.push(o) : (_e199.push(o), _t94.push(o));
          }), n(9, a = _e199), _t94.length && u && (null !== d && d(), n(8, d = ue(_t94, p)));
        }
      }, [r, s, l, function (e, t) {
        switch (e) {
          case "width":
          case "height":
            "" !== t && 0 !== t || (t = null);
        }
        if (void 0 !== r[e] && r[e] !== t) {
          var _n80 = (0, _defineProperty2["default"])({}, e, t);
          c.callback({
            type: "customisation",
            changed: _n80,
            customisations: Object.assign(Object.assign({}, r), _n80)
          });
        }
      }, i, o, u, f, d, a];
    }
    var vl = /*#__PURE__*/function (_mn49) {
      (0, _inherits2["default"])(vl, _mn49);
      var _super56 = _createSuper(vl);
      function vl(e) {
        var _this67;
        (0, _classCallCheck2["default"])(this, vl);
        _this67 = _super56.call(this), gn((0, _assertThisInitialized2["default"])(_this67), e, $l, yl, mt, {
          selection: 4,
          selectionLength: 5,
          customisations: 0,
          route: 1
        });
        return _this67;
      }
      return (0, _createClass2["default"])(vl);
    }(mn);
    function bl(e) {
      var t, n;
      return t = new vn({
        props: {
          $$slots: {
            "default": [kl]
          },
          $$scope: {
            ctx: e
          }
        }
      }), {
        c: function c() {
          fn(t.$$.fragment);
        },
        m: function m(e, i) {
          dn(t, e, i), n = !0;
        },
        p: function p(e, n) {
          var i = {};
          759 & n && (i.$$scope = {
            dirty: n,
            ctx: e
          }), t.$set(i);
        },
        i: function i(e) {
          n || (nn(t.$$.fragment, e), n = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), n = !1;
        },
        d: function d(e) {
          pn(t, e);
        }
      };
    }
    function kl(e) {
      var t, n, _i99, _o68;
      return t = new Os({
        props: {
          selection: e[0],
          viewChanged: e[4],
          error: e[5],
          route: e[6],
          blocks: e[7]
        }
      }), _i99 = new vl({
        props: {
          selection: e[0],
          selectionLength: e[1],
          route: e[6],
          customisations: e[2]
        }
      }), {
        c: function c() {
          fn(t.$$.fragment), n = jt(), fn(_i99.$$.fragment);
        },
        m: function m(e, r) {
          dn(t, e, r), kt(e, n, r), dn(_i99, e, r), _o68 = !0;
        },
        p: function p(e, n) {
          var o = {};
          1 & n && (o.selection = e[0]), 16 & n && (o.viewChanged = e[4]), 32 & n && (o.error = e[5]), 64 & n && (o.route = e[6]), 128 & n && (o.blocks = e[7]), t.$set(o);
          var r = {};
          1 & n && (r.selection = e[0]), 2 & n && (r.selectionLength = e[1]), 64 & n && (r.route = e[6]), 4 & n && (r.customisations = e[2]), _i99.$set(r);
        },
        i: function i(e) {
          _o68 || (nn(t.$$.fragment, e), nn(_i99.$$.fragment, e), _o68 = !0);
        },
        o: function o(e) {
          on(t.$$.fragment, e), on(_i99.$$.fragment, e), _o68 = !1;
        },
        d: function d(e) {
          pn(t, e), e && _t(n), pn(_i99, e);
        }
      };
    }
    function _l(e) {
      var t,
        n,
        _i100 = !0 !== e[3] && bl(e);
      return {
        c: function c() {
          _i100 && _i100.c(), t = It();
        },
        m: function m(e, o) {
          _i100 && _i100.m(e, o), kt(e, t, o), n = !0;
        },
        p: function p(e, _ref102) {
          var _ref103 = (0, _slicedToArray2["default"])(_ref102, 1),
            n = _ref103[0];
          !0 !== e[3] ? _i100 ? (_i100.p(e, n), 8 & n && nn(_i100, 1)) : (_i100 = bl(e), _i100.c(), nn(_i100, 1), _i100.m(t.parentNode, t)) : _i100 && (en(), on(_i100, 1, 1, function () {
            _i100 = null;
          }), tn());
        },
        i: function i(e) {
          n || (nn(_i100), n = !0);
        },
        o: function o(e) {
          on(_i100), n = !1;
        },
        d: function d(e) {
          _i100 && _i100.d(e), e && _t(t);
        }
      };
    }
    function wl(e, t, n) {
      var i = t.registry,
        o = t.selection,
        r = t.selectionLength,
        s = t.customisations,
        c = t.hidden,
        l = t.viewChanged,
        a = t.error,
        u = t.route,
        f = t.blocks;
      var d, p;
      return d = "registry", p = i, Ft().$$.context.set(d, p), e.$$set = function (e) {
        "registry" in e && n(8, i = e.registry), "selection" in e && n(0, o = e.selection), "selectionLength" in e && n(1, r = e.selectionLength), "customisations" in e && n(2, s = e.customisations), "hidden" in e && n(3, c = e.hidden), "viewChanged" in e && n(4, l = e.viewChanged), "error" in e && n(5, a = e.error), "route" in e && n(6, u = e.route), "blocks" in e && n(7, f = e.blocks);
      }, [o, r, s, c, l, a, u, f, i];
    }
    var xl = /*#__PURE__*/function (_mn50) {
      (0, _inherits2["default"])(xl, _mn50);
      var _super57 = _createSuper(xl);
      function xl(e) {
        var _this68;
        (0, _classCallCheck2["default"])(this, xl);
        _this68 = _super57.call(this), gn((0, _assertThisInitialized2["default"])(_this68), e, wl, _l, mt, {
          registry: 8,
          selection: 0,
          selectionLength: 1,
          customisations: 2,
          hidden: 3,
          viewChanged: 4,
          error: 5,
          route: 6,
          blocks: 7
        });
        return _this68;
      }
      return (0, _createClass2["default"])(xl);
    }(mn);
    var Cl = {
      getIcon: ce,
      addCollection: le,
      getAPI: de.getAPI,
      addAPIProvider: fe
    };
    tt.setIconify(Cl), le({
      prefix: lt,
      icons: {
        "error-loading": {
          body: '<g clip-path="url(#clip0)"><path d="M9.9.2l-.2 1C12.7 2 15 4.7 15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-.2-1C2.6 1.1 0 4.3 0 8c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z" fill="currentColor"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>'
        },
        empty: {
          body: ""
        }
      },
      width: 16,
      height: 16
    }), tt.setComponentsConfig({
      list: !1,
      toggleList: !0,
      codeTab: "",
      multiSelect: !1,
      propsVisible: !0,
      infoVisible: !1,
      codeVisible: !1
    });
    var jl = /*#__PURE__*/function () {
      function jl(e) {
        var _this69 = this;
        (0, _classCallCheck2["default"])(this, jl);
        this._state = {
          icons: [],
          customisations: {}
        }, this._selection = Object.create(null), this._selectionLength = 0, this._status = "loading", this._container = null, this._params = e;
        var t = e.state,
          n = {
            callback: this._coreCallback.bind(this)
          };
        t && t.config && (n.config = t.config), e.iconSets && (n.iconSets = e.iconSets instanceof Array ? {
          iconSets: e.iconSets
        } : e.iconSets), function (e) {
          ie.toggleBrowserCache(e, !1);
        }("all");
        var i = this._core = new tt.IconFinderCore(n),
          o = this._registry = i.registry;
        o.setCustom("callback", this._internalCallback.bind(this)), o.setCustom("link", this._externalLinkCallback.bind(this)), ct.length && ct.forEach(function (e) {
          var t = tt.convertProviderData("", e);
          t && tt.addProvider(e.provider, t);
        });
        var r = this._state;
        r.config = tt.customisedConfig(o.config);
        var s = o.partialRoute;
        r.route = s || void 0, t && (t.icons && (t.icons.forEach(function (e) {
          var t = "string" == typeof e ? tt.stringToIcon(e) : e;
          tt.validateIcon(t) && ot(_this69._selection, t);
        }), r.icons = st(this._selection), this._selectionLength = r.icons.length), t.customisations && (r.customisations = t.customisations), t.route && setTimeout(function () {
          o.partialRoute = t.route;
        }));
      }
      (0, _createClass2["default"])(jl, [{
        key: "getStatus",
        value: function getStatus() {
          return this._status;
        }
      }, {
        key: "getState",
        value: function getState() {
          return this._state;
        }
      }, {
        key: "_hide",
        value: function _hide(e) {
          switch (this._status) {
            case "hidden":
            case "destroyed":
              return;
            case "loading":
            case "":
              break;
            default:
              this._status;
          }
          this._status = e, this._container && this._container.$set({
            hidden: !0
          });
        }
      }, {
        key: "hide",
        value: function hide() {
          this._hide("hidden");
        }
      }, {
        key: "destroy",
        value: function destroy() {
          "destroyed" !== this._status && (this._hide("destroyed"), this._container = null, this._registry.destroy());
        }
      }, {
        key: "show",
        value: function show() {
          switch (this._status) {
            case "destroyed":
            case "loading":
            case "":
              return;
            case "hidden":
              break;
            default:
              this._status;
          }
          this._status = "", this._container && this._container.$set({
            hidden: !1
          });
        }
      }, {
        key: "_initContainer",
        value: function _initContainer(e) {
          var t = this._state;
          var n = !1;
          switch (this._status) {
            case "hidden":
            case "destroyed":
              n = !0;
            case "":
            case "loading":
              break;
            default:
              this._status;
          }
          var i = {
              viewChanged: e.viewChanged,
              error: e.error,
              blocks: e.blocks,
              route: e.route ? tt.objectToRoute(e.route) : null,
              selection: this._selection,
              selectionLength: this._selectionLength,
              customisations: it.mergeCustomisations(it.defaultCustomisations, t.customisations ? t.customisations : {}),
              registry: this._core.registry,
              hidden: n
            },
            o = {
              target: this._params.container,
              props: i
            };
          return new xl(o);
        }
      }, {
        key: "_triggerEvent",
        value: function _triggerEvent(e) {
          "destroyed" !== this._status && this._params.callback && this._params.callback(e);
        }
      }, {
        key: "_coreCallback",
        value: function _coreCallback(e) {
          if (!this._container) return this._container = this._initContainer(e), "loading" === this._status && (this._status = "", this._triggerEvent({
            type: "load"
          })), void (e.route && this._setRoute(e.route));
          var t = this._container,
            n = e.route,
            i = n ? tt.objectToRoute(n) : null;
          e.route = i, e.viewChanged || !tt.compareObjects(e.route, t.$$.props.route) ? (t.$set(e), n && this._setRoute(n)) : "" !== e.error && e.error === t.$$.props.error || t.$set({
            error: e.error,
            blocks: e.blocks
          });
        }
      }, {
        key: "_internalCallback",
        value: function _internalCallback(e) {
          var t, n;
          switch (e.type) {
            case "selection":
              return n = e, t = "string" == typeof n.icon ? tt.stringToIcon(n.icon) : n.icon, void this._selectIcon(t, "boolean" == typeof n.selected ? n.selected : "force", !0);
            case "customisation":
              return void this._setCustomisations(e.customisations);
            case "button":
              return void this._triggerEvent({
                type: "button",
                button: e.button,
                state: this._state
              });
            case "config":
              return this._state.config = tt.customisedConfig(this._registry.config), void this._triggerEvent({
                type: "config",
                config: this._state.config
              });
          }
        }
      }, {
        key: "_externalLinkCallback",
        value: function _externalLinkCallback(e) {
          if (e && e.target) {
            var _t95 = e.target.getAttribute("href");
            "string" == typeof _t95 && this._triggerEvent({
              type: "link",
              href: _t95,
              event: e
            });
          }
        }
      }, {
        key: "_setRoute",
        value: function _setRoute(e) {
          var t = this._state;
          return (void 0 === t.route || !tt.compareObjects(e, t.route)) && (t.route = e, this._triggerEvent({
            type: "route",
            route: e
          }), !0);
        }
      }, {
        key: "setRoute",
        value: function setRoute(e) {
          if ("destroyed" === this._status) return;
          var t = this._core.router;
          function n() {
            t.partialRoute = e;
          }
          this._container ? n() : setTimeout(n);
        }
      }, {
        key: "_selectIcon",
        value: function _selectIcon(e, t, n) {
          var _this70 = this;
          var i = this._state,
            o = function o() {
              if (_this70._selectionLength = i.icons.length, n && _this70._container) {
                var _e200 = {
                  selection: _this70._selection,
                  selectionLength: _this70._selectionLength
                };
                _this70._container.$set(_e200);
              }
              _this70._triggerEvent({
                type: "selection",
                icons: i.icons
              });
            };
          if (!e) return !0 !== t && 1 === i.icons.length && (this._selection = Object.create(null), i.icons = [], o(), !0);
          var r = !!this._selectionLength && rt(this._selection, e);
          if (r === t || r && "force" === t) return !1;
          if ((r || "force" !== t) && this._registry.config.components.multiSelect || (this._selection = Object.create(null)), r ? function (e, t) {
            if (void 0 === e[t.provider] || void 0 === e[t.provider][t.prefix]) return !1;
            var n = e[t.provider];
            var i = n[t.prefix].length;
            var o = t.aliases ? t.aliases.concat([t.name]) : [t.name];
            n[t.prefix] = n[t.prefix].filter(function (e) {
              return -1 === o.indexOf(e);
            });
            var r = i !== n[t.prefix].length;
            n[t.prefix].length || (delete n[t.prefix], Object.keys(n).length || delete e[t.provider]);
          }(this._selection, e) : ot(this._selection, e), i.icons = st(this._selection), o(), i.icons.length > 1) {
            var _e201 = !1;
            var _t96 = it.mergeCustomisations(it.defaultCustomisations, i.customisations);
            _t96.inline && (_t96.inline = !1, _e201 = !0), _e201 && this._setCustomisations(_t96);
          }
          return !0;
        }
      }, {
        key: "selectIcons",
        value: function selectIcons(e) {
          if ("destroyed" === this._status) return;
          var t = this._state;
          this._selection = Object.create(null);
          var n = this._selection;
          if (e && (this._registry.config.components.multiSelect ? e : e.slice(-1)).forEach(function (e) {
            var t = "string" == typeof e ? tt.stringToIcon(e) : e;
            t && ot(n, t);
          }), t.icons = st(n), this._selectionLength = t.icons.length, this._container) {
            var _e202 = {
              selection: n,
              selectionLength: this._selectionLength
            };
            this._container.$set(_e202);
          }
          this._triggerEvent({
            type: "selection",
            icons: t.icons
          });
        }
      }, {
        key: "_setCustomisations",
        value: function _setCustomisations(e) {
          var t = this._state;
          return (void 0 === t.customisations || !tt.compareObjects(t.customisations, e)) && (t.customisations = it.filterCustomisations(e), this._container ? this._container.$set({
            customisations: e
          }) : (this._params.state || (this._params.state = {}), this._params.state.customisations = e), this._triggerEvent({
            type: "customisations",
            customisations: e
          }), !0);
        }
      }, {
        key: "setCustomisations",
        value: function setCustomisations(e) {
          "destroyed" !== this._status && this._setCustomisations(it.mergeCustomisations(it.defaultCustomisations, e));
        }
      }]);
      return jl;
    }();
    window.IconFinder = jl;
    var Il = document.getElementById("iconify-finder");
    Il && new jl({
      container: Il,
      callback: function callback(e) {
        console.log("Event:", e);
      }
    });
  }();
}();