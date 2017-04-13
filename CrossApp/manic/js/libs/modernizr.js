/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-csstransforms-csstransforms3d-csstransitions-canvas-touch-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;
window.Modernizr = function(a, b, c) {
    function A(a) {
        j.cssText = a
    }
    function B(a, b) {
        return A(m.join(a + ";") + (b || ""))
    }
    function C(a, b) {
        return typeof a === b
    }
    function D(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function E(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!D(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function F(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d===!1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function G(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" ");
        return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), F(e, b, c))
    }
    var d = "2.8.3", e = {}, f=!0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, x = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c)
            return c(b) && c(b).matches ||!1;
        var d;
        return w("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
        }), d
    }, y = {}.hasOwnProperty, z;
    !C(y, "undefined")&&!C(y.call, "undefined") ? z = function(a, b) {
        return y.call(a, b)
    } : z = function(a, b) {
        return b in a && C(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = u.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }), q.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext&&!!a.getContext("2d")
    }, q.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c=!0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }), c
    }, q.backgroundsize = function() {
        return G("backgroundSize")
    }, q.csstransforms = function() {
        return !!G("transform")
    }, q.csstransforms3d = function() {
        var a=!!G("perspective");
        return a && "webkitPerspective"in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, q.csstransitions = function() {
        return G("transition")
    };
    for (var H in q)
        z(q, H) && (v = H.toLowerCase(), e[v] = q[H](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                z(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, A(""), i = k = null, e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.mq = x, e.testProp = function(a) {
        return E([a])
    }, e.testAllProps = G, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document);

