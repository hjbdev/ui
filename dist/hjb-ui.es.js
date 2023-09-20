import { openBlock as c, createBlock as M, resolveDynamicComponent as X, withCtx as z, createTextVNode as ee, createElementVNode as d, createElementBlock as m, normalizeClass as R, renderSlot as y, createCommentVNode as A, onMounted as de, onUnmounted as pt, computed as C, ref as I, withDirectives as Ge, vShow as Xe, createVNode as N, Transition as me, toDisplayString as Z, normalizeProps as mt, guardReactiveProps as vt, mergeProps as Nt, cloneVNode as Vt, h as je, Fragment as Y, inject as Fe, provide as Ne, watchEffect as Oe, defineComponent as se, watch as ve, nextTick as J, toRaw as q, unref as D, renderList as Ve, getCurrentScope as Ht, onScopeDispose as Ut, readonly as qt, shallowRef as Wt, useSlots as Kt, reactive as le, createSlots as Jt, markRaw as Gt } from "vue";
const $ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Xt = /* @__PURE__ */ d(
  "span",
  { "aria-hidden": "true" },
  "→",
  -1
  /* HOISTED */
), Yt = {
  __name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, n) => (c(), M(X(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: z(() => [
        ee("Details "),
        Xt
      ]),
      _: 1
      /* STABLE */
    }));
  }
}, ci = /* @__PURE__ */ $(Yt, [["__file", "/home/harry/Sites/ui/src/components/Alerts/AlertAction.vue"]]), Qt = {}, Zt = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, en = { class: "flex" }, tn = /* @__PURE__ */ d(
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
), nn = { class: "ml-3 flex-1" }, rn = { class: "md:flex md:justify-between" }, on = { class: "text-sm text-red-800 dark:text-red-200" }, sn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function an(e, t) {
  return c(), m("div", Zt, [
    d("div", en, [
      tn,
      d("div", nn, [
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
        d("div", rn, [
          d("p", on, [
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
const di = /* @__PURE__ */ $(Qt, [["render", an], ["__file", "/home/harry/Sites/ui/src/components/Alerts/DangerAlert.vue"]]), ln = {}, un = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, cn = { class: "flex" }, dn = /* @__PURE__ */ d(
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
), fn = { class: "ml-3 flex-1" }, pn = { class: "md:flex md:justify-between" }, mn = { class: "text-sm text-blue-800 dark:text-blue-200" }, vn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function hn(e, t) {
  return c(), m("div", un, [
    d("div", cn, [
      dn,
      d("div", fn, [
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
        d("div", pn, [
          d("p", mn, [
            y(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), m("p", vn, [
            y(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const fi = /* @__PURE__ */ $(ln, [["render", hn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/InfoAlert.vue"]]), gn = {}, bn = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, yn = { class: "flex" }, _n = /* @__PURE__ */ d(
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
), wn = { class: "ml-3 flex-1" }, xn = { class: "md:flex md:justify-between" }, $n = { class: "text-sm text-green-800 dark:text-green-200" }, Sn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function kn(e, t) {
  return c(), m("div", bn, [
    d("div", yn, [
      _n,
      d("div", wn, [
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
        d("div", xn, [
          d("p", $n, [
            y(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), m("p", Sn, [
            y(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const pi = /* @__PURE__ */ $(gn, [["render", kn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/SuccessAlert.vue"]]), On = {}, zn = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, An = { class: "flex" }, Tn = /* @__PURE__ */ d(
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
), Dn = { class: "ml-3 flex-1" }, Ln = { class: "md:flex md:justify-between" }, En = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, Cn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function jn(e, t) {
  return c(), m("div", zn, [
    d("div", An, [
      Tn,
      d("div", Dn, [
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
        d("div", Ln, [
          d("p", En, [
            y(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), m("p", Cn, [
            y(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const mi = /* @__PURE__ */ $(On, [["render", jn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/WarningAlert.vue"]]), Pn = {
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
    return (t, n) => (c(), M(X(e.as), {
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
}, ze = /* @__PURE__ */ $(Pn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/BaseButton.vue"]]), In = {
  __name: "PrimaryButton",
  setup(e) {
    return (t, n) => (c(), M(ze, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Ye = /* @__PURE__ */ $(In, [["__file", "/home/harry/Sites/ui/src/components/Buttons/PrimaryButton.vue"]]), Bn = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, n) => (c(), M(ze, {
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
}, Mn = /* @__PURE__ */ $(Bn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/SecondaryButton.vue"]]), Rn = {
  __name: "DangerButton",
  setup(e) {
    return (t, n) => (c(), M(ze, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, vi = /* @__PURE__ */ $(Rn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/DangerButton.vue"]]), Fn = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, Nn = { key: 0 }, Vn = {
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
        t.$slots.header || t.$slots.extra ? (c(), m("div", Fn, [
          d("div", null, [
            y(t.$slots, "header")
          ]),
          t.$slots.extra ? (c(), m("div", Nn, [
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
}, Hn = /* @__PURE__ */ $(Vn, [["__file", "/home/harry/Sites/ui/src/components/Cards/Card.vue"]]), Un = {}, qn = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function Wn(e, t) {
  return c(), m("h3", qn, [
    y(e.$slots, "default")
  ]);
}
const Kn = /* @__PURE__ */ $(Un, [["render", Wn], ["__file", "/home/harry/Sites/ui/src/components/Cards/CardTitle.vue"]]), Jn = { class: "relative" }, Gn = {
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
      s.value && i.key === "Escape" && (s.value = !1);
    };
    de(() => document.addEventListener("keydown", n)), pt(() => document.removeEventListener("keydown", n));
    const o = C(() => ({
      48: "w-48"
    })[t.width.toString()]), r = C(() => {
      const i = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${i}-left left-0` : t.align === "right" ? `origin-${i}-right right-0` : `origin-${i}`;
    }), s = I(!1);
    return (i, l) => (c(), m("div", Jn, [
      d("div", {
        onClick: l[0] || (l[0] = (p) => s.value = !s.value)
      }, [
        y(i.$slots, "trigger")
      ]),
      A(" Full Screen Dropdown Overlay "),
      Ge(d(
        "div",
        {
          class: "fixed inset-0 z-40",
          onClick: l[1] || (l[1] = (p) => s.value = !1)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [Xe, s.value]
      ]),
      N(me, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        persisted: ""
      }, {
        default: z(() => [
          Ge(d(
            "div",
            {
              class: R(["absolute z-50 mt-2 rounded-md shadow-lg", [o.value, r.value, t.bottom ? "bottom-full" : ""]]),
              style: { display: "none" },
              onClick: l[2] || (l[2] = (p) => s.value = !1)
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
            [Xe, s.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]));
  }
}, hi = /* @__PURE__ */ $(Gn, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/Dropdown.vue"]]), Xn = {
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
    return (t, n) => (c(), M(X(e.as), {
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
}, gi = /* @__PURE__ */ $(Xn, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/DropdownLink.vue"]]), Yn = {}, Qn = { class: "font-semibold text-3xl leading-tight" };
function Zn(e, t) {
  return c(), m("h1", Qn, [
    y(e.$slots, "default")
  ]);
}
const bi = /* @__PURE__ */ $(Yn, [["render", Zn], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH1.vue"]]), er = {}, tr = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function nr(e, t) {
  return c(), m("h2", tr, [
    y(e.$slots, "default")
  ]);
}
const yi = /* @__PURE__ */ $(er, [["render", nr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH2.vue"]]), rr = {}, or = { class: "text-xl tracking-tight dark:text-white" };
function sr(e, t) {
  return c(), m("h2", or, [
    y(e.$slots, "default")
  ]);
}
const _i = /* @__PURE__ */ $(rr, [["render", sr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH3.vue"]]), we = {
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
}, ir = ["for"], ar = { class: "relative mt-1" }, lr = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, ur = /* @__PURE__ */ d(
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
), cr = ["id"], dr = ["id"], fr = {
  __name: "InputLayout",
  props: {
    ...we
  },
  setup(e) {
    return (t, n) => (c(), m("div", null, [
      t.label ? (c(), m("label", {
        key: 0,
        for: t.id,
        class: "block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      }, Z(t.label), 9, ir)) : A("v-if", !0),
      d("div", ar, [
        y(t.$slots, "default"),
        t.error ? (c(), m("div", lr, [
          A(" Heroicon name: solid/exclamation-circle "),
          ur
        ])) : A("v-if", !0)
      ]),
      t.helpText && !t.error ? (c(), m("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, Z(t.helpText), 9, cr)) : t.error ? (c(), m("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, Z(t.error), 9, dr)) : A("v-if", !0)
    ]));
  }
}, ht = /* @__PURE__ */ $(fr, [["__file", "/home/harry/Sites/ui/src/components/Inputs/InputLayout.vue"]]), pr = ["name", "id", "aria-describedby"], mr = {
  inheritAttrs: !1
}, vr = /* @__PURE__ */ Object.assign(mr, {
  __name: "Input",
  props: {
    ...we
  },
  setup(e) {
    return (t, n) => (c(), M(
      ht,
      mt(vt(t.$props)),
      {
        default: z(() => [
          d("input", Nt(t.$attrs, {
            name: t.name,
            id: t.id,
            class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
              "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
            }],
            "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
          }), null, 16, pr)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), wi = /* @__PURE__ */ $(vr, [["__file", "/home/harry/Sites/ui/src/components/Inputs/Input.vue"]]);
function W(e, t, ...n) {
  if (e in t) {
    let r = t[e];
    return typeof r == "function" ? r(...n) : r;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, W), o;
}
var Pe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Pe || {}), hr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(hr || {});
function ie({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...r }) {
  var s;
  let i = bt(o, n), l = Object.assign(r, { props: i });
  if (e || t & 2 && i.static)
    return Te(l);
  if (t & 1) {
    let p = (s = i.unmount) == null || s ? 0 : 1;
    return W(p, { 0() {
      return null;
    }, 1() {
      return Te({ ...r, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Te(l);
}
function Te({ props: e, attrs: t, slots: n, slot: o, name: r }) {
  var s, i;
  let { as: l, ...p } = yt(e, ["unmount", "static"]), a = (s = n.default) == null ? void 0 : s.call(n, o), u = {};
  if (o) {
    let g = !1, b = [];
    for (let [_, O] of Object.entries(o))
      typeof O == "boolean" && (g = !0), O === !0 && b.push(_);
    g && (u["data-headlessui-state"] = b.join(" "));
  }
  if (l === "template") {
    if (a = gt(a ?? []), Object.keys(p).length > 0 || Object.keys(t).length > 0) {
      let [g, ...b] = a ?? [];
      if (!br(g) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(p).concat(Object.keys(t)).map((x) => x.trim()).filter((x, L, w) => w.indexOf(x) === L).sort((x, L) => x.localeCompare(L)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let _ = bt((i = g.props) != null ? i : {}, p), O = Vt(g, _);
      for (let x in _)
        x.startsWith("on") && (O.props || (O.props = {}), O.props[x] = _[x]);
      return O;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return je(l, Object.assign({}, p, u), { default: () => a });
}
function gt(e) {
  return e.flatMap((t) => t.type === Y ? gt(t.children) : [t]);
}
function bt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let o of e)
    for (let r in o)
      r.startsWith("on") && typeof o[r] == "function" ? (n[r] != null || (n[r] = []), n[r].push(o[r])) : t[r] = o[r];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((o) => [o, void 0])));
  for (let o in n)
    Object.assign(t, { [o](r, ...s) {
      let i = n[o];
      for (let l of i) {
        if (r instanceof Event && r.defaultPrevented)
          return;
        l(r, ...s);
      }
    } });
  return t;
}
function gr(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function yt(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t)
    o in n && delete n[o];
  return n;
}
function br(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let yr = 0;
function _r() {
  return ++yr;
}
function Ae() {
  return _r();
}
var F = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});
function wr(e) {
  throw new Error("Unexpected object: " + e);
}
var H = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(H || {});
function xr(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), r = o ?? -1, s = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((l, p, a) => r !== -1 && a.length - p - 1 >= r ? !1 : !t.resolveDisabled(l));
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
        wr(e);
    }
  })();
  return s === -1 ? o : s;
}
function P(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let _t = Symbol("Context");
var fe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(fe || {});
function $r() {
  return Fe(_t, null);
}
function Sr(e) {
  Ne(_t, e);
}
function Qe(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function kr(e, t) {
  let n = I(Qe(e.value.type, e.value.as));
  return de(() => {
    n.value = Qe(e.value.type, e.value.as);
  }), Oe(() => {
    var o;
    n.value || P(t) && P(t) instanceof HTMLButtonElement && !((o = P(t)) != null && o.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var Or = Object.defineProperty, zr = (e, t, n) => t in e ? Or(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ze = (e, t, n) => (zr(e, typeof t != "symbol" ? t + "" : t, n), n);
class Ar {
  constructor() {
    Ze(this, "current", this.detect()), Ze(this, "currentId", 0);
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
let He = new Ar();
function Tr(e) {
  if (He.isServer)
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
let et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Dr = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Dr || {}), Lr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Lr || {}), Er = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Er || {}), Ue = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ue || {});
function wt(e, t = 0) {
  var n;
  return e === ((n = Tr(e)) == null ? void 0 : n.body) ? !1 : W(t, { 0() {
    return e.matches(et);
  }, 1() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(et))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var Cr = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Cr || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function jr(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let r = t(n), s = t(o);
    if (r === null || s === null)
      return 0;
    let i = r.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ge(e, t, n) {
  He.isServer || Oe((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function Pr(e, t, n) {
  He.isServer || Oe((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
function Ir(e, t, n = C(() => !0)) {
  function o(s, i) {
    if (!n.value || s.defaultPrevented)
      return;
    let l = i(s);
    if (l === null || !l.getRootNode().contains(l))
      return;
    let p = function a(u) {
      return typeof u == "function" ? a(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let a of p) {
      if (a === null)
        continue;
      let u = a instanceof HTMLElement ? a : P(a);
      if (u != null && u.contains(l) || s.composed && s.composedPath().includes(u))
        return;
    }
    return !wt(l, Ue.Loose) && l.tabIndex !== -1 && s.preventDefault(), t(s, l);
  }
  let r = I(null);
  ge("pointerdown", (s) => {
    var i, l;
    n.value && (r.value = ((l = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : l[0]) || s.target);
  }, !0), ge("mousedown", (s) => {
    var i, l;
    n.value && (r.value = ((l = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : l[0]) || s.target);
  }, !0), ge("click", (s) => {
    r.value && (o(s, () => r.value), r.value = null);
  }, !0), ge("touchend", (s) => o(s, () => s.target instanceof HTMLElement ? s.target : null), !0), Pr("blur", (s) => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var xt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(xt || {});
let Br = se({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...r } = e, s = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return ie({ ourProps: s, theirProps: r, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function $t(e = {}, t = null, n = []) {
  for (let [o, r] of Object.entries(e))
    kt(n, St(t, o), r);
  return n;
}
function St(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function kt(e, t, n) {
  if (Array.isArray(n))
    for (let [o, r] of n.entries())
      kt(e, St(t, o.toString()), r);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : $t(n, t, e);
}
function Mr(e, t, n) {
  let o = I(n == null ? void 0 : n.value), r = C(() => e.value !== void 0);
  return [C(() => r.value ? e.value : o.value), function(s) {
    return r.value || (o.value = s), t == null ? void 0 : t(s);
  }];
}
function tt(e) {
  return [e.screenX, e.screenY];
}
function Rr() {
  let e = I([-1, -1]);
  return { wasMoved(t) {
    let n = tt(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = tt(t);
  } };
}
let nt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function rt(e) {
  var t, n;
  let o = (t = e.innerText) != null ? t : "", r = e.cloneNode(!0);
  if (!(r instanceof HTMLElement))
    return o;
  let s = !1;
  for (let l of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    l.remove(), s = !0;
  let i = s ? (n = r.innerText) != null ? n : "" : o;
  return nt.test(i) && (i = i.replace(nt, "")), i;
}
function Fr(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let o = n.split(" ").map((r) => {
      let s = document.getElementById(r);
      if (s) {
        let i = s.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : rt(s).trim();
      }
      return null;
    }).filter(Boolean);
    if (o.length > 0)
      return o.join(", ");
  }
  return rt(e).trim();
}
function Nr(e) {
  let t = I(""), n = I("");
  return () => {
    let o = P(e);
    if (!o)
      return "";
    let r = o.innerText;
    if (t.value === r)
      return n.value;
    let s = Fr(o).trim().toLowerCase();
    return t.value = r, n.value = s, s;
  };
}
function Vr(e, t) {
  return e === t;
}
var Hr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Hr || {}), Ur = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Ur || {}), qr = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(qr || {});
function Wr(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Ot = Symbol("ListboxContext");
function he(e) {
  let t = Fe(Ot, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, he), n;
  }
  return t;
}
let Kr = se({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Vr }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: o }) {
  let r = I(1), s = I(null), i = I(null), l = I(null), p = I([]), a = I(""), u = I(null), g = I(1);
  function b(v = (h) => h) {
    let h = u.value !== null ? p.value[u.value] : null, S = jr(v(p.value.slice()), (E) => P(E.dataRef.domRef)), k = h ? S.indexOf(h) : null;
    return k === -1 && (k = null), { options: S, activeOptionIndex: k };
  }
  let _ = C(() => e.multiple ? 1 : 0), [O, x] = Mr(C(() => e.modelValue), (v) => o("update:modelValue", v), C(() => e.defaultValue)), L = C(() => O.value === void 0 ? W(_.value, { 1: [], 0: void 0 }) : O.value), w = { listboxState: r, value: L, mode: _, compare(v, h) {
    if (typeof e.by == "string") {
      let S = e.by;
      return (v == null ? void 0 : v[S]) === (h == null ? void 0 : h[S]);
    }
    return e.by(v, h);
  }, orientation: C(() => e.horizontal ? "horizontal" : "vertical"), labelRef: s, buttonRef: i, optionsRef: l, disabled: C(() => e.disabled), options: p, searchQuery: a, activeOptionIndex: u, activationTrigger: g, closeListbox() {
    e.disabled || r.value !== 1 && (r.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || r.value !== 0 && (r.value = 0);
  }, goToOption(v, h, S) {
    if (e.disabled || r.value === 1)
      return;
    let k = b(), E = xr(v === H.Specific ? { focus: H.Specific, id: h } : { focus: v }, { resolveItems: () => k.options, resolveActiveIndex: () => k.activeOptionIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.disabled });
    a.value = "", u.value = E, g.value = S ?? 1, p.value = k.options;
  }, search(v) {
    if (e.disabled || r.value === 1)
      return;
    let h = a.value !== "" ? 0 : 1;
    a.value += v.toLowerCase();
    let S = (u.value !== null ? p.value.slice(u.value + h).concat(p.value.slice(0, u.value + h)) : p.value).find((E) => E.dataRef.textValue.startsWith(a.value) && !E.dataRef.disabled), k = S ? p.value.indexOf(S) : -1;
    k === -1 || k === u.value || (u.value = k, g.value = 1);
  }, clearSearch() {
    e.disabled || r.value !== 1 && a.value !== "" && (a.value = "");
  }, registerOption(v, h) {
    let S = b((k) => [...k, { id: v, dataRef: h }]);
    p.value = S.options, u.value = S.activeOptionIndex;
  }, unregisterOption(v) {
    let h = b((S) => {
      let k = S.findIndex((E) => E.id === v);
      return k !== -1 && S.splice(k, 1), S;
    });
    p.value = h.options, u.value = h.activeOptionIndex, g.value = 1;
  }, theirOnChange(v) {
    e.disabled || x(v);
  }, select(v) {
    e.disabled || x(W(_.value, { 0: () => v, 1: () => {
      let h = q(w.value.value).slice(), S = q(v), k = h.findIndex((E) => w.compare(S, q(E)));
      return k === -1 ? h.push(S) : h.splice(k, 1), h;
    } }));
  } };
  Ir([i, l], (v, h) => {
    var S;
    w.closeListbox(), wt(h, Ue.Loose) || (v.preventDefault(), (S = P(i)) == null || S.focus());
  }, C(() => r.value === 0)), Ne(Ot, w), Sr(C(() => W(r.value, { 0: fe.Open, 1: fe.Closed })));
  let j = C(() => {
    var v;
    return (v = P(i)) == null ? void 0 : v.closest("form");
  });
  return de(() => {
    ve([j], () => {
      if (!j.value || e.defaultValue === void 0)
        return;
      function v() {
        w.theirOnChange(e.defaultValue);
      }
      return j.value.addEventListener("reset", v), () => {
        var h;
        (h = j.value) == null || h.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: v, modelValue: h, disabled: S, form: k, ...E } = e, f = { open: r.value === 0, disabled: S, value: L.value };
    return je(Y, [...v != null && L.value != null ? $t({ [v]: L.value }).map(([B, T]) => je(Br, gr({ features: xt.Hidden, key: B, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: k, name: B, value: T }))) : [], ie({ ourProps: {}, theirProps: { ...n, ...yt(E, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: f, slots: t, attrs: n, name: "Listbox" })]);
  };
} });
se({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${Ae()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = he("ListboxLabel");
  function r() {
    var s;
    (s = P(o.buttonRef)) == null || s.focus({ preventScroll: !0 });
  }
  return () => {
    let s = { open: o.listboxState.value === 0, disabled: o.disabled.value }, { id: i, ...l } = e, p = { id: i, ref: o.labelRef, onClick: r };
    return ie({ ourProps: p, theirProps: l, slot: s, attrs: t, slots: n, name: "ListboxLabel" });
  };
} });
let Jr = se({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${Ae()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = he("ListboxButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function s(a) {
    switch (a.key) {
      case F.Space:
      case F.Enter:
      case F.ArrowDown:
        a.preventDefault(), r.openListbox(), J(() => {
          var u;
          (u = P(r.optionsRef)) == null || u.focus({ preventScroll: !0 }), r.value.value || r.goToOption(H.First);
        });
        break;
      case F.ArrowUp:
        a.preventDefault(), r.openListbox(), J(() => {
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
    r.disabled.value || (r.listboxState.value === 0 ? (r.closeListbox(), J(() => {
      var u;
      return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (a.preventDefault(), r.openListbox(), Wr(() => {
      var u;
      return (u = P(r.optionsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let p = kr(C(() => ({ as: e.as, type: t.type })), r.buttonRef);
  return () => {
    var a, u;
    let g = { open: r.listboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: b, ..._ } = e, O = { ref: r.buttonRef, id: b, type: p.value, "aria-haspopup": "listbox", "aria-controls": (a = P(r.optionsRef)) == null ? void 0 : a.id, "aria-expanded": r.listboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(u = P(r.labelRef)) == null ? void 0 : u.id, b].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: s, onKeyup: i, onClick: l };
    return ie({ ourProps: O, theirProps: _, slot: g, attrs: t, slots: n, name: "ListboxButton" });
  };
} }), Gr = se({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${Ae()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let r = he("ListboxOptions"), s = I(null);
  o({ el: r.optionsRef, $el: r.optionsRef });
  function i(a) {
    switch (s.value && clearTimeout(s.value), a.key) {
      case F.Space:
        if (r.searchQuery.value !== "")
          return a.preventDefault(), a.stopPropagation(), r.search(a.key);
      case F.Enter:
        if (a.preventDefault(), a.stopPropagation(), r.activeOptionIndex.value !== null) {
          let u = r.options.value[r.activeOptionIndex.value];
          r.select(u.dataRef.value);
        }
        r.mode.value === 0 && (r.closeListbox(), J(() => {
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
        a.preventDefault(), a.stopPropagation(), r.closeListbox(), J(() => {
          var u;
          return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        break;
      case F.Tab:
        a.preventDefault(), a.stopPropagation();
        break;
      default:
        a.key.length === 1 && (r.search(a.key), s.value = setTimeout(() => r.clearSearch(), 350));
        break;
    }
  }
  let l = $r(), p = C(() => l !== null ? (l.value & fe.Open) === fe.Open : r.listboxState.value === 0);
  return () => {
    var a, u, g, b;
    let _ = { open: r.listboxState.value === 0 }, { id: O, ...x } = e, L = { "aria-activedescendant": r.activeOptionIndex.value === null || (a = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : a.id, "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, "aria-labelledby": (b = (u = P(r.labelRef)) == null ? void 0 : u.id) != null ? b : (g = P(r.buttonRef)) == null ? void 0 : g.id, "aria-orientation": r.orientation.value, id: O, onKeydown: i, role: "listbox", tabIndex: 0, ref: r.optionsRef };
    return ie({ ourProps: L, theirProps: x, slot: _, attrs: t, slots: n, features: Pe.RenderStrategy | Pe.Static, visible: p.value, name: "ListboxOptions" });
  };
} }), Xr = se({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${Ae()}` } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let r = he("ListboxOption"), s = I(null);
  o({ el: s, $el: s });
  let i = C(() => r.activeOptionIndex.value !== null ? r.options.value[r.activeOptionIndex.value].id === e.id : !1), l = C(() => W(r.mode.value, { 0: () => r.compare(q(r.value.value), q(e.value)), 1: () => q(r.value.value).some((w) => r.compare(q(w), q(e.value))) })), p = C(() => W(r.mode.value, { 1: () => {
    var w;
    let j = q(r.value.value);
    return ((w = r.options.value.find((v) => j.some((h) => r.compare(q(h), q(v.dataRef.value))))) == null ? void 0 : w.id) === e.id;
  }, 0: () => l.value })), a = Nr(s), u = C(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return a();
  }, domRef: s }));
  de(() => r.registerOption(e.id, u)), pt(() => r.unregisterOption(e.id)), de(() => {
    ve([r.listboxState, l], () => {
      r.listboxState.value === 0 && l.value && W(r.mode.value, { 1: () => {
        p.value && r.goToOption(H.Specific, e.id);
      }, 0: () => {
        r.goToOption(H.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), Oe(() => {
    r.listboxState.value === 0 && i.value && r.activationTrigger.value !== 0 && J(() => {
      var w, j;
      return (j = (w = P(s)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : j.call(w, { block: "nearest" });
    });
  });
  function g(w) {
    if (e.disabled)
      return w.preventDefault();
    r.select(e.value), r.mode.value === 0 && (r.closeListbox(), J(() => {
      var j;
      return (j = P(r.buttonRef)) == null ? void 0 : j.focus({ preventScroll: !0 });
    }));
  }
  function b() {
    if (e.disabled)
      return r.goToOption(H.Nothing);
    r.goToOption(H.Specific, e.id);
  }
  let _ = Rr();
  function O(w) {
    _.update(w);
  }
  function x(w) {
    _.wasMoved(w) && (e.disabled || i.value || r.goToOption(H.Specific, e.id, 0));
  }
  function L(w) {
    _.wasMoved(w) && (e.disabled || i.value && r.goToOption(H.Nothing));
  }
  return () => {
    let { disabled: w } = e, j = { active: i.value, selected: l.value, disabled: w }, { id: v, value: h, disabled: S, ...k } = e, E = { id: v, ref: s, role: "option", tabIndex: w === !0 ? void 0 : -1, "aria-disabled": w === !0 ? !0 : void 0, "aria-selected": l.value, disabled: void 0, onClick: g, onFocus: b, onPointerenter: O, onMouseenter: O, onPointermove: x, onMousemove: x, onPointerleave: L, onMouseleave: L };
    return ie({ ourProps: E, theirProps: k, slot: j, attrs: n, slots: t, name: "ListboxOption" });
  };
} });
const Yr = {}, Qr = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Zr = /* @__PURE__ */ d(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 12.75l6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), eo = [
  Zr
];
function to(e, t) {
  return c(), m("svg", Qr, eo);
}
const no = /* @__PURE__ */ $(Yr, [["render", to], ["__file", "/home/harry/Sites/ui/src/components/Icons/CheckIcon.vue"]]), ro = {};
function oo(e, t) {
  return c(), M(me, {
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
const qe = /* @__PURE__ */ $(ro, [["render", oo], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeScaleTransition.vue"]]), so = {}, io = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, ao = /* @__PURE__ */ d(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), lo = [
  ao
];
function uo(e, t) {
  return c(), m("svg", io, lo);
}
const co = /* @__PURE__ */ $(so, [["render", uo], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronDownIcon.vue"]]), fo = { class: "text-sm" }, po = {
  inheritAttrs: !1
}, mo = /* @__PURE__ */ Object.assign(po, {
  __name: "SelectInput",
  props: {
    ...we,
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
      mt(vt(
        Object.keys(D(we)).reduce((o, r) => (o[r] = t.$props[r], o), {})
      )),
      {
        default: z(() => [
          N(D(Kr), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": n[0] || (n[0] = (o) => t.$emit("update:modelValue", o))
          }, {
            default: z(() => [
              N(D(Jr), {
                class: R({
                  "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                  "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
                })
              }, {
                default: z(() => {
                  var o, r;
                  return [
                    d(
                      "div",
                      fo,
                      Z(Array.isArray(e.modelValue) ? (o = e.modelValue) == null ? void 0 : o.map((s) => s.name).join(", ") : ((r = e.modelValue) == null ? void 0 : r.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    N(co, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class"]),
              N(qe, null, {
                default: z(() => [
                  N(D(Gr), {
                    class: R(["min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                      "right-0": e.align === "right",
                      "left-0": e.align === "left"
                    }])
                  }, {
                    default: z(() => [
                      y(t.$slots, "listbox-title"),
                      (c(!0), m(
                        Y,
                        null,
                        Ve(e.options, (o) => (c(), M(D(Xr), {
                          key: o.id,
                          value: o,
                          as: "template"
                        }, {
                          default: z(({ active: r, selected: s }) => [
                            d(
                              "li",
                              {
                                class: R(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                                  "bg-zinc-50 dark:bg-zinc-900": s,
                                  "bg-zinc-100 dark:bg-zinc-700": r
                                }])
                              },
                              [
                                ee(
                                  Z(o.name) + " ",
                                  1
                                  /* TEXT */
                                ),
                                s ? (c(), M(no, {
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
}), xi = /* @__PURE__ */ $(mo, [["__file", "/home/harry/Sites/ui/src/components/Inputs/SelectInput.vue"]]);
function vo(e) {
  return Ht() ? (Ut(e), !0) : !1;
}
function We(e) {
  return typeof e == "function" ? e() : D(e);
}
const ho = typeof window < "u" && typeof document < "u", go = Object.prototype.toString, bo = (e) => go.call(e) === "[object Object]", yo = () => {
};
function _o(e, t) {
  function n(...o) {
    return new Promise((r, s) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(s);
    });
  }
  return n;
}
const zt = (e) => e();
function wo(e = zt) {
  const t = I(!0);
  function n() {
    t.value = !1;
  }
  function o() {
    t.value = !0;
  }
  const r = (...s) => {
    t.value && e(...s);
  };
  return { isActive: qt(t), pause: n, resume: o, eventFilter: r };
}
function xo(e, t, n = {}) {
  const {
    eventFilter: o = zt,
    ...r
  } = n;
  return ve(
    e,
    _o(
      o,
      t
    ),
    r
  );
}
function $o(e, t, n = {}) {
  const {
    eventFilter: o,
    ...r
  } = n, { eventFilter: s, pause: i, resume: l, isActive: p } = wo(o);
  return { stop: xo(
    e,
    t,
    {
      ...r,
      eventFilter: s
    }
  ), pause: i, resume: l, isActive: p };
}
function So(e) {
  var t;
  const n = We(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const xe = ho ? window : void 0;
function ot(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = xe) : [t, n, o, r] = e, !t)
    return yo;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], i = () => {
    s.forEach((u) => u()), s.length = 0;
  }, l = (u, g, b, _) => (u.addEventListener(g, b, _), () => u.removeEventListener(g, b, _)), p = ve(
    () => [So(t), We(r)],
    ([u, g]) => {
      if (i(), !u)
        return;
      const b = bo(g) ? { ...g } : g;
      s.push(
        ...n.flatMap((_) => o.map((O) => l(u, _, O, b)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    p(), i();
  };
  return vo(a), a;
}
const be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ye = "__vueuse_ssr_handlers__", ko = /* @__PURE__ */ Oo();
function Oo() {
  return ye in be || (be[ye] = be[ye] || {}), be[ye];
}
function zo(e, t) {
  return ko[e] || t;
}
function Ao(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const To = {
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
function Do(e, t, n, o = {}) {
  var r;
  const {
    flush: s = "pre",
    deep: i = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: p = !0,
    mergeDefaults: a = !1,
    shallow: u,
    window: g = xe,
    eventFilter: b,
    onError: _ = (f) => {
      console.error(f);
    }
  } = o, O = (u ? Wt : I)(t);
  if (!n)
    try {
      n = zo("getDefaultStorage", () => {
        var f;
        return (f = xe) == null ? void 0 : f.localStorage;
      })();
    } catch (f) {
      _(f);
    }
  if (!n)
    return O;
  const x = We(t), L = Ao(x), w = (r = o.serializer) != null ? r : To[L], { pause: j, resume: v } = $o(
    O,
    () => h(O.value),
    { flush: s, deep: i, eventFilter: b }
  );
  return g && l && (ot(g, "storage", E), ot(g, st, k)), E(), O;
  function h(f) {
    try {
      if (f == null)
        n.removeItem(e);
      else {
        const B = w.write(f), T = n.getItem(e);
        T !== B && (n.setItem(e, B), g && g.dispatchEvent(new CustomEvent(st, {
          detail: {
            key: e,
            oldValue: T,
            newValue: B,
            storageArea: n
          }
        })));
      }
    } catch (B) {
      _(B);
    }
  }
  function S(f) {
    const B = f ? f.newValue : n.getItem(e);
    if (B == null)
      return p && x !== null && n.setItem(e, w.write(x)), x;
    if (!f && a) {
      const T = w.read(B);
      return typeof a == "function" ? a(T, x) : L === "object" && !Array.isArray(T) ? { ...x, ...T } : T;
    } else
      return typeof B != "string" ? B : w.read(B);
  }
  function k(f) {
    E(f.detail);
  }
  function E(f) {
    if (!(f && f.storageArea !== n)) {
      if (f && f.key == null) {
        O.value = x;
        return;
      }
      if (!(f && f.key !== e)) {
        j();
        try {
          (f == null ? void 0 : f.newValue) !== w.write(O.value) && (O.value = S(f));
        } catch (B) {
          _(B);
        } finally {
          f ? J(v) : v();
        }
      }
    }
  }
}
function Lo(e, t, n = {}) {
  const { window: o = xe } = n;
  return Do(e, t, o == null ? void 0 : o.localStorage, n);
}
const Eo = {}, Co = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, jo = /* @__PURE__ */ d(
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
), Po = [
  jo
];
function Io(e, t) {
  return c(), m("svg", Co, Po);
}
const Bo = /* @__PURE__ */ $(Eo, [["render", Io], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronRightIcon.vue"]]), Mo = { class: "flex flex-col gap-6 py-6" }, Ro = { class: "flex flex-col gap-6 mb-6" }, Fo = {
  __name: "Sidebar",
  setup(e) {
    const t = Lo("ui/sidebar", !1);
    return Ne("sidebarMinimised", t), (n, o) => (c(), m(
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
          onClick: o[0] || (o[0] = (r) => t.value = !D(t))
        }, [
          N(Bo, {
            class: R(["w-5 h-5", {
              "transform rotate-180": !D(t)
            }])
          }, null, 8, ["class"])
        ]),
        A(" Primary Navigation Menu "),
        d("div", Mo, [
          A(" Logo "),
          y(n.$slots, "default")
        ]),
        d("div", Ro, [
          y(n.$slots, "bottom")
        ])
      ],
      2
      /* CLASS */
    ));
  }
}, $i = /* @__PURE__ */ $(Fo, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/Sidebar.vue"]]), No = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3"
}, Vo = {
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
    const t = e, n = Fe("sidebarMinimised"), o = C(() => {
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
    return (r, s) => (c(), M(X(e.as), {
      class: R(o.value)
    }, {
      default: z(() => [
        e.icon ? (c(), M(X(e.icon), {
          key: 0,
          class: R(["w-6 h-6 transition-all", {
            " mr-4": !D(n)
          }])
        }, null, 8, ["class"])) : A("v-if", !0),
        N(me, {
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
        D(n) ? (c(), m("div", No, [
          y(r.$slots, "default")
        ])) : A("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, Si = /* @__PURE__ */ $(Vo, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItem.vue"]]), Ho = {}, Uo = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, qo = { class: "flex w-full h-full max-h-screen z-10 relative" }, Wo = { class: "flex-grow overflow-y-auto pb-12" };
function Ko(e, t) {
  return c(), m("div", Uo, [
    y(e.$slots, "top"),
    d("div", qo, [
      y(e.$slots, "sidebar"),
      d("section", Wo, [
        y(e.$slots, "default")
      ])
    ])
  ]);
}
const ki = /* @__PURE__ */ $(Ho, [["render", Ko], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarLayout.vue"]]), Jo = {}, Go = { class: "flex flex-col gap-2 px-2" };
function Xo(e, t) {
  return c(), m("div", Go, [
    y(e.$slots, "default")
  ]);
}
const Oi = /* @__PURE__ */ $(Jo, [["render", Xo], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItemGroup.vue"]]), Yo = {};
function Qo(e, t) {
  return c(), M(me, {
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
const At = /* @__PURE__ */ $(Yo, [["render", Qo], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeTransition.vue"]]);
function Zo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
const Tt = (e, t, n) => Math.min(Math.max(n, e), t), U = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
}, $e = (e) => typeof e == "number", re = (e) => Array.isArray(e) && !$e(e[0]), es = (e, t, n) => {
  const o = t - e;
  return ((n - e) % o + o) % o + e;
};
function ts(e, t) {
  return re(e) ? e[es(0, e.length, t)] : e;
}
const Dt = (e, t, n) => -n * e + n * t + e, Lt = () => {
}, G = (e) => e, Ke = (e, t, n) => t - e === 0 ? 1 : (n - e) / (t - e);
function Et(e, t) {
  const n = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const r = Ke(0, t, o);
    e.push(Dt(n, 1, r));
  }
}
function ns(e) {
  const t = [0];
  return Et(t, e - 1), t;
}
function rs(e, t = ns(e.length), n = G) {
  const o = e.length, r = o - t.length;
  return r > 0 && Et(t, r), (s) => {
    let i = 0;
    for (; i < o - 2 && !(s < t[i + 1]); i++)
      ;
    let l = Tt(0, 1, Ke(t[i], t[i + 1], s));
    return l = ts(n, i)(l), Dt(e[i], e[i + 1], l);
  };
}
const Ct = (e) => Array.isArray(e) && $e(e[0]), Ie = (e) => typeof e == "object" && !!e.createAnimation, oe = (e) => typeof e == "function", os = (e) => typeof e == "string", ce = {
  ms: (e) => e * 1e3,
  s: (e) => e / 1e3
}, jt = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ss = 1e-7, is = 12;
function as(e, t, n, o, r) {
  let s, i, l = 0;
  do
    i = t + (n - t) / 2, s = jt(i, o, r) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > ss && ++l < is);
  return i;
}
function ue(e, t, n, o) {
  if (e === t && n === o)
    return G;
  const r = (s) => as(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : jt(r(s), t, o);
}
const ls = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  const o = n * e, r = t === "end" ? Math.floor(o) : Math.ceil(o);
  return Tt(0, 1, r / e);
}, it = {
  ease: ue(0.25, 0.1, 0.25, 1),
  "ease-in": ue(0.42, 0, 1, 1),
  "ease-in-out": ue(0.42, 0, 0.58, 1),
  "ease-out": ue(0, 0, 0.58, 1)
}, us = /\((.*?)\)/;
function at(e) {
  if (oe(e))
    return e;
  if (Ct(e))
    return ue(...e);
  if (it[e])
    return it[e];
  if (e.startsWith("steps")) {
    const t = us.exec(e);
    if (t) {
      const n = t[1].split(",");
      return ls(parseFloat(n[0]), n[1].trim());
    }
  }
  return G;
}
class Pt {
  constructor(t, n = [0, 1], { easing: o, duration: r = U.duration, delay: s = U.delay, endDelay: i = U.endDelay, repeat: l = U.repeat, offset: p, direction: a = "normal" } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = G, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((g, b) => {
      this.resolve = g, this.reject = b;
    }), o = o || U.easing, Ie(o)) {
      const g = o.createAnimation(n);
      o = g.easing, n = g.keyframes || n, r = g.duration || r;
    }
    this.repeat = l, this.easing = re(o) ? G : at(o), this.updateDuration(r);
    const u = rs(n, p, re(o) ? o.map(at) : G);
    this.tick = (g) => {
      var b;
      s = s;
      let _ = 0;
      this.pauseTime !== void 0 ? _ = this.pauseTime : _ = (g - this.startTime) * this.rate, this.t = _, _ /= 1e3, _ = Math.max(_ - s, 0), this.playState === "finished" && this.pauseTime === void 0 && (_ = this.totalDuration);
      const O = _ / this.duration;
      let x = Math.floor(O), L = O % 1;
      !L && O >= 1 && (L = 1), L === 1 && x--;
      const w = x % 2;
      (a === "reverse" || a === "alternate" && w || a === "alternate-reverse" && !w) && (L = 1 - L);
      const j = _ >= this.totalDuration ? 1 : Math.min(L, 1), v = u(this.easing(j));
      t(v), this.pauseTime === void 0 && (this.playState === "finished" || _ >= this.totalDuration + i) ? (this.playState = "finished", (b = this.resolve) === null || b === void 0 || b.call(this, v)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
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
var Be = function() {
};
process.env.NODE_ENV !== "production" && (Be = function(e, t) {
  if (!e)
    throw new Error(t);
});
class cs {
  setAnimation(t) {
    this.animation = t, t == null || t.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const De = /* @__PURE__ */ new WeakMap();
function It(e) {
  return De.has(e) || De.set(e, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), De.get(e);
}
function ds(e, t) {
  return e.has(t) || e.set(t, new cs()), e.get(t);
}
const fs = ["", "X", "Y", "Z"], ps = ["translate", "scale", "rotate", "skew"], Se = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
}, lt = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (e) => e + "deg"
}, ms = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (e) => e + "px"
  },
  rotate: lt,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: G
  },
  skew: lt
}, pe = /* @__PURE__ */ new Map(), Je = (e) => `--motion-${e}`, ke = ["x", "y", "z"];
ps.forEach((e) => {
  fs.forEach((t) => {
    ke.push(e + t), pe.set(Je(e + t), ms[e]);
  });
});
const vs = (e, t) => ke.indexOf(e) - ke.indexOf(t), hs = new Set(ke), Bt = (e) => hs.has(e), gs = (e, t) => {
  Se[t] && (t = Se[t]);
  const { transforms: n } = It(e);
  Zo(n, t), e.style.transform = bs(n);
}, bs = (e) => e.sort(vs).reduce(ys, "").trim(), ys = (e, t) => `${e} ${t}(var(${Je(t)}))`, Me = (e) => e.startsWith("--"), ut = /* @__PURE__ */ new Set();
function _s(e) {
  if (!ut.has(e)) {
    ut.add(e);
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
const Le = (e, t) => document.createElement("div").animate(e, t), ct = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      Le({ opacity: [1] });
    } catch {
      return !1;
    }
    return !0;
  },
  finished: () => !!Le({ opacity: [0, 1] }, { duration: 1e-3 }).finished,
  linearEasing: () => {
    try {
      Le({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }
}, Ee = {}, te = {};
for (const e in ct)
  te[e] = () => (Ee[e] === void 0 && (Ee[e] = ct[e]()), Ee[e]);
const ws = 0.015, xs = (e, t) => {
  let n = "";
  const o = Math.round(t / ws);
  for (let r = 0; r < o; r++)
    n += e(Ke(0, o - 1, r)) + ", ";
  return n.substring(0, n.length - 2);
}, dt = (e, t) => oe(e) ? te.linearEasing() ? `linear(${xs(e, t)})` : U.easing : Ct(e) ? $s(e) : e, $s = ([e, t, n, o]) => `cubic-bezier(${e}, ${t}, ${n}, ${o})`;
function Ss(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] === null && (e[n] = n ? e[n - 1] : t());
  return e;
}
const ks = (e) => Array.isArray(e) ? e : [e];
function Re(e) {
  return Se[e] && (e = Se[e]), Bt(e) ? Je(e) : e;
}
const _e = {
  get: (e, t) => {
    t = Re(t);
    let n = Me(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!n && n !== 0) {
      const o = pe.get(t);
      o && (n = o.initialValue);
    }
    return n;
  },
  set: (e, t, n) => {
    t = Re(t), Me(t) ? e.style.setProperty(t, n) : e.style[t] = n;
  }
};
function Mt(e, t = !0) {
  if (!(!e || e.playState === "finished"))
    try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {
    }
}
function Os(e, t) {
  var n;
  let o = (t == null ? void 0 : t.toDefaultUnit) || G;
  const r = e[e.length - 1];
  if (os(r)) {
    const s = ((n = r.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || "";
    s && (o = (i) => i + s);
  }
  return o;
}
function zs() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function As(e, t, n, o = {}, r) {
  const s = zs(), i = o.record !== !1 && s;
  let l, { duration: p = U.duration, delay: a = U.delay, endDelay: u = U.endDelay, repeat: g = U.repeat, easing: b = U.easing, persist: _ = !1, direction: O, offset: x, allowWebkitAcceleration: L = !1 } = o;
  const w = It(e), j = Bt(t);
  let v = te.waapi();
  j && gs(e, t);
  const h = Re(t), S = ds(w.values, h), k = pe.get(h);
  return Mt(S.animation, !(Ie(b) && S.generator) && o.record !== !1), () => {
    const E = () => {
      var T, ae;
      return (ae = (T = _e.get(e, h)) !== null && T !== void 0 ? T : k == null ? void 0 : k.initialValue) !== null && ae !== void 0 ? ae : 0;
    };
    let f = Ss(ks(n), E);
    const B = Os(f, k);
    if (Ie(b)) {
      const T = b.createAnimation(f, t !== "opacity", E, h, S);
      b = T.easing, f = T.keyframes || f, p = T.duration || p;
    }
    if (Me(h) && (te.cssRegisterProperty() ? _s(h) : v = !1), j && !te.linearEasing() && (oe(b) || re(b) && b.some(oe)) && (v = !1), v) {
      k && (f = f.map((Q) => $e(Q) ? k.toDefaultUnit(Q) : Q)), f.length === 1 && (!te.partialKeyframes() || i) && f.unshift(E());
      const T = {
        delay: ce.ms(a),
        duration: ce.ms(p),
        endDelay: ce.ms(u),
        easing: re(b) ? void 0 : dt(b, p),
        direction: O,
        iterations: g + 1,
        fill: "both"
      };
      l = e.animate({
        [h]: f,
        offset: x,
        easing: re(b) ? b.map((Q) => dt(Q, p)) : void 0
      }, T), l.finished || (l.finished = new Promise((Q, Ft) => {
        l.onfinish = Q, l.oncancel = Ft;
      }));
      const ae = f[f.length - 1];
      l.finished.then(() => {
        _ || (_e.set(e, h, ae), l.cancel());
      }).catch(Lt), L || (l.playbackRate = 1.000001);
    } else if (r && j)
      f = f.map((T) => typeof T == "string" ? parseFloat(T) : T), f.length === 1 && f.unshift(parseFloat(E())), l = new r((T) => {
        _e.set(e, h, B ? B(T) : T);
      }, f, Object.assign(Object.assign({}, o), {
        duration: p,
        easing: b
      }));
    else {
      const T = f[f.length - 1];
      _e.set(e, h, k && $e(T) ? k.toDefaultUnit(T) : T);
    }
    return i && s(e, t, f, {
      duration: p,
      delay: a,
      easing: b,
      repeat: g,
      offset: x
    }, "motion-one"), S.setAnimation(l), l;
  };
}
const Ts = (e, t) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e)
);
function Ds(e, t) {
  var n;
  return typeof e == "string" ? t ? ((n = t[e]) !== null && n !== void 0 || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || []);
}
const Ls = (e) => e(), Rt = (e, t, n = U.duration) => new Proxy({
  animations: e.map(Ls).filter(Boolean),
  duration: n,
  options: t
}, Cs), Es = (e) => e.animations[0], Cs = {
  get: (e, t) => {
    const n = Es(e);
    switch (t) {
      case "duration":
        return e.duration;
      case "currentTime":
        return ce.s((n == null ? void 0 : n[t]) || 0);
      case "playbackRate":
      case "playState":
        return n == null ? void 0 : n[t];
      case "finished":
        return e.finished || (e.finished = Promise.all(e.animations.map(js)).catch(Lt)), e.finished;
      case "stop":
        return () => {
          e.animations.forEach((o) => Mt(o));
        };
      case "forEachNative":
        return (o) => {
          e.animations.forEach((r) => o(r, e));
        };
      default:
        return typeof (n == null ? void 0 : n[t]) > "u" ? void 0 : () => e.animations.forEach((o) => o[t]());
    }
  },
  set: (e, t, n) => {
    switch (t) {
      case "currentTime":
        n = ce.ms(n);
      case "currentTime":
      case "playbackRate":
        for (let o = 0; o < e.animations.length; o++)
          e.animations[o][t] = n;
        return !0;
    }
    return !1;
  }
}, js = (e) => e.finished;
function Ps(e, t, n) {
  return oe(e) ? e(t, n) : e;
}
function Is(e) {
  return function(n, o, r = {}) {
    n = Ds(n);
    const s = n.length;
    Be(!!s, "No valid element provided."), Be(!!o, "No keyframes defined.");
    const i = [];
    for (let l = 0; l < s; l++) {
      const p = n[l];
      for (const a in o) {
        const u = Ts(r, a);
        u.delay = Ps(u.delay, l, s);
        const g = As(p, a, o[a], u, e);
        i.push(g);
      }
    }
    return Rt(
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
const Bs = Is(Pt);
function Ms(e, t = {}) {
  return Rt([
    () => {
      const n = new Pt(e, [0, 1], t);
      return n.finished.catch(() => {
      }), n;
    }
  ], t, t.duration);
}
function ft(e, t, n) {
  return (oe(e) ? Ms : Bs)(e, t, n);
}
const Rs = {
  __name: "CollapseTransition",
  setup(e) {
    function t(o, r) {
      const { height: s } = o.getBoundingClientRect();
      o.style.height = "0px", ft(o, { height: `${s}px` }, { duration: 0.3 }).finished.then(
        r
      );
    }
    function n(o, r) {
      ft(o, { height: "0px" }, { duration: 0.2 }).finished.then(r);
    }
    return (o, r) => (c(), M(me, {
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
        y(o.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, zi = /* @__PURE__ */ $(Rs, [["__file", "/home/harry/Sites/ui/src/components/Transitions/CollapseTransition.vue"]]), Fs = { class: "flex gap-2 items-center" }, Ns = {
  key: 0,
  class: "text-zinc-400 select-none"
}, Vs = {
  __name: "Breadcrumbs",
  setup(e) {
    const t = C(() => Kt().default());
    return (n, o) => (c(), m("div", Fs, [
      (c(!0), m(
        Y,
        null,
        Ve(t.value, (r, s) => (c(), m(
          Y,
          null,
          [
            (c(), M(X(r), {
              class: R({
                "dark:text-zinc-200 text-zinc-700": s === t.value.length - 1
              })
            }, null, 8, ["class"])),
            s < t.value.length - 1 ? (c(), m("div", Ns, "/")) : A("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]));
  }
}, Ai = /* @__PURE__ */ $(Vs, [["__file", "/home/harry/Sites/ui/src/components/Breadcrumbs/Breadcrumbs.vue"]]), Hs = {
  __name: "BreadcrumbItem",
  props: {
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e) {
    return (t, n) => (c(), M(X(e.as), { class: "rounded-full px-1.5 transition hover:bg-zinc-900/10 hover:dark:bg-white/10 cursor-pointer text-sm text-zinc-400" }, {
      default: z(() => [
        y(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Ti = /* @__PURE__ */ $(Hs, [["__file", "/home/harry/Sites/ui/src/components/Breadcrumbs/BreadcrumbItem.vue"]]), Us = {}, qs = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, Ws = /* @__PURE__ */ d(
  "path",
  {
    d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Ks = [
  Ws
];
function Js(e, t) {
  return c(), m("svg", qs, Ks);
}
const Gs = /* @__PURE__ */ $(Us, [["render", Js], ["__file", "/home/harry/Sites/ui/src/components/Icons/CloseIcon.vue"]]);
class Xs {
  constructor(t, n = {}, o = () => {
  }) {
    this.type = t, this.data = n, this.resolve = o;
  }
}
const ne = le({
  dialog: null,
  info(e, t) {
    return ne.create("info", { title: e, subtitle: t });
  },
  confirm(e, t) {
    return ne.create("confirm", { title: e, subtitle: t });
  },
  reset() {
    ne.dialog = null;
  },
  create(e, t) {
    return new Promise((n) => {
      ne.dialog = new Xs(e, t, n);
    });
  }
}), { info: Di, confirm: Li, reset: Ce } = ne, K = C(() => ne.dialog), Ys = {
  key: 0,
  class: "absolute inset-0 z-40 bg-black/40"
}, Qs = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center"
}, Zs = {
  __name: "Dialogs",
  setup(e) {
    return (t, n) => (c(), m(
      Y,
      null,
      [
        N(At, null, {
          default: z(() => [
            D(K) ? (c(), m("div", Ys)) : A("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }),
        N(qe, null, {
          default: z(() => [
            D(K) ? (c(), m("div", Qs, [
              N(
                Hn,
                {
                  class: "mx-6 w-full max-w-lg",
                  "footer-justify": "end"
                },
                Jt({
                  header: z(() => [
                    N(Kn, null, {
                      default: z(() => {
                        var o, r;
                        return [
                          ee(
                            Z((r = (o = D(K)) == null ? void 0 : o.data) == null ? void 0 : r.title),
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
                    D(K).type === "info" ? (c(), M(Ye, {
                      key: 0,
                      onClick: n[0] || (n[0] = (o) => {
                        var r;
                        (r = D(K)) == null || r.resolve(), D(Ce)();
                      })
                    }, {
                      default: z(() => [
                        ee("Ok")
                      ]),
                      _: 1
                      /* STABLE */
                    })) : D(K).type === "confirm" ? (c(), m(
                      Y,
                      { key: 1 },
                      [
                        N(Mn, {
                          onClick: n[1] || (n[1] = (o) => {
                            var r;
                            (r = D(K)) == null || r.resolve(!1), D(Ce)();
                          })
                        }, {
                          default: z(() => [
                            ee("No")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        N(Ye, {
                          onClick: n[2] || (n[2] = (o) => {
                            var r;
                            (r = D(K)) == null || r.resolve(!0), D(Ce)();
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
                    )) : A("v-if", !0)
                  ]),
                  default: z(() => {
                    var o, r;
                    return [
                      d(
                        "p",
                        null,
                        Z((r = (o = D(K)) == null ? void 0 : o.data) == null ? void 0 : r.subtitle),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, [
                  D(K).type !== "info" ? {
                    name: "extra",
                    fn: z(() => [
                      N(ze, { size: "uniform" }, {
                        default: z(() => [
                          N(Gs, { class: "h-5 w-5" })
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
}, Ei = /* @__PURE__ */ $(Zs, [["__file", "/home/harry/Sites/ui/src/components/Dialogs/Dialogs.vue"]]);
function ei() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class ti {
  constructor(t, n = {}) {
    this.component = t, this.data = n;
  }
}
const V = le({
  modals: le([]),
  push(e, t = {}) {
    return t.key || (t.key = ei()), V.modals.push(le(new ti(Gt(e), t))), document.body.classList.add("overflow-y-hidden"), t.key;
  },
  pop(e = 1) {
    for (let t = 0; t < e; t += 1)
      V.modals.pop();
    V.modals.length === 0 && document.body.classList.remove("overflow-y-hidden");
  },
  clear() {
    V.modals = le([]);
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
}), { push: Ci, pop: ji, clear: Pi } = V, Ii = () => V.all, ni = {
  key: "modalBackground",
  class: "fixed inset-0 bg-black/40",
  "aria-hidden": "true"
}, ri = { class: "flex min-h-screen w-full max-w-xl justify-center items-end sm:items-center" }, oi = { class: "absolute right-0 top-0 pr-4 pt-4" }, si = /* @__PURE__ */ d(
  "span",
  { class: "sr-only" },
  "Close",
  -1
  /* HOISTED */
), ii = /* @__PURE__ */ d(
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
), ai = {
  __name: "Modals",
  setup(e) {
    const t = I(!1);
    return ve(
      () => V.modals,
      (n) => {
        n.length ? (document.body.classList.add("overflow-hidden"), J(() => {
          t.value = !0;
        })) : (document.body.classList.remove("overflow-hidden"), J(() => {
          t.value = !1;
        }));
      }
    ), (n, o) => (c(), m("div", null, [
      d(
        "div",
        {
          class: R(["fixed inset-0 z-50 flex max-w-full justify-center overflow-y-auto", D(V).all.length ? "" : "pointer-events-none"]),
          "aria-labelledby": "modal-title",
          role: "dialog",
          "aria-modal": "true"
        },
        [
          N(At, null, {
            default: z(() => [
              D(V).all.length ? (c(), m("div", ni)) : A("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          d("div", ri, [
            N(qe, null, {
              default: z(() => [
                (c(!0), m(
                  Y,
                  null,
                  Ve(D(V).all, (r, s) => (c(), m("div", {
                    key: `modal${s}`,
                    class: "relative w-full rounded-lg bg-white p-4 shadow-xl transition-all dark:bg-zinc-900 dark:text-white sm:my-8 sm:p-6"
                  }, [
                    d("div", oi, [
                      d("button", {
                        type: "button",
                        class: "rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                        onClick: o[0] || (o[0] = (i) => D(V).pop())
                      }, [
                        si,
                        A(" Heroicon name: outline/x "),
                        ii
                      ])
                    ]),
                    (c(), M(X(r.component), {
                      "modal-index": s,
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
}, Bi = /* @__PURE__ */ $(ai, [["__file", "/home/harry/Sites/ui/src/components/Modals/Modals.vue"]]), li = {
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
}, Mi = /* @__PURE__ */ $(li, [["__file", "/home/harry/Sites/ui/src/components/Container.vue"]]);
export {
  ci as AlertAction,
  ze as BaseButton,
  Ti as BreadcrumbItem,
  Ai as Breadcrumbs,
  Hn as Card,
  Kn as CardTitle,
  zi as CollapseTransition,
  Mi as Container,
  di as DangerAlert,
  vi as DangerButton,
  Ei as Dialogs,
  hi as Dropdown,
  gi as DropdownLink,
  qe as FadeScaleTransition,
  At as FadeTransition,
  bi as HH1,
  yi as HH2,
  _i as HH3,
  fi as InfoAlert,
  wi as Input,
  ht as InputLayout,
  Bi as Modals,
  Ye as PrimaryButton,
  Mn as SecondaryButton,
  xi as SelectInput,
  $i as Sidebar,
  Si as SidebarItem,
  Oi as SidebarItemGroup,
  ki as SidebarLayout,
  pi as SuccessAlert,
  mi as WarningAlert,
  V as all,
  Ii as allModals,
  Pi as clearModals,
  Li as confirmDialog,
  ne as dialogs,
  Di as infoDialog,
  ji as popModal,
  Ci as pushModal,
  Ce as resetDialog
};
