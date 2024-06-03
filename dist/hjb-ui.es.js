import { openBlock as m, createBlock as q, resolveDynamicComponent as se, withCtx as E, createTextVNode as de, createElementVNode as w, createElementBlock as z, normalizeClass as U, renderSlot as C, createCommentVNode as F, onMounted as ae, onUnmounted as tt, computed as R, ref as j, withDirectives as pt, vShow as vt, createVNode as H, Transition as Te, toDisplayString as oe, normalizeProps as nt, guardReactiveProps as ot, mergeProps as hn, cloneVNode as bn, h as Oe, Fragment as ne, inject as Me, provide as Fe, watchEffect as ue, defineComponent as Q, toRaw as M, watch as ie, nextTick as G, unref as L, renderList as Ve, getCurrentScope as gn, onScopeDispose as yn, readonly as xn, getCurrentInstance as wn, shallowRef as _n, useSlots as $n, reactive as fe, createSlots as Sn, markRaw as On } from "vue";
const kn = /* @__PURE__ */ w(
  "span",
  { "aria-hidden": "true" },
  "→",
  -1
  /* HOISTED */
), Rr = {
  __name: "AlertAction",
  props: {
    as: {
      type: [String, Object, Function],
      default: "a"
    }
  },
  setup(e) {
    return (t, o) => (m(), q(se(e.as), { class: "whitespace-nowrap font-medium" }, {
      default: E(() => [
        de("Details "),
        kn
      ]),
      _: 1
      /* STABLE */
    }));
  }
}, J = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, n] of t)
    o[a] = n;
  return o;
}, zn = {}, Tn = { class: "rounded-md bg-red-50 dark:bg-red-900 p-4" }, Rn = { class: "flex" }, An = /* @__PURE__ */ w(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ F(" Heroicon name: solid/x-circle "),
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
), Cn = { class: "ml-3 flex-1" }, Pn = { class: "md:flex md:justify-between" }, En = { class: "text-sm text-red-800 dark:text-red-200" }, Dn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Ln(e, t) {
  return m(), z("div", Tn, [
    w("div", Rn, [
      An,
      w("div", Cn, [
        e.$slots.title ? (m(), z(
          "h3",
          {
            key: 0,
            class: U(["text-sm font-medium text-red-800 dark:text-red-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            C(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : F("v-if", !0),
        w("div", Pn, [
          w("p", En, [
            C(e.$slots, "default")
          ]),
          e.$slots.action ? (m(), z("p", Dn, [
            C(e.$slots, "action")
          ])) : F("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Ar = /* @__PURE__ */ J(zn, [["render", Ln]]), In = {}, jn = { class: "rounded-md bg-blue-50 dark:bg-blue-800 p-4" }, Mn = { class: "flex" }, Fn = /* @__PURE__ */ w(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ F(" Heroicon name: solid/information-circle "),
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
), Vn = { class: "ml-3 flex-1" }, Bn = { class: "md:flex md:justify-between" }, Nn = { class: "text-sm text-blue-800 dark:text-blue-200" }, Hn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function qn(e, t) {
  return m(), z("div", jn, [
    w("div", Mn, [
      Fn,
      w("div", Vn, [
        e.$slots.title ? (m(), z(
          "h3",
          {
            key: 0,
            class: U(["text-sm font-medium text-blue-800 dark:text-blue-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            C(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : F("v-if", !0),
        w("div", Bn, [
          w("p", Nn, [
            C(e.$slots, "default")
          ]),
          e.$slots.action ? (m(), z("p", Hn, [
            C(e.$slots, "action")
          ])) : F("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Cr = /* @__PURE__ */ J(In, [["render", qn]]), Un = {}, Kn = { class: "rounded-md bg-green-50 dark:bg-green-800 p-4" }, Wn = { class: "flex" }, Gn = /* @__PURE__ */ w(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ F(" Heroicon name: solid/check-circle "),
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
), Jn = { class: "ml-3 flex-1" }, Yn = { class: "md:flex md:justify-between" }, Xn = { class: "text-sm text-green-800 dark:text-green-200" }, Qn = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function Zn(e, t) {
  return m(), z("div", Kn, [
    w("div", Wn, [
      Gn,
      w("div", Jn, [
        e.$slots.title ? (m(), z(
          "h3",
          {
            key: 0,
            class: U(["text-sm font-medium text-green-800 dark:text-green-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            C(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : F("v-if", !0),
        w("div", Yn, [
          w("p", Xn, [
            C(e.$slots, "default")
          ]),
          e.$slots.action ? (m(), z("p", Qn, [
            C(e.$slots, "action")
          ])) : F("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Pr = /* @__PURE__ */ J(Un, [["render", Zn]]), eo = {}, to = { class: "rounded-md bg-yellow-50 dark:bg-yellow-800 p-4" }, no = { class: "flex" }, oo = /* @__PURE__ */ w(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ F(" Heroicon name: solid/exclamation "),
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
), ao = { class: "ml-3 flex-1" }, io = { class: "md:flex md:justify-between" }, ro = { class: "text-sm text-yellow-700 dark:text-yellow-200" }, lo = {
  key: 0,
  class: "mt-3 text-sm md:mt-0 md:ml-6"
};
function so(e, t) {
  return m(), z("div", to, [
    w("div", no, [
      oo,
      w("div", ao, [
        e.$slots.title ? (m(), z(
          "h3",
          {
            key: 0,
            class: U(["text-sm font-medium text-yellow-800 dark:text-yellow-200", {
              "mb-2": e.$slots.default
            }])
          },
          [
            C(e.$slots, "title")
          ],
          2
          /* CLASS */
        )) : F("v-if", !0),
        w("div", io, [
          w("p", ro, [
            C(e.$slots, "default")
          ]),
          e.$slots.action ? (m(), z("p", lo, [
            C(e.$slots, "action")
          ])) : F("v-if", !0)
        ])
      ])
    ])
  ]);
}
const Er = /* @__PURE__ */ J(eo, [["render", so]]), Be = {
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
    return (t, o) => (m(), q(se(e.as), {
      class: U(["inline-flex items-center border border-transparent rounded-md font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2", {
        "p-1.5": e.size === "uniform",
        "px-1 py-0.5 text-xs": e.size === "tiny",
        "px-2 py-1 text-xs": e.size === "small",
        "px-3.5 py-1.5 text-sm": e.size === "medium",
        "px-3.5 py-1.5 text-base": e.size === "large"
      }])
    }, {
      default: E(() => [
        C(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, mt = {
  __name: "PrimaryButton",
  setup(e) {
    return (t, o) => (m(), q(Be, { class: "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25" }, {
      default: E(() => [
        C(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, uo = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, o) => (m(), q(Be, {
      type: e.type,
      class: "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
    }, {
      default: E(() => [
        C(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["type"]));
  }
}, Dr = {
  __name: "DangerButton",
  setup(e) {
    return (t, o) => (m(), q(Be, { class: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800" }, {
      default: E(() => [
        C(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, co = {
  key: 0,
  class: "flex justify-between items-center gap-6 mb-6"
}, fo = { key: 0 }, po = {
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
        class: U(["bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-zinc-900 dark:text-zinc-100", {
          "p-6": !e.flush
        }])
      },
      [
        t.$slots.header || t.$slots.extra ? (m(), z("div", co, [
          w("div", null, [
            C(t.$slots, "header")
          ]),
          t.$slots.extra ? (m(), z("div", fo, [
            C(t.$slots, "extra")
          ])) : F("v-if", !0)
        ])) : F("v-if", !0),
        C(t.$slots, "default"),
        t.$slots.footer ? (m(), z(
          "div",
          {
            key: 1,
            class: U(["mt-6 flex gap-2", {
              "justify-end": e.footerJustify === "end",
              "justify-between": e.footerJustify === "between"
            }])
          },
          [
            C(t.$slots, "footer")
          ],
          2
          /* CLASS */
        )) : F("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}, vo = {}, mo = { class: "text-2xl tracking-tighter leading-6 font-medium text-zinc-900 dark:text-white" };
function ho(e, t) {
  return m(), z("h3", mo, [
    C(e.$slots, "default")
  ]);
}
const bo = /* @__PURE__ */ J(vo, [["render", ho]]), go = { class: "relative" }, Lr = {
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
    const a = R(() => ({
      48: "w-48"
    })[t.width.toString()]), n = R(() => {
      const r = t.bottom ? "bottom" : "top";
      return t.align === "left" ? `origin-${r}-left left-0` : t.align === "right" ? `origin-${r}-right right-0` : `origin-${r}`;
    }), i = j(!1);
    return (r, l) => (m(), z("div", go, [
      w("div", {
        onClick: l[0] || (l[0] = (d) => i.value = !i.value)
      }, [
        C(r.$slots, "trigger")
      ]),
      F(" Full Screen Dropdown Overlay "),
      pt(w(
        "div",
        {
          class: "fixed inset-0 z-40",
          onClick: l[1] || (l[1] = (d) => i.value = !1)
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vt, i.value]
      ]),
      H(Te, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        persisted: ""
      }, {
        default: E(() => [
          pt(w(
            "div",
            {
              class: U(["absolute z-50 mt-2 rounded-md shadow-lg", [a.value, n.value, t.bottom ? "bottom-full" : ""]]),
              style: { display: "none" },
              onClick: l[2] || (l[2] = (d) => i.value = !1)
            },
            [
              w(
                "div",
                {
                  class: U(["rounded-md ring-1 ring-black ring-opacity-5", e.contentClasses])
                },
                [
                  C(r.$slots, "content")
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
}, Ir = {
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
    return (t, o) => (m(), q(se(e.as), {
      href: e.href,
      class: "block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
    }, {
      default: E(() => [
        C(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["href"]));
  }
}, yo = {}, xo = { class: "font-semibold text-3xl leading-tight" };
function wo(e, t) {
  return m(), z("h1", xo, [
    C(e.$slots, "default")
  ]);
}
const jr = /* @__PURE__ */ J(yo, [["render", wo]]), _o = {}, $o = { class: "text-2xl tracking-tight font-bold dark:text-white" };
function So(e, t) {
  return m(), z("h2", $o, [
    C(e.$slots, "default")
  ]);
}
const Mr = /* @__PURE__ */ J(_o, [["render", So]]), Oo = {}, ko = { class: "text-xl tracking-tight dark:text-white" };
function zo(e, t) {
  return m(), z("h2", ko, [
    C(e.$slots, "default")
  ]);
}
const Fr = /* @__PURE__ */ J(Oo, [["render", zo]]), ge = {
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
}, To = ["for"], Ro = { class: "relative mt-1" }, Ao = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, Co = /* @__PURE__ */ w(
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
), Po = ["id"], Eo = ["id"], at = {
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
      }, oe(t.label), 9, To)) : F("v-if", !0),
      w("div", Ro, [
        C(t.$slots, "default"),
        t.error ? (m(), z("div", Ao, [
          F(" Heroicon name: solid/exclamation-circle "),
          Co
        ])) : F("v-if", !0)
      ]),
      t.helpText && !t.error ? (m(), z("p", {
        key: 1,
        class: "mt-1 text-sm text-zinc-600 dark:text-zinc-500",
        id: `${t.id}-description`
      }, oe(t.helpText), 9, Po)) : t.error ? (m(), z("p", {
        key: 2,
        class: "mt-1 text-sm text-red-600",
        id: `${t.id}-error`
      }, oe(t.error), 9, Eo)) : F("v-if", !0)
    ]));
  }
}, Do = ["name", "id", "aria-describedby"], Lo = {
  inheritAttrs: !1
}, Vr = /* @__PURE__ */ Object.assign(Lo, {
  __name: "Input",
  props: {
    ...ge
  },
  setup(e) {
    return (t, o) => (m(), q(
      at,
      nt(ot(t.$props)),
      {
        default: E(() => [
          w("input", hn(t.$attrs, {
            name: t.name,
            id: t.id,
            class: ["block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm", {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800": t.error,
              "border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700": !t.error
            }],
            "aria-describedby": `${t.id}-${t.error ? "error" : "description"}`
          }), null, 16, Do)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
});
function K(e, t, ...o) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...o) : n;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, K), a;
}
var ce = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ce || {}), Io = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Io || {});
function Z({ visible: e = !0, features: t = 0, ourProps: o, theirProps: a, ...n }) {
  var i;
  let r = Pt(a, o), l = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return qe(l);
  if (t & 1) {
    let d = (i = r.unmount) == null || i ? 0 : 1;
    return K(d, { 0() {
      return null;
    }, 1() {
      return qe({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return qe(l);
}
function qe({ props: e, attrs: t, slots: o, slot: a, name: n }) {
  var i, r;
  let { as: l, ...d } = Ne(e, ["unmount", "static"]), s = (i = o.default) == null ? void 0 : i.call(o, a), u = {};
  if (a) {
    let f = !1, h = [];
    for (let [g, $] of Object.entries(a))
      typeof $ == "boolean" && (f = !0), $ === !0 && h.push(g);
    f && (u["data-headlessui-state"] = h.join(" "));
  }
  if (l === "template") {
    if (s = Ct(s ?? []), Object.keys(d).length > 0 || Object.keys(t).length > 0) {
      let [f, ...h] = s ?? [];
      if (!jo(f) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(d).concat(Object.keys(t)).map((S) => S.trim()).filter((S, k, c) => c.indexOf(S) === k).sort((S, k) => S.localeCompare(k)).map((S) => `  - ${S}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((S) => `  - ${S}`).join(`
`)].join(`
`));
      let g = Pt((r = f.props) != null ? r : {}, d), $ = bn(f, g);
      for (let S in g)
        S.startsWith("on") && ($.props || ($.props = {}), $.props[S] = g[S]);
      return $;
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return Oe(l, Object.assign({}, d, u), { default: () => s });
}
function Ct(e) {
  return e.flatMap((t) => t.type === ne ? Ct(t.children) : [t]);
}
function Pt(...e) {
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
      for (let l of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        l(n, ...i);
      }
    } });
  return t;
}
function Et(e) {
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
function jo(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Mo = 0;
function Fo() {
  return ++Mo;
}
function le() {
  return Fo();
}
var B = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(B || {});
function Vo(e) {
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
        let r = o.slice().reverse().findIndex((l, d, s) => n !== -1 && s.length - d - 1 >= n ? !1 : !t.resolveDisabled(l));
        return r === -1 ? r : o.length - 1 - r;
      }
      case 2:
        return o.findIndex((r, l) => l <= n ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = o.slice().reverse().findIndex((l) => !t.resolveDisabled(l));
        return r === -1 ? r : o.length - 1 - r;
      }
      case 4:
        return o.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Vo(e);
    }
  })();
  return i === -1 ? a : i;
}
function P(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Lt = Symbol("Context");
var re = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(re || {});
function It() {
  return Me(Lt, null);
}
function jt(e) {
  Fe(Lt, e);
}
function ht(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Mt(e, t) {
  let o = j(ht(e.value.type, e.value.as));
  return ae(() => {
    o.value = ht(e.value.type, e.value.as);
  }), ue(() => {
    var a;
    o.value || P(t) && P(t) instanceof HTMLButtonElement && !((a = P(t)) != null && a.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Bo = Object.defineProperty, No = (e, t, o) => t in e ? Bo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, bt = (e, t, o) => (No(e, typeof t != "symbol" ? t + "" : t, o), o);
class Ho {
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
let it = new Ho();
function rt(e) {
  if (it.isServer)
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
function qo({ container: e, accept: t, walk: o, enabled: a }) {
  ue(() => {
    let n = e.value;
    if (!n || a !== void 0 && !a.value)
      return;
    let i = rt(e);
    if (!i)
      return;
    let r = Object.assign((d) => t(d), { acceptNode: t }), l = i.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; l.nextNode(); )
      o(l.currentNode);
  });
}
let gt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Uo = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Uo || {}), Ko = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ko || {}), Wo = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Wo || {}), lt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(lt || {});
function Ft(e, t = 0) {
  var o;
  return e === ((o = rt(e)) == null ? void 0 : o.body) ? !1 : K(t, { 0() {
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
var Go = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Go || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Vt(e, t = (o) => o) {
  return e.slice().sort((o, a) => {
    let n = t(o), i = t(a);
    if (n === null || i === null)
      return 0;
    let r = n.compareDocumentPosition(i);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ae(e, t, o) {
  it.isServer || ue((a) => {
    document.addEventListener(e, t, o), a(() => document.removeEventListener(e, t, o));
  });
}
function Jo(e, t, o) {
  it.isServer || ue((a) => {
    window.addEventListener(e, t, o), a(() => window.removeEventListener(e, t, o));
  });
}
function Bt(e, t, o = R(() => !0)) {
  function a(i, r) {
    if (!o.value || i.defaultPrevented)
      return;
    let l = r(i);
    if (l === null || !l.getRootNode().contains(l))
      return;
    let d = function s(u) {
      return typeof u == "function" ? s(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let s of d) {
      if (s === null)
        continue;
      let u = s instanceof HTMLElement ? s : P(s);
      if (u != null && u.contains(l) || i.composed && i.composedPath().includes(u))
        return;
    }
    return !Ft(l, lt.Loose) && l.tabIndex !== -1 && i.preventDefault(), t(i, l);
  }
  let n = j(null);
  Ae("pointerdown", (i) => {
    var r, l;
    o.value && (n.value = ((l = (r = i.composedPath) == null ? void 0 : r.call(i)) == null ? void 0 : l[0]) || i.target);
  }, !0), Ae("mousedown", (i) => {
    var r, l;
    o.value && (n.value = ((l = (r = i.composedPath) == null ? void 0 : r.call(i)) == null ? void 0 : l[0]) || i.target);
  }, !0), Ae("click", (i) => {
    n.value && (a(i, () => n.value), n.value = null);
  }, !0), Ae("touchend", (i) => a(i, () => i.target instanceof HTMLElement ? i.target : null), !0), Jo("blur", (i) => a(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var st = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(st || {});
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
  let a = j(o == null ? void 0 : o.value), n = R(() => e.value !== void 0);
  return [R(() => n.value ? e.value : a.value), function(i) {
    return n.value || (a.value = i), t == null ? void 0 : t(i);
  }];
}
function yt(e) {
  return [e.screenX, e.screenY];
}
function Kt() {
  let e = j([-1, -1]);
  return { wasMoved(t) {
    let o = yt(t);
    return e.value[0] === o[0] && e.value[1] === o[1] ? !1 : (e.value = o, !0);
  }, update(t) {
    e.value = yt(t);
  } };
}
function Yo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Xo() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Qo() {
  return Yo() || Xo();
}
function Zo(e) {
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
    return Zo(() => {
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
function ea(e, t) {
  return e === t;
}
var ta = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ta || {}), na = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(na || {}), oa = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(oa || {});
let Gt = Symbol("ComboboxContext");
function we(e) {
  let t = Me(Gt, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, we), o;
  }
  return t;
}
let aa = Q({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => ea }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: o, emit: a }) {
  let n = j(1), i = j(null), r = j(null), l = j(null), d = j(null), s = j({ static: !1, hold: !1 }), u = j([]), f = j(null), h = j(1), g = j(!1);
  function $(_ = (x) => x) {
    let x = f.value !== null ? u.value[f.value] : null, I = Vt(_(u.value.slice()), (N) => P(N.dataRef.domRef)), A = x ? I.indexOf(x) : null;
    return A === -1 && (A = null), { options: I, activeOptionIndex: A };
  }
  let S = R(() => e.multiple ? 1 : 0), k = R(() => e.nullable), [c, T] = Ut(R(() => e.modelValue), (_) => a("update:modelValue", _), R(() => e.defaultValue)), p = R(() => c.value === void 0 ? K(S.value, { 1: [], 0: void 0 }) : c.value), y = null, O = null, v = { comboboxState: n, value: p, mode: S, compare(_, x) {
    if (typeof e.by == "string") {
      let I = e.by;
      return (_ == null ? void 0 : _[I]) === (x == null ? void 0 : x[I]);
    }
    return e.by(_, x);
  }, defaultValue: R(() => e.defaultValue), nullable: k, inputRef: r, labelRef: i, buttonRef: l, optionsRef: d, disabled: R(() => e.disabled), options: u, change(_) {
    T(_);
  }, activeOptionIndex: R(() => {
    if (g.value && f.value === null && u.value.length > 0) {
      let _ = u.value.findIndex((x) => !x.dataRef.disabled);
      _ !== -1 && (f.value = _);
    }
    return f.value;
  }), activationTrigger: h, optionsPropsRef: s, closeCombobox() {
    g.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, f.value = null);
  }, openCombobox() {
    if (g.value = !0, e.disabled || n.value === 0)
      return;
    let _ = u.value.findIndex((x) => {
      let I = M(x.dataRef.value);
      return K(S.value, { 0: () => v.compare(M(v.value.value), M(I)), 1: () => M(v.value.value).some((A) => v.compare(M(A), M(I))) });
    });
    _ !== -1 && (f.value = _), n.value = 0;
  }, goToOption(_, x, I) {
    g.value = !1, y !== null && cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      if (e.disabled || d.value && !s.value.static && n.value === 1)
        return;
      let A = $();
      if (A.activeOptionIndex === null) {
        let W = A.options.findIndex((_e) => !_e.dataRef.disabled);
        W !== -1 && (A.activeOptionIndex = W);
      }
      let N = Dt(_ === V.Specific ? { focus: V.Specific, id: x } : { focus: _ }, { resolveItems: () => A.options, resolveActiveIndex: () => A.activeOptionIndex, resolveId: (W) => W.id, resolveDisabled: (W) => W.dataRef.disabled });
      f.value = N, h.value = I ?? 1, u.value = A.options;
    });
  }, selectOption(_) {
    let x = u.value.find((A) => A.id === _);
    if (!x)
      return;
    let { dataRef: I } = x;
    T(K(S.value, { 0: () => I.value, 1: () => {
      let A = M(v.value.value).slice(), N = M(I.value), W = A.findIndex((_e) => v.compare(N, M(_e)));
      return W === -1 ? A.push(N) : A.splice(W, 1), A;
    } }));
  }, selectActiveOption() {
    if (v.activeOptionIndex.value === null)
      return;
    let { dataRef: _, id: x } = u.value[v.activeOptionIndex.value];
    T(K(S.value, { 0: () => _.value, 1: () => {
      let I = M(v.value.value).slice(), A = M(_.value), N = I.findIndex((W) => v.compare(A, M(W)));
      return N === -1 ? I.push(A) : I.splice(N, 1), I;
    } })), v.goToOption(V.Specific, x);
  }, registerOption(_, x) {
    O && cancelAnimationFrame(O);
    let I = { id: _, dataRef: x }, A = $((N) => (N.push(I), N));
    if (f.value === null) {
      let N = x.value.value;
      K(S.value, { 0: () => v.compare(M(v.value.value), M(N)), 1: () => M(v.value.value).some((W) => v.compare(M(W), M(N))) }) && (A.activeOptionIndex = A.options.indexOf(I));
    }
    u.value = A.options, f.value = A.activeOptionIndex, h.value = 1, A.options.some((N) => !P(N.dataRef.domRef)) && (O = requestAnimationFrame(() => {
      let N = $();
      u.value = N.options, f.value = N.activeOptionIndex;
    }));
  }, unregisterOption(_) {
    var x;
    v.activeOptionIndex.value !== null && ((x = v.options.value[v.activeOptionIndex.value]) == null ? void 0 : x.id) === _ && (g.value = !0);
    let I = $((A) => {
      let N = A.findIndex((W) => W.id === _);
      return N !== -1 && A.splice(N, 1), A;
    });
    u.value = I.options, f.value = I.activeOptionIndex, h.value = 1;
  } };
  Bt([r, l, d], () => v.closeCombobox(), R(() => n.value === 0)), Fe(Gt, v), jt(R(() => K(n.value, { 0: re.Open, 1: re.Closed })));
  let D = R(() => v.activeOptionIndex.value === null ? null : u.value[v.activeOptionIndex.value].dataRef.value), b = R(() => {
    var _;
    return (_ = P(r)) == null ? void 0 : _.closest("form");
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
    let { name: _, disabled: x, form: I, ...A } = e, N = { open: n.value === 0, disabled: x, activeIndex: v.activeOptionIndex.value, activeOption: D.value, value: p.value };
    return Oe(ne, [..._ != null && p.value != null ? ut({ [_]: p.value }).map(([W, _e]) => Oe(Nt, Et({ features: st.Hidden, key: W, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: I, name: W, value: _e }))) : [], Z({ theirProps: { ...o, ...Ne(A, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: N, slots: t, attrs: o, name: "Combobox" })]);
  };
} });
Q({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${le()}` } }, setup(e, { attrs: t, slots: o }) {
  let a = we("ComboboxLabel");
  function n() {
    var i;
    (i = P(a.inputRef)) == null || i.focus({ preventScroll: !0 });
  }
  return () => {
    let i = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { id: r, ...l } = e, d = { id: r, ref: a.labelRef, onClick: n };
    return Z({ ourProps: d, theirProps: l, slot: i, attrs: t, slots: o, name: "ComboboxLabel" });
  };
} });
Q({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${le()}` } }, setup(e, { attrs: t, slots: o, expose: a }) {
  let n = we("ComboboxButton");
  a({ el: n.buttonRef, $el: n.buttonRef });
  function i(d) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (d.preventDefault(), n.openCombobox()), G(() => {
      var s;
      return (s = P(n.inputRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    }));
  }
  function r(d) {
    switch (d.key) {
      case B.ArrowDown:
        d.preventDefault(), d.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), G(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
      case B.ArrowUp:
        d.preventDefault(), d.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), G(() => {
          n.value.value || n.goToOption(V.Last);
        })), G(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
      case B.Escape:
        if (n.comboboxState.value !== 0)
          return;
        d.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && d.stopPropagation(), n.closeCombobox(), G(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let l = Mt(R(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var d, s;
    let u = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: f, ...h } = e, g = { ref: n.buttonRef, id: f, type: l.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (d = P(n.optionsRef)) == null ? void 0 : d.id, "aria-expanded": n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(s = P(n.labelRef)) == null ? void 0 : s.id, f].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: i };
    return Z({ ourProps: g, theirProps: h, slot: u, attrs: t, slots: o, name: "ComboboxButton" });
  };
} });
let ia = Q({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${le()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: a, expose: n }) {
  let i = we("ComboboxInput"), r = R(() => rt(P(i.inputRef))), l = { value: !1 };
  n({ el: i.inputRef, $el: i.inputRef });
  function d() {
    i.change(null);
    let c = P(i.optionsRef);
    c && (c.scrollTop = 0), i.goToOption(V.Nothing);
  }
  let s = R(() => {
    var c;
    let T = i.value.value;
    return P(i.inputRef) ? typeof e.displayValue < "u" && T !== void 0 ? (c = e.displayValue(T)) != null ? c : "" : typeof T == "string" ? T : "" : "";
  });
  ae(() => {
    ie([s, i.comboboxState, r], ([c, T], [p, y]) => {
      if (l.value)
        return;
      let O = P(i.inputRef);
      O && ((y === 0 && T === 1 || c !== p) && (O.value = c), requestAnimationFrame(() => {
        var v;
        if (l.value || !O || ((v = r.value) == null ? void 0 : v.activeElement) !== O)
          return;
        let { selectionStart: D, selectionEnd: b } = O;
        Math.abs((b ?? 0) - (D ?? 0)) === 0 && D === 0 && O.setSelectionRange(O.value.length, O.value.length);
      }));
    }, { immediate: !0 }), ie([i.comboboxState], ([c], [T]) => {
      if (c === 0 && T === 1) {
        if (l.value)
          return;
        let p = P(i.inputRef);
        if (!p)
          return;
        let y = p.value, { selectionStart: O, selectionEnd: v, selectionDirection: D } = p;
        p.value = "", p.value = y, D !== null ? p.setSelectionRange(O, v, D) : p.setSelectionRange(O, v);
      }
    });
  });
  let u = j(!1);
  function f() {
    u.value = !0;
  }
  function h() {
    Wt().nextFrame(() => {
      u.value = !1;
    });
  }
  function g(c) {
    switch (l.value = !0, c.key) {
      case B.Enter:
        if (l.value = !1, i.comboboxState.value !== 0 || u.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), i.activeOptionIndex.value === null) {
          i.closeCombobox();
          return;
        }
        i.selectActiveOption(), i.mode.value === 0 && i.closeCombobox();
        break;
      case B.ArrowDown:
        return l.value = !1, c.preventDefault(), c.stopPropagation(), K(i.comboboxState.value, { 0: () => i.goToOption(V.Next), 1: () => i.openCombobox() });
      case B.ArrowUp:
        return l.value = !1, c.preventDefault(), c.stopPropagation(), K(i.comboboxState.value, { 0: () => i.goToOption(V.Previous), 1: () => {
          i.openCombobox(), G(() => {
            i.value.value || i.goToOption(V.Last);
          });
        } });
      case B.Home:
        if (c.shiftKey)
          break;
        return l.value = !1, c.preventDefault(), c.stopPropagation(), i.goToOption(V.First);
      case B.PageUp:
        return l.value = !1, c.preventDefault(), c.stopPropagation(), i.goToOption(V.First);
      case B.End:
        if (c.shiftKey)
          break;
        return l.value = !1, c.preventDefault(), c.stopPropagation(), i.goToOption(V.Last);
      case B.PageDown:
        return l.value = !1, c.preventDefault(), c.stopPropagation(), i.goToOption(V.Last);
      case B.Escape:
        if (l.value = !1, i.comboboxState.value !== 0)
          return;
        c.preventDefault(), i.optionsRef.value && !i.optionsPropsRef.value.static && c.stopPropagation(), i.nullable.value && i.mode.value === 0 && i.value.value === null && d(), i.closeCombobox();
        break;
      case B.Tab:
        if (l.value = !1, i.comboboxState.value !== 0)
          return;
        i.mode.value === 0 && i.selectActiveOption(), i.closeCombobox();
        break;
    }
  }
  function $(c) {
    t("change", c), i.nullable.value && i.mode.value === 0 && c.target.value === "" && d(), i.openCombobox();
  }
  function S() {
    l.value = !1;
  }
  let k = R(() => {
    var c, T, p, y;
    return (y = (p = (T = e.defaultValue) != null ? T : i.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, i.defaultValue.value) : null) != null ? p : i.defaultValue.value) != null ? y : "";
  });
  return () => {
    var c, T, p, y, O, v;
    let D = { open: i.comboboxState.value === 0 }, { id: b, displayValue: _, onChange: x, ...I } = e, A = { "aria-controls": (c = i.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": i.comboboxState.value === 0, "aria-activedescendant": i.activeOptionIndex.value === null || (T = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : T.id, "aria-labelledby": (O = (p = P(i.labelRef)) == null ? void 0 : p.id) != null ? O : (y = P(i.buttonRef)) == null ? void 0 : y.id, "aria-autocomplete": "list", id: b, onCompositionstart: f, onCompositionend: h, onKeydown: g, onInput: $, onBlur: S, role: "combobox", type: (v = o.type) != null ? v : "text", tabIndex: 0, ref: i.inputRef, defaultValue: k.value, disabled: i.disabled.value === !0 ? !0 : void 0 };
    return Z({ ourProps: A, theirProps: I, slot: D, attrs: o, slots: a, features: ce.RenderStrategy | ce.Static, name: "ComboboxInput" });
  };
} }), ra = Q({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: o, expose: a }) {
  let n = we("ComboboxOptions"), i = `headlessui-combobox-options-${le()}`;
  a({ el: n.optionsRef, $el: n.optionsRef }), ue(() => {
    n.optionsPropsRef.value.static = e.static;
  }), ue(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = It(), l = R(() => r !== null ? (r.value & re.Open) === re.Open : n.comboboxState.value === 0);
  return qo({ container: R(() => P(n.optionsRef)), enabled: R(() => n.comboboxState.value === 0), accept(d) {
    return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } }), () => {
    var d, s, u;
    let f = { open: n.comboboxState.value === 0 }, h = { "aria-labelledby": (u = (d = P(n.labelRef)) == null ? void 0 : d.id) != null ? u : (s = P(n.buttonRef)) == null ? void 0 : s.id, id: i, ref: n.optionsRef, role: "listbox", "aria-multiselectable": n.mode.value === 1 ? !0 : void 0 }, g = Ne(e, ["hold"]);
    return Z({ ourProps: h, theirProps: g, slot: f, attrs: t, slots: o, features: ce.RenderStrategy | ce.Static, visible: l.value, name: "ComboboxOptions" });
  };
} }), la = Q({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o, expose: a }) {
  let n = we("ComboboxOption"), i = `headlessui-combobox-option-${le()}`, r = j(null);
  a({ el: r, $el: r });
  let l = R(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === i : !1), d = R(() => K(n.mode.value, { 0: () => n.compare(M(n.value.value), M(e.value)), 1: () => M(n.value.value).some((k) => n.compare(M(k), M(e.value))) })), s = R(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  ae(() => n.registerOption(i, s)), tt(() => n.unregisterOption(i)), ue(() => {
    n.comboboxState.value === 0 && l.value && n.activationTrigger.value !== 0 && G(() => {
      var k, c;
      return (c = (k = P(r)) == null ? void 0 : k.scrollIntoView) == null ? void 0 : c.call(k, { block: "nearest" });
    });
  });
  function u(k) {
    if (e.disabled)
      return k.preventDefault();
    n.selectOption(i), n.mode.value === 0 && n.closeCombobox(), Qo() || requestAnimationFrame(() => {
      var c;
      return (c = P(n.inputRef)) == null ? void 0 : c.focus();
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
  function $(k) {
    h.wasMoved(k) && (e.disabled || l.value || n.goToOption(V.Specific, i, 0));
  }
  function S(k) {
    h.wasMoved(k) && (e.disabled || l.value && (n.optionsPropsRef.value.hold || n.goToOption(V.Nothing)));
  }
  return () => {
    let { disabled: k } = e, c = { active: l.value, selected: d.value, disabled: k }, T = { id: i, ref: r, role: "option", tabIndex: k === !0 ? void 0 : -1, "aria-disabled": k === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: u, onFocus: f, onPointerenter: g, onMouseenter: g, onPointermove: $, onMousemove: $, onPointerleave: S, onMouseleave: S };
    return Z({ ourProps: T, theirProps: e, slot: c, attrs: o, slots: t, name: "ComboboxOption" });
  };
} }), xt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function wt(e) {
  var t, o;
  let a = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return a;
  let i = !1;
  for (let l of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    l.remove(), i = !0;
  let r = i ? (o = n.innerText) != null ? o : "" : a;
  return xt.test(r) && (r = r.replace(xt, "")), r;
}
function sa(e) {
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
function ua(e) {
  let t = j(""), o = j("");
  return () => {
    let a = P(e);
    if (!a)
      return "";
    let n = a.innerText;
    if (t.value === n)
      return o.value;
    let i = sa(a).trim().toLowerCase();
    return t.value = n, o.value = i, i;
  };
}
function da(e, t) {
  return e === t;
}
var ca = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ca || {}), fa = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(fa || {}), pa = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(pa || {});
function va(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Jt = Symbol("ListboxContext");
function Re(e) {
  let t = Me(Jt, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Re), o;
  }
  return t;
}
let ma = Q({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => da }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: o, emit: a }) {
  let n = j(1), i = j(null), r = j(null), l = j(null), d = j([]), s = j(""), u = j(null), f = j(1);
  function h(p = (y) => y) {
    let y = u.value !== null ? d.value[u.value] : null, O = Vt(p(d.value.slice()), (D) => P(D.dataRef.domRef)), v = y ? O.indexOf(y) : null;
    return v === -1 && (v = null), { options: O, activeOptionIndex: v };
  }
  let g = R(() => e.multiple ? 1 : 0), [$, S] = Ut(R(() => e.modelValue), (p) => a("update:modelValue", p), R(() => e.defaultValue)), k = R(() => $.value === void 0 ? K(g.value, { 1: [], 0: void 0 }) : $.value), c = { listboxState: n, value: k, mode: g, compare(p, y) {
    if (typeof e.by == "string") {
      let O = e.by;
      return (p == null ? void 0 : p[O]) === (y == null ? void 0 : y[O]);
    }
    return e.by(p, y);
  }, orientation: R(() => e.horizontal ? "horizontal" : "vertical"), labelRef: i, buttonRef: r, optionsRef: l, disabled: R(() => e.disabled), options: d, searchQuery: s, activeOptionIndex: u, activationTrigger: f, closeListbox() {
    e.disabled || n.value !== 1 && (n.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(p, y, O) {
    if (e.disabled || n.value === 1)
      return;
    let v = h(), D = Dt(p === V.Specific ? { focus: V.Specific, id: y } : { focus: p }, { resolveItems: () => v.options, resolveActiveIndex: () => v.activeOptionIndex, resolveId: (b) => b.id, resolveDisabled: (b) => b.dataRef.disabled });
    s.value = "", u.value = D, f.value = O ?? 1, d.value = v.options;
  }, search(p) {
    if (e.disabled || n.value === 1)
      return;
    let y = s.value !== "" ? 0 : 1;
    s.value += p.toLowerCase();
    let O = (u.value !== null ? d.value.slice(u.value + y).concat(d.value.slice(0, u.value + y)) : d.value).find((D) => D.dataRef.textValue.startsWith(s.value) && !D.dataRef.disabled), v = O ? d.value.indexOf(O) : -1;
    v === -1 || v === u.value || (u.value = v, f.value = 1);
  }, clearSearch() {
    e.disabled || n.value !== 1 && s.value !== "" && (s.value = "");
  }, registerOption(p, y) {
    let O = h((v) => [...v, { id: p, dataRef: y }]);
    d.value = O.options, u.value = O.activeOptionIndex;
  }, unregisterOption(p) {
    let y = h((O) => {
      let v = O.findIndex((D) => D.id === p);
      return v !== -1 && O.splice(v, 1), O;
    });
    d.value = y.options, u.value = y.activeOptionIndex, f.value = 1;
  }, theirOnChange(p) {
    e.disabled || S(p);
  }, select(p) {
    e.disabled || S(K(g.value, { 0: () => p, 1: () => {
      let y = M(c.value.value).slice(), O = M(p), v = y.findIndex((D) => c.compare(O, M(D)));
      return v === -1 ? y.push(O) : y.splice(v, 1), y;
    } }));
  } };
  Bt([r, l], (p, y) => {
    var O;
    c.closeListbox(), Ft(y, lt.Loose) || (p.preventDefault(), (O = P(r)) == null || O.focus());
  }, R(() => n.value === 0)), Fe(Jt, c), jt(R(() => K(n.value, { 0: re.Open, 1: re.Closed })));
  let T = R(() => {
    var p;
    return (p = P(r)) == null ? void 0 : p.closest("form");
  });
  return ae(() => {
    ie([T], () => {
      if (!T.value || e.defaultValue === void 0)
        return;
      function p() {
        c.theirOnChange(e.defaultValue);
      }
      return T.value.addEventListener("reset", p), () => {
        var y;
        (y = T.value) == null || y.removeEventListener("reset", p);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: p, modelValue: y, disabled: O, form: v, ...D } = e, b = { open: n.value === 0, disabled: O, value: k.value };
    return Oe(ne, [...p != null && k.value != null ? ut({ [p]: k.value }).map(([_, x]) => Oe(Nt, Et({ features: st.Hidden, key: _, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: v, name: _, value: x }))) : [], Z({ ourProps: {}, theirProps: { ...o, ...Ne(D, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: b, slots: t, attrs: o, name: "Listbox" })]);
  };
} });
Q({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${le()}` } }, setup(e, { attrs: t, slots: o }) {
  let a = Re("ListboxLabel");
  function n() {
    var i;
    (i = P(a.buttonRef)) == null || i.focus({ preventScroll: !0 });
  }
  return () => {
    let i = { open: a.listboxState.value === 0, disabled: a.disabled.value }, { id: r, ...l } = e, d = { id: r, ref: a.labelRef, onClick: n };
    return Z({ ourProps: d, theirProps: l, slot: i, attrs: t, slots: o, name: "ListboxLabel" });
  };
} });
let ha = Q({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${le()}` } }, setup(e, { attrs: t, slots: o, expose: a }) {
  let n = Re("ListboxButton");
  a({ el: n.buttonRef, $el: n.buttonRef });
  function i(s) {
    switch (s.key) {
      case B.Space:
      case B.Enter:
      case B.ArrowDown:
        s.preventDefault(), n.openListbox(), G(() => {
          var u;
          (u = P(n.optionsRef)) == null || u.focus({ preventScroll: !0 }), n.value.value || n.goToOption(V.First);
        });
        break;
      case B.ArrowUp:
        s.preventDefault(), n.openListbox(), G(() => {
          var u;
          (u = P(n.optionsRef)) == null || u.focus({ preventScroll: !0 }), n.value.value || n.goToOption(V.Last);
        });
        break;
    }
  }
  function r(s) {
    switch (s.key) {
      case B.Space:
        s.preventDefault();
        break;
    }
  }
  function l(s) {
    n.disabled.value || (n.listboxState.value === 0 ? (n.closeListbox(), G(() => {
      var u;
      return (u = P(n.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (s.preventDefault(), n.openListbox(), va(() => {
      var u;
      return (u = P(n.optionsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let d = Mt(R(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var s, u;
    let f = { open: n.listboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: h, ...g } = e, $ = { ref: n.buttonRef, id: h, type: d.value, "aria-haspopup": "listbox", "aria-controls": (s = P(n.optionsRef)) == null ? void 0 : s.id, "aria-expanded": n.listboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(u = P(n.labelRef)) == null ? void 0 : u.id, h].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: i, onKeyup: r, onClick: l };
    return Z({ ourProps: $, theirProps: g, slot: f, attrs: t, slots: o, name: "ListboxButton" });
  };
} }), ba = Q({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${le()}` } }, setup(e, { attrs: t, slots: o, expose: a }) {
  let n = Re("ListboxOptions"), i = j(null);
  a({ el: n.optionsRef, $el: n.optionsRef });
  function r(s) {
    switch (i.value && clearTimeout(i.value), s.key) {
      case B.Space:
        if (n.searchQuery.value !== "")
          return s.preventDefault(), s.stopPropagation(), n.search(s.key);
      case B.Enter:
        if (s.preventDefault(), s.stopPropagation(), n.activeOptionIndex.value !== null) {
          let u = n.options.value[n.activeOptionIndex.value];
          n.select(u.dataRef.value);
        }
        n.mode.value === 0 && (n.closeListbox(), G(() => {
          var u;
          return (u = P(n.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        }));
        break;
      case K(n.orientation.value, { vertical: B.ArrowDown, horizontal: B.ArrowRight }):
        return s.preventDefault(), s.stopPropagation(), n.goToOption(V.Next);
      case K(n.orientation.value, { vertical: B.ArrowUp, horizontal: B.ArrowLeft }):
        return s.preventDefault(), s.stopPropagation(), n.goToOption(V.Previous);
      case B.Home:
      case B.PageUp:
        return s.preventDefault(), s.stopPropagation(), n.goToOption(V.First);
      case B.End:
      case B.PageDown:
        return s.preventDefault(), s.stopPropagation(), n.goToOption(V.Last);
      case B.Escape:
        s.preventDefault(), s.stopPropagation(), n.closeListbox(), G(() => {
          var u;
          return (u = P(n.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        break;
      case B.Tab:
        s.preventDefault(), s.stopPropagation();
        break;
      default:
        s.key.length === 1 && (n.search(s.key), i.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  let l = It(), d = R(() => l !== null ? (l.value & re.Open) === re.Open : n.listboxState.value === 0);
  return () => {
    var s, u, f, h;
    let g = { open: n.listboxState.value === 0 }, { id: $, ...S } = e, k = { "aria-activedescendant": n.activeOptionIndex.value === null || (s = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : s.id, "aria-multiselectable": n.mode.value === 1 ? !0 : void 0, "aria-labelledby": (h = (u = P(n.labelRef)) == null ? void 0 : u.id) != null ? h : (f = P(n.buttonRef)) == null ? void 0 : f.id, "aria-orientation": n.orientation.value, id: $, onKeydown: r, role: "listbox", tabIndex: 0, ref: n.optionsRef };
    return Z({ ourProps: k, theirProps: S, slot: g, attrs: t, slots: o, features: ce.RenderStrategy | ce.Static, visible: d.value, name: "ListboxOptions" });
  };
} }), ga = Q({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${le()}` } }, setup(e, { slots: t, attrs: o, expose: a }) {
  let n = Re("ListboxOption"), i = j(null);
  a({ el: i, $el: i });
  let r = R(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === e.id : !1), l = R(() => K(n.mode.value, { 0: () => n.compare(M(n.value.value), M(e.value)), 1: () => M(n.value.value).some((c) => n.compare(M(c), M(e.value))) })), d = R(() => K(n.mode.value, { 1: () => {
    var c;
    let T = M(n.value.value);
    return ((c = n.options.value.find((p) => T.some((y) => n.compare(M(y), M(p.dataRef.value))))) == null ? void 0 : c.id) === e.id;
  }, 0: () => l.value })), s = ua(i), u = R(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return s();
  }, domRef: i }));
  ae(() => n.registerOption(e.id, u)), tt(() => n.unregisterOption(e.id)), ae(() => {
    ie([n.listboxState, l], () => {
      n.listboxState.value === 0 && l.value && K(n.mode.value, { 1: () => {
        d.value && n.goToOption(V.Specific, e.id);
      }, 0: () => {
        n.goToOption(V.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), ue(() => {
    n.listboxState.value === 0 && r.value && n.activationTrigger.value !== 0 && G(() => {
      var c, T;
      return (T = (c = P(i)) == null ? void 0 : c.scrollIntoView) == null ? void 0 : T.call(c, { block: "nearest" });
    });
  });
  function f(c) {
    if (e.disabled)
      return c.preventDefault();
    n.select(e.value), n.mode.value === 0 && (n.closeListbox(), G(() => {
      var T;
      return (T = P(n.buttonRef)) == null ? void 0 : T.focus({ preventScroll: !0 });
    }));
  }
  function h() {
    if (e.disabled)
      return n.goToOption(V.Nothing);
    n.goToOption(V.Specific, e.id);
  }
  let g = Kt();
  function $(c) {
    g.update(c);
  }
  function S(c) {
    g.wasMoved(c) && (e.disabled || r.value || n.goToOption(V.Specific, e.id, 0));
  }
  function k(c) {
    g.wasMoved(c) && (e.disabled || r.value && n.goToOption(V.Nothing));
  }
  return () => {
    let { disabled: c } = e, T = { active: r.value, selected: l.value, disabled: c }, { id: p, value: y, disabled: O, ...v } = e, D = { id: p, ref: i, role: "option", tabIndex: c === !0 ? void 0 : -1, "aria-disabled": c === !0 ? !0 : void 0, "aria-selected": l.value, disabled: void 0, onClick: f, onFocus: h, onPointerenter: $, onMouseenter: $, onPointermove: S, onMousemove: S, onPointerleave: k, onMouseleave: k };
    return Z({ ourProps: D, theirProps: v, slot: T, attrs: o, slots: t, name: "ListboxOption" });
  };
} });
const ya = {}, xa = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, wa = /* @__PURE__ */ w(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 12.75l6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), _a = [
  wa
];
function $a(e, t) {
  return m(), z("svg", xa, _a);
}
const Yt = /* @__PURE__ */ J(ya, [["render", $a]]), Sa = {};
function Oa(e, t) {
  return m(), q(Te, {
    "enter-active-class": "transition ease-out duration-200",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95"
  }, {
    default: E(() => [
      C(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
const He = /* @__PURE__ */ J(Sa, [["render", Oa]]), ka = {}, za = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Ta = /* @__PURE__ */ w(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  },
  null,
  -1
  /* HOISTED */
), Ra = [
  Ta
];
function Aa(e, t) {
  return m(), z("svg", za, Ra);
}
const Xt = /* @__PURE__ */ J(ka, [["render", Aa]]), Ca = { class: "text-sm" }, Pa = {
  inheritAttrs: !1
}, Br = /* @__PURE__ */ Object.assign(Pa, {
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
    return (t, o) => (m(), q(
      at,
      nt(ot(
        Object.keys(L(ge)).reduce((a, n) => (a[n] = t.$props[n], a), {})
      )),
      {
        default: E(() => [
          H(L(ma), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": o[0] || (o[0] = (a) => t.$emit("update:modelValue", a))
          }, {
            default: E(() => [
              H(L(ha), {
                class: U({
                  "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600": e.appearance === "select",
                  "inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800": e.appearance === "primary-button"
                })
              }, {
                default: E(() => {
                  var a, n;
                  return [
                    w(
                      "div",
                      Ca,
                      oe(Array.isArray(e.modelValue) ? (a = e.modelValue) == null ? void 0 : a.map((i) => i.name).join(", ") : ((n = e.modelValue) == null ? void 0 : n.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    H(Xt, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class"]),
              H(He, null, {
                default: E(() => [
                  H(L(ba), {
                    class: U(["overflow-y-auto max-h-64 min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                      "right-0": e.align === "right",
                      "left-0": e.align === "left"
                    }])
                  }, {
                    default: E(() => [
                      C(t.$slots, "listbox-title"),
                      (m(!0), z(
                        ne,
                        null,
                        Ve(e.options, (a) => (m(), q(L(ga), {
                          key: a.id,
                          value: a,
                          as: "template"
                        }, {
                          default: E(({ active: n, selected: i }) => [
                            w(
                              "li",
                              {
                                class: U(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                                  "bg-zinc-50 dark:bg-zinc-900": i,
                                  "bg-zinc-100 dark:bg-zinc-700": n
                                }])
                              },
                              [
                                de(
                                  oe(a.name) + " ",
                                  1
                                  /* TEXT */
                                ),
                                i ? (m(), q(Yt, {
                                  key: 0,
                                  class: "h-5 w-5"
                                })) : F("v-if", !0)
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
}), Ea = { class: "text-sm" }, Da = {
  inheritAttrs: !1
}, Nr = /* @__PURE__ */ Object.assign(Da, {
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
    return (t, o) => (m(), q(
      at,
      nt(ot(
        Object.keys(L(ge)).reduce((a, n) => (a[n] = t.$props[n], a), {})
      )),
      {
        default: E(() => [
          H(L(aa), {
            "model-value": e.modelValue,
            multiple: e.multiple,
            by: "id",
            "onUpdate:modelValue": o[1] || (o[1] = (a) => t.$emit("update:modelValue", a))
          }, {
            default: E(() => [
              H(L(ia), {
                class: "flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2 text-left text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600",
                "display-value": e.displayValue ?? ((a) => a),
                onChange: o[0] || (o[0] = (a) => t.$emit("update:query", a.target.value))
              }, {
                default: E(() => {
                  var a, n;
                  return [
                    w(
                      "div",
                      Ea,
                      oe(Array.isArray(e.modelValue) ? (a = e.modelValue) == null ? void 0 : a.map((i) => i.name).join(", ") : ((n = e.modelValue) == null ? void 0 : n.name) || e.defaultText),
                      1
                      /* TEXT */
                    ),
                    H(Xt, { class: "h-4 w-4" })
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["display-value"]),
              H(He, null, {
                default: E(() => [
                  H(L(ra), {
                    class: U(["min-w-64 absolute z-50 mt-3 origin-top rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white", {
                      "right-0": e.align === "right",
                      "left-0": e.align === "left"
                    }])
                  }, {
                    default: E(() => [
                      C(t.$slots, "listbox-title"),
                      (m(!0), z(
                        ne,
                        null,
                        Ve(e.options, (a) => (m(), q(L(la), {
                          key: a.id,
                          value: a,
                          as: "template"
                        }, {
                          default: E(({ active: n, selected: i }) => [
                            w(
                              "li",
                              {
                                class: U(["flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700", {
                                  "bg-zinc-50 dark:bg-zinc-900": i,
                                  "bg-zinc-100 dark:bg-zinc-700": n
                                }])
                              },
                              [
                                de(
                                  oe(a.name) + " ",
                                  1
                                  /* TEXT */
                                ),
                                i ? (m(), q(Yt, {
                                  key: 0,
                                  class: "h-5 w-5"
                                })) : F("v-if", !0)
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
});
function Qt(e) {
  return gn() ? (yn(e), !0) : !1;
}
function dt(e) {
  return typeof e == "function" ? e() : L(e);
}
const La = typeof window < "u" && typeof document < "u", Ia = Object.prototype.toString, ja = (e) => Ia.call(e) === "[object Object]", Ma = () => {
};
function Fa(e, t) {
  function o(...a) {
    return new Promise((n, i) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(n).catch(i);
    });
  }
  return o;
}
const Zt = (e) => e();
function Va(e = Zt) {
  const t = j(!0);
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
function Ba(e, t, o = {}) {
  const {
    eventFilter: a = Zt,
    ...n
  } = o;
  return ie(
    e,
    Fa(
      a,
      t
    ),
    n
  );
}
function Na(e, t, o = {}) {
  const {
    eventFilter: a,
    ...n
  } = o, { eventFilter: i, pause: r, resume: l, isActive: d } = Va(a);
  return { stop: Ba(
    e,
    t,
    {
      ...n,
      eventFilter: i
    }
  ), pause: r, resume: l, isActive: d };
}
function Xe(e) {
  var t;
  const o = dt(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ke = La ? window : void 0;
function _t(...e) {
  let t, o, a, n;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, a, n] = e, t = ke) : [t, o, a, n] = e, !t)
    return Ma;
  Array.isArray(o) || (o = [o]), Array.isArray(a) || (a = [a]);
  const i = [], r = () => {
    i.forEach((u) => u()), i.length = 0;
  }, l = (u, f, h, g) => (u.addEventListener(f, h, g), () => u.removeEventListener(f, h, g)), d = ie(
    () => [Xe(t), dt(n)],
    ([u, f]) => {
      if (r(), !u)
        return;
      const h = ja(f) ? { ...f } : f;
      i.push(
        ...o.flatMap((g) => a.map(($) => l(u, g, $, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    d(), r();
  };
  return Qt(s), s;
}
function Ha() {
  const e = j(!1);
  return wn() && ae(() => {
    e.value = !0;
  }), e;
}
function qa(e) {
  const t = Ha();
  return R(() => (t.value, !!e()));
}
const Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pe = "__vueuse_ssr_handlers__", Ua = /* @__PURE__ */ Ka();
function Ka() {
  return Pe in Ce || (Ce[Pe] = Ce[Pe] || {}), Ce[Pe];
}
function Wa(e, t) {
  return Ua[e] || t;
}
function Ga(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Ja = {
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
}, $t = "vueuse-storage";
function Ya(e, t, o, a = {}) {
  var n;
  const {
    flush: i = "pre",
    deep: r = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: d = !0,
    mergeDefaults: s = !1,
    shallow: u,
    window: f = ke,
    eventFilter: h,
    onError: g = (b) => {
      console.error(b);
    }
  } = a, $ = (u ? _n : j)(t);
  if (!o)
    try {
      o = Wa("getDefaultStorage", () => {
        var b;
        return (b = ke) == null ? void 0 : b.localStorage;
      })();
    } catch (b) {
      g(b);
    }
  if (!o)
    return $;
  const S = dt(t), k = Ga(S), c = (n = a.serializer) != null ? n : Ja[k], { pause: T, resume: p } = Na(
    $,
    () => y($.value),
    { flush: i, deep: r, eventFilter: h }
  );
  return f && l && (_t(f, "storage", D), _t(f, $t, v)), D(), $;
  function y(b) {
    try {
      if (b == null)
        o.removeItem(e);
      else {
        const _ = c.write(b), x = o.getItem(e);
        x !== _ && (o.setItem(e, _), f && f.dispatchEvent(new CustomEvent($t, {
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
      return d && S !== null && o.setItem(e, c.write(S)), S;
    if (!b && s) {
      const x = c.read(_);
      return typeof s == "function" ? s(x, S) : k === "object" && !Array.isArray(x) ? { ...S, ...x } : x;
    } else
      return typeof _ != "string" ? _ : c.read(_);
  }
  function v(b) {
    D(b.detail);
  }
  function D(b) {
    if (!(b && b.storageArea !== o)) {
      if (b && b.key == null) {
        $.value = S;
        return;
      }
      if (!(b && b.key !== e)) {
        T();
        try {
          (b == null ? void 0 : b.newValue) !== c.write($.value) && ($.value = O(b));
        } catch (_) {
          g(_);
        } finally {
          b ? G(p) : p();
        }
      }
    }
  }
}
function Xa(e, t, o = {}) {
  const { window: a = ke, ...n } = o;
  let i;
  const r = qa(() => a && "ResizeObserver" in a), l = () => {
    i && (i.disconnect(), i = void 0);
  }, d = R(
    () => Array.isArray(e) ? e.map((f) => Xe(f)) : [Xe(e)]
  ), s = ie(
    d,
    (f) => {
      if (l(), r.value && a) {
        i = new ResizeObserver(t);
        for (const h of f)
          h && i.observe(h, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), u = () => {
    l(), s();
  };
  return Qt(u), {
    isSupported: r,
    stop: u
  };
}
function Qa(e, t, o = {}) {
  const { window: a = ke } = o;
  return Ya(e, t, a == null ? void 0 : a.localStorage, o);
}
const Za = {}, ei = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, ti = /* @__PURE__ */ w(
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
), ni = [
  ti
];
function oi(e, t) {
  return m(), z("svg", ei, ni);
}
const ai = /* @__PURE__ */ J(Za, [["render", oi]]), ii = { class: "flex flex-col gap-6 py-6" }, ri = { class: "flex flex-col gap-6 mb-6" }, Hr = {
  __name: "Sidebar",
  setup(e) {
    const t = Qa("ui/sidebar", !1);
    return Fe("sidebarMinimised", t), (o, a) => (m(), z(
      "nav",
      {
        class: U(["min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10", {
          "!w-24 !max-w-24 !min-w-24": L(t),
          "w-64 max-w-64 min-w-64": !L(t)
        }])
      },
      [
        w("button", {
          class: "absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-[12]",
          onClick: a[0] || (a[0] = (n) => t.value = !L(t))
        }, [
          H(ai, {
            class: U(["w-5 h-5", {
              "transform rotate-180": !L(t)
            }])
          }, null, 8, ["class"])
        ]),
        F(" Primary Navigation Menu "),
        w("div", ii, [
          F(" Logo "),
          C(o.$slots, "default")
        ]),
        w("div", ri, [
          C(o.$slots, "bottom")
        ])
      ],
      2
      /* CLASS */
    ));
  }
}, li = {
  key: 1,
  class: "absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3 z-20"
}, qr = {
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
    const t = e, o = Me("sidebarMinimised"), a = R(() => {
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
    return (n, i) => (m(), q(se(e.as), {
      class: U(a.value)
    }, {
      default: E(() => [
        e.icon ? (m(), q(se(e.icon), {
          key: 0,
          class: U(["w-6 h-6 transition-all", {
            " mr-4": !L(o)
          }])
        }, null, 8, ["class"])) : F("v-if", !0),
        H(Te, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "transform opacity-0",
          "enter-to-class": "transform opacity-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100",
          "leave-to-class": "transform opacity-0"
        }, {
          default: E(() => [
            L(o) ? F("v-if", !0) : C(n.$slots, "default", { key: 0 })
          ]),
          _: 3
          /* FORWARDED */
        }),
        L(o) ? (m(), z("div", li, [
          C(n.$slots, "default")
        ])) : F("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
}, si = {}, ui = { class: "min-h-screen bg-zinc-100 dark:bg-zinc-900 relative" }, di = { class: "flex w-full h-full max-h-screen z-10 relative" }, ci = { class: "flex-grow overflow-y-auto pb-12 z-[11]" };
function fi(e, t) {
  return m(), z("div", ui, [
    C(e.$slots, "top"),
    w("div", di, [
      C(e.$slots, "sidebar"),
      w("section", ci, [
        C(e.$slots, "default")
      ])
    ])
  ]);
}
const Ur = /* @__PURE__ */ J(si, [["render", fi]]), pi = {}, vi = { class: "flex flex-col gap-2 px-2" };
function mi(e, t) {
  return m(), z("div", vi, [
    C(e.$slots, "default")
  ]);
}
const Kr = /* @__PURE__ */ J(pi, [["render", mi]]), hi = {};
function bi(e, t) {
  return m(), q(Te, {
    "enter-active-class": "transition ease-out duration-300",
    "enter-from-class": "transform opacity-0",
    "enter-to-class": "transform opacity-100",
    "leave-active-class": "transition ease-in duration-200",
    "leave-from-class": "transform opacity-100",
    "leave-to-class": "transform opacity-0"
  }, {
    default: E(() => [
      C(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
const en = /* @__PURE__ */ J(hi, [["render", bi]]);
function gi(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
const tn = (e, t, o) => Math.min(Math.max(o, e), t), X = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
}, ze = (e) => typeof e == "number", me = (e) => Array.isArray(e) && !ze(e[0]), yi = (e, t, o) => {
  const a = t - e;
  return ((o - e) % a + a) % a + e;
};
function xi(e, t) {
  return me(e) ? e[yi(0, e.length, t)] : e;
}
const nn = (e, t, o) => -o * e + o * t + e, on = () => {
}, te = (e) => e, ct = (e, t, o) => t - e === 0 ? 1 : (o - e) / (t - e);
function an(e, t) {
  const o = e[e.length - 1];
  for (let a = 1; a <= t; a++) {
    const n = ct(0, t, a);
    e.push(nn(o, 1, n));
  }
}
function wi(e) {
  const t = [0];
  return an(t, e - 1), t;
}
function _i(e, t = wi(e.length), o = te) {
  const a = e.length, n = a - t.length;
  return n > 0 && an(t, n), (i) => {
    let r = 0;
    for (; r < a - 2 && !(i < t[r + 1]); r++)
      ;
    let l = tn(0, 1, ct(t[r], t[r + 1], i));
    return l = xi(o, r)(l), nn(e[r], e[r + 1], l);
  };
}
const rn = (e) => Array.isArray(e) && ze(e[0]), Qe = (e) => typeof e == "object" && !!e.createAnimation, ye = (e) => typeof e == "function", ln = (e) => typeof e == "string", he = {
  ms: (e) => e * 1e3,
  s: (e) => e / 1e3
};
function $i(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sn = (e, t, o) => (((1 - 3 * o + 3 * t) * e + (3 * o - 6 * t)) * e + 3 * t) * e, Si = 1e-7, Oi = 12;
function ki(e, t, o, a, n) {
  let i, r, l = 0;
  do
    r = t + (o - t) / 2, i = sn(r, a, n) - e, i > 0 ? o = r : t = r;
  while (Math.abs(i) > Si && ++l < Oi);
  return r;
}
function $e(e, t, o, a) {
  if (e === t && o === a)
    return te;
  const n = (i) => ki(i, 0, 1, e, o);
  return (i) => i === 0 || i === 1 ? i : sn(n(i), t, a);
}
const zi = (e, t = "end") => (o) => {
  o = t === "end" ? Math.min(o, 0.999) : Math.max(o, 1e-3);
  const a = o * e, n = t === "end" ? Math.floor(a) : Math.ceil(a);
  return tn(0, 1, n / e);
}, St = {
  ease: $e(0.25, 0.1, 0.25, 1),
  "ease-in": $e(0.42, 0, 1, 1),
  "ease-in-out": $e(0.42, 0, 0.58, 1),
  "ease-out": $e(0, 0, 0.58, 1)
}, Ti = /\((.*?)\)/;
function Ot(e) {
  if (ye(e))
    return e;
  if (rn(e))
    return $e(...e);
  if (St[e])
    return St[e];
  if (e.startsWith("steps")) {
    const t = Ti.exec(e);
    if (t) {
      const o = t[1].split(",");
      return zi(parseFloat(o[0]), o[1].trim());
    }
  }
  return te;
}
class un {
  constructor(t, o = [0, 1], { easing: a, duration: n = X.duration, delay: i = X.delay, endDelay: r = X.endDelay, repeat: l = X.repeat, offset: d, direction: s = "normal" } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = te, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((f, h) => {
      this.resolve = f, this.reject = h;
    }), a = a || X.easing, Qe(a)) {
      const f = a.createAnimation(o);
      a = f.easing, o = f.keyframes || o, n = f.duration || n;
    }
    this.repeat = l, this.easing = me(a) ? te : Ot(a), this.updateDuration(n);
    const u = _i(o, d, me(a) ? a.map(Ot) : te);
    this.tick = (f) => {
      var h;
      i = i;
      let g = 0;
      this.pauseTime !== void 0 ? g = this.pauseTime : g = (f - this.startTime) * this.rate, this.t = g, g /= 1e3, g = Math.max(g - i, 0), this.playState === "finished" && this.pauseTime === void 0 && (g = this.totalDuration);
      const $ = g / this.duration;
      let S = Math.floor($), k = $ % 1;
      !k && $ >= 1 && (k = 1), k === 1 && S--;
      const c = S % 2;
      (s === "reverse" || s === "alternate" && c || s === "alternate-reverse" && !c) && (k = 1 - k);
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
class Ri {
  setAnimation(t) {
    this.animation = t, t == null || t.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const Ue = /* @__PURE__ */ new WeakMap();
function dn(e) {
  return Ue.has(e) || Ue.set(e, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), Ue.get(e);
}
function Ai(e, t) {
  return e.has(t) || e.set(t, new Ri()), e.get(t);
}
const Ci = ["", "X", "Y", "Z"], Pi = ["translate", "scale", "rotate", "skew"], Le = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
}, kt = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (e) => e + "deg"
}, Ei = {
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
}, xe = /* @__PURE__ */ new Map(), ft = (e) => `--motion-${e}`, Ie = ["x", "y", "z"];
Pi.forEach((e) => {
  Ci.forEach((t) => {
    Ie.push(e + t), xe.set(ft(e + t), Ei[e]);
  });
});
const Di = (e, t) => Ie.indexOf(e) - Ie.indexOf(t), Li = new Set(Ie), cn = (e) => Li.has(e), Ii = (e, t) => {
  Le[t] && (t = Le[t]);
  const { transforms: o } = dn(e);
  gi(o, t), e.style.transform = ji(o);
}, ji = (e) => e.sort(Di).reduce(Mi, "").trim(), Mi = (e, t) => `${e} ${t}(var(${ft(t)}))`, et = (e) => e.startsWith("--"), zt = /* @__PURE__ */ new Set();
function Fi(e) {
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
const Vi = 0.015, Bi = (e, t) => {
  let o = "";
  const a = Math.round(t / Vi);
  for (let n = 0; n < a; n++)
    o += e(ct(0, a - 1, n)) + ", ";
  return o.substring(0, o.length - 2);
}, Rt = (e, t) => ye(e) ? pe.linearEasing() ? `linear(${Bi(e, t)})` : X.easing : rn(e) ? Ni(e) : e, Ni = ([e, t, o, a]) => `cubic-bezier(${e}, ${t}, ${o}, ${a})`;
function Hi(e, t) {
  for (let o = 0; o < e.length; o++)
    e[o] === null && (e[o] = o ? e[o - 1] : t());
  return e;
}
const qi = (e) => Array.isArray(e) ? e : [e];
function je(e) {
  return Le[e] && (e = Le[e]), cn(e) ? ft(e) : e;
}
const Ee = {
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
  if (ln(n)) {
    const i = ((o = n.match(/(-?[\d.]+)([a-z%]*)/)) === null || o === void 0 ? void 0 : o[2]) || "";
    i && (a = (r) => r + i);
  }
  return a;
}
function Ui() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function Ki(e, t, o, a = {}, n) {
  const i = Ui(), r = a.record !== !1 && i;
  let l, { duration: d = X.duration, delay: s = X.delay, endDelay: u = X.endDelay, repeat: f = X.repeat, easing: h = X.easing, persist: g = !1, direction: $, offset: S, allowWebkitAcceleration: k = !1 } = a;
  const c = dn(e), T = cn(t);
  let p = pe.waapi();
  T && Ii(e, t);
  const y = je(t), O = Ai(c.values, y), v = xe.get(y);
  return fn(O.animation, !(Qe(h) && O.generator) && a.record !== !1), () => {
    const D = () => {
      var x, I;
      return (I = (x = Ee.get(e, y)) !== null && x !== void 0 ? x : v == null ? void 0 : v.initialValue) !== null && I !== void 0 ? I : 0;
    };
    let b = Hi(qi(o), D);
    const _ = pn(b, v);
    if (Qe(h)) {
      const x = h.createAnimation(b, t !== "opacity", D, y, O);
      h = x.easing, b = x.keyframes || b, d = x.duration || d;
    }
    if (et(y) && (pe.cssRegisterProperty() ? Fi(y) : p = !1), T && !pe.linearEasing() && (ye(h) || me(h) && h.some(ye)) && (p = !1), p) {
      v && (b = b.map((A) => ze(A) ? v.toDefaultUnit(A) : A)), b.length === 1 && (!pe.partialKeyframes() || r) && b.unshift(D());
      const x = {
        delay: he.ms(s),
        duration: he.ms(d),
        endDelay: he.ms(u),
        easing: me(h) ? void 0 : Rt(h, d),
        direction: $,
        iterations: f + 1,
        fill: "both"
      };
      l = e.animate({
        [y]: b,
        offset: S,
        easing: me(h) ? h.map((A) => Rt(A, d)) : void 0
      }, x), l.finished || (l.finished = new Promise((A, N) => {
        l.onfinish = A, l.oncancel = N;
      }));
      const I = b[b.length - 1];
      l.finished.then(() => {
        g || (Ee.set(e, y, I), l.cancel());
      }).catch(on), k || (l.playbackRate = 1.000001);
    } else if (n && T)
      b = b.map((x) => typeof x == "string" ? parseFloat(x) : x), b.length === 1 && b.unshift(parseFloat(D())), l = new n((x) => {
        Ee.set(e, y, _ ? _(x) : x);
      }, b, Object.assign(Object.assign({}, a), {
        duration: d,
        easing: h
      }));
    else {
      const x = b[b.length - 1];
      Ee.set(e, y, v && ze(x) ? v.toDefaultUnit(x) : x);
    }
    return r && i(e, t, b, {
      duration: d,
      delay: s,
      easing: h,
      repeat: f,
      offset: S
    }, "motion-one"), O.setAnimation(l), l;
  };
}
const Wi = (e, t) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e)
);
function Gi(e, t) {
  return typeof e == "string" ? e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || []);
}
const Ji = (e) => e(), vn = (e, t, o = X.duration) => new Proxy({
  animations: e.map(Ji).filter(Boolean),
  duration: o,
  options: t
}, Xi), Yi = (e) => e.animations[0], Xi = {
  get: (e, t) => {
    const o = Yi(e);
    switch (t) {
      case "duration":
        return e.duration;
      case "currentTime":
        return he.s((o == null ? void 0 : o[t]) || 0);
      case "playbackRate":
      case "playState":
        return o == null ? void 0 : o[t];
      case "finished":
        return e.finished || (e.finished = Promise.all(e.animations.map(Qi)).catch(on)), e.finished;
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
}, Qi = (e) => e.finished;
function Zi(e, t, o) {
  return ye(e) ? e(t, o) : e;
}
function er(e) {
  return function(o, a, n = {}) {
    o = Gi(o);
    const i = o.length;
    Ze(!!i, "No valid element provided."), Ze(!!a, "No keyframes defined.");
    const r = [];
    for (let l = 0; l < i; l++) {
      const d = o[l];
      for (const s in a) {
        const u = Wi(n, s);
        u.delay = Zi(u.delay, l, i);
        const f = Ki(d, s, a[s], u, e);
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
const tr = er(un), nr = 5;
function mn(e, t, o) {
  const a = Math.max(t - nr, 0);
  return $i(o - e(a), t - a);
}
const be = {
  stiffness: 100,
  damping: 10,
  mass: 1
}, or = (e = be.stiffness, t = be.damping, o = be.mass) => t / (2 * Math.sqrt(e * o));
function ar(e, t, o) {
  return e < t && o >= t || e > t && o <= t;
}
const ir = ({ stiffness: e = be.stiffness, damping: t = be.damping, mass: o = be.mass, from: a = 0, to: n = 1, velocity: i = 0, restSpeed: r, restDistance: l } = {}) => {
  i = i ? he.s(i) : 0;
  const d = {
    done: !1,
    hasReachedTarget: !1,
    current: a,
    target: n
  }, s = n - a, u = Math.sqrt(e / o) / 1e3, f = or(e, t, o), h = Math.abs(s) < 5;
  r || (r = h ? 0.01 : 2), l || (l = h ? 5e-3 : 0.5);
  let g;
  if (f < 1) {
    const $ = u * Math.sqrt(1 - f * f);
    g = (S) => n - Math.exp(-f * u * S) * ((-i + f * u * s) / $ * Math.sin($ * S) + s * Math.cos($ * S));
  } else
    g = ($) => n - Math.exp(-u * $) * (s + (-i + u * s) * $);
  return ($) => {
    d.current = g($);
    const S = $ === 0 ? i : mn(g, $, d.current), k = Math.abs(S) <= r, c = Math.abs(n - d.current) <= l;
    return d.done = k && c, d.hasReachedTarget = ar(a, n, d.current), d;
  };
}, Ge = 10, rr = 1e4;
function lr(e, t = te) {
  let o, a = Ge, n = e(0);
  const i = [t(n.current)];
  for (; !n.done && a < rr; )
    n = e(a), i.push(t(n.done ? n.target : n.current)), o === void 0 && n.hasReachedTarget && (o = a), a += Ge;
  const r = a - Ge;
  return i.length === 1 && i.push(n.current), {
    keyframes: i,
    duration: r / 1e3,
    overshootDuration: (o ?? r) / 1e3
  };
}
function At(e) {
  return ze(e) && !isNaN(e);
}
function Je(e) {
  return ln(e) ? parseFloat(e) : e;
}
function sr(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (o = {}) => {
    const a = /* @__PURE__ */ new Map(), n = (r = 0, l = 100, d = 0, s = !1) => {
      const u = `${r}-${l}-${d}-${s}`;
      return a.has(u) || a.set(u, e(Object.assign({
        from: r,
        to: l,
        velocity: d
      }, o))), a.get(u);
    }, i = (r, l) => (t.has(r) || t.set(r, lr(r, l)), t.get(r));
    return {
      createAnimation: (r, l = !0, d, s, u) => {
        let f, h, g, $ = 0, S = te;
        const k = r.length;
        if (l) {
          S = pn(r, s ? xe.get(je(s)) : void 0);
          const c = r[k - 1];
          if (g = Je(c), k > 1 && r[0] !== null)
            h = Je(r[0]);
          else {
            const T = u == null ? void 0 : u.generator;
            if (T) {
              const { animation: p, generatorStartTime: y } = u, O = (p == null ? void 0 : p.startTime) || y || 0, v = (p == null ? void 0 : p.currentTime) || performance.now() - O, D = T(v).current;
              h = D, $ = mn((b) => T(b).current, v, D);
            } else
              d && (h = Je(d()));
          }
        }
        if (At(h) && At(g)) {
          const c = n(h, g, $, s == null ? void 0 : s.includes("scale"));
          f = Object.assign(Object.assign({}, i(c, S)), { easing: "linear" }), u && (u.generator = c, u.generatorStartTime = performance.now());
        }
        return f || (f = {
          easing: "ease",
          duration: i(n(0, 100)).overshootDuration
        }), f;
      }
    };
  };
}
const Ye = sr(ir);
function ur(e, t = {}) {
  return vn([
    () => {
      const o = new un(e, [0, 1], t);
      return o.finished.catch(() => {
      }), o;
    }
  ], t, t.duration);
}
function Se(e, t, o) {
  return (ye(e) ? ur : tr)(e, t, o);
}
const Wr = {
  __name: "CollapseTransition",
  setup(e) {
    function t(a, n) {
      const { height: i } = a.getBoundingClientRect();
      a.style.height = "0px", Se(a, { height: `${i}px` }, { duration: 0.3 }).finished.then(
        n
      );
    }
    function o(a, n) {
      Se(a, { height: "0px" }, { duration: 0.2 }).finished.then(n);
    }
    return (a, n) => (m(), q(Te, {
      "enter-active-class": "overflow-hidden transition-all duration-300",
      "enter-from-class": "scale-95 opacity-0",
      "enter-to-class": "scale-100 opacity-100",
      "leave-active-class": "overflow-hidden transition-all duration-200",
      "leave-from-class": "scale-100 opacity-100",
      "leave-to-class": "scale-95 opacity-0",
      onEnter: t,
      onLeave: o
    }, {
      default: E(() => [
        C(a.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, dr = { class: "flex gap-2 items-center" }, cr = {
  key: 0,
  class: "text-zinc-400 select-none"
}, Gr = {
  __name: "Breadcrumbs",
  setup(e) {
    const t = R(() => $n().default());
    return (o, a) => (m(), z("div", dr, [
      (m(!0), z(
        ne,
        null,
        Ve(t.value, (n, i) => (m(), z(
          ne,
          null,
          [
            (m(), q(se(n), {
              class: U({
                "dark:text-zinc-200 text-zinc-700": i === t.value.length - 1
              })
            }, null, 8, ["class"])),
            i < t.value.length - 1 ? (m(), z("div", cr, "/")) : F("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]));
  }
}, Jr = {
  __name: "BreadcrumbItem",
  props: {
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e) {
    return (t, o) => (m(), q(se(e.as), { class: "rounded-full px-1.5 transition hover:bg-zinc-900/10 hover:dark:bg-white/10 cursor-pointer text-sm text-zinc-400" }, {
      default: E(() => [
        C(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}, fr = {}, pr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, vr = /* @__PURE__ */ w(
  "path",
  {
    d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), mr = [
  vr
];
function hr(e, t) {
  return m(), z("svg", pr, mr);
}
const br = /* @__PURE__ */ J(fr, [["render", hr]]);
class gr {
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
      ve.dialog = new gr(e, t, o);
    });
  }
}), { info: Yr, confirm: Xr, reset: De } = ve, ee = R(() => ve.dialog), yr = {
  key: 0,
  class: "absolute inset-0 z-[60] bg-black/40"
}, xr = {
  key: 0,
  class: "absolute inset-0 z-[61] flex items-center justify-center"
}, Qr = {
  __name: "Dialogs",
  setup(e) {
    return (t, o) => (m(), z(
      ne,
      null,
      [
        H(en, null, {
          default: E(() => [
            L(ee) ? (m(), z("div", yr)) : F("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }),
        H(He, null, {
          default: E(() => [
            L(ee) ? (m(), z("div", xr, [
              H(
                po,
                {
                  class: "mx-6 w-full max-w-lg",
                  "footer-justify": "end"
                },
                Sn({
                  header: E(() => [
                    H(bo, null, {
                      default: E(() => {
                        var a, n;
                        return [
                          de(
                            oe((n = (a = L(ee)) == null ? void 0 : a.data) == null ? void 0 : n.title),
                            1
                            /* TEXT */
                          )
                        ];
                      }),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  footer: E(() => [
                    L(ee).type === "info" ? (m(), q(mt, {
                      key: 0,
                      onClick: o[1] || (o[1] = (a) => {
                        var n;
                        (n = L(ee)) == null || n.resolve(), L(De)();
                      })
                    }, {
                      default: E(() => [
                        de("Ok")
                      ]),
                      _: 1
                      /* STABLE */
                    })) : L(ee).type === "confirm" ? (m(), z(
                      ne,
                      { key: 1 },
                      [
                        H(uo, {
                          onClick: o[2] || (o[2] = (a) => {
                            var n;
                            (n = L(ee)) == null || n.resolve(!1), L(De)();
                          })
                        }, {
                          default: E(() => [
                            de("No")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        H(mt, {
                          onClick: o[3] || (o[3] = (a) => {
                            var n;
                            (n = L(ee)) == null || n.resolve(!0), L(De)();
                          })
                        }, {
                          default: E(() => [
                            de("Yes")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : F("v-if", !0)
                  ]),
                  default: E(() => {
                    var a, n;
                    return [
                      w(
                        "p",
                        null,
                        oe((n = (a = L(ee)) == null ? void 0 : a.data) == null ? void 0 : n.subtitle),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, [
                  L(ee).type !== "info" ? {
                    name: "extra",
                    fn: E(() => [
                      H(Be, {
                        size: "uniform",
                        onClick: o[0] || (o[0] = (a) => {
                          var n;
                          (n = L(ee)) == null || n.resolve(!1), L(De)();
                        })
                      }, {
                        default: E(() => [
                          H(br, { class: "h-5 w-5" })
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
            ])) : F("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
};
function wr() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
class _r {
  constructor(t, o = {}) {
    this.component = t, this.data = o;
  }
}
const Y = fe({
  modals: fe([]),
  push(e, t = {}) {
    return t.key || (t.key = wr()), Y.modals.push(fe(new _r(On(e), t))), document.body.classList.add("overflow-y-hidden"), t.key;
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
}), { push: Zr, pop: el, clear: tl } = Y, nl = () => Y.all, $r = {
  key: "modalBackground",
  class: "fixed inset-0 bg-black/40",
  "aria-hidden": "true"
}, Sr = { class: "flex min-h-screen w-screen justify-center items-end sm:items-center" }, Or = { class: "absolute right-0 top-0 pr-4 pt-4" }, kr = /* @__PURE__ */ w(
  "span",
  { class: "sr-only" },
  "Close",
  -1
  /* HOISTED */
), zr = /* @__PURE__ */ w(
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
), ol = {
  __name: "Modals",
  setup(e) {
    const t = j(!1);
    return ie(
      () => Y.modals,
      (o) => {
        o.length ? (document.body.classList.add("overflow-hidden"), G(() => {
          t.value = !0;
        })) : (document.body.classList.remove("overflow-hidden"), G(() => {
          t.value = !1;
        }));
      }
    ), (o, a) => (m(), z("div", null, [
      w(
        "div",
        {
          class: U(["fixed inset-0 z-[58] flex max-w-full justify-center overflow-y-auto", L(Y).all.length ? "" : "pointer-events-none"]),
          "aria-labelledby": "modal-title",
          role: "dialog",
          "aria-modal": "true"
        },
        [
          H(en, null, {
            default: E(() => [
              L(Y).all.length ? (m(), z("div", $r)) : F("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }),
          w("div", Sr, [
            H(He, null, {
              default: E(() => [
                (m(!0), z(
                  ne,
                  null,
                  Ve(L(Y).all, (n, i) => (m(), z(
                    "div",
                    {
                      key: `modal${i}`,
                      class: U(["relative w-full rounded-lg bg-white p-4 shadow-xl transition-all dark:bg-zinc-900 dark:text-white sm:my-8 sm:p-6", {
                        "max-w-6xl": n.data.size === "huge",
                        "max-w-3xl": n.data.size === "large",
                        "max-w-xl": n.data.size === "medium" || !n.data.size,
                        "max-w-md": n.data.size === "small"
                      }])
                    },
                    [
                      w("div", Or, [
                        w("button", {
                          type: "button",
                          class: "rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                          onClick: a[0] || (a[0] = (r) => L(Y).pop())
                        }, [
                          kr,
                          F(" Heroicon name: outline/x "),
                          zr
                        ])
                      ]),
                      (m(), q(se(n.component), {
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
}, al = {
  __name: "Container",
  props: {
    narrow: Boolean
  },
  setup(e) {
    return (t, o) => (m(), z(
      "div",
      {
        class: U(["mx-auto px-4 sm:px-6 lg:px-8", {
          "max-w-7xl": !e.narrow,
          "max-w-4xl": e.narrow
        }])
      },
      [
        C(t.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
}, il = {
  mounted: (e, { modifiers: t }) => {
    const o = fe({ width: 0, height: 0 }), a = j(!1), n = t.height ? "height" : t.width ? "width" : "both";
    Xa(e, (i) => {
      if (a.value)
        return;
      const [r] = i, { width: l, height: d } = r.contentRect;
      if (n === "height") {
        o.height !== d && (a.value = !0, e.style.height = `${o.height}px`, o.height = d, Se(
          e,
          { height: `${d}px` },
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
        o.width !== l && (a.value = !0, e.style.width = `${o.width}px`, o.width = l, Se(
          e,
          { width: `${l}px` },
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
      (o.width !== l || o.height !== d) && (a.value = !0, e.style.height = `${o.height}px`, e.style.width = `${o.width}px`, o.width = l, o.height = d, Se(
        e,
        { height: `${d}px`, width: `${l}px` },
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
  Rr as AlertAction,
  Nr as AutocompleteInput,
  Be as BaseButton,
  Jr as BreadcrumbItem,
  Gr as Breadcrumbs,
  po as Card,
  bo as CardTitle,
  Wr as CollapseTransition,
  al as Container,
  Ar as DangerAlert,
  Dr as DangerButton,
  Qr as Dialogs,
  Lr as Dropdown,
  Ir as DropdownLink,
  He as FadeScaleTransition,
  en as FadeTransition,
  jr as HH1,
  Mr as HH2,
  Fr as HH3,
  Cr as InfoAlert,
  Vr as Input,
  at as InputLayout,
  ol as Modals,
  mt as PrimaryButton,
  uo as SecondaryButton,
  Br as SelectInput,
  Hr as Sidebar,
  qr as SidebarItem,
  Kr as SidebarItemGroup,
  Ur as SidebarLayout,
  Pr as SuccessAlert,
  Er as WarningAlert,
  Y as all,
  nl as allModals,
  tl as clearModals,
  Xr as confirmDialog,
  ve as dialogs,
  Yr as infoDialog,
  el as popModal,
  Zr as pushModal,
  De as resetDialog,
  il as vAutoResize
};
