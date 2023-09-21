import { openBlock as d, createBlock as R, resolveDynamicComponent as X, withCtx as z, createTextVNode as ee, createElementVNode as p, createElementBlock as y, normalizeClass as B, renderSlot as x, createCommentVNode as T, onMounted as ae, onUnmounted as bt, computed as j, ref as M, withDirectives as et, vShow as tt, createVNode as N, Transition as be, toDisplayString as Z, normalizeProps as yt, guardReactiveProps as _t, mergeProps as Xt, cloneVNode as Yt, h as Re, Fragment as Y, inject as qe, provide as We, watchEffect as Te, defineComponent as ce, watch as de, nextTick as G, toRaw as q, unref as L, renderList as Ke, getCurrentScope as Qt, onScopeDispose as Zt, readonly as en, getCurrentInstance as tn, shallowRef as nn, useSlots as rn, reactive as te, createSlots as sn, markRaw as on } from "vue";
const O = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, an = /* @__PURE__ */ p(
  "span",
  { "aria-hidden": "true" },
  "→",
  -1
  /* HOISTED */
), ln = {
  __name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, n) => (d(), R(X(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: z(() => [
        ee("Details "),
        an
      ]),
      _: 1
      /* STABLE */
    }));
  }
}, Ti = /* @__PURE__ */ O(ln, [["__file", "/home/harry/Sites/ui/src/components/Alerts/AlertAction.vue"]]), un = {}, cn = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, dn = { class: "flex" }, fn = /* @__PURE__ */ p(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ T(" Heroicon name: solid/x-circle "),
    /* @__PURE__ */ p("svg", {
      class: "h-5 w-5 text-red-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ p("path", {
        "fill-rule": "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
        "clip-rule": "evenodd"
      })
    ])
  ],
  -1
  /* HOISTED */
), pn = { class: "ml-3 flex-1" }, mn = { class: "md:flex md:justify-between" }, hn = { class: "text-sm text-red-800 dark:text-red-200" }, vn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function gn(e, t) {
  return d(), y("div", cn, [
    p("div", dn, [
      fn,
      p("div", pn, [
        e.$slots.title ? (d(), y(
          "h3",
          {
            key: 0,
            class: B(["text-sm font-medium text-red-800 dark:text-red-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            x(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : T("v-if", !0),
        p("div", mn, [
          p("p", hn, [
            x(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), y("p", vn, [
            x(e.$slots, "action")
          ])) : T("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Ai = /* @__PURE__ */ O(un, [["render", gn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/DangerAlert.vue"]]), bn = {}, yn = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, _n = { class: "flex" }, wn = /* @__PURE__ */ p(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ T(" Heroicon name: solid/information-circle "),
    /* @__PURE__ */ p("svg", {
      class: "h-5 w-5 text-blue-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ p("path", {
        "fill-rule": "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
        "clip-rule": "evenodd"
      })
    ])
  ],
  -1
  /* HOISTED */
), xn = { class: "ml-3 flex-1" }, $n = { class: "md:flex md:justify-between" }, Sn = { class: "text-sm text-blue-800 dark:text-blue-200" }, kn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function On(e, t) {
  return d(), y("div", yn, [
    p("div", _n, [
      wn,
      p("div", xn, [
        e.$slots.title ? (d(), y(
          "h3",
          {
            key: 0,
            class: B(["text-sm font-medium text-blue-800 dark:text-blue-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            x(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : T("v-if", !0),
        p("div", $n, [
          p("p", Sn, [
            x(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), y("p", kn, [
            x(e.$slots, "action")
          ])) : T("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Di = /* @__PURE__ */ O(bn, [["render", On], ["__file", "/home/harry/Sites/ui/src/components/Alerts/InfoAlert.vue"]]), zn = {}, Tn = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, An = { class: "flex" }, Dn = /* @__PURE__ */ p(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ T(" Heroicon name: solid/check-circle "),
    /* @__PURE__ */ p("svg", {
      class: "h-5 w-5 text-green-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ p("path", {
        "fill-rule": "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        "clip-rule": "evenodd"
      })
    ])
  ],
  -1
  /* HOISTED */
), Ln = { class: "ml-3 flex-1" }, En = { class: "md:flex md:justify-between" }, Cn = { class: "text-sm text-green-800 dark:text-green-200" }, jn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Mn(e, t) {
  return d(), y("div", Tn, [
    p("div", An, [
      Dn,
      p("div", Ln, [
        e.$slots.title ? (d(), y(
          "h3",
          {
            key: 0,
            class: B(["text-sm font-medium text-green-800 dark:text-green-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            x(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : T("v-if", !0),
        p("div", En, [
          p("p", Cn, [
            x(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), y("p", jn, [
            x(e.$slots, "action")
          ])) : T("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Li = /* @__PURE__ */ O(zn, [["render", Mn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/SuccessAlert.vue"]]), Pn = {}, In = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, Rn = { class: "flex" }, Bn = /* @__PURE__ */ p(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ T(" Heroicon name: solid/exclamation "),
    /* @__PURE__ */ p("svg", {
      class: "h-5 w-5 text-yellow-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ p("path", {
        "fill-rule": "evenodd",
        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
        "clip-rule": "evenodd"
      })
    ])
  ],
  -1
  /* HOISTED */
), Fn = { class: "ml-3 flex-1" }, Nn = { class: "md:flex md:justify-between" }, Vn = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, Hn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Un(e, t) {
  return d(), y("div", In, [
    p("div", Rn, [
      Bn,
      p("div", Fn, [
        e.$slots.title ? (d(), y(
          "h3",
          {
            key: 0,
            class: B(["text-sm font-medium text-yellow-800 dark:text-yellow-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            x(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : T("v-if", !0),
        p("div", Nn, [
          p("p", Vn, [
            x(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), y("p", Hn, [
            x(e.$slots, "action")
          ])) : T("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Ei = /* @__PURE__ */ O(Pn, [["render", Un], ["__file", "/home/harry/Sites/ui/src/components/Alerts/WarningAlert.vue"]]), qn = {
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
    return (t, n) => (d(), R(X(e.as), {
      class: B(["inline-flex items-center border border-transparent rounded-md font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2", {
        "p-1.5": e.size === "uniform",
        "px-1 py-0.5 text-xs": e.size === "tiny",
        "px-2 py-1 text-xs": e.size === "small",
        "px-3.5 py-1.5 text-sm": e.size === "medium",
        "px-3.5 py-1.5 text-base": e.size === "large"
      }])
    }, {
      default: z(() => [
        x(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, Ae = /* @__PURE__ */ O(qn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/BaseButton.vue"]]), Wn = {
  __name: "PrimaryButton",
  setup(e) {
    return (t, n) => (d(), R(Ae, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: z(() => [
        x(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, nt = /* @__PURE__ */ O(Wn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/PrimaryButton.vue"]]), Kn = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, n) => (d(), R(Ae, {
      type: e.type,
      class: "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
    }, {
      default: z(() => [
        x(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["type"]));
  }
}, Gn = /* @__PURE__ */ O(Kn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/SecondaryButton.vue"]]), Jn = {
  __name: "DangerButton",
  setup(e) {
    return (t, n) => (d(), R(Ae, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: z(() => [
        x(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Ci = /* @__PURE__ */ O(Jn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/DangerButton.vue"]]), Xn = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, Yn = { key: 0 }, Qn = {
  __name: "Card",
  props: {
    flush: Boolean,
    footerJustify: {
      type: String,
      default: "start"
    }
  },
  setup(e) {
    return (t, n) => (d(), y(
      "div",
      {
        class: B(["bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-zinc-900 dark:text-zinc-100", {
          "p-6": !e.flush
        }])
      },
      [
        t.$slots.header || t.$slots.extra ? (d(), y("div", Xn, [
          p("div", null, [
            x(t.$slots, "header")
          ]),
          t.$slots.extra ? (d(), y("div", Yn, [
            x(t.$slots, "extra")
          ])) : T("v-if", !0)
        ])) : T("v-if", !0),
        x(t.$slots, "default"),
        t.$slots.footer ? (d(), y(
          "div",
          {
            key: 1,
            class: B(["mt-6 flex gap-2", {
              "justify-end": e.footerJustify === "end",
              "justify-between": e.footerJustify === "between"
            }])
          },
          [
            x(t.$slots, "footer")
          ],
          2
          /* CLASS */
        )) : T("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}, Zn = /* @__PURE__ */ O(Qn, [["__file", "/home/harry/Sites/ui/src/components/Cards/Card.vue"]]), er = {}, tr = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function nr(e, t) {
  return d(), y("h3", tr, [
    x(e.$slots, "default")
  ]);
}
const rr = /* @__PURE__ */ O(er, [["render", nr], ["__file", "/home/harry/Sites/ui/src/components/Cards/CardTitle.vue"]]), sr = { class: "relative" }, or = {
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
    const t = e, n = (i) => {
      o.value && i.key === "Escape" && (o.value = !1);
    };
    ae(() => document.addEventListener("keydown", n)), bt(() => document.removeEventListener("keydown", n));
    const s = j(() => ({
      48: "w-48"
    })[t.width.toString()]), r = j(() => {
      const i = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${i}-left left-0` : t.align === "right" ? `origin-${i}-right right-0` : `origin-${i}`;
    }), o = M(!1);
    return (i, l) => (d(), y("div", sr, [
      p("div", {
        onClick: l[0] || (l[0] = (c) => o.value = !o.value)
      }, [
        x(i.$slots, "trigger")
      ]),
      T(" Full Screen Dropdown Overlay "),
      et(p(
        "div",
        {
          class: "fixed inset-0 z-40",
          onClick: l[1] || (l[1] = (c) => o.value = !1)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [tt, o.value]
      ]),
      N(be, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        persisted: ""
      }, {
        default: z(() => [
          et(p(
            "div",
            {
              class: B(["absolute z-50 mt-2 rounded-md shadow-lg", [s.value, r.value, t.bottom ? "bottom-full" : ""]]),
              style: { display: "none" },
              onClick: l[2] || (l[2] = (c) => o.value = !1)
            },
            [
              p(
                "div",
                {
                  class: B(["rounded-md ring-1 ring-black ring-opacity-5", e.contentClasses])
                },
                [
                  x(i.$slots, "content")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ), [
            [tt, o.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]));
  }
}, ji = /* @__PURE__ */ O(or, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/Dropdown.vue"]]), ir = {
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
    return (t, n) => (d(), R(X(e.as), {
      href: e.href,
      class: "block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
    }, {
      default: z(() => [
        x(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["href"]));
  }
}, Mi = /* @__PURE__ */ O(ir, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/DropdownLink.vue"]]), ar = {}, lr = { class: "font-semibold text-3xl leading-tight" };
function ur(e, t) {
  return d(), y("h1", lr, [
    x(e.$slots, "default")
  ]);
}
const Pi = /* @__PURE__ */ O(ar, [["render", ur], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH1.vue"]]), cr = {}, dr = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function fr(e, t) {
  return d(), y("h2", dr, [
    x(e.$slots, "default")
  ]);
}
const Ii = /* @__PURE__ */ O(cr, [["render", fr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH2.vue"]]), pr = {}, mr = { class: "text-xl tracking-tight dark:text-white" };
function hr(e, t) {
  return d(), y("h2", mr, [
    x(e.$slots, "default")
  ]);
}
const Ri = /* @__PURE__ */ O(pr, [["render", hr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH3.vue"]]), Se = {
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
}, vr = ["for"], gr = { class: "relative mt-1" }, br = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, yr = /* @__PURE__ */ p(
  "svg",
  {
    class: "h-5 w-5 text-red-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  },
  [
    /* @__PURE__ */ p("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
      "clip-rule": "evenodd"
    })
  ],
  -1
  /* HOISTED */
), _r = ["id"], wr = ["id"], xr = {
  __name: "InputLayout",
  props: {
    ...Se
  },
  setup(e) {
    return (t, n) => (d(), y("div", null, [
      t.label ? (d(), y("label", {
        key: 0,
        for: t.id,
        class: "block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      }, Z(t.label), 9, vr)) : T("v-if", !0),
      p("div", gr, [
        x(t.$slots, "default"),
        t.error ? (d(), y("div", br, [
          T(" Heroicon name: solid/exclamation-circle "),
          yr
        ])) : T("v-if", !0)
      ]),
      t.helpText && !t.error ? (d(), y("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, Z(t.helpText), 9, _r)) : t.error ? (d(), y("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, Z(t.error), 9, wr)) : T("v-if", !0)
    ]));
  }
}, wt = /* @__PURE__ */ O(xr, [["__file", "/home/harry/Sites/ui/src/components/Inputs/InputLayout.vue"]]), $r = ["name", "id", "aria-describedby"], Sr = {
  inheritAttrs: !1
}, kr = /* @__PURE__ */ Object.assign(Sr, {
  __name: "Input",
  props: {
    ...Se
  },
  setup(e) {
    return (t, n) => (d(), R(
      wt,
      yt(_t(t.$props)),
      {
        default: z(() => [
          p("input", Xt(t.$attrs, {
            name: t.name,
            id: t.id,
            class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
              "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
            }],
            "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
          }), null, 16, $r)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), Bi = /* @__PURE__ */ O(kr, [["__file", "/home/harry/Sites/ui/src/components/Inputs/Input.vue"]]);
function W(e, t, ...n) {
  if (e in t) {
    let r = t[e];
    return typeof r == "function" ? r(...n) : r;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, W), s;
}
var Be = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Be || {}), Or = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Or || {});
function fe({ visible: e = !0, features: t = 0, ourProps: n, theirProps: s, ...r }) {
  var o;
  let i = $t(s, n), l = Object.assign(r, { props: i });
  if (e || t & 2 && i.static)
    return Le(l);
  if (t & 1) {
    let c = (o = i.unmount) == null || o ? 0 : 1;
    return W(c, { 0() {
      return null;
    }, 1() {
      return Le({ ...r, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Le(l);
}
function Le({ props: e, attrs: t, slots: n, slot: s, name: r }) {
  var o, i;
  let { as: l, ...c } = St(e, ["unmount", "static"]), a = (o = n.default) == null ? void 0 : o.call(n, s), u = {};
  if (s) {
    let f = !1, m = [];
    for (let [h, w] of Object.entries(s))
      typeof w == "boolean" && (f = !0), w === !0 && m.push(h);
    f && (u["data-headlessui-state"] = m.join(" "));
  }
  if (l === "template") {
    if (a = xt(a ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [f, ...m] = a ?? [];
      if (!Tr(f) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map(($) => $.trim()).filter(($, A, _) => _.indexOf($) === A).sort(($, A) => $.localeCompare(A)).map(($) => `  - ${$}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(($) => `  - ${$}`).join(`
`)].join(`
`));
      let h = $t((i = f.props) != null ? i : {}, c), w = Yt(f, h);
      for (let $ in h)
        $.startsWith("on") && (w.props || (w.props = {}), w.props[$] = h[$]);
      return w;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return Re(l, Object.assign({}, c, u), { default: () => a });
}
function xt(e) {
  return e.flatMap((t) => t.type === Y ? xt(t.children) : [t]);
}
function $t(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let s of e)
    for (let r in s)
      r.startsWith("on") && typeof s[r] == "function" ? (n[r] != null || (n[r] = []), n[r].push(s[r])) : t[r] = s[r];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((s) => [s, void 0])));
  for (let s in n)
    Object.assign(t, { [s](r, ...o) {
      let i = n[s];
      for (let l of i) {
        if (r instanceof Event && r.defaultPrevented)
          return;
        l(r, ...o);
      }
    } });
  return t;
}
function zr(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function St(e, t = []) {
  let n = Object.assign({}, e);
  for (let s of t)
    s in n && delete n[s];
  return n;
}
function Tr(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ar = 0;
function Dr() {
  return ++Ar;
}
function De() {
  return Dr();
}
var F = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});
function Lr(e) {
  throw new Error("Unexpected object: " + e);
}
var H = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(H || {});
function Er(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let s = t.resolveActiveIndex(), r = s ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((l, c, a) => r !== -1 && a.length - c - 1 >= r ? !1 : !t.resolveDisabled(l));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 2:
        return n.findIndex((i, l) => l <= r ? !1 : !t.resolveDisabled(i));
      case 3: {
        let i = n.slice().reverse().findIndex((l) => !t.resolveDisabled(l));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 4:
        return n.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        Lr(e);
    }
  })();
  return o === -1 ? s : o;
}
function P(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let kt = Symbol("Context");
var he = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(he || {});
function Cr() {
  return qe(kt, null);
}
function jr(e) {
  We(kt, e);
}
function rt(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Mr(e, t) {
  let n = M(rt(e.value.type, e.value.as));
  return ae(() => {
    n.value = rt(e.value.type, e.value.as);
  }), Te(() => {
    var s;
    n.value || P(t) && P(t) instanceof HTMLButtonElement && !((s = P(t)) != null && s.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var Pr = Object.defineProperty, Ir = (e, t, n) => t in e ? Pr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, st = (e, t, n) => (Ir(e, typeof t != "symbol" ? t + "" : t, n), n);
class Rr {
  constructor() {
    st(this, "current", this.detect()), st(this, "currentId", 0);
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
let Ge = new Rr();
function Br(e) {
  if (Ge.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = P(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let ot = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Fr = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Fr || {}), Nr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Nr || {}), Vr = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Vr || {}), Je = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Je || {});
function Ot(e, t = 0) {
  var n;
  return e === ((n = Br(e)) == null ? void 0 : n.body) ? !1 : W(t, { 0() {
    return e.matches(ot);
  }, 1() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(ot))
        return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
var Hr = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Hr || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Ur(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let r = t(n), o = t(s);
    if (r === null || o === null)
      return 0;
    let i = r.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _e(e, t, n) {
  Ge.isServer || Te((s) => {
    document.addEventListener(e, t, n), s(() => document.removeEventListener(e, t, n));
  });
}
function qr(e, t, n) {
  Ge.isServer || Te((s) => {
    window.addEventListener(e, t, n), s(() => window.removeEventListener(e, t, n));
  });
}
function Wr(e, t, n = j(() => !0)) {
  function s(o, i) {
    if (!n.value || o.defaultPrevented)
      return;
    let l = i(o);
    if (l === null || !l.getRootNode().contains(l))
      return;
    let c = function a(u) {
      return typeof u == "function" ? a(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let a of c) {
      if (a === null)
        continue;
      let u = a instanceof HTMLElement ? a : P(a);
      if (u != null && u.contains(l) || o.composed && o.composedPath().includes(u))
        return;
    }
    return !Ot(l, Je.Loose) && l.tabIndex !== -1 && o.preventDefault(), t(o, l);
  }
  let r = M(null);
  _e("pointerdown", (o) => {
    var i, l;
    n.value && (r.value = ((l = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), _e("mousedown", (o) => {
    var i, l;
    n.value && (r.value = ((l = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), _e("click", (o) => {
    r.value && (s(o, () => r.value), r.value = null);
  }, !0), _e("touchend", (o) => s(o, () => o.target instanceof HTMLElement ? o.target : null), !0), qr("blur", (o) => s(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var zt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(zt || {});
let Kr = ce({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: s, ...r } = e, o = { "aria-hidden": (s & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(s & 4) === 4 && (s & 2) !== 2 && { display: "none" } } };
    return fe({ ourProps: o, theirProps: r, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function Tt(e = {}, t = null, n = []) {
  for (let [s, r] of Object.entries(e))
    Dt(n, At(t, s), r);
  return n;
}
function At(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Dt(e, t, n) {
  if (Array.isArray(n))
    for (let [s, r] of n.entries())
      Dt(e, At(t, s.toString()), r);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Tt(n, t, e);
}
function Gr(e, t, n) {
  let s = M(n == null ? void 0 : n.value), r = j(() => e.value !== void 0);
  return [j(() => r.value ? e.value : s.value), function(o) {
    return r.value || (s.value = o), t == null ? void 0 : t(o);
  }];
}
function it(e) {
  return [e.screenX, e.screenY];
}
function Jr() {
  let e = M([-1, -1]);
  return { wasMoved(t) {
    let n = it(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = it(t);
  } };
}
let at = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function lt(e) {
  var t, n;
  let s = (t = e.innerText) != null ? t : "", r = e.cloneNode(!0);
  if (!(r instanceof HTMLElement))
    return s;
  let o = !1;
  for (let l of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    l.remove(), o = !0;
  let i = o ? (n = r.innerText) != null ? n : "" : s;
  return at.test(i) && (i = i.replace(at, "")), i;
}
function Xr(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let s = n.split(" ").map((r) => {
      let o = document.getElementById(r);
      if (o) {
        let i = o.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : lt(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (s.length > 0)
      return s.join(", ");
  }
  return lt(e).trim();
}
function Yr(e) {
  let t = M(""), n = M("");
  return () => {
    let s = P(e);
    if (!s)
      return "";
    let r = s.innerText;
    if (t.value === r)
      return n.value;
    let o = Xr(s).trim().toLowerCase();
    return t.value = r, n.value = o, o;
  };
}
function Qr(e, t) {
  return e === t;
}
var Zr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Zr || {}), es = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(es || {}), ts = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ts || {});
function ns(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Lt = Symbol("ListboxContext");
function ye(e) {
  let t = qe(Lt, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, ye), n;
  }
  return t;
}
let rs = ce({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Qr }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: s }) {
  let r = M(1), o = M(null), i = M(null), l = M(null), c = M([]), a = M(""), u = M(null), f = M(1);
  function m(g = (b) => b) {
    let b = u.value !== null ? c.value[u.value] : null, k = Ur(g(c.value.slice()), (C) => P(C.dataRef.domRef)), S = b ? k.indexOf(b) : null;
    return S === -1 && (S = null), { options: k, activeOptionIndex: S };
  }
  let h = j(() => e.multiple ? 1 : 0), [w, $] = Gr(j(() => e.modelValue), (g) => s("update:modelValue", g), j(() => e.defaultValue)), A = j(() => w.value === void 0 ? W(h.value, { 1: [], 0: void 0 }) : w.value), _ = { listboxState: r, value: A, mode: h, compare(g, b) {
    if (typeof e.by == "string") {
      let k = e.by;
      return (g == null ? void 0 : g[k]) === (b == null ? void 0 : b[k]);
    }
    return e.by(g, b);
  }, orientation: j(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: i, optionsRef: l, disabled: j(() => e.disabled), options: c, searchQuery: a, activeOptionIndex: u, activationTrigger: f, closeListbox() {
    e.disabled || r.value !== 1 && (r.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || r.value !== 0 && (r.value = 0);
  }, goToOption(g, b, k) {
    if (e.disabled || r.value === 1)
      return;
    let S = m(), C = Er(g === H.Specific ? { focus: H.Specific, id: b } : { focus: g }, { resolveItems: () => S.options, resolveActiveIndex: () => S.activeOptionIndex, resolveId: (v) => v.id, resolveDisabled: (v) => v.dataRef.disabled });
    a.value = "", u.value = C, f.value = k ?? 1, c.value = S.options;
  }, search(g) {
    if (e.disabled || r.value === 1)
      return;
    let b = a.value !== "" ? 0 : 1;
    a.value += g.toLowerCase();
    let k = (u.value !== null ? c.value.slice(u.value + b).concat(c.value.slice(0, u.value + b)) : c.value).find((C) => C.dataRef.textValue.startsWith(a.value) && !C.dataRef.disabled), S = k ? c.value.indexOf(k) : -1;
    S === -1 || S === u.value || (u.value = S, f.value = 1);
  }, clearSearch() {
    e.disabled || r.value !== 1 && a.value !== "" && (a.value = "");
  }, registerOption(g, b) {
    let k = m((S) => [...S, { id: g, dataRef: b }]);
    c.value = k.options, u.value = k.activeOptionIndex;
  }, unregisterOption(g) {
    let b = m((k) => {
      let S = k.findIndex((C) => C.id === g);
      return S !== -1 && k.splice(S, 1), k;
    });
    c.value = b.options, u.value = b.activeOptionIndex, f.value = 1;
  }, theirOnChange(g) {
    e.disabled || $(g);
  }, select(g) {
    e.disabled || $(W(h.value, { 0: () => g, 1: () => {
      let b = q(_.value.value).slice(), k = q(g), S = b.findIndex((C) => _.compare(k, q(C)));
      return S === -1 ? b.push(k) : b.splice(S, 1), b;
    } }));
  } };
  Wr([i, l], (g, b) => {
    var k;
    _.closeListbox(), Ot(b, Je.Loose) || (g.preventDefault(), (k = P(i)) == null || k.focus());
  }, j(() => r.value === 0)), We(Lt, _), jr(j(() => W(r.value, { 0: he.Open, 1: he.Closed })));
  let E = j(() => {
    var g;
    return (g = P(i)) == null ? void 0 : g.closest("form");
  });
  return ae(() => {
    de([E], () => {
      if (!E.value || e.defaultValue === void 0)
        return;
      function g() {
        _.theirOnChange(e.defaultValue);
      }
      return E.value.addEventListener("reset", g), () => {
        var b;
        (b = E.value) == null || b.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: g, modelValue: b, disabled: k, form: S, ...C } = e, v = { open: r.value === 0, disabled: k, value: A.value };
    return Re(Y, [...g != null && A.value != null ? Tt({ [g]: A.value }).map(([I, D]) => Re(Kr, zr({ features: zt.Hidden, key: I, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: S, name: I, value: D }))) : [], fe({ ourProps: {}, theirProps: { ...n, ...St(C, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: v, slots: t, attrs: n, name: "Listbox" })]);
  };
} });
ce({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${De()}` } }, setup(e, { attrs: t, slots: n }) {
  let s = ye("ListboxLabel");
  function r() {
    var o;
    (o = P(s.buttonRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: s.listboxState.value === 0, disabled: s.disabled.value }, { id: i, ...l } = e, c = { id: i, ref: s.labelRef, onClick: r };
    return fe({ ourProps: c, theirProps: l, slot: o, attrs: t, slots: n, name: "ListboxLabel" });
  };
} });
let ss = ce({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${De()}` } }, setup(e, { attrs: t, slots: n, expose: s }) {
  let r = ye("ListboxButton");
  s({ el: r.buttonRef, $el: r.buttonRef });
  function o(a) {
    switch (a.key) {
      case F.Space:
      case F.Enter:
      case F.ArrowDown:
        a.preventDefault(), r.openListbox(), G(() => {
          var u;
          (u = P(r.optionsRef)) == null || u.focus({ preventScroll: !0 }), r.value.value || r.goToOption(H.First);
        });
        break;
      case F.ArrowUp:
        a.preventDefault(), r.openListbox(), G(() => {
          var u;
          (u = P(r.optionsRef)) == null || u.focus({ preventScroll: !0 }), r.value.value || r.goToOption(H.Last);
        });
        break;
    }
  }
  function i(a) {
    switch (a.key) {
      case F.Space:
        a.preventDefault();
        break;
    }
  }
  function l(a) {
    r.disabled.value || (r.listboxState.value === 0 ? (r.closeListbox(), G(() => {
      var u;
      return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (a.preventDefault(), r.openListbox(), ns(() => {
      var u;
      return (u = P(r.optionsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let c = Mr(j(() => ({ as: e.as, type: t.type })), r.buttonRef);
  return () => {
    var a, u;
    let f = { open: r.listboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: m, ...h } = e, w = { ref: r.buttonRef, id: m, type: c.value, "aria-haspopup": "listbox", "aria-controls": (a = P(r.optionsRef)) == null ? void 0 : a.id, "aria-expanded": r.listboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(u = P(r.labelRef)) == null ? void 0 : u.id, m].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: o, onKeyup: i, onClick: l };
    return fe({ ourProps: w, theirProps: h, slot: f, attrs: t, slots: n, name: "ListboxButton" });
  };
} }), os = ce({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${De()}` } }, setup(e, { attrs: t, slots: n, expose: s }) {
  let r = ye("ListboxOptions"), o = M(null);
  s({ el: r.optionsRef, $el: r.optionsRef });
  function i(a) {
    switch (o.value && clearTimeout(o.value), a.key) {
      case F.Space:
        if (r.searchQuery.value !== "")
          return a.preventDefault(), a.stopPropagation(), r.search(a.key);
      case F.Enter:
        if (a.preventDefault(), a.stopPropagation(), r.activeOptionIndex.value !== null) {
          let u = r.options.value[r.activeOptionIndex.value];
          r.select(u.dataRef.value);
        }
        r.mode.value === 0 && (r.closeListbox(), G(() => {
          var u;
          return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        }));
        break;
      case W(r.orientation.value, { vertical: F.ArrowDown, horizontal: F.ArrowRight }):
        return a.preventDefault(), a.stopPropagation(), r.goToOption(H.Next);
      case W(r.orientation.value, { vertical: F.ArrowUp, horizontal: F.ArrowLeft }):
        return a.preventDefault(), a.stopPropagation(), r.goToOption(H.Previous);
      case F.Home:
      case F.PageUp:
        return a.preventDefault(), a.stopPropagation(), r.goToOption(H.First);
      case F.End:
      case F.PageDown:
        return a.preventDefault(), a.stopPropagation(), r.goToOption(H.Last);
      case F.Escape:
        a.preventDefault(), a.stopPropagation(), r.closeListbox(), G(() => {
          var u;
          return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        break;
      case F.Tab:
        a.preventDefault(), a.stopPropagation();
        break;
      default:
        a.key.length === 1 && (r.search(a.key), o.value = setTimeout(() => r.clearSearch(), 350));
        break;
    }
  }
  let l = Cr(), c = j(() => l !== null ? (l.value & he.Open) === he.Open : r.listboxState.value === 0);
  return () => {
    var a, u, f, m;
    let h = { open: r.listboxState.value === 0 }, { id: w, ...$ } = e, A = { "aria-activedescendant": r.activeOptionIndex.value === null || (a = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : a.id, "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, "aria-labelledby": (m = (u = P(r.labelRef)) == null ? void 0 : u.id) != null ? m : (f = P(r.buttonRef)) == null ? void 0 : f.id, "aria-orientation": r.orientation.value, id: w, onKeydown: i, role: "listbox", tabIndex: 0, ref: r.optionsRef };
    return fe({ ourProps: A, theirProps: $, slot: h, attrs: t, slots: n, features: Be.RenderStrategy | Be.Static, visible: c.value, name: "ListboxOptions" });
  };
} }), is = ce({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${De()}` } }, setup(e, { slots: t, attrs: n, expose: s }) {
  let r = ye("ListboxOption"), o = M(null);
  s({ el: o, $el: o });
  let i = j(() => r.activeOptionIndex.value !== null ? r.options.value[r.activeOptionIndex.value].id === e.id : !1), l = j(() => W(r.mode.value, { 0: () => r.compare(q(r.value.value), q(e.value)), 1: () => q(r.value.value).some((_) => r.compare(q(_), q(e.value))) })), c = j(() => W(r.mode.value, { 1: () => {
    var _;
    let E = q(r.value.value);
    return ((_ = r.options.value.find((g) => E.some((b) => r.compare(q(b), q(g.dataRef.value))))) == null ? void 0 : _.id) === e.id;
  }, 0: () => l.value })), a = Yr(o), u = j(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return a();
  }, domRef: o }));
  ae(() => r.registerOption(e.id, u)), bt(() => r.unregisterOption(e.id)), ae(() => {
    de([r.listboxState, l], () => {
      r.listboxState.value === 0 && l.value && W(r.mode.value, { 1: () => {
        c.value && r.goToOption(H.Specific, e.id);
      }, 0: () => {
        r.goToOption(H.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), Te(() => {
    r.listboxState.value === 0 && i.value && r.activationTrigger.value !== 0 && G(() => {
      var _, E;
      return (E = (_ = P(o)) == null ? void 0 : _.scrollIntoView) == null ? void 0 : E.call(_, { block: "nearest" });
    });
  });
  function f(_) {
    if (e.disabled)
      return _.preventDefault();
    r.select(e.value), r.mode.value === 0 && (r.closeListbox(), G(() => {
      var E;
      return (E = P(r.buttonRef)) == null ? void 0 : E.focus({ preventScroll: !0 });
    }));
  }
  function m() {
    if (e.disabled)
      return r.goToOption(H.Nothing);
    r.goToOption(H.Specific, e.id);
  }
  let h = Jr();
  function w(_) {
    h.update(_);
  }
  function $(_) {
    h.wasMoved(_) && (e.disabled || i.value || r.goToOption(H.Specific, e.id, 0));
  }
  function A(_) {
    h.wasMoved(_) && (e.disabled || i.value && r.goToOption(H.Nothing));
  }
  return () => {
    let { disabled: _ } = e, E = { active: i.value, selected: l.value, disabled: _ }, { id: g, value: b, disabled: k, ...S } = e, C = { id: g, ref: o, role: "option", tabIndex: _ === !0 ? void 0 : -1, "aria-disabled": _ === !0 ? !0 : void 0, "aria-selected": l.value, disabled: void 0, onClick: f, onFocus: m, onPointerenter: w, onMouseenter: w, onPointermove: $, onMousemove: $, onPointerleave: A, onMouseleave: A };
    return fe({ ourProps: C, theirProps: S, slot: E, attrs: n, slots: t, name: "ListboxOption" });
  };
} });
const as = {}, ls = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, us = /* @__PURE__ */ p(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 12.75l6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), cs = [
  us
];
function ds(e, t) {
  return d(), y("svg", ls, cs);
}
const fs = /* @__PURE__ */ O(as, [["render", ds], ["__file", "/home/harry/Sites/ui/src/components/Icons/CheckIcon.vue"]]), ps = {};
function ms(e, t) {
  return d(), R(be, {
    "enter-active-class": "transition ease-out duration-200",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95"
  }, {
    default: z(() => [
      x(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
const Xe = /* @__PURE__ */ O(ps, [["render", ms], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeScaleTransition.vue"]]), hs = {}, vs = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, gs = /* @__PURE__ */ p(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), bs = [
  gs
];
function ys(e, t) {
  return d(), y("svg", vs, bs);
}
const _s = /* @__PURE__ */ O(hs, [["render", ys], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronDownIcon.vue"]]), ws = { class: "text-sm" }, xs = {
  inheritAttrs: !1
}, $s = /* @__PURE__ */ Object.assign(xs, {
  __name: "SelectInput",
  props: {
    ...Se,
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
    return (t, n) => (d(), R(
      wt,
      yt(_t(
        Object.keys(L(Se)).reduce((s, r) => (s[r] = t.$props[r], s), {})
      )),
      {
        default: z(() => [
          N(L(rs), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": n[0] || (n[0] = (s) => t.$emit("update:modelValue", s))
          }, {
            default: z(() => [
              N(L(ss), {
                class: B({
                  "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                  "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
                })
              }, {
                default: z(() => {
                  var s, r;
                  return [
                    p(
                      "div",
                      ws,
                      Z(Array.isArray(e.modelValue) ? (s = e.modelValue) == null ? void 0 : s.map((o) => o.name).join(", ") : ((r = e.modelValue) == null ? void 0 : r.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    N(_s, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class"]),
              N(Xe, null, {
                default: z(() => [
                  N(L(os), {
                    class: B(["min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                      "right-0": e.align === "right",
                      "left-0": e.align === "left"
                    }])
                  }, {
                    default: z(() => [
                      x(t.$slots, "listbox-title"),
                      (d(!0), y(
                        Y,
                        null,
                        Ke(e.options, (s) => (d(), R(L(is), {
                          key: s.id,
                          value: s,
                          as: "template"
                        }, {
                          default: z(({ active: r, selected: o }) => [
                            p(
                              "li",
                              {
                                class: B(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                                  "bg-zinc-50 dark:bg-zinc-900": o,
                                  "bg-zinc-100 dark:bg-zinc-700": r
                                }])
                              },
                              [
                                ee(
                                  Z(s.name) + " ",
                                  1
                                  /* TEXT */
                                ),
                                o ? (d(), R(fs, {
                                  key: 0,
                                  class: "h-5 w-5"
                                })) : T("v-if", !0)
                              ],
                              2
                              /* CLASS */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 3
                    /* FORWARDED */
                  }, 8, ["class"])
                ]),
                _: 3
                /* FORWARDED */
              })
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["model-value", "multiple"])
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), Fi = /* @__PURE__ */ O($s, [["__file", "/home/harry/Sites/ui/src/components/Inputs/SelectInput.vue"]]);
function Et(e) {
  return Qt() ? (Zt(e), !0) : !1;
}
function Ye(e) {
  return typeof e == "function" ? e() : L(e);
}
const Ss = typeof window < "u" && typeof document < "u", ks = Object.prototype.toString, Os = (e) => ks.call(e) === "[object Object]", zs = () => {
};
function Ts(e, t) {
  function n(...s) {
    return new Promise((r, o) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(r).catch(o);
    });
  }
  return n;
}
const Ct = (e) => e();
function As(e = Ct) {
  const t = M(!0);
  function n() {
    t.value = !1;
  }
  function s() {
    t.value = !0;
  }
  const r = (...o) => {
    t.value && e(...o);
  };
  return { isActive: en(t), pause: n, resume: s, eventFilter: r };
}
function Ds(e, t, n = {}) {
  const {
    eventFilter: s = Ct,
    ...r
  } = n;
  return de(
    e,
    Ts(
      s,
      t
    ),
    r
  );
}
function Ls(e, t, n = {}) {
  const {
    eventFilter: s,
    ...r
  } = n, { eventFilter: o, pause: i, resume: l, isActive: c } = As(s);
  return { stop: Ds(
    e,
    t,
    {
      ...r,
      eventFilter: o
    }
  ), pause: i, resume: l, isActive: c };
}
function Fe(e) {
  var t;
  const n = Ye(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ve = Ss ? window : void 0;
function ut(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = ve) : [t, n, s, r] = e, !t)
    return zs;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], i = () => {
    o.forEach((u) => u()), o.length = 0;
  }, l = (u, f, m, h) => (u.addEventListener(f, m, h), () => u.removeEventListener(f, m, h)), c = de(
    () => [Fe(t), Ye(r)],
    ([u, f]) => {
      if (i(), !u)
        return;
      const m = Os(f) ? { ...f } : f;
      o.push(
        ...n.flatMap((h) => s.map((w) => l(u, h, w, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    c(), i();
  };
  return Et(a), a;
}
function Es() {
  const e = M(!1);
  return tn() && ae(() => {
    e.value = !0;
  }), e;
}
function Cs(e) {
  const t = Es();
  return j(() => (t.value, !!e()));
}
const we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xe = "__vueuse_ssr_handlers__", js = /* @__PURE__ */ Ms();
function Ms() {
  return xe in we || (we[xe] = we[xe] || {}), we[xe];
}
function Ps(e, t) {
  return js[e] || t;
}
function Is(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Rs = {
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
}, ct = "vueuse-storage";
function Bs(e, t, n, s = {}) {
  var r;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: c = !0,
    mergeDefaults: a = !1,
    shallow: u,
    window: f = ve,
    eventFilter: m,
    onError: h = (v) => {
      console.error(v);
    }
  } = s, w = (u ? nn : M)(t);
  if (!n)
    try {
      n = Ps("getDefaultStorage", () => {
        var v;
        return (v = ve) == null ? void 0 : v.localStorage;
      })();
    } catch (v) {
      h(v);
    }
  if (!n)
    return w;
  const $ = Ye(t), A = Is($), _ = (r = s.serializer) != null ? r : Rs[A], { pause: E, resume: g } = Ls(
    w,
    () => b(w.value),
    { flush: o, deep: i, eventFilter: m }
  );
  return f && l && (ut(f, "storage", C), ut(f, ct, S)), C(), w;
  function b(v) {
    try {
      if (v == null)
        n.removeItem(e);
      else {
        const I = _.write(v), D = n.getItem(e);
        D !== I && (n.setItem(e, I), f && f.dispatchEvent(new CustomEvent(ct, {
          detail: {
            key: e,
            oldValue: D,
            newValue: I,
            storageArea: n
          }
        })));
      }
    } catch (I) {
      h(I);
    }
  }
  function k(v) {
    const I = v ? v.newValue : n.getItem(e);
    if (I == null)
      return c && $ !== null && n.setItem(e, _.write($)), $;
    if (!v && a) {
      const D = _.read(I);
      return typeof a == "function" ? a(D, $) : A === "object" && !Array.isArray(D) ? { ...$, ...D } : D;
    } else
      return typeof I != "string" ? I : _.read(I);
  }
  function S(v) {
    C(v.detail);
  }
  function C(v) {
    if (!(v && v.storageArea !== n)) {
      if (v && v.key == null) {
        w.value = $;
        return;
      }
      if (!(v && v.key !== e)) {
        E();
        try {
          (v == null ? void 0 : v.newValue) !== _.write(w.value) && (w.value = k(v));
        } catch (I) {
          h(I);
        } finally {
          v ? G(g) : g();
        }
      }
    }
  }
}
function Fs(e, t, n = {}) {
  const { window: s = ve, ...r } = n;
  let o;
  const i = Cs(() => s && "ResizeObserver" in s), l = () => {
    o && (o.disconnect(), o = void 0);
  }, c = j(
    () => Array.isArray(e) ? e.map((f) => Fe(f)) : [Fe(e)]
  ), a = de(
    c,
    (f) => {
      if (l(), i.value && s) {
        o = new ResizeObserver(t);
        for (const m of f)
          m && o.observe(m, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), u = () => {
    l(), a();
  };
  return Et(u), {
    isSupported: i,
    stop: u
  };
}
function Ns(e, t, n = {}) {
  const { window: s = ve } = n;
  return Bs(e, t, s == null ? void 0 : s.localStorage, n);
}
const Vs = {}, Hs = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, Us = /* @__PURE__ */ p(
  "g",
  { fill: "none" },
  [
    /* @__PURE__ */ p("path", {
      d: "M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0z",
      fill: "currentColor"
    })
  ],
  -1
  /* HOISTED */
), qs = [
  Us
];
function Ws(e, t) {
  return d(), y("svg", Hs, qs);
}
const Ks = /* @__PURE__ */ O(Vs, [["render", Ws], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronRightIcon.vue"]]), Gs = { class: "flex flex-col gap-6 py-6" }, Js = { class: "flex flex-col gap-6 mb-6" }, Xs = {
  __name: "Sidebar",
  setup(e) {
    const t = Ns("ui/sidebar", !1);
    return We("sidebarMinimised", t), (n, s) => (d(), y(
      "nav",
      {
        class: B(["min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10", {
          "!w-24 !max-w-24 !min-w-24": L(t),
          "w-64 max-w-64 min-w-64": !L(t)
        }])
      },
      [
        p("button", {
          class: "absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-10",
          onClick: s[0] || (s[0] = (r) => t.value = !L(t))
        }, [
          N(Ks, {
            class: B(["w-5 h-5", {
              "transform rotate-180": !L(t)
            }])
          }, null, 8, ["class"])
        ]),
        T(" Primary Navigation Menu "),
        p("div", Gs, [
          T(" Logo "),
          x(n.$slots, "default")
        ]),
        p("div", Js, [
          x(n.$slots, "bottom")
        ])
      ],
      2
      /* CLASS */
    ));
  }
}, Ni = /* @__PURE__ */ O(Xs, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/Sidebar.vue"]]), Ys = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3"
}, Qs = {
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
    const t = e, n = qe("sidebarMinimised"), s = j(() => {
      const r = [
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
      return n.value ? r.push("justify-center") : r.push("px-6"), t.active ? r.push(
        "bg-purple-400",
        "dark:bg-purple-900",
        "text-sm",
        "font-medium",
        "text-zinc-900",
        "dark:text-zinc-100",
        "focus:outline-none",
        "focus:bg-purple-700"
      ) : r.push(
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
      ), r;
    });
    return (r, o) => (d(), R(X(e.as), {
      class: B(s.value)
    }, {
      default: z(() => [
        e.icon ? (d(), R(X(e.icon), {
          key: 0,
          class: B(["w-6 h-6 transition-all", {
            " mr-4": !L(n)
          }])
        }, null, 8, ["class"])) : T("v-if", !0),
        N(be, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "transform opacity-0",
          "enter-to-class": "transform opacity-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100",
          "leave-to-class": "transform opacity-0"
        }, {
          default: z(() => [
            L(n) ? T("v-if", !0) : x(r.$slots, "default", { key: 0 })
          ]),
          _: 3
          /* FORWARDED */
        }),
        L(n) ? (d(), y("div", Ys, [
          x(r.$slots, "default")
        ])) : T("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, Vi = /* @__PURE__ */ O(Qs, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItem.vue"]]), Zs = {}, eo = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, to = { class: "flex w-full h-full max-h-screen z-10 relative" }, no = { class: "flex-grow overflow-y-auto pb-12" };
function ro(e, t) {
  return d(), y("div", eo, [
    x(e.$slots, "top"),
    p("div", to, [
      x(e.$slots, "sidebar"),
      p("section", no, [
        x(e.$slots, "default")
      ])
    ])
  ]);
}
const Hi = /* @__PURE__ */ O(Zs, [["render", ro], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarLayout.vue"]]), so = {}, oo = { class: "flex flex-col gap-2 px-2" };
function io(e, t) {
  return d(), y("div", oo, [
    x(e.$slots, "default")
  ]);
}
const Ui = /* @__PURE__ */ O(so, [["render", io], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItemGroup.vue"]]), ao = {};
function lo(e, t) {
  return d(), R(be, {
    "enter-active-class": "transition ease-out duration-300",
    "enter-from-class": "transform opacity-0",
    "enter-to-class": "transform opacity-100",
    "leave-active-class": "transition ease-in duration-200",
    "leave-from-class": "transform opacity-100",
    "leave-to-class": "transform opacity-0"
  }, {
    default: z(() => [
      x(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
const jt = /* @__PURE__ */ O(ao, [["render", lo], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeTransition.vue"]]);
function uo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
const Mt = (e, t, n) => Math.min(Math.max(n, e), t), U = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
}, ge = (e) => typeof e == "number", se = (e) => Array.isArray(e) && !ge(e[0]), co = (e, t, n) => {
  const s = t - e;
  return ((n - e) % s + s) % s + e;
};
function fo(e, t) {
  return se(e) ? e[co(0, e.length, t)] : e;
}
const Pt = (e, t, n) => -n * e + n * t + e, It = () => {
}, J = (e) => e, Qe = (e, t, n) => t - e === 0 ? 1 : (n - e) / (t - e);
function Rt(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const r = Qe(0, t, s);
    e.push(Pt(n, 1, r));
  }
}
function po(e) {
  const t = [0];
  return Rt(t, e - 1), t;
}
function mo(e, t = po(e.length), n = J) {
  const s = e.length, r = s - t.length;
  return r > 0 && Rt(t, r), (o) => {
    let i = 0;
    for (; i < s - 2 && !(o < t[i + 1]); i++)
      ;
    let l = Mt(0, 1, Qe(t[i], t[i + 1], o));
    return l = fo(n, i)(l), Pt(e[i], e[i + 1], l);
  };
}
const Bt = (e) => Array.isArray(e) && ge(e[0]), Ne = (e) => typeof e == "object" && !!e.createAnimation, le = (e) => typeof e == "function", Ft = (e) => typeof e == "string", oe = {
  ms: (e) => e * 1e3,
  s: (e) => e / 1e3
};
function ho(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Nt = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, vo = 1e-7, go = 12;
function bo(e, t, n, s, r) {
  let o, i, l = 0;
  do
    i = t + (n - t) / 2, o = Nt(i, s, r) - e, o > 0 ? n = i : t = i;
  while (Math.abs(o) > vo && ++l < go);
  return i;
}
function me(e, t, n, s) {
  if (e === t && n === s)
    return J;
  const r = (o) => bo(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Nt(r(o), t, s);
}
const yo = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  const s = n * e, r = t === "end" ? Math.floor(s) : Math.ceil(s);
  return Mt(0, 1, r / e);
}, dt = {
  ease: me(0.25, 0.1, 0.25, 1),
  "ease-in": me(0.42, 0, 1, 1),
  "ease-in-out": me(0.42, 0, 0.58, 1),
  "ease-out": me(0, 0, 0.58, 1)
}, _o = /\((.*?)\)/;
function ft(e) {
  if (le(e))
    return e;
  if (Bt(e))
    return me(...e);
  if (dt[e])
    return dt[e];
  if (e.startsWith("steps")) {
    const t = _o.exec(e);
    if (t) {
      const n = t[1].split(",");
      return yo(parseFloat(n[0]), n[1].trim());
    }
  }
  return J;
}
class Vt {
  constructor(t, n = [0, 1], { easing: s, duration: r = U.duration, delay: o = U.delay, endDelay: i = U.endDelay, repeat: l = U.repeat, offset: c, direction: a = "normal" } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = J, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((f, m) => {
      this.resolve = f, this.reject = m;
    }), s = s || U.easing, Ne(s)) {
      const f = s.createAnimation(n);
      s = f.easing, n = f.keyframes || n, r = f.duration || r;
    }
    this.repeat = l, this.easing = se(s) ? J : ft(s), this.updateDuration(r);
    const u = mo(n, c, se(s) ? s.map(ft) : J);
    this.tick = (f) => {
      var m;
      o = o;
      let h = 0;
      this.pauseTime !== void 0 ? h = this.pauseTime : h = (f - this.startTime) * this.rate, this.t = h, h /= 1e3, h = Math.max(h - o, 0), this.playState === "finished" && this.pauseTime === void 0 && (h = this.totalDuration);
      const w = h / this.duration;
      let $ = Math.floor(w), A = w % 1;
      !A && w >= 1 && (A = 1), A === 1 && $--;
      const _ = $ % 2;
      (a === "reverse" || a === "alternate" && _ || a === "alternate-reverse" && !_) && (A = 1 - A);
      const E = h >= this.totalDuration ? 1 : Math.min(A, 1), g = u(this.easing(E));
      t(g), this.pauseTime === void 0 && (this.playState === "finished" || h >= this.totalDuration + i) ? (this.playState = "finished", (m = this.resolve) === null || m === void 0 || m.call(this, g)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
    }, this.play();
  }
  play() {
    const t = performance.now();
    this.playState = "running", this.pauseTime !== void 0 ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused", this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished", this.tick(0);
  }
  stop() {
    var t;
    this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (t = this.reject) === null || t === void 0 || t.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(t) {
    this.duration = t, this.totalDuration = t * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate;
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t) {
    this.rate = t;
  }
}
var Ve = function() {
};
process.env.NODE_ENV !== "production" && (Ve = function(e, t) {
  if (!e)
    throw new Error(t);
});
class wo {
  setAnimation(t) {
    this.animation = t, t == null || t.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const Ee = /* @__PURE__ */ new WeakMap();
function Ht(e) {
  return Ee.has(e) || Ee.set(e, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), Ee.get(e);
}
function xo(e, t) {
  return e.has(t) || e.set(t, new wo()), e.get(t);
}
const $o = ["", "X", "Y", "Z"], So = ["translate", "scale", "rotate", "skew"], ke = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
}, pt = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (e) => e + "deg"
}, ko = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (e) => e + "px"
  },
  rotate: pt,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: J
  },
  skew: pt
}, ue = /* @__PURE__ */ new Map(), Ze = (e) => `--motion-${e}`, Oe = ["x", "y", "z"];
So.forEach((e) => {
  $o.forEach((t) => {
    Oe.push(e + t), ue.set(Ze(e + t), ko[e]);
  });
});
const Oo = (e, t) => Oe.indexOf(e) - Oe.indexOf(t), zo = new Set(Oe), Ut = (e) => zo.has(e), To = (e, t) => {
  ke[t] && (t = ke[t]);
  const { transforms: n } = Ht(e);
  uo(n, t), e.style.transform = Ao(n);
}, Ao = (e) => e.sort(Oo).reduce(Do, "").trim(), Do = (e, t) => `${e} ${t}(var(${Ze(t)}))`, He = (e) => e.startsWith("--"), mt = /* @__PURE__ */ new Set();
function Lo(e) {
  if (!mt.has(e)) {
    mt.add(e);
    try {
      const { syntax: t, initialValue: n } = ue.has(e) ? ue.get(e) : {};
      CSS.registerProperty({
        name: e,
        inherits: !1,
        syntax: t,
        initialValue: n
      });
    } catch {
    }
  }
}
const Ce = (e, t) => document.createElement("div").animate(e, t), ht = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      Ce({ opacity: [1] });
    } catch {
      return !1;
    }
    return !0;
  },
  finished: () => !!Ce({ opacity: [0, 1] }, { duration: 1e-3 }).finished,
  linearEasing: () => {
    try {
      Ce({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }
}, je = {}, ne = {};
for (const e in ht)
  ne[e] = () => (je[e] === void 0 && (je[e] = ht[e]()), je[e]);
const Eo = 0.015, Co = (e, t) => {
  let n = "";
  const s = Math.round(t / Eo);
  for (let r = 0; r < s; r++)
    n += e(Qe(0, s - 1, r)) + ", ";
  return n.substring(0, n.length - 2);
}, vt = (e, t) => le(e) ? ne.linearEasing() ? `linear(${Co(e, t)})` : U.easing : Bt(e) ? jo(e) : e, jo = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`;
function Mo(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] === null && (e[n] = n ? e[n - 1] : t());
  return e;
}
const Po = (e) => Array.isArray(e) ? e : [e];
function ze(e) {
  return ke[e] && (e = ke[e]), Ut(e) ? Ze(e) : e;
}
const $e = {
  get: (e, t) => {
    t = ze(t);
    let n = He(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!n && n !== 0) {
      const s = ue.get(t);
      s && (n = s.initialValue);
    }
    return n;
  },
  set: (e, t, n) => {
    t = ze(t), He(t) ? e.style.setProperty(t, n) : e.style[t] = n;
  }
};
function qt(e, t = !0) {
  if (!(!e || e.playState === "finished"))
    try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {
    }
}
function Wt(e, t) {
  var n;
  let s = (t == null ? void 0 : t.toDefaultUnit) || J;
  const r = e[e.length - 1];
  if (Ft(r)) {
    const o = ((n = r.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || "";
    o && (s = (i) => i + o);
  }
  return s;
}
function Io() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function Ro(e, t, n, s = {}, r) {
  const o = Io(), i = s.record !== !1 && o;
  let l, { duration: c = U.duration, delay: a = U.delay, endDelay: u = U.endDelay, repeat: f = U.repeat, easing: m = U.easing, persist: h = !1, direction: w, offset: $, allowWebkitAcceleration: A = !1 } = s;
  const _ = Ht(e), E = Ut(t);
  let g = ne.waapi();
  E && To(e, t);
  const b = ze(t), k = xo(_.values, b), S = ue.get(b);
  return qt(k.animation, !(Ne(m) && k.generator) && s.record !== !1), () => {
    const C = () => {
      var D, pe;
      return (pe = (D = $e.get(e, b)) !== null && D !== void 0 ? D : S == null ? void 0 : S.initialValue) !== null && pe !== void 0 ? pe : 0;
    };
    let v = Mo(Po(n), C);
    const I = Wt(v, S);
    if (Ne(m)) {
      const D = m.createAnimation(v, t !== "opacity", C, b, k);
      m = D.easing, v = D.keyframes || v, c = D.duration || c;
    }
    if (He(b) && (ne.cssRegisterProperty() ? Lo(b) : g = !1), E && !ne.linearEasing() && (le(m) || se(m) && m.some(le)) && (g = !1), g) {
      S && (v = v.map((Q) => ge(Q) ? S.toDefaultUnit(Q) : Q)), v.length === 1 && (!ne.partialKeyframes() || i) && v.unshift(C());
      const D = {
        delay: oe.ms(a),
        duration: oe.ms(c),
        endDelay: oe.ms(u),
        easing: se(m) ? void 0 : vt(m, c),
        direction: w,
        iterations: f + 1,
        fill: "both"
      };
      l = e.animate({
        [b]: v,
        offset: $,
        easing: se(m) ? m.map((Q) => vt(Q, c)) : void 0
      }, D), l.finished || (l.finished = new Promise((Q, Jt) => {
        l.onfinish = Q, l.oncancel = Jt;
      }));
      const pe = v[v.length - 1];
      l.finished.then(() => {
        h || ($e.set(e, b, pe), l.cancel());
      }).catch(It), A || (l.playbackRate = 1.000001);
    } else if (r && E)
      v = v.map((D) => typeof D == "string" ? parseFloat(D) : D), v.length === 1 && v.unshift(parseFloat(C())), l = new r((D) => {
        $e.set(e, b, I ? I(D) : D);
      }, v, Object.assign(Object.assign({}, s), {
        duration: c,
        easing: m
      }));
    else {
      const D = v[v.length - 1];
      $e.set(e, b, S && ge(D) ? S.toDefaultUnit(D) : D);
    }
    return i && o(e, t, v, {
      duration: c,
      delay: a,
      easing: m,
      repeat: f,
      offset: $
    }, "motion-one"), k.setAnimation(l), l;
  };
}
const Bo = (e, t) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e)
);
function Fo(e, t) {
  var n;
  return typeof e == "string" ? t ? ((n = t[e]) !== null && n !== void 0 || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || []);
}
const No = (e) => e(), Kt = (e, t, n = U.duration) => new Proxy({
  animations: e.map(No).filter(Boolean),
  duration: n,
  options: t
}, Ho), Vo = (e) => e.animations[0], Ho = {
  get: (e, t) => {
    const n = Vo(e);
    switch (t) {
      case "duration":
        return e.duration;
      case "currentTime":
        return oe.s((n == null ? void 0 : n[t]) || 0);
      case "playbackRate":
      case "playState":
        return n == null ? void 0 : n[t];
      case "finished":
        return e.finished || (e.finished = Promise.all(e.animations.map(Uo)).catch(It)), e.finished;
      case "stop":
        return () => {
          e.animations.forEach((s) => qt(s));
        };
      case "forEachNative":
        return (s) => {
          e.animations.forEach((r) => s(r, e));
        };
      default:
        return typeof (n == null ? void 0 : n[t]) > "u" ? void 0 : () => e.animations.forEach((s) => s[t]());
    }
  },
  set: (e, t, n) => {
    switch (t) {
      case "currentTime":
        n = oe.ms(n);
      case "currentTime":
      case "playbackRate":
        for (let s = 0; s < e.animations.length; s++)
          e.animations[s][t] = n;
        return !0;
    }
    return !1;
  }
}, Uo = (e) => e.finished;
function qo(e, t, n) {
  return le(e) ? e(t, n) : e;
}
function Wo(e) {
  return function(n, s, r = {}) {
    n = Fo(n);
    const o = n.length;
    Ve(!!o, "No valid element provided."), Ve(!!s, "No keyframes defined.");
    const i = [];
    for (let l = 0; l < o; l++) {
      const c = n[l];
      for (const a in s) {
        const u = Bo(r, a);
        u.delay = qo(u.delay, l, o);
        const f = Ro(c, a, s[a], u, e);
        i.push(f);
      }
    }
    return Kt(
      i,
      r,
      /**
       * TODO:
       * If easing is set to spring or glide, duration will be dynamically
       * generated. Ideally we would dynamically generate this from
       * animation.effect.getComputedTiming().duration but this isn't
       * supported in iOS13 or our number polyfill. Perhaps it's possible
       * to Proxy animations returned from animateStyle that has duration
       * as a getter.
       */
      r.duration
    );
  };
}
const Ko = Wo(Vt), Go = 5;
function Gt(e, t, n) {
  const s = Math.max(t - Go, 0);
  return ho(n - e(s), t - s);
}
const ie = {
  stiffness: 100,
  damping: 10,
  mass: 1
}, Jo = (e = ie.stiffness, t = ie.damping, n = ie.mass) => t / (2 * Math.sqrt(e * n));
function Xo(e, t, n) {
  return e < t && n >= t || e > t && n <= t;
}
const Yo = ({ stiffness: e = ie.stiffness, damping: t = ie.damping, mass: n = ie.mass, from: s = 0, to: r = 1, velocity: o = 0, restSpeed: i = 2, restDistance: l = 0.5 } = {}) => {
  o = o ? oe.s(o) : 0;
  const c = {
    done: !1,
    hasReachedTarget: !1,
    current: s,
    target: r
  }, a = r - s, u = Math.sqrt(e / n) / 1e3, f = Jo(e, t, n);
  let m;
  if (f < 1) {
    const h = u * Math.sqrt(1 - f * f);
    m = (w) => r - Math.exp(-f * u * w) * ((-o + f * u * a) / h * Math.sin(h * w) + a * Math.cos(h * w));
  } else
    m = (h) => r - Math.exp(-u * h) * (a + (-o + u * a) * h);
  return (h) => {
    c.current = m(h);
    const w = h === 0 ? o : Gt(m, h, c.current), $ = Math.abs(w) <= i, A = Math.abs(r - c.current) <= l;
    return c.done = $ && A, c.hasReachedTarget = Xo(s, r, c.current), c;
  };
}, Me = 10, Qo = 1e4;
function Zo(e, t = J) {
  let n, s = Me, r = e(0);
  const o = [t(r.current)];
  for (; !r.done && s < Qo; )
    r = e(s), o.push(t(r.done ? r.target : r.current)), n === void 0 && r.hasReachedTarget && (n = s), s += Me;
  const i = s - Me;
  return o.length === 1 && o.push(r.current), {
    keyframes: o,
    duration: i / 1e3,
    overshootDuration: (n ?? i) / 1e3
  };
}
function gt(e) {
  return ge(e) && !isNaN(e);
}
function Pe(e) {
  return Ft(e) ? parseFloat(e) : e;
}
function ei(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (n = {}) => {
    const s = /* @__PURE__ */ new Map(), r = (i = 0, l = 100, c = 0, a = !1) => {
      const u = `${i}-${l}-${c}-${a}`;
      return s.has(u) || s.set(u, e(Object.assign({
        from: i,
        to: l,
        velocity: c,
        restSpeed: a ? 0.05 : 2,
        restDistance: a ? 0.01 : 0.5
      }, n))), s.get(u);
    }, o = (i, l) => (t.has(i) || t.set(i, Zo(i, l)), t.get(i));
    return {
      createAnimation: (i, l = !0, c, a, u) => {
        let f, m, h, w = 0, $ = J;
        const A = i.length;
        if (l) {
          $ = Wt(i, a ? ue.get(ze(a)) : void 0);
          const _ = i[A - 1];
          if (h = Pe(_), A > 1 && i[0] !== null)
            m = Pe(i[0]);
          else {
            const E = u == null ? void 0 : u.generator;
            if (E) {
              const { animation: g, generatorStartTime: b } = u, k = (g == null ? void 0 : g.startTime) || b || 0, S = (g == null ? void 0 : g.currentTime) || performance.now() - k, C = E(S).current;
              m = C, w = Gt((v) => E(v).current, S, C);
            } else
              c && (m = Pe(c()));
          }
        }
        if (gt(m) && gt(h)) {
          const _ = r(m, h, w, a == null ? void 0 : a.includes("scale"));
          f = Object.assign(Object.assign({}, o(_, $)), { easing: "linear" }), u && (u.generator = _, u.generatorStartTime = performance.now());
        }
        return f || (f = {
          easing: "ease",
          duration: o(r(0, 100)).overshootDuration
        }), f;
      }
    };
  };
}
const ti = ei(Yo);
function ni(e, t = {}) {
  return Kt([
    () => {
      const n = new Vt(e, [0, 1], t);
      return n.finished.catch(() => {
      }), n;
    }
  ], t, t.duration);
}
function Ue(e, t, n) {
  return (le(e) ? ni : Ko)(e, t, n);
}
const ri = {
  __name: "CollapseTransition",
  setup(e) {
    function t(s, r) {
      const { height: o } = s.getBoundingClientRect();
      s.style.height = "0px", Ue(s, { height: `${o}px` }, { duration: 0.3 }).finished.then(
        r
      );
    }
    function n(s, r) {
      Ue(s, { height: "0px" }, { duration: 0.2 }).finished.then(r);
    }
    return (s, r) => (d(), R(be, {
      "enter-active-class": "overflow-hidden transition-all duration-300",
      "enter-from-class": "scale-95 opacity-0",
      "enter-to-class": "scale-100 opacity-100",
      "leave-active-class": "overflow-hidden transition-all duration-200",
      "leave-from-class": "scale-100 opacity-100",
      "leave-to-class": "scale-95 opacity-0",
      onEnter: t,
      onLeave: n
    }, {
      default: z(() => [
        x(s.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, qi = /* @__PURE__ */ O(ri, [["__file", "/home/harry/Sites/ui/src/components/Transitions/CollapseTransition.vue"]]), si = { class: "flex gap-2 items-center" }, oi = {
  key: 0,
  class: "text-zinc-400 select-none"
}, ii = {
  __name: "Breadcrumbs",
  setup(e) {
    const t = j(() => rn().default());
    return (n, s) => (d(), y("div", si, [
      (d(!0), y(
        Y,
        null,
        Ke(t.value, (r, o) => (d(), y(
          Y,
          null,
          [
            (d(), R(X(r), {
              class: B({
                "dark:text-zinc-200 text-zinc-700": o === t.value.length - 1
              })
            }, null, 8, ["class"])),
            o < t.value.length - 1 ? (d(), y("div", oi, "/")) : T("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]));
  }
}, Wi = /* @__PURE__ */ O(ii, [["__file", "/home/harry/Sites/ui/src/components/Breadcrumbs/Breadcrumbs.vue"]]), ai = {
  __name: "BreadcrumbItem",
  props: {
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e) {
    return (t, n) => (d(), R(X(e.as), { class: "rounded-full px-1.5 transition hover:bg-zinc-900/10 hover:dark:bg-white/10 cursor-pointer text-sm text-zinc-400" }, {
      default: z(() => [
        x(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Ki = /* @__PURE__ */ O(ai, [["__file", "/home/harry/Sites/ui/src/components/Breadcrumbs/BreadcrumbItem.vue"]]), li = {}, ui = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, ci = /* @__PURE__ */ p(
  "path",
  {
    d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), di = [
  ci
];
function fi(e, t) {
  return d(), y("svg", ui, di);
}
const pi = /* @__PURE__ */ O(li, [["render", fi], ["__file", "/home/harry/Sites/ui/src/components/Icons/CloseIcon.vue"]]);
class mi {
  constructor(t, n = {}, s = () => {
  }) {
    this.type = t, this.data = n, this.resolve = s;
  }
}
const re = te({
  dialog: null,
  info(e, t) {
    return re.create("info", { title: e, subtitle: t });
  },
  confirm(e, t) {
    return re.create("confirm", { title: e, subtitle: t });
  },
  reset() {
    re.dialog = null;
  },
  create(e, t) {
    return new Promise((n) => {
      re.dialog = new mi(e, t, n);
    });
  }
}), { info: Gi, confirm: Ji, reset: Ie } = re, K = j(() => re.dialog), hi = {
  key: 0,
  class: "absolute inset-0 z-40 bg-black/40"
}, vi = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center"
}, gi = {
  __name: "Dialogs",
  setup(e) {
    return (t, n) => (d(), y(
      Y,
      null,
      [
        N(jt, null, {
          default: z(() => [
            L(K) ? (d(), y("div", hi)) : T("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }),
        N(Xe, null, {
          default: z(() => [
            L(K) ? (d(), y("div", vi, [
              N(
                Zn,
                {
                  class: "mx-6 w-full max-w-lg",
                  "footer-justify": "end"
                },
                sn({
                  header: z(() => [
                    N(rr, null, {
                      default: z(() => {
                        var s, r;
                        return [
                          ee(
                            Z((r = (s = L(K)) == null ? void 0 : s.data) == null ? void 0 : r.title),
                            1
                            /* TEXT */
                          )
                        ];
                      }),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  footer: z(() => [
                    L(K).type === "info" ? (d(), R(nt, {
                      key: 0,
                      onClick: n[0] || (n[0] = (s) => {
                        var r;
                        (r = L(K)) == null || r.resolve(), L(Ie)();
                      })
                    }, {
                      default: z(() => [
                        ee("Ok")
                      ]),
                      _: 1
                      /* STABLE */
                    })) : L(K).type === "confirm" ? (d(), y(
                      Y,
                      { key: 1 },
                      [
                        N(Gn, {
                          onClick: n[1] || (n[1] = (s) => {
                            var r;
                            (r = L(K)) == null || r.resolve(!1), L(Ie)();
                          })
                        }, {
                          default: z(() => [
                            ee("No")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        N(nt, {
                          onClick: n[2] || (n[2] = (s) => {
                            var r;
                            (r = L(K)) == null || r.resolve(!0), L(Ie)();
                          })
                        }, {
                          default: z(() => [
                            ee("Yes")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : T("v-if", !0)
                  ]),
                  default: z(() => {
                    var s, r;
                    return [
                      p(
                        "p",
                        null,
                        Z((r = (s = L(K)) == null ? void 0 : s.data) == null ? void 0 : r.subtitle),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, [
                  L(K).type !== "info" ? {
                    name: "extra",
                    fn: z(() => [
                      N(Ae, { size: "uniform" }, {
                        default: z(() => [
                          N(pi, { class: "h-5 w-5" })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    key: "0"
                  } : void 0
                ]),
                1024
                /* DYNAMIC_SLOTS */
              )
            ])) : T("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}, Xi = /* @__PURE__ */ O(gi, [["__file", "/home/harry/Sites/ui/src/components/Dialogs/Dialogs.vue"]]);
function bi() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class yi {
  constructor(t, n = {}) {
    this.component = t, this.data = n;
  }
}
const V = te({
  modals: te([]),
  push(e, t = {}) {
    return t.key || (t.key = bi()), V.modals.push(te(new yi(on(e), t))), document.body.classList.add("overflow-y-hidden"), t.key;
  },
  pop(e = 1) {
    for (let t = 0; t < e; t += 1)
      V.modals.pop();
    V.modals.length === 0 && document.body.classList.remove("overflow-y-hidden");
  },
  clear() {
    V.modals = te([]);
  },
  findByKey(e) {
    return V.modals.find((t) => t.data.key === e);
  },
  get current() {
    return V.modals[V.modals.length - 1];
  },
  get all() {
    return V.modals;
  }
}), { push: Yi, pop: Qi, clear: Zi } = V, ea = () => V.all, _i = {
  key: "modalBackground",
  class: "fixed inset-0 bg-black/40",
  "aria-hidden": "true"
}, wi = { class: "flex min-h-screen w-full max-w-xl justify-center items-end sm:items-center" }, xi = { class: "absolute right-0 top-0 pr-4 pt-4" }, $i = /* @__PURE__ */ p(
  "span",
  { class: "sr-only" },
  "Close",
  -1
  /* HOISTED */
), Si = /* @__PURE__ */ p(
  "svg",
  {
    class: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  },
  [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 18L18 6M6 6l12 12"
    })
  ],
  -1
  /* HOISTED */
), ki = {
  __name: "Modals",
  setup(e) {
    const t = M(!1);
    return de(
      () => V.modals,
      (n) => {
        n.length ? (document.body.classList.add("overflow-hidden"), G(() => {
          t.value = !0;
        })) : (document.body.classList.remove("overflow-hidden"), G(() => {
          t.value = !1;
        }));
      }
    ), (n, s) => (d(), y("div", null, [
      p(
        "div",
        {
          class: B(["fixed inset-0 z-50 flex max-w-full justify-center overflow-y-auto", L(V).all.length ? "" : "pointer-events-none"]),
          "aria-labelledby": "modal-title",
          role: "dialog",
          "aria-modal": "true"
        },
        [
          N(jt, null, {
            default: z(() => [
              L(V).all.length ? (d(), y("div", _i)) : T("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          p("div", wi, [
            N(Xe, null, {
              default: z(() => [
                (d(!0), y(
                  Y,
                  null,
                  Ke(L(V).all, (r, o) => (d(), y("div", {
                    key: `modal${o}`,
                    class: "relative w-full rounded-lg bg-white p-4 shadow-xl transition-all dark:bg-zinc-900 dark:text-white sm:my-8 sm:p-6"
                  }, [
                    p("div", xi, [
                      p("button", {
                        type: "button",
                        class: "rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                        onClick: s[0] || (s[0] = (i) => L(V).pop())
                      }, [
                        $i,
                        T(" Heroicon name: outline/x "),
                        Si
                      ])
                    ]),
                    (d(), R(X(r.component), {
                      "modal-index": o,
                      data: r.data
                    }, null, 8, ["modal-index", "data"]))
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ],
        2
        /* CLASS */
      )
    ]));
  }
}, ta = /* @__PURE__ */ O(ki, [["__file", "/home/harry/Sites/ui/src/components/Modals/Modals.vue"]]), Oi = {
  __name: "Container",
  props: {
    narrow: Boolean
  },
  setup(e) {
    return (t, n) => (d(), y(
      "div",
      {
        class: B(["mx-auto px-4 sm:px-6 lg:px-8", {
          "max-w-7xl": !e.narrow,
          "max-w-4xl": e.narrow
        }])
      },
      [
        x(t.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
}, na = /* @__PURE__ */ O(Oi, [["__file", "/home/harry/Sites/ui/src/components/Container.vue"]]), ra = {
  mounted: (e) => {
    const t = te({ width: 0, height: 0 }), n = M(!1);
    Fs(e, (s) => {
      if (n.value)
        return;
      const [r] = s, { width: o, height: i } = r.contentRect;
      (t.width !== o || t.height !== i) && (n.value = !0, e.style.height = `${t.height}px`, e.style.width = `${t.width}px`, t.width = o, t.height = i, Ue(
        e,
        { height: `${i}px`, width: `${o}px` },
        {
          easing: ti({ damping: 50, stiffness: 250 })
          // duration: isShrinking ? 0.175 : 0.35,
          // ease: isShrinking ? "ease-in" : "ease-out",
        }
      ).finished.then(() => {
        n.value = !1, e.style.height = null, e.style.width = null;
      }));
    });
  }
};
export {
  Ti as AlertAction,
  Ae as BaseButton,
  Ki as BreadcrumbItem,
  Wi as Breadcrumbs,
  Zn as Card,
  rr as CardTitle,
  qi as CollapseTransition,
  na as Container,
  Ai as DangerAlert,
  Ci as DangerButton,
  Xi as Dialogs,
  ji as Dropdown,
  Mi as DropdownLink,
  Xe as FadeScaleTransition,
  jt as FadeTransition,
  Pi as HH1,
  Ii as HH2,
  Ri as HH3,
  Di as InfoAlert,
  Bi as Input,
  wt as InputLayout,
  ta as Modals,
  nt as PrimaryButton,
  Gn as SecondaryButton,
  Fi as SelectInput,
  Ni as Sidebar,
  Vi as SidebarItem,
  Ui as SidebarItemGroup,
  Hi as SidebarLayout,
  Li as SuccessAlert,
  Ei as WarningAlert,
  V as all,
  ea as allModals,
  Zi as clearModals,
  Ji as confirmDialog,
  re as dialogs,
  Gi as infoDialog,
  Qi as popModal,
  Yi as pushModal,
  Ie as resetDialog,
  ra as vAutoResize
};
