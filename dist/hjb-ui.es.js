import { openBlock as m, createBlock as U, resolveDynamicComponent as le, withCtx as P, createTextVNode as ce, createElementVNode as w, createElementBlock as z, normalizeClass as K, renderSlot as R, createCommentVNode as B, onMounted as ae, onUnmounted as tt, computed as A, ref as M, withDirectives as pt, vShow as vt, createVNode as q, Transition as Te, toDisplayString as oe, normalizeProps as nt, guardReactiveProps as ot, mergeProps as hn, cloneVNode as bn, h as Oe, Fragment as ne, inject as Me, provide as Fe, watchEffect as ue, defineComponent as Q, toRaw as F, watch as ie, nextTick as J, unref as E, renderList as Be, getCurrentScope as gn, onScopeDispose as yn, readonly as xn, getCurrentInstance as wn, shallowRef as _n, useSlots as Sn, reactive as fe, createSlots as $n, markRaw as On } from "vue";
const L = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, n] of t)
    o[a] = n;
  return o;
}, kn = /* @__PURE__ */ w(
  "span",
  { "aria-hidden": "true" },
  "→",
  -1
  /* HOISTED */
), zn = {
  __name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, o) => (m(), U(le(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: P(() => [
        ce("Details "),
        kn
      ]),
      _: 1
      /* STABLE */
    }));
  }
}, Jr = /* @__PURE__ */ L(zn, [["__file", "/home/harry/Sites/ui/src/components/Alerts/AlertAction.vue"]]), Tn = {}, An = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, Cn = { class: "flex" }, Rn = /* @__PURE__ */ w(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ B(" Heroicon name: solid/x-circle "),
    /* @__PURE__ */ w("svg", {
      class: "h-5 w-5 text-red-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ w("path", {
        "fill-rule": "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
        "clip-rule": "evenodd"
      })
    ])
  ],
  -1
  /* HOISTED */
), In = { class: "ml-3 flex-1" }, Pn = { class: "md:flex md:justify-between" }, Dn = { class: "text-sm text-red-800 dark:text-red-200" }, En = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Ln(e, t) {
  return m(), z("div", An, [
    w("div", Cn, [
      Rn,
      w("div", In, [
        e.$slots.title ? (m(), z(
          "h3",
          {
            key: 0,
            class: K(["text-sm font-medium text-red-800 dark:text-red-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            R(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : B("v-if", !0),
        w("div", Pn, [
          w("p", Dn, [
            R(e.$slots, "default")
          ]),
          e.$slots.action ? (m(), z("p", En, [
            R(e.$slots, "action")
          ])) : B("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Yr = /* @__PURE__ */ L(Tn, [["render", Ln], ["__file", "/home/harry/Sites/ui/src/components/Alerts/DangerAlert.vue"]]), jn = {}, Mn = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, Fn = { class: "flex" }, Bn = /* @__PURE__ */ w(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ B(" Heroicon name: solid/information-circle "),
    /* @__PURE__ */ w("svg", {
      class: "h-5 w-5 text-blue-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ w("path", {
        "fill-rule": "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
        "clip-rule": "evenodd"
      })
    ])
  ],
  -1
  /* HOISTED */
), Vn = { class: "ml-3 flex-1" }, Nn = { class: "md:flex md:justify-between" }, Hn = { class: "text-sm text-blue-800 dark:text-blue-200" }, qn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Un(e, t) {
  return m(), z("div", Mn, [
    w("div", Fn, [
      Bn,
      w("div", Vn, [
        e.$slots.title ? (m(), z(
          "h3",
          {
            key: 0,
            class: K(["text-sm font-medium text-blue-800 dark:text-blue-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            R(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : B("v-if", !0),
        w("div", Nn, [
          w("p", Hn, [
            R(e.$slots, "default")
          ]),
          e.$slots.action ? (m(), z("p", qn, [
            R(e.$slots, "action")
          ])) : B("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Xr = /* @__PURE__ */ L(jn, [["render", Un], ["__file", "/home/harry/Sites/ui/src/components/Alerts/InfoAlert.vue"]]), Kn = {}, Wn = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, Gn = { class: "flex" }, Jn = /* @__PURE__ */ w(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ B(" Heroicon name: solid/check-circle "),
    /* @__PURE__ */ w("svg", {
      class: "h-5 w-5 text-green-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ w("path", {
        "fill-rule": "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        "clip-rule": "evenodd"
      })
    ])
  ],
  -1
  /* HOISTED */
), Yn = { class: "ml-3 flex-1" }, Xn = { class: "md:flex md:justify-between" }, Qn = { class: "text-sm text-green-800 dark:text-green-200" }, Zn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function eo(e, t) {
  return m(), z("div", Wn, [
    w("div", Gn, [
      Jn,
      w("div", Yn, [
        e.$slots.title ? (m(), z(
          "h3",
          {
            key: 0,
            class: K(["text-sm font-medium text-green-800 dark:text-green-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            R(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : B("v-if", !0),
        w("div", Xn, [
          w("p", Qn, [
            R(e.$slots, "default")
          ]),
          e.$slots.action ? (m(), z("p", Zn, [
            R(e.$slots, "action")
          ])) : B("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Qr = /* @__PURE__ */ L(Kn, [["render", eo], ["__file", "/home/harry/Sites/ui/src/components/Alerts/SuccessAlert.vue"]]), to = {}, no = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, oo = { class: "flex" }, ao = /* @__PURE__ */ w(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ B(" Heroicon name: solid/exclamation "),
    /* @__PURE__ */ w("svg", {
      class: "h-5 w-5 text-yellow-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ w("path", {
        "fill-rule": "evenodd",
        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
        "clip-rule": "evenodd"
      })
    ])
  ],
  -1
  /* HOISTED */
), io = { class: "ml-3 flex-1" }, ro = { class: "md:flex md:justify-between" }, so = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, lo = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function uo(e, t) {
  return m(), z("div", no, [
    w("div", oo, [
      ao,
      w("div", io, [
        e.$slots.title ? (m(), z(
          "h3",
          {
            key: 0,
            class: K(["text-sm font-medium text-yellow-800 dark:text-yellow-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            R(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : B("v-if", !0),
        w("div", ro, [
          w("p", so, [
            R(e.$slots, "default")
          ]),
          e.$slots.action ? (m(), z("p", lo, [
            R(e.$slots, "action")
          ])) : B("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Zr = /* @__PURE__ */ L(to, [["render", uo], ["__file", "/home/harry/Sites/ui/src/components/Alerts/WarningAlert.vue"]]), co = {
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
    return (t, o) => (m(), U(le(e.as), {
      class: K(["inline-flex items-center border border-transparent rounded-md font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2", {
        "p-1.5": e.size === "uniform",
        "px-1 py-0.5 text-xs": e.size === "tiny",
        "px-2 py-1 text-xs": e.size === "small",
        "px-3.5 py-1.5 text-sm": e.size === "medium",
        "px-3.5 py-1.5 text-base": e.size === "large"
      }])
    }, {
      default: P(() => [
        R(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, Ve = /* @__PURE__ */ L(co, [["__file", "/home/harry/Sites/ui/src/components/Buttons/BaseButton.vue"]]), fo = {
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (m(), U(Ve, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: P(() => [
        R(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, mt = /* @__PURE__ */ L(fo, [["__file", "/home/harry/Sites/ui/src/components/Buttons/PrimaryButton.vue"]]), po = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, o) => (m(), U(Ve, {
      type: e.type,
      class: "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
    }, {
      default: P(() => [
        R(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["type"]));
  }
}, vo = /* @__PURE__ */ L(po, [["__file", "/home/harry/Sites/ui/src/components/Buttons/SecondaryButton.vue"]]), mo = {
  __name: "DangerButton",
  setup(e) {
    return (t, o) => (m(), U(Ve, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: P(() => [
        R(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, es = /* @__PURE__ */ L(mo, [["__file", "/home/harry/Sites/ui/src/components/Buttons/DangerButton.vue"]]), ho = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, bo = { key: 0 }, go = {
  __name: "Card",
  props: {
    flush: Boolean,
    footerJustify: {
      type: String,
      default: "start"
    }
  },
  setup(e) {
    return (t, o) => (m(), z(
      "div",
      {
        class: K(["bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-zinc-900 dark:text-zinc-100", {
          "p-6": !e.flush
        }])
      },
      [
        t.$slots.header || t.$slots.extra ? (m(), z("div", ho, [
          w("div", null, [
            R(t.$slots, "header")
          ]),
          t.$slots.extra ? (m(), z("div", bo, [
            R(t.$slots, "extra")
          ])) : B("v-if", !0)
        ])) : B("v-if", !0),
        R(t.$slots, "default"),
        t.$slots.footer ? (m(), z(
          "div",
          {
            key: 1,
            class: K(["mt-6 flex gap-2", {
              "justify-end": e.footerJustify === "end",
              "justify-between": e.footerJustify === "between"
            }])
          },
          [
            R(t.$slots, "footer")
          ],
          2
          /* CLASS */
        )) : B("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}, yo = /* @__PURE__ */ L(go, [["__file", "/home/harry/Sites/ui/src/components/Cards/Card.vue"]]), xo = {}, wo = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function _o(e, t) {
  return m(), z("h3", wo, [
    R(e.$slots, "default")
  ]);
}
const So = /* @__PURE__ */ L(xo, [["render", _o], ["__file", "/home/harry/Sites/ui/src/components/Cards/CardTitle.vue"]]), $o = { class: "relative" }, Oo = {
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
    const t = e, o = (r) => {
      i.value && r.key === "Escape" && (i.value = !1);
    };
    ae(() => document.addEventListener("keydown", o)), tt(() => document.removeEventListener("keydown", o));
    const a = A(() => ({
      48: "w-48"
    })[t.width.toString()]), n = A(() => {
      const r = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${r}-left left-0` : t.align === "right" ? `origin-${r}-right right-0` : `origin-${r}`;
    }), i = M(!1);
    return (r, s) => (m(), z("div", $o, [
      w("div", {
        onClick: s[0] || (s[0] = (c) => i.value = !i.value)
      }, [
        R(r.$slots, "trigger")
      ]),
      B(" Full Screen Dropdown Overlay "),
      pt(w(
        "div",
        {
          class: "fixed inset-0 z-40",
          onClick: s[1] || (s[1] = (c) => i.value = !1)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vt, i.value]
      ]),
      q(Te, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        persisted: ""
      }, {
        default: P(() => [
          pt(w(
            "div",
            {
              class: K(["absolute z-50 mt-2 rounded-md shadow-lg", [a.value, n.value, t.bottom ? "bottom-full" : ""]]),
              style: { display: "none" },
              onClick: s[2] || (s[2] = (c) => i.value = !1)
            },
            [
              w(
                "div",
                {
                  class: K(["rounded-md ring-1 ring-black ring-opacity-5", e.contentClasses])
                },
                [
                  R(r.$slots, "content")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ), [
            [vt, i.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]));
  }
}, ts = /* @__PURE__ */ L(Oo, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/Dropdown.vue"]]), ko = {
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
    return (t, o) => (m(), U(le(e.as), {
      href: e.href,
      class: "block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
    }, {
      default: P(() => [
        R(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["href"]));
  }
}, ns = /* @__PURE__ */ L(ko, [["__file", "/home/harry/Sites/ui/src/components/Dropdown/DropdownLink.vue"]]), zo = {}, To = { class: "font-semibold text-3xl leading-tight" };
function Ao(e, t) {
  return m(), z("h1", To, [
    R(e.$slots, "default")
  ]);
}
const os = /* @__PURE__ */ L(zo, [["render", Ao], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH1.vue"]]), Co = {}, Ro = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function Io(e, t) {
  return m(), z("h2", Ro, [
    R(e.$slots, "default")
  ]);
}
const as = /* @__PURE__ */ L(Co, [["render", Io], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH2.vue"]]), Po = {}, Do = { class: "text-xl tracking-tight dark:text-white" };
function Eo(e, t) {
  return m(), z("h2", Do, [
    R(e.$slots, "default")
  ]);
}
const is = /* @__PURE__ */ L(Po, [["render", Eo], ["__file", "/home/harry/Sites/ui/src/components/Headings/HH3.vue"]]), ge = {
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
}, Lo = ["for"], jo = { class: "relative mt-1" }, Mo = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, Fo = /* @__PURE__ */ w(
  "svg",
  {
    class: "h-5 w-5 text-red-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  },
  [
    /* @__PURE__ */ w("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
      "clip-rule": "evenodd"
    })
  ],
  -1
  /* HOISTED */
), Bo = ["id"], Vo = ["id"], No = {
  __name: "InputLayout",
  props: {
    ...ge
  },
  setup(e) {
    return (t, o) => (m(), z("div", null, [
      t.label ? (m(), z("label", {
        key: 0,
        for: t.id,
        class: "block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      }, oe(t.label), 9, Lo)) : B("v-if", !0),
      w("div", jo, [
        R(t.$slots, "default"),
        t.error ? (m(), z("div", Mo, [
          B(" Heroicon name: solid/exclamation-circle "),
          Fo
        ])) : B("v-if", !0)
      ]),
      t.helpText && !t.error ? (m(), z("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, oe(t.helpText), 9, Bo)) : t.error ? (m(), z("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, oe(t.error), 9, Vo)) : B("v-if", !0)
    ]));
  }
}, at = /* @__PURE__ */ L(No, [["__file", "/home/harry/Sites/ui/src/components/Inputs/InputLayout.vue"]]), Ho = ["name", "id", "aria-describedby"], qo = {
  inheritAttrs: !1
}, Uo = /* @__PURE__ */ Object.assign(qo, {
  __name: "Input",
  props: {
    ...ge
  },
  setup(e) {
    return (t, o) => (m(), U(
      at,
      nt(ot(t.$props)),
      {
        default: P(() => [
          w("input", hn(t.$attrs, {
            name: t.name,
            id: t.id,
            class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
              "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
            }],
            "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
          }), null, 16, Ho)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), rs = /* @__PURE__ */ L(Uo, [["__file", "/home/harry/Sites/ui/src/components/Inputs/Input.vue"]]);
function W(e, t, ...o) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...o) : n;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, W), a;
}
var de = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(de || {}), Ko = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ko || {});
function Z({ visible: e = !0, features: t = 0, ourProps: o, theirProps: a, ...n }) {
  var i;
  let r = It(a, o), s = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return qe(s);
  if (t & 1) {
    let c = (i = r.unmount) == null || i ? 0 : 1;
    return W(c, { 0() {
      return null;
    }, 1() {
      return qe({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return qe(s);
}
function qe({ props: e, attrs: t, slots: o, slot: a, name: n }) {
  var i, r;
  let { as: s, ...c } = Ne(e, ["unmount", "static"]), l = (i = o.default) == null ? void 0 : i.call(o, a), u = {};
  if (a) {
    let f = !1, h = [];
    for (let [g, S] of Object.entries(a))
      typeof S == "boolean" && (f = !0), S === !0 && h.push(g);
    f && (u["data-headlessui-state"] = h.join(" "));
  }
  if (s === "template") {
    if (l = Rt(l ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [f, ...h] = l ?? [];
      if (!Wo(f) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map(($) => $.trim()).filter(($, k, d) => d.indexOf($) === k).sort(($, k) => $.localeCompare(k)).map(($) => `  - ${$}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(($) => `  - ${$}`).join(`
`)].join(`
`));
      let g = It((r = f.props) != null ? r : {}, c), S = bn(f, g);
      for (let $ in g)
        $.startsWith("on") && (S.props || (S.props = {}), S.props[$] = g[$]);
      return S;
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return Oe(s, Object.assign({}, c, u), { default: () => l });
}
function Rt(e) {
  return e.flatMap((t) => t.type === ne ? Rt(t.children) : [t]);
}
function It(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, o = {};
  for (let a of e)
    for (let n in a)
      n.startsWith("on") && typeof a[n] == "function" ? (o[n] != null || (o[n] = []), o[n].push(a[n])) : t[n] = a[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((a) => [a, void 0])));
  for (let a in o)
    Object.assign(t, { [a](n, ...i) {
      let r = o[a];
      for (let s of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        s(n, ...i);
      }
    } });
  return t;
}
function Pt(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Ne(e, t = []) {
  let o = Object.assign({}, e);
  for (let a of t)
    a in o && delete o[a];
  return o;
}
function Wo(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Go = 0;
function Jo() {
  return ++Go;
}
function se() {
  return Jo();
}
var N = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(N || {});
function Yo(e) {
  throw new Error("Unexpected object: " + e);
}
var V = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(V || {});
function Dt(e, t) {
  let o = t.resolveItems();
  if (o.length <= 0)
    return null;
  let a = t.resolveActiveIndex(), n = a ?? -1, i = (() => {
    switch (e.focus) {
      case 0:
        return o.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = o.slice().reverse().findIndex((s, c, l) => n !== -1 && l.length - c - 1 >= n ? !1 : !t.resolveDisabled(s));
        return r === -1 ? r : o.length - 1 - r;
      }
      case 2:
        return o.findIndex((r, s) => s <= n ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = o.slice().reverse().findIndex((s) => !t.resolveDisabled(s));
        return r === -1 ? r : o.length - 1 - r;
      }
      case 4:
        return o.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Yo(e);
    }
  })();
  return i === -1 ? a : i;
}
function I(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Et = Symbol("Context");
var re = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(re || {});
function Lt() {
  return Me(Et, null);
}
function jt(e) {
  Fe(Et, e);
}
function ht(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Mt(e, t) {
  let o = M(ht(e.value.type, e.value.as));
  return ae(() => {
    o.value = ht(e.value.type, e.value.as);
  }), ue(() => {
    var a;
    o.value || I(t) && I(t) instanceof HTMLButtonElement && !((a = I(t)) != null && a.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Xo = Object.defineProperty, Qo = (e, t, o) => t in e ? Xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, bt = (e, t, o) => (Qo(e, typeof t != "symbol" ? t + "" : t, o), o);
class Zo {
  constructor() {
    bt(this, "current", this.detect()), bt(this, "currentId", 0);
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
let it = new Zo();
function rt(e) {
  if (it.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = I(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function ea({ container: e, accept: t, walk: o, enabled: a }) {
  ue(() => {
    let n = e.value;
    if (!n || a !== void 0 && !a.value)
      return;
    let i = rt(e);
    if (!i)
      return;
    let r = Object.assign((c) => t(c), { acceptNode: t }), s = i.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; s.nextNode(); )
      o(s.currentNode);
  });
}
let gt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ta = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ta || {}), na = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(na || {}), oa = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(oa || {}), st = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(st || {});
function Ft(e, t = 0) {
  var o;
  return e === ((o = rt(e)) == null ? void 0 : o.body) ? !1 : W(t, { 0() {
    return e.matches(gt);
  }, 1() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(gt))
        return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
var aa = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(aa || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Bt(e, t = (o) => o) {
  return e.slice().sort((o, a) => {
    let n = t(o), i = t(a);
    if (n === null || i === null)
      return 0;
    let r = n.compareDocumentPosition(i);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ce(e, t, o) {
  it.isServer || ue((a) => {
    document.addEventListener(e, t, o), a(() => document.removeEventListener(e, t, o));
  });
}
function ia(e, t, o) {
  it.isServer || ue((a) => {
    window.addEventListener(e, t, o), a(() => window.removeEventListener(e, t, o));
  });
}
function Vt(e, t, o = A(() => !0)) {
  function a(i, r) {
    if (!o.value || i.defaultPrevented)
      return;
    let s = r(i);
    if (s === null || !s.getRootNode().contains(s))
      return;
    let c = function l(u) {
      return typeof u == "function" ? l(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let l of c) {
      if (l === null)
        continue;
      let u = l instanceof HTMLElement ? l : I(l);
      if (u != null && u.contains(s) || i.composed && i.composedPath().includes(u))
        return;
    }
    return !Ft(s, st.Loose) && s.tabIndex !== -1 && i.preventDefault(), t(i, s);
  }
  let n = M(null);
  Ce("pointerdown", (i) => {
    var r, s;
    o.value && (n.value = ((s = (r = i.composedPath) == null ? void 0 : r.call(i)) == null ? void 0 : s[0]) || i.target);
  }, !0), Ce("mousedown", (i) => {
    var r, s;
    o.value && (n.value = ((s = (r = i.composedPath) == null ? void 0 : r.call(i)) == null ? void 0 : s[0]) || i.target);
  }, !0), Ce("click", (i) => {
    n.value && (a(i, () => n.value), n.value = null);
  }, !0), Ce("touchend", (i) => a(i, () => i.target instanceof HTMLElement ? i.target : null), !0), ia("blur", (i) => a(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var lt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(lt || {});
let Nt = Q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: a, ...n } = e, i = { "aria-hidden": (a & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(a & 4) === 4 && (a & 2) !== 2 && { display: "none" } } };
    return Z({ ourProps: i, theirProps: n, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function ut(e = {}, t = null, o = []) {
  for (let [a, n] of Object.entries(e))
    qt(o, Ht(t, a), n);
  return o;
}
function Ht(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function qt(e, t, o) {
  if (Array.isArray(o))
    for (let [a, n] of o.entries())
      qt(e, Ht(t, a.toString()), n);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : ut(o, t, e);
}
function Ut(e, t, o) {
  let a = M(o == null ? void 0 : o.value), n = A(() => e.value !== void 0);
  return [A(() => n.value ? e.value : a.value), function(i) {
    return n.value || (a.value = i), t == null ? void 0 : t(i);
  }];
}
function yt(e) {
  return [e.screenX, e.screenY];
}
function Kt() {
  let e = M([-1, -1]);
  return { wasMoved(t) {
    let o = yt(t);
    return e.value[0] === o[0] && e.value[1] === o[1] ? !1 : (e.value = o, !0);
  }, update(t) {
    e.value = yt(t);
  } };
}
function ra() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function sa() {
  return /Android/gi.test(window.navigator.userAgent);
}
function la() {
  return ra() || sa();
}
function ua(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Wt() {
  let e = [], t = { addEventListener(o, a, n, i) {
    return o.addEventListener(a, n, i), t.add(() => o.removeEventListener(a, n, i));
  }, requestAnimationFrame(...o) {
    let a = requestAnimationFrame(...o);
    t.add(() => cancelAnimationFrame(a));
  }, nextFrame(...o) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let a = setTimeout(...o);
    t.add(() => clearTimeout(a));
  }, microTask(...o) {
    let a = { current: !0 };
    return ua(() => {
      a.current && o[0]();
    }), t.add(() => {
      a.current = !1;
    });
  }, style(o, a, n) {
    let i = o.style.getPropertyValue(a);
    return Object.assign(o.style, { [a]: n }), this.add(() => {
      Object.assign(o.style, { [a]: i });
    });
  }, group(o) {
    let a = Wt();
    return o(a), this.add(() => a.dispose());
  }, add(o) {
    return e.push(o), () => {
      let a = e.indexOf(o);
      if (a >= 0)
        for (let n of e.splice(a, 1))
          n();
    };
  }, dispose() {
    for (let o of e.splice(0))
      o();
  } };
  return t;
}
function ca(e, t) {
  return e === t;
}
var da = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(da || {}), fa = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(fa || {}), pa = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(pa || {});
let Gt = Symbol("ComboboxContext");
function we(e) {
  let t = Me(Gt, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, we), o;
  }
  return t;
}
let va = Q({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => ca }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: o, emit: a }) {
  let n = M(1), i = M(null), r = M(null), s = M(null), c = M(null), l = M({ static: !1, hold: !1 }), u = M([]), f = M(null), h = M(1), g = M(!1);
  function S(_ = (x) => x) {
    let x = f.value !== null ? u.value[f.value] : null, j = Bt(_(u.value.slice()), (H) => I(H.dataRef.domRef)), C = x ? j.indexOf(x) : null;
    return C === -1 && (C = null), { options: j, activeOptionIndex: C };
  }
  let $ = A(() => e.multiple ? 1 : 0), k = A(() => e.nullable), [d, T] = Ut(A(() => e.modelValue), (_) => a("update:modelValue", _), A(() => e.defaultValue)), p = A(() => d.value === void 0 ? W($.value, { 1: [], 0: void 0 }) : d.value), y = null, O = null, v = { comboboxState: n, value: p, mode: $, compare(_, x) {
    if (typeof e.by == "string") {
      let j = e.by;
      return (_ == null ? void 0 : _[j]) === (x == null ? void 0 : x[j]);
    }
    return e.by(_, x);
  }, defaultValue: A(() => e.defaultValue), nullable: k, inputRef: r, labelRef: i, buttonRef: s, optionsRef: c, disabled: A(() => e.disabled), options: u, change(_) {
    T(_);
  }, activeOptionIndex: A(() => {
    if (g.value && f.value === null && u.value.length > 0) {
      let _ = u.value.findIndex((x) => !x.dataRef.disabled);
      _ !== -1 && (f.value = _);
    }
    return f.value;
  }), activationTrigger: h, optionsPropsRef: l, closeCombobox() {
    g.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, f.value = null);
  }, openCombobox() {
    if (g.value = !0, e.disabled || n.value === 0)
      return;
    let _ = u.value.findIndex((x) => {
      let j = F(x.dataRef.value);
      return W($.value, { 0: () => v.compare(F(v.value.value), F(j)), 1: () => F(v.value.value).some((C) => v.compare(F(C), F(j))) });
    });
    _ !== -1 && (f.value = _), n.value = 0;
  }, goToOption(_, x, j) {
    g.value = !1, y !== null && cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      if (e.disabled || c.value && !l.value.static && n.value === 1)
        return;
      let C = S();
      if (C.activeOptionIndex === null) {
        let G = C.options.findIndex((_e) => !_e.dataRef.disabled);
        G !== -1 && (C.activeOptionIndex = G);
      }
      let H = Dt(_ === V.Specific ? { focus: V.Specific, id: x } : { focus: _ }, { resolveItems: () => C.options, resolveActiveIndex: () => C.activeOptionIndex, resolveId: (G) => G.id, resolveDisabled: (G) => G.dataRef.disabled });
      f.value = H, h.value = j ?? 1, u.value = C.options;
    });
  }, selectOption(_) {
    let x = u.value.find((C) => C.id === _);
    if (!x)
      return;
    let { dataRef: j } = x;
    T(W($.value, { 0: () => j.value, 1: () => {
      let C = F(v.value.value).slice(), H = F(j.value), G = C.findIndex((_e) => v.compare(H, F(_e)));
      return G === -1 ? C.push(H) : C.splice(G, 1), C;
    } }));
  }, selectActiveOption() {
    if (v.activeOptionIndex.value === null)
      return;
    let { dataRef: _, id: x } = u.value[v.activeOptionIndex.value];
    T(W($.value, { 0: () => _.value, 1: () => {
      let j = F(v.value.value).slice(), C = F(_.value), H = j.findIndex((G) => v.compare(C, F(G)));
      return H === -1 ? j.push(C) : j.splice(H, 1), j;
    } })), v.goToOption(V.Specific, x);
  }, registerOption(_, x) {
    O && cancelAnimationFrame(O);
    let j = { id: _, dataRef: x }, C = S((H) => (H.push(j), H));
    if (f.value === null) {
      let H = x.value.value;
      W($.value, { 0: () => v.compare(F(v.value.value), F(H)), 1: () => F(v.value.value).some((G) => v.compare(F(G), F(H))) }) && (C.activeOptionIndex = C.options.indexOf(j));
    }
    u.value = C.options, f.value = C.activeOptionIndex, h.value = 1, C.options.some((H) => !I(H.dataRef.domRef)) && (O = requestAnimationFrame(() => {
      let H = S();
      u.value = H.options, f.value = H.activeOptionIndex;
    }));
  }, unregisterOption(_) {
    var x;
    v.activeOptionIndex.value !== null && ((x = v.options.value[v.activeOptionIndex.value]) == null ? void 0 : x.id) === _ && (g.value = !0);
    let j = S((C) => {
      let H = C.findIndex((G) => G.id === _);
      return H !== -1 && C.splice(H, 1), C;
    });
    u.value = j.options, f.value = j.activeOptionIndex, h.value = 1;
  } };
  Vt([r, s, c], () => v.closeCombobox(), A(() => n.value === 0)), Fe(Gt, v), jt(A(() => W(n.value, { 0: re.Open, 1: re.Closed })));
  let D = A(() => v.activeOptionIndex.value === null ? null : u.value[v.activeOptionIndex.value].dataRef.value), b = A(() => {
    var _;
    return (_ = I(r)) == null ? void 0 : _.closest("form");
  });
  return ae(() => {
    ie([b], () => {
      if (!b.value || e.defaultValue === void 0)
        return;
      function _() {
        v.change(e.defaultValue);
      }
      return b.value.addEventListener("reset", _), () => {
        var x;
        (x = b.value) == null || x.removeEventListener("reset", _);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: _, disabled: x, form: j, ...C } = e, H = { open: n.value === 0, disabled: x, activeIndex: v.activeOptionIndex.value, activeOption: D.value, value: p.value };
    return Oe(ne, [..._ != null && p.value != null ? ut({ [_]: p.value }).map(([G, _e]) => Oe(Nt, Pt({ features: lt.Hidden, key: G, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: j, name: G, value: _e }))) : [], Z({ theirProps: { ...o, ...Ne(C, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: H, slots: t, attrs: o, name: "Combobox" })]);
  };
} });
Q({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let a = we("ComboboxLabel");
  function n() {
    var i;
    (i = I(a.inputRef)) == null || i.focus({ preventScroll: !0 });
  }
  return () => {
    let i = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { id: r, ...s } = e, c = { id: r, ref: a.labelRef, onClick: n };
    return Z({ ourProps: c, theirProps: s, slot: i, attrs: t, slots: o, name: "ComboboxLabel" });
  };
} });
Q({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${se()}` } }, setup(e, { attrs: t, slots: o, expose: a }) {
  let n = we("ComboboxButton");
  a({ el: n.buttonRef, $el: n.buttonRef });
  function i(c) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (c.preventDefault(), n.openCombobox()), J(() => {
      var l;
      return (l = I(n.inputRef)) == null ? void 0 : l.focus({ preventScroll: !0 });
    }));
  }
  function r(c) {
    switch (c.key) {
      case N.ArrowDown:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), J(() => {
          var l;
          return (l = n.inputRef.value) == null ? void 0 : l.focus({ preventScroll: !0 });
        });
        return;
      case N.ArrowUp:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), J(() => {
          n.value.value || n.goToOption(V.Last);
        })), J(() => {
          var l;
          return (l = n.inputRef.value) == null ? void 0 : l.focus({ preventScroll: !0 });
        });
        return;
      case N.Escape:
        if (n.comboboxState.value !== 0)
          return;
        c.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && c.stopPropagation(), n.closeCombobox(), J(() => {
          var l;
          return (l = n.inputRef.value) == null ? void 0 : l.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let s = Mt(A(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var c, l;
    let u = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: f, ...h } = e, g = { ref: n.buttonRef, id: f, type: s.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = I(n.optionsRef)) == null ? void 0 : c.id, "aria-expanded": n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(l = I(n.labelRef)) == null ? void 0 : l.id, f].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: i };
    return Z({ ourProps: g, theirProps: h, slot: u, attrs: t, slots: o, name: "ComboboxButton" });
  };
} });
let ma = Q({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${se()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: a, expose: n }) {
  let i = we("ComboboxInput"), r = A(() => rt(I(i.inputRef))), s = { value: !1 };
  n({ el: i.inputRef, $el: i.inputRef });
  function c() {
    i.change(null);
    let d = I(i.optionsRef);
    d && (d.scrollTop = 0), i.goToOption(V.Nothing);
  }
  let l = A(() => {
    var d;
    let T = i.value.value;
    return I(i.inputRef) ? typeof e.displayValue < "u" && T !== void 0 ? (d = e.displayValue(T)) != null ? d : "" : typeof T == "string" ? T : "" : "";
  });
  ae(() => {
    ie([l, i.comboboxState, r], ([d, T], [p, y]) => {
      if (s.value)
        return;
      let O = I(i.inputRef);
      O && ((y === 0 && T === 1 || d !== p) && (O.value = d), requestAnimationFrame(() => {
        var v;
        if (s.value || !O || ((v = r.value) == null ? void 0 : v.activeElement) !== O)
          return;
        let { selectionStart: D, selectionEnd: b } = O;
        Math.abs((b ?? 0) - (D ?? 0)) === 0 && D === 0 && O.setSelectionRange(O.value.length, O.value.length);
      }));
    }, { immediate: !0 }), ie([i.comboboxState], ([d], [T]) => {
      if (d === 0 && T === 1) {
        if (s.value)
          return;
        let p = I(i.inputRef);
        if (!p)
          return;
        let y = p.value, { selectionStart: O, selectionEnd: v, selectionDirection: D } = p;
        p.value = "", p.value = y, D !== null ? p.setSelectionRange(O, v, D) : p.setSelectionRange(O, v);
      }
    });
  });
  let u = M(!1);
  function f() {
    u.value = !0;
  }
  function h() {
    Wt().nextFrame(() => {
      u.value = !1;
    });
  }
  function g(d) {
    switch (s.value = !0, d.key) {
      case N.Enter:
        if (s.value = !1, i.comboboxState.value !== 0 || u.value)
          return;
        if (d.preventDefault(), d.stopPropagation(), i.activeOptionIndex.value === null) {
          i.closeCombobox();
          return;
        }
        i.selectActiveOption(), i.mode.value === 0 && i.closeCombobox();
        break;
      case N.ArrowDown:
        return s.value = !1, d.preventDefault(), d.stopPropagation(), W(i.comboboxState.value, { 0: () => i.goToOption(V.Next), 1: () => i.openCombobox() });
      case N.ArrowUp:
        return s.value = !1, d.preventDefault(), d.stopPropagation(), W(i.comboboxState.value, { 0: () => i.goToOption(V.Previous), 1: () => {
          i.openCombobox(), J(() => {
            i.value.value || i.goToOption(V.Last);
          });
        } });
      case N.Home:
        if (d.shiftKey)
          break;
        return s.value = !1, d.preventDefault(), d.stopPropagation(), i.goToOption(V.First);
      case N.PageUp:
        return s.value = !1, d.preventDefault(), d.stopPropagation(), i.goToOption(V.First);
      case N.End:
        if (d.shiftKey)
          break;
        return s.value = !1, d.preventDefault(), d.stopPropagation(), i.goToOption(V.Last);
      case N.PageDown:
        return s.value = !1, d.preventDefault(), d.stopPropagation(), i.goToOption(V.Last);
      case N.Escape:
        if (s.value = !1, i.comboboxState.value !== 0)
          return;
        d.preventDefault(), i.optionsRef.value && !i.optionsPropsRef.value.static && d.stopPropagation(), i.nullable.value && i.mode.value === 0 && i.value.value === null && c(), i.closeCombobox();
        break;
      case N.Tab:
        if (s.value = !1, i.comboboxState.value !== 0)
          return;
        i.mode.value === 0 && i.selectActiveOption(), i.closeCombobox();
        break;
    }
  }
  function S(d) {
    t("change", d), i.nullable.value && i.mode.value === 0 && d.target.value === "" && c(), i.openCombobox();
  }
  function $() {
    s.value = !1;
  }
  let k = A(() => {
    var d, T, p, y;
    return (y = (p = (T = e.defaultValue) != null ? T : i.defaultValue.value !== void 0 ? (d = e.displayValue) == null ? void 0 : d.call(e, i.defaultValue.value) : null) != null ? p : i.defaultValue.value) != null ? y : "";
  });
  return () => {
    var d, T, p, y, O, v;
    let D = { open: i.comboboxState.value === 0 }, { id: b, displayValue: _, onChange: x, ...j } = e, C = { "aria-controls": (d = i.optionsRef.value) == null ? void 0 : d.id, "aria-expanded": i.comboboxState.value === 0, "aria-activedescendant": i.activeOptionIndex.value === null || (T = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : T.id, "aria-labelledby": (O = (p = I(i.labelRef)) == null ? void 0 : p.id) != null ? O : (y = I(i.buttonRef)) == null ? void 0 : y.id, "aria-autocomplete": "list", id: b, onCompositionstart: f, onCompositionend: h, onKeydown: g, onInput: S, onBlur: $, role: "combobox", type: (v = o.type) != null ? v : "text", tabIndex: 0, ref: i.inputRef, defaultValue: k.value, disabled: i.disabled.value === !0 ? !0 : void 0 };
    return Z({ ourProps: C, theirProps: j, slot: D, attrs: o, slots: a, features: de.RenderStrategy | de.Static, name: "ComboboxInput" });
  };
} }), ha = Q({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: o, expose: a }) {
  let n = we("ComboboxOptions"), i = `headlessui-combobox-options-${se()}`;
  a({ el: n.optionsRef, $el: n.optionsRef }), ue(() => {
    n.optionsPropsRef.value.static = e.static;
  }), ue(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = Lt(), s = A(() => r !== null ? (r.value & re.Open) === re.Open : n.comboboxState.value === 0);
  return ea({ container: A(() => I(n.optionsRef)), enabled: A(() => n.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, l, u;
    let f = { open: n.comboboxState.value === 0 }, h = { "aria-labelledby": (u = (c = I(n.labelRef)) == null ? void 0 : c.id) != null ? u : (l = I(n.buttonRef)) == null ? void 0 : l.id, id: i, ref: n.optionsRef, role: "listbox", "aria-multiselectable": n.mode.value === 1 ? !0 : void 0 }, g = Ne(e, ["hold"]);
    return Z({ ourProps: h, theirProps: g, slot: f, attrs: t, slots: o, features: de.RenderStrategy | de.Static, visible: s.value, name: "ComboboxOptions" });
  };
} }), ba = Q({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o, expose: a }) {
  let n = we("ComboboxOption"), i = `headlessui-combobox-option-${se()}`, r = M(null);
  a({ el: r, $el: r });
  let s = A(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === i : !1), c = A(() => W(n.mode.value, { 0: () => n.compare(F(n.value.value), F(e.value)), 1: () => F(n.value.value).some((k) => n.compare(F(k), F(e.value))) })), l = A(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  ae(() => n.registerOption(i, l)), tt(() => n.unregisterOption(i)), ue(() => {
    n.comboboxState.value === 0 && s.value && n.activationTrigger.value !== 0 && J(() => {
      var k, d;
      return (d = (k = I(r)) == null ? void 0 : k.scrollIntoView) == null ? void 0 : d.call(k, { block: "nearest" });
    });
  });
  function u(k) {
    if (e.disabled)
      return k.preventDefault();
    n.selectOption(i), n.mode.value === 0 && n.closeCombobox(), la() || requestAnimationFrame(() => {
      var d;
      return (d = I(n.inputRef)) == null ? void 0 : d.focus();
    });
  }
  function f() {
    if (e.disabled)
      return n.goToOption(V.Nothing);
    n.goToOption(V.Specific, i);
  }
  let h = Kt();
  function g(k) {
    h.update(k);
  }
  function S(k) {
    h.wasMoved(k) && (e.disabled || s.value || n.goToOption(V.Specific, i, 0));
  }
  function $(k) {
    h.wasMoved(k) && (e.disabled || s.value && (n.optionsPropsRef.value.hold || n.goToOption(V.Nothing)));
  }
  return () => {
    let { disabled: k } = e, d = { active: s.value, selected: c.value, disabled: k }, T = { id: i, ref: r, role: "option", tabIndex: k === !0 ? void 0 : -1, "aria-disabled": k === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: u, onFocus: f, onPointerenter: g, onMouseenter: g, onPointermove: S, onMousemove: S, onPointerleave: $, onMouseleave: $ };
    return Z({ ourProps: T, theirProps: e, slot: d, attrs: o, slots: t, name: "ComboboxOption" });
  };
} }), xt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function wt(e) {
  var t, o;
  let a = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return a;
  let i = !1;
  for (let s of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    s.remove(), i = !0;
  let r = i ? (o = n.innerText) != null ? o : "" : a;
  return xt.test(r) && (r = r.replace(xt, "")), r;
}
function ga(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let o = e.getAttribute("aria-labelledby");
  if (o) {
    let a = o.split(" ").map((n) => {
      let i = document.getElementById(n);
      if (i) {
        let r = i.getAttribute("aria-label");
        return typeof r == "string" ? r.trim() : wt(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (a.length > 0)
      return a.join(", ");
  }
  return wt(e).trim();
}
function ya(e) {
  let t = M(""), o = M("");
  return () => {
    let a = I(e);
    if (!a)
      return "";
    let n = a.innerText;
    if (t.value === n)
      return o.value;
    let i = ga(a).trim().toLowerCase();
    return t.value = n, o.value = i, i;
  };
}
function xa(e, t) {
  return e === t;
}
var wa = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(wa || {}), _a = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(_a || {}), Sa = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Sa || {});
function $a(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Jt = Symbol("ListboxContext");
function Ae(e) {
  let t = Me(Jt, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Ae), o;
  }
  return t;
}
let Oa = Q({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => xa }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: o, emit: a }) {
  let n = M(1), i = M(null), r = M(null), s = M(null), c = M([]), l = M(""), u = M(null), f = M(1);
  function h(p = (y) => y) {
    let y = u.value !== null ? c.value[u.value] : null, O = Bt(p(c.value.slice()), (D) => I(D.dataRef.domRef)), v = y ? O.indexOf(y) : null;
    return v === -1 && (v = null), { options: O, activeOptionIndex: v };
  }
  let g = A(() => e.multiple ? 1 : 0), [S, $] = Ut(A(() => e.modelValue), (p) => a("update:modelValue", p), A(() => e.defaultValue)), k = A(() => S.value === void 0 ? W(g.value, { 1: [], 0: void 0 }) : S.value), d = { listboxState: n, value: k, mode: g, compare(p, y) {
    if (typeof e.by == "string") {
      let O = e.by;
      return (p == null ? void 0 : p[O]) === (y == null ? void 0 : y[O]);
    }
    return e.by(p, y);
  }, orientation: A(() => e.horizontal ? "horizontal" : "vertical"), labelRef: i, buttonRef: r, optionsRef: s, disabled: A(() => e.disabled), options: c, searchQuery: l, activeOptionIndex: u, activationTrigger: f, closeListbox() {
    e.disabled || n.value !== 1 && (n.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(p, y, O) {
    if (e.disabled || n.value === 1)
      return;
    let v = h(), D = Dt(p === V.Specific ? { focus: V.Specific, id: y } : { focus: p }, { resolveItems: () => v.options, resolveActiveIndex: () => v.activeOptionIndex, resolveId: (b) => b.id, resolveDisabled: (b) => b.dataRef.disabled });
    l.value = "", u.value = D, f.value = O ?? 1, c.value = v.options;
  }, search(p) {
    if (e.disabled || n.value === 1)
      return;
    let y = l.value !== "" ? 0 : 1;
    l.value += p.toLowerCase();
    let O = (u.value !== null ? c.value.slice(u.value + y).concat(c.value.slice(0, u.value + y)) : c.value).find((D) => D.dataRef.textValue.startsWith(l.value) && !D.dataRef.disabled), v = O ? c.value.indexOf(O) : -1;
    v === -1 || v === u.value || (u.value = v, f.value = 1);
  }, clearSearch() {
    e.disabled || n.value !== 1 && l.value !== "" && (l.value = "");
  }, registerOption(p, y) {
    let O = h((v) => [...v, { id: p, dataRef: y }]);
    c.value = O.options, u.value = O.activeOptionIndex;
  }, unregisterOption(p) {
    let y = h((O) => {
      let v = O.findIndex((D) => D.id === p);
      return v !== -1 && O.splice(v, 1), O;
    });
    c.value = y.options, u.value = y.activeOptionIndex, f.value = 1;
  }, theirOnChange(p) {
    e.disabled || $(p);
  }, select(p) {
    e.disabled || $(W(g.value, { 0: () => p, 1: () => {
      let y = F(d.value.value).slice(), O = F(p), v = y.findIndex((D) => d.compare(O, F(D)));
      return v === -1 ? y.push(O) : y.splice(v, 1), y;
    } }));
  } };
  Vt([r, s], (p, y) => {
    var O;
    d.closeListbox(), Ft(y, st.Loose) || (p.preventDefault(), (O = I(r)) == null || O.focus());
  }, A(() => n.value === 0)), Fe(Jt, d), jt(A(() => W(n.value, { 0: re.Open, 1: re.Closed })));
  let T = A(() => {
    var p;
    return (p = I(r)) == null ? void 0 : p.closest("form");
  });
  return ae(() => {
    ie([T], () => {
      if (!T.value || e.defaultValue === void 0)
        return;
      function p() {
        d.theirOnChange(e.defaultValue);
      }
      return T.value.addEventListener("reset", p), () => {
        var y;
        (y = T.value) == null || y.removeEventListener("reset", p);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: p, modelValue: y, disabled: O, form: v, ...D } = e, b = { open: n.value === 0, disabled: O, value: k.value };
    return Oe(ne, [...p != null && k.value != null ? ut({ [p]: k.value }).map(([_, x]) => Oe(Nt, Pt({ features: lt.Hidden, key: _, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: v, name: _, value: x }))) : [], Z({ ourProps: {}, theirProps: { ...o, ...Ne(D, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: b, slots: t, attrs: o, name: "Listbox" })]);
  };
} });
Q({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let a = Ae("ListboxLabel");
  function n() {
    var i;
    (i = I(a.buttonRef)) == null || i.focus({ preventScroll: !0 });
  }
  return () => {
    let i = { open: a.listboxState.value === 0, disabled: a.disabled.value }, { id: r, ...s } = e, c = { id: r, ref: a.labelRef, onClick: n };
    return Z({ ourProps: c, theirProps: s, slot: i, attrs: t, slots: o, name: "ListboxLabel" });
  };
} });
let ka = Q({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${se()}` } }, setup(e, { attrs: t, slots: o, expose: a }) {
  let n = Ae("ListboxButton");
  a({ el: n.buttonRef, $el: n.buttonRef });
  function i(l) {
    switch (l.key) {
      case N.Space:
      case N.Enter:
      case N.ArrowDown:
        l.preventDefault(), n.openListbox(), J(() => {
          var u;
          (u = I(n.optionsRef)) == null || u.focus({ preventScroll: !0 }), n.value.value || n.goToOption(V.First);
        });
        break;
      case N.ArrowUp:
        l.preventDefault(), n.openListbox(), J(() => {
          var u;
          (u = I(n.optionsRef)) == null || u.focus({ preventScroll: !0 }), n.value.value || n.goToOption(V.Last);
        });
        break;
    }
  }
  function r(l) {
    switch (l.key) {
      case N.Space:
        l.preventDefault();
        break;
    }
  }
  function s(l) {
    n.disabled.value || (n.listboxState.value === 0 ? (n.closeListbox(), J(() => {
      var u;
      return (u = I(n.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (l.preventDefault(), n.openListbox(), $a(() => {
      var u;
      return (u = I(n.optionsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let c = Mt(A(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var l, u;
    let f = { open: n.listboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: h, ...g } = e, S = { ref: n.buttonRef, id: h, type: c.value, "aria-haspopup": "listbox", "aria-controls": (l = I(n.optionsRef)) == null ? void 0 : l.id, "aria-expanded": n.listboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(u = I(n.labelRef)) == null ? void 0 : u.id, h].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: i, onKeyup: r, onClick: s };
    return Z({ ourProps: S, theirProps: g, slot: f, attrs: t, slots: o, name: "ListboxButton" });
  };
} }), za = Q({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${se()}` } }, setup(e, { attrs: t, slots: o, expose: a }) {
  let n = Ae("ListboxOptions"), i = M(null);
  a({ el: n.optionsRef, $el: n.optionsRef });
  function r(l) {
    switch (i.value && clearTimeout(i.value), l.key) {
      case N.Space:
        if (n.searchQuery.value !== "")
          return l.preventDefault(), l.stopPropagation(), n.search(l.key);
      case N.Enter:
        if (l.preventDefault(), l.stopPropagation(), n.activeOptionIndex.value !== null) {
          let u = n.options.value[n.activeOptionIndex.value];
          n.select(u.dataRef.value);
        }
        n.mode.value === 0 && (n.closeListbox(), J(() => {
          var u;
          return (u = I(n.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        }));
        break;
      case W(n.orientation.value, { vertical: N.ArrowDown, horizontal: N.ArrowRight }):
        return l.preventDefault(), l.stopPropagation(), n.goToOption(V.Next);
      case W(n.orientation.value, { vertical: N.ArrowUp, horizontal: N.ArrowLeft }):
        return l.preventDefault(), l.stopPropagation(), n.goToOption(V.Previous);
      case N.Home:
      case N.PageUp:
        return l.preventDefault(), l.stopPropagation(), n.goToOption(V.First);
      case N.End:
      case N.PageDown:
        return l.preventDefault(), l.stopPropagation(), n.goToOption(V.Last);
      case N.Escape:
        l.preventDefault(), l.stopPropagation(), n.closeListbox(), J(() => {
          var u;
          return (u = I(n.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        break;
      case N.Tab:
        l.preventDefault(), l.stopPropagation();
        break;
      default:
        l.key.length === 1 && (n.search(l.key), i.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  let s = Lt(), c = A(() => s !== null ? (s.value & re.Open) === re.Open : n.listboxState.value === 0);
  return () => {
    var l, u, f, h;
    let g = { open: n.listboxState.value === 0 }, { id: S, ...$ } = e, k = { "aria-activedescendant": n.activeOptionIndex.value === null || (l = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : l.id, "aria-multiselectable": n.mode.value === 1 ? !0 : void 0, "aria-labelledby": (h = (u = I(n.labelRef)) == null ? void 0 : u.id) != null ? h : (f = I(n.buttonRef)) == null ? void 0 : f.id, "aria-orientation": n.orientation.value, id: S, onKeydown: r, role: "listbox", tabIndex: 0, ref: n.optionsRef };
    return Z({ ourProps: k, theirProps: $, slot: g, attrs: t, slots: o, features: de.RenderStrategy | de.Static, visible: c.value, name: "ListboxOptions" });
  };
} }), Ta = Q({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${se()}` } }, setup(e, { slots: t, attrs: o, expose: a }) {
  let n = Ae("ListboxOption"), i = M(null);
  a({ el: i, $el: i });
  let r = A(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === e.id : !1), s = A(() => W(n.mode.value, { 0: () => n.compare(F(n.value.value), F(e.value)), 1: () => F(n.value.value).some((d) => n.compare(F(d), F(e.value))) })), c = A(() => W(n.mode.value, { 1: () => {
    var d;
    let T = F(n.value.value);
    return ((d = n.options.value.find((p) => T.some((y) => n.compare(F(y), F(p.dataRef.value))))) == null ? void 0 : d.id) === e.id;
  }, 0: () => s.value })), l = ya(i), u = A(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return l();
  }, domRef: i }));
  ae(() => n.registerOption(e.id, u)), tt(() => n.unregisterOption(e.id)), ae(() => {
    ie([n.listboxState, s], () => {
      n.listboxState.value === 0 && s.value && W(n.mode.value, { 1: () => {
        c.value && n.goToOption(V.Specific, e.id);
      }, 0: () => {
        n.goToOption(V.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), ue(() => {
    n.listboxState.value === 0 && r.value && n.activationTrigger.value !== 0 && J(() => {
      var d, T;
      return (T = (d = I(i)) == null ? void 0 : d.scrollIntoView) == null ? void 0 : T.call(d, { block: "nearest" });
    });
  });
  function f(d) {
    if (e.disabled)
      return d.preventDefault();
    n.select(e.value), n.mode.value === 0 && (n.closeListbox(), J(() => {
      var T;
      return (T = I(n.buttonRef)) == null ? void 0 : T.focus({ preventScroll: !0 });
    }));
  }
  function h() {
    if (e.disabled)
      return n.goToOption(V.Nothing);
    n.goToOption(V.Specific, e.id);
  }
  let g = Kt();
  function S(d) {
    g.update(d);
  }
  function $(d) {
    g.wasMoved(d) && (e.disabled || r.value || n.goToOption(V.Specific, e.id, 0));
  }
  function k(d) {
    g.wasMoved(d) && (e.disabled || r.value && n.goToOption(V.Nothing));
  }
  return () => {
    let { disabled: d } = e, T = { active: r.value, selected: s.value, disabled: d }, { id: p, value: y, disabled: O, ...v } = e, D = { id: p, ref: i, role: "option", tabIndex: d === !0 ? void 0 : -1, "aria-disabled": d === !0 ? !0 : void 0, "aria-selected": s.value, disabled: void 0, onClick: f, onFocus: h, onPointerenter: S, onMouseenter: S, onPointermove: $, onMousemove: $, onPointerleave: k, onMouseleave: k };
    return Z({ ourProps: D, theirProps: v, slot: T, attrs: o, slots: t, name: "ListboxOption" });
  };
} });
const Aa = {}, Ca = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Ra = /* @__PURE__ */ w(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 12.75l6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), Ia = [
  Ra
];
function Pa(e, t) {
  return m(), z("svg", Ca, Ia);
}
const Yt = /* @__PURE__ */ L(Aa, [["render", Pa], ["__file", "/home/harry/Sites/ui/src/components/Icons/CheckIcon.vue"]]), Da = {};
function Ea(e, t) {
  return m(), U(Te, {
    "enter-active-class": "transition ease-out duration-200",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95"
  }, {
    default: P(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
const He = /* @__PURE__ */ L(Da, [["render", Ea], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeScaleTransition.vue"]]), La = {}, ja = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Ma = /* @__PURE__ */ w(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), Fa = [
  Ma
];
function Ba(e, t) {
  return m(), z("svg", ja, Fa);
}
const Xt = /* @__PURE__ */ L(La, [["render", Ba], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronDownIcon.vue"]]), Va = { class: "text-sm" }, Na = {
  inheritAttrs: !1
}, Ha = /* @__PURE__ */ Object.assign(Na, {
  __name: "SelectInput",
  props: {
    ...ge,
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
    return (t, o) => (m(), U(
      at,
      nt(ot(
        Object.keys(E(ge)).reduce((a, n) => (a[n] = t.$props[n], a), {})
      )),
      {
        default: P(() => [
          q(E(Oa), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": o[0] || (o[0] = (a) => t.$emit("update:modelValue", a))
          }, {
            default: P(() => [
              q(E(ka), {
                class: K({
                  "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                  "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
                })
              }, {
                default: P(() => {
                  var a, n;
                  return [
                    w(
                      "div",
                      Va,
                      oe(Array.isArray(e.modelValue) ? (a = e.modelValue) == null ? void 0 : a.map((i) => i.name).join(", ") : ((n = e.modelValue) == null ? void 0 : n.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    q(Xt, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class"]),
              q(He, null, {
                default: P(() => [
                  q(E(za), {
                    class: K(["overflow-y-auto max-h-64 min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                      "right-0": e.align === "right",
                      "left-0": e.align === "left"
                    }])
                  }, {
                    default: P(() => [
                      R(t.$slots, "listbox-title"),
                      (m(!0), z(
                        ne,
                        null,
                        Be(e.options, (a) => (m(), U(E(Ta), {
                          key: a.id,
                          value: a,
                          as: "template"
                        }, {
                          default: P(({ active: n, selected: i }) => [
                            w(
                              "li",
                              {
                                class: K(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                                  "bg-zinc-50 dark:bg-zinc-900": i,
                                  "bg-zinc-100 dark:bg-zinc-700": n
                                }])
                              },
                              [
                                ce(
                                  oe(a.name) + " ",
                                  1
                                  /* TEXT */
                                ),
                                i ? (m(), U(Yt, {
                                  key: 0,
                                  class: "h-5 w-5"
                                })) : B("v-if", !0)
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
}), ss = /* @__PURE__ */ L(Ha, [["__file", "/home/harry/Sites/ui/src/components/Inputs/SelectInput.vue"]]), qa = { class: "text-sm" }, Ua = {
  inheritAttrs: !1
}, Ka = /* @__PURE__ */ Object.assign(Ua, {
  __name: "AutocompleteInput",
  props: {
    ...ge,
    options: Array,
    modelValue: [Object, Array],
    multiple: Boolean,
    displayValue: Function,
    appearance: {
      type: String,
      default: "select"
    },
    defaultText: String,
    align: {
      type: String,
      default: "left"
    },
    query: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "update:query"],
  setup(e) {
    return (t, o) => (m(), U(
      at,
      nt(ot(
        Object.keys(E(ge)).reduce((a, n) => (a[n] = t.$props[n], a), {})
      )),
      {
        default: P(() => [
          q(E(va), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": o[1] || (o[1] = (a) => t.$emit("update:modelValue", a))
          }, {
            default: P(() => [
              q(E(ma), {
                class: "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2 text-left text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600",
                "display-value": e.displayValue ?? ((a) => a),
                onChange: o[0] || (o[0] = (a) => t.$emit("update:query", a.target.value))
              }, {
                default: P(() => {
                  var a, n;
                  return [
                    w(
                      "div",
                      qa,
                      oe(Array.isArray(e.modelValue) ? (a = e.modelValue) == null ? void 0 : a.map((i) => i.name).join(", ") : ((n = e.modelValue) == null ? void 0 : n.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    q(Xt, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["display-value"]),
              q(He, null, {
                default: P(() => [
                  q(E(ha), {
                    class: K(["min-w-64 absolute z-50 mt-3 origin-top rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                      "right-0": e.align === "right",
                      "left-0": e.align === "left"
                    }])
                  }, {
                    default: P(() => [
                      R(t.$slots, "listbox-title"),
                      (m(!0), z(
                        ne,
                        null,
                        Be(e.options, (a) => (m(), U(E(ba), {
                          key: a.id,
                          value: a,
                          as: "template"
                        }, {
                          default: P(({ active: n, selected: i }) => [
                            w(
                              "li",
                              {
                                class: K(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                                  "bg-zinc-50 dark:bg-zinc-900": i,
                                  "bg-zinc-100 dark:bg-zinc-700": n
                                }])
                              },
                              [
                                ce(
                                  oe(a.name) + " ",
                                  1
                                  /* TEXT */
                                ),
                                i ? (m(), U(Yt, {
                                  key: 0,
                                  class: "h-5 w-5"
                                })) : B("v-if", !0)
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
}), ls = /* @__PURE__ */ L(Ka, [["__file", "/home/harry/Sites/ui/src/components/Inputs/AutocompleteInput.vue"]]);
function Qt(e) {
  return gn() ? (yn(e), !0) : !1;
}
function ct(e) {
  return typeof e == "function" ? e() : E(e);
}
const Wa = typeof window < "u" && typeof document < "u", Ga = Object.prototype.toString, Ja = (e) => Ga.call(e) === "[object Object]", Ya = () => {
};
function Xa(e, t) {
  function o(...a) {
    return new Promise((n, i) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(n).catch(i);
    });
  }
  return o;
}
const Zt = (e) => e();
function Qa(e = Zt) {
  const t = M(!0);
  function o() {
    t.value = !1;
  }
  function a() {
    t.value = !0;
  }
  const n = (...i) => {
    t.value && e(...i);
  };
  return { isActive: xn(t), pause: o, resume: a, eventFilter: n };
}
function Za(e, t, o = {}) {
  const {
    eventFilter: a = Zt,
    ...n
  } = o;
  return ie(
    e,
    Xa(
      a,
      t
    ),
    n
  );
}
function ei(e, t, o = {}) {
  const {
    eventFilter: a,
    ...n
  } = o, { eventFilter: i, pause: r, resume: s, isActive: c } = Qa(a);
  return { stop: Za(
    e,
    t,
    {
      ...n,
      eventFilter: i
    }
  ), pause: r, resume: s, isActive: c };
}
function Xe(e) {
  var t;
  const o = ct(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ke = Wa ? window : void 0;
function _t(...e) {
  let t, o, a, n;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, a, n] = e, t = ke) : [t, o, a, n] = e, !t)
    return Ya;
  Array.isArray(o) || (o = [o]), Array.isArray(a) || (a = [a]);
  const i = [], r = () => {
    i.forEach((u) => u()), i.length = 0;
  }, s = (u, f, h, g) => (u.addEventListener(f, h, g), () => u.removeEventListener(f, h, g)), c = ie(
    () => [Xe(t), ct(n)],
    ([u, f]) => {
      if (r(), !u)
        return;
      const h = Ja(f) ? { ...f } : f;
      i.push(
        ...o.flatMap((g) => a.map((S) => s(u, g, S, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    c(), r();
  };
  return Qt(l), l;
}
function ti() {
  const e = M(!1);
  return wn() && ae(() => {
    e.value = !0;
  }), e;
}
function ni(e) {
  const t = ti();
  return A(() => (t.value, !!e()));
}
const Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ie = "__vueuse_ssr_handlers__", oi = /* @__PURE__ */ ai();
function ai() {
  return Ie in Re || (Re[Ie] = Re[Ie] || {}), Re[Ie];
}
function ii(e, t) {
  return oi[e] || t;
}
function ri(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const si = {
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
}, St = "vueuse-storage";
function li(e, t, o, a = {}) {
  var n;
  const {
    flush: i = "pre",
    deep: r = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: c = !0,
    mergeDefaults: l = !1,
    shallow: u,
    window: f = ke,
    eventFilter: h,
    onError: g = (b) => {
      console.error(b);
    }
  } = a, S = (u ? _n : M)(t);
  if (!o)
    try {
      o = ii("getDefaultStorage", () => {
        var b;
        return (b = ke) == null ? void 0 : b.localStorage;
      })();
    } catch (b) {
      g(b);
    }
  if (!o)
    return S;
  const $ = ct(t), k = ri($), d = (n = a.serializer) != null ? n : si[k], { pause: T, resume: p } = ei(
    S,
    () => y(S.value),
    { flush: i, deep: r, eventFilter: h }
  );
  return f && s && (_t(f, "storage", D), _t(f, St, v)), D(), S;
  function y(b) {
    try {
      if (b == null)
        o.removeItem(e);
      else {
        const _ = d.write(b), x = o.getItem(e);
        x !== _ && (o.setItem(e, _), f && f.dispatchEvent(new CustomEvent(St, {
          detail: {
            key: e,
            oldValue: x,
            newValue: _,
            storageArea: o
          }
        })));
      }
    } catch (_) {
      g(_);
    }
  }
  function O(b) {
    const _ = b ? b.newValue : o.getItem(e);
    if (_ == null)
      return c && $ !== null && o.setItem(e, d.write($)), $;
    if (!b && l) {
      const x = d.read(_);
      return typeof l == "function" ? l(x, $) : k === "object" && !Array.isArray(x) ? { ...$, ...x } : x;
    } else
      return typeof _ != "string" ? _ : d.read(_);
  }
  function v(b) {
    D(b.detail);
  }
  function D(b) {
    if (!(b && b.storageArea !== o)) {
      if (b && b.key == null) {
        S.value = $;
        return;
      }
      if (!(b && b.key !== e)) {
        T();
        try {
          (b == null ? void 0 : b.newValue) !== d.write(S.value) && (S.value = O(b));
        } catch (_) {
          g(_);
        } finally {
          b ? J(p) : p();
        }
      }
    }
  }
}
function ui(e, t, o = {}) {
  const { window: a = ke, ...n } = o;
  let i;
  const r = ni(() => a && "ResizeObserver" in a), s = () => {
    i && (i.disconnect(), i = void 0);
  }, c = A(
    () => Array.isArray(e) ? e.map((f) => Xe(f)) : [Xe(e)]
  ), l = ie(
    c,
    (f) => {
      if (s(), r.value && a) {
        i = new ResizeObserver(t);
        for (const h of f)
          h && i.observe(h, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), u = () => {
    s(), l();
  };
  return Qt(u), {
    isSupported: r,
    stop: u
  };
}
function ci(e, t, o = {}) {
  const { window: a = ke } = o;
  return li(e, t, a == null ? void 0 : a.localStorage, o);
}
const di = {}, fi = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, pi = /* @__PURE__ */ w(
  "g",
  { fill: "none" },
  [
    /* @__PURE__ */ w("path", {
      d: "M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0z",
      fill: "currentColor"
    })
  ],
  -1
  /* HOISTED */
), vi = [
  pi
];
function mi(e, t) {
  return m(), z("svg", fi, vi);
}
const hi = /* @__PURE__ */ L(di, [["render", mi], ["__file", "/home/harry/Sites/ui/src/components/Icons/ChevronRightIcon.vue"]]), bi = { class: "flex flex-col gap-6 py-6" }, gi = { class: "flex flex-col gap-6 mb-6" }, yi = {
  __name: "Sidebar",
  setup(e) {
    const t = ci("ui/sidebar", !1);
    return Fe("sidebarMinimised", t), (o, a) => (m(), z(
      "nav",
      {
        class: K(["min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10", {
          "!w-24 !max-w-24 !min-w-24": E(t),
          "w-64 max-w-64 min-w-64": !E(t)
        }])
      },
      [
        w("button", {
          class: "absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-10",
          onClick: a[0] || (a[0] = (n) => t.value = !E(t))
        }, [
          q(hi, {
            class: K(["w-5 h-5", {
              "transform rotate-180": !E(t)
            }])
          }, null, 8, ["class"])
        ]),
        B(" Primary Navigation Menu "),
        w("div", bi, [
          B(" Logo "),
          R(o.$slots, "default")
        ]),
        w("div", gi, [
          R(o.$slots, "bottom")
        ])
      ],
      2
      /* CLASS */
    ));
  }
}, us = /* @__PURE__ */ L(yi, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/Sidebar.vue"]]), xi = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3"
}, wi = {
  __name: "SidebarItem",
  props: {
    as: {
      type: [Object, String, Function],
      default: "a"
    },
    active: {
      type: Boolean
    },
    icon: {
      type: [Object, Function]
    }
  },
  setup(e) {
    const t = e, o = Me("sidebarMinimised"), a = A(() => {
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
    return (n, i) => (m(), U(le(e.as), {
      class: K(a.value)
    }, {
      default: P(() => [
        e.icon ? (m(), U(le(e.icon), {
          key: 0,
          class: K(["w-6 h-6 transition-all", {
            " mr-4": !E(o)
          }])
        }, null, 8, ["class"])) : B("v-if", !0),
        q(Te, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "transform opacity-0",
          "enter-to-class": "transform opacity-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100",
          "leave-to-class": "transform opacity-0"
        }, {
          default: P(() => [
            E(o) ? B("v-if", !0) : R(n.$slots, "default", { key: 0 })
          ]),
          _: 3
          /* FORWARDED */
        }),
        E(o) ? (m(), z("div", xi, [
          R(n.$slots, "default")
        ])) : B("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, cs = /* @__PURE__ */ L(wi, [["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItem.vue"]]), _i = {}, Si = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, $i = { class: "flex w-full h-full max-h-screen z-10 relative" }, Oi = { class: "flex-grow overflow-y-auto pb-12 z-10" };
function ki(e, t) {
  return m(), z("div", Si, [
    R(e.$slots, "top"),
    w("div", $i, [
      R(e.$slots, "sidebar"),
      w("section", Oi, [
        R(e.$slots, "default")
      ])
    ])
  ]);
}
const ds = /* @__PURE__ */ L(_i, [["render", ki], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarLayout.vue"]]), zi = {}, Ti = { class: "flex flex-col gap-2 px-2" };
function Ai(e, t) {
  return m(), z("div", Ti, [
    R(e.$slots, "default")
  ]);
}
const fs = /* @__PURE__ */ L(zi, [["render", Ai], ["__file", "/home/harry/Sites/ui/src/components/Sidebar/SidebarItemGroup.vue"]]), Ci = {};
function Ri(e, t) {
  return m(), U(Te, {
    "enter-active-class": "transition ease-out duration-300",
    "enter-from-class": "transform opacity-0",
    "enter-to-class": "transform opacity-100",
    "leave-active-class": "transition ease-in duration-200",
    "leave-from-class": "transform opacity-100",
    "leave-to-class": "transform opacity-0"
  }, {
    default: P(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
const en = /* @__PURE__ */ L(Ci, [["render", Ri], ["__file", "/home/harry/Sites/ui/src/components/Transitions/FadeTransition.vue"]]);
function Ii(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
const tn = (e, t, o) => Math.min(Math.max(o, e), t), X = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
}, ze = (e) => typeof e == "number", me = (e) => Array.isArray(e) && !ze(e[0]), Pi = (e, t, o) => {
  const a = t - e;
  return ((o - e) % a + a) % a + e;
};
function Di(e, t) {
  return me(e) ? e[Pi(0, e.length, t)] : e;
}
const nn = (e, t, o) => -o * e + o * t + e, on = () => {
}, te = (e) => e, dt = (e, t, o) => t - e === 0 ? 1 : (o - e) / (t - e);
function an(e, t) {
  const o = e[e.length - 1];
  for (let a = 1; a <= t; a++) {
    const n = dt(0, t, a);
    e.push(nn(o, 1, n));
  }
}
function Ei(e) {
  const t = [0];
  return an(t, e - 1), t;
}
function Li(e, t = Ei(e.length), o = te) {
  const a = e.length, n = a - t.length;
  return n > 0 && an(t, n), (i) => {
    let r = 0;
    for (; r < a - 2 && !(i < t[r + 1]); r++)
      ;
    let s = tn(0, 1, dt(t[r], t[r + 1], i));
    return s = Di(o, r)(s), nn(e[r], e[r + 1], s);
  };
}
const rn = (e) => Array.isArray(e) && ze(e[0]), Qe = (e) => typeof e == "object" && !!e.createAnimation, ye = (e) => typeof e == "function", sn = (e) => typeof e == "string", he = {
  ms: (e) => e * 1e3,
  s: (e) => e / 1e3
};
function ji(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ln = (e, t, o) => (((1 - 3 * o + 3 * t) * e + (3 * o - 6 * t)) * e + 3 * t) * e, Mi = 1e-7, Fi = 12;
function Bi(e, t, o, a, n) {
  let i, r, s = 0;
  do
    r = t + (o - t) / 2, i = ln(r, a, n) - e, i > 0 ? o = r : t = r;
  while (Math.abs(i) > Mi && ++s < Fi);
  return r;
}
function Se(e, t, o, a) {
  if (e === t && o === a)
    return te;
  const n = (i) => Bi(i, 0, 1, e, o);
  return (i) => i === 0 || i === 1 ? i : ln(n(i), t, a);
}
const Vi = (e, t = "end") => (o) => {
  o = t === "end" ? Math.min(o, 0.999) : Math.max(o, 1e-3);
  const a = o * e, n = t === "end" ? Math.floor(a) : Math.ceil(a);
  return tn(0, 1, n / e);
}, $t = {
  ease: Se(0.25, 0.1, 0.25, 1),
  "ease-in": Se(0.42, 0, 1, 1),
  "ease-in-out": Se(0.42, 0, 0.58, 1),
  "ease-out": Se(0, 0, 0.58, 1)
}, Ni = /\((.*?)\)/;
function Ot(e) {
  if (ye(e))
    return e;
  if (rn(e))
    return Se(...e);
  if ($t[e])
    return $t[e];
  if (e.startsWith("steps")) {
    const t = Ni.exec(e);
    if (t) {
      const o = t[1].split(",");
      return Vi(parseFloat(o[0]), o[1].trim());
    }
  }
  return te;
}
class un {
  constructor(t, o = [0, 1], { easing: a, duration: n = X.duration, delay: i = X.delay, endDelay: r = X.endDelay, repeat: s = X.repeat, offset: c, direction: l = "normal" } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = te, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((f, h) => {
      this.resolve = f, this.reject = h;
    }), a = a || X.easing, Qe(a)) {
      const f = a.createAnimation(o);
      a = f.easing, o = f.keyframes || o, n = f.duration || n;
    }
    this.repeat = s, this.easing = me(a) ? te : Ot(a), this.updateDuration(n);
    const u = Li(o, c, me(a) ? a.map(Ot) : te);
    this.tick = (f) => {
      var h;
      i = i;
      let g = 0;
      this.pauseTime !== void 0 ? g = this.pauseTime : g = (f - this.startTime) * this.rate, this.t = g, g /= 1e3, g = Math.max(g - i, 0), this.playState === "finished" && this.pauseTime === void 0 && (g = this.totalDuration);
      const S = g / this.duration;
      let $ = Math.floor(S), k = S % 1;
      !k && S >= 1 && (k = 1), k === 1 && $--;
      const d = $ % 2;
      (l === "reverse" || l === "alternate" && d || l === "alternate-reverse" && !d) && (k = 1 - k);
      const T = g >= this.totalDuration ? 1 : Math.min(k, 1), p = u(this.easing(T));
      t(p), this.pauseTime === void 0 && (this.playState === "finished" || g >= this.totalDuration + r) ? (this.playState = "finished", (h = this.resolve) === null || h === void 0 || h.call(this, p)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
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
var Ze = function() {
};
process.env.NODE_ENV !== "production" && (Ze = function(e, t) {
  if (!e)
    throw new Error(t);
});
class Hi {
  setAnimation(t) {
    this.animation = t, t == null || t.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const Ue = /* @__PURE__ */ new WeakMap();
function cn(e) {
  return Ue.has(e) || Ue.set(e, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), Ue.get(e);
}
function qi(e, t) {
  return e.has(t) || e.set(t, new Hi()), e.get(t);
}
const Ui = ["", "X", "Y", "Z"], Ki = ["translate", "scale", "rotate", "skew"], Ee = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
}, kt = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (e) => e + "deg"
}, Wi = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (e) => e + "px"
  },
  rotate: kt,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: te
  },
  skew: kt
}, xe = /* @__PURE__ */ new Map(), ft = (e) => `--motion-${e}`, Le = ["x", "y", "z"];
Ki.forEach((e) => {
  Ui.forEach((t) => {
    Le.push(e + t), xe.set(ft(e + t), Wi[e]);
  });
});
const Gi = (e, t) => Le.indexOf(e) - Le.indexOf(t), Ji = new Set(Le), dn = (e) => Ji.has(e), Yi = (e, t) => {
  Ee[t] && (t = Ee[t]);
  const { transforms: o } = cn(e);
  Ii(o, t), e.style.transform = Xi(o);
}, Xi = (e) => e.sort(Gi).reduce(Qi, "").trim(), Qi = (e, t) => `${e} ${t}(var(${ft(t)}))`, et = (e) => e.startsWith("--"), zt = /* @__PURE__ */ new Set();
function Zi(e) {
  if (!zt.has(e)) {
    zt.add(e);
    try {
      const { syntax: t, initialValue: o } = xe.has(e) ? xe.get(e) : {};
      CSS.registerProperty({
        name: e,
        inherits: !1,
        syntax: t,
        initialValue: o
      });
    } catch {
    }
  }
}
const Ke = (e, t) => document.createElement("div").animate(e, t), Tt = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      Ke({ opacity: [1] });
    } catch {
      return !1;
    }
    return !0;
  },
  finished: () => !!Ke({ opacity: [0, 1] }, { duration: 1e-3 }).finished,
  linearEasing: () => {
    try {
      Ke({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }
}, We = {}, pe = {};
for (const e in Tt)
  pe[e] = () => (We[e] === void 0 && (We[e] = Tt[e]()), We[e]);
const er = 0.015, tr = (e, t) => {
  let o = "";
  const a = Math.round(t / er);
  for (let n = 0; n < a; n++)
    o += e(dt(0, a - 1, n)) + ", ";
  return o.substring(0, o.length - 2);
}, At = (e, t) => ye(e) ? pe.linearEasing() ? `linear(${tr(e, t)})` : X.easing : rn(e) ? nr(e) : e, nr = ([e, t, o, a]) => `cubic-bezier(${e}, ${t}, ${o}, ${a})`;
function or(e, t) {
  for (let o = 0; o < e.length; o++)
    e[o] === null && (e[o] = o ? e[o - 1] : t());
  return e;
}
const ar = (e) => Array.isArray(e) ? e : [e];
function je(e) {
  return Ee[e] && (e = Ee[e]), dn(e) ? ft(e) : e;
}
const Pe = {
  get: (e, t) => {
    t = je(t);
    let o = et(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!o && o !== 0) {
      const a = xe.get(t);
      a && (o = a.initialValue);
    }
    return o;
  },
  set: (e, t, o) => {
    t = je(t), et(t) ? e.style.setProperty(t, o) : e.style[t] = o;
  }
};
function fn(e, t = !0) {
  if (!(!e || e.playState === "finished"))
    try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {
    }
}
function pn(e, t) {
  var o;
  let a = (t == null ? void 0 : t.toDefaultUnit) || te;
  const n = e[e.length - 1];
  if (sn(n)) {
    const i = ((o = n.match(/(-?[\d.]+)([a-z%]*)/)) === null || o === void 0 ? void 0 : o[2]) || "";
    i && (a = (r) => r + i);
  }
  return a;
}
function ir() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function rr(e, t, o, a = {}, n) {
  const i = ir(), r = a.record !== !1 && i;
  let s, { duration: c = X.duration, delay: l = X.delay, endDelay: u = X.endDelay, repeat: f = X.repeat, easing: h = X.easing, persist: g = !1, direction: S, offset: $, allowWebkitAcceleration: k = !1 } = a;
  const d = cn(e), T = dn(t);
  let p = pe.waapi();
  T && Yi(e, t);
  const y = je(t), O = qi(d.values, y), v = xe.get(y);
  return fn(O.animation, !(Qe(h) && O.generator) && a.record !== !1), () => {
    const D = () => {
      var x, j;
      return (j = (x = Pe.get(e, y)) !== null && x !== void 0 ? x : v == null ? void 0 : v.initialValue) !== null && j !== void 0 ? j : 0;
    };
    let b = or(ar(o), D);
    const _ = pn(b, v);
    if (Qe(h)) {
      const x = h.createAnimation(b, t !== "opacity", D, y, O);
      h = x.easing, b = x.keyframes || b, c = x.duration || c;
    }
    if (et(y) && (pe.cssRegisterProperty() ? Zi(y) : p = !1), T && !pe.linearEasing() && (ye(h) || me(h) && h.some(ye)) && (p = !1), p) {
      v && (b = b.map((C) => ze(C) ? v.toDefaultUnit(C) : C)), b.length === 1 && (!pe.partialKeyframes() || r) && b.unshift(D());
      const x = {
        delay: he.ms(l),
        duration: he.ms(c),
        endDelay: he.ms(u),
        easing: me(h) ? void 0 : At(h, c),
        direction: S,
        iterations: f + 1,
        fill: "both"
      };
      s = e.animate({
        [y]: b,
        offset: $,
        easing: me(h) ? h.map((C) => At(C, c)) : void 0
      }, x), s.finished || (s.finished = new Promise((C, H) => {
        s.onfinish = C, s.oncancel = H;
      }));
      const j = b[b.length - 1];
      s.finished.then(() => {
        g || (Pe.set(e, y, j), s.cancel());
      }).catch(on), k || (s.playbackRate = 1.000001);
    } else if (n && T)
      b = b.map((x) => typeof x == "string" ? parseFloat(x) : x), b.length === 1 && b.unshift(parseFloat(D())), s = new n((x) => {
        Pe.set(e, y, _ ? _(x) : x);
      }, b, Object.assign(Object.assign({}, a), {
        duration: c,
        easing: h
      }));
    else {
      const x = b[b.length - 1];
      Pe.set(e, y, v && ze(x) ? v.toDefaultUnit(x) : x);
    }
    return r && i(e, t, b, {
      duration: c,
      delay: l,
      easing: h,
      repeat: f,
      offset: $
    }, "motion-one"), O.setAnimation(s), s;
  };
}
const sr = (e, t) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e)
);
function lr(e, t) {
  var o;
  return typeof e == "string" ? t ? ((o = t[e]) !== null && o !== void 0 || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || []);
}
const ur = (e) => e(), vn = (e, t, o = X.duration) => new Proxy({
  animations: e.map(ur).filter(Boolean),
  duration: o,
  options: t
}, dr), cr = (e) => e.animations[0], dr = {
  get: (e, t) => {
    const o = cr(e);
    switch (t) {
      case "duration":
        return e.duration;
      case "currentTime":
        return he.s((o == null ? void 0 : o[t]) || 0);
      case "playbackRate":
      case "playState":
        return o == null ? void 0 : o[t];
      case "finished":
        return e.finished || (e.finished = Promise.all(e.animations.map(fr)).catch(on)), e.finished;
      case "stop":
        return () => {
          e.animations.forEach((a) => fn(a));
        };
      case "forEachNative":
        return (a) => {
          e.animations.forEach((n) => a(n, e));
        };
      default:
        return typeof (o == null ? void 0 : o[t]) > "u" ? void 0 : () => e.animations.forEach((a) => a[t]());
    }
  },
  set: (e, t, o) => {
    switch (t) {
      case "currentTime":
        o = he.ms(o);
      case "playbackRate":
        for (let a = 0; a < e.animations.length; a++)
          e.animations[a][t] = o;
        return !0;
    }
    return !1;
  }
}, fr = (e) => e.finished;
function pr(e, t, o) {
  return ye(e) ? e(t, o) : e;
}
function vr(e) {
  return function(o, a, n = {}) {
    o = lr(o);
    const i = o.length;
    Ze(!!i, "No valid element provided."), Ze(!!a, "No keyframes defined.");
    const r = [];
    for (let s = 0; s < i; s++) {
      const c = o[s];
      for (const l in a) {
        const u = sr(n, l);
        u.delay = pr(u.delay, s, i);
        const f = rr(c, l, a[l], u, e);
        r.push(f);
      }
    }
    return vn(
      r,
      n,
      /**
       * TODO:
       * If easing is set to spring or glide, duration will be dynamically
       * generated. Ideally we would dynamically generate this from
       * animation.effect.getComputedTiming().duration but this isn't
       * supported in iOS13 or our number polyfill. Perhaps it's possible
       * to Proxy animations returned from animateStyle that has duration
       * as a getter.
       */
      n.duration
    );
  };
}
const mr = vr(un), hr = 5;
function mn(e, t, o) {
  const a = Math.max(t - hr, 0);
  return ji(o - e(a), t - a);
}
const be = {
  stiffness: 100,
  damping: 10,
  mass: 1
}, br = (e = be.stiffness, t = be.damping, o = be.mass) => t / (2 * Math.sqrt(e * o));
function gr(e, t, o) {
  return e < t && o >= t || e > t && o <= t;
}
const yr = ({ stiffness: e = be.stiffness, damping: t = be.damping, mass: o = be.mass, from: a = 0, to: n = 1, velocity: i = 0, restSpeed: r, restDistance: s } = {}) => {
  i = i ? he.s(i) : 0;
  const c = {
    done: !1,
    hasReachedTarget: !1,
    current: a,
    target: n
  }, l = n - a, u = Math.sqrt(e / o) / 1e3, f = br(e, t, o), h = Math.abs(l) < 5;
  r || (r = h ? 0.01 : 2), s || (s = h ? 5e-3 : 0.5);
  let g;
  if (f < 1) {
    const S = u * Math.sqrt(1 - f * f);
    g = ($) => n - Math.exp(-f * u * $) * ((-i + f * u * l) / S * Math.sin(S * $) + l * Math.cos(S * $));
  } else
    g = (S) => n - Math.exp(-u * S) * (l + (-i + u * l) * S);
  return (S) => {
    c.current = g(S);
    const $ = S === 0 ? i : mn(g, S, c.current), k = Math.abs($) <= r, d = Math.abs(n - c.current) <= s;
    return c.done = k && d, c.hasReachedTarget = gr(a, n, c.current), c;
  };
}, Ge = 10, xr = 1e4;
function wr(e, t = te) {
  let o, a = Ge, n = e(0);
  const i = [t(n.current)];
  for (; !n.done && a < xr; )
    n = e(a), i.push(t(n.done ? n.target : n.current)), o === void 0 && n.hasReachedTarget && (o = a), a += Ge;
  const r = a - Ge;
  return i.length === 1 && i.push(n.current), {
    keyframes: i,
    duration: r / 1e3,
    overshootDuration: (o ?? r) / 1e3
  };
}
function Ct(e) {
  return ze(e) && !isNaN(e);
}
function Je(e) {
  return sn(e) ? parseFloat(e) : e;
}
function _r(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (o = {}) => {
    const a = /* @__PURE__ */ new Map(), n = (r = 0, s = 100, c = 0, l = !1) => {
      const u = `${r}-${s}-${c}-${l}`;
      return a.has(u) || a.set(u, e(Object.assign({
        from: r,
        to: s,
        velocity: c
      }, o))), a.get(u);
    }, i = (r, s) => (t.has(r) || t.set(r, wr(r, s)), t.get(r));
    return {
      createAnimation: (r, s = !0, c, l, u) => {
        let f, h, g, S = 0, $ = te;
        const k = r.length;
        if (s) {
          $ = pn(r, l ? xe.get(je(l)) : void 0);
          const d = r[k - 1];
          if (g = Je(d), k > 1 && r[0] !== null)
            h = Je(r[0]);
          else {
            const T = u == null ? void 0 : u.generator;
            if (T) {
              const { animation: p, generatorStartTime: y } = u, O = (p == null ? void 0 : p.startTime) || y || 0, v = (p == null ? void 0 : p.currentTime) || performance.now() - O, D = T(v).current;
              h = D, S = mn((b) => T(b).current, v, D);
            } else
              c && (h = Je(c()));
          }
        }
        if (Ct(h) && Ct(g)) {
          const d = n(h, g, S, l == null ? void 0 : l.includes("scale"));
          f = Object.assign(Object.assign({}, i(d, $)), { easing: "linear" }), u && (u.generator = d, u.generatorStartTime = performance.now());
        }
        return f || (f = {
          easing: "ease",
          duration: i(n(0, 100)).overshootDuration
        }), f;
      }
    };
  };
}
const Ye = _r(yr);
function Sr(e, t = {}) {
  return vn([
    () => {
      const o = new un(e, [0, 1], t);
      return o.finished.catch(() => {
      }), o;
    }
  ], t, t.duration);
}
function $e(e, t, o) {
  return (ye(e) ? Sr : mr)(e, t, o);
}
const $r = {
  __name: "CollapseTransition",
  setup(e) {
    function t(a, n) {
      const { height: i } = a.getBoundingClientRect();
      a.style.height = "0px", $e(a, { height: `${i}px` }, { duration: 0.3 }).finished.then(
        n
      );
    }
    function o(a, n) {
      $e(a, { height: "0px" }, { duration: 0.2 }).finished.then(n);
    }
    return (a, n) => (m(), U(Te, {
      "enter-active-class": "overflow-hidden transition-all duration-300",
      "enter-from-class": "scale-95 opacity-0",
      "enter-to-class": "scale-100 opacity-100",
      "leave-active-class": "overflow-hidden transition-all duration-200",
      "leave-from-class": "scale-100 opacity-100",
      "leave-to-class": "scale-95 opacity-0",
      onEnter: t,
      onLeave: o
    }, {
      default: P(() => [
        R(a.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, ps = /* @__PURE__ */ L($r, [["__file", "/home/harry/Sites/ui/src/components/Transitions/CollapseTransition.vue"]]), Or = { class: "flex gap-2 items-center" }, kr = {
  key: 0,
  class: "text-zinc-400 select-none"
}, zr = {
  __name: "Breadcrumbs",
  setup(e) {
    const t = A(() => Sn().default());
    return (o, a) => (m(), z("div", Or, [
      (m(!0), z(
        ne,
        null,
        Be(t.value, (n, i) => (m(), z(
          ne,
          null,
          [
            (m(), U(le(n), {
              class: K({
                "dark:text-zinc-200 text-zinc-700": i === t.value.length - 1
              })
            }, null, 8, ["class"])),
            i < t.value.length - 1 ? (m(), z("div", kr, "/")) : B("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]));
  }
}, vs = /* @__PURE__ */ L(zr, [["__file", "/home/harry/Sites/ui/src/components/Breadcrumbs/Breadcrumbs.vue"]]), Tr = {
  __name: "BreadcrumbItem",
  props: {
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e) {
    return (t, o) => (m(), U(le(e.as), { class: "rounded-full px-1.5 transition hover:bg-zinc-900/10 hover:dark:bg-white/10 cursor-pointer text-sm text-zinc-400" }, {
      default: P(() => [
        R(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, ms = /* @__PURE__ */ L(Tr, [["__file", "/home/harry/Sites/ui/src/components/Breadcrumbs/BreadcrumbItem.vue"]]), Ar = {}, Cr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, Rr = /* @__PURE__ */ w(
  "path",
  {
    d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Ir = [
  Rr
];
function Pr(e, t) {
  return m(), z("svg", Cr, Ir);
}
const Dr = /* @__PURE__ */ L(Ar, [["render", Pr], ["__file", "/home/harry/Sites/ui/src/components/Icons/CloseIcon.vue"]]);
class Er {
  constructor(t, o = {}, a = () => {
  }) {
    this.type = t, this.data = o, this.resolve = a;
  }
}
const ve = fe({
  dialog: null,
  info(e, t) {
    return ve.create("info", { title: e, subtitle: t });
  },
  confirm(e, t) {
    return ve.create("confirm", { title: e, subtitle: t });
  },
  reset() {
    ve.dialog = null;
  },
  create(e, t) {
    return new Promise((o) => {
      ve.dialog = new Er(e, t, o);
    });
  }
}), { info: hs, confirm: bs, reset: De } = ve, ee = A(() => ve.dialog), Lr = {
  key: 0,
  class: "absolute inset-0 z-[60] bg-black/40"
}, jr = {
  key: 0,
  class: "absolute inset-0 z-[61] flex items-center justify-center"
}, Mr = {
  __name: "Dialogs",
  setup(e) {
    return (t, o) => (m(), z(
      ne,
      null,
      [
        q(en, null, {
          default: P(() => [
            E(ee) ? (m(), z("div", Lr)) : B("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }),
        q(He, null, {
          default: P(() => [
            E(ee) ? (m(), z("div", jr, [
              q(
                yo,
                {
                  class: "mx-6 w-full max-w-lg",
                  "footer-justify": "end"
                },
                $n({
                  header: P(() => [
                    q(So, null, {
                      default: P(() => {
                        var a, n;
                        return [
                          ce(
                            oe((n = (a = E(ee)) == null ? void 0 : a.data) == null ? void 0 : n.title),
                            1
                            /* TEXT */
                          )
                        ];
                      }),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  footer: P(() => [
                    E(ee).type === "info" ? (m(), U(mt, {
                      key: 0,
                      onClick: o[1] || (o[1] = (a) => {
                        var n;
                        (n = E(ee)) == null || n.resolve(), E(De)();
                      })
                    }, {
                      default: P(() => [
                        ce("Ok")
                      ]),
                      _: 1
                      /* STABLE */
                    })) : E(ee).type === "confirm" ? (m(), z(
                      ne,
                      { key: 1 },
                      [
                        q(vo, {
                          onClick: o[2] || (o[2] = (a) => {
                            var n;
                            (n = E(ee)) == null || n.resolve(!1), E(De)();
                          })
                        }, {
                          default: P(() => [
                            ce("No")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        q(mt, {
                          onClick: o[3] || (o[3] = (a) => {
                            var n;
                            (n = E(ee)) == null || n.resolve(!0), E(De)();
                          })
                        }, {
                          default: P(() => [
                            ce("Yes")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : B("v-if", !0)
                  ]),
                  default: P(() => {
                    var a, n;
                    return [
                      w(
                        "p",
                        null,
                        oe((n = (a = E(ee)) == null ? void 0 : a.data) == null ? void 0 : n.subtitle),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, [
                  E(ee).type !== "info" ? {
                    name: "extra",
                    fn: P(() => [
                      q(Ve, {
                        size: "uniform",
                        onClick: o[0] || (o[0] = (a) => {
                          var n;
                          (n = E(ee)) == null || n.resolve(!1), E(De)();
                        })
                      }, {
                        default: P(() => [
                          q(Dr, { class: "h-5 w-5" })
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
            ])) : B("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}, gs = /* @__PURE__ */ L(Mr, [["__file", "/home/harry/Sites/ui/src/components/Dialogs/Dialogs.vue"]]);
function Fr() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class Br {
  constructor(t, o = {}) {
    this.component = t, this.data = o;
  }
}
const Y = fe({
  modals: fe([]),
  push(e, t = {}) {
    return t.key || (t.key = Fr()), Y.modals.push(fe(new Br(On(e), t))), document.body.classList.add("overflow-y-hidden"), t.key;
  },
  pop(e = 1) {
    for (let t = 0; t < e; t += 1)
      Y.modals.pop();
    Y.modals.length === 0 && document.body.classList.remove("overflow-y-hidden");
  },
  clear() {
    Y.modals = fe([]);
  },
  findByKey(e) {
    return Y.modals.find((t) => t.data.key === e);
  },
  get current() {
    return Y.modals[Y.modals.length - 1];
  },
  get all() {
    return Y.modals;
  }
}), { push: ys, pop: xs, clear: ws } = Y, _s = () => Y.all, Vr = {
  key: "modalBackground",
  class: "fixed inset-0 bg-black/40",
  "aria-hidden": "true"
}, Nr = { class: "flex min-h-screen w-screen justify-center items-end sm:items-center" }, Hr = { class: "absolute right-0 top-0 pr-4 pt-4" }, qr = /* @__PURE__ */ w(
  "span",
  { class: "sr-only" },
  "Close",
  -1
  /* HOISTED */
), Ur = /* @__PURE__ */ w(
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
    /* @__PURE__ */ w("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 18L18 6M6 6l12 12"
    })
  ],
  -1
  /* HOISTED */
), Kr = {
  __name: "Modals",
  setup(e) {
    const t = M(!1);
    return ie(
      () => Y.modals,
      (o) => {
        o.length ? (document.body.classList.add("overflow-hidden"), J(() => {
          t.value = !0;
        })) : (document.body.classList.remove("overflow-hidden"), J(() => {
          t.value = !1;
        }));
      }
    ), (o, a) => (m(), z("div", null, [
      w(
        "div",
        {
          class: K(["fixed inset-0 z-[58] flex max-w-full justify-center overflow-y-auto", E(Y).all.length ? "" : "pointer-events-none"]),
          "aria-labelledby": "modal-title",
          role: "dialog",
          "aria-modal": "true"
        },
        [
          q(en, null, {
            default: P(() => [
              E(Y).all.length ? (m(), z("div", Vr)) : B("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          w("div", Nr, [
            q(He, null, {
              default: P(() => [
                (m(!0), z(
                  ne,
                  null,
                  Be(E(Y).all, (n, i) => (m(), z(
                    "div",
                    {
                      key: `modal${i}`,
                      class: K(["relative w-full rounded-lg bg-white p-4 shadow-xl transition-all dark:bg-zinc-900 dark:text-white sm:my-8 sm:p-6", {
                        "max-w-6xl": n.data.size === "huge",
                        "max-w-3xl": n.data.size === "large",
                        "max-w-xl": n.data.size === "medium" || !n.data.size,
                        "max-w-md": n.data.size === "small"
                      }])
                    },
                    [
                      w("div", Hr, [
                        w("button", {
                          type: "button",
                          class: "rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                          onClick: a[0] || (a[0] = (r) => E(Y).pop())
                        }, [
                          qr,
                          B(" Heroicon name: outline/x "),
                          Ur
                        ])
                      ]),
                      (m(), U(le(n.component), {
                        "modal-index": i,
                        data: n.data
                      }, null, 8, ["modal-index", "data"]))
                    ],
                    2
                    /* CLASS */
                  ))),
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
}, Ss = /* @__PURE__ */ L(Kr, [["__file", "/home/harry/Sites/ui/src/components/Modals/Modals.vue"]]), Wr = {
  __name: "Container",
  props: {
    narrow: Boolean
  },
  setup(e) {
    return (t, o) => (m(), z(
      "div",
      {
        class: K(["mx-auto px-4 sm:px-6 lg:px-8", {
          "max-w-7xl": !e.narrow,
          "max-w-4xl": e.narrow
        }])
      },
      [
        R(t.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
}, $s = /* @__PURE__ */ L(Wr, [["__file", "/home/harry/Sites/ui/src/components/Container.vue"]]), Os = {
  mounted: (e, { modifiers: t }) => {
    const o = fe({ width: 0, height: 0 }), a = M(!1), n = t.height ? "height" : t.width ? "width" : "both";
    ui(e, (i) => {
      if (a.value)
        return;
      const [r] = i, { width: s, height: c } = r.contentRect;
      if (n === "height") {
        o.height !== c && (a.value = !0, e.style.height = `${o.height}px`, o.height = c, $e(
          e,
          { height: `${c}px` },
          {
            easing: Ye({ damping: 50, stiffness: 250 })
            // duration: isShrinking ? 0.175 : 0.35,
            // ease: isShrinking ? "ease-in" : "ease-out",
          }
        ).finished.then(() => {
          a.value = !1, e.style.height = null;
        }));
        return;
      }
      if (n === "width") {
        o.width !== s && (a.value = !0, e.style.width = `${o.width}px`, o.width = s, $e(
          e,
          { width: `${s}px` },
          {
            easing: Ye({ damping: 50, stiffness: 250 })
            // duration: isShrinking ? 0.175 : 0.35,
            // ease: isShrinking ? "ease-in" : "ease-out",
          }
        ).finished.then(() => {
          a.value = !1, e.style.width = null;
        }));
        return;
      }
      (o.width !== s || o.height !== c) && (a.value = !0, e.style.height = `${o.height}px`, e.style.width = `${o.width}px`, o.width = s, o.height = c, $e(
        e,
        { height: `${c}px`, width: `${s}px` },
        {
          easing: Ye({ damping: 50, stiffness: 250 })
          // duration: isShrinking ? 0.175 : 0.35,
          // ease: isShrinking ? "ease-in" : "ease-out",
        }
      ).finished.then(() => {
        a.value = !1, e.style.height = null, e.style.width = null;
      }));
    });
  }
};
export {
  Jr as AlertAction,
  ls as AutocompleteInput,
  Ve as BaseButton,
  ms as BreadcrumbItem,
  vs as Breadcrumbs,
  yo as Card,
  So as CardTitle,
  ps as CollapseTransition,
  $s as Container,
  Yr as DangerAlert,
  es as DangerButton,
  gs as Dialogs,
  ts as Dropdown,
  ns as DropdownLink,
  He as FadeScaleTransition,
  en as FadeTransition,
  os as HH1,
  as as HH2,
  is as HH3,
  Xr as InfoAlert,
  rs as Input,
  at as InputLayout,
  Ss as Modals,
  mt as PrimaryButton,
  vo as SecondaryButton,
  ss as SelectInput,
  us as Sidebar,
  cs as SidebarItem,
  fs as SidebarItemGroup,
  ds as SidebarLayout,
  Qr as SuccessAlert,
  Zr as WarningAlert,
  Y as all,
  _s as allModals,
  ws as clearModals,
  bs as confirmDialog,
  ve as dialogs,
  hs as infoDialog,
  xs as popModal,
  ys as pushModal,
  De as resetDialog,
  Os as vAutoResize
};
