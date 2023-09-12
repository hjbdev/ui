import { openBlock as d, createBlock as R, resolveDynamicComponent as ee, withCtx as w, createTextVNode as J, createElementVNode as c, createElementBlock as f, normalizeClass as T, renderSlot as p, createCommentVNode as D, onMounted as te, onUnmounted as Pe, computed as L, ref as C, withDirectives as $e, vShow as ke, createVNode as P, Transition as oe, resolveComponent as Qe, toDisplayString as q, normalizeProps as Te, guardReactiveProps as Ie, mergeProps as Xe, cloneVNode as Ze, h as he, Fragment as Y, inject as ge, provide as ye, watchEffect as de, defineComponent as Q, watch as ce, nextTick as K, toRaw as V, unref as S, renderList as Ne, reactive as Z, TransitionGroup as et, getCurrentScope as tt, onScopeDispose as nt, readonly as ot, shallowRef as rt, createSlots as st } from "vue";
const lt = /* @__PURE__ */ c("span", { "aria-hidden": "true" }, "→", -1), wr = {
  __name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, o) => (d(), R(ee(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: w(() => [
        J("Details "),
        lt
      ]),
      _: 1
    }));
  }
}, I = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, at = {}, it = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, ut = { class: "flex" }, dt = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
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
], -1), ct = { class: "ml-3 flex-1" }, ft = { class: "md:flex md:justify-between" }, pt = { class: "text-sm text-red-800 dark:text-red-200" }, vt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function mt(e, t) {
  return d(), f("div", it, [
    c("div", ut, [
      dt,
      c("div", ct, [
        e.$slots.title ? (d(), f("h3", {
          key: 0,
          class: T(["text-sm font-medium text-red-800 dark:text-red-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          p(e.$slots, "title")
        ], 2)) : D("", !0),
        c("div", ft, [
          c("p", pt, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), f("p", vt, [
            p(e.$slots, "action")
          ])) : D("", !0)
        ])
      ])
    ])
  ]);
}
const _r = /* @__PURE__ */ I(at, [["render", mt]]), ht = {}, bt = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, gt = { class: "flex" }, yt = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
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
], -1), wt = { class: "ml-3 flex-1" }, _t = { class: "md:flex md:justify-between" }, xt = { class: "text-sm text-blue-800 dark:text-blue-200" }, $t = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function kt(e, t) {
  return d(), f("div", bt, [
    c("div", gt, [
      yt,
      c("div", wt, [
        e.$slots.title ? (d(), f("h3", {
          key: 0,
          class: T(["text-sm font-medium text-blue-800 dark:text-blue-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          p(e.$slots, "title")
        ], 2)) : D("", !0),
        c("div", _t, [
          c("p", xt, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), f("p", $t, [
            p(e.$slots, "action")
          ])) : D("", !0)
        ])
      ])
    ])
  ]);
}
const xr = /* @__PURE__ */ I(ht, [["render", kt]]), St = {}, zt = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, Ot = { class: "flex" }, Lt = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
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
], -1), jt = { class: "ml-3 flex-1" }, Dt = { class: "md:flex md:justify-between" }, Ct = { class: "text-sm text-green-800 dark:text-green-200" }, At = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Et(e, t) {
  return d(), f("div", zt, [
    c("div", Ot, [
      Lt,
      c("div", jt, [
        e.$slots.title ? (d(), f("h3", {
          key: 0,
          class: T(["text-sm font-medium text-green-800 dark:text-green-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          p(e.$slots, "title")
        ], 2)) : D("", !0),
        c("div", Dt, [
          c("p", Ct, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), f("p", At, [
            p(e.$slots, "action")
          ])) : D("", !0)
        ])
      ])
    ])
  ]);
}
const $r = /* @__PURE__ */ I(St, [["render", Et]]), Pt = {}, Tt = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, It = { class: "flex" }, Nt = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
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
], -1), Bt = { class: "ml-3 flex-1" }, Ft = { class: "md:flex md:justify-between" }, Rt = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, Mt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Vt(e, t) {
  return d(), f("div", Tt, [
    c("div", It, [
      Nt,
      c("div", Bt, [
        e.$slots.title ? (d(), f("h3", {
          key: 0,
          class: T(["text-sm font-medium text-yellow-800 dark:text-yellow-200", {
            "mb-2": e.$slots.default
          }])
        }, [
          p(e.$slots, "title")
        ], 2)) : D("", !0),
        c("div", Ft, [
          c("p", Rt, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), f("p", Mt, [
            p(e.$slots, "action")
          ])) : D("", !0)
        ])
      ])
    ])
  ]);
}
const kr = /* @__PURE__ */ I(Pt, [["render", Vt]]), fe = {
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
    return (t, o) => (d(), R(ee(e.as), {
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
}, Ht = {
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
}, Sr = {
  __name: "DangerButton",
  setup(e) {
    return (t, o) => (d(), R(fe, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Ut = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, Wt = { key: 0 }, Kt = {
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
      t.$slots.header || t.$slots.extra ? (d(), f("div", Ut, [
        c("div", null, [
          p(t.$slots, "header")
        ]),
        t.$slots.extra ? (d(), f("div", Wt, [
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
}, qt = {}, Jt = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function Gt(e, t) {
  return d(), f("h3", Jt, [
    p(e.$slots, "default")
  ]);
}
const Yt = /* @__PURE__ */ I(qt, [["render", Gt]]), Qt = { class: "relative" }, zr = {
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
    return (l, u) => (d(), f("div", Qt, [
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
}, Or = {
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
    return (t, o) => {
      const r = Qe("Link");
      return d(), R(r, {
        href: e.href,
        class: "block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
      }, {
        default: w(() => [
          p(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["href"]);
    };
  }
}, Xt = {}, Zt = { class: "font-semibold text-3xl leading-tight" };
function en(e, t) {
  return d(), f("h1", Zt, [
    p(e.$slots, "default")
  ]);
}
const Lr = /* @__PURE__ */ I(Xt, [["render", en]]), tn = {}, nn = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function on(e, t) {
  return d(), f("h2", nn, [
    p(e.$slots, "default")
  ]);
}
const jr = /* @__PURE__ */ I(tn, [["render", on]]), rn = {}, sn = { class: "text-xl tracking-tight dark:text-white" };
function ln(e, t) {
  return d(), f("h2", sn, [
    p(e.$slots, "default")
  ]);
}
const Dr = /* @__PURE__ */ I(rn, [["render", ln]]), ie = {
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
}, an = ["for"], un = { class: "relative mt-1" }, dn = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, cn = /* @__PURE__ */ c("svg", {
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
], -1), fn = [
  cn
], pn = ["id"], vn = ["id"], Be = {
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
      }, q(t.label), 9, an)) : D("", !0),
      c("div", un, [
        p(t.$slots, "default"),
        t.error ? (d(), f("div", dn, fn)) : D("", !0)
      ]),
      t.helpText && !t.error ? (d(), f("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, q(t.helpText), 9, pn)) : t.error ? (d(), f("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, q(t.error), 9, vn)) : D("", !0)
    ]));
  }
}, mn = ["name", "id", "aria-describedby"], hn = {
  inheritAttrs: !1
}, Cr = /* @__PURE__ */ Object.assign(hn, {
  __name: "Input",
  props: {
    ...ie
  },
  setup(e) {
    return (t, o) => (d(), R(Be, Te(Ie(t.$props)), {
      default: w(() => [
        c("input", Xe(t.$attrs, {
          name: t.name,
          id: t.id,
          class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
            "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
            "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
          }],
          "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
        }), null, 16, mn)
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
var be = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(be || {}), bn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(bn || {});
function X({ visible: e = !0, features: t = 0, ourProps: o, theirProps: r, ...n }) {
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
      if (!yn(y) || O.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(v).concat(Object.keys(t)).map((_) => _.trim()).filter((_, N, h) => h.indexOf(_) === N).sort((_, N) => _.localeCompare(N)).map((_) => `  - ${_}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((_) => `  - ${_}`).join(`
`)].join(`
`));
      let k = Re((l = y.props) != null ? l : {}, v), $ = Ze(y, k);
      for (let _ in k)
        _.startsWith("on") && ($.props || ($.props = {}), $.props[_] = k[_]);
      return $;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return he(u, Object.assign({}, v, i), { default: () => a });
}
function Fe(e) {
  return e.flatMap((t) => t.type === Y ? Fe(t.children) : [t]);
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
function gn(e) {
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
function yn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let wn = 0;
function _n() {
  return ++wn;
}
function pe() {
  return _n();
}
var E = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(E || {});
function xn(e) {
  throw new Error("Unexpected object: " + e);
}
var M = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(M || {});
function $n(e, t) {
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
function kn() {
  return ge(Ve, null);
}
function Sn(e) {
  ye(Ve, e);
}
function ze(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function zn(e, t) {
  let o = C(ze(e.value.type, e.value.as));
  return te(() => {
    o.value = ze(e.value.type, e.value.as);
  }), de(() => {
    var r;
    o.value || j(t) && j(t) instanceof HTMLButtonElement && !((r = j(t)) != null && r.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var On = Object.defineProperty, Ln = (e, t, o) => t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Oe = (e, t, o) => (Ln(e, typeof t != "symbol" ? t + "" : t, o), o);
class jn {
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
let we = new jn();
function Dn(e) {
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
var Cn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Cn || {}), An = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(An || {}), En = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(En || {}), _e = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(_e || {});
function He(e, t = 0) {
  var o;
  return e === ((o = Dn(e)) == null ? void 0 : o.body) ? !1 : H(t, { 0() {
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
var Pn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Pn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Tn(e, t = (o) => o) {
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
function In(e, t, o) {
  we.isServer || de((r) => {
    window.addEventListener(e, t, o), r(() => window.removeEventListener(e, t, o));
  });
}
function Nn(e, t, o = L(() => !0)) {
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
    return !He(u, _e.Loose) && u.tabIndex !== -1 && s.preventDefault(), t(s, u);
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
  }, !0), se("touchend", (s) => r(s, () => s.target instanceof HTMLElement ? s.target : null), !0), In("blur", (s) => r(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ue = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ue || {});
let Bn = Q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: r, ...n } = e, s = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return X({ ourProps: s, theirProps: n, slot: {}, attrs: o, slots: t, name: "Hidden" });
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
function Fn(e, t, o) {
  let r = C(o == null ? void 0 : o.value), n = L(() => e.value !== void 0);
  return [L(() => n.value ? e.value : r.value), function(s) {
    return n.value || (r.value = s), t == null ? void 0 : t(s);
  }];
}
function je(e) {
  return [e.screenX, e.screenY];
}
function Rn() {
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
function Mn(e) {
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
function Vn(e) {
  let t = C(""), o = C("");
  return () => {
    let r = j(e);
    if (!r)
      return "";
    let n = r.innerText;
    if (t.value === n)
      return o.value;
    let s = Mn(r).trim().toLowerCase();
    return t.value = n, o.value = s, s;
  };
}
function Hn(e, t) {
  return e === t;
}
var Un = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Un || {}), Wn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Wn || {}), Kn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Kn || {});
function qn(e) {
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
let Jn = Q({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Hn }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: o, emit: r }) {
  let n = C(1), s = C(null), l = C(null), u = C(null), v = C([]), a = C(""), i = C(null), y = C(1);
  function O(m = (b) => b) {
    let b = i.value !== null ? v.value[i.value] : null, x = Tn(m(v.value.slice()), (A) => j(A.dataRef.domRef)), z = b ? x.indexOf(b) : null;
    return z === -1 && (z = null), { options: x, activeOptionIndex: z };
  }
  let k = L(() => e.multiple ? 1 : 0), [$, _] = Fn(L(() => e.modelValue), (m) => r("update:modelValue", m), L(() => e.defaultValue)), N = L(() => $.value === void 0 ? H(k.value, { 1: [], 0: void 0 }) : $.value), h = { listboxState: n, value: N, mode: k, compare(m, b) {
    if (typeof e.by == "string") {
      let x = e.by;
      return (m == null ? void 0 : m[x]) === (b == null ? void 0 : b[x]);
    }
    return e.by(m, b);
  }, orientation: L(() => e.horizontal ? "horizontal" : "vertical"), labelRef: s, buttonRef: l, optionsRef: u, disabled: L(() => e.disabled), options: v, searchQuery: a, activeOptionIndex: i, activationTrigger: y, closeListbox() {
    e.disabled || n.value !== 1 && (n.value = 1, i.value = null);
  }, openListbox() {
    e.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(m, b, x) {
    if (e.disabled || n.value === 1)
      return;
    let z = O(), A = $n(m === M.Specific ? { focus: M.Specific, id: b } : { focus: m }, { resolveItems: () => z.options, resolveActiveIndex: () => z.activeOptionIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    a.value = "", i.value = A, y.value = x ?? 1, v.value = z.options;
  }, search(m) {
    if (e.disabled || n.value === 1)
      return;
    let b = a.value !== "" ? 0 : 1;
    a.value += m.toLowerCase();
    let x = (i.value !== null ? v.value.slice(i.value + b).concat(v.value.slice(0, i.value + b)) : v.value).find((A) => A.dataRef.textValue.startsWith(a.value) && !A.dataRef.disabled), z = x ? v.value.indexOf(x) : -1;
    z === -1 || z === i.value || (i.value = z, y.value = 1);
  }, clearSearch() {
    e.disabled || n.value !== 1 && a.value !== "" && (a.value = "");
  }, registerOption(m, b) {
    let x = O((z) => [...z, { id: m, dataRef: b }]);
    v.value = x.options, i.value = x.activeOptionIndex;
  }, unregisterOption(m) {
    let b = O((x) => {
      let z = x.findIndex((A) => A.id === m);
      return z !== -1 && x.splice(z, 1), x;
    });
    v.value = b.options, i.value = b.activeOptionIndex, y.value = 1;
  }, theirOnChange(m) {
    e.disabled || _(m);
  }, select(m) {
    e.disabled || _(H(k.value, { 0: () => m, 1: () => {
      let b = V(h.value.value).slice(), x = V(m), z = b.findIndex((A) => h.compare(x, V(A)));
      return z === -1 ? b.push(x) : b.splice(z, 1), b;
    } }));
  } };
  Nn([l, u], (m, b) => {
    var x;
    h.closeListbox(), He(b, _e.Loose) || (m.preventDefault(), (x = j(l)) == null || x.focus());
  }, L(() => n.value === 0)), ye(Je, h), Sn(L(() => H(n.value, { 0: ne.Open, 1: ne.Closed })));
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
    let { name: m, modelValue: b, disabled: x, form: z, ...A } = e, g = { open: n.value === 0, disabled: x, value: N.value };
    return he(Y, [...m != null && N.value != null ? We({ [m]: N.value }).map(([F, W]) => he(Bn, gn({ features: Ue.Hidden, key: F, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: z, name: F, value: W }))) : [], X({ ourProps: {}, theirProps: { ...o, ...Me(A, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: g, slots: t, attrs: o, name: "Listbox" })]);
  };
} });
Q({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let r = re("ListboxLabel");
  function n() {
    var s;
    (s = j(r.buttonRef)) == null || s.focus({ preventScroll: !0 });
  }
  return () => {
    let s = { open: r.listboxState.value === 0, disabled: r.disabled.value }, { id: l, ...u } = e, v = { id: l, ref: r.labelRef, onClick: n };
    return X({ ourProps: v, theirProps: u, slot: s, attrs: t, slots: o, name: "ListboxLabel" });
  };
} });
let Gn = Q({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: r }) {
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
    })) : (a.preventDefault(), n.openListbox(), qn(() => {
      var i;
      return (i = j(n.optionsRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })));
  }
  let v = zn(L(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var a, i;
    let y = { open: n.listboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: O, ...k } = e, $ = { ref: n.buttonRef, id: O, type: v.value, "aria-haspopup": "listbox", "aria-controls": (a = j(n.optionsRef)) == null ? void 0 : a.id, "aria-expanded": n.listboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(i = j(n.labelRef)) == null ? void 0 : i.id, O].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: s, onKeyup: l, onClick: u };
    return X({ ourProps: $, theirProps: k, slot: y, attrs: t, slots: o, name: "ListboxButton" });
  };
} }), Yn = Q({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: r }) {
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
  let u = kn(), v = L(() => u !== null ? (u.value & ne.Open) === ne.Open : n.listboxState.value === 0);
  return () => {
    var a, i, y, O;
    let k = { open: n.listboxState.value === 0 }, { id: $, ..._ } = e, N = { "aria-activedescendant": n.activeOptionIndex.value === null || (a = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : a.id, "aria-multiselectable": n.mode.value === 1 ? !0 : void 0, "aria-labelledby": (O = (i = j(n.labelRef)) == null ? void 0 : i.id) != null ? O : (y = j(n.buttonRef)) == null ? void 0 : y.id, "aria-orientation": n.orientation.value, id: $, onKeydown: l, role: "listbox", tabIndex: 0, ref: n.optionsRef };
    return X({ ourProps: N, theirProps: _, slot: k, attrs: t, slots: o, features: be.RenderStrategy | be.Static, visible: v.value, name: "ListboxOptions" });
  };
} }), Qn = Q({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${pe()}` } }, setup(e, { slots: t, attrs: o, expose: r }) {
  let n = re("ListboxOption"), s = C(null);
  r({ el: s, $el: s });
  let l = L(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === e.id : !1), u = L(() => H(n.mode.value, { 0: () => n.compare(V(n.value.value), V(e.value)), 1: () => V(n.value.value).some((h) => n.compare(V(h), V(e.value))) })), v = L(() => H(n.mode.value, { 1: () => {
    var h;
    let B = V(n.value.value);
    return ((h = n.options.value.find((m) => B.some((b) => n.compare(V(b), V(m.dataRef.value))))) == null ? void 0 : h.id) === e.id;
  }, 0: () => u.value })), a = Vn(s), i = L(() => ({ disabled: e.disabled, value: e.value, get textValue() {
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
  let k = Rn();
  function $(h) {
    k.update(h);
  }
  function _(h) {
    k.wasMoved(h) && (e.disabled || l.value || n.goToOption(M.Specific, e.id, 0));
  }
  function N(h) {
    k.wasMoved(h) && (e.disabled || l.value && n.goToOption(M.Nothing));
  }
  return () => {
    let { disabled: h } = e, B = { active: l.value, selected: u.value, disabled: h }, { id: m, value: b, disabled: x, ...z } = e, A = { id: m, ref: s, role: "option", tabIndex: h === !0 ? void 0 : -1, "aria-disabled": h === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onClick: y, onFocus: O, onPointerenter: $, onMouseenter: $, onPointermove: _, onMousemove: _, onPointerleave: N, onMouseleave: N };
    return X({ ourProps: A, theirProps: z, slot: B, attrs: o, slots: t, name: "ListboxOption" });
  };
} });
const Xn = {}, Zn = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, eo = /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1), to = [
  eo
];
function no(e, t) {
  return d(), f("svg", Zn, to);
}
const oo = /* @__PURE__ */ I(Xn, [["render", no]]), ro = {};
function so(e, t) {
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
const Ge = /* @__PURE__ */ I(ro, [["render", so]]), lo = {}, ao = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, io = /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), uo = [
  io
];
function co(e, t) {
  return d(), f("svg", ao, uo);
}
const fo = /* @__PURE__ */ I(lo, [["render", co]]), po = { class: "text-sm" }, vo = {
  inheritAttrs: !1
}, Ar = /* @__PURE__ */ Object.assign(vo, {
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
        P(S(Jn), {
          "model-value": e.modelValue,
          multiple: e.multiple,
          by: "id",
          "onUpdate:modelValue": o[0] || (o[0] = (r) => t.$emit("update:modelValue", r))
        }, {
          default: w(() => [
            P(S(Gn), {
              class: T({
                "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
              })
            }, {
              default: w(() => {
                var r, n;
                return [
                  c("div", po, q(Array.isArray(e.modelValue) ? (r = e.modelValue) == null ? void 0 : r.map((s) => s.name).join(", ") : ((n = e.modelValue) == null ? void 0 : n.name) || e.defaultText), 1),
                  P(fo, { class: "h-4 w-4" })
                ];
              }),
              _: 1
            }, 8, ["class"]),
            P(Ge, null, {
              default: w(() => [
                P(S(Yn), {
                  class: T(["min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                    "right-0": e.align === "right",
                    "left-0": e.align === "left"
                  }])
                }, {
                  default: w(() => [
                    p(t.$slots, "listbox-title"),
                    (d(!0), f(Y, null, Ne(e.options, (r) => (d(), R(S(Qn), {
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
                          s ? (d(), R(oo, {
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
function mo() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class ho {
  constructor(t, o = {}) {
    this.component = t, this.data = o;
  }
}
const bo = Z({
  modals: Z([]),
  push(e, t = {}) {
    return t.key || (t.key = mo()), this.modals.push(Z(new ho(e, t))), document.body.classList.add("overflow-y-hidden"), t.key;
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
}), go = {
  data() {
    return {
      open: !1,
      modals: bo
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
}, yo = { class: "flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0" }, wo = {
  key: "modalBackground",
  class: "fixed inset-0 transition-opacity bg-zinc-500 bg-opacity-75",
  "aria-hidden": "true"
}, _o = /* @__PURE__ */ c("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), xo = { class: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block" }, $o = /* @__PURE__ */ c("span", { class: "sr-only" }, "Close", -1), ko = /* @__PURE__ */ c("svg", {
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
], -1), So = [
  $o,
  ko
];
function zo(e, t, o, r, n, s) {
  return d(), f("div", null, [
    c("div", {
      class: T(["fixed inset-0 z-50 flex justify-center max-w-full overflow-y-auto", e.$modals.all.length ? "" : "pointer-events-none"]),
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true"
    }, [
      c("div", yo, [
        P(oe, {
          "enter-active-class": "duration-300 ease-out",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "duration-200 ease-in",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: w(() => [
            e.$modals.all.length ? (d(), f("div", wo)) : D("", !0)
          ]),
          _: 1
        }),
        _o,
        P(et, {
          "enter-active-class": "duration-150 ease-out",
          "enter-from-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95",
          "enter-to-class": "translate-y-0 opacity-100 sm:scale-100",
          "leave-active-class": "duration-200 ease-in",
          "leave-from-class": "translate-y-0 opacity-100 sm:scale-100",
          "leave-to-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        }, {
          default: w(() => [
            (d(!0), f(Y, null, Ne(e.$modals.all, (l, u) => (d(), f("div", {
              key: `modal${u}`,
              class: "relative inline-block px-4 pt-5 pb-4 text-left align-bottom transition-all bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:w-full sm:p-6"
            }, [
              c("div", xo, [
                c("button", {
                  type: "button",
                  class: "text-zinc-400 bg-white rounded-md hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  onClick: t[0] || (t[0] = (v) => e.$modals.pop())
                }, So)
              ]),
              (d(), R(ee(l.name), {
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
const Er = /* @__PURE__ */ I(go, [["render", zo]]);
function Oo(e) {
  return tt() ? (nt(e), !0) : !1;
}
function xe(e) {
  return typeof e == "function" ? e() : S(e);
}
const Lo = typeof window < "u" && typeof document < "u", jo = Object.prototype.toString, Do = (e) => jo.call(e) === "[object Object]", Co = () => {
};
function Ao(e, t) {
  function o(...r) {
    return new Promise((n, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(n).catch(s);
    });
  }
  return o;
}
const Ye = (e) => e();
function Eo(e = Ye) {
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
  return { isActive: ot(t), pause: o, resume: r, eventFilter: n };
}
function Po(e, t, o = {}) {
  const {
    eventFilter: r = Ye,
    ...n
  } = o;
  return ce(
    e,
    Ao(
      r,
      t
    ),
    n
  );
}
function To(e, t, o = {}) {
  const {
    eventFilter: r,
    ...n
  } = o, { eventFilter: s, pause: l, resume: u, isActive: v } = Eo(r);
  return { stop: Po(
    e,
    t,
    {
      ...n,
      eventFilter: s
    }
  ), pause: l, resume: u, isActive: v };
}
function Io(e) {
  var t;
  const o = xe(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ue = Lo ? window : void 0;
function Ae(...e) {
  let t, o, r, n;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, r, n] = e, t = ue) : [t, o, r, n] = e, !t)
    return Co;
  Array.isArray(o) || (o = [o]), Array.isArray(r) || (r = [r]);
  const s = [], l = () => {
    s.forEach((i) => i()), s.length = 0;
  }, u = (i, y, O, k) => (i.addEventListener(y, O, k), () => i.removeEventListener(y, O, k)), v = ce(
    () => [Io(t), xe(n)],
    ([i, y]) => {
      if (l(), !i)
        return;
      const O = Do(y) ? { ...y } : y;
      s.push(
        ...o.flatMap((k) => r.map(($) => u(i, k, $, O)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    v(), l();
  };
  return Oo(a), a;
}
const le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ae = "__vueuse_ssr_handlers__", No = /* @__PURE__ */ Bo();
function Bo() {
  return ae in le || (le[ae] = le[ae] || {}), le[ae];
}
function Fo(e, t) {
  return No[e] || t;
}
function Ro(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Mo = {
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
function Vo(e, t, o, r = {}) {
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
  } = r, $ = (i ? rt : C)(t);
  if (!o)
    try {
      o = Fo("getDefaultStorage", () => {
        var g;
        return (g = ue) == null ? void 0 : g.localStorage;
      })();
    } catch (g) {
      k(g);
    }
  if (!o)
    return $;
  const _ = xe(t), N = Ro(_), h = (n = r.serializer) != null ? n : Mo[N], { pause: B, resume: m } = To(
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
  function x(g) {
    const F = g ? g.newValue : o.getItem(e);
    if (F == null)
      return v && _ !== null && o.setItem(e, h.write(_)), _;
    if (!g && a) {
      const W = h.read(F);
      return typeof a == "function" ? a(W, _) : N === "object" && !Array.isArray(W) ? { ..._, ...W } : W;
    } else
      return typeof F != "string" ? F : h.read(F);
  }
  function z(g) {
    A(g.detail);
  }
  function A(g) {
    if (!(g && g.storageArea !== o)) {
      if (g && g.key == null) {
        $.value = _;
        return;
      }
      if (!(g && g.key !== e)) {
        B();
        try {
          (g == null ? void 0 : g.newValue) !== h.write($.value) && ($.value = x(g));
        } catch (F) {
          k(F);
        } finally {
          g ? K(m) : m();
        }
      }
    }
  }
}
function Ho(e, t, o = {}) {
  const { window: r = ue } = o;
  return Vo(e, t, r == null ? void 0 : r.localStorage, o);
}
const Uo = {}, Wo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, Ko = /* @__PURE__ */ c("g", { fill: "none" }, [
  /* @__PURE__ */ c("path", {
    d: "M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0z",
    fill: "currentColor"
  })
], -1), qo = [
  Ko
];
function Jo(e, t) {
  return d(), f("svg", Wo, qo);
}
const Go = /* @__PURE__ */ I(Uo, [["render", Jo]]), Yo = { class: "flex flex-col gap-6 py-6" }, Qo = { class: "flex flex-col gap-6 px-6 mb-6" }, Pr = {
  __name: "Sidebar",
  setup(e) {
    const t = Ho("ui/sidebar", !1);
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
        P(Go, {
          class: T(["w-5 h-5", {
            "transform rotate-180": !S(t)
          }])
        }, null, 8, ["class"])
      ]),
      c("div", Yo, [
        p(o.$slots, "default")
      ]),
      c("div", Qo, [
        p(o.$slots, "bottom")
      ])
    ], 2));
  }
}, Xo = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-900 shadow-lg py-3 px-6 rounded-full ml-3"
}, Tr = {
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
    return (n, s) => (d(), R(ee(e.as), {
      class: T(r.value)
    }, {
      default: w(() => [
        e.icon ? (d(), R(ee(e.icon), {
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
        S(o) ? (d(), f("div", Xo, [
          p(n.$slots, "default")
        ])) : D("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, Zo = {}, er = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, tr = { class: "flex w-full h-full max-h-screen z-10 relative" }, nr = { class: "flex-grow overflow-y-auto pb-12" };
function or(e, t) {
  return d(), f("div", er, [
    p(e.$slots, "top"),
    c("div", tr, [
      p(e.$slots, "sidebar"),
      c("section", nr, [
        p(e.$slots, "default")
      ])
    ])
  ]);
}
const Ir = /* @__PURE__ */ I(Zo, [["render", or]]), rr = {}, sr = { class: "flex flex-col gap-2 px-2" };
function lr(e, t) {
  return d(), f("div", sr, [
    p(e.$slots, "default")
  ]);
}
const Nr = /* @__PURE__ */ I(rr, [["render", lr]]), ar = {};
function ir(e, t) {
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
const ur = /* @__PURE__ */ I(ar, [["render", ir]]), dr = {}, cr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, fr = /* @__PURE__ */ c("path", {
  d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
  fill: "currentColor"
}, null, -1), pr = [
  fr
];
function vr(e, t) {
  return d(), f("svg", cr, pr);
}
const mr = /* @__PURE__ */ I(dr, [["render", vr]]);
class hr {
  constructor(t, o = {}, r = () => {
  }) {
    this.type = t, this.data = o, this.resolve = r;
  }
}
const G = Z({
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
      G.dialog = new hr(e, t, o);
    });
  }
}), { info: Br, confirm: Fr, reset: me } = G, U = L(() => G.dialog), br = {
  key: 0,
  class: "absolute inset-0 z-40 bg-black/40"
}, gr = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center"
}, Rr = {
  __name: "Dialogs",
  setup(e) {
    return (t, o) => (d(), f(Y, null, [
      P(ur, null, {
        default: w(() => [
          S(U) ? (d(), f("div", br)) : D("", !0)
        ]),
        _: 1
      }),
      P(Ge, null, {
        default: w(() => [
          S(U) ? (d(), f("div", gr, [
            P(Kt, {
              class: "mx-6 w-full max-w-lg",
              "footer-justify": "end"
            }, st({
              header: w(() => [
                P(Yt, null, {
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
                })) : S(U).type === "confirm" ? (d(), f(Y, { key: 1 }, [
                  P(Ht, {
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
                      P(mr, { class: "h-5 w-5" })
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
}, Mr = {
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
  wr as AlertAction,
  fe as BaseButton,
  Kt as Card,
  Yt as CardTitle,
  Mr as Container,
  _r as DangerAlert,
  Sr as DangerButton,
  Rr as Dialogs,
  zr as Dropdown,
  Or as DropdownLink,
  Ge as FadeScaleTransition,
  Lr as HH1,
  jr as HH2,
  Dr as HH3,
  xr as InfoAlert,
  Cr as Input,
  Be as InputLayout,
  Er as ModalBase,
  Se as PrimaryButton,
  Ht as SecondaryButton,
  Ar as SelectInput,
  Pr as Sidebar,
  Tr as SidebarItem,
  Nr as SidebarItemGroup,
  Ir as SidebarLayout,
  $r as SuccessAlert,
  kr as WarningAlert,
  Fr as confirmDialog,
  G as dialogs,
  Br as infoDialog,
  me as resetDialog
};
