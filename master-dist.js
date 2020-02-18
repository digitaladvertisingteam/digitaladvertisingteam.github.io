if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(h, e) {
    function a(e) {
        var t = "length" in e && e.length,
            n = V.type(e);
        return "function" !== n && !V.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }

    function t(e, n, i) {
        if (V.isFunction(n)) return V.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return V.grep(e, function(e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (te.test(n)) return V.filter(n, e, i);
            n = V.filter(n, e)
        }
        return V.grep(e, function(e) {
            return 0 <= W.call(n, e) !== i
        })
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function i() {
        Y.removeEventListener("DOMContentLoaded", i, !1), h.removeEventListener("load", i, !1), V.ready()
    }

    function o() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = V.expando + o.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(fe, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : pe.test(n) ? V.parseJSON(n) : n)
                } catch (e) {}
                ue.set(e, t, n)
            } else n = void 0;
        return n
    }

    function r() {
        return !0
    }

    function c() {
        return !1
    }

    function s() {
        try {
            return Y.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        return V.nodeName(e, "table") && V.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function g(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function m(e) {
        var t = Ne.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var n = 0, i = e.length; n < i; n++) de.set(e[n], "globalEval", !t || de.get(t[n], "globalEval"))
    }

    function p(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (de.hasData(e) && (r = de.access(e), s = de.set(t, r), c = r.events))
                for (o in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[o].length; n < i; n++) V.event.add(t, o, c[o][n]);
            ue.hasData(e) && (a = ue.access(e), l = V.extend({}, a), ue.set(t, l))
        }
    }

    function y(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && V.nodeName(e, t) ? V.merge([e], n) : n
    }

    function u(e, t) {
        var n, i = V(t.createElement(e)).appendTo(t.body),
            o = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : V.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = Y,
            n = je[e];
        return n || ("none" !== (n = u(e, t)) && n || ((t = ($e = ($e || V("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = u(e, t), $e.detach()), je[e] = n), n
    }

    function f(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || Me(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || V.contains(e.ownerDocument, e) || (s = V.style(e, t)), He.test(s) && Pe.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function w(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function T(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Fe.length; o--;)
            if ((t = Fe[o] + n) in e) return t;
        return i
    }

    function k(e, t, n) {
        var i = We.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function S(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += V.css(e, n + ve[r], !0, o)), i ? ("content" === n && (s -= V.css(e, "padding" + ve[r], !0, o)), "margin" !== n && (s -= V.css(e, "border" + ve[r] + "Width", !0, o))) : (s += V.css(e, "padding" + ve[r], !0, o), "padding" !== n && (s += V.css(e, "border" + ve[r] + "Width", !0, o)));
        return s
    }

    function _(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Me(e),
            s = "border-box" === V.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = f(e, t, r)) < 0 || null == o) && (o = e.style[t]), He.test(o)) return o;
            i = s && (F.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + S(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function x(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (r[s] = de.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && ye(i) && (r[s] = de.access(i, "olddisplay", b(i.nodeName)))) : (o = ye(i), "none" === n && o || de.set(i, "olddisplay", o ? n : V.css(i, "display"))));
        for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function C(e, t, n, i, o) {
        return new C.prototype.init(e, t, n, i, o)
    }

    function E() {
        return setTimeout(function() {
            Ye = void 0
        }), Ye = V.now()
    }

    function A(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ve[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function O(e, t, n) {
        for (var i, o = (et[t] || []).concat(et["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function D(r, e, t) {
        var n, s, i = 0,
            o = Ze.length,
            a = V.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Ye || E(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return a.notifyWith(r, [c, n, t]), n < 1 && o ? t : (a.resolveWith(r, [c]), !1)
            },
            c = a.promise({
                elem: r,
                props: V.extend({}, e),
                opts: V.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ye || E(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = V.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? a.resolveWith(r, [c, e]) : a.rejectWith(r, [c, e]), this
                }
            }),
            d = c.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = V.camelCase(n)], r = e[n], V.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = V.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(d, c.opts.specialEasing); i < o; i++)
            if (n = Ze[i].call(c, r, d, c.opts)) return n;
        return V.map(d, O, c), V.isFunction(c.opts.start) && c.opts.start.call(r, c), V.fx.timer(V.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function N(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(ae) || [];
            if (V.isFunction(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function I(t, o, r, s) {
        function a(e) {
            var i;
            return l[e] = !0, V.each(t[e] || [], function(e, t) {
                var n = t(o, r, s);
                return "string" != typeof n || c || l[n] ? c ? !(i = n) : void 0 : (o.dataTypes.unshift(n), a(n), !1)
            }), i
        }
        var l = {},
            c = t === gt;
        return a(o.dataTypes[0]) || !l["*"] && a("*")
    }

    function L(e, t) {
        var n, i, o = V.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && V.extend(!0, e, i), e
    }

    function $(n, e, i, o) {
        var t;
        if (V.isArray(e)) V.each(e, function(e, t) {
            i || wt.test(n) ? o(n, t) : $(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== V.type(e)) o(n, e);
        else
            for (t in e) $(n + "[" + t + "]", e[t], i, o)
    }

    function j(e) {
        return V.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var P = [],
        H = P.slice,
        M = P.concat,
        R = P.push,
        W = P.indexOf,
        q = {},
        B = q.toString,
        z = q.hasOwnProperty,
        F = {},
        Y = h.document,
        U = "2.1.4",
        V = function(e, t) {
            return new V.fn.init(e, t)
        },
        Q = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        X = /^-ms-/,
        K = /-([\da-z])/gi,
        G = function(e, t) {
            return t.toUpperCase()
        };
    V.fn = V.prototype = {
        jquery: U,
        constructor: V,
        selector: "",
        length: 0,
        toArray: function() {
            return H.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : H.call(this)
        },
        pushStack: function(e) {
            var t = V.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return V.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(V.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(H.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: R,
        sort: P.sort,
        splice: P.splice
    }, V.extend = V.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || V.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (V.isPlainObject(i) || (o = V.isArray(i))) ? (o ? (o = !1, r = n && V.isArray(n) ? n : []) : r = n && V.isPlainObject(n) ? n : {}, s[t] = V.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, V.extend({
        expando: "jQuery" + (U + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === V.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !V.isArray(e) && 0 <= e - parseFloat(e) + 1
        },
        isPlainObject: function(e) {
            return "object" === V.type(e) && !e.nodeType && !V.isWindow(e) && !(e.constructor && !z.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? q[B.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = V.trim(e)) && (1 === e.indexOf("use strict") ? ((t = Y.createElement("script")).text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(X, "ms-").replace(K, G)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i = 0,
                o = e.length,
                r = a(e);
            if (n) {
                if (r)
                    for (; i < o && !1 !== t.apply(e[i], n); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (r)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(Q, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? V.merge(n, "string" == typeof e ? [e] : e) : R.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : W.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o = 0,
                r = e.length,
                s = [];
            if (a(e))
                for (; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return M.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), V.isFunction(e) ? (i = H.call(arguments, 2), (o = function() {
                return e.apply(t || this, i.concat(H.call(arguments)))
            }).guid = e.guid = e.guid || V.guid++, o) : void 0
        },
        now: Date.now,
        support: F
    }), V.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        q["[object " + t + "]"] = t.toLowerCase()
    });
    var J = function(n) {
        function w(e, t, n, i) {
            var o, r, s, a, l, c, d, u, p, f;
            if ((t ? t.ownerDocument || t : M) !== D && O(t), n = n || [], a = (t = t || D).nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && I) {
                if (11 !== a && (o = me.exec(e)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (!(r = t.getElementById(s)) || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && P(t, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && m.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
                    } if (m.qsa && (!L || !L.test(e))) {
                    if (u = d = H, p = t, f = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = S(e), (d = t.getAttribute("id")) ? u = d.replace(ye, "\\$&") : t.setAttribute("id", u), u = "[id='" + u + "'] ", l = c.length; l--;) c[l] = u + g(c[l]);
                        p = ve.test(e) && h(t.parentNode) || t, f = c.join(",")
                    }
                    if (f) try {
                        return K.apply(n, p.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(se, "$1"), t, n, i)
        }

        function e() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > k.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function l(e) {
            return e[H] = !0, e
        }

        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
        }

        function c(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function o(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function r(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function s(s) {
            return l(function(r) {
                return r = +r, l(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function h(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function a() {}

        function g(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function u(s, e, t) {
            var a = e.dir,
                l = t && "parentNode" === a,
                c = W++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || l) return s(e, t, n)
            } : function(e, t, n) {
                var i, o, r = [R, c];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || l) {
                            if ((i = (o = e[H] || (e[H] = {}))[a]) && i[0] === R && i[1] === c) return r[2] = i[2];
                            if ((o[a] = r)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function p(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function T(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
            return s
        }

        function y(f, h, g, m, v, e) {
            return m && !m[H] && (m = y(m)), v && !v[H] && (v = y(v, e)), l(function(e, t, n, i) {
                var o, r, s, a = [],
                    l = [],
                    c = t.length,
                    d = e || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) w(e, t[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    u = !f || !e && h ? d : T(d, a, f, n, i),
                    p = g ? v || (e ? f : c || m) ? [] : t : u;
                if (g && g(u, p, n, i), m)
                    for (o = T(p, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(u[l[r]] = s));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(u[r] = s);
                            v(null, p = [], o, i)
                        }
                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = v ? J(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else p = T(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, i) : K.apply(t, p)
            })
        }

        function f(e) {
            for (var o, t, n, i = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = u(function(e) {
                    return e === o
                }, s, !0), c = u(function(e) {
                    return -1 < J(o, e)
                }, s, !0), d = [function(e, t, n) {
                    var i = !r && (n || t !== C) || ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
                    return o = null, i
                }]; a < i; a++)
                if (t = k.relative[e[a].type]) d = [u(p(d), t)];
                else {
                    if ((t = k.filter[e[a].type].apply(null, e[a].matches))[H]) {
                        for (n = ++a; n < i && !k.relative[e[n].type]; n++);
                        return y(1 < a && p(d), 1 < a && g(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(se, "$1"), t, a < n && f(e.slice(a, n)), n < i && f(e = e.slice(n)), n < i && g(e))
                    }
                    d.push(t)
                } return p(d)
        }
        var d, m, k, v, b, S, _, x, C, E, A, O, D, N, I, L, $, j, P, H = "sizzle" + 1 * new Date,
            M = n.document,
            R = 0,
            W = 0,
            q = e(),
            B = e(),
            z = e(),
            F = function(e, t) {
                return e === t && (A = !0), 0
            },
            Y = 1 << 31,
            U = {}.hasOwnProperty,
            V = [],
            Q = V.pop,
            X = V.push,
            K = V.push,
            G = V.slice,
            J = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = te.replace("w", "w#"),
            ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
            oe = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            de = new RegExp(oe),
            ue = new RegExp("^" + ne + "$"),
            pe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            he = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ye = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            we = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Te = function() {
                O()
            };
        try {
            K.apply(V = G.call(M.childNodes), M.childNodes), V[M.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: V.length ? function(e, t) {
                    X.apply(e, G.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        for (d in m = w.support = {}, b = w.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, O = w.setDocument = function(e) {
                var t, n, l = e ? e.ownerDocument || e : M;
                return l !== D && 9 === l.nodeType && l.documentElement ? (N = (D = l).documentElement, (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), I = !b(l), m.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), m.getElementsByTagName = i(function(e) {
                    return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                }), m.getElementsByClassName = ge.test(l.getElementsByClassName), m.getById = i(function(e) {
                    return N.appendChild(e).id = H, !l.getElementsByName || !l.getElementsByName(H).length
                }), m.getById ? (k.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && I) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function(e) {
                    var n = e.replace(be, we);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), k.find.TAG = m.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, k.find.CLASS = m.getElementsByClassName && function(e, t) {
                    return I ? t.getElementsByClassName(e) : void 0
                }, $ = [], L = [], (m.qsa = ge.test(l.querySelectorAll)) && (i(function(e) {
                    N.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + H + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]")
                }), i(function(e) {
                    var t = l.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (m.matchesSelector = ge.test(j = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function(e) {
                    m.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), $.push("!=", oe)
                }), L = L.length && new RegExp(L.join("|")), $ = $.length && new RegExp($.join("|")), t = ge.test(N.compareDocumentPosition), P = t || ge.test(N.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, F = t ? function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === M && P(M, e) ? -1 : t === l || t.ownerDocument === M && P(M, t) ? 1 : E ? J(E, e) - J(E, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === l ? -1 : t === l ? 1 : o ? -1 : r ? 1 : E ? J(E, e) - J(E, t) : 0;
                    if (o === r) return c(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? c(s[i], a[i]) : s[i] === M ? -1 : a[i] === M ? 1 : 0
                }, l) : D
            }, w.matches = function(e, t) {
                return w(e, null, null, t)
            }, w.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== D && O(e), t = t.replace(ce, "='$1']"), !(!m.matchesSelector || !I || $ && $.test(t) || L && L.test(t))) try {
                    var n = j.call(e, t);
                    if (n || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < w(t, D, null, [e]).length
            }, w.contains = function(e, t) {
                return (e.ownerDocument || e) !== D && O(e), P(e, t)
            }, w.attr = function(e, t) {
                (e.ownerDocument || e) !== D && O(e);
                var n = k.attrHandle[t.toLowerCase()],
                    i = n && U.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
                return void 0 !== i ? i : m.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, w.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, w.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (A = !m.detectDuplicates, E = !m.sortStable && e.slice(0), e.sort(F), A) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return E = null, e
            }, v = w.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += v(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += v(t);
                return n
            }, (k = w.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = q[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && q(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, o) {
                        return function(e) {
                            var t = w.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(re, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(f, e, t, h, g) {
                        var m = "nth" !== f.slice(0, 3),
                            v = "last" !== f.slice(-4),
                            y = "of-type" === e;
                        return 1 === h && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, r, s, a, l, c = m !== v ? "nextSibling" : "previousSibling",
                                d = e.parentNode,
                                u = y && e.nodeName.toLowerCase(),
                                p = !n && !y;
                            if (d) {
                                if (m) {
                                    for (; c;) {
                                        for (r = e; r = r[c];)
                                            if (y ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [v ? d.firstChild : d.lastChild], v && p) {
                                    for (a = (i = (o = d[H] || (d[H] = {}))[f] || [])[0] === R && i[1], s = i[0] === R && i[2], r = a && d.childNodes[a]; r = ++a && r && r[c] || (s = a = 0) || l.pop();)
                                        if (1 === r.nodeType && ++s && r === e) {
                                            o[f] = [R, a, s];
                                            break
                                        }
                                } else if (p && (i = (e[H] || (e[H] = {}))[f]) && i[0] === R) s = i[1];
                                else
                                    for (;
                                        (r = ++a && r && r[c] || (s = a = 0) || l.pop()) && ((y ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++s || (p && ((r[H] || (r[H] = {}))[f] = [R, s]), r !== e)););
                                return (s -= g) === h || s % h == 0 && 0 <= s / h
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = k.pseudos[e] || k.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                        return s[H] ? s(r) : 1 < s.length ? (t = [e, e, "", r], k.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = J(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: l(function(e) {
                        var i = [],
                            o = [],
                            a = _(e.replace(se, "$1"));
                        return a[H] ? l(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: l(function(t) {
                        return function(e) {
                            return 0 < w(t, e).length
                        }
                    }),
                    contains: l(function(t) {
                        return t = t.replace(be, we),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || v(e)).indexOf(t)
                            }
                    }),
                    lang: l(function(n) {
                        return ue.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(be, we).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === N
                    },
                    focus: function(e) {
                        return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function(e) {
                        return he.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = k.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[d] = o(d);
        for (d in {
                submit: !0,
                reset: !0
            }) k.pseudos[d] = r(d);
        return a.prototype = k.filters = k.pseudos, k.setFilters = new a, S = w.tokenize = function(e, t) {
            var n, i, o, r, s, a, l, c = B[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = k.preFilter; s;) {
                for (r in (!n || (i = ae.exec(s))) && (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = le.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(se, " ")
                    }), s = s.slice(n.length)), k.filter) !(i = pe[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? w.error(e) : B(e, a).slice(0)
        }, _ = w.compile = function(e, t) {
            var n, m, v, y, b, i, o = [],
                r = [],
                s = z[e + " "];
            if (!s) {
                for (t || (t = S(e)), n = t.length; n--;)(s = f(t[n]))[H] ? o.push(s) : r.push(s);
                (s = z(e, (m = r, y = 0 < (v = o).length, b = 0 < m.length, i = function(e, t, n, i, o) {
                    var r, s, a, l = 0,
                        c = "0",
                        d = e && [],
                        u = [],
                        p = C,
                        f = e || b && k.find.TAG("*", o),
                        h = R += null == p ? 1 : Math.random() || .1,
                        g = f.length;
                    for (o && (C = t !== D && t); c !== g && null != (r = f[c]); c++) {
                        if (b && r) {
                            for (s = 0; a = m[s++];)
                                if (a(r, t, n)) {
                                    i.push(r);
                                    break
                                } o && (R = h)
                        }
                        y && ((r = !a && r) && l--, e && d.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(d, u, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) d[c] || u[c] || (u[c] = Q.call(i));
                            u = T(u)
                        }
                        K.apply(i, u), o && !e && 0 < u.length && 1 < l + v.length && w.uniqueSort(i)
                    }
                    return o && (R = h, C = p), d
                }, y ? l(i) : i))).selector = e
            }
            return s
        }, x = w.select = function(e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                d = !i && S(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (2 < (r = d[0] = d[0].slice(0)).length && "ID" === (s = r[0]).type && m.getById && 9 === t.nodeType && I && k.relative[r[1].type]) {
                    if (!(t = (k.find.ID(s.matches[0].replace(be, we), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                    if ((l = k.find[a]) && (i = l(s.matches[0].replace(be, we), ve.test(r[0].type) && h(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && g(r))) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || _(e, d))(i, t, !I, n, ve.test(e) && h(t.parentNode) || t), n
        }, m.sortStable = H.split("").sort(F).join("") === H, m.detectDuplicates = !!A, O(), m.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), m.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(Z, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), w
    }(h);
    V.find = J, V.expr = J.selectors, V.expr[":"] = V.expr.pseudos, V.unique = J.uniqueSort, V.text = J.getText, V.isXMLDoc = J.isXML, V.contains = J.contains;
    var Z = V.expr.match.needsContext,
        ee = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        te = /^.[^:#\[\.,]*$/;
    V.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? V.find.matchesSelector(i, e) ? [i] : [] : V.find.matches(e, V.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, V.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(V(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (V.contains(o[t], this)) return !0
            }));
            for (t = 0; t < n; t++) V.find(e, o[t], i);
            return (i = this.pushStack(1 < n ? V.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && Z.test(e) ? V(e) : e || [], !1).length
        }
    });
    var ne, ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (V.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ie.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ne).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof V ? t[0] : t, V.merge(this, V.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), ee.test(n[1]) && V.isPlainObject(t))
                    for (n in t) V.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (i = Y.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = Y, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : V.isFunction(e) ? void 0 !== ne.ready ? ne.ready(e) : e(V) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), V.makeArray(e, this))
    }).prototype = V.fn, ne = V(Y);
    var oe = /^(?:parents|prev(?:Until|All))/,
        re = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    V.extend({
        dir: function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && V(e).is(n)) break;
                    i.push(e)
                } return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), V.fn.extend({
        has: function(e) {
            var t = V(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (V.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = Z.test(e) || "string" != typeof e ? V(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && V.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    } return this.pushStack(1 < r.length ? V.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? W.call(V(e), this[0]) : W.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(V.unique(V.merge(this.get(), V(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), V.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return V.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return V.dir(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return V.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return V.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return V.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return V.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return V.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return V.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || V.merge([], e.childNodes)
        }
    }, function(i, o) {
        V.fn[i] = function(e, t) {
            var n = V.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = V.filter(t, n)), 1 < this.length && (re[i] || V.unique(n), oe.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var se, ae = /\S+/g,
        le = {};
    V.Callbacks = function(o) {
        var e, n;
        o = "string" == typeof o ? le[o] || (n = le[e = o] = {}, V.each(e.match(ae) || [], function(e, t) {
            n[t] = !0
        }), n) : V.extend({}, o);
        var t, i, r, s, a, l, c = [],
            d = !o.once && [],
            u = function(e) {
                for (t = o.memory && e, i = !0, l = s || 0, s = 0, a = c.length, r = !0; c && l < a; l++)
                    if (!1 === c[l].apply(e[0], e[1]) && o.stopOnFalse) {
                        t = !1;
                        break
                    } r = !1, c && (d ? d.length && u(d.shift()) : t ? c = [] : p.disable())
            },
            p = {
                add: function() {
                    if (c) {
                        var e = c.length;
                        ! function i(e) {
                            V.each(e, function(e, t) {
                                var n = V.type(t);
                                "function" === n ? o.unique && p.has(t) || c.push(t) : t && t.length && "string" !== n && i(t)
                            })
                        }(arguments), r ? a = c.length : t && (s = e, u(t))
                    }
                    return this
                },
                remove: function() {
                    return c && V.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = V.inArray(t, c, n));) c.splice(n, 1), r && (n <= a && a--, n <= l && l--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < V.inArray(e, c) : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], a = 0, this
                },
                disable: function() {
                    return c = d = t = void 0, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return d = void 0, t || p.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(e, t) {
                    return !c || i && !d || (t = [e, (t = t || []).slice ? t.slice() : t], r ? d.push(t) : u(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, V.extend({
        Deferred: function(e) {
            var r = [
                    ["resolve", "done", V.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", V.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", V.Callbacks("memory")]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return V.Deferred(function(i) {
                            V.each(r, function(e, t) {
                                var n = V.isFunction(o[e]) && o[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && V.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? V.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, V.each(r, function(e, t) {
                var n = t[2],
                    i = t[3];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var o, t, n, i = 0,
                r = H.call(arguments),
                s = r.length,
                a = 1 !== s || e && V.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : V.Deferred(),
                c = function(t, n, i) {
                    return function(e) {
                        n[t] = this, i[t] = 1 < arguments.length ? H.call(arguments) : e, i === o ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (1 < s)
                for (o = new Array(s), t = new Array(s), n = new Array(s); i < s; i++) r[i] && V.isFunction(r[i].promise) ? r[i].promise().done(c(i, n, r)).fail(l.reject).progress(c(i, t, o)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    }), V.fn.ready = function(e) {
        return V.ready.promise().done(e), this
    }, V.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? V.readyWait++ : V.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --V.readyWait : V.isReady) || ((V.isReady = !0) !== e && 0 < --V.readyWait || (se.resolveWith(Y, [V]), V.fn.triggerHandler && (V(Y).triggerHandler("ready"), V(Y).off("ready"))))
        }
    }), V.ready.promise = function(e) {
        return se || (se = V.Deferred(), "complete" === Y.readyState ? setTimeout(V.ready) : (Y.addEventListener("DOMContentLoaded", i, !1), h.addEventListener("load", i, !1))), se.promise(e)
    }, V.ready.promise();
    var ce = V.access = function(e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === V.type(n))
            for (a in o = !0, n) V.access(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0, V.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                return c.call(V(e), n)
            })), t))
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    };
    V.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, o.uid = 1, o.accepts = V.acceptData, o.prototype = {
        key: function(t) {
            if (!o.accepts(t)) return 0;
            var n = {},
                i = t[this.expando];
            if (!i) {
                i = o.uid++;
                try {
                    n[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, n)
                } catch (e) {
                    n[this.expando] = i, V.extend(t, n)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(e, t, n) {
            var i, o = this.key(e),
                r = this.cache[o];
            if ("string" == typeof t) r[t] = n;
            else if (V.isEmptyObject(r)) V.extend(this.cache[o], t);
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, V.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, r = this.key(e),
                s = this.cache[r];
            if (void 0 === t) this.cache[r] = {};
            else {
                V.isArray(t) ? i = t.concat(t.map(V.camelCase)) : (o = V.camelCase(t), t in s ? i = [t, o] : i = (i = o) in s ? [i] : i.match(ae) || []), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(e) {
            return !V.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var de = new o,
        ue = new o,
        pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        fe = /([A-Z])/g;
    V.extend({
        hasData: function(e) {
            return ue.hasData(e) || de.hasData(e)
        },
        data: function(e, t, n) {
            return ue.access(e, t, n)
        },
        removeData: function(e, t) {
            ue.remove(e, t)
        },
        _data: function(e, t, n) {
            return de.access(e, t, n)
        },
        _removeData: function(e, t) {
            de.remove(e, t)
        }
    }), V.fn.extend({
        data: function(i, e) {
            var t, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === i) {
                if (this.length && (o = ue.get(r), 1 === r.nodeType && !de.get(r, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = V.camelCase(n.slice(5)), l(r, n, o[n])));
                    de.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof i ? this.each(function() {
                ue.set(this, i)
            }) : ce(this, function(t) {
                var e, n = V.camelCase(i);
                if (r && void 0 === t) {
                    if (void 0 !== (e = ue.get(r, i))) return e;
                    if (void 0 !== (e = ue.get(r, n))) return e;
                    if (void 0 !== (e = l(r, n, void 0))) return e
                } else this.each(function() {
                    var e = ue.get(this, n);
                    ue.set(this, n, t), -1 !== i.indexOf("-") && void 0 !== e && ue.set(this, i, t)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ue.remove(this, e)
            })
        }
    }), V.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = de.get(e, t), n && (!i || V.isArray(n) ? i = de.access(e, t, V.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = V.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = V._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                V.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return de.get(e, n) || de.access(e, n, {
                empty: V.Callbacks("once memory").add(function() {
                    de.remove(e, [t + "queue", n])
                })
            })
        }
    }), V.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? V.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = V.queue(this, t, n);
                V._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && V.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                V.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = V.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = de.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var he, ge, me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ve = ["Top", "Right", "Bottom", "Left"],
        ye = function(e, t) {
            return e = t || e, "none" === V.css(e, "display") || !V.contains(e.ownerDocument, e)
        },
        be = /^(?:checkbox|radio)$/i;
    he = Y.createDocumentFragment().appendChild(Y.createElement("div")), (ge = Y.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), F.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", F.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
    var we = "undefined";
    F.focusinBubbles = "onfocusin" in h;
    var Te = /^key/,
        ke = /^(?:mouse|pointer|contextmenu)|click/,
        Se = /^(?:focusinfocus|focusoutblur)$/,
        _e = /^([^.]*)(?:\.(.+)|)$/;
    V.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, g, m = de.get(t);
            if (m)
                for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = V.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return typeof V !== we && V.event.triggered !== e.type ? V.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(ae) || [""]).length; c--;) f = g = (a = _e.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = V.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = V.event.special[f] || {}, d = V.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && V.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(f, s, !1)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), V.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, g, m = de.hasData(e) && de.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(ae) || [""]).length; c--;)
                    if (f = g = (a = _e.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = V.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || V.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) V.event.remove(e, f + t[c], n, i, !0);
                V.isEmptyObject(l) && (delete m.handle, de.remove(e, "events"))
            }
        },
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, c, d, u = [n || Y],
                p = z.call(e, "type") ? e.type : e,
                f = z.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = s = n = n || Y, 3 !== n.nodeType && 8 !== n.nodeType && !Se.test(p + V.event.triggered) && (0 <= p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[V.expando] ? e : new V.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : V.makeArray(t, [e]), d = V.event.special[p] || {}, i || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                if (!i && !d.noBubble && !V.isWindow(n)) {
                    for (a = d.delegateType || p, Se.test(a + p) || (r = r.parentNode); r; r = r.parentNode) u.push(r), s = r;
                    s === (n.ownerDocument || Y) && u.push(s.defaultView || s.parentWindow || h)
                }
                for (o = 0;
                    (r = u[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? a : d.bindType || p, (c = (de.get(r, "events") || {})[e.type] && de.get(r, "handle")) && c.apply(r, t), (c = l && r[l]) && c.apply && V.acceptData(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), t) || !V.acceptData(n) || l && V.isFunction(n[p]) && !V.isWindow(n) && ((s = n[l]) && (n[l] = null), n[V.event.triggered = p](), V.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        dispatch: function(e) {
            e = V.event.fix(e);
            var t, n, i, o, r, s = [],
                a = H.call(arguments),
                l = (de.get(this, "events") || {})[e.type] || [],
                c = V.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = V.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (i = ((V.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (i = [], n = 0; n < a; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? 0 <= V(o, this).index(l) : V.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || Y).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[V.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = ke.test(o) ? this.mouseHooks : Te.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new V.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
            return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== s() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === s() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && V.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return V.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = V.extend(new V.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? V.event.trigger(o, null, t) : V.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, V.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, V.Event = function(e, t) {
        return this instanceof V.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? r : c) : this.type = e, t && V.extend(this, t), this.timeStamp = e && e.timeStamp || V.now(), void(this[V.expando] = !0)) : new V.Event(e, t)
    }, V.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = r, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = r, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = r, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, V.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        V.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return (!n || n !== this && !V.contains(this, n)) && (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), F.focusinBubbles || V.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var o = function(e) {
            V.event.simulate(i, e.target, V.event.fix(e), !0)
        };
        V.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = de.access(e, i);
                t || e.addEventListener(n, o, !0), de.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = de.access(e, i) - 1;
                t ? de.access(e, i, t) : (e.removeEventListener(n, o, !0), de.remove(e, i))
            }
        }
    }), V.fn.extend({
        on: function(e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = c;
            else if (!i) return this;
            return 1 === o && (r = i, (i = function(e) {
                return V().off(e), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = V.guid++)), this.each(function() {
                V.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, V(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = c), this.each(function() {
                V.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                V.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? V.event.trigger(e, t, n, !0) : void 0
        }
    });
    var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ce = /<([\w:]+)/,
        Ee = /<|&#?\w+;/,
        Ae = /<(?:script|style|link)/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^$|\/(?:java|ecma)script/i,
        Ne = /^true\/(.*)/,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td, V.extend({
        clone: function(e, t, n) {
            var i, o, r, s, a, l, c, d = e.cloneNode(!0),
                u = V.contains(e.ownerDocument, e);
            if (!(F.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || V.isXMLDoc(e)))
                for (s = y(d), i = 0, o = (r = y(e)).length; i < o; i++) a = r[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && be.test(a.type) ? l.checked = a.checked : ("input" === c || "textarea" === c) && (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || y(e), s = s || y(d), i = 0, o = r.length; i < o; i++) p(r[i], s[i]);
                else p(e, d);
            return 0 < (s = y(d, "script")).length && v(s, !u && y(e, "script")), d
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, s, a, l, c, d = t.createDocumentFragment(), u = [], p = 0, f = e.length; p < f; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === V.type(o)) V.merge(u, o.nodeType ? [o] : o);
                    else if (Ee.test(o)) {
                for (r = r || d.appendChild(t.createElement("div")), s = (Ce.exec(o) || ["", ""])[1].toLowerCase(), a = Le[s] || Le._default, r.innerHTML = a[1] + o.replace(xe, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                V.merge(u, r.childNodes), (r = d.firstChild).textContent = ""
            } else u.push(t.createTextNode(o));
            for (d.textContent = "", p = 0; o = u[p++];)
                if ((!i || -1 === V.inArray(o, i)) && (l = V.contains(o.ownerDocument, o), r = y(d.appendChild(o), "script"), l && v(r), n))
                    for (c = 0; o = r[c++];) De.test(o.type || "") && n.push(o);
            return d
        },
        cleanData: function(e) {
            for (var t, n, i, o, r = V.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (V.acceptData(n) && ((o = n[de.expando]) && (t = de.cache[o]))) {
                    if (t.events)
                        for (i in t.events) r[i] ? V.event.remove(n, i) : V.removeEvent(n, i, t.handle);
                    de.cache[o] && delete de.cache[o]
                }
                delete ue.cache[n[ue.expando]]
            }
        }
    }), V.fn.extend({
        text: function(e) {
            return ce(this, function(e) {
                return void 0 === e ? V.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || d(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? V.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || V.cleanData(y(n)), n.parentNode && (t && V.contains(n.ownerDocument, n) && v(y(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (V.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return V.clone(this, e, t)
            })
        },
        html: function(e) {
            return ce(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !Le[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(xe, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (V.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, V.cleanData(y(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, i) {
            n = M.apply([], n);
            var e, t, o, r, s, a, l = 0,
                c = this.length,
                d = this,
                u = c - 1,
                p = n[0],
                f = V.isFunction(p);
            if (f || 1 < c && "string" == typeof p && !F.checkClone && Oe.test(p)) return this.each(function(e) {
                var t = d.eq(e);
                f && (n[0] = p.call(this, e, t.html())), t.domManip(n, i)
            });
            if (c && (t = (e = V.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
                for (r = (o = V.map(y(e, "script"), g)).length; l < c; l++) s = e, l !== u && (s = V.clone(s, !0, !0), r && V.merge(o, y(s, "script"))), i.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, V.map(o, m), l = 0; l < r; l++) s = o[l], De.test(s.type || "") && !de.access(s, "globalEval") && V.contains(a, s) && (s.src ? V._evalUrl && V._evalUrl(s.src) : V.globalEval(s.textContent.replace(Ie, "")))
            }
            return this
        }
    }), V.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        V.fn[e] = function(e) {
            for (var t, n = [], i = V(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), V(i[r])[s](t), R.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e, je = {},
        Pe = /^margin/,
        He = new RegExp("^(" + me + ")(?!px)[a-z%]+$", "i"),
        Me = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : h.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", i.appendChild(o);
            var e = h.getComputedStyle(r, null);
            t = "1%" !== e.top, n = "4px" === e.width, i.removeChild(o)
        }
        var t, n, i = Y.documentElement,
            o = Y.createElement("div"),
            r = Y.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", F.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(r), h.getComputedStyle && V.extend(F, {
            pixelPosition: function() {
                return e(), t
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, t = r.appendChild(Y.createElement("div"));
                return t.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", r.style.width = "1px", i.appendChild(o), e = !parseFloat(h.getComputedStyle(t, null).marginRight), i.removeChild(o), r.removeChild(t), e
            }
        }))
    }(), V.swap = function(e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
        return o
    };
    var Re = /^(none|table(?!-c[ea]).+)/,
        We = new RegExp("^(" + me + ")(.*)$", "i"),
        qe = new RegExp("^([+-])=(" + me + ")", "i"),
        Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Fe = ["Webkit", "O", "Moz", "ms"];
    V.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = f(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = V.camelCase(t),
                    l = e.style;
                return t = V.cssProps[a] || (V.cssProps[a] = T(l, a)), s = V.cssHooks[t] || V.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : ("string" === (r = typeof n) && (o = qe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(V.css(e, t)), r = "number"), void(null != n && n == n && ("number" !== r || V.cssNumber[a] || (n += "px"), F.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = V.camelCase(t);
            return t = V.cssProps[a] || (V.cssProps[a] = T(e.style, a)), (s = V.cssHooks[t] || V.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = f(e, t, i)), "normal" === o && t in ze && (o = ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || V.isNumeric(r) ? r || 0 : o) : o
        }
    }), V.each(["height", "width"], function(e, o) {
        V.cssHooks[o] = {
            get: function(e, t, n) {
                return t ? Re.test(V.css(e, "display")) && 0 === e.offsetWidth ? V.swap(e, Be, function() {
                    return _(e, o, n)
                }) : _(e, o, n) : void 0
            },
            set: function(e, t, n) {
                var i = n && Me(e);
                return k(0, t, n ? S(e, o, n, "border-box" === V.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), V.cssHooks.marginRight = w(F.reliableMarginRight, function(e, t) {
        return t ? V.swap(e, {
            display: "inline-block"
        }, f, [e, "marginRight"]) : void 0
    }), V.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        V.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ve[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, Pe.test(o) || (V.cssHooks[o + r].set = k)
    }), V.fn.extend({
        css: function(e, t) {
            return ce(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (V.isArray(t)) {
                    for (i = Me(e), o = t.length; s < o; s++) r[t[s]] = V.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? V.style(e, t, n) : V.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return x(this, !0)
        },
        hide: function() {
            return x(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ye(this) ? V(this).show() : V(this).hide()
            })
        }
    }), (V.Tween = C).prototype = {
        constructor: C,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (V.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = C.propHooks[this.prop];
            return e && e.get ? e.get(this) : C.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = C.propHooks[this.prop];
            return this.options.duration ? this.pos = t = V.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = V.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                V.fx.step[e.prop] ? V.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[V.cssProps[e.prop]] || V.cssHooks[e.prop]) ? V.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, V.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, V.fx = C.prototype.init, V.fx.step = {};
    var Ye, Ue, Ve, Qe, Xe, Ke = /^(?:toggle|show|hide)$/,
        Ge = new RegExp("^(?:([+-])=|)(" + me + ")([a-z%]*)$", "i"),
        Je = /queueHooks$/,
        Ze = [function(t, e, n) {
            var i, o, r, s, a, l, c, d = this,
                u = {},
                p = t.style,
                f = t.nodeType && ye(t),
                h = de.get(t, "fxshow");
            for (i in n.queue || (null == (a = V._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, V.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = V.css(t, "display")) ? de.get(t, "olddisplay") || b(t.nodeName) : c) && "none" === V.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (o = e[i], Ke.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !h || void 0 === h[i]) continue;
                        f = !0
                    }
                    u[i] = h && h[i] || V.style(t, i)
                } else c = void 0;
            if (V.isEmptyObject(u)) "inline" === ("none" === c ? b(t.nodeName) : c) && (p.display = c);
            else
                for (i in h ? "hidden" in h && (f = h.hidden) : h = de.access(t, "fxshow", {}), r && (h.hidden = !f), f ? V(t).show() : d.done(function() {
                        V(t).hide()
                    }), d.done(function() {
                        var e;
                        for (e in de.remove(t, "fxshow"), u) V.style(t, e, u[e])
                    }), u) s = O(f ? h[i] : 0, i, d), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }],
        et = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = Ge.exec(t),
                    r = o && o[3] || (V.cssNumber[e] ? "" : "px"),
                    s = (V.cssNumber[e] || "px" !== r && +i) && Ge.exec(V.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r)
                    for (r = r || s[3], o = o || [], s = +i || 1; s /= a = a || ".5", V.style(n.elem, e, s + r), a !== (a = n.cur() / i) && 1 !== a && --l;);
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    V.Animation = V.extend(D, {
        tweener: function(e, t) {
            V.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], et[n] = et[n] || [], et[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Ze.unshift(e) : Ze.push(e)
        }
    }), V.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? V.extend({}, e) : {
            complete: n || !n && t || V.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !V.isFunction(t) && t
        };
        return i.duration = V.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in V.fx.speeds ? V.fx.speeds[i.duration] : V.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            V.isFunction(i.old) && i.old.call(this), i.queue && V.dequeue(this, i.queue)
        }, i
    }, V.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ye).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var o = V.isEmptyObject(t),
                r = V.speed(e, n, i),
                s = function() {
                    var e = D(this, V.extend({}, t), r);
                    (o || de.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(o, e, r) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = V.timers,
                    i = de.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && Je.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                (e || !r) && V.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = de.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = V.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, V.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), V.each(["toggle", "show", "hide"], function(e, i) {
        var o = V.fn[i];
        V.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(A(i, !0), e, t, n)
        }
    }), V.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        V.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), V.timers = [], V.fx.tick = function() {
        var e, t = 0,
            n = V.timers;
        for (Ye = V.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || V.fx.stop(), Ye = void 0
    }, V.fx.timer = function(e) {
        V.timers.push(e), e() ? V.fx.start() : V.timers.pop()
    }, V.fx.interval = 13, V.fx.start = function() {
        Ue || (Ue = setInterval(V.fx.tick, V.fx.interval))
    }, V.fx.stop = function() {
        clearInterval(Ue), Ue = null
    }, V.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, V.fn.delay = function(i, e) {
        return i = V.fx && V.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }, Ve = Y.createElement("input"), Qe = Y.createElement("select"), Xe = Qe.appendChild(Y.createElement("option")), Ve.type = "checkbox", F.checkOn = "" !== Ve.value, F.optSelected = Xe.selected, Qe.disabled = !0, F.optDisabled = !Xe.disabled, (Ve = Y.createElement("input")).value = "t", Ve.type = "radio", F.radioValue = "t" === Ve.value;
    var tt, nt = V.expr.attrHandle;
    V.fn.extend({
        attr: function(e, t) {
            return ce(this, V.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                V.removeAttr(this, e)
            })
        }
    }), V.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === we ? V.prop(e, t, n) : (1 === r && V.isXMLDoc(e) || (t = t.toLowerCase(), i = V.attrHooks[t] || (V.expr.match.bool.test(t) ? tt : void 0)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = V.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void V.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(ae);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = V.propFix[n] || n, V.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!F.radioValue && "radio" === t && V.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), tt = {
        set: function(e, t, n) {
            return !1 === t ? V.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, V.each(V.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = nt[t] || V.find.attr;
        nt[t] = function(e, t, n) {
            var i, o;
            return n || (o = nt[t], nt[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, nt[t] = o), i
        }
    });
    var it = /^(?:input|select|textarea|button)$/i;
    V.fn.extend({
        prop: function(e, t) {
            return ce(this, V.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[V.propFix[e] || e]
            })
        }
    }), V.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !V.isXMLDoc(e)) && (t = V.propFix[t] || t, o = V.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || it.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), F.optSelected || (V.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), V.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        V.propFix[this.toLowerCase()] = this
    });
    var ot = /[\t\r\n\f]/g;
    V.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (V.isFunction(t)) return this.each(function(e) {
                V(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(ae) || []; l < c; l++)
                    if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : " ")) {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = V.trim(i), n.className !== s && (n.className = s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (V.isFunction(t)) return this.each(function(e) {
                V(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(ae) || []; l < c; l++)
                    if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        s = t ? V.trim(i) : "", n.className !== s && (n.className = s)
                    } return this
        },
        toggleClass: function(o, t) {
            var r = typeof o;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : this.each(V.isFunction(o) ? function(e) {
                V(this).toggleClass(o.call(this, e, this.className, t), t)
            } : function() {
                if ("string" === r)
                    for (var e, t = 0, n = V(this), i = o.match(ae) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else(r === we || "boolean" === r) && (this.className && de.set(this, "__className__", this.className), this.className = this.className || !1 === o ? "" : de.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(ot, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var rt = /\r/g;
    V.fn.extend({
        val: function(n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = V.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, V(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : V.isArray(t) && (t = V.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = V.valHooks[this.type] || V.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = V.valHooks[t.type] || V.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(rt, "") : null == e ? "" : e : void 0
        }
    }), V.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = V.find.attr(e, "value");
                    return null != t ? t : V.trim(V.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (!(!(n = i[l]).selected && l !== o || (F.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && V.nodeName(n.parentNode, "optgroup"))) {
                            if (t = V(n).val(), r) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = V.makeArray(t), s = o.length; s--;)((i = o[s]).selected = 0 <= V.inArray(i.value, r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), V.each(["radio", "checkbox"], function() {
        V.valHooks[this] = {
            set: function(e, t) {
                return V.isArray(t) ? e.checked = 0 <= V.inArray(V(e).val(), t) : void 0
            }
        }, F.checkOn || (V.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), V.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        V.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), V.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var st = V.now(),
        at = /\?/;
    V.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, V.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && V.error("Invalid XML: " + e), t
    };
    var lt = /#.*$/,
        ct = /([?&])_=[^&]*/,
        dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ut = /^(?:GET|HEAD)$/,
        pt = /^\/\//,
        ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ht = {},
        gt = {},
        mt = "*/".concat("*"),
        vt = h.location.href,
        yt = ft.exec(vt.toLowerCase()) || [];
    V.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": V.parseJSON,
                "text xml": V.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, V.ajaxSettings), t) : L(V.ajaxSettings, e)
        },
        ajaxPrefilter: N(ht),
        ajaxTransport: N(gt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, r, s, a, l, c = t;
                2 !== T && (T = 2, f && clearTimeout(f), d = void 0, p = i || "", k.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                }(g, k, n)), a = function(e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = d.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, k, o), o ? (g.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (V.lastModified[u] = l), (l = k.getResponseHeader("etag")) && (V.etag[u] = l)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, (e || !c) && (c = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || c) + "", o ? y.resolveWith(m, [r, c, k]) : y.rejectWith(m, [k, c, s]), k.statusCode(w), w = void 0, h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [k, g, o ? r : s]), b.fireWith(m, [k, c]), h && (v.trigger("ajaxComplete", [k, g]), --V.active || V.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var d, u, p, i, f, o, h, r, g = V.ajaxSetup({}, t),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? V(m) : V.event,
                y = V.Deferred(),
                b = V.Callbacks("once memory"),
                w = g.statusCode || {},
                s = {},
                a = {},
                T = 0,
                l = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === T) {
                            if (!i)
                                for (i = {}; t = dt.exec(p);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === T ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return T || (e = a[n] = a[n] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return T || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (T < 2)
                                for (t in e) w[t] = [w[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return d && d.abort(t), n(0, t), this
                    }
                };
            if (y.promise(k).complete = b.add, k.success = k.done, k.error = k.fail, g.url = ((e || g.url || vt) + "").replace(lt, "").replace(pt, yt[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = V.trim(g.dataType || "*").toLowerCase().match(ae) || [""], null == g.crossDomain && (o = ft.exec(g.url.toLowerCase()), g.crossDomain = !(!o || o[1] === yt[1] && o[2] === yt[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (yt[3] || ("http:" === yt[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = V.param(g.data, g.traditional)), I(ht, g, t, k), 2 === T) return k;
            for (r in (h = V.event && g.global) && 0 == V.active++ && V.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ut.test(g.type), u = g.url, g.hasContent || (g.data && (u = g.url += (at.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = ct.test(u) ? u.replace(ct, "$1_=" + st++) : u + (at.test(u) ? "&" : "?") + "_=" + st++)), g.ifModified && (V.lastModified[u] && k.setRequestHeader("If-Modified-Since", V.lastModified[u]), V.etag[u] && k.setRequestHeader("If-None-Match", V.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && k.setRequestHeader("Content-Type", g.contentType), k.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + mt + "; q=0.01" : "") : g.accepts["*"]), g.headers) k.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, k, g) || 2 === T)) return k.abort();
            for (r in l = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[r](g[r]);
            if (d = I(gt, g, t, k)) {
                k.readyState = 1, h && v.trigger("ajaxSend", [k, g]), g.async && 0 < g.timeout && (f = setTimeout(function() {
                    k.abort("timeout")
                }, g.timeout));
                try {
                    T = 1, d.send(s, n)
                } catch (e) {
                    if (!(T < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return V.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return V.get(e, void 0, t, "script")
        }
    }), V.each(["get", "post"], function(e, o) {
        V[o] = function(e, t, n, i) {
            return V.isFunction(t) && (i = i || n, n = t, t = void 0), V.ajax({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), V._evalUrl = function(e) {
        return V.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, V.fn.extend({
        wrapAll: function(t) {
            var e;
            return V.isFunction(t) ? this.each(function(e) {
                V(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = V(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return this.each(V.isFunction(n) ? function(e) {
                V(this).wrapInner(n.call(this, e))
            } : function() {
                var e = V(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = V.isFunction(t);
            return this.each(function(e) {
                V(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                V.nodeName(this, "body") || V(this).replaceWith(this.childNodes)
            }).end()
        }
    }), V.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, V.expr.filters.visible = function(e) {
        return !V.expr.filters.hidden(e)
    };
    var bt = /%20/g,
        wt = /\[\]$/,
        Tt = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    V.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = V.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = V.ajaxSettings && V.ajaxSettings.traditional), V.isArray(e) || e.jquery && !V.isPlainObject(e)) V.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, o);
        return i.join("&").replace(bt, "+")
    }, V.fn.extend({
        serialize: function() {
            return V.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = V.prop(this, "elements");
                return e ? V.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !V(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !be.test(e))
            }).map(function(e, t) {
                var n = V(this).val();
                return null == n ? null : V.isArray(n) ? V.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            }).get()
        }
    }), V.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var _t = 0,
        xt = {},
        Ct = {
            0: 200,
            1223: 204
        },
        Et = V.ajaxSettings.xhr();
    h.attachEvent && h.attachEvent("onunload", function() {
        for (var e in xt) xt[e]()
    }), F.cors = !!Et && "withCredentials" in Et, F.ajax = Et = !!Et, V.ajaxTransport(function(r) {
        var s;
        return F.cors || Et && !r.crossDomain ? {
            send: function(e, t) {
                var n, i = r.xhr(),
                    o = ++_t;
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                s = function(e) {
                    return function() {
                        s && (delete xt[o], s = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? t(i.status, i.statusText) : t(Ct[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                            text: i.responseText
                        } : void 0, i.getAllResponseHeaders()))
                    }
                }, i.onload = s(), i.onerror = s("error"), s = xt[o] = s("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },
            abort: function() {
                s && s()
            }
        } : void 0
    }), V.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return V.globalEval(e), e
            }
        }
    }), V.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), V.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = V("<script>").prop({
                    async: !0,
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), Y.head.appendChild(i[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var At = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    V.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || V.expando + "_" + st++;
            return this[e] = !0, e
        }
    }), V.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (Ot.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = V.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ot, "$1" + i) : !1 !== e.jsonp && (e.url += (at.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return r || V.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = h[i], h[i] = function() {
            r = arguments
        }, n.always(function() {
            h[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, At.push(i)), r && V.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), V.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Y;
        var i = ee.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = V.buildFragment([e], t, o), o && o.length && V(o).remove(), V.merge([], i.childNodes))
    };
    var Dt = V.fn.load;
    V.fn.load = function(e, t, n) {
        if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return 0 <= a && (i = V.trim(e.slice(a)), e = e.slice(0, a)), V.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && V.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? V("<div>").append(V.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, r || [e.responseText, t, e])
        }), this
    }, V.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        V.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), V.expr.filters.animated = function(t) {
        return V.grep(V.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Nt = h.document.documentElement;
    V.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c = V.css(e, "position"),
                d = V(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), r = V.css(e, "top"), l = V.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), V.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, V.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                V.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            return r ? (e = r.documentElement, V.contains(e, i) ? (typeof i.getBoundingClientRect !== we && (o = i.getBoundingClientRect()), n = j(r), {
                top: o.top + n.pageYOffset - e.clientTop,
                left: o.left + n.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === V.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), V.nodeName(e[0], "html") || (i = e.offset()), i.top += V.css(e[0], "borderTopWidth", !0), i.left += V.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - V.css(n, "marginTop", !0),
                    left: t.left - i.left - V.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Nt; e && !V.nodeName(e, "html") && "static" === V.css(e, "position");) e = e.offsetParent;
                return e || Nt
            })
        }
    }), V.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        V.fn[t] = function(e) {
            return ce(this, function(e, t, n) {
                var i = j(e);
                return void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? h.pageXOffset : n, r ? n : h.pageYOffset) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }), V.each(["top", "left"], function(e, n) {
        V.cssHooks[n] = w(F.pixelPosition, function(e, t) {
            return t ? (t = f(e, n), He.test(t) ? V(e).position()[n] + "px" : t) : void 0
        })
    }), V.each({
        Height: "height",
        Width: "width"
    }, function(r, s) {
        V.each({
            padding: "inner" + r,
            content: s,
            "": "outer" + r
        }, function(i, e) {
            V.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return ce(this, function(e, t, n) {
                    var i;
                    return V.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? V.css(e, t, o) : V.style(e, t, n, o)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), V.fn.size = function() {
        return this.length
    }, V.fn.andSelf = V.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return V
    });
    var It = h.jQuery,
        Lt = h.$;
    return V.noConflict = function(e) {
        return h.$ === V && (h.$ = Lt), e && h.jQuery === V && (h.jQuery = It), V
    }, typeof e === we && (h.jQuery = h.$ = V), V
}), function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function s(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function y(e, t) {
        if (1 !== e.nodeType) return [];
        var n = window.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function b(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function w(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
        var t = y(e),
            n = t.overflow,
            i = t.overflowX,
            o = t.overflowY;
        return /(auto|scroll)/.test(n + o + i) ? e : w(b(e))
    }

    function T(e) {
        var t = e && e.offsetParent,
            n = t && t.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === y(t, "position") ? T(t) : t : window.document.documentElement
    }

    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }

    function k(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            o = n ? t : e,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && T(s.firstElementChild) !== s ? T(l) : l;
        var c = d(e);
        return c.host ? k(c.host, t) : k(e, d(t).host)
    }

    function S(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = window.document.documentElement;
            return (window.document.scrollingElement || i)[t]
        }
        return e[t]
    }

    function u(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
    }

    function i(e, t, n, i) {
        return P(t["offset" + e], n["client" + e], n["offset" + e], B() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function _() {
        var e = window.document.body,
            t = window.document.documentElement,
            n = B() && window.getComputedStyle(t);
        return {
            height: i("Height", e, t, n),
            width: i("Width", e, t, n)
        }
    }

    function x(e) {
        return U({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function C(e) {
        var t = {};
        if (B()) try {
            t = e.getBoundingClientRect();
            var n = S(e, "top"),
                i = S(e, "left");
            t.top += n, t.left += i, t.bottom += n, t.right += i
        } catch (e) {} else t = e.getBoundingClientRect();
        var o = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            r = "HTML" === e.nodeName ? _() : {},
            s = r.width || e.clientWidth || o.right - o.left,
            a = r.height || e.clientHeight || o.bottom - o.top,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a;
        if (l || c) {
            var d = y(e);
            l -= u(d, "x"), c -= u(d, "y"), o.width -= l, o.height -= c
        }
        return x(o)
    }

    function E(e, t) {
        var n = B(),
            i = "HTML" === t.nodeName,
            o = C(e),
            r = C(t),
            s = w(e),
            a = y(t),
            l = +a.borderTopWidth.split("px")[0],
            c = +a.borderLeftWidth.split("px")[0],
            d = x({
                top: o.top - r.top - l,
                left: o.left - r.left - c,
                width: o.width,
                height: o.height
            });
        if (d.marginTop = 0, d.marginLeft = 0, !n && i) {
            var u = +a.marginTop.split("px")[0],
                p = +a.marginLeft.split("px")[0];
            d.top -= l - u, d.bottom -= l - u, d.left -= c - p, d.right -= c - p, d.marginTop = u, d.marginLeft = p
        }
        return (n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = S(t, "top"),
                o = S(t, "left"),
                r = n ? -1 : 1;
            return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
        }(d, t)), d
    }

    function p(e, t, n, i) {
        var o, r, s, a, l, c, d, u = {
                top: 0,
                left: 0
            },
            p = k(e, t);
        if ("viewport" === i) o = p, r = window.document.documentElement, s = E(o, r), a = P(r.clientWidth, window.innerWidth || 0), l = P(r.clientHeight, window.innerHeight || 0), c = S(r), d = S(r, "left"), u = x({
            top: c - s.top + s.marginTop,
            left: d - s.left + s.marginLeft,
            width: a,
            height: l
        });
        else {
            var f;
            "scrollParent" === i ? "BODY" === (f = w(b(e))).nodeName && (f = window.document.documentElement) : f = "window" === i ? window.document.documentElement : i;
            var h = E(f, p);
            if ("HTML" !== f.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === y(t, "position") || e(b(t)))
                }(p)) u = h;
            else {
                var g = _(),
                    m = g.height,
                    v = g.width;
                u.top += h.top - h.marginTop, u.bottom = m + h.top, u.left += h.left - h.marginLeft, u.right = v + h.left
            }
        }
        return u.left += n, u.top += n, u.right -= n, u.bottom -= n, u
    }

    function a(e, t, i, n, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = p(i, n, r, o),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(e) {
                return U({
                    key: e
                }, a[e], {
                    area: (t = a[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            d = 0 < c.length ? c[0].key : l[0].key,
            u = e.split("-")[1];
        return d + (u ? "-" + u : "")
    }

    function l(e, t, n) {
        return E(n, k(t, n))
    }

    function v(e) {
        var t = window.getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function A(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function O(e, t, n) {
        n = n.split("-")[0];
        var i = v(e),
            o = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[A(a)], o
    }

    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function N(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = D(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && s(t) && (n.offsets.popper = x(n.offsets.popper), n.offsets.reference = x(n.offsets.reference), n = t(n, e))
        }), n
    }

    function e(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function I(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var o = t[i],
                r = o ? "" + o + n : e;
            if (void 0 !== window.document.body.style[r]) return r
        }
        return null
    }

    function t(e, t, n, i) {
        n.updateBound = i, window.addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = w(e);
        return function e(t, n, i, o) {
            var r = "BODY" === t.nodeName,
                s = r ? window : t;
            s.addEventListener(n, i, {
                passive: !0
            }), r || e(w(s.parentNode), n, i, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function n() {
        var t;
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = (this.reference, t = this.state, window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function f(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function c(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && f(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }

    function L(e, t, n) {
        var i = D(e, function(e) {
                return e.name === t
            }),
            o = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!o) {
            var r = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }

    function o(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = Q.indexOf(e),
            i = Q.slice(n + 1).concat(Q.slice(0, n));
        return t ? i.reverse() : i
    }

    function h(e, o, r, t) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            i = n.indexOf(D(n, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === i ? [n] : [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        s = o[2];
                    if (!r) return e;
                    if (0 === s.indexOf("%")) {
                        var a;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return x(a)[t] / 100 * r
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? P(document.documentElement.clientHeight, window.innerHeight || 0) : P(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                }(e, n, o, r)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                f(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), s
    }
    for (var $ = Math.min, j = Math.floor, P = Math.max, r = ["native code", "[object MutationObserverConstructor]"], g = "undefined" != typeof window, m = ["Edge", "Trident", "Firefox"], H = 0, M = 0; M < m.length; M += 1)
        if (g && 0 <= navigator.userAgent.indexOf(m[M])) {
            H = 1;
            break
        } var R, W, q = g && (W = window.MutationObserver, r.some(function(e) {
            return -1 < (W || "").toString().indexOf(e)
        })) ? function(e) {
            var t = !1,
                n = 0,
                i = document.createElement("span");
            return new MutationObserver(function() {
                    e(), t = !1
                }).observe(i, {
                    attributes: !0
                }),
                function() {
                    t || (t = !0, i.setAttribute("x-index", n), ++n)
                }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, H))
            }
        },
        B = function() {
            return null == R && (R = -1 !== navigator.appVersion.indexOf("MSIE 10")), R
        },
        z = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        F = function() {
            function i(e, t) {
                for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        }(),
        Y = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        U = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        V = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Q = V.slice(3),
        X = "flip",
        K = "clockwise",
        G = "counterclockwise",
        J = function() {
            function r(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                z(this, r), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = q(this.update.bind(this)), this.options = U({}, r.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e.jquery ? e[0] : e, this.popper = t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(U({}, r.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = U({}, r.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return U({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && s(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return F(r, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = l(this.state, this.popper, this.reference), e.placement = a(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = O(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[I("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = t(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return n.call(this)
                }
            }]), r
        }();
    return J.Utils = ("undefined" == typeof window ? global : window).PopperUtils, J.placements = V, J.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var o = e.offsets,
                            r = o.reference,
                            s = o.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            d = {
                                start: Y({}, l, r[l]),
                                end: Y({}, l, r[l] + r[c] - s[c])
                            };
                        e.offsets.popper = U({}, s, d[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset,
                        o = e.placement,
                        r = e.offsets,
                        s = r.popper,
                        a = r.reference,
                        l = o.split("-")[0];
                    return n = f(+i) ? [+i, 0] : h(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || T(e.instance.popper);
                    e.instance.reference === t && (t = T(t));
                    var o = p(e.instance.popper, e.instance.reference, i.padding, t);
                    i.boundaries = o;
                    var n = i.priority,
                        r = e.offsets.popper,
                        s = {
                            primary: function(e) {
                                var t = r[e];
                                return r[e] < o[e] && !i.escapeWithReference && (t = P(r[e], o[e])), Y({}, e, t)
                            },
                            secondary: function(e) {
                                var t = "right" === e ? "left" : "top",
                                    n = r[t];
                                return r[e] > o[e] && !i.escapeWithReference && (n = $(r[t], o[e] - ("right" === e ? r.width : r.height))), Y({}, t, n)
                            }
                        };
                    return n.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        r = U({}, r, s[t](e))
                    }), e.offsets.popper = r, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        o = e.placement.split("-")[0],
                        r = j,
                        s = -1 !== ["top", "bottom"].indexOf(o),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!L(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var n = t.element;
                    if ("string" == typeof n) {
                        if (!(n = e.instance.popper.querySelector(n))) return e
                    } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var i = e.placement.split("-")[0],
                        o = e.offsets,
                        r = o.popper,
                        s = o.reference,
                        a = -1 !== ["left", "right"].indexOf(i),
                        l = a ? "height" : "width",
                        c = a ? "Top" : "Left",
                        d = c.toLowerCase(),
                        u = a ? "left" : "top",
                        p = a ? "bottom" : "right",
                        f = v(n)[l];
                    s[p] - f < r[d] && (e.offsets.popper[d] -= r[d] - (s[p] - f)), s[d] + f > r[p] && (e.offsets.popper[d] += s[d] + f - r[p]);
                    var h = s[d] + s[l] / 2 - f / 2,
                        g = y(e.instance.popper, "margin" + c).replace("px", ""),
                        m = h - x(e.offsets.popper)[d] - g;
                    return m = P($(r[l] - f, m), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[d] = Math.round(m), e.offsets.arrow[u] = "", e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(h, g) {
                    if (e(h.instance.modifiers, "inner")) return h;
                    if (h.flipped && h.placement === h.originalPlacement) return h;
                    var m = p(h.instance.popper, h.instance.reference, g.padding, g.boundariesElement),
                        v = h.placement.split("-")[0],
                        y = A(v),
                        b = h.placement.split("-")[1] || "",
                        w = [];
                    switch (g.behavior) {
                        case X:
                            w = [v, y];
                            break;
                        case K:
                            w = o(v);
                            break;
                        case G:
                            w = o(v, !0);
                            break;
                        default:
                            w = g.behavior
                    }
                    return w.forEach(function(e, t) {
                        if (v !== e || w.length === t + 1) return h;
                        v = h.placement.split("-")[0], y = A(v);
                        var n, i = h.offsets.popper,
                            o = h.offsets.reference,
                            r = j,
                            s = "left" === v && r(i.right) > r(o.left) || "right" === v && r(i.left) < r(o.right) || "top" === v && r(i.bottom) > r(o.top) || "bottom" === v && r(i.top) < r(o.bottom),
                            a = r(i.left) < r(m.left),
                            l = r(i.right) > r(m.right),
                            c = r(i.top) < r(m.top),
                            d = r(i.bottom) > r(m.bottom),
                            u = "left" === v && a || "right" === v && l || "top" === v && c || "bottom" === v && d,
                            p = -1 !== ["top", "bottom"].indexOf(v),
                            f = !!g.flipVariations && (p && "start" === b && a || p && "end" === b && l || !p && "start" === b && c || !p && "end" === b && d);
                        (s || u || f) && (h.flipped = !0, (s || u) && (v = w[t + 1]), f && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), h.placement = v + (b ? "-" + b : ""), h.offsets.popper = U({}, h.offsets.popper, O(h.instance.popper, h.offsets.reference, h.placement)), h = N(h.instance.modifiers, h, "flip"))
                    }), h
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        o = i.popper,
                        r = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = A(t), e.offsets.popper = x(o), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!L(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = D(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        i = t.y,
                        o = e.offsets.popper,
                        r = D(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l = void 0 === r ? t.gpuAcceleration : r,
                        c = C(T(e.instance.popper)),
                        d = {
                            position: o.position
                        },
                        u = {
                            left: j(o.left),
                            top: j(o.top),
                            bottom: j(o.bottom),
                            right: j(o.right)
                        },
                        p = "bottom" === n ? "top" : "bottom",
                        f = "right" === i ? "left" : "right",
                        h = I("transform");
                    if (a = "bottom" == p ? -c.height + u.bottom : u.top, s = "right" == f ? -c.width + u.right : u.left, l && h) d[h] = "translate3d(" + s + "px, " + a + "px, 0)", d[p] = 0, d[f] = 0, d.willChange = "transform";
                    else {
                        var g = "bottom" == p ? -1 : 1,
                            m = "right" == f ? -1 : 1;
                        d[p] = a * g, d[f] = s * m, d.willChange = p + ", " + f
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = U({}, v, e.attributes), e.styles = U({}, d, e.styles), e.arrowStyles = U({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return c(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                        !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e])
                    }), e.arrowElement && Object.keys(e.arrowStyles).length && c(e.arrowElement, e.arrowStyles), e;
                    var t, n
                },
                onLoad: function(e, t, n, i, o) {
                    var r = l(0, t, e),
                        s = a(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), c(t, {
                        position: "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, J
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
! function(e) {
var t = jQuery.fn.jquery.split(" ")[0].split(".");
if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(),
function() {
function T(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var l, e, c, d, u, p, t, s, f, h, a, g, m, v, y, n, b, w, i, k, o, r, S, _, x, C, E, A, O, D, N, I, L, $, j, P, H, M, R, W, q, B, z, F, Y, U, V, Q, X, K, G, J, Z, ee, te, ne, ie, oe, re, se, ae, le, ce, de, ue, pe, fe, he, ge, me, ve, ye, be, we, Te, ke, Se, _e, xe, Ce, Ee, Ae, Oe, De, Ne, Ie, Le, $e, je, Pe, He, Me, Re, We, qe, Be, ze, Fe, Ye, Ue, Ve, Qe, Xe, Ke, Ge, Je, Ze, et, tt, nt, it, ot, rt, st, at, lt, ct, dt, ut, pt, ft, ht, gt, mt, vt, yt, bt, wt, Tt, kt, St, _t, xt, Ct, Et, At = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    Ot = function() {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }
    }(),
    Dt = (ut = jQuery, pt = !1, ft = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    }, ht = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            t && "#" !== t || (t = e.getAttribute("href") || "");
            try {
                return 0 < ut(t).length ? t : null
            } catch (e) {
                return null
            }
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            ut(e).trigger(pt.end)
        },
        supportsTransitionEnd: function() {
            return Boolean(pt)
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    var o = n[i],
                        r = t[i],
                        s = r && ((l = r)[0] || l).nodeType ? "element" : (a = r, {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                } var a, l
        }
    }, pt = function() {
        if (window.QUnit) return !1;
        var e = document.createElement("bootstrap");
        for (var t in ft)
            if (void 0 !== e.style[t]) return {
                end: ft[t]
            };
        return !1
    }(), ut.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return ut(this).one(ht.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || ht.triggerTransitionEnd(t)
        }, e), this
    }, ht.supportsTransitionEnd() && (ut.event.special[ht.TRANSITION_END] = {
        bindType: pt.end,
        delegateType: pt.end,
        handle: function(e) {
            if (ut(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    }), ht),
    Nt = (tt = jQuery, nt = "alert", it = tt.fn[nt], ot = "close.bs.alert", rt = "closed.bs.alert", st = "click.bs.alert.data-api", at = "alert", lt = "fade", ct = "show", dt = function() {
        function i(e) {
            T(this, i), this._element = e
        }
        return i.prototype.close = function(e) {
            e = e || this._element;
            var t = this._getRootElement(e);
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, i.prototype.dispose = function() {
            tt.removeData(this._element, "bs.alert"), this._element = null
        }, i.prototype._getRootElement = function(e) {
            var t = Dt.getSelectorFromElement(e),
                n = !1;
            return t && (n = tt(t)[0]), n || (n = tt(e).closest("." + at)[0]), n
        }, i.prototype._triggerCloseEvent = function(e) {
            var t = tt.Event(ot);
            return tt(e).trigger(t), t
        }, i.prototype._removeElement = function(t) {
            var n = this;
            tt(t).removeClass(ct), Dt.supportsTransitionEnd() && tt(t).hasClass(lt) ? tt(t).one(Dt.TRANSITION_END, function(e) {
                return n._destroyElement(t, e)
            }).emulateTransitionEnd(150) : this._destroyElement(t)
        }, i.prototype._destroyElement = function(e) {
            tt(e).detach().trigger(rt).remove()
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = tt(this),
                    t = e.data("bs.alert");
                t || (t = new i(this), e.data("bs.alert", t)), "close" === n && t[n](this)
            })
        }, i._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }, Ot(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-beta"
            }
        }]), i
    }(), tt(document).on(st, '[data-dismiss="alert"]', dt._handleDismiss(new dt)), tt.fn[nt] = dt._jQueryInterface, tt.fn[nt].Constructor = dt, tt.fn[nt].noConflict = function() {
        return tt.fn[nt] = it, dt._jQueryInterface
    }, qe = jQuery, Be = "button", ze = qe.fn[Be], Fe = "active", Ye = "btn", Ue = "focus", Ve = '[data-toggle^="button"]', Qe = '[data-toggle="buttons"]', Xe = "input", Ke = ".active", Ge = ".btn", Je = "click.bs.button.data-api", Ze = "focus.bs.button.data-api blur.bs.button.data-api", et = function() {
        function n(e) {
            T(this, n), this._element = e
        }
        return n.prototype.toggle = function() {
            var e = !0,
                t = !0,
                n = qe(this._element).closest(Qe)[0];
            if (n) {
                var i = qe(this._element).find(Xe)[0];
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && qe(this._element).hasClass(Fe)) e = !1;
                        else {
                            var o = qe(n).find(Ke)[0];
                            o && qe(o).removeClass(Fe)
                        } if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !qe(this._element).hasClass(Fe), qe(i).trigger("change")
                    }
                    i.focus(), t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !qe(this._element).hasClass(Fe)), e && qe(this._element).toggleClass(Fe)
        }, n.prototype.dispose = function() {
            qe.removeData(this._element, "bs.button"), this._element = null
        }, n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = qe(this).data("bs.button");
                e || (e = new n(this), qe(this).data("bs.button", e)), "toggle" === t && e[t]()
            })
        }, Ot(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-beta"
            }
        }]), n
    }(), qe(document).on(Je, Ve, function(e) {
        e.preventDefault();
        var t = e.target;
        qe(t).hasClass(Ye) || (t = qe(t).closest(Ge)), et._jQueryInterface.call(qe(t), "toggle")
    }).on(Ze, Ve, function(e) {
        var t = qe(e.target).closest(Ge)[0];
        qe(t).toggleClass(Ue, /^focus(in)?$/.test(e.type))
    }), qe.fn[Be] = et._jQueryInterface, qe.fn[Be].Constructor = et, qe.fn[Be].noConflict = function() {
        return qe.fn[Be] = ze, et._jQueryInterface
    }, we = jQuery, Te = "carousel", Se = "." + (ke = "bs.carousel"), _e = we.fn[Te], xe = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    }, Ce = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    }, Ee = "next", Ae = "prev", Oe = "left", De = "right", Ne = {
        SLIDE: "slide" + Se,
        SLID: "slid" + Se,
        KEYDOWN: "keydown" + Se,
        MOUSEENTER: "mouseenter" + Se,
        MOUSELEAVE: "mouseleave" + Se,
        TOUCHEND: "touchend" + Se,
        LOAD_DATA_API: "load.bs.carousel.data-api",
        CLICK_DATA_API: "click.bs.carousel.data-api"
    }, Ie = "carousel", Le = "active", $e = "slide", je = "carousel-item-right", Pe = "carousel-item-left", He = "carousel-item-next", Me = "carousel-item-prev", Re = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
    }, We = function() {
        function r(e, t) {
            T(this, r), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = we(e)[0], this._indicatorsElement = we(this._element).find(Re.INDICATORS)[0], this._addEventListeners()
        }
        return r.prototype.next = function() {
            this._isSliding || this._slide(Ee)
        }, r.prototype.nextWhenVisible = function() {
            document.hidden || this.next()
        }, r.prototype.prev = function() {
            this._isSliding || this._slide(Ae)
        }, r.prototype.pause = function(e) {
            e || (this._isPaused = !0), we(this._element).find(Re.NEXT_PREV)[0] && Dt.supportsTransitionEnd() && (Dt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, r.prototype.cycle = function(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, r.prototype.to = function(e) {
            var t = this;
            this._activeElement = we(this._element).find(Re.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding) we(this._element).one(Ne.SLID, function() {
                    return t.to(e)
                });
                else {
                    if (n === e) return this.pause(), void this.cycle();
                    var i = n < e ? Ee : Ae;
                    this._slide(i, this._items[e])
                }
        }, r.prototype.dispose = function() {
            we(this._element).off(Se), we.removeData(this._element, ke), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, r.prototype._getConfig = function(e) {
            return e = we.extend({}, xe, e), Dt.typeCheckConfig(Te, e, Ce), e
        }, r.prototype._addEventListeners = function() {
            var t = this;
            this._config.keyboard && we(this._element).on(Ne.KEYDOWN, function(e) {
                return t._keydown(e)
            }), "hover" === this._config.pause && (we(this._element).on(Ne.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(Ne.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }), "ontouchstart" in document.documentElement && we(this._element).on(Ne.TOUCHEND, function() {
                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                    return t.cycle(e)
                }, 500 + t._config.interval)
            }))
        }, r.prototype._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next();
                    break;
                default:
                    return
            }
        }, r.prototype._getItemIndex = function(e) {
            return this._items = we.makeArray(we(e).parent().find(Re.ITEM)), this._items.indexOf(e)
        }, r.prototype._getItemByDirection = function(e, t) {
            var n = e === Ee,
                i = e === Ae,
                o = this._getItemIndex(t),
                r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
            var s = (o + (e === Ae ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }, r.prototype._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e),
                i = this._getItemIndex(we(this._element).find(Re.ACTIVE_ITEM)[0]),
                o = we.Event(Ne.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: n
                });
            return we(this._element).trigger(o), o
        }, r.prototype._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                we(this._indicatorsElement).find(Re.ACTIVE).removeClass(Le);
                var t = this._indicatorsElement.children[this._getItemIndex(e)];
                t && we(t).addClass(Le)
            }
        }, r.prototype._slide = function(e, t) {
            var n = this,
                i = we(this._element).find(Re.ACTIVE_ITEM)[0],
                o = this._getItemIndex(i),
                r = t || i && this._getItemByDirection(e, i),
                s = this._getItemIndex(r),
                a = Boolean(this._interval),
                l = void 0,
                c = void 0,
                d = void 0;
            if (e === Ee ? (l = Pe, c = He, d = Oe) : (l = je, c = Me, d = De), r && we(r).hasClass(Le)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(r, d).isDefaultPrevented() && i && r) {
                this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(r);
                var u = we.Event(Ne.SLID, {
                    relatedTarget: r,
                    direction: d,
                    from: o,
                    to: s
                });
                Dt.supportsTransitionEnd() && we(this._element).hasClass($e) ? (we(r).addClass(c), Dt.reflow(r), we(i).addClass(l), we(r).addClass(l), we(i).one(Dt.TRANSITION_END, function() {
                    we(r).removeClass(l + " " + c).addClass(Le), we(i).removeClass(Le + " " + c + " " + l), n._isSliding = !1, setTimeout(function() {
                        return we(n._element).trigger(u)
                    }, 0)
                }).emulateTransitionEnd(600)) : (we(i).removeClass(Le), we(r).addClass(Le), this._isSliding = !1, we(this._element).trigger(u)), a && this.cycle()
            }
        }, r._jQueryInterface = function(i) {
            return this.each(function() {
                var e = we(this).data(ke),
                    t = we.extend({}, xe, we(this).data());
                "object" === (void 0 === i ? "undefined" : At(i)) && we.extend(t, i);
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new r(this, t), we(this).data(ke, e)), "number" == typeof i) e.to(i);
                else if ("string" == typeof n) {
                    if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                    e[n]()
                } else t.interval && (e.pause(), e.cycle())
            })
        }, r._dataApiClickHandler = function(e) {
            var t = Dt.getSelectorFromElement(this);
            if (t) {
                var n = we(t)[0];
                if (n && we(n).hasClass(Ie)) {
                    var i = we.extend({}, we(n).data(), we(this).data()),
                        o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1), r._jQueryInterface.call(we(n), i), o && we(n).data(ke).to(o), e.preventDefault()
                }
            }
        }, Ot(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-beta"
            }
        }, {
            key: "Default",
            get: function() {
                return xe
            }
        }]), r
    }(), we(document).on(Ne.CLICK_DATA_API, Re.DATA_SLIDE, We._dataApiClickHandler), we(window).on(Ne.LOAD_DATA_API, function() {
        we(Re.DATA_RIDE).each(function() {
            var e = we(this);
            We._jQueryInterface.call(e, e.data())
        })
    }), we.fn[Te] = We._jQueryInterface, we.fn[Te].Constructor = We, we.fn[Te].noConflict = function() {
        return we.fn[Te] = _e, We._jQueryInterface
    }, te = jQuery, ne = "collapse", ie = "bs.collapse", oe = te.fn[ne], re = {
        toggle: !0,
        parent: ""
    }, se = {
        toggle: "boolean",
        parent: "string"
    }, ae = "show.bs.collapse", le = "shown.bs.collapse", ce = "hide.bs.collapse", de = "hidden.bs.collapse", ue = "click.bs.collapse.data-api", pe = "show", fe = "collapse", he = "collapsing", ge = "collapsed", me = "width", ve = "height", ye = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
    }, be = function() {
        function a(e, t) {
            T(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = te.makeArray(te('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = te(ye.DATA_TOGGLE), i = 0; i < n.length; i++) {
                var o = n[i],
                    r = Dt.getSelectorFromElement(o);
                null !== r && 0 < te(r).filter(e).length && this._triggerArray.push(o)
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        return a.prototype.toggle = function() {
            te(this._element).hasClass(pe) ? this.hide() : this.show()
        }, a.prototype.show = function() {
            var e = this;
            if (!this._isTransitioning && !te(this._element).hasClass(pe)) {
                var t = void 0,
                    n = void 0;
                if (this._parent && ((t = te.makeArray(te(this._parent).children().children(ye.ACTIVES))).length || (t = null)), !(t && (n = te(t).data(ie)) && n._isTransitioning)) {
                    var i = te.Event(ae);
                    if (te(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(te(t), "hide"), n || te(t).data(ie, null));
                        var o = this._getDimension();
                        te(this._element).removeClass(fe).addClass(he), this._element.style[o] = 0, this._triggerArray.length && te(this._triggerArray).removeClass(ge).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = function() {
                            te(e._element).removeClass(he).addClass(fe).addClass(pe), e._element.style[o] = "", e.setTransitioning(!1), te(e._element).trigger(le)
                        };
                        if (Dt.supportsTransitionEnd()) {
                            var s = "scroll" + (o[0].toUpperCase() + o.slice(1));
                            te(this._element).one(Dt.TRANSITION_END, r).emulateTransitionEnd(600), this._element.style[o] = this._element[s] + "px"
                        } else r()
                    }
                }
            }
        }, a.prototype.hide = function() {
            var e = this;
            if (!this._isTransitioning && te(this._element).hasClass(pe)) {
                var t = te.Event(ce);
                if (te(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Dt.reflow(this._element), te(this._element).addClass(he).removeClass(fe).removeClass(pe), this._triggerArray.length)
                        for (var i = 0; i < this._triggerArray.length; i++) {
                            var o = this._triggerArray[i],
                                r = Dt.getSelectorFromElement(o);
                            null !== r && (te(r).hasClass(pe) || te(o).addClass(ge).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    var s = function() {
                        e.setTransitioning(!1), te(e._element).removeClass(he).addClass(fe).trigger(de)
                    };
                    this._element.style[n] = "", Dt.supportsTransitionEnd() ? te(this._element).one(Dt.TRANSITION_END, s).emulateTransitionEnd(600) : s()
                }
            }
        }, a.prototype.setTransitioning = function(e) {
            this._isTransitioning = e
        }, a.prototype.dispose = function() {
            te.removeData(this._element, ie), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, a.prototype._getConfig = function(e) {
            return (e = te.extend({}, re, e)).toggle = Boolean(e.toggle), Dt.typeCheckConfig(ne, e, se), e
        }, a.prototype._getDimension = function() {
            return te(this._element).hasClass(me) ? me : ve
        }, a.prototype._getParent = function() {
            var n = this,
                e = te(this._config.parent)[0],
                t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return te(e).find(t).each(function(e, t) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
            }), e
        }, a.prototype._addAriaAndCollapsedClass = function(e, t) {
            if (e) {
                var n = te(e).hasClass(pe);
                t.length && te(t).toggleClass(ge, !n).attr("aria-expanded", n)
            }
        }, a._getTargetFromElement = function(e) {
            var t = Dt.getSelectorFromElement(e);
            return t ? te(t)[0] : null
        }, a._jQueryInterface = function(i) {
            return this.each(function() {
                var e = te(this),
                    t = e.data(ie),
                    n = te.extend({}, re, e.data(), "object" === (void 0 === i ? "undefined" : At(i)) && i);
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ie, t)), "string" == typeof i) {
                    if (void 0 === t[i]) throw new Error('No method named "' + i + '"');
                    t[i]()
                }
            })
        }, Ot(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-beta"
            }
        }, {
            key: "Default",
            get: function() {
                return re
            }
        }]), a
    }(), te(document).on(ue, ye.DATA_TOGGLE, function(e) {
        /input|textarea/i.test(e.target.tagName) || e.preventDefault();
        var n = te(this),
            t = Dt.getSelectorFromElement(this);
        te(t).each(function() {
            var e = te(this),
                t = e.data(ie) ? "toggle" : n.data();
            be._jQueryInterface.call(e, t)
        })
    }), te.fn[ne] = be._jQueryInterface, te.fn[ne].Constructor = be, te.fn[ne].noConflict = function() {
        return te.fn[ne] = oe, be._jQueryInterface
    }, function(c) {
        if ("undefined" == typeof Popper) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
        var n = "dropdown",
            d = "bs.dropdown",
            e = "." + d,
            t = c.fn[n],
            s = new RegExp("38|40|27"),
            u = {
                HIDE: "hide" + e,
                HIDDEN: "hidden" + e,
                SHOW: "show" + e,
                SHOWN: "shown" + e,
                CLICK: "click" + e,
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            },
            a = "disabled",
            p = "show",
            r = "dropup",
            f = "dropdown-menu-right",
            h = "dropdown-menu-left",
            g = '[data-toggle="dropdown"]',
            i = ".dropdown form",
            o = ".dropdown-menu",
            m = ".navbar-nav",
            v = ".dropdown-menu .dropdown-item:not(.disabled)",
            y = {
                TOP: "top-start",
                TOPEND: "top-end",
                BOTTOM: "bottom-start",
                BOTTOMEND: "bottom-end"
            },
            b = {
                placement: y.BOTTOM,
                offset: 0,
                flip: !0
            },
            w = {
                placement: "string",
                offset: "(number|string)",
                flip: "boolean"
            },
            l = function() {
                function l(e, t) {
                    T(this, l), this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                return l.prototype.toggle = function() {
                    if (!this._element.disabled && !c(this._element).hasClass(a)) {
                        var e = l._getParentFromElement(this._element),
                            t = c(this._menu).hasClass(p);
                        if (l._clearMenus(), !t) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = c.Event(u.SHOW, n);
                            if (c(e).trigger(i), !i.isDefaultPrevented()) {
                                var o = this._element;
                                c(e).hasClass(r) && (c(this._menu).hasClass(h) || c(this._menu).hasClass(f)) && (o = e), this._popper = new Popper(o, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !c(e).closest(m).length && c("body").children().on("mouseover", null, c.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), c(this._menu).toggleClass(p), c(e).toggleClass(p).trigger(c.Event(u.SHOWN, n))
                            }
                        }
                    }
                }, l.prototype.dispose = function() {
                    c.removeData(this._element, d), c(this._element).off(e), this._element = null, (this._menu = null) !== this._popper && this._popper.destroy(), this._popper = null
                }, l.prototype.update = function() {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, l.prototype._addEventListeners = function() {
                    var t = this;
                    c(this._element).on(u.CLICK, function(e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    })
                }, l.prototype._getConfig = function(e) {
                    var t = c(this._element).data();
                    return void 0 !== t.placement && (t.placement = y[t.placement.toUpperCase()]), e = c.extend({}, this.constructor.Default, c(this._element).data(), e), Dt.typeCheckConfig(n, e, this.constructor.DefaultType), e
                }, l.prototype._getMenuElement = function() {
                    if (!this._menu) {
                        var e = l._getParentFromElement(this._element);
                        this._menu = c(e).find(o)[0]
                    }
                    return this._menu
                }, l.prototype._getPlacement = function() {
                    var e = c(this._element).parent(),
                        t = this._config.placement;
                    return e.hasClass(r) || this._config.placement === y.TOP ? (t = y.TOP, c(this._menu).hasClass(f) && (t = y.TOPEND)) : c(this._menu).hasClass(f) && (t = y.BOTTOMEND), t
                }, l.prototype._detectNavbar = function() {
                    return 0 < c(this._element).closest(".navbar").length
                }, l.prototype._getPopperConfig = function() {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: {
                                offset: this._config.offset
                            },
                            flip: {
                                enabled: this._config.flip
                            }
                        }
                    };
                    return this._inNavbar && (e.modifiers.applyStyle = {
                        enabled: !this._inNavbar
                    }), e
                }, l._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = c(this).data(d),
                            t = "object" === (void 0 === n ? "undefined" : At(n)) ? n : null;
                        if (e || (e = new l(this, t), c(this).data(d, e)), "string" == typeof n) {
                            if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, l._clearMenus = function(e) {
                    if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                        for (var t = c.makeArray(c(g)), n = 0; n < t.length; n++) {
                            var i = l._getParentFromElement(t[n]),
                                o = c(t[n]).data(d),
                                r = {
                                    relatedTarget: t[n]
                                };
                            if (o) {
                                var s = o._menu;
                                if (c(i).hasClass(p) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && c.contains(i, e.target))) {
                                    var a = c.Event(u.HIDE, r);
                                    c(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && c("body").children().off("mouseover", null, c.noop), t[n].setAttribute("aria-expanded", "false"), c(s).removeClass(p), c(i).removeClass(p).trigger(c.Event(u.HIDDEN, r)))
                                }
                            }
                        }
                }, l._getParentFromElement = function(e) {
                    var t = void 0,
                        n = Dt.getSelectorFromElement(e);
                    return n && (t = c(n)[0]), t || e.parentNode
                }, l._dataApiKeydownHandler = function(e) {
                    if (!(!s.test(e.which) || /button/i.test(e.target.tagName) && 32 === e.which || /input|textarea/i.test(e.target.tagName) || (e.preventDefault(), e.stopPropagation(), this.disabled || c(this).hasClass(a)))) {
                        var t = l._getParentFromElement(this),
                            n = c(t).hasClass(p);
                        if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                            var i = c(t).find(v).get();
                            if (i.length) {
                                var o = i.indexOf(e.target);
                                38 === e.which && 0 < o && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                            }
                        } else {
                            if (27 === e.which) {
                                var r = c(t).find(g)[0];
                                c(r).trigger("focus")
                            }
                            c(this).trigger("click")
                        }
                    }
                }, Ot(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-beta"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return b
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return w
                    }
                }]), l
            }();
        c(document).on(u.KEYDOWN_DATA_API, g, l._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, o, l._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, l._clearMenus).on(u.CLICK_DATA_API, g, function(e) {
            e.preventDefault(), e.stopPropagation(), l._jQueryInterface.call(c(this), "toggle")
        }).on(u.CLICK_DATA_API, i, function(e) {
            e.stopPropagation()
        }), c.fn[n] = l._jQueryInterface, c.fn[n].Constructor = l, c.fn[n].noConflict = function() {
            return c.fn[n] = t, l._jQueryInterface
        }
    }(jQuery), I = jQuery, L = "modal", $ = I.fn[L], j = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, P = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, H = "hide.bs.modal", M = "hidden.bs.modal", R = "show.bs.modal", W = "shown.bs.modal", q = "focusin.bs.modal", B = "resize.bs.modal", z = "click.dismiss.bs.modal", F = "keydown.dismiss.bs.modal", Y = "mouseup.dismiss.bs.modal", U = "mousedown.dismiss.bs.modal", V = "click.bs.modal.data-api", Q = "modal-scrollbar-measure", X = "modal-backdrop", K = "modal-open", G = "fade", J = "show", Z = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
    }, ee = function() {
        function o(e, t) {
            T(this, o), this._config = this._getConfig(t), this._element = e, this._dialog = I(e).find(Z.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
        }
        return o.prototype.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }, o.prototype.show = function(e) {
            var t = this;
            if (!this._isTransitioning) {
                Dt.supportsTransitionEnd() && I(this._element).hasClass(G) && (this._isTransitioning = !0);
                var n = I.Event(R, {
                    relatedTarget: e
                });
                I(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), I(document.body).addClass(K), this._setEscapeEvent(), this._setResizeEvent(), I(this._element).on(z, Z.DATA_DISMISS, function(e) {
                    return t.hide(e)
                }), I(this._dialog).on(U, function() {
                    I(t._element).one(Y, function(e) {
                        I(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }, o.prototype.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                var n = Dt.supportsTransitionEnd() && I(this._element).hasClass(G);
                n && (this._isTransitioning = !0);
                var i = I.Event(H);
                I(this._element).trigger(i), this._isShown && !i.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), I(document).off(q), I(this._element).removeClass(J), I(this._element).off(z), I(this._dialog).off(U), n ? I(this._element).one(Dt.TRANSITION_END, function(e) {
                    return t._hideModal(e)
                }).emulateTransitionEnd(300) : this._hideModal())
            }
        }, o.prototype.dispose = function() {
            I.removeData(this._element, "bs.modal"), I(window, document, this._element, this._backdrop).off(".bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
        }, o.prototype.handleUpdate = function() {
            this._adjustDialog()
        }, o.prototype._getConfig = function(e) {
            return e = I.extend({}, j, e), Dt.typeCheckConfig(L, e, P), e
        }, o.prototype._showElement = function(e) {
            var t = this,
                n = Dt.supportsTransitionEnd() && I(this._element).hasClass(G);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Dt.reflow(this._element), I(this._element).addClass(J), this._config.focus && this._enforceFocus();
            var i = I.Event(W, {
                    relatedTarget: e
                }),
                o = function() {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, I(t._element).trigger(i)
                };
            n ? I(this._dialog).one(Dt.TRANSITION_END, o).emulateTransitionEnd(300) : o()
        }, o.prototype._enforceFocus = function() {
            var t = this;
            I(document).off(q).on(q, function(e) {
                document === e.target || t._element === e.target || I(t._element).has(e.target).length || t._element.focus()
            })
        }, o.prototype._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? I(this._element).on(F, function(e) {
                27 === e.which && (e.preventDefault(), t.hide())
            }) : this._isShown || I(this._element).off(F)
        }, o.prototype._setResizeEvent = function() {
            var t = this;
            this._isShown ? I(window).on(B, function(e) {
                return t.handleUpdate(e)
            }) : I(window).off(B)
        }, o.prototype._hideModal = function() {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                I(document.body).removeClass(K), e._resetAdjustments(), e._resetScrollbar(), I(e._element).trigger(M)
            })
        }, o.prototype._removeBackdrop = function() {
            this._backdrop && (I(this._backdrop).remove(), this._backdrop = null)
        }, o.prototype._showBackdrop = function(e) {
            var t = this,
                n = I(this._element).hasClass(G) ? G : "";
            if (this._isShown && this._config.backdrop) {
                var i = Dt.supportsTransitionEnd() && n;
                if (this._backdrop = document.createElement("div"), this._backdrop.className = X, n && I(this._backdrop).addClass(n), I(this._backdrop).appendTo(document.body), I(this._element).on(z, function(e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), i && Dt.reflow(this._backdrop), I(this._backdrop).addClass(J), !e) return;
                if (!i) return void e();
                I(this._backdrop).one(Dt.TRANSITION_END, e).emulateTransitionEnd(150)
            } else if (!this._isShown && this._backdrop) {
                I(this._backdrop).removeClass(J);
                var o = function() {
                    t._removeBackdrop(), e && e()
                };
                Dt.supportsTransitionEnd() && I(this._element).hasClass(G) ? I(this._backdrop).one(Dt.TRANSITION_END, o).emulateTransitionEnd(150) : o()
            } else e && e()
        }, o.prototype._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, o.prototype._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, o.prototype._checkScrollbar = function() {
            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, o.prototype._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                I(Z.FIXED_CONTENT).each(function(e, t) {
                    var n = I(t)[0].style.paddingRight,
                        i = I(t).css("padding-right");
                    I(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }), I(Z.NAVBAR_TOGGLER).each(function(e, t) {
                    var n = I(t)[0].style.marginRight,
                        i = I(t).css("margin-right");
                    I(t).data("margin-right", n).css("margin-right", parseFloat(i) + o._scrollbarWidth + "px")
                });
                var e = document.body.style.paddingRight,
                    t = I("body").css("padding-right");
                I("body").data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
            }
        }, o.prototype._resetScrollbar = function() {
            I(Z.FIXED_CONTENT).each(function(e, t) {
                var n = I(t).data("padding-right");
                void 0 !== n && I(t).css("padding-right", n).removeData("padding-right")
            }), I(Z.NAVBAR_TOGGLER).each(function(e, t) {
                var n = I(t).data("margin-right");
                void 0 !== n && I(t).css("margin-right", n).removeData("margin-right")
            });
            var e = I("body").data("padding-right");
            void 0 !== e && I("body").css("padding-right", e).removeData("padding-right")
        }, o.prototype._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = Q, document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t
        }, o._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = I(this).data("bs.modal"),
                    t = I.extend({}, o.Default, I(this).data(), "object" === (void 0 === n ? "undefined" : At(n)) && n);
                if (e || (e = new o(this, t), I(this).data("bs.modal", e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                    e[n](i)
                } else t.show && e.show(i)
            })
        }, Ot(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-beta"
            }
        }, {
            key: "Default",
            get: function() {
                return j
            }
        }]), o
    }(), I(document).on(V, Z.DATA_TOGGLE, function(e) {
        var t = this,
            n = void 0,
            i = Dt.getSelectorFromElement(this);
        i && (n = I(i)[0]);
        var o = I(n).data("bs.modal") ? "toggle" : I.extend({}, I(n).data(), I(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var r = I(n).one(R, function(e) {
            e.isDefaultPrevented() || r.one(M, function() {
                I(t).is(":visible") && t.focus()
            })
        });
        ee._jQueryInterface.call(I(n), o, this)
    }), I.fn[L] = ee._jQueryInterface, I.fn[L].Constructor = ee, I.fn[L].noConflict = function() {
        return I.fn[L] = $, ee._jQueryInterface
    }, k = jQuery, o = "scrollspy", r = k.fn[o], S = {
        offset: 10,
        method: "auto",
        target: ""
    }, _ = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, x = {
        ACTIVATE: "activate.bs.scrollspy",
        SCROLL: "scroll.bs.scrollspy",
        LOAD_DATA_API: "load.bs.scrollspy.data-api"
    }, C = "dropdown-item", E = "active", A = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
    }, O = "offset", D = "position", N = function() {
        function i(e, t) {
            var n = this;
            T(this, i), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + A.NAV_LINKS + "," + this._config.target + " " + A.LIST_ITEMS + "," + this._config.target + " " + A.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, k(this._scrollElement).on(x.SCROLL, function(e) {
                return n._process(e)
            }), this.refresh(), this._process()
        }
        return i.prototype.refresh = function() {
            var t = this,
                e = this._scrollElement !== this._scrollElement.window ? D : O,
                o = "auto" === this._config.method ? e : this._config.method,
                r = o === D ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), k.makeArray(k(this._selector)).map(function(e) {
                var t = void 0,
                    n = Dt.getSelectorFromElement(e);
                if (n && (t = k(n)[0]), t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height) return [k(t)[o]().top + r, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1])
            })
        }, i.prototype.dispose = function() {
            k.removeData(this._element, "bs.scrollspy"), k(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, i.prototype._getConfig = function(e) {
            if ("string" != typeof(e = k.extend({}, S, e)).target) {
                var t = k(e.target).attr("id");
                t || (t = Dt.getUID(o), k(e.target).attr("id", t)), e.target = "#" + t
            }
            return Dt.typeCheckConfig(o, e, _), e
        }, i.prototype._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, i.prototype._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, i.prototype._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, i.prototype._process = function() {
            var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
            }
        }, i.prototype._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e = this._selector.split(",");
            e = e.map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            });
            var n = k(e.join(","));
            n.hasClass(C) ? (n.closest(A.DROPDOWN).find(A.DROPDOWN_TOGGLE).addClass(E), n.addClass(E)) : (n.addClass(E), n.parents(A.NAV_LIST_GROUP).prev(A.NAV_LINKS + ", " + A.LIST_ITEMS).addClass(E)), k(this._scrollElement).trigger(x.ACTIVATE, {
                relatedTarget: t
            })
        }, i.prototype._clear = function() {
            k(this._selector).filter(A.ACTIVE).removeClass(E)
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = k(this).data("bs.scrollspy"),
                    t = "object" === (void 0 === n ? "undefined" : At(n)) && n;
                if (e || (e = new i(this, t), k(this).data("bs.scrollspy", e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, Ot(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-beta"
            }
        }, {
            key: "Default",
            get: function() {
                return S
            }
        }]), i
    }(), k(window).on(x.LOAD_DATA_API, function() {
        for (var e = k.makeArray(k(A.DATA_SPY)), t = e.length; t--;) {
            var n = k(e[t]);
            N._jQueryInterface.call(n, n.data())
        }
    }), k.fn[o] = N._jQueryInterface, k.fn[o].Constructor = N, k.fn[o].noConflict = function() {
        return k.fn[o] = r, N._jQueryInterface
    }, l = jQuery, e = l.fn.tab, c = "hide.bs.tab", d = "hidden.bs.tab", u = "show.bs.tab", p = "shown.bs.tab", t = "click.bs.tab.data-api", s = "dropdown-menu", f = "active", h = "disabled", a = "fade", g = "show", m = ".dropdown", v = ".nav, .list-group", y = ".active", n = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', b = ".dropdown-toggle", w = "> .dropdown-menu .active", i = function() {
        function i(e) {
            T(this, i), this._element = e
        }
        return i.prototype.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && l(this._element).hasClass(f) || l(this._element).hasClass(h))) {
                var e = void 0,
                    i = void 0,
                    t = l(this._element).closest(v)[0],
                    o = Dt.getSelectorFromElement(this._element);
                t && (i = (i = l.makeArray(l(t).find(y)))[i.length - 1]);
                var r = l.Event(c, {
                        relatedTarget: this._element
                    }),
                    s = l.Event(u, {
                        relatedTarget: i
                    });
                if (i && l(i).trigger(r), l(this._element).trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    o && (e = l(o)[0]), this._activate(this._element, t);
                    var a = function() {
                        var e = l.Event(d, {
                                relatedTarget: n._element
                            }),
                            t = l.Event(p, {
                                relatedTarget: i
                            });
                        l(i).trigger(e), l(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, a) : a()
                }
            }
        }, i.prototype.dispose = function() {
            l.removeData(this._element, "bs.tab"), this._element = null
        }, i.prototype._activate = function(e, t, n) {
            var i = this,
                o = l(t).find(y)[0],
                r = n && Dt.supportsTransitionEnd() && o && l(o).hasClass(a),
                s = function() {
                    return i._transitionComplete(e, o, r, n)
                };
            o && r ? l(o).one(Dt.TRANSITION_END, s).emulateTransitionEnd(150) : s(), o && l(o).removeClass(g)
        }, i.prototype._transitionComplete = function(e, t, n, i) {
            if (t) {
                l(t).removeClass(f);
                var o = l(t.parentNode).find(w)[0];
                o && l(o).removeClass(f), t.setAttribute("aria-expanded", !1)
            }
            if (l(e).addClass(f), e.setAttribute("aria-expanded", !0), n ? (Dt.reflow(e), l(e).addClass(g)) : l(e).removeClass(a), e.parentNode && l(e.parentNode).hasClass(s)) {
                var r = l(e).closest(m)[0];
                r && l(r).find(b).addClass(f), e.setAttribute("aria-expanded", !0)
            }
            i && i()
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = l(this),
                    t = e.data("bs.tab");
                if (t || (t = new i(this), e.data("bs.tab", t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new Error('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, Ot(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-beta"
            }
        }]), i
    }(), l(document).on(t, n, function(e) {
        e.preventDefault(), i._jQueryInterface.call(l(this), "show")
    }), l.fn.tab = i._jQueryInterface, l.fn.tab.Constructor = i, l.fn.tab.noConflict = function() {
        return l.fn.tab = e, i._jQueryInterface
    }, function(d) {
        if ("undefined" == typeof Popper) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        var t = "tooltip",
            e = ".bs.tooltip",
            n = d.fn[t],
            i = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            o = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)"
            },
            r = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            s = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip"
            },
            a = "show",
            u = "out",
            l = {
                HIDE: "hide" + e,
                HIDDEN: "hidden" + e,
                SHOW: "show" + e,
                SHOWN: "shown" + e,
                INSERTED: "inserted" + e,
                CLICK: "click" + e,
                FOCUSIN: "focusin" + e,
                FOCUSOUT: "focusout" + e,
                MOUSEENTER: "mouseenter" + e,
                MOUSELEAVE: "mouseleave" + e
            },
            p = "fade",
            f = "show",
            h = ".tooltip-inner",
            g = ".arrow",
            m = "hover",
            v = "focus",
            y = "click",
            b = "manual",
            c = function() {
                function c(e, t) {
                    T(this, c), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                return c.prototype.enable = function() {
                    this._isEnabled = !0
                }, c.prototype.disable = function() {
                    this._isEnabled = !1
                }, c.prototype.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }, c.prototype.toggle = function(e) {
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = d(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), d(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (d(this.getTipElement()).hasClass(f)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, c.prototype.dispose = function() {
                    clearTimeout(this._timeout), d.removeData(this.element, this.constructor.DATA_KEY), d(this.element).off(this.constructor.EVENT_KEY), d(this.element).closest(".modal").off("hide.bs.modal"), this.tip && d(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, c.prototype.show = function() {
                    var t = this;
                    if ("none" === d(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var e = d.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        d(this.element).trigger(e);
                        var n = d.contains(this.element.ownerDocument.documentElement, this.element);
                        if (e.isDefaultPrevented() || !n) return;
                        var i = this.getTipElement(),
                            o = Dt.getUID(this.constructor.NAME);
                        i.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && d(i).addClass(p);
                        var r = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                            s = this._getAttachment(r);
                        this.addAttachmentClass(s);
                        var a = !1 === this.config.container ? document.body : d(this.config.container);
                        d(i).data(this.constructor.DATA_KEY, this), d.contains(this.element.ownerDocument.documentElement, this.tip) || d(i).appendTo(a), d(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Popper(this.element, i, {
                            placement: s,
                            modifiers: {
                                offset: {
                                    offset: this.config.offset
                                },
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: g
                                }
                            },
                            onCreate: function(e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function(e) {
                                t._handlePopperPlacementChange(e)
                            }
                        }), d(i).addClass(f), "ontouchstart" in document.documentElement && d("body").children().on("mouseover", null, d.noop);
                        var l = function() {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            t._hoverState = null, d(t.element).trigger(t.constructor.Event.SHOWN), e === u && t._leave(null, t)
                        };
                        Dt.supportsTransitionEnd() && d(this.tip).hasClass(p) ? d(this.tip).one(Dt.TRANSITION_END, l).emulateTransitionEnd(c._TRANSITION_DURATION) : l()
                    }
                }, c.prototype.hide = function(e) {
                    var t = this,
                        n = this.getTipElement(),
                        i = d.Event(this.constructor.Event.HIDE),
                        o = function() {
                            t._hoverState !== a && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), d(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                        };
                    d(this.element).trigger(i), i.isDefaultPrevented() || (d(n).removeClass(f), "ontouchstart" in document.documentElement && d("body").children().off("mouseover", null, d.noop), this._activeTrigger[y] = !1, this._activeTrigger[v] = !1, this._activeTrigger[m] = !1, Dt.supportsTransitionEnd() && d(this.tip).hasClass(p) ? d(n).one(Dt.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                }, c.prototype.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, c.prototype.isWithContent = function() {
                    return Boolean(this.getTitle())
                }, c.prototype.addAttachmentClass = function(e) {
                    d(this.getTipElement()).addClass("bs-tooltip-" + e)
                }, c.prototype.getTipElement = function() {
                    return this.tip = this.tip || d(this.config.template)[0]
                }, c.prototype.setContent = function() {
                    var e = d(this.getTipElement());
                    this.setElementContent(e.find(h), this.getTitle()), e.removeClass(p + " " + f)
                }, c.prototype.setElementContent = function(e, t) {
                    var n = this.config.html;
                    "object" === (void 0 === t ? "undefined" : At(t)) && (t.nodeType || t.jquery) ? n ? d(t).parent().is(e) || e.empty().append(t) : e.text(d(t).text()): e[n ? "html" : "text"](t)
                }, c.prototype.getTitle = function() {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, c.prototype._getAttachment = function(e) {
                    return r[e.toUpperCase()]
                }, c.prototype._setListeners = function() {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function(e) {
                        if ("click" === e) d(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                            return i.toggle(e)
                        });
                        else if (e !== b) {
                            var t = e === m ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                n = e === m ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                            d(i.element).on(t, i.config.selector, function(e) {
                                return i._enter(e)
                            }).on(n, i.config.selector, function(e) {
                                return i._leave(e)
                            })
                        }
                        d(i.element).closest(".modal").on("hide.bs.modal", function() {
                            return i.hide()
                        })
                    }), this.config.selector ? this.config = d.extend({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, c.prototype._fixTitle = function() {
                    var e = At(this.element.getAttribute("data-original-title"));
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, c.prototype._enter = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || d(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), d(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? v : m] = !0), d(t.getTipElement()).hasClass(f) || t._hoverState === a ? t._hoverState = a : (clearTimeout(t._timeout), t._hoverState = a, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                        t._hoverState === a && t.show()
                    }, t.config.delay.show) : t.show())
                }, c.prototype._leave = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || d(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), d(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? v : m] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = u, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                        t._hoverState === u && t.hide()
                    }, t.config.delay.hide) : t.hide())
                }, c.prototype._isWithActiveTrigger = function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, c.prototype._getConfig = function(e) {
                    return (e = d.extend({}, this.constructor.Default, d(this.element).data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), e.title && "number" == typeof e.title && (e.title = e.title.toString()), e.content && "number" == typeof e.content && (e.content = e.content.toString()), Dt.typeCheckConfig(t, e, this.constructor.DefaultType), e
                }, c.prototype._getDelegateConfig = function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, c.prototype._cleanTipClass = function() {
                    var e = d(this.getTipElement()),
                        t = e.attr("class").match(i);
                    null !== t && 0 < t.length && e.removeClass(t.join(""))
                }, c.prototype._handlePopperPlacementChange = function(e) {
                    this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, c.prototype._fixTransition = function() {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") && (d(e).removeClass(p), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                }, c._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = d(this).data("bs.tooltip"),
                            t = "object" === (void 0 === n ? "undefined" : At(n)) && n;
                        if ((e || !/dispose|hide/.test(n)) && (e || (e = new c(this, t), d(this).data("bs.tooltip", e)), "string" == typeof n)) {
                            if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, Ot(c, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-beta"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return s
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return t
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return l
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return e
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return o
                    }
                }]), c
            }();
        return d.fn[t] = c._jQueryInterface, d.fn[t].Constructor = c, d.fn[t].noConflict = function() {
            return d.fn[t] = n, c._jQueryInterface
        }, c
    }(jQuery));
gt = jQuery, mt = "popover", vt = ".bs.popover", yt = gt.fn[mt], bt = new RegExp("(^|\\s)bs-popover\\S+", "g"), wt = gt.extend({}, Nt.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
}), Tt = gt.extend({}, Nt.DefaultType, {
    content: "(string|element|function)"
}), kt = "fade", _t = ".popover-header", xt = ".popover-body", Ct = {
    HIDE: "hide" + vt,
    HIDDEN: "hidden" + vt,
    SHOW: (St = "show") + vt,
    SHOWN: "shown" + vt,
    INSERTED: "inserted" + vt,
    CLICK: "click" + vt,
    FOCUSIN: "focusin" + vt,
    FOCUSOUT: "focusout" + vt,
    MOUSEENTER: "mouseenter" + vt,
    MOUSELEAVE: "mouseleave" + vt
}, Et = function(e) {
    function i() {
        return T(this, i),
            function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, e.apply(this, arguments))
    }
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(i, e), i.prototype.isWithContent = function() {
        return this.getTitle() || this._getContent()
    }, i.prototype.addAttachmentClass = function(e) {
        gt(this.getTipElement()).addClass("bs-popover-" + e)
    }, i.prototype.getTipElement = function() {
        return this.tip = this.tip || gt(this.config.template)[0]
    }, i.prototype.setContent = function() {
        var e = gt(this.getTipElement());
        this.setElementContent(e.find(_t), this.getTitle()), this.setElementContent(e.find(xt), this._getContent()), e.removeClass(kt + " " + St)
    }, i.prototype._getContent = function() {
        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
    }, i.prototype._cleanTipClass = function() {
        var e = gt(this.getTipElement()),
            t = e.attr("class").match(bt);
        null !== t && 0 < t.length && e.removeClass(t.join(""))
    }, i._jQueryInterface = function(n) {
        return this.each(function() {
            var e = gt(this).data("bs.popover"),
                t = "object" === (void 0 === n ? "undefined" : At(n)) ? n : null;
            if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), gt(this).data("bs.popover", e)), "string" == typeof n)) {
                if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                e[n]()
            }
        })
    }, Ot(i, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-beta"
        }
    }, {
        key: "Default",
        get: function() {
            return wt
        }
    }, {
        key: "NAME",
        get: function() {
            return mt
        }
    }, {
        key: "DATA_KEY",
        get: function() {
            return "bs.popover"
        }
    }, {
        key: "Event",
        get: function() {
            return Ct
        }
    }, {
        key: "EVENT_KEY",
        get: function() {
            return vt
        }
    }, {
        key: "DefaultType",
        get: function() {
            return Tt
        }
    }]), i
}(Nt), gt.fn[mt] = Et._jQueryInterface, gt.fn[mt].Constructor = Et, gt.fn[mt].noConflict = function() {
    return gt.fn[mt] = yt, Et._jQueryInterface
}
}(),
function() {
"use strict";

function t(e) {
    return void 0 === this || Object.getPrototypeOf(this) !== t.prototype ? new t(e) : ((C = this).version = "3.3.2", C.tools = new i, C.isSupported() ? (C.tools.extend(C.defaults, e || {}), C.defaults.container = T(C.defaults), C.store = {
        elements: {},
        containers: []
    }, C.sequences = {}, C.history = [], C.uid = 0, C.initialized = !1) : "undefined" != typeof console && console, C)
}

function T(e) {
    if (e && e.container) {
        if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
        if (C.tools.isNode(e.container)) return e.container
    }
    return C.defaults.container
}

function k() {
    return ++C.uid
}

function S(e, t) {
    var n = e.config;
    return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
}

function _(e) {
    var t, n = e.config,
        i = e.styles.transform;
    t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
}

function x() {
    if (C.isSupported()) {
        n();
        for (var e = 0; e < C.store.containers.length; e++) C.store.containers[e].addEventListener("scroll", d), C.store.containers[e].addEventListener("resize", d);
        C.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), C.initialized = !0)
    }
    return C
}

function d() {
    e(n)
}

function n() {
    var l, c, n, i, o;
    C.tools.forOwn(C.sequences, function(e) {
        o = C.sequences[e], n = !1;
        for (var t = 0; t < o.elemIds.length; t++) i = o.elemIds[t], p(C.store.elements[i]) && !n && (n = !0);
        o.active = n
    }), C.tools.forOwn(C.store.elements, function(e) {
        var t, n, i, o, r, s, a;
        c = C.store.elements[e], a = (s = c).config.useDelay, l = "always" === a || "onload" === a && !C.initialized || "once" === a && !s.seen,
            function(e) {
                if (e.sequence) {
                    var t = C.sequences[e.sequence.id];
                    return t.active && !t.blocked && !e.revealing && !e.disabled
                }
                return p(e) && !e.revealing && !e.disabled
            }(c) ? (c.config.beforeReveal(c.domEl), l ? c.domEl.setAttribute("style", c.styles.inline + c.styles.transform.target + c.styles.transition.delayed) : c.domEl.setAttribute("style", c.styles.inline + c.styles.transform.target + c.styles.transition.instant), u("reveal", c, l), c.revealing = !0, c.seen = !0, c.sequence && (t = c, n = l, o = i = 0, (r = C.sequences[t.sequence.id]).blocked = !0, n && "onload" === t.config.useDelay && (o = t.config.delay), t.sequence.timer && (i = Math.abs(t.sequence.timer.started - new Date), window.clearTimeout(t.sequence.timer)), t.sequence.timer = {
                started: new Date
            }, t.sequence.timer.clock = window.setTimeout(function() {
                r.blocked = !1, t.sequence.timer = null, d()
            }, Math.abs(r.interval) + o - i))) : function(e) {
                if (e.sequence) {
                    var t = C.sequences[e.sequence.id];
                    return !t.active && e.config.reset && e.revealing && !e.disabled
                }
                return !p(e) && e.config.reset && e.revealing && !e.disabled
            }(c) && (c.config.beforeReset(c.domEl), c.domEl.setAttribute("style", c.styles.inline + c.styles.transform.initial + c.styles.transition.instant), u("reset", c), c.revealing = !1)
    })
}

function u(e, t, n) {
    var i = 0,
        o = 0,
        r = "after";
    switch (e) {
        case "reveal":
            o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
            break;
        case "reset":
            o = t.config.duration, r += "Reset"
    }
    t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
        started: new Date
    }, t.timer.clock = window.setTimeout(function() {
        t.config[r](t.domEl), t.timer = null
    }, o - i)
}

function y(e) {
    for (var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth; isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent;);
    return {
        top: t,
        left: n,
        height: i,
        width: o
    }
}

function p(e) {
    var t, n, i, o, r, s, a, l, c, d = y(e.domEl),
        u = {
            width: (t = e.config.container).clientWidth,
            height: t.clientHeight
        },
        p = function(e) {
            if (e && e !== window.document.documentElement) {
                var t = y(e);
                return {
                    x: e.scrollLeft + t.left,
                    y: e.scrollTop + t.top
                }
            }
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            }
        }(e.config.container),
        f = e.config.viewFactor,
        h = d.height,
        g = d.width,
        m = d.top,
        v = d.left;
    return n = m + h * f, i = v + g * f, o = m + h - h * f, r = v + g - g * f, s = p.y + e.config.viewOffset.top, a = p.x + e.config.viewOffset.left, l = p.y - e.config.viewOffset.bottom + u.height, c = p.x - e.config.viewOffset.right + u.width, n < l && s < o && a < i && r < c || "fixed" === window.getComputedStyle(e.domEl).position
}

function i() {}
var C, e;
t.prototype.defaults = {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 0,
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    opacity: 0,
    scale: .9,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
    container: window.document.documentElement,
    mobile: !0,
    reset: !1,
    useDelay: "always",
    viewFactor: .2,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    beforeReveal: function(e) {},
    beforeReset: function(e) {},
    afterReveal: function(e) {},
    afterReset: function(e) {}
}, t.prototype.isSupported = function() {
    var e = document.documentElement.style;
    return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
}, t.prototype.reveal = function(e, t, n, i) {
    var o, r, s, a, l, c, d, u, p, f, h, g, m, v, y, b;
    if (void 0 !== t && "number" == typeof t ? (n = t, t = {}) : null != t || (t = {}), o = T(t), u = o, !(r = "string" == typeof(d = e) ? Array.prototype.slice.call(u.querySelectorAll(d)) : C.tools.isNode(d) ? [d] : C.tools.isNodeList(d) ? Array.prototype.slice.call(d) : []).length) return C;
    n && "number" == typeof n && (c = k(), l = C.sequences[c] = {
        id: c,
        interval: n,
        elemIds: [],
        active: !1
    });
    for (var w = 0; w < r.length; w++)(a = r[w].getAttribute("data-sr-id")) ? s = C.store.elements[a] : (s = {
        id: k(),
        domEl: r[w],
        seen: !1,
        revealing: !1
    }).domEl.setAttribute("data-sr-id", s.id), l && (s.sequence = {
        id: l.id,
        index: l.elemIds.length
    }, l.elemIds.push(s.id)), m = s, y = o, (v = t).container && (v.container = y), m.config ? m.config = C.tools.extendClone(m.config, v) : m.config = C.tools.extendClone(C.defaults, v), "top" === m.config.origin || "bottom" === m.config.origin ? m.config.axis = "Y" : m.config.axis = "X", h = s, void 0, g = window.getComputedStyle(h.domEl), h.styles || (h.styles = {
        transition: {},
        transform: {},
        computed: {}
    }, h.styles.inline = h.domEl.getAttribute("style") || "", h.styles.inline += "; visibility: visible; ", h.styles.computed.opacity = g.opacity, g.transition && "all 0s ease 0s" !== g.transition ? h.styles.computed.transition = g.transition + ", " : h.styles.computed.transition = ""), h.styles.transition.instant = S(h, 0), h.styles.transition.delayed = S(h, h.config.delay), h.styles.transform.initial = " -webkit-transform:", h.styles.transform.target = " -webkit-transform:", _(h), h.styles.transform.initial += "transform:", h.styles.transform.target += "transform:", _(h), void 0, (f = (p = s).config.container) && -1 === C.store.containers.indexOf(f) && C.store.containers.push(p.config.container), C.store.elements[p.id] = p, C.tools.isMobile() && !s.config.mobile || !C.isSupported() ? (s.domEl.setAttribute("style", s.styles.inline), s.disabled = !0) : s.revealing || s.domEl.setAttribute("style", s.styles.inline + s.styles.transform.initial);
    return !i && C.isSupported() && (b = {
        target: e,
        config: t,
        interval: n
    }, C.history.push(b), C.initTimeout && window.clearTimeout(C.initTimeout), C.initTimeout = window.setTimeout(x, 0)), C
}, t.prototype.sync = function() {
    if (C.history.length && C.isSupported()) {
        for (var e = 0; e < C.history.length; e++) {
            var t = C.history[e];
            C.reveal(t.target, t.config, t.interval, !0)
        }
        x()
    }
    return C
}, i.prototype.isObject = function(e) {
    return null !== e && "object" == typeof e && e.constructor === Object
}, i.prototype.isNode = function(e) {
    return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
}, i.prototype.isNodeList = function(e) {
    var t = Object.prototype.toString.call(e);
    return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
}, i.prototype.forOwn = function(e, t) {
    if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
    for (var n in e) e.hasOwnProperty(n) && t(n)
}, i.prototype.extend = function(t, n) {
    return this.forOwn(n, function(e) {
        this.isObject(n[e]) ? (t[e] && this.isObject(t[e]) || (t[e] = {}), this.extend(t[e], n[e])) : t[e] = n[e]
    }.bind(this)), t
}, i.prototype.extendClone = function(e, t) {
    return this.extend(this.extend({}, e), t)
}, i.prototype.isMobile = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}, e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60)
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
    return t
}) : "undefined" != typeof module && module.exports ? module.exports = t : window.ScrollReveal = t
}(),
function(o) {
"use strict";
var r = function(e, t) {
    this.el = o(e), this.options = o.extend({}, o.fn.typed.defaults, t), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
};
r.prototype = {
    constructor: r,
    init: function() {
        var t = this;
        t.timeout = setTimeout(function() {
            for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
            t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
        }, t.startDelay)
    },
    build: function() {
        var n = this;
        if (!0 === this.showCursor && (this.cursor = o('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
            this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
            var e = this.stringsElement.children();
            o.each(e, function(e, t) {
                n.strings.push(o(t).html())
            })
        }
        this.init()
    },
    typewrite: function(r, s) {
        if (!0 !== this.stop) {
            var e = Math.round(70 * Math.random()) + this.typeSpeed,
                a = this;
            a.timeout = setTimeout(function() {
                var e = 0,
                    t = r.substr(s);
                if ("^" === t.charAt(0)) {
                    var n = 1;
                    /^\^\d+/.test(t) && (n += (t = /\d+/.exec(t)[0]).length, e = parseInt(t)), r = r.substring(0, s) + r.substring(s + n)
                }
                if ("html" === a.contentType) {
                    var i = r.substr(s).charAt(0);
                    if ("<" === i || "&" === i) {
                        var o = "";
                        for (o = "<" === i ? ">" : ";"; r.substr(s + 1).charAt(0) !== o && (r.substr(s).charAt(0), !(++s + 1 > r.length)););
                        s++, o
                    }
                }
                a.timeout = setTimeout(function() {
                    if (s === r.length) {
                        if (a.options.onStringTyped(a.arrayPos), a.arrayPos === a.strings.length - 1 && (a.options.callback(), a.curLoop++, !1 === a.loop || a.curLoop === a.loopCount)) return;
                        a.timeout = setTimeout(function() {
                            a.backspace(r, s)
                        }, a.backDelay)
                    } else {
                        0 === s && a.options.preStringTyped(a.arrayPos);
                        var e = r.substr(0, s + 1);
                        a.attr ? a.el.attr(a.attr, e) : a.isInput ? a.el.val(e) : "html" === a.contentType ? a.el.html(e) : a.el.text(e), s++, a.typewrite(r, s)
                    }
                }, e)
            }, e)
        }
    },
    backspace: function(t, n) {
        if (!0 !== this.stop) {
            var e = Math.round(70 * Math.random()) + this.backSpeed,
                i = this;
            i.timeout = setTimeout(function() {
                if ("html" === i.contentType && ">" === t.substr(n).charAt(0)) {
                    for (;
                        "<" !== t.substr(n - 1).charAt(0) && (t.substr(n).charAt(0), !(--n < 0)););
                    n--, "<"
                }
                var e = t.substr(0, n);
                i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), n > i.stopNum ? (n--, i.backspace(t, n)) : n <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], n))
            }, e)
        }
    },
    shuffleArray: function(e) {
        var t, n, i = e.length;
        if (i)
            for (; --i;) t = e[n = Math.floor(Math.random() * (i + 1))], e[n] = e[i], e[i] = t;
        return e
    },
    reset: function() {
        clearInterval(this.timeout);
        this.el.attr("id");
        this.el.empty(), void 0 !== this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
    }
}, o.fn.typed = function(i) {
    return this.each(function() {
        var e = o(this),
            t = e.data("typed"),
            n = "object" == typeof i && i;
        t && t.reset(), e.data("typed", t = new r(this, n)), "string" == typeof i && t[i]()
    })
}, o.fn.typed.defaults = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    shuffle: !1,
    backDelay: 500,
    loop: !1,
    loopCount: !1,
    showCursor: !0,
    cursorChar: "|",
    attr: null,
    contentType: "html",
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
}
}(window.jQuery),
function(e) {
"use strict";
"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
"use strict";
var o, s = window.Slick || {};
(o = 0, s = function(e, t) {
    var n, i = this;
    i.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: c(e),
        appendDots: c(e),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(e, t) {
            return c('<button type="button" />').text(t + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
    }, i.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
    }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(e).data("slick") || {}, i.options = c.extend({}, i.defaults, t, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
}).prototype.activateADA = function() {
    this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
    }).find("a, input, button, select").attr({
        tabindex: "0"
    })
}, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
    var i = this;
    if ("boolean" == typeof t) n = t, t = null;
    else if (t < 0 || t >= i.slideCount) return !1;
    i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(e, t) {
        c(t).attr("data-slick-index", e)
    }), i.$slidesCache = i.$slides, i.reinit()
}, s.prototype.animateHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({
            height: t
        }, e.options.speed)
    }
}, s.prototype.animateSlide = function(e, t) {
    var n = {},
        i = this;
    i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
        left: e
    }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
        top: e
    }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
        animStart: i.currentLeft
    }).animate({
        animStart: e
    }, {
        duration: i.options.speed,
        easing: i.options.easing,
        step: function(e) {
            e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
        },
        complete: function() {
            t && t.call()
        }
    })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function() {
        i.disableTransition(), t.call()
    }, i.options.speed))
}, s.prototype.getNavTarget = function() {
    var e = this.options.asNavFor;
    return e && null !== e && (e = c(e).not(this.$slider)), e
}, s.prototype.asNavFor = function(t) {
    var e = this.getNavTarget();
    null !== e && "object" == typeof e && e.each(function() {
        var e = c(this).slick("getSlick");
        e.unslicked || e.slideHandler(t, !0)
    })
}, s.prototype.applyTransition = function(e) {
    var t = this,
        n = {};
    !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
}, s.prototype.autoPlay = function() {
    var e = this;
    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
}, s.prototype.autoPlayClear = function() {
    this.autoPlayTimer && clearInterval(this.autoPlayTimer)
}, s.prototype.autoPlayIterator = function() {
    var e = this,
        t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
}, s.prototype.buildArrows = function() {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
    }))
}, s.prototype.buildDots = function() {
    var e, t, n = this;
    if (!0 === n.options.dots) {
        for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
        n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
    }
}, s.prototype.buildOut = function() {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
        c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
}, s.prototype.buildRows = function() {
    var e, t, n, i, o, r, s, a = this;
    if (i = document.createDocumentFragment(), r = a.$slider.children(), 1 < a.options.rows) {
        for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
                var c = document.createElement("div");
                for (n = 0; n < a.options.slidesPerRow; n++) {
                    var d = e * s + (t * a.options.slidesPerRow + n);
                    r.get(d) && c.appendChild(r.get(d))
                }
                l.appendChild(c)
            }
            i.appendChild(l)
        }
        a.$slider.empty().append(i), a.$slider.children().children().children().css({
            width: 100 / a.options.slidesPerRow + "%",
            display: "inline-block"
        })
    }
}, s.prototype.checkResponsive = function(e, t) {
    var n, i, o, r = this,
        s = !1,
        a = r.$slider.width(),
        l = window.innerWidth || c(window).width();
    if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
        for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
        null !== i ? null !== r.activeBreakpoint ? (i !== r.activeBreakpoint || t) && (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
    }
}, s.prototype.changeSlide = function(e, t) {
    var n, i, o = this,
        r = c(e.currentTarget);
    switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
        case "previous":
            i = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
            break;
        case "next":
            i = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
            break;
        case "index":
            var s = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(s), !1, t), r.children().trigger("focus");
            break;
        default:
            return
    }
}, s.prototype.checkNavigable = function(e) {
    var t, n;
    if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
    else
        for (var i in t) {
            if (e < t[i]) {
                e = n;
                break
            }
            n = t[i]
        }
    return e
}, s.prototype.cleanUpEvents = function() {
    var e = this;
    e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
}, s.prototype.cleanUpSlideEvents = function() {
    var e = this;
    e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
}, s.prototype.cleanUpRows = function() {
    var e;
    1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
}, s.prototype.clickHandler = function(e) {
    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
}, s.prototype.destroy = function(e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        c(this).attr("style", c(this).data("originalStyling"))
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
}, s.prototype.disableTransition = function(e) {
    var t = {};
    t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
}, s.prototype.fadeSlide = function(e, t) {
    var n = this;
    !1 === n.cssTransitions ? (n.$slides.eq(e).css({
        zIndex: n.options.zIndex
    }), n.$slides.eq(e).animate({
        opacity: 1
    }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
        opacity: 1,
        zIndex: n.options.zIndex
    }), t && setTimeout(function() {
        n.disableTransition(e), t.call()
    }, n.options.speed))
}, s.prototype.fadeSlideOut = function(e) {
    var t = this;
    !1 === t.cssTransitions ? t.$slides.eq(e).animate({
        opacity: 0,
        zIndex: t.options.zIndex - 2
    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
        opacity: 0,
        zIndex: t.options.zIndex - 2
    }))
}, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
    var t = this;
    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
}, s.prototype.focusHandler = function() {
    var n = this;
    n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
        e.stopImmediatePropagation();
        var t = c(this);
        setTimeout(function() {
            n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay())
        }, 0)
    })
}, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
    return this.currentSlide
}, s.prototype.getDotCount = function() {
    var e = this,
        t = 0,
        n = 0,
        i = 0;
    if (!0 === e.options.infinite)
        if (e.slideCount <= e.options.slidesToShow) ++i;
        else
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else if (!0 === e.options.centerMode) i = e.slideCount;
    else if (e.options.asNavFor)
        for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return i - 1
}, s.prototype.getLeft = function(e) {
    var t, n, i, o, r = this,
        s = 0;
    return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
}, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
    return this.options[e]
}, s.prototype.getNavigableIndexes = function() {
    var e, t = this,
        n = 0,
        i = 0,
        o = [];
    for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return o
}, s.prototype.getSlick = function() {
    return this
}, s.prototype.getSlideCount = function() {
    var n, i, o = this;
    return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
        if (t.offsetLeft - i + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return n = t, !1
    }), Math.abs(c(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
}, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
    this.changeSlide({
        data: {
            message: "index",
            index: parseInt(e)
        }
    }, t)
}, s.prototype.init = function(e) {
    var t = this;
    c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
}, s.prototype.initADA = function() {
    var n = this,
        i = Math.ceil(n.slideCount / n.options.slidesToShow),
        o = n.getNavigableIndexes().filter(function(e) {
            return 0 <= e && e < n.slideCount
        });
    n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
    }).find("a, input, button, select").attr({
        tabindex: "-1"
    }), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
        var t = o.indexOf(e);
        c(this).attr({
            role: "tabpanel",
            id: "slick-slide" + n.instanceUid + e,
            tabindex: -1
        }), -1 !== t && c(this).attr({
            "aria-describedby": "slick-slide-control" + n.instanceUid + t
        })
    }), n.$dots.attr("role", "tablist").find("li").each(function(e) {
        var t = o[e];
        c(this).attr({
            role: "presentation"
        }), c(this).find("button").first().attr({
            role: "tab",
            id: "slick-slide-control" + n.instanceUid + e,
            "aria-controls": "slick-slide" + n.instanceUid + t,
            "aria-label": e + 1 + " of " + i,
            "aria-selected": null,
            tabindex: "-1"
        })
    }).eq(n.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
    }).end());
    for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.$slides.eq(e).attr("tabindex", 0);
    n.activateADA()
}, s.prototype.initArrowEvents = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
    }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
    }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
}, s.prototype.initDotEvents = function() {
    var e = this;
    !0 === e.options.dots && (c("li", e.$dots).on("click.slick", {
        message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
}, s.prototype.initSlideEvents = function() {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
}, s.prototype.initializeEvents = function() {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
        action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
}, s.prototype.initUI = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
}, s.prototype.keyHandler = function(e) {
    var t = this;
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
        data: {
            message: !0 === t.options.rtl ? "next" : "previous"
        }
    }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
        data: {
            message: !0 === t.options.rtl ? "previous" : "next"
        }
    }))
}, s.prototype.lazyLoad = function() {
    function e(e) {
        c("img[data-lazy]", e).each(function() {
            var e = c(this),
                t = c(this).attr("data-lazy"),
                n = c(this).attr("data-srcset"),
                i = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                o = document.createElement("img");
            o.onload = function() {
                e.animate({
                    opacity: 0
                }, 100, function() {
                    n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
                        opacity: 1
                    }, 200, function() {
                        e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                    }), r.$slider.trigger("lazyLoaded", [r, e, t])
                })
            }, o.onerror = function() {
                e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
            }, o.src = t
        })
    }
    var t, n, i, r = this;
    if (!0 === r.options.centerMode ? !0 === r.options.infinite ? i = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), i = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (0 < n && n--, i <= r.slideCount && i++)), t = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad)
        for (var o = n - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(s)), o--, s++;
    e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
}, s.prototype.loadSlider = function() {
    var e = this;
    e.setPosition(), e.$slideTrack.css({
        opacity: 1
    }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
}, s.prototype.next = s.prototype.slickNext = function() {
    this.changeSlide({
        data: {
            message: "next"
        }
    })
}, s.prototype.orientationChange = function() {
    this.checkResponsive(), this.setPosition()
}, s.prototype.pause = s.prototype.slickPause = function() {
    this.autoPlayClear(), this.paused = !0
}, s.prototype.play = s.prototype.slickPlay = function() {
    var e = this;
    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
}, s.prototype.postSlide = function(e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
}, s.prototype.prev = s.prototype.slickPrev = function() {
    this.changeSlide({
        data: {
            message: "previous"
        }
    })
}, s.prototype.preventDefault = function(e) {
    e.preventDefault()
}, s.prototype.progressiveLazyLoad = function(e) {
    e = e || 1;
    var t, n, i, o, r, s = this,
        a = c("img[data-lazy]", s.$slider);
    a.length ? (t = a.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
        i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, n]), s.progressiveLazyLoad()
    }, r.onerror = function() {
        e < 3 ? setTimeout(function() {
            s.progressiveLazyLoad(e + 1)
        }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]), s.progressiveLazyLoad())
    }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s])
}, s.prototype.refresh = function(e) {
    var t, n, i = this;
    n = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > n && (i.currentSlide = n), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), t = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {
        currentSlide: t
    }), i.init(), e || i.changeSlide({
        data: {
            message: "index",
            index: t
        }
    }, !1)
}, s.prototype.registerBreakpoints = function() {
    var e, t, n, i = this,
        o = i.options.responsive || null;
    if ("array" === c.type(o) && o.length) {
        for (e in i.respondTo = i.options.respondTo || "window", o)
            if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
                for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
            } i.breakpoints.sort(function(e, t) {
            return i.options.mobileFirst ? e - t : t - e
        })
    }
}, s.prototype.reinit = function() {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
}, s.prototype.resize = function() {
    var e = this;
    c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
        e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
    }, 50))
}, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
    var i = this;
    if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
    i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
}, s.prototype.setCSS = function(e) {
    var t, n, i = this,
        o = {};
    !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
}, s.prototype.setDimensions = function() {
    var e = this;
    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
        padding: "0px " + e.options.centerPadding
    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
        padding: e.options.centerPadding + " 0px"
    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
}, s.prototype.setFade = function() {
    var n, i = this;
    i.$slides.each(function(e, t) {
        n = i.slideWidth * e * -1, !0 === i.options.rtl ? c(t).css({
            position: "relative",
            right: n,
            top: 0,
            zIndex: i.options.zIndex - 2,
            opacity: 0
        }) : c(t).css({
            position: "relative",
            left: n,
            top: 0,
            zIndex: i.options.zIndex - 2,
            opacity: 0
        })
    }), i.$slides.eq(i.currentSlide).css({
        zIndex: i.options.zIndex - 1,
        opacity: 1
    })
}, s.prototype.setHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css("height", t)
    }
}, s.prototype.setOption = s.prototype.slickSetOption = function() {
    var e, t, n, i, o, r = this,
        s = !1;
    if ("object" === c.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0], i = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;
    else if ("multiple" === o) c.each(n, function(e, t) {
        r.options[e] = t
    });
    else if ("responsive" === o)
        for (t in i)
            if ("array" !== c.type(r.options.responsive)) r.options.responsive = [i[t]];
            else {
                for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                r.options.responsive.push(i[t])
            } s && (r.unload(), r.reinit())
}, s.prototype.setPosition = function() {
    var e = this;
    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
}, s.prototype.setProps = function() {
    var e = this,
        t = document.body.style;
    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
}, s.prototype.setSlideClasses = function(e) {
    var t, n, i, o, r = this;
    if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
        var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
        t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
    } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
}, s.prototype.setupInfinite = function() {
    var e, t, n, i = this;
    if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
        for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; e -= 1) t = e - 1, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
        for (e = 0; e < n + i.slideCount; e += 1) t = e, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
        i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
            c(this).attr("id", "")
        })
    }
}, s.prototype.interrupt = function(e) {
    e || this.autoPlay(), this.interrupted = e
}, s.prototype.selectHandler = function(e) {
    var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
        n = parseInt(t.attr("data-slick-index"));
    n || (n = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n)
}, s.prototype.slideHandler = function(e, t, n) {
    var i, o, r, s, a, l = null,
        c = this;
    if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
        if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
            c.postSlide(i)
        }) : c.postSlide(i));
        else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
        c.postSlide(i)
    }) : c.postSlide(i));
    else {
        if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
            c.postSlide(o)
        })) : c.postSlide(o), void c.animateHeight();
        !0 !== n ? c.animateSlide(l, function() {
            c.postSlide(o)
        }) : c.postSlide(o)
    }
}, s.prototype.startLoad = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
}, s.prototype.swipeDirection = function() {
    var e, t, n, i, o = this;
    return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && 315 <= i ? !1 === o.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
}, s.prototype.swipeEnd = function(e) {
    var t, n, i = this;
    if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
    if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
    if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
        switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
        }
        "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
}, s.prototype.swipeHandler = function(e) {
    var t = this;
    if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
        case "start":
            t.swipeStart(e);
            break;
        case "move":
            t.swipeMove(e);
            break;
        case "end":
            t.swipeEnd(e)
    }
}, s.prototype.swipeMove = function(e) {
    var t, n, i, o, r, s, a = this;
    return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
}, s.prototype.swipeStart = function(e) {
    var t, n = this;
    if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
}, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
}, s.prototype.unload = function() {
    var e = this;
    c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
}, s.prototype.unslick = function(e) {
    this.$slider.trigger("unslick", [this, e]), this.destroy()
}, s.prototype.updateArrows = function() {
    var e = this;
    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
}, s.prototype.updateDots = function() {
    var e = this;
    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
}, s.prototype.visibility = function() {
    this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
}, c.fn.slick = function() {
    var e, t, n = this,
        i = arguments[0],
        o = Array.prototype.slice.call(arguments, 1),
        r = n.length;
    for (e = 0; e < r; e++)
        if ("object" == typeof i || void 0 === i ? n[e].slick = new s(n[e], i) : t = n[e].slick[i].apply(n[e].slick, o), void 0 !== t) return t;
    return n
}
}),
function(e, t) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.StickySidebar = t()
}(this, function() {
"use strict";

function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function t(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports
}
"undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
var i = t(function(e, t) {
    ! function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var d, i, t = function() {
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, n) {
                    return t && i(e.prototype, t), n && i(e, n), e
                }
            }(),
            n = (i = {
                topSpacing: 0,
                bottomSpacing: 0,
                containerSelector: !(d = ".stickySidebar"),
                innerWrapperSelector: ".inner-wrapper-sticky",
                stickyClass: "is-affixed",
                resizeSensor: !0,
                minWidth: !1
            }, function() {
                function c(e) {
                    var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    if (function(e, t) {
                            if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function")
                        }(this), this.options = c.extend(i, n), this.sidebar = "string" == typeof e ? document.querySelector(e) : e, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
                    this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
                        transform: !1,
                        transform3d: !1
                    }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
                        translateY: 0,
                        maxTranslateY: 0,
                        topSpacing: 0,
                        lastTopSpacing: 0,
                        bottomSpacing: 0,
                        lastBottomSpacing: 0,
                        sidebarHeight: 0,
                        sidebarWidth: 0,
                        containerTop: 0,
                        containerHeight: 0,
                        viewportHeight: 0,
                        viewportTop: 0,
                        lastViewportTop: 0
                    }, ["handleEvent"].forEach(function(e) {
                        t[e] = t[e].bind(t)
                    }), this.initialize()
                }
                return t(c, [{
                    key: "initialize",
                    value: function() {
                        var n = this;
                        if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
                            var e = document.createElement("div");
                            for (e.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(e); this.sidebar.firstChild != e;) e.appendChild(this.sidebar.firstChild);
                            this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
                        }
                        if (this.options.containerSelector) {
                            var t = document.querySelectorAll(this.options.containerSelector);
                            if ((t = Array.prototype.slice.call(t)).forEach(function(e, t) {
                                    e.contains(n.sidebar) && (n.container = e)
                                }), !t.length) throw new Error("The container does not contains on the sidebar.")
                        }
                        "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        window.addEventListener("resize", this, {
                            passive: !0,
                            capture: !1
                        }), window.addEventListener("scroll", this, {
                            passive: !0,
                            capture: !1
                        }), this.sidebar.addEventListener("update" + d, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
                    }
                }, {
                    key: "handleEvent",
                    value: function(e) {
                        this.updateSticky(e)
                    }
                }, {
                    key: "calcDimensions",
                    value: function() {
                        if (!this._breakpoint) {
                            var e = this.dimensions;
                            e.containerTop = c.offsetRelative(this.container).top, e.containerHeight = this.container.clientHeight, e.containerBottom = e.containerTop + e.containerHeight, e.sidebarHeight = this.sidebarInner.offsetHeight, e.sidebarWidth = this.sidebarInner.offsetWidth, e.viewportHeight = window.innerHeight, e.maxTranslateY = e.containerHeight - e.sidebarHeight, this._calcDimensionsWithScroll()
                        }
                    }
                }, {
                    key: "_calcDimensionsWithScroll",
                    value: function() {
                        var e = this.dimensions;
                        e.sidebarLeft = c.offsetRelative(this.sidebar).left, e.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, e.viewportBottom = e.viewportTop + e.viewportHeight, e.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, e.topSpacing = this.options.topSpacing, e.bottomSpacing = this.options.bottomSpacing, "function" == typeof e.topSpacing && (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0), "function" == typeof e.bottomSpacing && (e.bottomSpacing = parseInt(e.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? e.topSpacing < e.lastTopSpacing && (e.translateY += e.lastTopSpacing - e.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && e.bottomSpacing < e.lastBottomSpacing && (e.translateY += e.lastBottomSpacing - e.bottomSpacing, this._reStyle = !0), e.lastTopSpacing = e.topSpacing, e.lastBottomSpacing = e.bottomSpacing
                    }
                }, {
                    key: "isSidebarFitsViewport",
                    value: function() {
                        var e = this.dimensions,
                            t = "down" === this.scrollDirection ? e.lastBottomSpacing : e.lastTopSpacing;
                        return this.dimensions.sidebarHeight + t < this.dimensions.viewportHeight
                    }
                }, {
                    key: "observeScrollDir",
                    value: function() {
                        var e = this.dimensions;
                        if (e.lastViewportTop !== e.viewportTop) {
                            var t = "down" === this.direction ? Math.min : Math.max;
                            e.viewportTop === t(e.viewportTop, e.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
                        }
                    }
                }, {
                    key: "getAffixType",
                    value: function() {
                        this._calcDimensionsWithScroll();
                        var e = this.dimensions,
                            t = e.viewportTop + e.topSpacing,
                            n = this.affixedType;
                        return t <= e.containerTop || e.containerHeight <= e.sidebarHeight ? (e.translateY = 0, n = "STATIC") : n = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), e.translateY = Math.max(0, e.translateY), e.translateY = Math.min(e.containerHeight, e.translateY), e.translateY = Math.round(e.translateY), e.lastViewportTop = e.viewportTop, n
                    }
                }, {
                    key: "_getAffixTypeScrollingDown",
                    value: function() {
                        var e = this.dimensions,
                            t = e.sidebarHeight + e.containerTop,
                            n = e.viewportTop + e.topSpacing,
                            i = e.viewportBottom - e.bottomSpacing,
                            o = this.affixedType;
                        return this.isSidebarFitsViewport() ? e.sidebarHeight + n >= e.containerBottom ? (e.translateY = e.containerBottom - t, o = "CONTAINER-BOTTOM") : n >= e.containerTop && (e.translateY = n - e.containerTop, o = "VIEWPORT-TOP") : e.containerBottom <= i ? (e.translateY = e.containerBottom - t, o = "CONTAINER-BOTTOM") : t + e.translateY <= i ? (e.translateY = i - t, o = "VIEWPORT-BOTTOM") : e.containerTop + e.translateY <= n && 0 !== e.translateY && e.maxTranslateY !== e.translateY && (o = "VIEWPORT-UNBOTTOM"), o
                    }
                }, {
                    key: "_getAffixTypeScrollingUp",
                    value: function() {
                        var e = this.dimensions,
                            t = e.sidebarHeight + e.containerTop,
                            n = e.viewportTop + e.topSpacing,
                            i = e.viewportBottom - e.bottomSpacing,
                            o = this.affixedType;
                        return n <= e.translateY + e.containerTop ? (e.translateY = n - e.containerTop, o = "VIEWPORT-TOP") : e.containerBottom <= i ? (e.translateY = e.containerBottom - t, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || e.containerTop <= n && 0 !== e.translateY && e.maxTranslateY !== e.translateY && (o = "VIEWPORT-UNBOTTOM"), o
                    }
                }, {
                    key: "_getStyle",
                    value: function(e) {
                        if (void 0 !== e) {
                            var t = {
                                    inner: {},
                                    outer: {}
                                },
                                n = this.dimensions;
                            switch (e) {
                                case "VIEWPORT-TOP":
                                    t.inner = {
                                        position: "fixed",
                                        top: n.topSpacing,
                                        left: n.sidebarLeft - n.viewportLeft,
                                        width: n.sidebarWidth
                                    };
                                    break;
                                case "VIEWPORT-BOTTOM":
                                    t.inner = {
                                        position: "fixed",
                                        top: "auto",
                                        left: n.sidebarLeft,
                                        bottom: n.bottomSpacing,
                                        width: n.sidebarWidth
                                    };
                                    break;
                                case "CONTAINER-BOTTOM":
                                case "VIEWPORT-UNBOTTOM":
                                    var i = this._getTranslate(0, n.translateY + "px");
                                    t.inner = i ? {
                                        transform: i
                                    } : {
                                        position: "absolute",
                                        top: n.translateY,
                                        width: n.sidebarWidth
                                    }
                            }
                            switch (e) {
                                case "VIEWPORT-TOP":
                                case "VIEWPORT-BOTTOM":
                                case "VIEWPORT-UNBOTTOM":
                                case "CONTAINER-BOTTOM":
                                    t.outer = {
                                        height: n.sidebarHeight,
                                        position: "relative"
                                    }
                            }
                            return t.outer = c.extend({
                                height: "",
                                position: ""
                            }, t.outer), t.inner = c.extend({
                                position: "relative",
                                top: "",
                                left: "",
                                bottom: "",
                                width: "",
                                transform: ""
                            }, t.inner), t
                        }
                    }
                }, {
                    key: "stickyPosition",
                    value: function(e) {
                        if (!this._breakpoint) {
                            e = this._reStyle || e || !1, this.options.topSpacing, this.options.bottomSpacing;
                            var t = this.getAffixType(),
                                n = this._getStyle(t);
                            if ((this.affixedType != t || e) && t) {
                                var i = "affix." + t.toLowerCase().replace("viewport-", "") + d;
                                for (var o in c.eventTrigger(this.sidebar, i), "STATIC" === t ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), n.outer) {
                                    var r = "number" == typeof n.outer[o] ? "px" : "";
                                    this.sidebar.style[o] = n.outer[o] + r
                                }
                                for (var s in n.inner) {
                                    var a = "number" == typeof n.inner[s] ? "px" : "";
                                    this.sidebarInner.style[s] = n.inner[s] + a
                                }
                                var l = "affixed." + t.toLowerCase().replace("viewport-", "") + d;
                                c.eventTrigger(this.sidebar, l)
                            } else this._initialized && (this.sidebarInner.style.left = n.inner.left);
                            this.affixedType = t
                        }
                    }
                }, {
                    key: "_widthBreakpoint",
                    value: function() {
                        window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
                    }
                }, {
                    key: "updateSticky",
                    value: function() {
                        var e, t = this,
                            n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this._running || (this._running = !0, e = n.type, requestAnimationFrame(function() {
                            switch (e) {
                                case "scroll":
                                    t._calcDimensionsWithScroll(), t.observeScrollDir(), t.stickyPosition();
                                    break;
                                case "resize":
                                default:
                                    t._widthBreakpoint(), t.calcDimensions(), t.stickyPosition(!0)
                            }
                            t._running = !1
                        }))
                    }
                }, {
                    key: "_setSupportFeatures",
                    value: function() {
                        var e = this.support;
                        e.transform = c.supportTransform(), e.transform3d = c.supportTransform(!0)
                    }
                }, {
                    key: "_getTranslate",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.support.transform3d ? "translate3d(" + e + ", " + t + ", " + n + ")" : !!this.support.translate && "translate(" + e + ", " + t + ")"
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        window.removeEventListener("resize", this, {
                            capture: !1
                        }), window.removeEventListener("scroll", this, {
                            capture: !1
                        }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + d, this);
                        var e = {
                            inner: {},
                            outer: {}
                        };
                        for (var t in e.inner = {
                                position: "",
                                top: "",
                                left: "",
                                bottom: "",
                                width: "",
                                transform: ""
                            }, e.outer = {
                                height: "",
                                position: ""
                            }, e.outer) this.sidebar.style[t] = e.outer[t];
                        for (var n in e.inner) this.sidebarInner.style[n] = e.inner[n];
                        this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
                    }
                }], [{
                    key: "supportTransform",
                    value: function(e) {
                        var n = !1,
                            t = e ? "perspective" : "transform",
                            i = t.charAt(0).toUpperCase() + t.slice(1),
                            o = document.createElement("support").style;
                        return (t + " " + ["Webkit", "Moz", "O", "ms"].join(i + " ") + i).split(" ").forEach(function(e, t) {
                            if (void 0 !== o[e]) return n = e, !1
                        }), n
                    }
                }, {
                    key: "eventTrigger",
                    value: function(e, t, n) {
                        try {
                            var i = new CustomEvent(t, {
                                detail: n
                            })
                        } catch (e) {
                            (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n)
                        }
                        e.dispatchEvent(i)
                    }
                }, {
                    key: "extend",
                    value: function(e, t) {
                        var n = {};
                        for (var i in e) void 0 !== t[i] ? n[i] = t[i] : n[i] = e[i];
                        return n
                    }
                }, {
                    key: "offsetRelative",
                    value: function(e) {
                        var t = {
                            left: 0,
                            top: 0
                        };
                        do {
                            var n = e.offsetTop,
                                i = e.offsetLeft;
                            isNaN(n) || (t.top += n), isNaN(i) || (t.left += i), e = "BODY" === e.tagName ? e.parentElement : e.offsetParent
                        } while (e);
                        return t
                    }
                }, {
                    key: "addClass",
                    value: function(e, t) {
                        c.hasClass(e, t) || (e.classList ? e.classList.add(t) : e.className += " " + t)
                    }
                }, {
                    key: "removeClass",
                    value: function(e, t) {
                        c.hasClass(e, t) && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                    }
                }, {
                    key: "hasClass",
                    value: function(e, t) {
                        return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]), c
            }());
        e.default = n, window.StickySidebar = n
    }(t)
});
return e(i), e(t(function(e, t) {
    var n, r;
    r = (n = i) && n.__esModule ? n : {
            default: n
        },
        function() {
            if ("undefined" != typeof window) {
                var i = window.$ || window.jQuery || window.Zepto,
                    o = "stickySidebar";
                if (i) {
                    i.fn.stickySidebar = function(n) {
                        return this.each(function() {
                            var e = i(this),
                                t = i(this).data(o);
                            if (t || (t = new r.default(this, "object" == typeof n && n), e.data(o, t)), "string" == typeof n) {
                                if (void 0 === t[n] && -1 === ["destroy", "updateSticky"].indexOf(n)) throw new Error('No method named "' + n + '"');
                                t[n]()
                            }
                        })
                    }, i.fn.stickySidebar.Constructor = r.default;
                    var e = i.fn.stickySidebar;
                    i.fn.stickySidebar.noConflict = function() {
                        return i.fn.stickySidebar = e, this
                    }
                }
            }
        }()
}))
}),
function($, f) {
"use strict";

function s(b, w, T, e, t) {
    function n() {
        var o, r, s, a;
        y = 1 < $.devicePixelRatio, T = i(T), 0 <= w.delay && setTimeout(function() {
            l(!0)
        }, w.delay), (w.delay < 0 || w.combined) && (e.e = (o = w.throttle, r = function(e) {
            "resize" === e.type && (_ = x = -1), l(e.all)
        }, a = 0, function(e, t) {
            function n() {
                a = +new Date, r.call(b, e)
            }
            var i = +new Date - a;
            s && clearTimeout(s), o < i || !w.enableThrottle || t ? n() : s = setTimeout(n, o - i)
        }), e.a = function(e) {
            e = i(e), T.push.apply(T, e)
        }, e.g = function() {
            return T = j(T).filter(function() {
                return !j(this).data(w.loadedName)
            })
        }, e.f = function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = T.filter(function() {
                    return this === e[t]
                });
                n.length && l(!1, n)
            }
        }, l(), j(w.appendScroll).on("scroll." + t + " resize." + t, e.e))
    }

    function i(e) {
        for (var t = w.defaultImage, n = w.placeholder, i = w.imageBase, o = w.srcsetAttribute, r = w.loaderAttribute, s = w._f || {}, a = 0, l = (e = j(e).filter(function() {
                var e = j(this),
                    t = S(this);
                return !e.data(w.handledName) && (e.attr(w.attribute) || e.attr(o) || e.attr(r) || s[t] !== f)
            }).data("plugin_" + w.name, b)).length; a < l; a++) {
            var c = j(e[a]),
                d = S(e[a]),
                u = c.attr(w.imageBaseAttribute) || i;
            d === O && u && c.attr(o) && c.attr(o, p(c.attr(o), u)), s[d] === f || c.attr(r) || c.attr(r, s[d]), d === O && t && !c.attr(D) ? c.attr(D, t) : d === O || !n || c.css(L) && "none" !== c.css(L) || c.css(L, "url('" + n + "')")
        }
        return e
    }

    function l(e, t) {
        if (T.length) {
            for (var n = t || T, i = !1, o = w.imageBase || "", r = w.srcsetAttribute, s = w.handledName, a = 0; a < n.length; a++)
                if (e || t || (f = n[a], void 0, h = f.getBoundingClientRect(), g = w.scrollDirection, m = w.threshold, v = (0 <= x ? x : x = j($).height()) + m > h.top && -m < h.bottom, y = (0 <= _ ? _ : _ = j($).width()) + m > h.left && -m < h.right, "vertical" === g ? v : "horizontal" === g ? y : v && y)) {
                    var l = j(n[a]),
                        c = S(n[a]),
                        d = l.attr(w.attribute),
                        u = l.attr(w.imageBaseAttribute) || o,
                        p = l.attr(w.loaderAttribute);
                    l.data(s) || w.visibleOnly && !l.is(":visible") || !((d || l.attr(r)) && (c === O && (u + d !== l.attr(D) || l.attr(r) !== l.attr(N)) || c !== O && u + d !== l.css(L)) || p) || (i = !0, l.data(s, !0), k(l, c, u, p))
                } var f, h, g, m, v, y;
            i && (T = j(T).filter(function() {
                return !j(this).data(s)
            }))
        } else w.autoDestroy && b.destroy()
    }

    function k(t, e, n, i) {
        ++v;
        var o = function() {
            m("onError", t), g(), o = j.noop
        };
        m("beforeLoad", t);
        var r = w.attribute,
            s = w.srcsetAttribute,
            a = w.sizesAttribute,
            l = w.retinaAttribute,
            c = w.removeAttribute,
            d = w.loadedName,
            u = t.attr(l);
        if (i) {
            var p = function() {
                c && t.removeAttr(w.loaderAttribute), t.data(d, !0), m(C, t), setTimeout(g, 1), p = j.noop
            };
            t.off(A).one(A, o).one(E, p), m(i, t, function(e) {
                e ? (t.off(E), p()) : (t.off(A), o())
            }) || t.trigger(A)
        } else {
            var f = j(new Image);
            f.one(A, o).one(E, function() {
                t.hide(), e === O ? t.attr(I, f.attr(I)).attr(N, f.attr(N)).attr(D, f.attr(D)) : t.css(L, "url('" + f.attr(D) + "')"), t[w.effect](w.effectTime), c && (t.removeAttr(r + " " + s + " " + l + " " + w.imageBaseAttribute), a !== I && t.removeAttr(a)), t.data(d, !0), m(C, t), f.remove(), g()
            });
            var h = (y && u ? u : t.attr(r)) || "";
            f.attr(I, t.attr(a)).attr(N, t.attr(s)).attr(D, h ? n + h : null), f.complete && f.trigger(E)
        }
    }

    function S(e) {
        return e.tagName.toLowerCase()
    }

    function p(e, t) {
        if (t) {
            var n = e.split(",");
            e = "";
            for (var i = 0, o = n.length; i < o; i++) e += t + n[i].trim() + (i !== o - 1 ? "," : "")
        }
        return e
    }

    function g() {
        --v, T.length || v || m("onFinishedAll")
    }

    function m(e, t, n) {
        return !!(e = w[e]) && (e.apply(b, [].slice.call(arguments, 1)), !0)
    }
    var v = 0,
        _ = -1,
        x = -1,
        y = !1,
        C = "afterLoad",
        E = "load",
        A = "error",
        O = "img",
        D = "src",
        N = "srcset",
        I = "sizes",
        L = "background-image";
    "event" === w.bind || o ? n() : j($).on(E + "." + t, n)
}

function c(e, t) {
    var n = this,
        i = j.extend({}, n.config, t),
        o = {},
        r = i.name + "-" + ++a;
    return n.config = function(e, t) {
        return t === f ? i[e] : (i[e] = t, n)
    }, n.addItems = function(e) {
        return o.a && o.a("string" === j.type(e) ? j(e) : e), n
    }, n.getItems = function() {
        return o.g ? o.g() : {}
    }, n.update = function(e) {
        return o.e && o.e({}, !e), n
    }, n.force = function(e) {
        return o.f && o.f("string" === j.type(e) ? j(e) : e), n
    }, n.loadAll = function() {
        return o.e && o.e({
            all: !0
        }, !0), n
    }, n.destroy = function() {
        return j(i.appendScroll).off("." + r, o.e), j($).off("." + r), o = {}, f
    }, s(n, i, e, o, r), i.chainable ? e : n
}
var j = $.jQuery || $.Zepto,
    a = 0,
    o = !1;
j.fn.Lazy = j.fn.lazy = function(e) {
    return new c(this, e)
}, j.Lazy = j.lazy = function(e, t, n) {
    if (j.isFunction(t) && (n = t, t = []), j.isFunction(n)) {
        e = j.isArray(e) ? e : [e], t = j.isArray(t) ? t : [t];
        for (var i = c.prototype.config, o = i._f || (i._f = {}), r = 0, s = e.length; r < s; r++)(i[e[r]] === f || j.isFunction(i[e[r]])) && (i[e[r]] = n);
        for (var a = 0, l = t.length; a < l; a++) o[t[a]] = e[0]
    }
}, c.prototype.config = {
    name: "lazy",
    chainable: !0,
    autoDestroy: !0,
    bind: "load",
    threshold: 500,
    visibleOnly: !1,
    appendScroll: $,
    scrollDirection: "both",
    imageBase: null,
    defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    placeholder: null,
    delay: -1,
    combined: !1,
    attribute: "data-src",
    srcsetAttribute: "data-srcset",
    sizesAttribute: "data-sizes",
    retinaAttribute: "data-retina",
    loaderAttribute: "data-loader",
    imageBaseAttribute: "data-imagebase",
    removeAttribute: !0,
    handledName: "handled",
    loadedName: "loaded",
    effect: "show",
    effectTime: 0,
    enableThrottle: !0,
    throttle: 250,
    beforeLoad: f,
    afterLoad: f,
    onError: f,
    onFinishedAll: f
}, j($).on("load", function() {
    o = !0
})
}(window),
function() {
function s() {
    if (!O && document.body) {
        O = !0;
        var e = document.body,
            t = document.documentElement,
            n = window.innerHeight,
            i = e.scrollHeight;
        if (D = 0 <= document.compatMode.indexOf("CSS") ? t : e, w = e, x.keyboardSupport && g("keydown", a), top != self) E = !0;
        else if (n < i && (e.offsetHeight <= n || t.offsetHeight <= n)) {
            var o, r = document.createElement("div");
            r.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + D.scrollHeight + "px", document.body.appendChild(r), k = function() {
                o || (o = setTimeout(function() {
                    C || (r.style.height = "0", r.style.height = D.scrollHeight + "px", o = null)
                }, 500))
            }, setTimeout(k, 10), g("resize", k);
            if ((T = new B(k)).observe(e, {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                }), D.offsetHeight <= n) {
                var s = document.createElement("div");
                s.style.clear = "both", e.appendChild(s)
            }
        }
        x.fixedBackground || C || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll")
    }
}

function c(u, p, f) {
    if (n = 0 < (n = p) ? 1 : -1, i = 0 < (i = f) ? 1 : -1, (A.x !== n || A.y !== i) && (A.x = n, A.y = i, $ = [], P = 0), 1 != x.accelerationMax) {
        var e = Date.now() - P;
        if (e < x.accelerationDelta) {
            var t = (1 + 50 / e) / 2;
            1 < t && (t = Math.min(t, x.accelerationMax), p *= t, f *= t)
        }
        P = Date.now()
    }
    var n, i;
    if ($.push({
            x: p,
            y: f,
            lastX: p < 0 ? .99 : -.99,
            lastY: f < 0 ? .99 : -.99,
            start: Date.now()
        }), !j) {
        var h = u === document.body,
            g = function() {
                for (var e = Date.now(), t = 0, n = 0, i = 0; i < $.length; i++) {
                    var o = $[i],
                        r = e - o.start,
                        s = r >= x.animationTime,
                        a = s ? 1 : r / x.animationTime;
                    x.pulseAlgorithm && (a = 1 <= (d = a) ? 1 : d <= 0 ? 0 : (1 == x.pulseNormalize && (x.pulseNormalize /= b(1)), b(d)));
                    var l = o.x * a - o.lastX >> 0,
                        c = o.y * a - o.lastY >> 0;
                    t += l, n += c, o.lastX += l, o.lastY += c, s && ($.splice(i, 1), i--)
                }
                var d;
                h ? window.scrollBy(t, n) : (t && (u.scrollLeft += t), n && (u.scrollTop += n)), p || f || ($ = []), $.length ? q(g, u, 1e3 / x.frameRate + 1) : j = !1
            };
        q(g, u, 0), j = !0
    }
}

function e(e) {
    O || s();
    var t = e.target,
        n = u(t);
    if (!n || e.defaultPrevented || e.ctrlKey) return !0;
    if (m(w, "embed") || m(t, "embed") && /\.pdf/i.test(t.src) || m(w, "object")) return !0;
    var i, o = -e.wheelDeltaX || e.deltaX || 0,
        r = -e.wheelDeltaY || e.deltaY || 0;
    return I && (e.wheelDeltaX && v(e.wheelDeltaX, 120) && (o = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && v(e.wheelDeltaY, 120) && (r = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), o || r || (r = -e.wheelDelta || 0), 1 === e.deltaMode && (o *= 40, r *= 40), !(x.touchpadSupport || (!(i = r) || (N.length || (N = [i, i, i]), i = Math.abs(i), N.push(i), N.shift(), clearTimeout(S), S = setTimeout(function() {
        window.localStorage && (localStorage.SS_deltaBuffer = N.join(","))
    }, 1e3), y(120) || y(100)))) || (1.2 < Math.abs(o) && (o *= x.stepSize / 120), 1.2 < Math.abs(r) && (r *= x.stepSize / 120), c(n, o, r), e.preventDefault(), void d())
}

function a(e) {
    var t = e.target,
        n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== L.spacebar;
    document.contains(w) || (w = document.activeElement);
    var i = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (/^(textarea|select|embed|object)$/i.test(t.nodeName) || m(t, "input") && !i.test(t.type) || m(w, "video") || function(e) {
            var t = e.target,
                n = !1;
            if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                do {
                    if (n = t.classList && t.classList.contains("html5-video-controls")) break
                } while (t = t.parentNode);
            return n
        }(e) || t.isContentEditable || e.defaultPrevented || n) return !0;
    if ((m(t, "button") || m(t, "input") && i.test(t.type)) && e.keyCode === L.spacebar) return !0;
    var o = 0,
        r = 0,
        s = u(w),
        a = s.clientHeight;
    switch (s == document.body && (a = window.innerHeight), e.keyCode) {
        case L.up:
            r = -x.arrowScroll;
            break;
        case L.down:
            r = x.arrowScroll;
            break;
        case L.spacebar:
            r = -(e.shiftKey ? 1 : -1) * a * .9;
            break;
        case L.pageup:
            r = .9 * -a;
            break;
        case L.pagedown:
            r = .9 * a;
            break;
        case L.home:
            r = -s.scrollTop;
            break;
        case L.end:
            var l = s.scrollHeight - s.scrollTop - a;
            r = 0 < l ? l + 10 : 0;
            break;
        case L.left:
            o = -x.arrowScroll;
            break;
        case L.right:
            o = x.arrowScroll;
            break;
        default:
            return !0
    }
    c(s, o, r), e.preventDefault(), d()
}

function t(e) {
    w = e.target
}

function d() {
    clearTimeout(o), o = setInterval(function() {
        M = {}
    }, 1e3)
}

function l(e, t) {
    for (var n = e.length; n--;) M[H(e[n])] = t;
    return t
}

function u(e) {
    var t = [],
        n = document.body,
        i = D.scrollHeight;
    do {
        var o = M[H(e)];
        if (o) return l(t, o);
        if (t.push(e), i === e.scrollHeight) {
            var r = f(D) && f(n) || h(D);
            if (E && p(D) || !E && r) return l(t, z())
        } else if (p(e) && h(e)) return l(t, e)
    } while (e = e.parentElement)
}

function p(e) {
    return e.clientHeight + 10 < e.scrollHeight
}

function f(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
}

function h(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t
}

function g(e, t) {
    window.addEventListener(e, t, !1)
}

function n(e, t) {
    window.removeEventListener(e, t, !1)
}

function m(e, t) {
    return (e.nodeName || "").toLowerCase() === t.toLowerCase()
}

function v(e, t) {
    return Math.floor(e / t) == e / t
}

function y(e) {
    return v(N[0], e) && v(N[1], e) && v(N[2], e)
}

function b(e) {
    var t, n;
    return (e *= x.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (n = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - n)), t * x.pulseNormalize
}

function i(e) {
    for (var t in e) _.hasOwnProperty(t) && (x[t] = e[t])
}
var w, T, k, o, S, r, _ = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 100,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: !0,
        arrowScroll: 50,
        touchpadSupport: !1,
        fixedBackground: !0,
        excluded: ""
    },
    x = _,
    C = !1,
    E = !1,
    A = {
        x: 0,
        y: 0
    },
    O = !1,
    D = document.documentElement,
    N = [],
    I = /^Mac/.test(navigator.platform),
    L = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    },
    $ = [],
    j = !1,
    P = Date.now(),
    H = (r = 0, function(e) {
        return e.uniqueID || (e.uniqueID = r++)
    }),
    M = {};
window.localStorage && localStorage.SS_deltaBuffer && (N = localStorage.SS_deltaBuffer.split(","));
var R, W, q = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, n) {
        window.setTimeout(e, n || 1e3 / 60)
    },
    B = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    z = function() {
        if (!W) {
            var e = document.createElement("div");
            e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
            var t = document.body.scrollTop;
            document.documentElement.scrollTop, window.scrollBy(0, 1), W = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -1), document.body.removeChild(e)
        }
        return W
    },
    F = window.navigator.userAgent,
    Y = /Edge/.test(F),
    U = /chrome/i.test(F) && !Y,
    V = /safari/i.test(F) && !Y,
    Q = /mobile/i.test(F),
    X = (U || V) && !Q;
"onwheel" in document.createElement("div") ? R = "wheel" : "onmousewheel" in document.createElement("div") && (R = "mousewheel"), R && X && (g(R, e), g("mousedown", t), g("load", s)), i.destroy = function() {
    T && T.disconnect(), n(R, e), n("mousedown", t), n("keydown", a), n("resize", k), n("load", s)
}, window.SmoothScrollOptions && i(window.SmoothScrollOptions), "object" == typeof exports ? module.exports = i : window.SmoothScroll = i
}();
var $ = jQuery.noConflict();
! function(i) {
"use strict";
try {
    i("#menu-responsive .mobile-holder").on("click", "a", function() {
        var e = i("#mobile-menu");
        i("#overlay-menu-mobile");
        i("body").toggleClass("no-scroll"), e.toggleClass("open"), i(this).parent().toggleClass("open")
    })
} catch (e) {}
if (0 < i("#about-sidebar").length && i("#about-sidebar").stickySidebar({
        topSpacing: 35,
        bottomSpacing: 0
    }), 0 < i("#about-sidebar").length) {
    var t = i("#about-sidebar"),
        e = (i("#page-header"), i("#whos")),
        n = i("#whats"),
        o = i("#values"),
        r = i("#hows"),
        s = i("#teams"),
        a = i("#awards"),
        l = (t.offset(), e.offset()),
        c = n.offset(),
        d = o.offset(),
        u = r.offset(),
        p = s.offset();
    a.offset();
    i(window).on("scroll", function() {
        var e = i(window).scrollTop();
        e <= l.top - 100 && (t.find("a").removeClass("selected"), t.find('[data-anchor="abouts"]').addClass("selected")), e >= l.top - 50 && (t.find("a").removeClass("selected"), t.find('[data-anchor="whos"]').addClass("selected")), e >= c.top - 50 && (t.find("a").removeClass("selected"), t.find('[data-anchor="whats"]').addClass("selected")), e >= d.top - 50 && (t.find("a").removeClass("selected"), t.find('[data-anchor="values"]').addClass("selected")), e >= u.top - 50 && (t.find("a").removeClass("selected"), t.find('[data-anchor="hows"]').addClass("selected")), e >= p.top - 50 && (t.find("a").removeClass("selected"), t.find('[data-anchor="teams"]').addClass("selected")), e >= p.top + 300 && (t.find("a").removeClass("selected"), t.find('[data-anchor="awards"]').addClass("selected"))
    })
}
window.sr = ScrollReveal(), sr.reveal('[data-animation="fade"]', {
    duration: 600,
    delay: 300,
    mobile: !1
}), sr.reveal('[data-animation="top"]', {
    duration: 600,
    scale: 1,
    delay: 300,
    origin: "top",
    mobile: !1
}), sr.reveal('[data-animation="bottom"]', {
    duration: 600,
    scale: 1,
    delay: 300,
    origin: "bottom",
    mobile: !1
}), sr.reveal('[data-animation="left"]', {
    duration: 600,
    scale: 1,
    delay: 300,
    origin: "left",
    mobile: !1
}), sr.reveal('[data-animation="right"]', {
    duration: 600,
    scale: 1,
    delay: 300,
    origin: "right",
    mobile: !1
});
var f = i("html, body");
i("a[href*=#]").on("click", function(e) {
    e.preventDefault();
    var t, n = i(window).width();
    1199 <= n ? t = -35 : n < 1199 && (t = -30), f.animate({
        scrollTop: i(i.attr(this, "href")).offset().top + t
    }, 500)
}), 0 < i("#main-title h1:not(.bcrumbs)").length && i("#main-title h1:not(.bcrumbs)").typed({
    strings: ["Digital Advertising Team"],
    loop: !1,
    typeSpeed: 100
})
}(jQuery), $(document).ready(function(i) {
"use strict";
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var e = /Android/i.test(navigator.userAgent);
0 < i(".team-list").length && (i(".team-list").slick({
    infinite: !0,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1600,
    arrows: !1,
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0
        }
    }]
}), i("#teams .simple-nav").on("click", "a", function() {
    i(".team-list").slick("slickNext")
})), 0 < i("#page-content.project").length && i("#page-content.project img").lazy({
    afterLoad: function(e) {
        e.css("opacity", "1")
    }
}), e && i("[class*='projects-wrap'] .project a").on("click", function(e) {
    var t = i(this).data("clicks"),
        n = i(this).attr("href");
    "" == t ? (e.preventDefault(), i(this).data("clicks", 1)) : "1" == t && (window.location = "/" + n, i(this).data("clicks", !t))
})
}), document.addEventListener("DOMContentLoaded", function() {
$("body").addClass("visible")
});