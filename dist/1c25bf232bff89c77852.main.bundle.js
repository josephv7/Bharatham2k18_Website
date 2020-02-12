!(function(n) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = n),
    (o.c = r),
    (o.d = function(t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/"),
    o((o.s = 1));
})([
  function(t, e, n) {
    var r;
    (r = "undefined" != typeof window ? window : this),
      (t.exports = (function(t, e) {
        "use strict";
        var n = "E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(
            " "
          ),
          r = "__hasSketch",
          o = Math,
          L = "canvas",
          i = "webgl",
          R = "dom",
          F = e,
          M = t,
          B = [],
          a = {
            fullscreen: !0,
            autostart: !0,
            autoclear: !0,
            autopause: !0,
            container: F.body,
            interval: 1,
            globals: !0,
            retina: !1,
            type: L
          },
          z = {
            8: "BACKSPACE",
            9: "TAB",
            13: "ENTER",
            16: "SHIFT",
            27: "ESCAPE",
            32: "SPACE",
            37: "LEFT",
            38: "UP",
            39: "RIGHT",
            40: "DOWN"
          };
        function G(t) {
          return "function" == typeof t;
        }
        function H(t) {
          return "string" == typeof t;
        }
        function X(t, e, n) {
          for (var r in e) (!n && r in t) || (t[r] = e[r]);
          return t;
        }
        function Y(t, e) {
          return function() {
            t.apply(e, arguments);
          };
        }
        function u(o) {
          var e,
            n,
            r,
            t,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            h,
            p,
            g,
            v,
            m,
            y = 0,
            w = [],
            x = !1,
            b = !1,
            E = M.devicePixelRatio || 1,
            O = o.type == R,
            P = o.type == L,
            C = { x: 0, y: 0, ox: 0, oy: 0, dx: 0, dy: 0 },
            S = [
              o.eventTarget || o.element,
              N,
              "mousedown",
              "touchstart",
              N,
              "mousemove",
              "touchmove",
              N,
              "mouseup",
              "touchend",
              N,
              "click",
              N,
              "mouseout",
              N,
              "mouseover",
              F,
              function(t) {
                var e;
                (d = t.keyCode),
                  (h = "keyup" == t.type),
                  (T[d] = T[((e = d), z[e] || String.fromCharCode(e))] = !h),
                  _(o[t.type], t);
              },
              "keydown",
              "keyup",
              M,
              function(t) {
                o.autopause && ("blur" == t.type ? D : j)(), _(o[t.type], t);
              },
              "focus",
              "blur",
              A,
              "resize"
            ],
            T = {};
          for (d in z) T[z[d]] = !1;
          function _(t) {
            G(t) && t.apply(o, [].splice.call(arguments, 1));
          }
          function k(t) {
            for (a = 0; a < S.length; a++)
              H((c = S[a]))
                ? r[(t ? "add" : "remove") + "EventListener"].call(r, c, n, !1)
                : G(c)
                  ? (n = c)
                  : (r = c);
          }
          function A() {
            (r = O ? o.style : o.canvas),
              (u = O ? "px" : ""),
              (v = o.width),
              (m = o.height),
              o.fullscreen &&
                ((m = o.height = M.innerHeight), (v = o.width = M.innerWidth)),
              o.retina &&
                P &&
                E &&
                ((r.style.height = m + "px"),
                (r.style.width = v + "px"),
                (v *= E),
                (m *= E)),
              r.height !== m && (r.height = m + u),
              r.width !== v && (r.width = v + u),
              P && !o.autoclear && o.retina && o.scale(E, E),
              b && _(o.resize);
          }
          function I(t, e) {
            var n, r;
            return (
              (n = t),
              (r = o.element),
              (i = r.getBoundingClientRect()),
              (n.x = n.pageX - i.left - (M.scrollX || M.pageXOffset)),
              (n.y = n.pageY - i.top - (M.scrollY || M.pageYOffset)),
              ((e = e || {}).ox = e.x || t.x),
              (e.oy = e.y || t.y),
              (e.x = t.x),
              (e.y = t.y),
              (e.dx = e.x - e.ox),
              (e.dy = e.y - e.oy),
              e
            );
          }
          function W(t) {
            if (
              (t.preventDefault(),
              ((l = (function(t) {
                var e = {};
                for (var n in t)
                  "webkitMovementX" !== n &&
                    "webkitMovementY" !== n &&
                    (G(t[n]) ? (e[n] = Y(t[n], t)) : (e[n] = t[n]));
                return e;
              })(t)).originalEvent = t),
              l.touches)
            )
              for (
                w.length = l.touches.length, a = 0;
                a < l.touches.length;
                a++
              )
                w[a] = I(l.touches[a], w[a]);
            else (w.length = 0), (w[0] = I(l, C));
            return X(C, w[0], !0), l;
          }
          function N(t) {
            for (
              t = W(t),
                p = (g = S.indexOf((f = t.type))) - 1,
                o.dragging =
                  !!/down|start/.test(f) || (!/up|end/.test(f) && o.dragging);
              p;

            )
              H(S[p]) ? _(o[S[p--]], t) : H(S[g]) ? _(o[S[g++]], t) : (p = 0);
          }
          function j() {
            (o.now = +new Date()), (o.running = !0);
          }
          function D() {
            o.running = !1;
          }
          return (
            X(o, {
              touches: w,
              mouse: C,
              keys: T,
              dragging: !1,
              running: !1,
              millis: 0,
              now: NaN,
              dt: NaN,
              destroy: function() {
                (t = o.element.parentNode),
                  (a = B.indexOf(o)),
                  t && t.removeChild(o.element),
                  ~a && B.splice(a, 1),
                  k(!1),
                  D();
              },
              toggle: function() {
                (o.running ? D : j)();
              },
              clear: function() {
                P && o.clearRect(0, 0, o.width * E, o.height * E);
              },
              start: j,
              stop: D
            }),
            B.push(o),
            o.autostart && j(),
            k(!0),
            A(),
            (function t() {
              Q(e),
                (e = q(t)),
                b || (_(o.setup), (b = G(o.setup))),
                x || (_(o.resize), (x = G(o.resize))),
                o.running &&
                  !y &&
                  ((o.dt = (s = +new Date()) - o.now),
                  (o.millis += o.dt),
                  (o.now = s),
                  _(o.update),
                  P &&
                    (o.retina && (o.save(), o.autoclear && o.scale(E, E)),
                    o.autoclear && o.clear()),
                  _(o.draw),
                  P && o.retina && o.restore()),
                (y = ++y % o.interval);
            })(),
            o
          );
        }
        for (
          var s,
            c,
            l = {
              CANVAS: L,
              WEB_GL: i,
              WEBGL: i,
              DOM: R,
              instances: B,
              install: function(t) {
                if (!t[r]) {
                  for (var e = 0; e < n.length; e++) t[n[e]] = o[n[e]];
                  X(t, {
                    TWO_PI: 2 * o.PI,
                    HALF_PI: o.PI / 2,
                    QUARTER_PI: o.PI / 4,
                    random: function(t, e) {
                      return (
                        (n = t),
                        "[object Array]" == Object.prototype.toString.call(n)
                          ? t[~~(o.random() * t.length)]
                          : ("number" != typeof e && ((e = t || 1), (t = 0)),
                            t + o.random() * (e - t))
                      );
                      var n;
                    },
                    lerp: function(t, e, n) {
                      return t + n * (e - t);
                    },
                    map: function(t, e, n, r, o) {
                      return ((t - e) / (n - e)) * (o - r) + r;
                    }
                  }),
                    (t[r] = !0);
                }
              },
              create: function(t) {
                return (
                  (t = X(t || {}, a)).globals && l.install(self),
                  (s = t.element =
                    t.element ||
                    F.createElement(t.type === R ? "div" : "canvas")),
                  (c = t.context =
                    t.context ||
                    (function() {
                      switch (t.type) {
                        case L:
                          return s.getContext("2d", t);
                        case i:
                          return (
                            s.getContext("webgl", t) ||
                            s.getContext("experimental-webgl", t)
                          );
                        case R:
                          return (s.canvas = s);
                      }
                    })()),
                  (t.container || F.body).appendChild(s),
                  l.augment(c, t)
                );
              },
              augment: function(t, e) {
                return (
                  ((e = X(e || {}, a)).element = t.canvas || t),
                  (e.element.className += " sketch"),
                  X(t, e, !0),
                  u(t)
                );
              }
            },
            f = ["ms", "moz", "webkit", "o"],
            d = self,
            h = 0,
            p = "AnimationFrame",
            g = "request" + p,
            v = "cancel" + p,
            q = d[g],
            Q = d[v],
            m = 0;
          m < f.length && !q;
          m++
        )
          (q = d[f[m] + "Request" + p]), (Q = d[f[m] + "Cancel" + p]);
        return (
          (d[g] = q =
            q ||
            function(t) {
              var e = +new Date(),
                n = o.max(0, 16 - (e - h)),
                r = setTimeout(function() {
                  t(e + n);
                }, n);
              return (h = e + n), r;
            }),
          (d[v] = Q =
            Q ||
            function(t) {
              clearTimeout(t);
            }),
          l
        );
      })(r, r.document));
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    n(2);
    var r = n(0),
      o = n.n(r);
    "serviceWorker" in navigator &&
      window.addEventListener("load", function() {
        navigator.serviceWorker
          .register("/sw.js")
          .then(function(t) {
            console.log("SW registered: ", t);
          })
          .catch(function(t) {
            console.log("SW registration failed: ", t);
          });
      }),
      (function() {
        function i(t, e, n) {
          this.init(t, e, n);
        }
        i.prototype = {
          init: function(t, e, n) {
            (this.alive = !0),
              (this.radius = n || 10),
              (this.wander = 0.15),
              (this.theta = random(TWO_PI)),
              (this.drag = 0.92),
              (this.color = "#fff"),
              (this.x = t || 0),
              (this.y = e || 0),
              (this.vx = 0),
              (this.vy = 0);
          },
          move: function() {
            (this.x += this.vx),
              (this.y += this.vy),
              (this.vx *= this.drag),
              (this.vy *= this.drag),
              (this.theta += random(-0.5, 0.5) * this.wander),
              (this.vx += 0.1 * sin(this.theta)),
              (this.vy += 0.1 * cos(this.theta)),
              (this.radius *= 0.96),
              (this.alive = 0.5 < this.radius);
          },
          draw: function(t) {
            t.beginPath(),
              t.arc(this.x, this.y, this.radius, 0, TWO_PI),
              (t.fillStyle = this.color),
              t.fill();
          }
        };
        var a = [
            "#69D2E7",
            "#A7DBD8",
            "#E0E4CC",
            "#F38630",
            "#FA6900",
            "#FF4E50",
            "#F9D423"
          ],
          u = [],
          s = [],
          c = o.a.create({ container: document.getElementById("container") });
        (c.setup = function() {
          var t, e, n;
          for (t = 0; t < 20; t++)
            (e = 0.5 * c.width + random(-100, 100)),
              (n = 0.5 * c.height + random(-100, 100)),
              c.spawn(e, n);
        }),
          (c.spawn = function(t, e) {
            280 <= u.length && s.push(u.shift());
            var n = s.length ? s.pop() : new i();
            n.init(t, e, random(5, 40)),
              (n.wander = random(0.5, 2)),
              (n.color = random(a)),
              (n.drag = random(0.9, 0.99));
            var r = random(TWO_PI),
              o = random(2, 8);
            (n.vx = sin(r) * o), (n.vy = cos(r) * o), u.push(n);
          }),
          (c.update = function() {
            var t, e;
            for (t = u.length - 1; 0 <= t; t--)
              (e = u[t]).alive ? e.move() : s.push(u.splice(t, 1)[0]);
          }),
          (c.draw = function() {
            c.globalCompositeOperation = "lighter";
            for (var t = u.length - 1; 0 <= t; t--) u[t].draw(c);
          }),
          (c.mousemove = function() {
            var t, e, n, r, o;
            for (n = 0, o = c.touches.length; n < o; n++)
              for (t = c.touches[n], e = random(1, 4), r = 0; r < e; r++)
                c.spawn(t.x, t.y);
          });
      })();
  },
  function(t, e, n) {}
]);
//# sourceMappingURL=1c25bf232bff89c77852.main.bundle.js.map
