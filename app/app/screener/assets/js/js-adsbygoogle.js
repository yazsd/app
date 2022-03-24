(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        fa = {};

    function t(a, b) {
        var c = fa[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ha(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ha("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    ha("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(aa(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[t(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a) {
        return a.raw = a
    }

    function u(a) {
        var b = "undefined" != typeof p.Symbol && t(p.Symbol, "iterator") && a[t(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ka(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if (ea && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function v(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Gb = b.prototype
    }

    function ra() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    ha("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.F = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = da.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.P),
                reject: g(this.m)
            }
        };
        b.prototype.P = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.U(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.O(g) : this.v(g)
            }
        };
        b.prototype.O = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.ga(h, g) : this.v(g)
        };
        b.prototype.m = function(g) {
            this.B(2, g)
        };
        b.prototype.v = function(g) {
            this.B(1, g)
        };
        b.prototype.B = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.R();
            this.G()
        };
        b.prototype.R = function() {
            var g = this;
            e(function() {
                if (g.N()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.N =
            function() {
                if (this.F) return !1;
                var g = da.CustomEvent,
                    h = da.Event,
                    k = da.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.G = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.U = function(g) {
            var h = this.l();
            g.ia(h.resolve, h.reject)
        };
        b.prototype.ga = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(r, y) {
                return "function" == typeof r ? function(F) {
                    try {
                        l(r(F))
                    } catch (z) {
                        m(z)
                    }
                } : y
            }
            var l, m, q = new b(function(r, y) {
                l = r;
                m = y
            });
            this.ia(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.ia = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.F = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).ia(h, k)
            })
        };
        b.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(F) {
                    return function(z) {
                        r[F] = z;
                        y--;
                        0 == y && l(r)
                    }
                }
                var r = [],
                    y = 0;
                do r.push(void 0), y++, d(k.value).ia(q(r.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    ha("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");

    function sa(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ha("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = u(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!sa(g, e)) {
                var k = new c;
                ba(g, e, {
                    value: k
                })
            }
            if (!sa(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && sa(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && sa(g, e) && sa(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && sa(g, e) && sa(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    ha("Map", function(a) {
        function b() {
            var h = {};
            return h.L = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ia(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.L;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && sa(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        A: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                A: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.A ? l.A.value = k : (l.A = {
                next: this.h,
                L: this.h.L,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.A), this.h.L.next = l.A, this.h.L = l.A, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.A && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.A.L.next = h.A.next, h.A.next.L = h.A.L, h.A.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.L = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).A
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).A) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[t(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function ta(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[t(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    var ua = ea && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) sa(d, e) && (a[e] = d[e])
        }
        return a
    };
    ha("Object.assign", function(a) {
        return a || ua
    }, "es6");
    ha("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var d = this.length,
                e = b.length;
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var f = 0; f < e && c < d;)
                if (this[c++] != b[f++]) return !1;
            return f >= e
        }
    }, "es6");
    ha("globalThis", function(a) {
        return a || da
    }, "es_2020");
    ha("Set", function(a) {
        function b(c) {
            this.h = new p.Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return t(this.h, "values").call(this.h)
        };
        b.prototype.keys = t(b.prototype,
            "values");
        b.prototype[t(p.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    ha("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ta(this, function(b) {
                return b
            })
        }
    }, "es6");
    ha("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    ha("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    ha("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var w = this || self;

    function va(a) {
        a = a.split(".");
        for (var b = w, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function wa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function xa(a) {
        var b = wa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ya(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
    }
    var Aa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ba = 0;

    function Ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Da(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ea(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea = Ca : Ea = Da;
        return Ea.apply(null, arguments)
    }

    function Fa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ga(a) {
        var b = ["__uspapi"],
            c = w;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function Ha(a) {
        return a
    };
    var Ia = (new Date).getTime();

    function Ja(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ka(a, b) {
        var c = 0;
        a = Ja(String(a)).split(".");
        b = Ja(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function La(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Ma() {
        var a = w.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function x(a) {
        return -1 != Ma().indexOf(a)
    };

    function Na() {
        return x("Trident") || x("MSIE")
    }

    function Oa() {
        return (x("Chrome") || x("CriOS")) && !x("Edge") || x("Silk")
    }

    function Pa(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Qa() {
        var a = Ma();
        if (Na()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Pa(b);
        return x("Opera") ? a(["Version", "Opera"]) :
            x("Edge") ? a(["Edge"]) : x("Edg/") ? a(["Edg"]) : x("Silk") ? a(["Silk"]) : Oa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ra(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Sa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ta(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ua(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Va(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Wa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Xa(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    }

    function Ya(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Za(a) {
        Za[" "](a);
        return a
    }
    Za[" "] = function() {};
    var $a = Na();
    !x("Android") || Oa();
    Oa();
    !x("Safari") || Oa();
    var ab = {},
        bb = null;
    var cb = "function" === typeof Uint8Array;
    var db = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

    function eb(a, b) {
        Object.isFrozen(a) || (db ? a[db] |= b : void 0 !== a.ma ? a.ma |= b : Object.defineProperties(a, {
            ma: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function fb(a) {
        var b;
        db ? b = a[db] : b = a.ma;
        return null == b ? 0 : b
    }

    function gb(a) {
        eb(a, 1);
        return a
    }

    function hb(a) {
        return Array.isArray(a) ? !!(fb(a) & 2) : !1
    }

    function ib(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        eb(a, 2)
    };

    function jb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var kb, lb = Object.freeze(gb([]));

    function mb(a) {
        if (hb(a.u)) throw Error("Cannot mutate an immutable Message");
    }
    var nb = "undefined" != typeof p.Symbol && "undefined" != typeof p.Symbol.hasInstance;

    function ob(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function A(a, b, c) {
        return -1 === b ? null : b >= a.l ? a.i ? a.i[b] : void 0 : (void 0 === c ? 0 : c) && a.i && (c = a.i[b], null != c) ? c : a.u[b + a.j]
    }

    function B(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || mb(a);
        b < a.l && !d ? a.u[b + a.j] = c : (a.i || (a.i = a.u[a.l + a.j] = {}))[b] = c;
        return a
    }

    function pb(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        var e = A(a, b, d);
        null == e && (e = lb);
        if (hb(a.u)) c && (ib(e), Object.freeze(e));
        else if (e === lb || hb(e)) e = gb(e.slice()), B(a, b, e, d);
        return e
    }

    function qb(a, b) {
        a = A(a, b);
        return null == a ? a : !!a
    }

    function C(a, b, c) {
        a = A(a, b);
        return null == a ? c : a
    }

    function D(a, b, c) {
        a = qb(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }

    function rb(a, b, c) {
        a = A(a, b);
        a = null == a ? a : +a;
        return null == a ? void 0 === c ? 0 : c : a
    }

    function tb(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return B(a, b, null == c ? gb([]) : Array.isArray(c) ? gb(c) : c, d)
    }

    function ub(a, b, c) {
        mb(a);
        0 !== c ? B(a, b, c) : B(a, b, void 0, !1, !1);
        return a
    }

    function vb(a, b, c, d) {
        mb(a);
        (c = wb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), B(a, c, void 0));
        return B(a, b, d)
    }

    function xb(a, b, c) {
        return wb(a, b) === c ? c : -1
    }

    function wb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != A(a, e) && (0 !== c && B(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function G(a, b, c) {
        if (-1 === c) return null;
        a.h || (a.h = {});
        var d = a.h[c];
        if (d) return d;
        var e = A(a, c, !1);
        if (null == e) return d;
        b = new b(e);
        hb(a.u) && ib(b.u);
        return a.h[c] = b
    }

    function H(a, b, c) {
        a.h || (a.h = {});
        var d = hb(a.u),
            e = a.h[c];
        if (!e) {
            var f = pb(a, c, !0, !1);
            e = [];
            d = d || hb(f);
            for (var g = 0; g < f.length; g++) e[g] = new b(f[g]), d && ib(e[g].u);
            d && (ib(e), Object.freeze(e));
            a.h[c] = e
        }
        return e
    }

    function yb(a, b, c, d) {
        mb(a);
        a.h || (a.h = {});
        var e = d ? d.u : d;
        a.h[b] = d;
        return vb(a, b, c, e)
    }

    function zb(a, b, c) {
        var d = void 0 === d ? !1 : d;
        mb(a);
        if (c) {
            var e = gb([]);
            for (var f = 0; f < c.length; f++) e[f] = c[f].u;
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0), e = lb;
        return B(a, b, e, d)
    }

    function I(a, b, c) {
        return C(a, b, void 0 === c ? "" : c)
    }

    function Ab(a, b, c) {
        return C(a, xb(a, c, b), 0)
    }

    function Bb(a, b, c, d) {
        return G(a, b, xb(a, d, c))
    };

    function Cb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && cb && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    if (!bb) {
                        bb = {};
                        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                            var f = c.concat(d[e].split(""));
                            ab[e] = f;
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g];
                                void 0 === bb[h] && (bb[h] = g)
                            }
                        }
                    }
                    b = ab[b];
                    c = Array(Math.floor(a.length / 3));
                    d = b[64] || "";
                    for (e = f = 0; f < a.length -
                        2; f += 3) {
                        var k = a[f],
                            l = a[f + 1];
                        h = a[f + 2];
                        g = b[k >> 2];
                        k = b[(k & 3) << 4 | l >> 4];
                        l = b[(l & 15) << 2 | h >> 6];
                        h = b[h & 63];
                        c[e++] = g + k + l + h
                    }
                    g = 0;
                    h = d;
                    switch (a.length - f) {
                        case 2:
                            g = a[f + 1], h = b[(g & 15) << 2] || d;
                        case 1:
                            a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                    }
                    return c.join("")
                }
        }
        return a
    };

    function Db(a) {
        var b = Eb;
        b = void 0 === b ? Fb : b;
        return Gb(a, b)
    }

    function Hb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Gb(a, b);
            else if (jb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Hb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function Gb(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Hb(c[d], b);
        Array.isArray(a) && fb(a) & 1 && gb(c);
        return c
    }

    function Eb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Cb(a);
        return Array.isArray(a) ? Db(a) : a
    }

    function Fb(a) {
        return cb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };

    function Ib(a) {
        w.setTimeout(function() {
            throw a;
        }, 0)
    };

    function Jb(a, b, c) {
        a || (a = Kb);
        Kb = null;
        var d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.j = (d ? 0 : -1) - (this.constructor.h || 0);
        this.h = void 0;
        this.u = a;
        a: {
            d = this.u.length;a = d - 1;
            if (d && (d = this.u[a], jb(d))) {
                this.l = a - this.j;
                this.i = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j), this.i = void 0) : this.l = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.l) a += this.j, (d = this.u[a]) ? Array.isArray(d) && gb(d) : this.u[a] = lb;
                else {
                    d = this.i || (this.i = this.u[this.l + this.j] = {});
                    var e = d[a];
                    e ? Array.isArray(e) &&
                        gb(e) : d[a] = lb
                }
    }
    Jb.prototype.toJSON = function() {
        var a = this.u;
        return kb ? a : Db(a)
    };

    function Lb(a) {
        kb = !0;
        try {
            return JSON.stringify(a.toJSON(), Mb)
        } finally {
            kb = !1
        }
    }

    function Nb(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        Array.isArray(b) || Ib(Error("Expected to deserialize an Array but got " + wa(b) + ": " + b));
        Kb = b;
        a = new a(b);
        Kb = null;
        return a
    }

    function Mb(a, b) {
        return Cb(b)
    }
    var Kb;

    function Ob() {
        Jb.apply(this, arguments)
    }
    v(Ob, Jb);

    function J() {
        Ob.apply(this, arguments)
    }
    v(J, Ob);
    if (nb) {
        var Pb = {};
        Object.defineProperties(Ob, (Pb[p.Symbol.hasInstance] = ob(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), Pb));
        var Qb = {};
        Object.defineProperties(J, (Qb[p.Symbol.hasInstance] = ob(Object[p.Symbol.hasInstance]), Qb))
    };

    function Rb(a) {
        J.call(this, a, -1, Sb)
    }
    v(Rb, J);

    function Tb(a) {
        J.call(this, a)
    }
    v(Tb, J);
    var Sb = [2, 3];

    function Ub(a, b) {
        this.i = a === Vb && b || "";
        this.h = Wb
    }
    var Wb = {},
        Vb = {};

    function Xb(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Yb(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Zb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var $b;

    function ac() {
        if (void 0 === $b) {
            var a = null,
                b = w.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ha,
                        createScript: Ha,
                        createScriptURL: Ha
                    })
                } catch (c) {
                    w.console && w.console.error(c.message)
                }
                $b = a
            } else $b = a
        }
        return $b
    };

    function bc(a, b) {
        this.h = b === cc ? a : ""
    }

    function dc(a, b) {
        a = ec.exec(fc(a).toString());
        var c = a[3] || "";
        return gc(a[1] + hc("?", a[2] || "", b) + hc("#", c, void 0))
    }
    bc.prototype.toString = function() {
        return this.h + ""
    };

    function fc(a) {
        return a instanceof bc && a.constructor === bc ? a.h : "type_error:TrustedResourceUrl"
    }
    var ec = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        cc = {};

    function gc(a) {
        var b = ac();
        a = b ? b.createScriptURL(a) : a;
        return new bc(a, cc)
    }

    function hc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function ic(a, b) {
        this.h = b === jc ? a : ""
    }
    ic.prototype.toString = function() {
        return this.h.toString()
    };
    var jc = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var kc = {};

    function lc() {}

    function mc(a) {
        this.h = a
    }
    v(mc, lc);
    mc.prototype.toString = function() {
        return this.h.toString()
    };

    function nc(a) {
        var b, c = null === (b = ac()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new mc(null !== c && void 0 !== c ? c : a, kc)
    }

    function oc(a) {
        if (a instanceof mc) return a.h;
        throw Error("");
    };

    function pc(a) {
        return a instanceof lc ? oc(a) : fc(a)
    }

    function qc(a) {
        return a instanceof ic && a.constructor === ic ? a.h : "type_error:SafeUrl"
    }

    function rc(a) {
        return a instanceof lc ? oc(a).toString() : fc(a).toString()
    };
    var sc = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function tc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function uc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function vc(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function wc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function xc(a, b) {
        a.removeEventListener && a.removeEventListener("message", b, !1)
    };

    function yc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function zc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!xa(f) || ya(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ya(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Ra(g ? Ya(f) : f, d)
            }
        }
    }

    function Ac(a) {
        this.h = a || w.document || document
    }
    n = Ac.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    n.append = function(a, b) {
        zc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Bc() {
        return !Cc() && (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"))
    }

    function Cc() {
        return x("iPad") || x("Android") && !x("Mobile") || x("Silk")
    };
    var Dc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ec = /#|$/;

    function Fc(a) {
        var b = a.search(Ec),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
                c += 7
            }
            c = -1
        }
        if (0 > c) return null;
        d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        c += 7;
        return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, " "))
    };

    function Gc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Za(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Hc(a) {
        return Gc(a.top) ? a.top : null
    }

    function Ic(a, b) {
        var c = Lc("SCRIPT", a);
        c.src = pc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        var e = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]");
        (d = e ? e.nonce || e.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Mc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Nc(a, b) {
        if (!Oc() && !Pc()) {
            var c = Math.random();
            if (c < b) return c = Qc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Qc() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Rc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Sc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Pc = uc(function() {
        return Ua(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Tc) || 1E-4 > Math.random()
    });

    function Uc(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function Vc(a, b) {
        var c = Pc() ? null : Math.floor(1E3 * Qc());
        var d;
        if (d = null != c && a) a: {
            var e = String(c);
            try {
                if (a) {
                    a.setItem(b, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? c : null
    }
    var Oc = uc(function() {
        return Tc("MSIE")
    });

    function Tc(a) {
        return -1 != Ma().indexOf(a)
    }
    var Wc = /^([0-9.]+)px$/,
        Xc = /^(-?[0-9.]{1,30})$/;

    function Yc(a) {
        var b = void 0 === b ? null : b;
        if (!Xc.test(a)) return b;
        a = Number(a);
        return isNaN(a) ? b : a
    }

    function K(a) {
        return (a = Wc.exec(a)) ? +a[1] : null
    }

    function Zc(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var $c = uc(function() {
        return Bc() ? 2 : Cc() ? 1 : 0
    });

    function ad(a) {
        Rc({
            display: "none"
        }, function(b, c) {
            a.style.setProperty(c, b, "important")
        })
    }
    var bd = [];

    function cd() {
        var a = bd;
        bd = [];
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function dd(a, b) {
        0 != a.length && b.head && a.forEach(function(c) {
            if (c && c && b.head) {
                var d = Lc("META");
                b.head.appendChild(d);
                d.httpEquiv = "origin-trial";
                d.content = c
            }
        })
    }

    function ed(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function fd(a) {
        var b = gd;
        "complete" === b.readyState || "interactive" === b.readyState ? (bd.push(a), 1 == bd.length && (p.Promise ? p.Promise.resolve().then(cd) : window.setImmediate ? setImmediate(cd) : setTimeout(cd, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function Lc(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var hd = null;
    var gd = document,
        L = window;
    var id = null;

    function jd(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        w.google_logging_queue || (c = !0, w.google_logging_queue = []);
        w.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == id) {
                id = !1;
                try {
                    var d = Hc(w);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (id = !0);
                    w.localStorage.getItem("google_logging") && (id = !0)
                } catch (e) {}
            }
            a = id
        }
        a && (d = w.document, a = new Ub(Vb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = gc(a instanceof Ub && a.constructor === Ub && a.h === Wb ? a.i : "type_error:Const"), Ic(d, a))
    };

    function kd(a) {
        a = void 0 === a ? w : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function ld(a) {
        return (a = a || kd()) ? Gc(a.master) ? a.master : null : null
    };

    function md(a) {
        var b = ra.apply(1, arguments);
        if (0 === b.length) return nc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return nc(c.join(""))
    };

    function nd(a) {
        var b = void 0 === b ? 1 : b;
        a = ld(kd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function od(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function pd() {
        var a = void 0 === a ? L : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function qd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function rd() {
        this.i = new sd(this);
        this.h = 0
    }
    rd.prototype.resolve = function(a) {
        td(this);
        this.h = 1;
        this.l = a;
        ud(this.i)
    };
    rd.prototype.reject = function(a) {
        td(this);
        this.h = 2;
        this.j = a;
        ud(this.i)
    };

    function td(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function sd(a) {
        this.h = a
    }
    sd.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        ud(this)
    };

    function ud(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function vd(a) {
        this.h = a.slice(0)
    }
    n = vd.prototype;
    n.forEach = function(a) {
        var b = this;
        this.h.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    n.filter = function(a) {
        return new vd(Sa(this.h, a))
    };
    n.apply = function(a) {
        return new vd(a(this.h.slice(0)))
    };
    n.sort = function(a) {
        return new vd(this.h.slice(0).sort(a))
    };
    n.get = function(a) {
        return this.h[a]
    };
    n.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new vd(b)
    };

    function wd(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function xd() {
        this.h = {};
        this.i = {}
    }
    xd.prototype.set = function(a, b) {
        var c = yd(a);
        this.h[c] = b;
        this.i[c] = a
    };
    xd.prototype.get = function(a, b) {
        a = yd(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    xd.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function yd(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    };

    function zd(a, b) {
        this.h = a;
        this.i = b
    }

    function Ad(a) {
        return null != a.h ? a.h.value : null
    }

    function Bd(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    zd.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof zd ? a : Cd(a)) : this
    };

    function Dd(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function Cd(a) {
        return new zd({
            value: a
        }, null)
    }

    function Ed(a) {
        return new zd(null, a)
    }

    function Fd(a) {
        try {
            return Cd(a())
        } catch (b) {
            return Ed(b)
        }
    };

    function Gd(a) {
        this.h = new xd;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    Gd.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    Gd.prototype.contains = function(a) {
        return void 0 !== this.h.h[yd(a)]
    };

    function Hd() {
        this.h = new xd
    }
    Hd.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new Gd, this.h.set(a, c));
        c.add(b)
    };

    function Id(a) {
        J.call(this, a, -1, Jd)
    }
    v(Id, J);
    Id.prototype.getId = function() {
        return A(this, 3)
    };
    var Jd = [4];

    function Kd(a) {
        var b = void 0 === a.Ga ? void 0 : a.Ga,
            c = void 0 === a.gb ? void 0 : a.gb,
            d = void 0 === a.Ra ? void 0 : a.Ra;
        this.h = void 0 === a.bb ? void 0 : a.bb;
        this.l = new vd(b || []);
        this.j = d;
        this.i = c
    };

    function Ld(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            X: "a",
            ca: Md(c)
        });
        null != a.h && b.push({
            X: "as",
            ca: a.h
        });
        null != a.i && b.push({
            X: "i",
            ca: String(a.i)
        });
        null != a.j && b.push({
            X: "rp",
            ca: String(a.j)
        });
        b.sort(function(d, e) {
            return d.X.localeCompare(e.X)
        });
        b.unshift({
            X: "t",
            ca: "aa"
        });
        return b
    }

    function Md(a) {
        a = a.h.slice(0).map(Nd);
        a = JSON.stringify(a);
        return Sc(a)
    }

    function Nd(a) {
        var b = {};
        null != A(a, 7) && (b.q = A(a, 7));
        null != A(a, 2) && (b.o = A(a, 2));
        null != A(a, 5) && (b.p = A(a, 5));
        return b
    };

    function Od(a) {
        J.call(this, a)
    }
    v(Od, J);
    Od.prototype.setLocation = function(a) {
        return B(this, 1, a)
    };

    function Pd(a, b) {
        this.Ja = a;
        this.Qa = b
    }

    function Qd(a) {
        var b = [].slice.call(arguments).filter(tc(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ja || []);
            d = t(Object, "assign").call(Object, d, e.Qa)
        });
        return new Pd(c, d)
    }

    function Rd(a) {
        switch (a) {
            case 1:
                return new Pd(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Pd(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Pd(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Pd(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Sd(a) {
        if (null == a) a = null;
        else {
            var b = Ld(a);
            a = [];
            b = u(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.ca);
                a.push(c.X + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new Pd(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var Td = {},
        Ud = new Pd(["google-auto-placed"], (Td.google_reactive_ad_format = 40, Td.google_tag_origin = "qs", Td));

    function Vd(a) {
        J.call(this, a)
    }
    v(Vd, J);

    function Wd(a) {
        J.call(this, a)
    }
    v(Wd, J);
    Wd.prototype.getName = function() {
        return A(this, 4)
    };

    function Xd(a) {
        J.call(this, a)
    }
    v(Xd, J);

    function Yd(a) {
        J.call(this, a)
    }
    v(Yd, J);

    function Zd(a) {
        J.call(this, a)
    }
    v(Zd, J);
    var $d = [1, 2, 3];

    function ae(a) {
        J.call(this, a)
    }
    v(ae, J);

    function be(a) {
        J.call(this, a, -1, ce)
    }
    v(be, J);
    var ce = [6, 7, 9, 10, 11];

    function de(a) {
        J.call(this, a, -1, ee)
    }
    v(de, J);

    function fe(a) {
        J.call(this, a)
    }
    v(fe, J);

    function ge(a) {
        J.call(this, a)
    }
    v(ge, J);
    var ee = [1],
        he = [1, 2];

    function ie(a) {
        J.call(this, a, -1, je)
    }
    v(ie, J);

    function ke(a) {
        J.call(this, a)
    }
    v(ke, J);

    function le(a) {
        J.call(this, a, -1, me)
    }
    v(le, J);

    function ne(a) {
        J.call(this, a)
    }
    v(ne, J);

    function oe(a) {
        J.call(this, a)
    }
    v(oe, J);

    function pe(a) {
        J.call(this, a)
    }
    v(pe, J);

    function qe(a) {
        J.call(this, a)
    }
    v(qe, J);
    var je = [1, 2, 5, 7],
        me = [2, 5, 6, 11];

    function re(a) {
        J.call(this, a)
    }
    v(re, J);

    function se(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function te(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        se(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function M(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function N(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function ue(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var ve = new M(1084),
        we = new M(1082, !0),
        xe = new N(62, .001),
        ye = new N(1130, 100),
        ze = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Ae = new N(1114, 1),
        Be = new N(1110),
        Ce = new N(1111),
        De = new N(1112),
        Ee = new N(1113),
        Fe = new N(1104),
        Ge = new N(1108),
        He = new N(1106),
        Ie = new N(1107),
        Je = new N(1105),
        Ke = new N(1115, 1),
        Le = new M(1121),
        Me = new M(1144),
        Ne = new M(1143),
        Oe = new M(316),
        Pe = new M(313),
        Qe = new M(369),
        Re = new M(1093),
        Se = new N(1098),
        Te = new M(1129),
        Ue = new M(1128),
        Ve = new M(1026),
        We = new M(1090),
        Xe = new M(1136, !0),
        Ye = new M(1053, !0),
        Ze = new M(1120),
        $e = new M(1100, !0),
        af = new M(1109, !0),
        bf = new M(1135),
        cf = new N(1046),
        df = new M(1102, !0),
        ef = new M(218),
        ff = new M(217),
        gf = new M(227),
        hf = new M(208),
        jf = new M(282),
        kf = new M(1086),
        lf = new N(1079, 5),
        mf = new M(1141),
        nf = new ue(1939),
        of = new ue(1934, ["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
        ]),
        pf = new M(203),
        qf = new M(84),
        rf = new M(1928),
        sf = new M(1941),
        tf = new M(370946349),
        uf = new M(392736476),
        vf = new N(406149835),
        wf = new ue(1932, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        xf = new N(1935);

    function O(a) {
        var b = "sa";
        if (a.sa && a.hasOwnProperty(b)) return a.sa;
        b = new a;
        return a.sa = b
    };

    function yf() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    }

    function P(a) {
        return O(yf).i(a.h, a.defaultValue)
    }

    function Q(a) {
        return O(yf).j(a.h, a.defaultValue)
    }

    function zf() {
        return O(yf).l(ze.h, ze.defaultValue)
    };

    function Af(a, b, c) {
        function d(f) {
            f = Bf(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Bf(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Cf(a.previousSibling, e),
                    ja: function(f) {
                        return Cf(f.previousSibling, e)
                    },
                    na: 0
                };
            case 2:
                return {
                    init: Cf(a.lastChild, e),
                    ja: function(f) {
                        return Cf(f.previousSibling, e)
                    },
                    na: 0
                };
            case 3:
                return {
                    init: Cf(a.nextSibling, d),
                    ja: function(f) {
                        return Cf(f.nextSibling, d)
                    },
                    na: 3
                };
            case 1:
                return {
                    init: Cf(a.firstChild, d),
                    ja: function(f) {
                        return Cf(f.nextSibling, d)
                    },
                    na: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Bf(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Cf(a, b) {
        return a && b(a) ? a : null
    };
    var Df = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Ef(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = Lc("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c)
    }

    function Ff(a) {
        var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
        Rc(a, function(c, d) {
            c && (b += "&" + d + "=" + encodeURIComponent(c))
        });
        Gf(b)
    }

    function Gf(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Ef(b, a)
    };

    function Hf() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function If(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Jf(a, b, c, d, e) {
        var f = [];
        Rc(a, function(g, h) {
            (g = Kf(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Kf(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Kf(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Jf(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Lf(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = Mf(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, q) {
            return m - q
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = Jf(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function Mf(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function Nf() {
        this.h = Math.random()
    }

    function Of() {
        var a = Pf,
            b = w.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function Qf(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof Hf) var f = c;
            else f = new Hf, Rc(c, function(h, k) {
                var l = f,
                    m = l.l++;
                h = If(k, h);
                l.h.push(m);
                l.i[m] = h
            });
            var g = Lf(f, "/pagead/gen_204?id=" + b + "&");
            g && Ef(w, g)
        } catch (h) {}
    };
    var Rf = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function Sf() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Tf;
        this.sideRailProcessedFixedElements = new p.Set;
        this.sideRailAvailableSpace = new p.Map
    }

    function Uf(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new p.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new p.Map)) : a.google_reactive_ads_global_state = new Sf;
        return a.google_reactive_ads_global_state
    }

    function Tf() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Vf(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Wf(a) {
        return Vf(a).clientWidth
    };

    function Xf(a) {
        return null !== a && void 0 !== a
    }

    function Yf(a, b) {
        if (!b(a)) throw Error(String(a));
    };

    function Zf(a) {
        return "string" === typeof a
    }

    function $f(a) {
        return void 0 === a
    };

    function ag(a) {
        J.call(this, a, -1, bg)
    }
    v(ag, J);
    var bg = [2, 8],
        cg = [3, 4, 5],
        dg = [6, 7];
    var eg;
    eg = {
        wb: 0,
        Ya: 3,
        Za: 4,
        $a: 5
    };
    var fg = eg.Ya,
        gg = eg.Za,
        hg = eg.$a;

    function ig(a) {
        return null != a ? !a : a
    }

    function jg(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function kg(a, b) {
        var c = H(a, ag, 2);
        if (!c.length) return lg(a, b);
        a = C(a, 1, 0);
        if (1 === a) return ig(kg(c[0], b));
        c = Ta(c, function(d) {
            return function() {
                return kg(d, b)
            }
        });
        switch (a) {
            case 2:
                return jg(c, !1);
            case 3:
                return jg(c, !0)
        }
    }

    function lg(a, b) {
        var c = wb(a, cg);
        a: {
            switch (c) {
                case fg:
                    var d = Ab(a, 3, cg);
                    break a;
                case gg:
                    d = Ab(a, 4, cg);
                    break a;
                case hg:
                    d = Ab(a, 5, cg);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ka(pb(a, 8)))
            } catch (f) {
                return
            }
            b = C(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = I(a, xb(a, dg, 7), void 0);
            else a: {
                switch (c) {
                    case gg:
                        a = rb(a, xb(a, dg, 6), void 0);
                        break a;
                    case hg:
                        a = I(a, xb(a, dg, 7), void 0);
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Ka(String(e),
                    a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return Zf(a) && Zf(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Ka(String(e), a);
                    case 11:
                        return null != e && 1 === Ka(String(e), a)
                }
            }
        }
    }

    function mg(a, b) {
        return !a || !(!b || !kg(a, b))
    };

    function ng(a) {
        J.call(this, a, -1, og)
    }
    v(ng, J);
    var og = [4];

    function pg(a) {
        J.call(this, a)
    }
    v(pg, J);

    function qg(a) {
        J.call(this, a, -1, rg)
    }
    v(qg, J);
    var rg = [5],
        sg = [1, 2, 3, 6, 7];

    function tg(a) {
        a.Sa.apply(a, ka(ra.apply(1, arguments).map(function(b) {
            return {
                Xa: 4,
                message: b
            }
        })))
    }

    function ug(a) {
        a.Sa.apply(a, ka(ra.apply(1, arguments).map(function(b) {
            return {
                Xa: 7,
                message: b
            }
        })))
    };

    function vg(a) {
        return function() {
            var b = ra.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var wg = vg(function(a) {
        var b = [],
            c = {};
        a = u(a);
        for (var d = a.next(); !d.done; c = {
                ea: c.ea
            }, d = a.next()) c.ea = d.value, vg(function(e) {
            return function() {
                b.push('[{"' + e.ea.Xa + '":' + Lb(e.ea.message) + "}]")
            }
        }(c))();
        return "[[" + b.join(",") + "]]"
    });

    function xg(a, b) {
        if (p.globalThis.fetch) p.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function yg(a) {
        var b = void 0 === b ? xg : b;
        this.l = void 0 === a ? 1E3 : a;
        this.j = b;
        this.i = [];
        this.h = null
    }
    yg.prototype.Sa = function() {
        var a = ra.apply(0, arguments),
            b = this;
        vg(function() {
            b.i.push.apply(b.i, ka(a));
            var c = vg(function() {
                var d = wg(b.i);
                b.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.i = [];
                b.h = null
            });
            100 <= b.i.length ? (null !== b.h && clearTimeout(b.h), b.h = setTimeout(c, 0)) : null === b.h && (b.h = setTimeout(c, b.l))
        })()
    };

    function zg(a) {
        J.call(this, a, -1, Ag)
    }
    v(zg, J);

    function Bg(a, b) {
        var c = void 0 === c ? !1 : c;
        mb(a);
        a.h || (a.h = {});
        var d = b ? b.u : b;
        a.h[1] = b;
        return B(a, 1, d, c)
    }

    function Cg(a, b) {
        return zb(a, 2, b)
    }

    function Dg(a, b) {
        return tb(a, 4, b)
    }

    function Eg(a, b) {
        return zb(a, 5, b)
    }

    function Fg(a, b) {
        return ub(a, 6, b)
    }

    function Gg(a) {
        J.call(this, a)
    }
    v(Gg, J);
    Gg.prototype.V = function() {
        return C(this, 1, 0)
    };

    function Hg(a, b) {
        return ub(a, 1, b)
    }

    function Ig(a, b) {
        return ub(a, 2, b)
    }

    function Jg(a) {
        J.call(this, a)
    }
    v(Jg, J);
    var Ag = [2, 4, 5],
        Kg = [1, 2];

    function Lg(a) {
        J.call(this, a, -1, Mg)
    }
    v(Lg, J);

    function Ng(a) {
        J.call(this, a, -1, Og)
    }
    v(Ng, J);
    var Mg = [2, 3],
        Og = [5],
        Pg = [1, 2, 3, 4];

    function Qg(a) {
        J.call(this, a)
    }
    v(Qg, J);
    Qg.prototype.getTagSessionCorrelator = function() {
        return C(this, 2, 0)
    };

    function Rg(a) {
        var b = new Qg;
        return yb(b, 4, Sg, a)
    }
    var Sg = [4, 5, 7];

    function Tg(a, b, c) {
        var d = void 0 === d ? new yg(b) : d;
        this.i = a;
        this.m = c;
        this.j = d;
        this.h = [];
        this.l = 0 < this.i && Qc() < 1 / this.i
    }

    function Ug(a, b, c, d, e, f) {
        var g = Ig(Hg(new Gg, b), c);
        b = Fg(Cg(Bg(Eg(Dg(new zg, d), e), g), a.h), f);
        b = Rg(b);
        a.l && tg(a.j, Zg(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                return h.V() === g.V() && C(h, 2, 0) === c
            })) a.h.push(g), 100 < a.h.length && a.h.shift()
    }

    function $g(a, b, c, d) {
        if (a.m) {
            var e = new Lg;
            b = zb(e, 2, b);
            c = zb(b, 3, c);
            d && ub(c, 1, d);
            d = new Qg;
            d = yb(d, 7, Sg, c);
            a.l && tg(a.j, Zg(a, d))
        }
    }

    function Zg(a, b) {
        b = ub(b, 1, Date.now());
        var c = ed(window);
        b = ub(b, 2, c);
        return ub(b, 6, a.i)
    };

    function ah() {
        var a = {};
        this.h = (a[fg] = {}, a[gg] = {}, a[hg] = {}, a)
    };
    var bh = /^true$/.test("false");
    var ch = bh;

    function dh(a, b) {
        switch (b) {
            case 1:
                return Ab(a, 1, sg);
            case 2:
                return Ab(a, 2, sg);
            case 3:
                return Ab(a, 3, sg);
            case 6:
                return Ab(a, 6, sg);
            default:
                return null
        }
    }

    function eh(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return D(a, 1);
            case 7:
                return I(a, 3);
            case 2:
                return rb(a, 2);
            case 3:
                return I(a, 3);
            case 6:
                return pb(a, 4);
            default:
                return null
        }
    }
    var fh = uc(function() {
        if (!ch) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function gh(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        O(hh).j[e] = null != (g = null == (f = O(hh).j[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
        e = fh();
        if (null != e[b]) return e[b];
        b = ih(d)[b];
        if (!b) return c;
        b = new qg(b);
        b = jh(b);
        a = eh(b, a);
        return null != a ? a : c
    }

    function jh(a) {
        var b = O(ah).h;
        if (b) {
            var c = Wa(H(a, pg, 5), function(d) {
                return mg(G(d, ag, 1), b)
            });
            if (c) return G(c, ng, 2)
        }
        return G(a, ng, 4)
    }

    function hh() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.h = new p.Map
    }

    function kh(a, b, c) {
        return !!gh(1, a, void 0 === b ? !1 : b, c)
    }

    function lh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(gh(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function mh(a, b, c) {
        return gh(3, a, void 0 === b ? "" : b, c)
    }

    function nh(a, b, c) {
        b = void 0 === b ? [] : b;
        return gh(6, a, b, c)
    }

    function ih(a) {
        return O(hh).i[a] || (O(hh).i[a] = {})
    }

    function oh(a, b) {
        var c = ih(b);
        Rc(a, function(d, e) {
            return c[e] = d
        })
    }

    function ph(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Ra(b, function(h) {
            var k = ih(h);
            Ra(a, function(l) {
                var m = wb(l, sg),
                    q = dh(l, m);
                if (q) {
                    var r, y, F;
                    var z = null != (F = null == (r = O(hh).h.get(h)) ? void 0 : null == (y = r.get(q)) ? void 0 : y.slice(0)) ? F : [];
                    a: {
                        r = new Ng;
                        switch (m) {
                            case 1:
                                vb(r, 1, Pg, q);
                                break;
                            case 2:
                                vb(r, 2, Pg, q);
                                break;
                            case 3:
                                vb(r, 3, Pg, q);
                                break;
                            case 6:
                                vb(r, 4, Pg, q);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        tb(r, 5, z);m = r
                    }
                    if (z = m) {
                        var E;
                        z = !(null == (E = O(hh).j[h]) || !E.has(q))
                    }
                    z && f.push(m);
                    if (E = m) {
                        var S;
                        E = !(null == (S = O(hh).h.get(h)) ||
                            !S.has(q))
                    }
                    E && g.push(m);
                    e || (S = O(hh), S.h.has(h) || S.h.set(h, new p.Map), S.h.get(h).has(q) || S.h.get(h).set(q, []), d && S.h.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && $g(c, f, g, null != d ? d : void 0)
    }

    function qh(a, b) {
        var c = ih(b);
        Ra(a, function(d) {
            var e = new qg(d),
                f = wb(e, sg);
            (e = dh(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function rh() {
        return Ta(t(Object, "keys").call(Object, O(hh).i), function(a) {
            return Number(a)
        })
    }

    function sh(a) {
        Xa(O(hh).l, a) || oh(ih(4), a)
    };

    function th(a) {
        this.methodName = a
    }
    var uh = new th(1),
        vh = new th(16),
        wh = new th(15),
        xh = new th(2),
        yh = new th(3),
        zh = new th(4),
        Ah = new th(5),
        Bh = new th(6),
        Ch = new th(7),
        Dh = new th(8),
        Eh = new th(9),
        Fh = new th(10),
        Gh = new th(11),
        Hh = new th(12),
        Ih = new th(13),
        Jh = new th(14);

    function Kh(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function Lh(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function Mh(a) {
        Kh(Ah, kh, a);
        Kh(Bh, lh, a);
        Kh(Ch, mh, a);
        Kh(Dh, nh, a);
        Kh(Ih, qh, a);
        Kh(wh, sh, a)
    }

    function Nh(a) {
        Kh(zh, function(b) {
            O(ah).h = b
        }, a);
        Kh(Eh, function(b, c) {
            var d = O(ah);
            d.h[fg][b] || (d.h[fg][b] = c)
        }, a);
        Kh(Fh, function(b, c) {
            var d = O(ah);
            d.h[gg][b] || (d.h[gg][b] = c)
        }, a);
        Kh(Gh, function(b, c) {
            var d = O(ah);
            d.h[hg][b] || (d.h[hg][b] = c)
        }, a);
        Kh(Jh, function(b) {
            for (var c = O(ah), d = u([fg, gg, hg]), e = d.next(); !e.done; e = d.next()) e = e.value, t(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function Oh(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Ph() {
        this.l = function() {};
        this.i = function() {};
        this.j = function() {};
        this.h = function() {
            return []
        }
    }

    function Qh(a, b, c) {
        a.l = Lh(uh, b, function() {});
        a.j = function(d) {
            Lh(xh, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return Lh(yh, b, function() {
                return []
            })(c)
        };
        a.i = function(d) {
            Lh(vh, b, function() {})(d, c)
        }
    };
    var R = {},
        Rh = (R[23] = .001, R[150] = "", R[211] = !1, R[253] = !1, R[172] = null, R[246] = [], R[226] = [], R[252] = null, R[258] = null, R[251] = null, R[259] = null, R[6] = function(a, b) {
            b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (d) {}
            return !0
        }(window), R[36] = /^true$/.test("false"), R[148] = bh, R[221] = /^true$/.test("false"), R[260] = void 0, R),
        Sh, Th;
    Sh = null !== (Th = w.googletag) && void 0 !== Th ? Th : w.googletag = {
        cmd: []
    };
    t(Object, "assign").call(Object, Rh, Sh._vars_);
    Sh._vars_ = Rh;

    function Uh(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Vh(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Wh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Xh(a, b) {
        this.h = a;
        this.i = b
    }

    function Yh(a, b, c) {
        this.url = a;
        this.H = b;
        this.La = !!c;
        this.depth = null
    };
    var Zh = null;

    function $h() {
        if (null === Zh) {
            Zh = "";
            try {
                var a = "";
                try {
                    a = w.top.location.hash
                } catch (c) {
                    a = w.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Zh = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Zh
    };

    function ai() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function bi() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function ci(a, b) {
        var c = bi() || ai();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var di = w.performance,
        ei = !!(di && di.mark && di.measure && di.clearMarks),
        fi = uc(function() {
            var a;
            if (a = ei) a = $h(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function gi() {
        this.events = [];
        this.i = w || w;
        var a = null;
        w && (w.google_js_reporting_queue = w.google_js_reporting_queue || [], this.events = w.google_js_reporting_queue, a = w.google_measure_js_timing);
        this.h = fi() || (null != a ? a : 1 > Math.random())
    }

    function hi(a) {
        a && di && fi() && (di.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), di.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    gi.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new ci(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        di && fi() && di.mark(b);
        return a
    };
    gi.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (bi() || ai()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            di && fi() && di.mark(b);
            !this.h || 2048 < this.events.length || this.events.push(a)
        }
    };

    function ii() {
        var a = ji;
        this.m = Pf;
        this.i = null;
        this.l = this.I;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = ii.prototype;
    n.Ua = function(a) {
        this.l = a
    };
    n.Ta = function(a) {
        this.i = a
    };
    n.Va = function(a) {
        this.j = a
    };
    n.oa = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                hi(d), b = this.l(a, new Uh(h, {
                    message: ki(h)
                }), void 0, c)
            } catch (k) {
                this.I(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Oa = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = ra.apply(0, arguments);
            return e.oa(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    n.I = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Hf;
            f.h.push(1);
            f.i[1] = If("context", a);
            Vh(b) || (b = new Uh(b, {
                message: ki(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = If("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (Jc) {}
            if (d) try {
                d(h)
            } catch (Jc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = w;
            b = [];
            g = null;
            do {
                var k = d;
                if (Gc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new Yh(l || "", k));
                try {
                    d = k.parent
                } catch (Jc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = w;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.La = !0)
                }
            var r = new Yh(w.location.href, w, !1);
            k = null;
            var y = b.length - 1;
            for (q = y; 0 <= q; --q) {
                var F = b[q];
                !k && Wh.test(F.url) && (k = F);
                if (F.url && !F.La) {
                    r = F;
                    break
                }
            }
            F = null;
            var z = b.length && b[y].url;
            0 != r.depth && z && (F = b[y]);
            var E = new Xh(r, F);
            if (E.i) {
                var S = E.i.url || "";
                f.h.push(4);
                f.i[4] = If("top", S)
            }
            var sb = {
                url: E.h.url || ""
            };
            if (E.h.url) {
                var Kc = E.h.url.match(Dc),
                    Vg = Kc[1],
                    Wg = Kc[3],
                    Xg = Kc[4];
                r = "";
                Vg && (r += Vg + ":");
                Wg && (r += "//", r += Wg, Xg && (r += ":" + Xg));
                var Yg = r
            } else Yg = "";
            sb = [sb, {
                url: Yg
            }];
            f.h.push(5);
            f.i[5] = sb;
            Qf(this.m, e, f, this.j, c)
        } catch (Jc) {
            try {
                Qf(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ki(Jc),
                    url: E && E.h.url
                }, this.j, c)
            } catch (zp) {}
        }
        return !0
    };
    n.Pa = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.I(a, d instanceof Error ? d : Error(d))
        })
    };

    function ki(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };
    var li = ja(["https://www.googletagservices.com/console/host/host.js"]),
        mi = ja(["https://www.googletagservices.com/console/panel/index.html"]),
        ni = ja(["https://www.googletagservices.com/console/overlay/index.html"]);
    md(li);
    md(mi);
    md(ni);

    function oi(a, b) {
        do {
            var c = Mc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function pi(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = K(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function qi(a, b) {
        return !((Xc.test(b.google_ad_width) || Wc.test(a.style.width)) && (Xc.test(b.google_ad_height) || Wc.test(a.style.height)))
    }

    function ri(a, b) {
        return (a = si(a, b)) ? a.y : 0
    }

    function si(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function ti(a) {
        var b = 0,
            c;
        for (c in Df) - 1 != a.indexOf(c) && (b |= Df[c]);
        return b
    }

    function ui(a, b, c, d, e) {
        if (a !== a.top) return Hc(a) ? 3 : 16;
        if (!(488 > Wf(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Wf(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = Wf(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Mc(b, a)) && (e = K(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function vi(a, b, c, d) {
        var e = ui(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || oi(c, b) ? (b = Wf(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function wi(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function xi(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Mc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function yi(a, b, c) {
        a = si(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function zi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Mc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            wi(b, c, "0px");
            b.style.width = Wf(a) + "px";
            if (0 !== yi(a, b, c)) {
                wi(b, c, "0px");
                var d = yi(a, b, c);
                wi(b, c, -1 * d + "px");
                a = yi(a, b, c);
                0 !== a && a !== d && wi(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function Ai(a, b) {
        this.l = a;
        this.j = b
    }
    Ai.prototype.minWidth = function() {
        return this.l
    };
    Ai.prototype.height = function() {
        return this.j
    };
    Ai.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    Ai.prototype.i = function() {};

    function Bi(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Mc(a, b)) && e[c] && d(e[c]) || null
    }

    function Ci(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Di(a, b, c, d) {
        var e = a && Ei(c, b),
            f = Fi(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Gi(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Ei(a, b) {
        return ri(a, b) < Vf(b).clientHeight - 100
    }

    function Hi(a, b) {
        var c = Bi(b, a, "height", K);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Bi(b, a, "height", K);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && K(b.style.height)) && (c = Math.min(c, d)), (d = Bi(b, a, "maxHeight", K)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Fi(a, b) {
        var c = 0 == od(a);
        return b && c ? Math.max(250, 2 * Vf(a).clientHeight / 3) : 250
    };
    var T = {},
        Ii = (T.google_ad_channel = !0, T.google_ad_client = !0, T.google_ad_host = !0, T.google_ad_host_channel = !0, T.google_adtest = !0, T.google_tag_for_child_directed_treatment = !0, T.google_tag_for_under_age_of_consent = !0, T.google_tag_partner = !0, T.google_restrict_data_processing = !0, T.google_page_url = !0, T.google_debug_params = !0, T.google_adbreak_test = !0, T.google_ad_frequency_hint = !0, T.google_admob_interstitial_slot = !0, T.google_admob_rewarded_slot = !0, T.google_max_ad_content_rating = !0, T),
        Ji = RegExp("(^| )adsbygoogle($| )");

    function Ki(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = yc(d.Db);
            a[e] = d.value
        }
    };

    function Li(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function Mi(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (g) {}
        if (!c.length) return [];
        b = Ya(c);
        b = Ni(a, b);
        "number" === typeof a.i && (c = a.i, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.j) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Oi(b[d]),
                    f = a.j;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    Li.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function Ni(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function Oi(a) {
        var b = [];
        wd(a.getElementsByTagName("p"), function(c) {
            100 <= Pi(c) && b.push(c)
        });
        return b
    }

    function Pi(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        wd(a.childNodes, function(c) {
            b += Pi(c)
        });
        return b
    }

    function Qi(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Ri(a) {
        if (!a) return null;
        var b = A(a, 7);
        if (A(a, 1) || a.getId() || 0 < pb(a, 4).length) {
            var c = a.getId();
            b = pb(a, 4);
            var d = A(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Qi(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Qi(b[c]);
            a = (b = e) ? new Li(b, A(a, 2), A(a, 5), Si(A(a, 6))) : null
        } else a = b ? new Li(b, A(a, 2), A(a, 5), Si(A(a, 6))) : null;
        return a
    }
    var Ti = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Si(a) {
        return null == a ? a : Ti[a]
    }
    var Ui = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Vi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Wi(a) {
        a = Vi(a);
        return a.optimization = a.optimization || {}
    };

    function Xi(a) {
        switch (A(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = G(a, Id, 1), null == b ? b = null : (a = A(a, 2), b = null == a ? null : new Kd({
                    Ga: [b],
                    Ra: a
                }));
                return null != b ? Cd(b) : Ed(Error("Missing dimension when creating placement id"));
            case 3:
                return Ed(Error("Missing dimension when creating placement id"));
            default:
                return Ed(Error("Invalid type: " + A(a, 8)))
        }
    };

    function U(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
    }
    v(U, Error);
    var Pf, Yi, ji = new gi;

    function Zi(a) {
        null != a && (w.google_measure_js_timing = a);
        w.google_measure_js_timing || (a = ji, a.h = !1, a.events != a.i.google_js_reporting_queue && (fi() && Ra(a.events, hi), a.events.length = 0))
    }(function(a) {
        Pf = a || new Nf;
        "number" !== typeof w.google_srt && (w.google_srt = Math.random());
        Of();
        Yi = new ii;
        Yi.Va(!0);
        "complete" == w.document.readyState ? Zi() : ji.h && wc(w, "load", function() {
            Zi()
        })
    })();

    function $i(a, b, c) {
        return Yi.oa(a, b, c)
    }

    function aj(a, b) {
        return Yi.Oa(a, b, void 0, void 0)
    }

    function bj(a, b, c) {
        var d = O(Ph).h();
        !b.eid && d.length && (b.eid = d.toString());
        Qf(Pf, a, b, !0, c)
    }

    function cj(a, b) {
        Yi.Pa(a, b)
    }

    function dj(a, b, c, d) {
        var e;
        Vh(b) ? e = b.msg || ki(b.error) : e = ki(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Uh ? b.error : b, c.pbr || (c.pbr = !0, Yi.I(a, b, .1, d, "puberror")), !1) : Yi.I(a, b, c, d)
    };

    function ej(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null === a || void 0 === a ? 0 : a.apiReady) ? a : void 0
    };

    function fj(a) {
        var b = ej(a);
        return b ? Sa(Ta(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function gj(a, b) {
        return Ya(a.document.querySelectorAll(b))
    }

    function hj(a) {
        var b = [];
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };

    function ij(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function jj(a, b) {
        this.i = a;
        this.h = b
    }

    function kj(a, b) {
        var c = new Hd,
            d = new Gd;
        b.forEach(function(e) {
            if (Bb(e, Xd, 1, $d)) {
                e = Bb(e, Xd, 1, $d);
                if (G(e, Vd, 1) && G(G(e, Vd, 1), Id, 1) && G(e, Vd, 2) && G(G(e, Vd, 2), Id, 1)) {
                    var f = lj(a, G(G(e, Vd, 1), Id, 1)),
                        g = lj(a, G(G(e, Vd, 2), Id, 1));
                    if (f && g)
                        for (f = u(ij({
                                anchor: f,
                                position: A(G(e, Vd, 1), 2)
                            }, {
                                anchor: g,
                                position: A(G(e, Vd, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(za(g.anchor), g.position)
                }
                G(e, Vd, 3) && G(G(e, Vd, 3), Id, 1) && (f = lj(a, G(G(e, Vd, 3), Id, 1))) && c.set(za(f), A(G(e, Vd, 3), 2))
            } else Bb(e, Yd, 2, $d) ? mj(a, Bb(e, Yd, 2, $d),
                c) : Bb(e, Zd, 3, $d) && nj(a, Bb(e, Zd, 3, $d), d)
        });
        return new jj(c, d)
    }

    function mj(a, b, c) {
        G(b, Id, 1) && (a = oj(a, G(b, Id, 1))) && a.forEach(function(d) {
            d = za(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function nj(a, b, c) {
        G(b, Id, 1) && (a = oj(a, G(b, Id, 1))) && a.forEach(function(d) {
            c.add(za(d))
        })
    }

    function lj(a, b) {
        return (a = oj(a, b)) && 0 < a.length ? a[0] : null
    }

    function oj(a, b) {
        return (b = Ri(b)) ? Mi(b, a) : null
    };

    function pj() {
        this.h = new p.Set
    }

    function qj(a) {
        a = rj(a);
        return a.has("all") || a.has("after")
    }

    function sj(a) {
        a = rj(a);
        return a.has("all") || a.has("before")
    }

    function tj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (uj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.h.add(d)
        });
        return !1
    }

    function uj(a) {
        var b = rj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function rj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new p.Set(a.split("|")) : new p.Set
    };

    function vj(a, b) {
        if (!a) return !1;
        a = Mc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function wj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function xj(a) {
        return !!a.nextSibling || !!a.parentNode && xj(a.parentNode)
    };

    function yj(a) {
        var b = {};
        a && pb(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function zj(a, b, c, d, e) {
        this.h = a;
        this.G = b;
        this.j = c;
        this.m = e || null;
        this.v = (this.B = d) ? kj(a.document, H(d, Wd, 5)) : kj(a.document, []);
        this.F = new pj;
        this.i = 0;
        this.l = !1
    }

    function Aj(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = H(a.j, be, 1);
        a.i = 0;
        var d = yj(a.B);
        var e = a.h;
        try {
            var f = e.localStorage.getItem("google_ama_settings");
            var g = f ? Nb(re, f) : null
        } catch (S) {
            g = null
        }
        var h = null !== g && D(g, 2, !1);
        g = Vi(e);
        h && (g.eatf = !0, jd(7, [!0, 0, !1]));
        var k = P(Ue) || P(Te);
        f = P(Te);
        if (k) {
            b: {
                var l = {
                        fb: !1
                    },
                    m = gj(e, ".google-auto-placed"),
                    q = gj(e, 'ins.adsbygoogle[data-anchor-shown="true"]'),
                    r = gj(e, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var y = (fj(e) || gj(e, "div[id^=div-gpt-ad]")).concat(gj(e, "iframe[id^=google_ads_iframe]"));
                var F = gj(e, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    z = gj(e, "ins.adsbygoogle-ablated-ad-slot"),
                    E = gj(e, "div.googlepublisherpluginad");
                k = [].concat(gj(e, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), gj(e, "ins.adsbygoogle"));h = [];l = u([
                    [l.yb, m],
                    [l.fb, q],
                    [l.Bb, r],
                    [l.zb, y],
                    [l.Cb, F],
                    [l.xb, z],
                    [l.Ab, E]
                ]);
                for (m = l.next(); !m.done; m = l.next()) q = u(m.value),
                m = q.next().value,
                q = q.next().value,
                !1 === m ? h = h.concat(q) : k = k.concat(q);k = hj(k);l = hj(h);h = k.slice(0);k = u(l);
                for (l = k.next(); !l.done; l = k.next())
                    for (l = l.value, m = 0; m < h.length; m++)(l.contains(h[m]) || h[m].contains(l)) && h.splice(m, 1);e = Vf(e).clientHeight;
                for (k = 0; k < h.length; k++)
                    if (l = h[k].getBoundingClientRect(), !(0 === l.height && !f || l.top > e)) {
                        e = !0;
                        break b
                    }
                e = !1
            }
            g = e ? g.eatfAbg = !0 : !1
        }
        else g = h;
        if (g) return !0;
        g = new Gd([2]);
        for (e = 0; e < c.length; e++) {
            f = a;
            k = c[e];
            h = e;
            l = b;
            if (!G(k, Od, 4) || !g.contains(A(G(k, Od, 4), 1)) || 1 !== A(k, 8) || k && null != A(k, 4) && d[A(G(k, Od, 4), 2)]) f = null;
            else {
                f.i++;
                if (k = Bj(f, k, l, d)) l = Vi(f.h), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
                    index: h,
                    element: k.ha
                }), jd(7, [!1, f.i, !0]);
                f = k
            }
            if (f) return !0
        }
        jd(7, [!1, a.i, !1]);
        return !1
    }

    function Bj(a, b, c, d) {
        if (b && null != A(b, 4) && d[A(G(b, Od, 4), 2)] || 1 != A(b, 8)) return null;
        d = G(b, Id, 1);
        if (!d) return null;
        d = Ri(d);
        if (!d) return null;
        d = Mi(d, a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Ui[A(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = vj(wj(d), f);
                        break a;
                    case 3:
                        f = vj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = vj(g ? 1 == g.nodeType ? g : wj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !xj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !se(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c =
                f)) {
            c = a.v;
            f = A(b, 2);
            g = za(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(za(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(za(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c && (c = P(bf))) {
            c = a.F;
            f = A(b, 2);
            a: switch (f) {
                case 1:
                    g = qj(d.previousElementSibling) || sj(d);
                    break a;
                case 4:
                    g = qj(d) || sj(d.nextElementSibling);
                    break a;
                case 2:
                    g = sj(d.firstElementChild);
                    break a;
                case 3:
                    g = qj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " +
                        f);
            }
            c = g || tj(c, d, f)
        }
        if (c) return null;
        c = G(b, ae, 3);
        f = {};
        c && (f.Wa = A(c, 1), f.Ha = A(c, 2), f.cb = !!qb(c, 3));
        c = G(b, Od, 4) && A(G(b, Od, 4), 2) ? A(G(b, Od, 4), 2) : null;
        c = Rd(c);
        g = null != A(b, 12) ? A(b, 12) : null;
        g = null == g ? null : new Pd(null, {
            google_ml_rank: g
        });
        b = Cj(a, b);
        b = Qd(a.m, c, g, b);
        c = a.h;
        a = a.G;
        var h = c.document,
            k = f.cb || !1;
        g = (new Ac(h)).createElement("DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.lb && Ki(k, f.lb);
        h = (new Ac(h)).createElement("INS");
        k = h.style;
        k.display =
            "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Wa && (k.marginTop = f.Wa);
        f.Ha && (k.marginBottom = f.Ha);
        f.ab && Ki(k, f.ab);
        g.appendChild(h);
        f = {
            ra: g,
            ha: h
        };
        f.ha.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ja) f.ra.className = h.join(" ");
        h = f.ha;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.ra;
                var q = void 0 === q ? 0 : q;
                if (P(Pe)) {
                    q = void 0 === q ? 0 : q;
                    var r = Af(d, e, q);
                    if (r.init) {
                        var y = r.init;
                        for (d = y; d = r.ja(d);) y = d;
                        var F = {
                            anchor: y,
                            position: r.na
                        }
                    } else F = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    te(m, F.anchor, F.position)
                } else te(m, d, e);
                b: {
                    var z = f.ha;z.dataset.adsbygoogleStatus = "reserved";z.className += " adsbygoogle-noablate";m = {
                        element: z
                    };
                    var E = b && b.Qa;
                    if (z.hasAttribute("data-pub-vars")) {
                        try {
                            E = JSON.parse(z.getAttribute("data-pub-vars"))
                        } catch (S) {
                            break b
                        }
                        z.removeAttribute("data-pub-vars")
                    }
                    E && (m.params = E);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (S) {
                (z = f.ra) && z.parentNode && (E = z.parentNode, E.removeChild(z),
                    se(E) && (E.style.display = E.getAttribute("data-init-display") || "none"));
                z = !1;
                break a
            }
            z = !0
        }
        return z ? f : null
    }

    function Cj(a, b) {
        return Ad(Dd(Xi(b).map(Sd), function(c) {
            Vi(a.h).exception = c
        }))
    };

    function Dj(a) {
        if (P(Oe)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Nb(ie, b) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function Ej(a) {
        J.call(this, a)
    }
    v(Ej, J);

    function Fj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Fd(function() {
            return Nb(Ej, c)
        }) : Cd(null)
    };

    function Gj() {
        this.S = {}
    }

    function Hj() {
        if (Ij) return Ij;
        var a = ld() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Ij = b : a.google_persistent_state_async = Ij = new Gj
    }

    function Jj(a) {
        return Kj[a] || "google_ps_" + a
    }

    function Lj(a, b, c) {
        b = Jj(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var Ij = null,
        Mj = {},
        Kj = (Mj[8] = "google_prev_ad_formats_by_region", Mj[9] = "google_prev_ad_slotnames_by_region", Mj);

    function Nj(a) {
        this.h = a || {
            cookie: ""
        }
    }
    Nj.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Eb;
            d = c.Fb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.jb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    Nj.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ja(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    Nj.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    Nj.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ja(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            jb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Oj(a) {
        J.call(this, a)
    }
    v(Oj, J);

    function Pj(a) {
        var b = new Oj;
        return B(b, 5, a)
    };

    function Qj() {
        this.v = this.v;
        this.F = this.F
    }
    Qj.prototype.v = !1;
    Qj.prototype.j = function() {
        if (this.F)
            for (; this.F.length;) this.F.shift()()
    };

    function Rj(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Sj(a, b) {
        b = void 0 === b ? 500 : b;
        Qj.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.G = 0;
        this.B = b;
        this.l = null
    }
    v(Sj, Qj);
    Sj.prototype.j = function() {
        this.m = {};
        this.l && (xc(this.h, this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        Qj.prototype.j.call(this)
    };

    function Tj(a) {
        return "function" === typeof a.h.__tcfapi || null != Uj(a)
    }
    Sj.prototype.addEventListener = function(a) {
        function b(f, g) {
            clearTimeout(e);
            f ? (c = f, c.internalErrorState = Rj(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        }
        var c = {},
            d = vc(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.B && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.B));
        try {
            Vj(this, "addEventListener", b)
        } catch (f) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
                e = 0), d()
        }
    };
    Sj.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vj(this, "removeEventListener", null, a.listenerId)
    };

    function Vj(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (Uj(a)) {
            Wj(a);
            var e = ++a.G;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Uj(a) {
        if (a.i) return a.i;
        a.i = Zc(a.h, "__tcfapiLocator");
        return a.i
    }

    function Wj(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, wc(a.h, "message", a.l))
    };

    function Xj(a) {
        var b = a.H,
            c = a.ta,
            d = a.Ia;
        a = Yj({
            H: b,
            Z: a.Z,
            ka: void 0 === a.ka ? !1 : a.ka,
            la: void 0 === a.la ? !1 : a.la
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Zj(b, c).then(function(e) {
            return e.map(ak)
        }).then(function(e) {
            return e.map(function(f) {
                return bk(b, f)
            })
        }).then(d)
    }

    function Yj(a) {
        var b = a.H,
            c = a.Z,
            d = void 0 === a.ka ? !1 : a.ka;
        if (!(a = !(void 0 === a.la ? 0 : a.la) && Tj(new Sj(b)))) {
            if (d = !d) {
                if (c) {
                    c = Fj(b);
                    if (null == c.h) Yi.I(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != A(c, 1)) b: switch (c = A(c, 1), c) {
                        case 1:
                            c = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                    } else c = !1;
                    c = !c
                }
                d = c
            }
            a = d
        }
        if (!a) return bk(b, Pj(!0));
        c = Hj();
        return (c = Lj(c, 24, void 0)) ? bk(b, ak(c)) : Ed(Error("tcunav"))
    }

    function Zj(a, b) {
        return p.Promise.race([ck(), dk(a, b)])
    }

    function ck() {
        return (new p.Promise(function(a) {
            var b = Hj();
            a = {
                resolve: a
            };
            var c = Lj(b, 25, []);
            c.push(a);
            b.S[Jj(25)] = c
        })).then(ek)
    }

    function dk(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, Ed(Error("tcto")))
        })
    }

    function ek(a) {
        return a ? Cd(a) : Ed(Error("tcnull"))
    }

    function ak(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = Rj(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                            void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return Pj(a)
    }

    function bk(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (qb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Cd(b) : Ed(Error("unav"))
    };

    function fk(a) {
        J.call(this, a)
    }
    v(fk, J);

    function gk(a) {
        J.call(this, a, -1, hk)
    }
    v(gk, J);
    var hk = [1, 2];

    function ik(a) {
        this.exception = a
    }

    function jk(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    jk.prototype.start = function() {
        this.l()
    };
    jk.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    Aj(this.h, !0);
                    kk(this);
                    break;
                default:
                    Aj(this.h, !1) ? kk(this) : this.j.setTimeout(Ea(this.l, this), 100)
            }
        } catch (a) {
            kk(this, a)
        }
    };

    function kk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            Vi(e.h);
            H(e.j, be, 1);
            d.call(c, new ik(b))
        } catch (f) {
            a.i.reject(f)
        }
    };

    function lk(a) {
        J.call(this, a, -1, mk)
    }
    v(lk, J);

    function nk(a) {
        J.call(this, a)
    }
    v(nk, J);

    function ok(a) {
        J.call(this, a)
    }
    v(ok, J);
    var mk = [7];

    function pk(a) {
        a = (a = (new Nj(a)).get("FCCDCF", "")) ? a : null;
        try {
            return a ? Nb(lk, a) : null
        } catch (b) {
            return null
        }
    };

    function qk(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var d = Lc("IFRAME", c);
                    d.style.display = "none";
                    d.style.width = "0px";
                    d.style.height = "0px";
                    d.style.border = "none";
                    d.style.zIndex = "-1000";
                    d.style.left = "-1000px";
                    d.style.top = "-1000px";
                    d.name = "__uspapiLocator";
                    c.body.appendChild(d)
                } else a.setTimeout(b, 5)
        }
        var c = a.document;
        b()
    };

    function rk(a) {
        this.h = a;
        this.i = a.document;
        this.j = (a = (a = pk(this.i)) ? G(a, ok, 5) || null : null) ? A(a, 2) : null;
        (a = pk(this.i)) && G(a, nk, 4);
        (a = pk(this.i)) && G(a, nk, 4)
    }

    function sk() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new rk(a), tk(a))
    }

    function tk(a) {
        !a.j || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", qk(a.h), Ga(function() {
            return a.l.apply(a, ka(ra.apply(0, arguments)))
        }))
    }
    rk.prototype.l = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.j
        }, !0)
    };

    function uk(a) {
        J.call(this, a)
    }
    v(uk, J);

    function vk(a) {
        J.call(this, a)
    }
    v(vk, J);
    var wk = [4, 5];

    function xk(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function yk(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function zk(a, b) {
        a = yk(xk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Sc(a),
            d = Ak(a);
        return t(b, "find").call(b, function(e) {
            var f = null != A(e, 7) ? A(G(e, ne, 7), 1) : A(e, 1);
            e = null != A(e, 7) ? A(G(e, ne, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function Ak(a) {
        for (var b = {};;) {
            b[Sc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Bk = {},
        Ck = (Bk.google_ad_channel = !0, Bk.google_ad_host = !0, Bk);

    function Dk(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        bj("ama", b, .01)
    }

    function Ek(a) {
        var b = {};
        Rc(Ck, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Fk(a) {
        a = G(a, ke, 3);
        return !a || A(a, 1) <= Date.now() ? !1 : !0
    }

    function Gk(a) {
        return (a = Dj(a)) ? Fk(a) ? a : null : null
    }

    function Hk(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            Dk(a, {
                lserr: 1
            })
        }
    };

    function Ik(a) {
        J.call(this, a)
    }
    v(Ik, J);

    function Jk(a) {
        J.call(this, a, -1, Kk)
    }
    v(Jk, J);
    var Kk = [1];

    function Lk(a) {
        J.call(this, a, -1, Mk)
    }
    v(Lk, J);
    Lk.prototype.getId = function() {
        return C(this, 1, 0)
    };
    Lk.prototype.V = function() {
        return C(this, 7, 0)
    };
    var Mk = [2];

    function Nk(a) {
        J.call(this, a, -1, Ok)
    }
    v(Nk, J);
    Nk.prototype.V = function() {
        return C(this, 5, 0)
    };
    var Ok = [2];

    function Pk(a) {
        J.call(this, a, -1, Qk)
    }
    v(Pk, J);

    function Rk(a) {
        J.call(this, a, -1, Sk)
    }
    v(Rk, J);
    Rk.prototype.V = function() {
        return C(this, 1, 0)
    };

    function Tk(a) {
        J.call(this, a)
    }
    v(Tk, J);
    var Qk = [1, 4, 2, 3],
        Sk = [2];

    function Uk(a) {
        J.call(this, a, -1, Vk)
    }
    v(Uk, J);

    function Wk(a) {
        return Bb(a, Jk, 14, Xk)
    }
    var Vk = [19],
        Xk = [13, 14];
    var Yk = void 0;

    function Zk() {
        Yf(Yk, Xf);
        return Yk
    }

    function $k(a) {
        Yf(Yk, $f);
        Yk = a
    };

    function al(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && bl(c, void 0 === d ? null : d) ? !0 : cl(a, c, function(e) {
            return Ua(H(e, Tb, 2), function(f) {
                return A(f, 1) === b
            })
        })
    }

    function bl(a, b) {
        return b ? 13 === wb(b, Xk) ? D(Bb(b, Ik, 13, Xk), 1) : 14 === wb(b, Xk) && "" !== a && 1 === pb(Wk(b), 1).length && pb(Wk(b), 1)[0] === a ? D(G(Wk(b), Ik, 2), 1) : !1 : !1
    }

    function dl(a, b) {
        b = C(b, 18, 0); - 1 !== b && (a.tmod = b)
    }

    function el(a) {
        var b = void 0 === b ? "" : b;
        var c = Hc(L) || L;
        return fl(c, a) ? !0 : cl(L, b, function(d) {
            return Ua(pb(d, 3), function(e) {
                return e === a
            })
        })
    }

    function gl(a) {
        return cl(w, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function fl(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Xa(a.split(","), b.toString())
    }

    function cl(a, b, c) {
        a = Hc(a) || a;
        var d = hl(a);
        b && (b = qd(String(b)));
        return Yb(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function hl(a) {
        a = il(a);
        var b = {};
        Rc(a, function(c, d) {
            try {
                var e = new Rb(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function il(a) {
        return P(we) ? (a = Yj({
            H: a,
            Z: Zk()
        }), null != a.h ? (jl("ok"), a = kl(a.h.value)) : (jl(a.i.message), a = {}), a) : kl(a.localStorage)
    }

    function kl(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Xb(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function jl(a) {
        P(ve) && bj("abg_adsensesettings_lserr", {
            s: a,
            g: P(we),
            c: Zk(),
            r: .01
        }, .01)
    };

    function ll(a, b, c, d) {
        ml(new nl(a, b, c, d))
    }

    function nl(a, b, c, d) {
        this.H = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function ml(a) {
        Dd(Bd(Yj({
            H: a.H,
            Z: D(a.i, 6)
        }), function(b) {
            ol(a, b, !0)
        }), function() {
            pl(a)
        })
    }

    function ol(a, b, c) {
        Dd(Bd(ql(b), function(d) {
            rl("ok");
            a.h(d)
        }), function() {
            Hk(a.H, b);
            c ? pl(a) : a.h(null)
        })
    }

    function pl(a) {
        Dd(Bd(sl(a), a.h), function() {
            tl(a)
        })
    }

    function tl(a) {
        Xj({
            H: a.H,
            Z: D(a.i, 6),
            ta: 50,
            Ia: function(b) {
                ul(a, b)
            }
        })
    }

    function ql(a) {
        return (a = Gk(a)) ? Cd(a) : Ed(Error("invlocst"))
    }

    function sl(a) {
        a: {
            var b = a.H;
            var c = a.j;a = a.i;
            if (13 === wb(a, Xk)) b = (b = G(G(Bb(a, Ik, 13, Xk), fk, 2), gk, 2)) && 0 < H(b, be, 1).length ? b : null;
            else {
                if (14 === wb(a, Xk)) {
                    var d = pb(Wk(a), 1),
                        e = G(G(G(Wk(a), Ik, 2), fk, 2), gk, 2);
                    if (1 === d.length && d[0] === c && e && 0 < H(e, be, 1).length && I(a, 17) === b.location.host) {
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new ie, a = H(b, be, 1), c = zb(c, 1, a), b = H(b, le, 2), b = zb(c, 7, b), b = Cd(b)) : b = Ed(Error("invtag"));
        return b
    }

    function ul(a, b) {
        Dd(Bd(b, function(c) {
            ol(a, c, !1)
        }), function(c) {
            rl(c.message);
            a.h(null)
        })
    }

    function rl(a) {
        bj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    };

    function vl(a) {
        Dk(a, {
            atf: 1
        })
    }

    function wl(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Dk(a, {
            atf: 0
        })
    };

    function V(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function xl(a) {
        a = V(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Fa: !0,
            tb: b,
            qa: a.ablation_viewport_offset
        } : null
    }

    function yl(a, b) {
        a = V(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function zl(a) {
        V(L).allow_second_reactive_tag = a
    }

    function Al() {
        var a = V(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Bl(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Cl(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Cl(a) {
        var b = "";
        Rc(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    $a || !x("Safari") || Oa();

    function Dl() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function El() {
        var a = new Dl;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function Fl(a) {
        a = void 0 === a ? function() {} : a;
        w.google_llp || (w.google_llp = {});
        var b = w.google_llp,
            c = b[7];
        if (c) return c;
        c = El();
        b[7] = c;
        a();
        return c
    }

    function Gl(a) {
        return Fl(function() {
            Ic(w.document, a)
        }).promise
    };

    function Hl(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Il(a) {
        if (w.google_apltlad || w !== w.top || !a.google_ad_client) return null;
        w.google_apltlad = !0;
        var b = Hl(a.google_ad_client),
            c = b.enable_page_level_ads;
        Rc(a, function(d, e) {
            Ii[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    }

    function Jl(a) {
        return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Kl(a, b) {
        this.h = w;
        this.i = a;
        this.j = b
    }

    function Ll(a) {
        P(mf) ? ll(a.h, a.j, a.i.google_ad_client || "", function(b) {
            var c = a.h,
                d = a.i;
            V(L).ama_ran_on_page || b && Ml(c, d, b)
        }) : Xj({
            H: a.h,
            Z: D(a.j, 6),
            ta: 50,
            Ia: function(b) {
                return Nl(a, b)
            }
        })
    }

    function Nl(a, b) {
        Dd(Bd(b, function(c) {
            Ol("ok");
            var d = a.h,
                e = a.i;
            if (!V(L).ama_ran_on_page) {
                var f = Gk(c);
                f ? Ml(d, e, f) : Hk(d, c)
            }
        }), function(c) {
            return Ol(c.message)
        })
    }

    function Ol(a) {
        bj("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function Ml(a, b, c) {
        if (null != A(c, 24)) {
            var d = Wi(a);
            d.availableAbg = !0;
            var e, f;
            d.ablationFromStorage = !!(null == (e = G(c, de, 24)) ? 0 : null == (f = G(e, fe, 3)) ? 0 : Bb(f, ge, 2, he))
        }
        if (Jl(b) && (d = zk(a, H(c, le, 7)), !d || !qb(d, 8))) return;
        V(L).ama_ran_on_page = !0;
        var g;
        if (null == (g = G(c, qe, 15)) ? 0 : qb(g, 23)) V(a).enable_overlap_observer = !0;
        if ((g = G(c, oe, 13)) && 1 === A(g, 1)) {
            var h = 0,
                k = G(g, pe, 6);
            k && A(k, 3) && (h = A(k, 3) || 0);
            yl(a, h)
        } else if (null == (h = G(c, de, 24)) ? 0 : null == (k = G(h, fe, 3)) ? 0 : Bb(k, ge, 2, he)) Wi(a).ablatingThisPageview = !0, yl(a, 1);
        jd(3, [c.toJSON()]);
        var l = b.google_ad_client || "";
        b = Ek(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        var m = Qd(Ud, new Pd(null, b));
        $i(782, function() {
            var q = m;
            try {
                var r = zk(a, H(c, le, 7)),
                    y;
                if (y = r) a: {
                    var F = pb(r, 2);
                    if (F)
                        for (var z = 0; z < F.length; z++)
                            if (1 == F[z]) {
                                y = !0;
                                break a
                            }
                    y = !1
                }
                if (y) {
                    if (A(r, 4)) {
                        y = {};
                        var E = new Pd(null, (y.google_package = A(r, 4), y));
                        q = Qd(q, E)
                    }
                    var S = new zj(a, l, c, r, q),
                        sb = new rd;
                    (new jk(a, S, sb)).start();
                    sb.i.then(Fa(vl, a), Fa(wl, a))
                }
            } catch (Kc) {
                Dk(a, {
                    atf: -1
                })
            }
        })
    };
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Pl = ja(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700"]);

    function Ql(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function Rl(a) {
        var b = L.document;
        if (b.currentScript) return Ql(b.currentScript, a);
        b = u(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === Ql(c.value, a)) return 0;
        return 1
    };

    function Sl(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[fg] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return al(L, Number(g))
        }, c[24] = function(g) {
            return el(Number(g))
        }, c[61] = function() {
            return D(b, 6)
        }, c[63] = function() {
            return D(b, 6) || ".google.ch" === I(b, 8)
        }, c), f[gg] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (l) {
                h = null
            }
            g = Number(g);
            g = void 0 === g ? 0 : g;
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            var k = Uc(h, g);
            h = null === k ? Vc(h, g) : k;
            return null !== h && void 0 !== h ? h : void 0
        }, d), f[hg] = (e[6] =
            function() {
                return I(b, 15)
            }, e), f
    };

    function Tl(a) {
        a = void 0 === a ? w : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Ul(a, b) {
        try {
            var c = a.split(".");
            a = w;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function Vl() {
        var a = {};
        this[fg] = (a[8] = function(b) {
            try {
                return null != va(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = va(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Xa(O(Ph).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = Ul(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!w.document.querySelector(b)
            } catch (c) {}
        }, a);
        a = {};
        this[gg] =
            (a[3] = function() {
                return $c()
            }, a[6] = function(b) {
                b = Ul(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = w;
                b = void 0 === b ? "" : b;
                c = void 0 === c ? window : c;
                b = (c = (c = c.location.href.match(Dc)[3] || null) ? decodeURI(c) : c) ? Sc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
        a = {};
        this[hg] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = Ul(b, "string");
            return void 0 !== b ? b : void 0
        }, a[10] = function() {
            try {
                var b =
                    w.document;
                return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
            } catch (c) {
                return ""
            }
        }, a)
    };
    var Wl = [12, 13, 20];

    function Xl() {}
    Xl.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.Ka ? !1 : d.Ka,
            g = void 0 === d.kb ? {} : d.kb;
        d = void 0 === d.mb ? [] : d.mb;
        this.l = a;
        this.v = {};
        this.F = f;
        this.m = g;
        a = {};
        this.i = (a[b] = [], a[4] = [], a);
        this.j = {};
        (b = $h()) && Ra(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.j[h] = !0)
        });
        Ra(d, function(h) {
            e.j[h] = !0
        });
        this.h = c;
        return this
    };

    function Yl(a, b, c) {
        var d = [],
            e = Zl(a.l, b),
            f;
        if (f = 9 !== b) a.v[b] ? f = !0 : (a.v[b] = !0, f = !1);
        if (f) {
            var g;
            null == (g = a.h) || Ug(g, b, c, d, [], 4);
            return d
        }
        if (!e.length) {
            var h;
            null == (h = a.h) || Ug(h, b, c, d, [], 3);
            return d
        }
        var k = Xa(Wl, b),
            l = [];
        Ra(e, function(q) {
            var r = new Jg;
            if (q = $l(a, q, c, r)) 0 !== wb(r, Kg) && l.push(r), r = q.getId(), d.push(r), am(a, r, k ? 4 : c), (q = H(q, qg, 2)) && (k ? ph(q, rh(), a.h, r) : ph(q, [c], a.h, r))
        });
        var m;
        null == (m = a.h) || Ug(m, b, c, d, l, 1);
        return d
    }

    function am(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        Xa(a, b) || a.push(b)
    }

    function bm(a, b) {
        a.l.push.apply(a.l, ka(Sa(Ta(b, function(c) {
            return new Rk(c)
        }), function(c) {
            return !Xa(Wl, c.V())
        })))
    }

    function $l(a, b, c, d) {
        var e = O(ah).h;
        if (!mg(G(b, ag, 3), e)) return null;
        var f = H(b, Lk, 2),
            g = C(b, 6, 0);
        if (g) {
            vb(d, 1, Kg, g);
            f = e[gg];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), ub(d, 3, c)
            } catch (k) {}
            return (b = cm(b, c)) ? dm(a, [b], 1) : null
        }
        if (g = C(b, 10, 0)) {
            vb(d, 2, Kg, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[gg][9];
                    break;
                case 2:
                    h = e[gg][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === C(b, 11, 0)) return null;
            void 0 !== c && ub(d, 3, c);
            return (b = cm(b, c)) ? dm(a, [b], 1) : null
        }
        d = e ? Sa(f, function(k) {
            return mg(G(k,
                ag, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * C(b, 1, 0);
        return (b = C(b, 4, 0)) ? em(a, b, c, d) : dm(a, d, c / 1E3)
    }

    function em(a, b, c, d) {
        var e = null != a.m[b] ? a.m[b] : 1E3;
        if (0 >= e) return null;
        d = dm(a, d, c / e);
        a.m[b] = d ? 0 : e - c;
        return d
    }

    function dm(a, b, c) {
        var d = a.j,
            e = Va(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.F ? null : Nc(b, c)
    }

    function fm(a, b) {
        Kh(uh, function(c) {
            a.j[c] = !0
        }, b);
        Kh(xh, function(c, d) {
            return Yl(a, c, d)
        }, b);
        Kh(yh, function(c) {
            return (a.i[c] || []).concat(a.i[4])
        }, b);
        Kh(Hh, function(c) {
            return bm(a, c)
        }, b);
        Kh(vh, function(c, d) {
            return am(a, c, d)
        }, b)
    }

    function Zl(a, b) {
        return (a = Va(a, function(c) {
            return c.V() == b
        })) && H(a, Nk, 2) || []
    }

    function cm(a, b) {
        var c = H(a, Lk, 2),
            d = c.length,
            e = C(a, 8, 0);
        a = d * C(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Qc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = O(ah).h;
        return !c || e && !mg(G(c, ag, 3), e) ? null : c
    };

    function gm() {
        this.h = function() {}
    }

    function hm(a) {
        O(gm).h(a)
    };
    var im, jm, km, lm, mm, nm;

    function om(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? Tl() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new Tg(null != (lm = null == (im = G(a, Tk, 5)) ? void 0 : C(im, 2, 0)) ? lm : 0, null != (mm = null == (jm = G(a, Tk, 5)) ? void 0 : C(jm, 4, 0)) ? mm : 0, null != (nm = null == (km = G(a, Tk, 5)) ? void 0 : D(km, 3)) ? nm : !1) : f;
        d.hasOwnProperty("init-done") ? (Lh(Hh, d)(Ta(H(a, Rk, 2), function(g) {
            return g.toJSON()
        })), Lh(Ih, d)(Ta(H(a, qg, 1), function(g) {
            return g.toJSON()
        }), e), b && Lh(Jh, d)(b), pm(d, e)) : (fm(O(Xl).init(H(a, Rk, 2), e, f, c), d), Mh(d), Nh(d), Oh(d), pm(d, e), ph(H(a, qg, 1), [e], f,
            void 0, !0), ch = ch || !(!c || !c.hb), hm(O(Vl)), b && hm(b))
    }

    function pm(a, b) {
        a = void 0 === a ? Tl() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        Qh(O(Ph), c, d);
        qm(a, b);
        O(gm).h = Lh(Jh, a);
        O(yf).m()
    }

    function qm(a, b) {
        var c = O(yf);
        c.i = function(d, e) {
            return Lh(Ah, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Lh(Bh, a, function() {
                return 0
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Lh(Ch, a, function() {
                return ""
            })(d, e, b)
        };
        c.h = function(d, e) {
            return Lh(Dh, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            Lh(wh, a)(b)
        }
    };

    function rm(a, b, c) {
        var d = V(a);
        if (d.plle) pm(Tl(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == Uc(d, "goog_pem_mod") && Vc(d, "goog_pem_mod");
            d = G(b, Pk, 12);
            e = D(b, 9);
            om(d, Sl(c, b), {
                Ka: e && !!a.google_disable_experiments,
                hb: e
            }, Tl(a));
            if (c = I(b, 15)) c = Number(c), O(Ph).l(c);
            if (c = I(b, 10)) c = Number(c), O(Ph).i(c);
            b = u(pb(b, 19));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, O(Ph).i(c);
            O(Ph).j(12);
            O(Ph).j(10);
            a = Hc(a) || a;
            Bl(a.location, "google_mc_lab") && O(Ph).i(44738307)
        }
    };

    function sm(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };
    var tm = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function um(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function W(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Ai.call(this, a, b);
        this.da = c;
        this.ib = d
    }
    v(W, Ai);
    W.prototype.pa = function() {
        return this.da
    };
    W.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function vm(a) {
        return function(b) {
            return !!(b.da & a)
        }
    };
    var wm = {},
        xm = (wm.image_stacked = 1 / 1.91, wm.image_sidebyside = 1 / 3.82, wm.mobile_banner_image_sidebyside = 1 / 3.82, wm.pub_control_image_stacked = 1 / 1.91, wm.pub_control_image_sidebyside = 1 / 3.82, wm.pub_control_image_card_stacked = 1 / 1.91, wm.pub_control_image_card_sidebyside = 1 / 3.74, wm.pub_control_text = 0, wm.pub_control_text_card = 0, wm),
        ym = {},
        zm = (ym.image_stacked = 80, ym.image_sidebyside = 0, ym.mobile_banner_image_sidebyside = 0, ym.pub_control_image_stacked = 80, ym.pub_control_image_sidebyside = 0, ym.pub_control_image_card_stacked =
            85, ym.pub_control_image_card_sidebyside = 0, ym.pub_control_text = 80, ym.pub_control_text_card = 80, ym),
        Am = {},
        Bm = (Am.pub_control_image_stacked = 100, Am.pub_control_image_sidebyside = 200, Am.pub_control_image_card_stacked = 150, Am.pub_control_image_card_sidebyside = 250, Am.pub_control_text = 100, Am.pub_control_text_card = 150, Am);

    function Cm(a) {
        var b = 0;
        a.T && b++;
        a.J && b++;
        a.K && b++;
        if (3 > b) return {
            M: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.T.split(",");
        var c = a.K.split(",");
        a = a.J.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            M: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            M: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (t(Number, "isNaN").call(Number, g) || 0 === g) return {
                M: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (t(Number, "isNaN").call(Number, g) || 0 === g) return {
                M: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            K: d,
            J: e,
            Na: b
        }
    }

    function Dm(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Em = Za("script");

    function Fm(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.v = a;
        this.U = b;
        this.da = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.P = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.G = void 0 === h ? null : h;
        this.N = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.O = void 0 === q ? null : q;
        this.R = this.B = this.F = null
    }
    Fm.prototype.size = function() {
        return this.U
    };

    function Gm(a, b, c) {
        null != a.da && (c.google_responsive_formats = a.da);
        null != a.P && (c.google_safe_for_responsive_override = a.P);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.G && (c.gfwroml = a.G);
        null != a.N && (c.gfwromr = a.N);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.O && (c.gfwroz = a.O);
        null != a.F && (c.gml = a.F);
        null != a.B && (c.gmr = a.B);
        null != a.R && (c.gzi = a.R);
        b = Hc(window) || window;
        Bl(b.location, "google_responsive_dummy_ad") &&
            (Xa([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + Em + ">window.top.postMessage('" + a + "', '*');\n          </" + Em + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var Hm = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Im(a, b) {
        Ai.call(this, a, b)
    }
    v(Im, Ai);
    Im.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Jm(a, b) {
        Km(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new Fm(9, new Im(a, Math.floor(a * b.google_phwr)));
        var c = Bc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * xm.mobile_banner_image_sidebyside + zm.mobile_banner_image_sidebyside) + 96), a = {
            aa: a,
            $: c,
            J: 1,
            K: 12,
            T: "mobile_banner_image_sidebyside"
        }) : (a = Dm(a), a = {
            aa: a.width,
            $: a.height,
            J: 1,
            K: 13,
            T: "image_sidebyside"
        }) : (a = Dm(a), a = {
            aa: a.width,
            $: a.height,
            J: 4,
            K: 2,
            T: "image_stacked"
        });
        Lm(b, a);
        return new Fm(9, new Im(a.aa, a.$))
    }

    function Mm(a, b) {
        Km(a, b);
        var c = Cm({
            K: b.google_content_recommendation_rows_num,
            J: b.google_content_recommendation_columns_num,
            T: b.google_content_recommendation_ui_type
        });
        if (c.M) a = {
            aa: 0,
            $: 0,
            J: 0,
            K: 0,
            T: "image_stacked",
            M: c.M
        };
        else {
            var d = 2 === c.Na.length && 468 <= a ? 1 : 0;
            var e = c.Na[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Bm[e];
            for (var g = c.J[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.K[d];
            d = Math.floor(((a - 8 * f - 8) / f * xm[e] + zm[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    rb: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    rb: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                aa: a.width,
                $: a.height,
                J: f,
                K: c,
                T: e
            }
        }
        if (a.M) throw new U(a.M);
        Lm(b, a);
        return new Fm(9, new Im(a.aa, a.$))
    }

    function Km(a, b) {
        if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Lm(a, b) {
        a.google_content_recommendation_ui_type = b.T;
        a.google_content_recommendation_columns_num = b.J;
        a.google_content_recommendation_rows_num = b.K
    };

    function Nm(a, b) {
        Ai.call(this, a, b)
    }
    v(Nm, Ai);
    Nm.prototype.h = function() {
        return this.minWidth()
    };
    Nm.prototype.i = function(a, b, c) {
        zi(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var Om = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Pm(a, b) {
        Ai.call(this, a, b)
    }
    v(Pm, Ai);
    Pm.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function Qm(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = ui(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = Wf(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && xi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    zi(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new U("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new Fm(11, new Ai(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new U("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new U("Invalid height: height=" + f);
            if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new U("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Fm(11, new Ai(a, f))
        }
        d = Om[f];
        if (!d) throw new U("Invalid data-ad-layout value: " + f);
        c = Ei(c, b);
        b = Wf(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new Fm(11, "in-article" == f ? new Pm(a, b) : new Ai(a, b))
    };

    function Rm(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Sm(a, b) {
        for (var c = Tm.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var Um = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
        Tm = [Um[6], Um[12], Um[3], Um[0], Um[7], Um[14], Um[1], Um[8], Um[10], Um[4], Um[15], Um[2], Um[11], Um[5], Um[13], Um[9], Um[16]];

    function Vm(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            C: a,
            D: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || Wm(b) || e.google_ad_resize ? (b = vi(a, c, d, e), c = !0 !== b ? {
            C: a,
            D: b
        } : {
            C: Wf(c) || a,
            D: !0
        }) : c = {
            C: a,
            D: 2
        };
        b = c.D;
        return !0 !== b ? {
            C: a,
            D: b
        } : d.parentElement ? {
            C: c.C,
            D: b
        } : {
            C: a,
            D: b
        }
    }

    function Xm(a, b, c, d, e) {
        var f = $i(247, function() {
                return Vm(a, b, c, d, e)
            }),
            g = f.C;
        f = f.D;
        var h = !0 === f,
            k = K(d.style.width),
            l = K(d.style.height),
            m = Ym(g, b, c, d, e, h);
        g = m.Y;
        h = m.W;
        var q = m.pa;
        m = m.Ma;
        var r = Zm(b, q),
            y, F = (y = Bi(d, c, "marginLeft", K)) ? y + "px" : "",
            z = (y = Bi(d, c, "marginRight", K)) ? y + "px" : "";
        y = Bi(d, c, "zIndex") || "";
        return new Fm(r, g, q, null, m, f, h, F, z, l, k, y)
    }

    function Wm(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Ym(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Wf(c)) ? 4 : 3 : ti(b);
        var g = !1,
            h = !1;
        if (488 > Wf(c)) {
            var k = oi(d, c);
            var l = Ei(d, c);
            g = !l && k;
            h = l && k
        }
        l = [Ci(a), vm(b)];
        l.push(Di(488 > Wf(c), c, d, h));
        null != e.google_max_responsive_height && l.push(Gi(e.google_max_responsive_height));
        var m = [function(r) {
            return !r.ib
        }];
        if (g || h) g = Hi(c, d), m.push(Gi(g));
        var q = Sm(Rm(l), Rm(m));
        if (!q) throw new U("No slot size for availableWidth=" + a);
        l = $i(248, function() {
            var r;
            a: if (f) {
                if (e.gfwrnh && (r = K(e.gfwrnh))) {
                    r = {
                        Y: new Nm(a, r),
                        W: !0
                    };
                    break a
                }
                r = a / 1.2;
                var y = Math;
                var F = y.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var z = Infinity;
                else {
                    z = d;
                    var E = Infinity;
                    do {
                        var S = Bi(z, c, "height", K);
                        S && (E = Math.min(E, S));
                        (S = Bi(z, c, "maxHeight", K)) && (E = Math.min(E, S))
                    } while ((z = z.parentElement) && "HTML" != z.tagName);
                    z = E
                }
                y = F.call(y, r, z);
                if (y < .5 * r || 100 > y) y = r;
                P(jf) && !Ei(d, c) && (y = Math.max(y, .5 * Vf(c).clientHeight));
                r = {
                    Y: new Nm(a, Math.floor(y)),
                    W: y < r ? 102 : !0
                }
            } else r = {
                Y: q,
                W: 100
            };
            return r
        });
        g = l.Y;
        l = l.W;
        return "in-article" === e.google_ad_layout &&
            $m(c) ? {
                Y: an(a, c, d, g, e),
                W: !1,
                pa: b,
                Ma: k
            } : {
                Y: g,
                W: l,
                pa: b,
                Ma: k
            }
    }

    function Zm(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function an(a, b, c, d, e) {
        var f = e.google_ad_height || Bi(c, b, "height", K);
        b = Qm(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new W(b.minWidth(), b.height(), 1) : d
    }

    function $m(a) {
        return P(gf) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function bn(a, b, c, d, e) {
        var f;
        (f = Wf(b)) ? 488 > Wf(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, zi(b, c), f = {
            C: f,
            D: !0
        }) : f = {
            C: a,
            D: 5
        } : f = {
            C: a,
            D: 4
        }: f = {
            C: a,
            D: 10
        };
        var g = f;
        f = g.C;
        g = g.D;
        if (!0 !== g || a == f) return new Fm(12, new Ai(a, d), null, null, !0, g, 100);
        a = Ym(f, "auto", b, c, e, !0);
        return new Fm(1, a.Y, a.pa, 2, !0, g, a.W)
    };

    function cn(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = u(Hm), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Wm(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = P(hf) || P(gf) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (dn(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return dn(b), 1
    }

    function en(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Bi(b, d, "width", K) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = fn(a, e, b, c, d)) ? f : Xm(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        Gm(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function fn(a, b, c, d, e) {
        var f = d.google_ad_height || Bi(c, e, "height", K);
        switch (a) {
            case 5:
                return f = $i(247, function() {
                    return Vm(b, d.google_ad_format, e, c, d)
                }), a = f.C, f = f.D, !0 === f && b != a && zi(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Jm(a, d);
            case 9:
                return Mm(b, d);
            case 8:
                return Qm(b, e, c, f, d);
            case 10:
                return bn(b, e, c, f, d)
        }
    }

    function dn(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function gn(a, b) {
        var c = Hc(b);
        if (c) {
            c = Wf(c);
            var d = Mc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var hn = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        jn = ja(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        kn = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        ln = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        mn = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function nn(a) {
        Yi.Ta(function(b) {
            b.shv = String(a);
            b.mjsv = "m202203020101";
            var c = O(Ph).h(),
                d = V(w);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function on(a) {
        var b = a.nb;
        return a.eb || ("dev" === b ? "dev" : "")
    };
    var pn = {},
        qn = (pn.google_ad_modifications = !0, pn.google_analytics_domain_name = !0, pn.google_analytics_uacct = !0, pn.google_pause_ad_requests = !0, pn.google_user_agent_client_hint = !0, pn);

    function rn(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function sn(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function tn(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function un(a) {
        var b, c, d, e;
        if (a.google_ad_client) return String(a.google_ad_client);
        var f = V(a).head_tag_slot_vars;
        if (null !== (d = null !== (b = null === f || void 0 === f ? void 0 : f.google_ad_client) && void 0 !== b ? b : null === (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) || void 0 === c ? void 0 : c.getAttribute("data-ad-client")) && void 0 !== d) f = d;
        else {
            b: {
                f = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !pd() ? rn : sn;
                for (var g = f.length - 1; 0 <= g; g--) {
                    var h = f[g];
                    if (!h.google_parsed_script_for_pub_code && (h.google_parsed_script_for_pub_code = !0, h = a(h))) {
                        f = h;
                        break b
                    }
                }
                f = null
            }
            if (f) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (g = {}; h = a.exec(f);) g[h[1]] = tn(h[2]);
                f = g.google_ad_client ? g.google_ad_client : ""
            } else f = ""
        }
        return null !== (e = f) && void 0 !== e ? e : ""
    };
    var vn = "undefined" === typeof sttc ? void 0 : sttc;

    function wn(a) {
        var b = Yi;
        try {
            return Yf(a, Zf), new Uk(JSON.parse(a))
        } catch (c) {
            b.I(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new Uk
    };
    var xn = O(yf).h(nf.h, nf.defaultValue);

    function yn() {
        var a = L.document;
        a = void 0 === a ? window.document : a;
        dd(xn, a)
    };
    var zn = O(yf).h( of .h, of .defaultValue);

    function An() {
        var a = L.document;
        a = void 0 === a ? window.document : a;
        dd(zn, a)
    };
    var Bn = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function Cn() {
        this.h = null;
        this.j = !1;
        this.l = Math.random();
        this.i = this.I;
        this.m = null
    }
    n = Cn.prototype;
    n.Ta = function(a) {
        this.h = a
    };
    n.Va = function(a) {
        this.j = a
    };
    n.Ua = function(a) {
        this.i = a
    };
    n.I = function(a, b, c, d, e) {
        if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        Vh(b) || (b = new Uh(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        w.google_js_errors = w.google_js_errors || [];
        w.google_js_errors.push(b);
        if (!w.error_rep_loaded) {
            a = md(Bn);
            var f;
            Ic(w.document, null != (f = this.m) ? f : gc(pc(a).toString()));
            w.error_rep_loaded = !0
        }
        return !1
    };
    n.oa = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.i(a, d, .01, c, "jserror")) throw d;
        }
    };
    n.Oa = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = ra.apply(0, arguments);
            return e.oa(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    n.Pa = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.I(a, d instanceof Error ? d : Error(d))
        })
    };

    function Dn(a, b, c) {
        var d = window;
        return function() {
            var e = bi(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (bi() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function En(a, b) {
        return Dn(a, b, function(c, d) {
            (new Cn).I(c, d)
        })
    };

    function Fn(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Gn(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Hn() {
        var a = new p.Set,
            b = ej();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = u(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function In(a) {
        a = a.id;
        return null != a && (Hn().has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift"))
    }

    function Jn(a, b, c) {
        if (!a.sources) return !1;
        switch (Kn(a)) {
            case 2:
                var d = Ln(a);
                if (d) return c.some(function(f) {
                    return Mn(d, f)
                });
            case 1:
                var e = Nn(a);
                if (e) return b.some(function(f) {
                    return Mn(e, f)
                })
        }
        return !1
    }

    function Kn(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Nn(a) {
        return On(a, function(b) {
            return b.currentRect
        })
    }

    function Ln(a) {
        return On(a, function(b) {
            return b.previousRect
        })
    }

    function On(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Pn() {
        Qj.call(this);
        this.i = this.h = this.P = this.O = this.G = 0;
        this.Ba = this.ya = Number.NEGATIVE_INFINITY;
        this.ua = this.wa = this.xa = this.za = this.Ea = this.m = this.Da = this.U = 0;
        this.va = !1;
        this.R = this.N = this.B = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Ca = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.Aa = !1;
        this.ga = function() {}
    }
    v(Pn, Qj);

    function Qn() {
        var a = new Pn;
        if (P(pf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = u(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, Rn(a).observe({
                    type: c,
                    buffered: !0
                });
                Sn(a)
            }
        }
    }

    function Rn(a) {
        a.l || (a.l = new PerformanceObserver(En(640, function(b) {
            var c = Tn !== window.scrollX || Un !== window.scrollY ? [] : Vn,
                d = Wn();
            b = u(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.G += Number(e.value);
                        Number(e.value) > f.O && (f.O = Number(e.value));
                        f.P += 1;
                        var g = Jn(e, c, d);
                        g && (f.m += e.value, f.za++);
                        if (5E3 < e.startTime - f.ya || 1E3 < e.startTime - f.Ba) f.ya = e.startTime, f.h = 0, f.i = 0;
                        f.Ba = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.U && (f.U = f.h, f.Ea = f.i, f.Da = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.xa = Math.floor(e.renderTime || e.loadTime);
                    a.wa = e.size;
                    break;
                case "first-input":
                    a.ua = Number((e.processingStart - e.startTime).toFixed(3));
                    a.va = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.B += e, a.N = Math.max(a.N, e), a.R += 1
            }
        })));
        return a.l
    }

    function Sn(a) {
        var b = En(641, function() {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Xn(a)
            }),
            c = En(641, function() {
                return void Xn(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ga = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Rn(a).disconnect()
        }
    }
    Pn.prototype.j = function() {
        Qj.prototype.j.call(this);
        this.ga()
    };

    function Xn(a) {
        if (!a.Aa) {
            a.Aa = !0;
            Rn(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Gn("cls", a.G), b += Gn("mls", a.O), b += Fn("nls", a.P), window.LayoutShiftAttribution && (b += Gn("cas", a.m), b += Fn("nas", a.za)), b += Gn("wls", a.U), b += Gn("tls", a.Da), window.LayoutShiftAttribution && (b += Gn("was", a.Ea)));
            window.LargestContentfulPaint && (b += Fn("lcp", a.xa), b += Fn("lcps", a.wa));
            window.PerformanceEventTiming && a.va && (b += Fn("fid", a.ua));
            window.PerformanceLongTaskTiming &&
                (b += Fn("cbt", a.B), b += Fn("mbt", a.N), b += Fn("nlt", a.R));
            for (var c = 0, d = u(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) In(e.value) && c++;
            b += Fn("nif", c);
            b += Fn("ifi", od(window));
            c = O(Ph).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (w === w.top ? 1 : 0);
            b += a.Ca ? "&qqid=" + encodeURIComponent(a.Ca) : Fn("pvsid", ed(w));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.v || (a.v = !0, a.j())
        }
    }

    function Mn(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function Wn() {
        var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(In),
            b = [].concat(ka(Hn())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Tn = window.scrollX;
        Un = window.scrollY;
        return Vn = [].concat(ka(a), ka(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Tn = void 0,
        Un = void 0,
        Vn = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };
    var Yn = O(yf).h(wf.h, wf.defaultValue);

    function Zn(a, b, c) {
        Qj.call(this);
        var d = this;
        this.i = a;
        this.h = [];
        b && $n() && this.h.push(X);
        c && this.h.push(Y);
        if (document.hasTrustToken && !P(tf)) {
            var e = new p.Map;
            this.h.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.i ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map ? new p.Map([].concat(ka(e), ka(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof p.Map || (window.goog_tt_promise_map =
                new p.Map)
        }
    }
    v(Zn, Qj);

    function $n() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function ao() {
        var a = void 0 === a ? window.document : a;
        dd(Yn, a)
    }

    function bo(a, b) {
        return a || ".google.ch" === b || "function" === typeof L.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function co() {
        var a = X.issuerOrigin + X.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function eo() {
        var a = X.issuerOrigin + X.issuancePath;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 10);
            return co()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), co();
            Z(X.issuerOrigin, 9)
        })
    }

    function fo() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(function(a) {
            return a ? co() : eo()
        })
    }

    function go() {
        Z(Y.issuerOrigin, 13);
        if (p.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return p.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = ed(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return p.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = Q(vf);
                        Math.random() <= f && Ff({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function ho(a) {
        if (document.hasTrustToken && !P(tf) && a.i) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof p.Map) {
                var c = [];
                if (a.h.some(function(e) {
                        return e.issuerOrigin === X.issuerOrigin
                    })) {
                    var d = b.get(X.issuerOrigin);
                    d || (d = fo(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.h.some(function(e) {
                    return e.issuerOrigin === Y.issuerOrigin
                }) && (a = b.get(Y.issuerOrigin), a || (a = go(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c)
            }
        }
    };

    function io(a) {
        J.call(this, a, -1, jo)
    }
    v(io, J);

    function ko(a, b) {
        return B(a, 2, b)
    }

    function lo(a, b) {
        return B(a, 3, b)
    }

    function mo(a, b) {
        return B(a, 4, b)
    }

    function no(a, b) {
        return B(a, 5, b)
    }

    function oo(a, b) {
        return B(a, 9, b)
    }

    function po(a, b) {
        return zb(a, 10, b)
    }

    function qo(a, b) {
        return B(a, 1, b)
    }

    function ro(a) {
        J.call(this, a)
    }
    v(ro, J);
    ro.prototype.getVersion = function() {
        return I(this, 2)
    };
    var jo = [10, 6];
    var so = "platform platformVersion architecture model uaFullVersion bitness fullVersionList".split(" ");

    function to(a) {
        var b;
        return po(oo(no(mo(lo(ko(qo(new io, a.platform || ""), a.platformVersion || ""), a.architecture || ""), a.model || ""), a.uaFullVersion || ""), a.bitness || ""), (null === (b = a.fullVersionList) || void 0 === b ? void 0 : b.map(function(c) {
            var d = new ro;
            d = B(d, 1, c.brand);
            return B(d, 2, c.version)
        })) || [])
    }

    function uo() {
        var a, b, c;
        return "function" !== typeof(null === (b = null === (a = L.navigator) || void 0 === a ? void 0 : a.userAgentData) || void 0 === b ? void 0 : b.getHighEntropyValues) ? null : null !== (c = L.navigator.userAgentData.getHighEntropyValues(so).then(function(d) {
            return to(d)
        })) && void 0 !== c ? c : null
    };

    function vo(a, b) {
        b.google_ad_host || (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute("content"))
    }

    function wo(a, b, c) {
        c = void 0 === c ? "" : c;
        L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, L.google_sl_win = null, delete L.google_sa_impl);
        L.google_sa_queue || (L.google_sa_queue = [], P(Xe) || (L.google_sl_win = L), L.google_process_slots = aj(215, function() {
            return xo(L.google_sa_queue)
        }), a = yo(c, a, b), Ic(L.document, a).id = "google_shimpl")
    }

    function xo(a) {
        var b = a.shift();
        "function" === typeof b && $i(216, b);
        a.length && w.setTimeout(aj(215, function() {
            return xo(a)
        }), 0)
    }

    function zo(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function yo(a, b, c) {
        var d = Math.random() < Q(cf) ? gc(pc(b.pb).toString()) : null;
        b = D(c, 4) ? b.ob : b.qb;
        d = d ? d : gc(pc(b).toString());
        b = {};
        a: {
            if (D(c, 4)) {
                if (c = a || un(L)) {
                    var e = {};
                    c = (e.client = c, e.plah = L.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        Ao(c, b);
        a: {
            if (P(Ze) || P(Ne))
                if (a = a || un(L)) {
                    c = {};
                    a = (c.client = a, c.plah = L.location.host, c.ama_t = "adsense", c.asntp = Q(Fe), c.asntpv = Q(Je), c.asntpl = Q(He), c.asntpm = Q(Ie), c.asntpc = Q(Ge), c.asna = Q(Be), c.asnd = Q(Ce), c.asnp = Q(De), c.asns = Q(Ee), c.asmat = Q(Ae),
                        c.asptt = Q(Ke), c.easpi = P(Ze), c.asro = P(Le), c);
                    break a
                }
            a = {}
        }
        Ao(a, b);
        Ao(zf() ? {
            bust: zf()
        } : {}, b);
        return dc(d, b)
    }

    function Ao(a, b) {
        Rc(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Bo(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? 1024 : c;
            for (var d = [w.top], e = [], f = 0, g; g = d[f++];) {
                b && !Gc(g) || e.push(g);
                try {
                    if (g.frames)
                        for (var h = 0; h < g.frames.length && d.length < c; ++h) d.push(g.frames[h])
                } catch (l) {}
            }
            for (b = 0; b < e.length; b++) try {
                var k = e[b].frames.google_esf;
                if (k) {
                    hd = k;
                    break a
                }
            } catch (l) {}
            hd = null
        }
        if (hd) return null;e = Lc("IFRAME");e.id = "google_esf";e.name = "google_esf";e.src = rc(a.vb);e.style.display = "none";
        return e
    }

    function Co(a, b, c, d) {
        Do(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_anchor");) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            h = Lc("INS");
            h.id = e + "_anchor";
            sm(h, g, f);
            h.style.display = "block";
            var k = Lc("INS");
            k.id = e + "_expand";
            sm(k, g, f);
            k.style.display = "inline-table";
            k.appendChild(h);
            c.appendChild(k);
            return e
        })
    }

    function Do(a, b, c, d, e) {
        e = e(a, b);
        Eo(a, c, b);
        c = Ia;
        var f = (new Date).getTime();
        b.google_lrv = I(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = f > c ? f - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_anchor") ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        var g = {
            pubWin: a,
            vars: b
        };
        zo(a, function() {
            var h = a.google_sa_impl(g);
            h && h.catch && cj(911, h)
        }, d)
    }

    function Eo(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !tm[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Sc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var r = a.parent;
                for (e = 0; r && r !== a && 25 > e; ++e) {
                    var y = r.frames;
                    for (d = 0; d < y.length; ++d)
                        if (a === y[d]) {
                            b.push(d);
                            break
                        }
                    a = r;
                    r = a.parent
                }
            } catch (F) {}
            c.google_ad_dom_fingerprint = Sc(h + b.join()).toString()
        }
    }

    function Fo() {
        var a = Hc(w);
        a && (a = Uf(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Go(a) {
        ao();
        bo(Zk(), I(a, 8)) || aj(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = P(b.PeriodicSyncManager ? rf : sf);
            var c = P(uf);
            b = new Zn(!0, b, c);
            0 < Q(xf) ? L.google_trust_token_operation_promise = ho(b) : ho(b)
        })();
        a = uo();
        null != a && a.then(function(b) {
            L.google_user_agent_client_hint = Lb(b)
        });
        An();
        yn()
    };

    function Ho(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Io(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            (c = Fc(c)) && (b.google_ad_client = Ho("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ja(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Ho(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Jo(a) {
        if (a = kd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Ko(a, b, c, d) {
        Io(a, b);
        if (c.document && c.document.body && !cn(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = gn(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!tm[e + "x" + g];
                var h = f;
                if (e) {
                    var k = um(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new U("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = Xm(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                Gm(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || Bi(a, c, "width", K) || b.google_ad_width || 0;
        f = Fa(Xm, e, "auto", c, a, b, !1, !0);
        if (!P(We) && 488 > Wf(c)) {
            g = Hc(c) || c;
            h = b.google_ad_client;
            d = g.location && "#ftptohbh" === g.location.hash ? 2 : Bl(g.location, "google_responsive_slot_preview") || P(ff) ? 1 : P(ef) ? 2 : al(g, 1, h, d) ? 1 : 0;
            if (g = 0 !== d) b: if (b.google_reactive_ad_format || cn(c, b) || qi(a, b)) g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h =
                            Mc(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!Xa(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    g = ui(c, a, e, .3, b);
                    !0 !== g ? (b.gfwrnwer = g, g = !1) : g = c === c.top ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, Gm(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
        } else d = !1;
        if (e = cn(c, b)) en(e, a, b, c, d);
        else {
            if (qi(a, b)) {
                if (d = Mc(a, c)) a.style.width = d.width, a.style.height =
                    d.height, pi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Jo(c)
            } else pi(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? en(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = vi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer =
                a) : b.efwr = !0)
        }
    };

    function Lo(a) {
        this.j = new p.Set;
        var b = ld() || window;
        this.h = Q(ye);
        var c = 0 < this.h && Qc() < 1 / this.h;
        this.v = (this.i = !!Lj(Hj(), 30, c)) ? ed(b) : 0;
        this.m = this.i ? un(b) : "";
        this.l = null !== a && void 0 !== a ? a : new yg(100)
    }

    function Mo() {
        var a = O(Lo);
        var b = new vk;
        b = B(b, 1, a.v);
        b = B(b, 2, a.m);
        b = B(b, 3, a.h);
        var c = new uk;
        b = yb(b, 4, wk, c);
        a.i && !a.j.has(1) && (a.j.add(1), ug(a.l, b))
    };

    function No(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        wc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function Oo(a, b) {
        b = void 0 === b ? 500 : b;
        Qj.call(this);
        this.i = a;
        this.ta = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    v(Oo, Qj);
    Oo.prototype.j = function() {
        this.m = {};
        this.l && (xc(this.i, this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        Qj.prototype.j.call(this)
    };

    function Po(a) {
        Qj.call(this);
        this.h = a;
        this.i = null;
        this.l = !1
    }
    v(Po, Qj);
    var Qo = null,
        Ro = [],
        So = new p.Map,
        To = -1;

    function Uo(a) {
        return Ji.test(a.className) && "done" != a.dataset.adsbygoogleStatus
    }

    function Vo(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Wo(a, b, c)
    }

    function Wo(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Ko);
        var e = b.google_reactive_ads_config;
        e || Ko(a, b, d, c);
        vo(d, b);
        if (!Xo(a, b, d)) {
            e || (d.google_lpabyc = ri(a, d) + Bi(a, d, "height", K));
            if (e) {
                e = e.page_level_pubvars || {};
                if (V(L).page_contains_reactive_tag && !V(L).allow_second_reactive_tag) {
                    if (e.pltais) {
                        zl(!1);
                        return
                    }
                    throw new U("Only one 'enable_page_level_ads' allowed per page.");
                }
                V(L).page_contains_reactive_tag = !0;
                zl(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = nd(d);
            Rc(qn, function(f, g) {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (V(L).first_tag_on_page || 0);
            $i(164, function() {
                Co(d, b, a, c)
            })
        }
    }

    function Xo(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = xl(c);
        if (f && f.Fa && "on" != b.google_adtest && !e) {
            e = ri(a, c);
            var g = Vf(c).clientHeight;
            if (!f.qa || f.qa && ((0 == g ? null : e / g) || 0) >= f.qa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = za(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.tb && (null !== Yc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Yc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Mc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (w.console && w.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Yo(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (Uo(e) && "reserved" != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d
        }
        return null
    }

    function Zo(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    $o(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function ap() {
        var a = Lc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        ad(a);
        return a
    }

    function bp(a, b) {
        var c = {};
        Rc(Rf, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = ap();
        gd.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!V(L).pause_ad_requests;
        Vo(d, e, b)
    }

    function cp(a, b) {
        function c() {
            return bp(a, b)
        }
        Uf(w).wasPlaTagProcessed = !0;
        var d = w.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = vc(aj(191, c));
            wc(d, "DOMContentLoaded", e);
            (new w.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function $o(a, b, c) {
        var d = {};
        $i(165, function() {
            dp(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function ep(a) {
        delete a.google_checked_head;
        Rc(a, function(b, c) {
            Ii[c] || (delete a[c], w.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function fp(a, b) {
        var c = L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = V(window);
            if (d.head_tag_slot_vars) {
                if (P(af)) {
                    gp(c);
                    return
                }
                throw new U("Only one AdSense head tag supported per page. The second tag is ignored.");
            }
            var e = {};
            Io(c, e);
            ep(e);
            var f = Zb(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            L.adsbygoogle || (L.adsbygoogle = []);
            d = L.adsbygoogle;
            d.loaded ? d.push(c) : d.splice(0, 0, c);
            var g;
            e.google_adbreak_test || (null == (g = Bb(b, Ik, 13, Xk)) ? 0 : D(g, 3)) && P(kf) ? hp(f, a) : No(function() {
                hp(f, a)
            })
        }
    }

    function gp(a) {
        var b = V(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Fc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function ip(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function dp(a, b, c, d) {
        if (null == a) throw new U("push() called with no parameters.");
        14 === wb(d, Xk) && jp(a, pb(Wk(d), 1), I(d, 2));
        var e = ip(a);
        if (0 !== e) P($e) && (d = Al(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ia)), null == Qo ? (kp(a), Ro.push(a)) : 3 === e ? $i(787, function() {
            Qo.handleAdConfig(a)
        }) : cj(730, Qo.handleAdBreak(a));
        else {
            Ia = (new Date).getTime();
            wo(c, d, lp(a));
            mp();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new U("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) np(a, d);
            else if ((e = a.params) && Rc(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = op(a.element);
                Io(e, b);
                c = V(w).head_tag_slot_vars || {};
                Rc(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !V(w).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
                b.google_apsail = gl(b.google_ad_client);
                var f = (c = 0 === (V(L).first_tag_on_page || 0) && Il(b)) && Jl(c);
                c && !f && (np(c, d), V(L).skip_next_reactive_tag = !0);
                0 === (V(L).first_tag_on_page || 0) && (V(L).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!V(L).pause_ad_requests;
                Vo(e, b, d);
                c && f && pp(c)
            }
        }
    }
    var qp = !1;

    function jp(a, b, c) {
        P(Ye) && !qp && (qp = !0, a = lp(a) || un(L), bj("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, .01))
    }

    function lp(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function mp() {
        if (P(Qe)) {
            var a = xl(L);
            if (!(a = a && a.Fa)) {
                try {
                    var b = L.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Dj(b) : null;
                a = !(b && Fk(b) && b)
            }
            a || yl(L, 1)
        }
    }

    function pp(a) {
        fd(function() {
            Uf(w).wasPlaTagProcessed || w.adsbygoogle && w.adsbygoogle.push(a)
        })
    }

    function np(a, b) {
        if (V(L).skip_next_reactive_tag) V(L).skip_next_reactive_tag = !1;
        else {
            0 === (V(L).first_tag_on_page || 0) && (V(L).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = V(w);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            V(L).ama_ran_on_page || Ll(new Kl(a, b));
            cp(a, b)
        }
    }

    function op(a) {
        if (a) {
            if (!Uo(a) && (a.id ? a = Yo(a.id) : a = null, !a)) throw new U("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
        } else if (a = Yo(), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function rp() {
        var a = new Sj(L),
            b = new Oo(L),
            c = new Po(L),
            d = L.__cmp ? 1 : 0;
        a = Tj(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = Zc(b.i, "__uspapiLocator"), b = b.h), f = null != b);
        c.l || (c.i || (c.i = c.h.googlefc ? c.h : Zc(c.h, "googlefcPresent")), c.l = !0);
        bj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.i ? 1 : 0,
            ptt: 9
        }, Q(xe))
    }

    function sp(a) {
        a = {
            value: D(a, 16)
        };
        var b = .01;
        Q(Se) && (a.eid = Q(Se), b = 1);
        a.frequency = b;
        bj("new_abg_tag", a, b)
    }

    function tp(a) {
        Hj().S[Jj(26)] = !!Number(a)
    }

    function up(a) {
        Number(a) ? V(L).pause_ad_requests = !0 : (V(L).pause_ad_requests = !1, a = function() {
            if (!V(L).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                L.dispatchEvent(c)
            }
        }, w.setTimeout(a, 0), w.setTimeout(a, 1E3))
    }

    function vp(a) {
        bj("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        L._gfp_a_ = a
    }

    function wp(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function hp(a, b) {
        b = Gl(dc(gc(pc(b.sb).toString()), zf() ? {
            bust: zf()
        } : {})).then(function(c) {
            null == Qo && (c.init(a), Qo = c, xp())
        });
        cj(723, b);
        t(b, "finally").call(b, function() {
            Ro.length = 0;
            bj("slotcar", {
                event: "api_ld",
                time: Date.now() - Ia,
                time_pr: Date.now() - To
            })
        })
    }

    function xp() {
        for (var a = u(t(So, "keys").call(So)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = So.get(b); - 1 !== c && (w.clearTimeout(c), So.delete(b))
        }
        a = {};
        for (b = 0; b < Ro.length; a = {
                fa: a.fa,
                ba: a.ba
            }, b++) So.has(b) || (a.ba = Ro[b], a.fa = ip(a.ba), $i(723, function(d) {
            return function() {
                3 === d.fa ? Qo.handleAdConfig(d.ba) : 2 === d.fa && cj(730, Qo.handleAdBreakBeforeReady(d.ba))
            }
        }(a)))
    }

    function kp(a) {
        var b = Ro.length;
        if (2 === ip(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === To && (To = Date.now());
            var c = w.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), So.set(b, -1), bj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * Q(lf));
            So.set(b, c)
        }
    }

    function yp() {
        if (P(Me) && !P(Le)) {
            var a = L.document,
                b = a.createElement("LINK"),
                c = md(Pl);
            if (c instanceof bc || c instanceof lc) b.href = rc(c);
            else {
                if (-1 === sc.indexOf("stylesheet")) throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
                b.href = qc(c)
            }
            b.rel = "stylesheet";
            a.head.appendChild(b)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        Yi.Ua(dj);
        $i(166, function() {
            var e = wn(b);
            nn(I(e, 2));
            $k(D(e, 6));
            d();
            jd(16, [1, e.toJSON()]);
            var f = ld(kd(L)) || L,
                g = c(on({
                    eb: a,
                    nb: I(e, 2)
                }), e);
            P(df) && dl(f, e);
            rm(f, e, null === L.document.currentScript ? 1 : Rl(g.ub));
            Mo();
            if ((!Na() || 0 <= Ka(Qa(), 11)) && (null == (L.Prototype || {}).Version || !P(Ve))) {
                Zi(P(qf));
                Go(e);
                sk();
                try {
                    Qn()
                } catch (q) {}
                Fo();
                fp(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    if (P(Re) && !D(e, 16)) try {
                        if (L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
                    } catch (q) {}
                    yp();
                    sp(e);
                    Q(xe) && rp();
                    var k = {
                        push: function(q) {
                            $o(q, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: tp
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: up
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: vp
                        }), Object.defineProperty(k, "onload", {
                            set: wp
                        })
                    } catch (q) {}
                    if (h)
                        for (var l = u(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Zo(h, g, e);
                    f.adsbygoogle = k;
                    h &&
                        (k.onload = h.onload);
                    (f = Bo(g)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("m202203020101", vn, function(a, b) {
        var c = 2012 < C(b, 1, 0) ? "_fy" + C(b, 1, 0) : "",
            d = I(b, 3),
            e = I(b, 2);
        b = md(hn, a, c);
        d = md(jn, e, d);
        return {
            sb: b,
            qb: md(kn, a, c),
            ob: md(ln, a, c),
            pb: md(mn, a, c),
            vb: d,
            ub: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2012,\"r20220302\",\"r20190131\",null,null,null,null,null,null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,5000]],[null,1044,null,[null,200]],[1132,null,null,[1]],[1131,null,null,[1]],[null,1142,null,[null,8]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1136,null,null,[1]],[1053,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[1139,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[1036,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,null,null,[null,null,null,[\"A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"A4\/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme\/J33Q\/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\"]],null,1934],[1959,null,null,[1]],[1903,null,null,[1]],[1953,null,null,[1]],[1954,null,null,[1]],[1938,null,null,[1]],[1948,null,null,[1]],[null,null,null,[null,null,null,[\"AxujKG9INjsZ8\/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=\",\"Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt\/P\/H4\/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"AxBHdr0J44vFBQtZUqX9sjiqf5yWZ\/OcHRcRMN3H9TH+t90V\/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1932],[null,397907552,null,[null,500]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111]],null,null,null,34,18,1],[50,[[31065273],[31065274,[[1141,null,null,[1]]]],[31065312,[[1129,null,null,[1]],[1141,null,null,[1]]]]],null,null,null,62],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1000,[[42531397],[42531398,[[1135,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[500,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[10,[[44758395],[44758396,[[1145,null,null,[1]]]]]],[10,[[44758709],[44758710,[[1129,null,null,[1]]]],[44758711,[[1128,null,null,[1]]]]]],[1,[[44759835],[44759836,[[1129,null,null,[1]]]]]],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753658,[[1122,null,null,[1]],[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44755594,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44755653,[[1122,null,null,[1]],[1033,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,36,10,101],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,36,10,101],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[50,[[31064036],[31064037,[[1134,null,null,[1]]]]]],[1,[[31064180],[31064181,[[null,1137,null,[null,120]]]],[31064182,[[null,1137,null,[null,3600]]]]]],[10,[[31064780],[31064781,[[1125,null,null,[1]]]]]],[100,[[31064857],[31064858,[[1146,null,null,[1]]]]]],[10,[[31065342],[31065343,[[1147,null,null,[1]]]]]],[100,[[31065368],[31065369,[[1149,null,null,[1]]]]]],[100,[[31065370],[31065371,[[1148,null,null,[1]]]]]],[1000,[[31065413,[[null,null,14,[null,null,\"31065413\"]]],[6,null,null,null,6,null,\"31065413\"]],[31065414,[[null,null,14,[null,null,\"31065414\"]]],[6,null,null,null,6,null,\"31065414\"]]],[4,null,55]],[1000,[[31065446,[[null,null,14,[null,null,\"31065446\"]]],[6,null,null,null,6,null,\"31065446\"]],[31065447,[[null,null,14,[null,null,\"31065447\"]]],[6,null,null,null,6,null,\"31065447\"]]],[4,null,55]],[1000,[[31065459,[[null,null,14,[null,null,\"31065459\"]]],[6,null,null,null,6,null,\"31065459\"]],[31065460,[[null,null,14,[null,null,\"31065460\"]]],[6,null,null,null,6,null,\"31065460\"]]],[4,null,55]],[1000,[[31065463,[[null,null,14,[null,null,\"31065463\"]]],[6,null,null,null,6,null,\"31065463\"]],[31065464,[[null,null,14,[null,null,\"31065464\"]]],[6,null,null,null,6,null,\"31065464\"]]],[4,null,55]],[1000,[[31065467,[[null,null,14,[null,null,\"31065467\"]]],[6,null,null,null,6,null,\"31065467\"]],[31065468,[[null,null,14,[null,null,\"31065468\"]]],[6,null,null,null,6,null,\"31065468\"]]],[4,null,55]],[10,[[31065469],[31065470,[[1152,null,null,[1]]]]]],[1000,[[31065507,[[null,null,14,[null,null,\"31065507\"]]],[6,null,null,null,6,null,\"31065507\"]],[31065508,[[null,null,14,[null,null,\"31065508\"]]],[6,null,null,null,6,null,\"31065508\"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44760283,[[null,1103,null,[null,44760283]]]],[44760284,[[null,1103,null,[null,44760284]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760285,[[null,1103,null,[null,44760285]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760286,[[null,1103,null,[null,44760286]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760287,[[null,1103,null,[null,44760287]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760288,[[null,1103,null,[null,44760288]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[6,null,null,3,null,2]],[1,[[44760289,[[null,1103,null,[null,44760289]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[44760290,[[null,1103,null,[null,44760290]],[1121,null,null,[1]],[1143,null,null,[1]],[null,1119,null,[null,300]]]],[44760291,[[null,1103,null,[null,44760291]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760292,[[null,1103,null,[null,44760292]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760293,[[null,1103,null,[null,44760293]],[null,1114,null,[null,0.9]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760294,[[null,1103,null,[null,44760294]],[null,1114,null,[null,0.9]],[null,1110,null,[null,1]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760295,[[null,1103,null,[null,44760295]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760296,[[null,1103,null,[null,44760296]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760297,[[null,1103,null,[null,44760297]],[null,1114,null,[null,0.9]],[null,1116,null,[]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760298,[[null,1103,null,[null,44760298]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760299,[[null,1103,null,[null,44760299]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760300,[[null,1103,null,[null,44760300]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[6,null,null,3,null,2]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31063913,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31065341,[[1150,null,null,[1]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[50,[[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31063912],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[44756455,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[null,[[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[13,[[10,[[44756894],[44756895,[[1947,null,null,[1]]]]]],[10,[[44756896],[44756897]]],[50,[[44756431],[44756432,[[1960,null,null,[1]]]]]],[50,[[44758226],[44758227]]],[50,[[44758228],[44758229]]],[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,[\"document.prerendering\"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,[\"document.prerendering\"]]]]],[50,[[31064018],[31064019,[[1961,null,null,[1]]]]]]]],[11,[[10,[[44760304],[44760305,[[1957,null,null,[1]]]]]],[1,[[44760306],[44760307,[[1957,null,null,[1]]]],[44760308,[[1957,null,null,[1]]]]]]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,517,null,[null,1]]]]],null,15],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[100,[[31060006,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]],null,21],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]],null,21],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]],null,45],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/(9[3456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],45],[10,[[31063910],[31063911,[[1948,null,null,[]]]]]],[50,[[31065515],[31065516,[[1954,null,null,[]]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[1,[]],null,\"31065507\",1,null,1028507516,[44759837]]");