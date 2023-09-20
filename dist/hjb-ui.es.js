import { openBlock as c, createBlock as M, resolveDynamicComponent as Y, withCtx as w, createTextVNode as J, createElementVNode as d, createElementBlock as f, normalizeClass as P, renderSlot as p, createCommentVNode as x, onMounted as te, onUnmounted as Te, computed as A, ref as j, withDirectives as $e, vShow as Se, createVNode as E, Transition as oe, toDisplayString as q, normalizeProps as Ee, guardReactiveProps as Pe, mergeProps as Qe, cloneVNode as Xe, h as he, Fragment as Q, inject as ge, provide as ye, watchEffect as ce, defineComponent as X, watch as de, nextTick as K, toRaw as H, unref as O, renderList as Be, reactive as ee, TransitionGroup as Ze, getCurrentScope as et, onScopeDispose as tt, readonly as nt, shallowRef as ot, createSlots as rt } from "vue";
const y = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, st = /* @__PURE__ */ d(
  "span",
  { "aria-hidden": "true" },
  "→",
  -1
  /* HOISTED */
), it = {
  __name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, o) => (c(), M(Y(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: w(() => [
        J("Details "),
        st
      ]),
      _: 1
      /* STABLE */
    }));
  }
}, jr = /* @__PURE__ */ y(it, [["__file", "/home/harry/Sites/ui/src/components/Alerts/AlertAction.vue"]]), lt = {}, at = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, ut = { class: "flex" }, ct = /* @__PURE__ */ d(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ x(" Heroicon name: solid/x-circle "),
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
), dt = { class: "ml-3 flex-1" }, ft = { class: "md:flex md:justify-between" }, pt = { class: "text-sm text-red-800 dark:text-red-200" }, mt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function vt(e, t) {
  return c(), f("div", at, [
    d("div", ut, [
      ct,
      d("div", dt, [
        e.$slots.title ? (c(), f(
          "h3",
          {
            key: 0,
            class: P(["text-sm font-medium text-red-800 dark:text-red-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            p(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : x("v-if", !0),
        d("div", ft, [
          d("p", pt, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), f("p", mt, [
            p(e.$slots, "action")
          ])) : x("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Ir = /* @__PURE__ */ y(lt, [["render", vt], ["__file", "/home/harry/Sites/ui/src/components/Alerts/DangerAlert.vue"]]), ht = {}, bt = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, gt = { class: "flex" }, yt = /* @__PURE__ */ d(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ x(" Heroicon name: solid/information-circle "),
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
), _t = { class: "ml-3 flex-1" }, wt = { class: "md:flex md:justify-between" }, xt = { class: "text-sm text-blue-800 dark:text-blue-200" }, $t = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function St(e, t) {
  return c(), f("div", bt, [
    d("div", gt, [
      yt,
      d("div", _t, [
        e.$slots.title ? (c(), f(
          "h3",
          {
            key: 0,
            class: P(["text-sm font-medium text-blue-800 dark:text-blue-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            p(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : x("v-if", !0),
        d("div", wt, [
          d("p", xt, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), f("p", $t, [
            p(e.$slots, "action")
          ])) : x("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Tr = /* @__PURE__ */ y(ht, [["render", St], ["__file", "/home/harry/Sites/ui/src/components/Alerts/InfoAlert.vue"]]), kt = {}, zt = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, Ot = { class: "flex" }, Lt = /* @__PURE__ */ d(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ x(" Heroicon name: solid/check-circle "),
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
), Dt = { class: "ml-3 flex-1" }, At = { class: "md:flex md:justify-between" }, Ct = { class: "text-sm text-green-800 dark:text-green-200" }, jt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function It(e, t) {
  return c(), f("div", zt, [
    d("div", Ot, [
      Lt,
      d("div", Dt, [
        e.$slots.title ? (c(), f(
          "h3",
          {
            key: 0,
            class: P(["text-sm font-medium text-green-800 dark:text-green-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            p(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : x("v-if", !0),
        d("div", At, [
          d("p", Ct, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), f("p", jt, [
            p(e.$slots, "action")
          ])) : x("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Er = /* @__PURE__ */ y(kt, [["render", It], ["__file", "/home/harry/Sites/ui/src/components/Alerts/SuccessAlert.vue"]]), Tt = {}, Et = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, Pt = { class: "flex" }, Bt = /* @__PURE__ */ d(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ x(" Heroicon name: solid/exclamation "),
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
), Nt = { class: "ml-3 flex-1" }, Ft = { class: "md:flex md:justify-between" }, Mt = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, Rt = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Ht(e, t) {
  return c(), f("div", Et, [
    d("div", Pt, [
      Bt,
      d("div", Nt, [
        e.$slots.title ? (c(), f(
          "h3",
          {
            key: 0,
            class: P(["text-sm font-medium text-yellow-800 dark:text-yellow-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            p(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : x("v-if", !0),
        d("div", Ft, [
          d("p", Mt, [
            p(e.$slots, "default")
          ]),
          e.$slots.action ? (c(), f("p", Rt, [
            p(e.$slots, "action")
          ])) : x("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Pr = /* @__PURE__ */ y(Tt, [["render", Ht], ["__file", "/home/harry/Sites/ui/src/components/Alerts/WarningAlert.vue"]]), Vt = {
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
    return (t, o) => (c(), M(Y(e.as), {
      class: P(["inline-flex items-center border border-transparent rounded-md font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2", {
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
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, fe = /* @__PURE__ */ y(Vt, [["__file", "/home/harry/Sites/ui/src/components/Buttons/BaseButton.vue"]]), Ut = {
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (c(), M(fe, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, ke = /* @__PURE__ */ y(Ut, [["__file", "/home/harry/Sites/ui/src/components/Buttons/PrimaryButton.vue"]]), Wt = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, o) => (c(), M(fe, {
      type: e.type,
      class: "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
    }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["type"]));
  }
}, Kt = /* @__PURE__ */ y(Wt, [["__file", "/home/harry/Sites/ui/src/components/Buttons/SecondaryButton.vue"]]), qt = {
  __name: "DangerButton",
  setup(e) {
    return (t, o) => (c(), M(fe, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, Br = /* @__PURE__ */ y(qt, [["__file", "/home/harry/Sites/ui/src/components/Buttons/DangerButton.vue"]]), Jt = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, Gt = { key: 0 }, Yt = {
  __name: "Card",
  props: {
    flush: Boolean,
    footerJustify: {
      type: String,
      default: "start"
    }
  },
  setup(e) {
    return (t, o) => (c(), f(
      "div",
      {
        class: P(["bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-zinc-900 dark:text-zinc-100", {
          "p-6": !e.flush
        }])
      },
      [
        t.$slots.header || t.$slots.extra ? (c(), f("div", Jt, [
          d("div", null, [
            p(t.$slots, "header")
          ]),
          t.$slots.extra ? (c(), f("div", Gt, [
            p(t.$slots, "extra")
          ])) : x("v-if", !0)
        ])) : x("v-if", !0),
        p(t.$slots, "default"),
        t.$slots.footer ? (c(), f(
          "div",
          {
            key: 1,
            class: P(["mt-6 flex gap-2", {
              "justify-end": e.footerJustify === "end",
              "justify-between": e.footerJustify === "between"
            }])
          },
          [
            p(t.$slots, "footer")
          ],
          2
          /* CLASS */
        )) : x("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}, Qt = /* @__PURE__ */ y(Yt, [["__file", "/home/harry/Sites/ui/src/components/Cards/Card.vue"]]), Xt = {}, Zt = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function en(e, t) {
  return c(), f("h3", Zt, [
    p(e.$slots, "default")
  ]);
}
const tn = /* @__PURE__ */ y(Xt, [["render", en], ["__file", "/home/harry/Sites/ui/src/components/Cards/CardTitle.vue"]]), nn = { class: "relative" }, on = {
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
    const t = e, o = (i) => {
      s.value && i.key === "Escape" && (s.value = !1);
    };
    te(() => document.addEventListener("keydown", o)), Te(() => document.removeEventListener("keydown", o));
    const r = A(() => ({
      48: "w-48"
    })[t.width.toString()]), n = A(() => {
      const i = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${i}-left left-0` : t.align === "right" ? `origin-${i}-right right-0` : `origin-${i}`;
    }), s = j(!1);
    return (i, u) => (c(), f("div", nn, [
      d("div", {
        onClick: u[0] || (u[0] = (m) => s.value = !s.value)
      }, [
        p(i.$slots, "trigger")
      ]),
      x(" Full Screen Dropdown Overlay "),
      $e(d(
        "div",
        {
          class: "fixed inset-0 z-40",
          onClick: u[1] || (u[1] = (m) => s.value = !1)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [Se, s.value]
      ]),
      E(oe, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        persisted: ""
      }, {
        default: w(() => [
          $e(d(
            "div",
            {
              class: P(["absolute z-50 mt-2 rounded-md shadow-lg", [r.value, n.value, t.bottom ? "bottom-full" : ""]]),
              style: { display: "none" },
              onClick: u[2] || (u[2] = (m) => s.value = !1)
            },
            [
              d(
                "div",
                {
                  class: P(["rounded-md ring-1 ring-black ring-opacity-5", e.contentClasses])
                },
                [
                  p(i.$slots, "content")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ), [
            [Se, s.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]));
  }
}, Nr = /* @__PURE__ */ y(on, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/Dropdown.vue"]]), rn = {
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
    return (t, o) => (c(), M(Y(e.as), {
      href: e.href,
      class: "block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
    }, {
      default: w(() => [
        p(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["href"]));
  }
}, Fr = /* @__PURE__ */ y(rn, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/DropdownLink.vue"]]), sn = {}, ln = { class: "font-semibold text-3xl leading-tight" };
function an(e, t) {
  return c(), f("h1", ln, [
    p(e.$slots, "default")
  ]);
}
const Mr = /* @__PURE__ */ y(sn, [["render", an], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH1.vue"]]), un = {}, cn = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function dn(e, t) {
  return c(), f("h2", cn, [
    p(e.$slots, "default")
  ]);
}
const Rr = /* @__PURE__ */ y(un, [["render", dn], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH2.vue"]]), fn = {}, pn = { class: "text-xl tracking-tight dark:text-white" };
function mn(e, t) {
  return c(), f("h2", pn, [
    p(e.$slots, "default")
  ]);
}
const Hr = /* @__PURE__ */ y(fn, [["render", mn], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH3.vue"]]), ae = {
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
}, vn = ["for"], hn = { class: "relative mt-1" }, bn = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, gn = /* @__PURE__ */ d(
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
), yn = ["id"], _n = ["id"], wn = {
  __name: "InputLayout",
  props: {
    ...ae
  },
  setup(e) {
    return (t, o) => (c(), f("div", null, [
      t.label ? (c(), f("label", {
        key: 0,
        for: t.id,
        class: "block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      }, q(t.label), 9, vn)) : x("v-if", !0),
      d("div", hn, [
        p(t.$slots, "default"),
        t.error ? (c(), f("div", bn, [
          x(" Heroicon name: solid/exclamation-circle "),
          gn
        ])) : x("v-if", !0)
      ]),
      t.helpText && !t.error ? (c(), f("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, q(t.helpText), 9, yn)) : t.error ? (c(), f("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, q(t.error), 9, _n)) : x("v-if", !0)
    ]));
  }
}, Ne = /* @__PURE__ */ y(wn, [["__file", "/home/harry/Sites/ui/src/components/Inputs/InputLayout.vue"]]), xn = ["name", "id", "aria-describedby"], $n = {
  inheritAttrs: !1
}, Sn = /* @__PURE__ */ Object.assign($n, {
  __name: "Input",
  props: {
    ...ae
  },
  setup(e) {
    return (t, o) => (c(), M(
      Ne,
      Ee(Pe(t.$props)),
      {
        default: w(() => [
          d("input", Qe(t.$attrs, {
            name: t.name,
            id: t.id,
            class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
              "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
            }],
            "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
          }), null, 16, xn)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), Vr = /* @__PURE__ */ y(Sn, [["__file", "/home/harry/Sites/ui/src/components/Inputs/Input.vue"]]);
function V(e, t, ...o) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...o) : n;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, V), r;
}
var be = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(be || {}), kn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(kn || {});
function Z({ visible: e = !0, features: t = 0, ourProps: o, theirProps: r, ...n }) {
  var s;
  let i = Me(r, o), u = Object.assign(n, { props: i });
  if (e || t & 2 && i.static)
    return me(u);
  if (t & 1) {
    let m = (s = i.unmount) == null || s ? 0 : 1;
    return V(m, { 0() {
      return null;
    }, 1() {
      return me({ ...n, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return me(u);
}
function me({ props: e, attrs: t, slots: o, slot: r, name: n }) {
  var s, i;
  let { as: u, ...m } = Re(e, ["unmount", "static"]), l = (s = o.default) == null ? void 0 : s.call(o, r), a = {};
  if (r) {
    let _ = !1, D = [];
    for (let [z, k] of Object.entries(r))
      typeof k == "boolean" && (_ = !0), k === !0 && D.push(z);
    _ && (a["data-headlessui-state"] = D.join(" "));
  }
  if (u === "template") {
    if (l = Fe(l ?? []), Object.keys(m).length > 0 || Object.keys(t).length > 0) {
      let [_, ...D] = l ?? [];
      if (!On(_) || D.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(m).concat(Object.keys(t)).map(($) => $.trim()).filter(($, B, h) => h.indexOf($) === B).sort(($, B) => $.localeCompare(B)).map(($) => `  - ${$}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(($) => `  - ${$}`).join(`
`)].join(`
`));
      let z = Me((i = _.props) != null ? i : {}, m), k = Xe(_, z);
      for (let $ in z)
        $.startsWith("on") && (k.props || (k.props = {}), k.props[$] = z[$]);
      return k;
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return he(u, Object.assign({}, m, a), { default: () => l });
}
function Fe(e) {
  return e.flatMap((t) => t.type === Q ? Fe(t.children) : [t]);
}
function Me(...e) {
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
      let i = o[r];
      for (let u of i) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...s);
      }
    } });
  return t;
}
function zn(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Re(e, t = []) {
  let o = Object.assign({}, e);
  for (let r of t)
    r in o && delete o[r];
  return o;
}
function On(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ln = 0;
function Dn() {
  return ++Ln;
}
function pe() {
  return Dn();
}
var T = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(T || {});
function An(e) {
  throw new Error("Unexpected object: " + e);
}
var R = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(R || {});
function Cn(e, t) {
  let o = t.resolveItems();
  if (o.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), n = r ?? -1, s = (() => {
    switch (e.focus) {
      case 0:
        return o.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = o.slice().reverse().findIndex((u, m, l) => n !== -1 && l.length - m - 1 >= n ? !1 : !t.resolveDisabled(u));
        return i === -1 ? i : o.length - 1 - i;
      }
      case 2:
        return o.findIndex((i, u) => u <= n ? !1 : !t.resolveDisabled(i));
      case 3: {
        let i = o.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return i === -1 ? i : o.length - 1 - i;
      }
      case 4:
        return o.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        An(e);
    }
  })();
  return s === -1 ? r : s;
}
function C(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let He = Symbol("Context");
var ne = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ne || {});
function jn() {
  return ge(He, null);
}
function In(e) {
  ye(He, e);
}
function ze(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Tn(e, t) {
  let o = j(ze(e.value.type, e.value.as));
  return te(() => {
    o.value = ze(e.value.type, e.value.as);
  }), ce(() => {
    var r;
    o.value || C(t) && C(t) instanceof HTMLButtonElement && !((r = C(t)) != null && r.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var En = Object.defineProperty, Pn = (e, t, o) => t in e ? En(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Oe = (e, t, o) => (Pn(e, typeof t != "symbol" ? t + "" : t, o), o);
class Bn {
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
let _e = new Bn();
function Nn(e) {
  if (_e.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = C(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Le = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Fn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Fn || {}), Mn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Mn || {}), Rn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Rn || {}), we = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(we || {});
function Ve(e, t = 0) {
  var o;
  return e === ((o = Nn(e)) == null ? void 0 : o.body) ? !1 : V(t, { 0() {
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
var Hn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Hn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Vn(e, t = (o) => o) {
  return e.slice().sort((o, r) => {
    let n = t(o), s = t(r);
    if (n === null || s === null)
      return 0;
    let i = n.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function se(e, t, o) {
  _e.isServer || ce((r) => {
    document.addEventListener(e, t, o), r(() => document.removeEventListener(e, t, o));
  });
}
function Un(e, t, o) {
  _e.isServer || ce((r) => {
    window.addEventListener(e, t, o), r(() => window.removeEventListener(e, t, o));
  });
}
function Wn(e, t, o = A(() => !0)) {
  function r(s, i) {
    if (!o.value || s.defaultPrevented)
      return;
    let u = i(s);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let m = function l(a) {
      return typeof a == "function" ? l(a()) : Array.isArray(a) || a instanceof Set ? a : [a];
    }(e);
    for (let l of m) {
      if (l === null)
        continue;
      let a = l instanceof HTMLElement ? l : C(l);
      if (a != null && a.contains(u) || s.composed && s.composedPath().includes(a))
        return;
    }
    return !Ve(u, we.Loose) && u.tabIndex !== -1 && s.preventDefault(), t(s, u);
  }
  let n = j(null);
  se("pointerdown", (s) => {
    var i, u;
    o.value && (n.value = ((u = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), se("mousedown", (s) => {
    var i, u;
    o.value && (n.value = ((u = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), se("click", (s) => {
    n.value && (r(s, () => n.value), n.value = null);
  }, !0), se("touchend", (s) => r(s, () => s.target instanceof HTMLElement ? s.target : null), !0), Un("blur", (s) => r(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ue = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ue || {});
let Kn = X({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
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
function qn(e, t, o) {
  let r = j(o == null ? void 0 : o.value), n = A(() => e.value !== void 0);
  return [A(() => n.value ? e.value : r.value), function(s) {
    return n.value || (r.value = s), t == null ? void 0 : t(s);
  }];
}
function De(e) {
  return [e.screenX, e.screenY];
}
function Jn() {
  let e = j([-1, -1]);
  return { wasMoved(t) {
    let o = De(t);
    return e.value[0] === o[0] && e.value[1] === o[1] ? !1 : (e.value = o, !0);
  }, update(t) {
    e.value = De(t);
  } };
}
let Ae = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ce(e) {
  var t, o;
  let r = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return r;
  let s = !1;
  for (let u of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), s = !0;
  let i = s ? (o = n.innerText) != null ? o : "" : r;
  return Ae.test(i) && (i = i.replace(Ae, "")), i;
}
function Gn(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let o = e.getAttribute("aria-labelledby");
  if (o) {
    let r = o.split(" ").map((n) => {
      let s = document.getElementById(n);
      if (s) {
        let i = s.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : Ce(s).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0)
      return r.join(", ");
  }
  return Ce(e).trim();
}
function Yn(e) {
  let t = j(""), o = j("");
  return () => {
    let r = C(e);
    if (!r)
      return "";
    let n = r.innerText;
    if (t.value === n)
      return o.value;
    let s = Gn(r).trim().toLowerCase();
    return t.value = n, o.value = s, s;
  };
}
function Qn(e, t) {
  return e === t;
}
var Xn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Xn || {}), Zn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Zn || {}), eo = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(eo || {});
function to(e) {
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
let no = X({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Qn }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: o, emit: r }) {
  let n = j(1), s = j(null), i = j(null), u = j(null), m = j([]), l = j(""), a = j(null), _ = j(1);
  function D(v = (b) => b) {
    let b = a.value !== null ? m.value[a.value] : null, S = Vn(v(m.value.slice()), (I) => C(I.dataRef.domRef)), L = b ? S.indexOf(b) : null;
    return L === -1 && (L = null), { options: S, activeOptionIndex: L };
  }
  let z = A(() => e.multiple ? 1 : 0), [k, $] = qn(A(() => e.modelValue), (v) => r("update:modelValue", v), A(() => e.defaultValue)), B = A(() => k.value === void 0 ? V(z.value, { 1: [], 0: void 0 }) : k.value), h = { listboxState: n, value: B, mode: z, compare(v, b) {
    if (typeof e.by == "string") {
      let S = e.by;
      return (v == null ? void 0 : v[S]) === (b == null ? void 0 : b[S]);
    }
    return e.by(v, b);
  }, orientation: A(() => e.horizontal ? "horizontal" : "vertical"), labelRef: s, buttonRef: i, optionsRef: u, disabled: A(() => e.disabled), options: m, searchQuery: l, activeOptionIndex: a, activationTrigger: _, closeListbox() {
    e.disabled || n.value !== 1 && (n.value = 1, a.value = null);
  }, openListbox() {
    e.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(v, b, S) {
    if (e.disabled || n.value === 1)
      return;
    let L = D(), I = Cn(v === R.Specific ? { focus: R.Specific, id: b } : { focus: v }, { resolveItems: () => L.options, resolveActiveIndex: () => L.activeOptionIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    l.value = "", a.value = I, _.value = S ?? 1, m.value = L.options;
  }, search(v) {
    if (e.disabled || n.value === 1)
      return;
    let b = l.value !== "" ? 0 : 1;
    l.value += v.toLowerCase();
    let S = (a.value !== null ? m.value.slice(a.value + b).concat(m.value.slice(0, a.value + b)) : m.value).find((I) => I.dataRef.textValue.startsWith(l.value) && !I.dataRef.disabled), L = S ? m.value.indexOf(S) : -1;
    L === -1 || L === a.value || (a.value = L, _.value = 1);
  }, clearSearch() {
    e.disabled || n.value !== 1 && l.value !== "" && (l.value = "");
  }, registerOption(v, b) {
    let S = D((L) => [...L, { id: v, dataRef: b }]);
    m.value = S.options, a.value = S.activeOptionIndex;
  }, unregisterOption(v) {
    let b = D((S) => {
      let L = S.findIndex((I) => I.id === v);
      return L !== -1 && S.splice(L, 1), S;
    });
    m.value = b.options, a.value = b.activeOptionIndex, _.value = 1;
  }, theirOnChange(v) {
    e.disabled || $(v);
  }, select(v) {
    e.disabled || $(V(z.value, { 0: () => v, 1: () => {
      let b = H(h.value.value).slice(), S = H(v), L = b.findIndex((I) => h.compare(S, H(I)));
      return L === -1 ? b.push(S) : b.splice(L, 1), b;
    } }));
  } };
  Wn([i, u], (v, b) => {
    var S;
    h.closeListbox(), Ve(b, we.Loose) || (v.preventDefault(), (S = C(i)) == null || S.focus());
  }, A(() => n.value === 0)), ye(Je, h), In(A(() => V(n.value, { 0: ne.Open, 1: ne.Closed })));
  let N = A(() => {
    var v;
    return (v = C(i)) == null ? void 0 : v.closest("form");
  });
  return te(() => {
    de([N], () => {
      if (!N.value || e.defaultValue === void 0)
        return;
      function v() {
        h.theirOnChange(e.defaultValue);
      }
      return N.value.addEventListener("reset", v), () => {
        var b;
        (b = N.value) == null || b.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: v, modelValue: b, disabled: S, form: L, ...I } = e, g = { open: n.value === 0, disabled: S, value: B.value };
    return he(Q, [...v != null && B.value != null ? We({ [v]: B.value }).map(([F, W]) => he(Kn, zn({ features: Ue.Hidden, key: F, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: L, name: F, value: W }))) : [], Z({ ourProps: {}, theirProps: { ...o, ...Re(I, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: g, slots: t, attrs: o, name: "Listbox" })]);
  };
} });
X({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let r = re("ListboxLabel");
  function n() {
    var s;
    (s = C(r.buttonRef)) == null || s.focus({ preventScroll: !0 });
  }
  return () => {
    let s = { open: r.listboxState.value === 0, disabled: r.disabled.value }, { id: i, ...u } = e, m = { id: i, ref: r.labelRef, onClick: n };
    return Z({ ourProps: m, theirProps: u, slot: s, attrs: t, slots: o, name: "ListboxLabel" });
  };
} });
let oo = X({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: r }) {
  let n = re("ListboxButton");
  r({ el: n.buttonRef, $el: n.buttonRef });
  function s(l) {
    switch (l.key) {
      case T.Space:
      case T.Enter:
      case T.ArrowDown:
        l.preventDefault(), n.openListbox(), K(() => {
          var a;
          (a = C(n.optionsRef)) == null || a.focus({ preventScroll: !0 }), n.value.value || n.goToOption(R.First);
        });
        break;
      case T.ArrowUp:
        l.preventDefault(), n.openListbox(), K(() => {
          var a;
          (a = C(n.optionsRef)) == null || a.focus({ preventScroll: !0 }), n.value.value || n.goToOption(R.Last);
        });
        break;
    }
  }
  function i(l) {
    switch (l.key) {
      case T.Space:
        l.preventDefault();
        break;
    }
  }
  function u(l) {
    n.disabled.value || (n.listboxState.value === 0 ? (n.closeListbox(), K(() => {
      var a;
      return (a = C(n.buttonRef)) == null ? void 0 : a.focus({ preventScroll: !0 });
    })) : (l.preventDefault(), n.openListbox(), to(() => {
      var a;
      return (a = C(n.optionsRef)) == null ? void 0 : a.focus({ preventScroll: !0 });
    })));
  }
  let m = Tn(A(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var l, a;
    let _ = { open: n.listboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: D, ...z } = e, k = { ref: n.buttonRef, id: D, type: m.value, "aria-haspopup": "listbox", "aria-controls": (l = C(n.optionsRef)) == null ? void 0 : l.id, "aria-expanded": n.listboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(a = C(n.labelRef)) == null ? void 0 : a.id, D].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: s, onKeyup: i, onClick: u };
    return Z({ ourProps: k, theirProps: z, slot: _, attrs: t, slots: o, name: "ListboxButton" });
  };
} }), ro = X({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: r }) {
  let n = re("ListboxOptions"), s = j(null);
  r({ el: n.optionsRef, $el: n.optionsRef });
  function i(l) {
    switch (s.value && clearTimeout(s.value), l.key) {
      case T.Space:
        if (n.searchQuery.value !== "")
          return l.preventDefault(), l.stopPropagation(), n.search(l.key);
      case T.Enter:
        if (l.preventDefault(), l.stopPropagation(), n.activeOptionIndex.value !== null) {
          let a = n.options.value[n.activeOptionIndex.value];
          n.select(a.dataRef.value);
        }
        n.mode.value === 0 && (n.closeListbox(), K(() => {
          var a;
          return (a = C(n.buttonRef)) == null ? void 0 : a.focus({ preventScroll: !0 });
        }));
        break;
      case V(n.orientation.value, { vertical: T.ArrowDown, horizontal: T.ArrowRight }):
        return l.preventDefault(), l.stopPropagation(), n.goToOption(R.Next);
      case V(n.orientation.value, { vertical: T.ArrowUp, horizontal: T.ArrowLeft }):
        return l.preventDefault(), l.stopPropagation(), n.goToOption(R.Previous);
      case T.Home:
      case T.PageUp:
        return l.preventDefault(), l.stopPropagation(), n.goToOption(R.First);
      case T.End:
      case T.PageDown:
        return l.preventDefault(), l.stopPropagation(), n.goToOption(R.Last);
      case T.Escape:
        l.preventDefault(), l.stopPropagation(), n.closeListbox(), K(() => {
          var a;
          return (a = C(n.buttonRef)) == null ? void 0 : a.focus({ preventScroll: !0 });
        });
        break;
      case T.Tab:
        l.preventDefault(), l.stopPropagation();
        break;
      default:
        l.key.length === 1 && (n.search(l.key), s.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  let u = jn(), m = A(() => u !== null ? (u.value & ne.Open) === ne.Open : n.listboxState.value === 0);
  return () => {
    var l, a, _, D;
    let z = { open: n.listboxState.value === 0 }, { id: k, ...$ } = e, B = { "aria-activedescendant": n.activeOptionIndex.value === null || (l = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : l.id, "aria-multiselectable": n.mode.value === 1 ? !0 : void 0, "aria-labelledby": (D = (a = C(n.labelRef)) == null ? void 0 : a.id) != null ? D : (_ = C(n.buttonRef)) == null ? void 0 : _.id, "aria-orientation": n.orientation.value, id: k, onKeydown: i, role: "listbox", tabIndex: 0, ref: n.optionsRef };
    return Z({ ourProps: B, theirProps: $, slot: z, attrs: t, slots: o, features: be.RenderStrategy | be.Static, visible: m.value, name: "ListboxOptions" });
  };
} }), so = X({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${pe()}` } }, setup(e, { slots: t, attrs: o, expose: r }) {
  let n = re("ListboxOption"), s = j(null);
  r({ el: s, $el: s });
  let i = A(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === e.id : !1), u = A(() => V(n.mode.value, { 0: () => n.compare(H(n.value.value), H(e.value)), 1: () => H(n.value.value).some((h) => n.compare(H(h), H(e.value))) })), m = A(() => V(n.mode.value, { 1: () => {
    var h;
    let N = H(n.value.value);
    return ((h = n.options.value.find((v) => N.some((b) => n.compare(H(b), H(v.dataRef.value))))) == null ? void 0 : h.id) === e.id;
  }, 0: () => u.value })), l = Yn(s), a = A(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return l();
  }, domRef: s }));
  te(() => n.registerOption(e.id, a)), Te(() => n.unregisterOption(e.id)), te(() => {
    de([n.listboxState, u], () => {
      n.listboxState.value === 0 && u.value && V(n.mode.value, { 1: () => {
        m.value && n.goToOption(R.Specific, e.id);
      }, 0: () => {
        n.goToOption(R.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), ce(() => {
    n.listboxState.value === 0 && i.value && n.activationTrigger.value !== 0 && K(() => {
      var h, N;
      return (N = (h = C(s)) == null ? void 0 : h.scrollIntoView) == null ? void 0 : N.call(h, { block: "nearest" });
    });
  });
  function _(h) {
    if (e.disabled)
      return h.preventDefault();
    n.select(e.value), n.mode.value === 0 && (n.closeListbox(), K(() => {
      var N;
      return (N = C(n.buttonRef)) == null ? void 0 : N.focus({ preventScroll: !0 });
    }));
  }
  function D() {
    if (e.disabled)
      return n.goToOption(R.Nothing);
    n.goToOption(R.Specific, e.id);
  }
  let z = Jn();
  function k(h) {
    z.update(h);
  }
  function $(h) {
    z.wasMoved(h) && (e.disabled || i.value || n.goToOption(R.Specific, e.id, 0));
  }
  function B(h) {
    z.wasMoved(h) && (e.disabled || i.value && n.goToOption(R.Nothing));
  }
  return () => {
    let { disabled: h } = e, N = { active: i.value, selected: u.value, disabled: h }, { id: v, value: b, disabled: S, ...L } = e, I = { id: v, ref: s, role: "option", tabIndex: h === !0 ? void 0 : -1, "aria-disabled": h === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onClick: _, onFocus: D, onPointerenter: k, onMouseenter: k, onPointermove: $, onMousemove: $, onPointerleave: B, onMouseleave: B };
    return Z({ ourProps: I, theirProps: L, slot: N, attrs: o, slots: t, name: "ListboxOption" });
  };
} });
const io = {}, lo = {
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
    d: "M4.5 12.75l6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), uo = [
  ao
];
function co(e, t) {
  return c(), f("svg", lo, uo);
}
const fo = /* @__PURE__ */ y(io, [["render", co], ["__file", "/home/harry/Sites/ui/src/components/Icons/CheckIcon.vue"]]), po = {};
function mo(e, t) {
  return c(), M(oe, {
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
    /* FORWARDED */
  });
}
const Ge = /* @__PURE__ */ y(po, [["render", mo], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeScaleTransition.vue"]]), vo = {}, ho = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, bo = /* @__PURE__ */ d(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), go = [
  bo
];
function yo(e, t) {
  return c(), f("svg", ho, go);
}
const _o = /* @__PURE__ */ y(vo, [["render", yo], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronDownIcon.vue"]]), wo = { class: "text-sm" }, xo = {
  inheritAttrs: !1
}, $o = /* @__PURE__ */ Object.assign(xo, {
  __name: "SelectInput",
  props: {
    ...ae,
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
    return (t, o) => (c(), M(
      Ne,
      Ee(Pe(
        Object.keys(O(ae)).reduce((r, n) => (r[n] = t.$props[n], r), {})
      )),
      {
        default: w(() => [
          E(O(no), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": o[0] || (o[0] = (r) => t.$emit("update:modelValue", r))
          }, {
            default: w(() => [
              E(O(oo), {
                class: P({
                  "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                  "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
                })
              }, {
                default: w(() => {
                  var r, n;
                  return [
                    d(
                      "div",
                      wo,
                      q(Array.isArray(e.modelValue) ? (r = e.modelValue) == null ? void 0 : r.map((s) => s.name).join(", ") : ((n = e.modelValue) == null ? void 0 : n.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    E(_o, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class"]),
              E(Ge, null, {
                default: w(() => [
                  E(O(ro), {
                    class: P(["min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                      "right-0": e.align === "right",
                      "left-0": e.align === "left"
                    }])
                  }, {
                    default: w(() => [
                      p(t.$slots, "listbox-title"),
                      (c(!0), f(
                        Q,
                        null,
                        Be(e.options, (r) => (c(), M(O(so), {
                          key: r.id,
                          value: r,
                          as: "template"
                        }, {
                          default: w(({ active: n, selected: s }) => [
                            d(
                              "li",
                              {
                                class: P(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                                  "bg-zinc-50 dark:bg-zinc-900": s,
                                  "bg-zinc-100 dark:bg-zinc-700": n
                                }])
                              },
                              [
                                J(
                                  q(r.name) + " ",
                                  1
                                  /* TEXT */
                                ),
                                s ? (c(), M(fo, {
                                  key: 0,
                                  class: "h-5 w-5"
                                })) : x("v-if", !0)
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
}), Ur = /* @__PURE__ */ y($o, [["__file", "/home/harry/Sites/ui/src/components/Inputs/SelectInput.vue"]]);
function So() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class ko {
  constructor(t, o = {}) {
    this.component = t, this.data = o;
  }
}
const zo = ee({
  modals: ee([]),
  push(e, t = {}) {
    return t.key || (t.key = So()), this.modals.push(ee(new ko(e, t))), document.body.classList.add("overflow-y-hidden"), t.key;
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
}), Oo = {
  data() {
    return {
      open: !1,
      modals: zo
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
}, Lo = { class: "flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0" }, Do = {
  key: "modalBackground",
  class: "fixed inset-0 transition-opacity bg-zinc-500 bg-opacity-75",
  "aria-hidden": "true"
}, Ao = /* @__PURE__ */ d(
  "span",
  {
    class: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  },
  "​",
  -1
  /* HOISTED */
), Co = { class: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block" }, jo = /* @__PURE__ */ d(
  "span",
  { class: "sr-only" },
  "Close",
  -1
  /* HOISTED */
), Io = /* @__PURE__ */ d(
  "svg",
  {
    class: "w-6 h-6",
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
function To(e, t, o, r, n, s) {
  return c(), f("div", null, [
    d(
      "div",
      {
        class: P(["fixed inset-0 z-50 flex justify-center max-w-full overflow-y-auto", e.$modals.all.length ? "" : "pointer-events-none"]),
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true"
      },
      [
        d("div", Lo, [
          E(oe, {
            "enter-active-class": "duration-300 ease-out",
            "enter-from-class": "opacity-0",
            "enter-to-class": "opacity-100",
            "leave-active-class": "duration-200 ease-in",
            "leave-from-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: w(() => [
              e.$modals.all.length ? (c(), f("div", Do)) : x("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          Ao,
          E(Ze, {
            "enter-active-class": "duration-150 ease-out",
            "enter-from-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95",
            "enter-to-class": "translate-y-0 opacity-100 sm:scale-100",
            "leave-active-class": "duration-200 ease-in",
            "leave-from-class": "translate-y-0 opacity-100 sm:scale-100",
            "leave-to-class": "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          }, {
            default: w(() => [
              (c(!0), f(
                Q,
                null,
                Be(e.$modals.all, (i, u) => (c(), f("div", {
                  key: `modal${u}`,
                  class: "relative inline-block px-4 pt-5 pb-4 text-left align-bottom transition-all bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:w-full sm:p-6"
                }, [
                  d("div", Co, [
                    d("button", {
                      type: "button",
                      class: "text-zinc-400 bg-white rounded-md hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                      onClick: t[0] || (t[0] = (m) => e.$modals.pop())
                    }, [
                      jo,
                      x(" Heroicon name: outline/x "),
                      Io
                    ])
                  ]),
                  (c(), M(Y(i.name), {
                    "modal-index": u,
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
const Wr = /* @__PURE__ */ y(Oo, [["render", To], ["__file", "/home/harry/Sites/ui/src/components/Modals/ModalBase.vue"]]);
function Eo(e) {
  return et() ? (tt(e), !0) : !1;
}
function xe(e) {
  return typeof e == "function" ? e() : O(e);
}
const Po = typeof window < "u" && typeof document < "u", Bo = Object.prototype.toString, No = (e) => Bo.call(e) === "[object Object]", Fo = () => {
};
function Mo(e, t) {
  function o(...r) {
    return new Promise((n, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(n).catch(s);
    });
  }
  return o;
}
const Ye = (e) => e();
function Ro(e = Ye) {
  const t = j(!0);
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
function Ho(e, t, o = {}) {
  const {
    eventFilter: r = Ye,
    ...n
  } = o;
  return de(
    e,
    Mo(
      r,
      t
    ),
    n
  );
}
function Vo(e, t, o = {}) {
  const {
    eventFilter: r,
    ...n
  } = o, { eventFilter: s, pause: i, resume: u, isActive: m } = Ro(r);
  return { stop: Ho(
    e,
    t,
    {
      ...n,
      eventFilter: s
    }
  ), pause: i, resume: u, isActive: m };
}
function Uo(e) {
  var t;
  const o = xe(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ue = Po ? window : void 0;
function je(...e) {
  let t, o, r, n;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, r, n] = e, t = ue) : [t, o, r, n] = e, !t)
    return Fo;
  Array.isArray(o) || (o = [o]), Array.isArray(r) || (r = [r]);
  const s = [], i = () => {
    s.forEach((a) => a()), s.length = 0;
  }, u = (a, _, D, z) => (a.addEventListener(_, D, z), () => a.removeEventListener(_, D, z)), m = de(
    () => [Uo(t), xe(n)],
    ([a, _]) => {
      if (i(), !a)
        return;
      const D = No(_) ? { ..._ } : _;
      s.push(
        ...o.flatMap((z) => r.map((k) => u(a, z, k, D)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    m(), i();
  };
  return Eo(l), l;
}
const ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, le = "__vueuse_ssr_handlers__", Wo = /* @__PURE__ */ Ko();
function Ko() {
  return le in ie || (ie[le] = ie[le] || {}), ie[le];
}
function qo(e, t) {
  return Wo[e] || t;
}
function Jo(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Go = {
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
}, Ie = "vueuse-storage";
function Yo(e, t, o, r = {}) {
  var n;
  const {
    flush: s = "pre",
    deep: i = !0,
    listenToStorageChanges: u = !0,
    writeDefaults: m = !0,
    mergeDefaults: l = !1,
    shallow: a,
    window: _ = ue,
    eventFilter: D,
    onError: z = (g) => {
      console.error(g);
    }
  } = r, k = (a ? ot : j)(t);
  if (!o)
    try {
      o = qo("getDefaultStorage", () => {
        var g;
        return (g = ue) == null ? void 0 : g.localStorage;
      })();
    } catch (g) {
      z(g);
    }
  if (!o)
    return k;
  const $ = xe(t), B = Jo($), h = (n = r.serializer) != null ? n : Go[B], { pause: N, resume: v } = Vo(
    k,
    () => b(k.value),
    { flush: s, deep: i, eventFilter: D }
  );
  return _ && u && (je(_, "storage", I), je(_, Ie, L)), I(), k;
  function b(g) {
    try {
      if (g == null)
        o.removeItem(e);
      else {
        const F = h.write(g), W = o.getItem(e);
        W !== F && (o.setItem(e, F), _ && _.dispatchEvent(new CustomEvent(Ie, {
          detail: {
            key: e,
            oldValue: W,
            newValue: F,
            storageArea: o
          }
        })));
      }
    } catch (F) {
      z(F);
    }
  }
  function S(g) {
    const F = g ? g.newValue : o.getItem(e);
    if (F == null)
      return m && $ !== null && o.setItem(e, h.write($)), $;
    if (!g && l) {
      const W = h.read(F);
      return typeof l == "function" ? l(W, $) : B === "object" && !Array.isArray(W) ? { ...$, ...W } : W;
    } else
      return typeof F != "string" ? F : h.read(F);
  }
  function L(g) {
    I(g.detail);
  }
  function I(g) {
    if (!(g && g.storageArea !== o)) {
      if (g && g.key == null) {
        k.value = $;
        return;
      }
      if (!(g && g.key !== e)) {
        N();
        try {
          (g == null ? void 0 : g.newValue) !== h.write(k.value) && (k.value = S(g));
        } catch (F) {
          z(F);
        } finally {
          g ? K(v) : v();
        }
      }
    }
  }
}
function Qo(e, t, o = {}) {
  const { window: r = ue } = o;
  return Yo(e, t, r == null ? void 0 : r.localStorage, o);
}
const Xo = {}, Zo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, er = /* @__PURE__ */ d(
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
), tr = [
  er
];
function nr(e, t) {
  return c(), f("svg", Zo, tr);
}
const or = /* @__PURE__ */ y(Xo, [["render", nr], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronRightIcon.vue"]]), rr = { class: "flex flex-col gap-6 py-6" }, sr = { class: "flex flex-col gap-6 mb-6" }, ir = {
  __name: "Sidebar",
  setup(e) {
    const t = Qo("ui/sidebar", !1);
    return ye("sidebarMinimised", t), (o, r) => (c(), f(
      "nav",
      {
        class: P(["min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10", {
          "!w-24 !max-w-24 !min-w-24": O(t),
          "w-64 max-w-64 min-w-64": !O(t)
        }])
      },
      [
        d("button", {
          class: "absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-10",
          onClick: r[0] || (r[0] = (n) => t.value = !O(t))
        }, [
          E(or, {
            class: P(["w-5 h-5", {
              "transform rotate-180": !O(t)
            }])
          }, null, 8, ["class"])
        ]),
        x(" Primary Navigation Menu "),
        d("div", rr, [
          x(" Logo "),
          p(o.$slots, "default")
        ]),
        d("div", sr, [
          p(o.$slots, "bottom")
        ])
      ],
      2
      /* CLASS */
    ));
  }
}, Kr = /* @__PURE__ */ y(ir, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/Sidebar.vue"]]), lr = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3"
}, ar = {
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
    const t = e, o = ge("sidebarMinimised"), r = A(() => {
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
    return (n, s) => (c(), M(Y(e.as), {
      class: P(r.value)
    }, {
      default: w(() => [
        e.icon ? (c(), M(Y(e.icon), {
          key: 0,
          class: P(["w-6 h-6 transition-all", {
            " mr-4": !O(o)
          }])
        }, null, 8, ["class"])) : x("v-if", !0),
        E(oe, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "transform opacity-0",
          "enter-to-class": "transform opacity-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100",
          "leave-to-class": "transform opacity-0"
        }, {
          default: w(() => [
            O(o) ? x("v-if", !0) : p(n.$slots, "default", { key: 0 })
          ]),
          _: 3
          /* FORWARDED */
        }),
        O(o) ? (c(), f("div", lr, [
          p(n.$slots, "default")
        ])) : x("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, qr = /* @__PURE__ */ y(ar, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItem.vue"]]), ur = {}, cr = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, dr = { class: "flex w-full h-full max-h-screen z-10 relative" }, fr = { class: "flex-grow overflow-y-auto pb-12" };
function pr(e, t) {
  return c(), f("div", cr, [
    p(e.$slots, "top"),
    d("div", dr, [
      p(e.$slots, "sidebar"),
      d("section", fr, [
        p(e.$slots, "default")
      ])
    ])
  ]);
}
const Jr = /* @__PURE__ */ y(ur, [["render", pr], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarLayout.vue"]]), mr = {}, vr = { class: "flex flex-col gap-2 px-2" };
function hr(e, t) {
  return c(), f("div", vr, [
    p(e.$slots, "default")
  ]);
}
const Gr = /* @__PURE__ */ y(mr, [["render", hr], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItemGroup.vue"]]), br = {};
function gr(e, t) {
  return c(), M(oe, {
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
    /* FORWARDED */
  });
}
const yr = /* @__PURE__ */ y(br, [["render", gr], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeTransition.vue"]]), _r = {}, wr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, xr = /* @__PURE__ */ d(
  "path",
  {
    d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), $r = [
  xr
];
function Sr(e, t) {
  return c(), f("svg", wr, $r);
}
const kr = /* @__PURE__ */ y(_r, [["render", Sr], ["__file", "/home/harry/Sites/ui/src/components/Icons/CloseIcon.vue"]]);
class zr {
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
      G.dialog = new zr(e, t, o);
    });
  }
}), { info: Yr, confirm: Qr, reset: ve } = G, U = A(() => G.dialog), Or = {
  key: 0,
  class: "absolute inset-0 z-40 bg-black/40"
}, Lr = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center"
}, Dr = {
  __name: "Dialogs",
  setup(e) {
    return (t, o) => (c(), f(
      Q,
      null,
      [
        E(yr, null, {
          default: w(() => [
            O(U) ? (c(), f("div", Or)) : x("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }),
        E(Ge, null, {
          default: w(() => [
            O(U) ? (c(), f("div", Lr, [
              E(
                Qt,
                {
                  class: "mx-6 w-full max-w-lg",
                  "footer-justify": "end"
                },
                rt({
                  header: w(() => [
                    E(tn, null, {
                      default: w(() => {
                        var r, n;
                        return [
                          J(
                            q((n = (r = O(U)) == null ? void 0 : r.data) == null ? void 0 : n.title),
                            1
                            /* TEXT */
                          )
                        ];
                      }),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  footer: w(() => [
                    O(U).type === "info" ? (c(), M(ke, {
                      key: 0,
                      onClick: o[0] || (o[0] = (r) => {
                        var n;
                        (n = O(U)) == null || n.resolve(), O(ve)();
                      })
                    }, {
                      default: w(() => [
                        J("Ok")
                      ]),
                      _: 1
                      /* STABLE */
                    })) : O(U).type === "confirm" ? (c(), f(
                      Q,
                      { key: 1 },
                      [
                        E(Kt, {
                          onClick: o[1] || (o[1] = (r) => {
                            var n;
                            (n = O(U)) == null || n.resolve(!1), O(ve)();
                          })
                        }, {
                          default: w(() => [
                            J("No")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        E(ke, {
                          onClick: o[2] || (o[2] = (r) => {
                            var n;
                            (n = O(U)) == null || n.resolve(!0), O(ve)();
                          })
                        }, {
                          default: w(() => [
                            J("Yes")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : x("v-if", !0)
                  ]),
                  default: w(() => {
                    var r, n;
                    return [
                      d(
                        "p",
                        null,
                        q((n = (r = O(U)) == null ? void 0 : r.data) == null ? void 0 : n.subtitle),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, [
                  O(U).type !== "info" ? {
                    name: "extra",
                    fn: w(() => [
                      E(fe, { size: "uniform" }, {
                        default: w(() => [
                          E(kr, { class: "h-5 w-5" })
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
            ])) : x("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}, Xr = /* @__PURE__ */ y(Dr, [["__file", "/home/harry/Sites/ui/src/components/Dialogs/Dialogs.vue"]]), Ar = {
  __name: "Container",
  props: {
    narrow: Boolean
  },
  setup(e) {
    return (t, o) => (c(), f(
      "div",
      {
        class: P(["mx-auto px-4 sm:px-6 lg:px-8", {
          "max-w-7xl": !e.narrow,
          "max-w-4xl": e.narrow
        }])
      },
      [
        p(t.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
}, Zr = /* @__PURE__ */ y(Ar, [["__file", "/home/harry/Sites/ui/src/components/Container.vue"]]);
export {
  jr as AlertAction,
  fe as BaseButton,
  Qt as Card,
  tn as CardTitle,
  Zr as Container,
  Ir as DangerAlert,
  Br as DangerButton,
  Xr as Dialogs,
  Nr as Dropdown,
  Fr as DropdownLink,
  Ge as FadeScaleTransition,
  Mr as HH1,
  Rr as HH2,
  Hr as HH3,
  Tr as InfoAlert,
  Vr as Input,
  Ne as InputLayout,
  Wr as ModalBase,
  ke as PrimaryButton,
  Kt as SecondaryButton,
  Ur as SelectInput,
  Kr as Sidebar,
  qr as SidebarItem,
  Gr as SidebarItemGroup,
  Jr as SidebarLayout,
  Er as SuccessAlert,
  Pr as WarningAlert,
  Qr as confirmDialog,
  G as dialogs,
  Yr as infoDialog,
  ve as resetDialog
};
