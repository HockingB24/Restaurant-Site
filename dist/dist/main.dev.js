"use strict";

(function () {
  "use strict";

  var n = {
    426: function _(n, e, t) {
      t.d(e, {
        Z: function Z() {
          return c;
        }
      });
      var r = t(15),
          a = t.n(r),
          o = t(645),
          i = t.n(o)()(a());
      i.push([n.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Montserrat&display=swap);"]), i.push([n.id, "body, html {\n    margin: 0;\n    padding: 0;\n\n    font-family: 'Dancing Script', cursive;  \n}\n\np {\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background: rgb(255,74,46);\n    background: radial-gradient(circle, rgba(255,74,46,1) 0%, rgba(139,9,7,1) 100%);\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n.imgHome {\n   border-radius: 50%;\n   max-width: 400px;\n   max-height: 400px;\n}\n\n#content {\n    display: block;\n    margin: 100px auto 100px auto;\n    width: 50%;\n    text-align: center;\n    background-color: white;\n    border: 10px solid black;\n    padding: 50px;\n    color: #0C486A;\n}\n\n#nav-ul {\n    list-style-type: none;\n    margin: 0 0 10px 0;\n    padding: 0;\n    background-color: white;\n    border-bottom: 5px solid black;\n    overflow: hidden;\n    position: fixed;\n    top: 0;\n    width: 100%;\n\n}\n.nav-li {\n    float: left;\n    color: black;\n    text-align: center;\n    margin: 0;\n    padding: 10px 50px;\n    display: block;\n    background-color: white;\n}\n.nav-li:hover {\n    background-color: #e9e9e9;\n}\n\n\n.menuItem {\n    margin: 40px 0 40px 0;\n    padding: 10px 0;\n}\n\n.menuImg {\n    border: 5px solid black;\n}\n\n.imgHome {\n    border: 5px solid black;\n}\n\n\n@media only screen and (max-width: 800px) {\n    .imgHome {\n        width: 200px;\n        height: 200px;\n    }\n    .menuImg {\n        width: 200px;\n        height: 200px;\n    }\n  }", "", {
        version: 3,
        sources: ["webpack://./src/style.css"],
        names: [],
        mappings: "AACA;IACI,SAAS;IACT,UAAU;;IAEV,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,0BAA0B;IAC1B,+EAA+E;IAC/E,4BAA4B;IAC5B,4BAA4B;AAChC;AACA;GACG,kBAAkB;GAClB,gBAAgB;GAChB,iBAAiB;AACpB;;AAEA;IACI,cAAc;IACd,6BAA6B;IAC7B,UAAU;IACV,kBAAkB;IAClB,uBAAuB;IACvB,wBAAwB;IACxB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;IACf,MAAM;IACN,WAAW;;AAEf;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,kBAAkB;IAClB,cAAc;IACd,uBAAuB;AAC3B;AACA;IACI,yBAAyB;AAC7B;;;AAGA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;;AAGA;IACI;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;EACF",
        sourcesContent: ["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Montserrat&display=swap');\nbody, html {\n    margin: 0;\n    padding: 0;\n\n    font-family: 'Dancing Script', cursive;  \n}\n\np {\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background: rgb(255,74,46);\n    background: radial-gradient(circle, rgba(255,74,46,1) 0%, rgba(139,9,7,1) 100%);\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n.imgHome {\n   border-radius: 50%;\n   max-width: 400px;\n   max-height: 400px;\n}\n\n#content {\n    display: block;\n    margin: 100px auto 100px auto;\n    width: 50%;\n    text-align: center;\n    background-color: white;\n    border: 10px solid black;\n    padding: 50px;\n    color: #0C486A;\n}\n\n#nav-ul {\n    list-style-type: none;\n    margin: 0 0 10px 0;\n    padding: 0;\n    background-color: white;\n    border-bottom: 5px solid black;\n    overflow: hidden;\n    position: fixed;\n    top: 0;\n    width: 100%;\n\n}\n.nav-li {\n    float: left;\n    color: black;\n    text-align: center;\n    margin: 0;\n    padding: 10px 50px;\n    display: block;\n    background-color: white;\n}\n.nav-li:hover {\n    background-color: #e9e9e9;\n}\n\n\n.menuItem {\n    margin: 40px 0 40px 0;\n    padding: 10px 0;\n}\n\n.menuImg {\n    border: 5px solid black;\n}\n\n.imgHome {\n    border: 5px solid black;\n}\n\n\n@media only screen and (max-width: 800px) {\n    .imgHome {\n        width: 200px;\n        height: 200px;\n    }\n    .menuImg {\n        width: 200px;\n        height: 200px;\n    }\n  }"],
        sourceRoot: ""
      }]);
      var c = i;
    },
    645: function _(n) {
      n.exports = function (n) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var t = n(e);
            return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t;
          }).join("");
        }, e.i = function (n, t, r) {
          "string" == typeof n && (n = [[null, n, ""]]);
          var a = {};
          if (r) for (var o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (a[i] = !0);
          }

          for (var c = 0; c < n.length; c++) {
            var l = [].concat(n[c]);
            r && a[l[0]] || (t && (l[2] ? l[2] = "".concat(t, " and ").concat(l[2]) : l[2] = t), e.push(l));
          }
        }, e;
      };
    },
    15: function _(n) {
      function e(n, e) {
        (null == e || e > n.length) && (e = n.length);

        for (var t = 0, r = new Array(e); t < e; t++) {
          r[t] = n[t];
        }

        return r;
      }

      n.exports = function (n) {
        var t,
            r,
            a = (r = 4, function (n) {
          if (Array.isArray(n)) return n;
        }(t = n) || function (n, e) {
          var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];

          if (null != t) {
            var r,
                a,
                o = [],
                i = !0,
                c = !1;

            try {
              for (t = t.call(n); !(i = (r = t.next()).done) && (o.push(r.value), !e || o.length !== e); i = !0) {
                ;
              }
            } catch (n) {
              c = !0, a = n;
            } finally {
              try {
                i || null == t["return"] || t["return"]();
              } finally {
                if (c) throw a;
              }
            }

            return o;
          }
        }(t, r) || function (n, t) {
          if (n) {
            if ("string" == typeof n) return e(n, t);
            var r = Object.prototype.toString.call(n).slice(8, -1);
            return "Object" === r && n.constructor && (r = n.constructor.name), "Map" === r || "Set" === r ? Array.from(n) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(n, t) : void 0;
          }
        }(t, r) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()),
            o = a[1],
            i = a[3];
        if (!i) return o;

        if ("function" == typeof btoa) {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
              l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),
              s = "/*# ".concat(l, " */"),
              d = i.sources.map(function (n) {
            return "/*# sourceURL=".concat(i.sourceRoot || "").concat(n, " */");
          });
          return [o].concat(d).concat([s]).join("\n");
        }

        return [o].join("\n");
      };
    },
    379: function _(n) {
      var e = [];

      function t(n) {
        for (var t = -1, r = 0; r < e.length; r++) {
          if (e[r].identifier === n) {
            t = r;
            break;
          }
        }

        return t;
      }

      function r(n, r) {
        for (var o = {}, i = [], c = 0; c < n.length; c++) {
          var l = n[c],
              s = r.base ? l[0] + r.base : l[0],
              d = o[s] || 0,
              u = "".concat(s, " ").concat(d);
          o[s] = d + 1;
          var A = t(u),
              p = {
            css: l[1],
            media: l[2],
            sourceMap: l[3]
          };
          -1 !== A ? (e[A].references++, e[A].updater(p)) : e.push({
            identifier: u,
            updater: a(p, r),
            references: 1
          }), i.push(u);
        }

        return i;
      }

      function a(n, e) {
        var t = e.domAPI(e);
        return t.update(n), function (e) {
          if (e) {
            if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
            t.update(n = e);
          } else t.remove();
        };
      }

      n.exports = function (n, a) {
        var o = r(n = n || [], a = a || {});
        return function (n) {
          n = n || [];

          for (var i = 0; i < o.length; i++) {
            var c = t(o[i]);
            e[c].references--;
          }

          for (var l = r(n, a), s = 0; s < o.length; s++) {
            var d = t(o[s]);
            0 === e[d].references && (e[d].updater(), e.splice(d, 1));
          }

          o = l;
        };
      };
    },
    569: function _(n) {
      var e = {};

      n.exports = function (n, t) {
        var r = function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
              t = t.contentDocument.head;
            } catch (n) {
              t = null;
            }
            e[n] = t;
          }

          return e[n];
        }(n);

        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(t);
      };
    },
    216: function _(n) {
      n.exports = function (n) {
        var e = document.createElement("style");
        return n.setAttributes(e, n.attributes), n.insert(e), e;
      };
    },
    565: function _(n, e, t) {
      n.exports = function (n) {
        var e = t.nc;
        e && n.setAttribute("nonce", e);
      };
    },
    795: function _(n) {
      n.exports = function (n) {
        var e = n.insertStyleElement(n);
        return {
          update: function update(t) {
            !function (n, e, t) {
              var r = t.css,
                  a = t.media,
                  o = t.sourceMap;
              a ? n.setAttribute("media", a) : n.removeAttribute("media"), o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleTagTransform(r, n);
            }(e, n, t);
          },
          remove: function remove() {
            !function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            }(e);
          }
        };
      };
    },
    589: function _(n) {
      n.exports = function (n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      };
    }
  },
      e = {};

  function t(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var o = e[r] = {
      id: r,
      exports: {}
    };
    return n[r](o, o.exports, t), o.exports;
  }

  t.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return t.d(e, {
      a: e
    }), e;
  }, t.d = function (n, e) {
    for (var r in e) {
      t.o(e, r) && !t.o(n, r) && Object.defineProperty(n, r, {
        enumerable: !0,
        get: e[r]
      });
    }
  }, t.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, function () {
    var n = function n() {
      var n = document.querySelector("#content");
      var e = document.createElement("img");
      e.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2018%2F02%2Fbarbuzzo-best-italian-restaurants-philly-FT-BLOG0218.jpg", e.alt = "Spaghetti on a plate", e.setAttribute("width", "400"), e.setAttribute("height", "400"), e.classList.add("imgHome");
      var t = document.createElement("h1");
      t.innerHTML = "Mama Mia's Italian Restaurante", t.classList.add("homeHead");
      var r = document.createElement("p");
      r.classList.add("homePara"), r.innerHTML = "Welcome to our restaurant's website! We serve only the finest Italian food, with ingredients sourced straight from Italy. You're going to love our dishes!", n.appendChild(e), n.appendChild(t), n.appendChild(r);
    },
        e = function e(n, _e, t, r) {
      document.querySelector("#content");
      var a = document.createElement("div"),
          o = document.createElement("img");
      o.src = n, o.alt = _e, o.setAttribute("width", "300"), o.setAttribute("height", "300"), o.classList.add("menuImg");
      var i = document.createElement("h2");
      i.innerHTML = t;
      var c = document.createElement("p");
      return c.innerHTML = r, a.appendChild(o), a.appendChild(i), a.appendChild(c), a.classList.add("menuItem"), a;
    };

    var r = t(379),
        a = t.n(r),
        o = t(795),
        i = t.n(o),
        c = t(569),
        l = t.n(c),
        s = t(565),
        d = t.n(s),
        u = t(216),
        A = t.n(u),
        p = t(589),
        m = t.n(p),
        h = t(426),
        g = {};
    g.styleTagTransform = m(), g.setAttributes = d(), g.insert = l().bind(null, "head"), g.domAPI = i(), g.insertStyleElement = A(), a()(h.Z, g), h.Z && h.Z.locals && h.Z.locals;

    var f = function f() {
      var n = document.getElementById("content");

      for (; n.firstChild;) {
        n.removeChild(n.firstChild);
      }

      console.log("Done");
    };

    n();
    var C = document.querySelector("#home"),
        b = document.querySelector("#menu"),
        v = document.querySelector("#contact");
    C.addEventListener("click", function () {
      f(), n();
    }), b.addEventListener("click", function () {
      f(), function () {
        var n = document.querySelector("#content");
        var t = e("https://www.foodiecrush.com/wp-content/uploads/2017/09/My-Moms-Homemade-Spaghetti-and-Meat-Sauce-foodiecrush.com-017-683x1024-1.jpg", "Spaghetti with Meatballs", "Spaghetti with Meatballs", "Spaghetti and Meatballs served with Pasta Sauce and Parmesan Cheese"),
            r = e("https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg", "Lasagna", "Lasagna with Ground Beef", "Lasagna served with Ground Beef and Italian Sausage on the inside"),
            a = e("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8135663.jpg", "Fettucine Alfredo", "Fettucine Alfredo", "Dish of fettucine served in a sauce of cream, butter, and Parmesan cheese");
        n.appendChild(t), n.appendChild(r), n.appendChild(a);
      }();
    }), v.addEventListener("click", function () {
      f(), function () {
        var n = document.querySelector("#content");
        var e = document.createElement("p");
        e.innerHTML = "111-222-1234";
        var t = document.createElement("p");
        t.innerHTML = "realEmail@gmail.com";
        var r = document.createElement("p");
        r.innerHTML = "123 Restaurante Drive, New York City, NY", n.appendChild(e), n.appendChild(t), n.appendChild(r);
      }();
    });
  }();
})();