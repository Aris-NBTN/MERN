"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
/*! @silexlabs/grapesjs-filter-styles - 0.0.3 */
!function (e, t) {
  'object' == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) && 'object' == (typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) ? exports["@silexlabs/grapesjs-filter-styles"] = t() : e["@silexlabs/grapesjs-filter-styles"] = t();
}('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0, function () {
  return function () {
    "use strict";

    var e = {
        d: function d(t, n) {
          for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
            enumerable: !0,
            get: n[o]
          });
        },
        o: function o(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        },
        r: function r(e) {
          'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module'
          }), Object.defineProperty(e, '__esModule', {
            value: !0
          });
        }
      },
      t = {};
    function n(e) {
      return n = "function" == typeof Symbol && "symbol" == (0, _typeof2["default"])(Symbol.iterator) ? function (e) {
        return (0, _typeof2["default"])(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : (0, _typeof2["default"])(e);
      }, n(e);
    }
    function o(e) {
      var t = function (e, t) {
        if ("object" !== n(e) || null === e) return e;
        var o = e[Symbol.toPrimitive];
        if (void 0 !== o) {
          var r = o.call(e, t || "default");
          if ("object" !== n(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }(e, "string");
      return "symbol" === n(t) ? t : String(t);
    }
    function r(e, t, n) {
      return (t = o(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, o);
      }
      return n;
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    e.r(t), e.d(t, {
      "default": function _default() {
        return l;
      }
    });
    var l = function l(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      e.on('load', function () {
        var n = c(c({}, {
            placeholder: 'Search...',
            appendTo: null,
            appendBefore: null
          }), t),
          o = e.Config.selectorManager.pStylePrefix,
          r = "".concat(o, "filter-styles"),
          i = document.createElement('div');
        i.innerHTML = "\n      <style>\n        #".concat(r, "-btn {\n          position: absolute;\n          right: 0;\n          border: none;\n          padding: 5px;\n          margin: 5px;\n          line-height: 1;\n          border-radius: 50%;\n          width: 25px;\n          height: 25px;\n          border: 1px solid;\n          z-index: 1;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          transition: opacity .15s ease;\n          cursor: pointer;\n          opacity: .75;\n        }\n        .empty #").concat(r, "-btn {\n          cursor: initial;\n          opacity: .25;\n        }\n      </style>\n\n      <button\n        id=\"").concat(r, "-btn\"\n        class=\"gjs-field gjs-sm-properties gjs-two-color\"\n        >X</button>\n      <input id=\"").concat(r, "\" type=\"text\" class=\"gjs-field gjs-sm-properties gjs-two-color\" placeholder=\"").concat(n.placeholder, "\" />\n    ");
        var l = e.getContainer().querySelector(".".concat(o, "clm-tags")),
          p = 'string' == typeof n.appendBefore ? document.querySelector(n.appendBefore) : n.appendBefore,
          u = 'string' == typeof n.appendTo ? document.querySelector(n.appendTo) : n.appendTo,
          s = p ? p.parentElement : null != u ? u : l.parentElement.parentElement;
        s.insertBefore(i, null != p ? p : l.parentElement.parentElement.lastElementChild);
        var f = s.querySelector("#".concat(r));
        f.onkeyup = function () {
          return y(e, f, s);
        }, s.querySelector("#".concat(r, "-btn")).onclick = function () {
          f.value = '', y(e, f, s);
        }, e.on('component:selected component:styleUpdate', function () {
          a(e), setTimeout(function () {
            return y(e, f, s);
          });
        });
      });
    };
    function a(e) {
      d(e).forEach(function (e) {
        !function (e) {
          var t = p.get(e);
          null == t || t.sector.setOpen(null == t ? void 0 : t.initial), p["delete"](e);
        }(e), e.getProperties().forEach(function (e) {
          !function (e) {
            var t = s.get(e);
            null == t || t.property.set('visible', null == t ? void 0 : t.initial), s["delete"](e);
          }(e);
        });
      });
    }
    var p = new WeakMap();
    function u(e, t) {
      p.has(e) || p.set(e, {
        sector: e,
        initial: e.isOpen()
      }), e.setOpen(t);
    }
    var s = new WeakMap();
    function f(e, t) {
      s.has(e) || s.set(e, {
        property: e,
        initial: e.get('visible')
      }), e.set('visible', t);
    }
    function d(e) {
      return e.StyleManager.getSectors().toArray().filter(function (e) {
        return e.isVisible();
      });
    }
    function y(e, t, n) {
      if (t.value) {
        n.classList.remove('empty');
        var o = function (e) {
          return d(e).flatMap(function (e) {
            return e.getProperties().flatMap(function (t) {
              return 'composite' === t.getType() ? t.properties.map(function (n) {
                return {
                  sector: e,
                  property: t,
                  subprop: n
                };
              }) : {
                sector: e,
                property: t
              };
            });
          }).map(function (e) {
            var t,
              n,
              o,
              r,
              i,
              c = e.sector,
              l = e.property,
              a = e.subprop;
            return {
              searchable: "\n        ".concat(c.get('name'), "\n        ").concat(l.get('name'), "\n        ").concat(null !== (t = null === (n = l.get('options')) || void 0 === n ? void 0 : n.map(function (e) {
                return e.id;
              }).join(', ')) && void 0 !== t ? t : '', "\n        ").concat(null !== (o = null == a ? void 0 : a.get('name')) && void 0 !== o ? o : '', "\n        ").concat(null !== (r = null == a || null === (i = a.get('options')) || void 0 === i ? void 0 : i.map(function (e) {
                return e.id;
              }).join(', ')) && void 0 !== r ? r : '', "\n      "),
              sector: c,
              property: l
            };
          });
        }(e).filter(function (e) {
          return e.searchable.toLowerCase().includes(t.value.toLowerCase());
        });
        d(e).forEach(function (e) {
          u(e, !1), e.getProperties().forEach(function (e) {
            return f(e, !1);
          });
        }), o.forEach(function (e) {
          u(e.sector, !0), f(e.property, !0);
        });
      } else n.classList.add('empty'), a(e);
    }
    return t;
  }();
});