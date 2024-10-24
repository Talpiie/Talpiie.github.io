webpackJsonp([1, 0], [function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a),
        i = n(9),
        s = (o(i), n(3)),
        u = o(s),
        c = n(20),
        l = o(c);
    n(46), n(74), new r.default({
        el: "#v-app",
        router: u.default,
        template: "<root-layout />",
        components: {
            RootLayout: l.default
        }
    })
}, , , function(e, t, n) {
    "use strict";

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.pageRoutes = t.routes = void 0;
    var r = n(2),
        i = a(r),
        s = n(135),
        u = a(s),
        c = n(47),
        l = n(20),
        d = (a(l), n(103)),
        p = a(d),
        f = n(104),
        m = a(f),
        v = n(110),
        h = a(v),
        _ = n(105),
        g = a(_),
        b = n(45),
        w = o(b),
        y = n(44),
        x = o(y),
        C = n(43),
        j = o(C);
    i.default.use(u.default);
    var S = t.routes = [{
            path: "",
            abstract: !0,
            component: p.default,
            type: "layout",
            children: [{
                path: "/",
                name: "homepage",
                type: "page",
                component: h.default
            }, {
                path: "/404",
                name: "page-not-found",
                type: "error-page",
                component: g.default
            }]
        }, {
            path: "/",
            component: m.default,
            name: "split-layout",
            abstract: !0,
            type: "layout",
            children: [{
                path: "/sobre",
                name: "About Me",
                type: "page",
                components: {
                    leftColumn: j.TitleSection,
                    rightColumn: j.ContentSection
                }
            }, {
                path: "/projetos/:projectName?",
                name: "Projects",
                type: "page",
                components: {
                    leftColumn: w.TitleSection,
                    rightColumn: w.ContentSection
                }
            }, {
                path: "/contato",
                name: "Contact",
                type: "page",
                components: {
                    leftColumn: x.TitleSection,
                    rightColumn: x.ContentSection
                }
            }]
        }],
        $ = new u.default({
            mode: "history",
            routes: S
        });
    $.beforeEach(function(e, t, n) {
        e.matched.length ? n() : n("/404")
    });
    t.pageRoutes = (0, c.filterRoutes)(S);
    t.default = $
}, , , , , , function(e, t) {
    e.exports = {
        contactLinks: [{
            name: "Facebook",
            url: "https://facebook.com/",
            profile: "RwshRwsh",
            icon: "assets/img/facebook-logo.png"
        }, {
            name: "Tiktok",
            url: "https://tiktok.com/",
            profile: "@Talpiie",
            icon: "assets/img/facebook-logo.png"
        }, {
            name: "GitHub",
            url: "https://github.com/",
            profile: "Talpiie",
            icon: "assets/img/facebook-logo.png"
        }, {
            name: "Instagram",
            url: "https://Instagram.com/",
            profile: "talpiie",
            icon: "assets/img/facebook-logo.png"
        }, {
            name: "steam",
            url: "https://steamcommunity.com/id/",
            profile: "AjinGrey",
            icon: "assets/img/facebook-logo.png"
        }]
    }
}

,
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(98),
        r = o(a),
        i = n(97),
        s = o(i);

    t.default = {
        DBCS: r.default,
        IMS: s.default
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.bus = void 0;
    var a = n(2),
        r = o(a),
        i = t.bus = new r.default;
    i.$data.hasPendingLeave = !1, t.default = {
        on: {
            beforeEnter: function(e, t) {
                e.style.display = "none"
            },
            enter: function(e, t) {
                var n = this,
                    o = function() {
                        return n.$options.methods.pendingEnter(e, t)
                    };
                i.$data.hasPendingLeave ? i.$once("next", o) : o()
            },
            enterCacelled: function() {
                i.$off("next", this.$options.methods.pendingenter)
            },
            leave: function(e, t) {
                i.$data.hasPendingLeave = !0, this.$options.methods.pendingLeave(e, t, function() {
                    i.$emit("next"), i.$data.hasPendingLeave = !1
                })
            }
        }
    }
}, , , , , ,
function(e, t, n) {
    n(88);
    var o = n(1)(n(21), n(130), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(83);
    var o = n(1)(n(23), n(127), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(87);
    var o = n(1)(n(24), n(129), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(82);
    var o = n(1)(n(26), n(126), null, null);
    e.exports = o.exports
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    t.default = n = {
        name: "floating-button"
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    t.default = n = {
        name: "ham-button",
        props: {
            isActive: {
                type: Boolean,
                required: !0
            },
            value: {
                type: Boolean,
                required: !0
            }
        },
        methods: {
            emitChange: function() {
                return this.$emit("input", !this.value)
            }
        }
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    t.default = n = {
        name: "icon-link",
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            icon: {
                type: String,
                required: !0
            }
        },
        computed: {
            iconClass: function() {
                return "" + this.icon.trim()
            }
        }
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, a = n(3);
    t.default = o = {
        name: "menu-overlay",
        data: function() {
            return {
                pageRoutes: a.pageRoutes,
                currentRoute: this.$route.name
            }
        },
        props: {
            isActive: {
                type: Boolean,
                required: !0
            },
            isAbsolute: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        watch: {
            $route: function(e, t) {
                var n;
                return n = 500, setTimeout(function(t) {
                    return function() {
                        return t.currentRoute = e.name
                    }
                }(this), n)
            }
        },
        methods: {
            toggleNav: function() {
                return setTimeout(function(e) {
                    return function() {
                        return e.$router.app.$emit("toggleNav")
                    }
                }(this), 30)
            }
        }
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(19),
        r = o(a);
    n(113), n(114);
    var i;
    t.default = i = {
        name: "default-layout",
        props: {
            isNavActive: {
                type: Boolean,
                required: !0
            },
            layoutColors: {
                type: String,
                required: !0
            }
        },
        beforeMount: function() {
            return this.$router.app.$emit("changeLayoutColors", "accent")
        },
        components: {
            MenuOverlay: r.default
        }
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, r = n(102),
        i = o(r);
    t.default = a = {
        name: "root-layout",
        data: function() {
            return {
                isNavActive: !1,
                layoutColors: "colors-accent",
                layoutBackground: "bg-standard"
            }
        },
        created: function() {
            return this.$router.app.$on("toggleNav", function(e) {
                return function() {
                    return e.isNavActive = !e.isNavActive
                }
            }(this)), this.$router.app.$on("changeLayoutColors", function(e) {
                return function(t) {
                    return e.layoutColors = "colors-" + t
                }
            }(this)), this.$router.app.$on("changeLayoutBackground", function(e) {
                return function(t) {
                    return e.layoutBackground = "bg-" + pallete
                }
            }(this))
        },
        components: {
            HamButton: i.default
        }
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(19),
        r = o(a),
        i = n(3);
    n(119), n(116), n(117), n(118), n(115);
    var s;
    t.default = s = {
        name: "split-layout",
        props: {
            isNavActive: {
                type: Boolean,
                required: !0
            }
        },
        data: function() {
            return {
                transitionName: "transition",
                routes: i.routes.reduce(function(e, t) {
                    if (t.abstract && "split-layout" === t.name) return t.children.map(function(e) {
                        return e.name
                    })
                }, [])
            }
        },
        watch: {
            $route: function(e, t) {
                return this.routes.indexOf(e.name) > this.routes.indexOf(t.name) ? this.transitionName = "slide-up-transition" : this.routes.indexOf(e.name) < this.routes.indexOf(t.name) ? this.transitionName = "slide-down-transition" : void 0
            }
        },
        created: function() {
            return this.$router.app.$on("changeTransition", function(e) {
                return function(t) {
                    return e.transitionName = t + "-transition"
                }
            }(this)), this.$router.app.$emit("changeLayoutColors", "foreground")
        },
        components: {
            MenuOverlay: r.default
        }
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    t.default = n = {
        name: "page-not-found",
        mounted: function() {
            return this.$router.app.$emit("changeLayoutColors", "foreground")
        }
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, r = n(96),
        i = o(r);
    t.default = a = {
        name: "about-content-section",
        data: function() {
            return {
                aboutMeText: i.default,
                scrollShadowState: ""
            }
        },
        mounted: function() {
            return this.$nextTick(function(e) {
                return function() {
                    var t;
                    if (window.addEventListener("resize", e.toggleScrollShadow.bind(e)), t = e.$el.getElementsByClassName("text-body")[0], t.scrollHeight > t.clientHeight) return e.scrollShadowState = "show-shadow-bottom"
                }
            }(this))
        },
        beforeDestroy: function() {
            return window.removeEventListener("resize", this.toggleScrollShadow)
        },
        methods: {
            toggleScrollShadow: function(e) {
                var t, n, o, a;
                return n = this.$el.getElementsByClassName("text-body")[0], a = n.scrollTop, o = n.scrollHeight - 5, t = n.clientHeight, o <= t ? void(this.scrollShadowState = "") : a > 15 && t + a < o ? this.scrollShadowState = "show-shadow-top show-shadow-bottom" : a < 20 && t + a < o ? this.scrollShadowState = "show-shadow-bottom" : a + t >= o ? this.scrollShadowState = "show-shadow-top" : this.scrollShadowState = ""
            }
        }
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    t.default = n = {
        name: "about-title-section"
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, r = n(9),
        i = o(r),
        s = n(16),
        u = n(17),
        c = o(u);
    t.default = a = {
        name: "contact-content-section",
        data: function() {
            return {
                emailAddress: (0, s.find)(i.default.contactLinks, {
                    name: "email"
                }).profile || ""
            }
        },
        components: {
            FloatingButton: c.default
        }
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    t.default = n = {
        name: "contact-title-section"
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, r = n(9),
        i = o(r),
        s = n(18),
        u = o(s);
    t.default = a = {
        name: "homepage",
        data: function() {
            return {
                contactLinks: i.default.contactLinks
            }
        },
        mounted: function() {
            return this.$router.app.$emit("changeLayoutColors", "accent")
        },
        components: {
            IconLink: u.default
        }
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, r = n(12),
        i = o(r),
        s = n(16),
        u = (o(s), n(17)),
        c = o(u),
        l = n(18),
        d = o(l),
        p = n(10),
        f = o(p);
    t.default = a = {
        name: "projects-content-section",
        data: function() {
            var e, t;
            return t = (0, i.default)(f.default), e = this.$route.params.projectName, {
                currentProject: f.default[e],
                nextProject: t[t.indexOf(e) + 1] || "",
                previousProject: t[t.indexOf(e) - 1] || "",
                scrollShadowState: ""
            }
        },
        mounted: function() {
            return this.$nextTick(function(e) {
                return function() {
                    var t;
                    if (window.addEventListener("resize", e.toggleScrollShadow.bind(e)), t = e.$el.getElementsByClassName("project-description")[0], t.scrollHeight > t.clientHeight) return e.scrollShadowState = "show-shadow-bottom"
                }
            }(this))
        },
        beforeDestroy: function() {
            return window.removeEventListener("resize", this.toggleScrollShadow)
        },
        methods: {
            toggleScrollShadow: function(e) {
                var t, n, o, a;
                return n = this.$el.getElementsByClassName("project-description")[0], a = n.scrollTop, o = n.scrollHeight - 5, t = n.clientHeight, o <= t ? void(this.scrollShadowState = "") : a > 15 && t + a < o ? this.scrollShadowState = "show-shadow-top show-shadow-bottom" : a < 20 && t + a < o ? this.scrollShadowState = "show-shadow-bottom" : a + t >= o ? this.scrollShadowState = "show-shadow-top" : this.scrollShadowState = ""
            }
        },
        components: {
            FloatingButton: c.default,
            IconLink: d.default
        }
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, r = n(12),
        i = o(r),
        s = n(10),
        u = o(s);
    t.default = a = {
        name: "projects-title-section",
        data: function() {
            return {
                projects: (0, i.default)(u.default),
                projectTransition: "transition"
            }
        },
        beforeRouteUpdate: function(e, t, n) {
            var o, a;
            return a = this.projects.indexOf(e.params.projectName), o = this.projects.indexOf(t.params.projectName), a > o ? this.$router.app.$emit("changeTransition", "slide-left") : this.$router.app.$emit("changeTransition", "slide-right"), n()
        },
        beforeRouteEnter: function(e, t, n) {
            return e.params.projectName ? (0, i.default)(u.default).indexOf(e.params.projectName) === -1 ? n("/404") : n() : n({
                path: "/projetos/" + (0, i.default)(u.default)[0]
            })
        }
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a),
        i = n(11);
    r.default.component("default-layout-transition", {
        functional: !0,
        render: function(e, t) {
            return e("transition", {
                props: {
                    name: "home"
                },
                on: {
                    beforeEnter: function(e, t) {
                        return e.style.display = "none"
                    },
                    enter: function(e, t) {
                        var n;
                        return n = function(n) {
                            return function() {
                                return e.style.display = "", e.addEventListener("animationend", function() {
                                    return t()
                                })
                            }
                        }(this), i.bus.$data.hasPendingLeave ? i.bus.$once("next", n) : n()
                    },
                    enterCancelled: function(e, t) {
                        return i.bus.$off("next")
                    },
                    leave: function(e, t) {
                        var n;
                        return i.bus.$data.hasPendingLeave = !0, n = e.getElementsByClassName("menu-overlay")[0], n.className = "menu-overlay", n.addEventListener("transitionend", function(e) {
                            return function(e) {
                                if ("transform" === e.propertyName) return t(), i.bus.$emit("next"), i.bus.$data.hasPendingLeave = !1
                            }
                        }(this))
                    }
                }
            }, t.children)
        }
    })
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a);
    r.default.component("jump-transition", {
        functional: !0,
        render: function(e, t) {
            return e("transition", {
                props: {
                    name: "jump"
                }
            }, t.children)
        }
    })
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a);
    r.default.component("slide-down-transition", {
        functional: !0,
        render: function(e, t) {
            return e("transition", {
                props: {
                    name: "slide-down",
                    type: "animation"
                }
            }, t.children)
        }
    })
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a);
    r.default.component("slide-left-transition", {
        functional: !0,
        render: function(e, t) {
            return e("transition", {
                props: {
                    name: "slide-left",
                    type: "animation"
                }
            }, t.children)
        }
    })
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a);
    r.default.component("slide-right-transition", {
        functional: !0,
        render: function(e, t) {
            return e("transition", {
                props: {
                    name: "slide-right",
                    type: "animation"
                }
            }, t.children)
        }
    })
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a);
    r.default.component("slide-up-transition", {
        functional: !0,
        render: function(e, t) {
            return e("transition", {
                props: {
                    name: "slide-up",
                    type: "animation"
                }
            }, t.children)
        }
    })
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a),
        i = n(11);
    r.default.component("split-layout-transition", {
        functional: !0,
        render: function(e, t) {
            return e("transition", {
                props: {
                    name: "l-split"
                },
                on: {
                    enter: function(e, t) {
                        var n;
                        return n = function(n) {
                            return function() {
                                return e.addEventListener("animationend", function() {
                                    return t()
                                })
                            }
                        }(this), i.bus.$data.hasPendingLeave ? i.bus.$once("next", n) : n()
                    },
                    enterCancelled: function(e, t) {
                        return i.bus.$off("next")
                    },
                    leave: function(e, t) {
                        return i.bus.$data.hasPendingLeave = !0, e.addEventListener("transitionend", function(e) {
                            return function() {
                                return t(), i.bus.$emit("next"), i.bus.$data.hasPendingLeave = !1
                            }
                        }(this))
                    }
                }
            }, t.children)
        }
    })
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ContentSection = t.TitleSection = void 0;
    var a = n(107),
        r = o(a),
        i = n(106),
        s = o(i);
    t.TitleSection = r.default, t.ContentSection = s.default
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ContentSection = t.TitleSection = void 0;
    var a = n(109),
        r = o(a),
        i = n(108),
        s = o(i);
    t.TitleSection = r.default, t.ContentSection = s.default
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TitleSection = t.ContentSection = void 0;
    var a = n(111),
        r = o(a),
        i = n(112),
        s = o(i);
    t.ContentSection = r.default, t.TitleSection = s.default
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = n(2),
        r = o(a);
    r.default.filter("capitalize", function(e) {
        var t = e.trim().split(" ");
        return t = t.map(function(e) {
            return e[0].toUpperCase() + e.slice(1)
        }), t.join(" ")
    }), r.default.filter("dashToSpace", function(e) {
        return e.trim().replace(/-/g, " ")
    }), r.default.filter("camelToSpace", function(e) {
        return e.trim().replace(/([A-Z])/g, " $1")
    })
},
function(e, t) {
    "use strict";

    function n(e) {
        var t = [],
            n = function e(n) {
                n.forEach(function(n) {
                    "layout" === n.type ? e(n.children) : "page" === n.type && t.push(n)
                })
            };
        return n(e), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.filterRoutes = n
}, , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {},
function(e, t) {
    e.exports = {
        __content: "<p>I am Rosh Aubrey Asares, a solution-driven Full-Stack Web Developer with a strong foundation in both back-end and front-end technologies. Currently pursuing a Bachelor of Science in Computer Science at the University of Mindanao, I am expected to graduate in 2024. My thesis focuses on enhancing convolutional neural networks with residual learning frameworks for dog breed classification, utilizing Python to push the boundaries of machine learning.My technical expertise includes proficiency in PHP programming, particularly with the Laravel framework, as well as a solid understanding of web technologies such as HTML, CSS, JavaScript, jQuery, and Bootstrap. I pride myself on writing clean, efficient, and scalable code, ensuring the applications I develop are maintainable and user-friendly. During my internship at the Commission on Higher Education Region XI, I improved the institution's Human Resources Information System to meet their specific objectives, employing a combination of PHP and SQL for robust data management. More recently, as a Full-Stack Web Developer at the Davao Institute of Technical Education, I led the development of an Integrated Human Resources and Student Information System (HRIS-SIS), enhancing operational efficiency through innovative solutions.I possess strong interpersonal and problem-solving skills, which allow me to work effectively in collaborative environments. My proficiency in Microsoft Office tools further complements my technical abilities, making me a versatile team member.</p>\n"
    }
},
function(e, t) {
    e.exports = {
        name: "Inventory Management System",
        repo: "https://github.com/Talpiie",
        avatar: "WHAT",
        __content: '<p>An Inventory Management System (IMS) is an essential tool that facilitates the efficient management of inventory within a business. This system encompasses a variety of functions and components designed to track stock levels, manage orders, and streamline processes, ultimately enhancing operational efficiency. In today’s fast-paced market, an effective IMS is crucial for businesses aiming to maintain a competitive edge.</p>\n <p>At its core, an Inventory Management System offers robust inventory tracking capabilities. This feature allows businesses to maintain real-time records of stock levels, orders, sales, and deliveries. By providing accurate and up-to-date information, businesses can prevent issues such as overstocking, which ties up capital, and stockouts, which can lead to lost sales and dissatisfied customers. An efficient IMS often includes automated stock management tools that monitor inventory levels and trigger reordering processes when stock falls below predetermined thresholds.</p>\n<p>Another critical function of an IMS is order management. This includes the handling of purchase orders, sales orders, and returns. By streamlining these processes, an IMS ensures that inventory levels are updated accurately and promptly, minimizing the risk of discrepancies. Additionally, effective supplier management is a key component of an IMS, maintaining vital information about suppliers such as contact details, order history, and payment terms. This helps businesses maintain strong relationships with their suppliers and ensures timely procurement of goods.</p>\n<p>Another critical function of an IMS is order management. This includes the handling of purchase orders, sales orders, and returns. By streamlining these processes, an IMS ensures that inventory levels are updated accurately and promptly, minimizing the risk of discrepancies. Additionally, effective supplier management is a key component of an IMS, maintaining vital information about suppliers such as contact details, order history, and payment terms. This helps businesses maintain strong relationships with their suppliers and ensures timely procurement of goods.</p>\n\n<p>Front end: HTML / CSS / JavaScript / JQuery</p>\n<p>Back end: PHP / JavaScript / SQL / MySQL</p>'
    }
},
function(e, t) {
    e.exports = {
        name: "Dog breed Classification System",
        repo: "https://github.com/Talpiie/Dog-Breed-Classification",
        avatar: "DBCS",
        __content: '<p> Dog breed classification is the process of identifying and categorizing dogs into distinct breeds based on their physical characteristics, behavior, and genetic lineage. This classification system serves various purposes, including aiding in breeding, training, health assessments, and enhancing communication between pet owners, veterinarians, and breeders. </p>\n<p>ResNet-152 v2 leverages the power of deep learning, particularly convolutional neural networks (CNNs), to accurately identify dog breeds from images. ResNet-152 v2, an advanced variant of the Residual Network architecture, is particularly effective for image classification tasks due to its deep layers and residual connections, which help to mitigate issues such as vanishing gradients.</p>\n<p>Using ResNet-152 v2 for dog breed classification represents a cutting-edge approach in the field of machine learning and computer vision. Its architecture and advanced training techniques offer significant advantages, making it an excellent choice for developing an accurate and efficient dog breed identification system. Whether for veterinary use, animal shelters, or pet owners, this technology can greatly enhance the process of recognizing and understanding different dog breeds.</p>\n\n<p>RESNET 152 V2 - PYTHON - VSCODE</p>'
    }
}, , , ,
function(e, t, n) {
    n(81);
    var o = n(1)(n(22), n(125), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    var o = n(1)(n(25), n(128), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(79);
    var o = n(1)(n(27), n(123), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(90);
    var o = n(1)(n(28), n(132), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(80);
    var o = n(1)(n(29), n(124), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(91);
    var o = n(1)(n(30), n(133), "data-v-7ce42aa0", null);
    e.exports = o.exports
},
function(e, t, n) {
    n(89);
    var o = n(1)(n(31), n(131), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(77);
    var o = n(1)(n(32), n(121), "data-v-24870d56", null);
    e.exports = o.exports
},
function(e, t, n) {
    n(95);
    var o = n(1)(n(33), n(134), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(75);
    var o = n(1)(n(34), n(120), null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(78);
    var o = n(1)(n(35), n(122), "data-v-2bdb4a58", null);
    e.exports = o.exports
},
function(e, t, n) {
    n(86);
    var o = n(1)(n(36), null, null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(93);
    var o = n(1)(n(37), null, null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(84);
    var o = n(1)(n(38), null, null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(76);
    var o = n(1)(n(39), null, null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(85);
    var o = n(1)(n(40), null, null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(94);
    var o = n(1)(n(41), null, null, null);
    e.exports = o.exports
},
function(e, t, n) {
    n(92);
    var o = n(1)(n(42), null, null, null);
    e.exports = o.exports
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "section-content bg-standard"
            }, [n("div", {
                staticClass: "content"
            }, [n("header", {
                staticClass: "project-header"
            }, [n("div", {
                staticClass: "project-avatar"
            }, [e.previousProject ? n("router-link", {
                staticClass: "project-nav previous",
                attrs: {
                    to: "/projetos/" + e.previousProject
                }
            }, [n("i", {
                staticClass: "icn-arrow-left"
            })]) : e._e(), e._v(" "), n("i", {
                class: ["avatar", e.currentProject.avatar]
            }), e._v(" "), e.nextProject ? n("router-link", {
                staticClass: "project-nav next",
                attrs: {
                    to: "/projetos/" + e.nextProject
                }
            }, [n("i", {
                staticClass: "icn-arrow-right"
            })]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "project-label"
            }, [n("h1", {
                staticClass: "label"
            }, [e._v(e._s(e._f("capitalize")(e.currentProject.name)))])]), e._v(" "), e.currentProject.platforms ? n("div", {
                staticClass: "project-platforms"
            }, [n("ul", {
                staticClass: "project-platforms-icons l-flex"
            }, e._l(e.currentProject.platforms, function(e, t) {
                return n("li", {
                    staticClass: "project-platform-icon"
                }, [n("icon-link", {
                    staticClass: "colors-foreground",
                    attrs: {
                        icon: t,
                        to: e
                    }
                })], 1)
            }))]) : e._e()]), e._v(" "), n("div", {
                class: ["wrapper-description", e.scrollShadowState]
            }, [n("div", {
                staticClass: "shadow-top"
            }), e._v(" "), n("div", {
                staticClass: "project-description",
                domProps: {
                    innerHTML: e._s(e.currentProject.__content)
                },
                on: {
                    scroll: e.toggleScrollShadow
                }
            }), e._v(" "), n("div", {
                staticClass: "shadow-bottom"
            })]), e._v(" "), n("div", {
                staticClass: "project-controls colors-accent"
            }, [n("div", {
                staticClass: "project-control"
            }, [n("floating-button", [n("a", {
                attrs: {
                    href: e.currentProject.repo,
                    target: "_blank"
                }
            }, [e._v("See on Github")])])], 1)])])])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement;
            e._self._c || t;
            return e._m(0, !1, !1)
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "section-title bg-primary"
            }, [n("header", {
                staticClass: "wrapper-title"
            }, [n("h1", {
                staticClass: "title"
            }, [e._v("Contact")])])])
        }]
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "section-title bg-primary"
            }, [n("header", {
                staticClass: "wrapper-title"
            }, [n("h1", {
                staticClass: "title"
            }, [e._v("Projects")]), e._v(" "), n("ul", {
                staticClass: "project-links"
            }, e._l(e.projects, function(t) {
                return n("li", {
                    staticClass: "project-link"
                }, [n("router-link", {
                    attrs: {
                        to: "/projetos/" + t
                    }
                }, [e._v("\n          " + e._s(e._f("capitalize")(e._f("camelToSpace")(t))) + "\n        ")])], 1)
            }))])])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("split-layout-transition", [n("main", {
                staticClass: "collapsed container colors-foreground site-main"
            }, [n("header", {
                staticClass: "mobile-header"
            }, [n("div", {
                staticClass: "contents"
            }, [n("span", {
                staticClass: "page-title type-decorative"
            }, [e._v("\n          " + e._s(e._f("capitalize")(e._f("dashToSpace")(e.$route.name))) + "\n        ")])]), e._v(" "), n("menu-overlay", {
                attrs: {
                    isActive: e.isNavActive,
                    isAbsolute: !1
                }
            })], 1), e._v(" "), n("section", {
                class: ["left-column xmedium-6 columns", {
                    "fade-out": e.isNavActive
                }]
            }, [n("menu-overlay", {
                attrs: {
                    isActive: e.isNavActive,
                    isAbsolute: !0
                }
            }), e._v(" "), n("div", {
                staticClass: "contents small-12 columns"
            }, [n("router-view", {
                attrs: {
                    name: "leftColumn"
                }
            })], 1)], 1), e._v(" "), n("section", {
                class: ["right-column small-12 xmedium-6 columns", {
                    "fade-out": e.isNavActive
                }]
            }, [n(e.transitionName, {
                tag: "component"
            }, [n("router-view", {
                key: e.$route.fullPath,
                attrs: {
                    name: "rightColumn"
                }
            })], 1)], 1)])])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "section-content bg-standard"
            }, [n("div", {
                staticClass: "content"
            }, [e._m(0, !1, !1), e._v(" "), n("div", {
                class: ["wrapper-text", e.scrollShadowState]
            }, [n("div", {
                staticClass: "shadow-top"
            }), e._v(" "), n("div", {
                staticClass: "text-body typography",
                domProps: {
                    innerHTML: e._s(e.aboutMeText.__content)
                },
                on: {
                    scroll: e.toggleScrollShadow
                }
            }), e._v(" "), n("div", {
                staticClass: "shadow-bottom"
            })])])])
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("header", {
                staticClass: "section-header"
            }, [n("i", {
                staticClass: "site-avatar"
            })])
        }]
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("button", {
                class: [{
                    "is-active": e.isActive
                }, "c-hamburger", "c-hamburger--htx"],
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.emitChange()
                    }
                }
            }, [n("span", {
                staticClass: "c-hamburger-bars"
            })])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["root-container", e.layoutBackground]
            }, [n("div", {
                class: ["wrapper-nav-trigger", e.layoutColors]
            }, [n("ham-button", {
                attrs: {
                    isActive: e.isNavActive
                },
                model: {
                    value: e.isNavActive,
                    callback: function(t) {
                        e.isNavActive = t
                    },
                    expression: "isNavActive"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "wrapper-page"
            }, [n("router-view", {
                attrs: {
                    isNavActive: e.isNavActive,
                    layoutColors: e.layoutColors
                }
            })], 1)])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("a", {
                staticClass: "icon-link",
                attrs: {
                    href: e.to,
                    target: "_blank"
                }
            }, [n("i", {
                class: e.iconClass
            })])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("default-layout-transition", [n("div", {
                class: ["container", e.layoutColors]
            }, [n("menu-overlay", {
                attrs: {
                    "is-active": e.isNavActive
                }
            }), e._v(" "), n("jump-transition", [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isNavActive,
                    expression: "!isNavActive"
                }],
                staticClass: "collapse expanded row"
            }, [n("router-view")], 1)])], 1)])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("nav", {
                class: [{
                    "is-active": e.isActive,
                    "is-absolute": e.isAbsolute
                }, "menu-overlay"]
            }, [n("ul", {
                staticClass: "menu-overlay-entries"
            }, e._l(e.pageRoutes, function(t) {
                return t.name !== e.currentRoute ? n("li", {
                    staticClass: "menu-overlay-entry",
                    on: {
                        click: function(t) {
                            e.toggleNav()
                        }
                    }
                }, [n("router-link", {
                    staticClass: "entry-link",
                    attrs: {
                        to: {
                            name: t.name
                        }
                    }
                }, [e._v("\n        " + e._s(e._f("capitalize")(t.name)) + "\n      ")])], 1) : e._e()
            }))])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("button", {
                staticClass: "floating-button",
                attrs: {
                    type: "button"
                }
            }, [n("span", {
                staticClass: "label"
            }, [e._t("default")], 2)])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "section-content bg-standard"
            }, [n("div", {
                staticClass: "content"
            }, [n("div", {
                staticClass: "contact-info l-flex-column align-center"
            }, [n("span", [e._v("Rosh Aubrey G. Asares")]), e._v(" "), n("span", [e._v("Talpiie, Ajin Grey")]), e._v(" "), n("span", [e._v("Email: asaresrosh@gmail.com")]), e._v(" "), n("span", [e._v("Globe: +63 905-5128-052")]), e._v(" "), n("span", [e._v("DITO: +63 991-0597-993")])])])])
        },
        staticRenderFns: []
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement;
            e._self._c || t;
            return e._m(0, !1, !1)
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "full-width row align-center"
            }, [n("div", {
                staticClass: "wrapper-404 column small-12"
            }, [n("h1", {
                staticClass: "err-code type-decorative"
            }, [e._v("Error 404")]), e._v(" "), n("h2", {
                staticClass: "err-msg t-lighter"
            }, [e._v("The page you were looking for could not be found.")])])])
        }]
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement;
            e._self._c || t;
            return e._m(0, !1, !1)
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "section-title bg-primary"
            }, [n("header", {
                staticClass: "wrapper-title"
            }, [n("h1", {
                staticClass: "title"
            }, [e._v("About Me")])])])
        }]
    }
},
function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "full-width row align-center"
            }, [n("div", {
                staticClass: "wrapper-hero colors-accent column"
            }, [e._m(0, !1, !1), e._v(" "), n("div", {
                staticClass: "row column"
            }, [n("ul", {
                staticClass: "contact-links row align-center"
            }, e._l(e.contactLinks, function(e) {
                return n("li", {
                    staticClass: "contact-link"
                }, [n("icon-link", {
                    attrs: {
                        to: e.url + e.profile,
                        icon: e.icon
                    }
                })], 1)
            }))])])])
        },
        staticRenderFns: [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "site-header column small-12"
            }, [n("div", {
                staticClass: "row align-center align-top"
            }, [n("i", {
                staticClass: "A J"
            })]), e._v(" "), n("div", {
                staticClass: "row align-center"
            }, [n("h1", {
                staticClass: "site-caption"
            }, [e._v("Rosh Asares")])])])
        }]
    }
}
]);