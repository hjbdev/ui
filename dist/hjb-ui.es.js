import { openBlock as d, createBlock as R, resolveDynamicComponent as X, withCtx as z, createTextVNode as ee, createElementVNode as p, createElementBlock as y, normalizeClass as B, renderSlot as x, createCommentVNode as A, onMounted as ae, onUnmounted as yt, computed as j, ref as M, withDirectives as tt, vShow as nt, createVNode as N, Transition as ye, toDisplayString as Z, normalizeProps as _t, guardReactiveProps as wt, mergeProps as Yt, cloneVNode as Qt, h as Fe, Fragment as Y, inject as We, provide as Ke, watchEffect as De, defineComponent as ce, watch as de, nextTick as G, toRaw as W, unref as T, renderList as Ge, getCurrentScope as Zt, onScopeDispose as en, readonly as tn, getCurrentInstance as nn, shallowRef as rn, useSlots as sn, reactive as te, createSlots as on, markRaw as an } from "vue";
const O = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, ln = /* @__PURE__ */ p(
  "span",
  { "aria-hidden": "true" },
  "→",
  -1
  /* HOISTED */
), un = {
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
        ln
      ]),
      _: 1
      /* STABLE */
    }));
  }
}, Ti = /* @__PURE__ */ O(un, [["__file", "/home/harry/Sites/ui/src/components/Alerts/AlertAction.vue"]]), cn = {}, dn = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, fn = { class: "flex" }, pn = /* @__PURE__ */ p(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ A(" Heroicon name: solid/x-circle "),
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
), hn = { class: "ml-3 flex-1" }, mn = { class: "md:flex md:justify-between" }, vn = { class: "text-sm text-red-800 dark:text-red-200" }, gn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function bn(e, t) {
  return d(), y("div", dn, [
    p("div", fn, [
      pn,
      p("div", hn, [
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
        )) : A("v-if", !0),
        p("div", mn, [
          p("p", vn, [
            x(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), y("p", gn, [
            x(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Ai = /* @__PURE__ */ O(cn, [["render", bn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/DangerAlert.vue"]]), yn = {}, _n = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, wn = { class: "flex" }, xn = /* @__PURE__ */ p(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ A(" Heroicon name: solid/information-circle "),
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
), $n = { class: "ml-3 flex-1" }, Sn = { class: "md:flex md:justify-between" }, kn = { class: "text-sm text-blue-800 dark:text-blue-200" }, On = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function zn(e, t) {
  return d(), y("div", _n, [
    p("div", wn, [
      xn,
      p("div", $n, [
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
        )) : A("v-if", !0),
        p("div", Sn, [
          p("p", kn, [
            x(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), y("p", On, [
            x(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Di = /* @__PURE__ */ O(yn, [["render", zn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/InfoAlert.vue"]]), Tn = {}, An = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, Dn = { class: "flex" }, Ln = /* @__PURE__ */ p(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ A(" Heroicon name: solid/check-circle "),
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
), En = { class: "ml-3 flex-1" }, Cn = { class: "md:flex md:justify-between" }, jn = { class: "text-sm text-green-800 dark:text-green-200" }, Mn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Pn(e, t) {
  return d(), y("div", An, [
    p("div", Dn, [
      Ln,
      p("div", En, [
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
        )) : A("v-if", !0),
        p("div", Cn, [
          p("p", jn, [
            x(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), y("p", Mn, [
            x(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Li = /* @__PURE__ */ O(Tn, [["render", Pn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/SuccessAlert.vue"]]), In = {}, Rn = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, Bn = { class: "flex" }, Fn = /* @__PURE__ */ p(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ A(" Heroicon name: solid/exclamation "),
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
), Nn = { class: "ml-3 flex-1" }, Vn = { class: "md:flex md:justify-between" }, Hn = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, Un = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function qn(e, t) {
  return d(), y("div", Rn, [
    p("div", Bn, [
      Fn,
      p("div", Nn, [
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
        )) : A("v-if", !0),
        p("div", Vn, [
          p("p", Hn, [
            x(e.$slots, "default")
          ]),
          e.$slots.action ? (d(), y("p", Un, [
            x(e.$slots, "action")
          ])) : A("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Ei = /* @__PURE__ */ O(In, [["render", qn], ["__file", "/home/harry/Sites/ui/src/components/Alerts/WarningAlert.vue"]]), Wn = {
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
}, Le = /* @__PURE__ */ O(Wn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/BaseButton.vue"]]), Kn = {
  __name: "PrimaryButton",
  setup(e) {
    return (t, n) => (d(), R(Le, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: z(() => [
        x(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, rt = /* @__PURE__ */ O(Kn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/PrimaryButton.vue"]]), Gn = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, n) => (d(), R(Le, {
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
}, Jn = /* @__PURE__ */ O(Gn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/SecondaryButton.vue"]]), Xn = {
  __name: "DangerButton",
  setup(e) {
    return (t, n) => (d(), R(Le, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: z(() => [
        x(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Ci = /* @__PURE__ */ O(Xn, [["__file", "/home/harry/Sites/ui/src/components/Buttons/DangerButton.vue"]]), Yn = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, Qn = { key: 0 }, Zn = {
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
        t.$slots.header || t.$slots.extra ? (d(), y("div", Yn, [
          p("div", null, [
            x(t.$slots, "header")
          ]),
          t.$slots.extra ? (d(), y("div", Qn, [
            x(t.$slots, "extra")
          ])) : A("v-if", !0)
        ])) : A("v-if", !0),
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
        )) : A("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}, er = /* @__PURE__ */ O(Zn, [["__file", "/home/harry/Sites/ui/src/components/Cards/Card.vue"]]), tr = {}, nr = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function rr(e, t) {
  return d(), y("h3", nr, [
    x(e.$slots, "default")
  ]);
}
const sr = /* @__PURE__ */ O(tr, [["render", rr], ["__file", "/home/harry/Sites/ui/src/components/Cards/CardTitle.vue"]]), or = { class: "relative" }, ir = {
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
    ae(() => document.addEventListener("keydown", n)), yt(() => document.removeEventListener("keydown", n));
    const s = j(() => ({
      48: "w-48"
    })[t.width.toString()]), r = j(() => {
      const i = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${i}-left left-0` : t.align === "right" ? `origin-${i}-right right-0` : `origin-${i}`;
    }), o = M(!1);
    return (i, a) => (d(), y("div", or, [
      p("div", {
        onClick: a[0] || (a[0] = (c) => o.value = !o.value)
      }, [
        x(i.$slots, "trigger")
      ]),
      A(" Full Screen Dropdown Overlay "),
      tt(p(
        "div",
        {
          class: "fixed inset-0 z-40",
          onClick: a[1] || (a[1] = (c) => o.value = !1)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [nt, o.value]
      ]),
      N(ye, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        persisted: ""
      }, {
        default: z(() => [
          tt(p(
            "div",
            {
              class: B(["absolute z-50 mt-2 rounded-md shadow-lg", [s.value, r.value, t.bottom ? "bottom-full" : ""]]),
              style: { display: "none" },
              onClick: a[2] || (a[2] = (c) => o.value = !1)
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
            [nt, o.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]));
  }
}, ji = /* @__PURE__ */ O(ir, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/Dropdown.vue"]]), ar = {
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
}, Mi = /* @__PURE__ */ O(ar, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/DropdownLink.vue"]]), lr = {}, ur = { class: "font-semibold text-3xl leading-tight" };
function cr(e, t) {
  return d(), y("h1", ur, [
    x(e.$slots, "default")
  ]);
}
const Pi = /* @__PURE__ */ O(lr, [["render", cr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH1.vue"]]), dr = {}, fr = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function pr(e, t) {
  return d(), y("h2", fr, [
    x(e.$slots, "default")
  ]);
}
const Ii = /* @__PURE__ */ O(dr, [["render", pr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH2.vue"]]), hr = {}, mr = { class: "text-xl tracking-tight dark:text-white" };
function vr(e, t) {
  return d(), y("h2", mr, [
    x(e.$slots, "default")
  ]);
}
const Ri = /* @__PURE__ */ O(hr, [["render", vr], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH3.vue"]]), Oe = {
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
}, gr = ["for"], br = { class: "relative mt-1" }, yr = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, _r = /* @__PURE__ */ p(
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
), wr = ["id"], xr = ["id"], $r = {
  __name: "InputLayout",
  props: {
    ...Oe
  },
  setup(e) {
    return (t, n) => (d(), y("div", null, [
      t.label ? (d(), y("label", {
        key: 0,
        for: t.id,
        class: "block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      }, Z(t.label), 9, gr)) : A("v-if", !0),
      p("div", br, [
        x(t.$slots, "default"),
        t.error ? (d(), y("div", yr, [
          A(" Heroicon name: solid/exclamation-circle "),
          _r
        ])) : A("v-if", !0)
      ]),
      t.helpText && !t.error ? (d(), y("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, Z(t.helpText), 9, wr)) : t.error ? (d(), y("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, Z(t.error), 9, xr)) : A("v-if", !0)
    ]));
  }
}, xt = /* @__PURE__ */ O($r, [["__file", "/home/harry/Sites/ui/src/components/Inputs/InputLayout.vue"]]), Sr = ["name", "id", "aria-describedby"], kr = {
  inheritAttrs: !1
}, Or = /* @__PURE__ */ Object.assign(kr, {
  __name: "Input",
  props: {
    ...Oe
  },
  setup(e) {
    return (t, n) => (d(), R(
      xt,
      _t(wt(t.$props)),
      {
        default: z(() => [
          p("input", Yt(t.$attrs, {
            name: t.name,
            id: t.id,
            class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
              "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
            }],
            "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
          }), null, 16, Sr)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), Bi = /* @__PURE__ */ O(Or, [["__file", "/home/harry/Sites/ui/src/components/Inputs/Input.vue"]]);
function K(e, t, ...n) {
  if (e in t) {
    let r = t[e];
    return typeof r == "function" ? r(...n) : r;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, K), s;
}
var Ne = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ne || {}), zr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(zr || {});
function fe({ visible: e = !0, features: t = 0, ourProps: n, theirProps: s, ...r }) {
  var o;
  let i = St(s, n), a = Object.assign(r, { props: i });
  if (e || t & 2 && i.static)
    return Ce(a);
  if (t & 1) {
    let c = (o = i.unmount) == null || o ? 0 : 1;
    return K(c, { 0() {
      return null;
    }, 1() {
      return Ce({ ...r, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ce(a);
}
function Ce({ props: e, attrs: t, slots: n, slot: s, name: r }) {
  var o, i;
  let { as: a, ...c } = kt(e, ["unmount", "static"]), l = (o = n.default) == null ? void 0 : o.call(n, s), u = {};
  if (s) {
    let f = !1, h = [];
    for (let [m, w] of Object.entries(s))
      typeof w == "boolean" && (f = !0), w === !0 && h.push(m);
    f && (u["data-headlessui-state"] = h.join(" "));
  }
  if (a === "template") {
    if (l = $t(l ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [f, ...h] = l ?? [];
      if (!Ar(f) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map(($) => $.trim()).filter(($, D, _) => _.indexOf($) === D).sort(($, D) => $.localeCompare(D)).map(($) => `  - ${$}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(($) => `  - ${$}`).join(`
`)].join(`
`));
      let m = St((i = f.props) != null ? i : {}, c), w = Qt(f, m);
      for (let $ in m)
        $.startsWith("on") && (w.props || (w.props = {}), w.props[$] = m[$]);
      return w;
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return Fe(a, Object.assign({}, c, u), { default: () => l });
}
function $t(e) {
  return e.flatMap((t) => t.type === Y ? $t(t.children) : [t]);
}
function St(...e) {
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
function Tr(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function kt(e, t = []) {
  let n = Object.assign({}, e);
  for (let s of t)
    s in n && delete n[s];
  return n;
}
function Ar(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Dr = 0;
function Lr() {
  return ++Dr;
}
function Ee() {
  return Lr();
}
var F = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});
function Er(e) {
  throw new Error("Unexpected object: " + e);
}
var H = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(H || {});
function Cr(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let s = t.resolveActiveIndex(), r = s ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((a, c, l) => r !== -1 && l.length - c - 1 >= r ? !1 : !t.resolveDisabled(a));
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
        Er(e);
    }
  })();
  return o === -1 ? s : o;
}
function P(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ot = Symbol("Context");
var ve = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ve || {});
function jr() {
  return We(Ot, null);
}
function Mr(e) {
  Ke(Ot, e);
}
function st(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Pr(e, t) {
  let n = M(st(e.value.type, e.value.as));
  return ae(() => {
    n.value = st(e.value.type, e.value.as);
  }), De(() => {
    var s;
    n.value || P(t) && P(t) instanceof HTMLButtonElement && !((s = P(t)) != null && s.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var Ir = Object.defineProperty, Rr = (e, t, n) => t in e ? Ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ot = (e, t, n) => (Rr(e, typeof t != "symbol" ? t + "" : t, n), n);
class Br {
  constructor() {
    ot(this, "current", this.detect()), ot(this, "currentId", 0);
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
let Je = new Br();
function Fr(e) {
  if (Je.isServer)
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
let it = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Nr = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Nr || {}), Vr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Vr || {}), Hr = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Hr || {}), Xe = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Xe || {});
function zt(e, t = 0) {
  var n;
  return e === ((n = Fr(e)) == null ? void 0 : n.body) ? !1 : K(t, { 0() {
    return e.matches(it);
  }, 1() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(it))
        return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
var Ur = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Ur || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function qr(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let r = t(n), o = t(s);
    if (r === null || o === null)
      return 0;
    let i = r.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function we(e, t, n) {
  Je.isServer || De((s) => {
    document.addEventListener(e, t, n), s(() => document.removeEventListener(e, t, n));
  });
}
function Wr(e, t, n) {
  Je.isServer || De((s) => {
    window.addEventListener(e, t, n), s(() => window.removeEventListener(e, t, n));
  });
}
function Kr(e, t, n = j(() => !0)) {
  function s(o, i) {
    if (!n.value || o.defaultPrevented)
      return;
    let a = i(o);
    if (a === null || !a.getRootNode().contains(a))
      return;
    let c = function l(u) {
      return typeof u == "function" ? l(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let l of c) {
      if (l === null)
        continue;
      let u = l instanceof HTMLElement ? l : P(l);
      if (u != null && u.contains(a) || o.composed && o.composedPath().includes(u))
        return;
    }
    return !zt(a, Xe.Loose) && a.tabIndex !== -1 && o.preventDefault(), t(o, a);
  }
  let r = M(null);
  we("pointerdown", (o) => {
    var i, a;
    n.value && (r.value = ((a = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : a[0]) || o.target);
  }, !0), we("mousedown", (o) => {
    var i, a;
    n.value && (r.value = ((a = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : a[0]) || o.target);
  }, !0), we("click", (o) => {
    r.value && (s(o, () => r.value), r.value = null);
  }, !0), we("touchend", (o) => s(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Wr("blur", (o) => s(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Tt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Tt || {});
let Gr = ce({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: s, ...r } = e, o = { "aria-hidden": (s & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(s & 4) === 4 && (s & 2) !== 2 && { display: "none" } } };
    return fe({ ourProps: o, theirProps: r, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function At(e = {}, t = null, n = []) {
  for (let [s, r] of Object.entries(e))
    Lt(n, Dt(t, s), r);
  return n;
}
function Dt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Lt(e, t, n) {
  if (Array.isArray(n))
    for (let [s, r] of n.entries())
      Lt(e, Dt(t, s.toString()), r);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : At(n, t, e);
}
function Jr(e, t, n) {
  let s = M(n == null ? void 0 : n.value), r = j(() => e.value !== void 0);
  return [j(() => r.value ? e.value : s.value), function(o) {
    return r.value || (s.value = o), t == null ? void 0 : t(o);
  }];
}
function at(e) {
  return [e.screenX, e.screenY];
}
function Xr() {
  let e = M([-1, -1]);
  return { wasMoved(t) {
    let n = at(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = at(t);
  } };
}
let lt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function ut(e) {
  var t, n;
  let s = (t = e.innerText) != null ? t : "", r = e.cloneNode(!0);
  if (!(r instanceof HTMLElement))
    return s;
  let o = !1;
  for (let a of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    a.remove(), o = !0;
  let i = o ? (n = r.innerText) != null ? n : "" : s;
  return lt.test(i) && (i = i.replace(lt, "")), i;
}
function Yr(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let s = n.split(" ").map((r) => {
      let o = document.getElementById(r);
      if (o) {
        let i = o.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : ut(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (s.length > 0)
      return s.join(", ");
  }
  return ut(e).trim();
}
function Qr(e) {
  let t = M(""), n = M("");
  return () => {
    let s = P(e);
    if (!s)
      return "";
    let r = s.innerText;
    if (t.value === r)
      return n.value;
    let o = Yr(s).trim().toLowerCase();
    return t.value = r, n.value = o, o;
  };
}
function Zr(e, t) {
  return e === t;
}
var es = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(es || {}), ts = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(ts || {}), ns = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ns || {});
function rs(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Et = Symbol("ListboxContext");
function _e(e) {
  let t = We(Et, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, _e), n;
  }
  return t;
}
let ss = ce({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Zr }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: s }) {
  let r = M(1), o = M(null), i = M(null), a = M(null), c = M([]), l = M(""), u = M(null), f = M(1);
  function h(g = (b) => b) {
    let b = u.value !== null ? c.value[u.value] : null, k = qr(g(c.value.slice()), (C) => P(C.dataRef.domRef)), S = b ? k.indexOf(b) : null;
    return S === -1 && (S = null), { options: k, activeOptionIndex: S };
  }
  let m = j(() => e.multiple ? 1 : 0), [w, $] = Jr(j(() => e.modelValue), (g) => s("update:modelValue", g), j(() => e.defaultValue)), D = j(() => w.value === void 0 ? K(m.value, { 1: [], 0: void 0 }) : w.value), _ = { listboxState: r, value: D, mode: m, compare(g, b) {
    if (typeof e.by == "string") {
      let k = e.by;
      return (g == null ? void 0 : g[k]) === (b == null ? void 0 : b[k]);
    }
    return e.by(g, b);
  }, orientation: j(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: i, optionsRef: a, disabled: j(() => e.disabled), options: c, searchQuery: l, activeOptionIndex: u, activationTrigger: f, closeListbox() {
    e.disabled || r.value !== 1 && (r.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || r.value !== 0 && (r.value = 0);
  }, goToOption(g, b, k) {
    if (e.disabled || r.value === 1)
      return;
    let S = h(), C = Cr(g === H.Specific ? { focus: H.Specific, id: b } : { focus: g }, { resolveItems: () => S.options, resolveActiveIndex: () => S.activeOptionIndex, resolveId: (v) => v.id, resolveDisabled: (v) => v.dataRef.disabled });
    l.value = "", u.value = C, f.value = k ?? 1, c.value = S.options;
  }, search(g) {
    if (e.disabled || r.value === 1)
      return;
    let b = l.value !== "" ? 0 : 1;
    l.value += g.toLowerCase();
    let k = (u.value !== null ? c.value.slice(u.value + b).concat(c.value.slice(0, u.value + b)) : c.value).find((C) => C.dataRef.textValue.startsWith(l.value) && !C.dataRef.disabled), S = k ? c.value.indexOf(k) : -1;
    S === -1 || S === u.value || (u.value = S, f.value = 1);
  }, clearSearch() {
    e.disabled || r.value !== 1 && l.value !== "" && (l.value = "");
  }, registerOption(g, b) {
    let k = h((S) => [...S, { id: g, dataRef: b }]);
    c.value = k.options, u.value = k.activeOptionIndex;
  }, unregisterOption(g) {
    let b = h((k) => {
      let S = k.findIndex((C) => C.id === g);
      return S !== -1 && k.splice(S, 1), k;
    });
    c.value = b.options, u.value = b.activeOptionIndex, f.value = 1;
  }, theirOnChange(g) {
    e.disabled || $(g);
  }, select(g) {
    e.disabled || $(K(m.value, { 0: () => g, 1: () => {
      let b = W(_.value.value).slice(), k = W(g), S = b.findIndex((C) => _.compare(k, W(C)));
      return S === -1 ? b.push(k) : b.splice(S, 1), b;
    } }));
  } };
  Kr([i, a], (g, b) => {
    var k;
    _.closeListbox(), zt(b, Xe.Loose) || (g.preventDefault(), (k = P(i)) == null || k.focus());
  }, j(() => r.value === 0)), Ke(Et, _), Mr(j(() => K(r.value, { 0: ve.Open, 1: ve.Closed })));
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
    let { name: g, modelValue: b, disabled: k, form: S, ...C } = e, v = { open: r.value === 0, disabled: k, value: D.value };
    return Fe(Y, [...g != null && D.value != null ? At({ [g]: D.value }).map(([I, L]) => Fe(Gr, Tr({ features: Tt.Hidden, key: I, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: S, name: I, value: L }))) : [], fe({ ourProps: {}, theirProps: { ...n, ...kt(C, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: v, slots: t, attrs: n, name: "Listbox" })]);
  };
} });
ce({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${Ee()}` } }, setup(e, { attrs: t, slots: n }) {
  let s = _e("ListboxLabel");
  function r() {
    var o;
    (o = P(s.buttonRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: s.listboxState.value === 0, disabled: s.disabled.value }, { id: i, ...a } = e, c = { id: i, ref: s.labelRef, onClick: r };
    return fe({ ourProps: c, theirProps: a, slot: o, attrs: t, slots: n, name: "ListboxLabel" });
  };
} });
let os = ce({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${Ee()}` } }, setup(e, { attrs: t, slots: n, expose: s }) {
  let r = _e("ListboxButton");
  s({ el: r.buttonRef, $el: r.buttonRef });
  function o(l) {
    switch (l.key) {
      case F.Space:
      case F.Enter:
      case F.ArrowDown:
        l.preventDefault(), r.openListbox(), G(() => {
          var u;
          (u = P(r.optionsRef)) == null || u.focus({ preventScroll: !0 }), r.value.value || r.goToOption(H.First);
        });
        break;
      case F.ArrowUp:
        l.preventDefault(), r.openListbox(), G(() => {
          var u;
          (u = P(r.optionsRef)) == null || u.focus({ preventScroll: !0 }), r.value.value || r.goToOption(H.Last);
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
    r.disabled.value || (r.listboxState.value === 0 ? (r.closeListbox(), G(() => {
      var u;
      return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (l.preventDefault(), r.openListbox(), rs(() => {
      var u;
      return (u = P(r.optionsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let c = Pr(j(() => ({ as: e.as, type: t.type })), r.buttonRef);
  return () => {
    var l, u;
    let f = { open: r.listboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: h, ...m } = e, w = { ref: r.buttonRef, id: h, type: c.value, "aria-haspopup": "listbox", "aria-controls": (l = P(r.optionsRef)) == null ? void 0 : l.id, "aria-expanded": r.listboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(u = P(r.labelRef)) == null ? void 0 : u.id, h].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: o, onKeyup: i, onClick: a };
    return fe({ ourProps: w, theirProps: m, slot: f, attrs: t, slots: n, name: "ListboxButton" });
  };
} }), is = ce({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${Ee()}` } }, setup(e, { attrs: t, slots: n, expose: s }) {
  let r = _e("ListboxOptions"), o = M(null);
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
        r.mode.value === 0 && (r.closeListbox(), G(() => {
          var u;
          return (u = P(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        }));
        break;
      case K(r.orientation.value, { vertical: F.ArrowDown, horizontal: F.ArrowRight }):
        return l.preventDefault(), l.stopPropagation(), r.goToOption(H.Next);
      case K(r.orientation.value, { vertical: F.ArrowUp, horizontal: F.ArrowLeft }):
        return l.preventDefault(), l.stopPropagation(), r.goToOption(H.Previous);
      case F.Home:
      case F.PageUp:
        return l.preventDefault(), l.stopPropagation(), r.goToOption(H.First);
      case F.End:
      case F.PageDown:
        return l.preventDefault(), l.stopPropagation(), r.goToOption(H.Last);
      case F.Escape:
        l.preventDefault(), l.stopPropagation(), r.closeListbox(), G(() => {
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
  let a = jr(), c = j(() => a !== null ? (a.value & ve.Open) === ve.Open : r.listboxState.value === 0);
  return () => {
    var l, u, f, h;
    let m = { open: r.listboxState.value === 0 }, { id: w, ...$ } = e, D = { "aria-activedescendant": r.activeOptionIndex.value === null || (l = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : l.id, "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, "aria-labelledby": (h = (u = P(r.labelRef)) == null ? void 0 : u.id) != null ? h : (f = P(r.buttonRef)) == null ? void 0 : f.id, "aria-orientation": r.orientation.value, id: w, onKeydown: i, role: "listbox", tabIndex: 0, ref: r.optionsRef };
    return fe({ ourProps: D, theirProps: $, slot: m, attrs: t, slots: n, features: Ne.RenderStrategy | Ne.Static, visible: c.value, name: "ListboxOptions" });
  };
} }), as = ce({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${Ee()}` } }, setup(e, { slots: t, attrs: n, expose: s }) {
  let r = _e("ListboxOption"), o = M(null);
  s({ el: o, $el: o });
  let i = j(() => r.activeOptionIndex.value !== null ? r.options.value[r.activeOptionIndex.value].id === e.id : !1), a = j(() => K(r.mode.value, { 0: () => r.compare(W(r.value.value), W(e.value)), 1: () => W(r.value.value).some((_) => r.compare(W(_), W(e.value))) })), c = j(() => K(r.mode.value, { 1: () => {
    var _;
    let E = W(r.value.value);
    return ((_ = r.options.value.find((g) => E.some((b) => r.compare(W(b), W(g.dataRef.value))))) == null ? void 0 : _.id) === e.id;
  }, 0: () => a.value })), l = Qr(o), u = j(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return l();
  }, domRef: o }));
  ae(() => r.registerOption(e.id, u)), yt(() => r.unregisterOption(e.id)), ae(() => {
    de([r.listboxState, a], () => {
      r.listboxState.value === 0 && a.value && K(r.mode.value, { 1: () => {
        c.value && r.goToOption(H.Specific, e.id);
      }, 0: () => {
        r.goToOption(H.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), De(() => {
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
  function h() {
    if (e.disabled)
      return r.goToOption(H.Nothing);
    r.goToOption(H.Specific, e.id);
  }
  let m = Xr();
  function w(_) {
    m.update(_);
  }
  function $(_) {
    m.wasMoved(_) && (e.disabled || i.value || r.goToOption(H.Specific, e.id, 0));
  }
  function D(_) {
    m.wasMoved(_) && (e.disabled || i.value && r.goToOption(H.Nothing));
  }
  return () => {
    let { disabled: _ } = e, E = { active: i.value, selected: a.value, disabled: _ }, { id: g, value: b, disabled: k, ...S } = e, C = { id: g, ref: o, role: "option", tabIndex: _ === !0 ? void 0 : -1, "aria-disabled": _ === !0 ? !0 : void 0, "aria-selected": a.value, disabled: void 0, onClick: f, onFocus: h, onPointerenter: w, onMouseenter: w, onPointermove: $, onMousemove: $, onPointerleave: D, onMouseleave: D };
    return fe({ ourProps: C, theirProps: S, slot: E, attrs: n, slots: t, name: "ListboxOption" });
  };
} });
const ls = {}, us = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, cs = /* @__PURE__ */ p(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 12.75l6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), ds = [
  cs
];
function fs(e, t) {
  return d(), y("svg", us, ds);
}
const ps = /* @__PURE__ */ O(ls, [["render", fs], ["__file", "/home/harry/Sites/ui/src/components/Icons/CheckIcon.vue"]]), hs = {};
function ms(e, t) {
  return d(), R(ye, {
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
const Ye = /* @__PURE__ */ O(hs, [["render", ms], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeScaleTransition.vue"]]), vs = {}, gs = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, bs = /* @__PURE__ */ p(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), ys = [
  bs
];
function _s(e, t) {
  return d(), y("svg", gs, ys);
}
const ws = /* @__PURE__ */ O(vs, [["render", _s], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronDownIcon.vue"]]), xs = { class: "text-sm" }, $s = {
  inheritAttrs: !1
}, Ss = /* @__PURE__ */ Object.assign($s, {
  __name: "SelectInput",
  props: {
    ...Oe,
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
      xt,
      _t(wt(
        Object.keys(T(Oe)).reduce((s, r) => (s[r] = t.$props[r], s), {})
      )),
      {
        default: z(() => [
          N(T(ss), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": n[0] || (n[0] = (s) => t.$emit("update:modelValue", s))
          }, {
            default: z(() => [
              N(T(os), {
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
                      xs,
                      Z(Array.isArray(e.modelValue) ? (s = e.modelValue) == null ? void 0 : s.map((o) => o.name).join(", ") : ((r = e.modelValue) == null ? void 0 : r.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    N(ws, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class"]),
              N(Ye, null, {
                default: z(() => [
                  N(T(is), {
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
                        Ge(e.options, (s) => (d(), R(T(as), {
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
                                o ? (d(), R(ps, {
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
}), Fi = /* @__PURE__ */ O(Ss, [["__file", "/home/harry/Sites/ui/src/components/Inputs/SelectInput.vue"]]);
function Ct(e) {
  return Zt() ? (en(e), !0) : !1;
}
function Qe(e) {
  return typeof e == "function" ? e() : T(e);
}
const ks = typeof window < "u" && typeof document < "u", Os = Object.prototype.toString, zs = (e) => Os.call(e) === "[object Object]", Ts = () => {
};
function As(e, t) {
  function n(...s) {
    return new Promise((r, o) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(r).catch(o);
    });
  }
  return n;
}
const jt = (e) => e();
function Ds(e = jt) {
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
  return { isActive: tn(t), pause: n, resume: s, eventFilter: r };
}
function Ls(e, t, n = {}) {
  const {
    eventFilter: s = jt,
    ...r
  } = n;
  return de(
    e,
    As(
      s,
      t
    ),
    r
  );
}
function Es(e, t, n = {}) {
  const {
    eventFilter: s,
    ...r
  } = n, { eventFilter: o, pause: i, resume: a, isActive: c } = Ds(s);
  return { stop: Ls(
    e,
    t,
    {
      ...r,
      eventFilter: o
    }
  ), pause: i, resume: a, isActive: c };
}
function Ve(e) {
  var t;
  const n = Qe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ge = ks ? window : void 0;
function ct(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = ge) : [t, n, s, r] = e, !t)
    return Ts;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], i = () => {
    o.forEach((u) => u()), o.length = 0;
  }, a = (u, f, h, m) => (u.addEventListener(f, h, m), () => u.removeEventListener(f, h, m)), c = de(
    () => [Ve(t), Qe(r)],
    ([u, f]) => {
      if (i(), !u)
        return;
      const h = zs(f) ? { ...f } : f;
      o.push(
        ...n.flatMap((m) => s.map((w) => a(u, m, w, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    c(), i();
  };
  return Ct(l), l;
}
function Cs() {
  const e = M(!1);
  return nn() && ae(() => {
    e.value = !0;
  }), e;
}
function js(e) {
  const t = Cs();
  return j(() => (t.value, !!e()));
}
const xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $e = "__vueuse_ssr_handlers__", Ms = /* @__PURE__ */ Ps();
function Ps() {
  return $e in xe || (xe[$e] = xe[$e] || {}), xe[$e];
}
function Is(e, t) {
  return Ms[e] || t;
}
function Rs(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Bs = {
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
}, dt = "vueuse-storage";
function Fs(e, t, n, s = {}) {
  var r;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: c = !0,
    mergeDefaults: l = !1,
    shallow: u,
    window: f = ge,
    eventFilter: h,
    onError: m = (v) => {
      console.error(v);
    }
  } = s, w = (u ? rn : M)(t);
  if (!n)
    try {
      n = Is("getDefaultStorage", () => {
        var v;
        return (v = ge) == null ? void 0 : v.localStorage;
      })();
    } catch (v) {
      m(v);
    }
  if (!n)
    return w;
  const $ = Qe(t), D = Rs($), _ = (r = s.serializer) != null ? r : Bs[D], { pause: E, resume: g } = Es(
    w,
    () => b(w.value),
    { flush: o, deep: i, eventFilter: h }
  );
  return f && a && (ct(f, "storage", C), ct(f, dt, S)), C(), w;
  function b(v) {
    try {
      if (v == null)
        n.removeItem(e);
      else {
        const I = _.write(v), L = n.getItem(e);
        L !== I && (n.setItem(e, I), f && f.dispatchEvent(new CustomEvent(dt, {
          detail: {
            key: e,
            oldValue: L,
            newValue: I,
            storageArea: n
          }
        })));
      }
    } catch (I) {
      m(I);
    }
  }
  function k(v) {
    const I = v ? v.newValue : n.getItem(e);
    if (I == null)
      return c && $ !== null && n.setItem(e, _.write($)), $;
    if (!v && l) {
      const L = _.read(I);
      return typeof l == "function" ? l(L, $) : D === "object" && !Array.isArray(L) ? { ...$, ...L } : L;
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
          m(I);
        } finally {
          v ? G(g) : g();
        }
      }
    }
  }
}
function Ns(e, t, n = {}) {
  const { window: s = ge, ...r } = n;
  let o;
  const i = js(() => s && "ResizeObserver" in s), a = () => {
    o && (o.disconnect(), o = void 0);
  }, c = j(
    () => Array.isArray(e) ? e.map((f) => Ve(f)) : [Ve(e)]
  ), l = de(
    c,
    (f) => {
      if (a(), i.value && s) {
        o = new ResizeObserver(t);
        for (const h of f)
          h && o.observe(h, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), u = () => {
    a(), l();
  };
  return Ct(u), {
    isSupported: i,
    stop: u
  };
}
function Vs(e, t, n = {}) {
  const { window: s = ge } = n;
  return Fs(e, t, s == null ? void 0 : s.localStorage, n);
}
const Hs = {}, Us = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, qs = /* @__PURE__ */ p(
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
), Ws = [
  qs
];
function Ks(e, t) {
  return d(), y("svg", Us, Ws);
}
const Gs = /* @__PURE__ */ O(Hs, [["render", Ks], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronRightIcon.vue"]]), Js = { class: "flex flex-col gap-6 py-6" }, Xs = { class: "flex flex-col gap-6 mb-6" }, Ys = {
  __name: "Sidebar",
  setup(e) {
    const t = Vs("ui/sidebar", !1);
    return Ke("sidebarMinimised", t), (n, s) => (d(), y(
      "nav",
      {
        class: B(["min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10", {
          "!w-24 !max-w-24 !min-w-24": T(t),
          "w-64 max-w-64 min-w-64": !T(t)
        }])
      },
      [
        p("button", {
          class: "absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-10",
          onClick: s[0] || (s[0] = (r) => t.value = !T(t))
        }, [
          N(Gs, {
            class: B(["w-5 h-5", {
              "transform rotate-180": !T(t)
            }])
          }, null, 8, ["class"])
        ]),
        A(" Primary Navigation Menu "),
        p("div", Js, [
          A(" Logo "),
          x(n.$slots, "default")
        ]),
        p("div", Xs, [
          x(n.$slots, "bottom")
        ])
      ],
      2
      /* CLASS */
    ));
  }
}, Ni = /* @__PURE__ */ O(Ys, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/Sidebar.vue"]]), Qs = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3"
}, Zs = {
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
    const t = e, n = We("sidebarMinimised"), s = j(() => {
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
            " mr-4": !T(n)
          }])
        }, null, 8, ["class"])) : A("v-if", !0),
        N(ye, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "transform opacity-0",
          "enter-to-class": "transform opacity-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100",
          "leave-to-class": "transform opacity-0"
        }, {
          default: z(() => [
            T(n) ? A("v-if", !0) : x(r.$slots, "default", { key: 0 })
          ]),
          _: 3
          /* FORWARDED */
        }),
        T(n) ? (d(), y("div", Qs, [
          x(r.$slots, "default")
        ])) : A("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, Vi = /* @__PURE__ */ O(Zs, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItem.vue"]]), eo = {}, to = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, no = { class: "flex w-full h-full max-h-screen z-10 relative" }, ro = { class: "flex-grow overflow-y-auto pb-12" };
function so(e, t) {
  return d(), y("div", to, [
    x(e.$slots, "top"),
    p("div", no, [
      x(e.$slots, "sidebar"),
      p("section", ro, [
        x(e.$slots, "default")
      ])
    ])
  ]);
}
const Hi = /* @__PURE__ */ O(eo, [["render", so], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarLayout.vue"]]), oo = {}, io = { class: "flex flex-col gap-2 px-2" };
function ao(e, t) {
  return d(), y("div", io, [
    x(e.$slots, "default")
  ]);
}
const Ui = /* @__PURE__ */ O(oo, [["render", ao], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItemGroup.vue"]]), lo = {};
function uo(e, t) {
  return d(), R(ye, {
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
const Mt = /* @__PURE__ */ O(lo, [["render", uo], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeTransition.vue"]]);
function co(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
const Pt = (e, t, n) => Math.min(Math.max(n, e), t), U = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
}, be = (e) => typeof e == "number", se = (e) => Array.isArray(e) && !be(e[0]), fo = (e, t, n) => {
  const s = t - e;
  return ((n - e) % s + s) % s + e;
};
function po(e, t) {
  return se(e) ? e[fo(0, e.length, t)] : e;
}
const It = (e, t, n) => -n * e + n * t + e, Rt = () => {
}, J = (e) => e, Ze = (e, t, n) => t - e === 0 ? 1 : (n - e) / (t - e);
function Bt(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const r = Ze(0, t, s);
    e.push(It(n, 1, r));
  }
}
function ho(e) {
  const t = [0];
  return Bt(t, e - 1), t;
}
function mo(e, t = ho(e.length), n = J) {
  const s = e.length, r = s - t.length;
  return r > 0 && Bt(t, r), (o) => {
    let i = 0;
    for (; i < s - 2 && !(o < t[i + 1]); i++)
      ;
    let a = Pt(0, 1, Ze(t[i], t[i + 1], o));
    return a = po(n, i)(a), It(e[i], e[i + 1], a);
  };
}
const Ft = (e) => Array.isArray(e) && be(e[0]), He = (e) => typeof e == "object" && !!e.createAnimation, le = (e) => typeof e == "function", Nt = (e) => typeof e == "string", oe = {
  ms: (e) => e * 1e3,
  s: (e) => e / 1e3
};
function vo(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Vt = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, go = 1e-7, bo = 12;
function yo(e, t, n, s, r) {
  let o, i, a = 0;
  do
    i = t + (n - t) / 2, o = Vt(i, s, r) - e, o > 0 ? n = i : t = i;
  while (Math.abs(o) > go && ++a < bo);
  return i;
}
function he(e, t, n, s) {
  if (e === t && n === s)
    return J;
  const r = (o) => yo(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Vt(r(o), t, s);
}
const _o = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  const s = n * e, r = t === "end" ? Math.floor(s) : Math.ceil(s);
  return Pt(0, 1, r / e);
}, ft = {
  ease: he(0.25, 0.1, 0.25, 1),
  "ease-in": he(0.42, 0, 1, 1),
  "ease-in-out": he(0.42, 0, 0.58, 1),
  "ease-out": he(0, 0, 0.58, 1)
}, wo = /\((.*?)\)/;
function pt(e) {
  if (le(e))
    return e;
  if (Ft(e))
    return he(...e);
  if (ft[e])
    return ft[e];
  if (e.startsWith("steps")) {
    const t = wo.exec(e);
    if (t) {
      const n = t[1].split(",");
      return _o(parseFloat(n[0]), n[1].trim());
    }
  }
  return J;
}
class Ht {
  constructor(t, n = [0, 1], { easing: s, duration: r = U.duration, delay: o = U.delay, endDelay: i = U.endDelay, repeat: a = U.repeat, offset: c, direction: l = "normal" } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = J, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((f, h) => {
      this.resolve = f, this.reject = h;
    }), s = s || U.easing, He(s)) {
      const f = s.createAnimation(n);
      s = f.easing, n = f.keyframes || n, r = f.duration || r;
    }
    this.repeat = a, this.easing = se(s) ? J : pt(s), this.updateDuration(r);
    const u = mo(n, c, se(s) ? s.map(pt) : J);
    this.tick = (f) => {
      var h;
      o = o;
      let m = 0;
      this.pauseTime !== void 0 ? m = this.pauseTime : m = (f - this.startTime) * this.rate, this.t = m, m /= 1e3, m = Math.max(m - o, 0), this.playState === "finished" && this.pauseTime === void 0 && (m = this.totalDuration);
      const w = m / this.duration;
      let $ = Math.floor(w), D = w % 1;
      !D && w >= 1 && (D = 1), D === 1 && $--;
      const _ = $ % 2;
      (l === "reverse" || l === "alternate" && _ || l === "alternate-reverse" && !_) && (D = 1 - D);
      const E = m >= this.totalDuration ? 1 : Math.min(D, 1), g = u(this.easing(E));
      t(g), this.pauseTime === void 0 && (this.playState === "finished" || m >= this.totalDuration + i) ? (this.playState = "finished", (h = this.resolve) === null || h === void 0 || h.call(this, g)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
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
var Ue = function() {
};
process.env.NODE_ENV !== "production" && (Ue = function(e, t) {
  if (!e)
    throw new Error(t);
});
class xo {
  setAnimation(t) {
    this.animation = t, t == null || t.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const je = /* @__PURE__ */ new WeakMap();
function Ut(e) {
  return je.has(e) || je.set(e, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), je.get(e);
}
function $o(e, t) {
  return e.has(t) || e.set(t, new xo()), e.get(t);
}
const So = ["", "X", "Y", "Z"], ko = ["translate", "scale", "rotate", "skew"], ze = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
}, ht = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (e) => e + "deg"
}, Oo = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (e) => e + "px"
  },
  rotate: ht,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: J
  },
  skew: ht
}, ue = /* @__PURE__ */ new Map(), et = (e) => `--motion-${e}`, Te = ["x", "y", "z"];
ko.forEach((e) => {
  So.forEach((t) => {
    Te.push(e + t), ue.set(et(e + t), Oo[e]);
  });
});
const zo = (e, t) => Te.indexOf(e) - Te.indexOf(t), To = new Set(Te), qt = (e) => To.has(e), Ao = (e, t) => {
  ze[t] && (t = ze[t]);
  const { transforms: n } = Ut(e);
  co(n, t), e.style.transform = Do(n);
}, Do = (e) => e.sort(zo).reduce(Lo, "").trim(), Lo = (e, t) => `${e} ${t}(var(${et(t)}))`, qe = (e) => e.startsWith("--"), mt = /* @__PURE__ */ new Set();
function Eo(e) {
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
const Me = (e, t) => document.createElement("div").animate(e, t), vt = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      Me({ opacity: [1] });
    } catch {
      return !1;
    }
    return !0;
  },
  finished: () => !!Me({ opacity: [0, 1] }, { duration: 1e-3 }).finished,
  linearEasing: () => {
    try {
      Me({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }
}, Pe = {}, ne = {};
for (const e in vt)
  ne[e] = () => (Pe[e] === void 0 && (Pe[e] = vt[e]()), Pe[e]);
const Co = 0.015, jo = (e, t) => {
  let n = "";
  const s = Math.round(t / Co);
  for (let r = 0; r < s; r++)
    n += e(Ze(0, s - 1, r)) + ", ";
  return n.substring(0, n.length - 2);
}, gt = (e, t) => le(e) ? ne.linearEasing() ? `linear(${jo(e, t)})` : U.easing : Ft(e) ? Mo(e) : e, Mo = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`;
function Po(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] === null && (e[n] = n ? e[n - 1] : t());
  return e;
}
const Io = (e) => Array.isArray(e) ? e : [e];
function Ae(e) {
  return ze[e] && (e = ze[e]), qt(e) ? et(e) : e;
}
const Se = {
  get: (e, t) => {
    t = Ae(t);
    let n = qe(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!n && n !== 0) {
      const s = ue.get(t);
      s && (n = s.initialValue);
    }
    return n;
  },
  set: (e, t, n) => {
    t = Ae(t), qe(t) ? e.style.setProperty(t, n) : e.style[t] = n;
  }
};
function Wt(e, t = !0) {
  if (!(!e || e.playState === "finished"))
    try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {
    }
}
function Kt(e, t) {
  var n;
  let s = (t == null ? void 0 : t.toDefaultUnit) || J;
  const r = e[e.length - 1];
  if (Nt(r)) {
    const o = ((n = r.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || "";
    o && (s = (i) => i + o);
  }
  return s;
}
function Ro() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function Bo(e, t, n, s = {}, r) {
  const o = Ro(), i = s.record !== !1 && o;
  let a, { duration: c = U.duration, delay: l = U.delay, endDelay: u = U.endDelay, repeat: f = U.repeat, easing: h = U.easing, persist: m = !1, direction: w, offset: $, allowWebkitAcceleration: D = !1 } = s;
  const _ = Ut(e), E = qt(t);
  let g = ne.waapi();
  E && Ao(e, t);
  const b = Ae(t), k = $o(_.values, b), S = ue.get(b);
  return Wt(k.animation, !(He(h) && k.generator) && s.record !== !1), () => {
    const C = () => {
      var L, pe;
      return (pe = (L = Se.get(e, b)) !== null && L !== void 0 ? L : S == null ? void 0 : S.initialValue) !== null && pe !== void 0 ? pe : 0;
    };
    let v = Po(Io(n), C);
    const I = Kt(v, S);
    if (He(h)) {
      const L = h.createAnimation(v, t !== "opacity", C, b, k);
      h = L.easing, v = L.keyframes || v, c = L.duration || c;
    }
    if (qe(b) && (ne.cssRegisterProperty() ? Eo(b) : g = !1), E && !ne.linearEasing() && (le(h) || se(h) && h.some(le)) && (g = !1), g) {
      S && (v = v.map((Q) => be(Q) ? S.toDefaultUnit(Q) : Q)), v.length === 1 && (!ne.partialKeyframes() || i) && v.unshift(C());
      const L = {
        delay: oe.ms(l),
        duration: oe.ms(c),
        endDelay: oe.ms(u),
        easing: se(h) ? void 0 : gt(h, c),
        direction: w,
        iterations: f + 1,
        fill: "both"
      };
      a = e.animate({
        [b]: v,
        offset: $,
        easing: se(h) ? h.map((Q) => gt(Q, c)) : void 0
      }, L), a.finished || (a.finished = new Promise((Q, Xt) => {
        a.onfinish = Q, a.oncancel = Xt;
      }));
      const pe = v[v.length - 1];
      a.finished.then(() => {
        m || (Se.set(e, b, pe), a.cancel());
      }).catch(Rt), D || (a.playbackRate = 1.000001);
    } else if (r && E)
      v = v.map((L) => typeof L == "string" ? parseFloat(L) : L), v.length === 1 && v.unshift(parseFloat(C())), a = new r((L) => {
        Se.set(e, b, I ? I(L) : L);
      }, v, Object.assign(Object.assign({}, s), {
        duration: c,
        easing: h
      }));
    else {
      const L = v[v.length - 1];
      Se.set(e, b, S && be(L) ? S.toDefaultUnit(L) : L);
    }
    return i && o(e, t, v, {
      duration: c,
      delay: l,
      easing: h,
      repeat: f,
      offset: $
    }, "motion-one"), k.setAnimation(a), a;
  };
}
const Fo = (e, t) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e)
);
function No(e, t) {
  var n;
  return typeof e == "string" ? t ? ((n = t[e]) !== null && n !== void 0 || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || []);
}
const Vo = (e) => e(), Gt = (e, t, n = U.duration) => new Proxy({
  animations: e.map(Vo).filter(Boolean),
  duration: n,
  options: t
}, Uo), Ho = (e) => e.animations[0], Uo = {
  get: (e, t) => {
    const n = Ho(e);
    switch (t) {
      case "duration":
        return e.duration;
      case "currentTime":
        return oe.s((n == null ? void 0 : n[t]) || 0);
      case "playbackRate":
      case "playState":
        return n == null ? void 0 : n[t];
      case "finished":
        return e.finished || (e.finished = Promise.all(e.animations.map(qo)).catch(Rt)), e.finished;
      case "stop":
        return () => {
          e.animations.forEach((s) => Wt(s));
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
}, qo = (e) => e.finished;
function Wo(e, t, n) {
  return le(e) ? e(t, n) : e;
}
function Ko(e) {
  return function(n, s, r = {}) {
    n = No(n);
    const o = n.length;
    Ue(!!o, "No valid element provided."), Ue(!!s, "No keyframes defined.");
    const i = [];
    for (let a = 0; a < o; a++) {
      const c = n[a];
      for (const l in s) {
        const u = Fo(r, l);
        u.delay = Wo(u.delay, a, o);
        const f = Bo(c, l, s[l], u, e);
        i.push(f);
      }
    }
    return Gt(
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
const Go = Ko(Ht), Jo = 5;
function Jt(e, t, n) {
  const s = Math.max(t - Jo, 0);
  return vo(n - e(s), t - s);
}
const ie = {
  stiffness: 100,
  damping: 10,
  mass: 1
}, Xo = (e = ie.stiffness, t = ie.damping, n = ie.mass) => t / (2 * Math.sqrt(e * n));
function Yo(e, t, n) {
  return e < t && n >= t || e > t && n <= t;
}
const Qo = ({ stiffness: e = ie.stiffness, damping: t = ie.damping, mass: n = ie.mass, from: s = 0, to: r = 1, velocity: o = 0, restSpeed: i = 2, restDistance: a = 0.5 } = {}) => {
  o = o ? oe.s(o) : 0;
  const c = {
    done: !1,
    hasReachedTarget: !1,
    current: s,
    target: r
  }, l = r - s, u = Math.sqrt(e / n) / 1e3, f = Xo(e, t, n);
  let h;
  if (f < 1) {
    const m = u * Math.sqrt(1 - f * f);
    h = (w) => r - Math.exp(-f * u * w) * ((-o + f * u * l) / m * Math.sin(m * w) + l * Math.cos(m * w));
  } else
    h = (m) => r - Math.exp(-u * m) * (l + (-o + u * l) * m);
  return (m) => {
    c.current = h(m);
    const w = m === 0 ? o : Jt(h, m, c.current), $ = Math.abs(w) <= i, D = Math.abs(r - c.current) <= a;
    return c.done = $ && D, c.hasReachedTarget = Yo(s, r, c.current), c;
  };
}, Ie = 10, Zo = 1e4;
function ei(e, t = J) {
  let n, s = Ie, r = e(0);
  const o = [t(r.current)];
  for (; !r.done && s < Zo; )
    r = e(s), o.push(t(r.done ? r.target : r.current)), n === void 0 && r.hasReachedTarget && (n = s), s += Ie;
  const i = s - Ie;
  return o.length === 1 && o.push(r.current), {
    keyframes: o,
    duration: i / 1e3,
    overshootDuration: (n ?? i) / 1e3
  };
}
function bt(e) {
  return be(e) && !isNaN(e);
}
function Re(e) {
  return Nt(e) ? parseFloat(e) : e;
}
function ti(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (n = {}) => {
    const s = /* @__PURE__ */ new Map(), r = (i = 0, a = 100, c = 0, l = !1) => {
      const u = `${i}-${a}-${c}-${l}`;
      return s.has(u) || s.set(u, e(Object.assign({
        from: i,
        to: a,
        velocity: c,
        restSpeed: l ? 0.05 : 2,
        restDistance: l ? 0.01 : 0.5
      }, n))), s.get(u);
    }, o = (i, a) => (t.has(i) || t.set(i, ei(i, a)), t.get(i));
    return {
      createAnimation: (i, a = !0, c, l, u) => {
        let f, h, m, w = 0, $ = J;
        const D = i.length;
        if (a) {
          $ = Kt(i, l ? ue.get(Ae(l)) : void 0);
          const _ = i[D - 1];
          if (m = Re(_), D > 1 && i[0] !== null)
            h = Re(i[0]);
          else {
            const E = u == null ? void 0 : u.generator;
            if (E) {
              const { animation: g, generatorStartTime: b } = u, k = (g == null ? void 0 : g.startTime) || b || 0, S = (g == null ? void 0 : g.currentTime) || performance.now() - k, C = E(S).current;
              h = C, w = Jt((v) => E(v).current, S, C);
            } else
              c && (h = Re(c()));
          }
        }
        if (bt(h) && bt(m)) {
          const _ = r(h, m, w, l == null ? void 0 : l.includes("scale"));
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
const Be = ti(Qo);
function ni(e, t = {}) {
  return Gt([
    () => {
      const n = new Ht(e, [0, 1], t);
      return n.finished.catch(() => {
      }), n;
    }
  ], t, t.duration);
}
function me(e, t, n) {
  return (le(e) ? ni : Go)(e, t, n);
}
const ri = {
  __name: "CollapseTransition",
  setup(e) {
    function t(s, r) {
      const { height: o } = s.getBoundingClientRect();
      s.style.height = "0px", me(s, { height: `${o}px` }, { duration: 0.3 }).finished.then(
        r
      );
    }
    function n(s, r) {
      me(s, { height: "0px" }, { duration: 0.2 }).finished.then(r);
    }
    return (s, r) => (d(), R(ye, {
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
    const t = j(() => sn().default());
    return (n, s) => (d(), y("div", si, [
      (d(!0), y(
        Y,
        null,
        Ge(t.value, (r, o) => (d(), y(
          Y,
          null,
          [
            (d(), R(X(r), {
              class: B({
                "dark:text-zinc-200 text-zinc-700": o === t.value.length - 1
              })
            }, null, 8, ["class"])),
            o < t.value.length - 1 ? (d(), y("div", oi, "/")) : A("v-if", !0)
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
class hi {
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
      re.dialog = new hi(e, t, n);
    });
  }
}), { info: Gi, confirm: Ji, reset: ke } = re, q = j(() => re.dialog), mi = {
  key: 0,
  class: "absolute inset-0 z-[60] bg-black/40"
}, vi = {
  key: 0,
  class: "absolute inset-0 z-[61] flex items-center justify-center"
}, gi = {
  __name: "Dialogs",
  setup(e) {
    return (t, n) => (d(), y(
      Y,
      null,
      [
        N(Mt, null, {
          default: z(() => [
            T(q) ? (d(), y("div", mi)) : A("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }),
        N(Ye, null, {
          default: z(() => [
            T(q) ? (d(), y("div", vi, [
              N(
                er,
                {
                  class: "mx-6 w-full max-w-lg",
                  "footer-justify": "end"
                },
                on({
                  header: z(() => [
                    N(sr, null, {
                      default: z(() => {
                        var s, r;
                        return [
                          ee(
                            Z((r = (s = T(q)) == null ? void 0 : s.data) == null ? void 0 : r.title),
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
                    T(q).type === "info" ? (d(), R(rt, {
                      key: 0,
                      onClick: n[1] || (n[1] = (s) => {
                        var r;
                        (r = T(q)) == null || r.resolve(), T(ke)();
                      })
                    }, {
                      default: z(() => [
                        ee("Ok")
                      ]),
                      _: 1
                      /* STABLE */
                    })) : T(q).type === "confirm" ? (d(), y(
                      Y,
                      { key: 1 },
                      [
                        N(Jn, {
                          onClick: n[2] || (n[2] = (s) => {
                            var r;
                            (r = T(q)) == null || r.resolve(!1), T(ke)();
                          })
                        }, {
                          default: z(() => [
                            ee("No")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        N(rt, {
                          onClick: n[3] || (n[3] = (s) => {
                            var r;
                            (r = T(q)) == null || r.resolve(!0), T(ke)();
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
                    var s, r;
                    return [
                      p(
                        "p",
                        null,
                        Z((r = (s = T(q)) == null ? void 0 : s.data) == null ? void 0 : r.subtitle),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, [
                  T(q).type !== "info" ? {
                    name: "extra",
                    fn: z(() => [
                      N(Le, {
                        size: "uniform",
                        onClick: n[0] || (n[0] = (s) => {
                          var r;
                          (r = T(q)) == null || r.resolve(!1), T(ke)();
                        })
                      }, {
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
    return t.key || (t.key = bi()), V.modals.push(te(new yi(an(e), t))), document.body.classList.add("overflow-y-hidden"), t.key;
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
          class: B(["fixed inset-0 z-[58] flex max-w-full justify-center overflow-y-auto", T(V).all.length ? "" : "pointer-events-none"]),
          "aria-labelledby": "modal-title",
          role: "dialog",
          "aria-modal": "true"
        },
        [
          N(Mt, null, {
            default: z(() => [
              T(V).all.length ? (d(), y("div", _i)) : A("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          p("div", wi, [
            N(Ye, null, {
              default: z(() => [
                (d(!0), y(
                  Y,
                  null,
                  Ge(T(V).all, (r, o) => (d(), y("div", {
                    key: `modal${o}`,
                    class: "relative w-full rounded-lg bg-white p-4 shadow-xl transition-all dark:bg-zinc-900 dark:text-white sm:my-8 sm:p-6"
                  }, [
                    p("div", xi, [
                      p("button", {
                        type: "button",
                        class: "rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                        onClick: s[0] || (s[0] = (i) => T(V).pop())
                      }, [
                        $i,
                        A(" Heroicon name: outline/x "),
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
  mounted: (e, { modifiers: t }) => {
    const n = te({ width: 0, height: 0 }), s = M(!1), r = t.height ? "height" : t.width ? "width" : "both";
    Ns(e, (o) => {
      if (s.value)
        return;
      const [i] = o, { width: a, height: c } = i.contentRect;
      if (r === "height") {
        n.height !== c && (s.value = !0, e.style.height = `${n.height}px`, n.height = c, me(
          e,
          { height: `${c}px` },
          {
            easing: Be({ damping: 50, stiffness: 250 })
            // duration: isShrinking ? 0.175 : 0.35,
            // ease: isShrinking ? "ease-in" : "ease-out",
          }
        ).finished.then(() => {
          s.value = !1, e.style.height = null;
        }));
        return;
      }
      if (r === "width") {
        n.width !== a && (s.value = !0, e.style.width = `${n.width}px`, n.width = a, me(
          e,
          { width: `${a}px` },
          {
            easing: Be({ damping: 50, stiffness: 250 })
            // duration: isShrinking ? 0.175 : 0.35,
            // ease: isShrinking ? "ease-in" : "ease-out",
          }
        ).finished.then(() => {
          s.value = !1, e.style.width = null;
        }));
        return;
      }
      (n.width !== a || n.height !== c) && (s.value = !0, e.style.height = `${n.height}px`, e.style.width = `${n.width}px`, n.width = a, n.height = c, me(
        e,
        { height: `${c}px`, width: `${a}px` },
        {
          easing: Be({ damping: 50, stiffness: 250 })
          // duration: isShrinking ? 0.175 : 0.35,
          // ease: isShrinking ? "ease-in" : "ease-out",
        }
      ).finished.then(() => {
        s.value = !1, e.style.height = null, e.style.width = null;
      }));
    });
  }
};
export {
  Ti as AlertAction,
  Le as BaseButton,
  Ki as BreadcrumbItem,
  Wi as Breadcrumbs,
  er as Card,
  sr as CardTitle,
  qi as CollapseTransition,
  na as Container,
  Ai as DangerAlert,
  Ci as DangerButton,
  Xi as Dialogs,
  ji as Dropdown,
  Mi as DropdownLink,
  Ye as FadeScaleTransition,
  Mt as FadeTransition,
  Pi as HH1,
  Ii as HH2,
  Ri as HH3,
  Di as InfoAlert,
  Bi as Input,
  xt as InputLayout,
  ta as Modals,
  rt as PrimaryButton,
  Jn as SecondaryButton,
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
  ke as resetDialog,
  ra as vAutoResize
};
