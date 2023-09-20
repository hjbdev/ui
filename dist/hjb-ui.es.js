import { openBlock as d, createBlock as R, resolveDynamicComponent as Y, withCtx as w, createTextVNode as J, createElementVNode as c, createElementBlock as f, normalizeClass as T, renderSlot as p, createCommentVNode as D, onMounted as te, onUnmounted as Pe, computed as L, ref as C, withDirectives as $e, vShow as ke, createVNode as P, Transition as oe, toDisplayString as q, normalizeProps as Te, guardReactiveProps as Ie, mergeProps as Qe, cloneVNode as Xe, h as he, Fragment as Q, inject as ge, provide as ye, watchEffect as de, defineComponent as X, watch as ce, nextTick as K, toRaw as V, unref as S, renderList as Ne, reactive as ee, TransitionGroup as Ze, getCurrentScope as et, onScopeDispose as tt, readonly as nt, shallowRef as ot, createSlots as rt } from "vue";
const st = /* @__PURE__ */ c("span", { "aria-hidden": "true" }, "→", -1), yr = {
  __name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, o) => (d(), R(Y(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: w(() => [
        J("Details "),
        st
      ]),
      _: 1
    }));
  }
}, I = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, lt = {}, at = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, it = { class: "flex" }, ut = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ c("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ c("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
      "clip-rule": "evenodd"
    })
  ])
], -1), dt = { class: "ml-3 flex-1" }, ct = { class: "md:flex md:justify-between" }, ft = { class: "text-sm text-red-800 dark:text-red-200" }, pt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function vt(e, t) {
  return d(), f("div", at, [
    c("div", it, [
      ut,
      c("div", dt, [
        e.$slots.title ? (d(), f("h3", {
          key: 0,
          class: T(["text-sm font-medium text-red-800 dark:text-red-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          p(e.$slots, "title")
        ], 2)) : D("", !0),
        c("div", ct, [
          c("p", ft, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), f("p", pt, [
            p(e.$slots, "action")
          ])) : D("", !0)
        ])
      ])
    ])
  ]);
}
const wr = /* @__PURE__ */ I(lt, [["render", vt]]), mt = {}, ht = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, bt = { class: "flex" }, gt = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ c("svg", {
    class: "h-5 w-5 text-blue-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ c("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
      "clip-rule": "evenodd"
    })
  ])
], -1), yt = { class: "ml-3 flex-1" }, wt = { class: "md:flex md:justify-between" }, xt = { class: "text-sm text-blue-800 dark:text-blue-200" }, _t = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function $t(e, t) {
  return d(), f("div", ht, [
    c("div", bt, [
      gt,
      c("div", yt, [
        e.$slots.title ? (d(), f("h3", {
          key: 0,
          class: T(["text-sm font-medium text-blue-800 dark:text-blue-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          p(e.$slots, "title")
        ], 2)) : D("", !0),
        c("div", wt, [
          c("p", xt, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), f("p", _t, [
            p(e.$slots, "action")
          ])) : D("", !0)
        ])
      ])
    ])
  ]);
}
const xr = /* @__PURE__ */ I(mt, [["render", $t]]), kt = {}, St = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, zt = { class: "flex" }, Ot = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ c("svg", {
    class: "h-5 w-5 text-green-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ c("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Lt = { class: "ml-3 flex-1" }, jt = { class: "md:flex md:justify-between" }, Dt = { class: "text-sm text-green-800 dark:text-green-200" }, Ct = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function At(e, t) {
  return d(), f("div", St, [
    c("div", zt, [
      Ot,
      c("div", Lt, [
        e.$slots.title ? (d(), f("h3", {
          key: 0,
          class: T(["text-sm font-medium text-green-800 dark:text-green-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          p(e.$slots, "title")
        ], 2)) : D("", !0),
        c("div", jt, [
          c("p", Dt, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), f("p", Ct, [
            p(e.$slots, "action")
          ])) : D("", !0)
        ])
      ])
    ])
  ]);
}
const _r = /* @__PURE__ */ I(kt, [["render", At]]), Et = {}, Pt = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, Tt = { class: "flex" }, It = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ c("svg", {
    class: "h-5 w-5 text-yellow-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ c("path", {
      "fill-rule": "evenodd",
      d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Nt = { class: "ml-3 flex-1" }, Bt = { class: "md:flex md:justify-between" }, Ft = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, Rt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Mt(e, t) {
  return d(), f("div", Pt, [
    c("div", Tt, [
      It,
      c("div", Nt, [
        e.$slots.title ? (d(), f("h3", {
          key: 0,
          class: T(["text-sm font-medium text-yellow-800 dark:text-yellow-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          p(e.$slots, "title")
        ], 2)) : D("", !0),
        c("div", Bt, [
          c("p", Ft, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), f("p", Rt, [
            p(e.$slots, "action")
          ])) : D("", !0)
        ])
      ])
    ])
  ]);
}
const $r = /* @__PURE__ */ I(Et, [["render", Mt]]), fe = {
  __name: "BaseButton",
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
    return (t, o) => (d(), R(Y(e.as), {
      class: T(["inline-flex items-center border border-transparent rounded-md font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2", {
        "p-1.5": e.size === "uniform",
        "px-1 py-0.5 text-xs": e.size === "tiny",
        "px-2 py-1 text-xs": e.size === "small",
        "px-3.5 py-1.5 text-sm": e.size === "medium",
        "px-3.5 py-1.5 text-base": e.size === "large"
      }])
    }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, Se = {
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (d(), R(fe, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Vt = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, o) => (d(), R(fe, {
      type: e.type,
      class: "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
    }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["type"]));
  }
}, kr = {
  __name: "DangerButton",
  setup(e) {
    return (t, o) => (d(), R(fe, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Ht = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, Ut = { key: 0 }, Wt = {
  __name: "Card",
  props: {
    flush: Boolean,
    footerJustify: {
      type: String,
      default: "start"
    }
  },
  setup(e) {
    return (t, o) => (d(), f("div", {
      class: T(["bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-zinc-900 dark:text-zinc-100", {
        "p-6": !e.flush
      }])
    }, [
      t.$slots.header || t.$slots.extra ? (d(), f("div", Ht, [
        c("div", null, [
          p(t.$slots, "header")
        ]),
        t.$slots.extra ? (d(), f("div", Ut, [
          p(t.$slots, "extra")
        ])) : D("", !0)
      ])) : D("", !0),
      p(t.$slots, "default"),
      t.$slots.footer ? (d(), f("div", {
        key: 1,
        class: T(["mt-6 flex gap-2", {
          "justify-end": e.footerJustify === "end",
          "justify-between": e.footerJustify === "between"
        }])
      }, [
        p(t.$slots, "footer")
      ], 2)) : D("", !0)
    ], 2));
  }
}, Kt = {}, qt = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function Jt(e, t) {
  return d(), f("h3", qt, [
    p(e.$slots, "default")
  ]);
}
const Gt = /* @__PURE__ */ I(Kt, [["render", Jt]]), Yt = { class: "relative" }, Sr = {
  __name: "Dropdown",
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
    const t = e, o = (l) => {
      s.value && l.key === "Escape" && (s.value = !1);
    };
    te(() => document.addEventListener("keydown", o)), Pe(() => document.removeEventListener("keydown", o));
    const r = L(() => ({
      48: "w-48"
    })[t.width.toString()]), n = L(() => {
      const l = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${l}-left left-0` : t.align === "right" ? `origin-${l}-right right-0` : `origin-${l}`;
    }), s = C(!1);
    return (l, u) => (d(), f("div", Yt, [
      c("div", {
        onClick: u[0] || (u[0] = (v) => s.value = !s.value)
      }, [
        p(l.$slots, "trigger")
      ]),
      $e(c("div", {
        class: "fixed inset-0 z-40",
        onClick: u[1] || (u[1] = (v) => s.value = !1)
      }, null, 512), [
        [ke, s.value]
      ]),
      P(oe, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: w(() => [
          $e(c("div", {
            class: T(["absolute z-50 mt-2 rounded-md shadow-lg", [r.value, n.value, t.bottom ? "bottom-full" : ""]]),
            style: { display: "none" },
            onClick: u[2] || (u[2] = (v) => s.value = !1)
          }, [
            c("div", {
              class: T(["rounded-md ring-1 ring-black ring-opacity-5", e.contentClasses])
            }, [
              p(l.$slots, "content")
            ], 2)
          ], 2), [
            [ke, s.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, zr = {
  __name: "DropdownLink",
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
    return (t, o) => (d(), R(Y(e.as), {
      href: e.href,
      class: "block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
    }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["href"]));
  }
}, Qt = {}, Xt = { class: "font-semibold text-3xl leading-tight" };
function Zt(e, t) {
  return d(), f("h1", Xt, [
    p(e.$slots, "default")
  ]);
}
const Or = /* @__PURE__ */ I(Qt, [["render", Zt]]), en = {}, tn = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function nn(e, t) {
  return d(), f("h2", tn, [
    p(e.$slots, "default")
  ]);
}
const Lr = /* @__PURE__ */ I(en, [["render", nn]]), on = {}, rn = { class: "text-xl tracking-tight dark:text-white" };
function sn(e, t) {
  return d(), f("h2", rn, [
    p(e.$slots, "default")
  ]);
}
const jr = /* @__PURE__ */ I(on, [["render", sn]]), ie = {
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
}, ln = ["for"], an = { class: "relative mt-1" }, un = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, dn = /* @__PURE__ */ c("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ c("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), cn = [
  dn
], fn = ["id"], pn = ["id"], Be = {
  __name: "InputLayout",
  props: {
    ...ie
  },
  setup(e) {
    return (t, o) => (d(), f("div", null, [
      t.label ? (d(), f("label", {
        key: 0,
        for: t.id,
        class: "block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      }, q(t.label), 9, ln)) : D("", !0),
      c("div", an, [
        p(t.$slots, "default"),
        t.error ? (d(), f("div", un, cn)) : D("", !0)
      ]),
      t.helpText && !t.error ? (d(), f("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, q(t.helpText), 9, fn)) : t.error ? (d(), f("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, q(t.error), 9, pn)) : D("", !0)
    ]));
  }
}, vn = ["name", "id", "aria-describedby"], mn = {
  inheritAttrs: !1
}, Dr = /* @__PURE__ */ Object.assign(mn, {
  __name: "Input",
  props: {
    ...ie
  },
  setup(e) {
    return (t, o) => (d(), R(Be, Te(Ie(t.$props)), {
      default: w(() => [
        c("input", Qe(t.$attrs, {
          name: t.name,
          id: t.id,
          class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
            "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
            "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
          }],
          "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
        }), null, 16, vn)
      ]),
      _: 1
    }, 16));
  }
});
function H(e, t, ...o) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...o) : n;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, H), r;
}
var be = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(be || {}), hn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(hn || {});
function Z({ visible: e = !0, features: t = 0, ourProps: o, theirProps: r, ...n }) {
  var s;
  let l = Re(r, o), u = Object.assign(n, { props: l });
  if (e || t & 2 && l.static)
    return ve(u);
  if (t & 1) {
    let v = (s = l.unmount) == null || s ? 0 : 1;
    return H(v, { 0() {
      return null;
    }, 1() {
      return ve({ ...n, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ve(u);
}
function ve({ props: e, attrs: t, slots: o, slot: r, name: n }) {
  var s, l;
  let { as: u, ...v } = Me(e, ["unmount", "static"]), a = (s = o.default) == null ? void 0 : s.call(o, r), i = {};
  if (r) {
    let y = !1, O = [];
    for (let [k, $] of Object.entries(r))
      typeof $ == "boolean" && (y = !0), $ === !0 && O.push(k);
    y && (i["data-headlessui-state"] = O.join(" "));
  }
  if (u === "template") {
    if (a = Fe(a ?? []), Object.keys(v).length > 0 || Object.keys(t).length > 0) {
      let [y, ...O] = a ?? [];
      if (!gn(y) || O.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(v).concat(Object.keys(t)).map((x) => x.trim()).filter((x, N, h) => h.indexOf(x) === N).sort((x, N) => x.localeCompare(N)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let k = Re((l = y.props) != null ? l : {}, v), $ = Xe(y, k);
      for (let x in k)
        x.startsWith("on") && ($.props || ($.props = {}), $.props[x] = k[x]);
      return $;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return he(u, Object.assign({}, v, i), { default: () => a });
}
function Fe(e) {
  return e.flatMap((t) => t.type === Q ? Fe(t.children) : [t]);
}
function Re(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, o = {};
  for (let r of e)
    for (let n in r)
      n.startsWith("on") && typeof r[n] == "function" ? (o[n] != null || (o[n] = []), o[n].push(r[n])) : t[n] = r[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((r) => [r, void 0])));
  for (let r in o)
    Object.assign(t, { [r](n, ...s) {
      let l = o[r];
      for (let u of l) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...s);
      }
    } });
  return t;
}
function bn(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Me(e, t = []) {
  let o = Object.assign({}, e);
  for (let r of t)
    r in o && delete o[r];
  return o;
}
function gn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let yn = 0;
function wn() {
  return ++yn;
}
function pe() {
  return wn();
}
var E = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(E || {});
function xn(e) {
  throw new Error("Unexpected object: " + e);
}
var M = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(M || {});
function _n(e, t) {
  let o = t.resolveItems();
  if (o.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), n = r ?? -1, s = (() => {
    switch (e.focus) {
      case 0:
        return o.findIndex((l) => !t.resolveDisabled(l));
      case 1: {
        let l = o.slice().reverse().findIndex((u, v, a) => n !== -1 && a.length - v - 1 >= n ? !1 : !t.resolveDisabled(u));
        return l === -1 ? l : o.length - 1 - l;
      }
      case 2:
        return o.findIndex((l, u) => u <= n ? !1 : !t.resolveDisabled(l));
      case 3: {
        let l = o.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return l === -1 ? l : o.length - 1 - l;
      }
      case 4:
        return o.findIndex((l) => t.resolveId(l) === e.id);
      case 5:
        return null;
      default:
        xn(e);
    }
  })();
  return s === -1 ? r : s;
}
function j(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ve = Symbol("Context");
var ne = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ne || {});
function $n() {
  return ge(Ve, null);
}
function kn(e) {
  ye(Ve, e);
}
function ze(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Sn(e, t) {
  let o = C(ze(e.value.type, e.value.as));
  return te(() => {
    o.value = ze(e.value.type, e.value.as);
  }), de(() => {
    var r;
    o.value || j(t) && j(t) instanceof HTMLButtonElement && !((r = j(t)) != null && r.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var zn = Object.defineProperty, On = (e, t, o) => t in e ? zn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Oe = (e, t, o) => (On(e, typeof t != "symbol" ? t + "" : t, o), o);
class Ln {
  constructor() {
    Oe(this, "current", this.detect()), Oe(this, "currentId", 0);
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
let we = new Ln();
function jn(e) {
  if (we.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = j(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Le = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Dn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Dn || {}), Cn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Cn || {}), An = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(An || {}), xe = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(xe || {});
function He(e, t = 0) {
  var o;
  return e === ((o = jn(e)) == null ? void 0 : o.body) ? !1 : H(t, { 0() {
    return e.matches(Le);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Le))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var En = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(En || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Pn(e, t = (o) => o) {
  return e.slice().sort((o, r) => {
    let n = t(o), s = t(r);
    if (n === null || s === null)
      return 0;
    let l = n.compareDocumentPosition(s);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function se(e, t, o) {
  we.isServer || de((r) => {
    document.addEventListener(e, t, o), r(() => document.removeEventListener(e, t, o));
  });
}
function Tn(e, t, o) {
  we.isServer || de((r) => {
    window.addEventListener(e, t, o), r(() => window.removeEventListener(e, t, o));
  });
}
function In(e, t, o = L(() => !0)) {
  function r(s, l) {
    if (!o.value || s.defaultPrevented)
      return;
    let u = l(s);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let v = function a(i) {
      return typeof i == "function" ? a(i()) : Array.isArray(i) || i instanceof Set ? i : [i];
    }(e);
    for (let a of v) {
      if (a === null)
        continue;
      let i = a instanceof HTMLElement ? a : j(a);
      if (i != null && i.contains(u) || s.composed && s.composedPath().includes(i))
        return;
    }
    return !He(u, xe.Loose) && u.tabIndex !== -1 && s.preventDefault(), t(s, u);
  }
  let n = C(null);
  se("pointerdown", (s) => {
    var l, u;
    o.value && (n.value = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), se("mousedown", (s) => {
    var l, u;
    o.value && (n.value = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), se("click", (s) => {
    n.value && (r(s, () => n.value), n.value = null);
  }, !0), se("touchend", (s) => r(s, () => s.target instanceof HTMLElement ? s.target : null), !0), Tn("blur", (s) => r(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ue = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ue || {});
let Nn = X({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: r, ...n } = e, s = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return Z({ ourProps: s, theirProps: n, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function We(e = {}, t = null, o = []) {
  for (let [r, n] of Object.entries(e))
    qe(o, Ke(t, r), n);
  return o;
}
function Ke(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function qe(e, t, o) {
  if (Array.isArray(o))
    for (let [r, n] of o.entries())
      qe(e, Ke(t, r.toString()), n);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : We(o, t, e);
}
function Bn(e, t, o) {
  let r = C(o == null ? void 0 : o.value), n = L(() => e.value !== void 0);
  return [L(() => n.value ? e.value : r.value), function(s) {
    return n.value || (r.value = s), t == null ? void 0 : t(s);
  }];
}
function je(e) {
  return [e.screenX, e.screenY];
}
function Fn() {
  let e = C([-1, -1]);
  return { wasMoved(t) {
    let o = je(t);
    return e.value[0] === o[0] && e.value[1] === o[1] ? !1 : (e.value = o, !0);
  }, update(t) {
    e.value = je(t);
  } };
}
let De = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ce(e) {
  var t, o;
  let r = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return r;
  let s = !1;
  for (let u of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), s = !0;
  let l = s ? (o = n.innerText) != null ? o : "" : r;
  return De.test(l) && (l = l.replace(De, "")), l;
}
function Rn(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let o = e.getAttribute("aria-labelledby");
  if (o) {
    let r = o.split(" ").map((n) => {
      let s = document.getElementById(n);
      if (s) {
        let l = s.getAttribute("aria-label");
        return typeof l == "string" ? l.trim() : Ce(s).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0)
      return r.join(", ");
  }
  return Ce(e).trim();
}
function Mn(e) {
  let t = C(""), o = C("");
  return () => {
    let r = j(e);
    if (!r)
      return "";
    let n = r.innerText;
    if (t.value === n)
      return o.value;
    let s = Rn(r).trim().toLowerCase();
    return t.value = n, o.value = s, s;
  };
}
function Vn(e, t) {
  return e === t;
}
var Hn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Hn || {}), Un = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Un || {}), Wn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Wn || {});
function Kn(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Je = Symbol("ListboxContext");
function re(e) {
  let t = ge(Je, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, re), o;
  }
  return t;
}
let qn = X({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Vn }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: o, emit: r }) {
  let n = C(1), s = C(null), l = C(null), u = C(null), v = C([]), a = C(""), i = C(null), y = C(1);
  function O(m = (b) => b) {
    let b = i.value !== null ? v.value[i.value] : null, _ = Pn(m(v.value.slice()), (A) => j(A.dataRef.domRef)), z = b ? _.indexOf(b) : null;
    return z === -1 && (z = null), { options: _, activeOptionIndex: z };
  }
  let k = L(() => e.multiple ? 1 : 0), [$, x] = Bn(L(() => e.modelValue), (m) => r("update:modelValue", m), L(() => e.defaultValue)), N = L(() => $.value === void 0 ? H(k.value, { 1: [], 0: void 0 }) : $.value), h = { listboxState: n, value: N, mode: k, compare(m, b) {
    if (typeof e.by == "string") {
      let _ = e.by;
      return (m == null ? void 0 : m[_]) === (b == null ? void 0 : b[_]);
    }
    return e.by(m, b);
  }, orientation: L(() => e.horizontal ? "horizontal" : "vertical"), labelRef: s, buttonRef: l, optionsRef: u, disabled: L(() => e.disabled), options: v, searchQuery: a, activeOptionIndex: i, activationTrigger: y, closeListbox() {
    e.disabled || n.value !== 1 && (n.value = 1, i.value = null);
  }, openListbox() {
    e.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(m, b, _) {
    if (e.disabled || n.value === 1)
      return;
    let z = O(), A = _n(m === M.Specific ? { focus: M.Specific, id: b } : { focus: m }, { resolveItems: () => z.options, resolveActiveIndex: () => z.activeOptionIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    a.value = "", i.value = A, y.value = _ ?? 1, v.value = z.options;
  }, search(m) {
    if (e.disabled || n.value === 1)
      return;
    let b = a.value !== "" ? 0 : 1;
    a.value += m.toLowerCase();
    let _ = (i.value !== null ? v.value.slice(i.value + b).concat(v.value.slice(0, i.value + b)) : v.value).find((A) => A.dataRef.textValue.startsWith(a.value) && !A.dataRef.disabled), z = _ ? v.value.indexOf(_) : -1;
    z === -1 || z === i.value || (i.value = z, y.value = 1);
  }, clearSearch() {
    e.disabled || n.value !== 1 && a.value !== "" && (a.value = "");
  }, registerOption(m, b) {
    let _ = O((z) => [...z, { id: m, dataRef: b }]);
    v.value = _.options, i.value = _.activeOptionIndex;
  }, unregisterOption(m) {
    let b = O((_) => {
      let z = _.findIndex((A) => A.id === m);
      return z !== -1 && _.splice(z, 1), _;
    });
    v.value = b.options, i.value = b.activeOptionIndex, y.value = 1;
  }, theirOnChange(m) {
    e.disabled || x(m);
  }, select(m) {
    e.disabled || x(H(k.value, { 0: () => m, 1: () => {
      let b = V(h.value.value).slice(), _ = V(m), z = b.findIndex((A) => h.compare(_, V(A)));
      return z === -1 ? b.push(_) : b.splice(z, 1), b;
    } }));
  } };
  In([l, u], (m, b) => {
    var _;
    h.closeListbox(), He(b, xe.Loose) || (m.preventDefault(), (_ = j(l)) == null || _.focus());
  }, L(() => n.value === 0)), ye(Je, h), kn(L(() => H(n.value, { 0: ne.Open, 1: ne.Closed })));
  let B = L(() => {
    var m;
    return (m = j(l)) == null ? void 0 : m.closest("form");
  });
  return te(() => {
    ce([B], () => {
      if (!B.value || e.defaultValue === void 0)
        return;
      function m() {
        h.theirOnChange(e.defaultValue);
      }
      return B.value.addEventListener("reset", m), () => {
        var b;
        (b = B.value) == null || b.removeEventListener("reset", m);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: m, modelValue: b, disabled: _, form: z, ...A } = e, g = { open: n.value === 0, disabled: _, value: N.value };
    return he(Q, [...m != null && N.value != null ? We({ [m]: N.value }).map(([F, W]) => he(Nn, bn({ features: Ue.Hidden, key: F, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: z, name: F, value: W }))) : [], Z({ ourProps: {}, theirProps: { ...o, ...Me(A, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: g, slots: t, attrs: o, name: "Listbox" })]);
  };
} });
X({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let r = re("ListboxLabel");
  function n() {
    var s;
    (s = j(r.buttonRef)) == null || s.focus({ preventScroll: !0 });
  }
  return () => {
    let s = { open: r.listboxState.value === 0, disabled: r.disabled.value }, { id: l, ...u } = e, v = { id: l, ref: r.labelRef, onClick: n };
    return Z({ ourProps: v, theirProps: u, slot: s, attrs: t, slots: o, name: "ListboxLabel" });
  };
} });
let Jn = X({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: r }) {
  let n = re("ListboxButton");
  r({ el: n.buttonRef, $el: n.buttonRef });
  function s(a) {
    switch (a.key) {
      case E.Space:
      case E.Enter:
      case E.ArrowDown:
        a.preventDefault(), n.openListbox(), K(() => {
          var i;
          (i = j(n.optionsRef)) == null || i.focus({ preventScroll: !0 }), n.value.value || n.goToOption(M.First);
        });
        break;
      case E.ArrowUp:
        a.preventDefault(), n.openListbox(), K(() => {
          var i;
          (i = j(n.optionsRef)) == null || i.focus({ preventScroll: !0 }), n.value.value || n.goToOption(M.Last);
        });
        break;
    }
  }
  function l(a) {
    switch (a.key) {
      case E.Space:
        a.preventDefault();
        break;
    }
  }
  function u(a) {
    n.disabled.value || (n.listboxState.value === 0 ? (n.closeListbox(), K(() => {
      var i;
      return (i = j(n.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })) : (a.preventDefault(), n.openListbox(), Kn(() => {
      var i;
      return (i = j(n.optionsRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })));
  }
  let v = Sn(L(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var a, i;
    let y = { open: n.listboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: O, ...k } = e, $ = { ref: n.buttonRef, id: O, type: v.value, "aria-haspopup": "listbox", "aria-controls": (a = j(n.optionsRef)) == null ? void 0 : a.id, "aria-expanded": n.listboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(i = j(n.labelRef)) == null ? void 0 : i.id, O].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: s, onKeyup: l, onClick: u };
    return Z({ ourProps: $, theirProps: k, slot: y, attrs: t, slots: o, name: "ListboxButton" });
  };
} }), Gn = X({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: r }) {
  let n = re("ListboxOptions"), s = C(null);
  r({ el: n.optionsRef, $el: n.optionsRef });
  function l(a) {
    switch (s.value && clearTimeout(s.value), a.key) {
      case E.Space:
        if (n.searchQuery.value !== "")
          return a.preventDefault(), a.stopPropagation(), n.search(a.key);
      case E.Enter:
        if (a.preventDefault(), a.stopPropagation(), n.activeOptionIndex.value !== null) {
          let i = n.options.value[n.activeOptionIndex.value];
          n.select(i.dataRef.value);
        }
        n.mode.value === 0 && (n.closeListbox(), K(() => {
          var i;
          return (i = j(n.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
        }));
        break;
      case H(n.orientation.value, { vertical: E.ArrowDown, horizontal: E.ArrowRight }):
        return a.preventDefault(), a.stopPropagation(), n.goToOption(M.Next);
      case H(n.orientation.value, { vertical: E.ArrowUp, horizontal: E.ArrowLeft }):
        return a.preventDefault(), a.stopPropagation(), n.goToOption(M.Previous);
      case E.Home:
      case E.PageUp:
        return a.preventDefault(), a.stopPropagation(), n.goToOption(M.First);
      case E.End:
      case E.PageDown:
        return a.preventDefault(), a.stopPropagation(), n.goToOption(M.Last);
      case E.Escape:
        a.preventDefault(), a.stopPropagation(), n.closeListbox(), K(() => {
          var i;
          return (i = j(n.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        break;
      case E.Tab:
        a.preventDefault(), a.stopPropagation();
        break;
      default:
        a.key.length === 1 && (n.search(a.key), s.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  let u = $n(), v = L(() => u !== null ? (u.value & ne.Open) === ne.Open : n.listboxState.value === 0);
  return () => {
    var a, i, y, O;
    let k = { open: n.listboxState.value === 0 }, { id: $, ...x } = e, N = { "aria-activedescendant": n.activeOptionIndex.value === null || (a = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : a.id, "aria-multiselectable": n.mode.value === 1 ? !0 : void 0, "aria-labelledby": (O = (i = j(n.labelRef)) == null ? void 0 : i.id) != null ? O : (y = j(n.buttonRef)) == null ? void 0 : y.id, "aria-orientation": n.orientation.value, id: $, onKeydown: l, role: "listbox", tabIndex: 0, ref: n.optionsRef };
    return Z({ ourProps: N, theirProps: x, slot: k, attrs: t, slots: o, features: be.RenderStrategy | be.Static, visible: v.value, name: "ListboxOptions" });
  };
} }), Yn = X({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${pe()}` } }, setup(e, { slots: t, attrs: o, expose: r }) {
  let n = re("ListboxOption"), s = C(null);
  r({ el: s, $el: s });
  let l = L(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === e.id : !1), u = L(() => H(n.mode.value, { 0: () => n.compare(V(n.value.value), V(e.value)), 1: () => V(n.value.value).some((h) => n.compare(V(h), V(e.value))) })), v = L(() => H(n.mode.value, { 1: () => {
    var h;
    let B = V(n.value.value);
    return ((h = n.options.value.find((m) => B.some((b) => n.compare(V(b), V(m.dataRef.value))))) == null ? void 0 : h.id) === e.id;
  }, 0: () => u.value })), a = Mn(s), i = L(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return a();
  }, domRef: s }));
  te(() => n.registerOption(e.id, i)), Pe(() => n.unregisterOption(e.id)), te(() => {
    ce([n.listboxState, u], () => {
      n.listboxState.value === 0 && u.value && H(n.mode.value, { 1: () => {
        v.value && n.goToOption(M.Specific, e.id);
      }, 0: () => {
        n.goToOption(M.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), de(() => {
    n.listboxState.value === 0 && l.value && n.activationTrigger.value !== 0 && K(() => {
      var h, B;
      return (B = (h = j(s)) == null ? void 0 : h.scrollIntoView) == null ? void 0 : B.call(h, { block: "nearest" });
    });
  });
  function y(h) {
    if (e.disabled)
      return h.preventDefault();
    n.select(e.value), n.mode.value === 0 && (n.closeListbox(), K(() => {
      var B;
      return (B = j(n.buttonRef)) == null ? void 0 : B.focus({ preventScroll: !0 });
    }));
  }
  function O() {
    if (e.disabled)
      return n.goToOption(M.Nothing);
    n.goToOption(M.Specific, e.id);
  }
  let k = Fn();
  function $(h) {
    k.update(h);
  }
  function x(h) {
    k.wasMoved(h) && (e.disabled || l.value || n.goToOption(M.Specific, e.id, 0));
  }
  function N(h) {
    k.wasMoved(h) && (e.disabled || l.value && n.goToOption(M.Nothing));
  }
  return () => {
    let { disabled: h } = e, B = { active: l.value, selected: u.value, disabled: h }, { id: m, value: b, disabled: _, ...z } = e, A = { id: m, ref: s, role: "option", tabIndex: h === !0 ? void 0 : -1, "aria-disabled": h === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onClick: y, onFocus: O, onPointerenter: $, onMouseenter: $, onPointermove: x, onMousemove: x, onPointerleave: N, onMouseleave: N };
    return Z({ ourProps: A, theirProps: z, slot: B, attrs: o, slots: t, name: "ListboxOption" });
  };
} });
const Qn = {}, Xn = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Zn = /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1), eo = [
  Zn
];
function to(e, t) {
  return d(), f("svg", Xn, eo);
}
const no = /* @__PURE__ */ I(Qn, [["render", to]]), oo = {};
function ro(e, t) {
  return d(), R(oe, {
    "enter-active-class": "transition ease-out duration-200",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95"
  }, {
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 3
  });
}
const Ge = /* @__PURE__ */ I(oo, [["render", ro]]), so = {}, lo = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, ao = /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), io = [
  ao
];
function uo(e, t) {
  return d(), f("svg", lo, io);
}
const co = /* @__PURE__ */ I(so, [["render", uo]]), fo = { class: "text-sm" }, po = {
  inheritAttrs: !1
}, Cr = /* @__PURE__ */ Object.assign(po, {
  __name: "SelectInput",
  props: {
    ...ie,
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
    return (t, o) => (d(), R(Be, Te(Ie(
      Object.keys(S(ie)).reduce((r, n) => (r[n] = t.$props[n], r), {})
    )), {
      default: w(() => [
        P(S(qn), {
          "model-value": e.modelValue,
          multiple: e.multiple,
          by: "id",
          "onUpdate:modelValue": o[0] || (o[0] = (r) => t.$emit("update:modelValue", r))
        }, {
          default: w(() => [
            P(S(Jn), {
              class: T({
                "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
              })
            }, {
              default: w(() => {
                var r, n;
                return [
                  c("div", fo, q(Array.isArray(e.modelValue) ? (r = e.modelValue) == null ? void 0 : r.map((s) => s.name).join(", ") : ((n = e.modelValue) == null ? void 0 : n.name) || e.defaultText), 1),
                  P(co, { class: "h-4 w-4" })
                ];
              }),
              _: 1
            }, 8, ["class"]),
            P(Ge, null, {
              default: w(() => [
                P(S(Gn), {
                  class: T(["min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                    "right-0": e.align === "right",
                    "left-0": e.align === "left"
                  }])
                }, {
                  default: w(() => [
                    p(t.$slots, "listbox-title"),
                    (d(!0), f(Q, null, Ne(e.options, (r) => (d(), R(S(Yn), {
                      key: r.id,
                      value: r,
                      as: "template"
                    }, {
                      default: w(({ active: n, selected: s }) => [
                        c("li", {
                          class: T(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                            "bg-zinc-50 dark:bg-zinc-900": s,
                            "bg-zinc-100 dark:bg-zinc-700": n
                          }])
                        }, [
                          J(q(r.name) + " ", 1),
                          s ? (d(), R(no, {
                            key: 0,
                            class: "h-5 w-5"
                          })) : D("", !0)
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
function vo() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class mo {
  constructor(t, o = {}) {
    this.component = t, this.data = o;
  }
}
const ho = ee({
  modals: ee([]),
  push(e, t = {}) {
    return t.key || (t.key = vo()), this.modals.push(ee(new mo(e, t))), document.body.classList.add("overflow-y-hidden"), t.key;
  },
  pop(e = 1) {
    for (let t = 0; t < e; t += 1)
      this.modals.pop();
    this.modals.length === 0 && document.body.classList.remove("overflow-y-hidden");
  },
  clear() {
    this.modals = ee([]);
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
}), bo = {
  data() {
    return {
      open: !1,
      modals: ho
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
}, go = { class: "flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0" }, yo = {
  key: "modalBackground",
  class: "fixed inset-0 transition-opacity bg-zinc-500 bg-opacity-75",
  "aria-hidden": "true"
}, wo = /* @__PURE__ */ c("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), xo = { class: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block" }, _o = /* @__PURE__ */ c("span", { class: "sr-only" }, "Close", -1), $o = /* @__PURE__ */ c("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ c("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), ko = [
  _o,
  $o
];
function So(e, t, o, r, n, s) {
  return d(), f("div", null, [
    c("div", {
      class: T(["fixed inset-0 z-50 flex justify-center max-w-full overflow-y-auto", e.$modals.all.length ? "" : "pointer-events-none"]),
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true"
    }, [
      c("div", go, [
        P(oe, {
          "enter-active-class": "duration-300 ease-out",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "duration-200 ease-in",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: w(() => [
            e.$modals.all.length ? (d(), f("div", yo)) : D("", !0)
          ]),
          _: 1
        }),
        wo,
        P(Ze, {
          "enter-active-class": "duration-150 ease-out",
          "enter-from-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95",
          "enter-to-class": "translate-y-0 opacity-100 sm:scale-100",
          "leave-active-class": "duration-200 ease-in",
          "leave-from-class": "translate-y-0 opacity-100 sm:scale-100",
          "leave-to-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        }, {
          default: w(() => [
            (d(!0), f(Q, null, Ne(e.$modals.all, (l, u) => (d(), f("div", {
              key: `modal${u}`,
              class: "relative inline-block px-4 pt-5 pb-4 text-left align-bottom transition-all bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:w-full sm:p-6"
            }, [
              c("div", xo, [
                c("button", {
                  type: "button",
                  class: "text-zinc-400 bg-white rounded-md hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  onClick: t[0] || (t[0] = (v) => e.$modals.pop())
                }, ko)
              ]),
              (d(), R(Y(l.name), {
                "modal-index": u,
                data: l.data
              }, null, 8, ["modal-index", "data"]))
            ]))), 128))
          ]),
          _: 1
        })
      ])
    ], 2)
  ]);
}
const Ar = /* @__PURE__ */ I(bo, [["render", So]]);
function zo(e) {
  return et() ? (tt(e), !0) : !1;
}
function _e(e) {
  return typeof e == "function" ? e() : S(e);
}
const Oo = typeof window < "u" && typeof document < "u", Lo = Object.prototype.toString, jo = (e) => Lo.call(e) === "[object Object]", Do = () => {
};
function Co(e, t) {
  function o(...r) {
    return new Promise((n, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(n).catch(s);
    });
  }
  return o;
}
const Ye = (e) => e();
function Ao(e = Ye) {
  const t = C(!0);
  function o() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const n = (...s) => {
    t.value && e(...s);
  };
  return { isActive: nt(t), pause: o, resume: r, eventFilter: n };
}
function Eo(e, t, o = {}) {
  const {
    eventFilter: r = Ye,
    ...n
  } = o;
  return ce(
    e,
    Co(
      r,
      t
    ),
    n
  );
}
function Po(e, t, o = {}) {
  const {
    eventFilter: r,
    ...n
  } = o, { eventFilter: s, pause: l, resume: u, isActive: v } = Ao(r);
  return { stop: Eo(
    e,
    t,
    {
      ...n,
      eventFilter: s
    }
  ), pause: l, resume: u, isActive: v };
}
function To(e) {
  var t;
  const o = _e(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ue = Oo ? window : void 0;
function Ae(...e) {
  let t, o, r, n;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, r, n] = e, t = ue) : [t, o, r, n] = e, !t)
    return Do;
  Array.isArray(o) || (o = [o]), Array.isArray(r) || (r = [r]);
  const s = [], l = () => {
    s.forEach((i) => i()), s.length = 0;
  }, u = (i, y, O, k) => (i.addEventListener(y, O, k), () => i.removeEventListener(y, O, k)), v = ce(
    () => [To(t), _e(n)],
    ([i, y]) => {
      if (l(), !i)
        return;
      const O = jo(y) ? { ...y } : y;
      s.push(
        ...o.flatMap((k) => r.map(($) => u(i, k, $, O)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    v(), l();
  };
  return zo(a), a;
}
const le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ae = "__vueuse_ssr_handlers__", Io = /* @__PURE__ */ No();
function No() {
  return ae in le || (le[ae] = le[ae] || {}), le[ae];
}
function Bo(e, t) {
  return Io[e] || t;
}
function Fo(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Ro = {
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
}, Ee = "vueuse-storage";
function Mo(e, t, o, r = {}) {
  var n;
  const {
    flush: s = "pre",
    deep: l = !0,
    listenToStorageChanges: u = !0,
    writeDefaults: v = !0,
    mergeDefaults: a = !1,
    shallow: i,
    window: y = ue,
    eventFilter: O,
    onError: k = (g) => {
      console.error(g);
    }
  } = r, $ = (i ? ot : C)(t);
  if (!o)
    try {
      o = Bo("getDefaultStorage", () => {
        var g;
        return (g = ue) == null ? void 0 : g.localStorage;
      })();
    } catch (g) {
      k(g);
    }
  if (!o)
    return $;
  const x = _e(t), N = Fo(x), h = (n = r.serializer) != null ? n : Ro[N], { pause: B, resume: m } = Po(
    $,
    () => b($.value),
    { flush: s, deep: l, eventFilter: O }
  );
  return y && u && (Ae(y, "storage", A), Ae(y, Ee, z)), A(), $;
  function b(g) {
    try {
      if (g == null)
        o.removeItem(e);
      else {
        const F = h.write(g), W = o.getItem(e);
        W !== F && (o.setItem(e, F), y && y.dispatchEvent(new CustomEvent(Ee, {
          detail: {
            key: e,
            oldValue: W,
            newValue: F,
            storageArea: o
          }
        })));
      }
    } catch (F) {
      k(F);
    }
  }
  function _(g) {
    const F = g ? g.newValue : o.getItem(e);
    if (F == null)
      return v && x !== null && o.setItem(e, h.write(x)), x;
    if (!g && a) {
      const W = h.read(F);
      return typeof a == "function" ? a(W, x) : N === "object" && !Array.isArray(W) ? { ...x, ...W } : W;
    } else
      return typeof F != "string" ? F : h.read(F);
  }
  function z(g) {
    A(g.detail);
  }
  function A(g) {
    if (!(g && g.storageArea !== o)) {
      if (g && g.key == null) {
        $.value = x;
        return;
      }
      if (!(g && g.key !== e)) {
        B();
        try {
          (g == null ? void 0 : g.newValue) !== h.write($.value) && ($.value = _(g));
        } catch (F) {
          k(F);
        } finally {
          g ? K(m) : m();
        }
      }
    }
  }
}
function Vo(e, t, o = {}) {
  const { window: r = ue } = o;
  return Mo(e, t, r == null ? void 0 : r.localStorage, o);
}
const Ho = {}, Uo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, Wo = /* @__PURE__ */ c("g", { fill: "none" }, [
  /* @__PURE__ */ c("path", {
    d: "M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0z",
    fill: "currentColor"
  })
], -1), Ko = [
  Wo
];
function qo(e, t) {
  return d(), f("svg", Uo, Ko);
}
const Jo = /* @__PURE__ */ I(Ho, [["render", qo]]), Go = { class: "flex flex-col gap-6 py-6" }, Yo = { class: "flex flex-col gap-6 px-6 mb-6" }, Er = {
  __name: "Sidebar",
  setup(e) {
    const t = Vo("ui/sidebar", !1);
    return ye("sidebarMinimised", t), (o, r) => (d(), f("nav", {
      class: T(["min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10", {
        "!w-24 !max-w-24 !min-w-24": S(t),
        "w-64 max-w-64 min-w-64": !S(t)
      }])
    }, [
      c("button", {
        class: "absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-10",
        onClick: r[0] || (r[0] = (n) => t.value = !S(t))
      }, [
        P(Jo, {
          class: T(["w-5 h-5", {
            "transform rotate-180": !S(t)
          }])
        }, null, 8, ["class"])
      ]),
      c("div", Go, [
        p(o.$slots, "default")
      ]),
      c("div", Yo, [
        p(o.$slots, "bottom")
      ])
    ], 2));
  }
}, Qo = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3"
}, Pr = {
  __name: "SidebarItem",
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
    const t = e, o = ge("sidebarMinimised"), r = L(() => {
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
      return o.value ? n.push("justify-center") : n.push("px-6"), t.active ? n.push(
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
    return (n, s) => (d(), R(Y(e.as), {
      class: T(r.value)
    }, {
      default: w(() => [
        e.icon ? (d(), R(Y(e.icon), {
          key: 0,
          class: T(["w-6 h-6 transition-all", {
            " mr-4": !S(o)
          }])
        }, null, 8, ["class"])) : D("", !0),
        P(oe, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "transform opacity-0",
          "enter-to-class": "transform opacity-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100",
          "leave-to-class": "transform opacity-0"
        }, {
          default: w(() => [
            S(o) ? D("", !0) : p(n.$slots, "default", { key: 0 })
          ]),
          _: 3
        }),
        S(o) ? (d(), f("div", Qo, [
          p(n.$slots, "default")
        ])) : D("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, Xo = {}, Zo = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, er = { class: "flex w-full h-full max-h-screen z-10 relative" }, tr = { class: "flex-grow overflow-y-auto pb-12" };
function nr(e, t) {
  return d(), f("div", Zo, [
    p(e.$slots, "top"),
    c("div", er, [
      p(e.$slots, "sidebar"),
      c("section", tr, [
        p(e.$slots, "default")
      ])
    ])
  ]);
}
const Tr = /* @__PURE__ */ I(Xo, [["render", nr]]), or = {}, rr = { class: "flex flex-col gap-2 px-2" };
function sr(e, t) {
  return d(), f("div", rr, [
    p(e.$slots, "default")
  ]);
}
const Ir = /* @__PURE__ */ I(or, [["render", sr]]), lr = {};
function ar(e, t) {
  return d(), R(oe, {
    "enter-active-class": "transition ease-out duration-300",
    "enter-from-class": "transform opacity-0",
    "enter-to-class": "transform opacity-100",
    "leave-active-class": "transition ease-in duration-200",
    "leave-from-class": "transform opacity-100",
    "leave-to-class": "transform opacity-0"
  }, {
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 3
  });
}
const ir = /* @__PURE__ */ I(lr, [["render", ar]]), ur = {}, dr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, cr = /* @__PURE__ */ c("path", {
  d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
  fill: "currentColor"
}, null, -1), fr = [
  cr
];
function pr(e, t) {
  return d(), f("svg", dr, fr);
}
const vr = /* @__PURE__ */ I(ur, [["render", pr]]);
class mr {
  constructor(t, o = {}, r = () => {
  }) {
    this.type = t, this.data = o, this.resolve = r;
  }
}
const G = ee({
  dialog: null,
  info(e, t) {
    return G.create("info", { title: e, subtitle: t });
  },
  confirm(e, t) {
    return G.create("confirm", { title: e, subtitle: t });
  },
  reset() {
    G.dialog = null;
  },
  create(e, t) {
    return new Promise((o) => {
      G.dialog = new mr(e, t, o);
    });
  }
}), { info: Nr, confirm: Br, reset: me } = G, U = L(() => G.dialog), hr = {
  key: 0,
  class: "absolute inset-0 z-40 bg-black/40"
}, br = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center"
}, Fr = {
  __name: "Dialogs",
  setup(e) {
    return (t, o) => (d(), f(Q, null, [
      P(ir, null, {
        default: w(() => [
          S(U) ? (d(), f("div", hr)) : D("", !0)
        ]),
        _: 1
      }),
      P(Ge, null, {
        default: w(() => [
          S(U) ? (d(), f("div", br, [
            P(Wt, {
              class: "mx-6 w-full max-w-lg",
              "footer-justify": "end"
            }, rt({
              header: w(() => [
                P(Gt, null, {
                  default: w(() => {
                    var r, n;
                    return [
                      J(q((n = (r = S(U)) == null ? void 0 : r.data) == null ? void 0 : n.title), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              footer: w(() => [
                S(U).type === "info" ? (d(), R(Se, {
                  key: 0,
                  onClick: o[0] || (o[0] = (r) => {
                    var n;
                    (n = S(U)) == null || n.resolve(), S(me)();
                  })
                }, {
                  default: w(() => [
                    J("Ok")
                  ]),
                  _: 1
                })) : S(U).type === "confirm" ? (d(), f(Q, { key: 1 }, [
                  P(Vt, {
                    onClick: o[1] || (o[1] = (r) => {
                      var n;
                      (n = S(U)) == null || n.resolve(!1), S(me)();
                    })
                  }, {
                    default: w(() => [
                      J("No")
                    ]),
                    _: 1
                  }),
                  P(Se, {
                    onClick: o[2] || (o[2] = (r) => {
                      var n;
                      (n = S(U)) == null || n.resolve(!0), S(me)();
                    })
                  }, {
                    default: w(() => [
                      J("Yes")
                    ]),
                    _: 1
                  })
                ], 64)) : D("", !0)
              ]),
              default: w(() => {
                var r, n;
                return [
                  c("p", null, q((n = (r = S(U)) == null ? void 0 : r.data) == null ? void 0 : n.subtitle), 1)
                ];
              }),
              _: 2
            }, [
              S(U).type !== "info" ? {
                name: "extra",
                fn: w(() => [
                  P(fe, { size: "uniform" }, {
                    default: w(() => [
                      P(vr, { class: "h-5 w-5" })
                    ]),
                    _: 1
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ])) : D("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}, Rr = {
  __name: "Container",
  props: {
    narrow: Boolean
  },
  setup(e) {
    return (t, o) => (d(), f("div", {
      class: T(["mx-auto px-4 sm:px-6 lg:px-8", {
        "max-w-7xl": !e.narrow,
        "max-w-4xl": e.narrow
      }])
    }, [
      p(t.$slots, "default")
    ], 2));
  }
};
export {
  yr as AlertAction,
  fe as BaseButton,
  Wt as Card,
  Gt as CardTitle,
  Rr as Container,
  wr as DangerAlert,
  kr as DangerButton,
  Fr as Dialogs,
  Sr as Dropdown,
  zr as DropdownLink,
  Ge as FadeScaleTransition,
  Or as HH1,
  Lr as HH2,
  jr as HH3,
  xr as InfoAlert,
  Dr as Input,
  Be as InputLayout,
  Ar as ModalBase,
  Se as PrimaryButton,
  Vt as SecondaryButton,
  Cr as SelectInput,
  Er as Sidebar,
  Pr as SidebarItem,
  Ir as SidebarItemGroup,
  Tr as SidebarLayout,
  _r as SuccessAlert,
  $r as WarningAlert,
  Br as confirmDialog,
  G as dialogs,
  Nr as infoDialog,
  me as resetDialog
};
