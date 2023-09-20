import { openBlock as c, createBlock as M, resolveDynamicComponent as G, withCtx as z, createTextVNode as Z, createElementVNode as d, createElementBlock as m, normalizeClass as R, renderSlot as y, createCommentVNode as A, onMounted as de, onUnmounted as ft, computed as C, ref as B, withDirectives as Je, vShow as Ge, createVNode as N, Transition as se, toDisplayString as Q, normalizeProps as pt, guardReactiveProps as mt, mergeProps as Ft, cloneVNode as Nt, h as Ce, Fragment as X, inject as Re, provide as Fe, watchEffect as Se, defineComponent as oe, watch as ke, nextTick as K, toRaw as U, unref as D, renderList as Ne, getCurrentScope as Vt, onScopeDispose as Ht, readonly as Ut, shallowRef as qt, useSlots as Wt, reactive as le, createSlots as Kt, TransitionGroup as Jt } from "vue";
const $ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Gt = /* @__PURE__ */ d(
  "span",
  { "aria-hidden": "true" },
  "→",
  -1
  /* HOISTED */
), Xt = {
  __name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, n) => (c(), M(G(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: z(() => [
        Z("Details "),
        Gt
      ]),
      _: 1
      /* STABLE */
    }));
  }
}, fi = /* @__PURE__ */ $(Xt, [["__file", "/home/harry/Sites/ui/src/components/Alerts/AlertAction.vue"]]), Yt = {}, Qt = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, Zt = { class: "flex" }, en = /* @__PURE__ */ d(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ A(" Heroicon name: solid/x-circle "),
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
  ],
  -1
  /* HOISTED */
), tn = { class: "ml-3 flex-1" }, nn = { class: "md:flex md:justify-between" }, rn = { class: "text-sm text-red-800 dark:text-red-200" }, sn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function on(e, t) {
  return c(), m("div", Qt, [
    d("div", Zt, [
      en,
      d("div", tn, [
        e.$slots.title ? (c(), m(
          "h3",
          {
            key: 0,
            class: R(["text-sm font-medium text-red-800 dark:text-red-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            y(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : A("v-if", !0),
        d("div", nn, [
          d("p", rn, [
            y(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), m("p", sn, [
            y(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const pi = /* @__PURE__ */ $(Yt, [["render", on], ["__file", "/home/harry/Sites/ui/src/components/Alerts/DangerAlert.vue"]]), an = {}, ln = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, un = { class: "flex" }, cn = /* @__PURE__ */ d(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ A(" Heroicon name: solid/information-circle "),
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
  ],
  -1
  /* HOISTED */
), dn = { class: "ml-3 flex-1" }, fn = { class: "md:flex md:justify-between" }, pn = { class: "text-sm text-blue-800 dark:text-blue-200" }, mn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function hn(e, t) {
  return c(), m("div", ln, [
    d("div", un, [
      cn,
      d("div", dn, [
        e.$slots.title ? (c(), m(
          "h3",
          {
            key: 0,
            class: R(["text-sm font-medium text-blue-800 dark:text-blue-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            y(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : A("v-if", !0),
        d("div", fn, [
          d("p", pn, [
            y(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), m("p", mn, [
            y(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const mi = /* @__PURE__ */ $(an, [["render", hn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/InfoAlert.vue"]]), vn = {}, gn = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, bn = { class: "flex" }, yn = /* @__PURE__ */ d(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ A(" Heroicon name: solid/check-circle "),
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
  ],
  -1
  /* HOISTED */
), _n = { class: "ml-3 flex-1" }, wn = { class: "md:flex md:justify-between" }, xn = { class: "text-sm text-green-800 dark:text-green-200" }, $n = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Sn(e, t) {
  return c(), m("div", gn, [
    d("div", bn, [
      yn,
      d("div", _n, [
        e.$slots.title ? (c(), m(
          "h3",
          {
            key: 0,
            class: R(["text-sm font-medium text-green-800 dark:text-green-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            y(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : A("v-if", !0),
        d("div", wn, [
          d("p", xn, [
            y(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), m("p", $n, [
            y(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const hi = /* @__PURE__ */ $(vn, [["render", Sn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/SuccessAlert.vue"]]), kn = {}, On = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, zn = { class: "flex" }, An = /* @__PURE__ */ d(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ A(" Heroicon name: solid/exclamation "),
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
  ],
  -1
  /* HOISTED */
), Tn = { class: "ml-3 flex-1" }, Dn = { class: "md:flex md:justify-between" }, Ln = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, En = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Cn(e, t) {
  return c(), m("div", On, [
    d("div", zn, [
      An,
      d("div", Tn, [
        e.$slots.title ? (c(), m(
          "h3",
          {
            key: 0,
            class: R(["text-sm font-medium text-yellow-800 dark:text-yellow-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            y(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : A("v-if", !0),
        d("div", Dn, [
          d("p", Ln, [
            y(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), m("p", En, [
            y(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const vi = /* @__PURE__ */ $(kn, [["render", Cn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/WarningAlert.vue"]]), jn = {
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
    return (t, n) => (c(), M(G(e.as), {
      class: R(["inline-flex items-center border border-transparent rounded-md font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2", {
        "p-1.5": e.size === "uniform",
        "px-1 py-0.5 text-xs": e.size === "tiny",
        "px-2 py-1 text-xs": e.size === "small",
        "px-3.5 py-1.5 text-sm": e.size === "medium",
        "px-3.5 py-1.5 text-base": e.size === "large"
      }])
    }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, Oe = /* @__PURE__ */ $(jn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/BaseButton.vue"]]), Pn = {
  __name: "PrimaryButton",
  setup(e) {
    return (t, n) => (c(), M(Oe, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Xe = /* @__PURE__ */ $(Pn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/PrimaryButton.vue"]]), In = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, n) => (c(), M(Oe, {
      type: e.type,
      class: "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
    }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["type"]));
  }
}, Bn = /* @__PURE__ */ $(In, [["__file", "/home/harry/Sites/ui/src/components/Buttons/SecondaryButton.vue"]]), Mn = {
  __name: "DangerButton",
  setup(e) {
    return (t, n) => (c(), M(Oe, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, gi = /* @__PURE__ */ $(Mn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/DangerButton.vue"]]), Rn = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, Fn = { key: 0 }, Nn = {
  __name: "Card",
  props: {
    flush: Boolean,
    footerJustify: {
      type: String,
      default: "start"
    }
  },
  setup(e) {
    return (t, n) => (c(), m(
      "div",
      {
        class: R(["bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-zinc-900 dark:text-zinc-100", {
          "p-6": !e.flush
        }])
      },
      [
        t.$slots.header || t.$slots.extra ? (c(), m("div", Rn, [
          d("div", null, [
            y(t.$slots, "header")
          ]),
          t.$slots.extra ? (c(), m("div", Fn, [
            y(t.$slots, "extra")
          ])) : A("v-if", !0)
        ])) : A("v-if", !0),
        y(t.$slots, "default"),
        t.$slots.footer ? (c(), m(
          "div",
          {
            key: 1,
            class: R(["mt-6 flex gap-2", {
              "justify-end": e.footerJustify === "end",
              "justify-between": e.footerJustify === "between"
            }])
          },
          [
            y(t.$slots, "footer")
          ],
          2
          /* CLASS */
        )) : A("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}, Vn = /* @__PURE__ */ $(Nn, [["__file", "/home/harry/Sites/ui/src/components/Cards/Card.vue"]]), Hn = {}, Un = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function qn(e, t) {
  return c(), m("h3", Un, [
    y(e.$slots, "default")
  ]);
}
const Wn = /* @__PURE__ */ $(Hn, [["render", qn], ["__file", "/home/harry/Sites/ui/src/components/Cards/CardTitle.vue"]]), Kn = { class: "relative" }, Jn = {
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
    de(() => document.addEventListener("keydown", n)), ft(() => document.removeEventListener("keydown", n));
    const s = C(() => ({
      48: "w-48"
    })[t.width.toString()]), r = C(() => {
      const i = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${i}-left left-0` : t.align === "right" ? `origin-${i}-right right-0` : `origin-${i}`;
    }), o = B(!1);
    return (i, a) => (c(), m("div", Kn, [
      d("div", {
        onClick: a[0] || (a[0] = (f) => o.value = !o.value)
      }, [
        y(i.$slots, "trigger")
      ]),
      A(" Full Screen Dropdown Overlay "),
      Je(d(
        "div",
        {
          class: "fixed inset-0 z-40",
          onClick: a[1] || (a[1] = (f) => o.value = !1)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [Ge, o.value]
      ]),
      N(se, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        persisted: ""
      }, {
        default: z(() => [
          Je(d(
            "div",
            {
              class: R(["absolute z-50 mt-2 rounded-md shadow-lg", [s.value, r.value, t.bottom ? "bottom-full" : ""]]),
              style: { display: "none" },
              onClick: a[2] || (a[2] = (f) => o.value = !1)
            },
            [
              d(
                "div",
                {
                  class: R(["rounded-md ring-1 ring-black ring-opacity-5", e.contentClasses])
                },
                [
                  y(i.$slots, "content")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ), [
            [Ge, o.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]));
  }
}, bi = /* @__PURE__ */ $(Jn, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/Dropdown.vue"]]), Gn = {
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
    return (t, n) => (c(), M(G(e.as), {
      href: e.href,
      class: "block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
    }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["href"]));
  }
}, yi = /* @__PURE__ */ $(Gn, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/DropdownLink.vue"]]), Xn = {}, Yn = { class: "font-semibold text-3xl leading-tight" };
function Qn(e, t) {
  return c(), m("h1", Yn, [
    y(e.$slots, "default")
  ]);
}
const _i = /* @__PURE__ */ $(Xn, [["render", Qn], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH1.vue"]]), Zn = {}, er = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function tr(e, t) {
  return c(), m("h2", er, [
    y(e.$slots, "default")
  ]);
}
const wi = /* @__PURE__ */ $(Zn, [["render", tr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH2.vue"]]), nr = {}, rr = { class: "text-xl tracking-tight dark:text-white" };
function sr(e, t) {
  return c(), m("h2", rr, [
    y(e.$slots, "default")
  ]);
}
const xi = /* @__PURE__ */ $(nr, [["render", sr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH3.vue"]]), ye = {
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
}, or = ["for"], ir = { class: "relative mt-1" }, ar = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, lr = /* @__PURE__ */ d(
  "svg",
  {
    class: "h-5 w-5 text-red-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  },
  [
    /* @__PURE__ */ d("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
      "clip-rule": "evenodd"
    })
  ],
  -1
  /* HOISTED */
), ur = ["id"], cr = ["id"], dr = {
  __name: "InputLayout",
  props: {
    ...ye
  },
  setup(e) {
    return (t, n) => (c(), m("div", null, [
      t.label ? (c(), m("label", {
        key: 0,
        for: t.id,
        class: "block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      }, Q(t.label), 9, or)) : A("v-if", !0),
      d("div", ir, [
        y(t.$slots, "default"),
        t.error ? (c(), m("div", ar, [
          A(" Heroicon name: solid/exclamation-circle "),
          lr
        ])) : A("v-if", !0)
      ]),
      t.helpText && !t.error ? (c(), m("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, Q(t.helpText), 9, ur)) : t.error ? (c(), m("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, Q(t.error), 9, cr)) : A("v-if", !0)
    ]));
  }
}, ht = /* @__PURE__ */ $(dr, [["__file", "/home/harry/Sites/ui/src/components/Inputs/InputLayout.vue"]]), fr = ["name", "id", "aria-describedby"], pr = {
  inheritAttrs: !1
}, mr = /* @__PURE__ */ Object.assign(pr, {
  __name: "Input",
  props: {
    ...ye
  },
  setup(e) {
    return (t, n) => (c(), M(
      ht,
      pt(mt(t.$props)),
      {
        default: z(() => [
          d("input", Ft(t.$attrs, {
            name: t.name,
            id: t.id,
            class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
              "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
            }],
            "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
          }), null, 16, fr)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), $i = /* @__PURE__ */ $(mr, [["__file", "/home/harry/Sites/ui/src/components/Inputs/Input.vue"]]);
function q(e, t, ...n) {
  if (e in t) {
    let r = t[e];
    return typeof r == "function" ? r(...n) : r;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, q), s;
}
var je = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(je || {}), hr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(hr || {});
function ie({ visible: e = !0, features: t = 0, ourProps: n, theirProps: s, ...r }) {
  var o;
  let i = gt(s, n), a = Object.assign(r, { props: i });
  if (e || t & 2 && i.static)
    return Ae(a);
  if (t & 1) {
    let f = (o = i.unmount) == null || o ? 0 : 1;
    return q(f, { 0() {
      return null;
    }, 1() {
      return Ae({ ...r, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ae(a);
}
function Ae({ props: e, attrs: t, slots: n, slot: s, name: r }) {
  var o, i;
  let { as: a, ...f } = bt(e, ["unmount", "static"]), l = (o = n.default) == null ? void 0 : o.call(n, s), u = {};
  if (s) {
    let g = !1, b = [];
    for (let [_, O] of Object.entries(s))
      typeof O == "boolean" && (g = !0), O === !0 && b.push(_);
    g && (u["data-headlessui-state"] = b.join(" "));
  }
  if (a === "template") {
    if (l = vt(l ?? []), Object.keys(f).length > 0 || Object.keys(t).length > 0) {
      let [g, ...b] = l ?? [];
      if (!gr(g) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(f).concat(Object.keys(t)).map((x) => x.trim()).filter((x, L, w) => w.indexOf(x) === L).sort((x, L) => x.localeCompare(L)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let _ = gt((i = g.props) != null ? i : {}, f), O = Nt(g, _);
      for (let x in _)
        x.startsWith("on") && (O.props || (O.props = {}), O.props[x] = _[x]);
      return O;
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return Ce(a, Object.assign({}, f, u), { default: () => l });
}
function vt(e) {
  return e.flatMap((t) => t.type === X ? vt(t.children) : [t]);
}
function gt(...e) {
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
      for (let a of i) {
        if (r instanceof Event && r.defaultPrevented)
          return;
        a(r, ...o);
      }
    } });
  return t;
}
function vr(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function bt(e, t = []) {
  let n = Object.assign({}, e);
  for (let s of t)
    s in n && delete n[s];
  return n;
}
function gr(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let br = 0;
function yr() {
  return ++br;
}
function ze() {
  return yr();
}
var F = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});
function _r(e) {
  throw new Error("Unexpected object: " + e);
}
var V = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(V || {});
function wr(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let s = t.resolveActiveIndex(), r = s ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((a, f, l) => r !== -1 && l.length - f - 1 >= r ? !1 : !t.resolveDisabled(a));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 2:
        return n.findIndex((i, a) => a <= r ? !1 : !t.resolveDisabled(i));
      case 3: {
        let i = n.slice().reverse().findIndex((a) => !t.resolveDisabled(a));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 4:
        return n.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        _r(e);
    }
  })();
  return o === -1 ? s : o;
}
function P(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let yt = Symbol("Context");
var fe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(fe || {});
function xr() {
  return Re(yt, null);
}
function $r(e) {
  Fe(yt, e);
}
function Ye(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Sr(e, t) {
  let n = B(Ye(e.value.type, e.value.as));
  return de(() => {
    n.value = Ye(e.value.type, e.value.as);
  }), Se(() => {
    var s;
    n.value || P(t) && P(t) instanceof HTMLButtonElement && !((s = P(t)) != null && s.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var kr = Object.defineProperty, Or = (e, t, n) => t in e ? kr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qe = (e, t, n) => (Or(e, typeof t != "symbol" ? t + "" : t, n), n);
class zr {
  constructor() {
    Qe(this, "current", this.detect()), Qe(this, "currentId", 0);
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
let Ve = new zr();
function Ar(e) {
  if (Ve.isServer)
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
let Ze = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Tr = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Tr || {}), Dr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Dr || {}), Lr = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Lr || {}), He = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(He || {});
function _t(e, t = 0) {
  var n;
  return e === ((n = Ar(e)) == null ? void 0 : n.body) ? !1 : q(t, { 0() {
    return e.matches(Ze);
  }, 1() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(Ze))
        return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
var Er = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Er || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Cr(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let r = t(n), o = t(s);
    if (r === null || o === null)
      return 0;
    let i = r.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function he(e, t, n) {
  Ve.isServer || Se((s) => {
    document.addEventListener(e, t, n), s(() => document.removeEventListener(e, t, n));
  });
}
function jr(e, t, n) {
  Ve.isServer || Se((s) => {
    window.addEventListener(e, t, n), s(() => window.removeEventListener(e, t, n));
  });
}
function Pr(e, t, n = C(() => !0)) {
  function s(o, i) {
    if (!n.value || o.defaultPrevented)
      return;
    let a = i(o);
    if (a === null || !a.getRootNode().contains(a))
      return;
    let f = function l(u) {
      return typeof u == "function" ? l(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let l of f) {
      if (l === null)
        continue;
      let u = l instanceof HTMLElement ? l : P(l);
      if (u != null && u.contains(a) || o.composed && o.composedPath().includes(u))
        return;
    }
    return !_t(a, He.Loose) && a.tabIndex !== -1 && o.preventDefault(), t(o, a);
  }
  let r = B(null);
  he("pointerdown", (o) => {
    var i, a;
    n.value && (r.value = ((a = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : a[0]) || o.target);
  }, !0), he("mousedown", (o) => {
    var i, a;
    n.value && (r.value = ((a = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : a[0]) || o.target);
  }, !0), he("click", (o) => {
    r.value && (s(o, () => r.value), r.value = null);
  }, !0), he("touchend", (o) => s(o, () => o.target instanceof HTMLElement ? o.target : null), !0), jr("blur", (o) => s(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var wt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(wt || {});
let Ir = oe({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: s, ...r } = e, o = { "aria-hidden": (s & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(s & 4) === 4 && (s & 2) !== 2 && { display: "none" } } };
    return ie({ ourProps: o, theirProps: r, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function xt(e = {}, t = null, n = []) {
  for (let [s, r] of Object.entries(e))
    St(n, $t(t, s), r);
  return n;
}
function $t(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function St(e, t, n) {
  if (Array.isArray(n))
    for (let [s, r] of n.entries())
      St(e, $t(t, s.toString()), r);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : xt(n, t, e);
}
function Br(e, t, n) {
  let s = B(n == null ? void 0 : n.value), r = C(() => e.value !== void 0);
  return [C(() => r.value ? e.value : s.value), function(o) {
    return r.value || (s.value = o), t == null ? void 0 : t(o);
  }];
}
function et(e) {
  return [e.screenX, e.screenY];
}
function Mr() {
  let e = B([-1, -1]);
  return { wasMoved(t) {
    let n = et(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = et(t);
  } };
}
let tt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function nt(e) {
  var t, n;
  let s = (t = e.innerText) != null ? t : "", r = e.cloneNode(!0);
  if (!(r instanceof HTMLElement))
    return s;
  let o = !1;
  for (let a of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    a.remove(), o = !0;
  let i = o ? (n = r.innerText) != null ? n : "" : s;
  return tt.test(i) && (i = i.replace(tt, "")), i;
}
function Rr(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let s = n.split(" ").map((r) => {
      let o = document.getElementById(r);
      if (o) {
        let i = o.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : nt(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (s.length > 0)
      return s.join(", ");
  }
  return nt(e).trim();
}
function Fr(e) {
  let t = B(""), n = B("");
  return () => {
    let s = P(e);
    if (!s)
      return "";
    let r = s.innerText;
    if (t.value === r)
      return n.value;
    let o = Rr(s).trim().toLowerCase();
    return t.value = r, n.value = o, o;
  };
}
function Nr(e, t) {
  return e === t;
}
var Vr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Vr || {}), Hr = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Hr || {}), Ur = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Ur || {});
function qr(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let kt = Symbol("ListboxContext");
function me(e) {
  let t = Re(kt, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, me), n;
  }
  return t;
}
let Wr = oe({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Nr }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: s }) {
  let r = B(1), o = B(null), i = B(null), a = B(null), f = B([]), l = B(""), u = B(null), g = B(1);
  function b(h = (v) => v) {
    let v = u.value !== null ? f.value[u.value] : null, S = Cr(h(f.value.slice()), (E) => P(E.dataRef.domRef)), k = v ? S.indexOf(v) : null;
    return k === -1 && (k = null), { options: S, activeOptionIndex: k };
  }
  let _ = C(() => e.multiple ? 1 : 0), [O, x] = Br(C(() => e.modelValue), (h) => s("update:modelValue", h), C(() => e.defaultValue)), L = C(() => O.value === void 0 ? q(_.value, { 1: [], 0: void 0 }) : O.value), w = { listboxState: r, value: L, mode: _, compare(h, v) {
    if (typeof e.by == "string") {
      let S = e.by;
      return (h == null ? void 0 : h[S]) === (v == null ? void 0 : v[S]);
    }
    return e.by(h, v);
  }, orientation: C(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: i, optionsRef: a, disabled: C(() => e.disabled), options: f, searchQuery: l, activeOptionIndex: u, activationTrigger: g, closeListbox() {
    e.disabled || r.value !== 1 && (r.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || r.value !== 0 && (r.value = 0);
  }, goToOption(h, v, S) {
    if (e.disabled || r.value === 1)
      return;
    let k = b(), E = wr(h === V.Specific ? { focus: V.Specific, id: v } : { focus: h }, { resolveItems: () => k.options, resolveActiveIndex: () => k.activeOptionIndex, resolveId: (p) => p.id, resolveDisabled: (p) => p.dataRef.disabled });
    l.value = "", u.value = E, g.value = S ?? 1, f.value = k.options;
  }, search(h) {
    if (e.disabled || r.value === 1)
      return;
    let v = l.value !== "" ? 0 : 1;
    l.value += h.toLowerCase();
    let S = (u.value !== null ? f.value.slice(u.value + v).concat(f.value.slice(0, u.value + v)) : f.value).find((E) => E.dataRef.textValue.startsWith(l.value) && !E.dataRef.disabled), k = S ? f.value.indexOf(S) : -1;
    k === -1 || k === u.value || (u.value = k, g.value = 1);
  }, clearSearch() {
    e.disabled || r.value !== 1 && l.value !== "" && (l.value = "");
  }, registerOption(h, v) {
    let S = b((k) => [...k, { id: h, dataRef: v }]);
    f.value = S.options, u.value = S.activeOptionIndex;
  }, unregisterOption(h) {
    let v = b((S) => {
      let k = S.findIndex((E) => E.id === h);
      return k !== -1 && S.splice(k, 1), S;
    });
    f.value = v.options, u.value = v.activeOptionIndex, g.value = 1;
  }, theirOnChange(h) {
    e.disabled || x(h);
  }, select(h) {
    e.disabled || x(q(_.value, { 0: () => h, 1: () => {
      let v = U(w.value.value).slice(), S = U(h), k = v.findIndex((E) => w.compare(S, U(E)));
      return k === -1 ? v.push(S) : v.splice(k, 1), v;
    } }));
  } };
  Pr([i, a], (h, v) => {
    var S;
    w.closeListbox(), _t(v, He.Loose) || (h.preventDefault(), (S = P(i)) == null || S.focus());
  }, C(() => r.value === 0)), Fe(kt, w), $r(C(() => q(r.value, { 0: fe.Open, 1: fe.Closed })));
  let j = C(() => {
    var h;
    return (h = P(i)) == null ? void 0 : h.closest("form");
  });
  return de(() => {
    ke([j], () => {
      if (!j.value || e.defaultValue === void 0)
        return;
      function h() {
        w.theirOnChange(e.defaultValue);
      }
      return j.value.addEventListener("reset", h), () => {
        var v;
        (v = j.value) == null || v.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: h, modelValue: v, disabled: S, form: k, ...E } = e, p = { open: r.value === 0, disabled: S, value: L.value };
    return Ce(X, [...h != null && L.value != null ? xt({ [h]: L.value }).map(([I, T]) => Ce(Ir, vr({ features: wt.Hidden, key: I, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: k, name: I, value: T }))) : [], ie({ ourProps: {}, theirProps: { ...n, ...bt(E, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: p, slots: t, attrs: n, name: "Listbox" })]);
  };
} });
oe({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${ze()}` } }, setup(e, { attrs: t, slots: n }) {
  let s = me("ListboxLabel");
  function r() {
    var o;
    (o = P(s.buttonRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: s.listboxState.value === 0, disabled: s.disabled.value }, { id: i, ...a } = e, f = { id: i, ref: s.labelRef, onClick: r };
    return ie({ ourProps: f, theirProps: a, slot: o, attrs: t, slots: n, name: "ListboxLabel" });
  };
} });
let Kr = oe({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${ze()}` } }, setup(e, { attrs: t, slots: n, expose: s }) {
  let r = me("ListboxButton");
  s({ el: r.buttonRef, $el: r.buttonRef });
  function o(l) {
    switch (l.key) {
      case F.Space:
      case F.Enter:
      case F.ArrowDown:
        l.preventDefault(), r.openListbox(), K(() => {
          var u;
          (u = P(r.optionsRef)) == null || u.focus({ preventScroll: !0 }), r.value.value || r.goToOption(V.First);
        });
        break;
      case F.ArrowUp:
        l.preventDefault(), r.openListbox(), K(() => {
          var u;
          (u = P(r.optionsRef)) == null || u.focus({ preventScroll: !0 }), r.value.value || r.goToOption(V.Last);
        });
        break;
    }
  }
  function i(l) {
    switch (l.key) {
      case F.Space:
        l.preventDefault();
        break;
    }
  }
  function a(l) {
    r.disabled.value || (r.listboxState.value === 0 ? (r.closeListbox(), K(() => {
      var u;
      return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (l.preventDefault(), r.openListbox(), qr(() => {
      var u;
      return (u = P(r.optionsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let f = Sr(C(() => ({ as: e.as, type: t.type })), r.buttonRef);
  return () => {
    var l, u;
    let g = { open: r.listboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: b, ..._ } = e, O = { ref: r.buttonRef, id: b, type: f.value, "aria-haspopup": "listbox", "aria-controls": (l = P(r.optionsRef)) == null ? void 0 : l.id, "aria-expanded": r.listboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(u = P(r.labelRef)) == null ? void 0 : u.id, b].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: o, onKeyup: i, onClick: a };
    return ie({ ourProps: O, theirProps: _, slot: g, attrs: t, slots: n, name: "ListboxButton" });
  };
} }), Jr = oe({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${ze()}` } }, setup(e, { attrs: t, slots: n, expose: s }) {
  let r = me("ListboxOptions"), o = B(null);
  s({ el: r.optionsRef, $el: r.optionsRef });
  function i(l) {
    switch (o.value && clearTimeout(o.value), l.key) {
      case F.Space:
        if (r.searchQuery.value !== "")
          return l.preventDefault(), l.stopPropagation(), r.search(l.key);
      case F.Enter:
        if (l.preventDefault(), l.stopPropagation(), r.activeOptionIndex.value !== null) {
          let u = r.options.value[r.activeOptionIndex.value];
          r.select(u.dataRef.value);
        }
        r.mode.value === 0 && (r.closeListbox(), K(() => {
          var u;
          return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        }));
        break;
      case q(r.orientation.value, { vertical: F.ArrowDown, horizontal: F.ArrowRight }):
        return l.preventDefault(), l.stopPropagation(), r.goToOption(V.Next);
      case q(r.orientation.value, { vertical: F.ArrowUp, horizontal: F.ArrowLeft }):
        return l.preventDefault(), l.stopPropagation(), r.goToOption(V.Previous);
      case F.Home:
      case F.PageUp:
        return l.preventDefault(), l.stopPropagation(), r.goToOption(V.First);
      case F.End:
      case F.PageDown:
        return l.preventDefault(), l.stopPropagation(), r.goToOption(V.Last);
      case F.Escape:
        l.preventDefault(), l.stopPropagation(), r.closeListbox(), K(() => {
          var u;
          return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        break;
      case F.Tab:
        l.preventDefault(), l.stopPropagation();
        break;
      default:
        l.key.length === 1 && (r.search(l.key), o.value = setTimeout(() => r.clearSearch(), 350));
        break;
    }
  }
  let a = xr(), f = C(() => a !== null ? (a.value & fe.Open) === fe.Open : r.listboxState.value === 0);
  return () => {
    var l, u, g, b;
    let _ = { open: r.listboxState.value === 0 }, { id: O, ...x } = e, L = { "aria-activedescendant": r.activeOptionIndex.value === null || (l = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : l.id, "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, "aria-labelledby": (b = (u = P(r.labelRef)) == null ? void 0 : u.id) != null ? b : (g = P(r.buttonRef)) == null ? void 0 : g.id, "aria-orientation": r.orientation.value, id: O, onKeydown: i, role: "listbox", tabIndex: 0, ref: r.optionsRef };
    return ie({ ourProps: L, theirProps: x, slot: _, attrs: t, slots: n, features: je.RenderStrategy | je.Static, visible: f.value, name: "ListboxOptions" });
  };
} }), Gr = oe({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${ze()}` } }, setup(e, { slots: t, attrs: n, expose: s }) {
  let r = me("ListboxOption"), o = B(null);
  s({ el: o, $el: o });
  let i = C(() => r.activeOptionIndex.value !== null ? r.options.value[r.activeOptionIndex.value].id === e.id : !1), a = C(() => q(r.mode.value, { 0: () => r.compare(U(r.value.value), U(e.value)), 1: () => U(r.value.value).some((w) => r.compare(U(w), U(e.value))) })), f = C(() => q(r.mode.value, { 1: () => {
    var w;
    let j = U(r.value.value);
    return ((w = r.options.value.find((h) => j.some((v) => r.compare(U(v), U(h.dataRef.value))))) == null ? void 0 : w.id) === e.id;
  }, 0: () => a.value })), l = Fr(o), u = C(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return l();
  }, domRef: o }));
  de(() => r.registerOption(e.id, u)), ft(() => r.unregisterOption(e.id)), de(() => {
    ke([r.listboxState, a], () => {
      r.listboxState.value === 0 && a.value && q(r.mode.value, { 1: () => {
        f.value && r.goToOption(V.Specific, e.id);
      }, 0: () => {
        r.goToOption(V.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), Se(() => {
    r.listboxState.value === 0 && i.value && r.activationTrigger.value !== 0 && K(() => {
      var w, j;
      return (j = (w = P(o)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : j.call(w, { block: "nearest" });
    });
  });
  function g(w) {
    if (e.disabled)
      return w.preventDefault();
    r.select(e.value), r.mode.value === 0 && (r.closeListbox(), K(() => {
      var j;
      return (j = P(r.buttonRef)) == null ? void 0 : j.focus({ preventScroll: !0 });
    }));
  }
  function b() {
    if (e.disabled)
      return r.goToOption(V.Nothing);
    r.goToOption(V.Specific, e.id);
  }
  let _ = Mr();
  function O(w) {
    _.update(w);
  }
  function x(w) {
    _.wasMoved(w) && (e.disabled || i.value || r.goToOption(V.Specific, e.id, 0));
  }
  function L(w) {
    _.wasMoved(w) && (e.disabled || i.value && r.goToOption(V.Nothing));
  }
  return () => {
    let { disabled: w } = e, j = { active: i.value, selected: a.value, disabled: w }, { id: h, value: v, disabled: S, ...k } = e, E = { id: h, ref: o, role: "option", tabIndex: w === !0 ? void 0 : -1, "aria-disabled": w === !0 ? !0 : void 0, "aria-selected": a.value, disabled: void 0, onClick: g, onFocus: b, onPointerenter: O, onMouseenter: O, onPointermove: x, onMousemove: x, onPointerleave: L, onMouseleave: L };
    return ie({ ourProps: E, theirProps: k, slot: j, attrs: n, slots: t, name: "ListboxOption" });
  };
} });
const Xr = {}, Yr = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Qr = /* @__PURE__ */ d(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 12.75l6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), Zr = [
  Qr
];
function es(e, t) {
  return c(), m("svg", Yr, Zr);
}
const ts = /* @__PURE__ */ $(Xr, [["render", es], ["__file", "/home/harry/Sites/ui/src/components/Icons/CheckIcon.vue"]]), ns = {};
function rs(e, t) {
  return c(), M(se, {
    "enter-active-class": "transition ease-out duration-200",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95"
  }, {
    default: z(() => [
      y(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
const Ot = /* @__PURE__ */ $(ns, [["render", rs], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeScaleTransition.vue"]]), ss = {}, os = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, is = /* @__PURE__ */ d(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), as = [
  is
];
function ls(e, t) {
  return c(), m("svg", os, as);
}
const us = /* @__PURE__ */ $(ss, [["render", ls], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronDownIcon.vue"]]), cs = { class: "text-sm" }, ds = {
  inheritAttrs: !1
}, fs = /* @__PURE__ */ Object.assign(ds, {
  __name: "SelectInput",
  props: {
    ...ye,
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
    return (t, n) => (c(), M(
      ht,
      pt(mt(
        Object.keys(D(ye)).reduce((s, r) => (s[r] = t.$props[r], s), {})
      )),
      {
        default: z(() => [
          N(D(Wr), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": n[0] || (n[0] = (s) => t.$emit("update:modelValue", s))
          }, {
            default: z(() => [
              N(D(Kr), {
                class: R({
                  "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                  "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
                })
              }, {
                default: z(() => {
                  var s, r;
                  return [
                    d(
                      "div",
                      cs,
                      Q(Array.isArray(e.modelValue) ? (s = e.modelValue) == null ? void 0 : s.map((o) => o.name).join(", ") : ((r = e.modelValue) == null ? void 0 : r.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    N(us, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class"]),
              N(Ot, null, {
                default: z(() => [
                  N(D(Jr), {
                    class: R(["min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                      "right-0": e.align === "right",
                      "left-0": e.align === "left"
                    }])
                  }, {
                    default: z(() => [
                      y(t.$slots, "listbox-title"),
                      (c(!0), m(
                        X,
                        null,
                        Ne(e.options, (s) => (c(), M(D(Gr), {
                          key: s.id,
                          value: s,
                          as: "template"
                        }, {
                          default: z(({ active: r, selected: o }) => [
                            d(
                              "li",
                              {
                                class: R(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                                  "bg-zinc-50 dark:bg-zinc-900": o,
                                  "bg-zinc-100 dark:bg-zinc-700": r
                                }])
                              },
                              [
                                Z(
                                  Q(s.name) + " ",
                                  1
                                  /* TEXT */
                                ),
                                o ? (c(), M(ts, {
                                  key: 0,
                                  class: "h-5 w-5"
                                })) : A("v-if", !0)
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
}), Si = /* @__PURE__ */ $(fs, [["__file", "/home/harry/Sites/ui/src/components/Inputs/SelectInput.vue"]]);
function ps(e) {
  return Vt() ? (Ht(e), !0) : !1;
}
function Ue(e) {
  return typeof e == "function" ? e() : D(e);
}
const ms = typeof window < "u" && typeof document < "u", hs = Object.prototype.toString, vs = (e) => hs.call(e) === "[object Object]", gs = () => {
};
function bs(e, t) {
  function n(...s) {
    return new Promise((r, o) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(r).catch(o);
    });
  }
  return n;
}
const zt = (e) => e();
function ys(e = zt) {
  const t = B(!0);
  function n() {
    t.value = !1;
  }
  function s() {
    t.value = !0;
  }
  const r = (...o) => {
    t.value && e(...o);
  };
  return { isActive: Ut(t), pause: n, resume: s, eventFilter: r };
}
function _s(e, t, n = {}) {
  const {
    eventFilter: s = zt,
    ...r
  } = n;
  return ke(
    e,
    bs(
      s,
      t
    ),
    r
  );
}
function ws(e, t, n = {}) {
  const {
    eventFilter: s,
    ...r
  } = n, { eventFilter: o, pause: i, resume: a, isActive: f } = ys(s);
  return { stop: _s(
    e,
    t,
    {
      ...r,
      eventFilter: o
    }
  ), pause: i, resume: a, isActive: f };
}
function xs(e) {
  var t;
  const n = Ue(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const _e = ms ? window : void 0;
function rt(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = _e) : [t, n, s, r] = e, !t)
    return gs;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], i = () => {
    o.forEach((u) => u()), o.length = 0;
  }, a = (u, g, b, _) => (u.addEventListener(g, b, _), () => u.removeEventListener(g, b, _)), f = ke(
    () => [xs(t), Ue(r)],
    ([u, g]) => {
      if (i(), !u)
        return;
      const b = vs(g) ? { ...g } : g;
      o.push(
        ...n.flatMap((_) => s.map((O) => a(u, _, O, b)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    f(), i();
  };
  return ps(l), l;
}
const ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = "__vueuse_ssr_handlers__", $s = /* @__PURE__ */ Ss();
function Ss() {
  return ge in ve || (ve[ge] = ve[ge] || {}), ve[ge];
}
function ks(e, t) {
  return $s[e] || t;
}
function Os(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const zs = {
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
}, st = "vueuse-storage";
function As(e, t, n, s = {}) {
  var r;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: f = !0,
    mergeDefaults: l = !1,
    shallow: u,
    window: g = _e,
    eventFilter: b,
    onError: _ = (p) => {
      console.error(p);
    }
  } = s, O = (u ? qt : B)(t);
  if (!n)
    try {
      n = ks("getDefaultStorage", () => {
        var p;
        return (p = _e) == null ? void 0 : p.localStorage;
      })();
    } catch (p) {
      _(p);
    }
  if (!n)
    return O;
  const x = Ue(t), L = Os(x), w = (r = s.serializer) != null ? r : zs[L], { pause: j, resume: h } = ws(
    O,
    () => v(O.value),
    { flush: o, deep: i, eventFilter: b }
  );
  return g && a && (rt(g, "storage", E), rt(g, st, k)), E(), O;
  function v(p) {
    try {
      if (p == null)
        n.removeItem(e);
      else {
        const I = w.write(p), T = n.getItem(e);
        T !== I && (n.setItem(e, I), g && g.dispatchEvent(new CustomEvent(st, {
          detail: {
            key: e,
            oldValue: T,
            newValue: I,
            storageArea: n
          }
        })));
      }
    } catch (I) {
      _(I);
    }
  }
  function S(p) {
    const I = p ? p.newValue : n.getItem(e);
    if (I == null)
      return f && x !== null && n.setItem(e, w.write(x)), x;
    if (!p && l) {
      const T = w.read(I);
      return typeof l == "function" ? l(T, x) : L === "object" && !Array.isArray(T) ? { ...x, ...T } : T;
    } else
      return typeof I != "string" ? I : w.read(I);
  }
  function k(p) {
    E(p.detail);
  }
  function E(p) {
    if (!(p && p.storageArea !== n)) {
      if (p && p.key == null) {
        O.value = x;
        return;
      }
      if (!(p && p.key !== e)) {
        j();
        try {
          (p == null ? void 0 : p.newValue) !== w.write(O.value) && (O.value = S(p));
        } catch (I) {
          _(I);
        } finally {
          p ? K(h) : h();
        }
      }
    }
  }
}
function Ts(e, t, n = {}) {
  const { window: s = _e } = n;
  return As(e, t, s == null ? void 0 : s.localStorage, n);
}
const Ds = {}, Ls = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, Es = /* @__PURE__ */ d(
  "g",
  { fill: "none" },
  [
    /* @__PURE__ */ d("path", {
      d: "M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0z",
      fill: "currentColor"
    })
  ],
  -1
  /* HOISTED */
), Cs = [
  Es
];
function js(e, t) {
  return c(), m("svg", Ls, Cs);
}
const Ps = /* @__PURE__ */ $(Ds, [["render", js], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronRightIcon.vue"]]), Is = { class: "flex flex-col gap-6 py-6" }, Bs = { class: "flex flex-col gap-6 mb-6" }, Ms = {
  __name: "Sidebar",
  setup(e) {
    const t = Ts("ui/sidebar", !1);
    return Fe("sidebarMinimised", t), (n, s) => (c(), m(
      "nav",
      {
        class: R(["min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10", {
          "!w-24 !max-w-24 !min-w-24": D(t),
          "w-64 max-w-64 min-w-64": !D(t)
        }])
      },
      [
        d("button", {
          class: "absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-10",
          onClick: s[0] || (s[0] = (r) => t.value = !D(t))
        }, [
          N(Ps, {
            class: R(["w-5 h-5", {
              "transform rotate-180": !D(t)
            }])
          }, null, 8, ["class"])
        ]),
        A(" Primary Navigation Menu "),
        d("div", Is, [
          A(" Logo "),
          y(n.$slots, "default")
        ]),
        d("div", Bs, [
          y(n.$slots, "bottom")
        ])
      ],
      2
      /* CLASS */
    ));
  }
}, ki = /* @__PURE__ */ $(Ms, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/Sidebar.vue"]]), Rs = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3"
}, Fs = {
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
    const t = e, n = Re("sidebarMinimised"), s = C(() => {
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
    return (r, o) => (c(), M(G(e.as), {
      class: R(s.value)
    }, {
      default: z(() => [
        e.icon ? (c(), M(G(e.icon), {
          key: 0,
          class: R(["w-6 h-6 transition-all", {
            " mr-4": !D(n)
          }])
        }, null, 8, ["class"])) : A("v-if", !0),
        N(se, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "transform opacity-0",
          "enter-to-class": "transform opacity-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100",
          "leave-to-class": "transform opacity-0"
        }, {
          default: z(() => [
            D(n) ? A("v-if", !0) : y(r.$slots, "default", { key: 0 })
          ]),
          _: 3
          /* FORWARDED */
        }),
        D(n) ? (c(), m("div", Rs, [
          y(r.$slots, "default")
        ])) : A("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, Oi = /* @__PURE__ */ $(Fs, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItem.vue"]]), Ns = {}, Vs = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, Hs = { class: "flex w-full h-full max-h-screen z-10 relative" }, Us = { class: "flex-grow overflow-y-auto pb-12" };
function qs(e, t) {
  return c(), m("div", Vs, [
    y(e.$slots, "top"),
    d("div", Hs, [
      y(e.$slots, "sidebar"),
      d("section", Us, [
        y(e.$slots, "default")
      ])
    ])
  ]);
}
const zi = /* @__PURE__ */ $(Ns, [["render", qs], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarLayout.vue"]]), Ws = {}, Ks = { class: "flex flex-col gap-2 px-2" };
function Js(e, t) {
  return c(), m("div", Ks, [
    y(e.$slots, "default")
  ]);
}
const Ai = /* @__PURE__ */ $(Ws, [["render", Js], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItemGroup.vue"]]), Gs = {};
function Xs(e, t) {
  return c(), M(se, {
    "enter-active-class": "transition ease-out duration-300",
    "enter-from-class": "transform opacity-0",
    "enter-to-class": "transform opacity-100",
    "leave-active-class": "transition ease-in duration-200",
    "leave-from-class": "transform opacity-100",
    "leave-to-class": "transform opacity-0"
  }, {
    default: z(() => [
      y(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
const Ys = /* @__PURE__ */ $(Gs, [["render", Xs], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeTransition.vue"]]);
function Qs(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
const At = (e, t, n) => Math.min(Math.max(n, e), t), H = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
}, we = (e) => typeof e == "number", ne = (e) => Array.isArray(e) && !we(e[0]), Zs = (e, t, n) => {
  const s = t - e;
  return ((n - e) % s + s) % s + e;
};
function eo(e, t) {
  return ne(e) ? e[Zs(0, e.length, t)] : e;
}
const Tt = (e, t, n) => -n * e + n * t + e, Dt = () => {
}, J = (e) => e, qe = (e, t, n) => t - e === 0 ? 1 : (n - e) / (t - e);
function Lt(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const r = qe(0, t, s);
    e.push(Tt(n, 1, r));
  }
}
function to(e) {
  const t = [0];
  return Lt(t, e - 1), t;
}
function no(e, t = to(e.length), n = J) {
  const s = e.length, r = s - t.length;
  return r > 0 && Lt(t, r), (o) => {
    let i = 0;
    for (; i < s - 2 && !(o < t[i + 1]); i++)
      ;
    let a = At(0, 1, qe(t[i], t[i + 1], o));
    return a = eo(n, i)(a), Tt(e[i], e[i + 1], a);
  };
}
const Et = (e) => Array.isArray(e) && we(e[0]), Pe = (e) => typeof e == "object" && !!e.createAnimation, re = (e) => typeof e == "function", ro = (e) => typeof e == "string", ce = {
  ms: (e) => e * 1e3,
  s: (e) => e / 1e3
}, Ct = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, so = 1e-7, oo = 12;
function io(e, t, n, s, r) {
  let o, i, a = 0;
  do
    i = t + (n - t) / 2, o = Ct(i, s, r) - e, o > 0 ? n = i : t = i;
  while (Math.abs(o) > so && ++a < oo);
  return i;
}
function ue(e, t, n, s) {
  if (e === t && n === s)
    return J;
  const r = (o) => io(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Ct(r(o), t, s);
}
const ao = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  const s = n * e, r = t === "end" ? Math.floor(s) : Math.ceil(s);
  return At(0, 1, r / e);
}, ot = {
  ease: ue(0.25, 0.1, 0.25, 1),
  "ease-in": ue(0.42, 0, 1, 1),
  "ease-in-out": ue(0.42, 0, 0.58, 1),
  "ease-out": ue(0, 0, 0.58, 1)
}, lo = /\((.*?)\)/;
function it(e) {
  if (re(e))
    return e;
  if (Et(e))
    return ue(...e);
  if (ot[e])
    return ot[e];
  if (e.startsWith("steps")) {
    const t = lo.exec(e);
    if (t) {
      const n = t[1].split(",");
      return ao(parseFloat(n[0]), n[1].trim());
    }
  }
  return J;
}
class jt {
  constructor(t, n = [0, 1], { easing: s, duration: r = H.duration, delay: o = H.delay, endDelay: i = H.endDelay, repeat: a = H.repeat, offset: f, direction: l = "normal" } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = J, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((g, b) => {
      this.resolve = g, this.reject = b;
    }), s = s || H.easing, Pe(s)) {
      const g = s.createAnimation(n);
      s = g.easing, n = g.keyframes || n, r = g.duration || r;
    }
    this.repeat = a, this.easing = ne(s) ? J : it(s), this.updateDuration(r);
    const u = no(n, f, ne(s) ? s.map(it) : J);
    this.tick = (g) => {
      var b;
      o = o;
      let _ = 0;
      this.pauseTime !== void 0 ? _ = this.pauseTime : _ = (g - this.startTime) * this.rate, this.t = _, _ /= 1e3, _ = Math.max(_ - o, 0), this.playState === "finished" && this.pauseTime === void 0 && (_ = this.totalDuration);
      const O = _ / this.duration;
      let x = Math.floor(O), L = O % 1;
      !L && O >= 1 && (L = 1), L === 1 && x--;
      const w = x % 2;
      (l === "reverse" || l === "alternate" && w || l === "alternate-reverse" && !w) && (L = 1 - L);
      const j = _ >= this.totalDuration ? 1 : Math.min(L, 1), h = u(this.easing(j));
      t(h), this.pauseTime === void 0 && (this.playState === "finished" || _ >= this.totalDuration + i) ? (this.playState = "finished", (b = this.resolve) === null || b === void 0 || b.call(this, h)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
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
var Ie = function() {
};
process.env.NODE_ENV !== "production" && (Ie = function(e, t) {
  if (!e)
    throw new Error(t);
});
class uo {
  setAnimation(t) {
    this.animation = t, t == null || t.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const Te = /* @__PURE__ */ new WeakMap();
function Pt(e) {
  return Te.has(e) || Te.set(e, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), Te.get(e);
}
function co(e, t) {
  return e.has(t) || e.set(t, new uo()), e.get(t);
}
const fo = ["", "X", "Y", "Z"], po = ["translate", "scale", "rotate", "skew"], xe = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
}, at = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (e) => e + "deg"
}, mo = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (e) => e + "px"
  },
  rotate: at,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: J
  },
  skew: at
}, pe = /* @__PURE__ */ new Map(), We = (e) => `--motion-${e}`, $e = ["x", "y", "z"];
po.forEach((e) => {
  fo.forEach((t) => {
    $e.push(e + t), pe.set(We(e + t), mo[e]);
  });
});
const ho = (e, t) => $e.indexOf(e) - $e.indexOf(t), vo = new Set($e), It = (e) => vo.has(e), go = (e, t) => {
  xe[t] && (t = xe[t]);
  const { transforms: n } = Pt(e);
  Qs(n, t), e.style.transform = bo(n);
}, bo = (e) => e.sort(ho).reduce(yo, "").trim(), yo = (e, t) => `${e} ${t}(var(${We(t)}))`, Be = (e) => e.startsWith("--"), lt = /* @__PURE__ */ new Set();
function _o(e) {
  if (!lt.has(e)) {
    lt.add(e);
    try {
      const { syntax: t, initialValue: n } = pe.has(e) ? pe.get(e) : {};
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
const De = (e, t) => document.createElement("div").animate(e, t), ut = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      De({ opacity: [1] });
    } catch {
      return !1;
    }
    return !0;
  },
  finished: () => !!De({ opacity: [0, 1] }, { duration: 1e-3 }).finished,
  linearEasing: () => {
    try {
      De({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }
}, Le = {}, ee = {};
for (const e in ut)
  ee[e] = () => (Le[e] === void 0 && (Le[e] = ut[e]()), Le[e]);
const wo = 0.015, xo = (e, t) => {
  let n = "";
  const s = Math.round(t / wo);
  for (let r = 0; r < s; r++)
    n += e(qe(0, s - 1, r)) + ", ";
  return n.substring(0, n.length - 2);
}, ct = (e, t) => re(e) ? ee.linearEasing() ? `linear(${xo(e, t)})` : H.easing : Et(e) ? $o(e) : e, $o = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`;
function So(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] === null && (e[n] = n ? e[n - 1] : t());
  return e;
}
const ko = (e) => Array.isArray(e) ? e : [e];
function Me(e) {
  return xe[e] && (e = xe[e]), It(e) ? We(e) : e;
}
const be = {
  get: (e, t) => {
    t = Me(t);
    let n = Be(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!n && n !== 0) {
      const s = pe.get(t);
      s && (n = s.initialValue);
    }
    return n;
  },
  set: (e, t, n) => {
    t = Me(t), Be(t) ? e.style.setProperty(t, n) : e.style[t] = n;
  }
};
function Bt(e, t = !0) {
  if (!(!e || e.playState === "finished"))
    try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {
    }
}
function Oo(e, t) {
  var n;
  let s = (t == null ? void 0 : t.toDefaultUnit) || J;
  const r = e[e.length - 1];
  if (ro(r)) {
    const o = ((n = r.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || "";
    o && (s = (i) => i + o);
  }
  return s;
}
function zo() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function Ao(e, t, n, s = {}, r) {
  const o = zo(), i = s.record !== !1 && o;
  let a, { duration: f = H.duration, delay: l = H.delay, endDelay: u = H.endDelay, repeat: g = H.repeat, easing: b = H.easing, persist: _ = !1, direction: O, offset: x, allowWebkitAcceleration: L = !1 } = s;
  const w = Pt(e), j = It(t);
  let h = ee.waapi();
  j && go(e, t);
  const v = Me(t), S = co(w.values, v), k = pe.get(v);
  return Bt(S.animation, !(Pe(b) && S.generator) && s.record !== !1), () => {
    const E = () => {
      var T, ae;
      return (ae = (T = be.get(e, v)) !== null && T !== void 0 ? T : k == null ? void 0 : k.initialValue) !== null && ae !== void 0 ? ae : 0;
    };
    let p = So(ko(n), E);
    const I = Oo(p, k);
    if (Pe(b)) {
      const T = b.createAnimation(p, t !== "opacity", E, v, S);
      b = T.easing, p = T.keyframes || p, f = T.duration || f;
    }
    if (Be(v) && (ee.cssRegisterProperty() ? _o(v) : h = !1), j && !ee.linearEasing() && (re(b) || ne(b) && b.some(re)) && (h = !1), h) {
      k && (p = p.map((Y) => we(Y) ? k.toDefaultUnit(Y) : Y)), p.length === 1 && (!ee.partialKeyframes() || i) && p.unshift(E());
      const T = {
        delay: ce.ms(l),
        duration: ce.ms(f),
        endDelay: ce.ms(u),
        easing: ne(b) ? void 0 : ct(b, f),
        direction: O,
        iterations: g + 1,
        fill: "both"
      };
      a = e.animate({
        [v]: p,
        offset: x,
        easing: ne(b) ? b.map((Y) => ct(Y, f)) : void 0
      }, T), a.finished || (a.finished = new Promise((Y, Rt) => {
        a.onfinish = Y, a.oncancel = Rt;
      }));
      const ae = p[p.length - 1];
      a.finished.then(() => {
        _ || (be.set(e, v, ae), a.cancel());
      }).catch(Dt), L || (a.playbackRate = 1.000001);
    } else if (r && j)
      p = p.map((T) => typeof T == "string" ? parseFloat(T) : T), p.length === 1 && p.unshift(parseFloat(E())), a = new r((T) => {
        be.set(e, v, I ? I(T) : T);
      }, p, Object.assign(Object.assign({}, s), {
        duration: f,
        easing: b
      }));
    else {
      const T = p[p.length - 1];
      be.set(e, v, k && we(T) ? k.toDefaultUnit(T) : T);
    }
    return i && o(e, t, p, {
      duration: f,
      delay: l,
      easing: b,
      repeat: g,
      offset: x
    }, "motion-one"), S.setAnimation(a), a;
  };
}
const To = (e, t) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e)
);
function Do(e, t) {
  var n;
  return typeof e == "string" ? t ? ((n = t[e]) !== null && n !== void 0 || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || []);
}
const Lo = (e) => e(), Mt = (e, t, n = H.duration) => new Proxy({
  animations: e.map(Lo).filter(Boolean),
  duration: n,
  options: t
}, Co), Eo = (e) => e.animations[0], Co = {
  get: (e, t) => {
    const n = Eo(e);
    switch (t) {
      case "duration":
        return e.duration;
      case "currentTime":
        return ce.s((n == null ? void 0 : n[t]) || 0);
      case "playbackRate":
      case "playState":
        return n == null ? void 0 : n[t];
      case "finished":
        return e.finished || (e.finished = Promise.all(e.animations.map(jo)).catch(Dt)), e.finished;
      case "stop":
        return () => {
          e.animations.forEach((s) => Bt(s));
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
        n = ce.ms(n);
      case "currentTime":
      case "playbackRate":
        for (let s = 0; s < e.animations.length; s++)
          e.animations[s][t] = n;
        return !0;
    }
    return !1;
  }
}, jo = (e) => e.finished;
function Po(e, t, n) {
  return re(e) ? e(t, n) : e;
}
function Io(e) {
  return function(n, s, r = {}) {
    n = Do(n);
    const o = n.length;
    Ie(!!o, "No valid element provided."), Ie(!!s, "No keyframes defined.");
    const i = [];
    for (let a = 0; a < o; a++) {
      const f = n[a];
      for (const l in s) {
        const u = To(r, l);
        u.delay = Po(u.delay, a, o);
        const g = Ao(f, l, s[l], u, e);
        i.push(g);
      }
    }
    return Mt(
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
const Bo = Io(jt);
function Mo(e, t = {}) {
  return Mt([
    () => {
      const n = new jt(e, [0, 1], t);
      return n.finished.catch(() => {
      }), n;
    }
  ], t, t.duration);
}
function dt(e, t, n) {
  return (re(e) ? Mo : Bo)(e, t, n);
}
const Ro = {
  __name: "CollapseTransition",
  setup(e) {
    function t(s, r) {
      const { height: o } = s.getBoundingClientRect();
      s.style.height = "0px", dt(s, { height: `${o}px` }, { duration: 0.3 }).finished.then(
        r
      );
    }
    function n(s, r) {
      dt(s, { height: "0px" }, { duration: 0.2 }).finished.then(r);
    }
    return (s, r) => (c(), M(se, {
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
        y(s.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Ti = /* @__PURE__ */ $(Ro, [["__file", "/home/harry/Sites/ui/src/components/Transitions/CollapseTransition.vue"]]), Fo = { class: "flex gap-2 items-center" }, No = {
  key: 0,
  class: "text-zinc-400 select-none"
}, Vo = {
  __name: "Breadcrumbs",
  setup(e) {
    const t = C(() => Wt().default());
    return (n, s) => (c(), m("div", Fo, [
      (c(!0), m(
        X,
        null,
        Ne(t.value, (r, o) => (c(), m(
          X,
          null,
          [
            (c(), M(G(r), {
              class: R({
                "dark:text-zinc-200 text-zinc-700": o === t.value.length - 1
              })
            }, null, 8, ["class"])),
            o < t.value.length - 1 ? (c(), m("div", No, "/")) : A("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]));
  }
}, Di = /* @__PURE__ */ $(Vo, [["__file", "/home/harry/Sites/ui/src/components/Breadcrumbs/Breadcrumbs.vue"]]), Ho = {
  __name: "BreadcrumbItem",
  props: {
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e) {
    return (t, n) => (c(), M(G(e.as), { class: "rounded-full px-1.5 transition hover:bg-zinc-900/10 hover:dark:bg-white/10 cursor-pointer text-sm text-zinc-400" }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Li = /* @__PURE__ */ $(Ho, [["__file", "/home/harry/Sites/ui/src/components/Breadcrumbs/BreadcrumbItem.vue"]]), Uo = {}, qo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, Wo = /* @__PURE__ */ d(
  "path",
  {
    d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Ko = [
  Wo
];
function Jo(e, t) {
  return c(), m("svg", qo, Ko);
}
const Go = /* @__PURE__ */ $(Uo, [["render", Jo], ["__file", "/home/harry/Sites/ui/src/components/Icons/CloseIcon.vue"]]);
class Xo {
  constructor(t, n = {}, s = () => {
  }) {
    this.type = t, this.data = n, this.resolve = s;
  }
}
const te = le({
  dialog: null,
  info(e, t) {
    return te.create("info", { title: e, subtitle: t });
  },
  confirm(e, t) {
    return te.create("confirm", { title: e, subtitle: t });
  },
  reset() {
    te.dialog = null;
  },
  create(e, t) {
    return new Promise((n) => {
      te.dialog = new Xo(e, t, n);
    });
  }
}), { info: Ei, confirm: Ci, reset: Ee } = te, W = C(() => te.dialog), Yo = {
  key: 0,
  class: "absolute inset-0 z-40 bg-black/40"
}, Qo = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center"
}, Zo = {
  __name: "Dialogs",
  setup(e) {
    return (t, n) => (c(), m(
      X,
      null,
      [
        N(Ys, null, {
          default: z(() => [
            D(W) ? (c(), m("div", Yo)) : A("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }),
        N(Ot, null, {
          default: z(() => [
            D(W) ? (c(), m("div", Qo, [
              N(
                Vn,
                {
                  class: "mx-6 w-full max-w-lg",
                  "footer-justify": "end"
                },
                Kt({
                  header: z(() => [
                    N(Wn, null, {
                      default: z(() => {
                        var s, r;
                        return [
                          Z(
                            Q((r = (s = D(W)) == null ? void 0 : s.data) == null ? void 0 : r.title),
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
                    D(W).type === "info" ? (c(), M(Xe, {
                      key: 0,
                      onClick: n[0] || (n[0] = (s) => {
                        var r;
                        (r = D(W)) == null || r.resolve(), D(Ee)();
                      })
                    }, {
                      default: z(() => [
                        Z("Ok")
                      ]),
                      _: 1
                      /* STABLE */
                    })) : D(W).type === "confirm" ? (c(), m(
                      X,
                      { key: 1 },
                      [
                        N(Bn, {
                          onClick: n[1] || (n[1] = (s) => {
                            var r;
                            (r = D(W)) == null || r.resolve(!1), D(Ee)();
                          })
                        }, {
                          default: z(() => [
                            Z("No")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        N(Xe, {
                          onClick: n[2] || (n[2] = (s) => {
                            var r;
                            (r = D(W)) == null || r.resolve(!0), D(Ee)();
                          })
                        }, {
                          default: z(() => [
                            Z("Yes")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : A("v-if", !0)
                  ]),
                  default: z(() => {
                    var s, r;
                    return [
                      d(
                        "p",
                        null,
                        Q((r = (s = D(W)) == null ? void 0 : s.data) == null ? void 0 : r.subtitle),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, [
                  D(W).type !== "info" ? {
                    name: "extra",
                    fn: z(() => [
                      N(Oe, { size: "uniform" }, {
                        default: z(() => [
                          N(Go, { class: "h-5 w-5" })
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
            ])) : A("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}, ji = /* @__PURE__ */ $(Zo, [["__file", "/home/harry/Sites/ui/src/components/Dialogs/Dialogs.vue"]]);
function ei() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class ti {
  constructor(t, n = {}) {
    this.component = t, this.data = n;
  }
}
const Ke = le({
  modals: le([]),
  push(e, t = {}) {
    return t.key || (t.key = ei()), this.modals.push(le(new ti(e, t))), document.body.classList.add("overflow-y-hidden"), t.key;
  },
  pop(e = 1) {
    for (let t = 0; t < e; t += 1)
      this.modals.pop();
    this.modals.length === 0 && document.body.classList.remove("overflow-y-hidden");
  },
  clear() {
    this.modals = le([]);
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
}), { push: Pi, pop: Ii, clear: Bi } = Ke, Mi = () => Ke.all, ni = {
  data() {
    return {
      open: !1,
      modals: Ke
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
}, ri = { class: "flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0" }, si = {
  key: "modalBackground",
  class: "fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity",
  "aria-hidden": "true"
}, oi = /* @__PURE__ */ d(
  "span",
  {
    class: "hidden sm:inline-block sm:h-screen sm:align-middle",
    "aria-hidden": "true"
  },
  "​",
  -1
  /* HOISTED */
), ii = { class: "absolute right-0 top-0 hidden pr-4 pt-4 sm:block" }, ai = /* @__PURE__ */ d(
  "span",
  { class: "sr-only" },
  "Close",
  -1
  /* HOISTED */
), li = /* @__PURE__ */ d(
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
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 18L18 6M6 6l12 12"
    })
  ],
  -1
  /* HOISTED */
);
function ui(e, t, n, s, r, o) {
  return c(), m("div", null, [
    d(
      "div",
      {
        class: R(["fixed inset-0 z-50 flex max-w-full justify-center overflow-y-auto", e.$modals.all.length ? "" : "pointer-events-none"]),
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true"
      },
      [
        d("div", ri, [
          N(se, {
            "enter-active-class": "duration-300 ease-out",
            "enter-from-class": "opacity-0",
            "enter-to-class": "opacity-100",
            "leave-active-class": "duration-200 ease-in",
            "leave-from-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: z(() => [
              e.$modals.all.length ? (c(), m("div", si)) : A("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          oi,
          N(Jt, {
            "enter-active-class": "duration-150 ease-out",
            "enter-from-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95",
            "enter-to-class": "translate-y-0 opacity-100 sm:scale-100",
            "leave-active-class": "duration-200 ease-in",
            "leave-from-class": "translate-y-0 opacity-100 sm:scale-100",
            "leave-to-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          }, {
            default: z(() => [
              (c(!0), m(
                X,
                null,
                Ne(e.$modals.all, (i, a) => (c(), m("div", {
                  key: `modal${a}`,
                  class: "relative inline-block rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle"
                }, [
                  d("div", ii, [
                    d("button", {
                      type: "button",
                      class: "rounded-md bg-white text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                      onClick: t[0] || (t[0] = (f) => e.$modals.pop())
                    }, [
                      ai,
                      A(" Heroicon name: outline/x "),
                      li
                    ])
                  ]),
                  (c(), M(G(i.component), {
                    "modal-index": a,
                    data: i.data
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
  ]);
}
const Ri = /* @__PURE__ */ $(ni, [["render", ui], ["__file", "/home/harry/Sites/ui/src/components/Modals/Modals.vue"]]), ci = {
  __name: "Container",
  props: {
    narrow: Boolean
  },
  setup(e) {
    return (t, n) => (c(), m(
      "div",
      {
        class: R(["mx-auto px-4 sm:px-6 lg:px-8", {
          "max-w-7xl": !e.narrow,
          "max-w-4xl": e.narrow
        }])
      },
      [
        y(t.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
}, Fi = /* @__PURE__ */ $(ci, [["__file", "/home/harry/Sites/ui/src/components/Container.vue"]]);
export {
  fi as AlertAction,
  Oe as BaseButton,
  Li as BreadcrumbItem,
  Di as Breadcrumbs,
  Vn as Card,
  Wn as CardTitle,
  Ti as CollapseTransition,
  Fi as Container,
  pi as DangerAlert,
  gi as DangerButton,
  ji as Dialogs,
  bi as Dropdown,
  yi as DropdownLink,
  Ot as FadeScaleTransition,
  Ys as FadeTransition,
  _i as HH1,
  wi as HH2,
  xi as HH3,
  mi as InfoAlert,
  $i as Input,
  ht as InputLayout,
  Ri as Modals,
  Xe as PrimaryButton,
  Bn as SecondaryButton,
  Si as SelectInput,
  ki as Sidebar,
  Oi as SidebarItem,
  Ai as SidebarItemGroup,
  zi as SidebarLayout,
  hi as SuccessAlert,
  vi as WarningAlert,
  Ke as all,
  Mi as allModals,
  Bi as clearModals,
  Ci as confirmDialog,
  te as dialogs,
  Ei as infoDialog,
  Ii as popModal,
  Pi as pushModal,
  Ee as resetDialog
};
