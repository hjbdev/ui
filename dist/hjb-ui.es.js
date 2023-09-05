import { openBlock as c, createBlock as F, resolveDynamicComponent as G, withCtx as j, createTextVNode as je, createElementVNode as d, createElementBlock as v, normalizeClass as C, renderSlot as m, createCommentVNode as A, onMounted as Q, onUnmounted as De, computed as z, ref as L, withDirectives as ye, vShow as we, createVNode as H, Transition as le, unref as N, resolveComponent as Ke, toDisplayString as J, normalizeProps as Ee, guardReactiveProps as Ae, mergeProps as qe, cloneVNode as Je, h as ce, Fragment as se, inject as pe, provide as ve, watchEffect as ae, defineComponent as K, watch as ie, nextTick as W, toRaw as M, renderList as Ce, reactive as Z, TransitionGroup as Ge, getCurrentScope as Qe, onScopeDispose as Ye, readonly as Xe, shallowRef as Ze } from "vue";
const et = /* @__PURE__ */ je("Details "), tt = /* @__PURE__ */ d("span", { "aria-hidden": "true" }, "→", -1), eo = {
  name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, r) => (c(), F(G(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: j(() => [
        et,
        tt
      ]),
      _: 1
    }));
  }
}, R = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, nt = {}, rt = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, ot = { class: "flex" }, lt = /* @__PURE__ */ d("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ d("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ d("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
      "clip-rule": "evenodd"
    })
  ])
], -1), st = { class: "ml-3 flex-1" }, at = { class: "md:flex md:justify-between" }, it = { class: "text-sm text-red-800 dark:text-red-200" }, ut = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function dt(e, t) {
  return c(), v("div", rt, [
    d("div", ot, [
      lt,
      d("div", st, [
        e.$slots.title ? (c(), v("h3", {
          key: 0,
          class: C(["text-sm font-medium text-red-800 dark:text-red-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          m(e.$slots, "title")
        ], 2)) : A("", !0),
        d("div", at, [
          d("p", it, [
            m(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), v("p", ut, [
            m(e.$slots, "action")
          ])) : A("", !0)
        ])
      ])
    ])
  ]);
}
const to = /* @__PURE__ */ R(nt, [["render", dt]]), ct = {}, ft = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, pt = { class: "flex" }, vt = /* @__PURE__ */ d("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ d("svg", {
    class: "h-5 w-5 text-blue-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ d("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
      "clip-rule": "evenodd"
    })
  ])
], -1), mt = { class: "ml-3 flex-1" }, ht = { class: "md:flex md:justify-between" }, bt = { class: "text-sm text-blue-800 dark:text-blue-200" }, gt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function yt(e, t) {
  return c(), v("div", ft, [
    d("div", pt, [
      vt,
      d("div", mt, [
        e.$slots.title ? (c(), v("h3", {
          key: 0,
          class: C(["text-sm font-medium text-blue-800 dark:text-blue-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          m(e.$slots, "title")
        ], 2)) : A("", !0),
        d("div", ht, [
          d("p", bt, [
            m(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), v("p", gt, [
            m(e.$slots, "action")
          ])) : A("", !0)
        ])
      ])
    ])
  ]);
}
const no = /* @__PURE__ */ R(ct, [["render", yt]]), wt = {}, xt = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, $t = { class: "flex" }, _t = /* @__PURE__ */ d("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ d("svg", {
    class: "h-5 w-5 text-green-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ d("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
      "clip-rule": "evenodd"
    })
  ])
], -1), kt = { class: "ml-3 flex-1" }, St = { class: "md:flex md:justify-between" }, Ot = { class: "text-sm text-green-800 dark:text-green-200" }, zt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Lt(e, t) {
  return c(), v("div", xt, [
    d("div", $t, [
      _t,
      d("div", kt, [
        e.$slots.title ? (c(), v("h3", {
          key: 0,
          class: C(["text-sm font-medium text-green-800 dark:text-green-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          m(e.$slots, "title")
        ], 2)) : A("", !0),
        d("div", St, [
          d("p", Ot, [
            m(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), v("p", zt, [
            m(e.$slots, "action")
          ])) : A("", !0)
        ])
      ])
    ])
  ]);
}
const ro = /* @__PURE__ */ R(wt, [["render", Lt]]), jt = {}, Dt = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, Et = { class: "flex" }, At = /* @__PURE__ */ d("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ d("svg", {
    class: "h-5 w-5 text-yellow-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ d("path", {
      "fill-rule": "evenodd",
      d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Ct = { class: "ml-3 flex-1" }, Pt = { class: "md:flex md:justify-between" }, Tt = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, It = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Nt(e, t) {
  return c(), v("div", Dt, [
    d("div", Et, [
      At,
      d("div", Ct, [
        e.$slots.title ? (c(), v("h3", {
          key: 0,
          class: C(["text-sm font-medium text-yellow-800 dark:text-yellow-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          m(e.$slots, "title")
        ], 2)) : A("", !0),
        d("div", Pt, [
          d("p", Tt, [
            m(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), v("p", It, [
            m(e.$slots, "action")
          ])) : A("", !0)
        ])
      ])
    ])
  ]);
}
const oo = /* @__PURE__ */ R(jt, [["render", Nt]]), me = {
  name: "BaseButton",
  props: {
    size: {
      type: String,
      default: "medium"
    },
    as: {
      type: [String, Object],
      default: "button"
    }
  },
  setup(e) {
    return (t, r) => (c(), F(G(e.as), {
      class: C(["inline-flex items-center border border-transparent rounded-md font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2", {
        "px-1 py-0.5 text-xs": e.size === "tiny",
        "px-2 py-1 text-xs": e.size === "small",
        "px-3.5 py-1.5 text-sm": e.size === "medium",
        "px-3.5 py-1.5 text-base": e.size === "large"
      }])
    }, {
      default: j(() => [
        m(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, lo = {
  name: "PrimaryButton",
  setup(e) {
    return (t, r) => (c(), F(me, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: j(() => [
        m(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, so = {
  name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, r) => (c(), F(me, {
      type: e.type,
      class: "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
    }, {
      default: j(() => [
        m(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["type"]));
  }
}, ao = {
  name: "DangerButton",
  setup(e) {
    return (t, r) => (c(), F(me, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: j(() => [
        m(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Bt = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, Rt = { key: 0 }, io = {
  name: "Card",
  props: {
    flush: Boolean
  },
  setup(e) {
    return (t, r) => (c(), v("div", {
      class: C(["bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-zinc-900 dark:text-zinc-100", {
        "p-6": !e.flush
      }])
    }, [
      t.$slots.header || t.$slots.extra ? (c(), v("div", Bt, [
        d("div", null, [
          m(t.$slots, "header")
        ]),
        t.$slots.extra ? (c(), v("div", Rt, [
          m(t.$slots, "extra")
        ])) : A("", !0)
      ])) : A("", !0),
      m(t.$slots, "default")
    ], 2));
  }
}, Ft = {}, Mt = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function Vt(e, t) {
  return c(), v("h3", Mt, [
    m(e.$slots, "default")
  ]);
}
const uo = /* @__PURE__ */ R(Ft, [["render", Vt]]), Ht = { class: "relative" }, co = {
  name: "Dropdown",
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white dark:bg-zinc-700"
    },
    bottom: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = (s) => {
      l.value && s.key === "Escape" && (l.value = !1);
    };
    Q(() => document.addEventListener("keydown", r)), De(() => document.removeEventListener("keydown", r));
    const o = z(() => ({
      48: "w-48"
    })[t.width.toString()]), n = z(() => {
      const s = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${s}-left left-0` : t.align === "right" ? `origin-${s}-right right-0` : `origin-${s}`;
    }), l = L(!1);
    return (s, u) => (c(), v("div", Ht, [
      d("div", {
        onClick: u[0] || (u[0] = (f) => l.value = !l.value)
      }, [
        m(s.$slots, "trigger")
      ]),
      ye(d("div", {
        class: "fixed inset-0 z-40",
        onClick: u[1] || (u[1] = (f) => l.value = !1)
      }, null, 512), [
        [we, l.value]
      ]),
      H(le, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: j(() => [
          ye(d("div", {
            class: C(["absolute z-50 mt-2 rounded-md shadow-lg", [N(o), N(n), t.bottom ? "bottom-full" : ""]]),
            style: { display: "none" },
            onClick: u[2] || (u[2] = (f) => l.value = !1)
          }, [
            d("div", {
              class: C(["rounded-md ring-1 ring-black ring-opacity-5", e.contentClasses])
            }, [
              m(s.$slots, "content")
            ], 2)
          ], 2), [
            [we, l.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, fo = {
  name: "DropdownLink",
  props: {
    as: {
      type: [Object, String],
      default: "a"
    },
    href: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    return (t, r) => {
      const o = Ke("Link");
      return c(), F(o, {
        href: e.href,
        class: "block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
      }, {
        default: j(() => [
          m(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["href"]);
    };
  }
}, Ut = {}, Wt = { class: "font-semibold text-3xl leading-tight" };
function Kt(e, t) {
  return c(), v("h1", Wt, [
    m(e.$slots, "default")
  ]);
}
const po = /* @__PURE__ */ R(Ut, [["render", Kt]]), qt = {}, Jt = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function Gt(e, t) {
  return c(), v("h2", Jt, [
    m(e.$slots, "default")
  ]);
}
const vo = /* @__PURE__ */ R(qt, [["render", Gt]]), Qt = {}, Yt = { class: "text-xl tracking-tight dark:text-white" };
function Xt(e, t) {
  return c(), v("h2", Yt, [
    m(e.$slots, "default")
  ]);
}
const mo = /* @__PURE__ */ R(Qt, [["render", Xt]]), re = {
  id: {
    type: String,
    required: !1,
    default: ""
  },
  name: {
    type: String,
    required: !1,
    default: ""
  },
  label: {
    type: String,
    required: !1,
    default: null
  },
  helpText: {
    type: String,
    required: !1,
    default: null
  },
  error: {
    type: String,
    required: !1,
    default: null
  }
}, Zt = ["for"], en = { class: "relative mt-1" }, tn = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, nn = /* @__PURE__ */ d("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ d("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), rn = [
  nn
], on = ["id"], ln = ["id"], Pe = {
  name: "InputLayout",
  props: {
    ...re
  },
  setup(e) {
    return (t, r) => (c(), v("div", null, [
      t.label ? (c(), v("label", {
        key: 0,
        for: t.id,
        class: "block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      }, J(t.label), 9, Zt)) : A("", !0),
      d("div", en, [
        m(t.$slots, "default"),
        t.error ? (c(), v("div", tn, rn)) : A("", !0)
      ]),
      t.helpText && !t.error ? (c(), v("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, J(t.helpText), 9, on)) : t.error ? (c(), v("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, J(t.error), 9, ln)) : A("", !0)
    ]));
  }
}, sn = ["name", "id", "aria-describedby"], an = {
  inheritAttrs: !1
}, ho = /* @__PURE__ */ Object.assign(an, {
  name: "Input",
  props: {
    ...re
  },
  setup(e) {
    return (t, r) => (c(), F(Pe, Ee(Ae(t.$props)), {
      default: j(() => [
        d("input", qe(t.$attrs, {
          name: t.name,
          id: t.id,
          class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
            "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
            "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
          }],
          "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
        }), null, 16, sn)
      ]),
      _: 1
    }, 16));
  }
});
function V(e, t, ...r) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...r) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, V), o;
}
var fe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(fe || {}), un = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(un || {});
function q({ visible: e = !0, features: t = 0, ourProps: r, theirProps: o, ...n }) {
  var l;
  let s = Ie(o, r), u = Object.assign(n, { props: s });
  if (e || t & 2 && s.static)
    return de(u);
  if (t & 1) {
    let f = (l = s.unmount) == null || l ? 0 : 1;
    return V(f, { 0() {
      return null;
    }, 1() {
      return de({ ...n, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return de(u);
}
function de({ props: e, attrs: t, slots: r, slot: o, name: n }) {
  var l, s;
  let { as: u, ...f } = Ne(e, ["unmount", "static"]), a = (l = r.default) == null ? void 0 : l.call(r, o), i = {};
  if (o) {
    let y = !1, S = [];
    for (let [_, $] of Object.entries(o))
      typeof $ == "boolean" && (y = !0), $ === !0 && S.push(_);
    y && (i["data-headlessui-state"] = S.join(" "));
  }
  if (u === "template") {
    if (a = Te(a ?? []), Object.keys(f).length > 0 || Object.keys(t).length > 0) {
      let [y, ...S] = a ?? [];
      if (!cn(y) || S.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(f).concat(Object.keys(t)).map((w) => w.trim()).filter((w, P, h) => h.indexOf(w) === P).sort((w, P) => w.localeCompare(P)).map((w) => `  - ${w}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((w) => `  - ${w}`).join(`
`)].join(`
`));
      let _ = Ie((s = y.props) != null ? s : {}, f), $ = Je(y, _);
      for (let w in _)
        w.startsWith("on") && ($.props || ($.props = {}), $.props[w] = _[w]);
      return $;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return ce(u, Object.assign({}, f, i), { default: () => a });
}
function Te(e) {
  return e.flatMap((t) => t.type === se ? Te(t.children) : [t]);
}
function Ie(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let o of e)
    for (let n in o)
      n.startsWith("on") && typeof o[n] == "function" ? (r[n] != null || (r[n] = []), r[n].push(o[n])) : t[n] = o[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((o) => [o, void 0])));
  for (let o in r)
    Object.assign(t, { [o](n, ...l) {
      let s = r[o];
      for (let u of s) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...l);
      }
    } });
  return t;
}
function dn(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Ne(e, t = []) {
  let r = Object.assign({}, e);
  for (let o of t)
    o in r && delete r[o];
  return r;
}
function cn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let fn = 0;
function pn() {
  return ++fn;
}
function ue() {
  return pn();
}
var E = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(E || {});
function vn(e) {
  throw new Error("Unexpected object: " + e);
}
var B = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(B || {});
function mn(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o ?? -1, l = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex((s) => !t.resolveDisabled(s));
      case 1: {
        let s = r.slice().reverse().findIndex((u, f, a) => n !== -1 && a.length - f - 1 >= n ? !1 : !t.resolveDisabled(u));
        return s === -1 ? s : r.length - 1 - s;
      }
      case 2:
        return r.findIndex((s, u) => u <= n ? !1 : !t.resolveDisabled(s));
      case 3: {
        let s = r.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return s === -1 ? s : r.length - 1 - s;
      }
      case 4:
        return r.findIndex((s) => t.resolveId(s) === e.id);
      case 5:
        return null;
      default:
        vn(e);
    }
  })();
  return l === -1 ? o : l;
}
function O(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Be = Symbol("Context");
var Y = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Y || {});
function hn() {
  return pe(Be, null);
}
function bn(e) {
  ve(Be, e);
}
function xe(e, t) {
  if (e)
    return e;
  let r = t ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function gn(e, t) {
  let r = L(xe(e.value.type, e.value.as));
  return Q(() => {
    r.value = xe(e.value.type, e.value.as);
  }), ae(() => {
    var o;
    r.value || O(t) && O(t) instanceof HTMLButtonElement && !((o = O(t)) != null && o.hasAttribute("type")) && (r.value = "button");
  }), r;
}
var yn = Object.defineProperty, wn = (e, t, r) => t in e ? yn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $e = (e, t, r) => (wn(e, typeof t != "symbol" ? t + "" : t, r), r);
class xn {
  constructor() {
    $e(this, "current", this.detect()), $e(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let he = new xn();
function $n(e) {
  if (he.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = O(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let _e = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var _n = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(_n || {}), kn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(kn || {}), Sn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Sn || {}), be = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(be || {});
function Re(e, t = 0) {
  var r;
  return e === ((r = $n(e)) == null ? void 0 : r.body) ? !1 : V(t, { 0() {
    return e.matches(_e);
  }, 1() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(_e))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var On = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(On || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function zn(e, t = (r) => r) {
  return e.slice().sort((r, o) => {
    let n = t(r), l = t(o);
    if (n === null || l === null)
      return 0;
    let s = n.compareDocumentPosition(l);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ee(e, t, r) {
  he.isServer || ae((o) => {
    document.addEventListener(e, t, r), o(() => document.removeEventListener(e, t, r));
  });
}
function Ln(e, t, r) {
  he.isServer || ae((o) => {
    window.addEventListener(e, t, r), o(() => window.removeEventListener(e, t, r));
  });
}
function jn(e, t, r = z(() => !0)) {
  function o(l, s) {
    if (!r.value || l.defaultPrevented)
      return;
    let u = s(l);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let f = function a(i) {
      return typeof i == "function" ? a(i()) : Array.isArray(i) || i instanceof Set ? i : [i];
    }(e);
    for (let a of f) {
      if (a === null)
        continue;
      let i = a instanceof HTMLElement ? a : O(a);
      if (i != null && i.contains(u) || l.composed && l.composedPath().includes(i))
        return;
    }
    return !Re(u, be.Loose) && u.tabIndex !== -1 && l.preventDefault(), t(l, u);
  }
  let n = L(null);
  ee("pointerdown", (l) => {
    var s, u;
    r.value && (n.value = ((u = (s = l.composedPath) == null ? void 0 : s.call(l)) == null ? void 0 : u[0]) || l.target);
  }, !0), ee("mousedown", (l) => {
    var s, u;
    r.value && (n.value = ((u = (s = l.composedPath) == null ? void 0 : s.call(l)) == null ? void 0 : u[0]) || l.target);
  }, !0), ee("click", (l) => {
    n.value && (o(l, () => n.value), n.value = null);
  }, !0), ee("touchend", (l) => o(l, () => l.target instanceof HTMLElement ? l.target : null), !0), Ln("blur", (l) => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Fe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Fe || {});
let Dn = K({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: o, ...n } = e, l = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return q({ ourProps: l, theirProps: n, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Me(e = {}, t = null, r = []) {
  for (let [o, n] of Object.entries(e))
    He(r, Ve(t, o), n);
  return r;
}
function Ve(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function He(e, t, r) {
  if (Array.isArray(r))
    for (let [o, n] of r.entries())
      He(e, Ve(t, o.toString()), n);
  else
    r instanceof Date ? e.push([t, r.toISOString()]) : typeof r == "boolean" ? e.push([t, r ? "1" : "0"]) : typeof r == "string" ? e.push([t, r]) : typeof r == "number" ? e.push([t, `${r}`]) : r == null ? e.push([t, ""]) : Me(r, t, e);
}
function En(e, t, r) {
  let o = L(r == null ? void 0 : r.value), n = z(() => e.value !== void 0);
  return [z(() => n.value ? e.value : o.value), function(l) {
    return n.value || (o.value = l), t == null ? void 0 : t(l);
  }];
}
function ke(e) {
  return [e.screenX, e.screenY];
}
function An() {
  let e = L([-1, -1]);
  return { wasMoved(t) {
    let r = ke(t);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(t) {
    e.value = ke(t);
  } };
}
let Se = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Oe(e) {
  var t, r;
  let o = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return o;
  let l = !1;
  for (let u of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), l = !0;
  let s = l ? (r = n.innerText) != null ? r : "" : o;
  return Se.test(s) && (s = s.replace(Se, "")), s;
}
function Cn(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let o = r.split(" ").map((n) => {
      let l = document.getElementById(n);
      if (l) {
        let s = l.getAttribute("aria-label");
        return typeof s == "string" ? s.trim() : Oe(l).trim();
      }
      return null;
    }).filter(Boolean);
    if (o.length > 0)
      return o.join(", ");
  }
  return Oe(e).trim();
}
function Pn(e) {
  let t = L(""), r = L("");
  return () => {
    let o = O(e);
    if (!o)
      return "";
    let n = o.innerText;
    if (t.value === n)
      return r.value;
    let l = Cn(o).trim().toLowerCase();
    return t.value = n, r.value = l, l;
  };
}
function Tn(e, t) {
  return e === t;
}
var In = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(In || {}), Nn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Nn || {}), Bn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Bn || {});
function Rn(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Ue = Symbol("ListboxContext");
function X(e) {
  let t = pe(Ue, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, X), r;
  }
  return t;
}
let Fn = K({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Tn }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: r, emit: o }) {
  let n = L(1), l = L(null), s = L(null), u = L(null), f = L([]), a = L(""), i = L(null), y = L(1);
  function S(p = (b) => b) {
    let b = i.value !== null ? f.value[i.value] : null, x = zn(p(f.value.slice()), (D) => O(D.dataRef.domRef)), k = b ? x.indexOf(b) : null;
    return k === -1 && (k = null), { options: x, activeOptionIndex: k };
  }
  let _ = z(() => e.multiple ? 1 : 0), [$, w] = En(z(() => e.modelValue), (p) => o("update:modelValue", p), z(() => e.defaultValue)), P = z(() => $.value === void 0 ? V(_.value, { 1: [], 0: void 0 }) : $.value), h = { listboxState: n, value: P, mode: _, compare(p, b) {
    if (typeof e.by == "string") {
      let x = e.by;
      return (p == null ? void 0 : p[x]) === (b == null ? void 0 : b[x]);
    }
    return e.by(p, b);
  }, orientation: z(() => e.horizontal ? "horizontal" : "vertical"), labelRef: l, buttonRef: s, optionsRef: u, disabled: z(() => e.disabled), options: f, searchQuery: a, activeOptionIndex: i, activationTrigger: y, closeListbox() {
    e.disabled || n.value !== 1 && (n.value = 1, i.value = null);
  }, openListbox() {
    e.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(p, b, x) {
    if (e.disabled || n.value === 1)
      return;
    let k = S(), D = mn(p === B.Specific ? { focus: B.Specific, id: b } : { focus: p }, { resolveItems: () => k.options, resolveActiveIndex: () => k.activeOptionIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    a.value = "", i.value = D, y.value = x ?? 1, f.value = k.options;
  }, search(p) {
    if (e.disabled || n.value === 1)
      return;
    let b = a.value !== "" ? 0 : 1;
    a.value += p.toLowerCase();
    let x = (i.value !== null ? f.value.slice(i.value + b).concat(f.value.slice(0, i.value + b)) : f.value).find((D) => D.dataRef.textValue.startsWith(a.value) && !D.dataRef.disabled), k = x ? f.value.indexOf(x) : -1;
    k === -1 || k === i.value || (i.value = k, y.value = 1);
  }, clearSearch() {
    e.disabled || n.value !== 1 && a.value !== "" && (a.value = "");
  }, registerOption(p, b) {
    let x = S((k) => [...k, { id: p, dataRef: b }]);
    f.value = x.options, i.value = x.activeOptionIndex;
  }, unregisterOption(p) {
    let b = S((x) => {
      let k = x.findIndex((D) => D.id === p);
      return k !== -1 && x.splice(k, 1), x;
    });
    f.value = b.options, i.value = b.activeOptionIndex, y.value = 1;
  }, theirOnChange(p) {
    e.disabled || w(p);
  }, select(p) {
    e.disabled || w(V(_.value, { 0: () => p, 1: () => {
      let b = M(h.value.value).slice(), x = M(p), k = b.findIndex((D) => h.compare(x, M(D)));
      return k === -1 ? b.push(x) : b.splice(k, 1), b;
    } }));
  } };
  jn([s, u], (p, b) => {
    var x;
    h.closeListbox(), Re(b, be.Loose) || (p.preventDefault(), (x = O(s)) == null || x.focus());
  }, z(() => n.value === 0)), ve(Ue, h), bn(z(() => V(n.value, { 0: Y.Open, 1: Y.Closed })));
  let T = z(() => {
    var p;
    return (p = O(s)) == null ? void 0 : p.closest("form");
  });
  return Q(() => {
    ie([T], () => {
      if (!T.value || e.defaultValue === void 0)
        return;
      function p() {
        h.theirOnChange(e.defaultValue);
      }
      return T.value.addEventListener("reset", p), () => {
        var b;
        (b = T.value) == null || b.removeEventListener("reset", p);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: p, modelValue: b, disabled: x, form: k, ...D } = e, g = { open: n.value === 0, disabled: x, value: P.value };
    return ce(se, [...p != null && P.value != null ? Me({ [p]: P.value }).map(([I, U]) => ce(Dn, dn({ features: Fe.Hidden, key: I, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: k, name: I, value: U }))) : [], q({ ourProps: {}, theirProps: { ...r, ...Ne(D, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: g, slots: t, attrs: r, name: "Listbox" })]);
  };
} });
K({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${ue()}` } }, setup(e, { attrs: t, slots: r }) {
  let o = X("ListboxLabel");
  function n() {
    var l;
    (l = O(o.buttonRef)) == null || l.focus({ preventScroll: !0 });
  }
  return () => {
    let l = { open: o.listboxState.value === 0, disabled: o.disabled.value }, { id: s, ...u } = e, f = { id: s, ref: o.labelRef, onClick: n };
    return q({ ourProps: f, theirProps: u, slot: l, attrs: t, slots: r, name: "ListboxLabel" });
  };
} });
let Mn = K({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${ue()}` } }, setup(e, { attrs: t, slots: r, expose: o }) {
  let n = X("ListboxButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function l(a) {
    switch (a.key) {
      case E.Space:
      case E.Enter:
      case E.ArrowDown:
        a.preventDefault(), n.openListbox(), W(() => {
          var i;
          (i = O(n.optionsRef)) == null || i.focus({ preventScroll: !0 }), n.value.value || n.goToOption(B.First);
        });
        break;
      case E.ArrowUp:
        a.preventDefault(), n.openListbox(), W(() => {
          var i;
          (i = O(n.optionsRef)) == null || i.focus({ preventScroll: !0 }), n.value.value || n.goToOption(B.Last);
        });
        break;
    }
  }
  function s(a) {
    switch (a.key) {
      case E.Space:
        a.preventDefault();
        break;
    }
  }
  function u(a) {
    n.disabled.value || (n.listboxState.value === 0 ? (n.closeListbox(), W(() => {
      var i;
      return (i = O(n.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })) : (a.preventDefault(), n.openListbox(), Rn(() => {
      var i;
      return (i = O(n.optionsRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })));
  }
  let f = gn(z(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var a, i;
    let y = { open: n.listboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: S, ..._ } = e, $ = { ref: n.buttonRef, id: S, type: f.value, "aria-haspopup": "listbox", "aria-controls": (a = O(n.optionsRef)) == null ? void 0 : a.id, "aria-expanded": n.listboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(i = O(n.labelRef)) == null ? void 0 : i.id, S].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: l, onKeyup: s, onClick: u };
    return q({ ourProps: $, theirProps: _, slot: y, attrs: t, slots: r, name: "ListboxButton" });
  };
} }), Vn = K({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${ue()}` } }, setup(e, { attrs: t, slots: r, expose: o }) {
  let n = X("ListboxOptions"), l = L(null);
  o({ el: n.optionsRef, $el: n.optionsRef });
  function s(a) {
    switch (l.value && clearTimeout(l.value), a.key) {
      case E.Space:
        if (n.searchQuery.value !== "")
          return a.preventDefault(), a.stopPropagation(), n.search(a.key);
      case E.Enter:
        if (a.preventDefault(), a.stopPropagation(), n.activeOptionIndex.value !== null) {
          let i = n.options.value[n.activeOptionIndex.value];
          n.select(i.dataRef.value);
        }
        n.mode.value === 0 && (n.closeListbox(), W(() => {
          var i;
          return (i = O(n.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
        }));
        break;
      case V(n.orientation.value, { vertical: E.ArrowDown, horizontal: E.ArrowRight }):
        return a.preventDefault(), a.stopPropagation(), n.goToOption(B.Next);
      case V(n.orientation.value, { vertical: E.ArrowUp, horizontal: E.ArrowLeft }):
        return a.preventDefault(), a.stopPropagation(), n.goToOption(B.Previous);
      case E.Home:
      case E.PageUp:
        return a.preventDefault(), a.stopPropagation(), n.goToOption(B.First);
      case E.End:
      case E.PageDown:
        return a.preventDefault(), a.stopPropagation(), n.goToOption(B.Last);
      case E.Escape:
        a.preventDefault(), a.stopPropagation(), n.closeListbox(), W(() => {
          var i;
          return (i = O(n.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        break;
      case E.Tab:
        a.preventDefault(), a.stopPropagation();
        break;
      default:
        a.key.length === 1 && (n.search(a.key), l.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  let u = hn(), f = z(() => u !== null ? (u.value & Y.Open) === Y.Open : n.listboxState.value === 0);
  return () => {
    var a, i, y, S;
    let _ = { open: n.listboxState.value === 0 }, { id: $, ...w } = e, P = { "aria-activedescendant": n.activeOptionIndex.value === null || (a = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : a.id, "aria-multiselectable": n.mode.value === 1 ? !0 : void 0, "aria-labelledby": (S = (i = O(n.labelRef)) == null ? void 0 : i.id) != null ? S : (y = O(n.buttonRef)) == null ? void 0 : y.id, "aria-orientation": n.orientation.value, id: $, onKeydown: s, role: "listbox", tabIndex: 0, ref: n.optionsRef };
    return q({ ourProps: P, theirProps: w, slot: _, attrs: t, slots: r, features: fe.RenderStrategy | fe.Static, visible: f.value, name: "ListboxOptions" });
  };
} }), Hn = K({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${ue()}` } }, setup(e, { slots: t, attrs: r, expose: o }) {
  let n = X("ListboxOption"), l = L(null);
  o({ el: l, $el: l });
  let s = z(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === e.id : !1), u = z(() => V(n.mode.value, { 0: () => n.compare(M(n.value.value), M(e.value)), 1: () => M(n.value.value).some((h) => n.compare(M(h), M(e.value))) })), f = z(() => V(n.mode.value, { 1: () => {
    var h;
    let T = M(n.value.value);
    return ((h = n.options.value.find((p) => T.some((b) => n.compare(M(b), M(p.dataRef.value))))) == null ? void 0 : h.id) === e.id;
  }, 0: () => u.value })), a = Pn(l), i = z(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return a();
  }, domRef: l }));
  Q(() => n.registerOption(e.id, i)), De(() => n.unregisterOption(e.id)), Q(() => {
    ie([n.listboxState, u], () => {
      n.listboxState.value === 0 && u.value && V(n.mode.value, { 1: () => {
        f.value && n.goToOption(B.Specific, e.id);
      }, 0: () => {
        n.goToOption(B.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), ae(() => {
    n.listboxState.value === 0 && s.value && n.activationTrigger.value !== 0 && W(() => {
      var h, T;
      return (T = (h = O(l)) == null ? void 0 : h.scrollIntoView) == null ? void 0 : T.call(h, { block: "nearest" });
    });
  });
  function y(h) {
    if (e.disabled)
      return h.preventDefault();
    n.select(e.value), n.mode.value === 0 && (n.closeListbox(), W(() => {
      var T;
      return (T = O(n.buttonRef)) == null ? void 0 : T.focus({ preventScroll: !0 });
    }));
  }
  function S() {
    if (e.disabled)
      return n.goToOption(B.Nothing);
    n.goToOption(B.Specific, e.id);
  }
  let _ = An();
  function $(h) {
    _.update(h);
  }
  function w(h) {
    _.wasMoved(h) && (e.disabled || s.value || n.goToOption(B.Specific, e.id, 0));
  }
  function P(h) {
    _.wasMoved(h) && (e.disabled || s.value && n.goToOption(B.Nothing));
  }
  return () => {
    let { disabled: h } = e, T = { active: s.value, selected: u.value, disabled: h }, { id: p, value: b, disabled: x, ...k } = e, D = { id: p, ref: l, role: "option", tabIndex: h === !0 ? void 0 : -1, "aria-disabled": h === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onClick: y, onFocus: S, onPointerenter: $, onMouseenter: $, onPointermove: w, onMousemove: w, onPointerleave: P, onMouseleave: P };
    return q({ ourProps: D, theirProps: k, slot: T, attrs: r, slots: t, name: "ListboxOption" });
  };
} });
const Un = {}, Wn = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Kn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1), qn = [
  Kn
];
function Jn(e, t) {
  return c(), v("svg", Wn, qn);
}
const Gn = /* @__PURE__ */ R(Un, [["render", Jn]]), Qn = {};
function Yn(e, t) {
  return c(), F(le, {
    "enter-active-class": "transition ease-out duration-200",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95"
  }, {
    default: j(() => [
      m(e.$slots, "default")
    ]),
    _: 3
  });
}
const Xn = /* @__PURE__ */ R(Qn, [["render", Yn]]), Zn = {}, er = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, tr = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), nr = [
  tr
];
function rr(e, t) {
  return c(), v("svg", er, nr);
}
const or = /* @__PURE__ */ R(Zn, [["render", rr]]), lr = { class: "text-sm" }, sr = {
  inheritAttrs: !1
}, bo = /* @__PURE__ */ Object.assign(sr, {
  name: "SelectInput",
  props: {
    ...re,
    options: Array,
    modelValue: [Object, Array],
    multiple: Boolean,
    appearance: {
      type: String,
      default: "select"
    },
    defaultText: String,
    align: {
      type: String,
      default: "left"
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, r) => (c(), F(Pe, Ee(Ae(
      Object.keys(N(re)).reduce((o, n) => (o[n] = t.$props[n], o), {})
    )), {
      default: j(() => [
        H(N(Fn), {
          "model-value": e.modelValue,
          multiple: e.multiple,
          by: "id",
          "onUpdate:modelValue": r[0] || (r[0] = (o) => t.$emit("update:modelValue", o))
        }, {
          default: j(() => [
            H(N(Mn), {
              class: C({
                "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
              })
            }, {
              default: j(() => {
                var o, n;
                return [
                  d("div", lr, J(Array.isArray(e.modelValue) ? (o = e.modelValue) == null ? void 0 : o.map((l) => l.name).join(", ") : ((n = e.modelValue) == null ? void 0 : n.name) || e.defaultText), 1),
                  H(or, { class: "h-4 w-4" })
                ];
              }),
              _: 1
            }, 8, ["class"]),
            H(Xn, null, {
              default: j(() => [
                H(N(Vn), {
                  class: C(["min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                    "right-0": e.align === "right",
                    "left-0": e.align === "left"
                  }])
                }, {
                  default: j(() => [
                    m(t.$slots, "listbox-title"),
                    (c(!0), v(se, null, Ce(e.options, (o) => (c(), F(N(Hn), {
                      key: o.id,
                      value: o,
                      as: "template"
                    }, {
                      default: j(({ active: n, selected: l }) => [
                        d("li", {
                          class: C(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                            "bg-zinc-50 dark:bg-zinc-900": l,
                            "bg-zinc-100 dark:bg-zinc-700": n
                          }])
                        }, [
                          je(J(o.name) + " ", 1),
                          l ? (c(), F(Gn, {
                            key: 0,
                            class: "h-5 w-5"
                          })) : A("", !0)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128))
                  ]),
                  _: 3
                }, 8, ["class"])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["model-value", "multiple"])
      ]),
      _: 3
    }, 16));
  }
});
function ar() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class ir {
  constructor(t, r = {}) {
    this.component = t, this.data = r;
  }
}
const ur = Z({
  modals: Z([]),
  push(e, t = {}) {
    return t.key || (t.key = ar()), this.modals.push(Z(new ir(e, t))), document.body.classList.add("overflow-y-hidden"), t.key;
  },
  pop(e = 1) {
    for (let t = 0; t < e; t += 1)
      this.modals.pop();
    this.modals.length === 0 && document.body.classList.remove("overflow-y-hidden");
  },
  clear() {
    this.modals = Z([]);
  },
  findByKey(e) {
    return this.modals.find((t) => t.data.key === e);
  },
  get current() {
    return this.modals[this.modals.length - 1];
  },
  get all() {
    return this.modals;
  }
}), dr = {
  data() {
    return {
      open: !1,
      modals: ur
    };
  },
  watch: {
    "modals.modals": function(e) {
      e.length ? (document.body.classList.add("overflow-hidden"), this.$nextTick(() => {
        this.open = !0;
      })) : (document.body.classList.remove("overflow-hidden"), this.$nextTick(() => {
        this.open = !1;
      }));
    }
  }
}, cr = { class: "flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0" }, fr = {
  key: "modalBackground",
  class: "fixed inset-0 transition-opacity bg-zinc-500 bg-opacity-75",
  "aria-hidden": "true"
}, pr = /* @__PURE__ */ d("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), vr = { class: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block" }, mr = /* @__PURE__ */ d("span", { class: "sr-only" }, "Close", -1), hr = /* @__PURE__ */ d("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), br = [
  mr,
  hr
];
function gr(e, t, r, o, n, l) {
  return c(), v("div", null, [
    d("div", {
      class: C(["fixed inset-0 z-50 flex justify-center max-w-full overflow-y-auto", e.$modals.all.length ? "" : "pointer-events-none"]),
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true"
    }, [
      d("div", cr, [
        H(le, {
          "enter-active-class": "duration-300 ease-out",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "duration-200 ease-in",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: j(() => [
            e.$modals.all.length ? (c(), v("div", fr)) : A("", !0)
          ]),
          _: 1
        }),
        pr,
        H(Ge, {
          "enter-active-class": "duration-150 ease-out",
          "enter-from-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95",
          "enter-to-class": "translate-y-0 opacity-100 sm:scale-100",
          "leave-active-class": "duration-200 ease-in",
          "leave-from-class": "translate-y-0 opacity-100 sm:scale-100",
          "leave-to-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        }, {
          default: j(() => [
            (c(!0), v(se, null, Ce(e.$modals.all, (s, u) => (c(), v("div", {
              key: `modal${u}`,
              class: "relative inline-block px-4 pt-5 pb-4 text-left align-bottom transition-all bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:w-full sm:p-6"
            }, [
              d("div", vr, [
                d("button", {
                  type: "button",
                  class: "text-zinc-400 bg-white rounded-md hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  onClick: t[0] || (t[0] = (f) => e.$modals.pop())
                }, br)
              ]),
              (c(), F(G(s.name), {
                "modal-index": u,
                data: s.data
              }, null, 8, ["modal-index", "data"]))
            ]))), 128))
          ]),
          _: 1
        })
      ])
    ], 2)
  ]);
}
const go = /* @__PURE__ */ R(dr, [["render", gr]]);
function yr(e) {
  return Qe() ? (Ye(e), !0) : !1;
}
function ge(e) {
  return typeof e == "function" ? e() : N(e);
}
const wr = typeof window < "u" && typeof document < "u", xr = Object.prototype.toString, $r = (e) => xr.call(e) === "[object Object]", _r = () => {
};
function kr(e, t) {
  function r(...o) {
    return new Promise((n, l) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(n).catch(l);
    });
  }
  return r;
}
const We = (e) => e();
function Sr(e = We) {
  const t = L(!0);
  function r() {
    t.value = !1;
  }
  function o() {
    t.value = !0;
  }
  const n = (...l) => {
    t.value && e(...l);
  };
  return { isActive: Xe(t), pause: r, resume: o, eventFilter: n };
}
function Or(e, t, r = {}) {
  const {
    eventFilter: o = We,
    ...n
  } = r;
  return ie(
    e,
    kr(
      o,
      t
    ),
    n
  );
}
function zr(e, t, r = {}) {
  const {
    eventFilter: o,
    ...n
  } = r, { eventFilter: l, pause: s, resume: u, isActive: f } = Sr(o);
  return { stop: Or(
    e,
    t,
    {
      ...n,
      eventFilter: l
    }
  ), pause: s, resume: u, isActive: f };
}
function Lr(e) {
  var t;
  const r = ge(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const oe = wr ? window : void 0;
function ze(...e) {
  let t, r, o, n;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, o, n] = e, t = oe) : [t, r, o, n] = e, !t)
    return _r;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const l = [], s = () => {
    l.forEach((i) => i()), l.length = 0;
  }, u = (i, y, S, _) => (i.addEventListener(y, S, _), () => i.removeEventListener(y, S, _)), f = ie(
    () => [Lr(t), ge(n)],
    ([i, y]) => {
      if (s(), !i)
        return;
      const S = $r(y) ? { ...y } : y;
      l.push(
        ...r.flatMap((_) => o.map(($) => u(i, _, $, S)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    f(), s();
  };
  return yr(a), a;
}
const te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ne = "__vueuse_ssr_handlers__", jr = /* @__PURE__ */ Dr();
function Dr() {
  return ne in te || (te[ne] = te[ne] || {}), te[ne];
}
function Er(e, t) {
  return jr[e] || t;
}
function Ar(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Cr = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, Le = "vueuse-storage";
function Pr(e, t, r, o = {}) {
  var n;
  const {
    flush: l = "pre",
    deep: s = !0,
    listenToStorageChanges: u = !0,
    writeDefaults: f = !0,
    mergeDefaults: a = !1,
    shallow: i,
    window: y = oe,
    eventFilter: S,
    onError: _ = (g) => {
      console.error(g);
    }
  } = o, $ = (i ? Ze : L)(t);
  if (!r)
    try {
      r = Er("getDefaultStorage", () => {
        var g;
        return (g = oe) == null ? void 0 : g.localStorage;
      })();
    } catch (g) {
      _(g);
    }
  if (!r)
    return $;
  const w = ge(t), P = Ar(w), h = (n = o.serializer) != null ? n : Cr[P], { pause: T, resume: p } = zr(
    $,
    () => b($.value),
    { flush: l, deep: s, eventFilter: S }
  );
  return y && u && (ze(y, "storage", D), ze(y, Le, k)), D(), $;
  function b(g) {
    try {
      if (g == null)
        r.removeItem(e);
      else {
        const I = h.write(g), U = r.getItem(e);
        U !== I && (r.setItem(e, I), y && y.dispatchEvent(new CustomEvent(Le, {
          detail: {
            key: e,
            oldValue: U,
            newValue: I,
            storageArea: r
          }
        })));
      }
    } catch (I) {
      _(I);
    }
  }
  function x(g) {
    const I = g ? g.newValue : r.getItem(e);
    if (I == null)
      return f && w !== null && r.setItem(e, h.write(w)), w;
    if (!g && a) {
      const U = h.read(I);
      return typeof a == "function" ? a(U, w) : P === "object" && !Array.isArray(U) ? { ...w, ...U } : U;
    } else
      return typeof I != "string" ? I : h.read(I);
  }
  function k(g) {
    D(g.detail);
  }
  function D(g) {
    if (!(g && g.storageArea !== r)) {
      if (g && g.key == null) {
        $.value = w;
        return;
      }
      if (!(g && g.key !== e)) {
        T();
        try {
          (g == null ? void 0 : g.newValue) !== h.write($.value) && ($.value = x(g));
        } catch (I) {
          _(I);
        } finally {
          g ? W(p) : p();
        }
      }
    }
  }
}
function Tr(e, t, r = {}) {
  const { window: o = oe } = r;
  return Pr(e, t, o == null ? void 0 : o.localStorage, r);
}
const Ir = {}, Nr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, Br = /* @__PURE__ */ d("g", { fill: "none" }, [
  /* @__PURE__ */ d("path", {
    d: "M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0z",
    fill: "currentColor"
  })
], -1), Rr = [
  Br
];
function Fr(e, t) {
  return c(), v("svg", Nr, Rr);
}
const Mr = /* @__PURE__ */ R(Ir, [["render", Fr]]), Vr = { class: "flex flex-col gap-6 py-6" }, Hr = { class: "flex flex-col gap-6 px-6 mb-6" }, yo = {
  name: "Sidebar",
  setup(e) {
    const t = Tr("ui/sidebar", !1);
    return ve("sidebarMinimised", t), (r, o) => (c(), v("nav", {
      class: C(["min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10", {
        "!w-24 !max-w-24 !min-w-24": N(t),
        "w-64 max-w-64 min-w-64": !N(t)
      }])
    }, [
      d("button", {
        class: "absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-10",
        onClick: o[0] || (o[0] = (n) => t.value = !N(t))
      }, [
        H(Mr, {
          class: C(["w-5 h-5", {
            "transform rotate-180": !N(t)
          }])
        }, null, 8, ["class"])
      ]),
      d("div", Vr, [
        m(r.$slots, "default")
      ]),
      d("div", Hr, [
        m(r.$slots, "bottom")
      ])
    ], 2));
  }
}, Ur = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-900 shadow-lg py-3 px-6 rounded-full ml-3"
}, wo = {
  name: "SidebarItem",
  props: {
    as: {
      type: [Object, String],
      default: "a"
    },
    active: {
      type: Boolean
    },
    icon: {
      type: Object
    }
  },
  setup(e) {
    const t = e, r = pe("sidebarMinimised"), o = z(() => {
      const n = [
        "inline-flex",
        "items-center",
        "py-3",
        "text-sm",
        "font-medium",
        "leading-5",
        "transition-all",
        "duration-150",
        "relative",
        "ease-in-out",
        "rounded-full",
        "whitespace-nowrap",
        "group"
      ];
      return r.value ? n.push("justify-center") : n.push("px-6"), t.active ? n.push(
        "bg-purple-400",
        "dark:bg-purple-900",
        "text-sm",
        "font-medium",
        "text-zinc-900",
        "dark:text-zinc-100",
        "focus:outline-none",
        "focus:bg-purple-700"
      ) : n.push(
        // text
        "text-zinc-500",
        "dark:text-zinc-400",
        // hover
        "hover:text-zinc-700",
        "dark:hover:text-zinc-300",
        "hover:bg-zinc-300",
        "dark:hover:bg-zinc-700",
        // focus
        "focus:outline-none",
        "focus:text-zinc-700",
        "dark:focus:text-zinc-300"
      ), n;
    });
    return (n, l) => (c(), F(G(e.as), {
      class: C(N(o))
    }, {
      default: j(() => [
        e.icon ? (c(), F(G(e.icon), {
          key: 0,
          class: C(["w-6 h-6 transition-all", {
            " mr-4": !N(r)
          }])
        }, null, 8, ["class"])) : A("", !0),
        H(le, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "transform opacity-0",
          "enter-to-class": "transform opacity-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100",
          "leave-to-class": "transform opacity-0"
        }, {
          default: j(() => [
            N(r) ? A("", !0) : m(n.$slots, "default", { key: 0 })
          ]),
          _: 3
        }),
        N(r) ? (c(), v("div", Ur, [
          m(n.$slots, "default")
        ])) : A("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, Wr = {}, Kr = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, qr = { class: "flex w-full h-full max-h-screen z-10 relative" }, Jr = { class: "flex-grow overflow-y-auto pb-12" };
function Gr(e, t) {
  return c(), v("div", Kr, [
    m(e.$slots, "top"),
    d("div", qr, [
      m(e.$slots, "sidebar"),
      d("section", Jr, [
        m(e.$slots, "default")
      ])
    ])
  ]);
}
const xo = /* @__PURE__ */ R(Wr, [["render", Gr]]), Qr = {}, Yr = { class: "flex flex-col gap-2 px-2" };
function Xr(e, t) {
  return c(), v("div", Yr, [
    m(e.$slots, "default")
  ]);
}
const $o = /* @__PURE__ */ R(Qr, [["render", Xr]]), _o = {
  name: "Container",
  props: {
    narrow: Boolean
  },
  setup(e) {
    return (t, r) => (c(), v("div", {
      class: C(["mx-auto px-4 sm:px-6 lg:px-8", {
        "max-w-7xl": !e.narrow,
        "max-w-4xl": e.narrow
      }])
    }, [
      m(t.$slots, "default")
    ], 2));
  }
};
export {
  eo as AlertAction,
  me as BaseButton,
  io as Card,
  uo as CardTitle,
  _o as Container,
  to as DangerAlert,
  ao as DangerButton,
  co as Dropdown,
  fo as DropdownLink,
  Xn as FadeScaleTransition,
  po as HH1,
  vo as HH2,
  mo as HH3,
  no as InfoAlert,
  ho as Input,
  Pe as InputLayout,
  go as ModalBase,
  lo as PrimaryButton,
  so as SecondaryButton,
  bo as SelectInput,
  yo as Sidebar,
  wo as SidebarItem,
  $o as SidebarItemGroup,
  xo as SidebarLayout,
  ro as SuccessAlert,
  oo as WarningAlert
};
