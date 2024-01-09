import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode, isVNode, resolveDynamicComponent, onMounted, onUnmounted } from "vue";
import { u as useResizeObserver, _ as _sfc_main$b, a as anchorIds, B as BackTop$1 } from "./BackTop.Q4EluEOt.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
function getNumPxInRem() {
  const rootElement = document.querySelector("html");
  if (!rootElement) {
    console.error("root <html> element not found");
    return 1;
  }
  return parseFloat(window.getComputedStyle(rootElement).fontSize);
}
function pxToRem(px) {
  return px / getNumPxInRem();
}
function makeHeadingId(title) {
  return title.replace(/["']/, "").replace(/\s/g, "-").toLowerCase().replace(/[^a-z\d_-]/, "");
}
const thresholdWidthRem = 550;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "PageHomeProjectsProject",
  __ssrInlineRender: true,
  props: {
    title: {},
    images: {},
    customImages: {},
    github: {},
    links: {}
  },
  setup(__props) {
    const projectLinkTypes = ["npm", "docs", "examples", "paper", "preprint"];
    const props = __props;
    const links = computed(() => {
      if (!props.links) {
        return null;
      }
      const result = {};
      for (const name of projectLinkTypes) {
        const url = props.links[name];
        if (url) {
          result[name] = url;
        }
      }
      return result;
    });
    const container = ref(null);
    const compact = ref(false);
    useResizeObserver(
      () => {
        if (!container.value) {
          console.error("project highlight container ref not set");
          return;
        }
        const width = pxToRem(container.value.clientWidth);
        compact.value = width < thresholdWidthRem;
      },
      () => container.value,
      true
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [_ctx.$style.Project, compact.value ? _ctx.$style.Project___compact : ""],
        ref: (element) => {
          container.value = element;
        }
      }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.Project_descriptionContainer)}"><h3${ssrRenderAttr("id", unref(makeHeadingId)(props.title))} class="${ssrRenderClass(_ctx.$style.Project_title)}">${ssrInterpolate(props.title)}</h3><div class="${ssrRenderClass(_ctx.$style.Project_description)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div>`);
      if (props.github) {
        _push(`<github-stars${ssrRenderAttr("repo", props.github)}></github-stars>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (links.value) {
        _push(`<section aria-label="links"><!--[-->`);
        ssrRenderList(links.value, (url, name) => {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_sfc_main$b, { href: url }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<span class="${ssrRenderClass(_ctx.$style.Project_linkSeparator)}">|</span><!--]-->`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.images || props.customImages) {
        _push(`<section aria-label="screenshots" class="${ssrRenderClass(_ctx.$style.Project_images)}"><!--[-->`);
        ssrRenderList(props.images, (image) => {
          _push(`<div class="${ssrRenderClass(_ctx.$style.Project_imageWrapper)}"><img${ssrRenderAttr("src", image.url)}${ssrRenderAttr("alt", image.title)}${ssrRenderAttr("title", image.title)}></div>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(props.customImages, (image) => {
          _push(`<div class="${ssrRenderClass(_ctx.$style.Project_imageWrapper)}">`);
          ssrRenderSlot(_ctx.$slots, "image", image, null, _push, _parent);
          _push(`</div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const DarkMode$5 = "o_";
const Project = "p_";
const Project_descriptionContainer = "q_";
const Project_linkSeparator = "r_";
const Project_images = "s_";
const Project_imageWrapper = "t_";
const Project_title = "u_";
const Project_description = "v_";
const Project___compact = "w_";
const style0$8 = {
  DarkMode: DarkMode$5,
  Project,
  Project_descriptionContainer,
  Project_linkSeparator,
  Project_images,
  Project_imageWrapper,
  Project_title,
  Project_description,
  Project___compact
};
const cssModules$8 = {
  "$style": style0$8
};
const _sfc_setup$b = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHomeProjectsProject.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const PageHomeProjectsProject = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$8]]);
const imgPtgV2_1 = "/assets/1.KJTi8Jvt.jpg";
const imgPtgV2_3 = "/assets/3.IQHAUMW2.jpg";
const imgPtgV1_1 = "/assets/1.3U6FW2Bq.jpg";
const imgCluster = "/assets/1.94gZnv3_.jpg";
const imgDq = "/assets/before-after _small_.kfkj9z6Y.gif";
const imgLighthouse = "/assets/lighthouse.TEy_ff9B.jpg";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PageHomeProjects",
  __ssrInlineRender: true,
  props: {
    dummies: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass(_ctx.$style.HighlightsWrapper)}"><div class="${ssrRenderClass(_ctx.$style.Highlights)}">`);
      _push(ssrRenderComponent(PageHomeProjectsProject, {
        title: "DQ skinning for Unity",
        github: "KosRud/DQ-skinning-for-Unity",
        links: {
          docs: "https://kosrud.github.io/DQ-skinning-for-Unity/hierarchy.html",
          paper: "http://journals.khnu.km.ua/vestnik/pdf/tech/pdfbase/2020/2020_1/1-2020_(281).pdf#page=12"
        },
        images: [
          {
            title: "before and after: built-in skinning vs plugin",
            url: unref(imgDq)
          }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> A plugin for `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "Unity",
              href: "https://unity.com/"
            }, null, _parent2, _scopeId));
            _push2(` engine which implements skeletal deformations using `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "dual quaternions",
              href: "https://www.gamedevs.org/uploads/skinning-with-dual-quaternions.pdf"
            }, null, _parent2, _scopeId));
            _push2(` combined with an original artifact compensation `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "method",
              href: "http://journals.khnu.km.ua/vestnik/pdf/tech/pdfbase/2020/2020_1/(281)_2020-1-t.pdf#page=12"
            }, null, _parent2, _scopeId));
            _push2(` which I developed for my master&#39;s thesis at the Faculty of Applied Mathematics at `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "KPI",
              href: "https://kpi.ua/en/fpm"
            }, null, _parent2, _scopeId));
            _push2(`. </p><p${_scopeId}> The animated screenshot alternates between built-in linear skinning and the plugin. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" A plugin for "),
                createVNode(_sfc_main$b, {
                  text: "Unity",
                  href: "https://unity.com/"
                }),
                createTextVNode(" engine which implements skeletal deformations using "),
                createVNode(_sfc_main$b, {
                  text: "dual quaternions",
                  href: "https://www.gamedevs.org/uploads/skinning-with-dual-quaternions.pdf"
                }),
                createTextVNode(" combined with an original artifact compensation "),
                createVNode(_sfc_main$b, {
                  text: "method",
                  href: "http://journals.khnu.km.ua/vestnik/pdf/tech/pdfbase/2020/2020_1/(281)_2020-1-t.pdf#page=12"
                }),
                createTextVNode(" which I developed for my master's thesis at the Faculty of Applied Mathematics at "),
                createVNode(_sfc_main$b, {
                  text: "KPI",
                  href: "https://kpi.ua/en/fpm"
                }),
                createTextVNode(". ")
              ]),
              createVNode("p", null, " The animated screenshot alternates between built-in linear skinning and the plugin. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PageHomeProjectsProject, {
        github: "KosRud/KosRud.github.io",
        title: "This website",
        images: [
          {
            url: unref(imgLighthouse),
            title: "lighthouse score: Performance (97), Accessibility (100), Best Practices (95), SEO (99)"
          }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> This website is built in `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "VitePress",
              href: "https://vitepress.dev/"
            }, null, _parent2, _scopeId));
            _push2(` with a custom theme written from scratch using `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "Vue.js",
              href: "https://vuejs.org/"
            }, null, _parent2, _scopeId));
            _push2(`. </p><p${_scopeId}> It gracefully conforms to viewports as narrow as 260px, utilizes responsive components implemented via `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "ResizeObserver",
              href: "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"
            }, null, _parent2, _scopeId));
            _push2(`, provides `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "accessibility",
              href: "https://vuejs.org/guide/best-practices/accessibility.html"
            }, null, _parent2, _scopeId));
            _push2(` features, `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "focus",
              href: "https://github.com/vuejs/vue-router/issues/2488"
            }, null, _parent2, _scopeId));
            _push2(` management, and support for browser `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "font size",
              href: "https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/"
            }, null, _parent2, _scopeId));
            _push2(` setting. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" This website is built in "),
                createVNode(_sfc_main$b, {
                  text: "VitePress",
                  href: "https://vitepress.dev/"
                }),
                createTextVNode(" with a custom theme written from scratch using "),
                createVNode(_sfc_main$b, {
                  text: "Vue.js",
                  href: "https://vuejs.org/"
                }),
                createTextVNode(". ")
              ]),
              createVNode("p", null, [
                createTextVNode(" It gracefully conforms to viewports as narrow as 260px, utilizes responsive components implemented via "),
                createVNode(_sfc_main$b, {
                  text: "ResizeObserver",
                  href: "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"
                }),
                createTextVNode(", provides "),
                createVNode(_sfc_main$b, {
                  text: "accessibility",
                  href: "https://vuejs.org/guide/best-practices/accessibility.html"
                }),
                createTextVNode(" features, "),
                createVNode(_sfc_main$b, {
                  text: "focus",
                  href: "https://github.com/vuejs/vue-router/issues/2488"
                }),
                createTextVNode(" management, and support for browser "),
                createVNode(_sfc_main$b, {
                  text: "font size",
                  href: "https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/"
                }),
                createTextVNode(" setting. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PageHomeProjectsProject, {
        title: "ProTeGe v2",
        images: [
          {
            url: unref(imgPtgV2_1),
            title: "screenshot"
          },
          {
            url: unref(imgPtgV2_3),
            title: "textures in use"
          }
        ],
        github: "KosRud/ProTeGe_v2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> A graph-based procedural texture generator with real-time preview. </p><p${_scopeId}> Implemented in `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "Unity",
              href: "https://unity.com/"
            }, null, _parent2, _scopeId));
            _push2(` engine with texture processing performed on the GPU. A collection of configurable nodes (noise generators, color adjustments, blending) can be chained arbitrarily to produce the final output. </p><p${_scopeId}> Developed in collaboration with Ihor Los as a joint bachelor&#39;s project at the Faculty of Applied Mathematics at `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "KPI",
              href: "https://kpi.ua/en/fpm"
            }, null, _parent2, _scopeId));
            _push2(`. </p>`);
          } else {
            return [
              createVNode("p", null, " A graph-based procedural texture generator with real-time preview. "),
              createVNode("p", null, [
                createTextVNode(" Implemented in "),
                createVNode(_sfc_main$b, {
                  text: "Unity",
                  href: "https://unity.com/"
                }),
                createTextVNode(" engine with texture processing performed on the GPU. A collection of configurable nodes (noise generators, color adjustments, blending) can be chained arbitrarily to produce the final output. ")
              ]),
              createVNode("p", null, [
                createTextVNode(" Developed in collaboration with Ihor Los as a joint bachelor's project at the Faculty of Applied Mathematics at "),
                createVNode(_sfc_main$b, {
                  text: "KPI",
                  href: "https://kpi.ua/en/fpm"
                }),
                createTextVNode(". ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PageHomeProjectsProject, {
        github: "KosRud/dice-pool-calc",
        title: "dice-pool-calc",
        links: {
          docs: "https://kosrud.github.io/dice-pool-calc/",
          examples: "https://github.com/KosRud/dice-pool-calc-examples",
          npm: "https://www.npmjs.com/package/dice-pool-calc#dice-pool-calc"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> A `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "typescript",
              href: "https://www.typescriptlang.org/"
            }, null, _parent2, _scopeId));
            _push2(` library that efficiently calculates probabilities of possible outcomes when rolling an arbitrary collection of dice and using arbitrary rules to interpret them. Enumerates all possible outcomes without random sampling and easily handles hundreds of dice. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" A "),
                createVNode(_sfc_main$b, {
                  text: "typescript",
                  href: "https://www.typescriptlang.org/"
                }),
                createTextVNode(" library that efficiently calculates probabilities of possible outcomes when rolling an arbitrary collection of dice and using arbitrary rules to interpret them. Enumerates all possible outcomes without random sampling and easily handles hundreds of dice. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PageHomeProjectsProject, {
        title: "Material clustering benchmark",
        images: [
          {
            url: unref(imgCluster),
            title: "screenshot"
          }
        ],
        github: "KosRud/Material-Clustering-Benchmark",
        links: {
          paper: "https://link.springer.com/chapter/10.1007/978-3-031-37963-5_67",
          preprint: "https://www.researchgate.net/publication/369113944_Real-time_material_clustering_for_mixed_reality_applications_based_on_dichromatic_reflection_model"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> This software was implemented to compare the speed and quality of different clustering algorithms in a specific use case connected to real-time mixed reality systems. </p><p${_scopeId}> The benchmark results are published in a `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "paper",
              href: "https://link.springer.com/chapter/10.1007/978-3-031-37963-5_67"
            }, null, _parent2, _scopeId));
            _push2(` (you can also reada `);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "preprint",
              href: "https://www.researchgate.net/publication/369113944_Real-time_material_clustering_for_mixed_reality_applications_based_on_dichromatic_reflection_model"
            }, null, _parent2, _scopeId));
            _push2(`). </p>`);
          } else {
            return [
              createVNode("p", null, " This software was implemented to compare the speed and quality of different clustering algorithms in a specific use case connected to real-time mixed reality systems. "),
              createVNode("p", null, [
                createTextVNode(" The benchmark results are published in a "),
                createVNode(_sfc_main$b, {
                  text: "paper",
                  href: "https://link.springer.com/chapter/10.1007/978-3-031-37963-5_67"
                }),
                createTextVNode(" (you can also reada "),
                createVNode(_sfc_main$b, {
                  text: "preprint",
                  href: "https://www.researchgate.net/publication/369113944_Real-time_material_clustering_for_mixed_reality_applications_based_on_dichromatic_reflection_model"
                }),
                createTextVNode("). ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PageHomeProjectsProject, {
        github: "KosRud/joplin-plugin-paginator",
        title: "joplin-plugin-paginator",
        links: {
          npm: "https://www.npmjs.com/package/joplin-plugin-paginator"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              text: "Joplin",
              href: "https://joplinapp.org/"
            }, null, _parent2, _scopeId));
            _push2(` is an open-source note taking app with tags, hierarchical folders, plugin support, synchronization, and embedded multimedia. </p><p${_scopeId}> Normally, a note in joplin is continuous like an HTML page. This plugin implements pagination and generates a table of contents for the note, making a printable document from it. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode(_sfc_main$b, {
                  text: "Joplin",
                  href: "https://joplinapp.org/"
                }),
                createTextVNode(" is an open-source note taking app with tags, hierarchical folders, plugin support, synchronization, and embedded multimedia. ")
              ]),
              createVNode("p", null, " Normally, a note in joplin is continuous like an HTML page. This plugin implements pagination and generates a table of contents for the note, making a printable document from it. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PageHomeProjectsProject, {
        title: "ProTeGe v1",
        images: [
          {
            title: "screenshot",
            url: unref(imgPtgV1_1)
          }
        ],
        github: "KosRud/ProTeGe-v1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> A procedural texture generator written in C++ using wxWidgets library for the GUI. The computations are performed on the CPU and utilize multithreading. </p>`);
          } else {
            return [
              createVNode("p", null, " A procedural texture generator written in C++ using wxWidgets library for the GUI. The computations are performed on the CPU and utilize multithreading. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(Array.from({ length: props.dummies }), (_) => {
        _push(`<div class="${ssrRenderClass(_ctx.$style.Highlights_dummy)}"></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const DarkMode$4 = "C";
const HighlightsWrapper = "D";
const Highlights = "E";
const Highlights_dummy = "F";
const style0$7 = {
  DarkMode: DarkMode$4,
  HighlightsWrapper,
  Highlights,
  Highlights_dummy
};
const cssModules$7 = {
  "$style": style0$7
};
const _sfc_setup$a = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHomeProjects.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const PageHomeProjects = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$7]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "FeaturesGalleryCard",
  __ssrInlineRender: true,
  props: {
    dummy: { type: Boolean },
    class: {},
    name: {},
    iconUrl: {}
  },
  setup(__props) {
    const props = __props;
    const iconUrl = computed(() => `url(${props.iconUrl})`);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--2bd29208": iconUrl.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          _ctx.$style.Card,
          props.dummy ? _ctx.$style.FeaturesGallery_card___dummy : "",
          props.class
        ]
      }, _attrs, _cssVars))}>`);
      if (!props.dummy) {
        _push(`<!--[--><h3 class="${ssrRenderClass(_ctx.$style.Feature_title)}">`);
        if (props.iconUrl) {
          _push(`<span class="${ssrRenderClass(_ctx.$style.Feature_icon)}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(props.name)}</h3>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Card = "i_";
const FeaturesGallery_card___dummy = "j_";
const Feature_title = "k_";
const Feature_icon = "l_";
const style0$6 = {
  Card,
  FeaturesGallery_card___dummy,
  Feature_title,
  Feature_icon
};
const cssModules$6 = {
  "$style": style0$6
};
const _sfc_setup$9 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesGalleryCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const FeaturesGalleryCard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$6]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FeaturesGallery",
  __ssrInlineRender: true,
  props: {
    dummies: {},
    label: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        "aria-label": _ctx.$props.label,
        class: _ctx.$style.FeaturesGalleryWrapper
      }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.FeaturesGallery)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--[-->`);
      ssrRenderList(Array.from({ length: props.dummies ?? 0 }), (_) => {
        _push(ssrRenderComponent(FeaturesGalleryCard, {
          dummy: "",
          name: "",
          class: _ctx.$style.FeaturesGallery_dummy
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const FeaturesGalleryWrapper = "f_";
const FeaturesGallery$1 = "g_";
const FeaturesGallery_dummy = "h_";
const style0$5 = {
  FeaturesGalleryWrapper,
  FeaturesGallery: FeaturesGallery$1,
  FeaturesGallery_dummy
};
const cssModules$5 = {
  "$style": style0$5
};
const _sfc_setup$8 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesGallery.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const FeaturesGallery = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$5]]);
const Feature_content = "s";
const style0$4 = {
  Feature_content
};
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.Feature_content
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const cssModules$4 = {
  "$style": style0$4
};
const _sfc_setup$7 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHomeFeaturesContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HomePageFeaturesContent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules$4]]);
const iconProgramming = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20412.996%20412.996'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M392.996,28.338H20c-11.047,0-20,8.954-20,20v234c0,11.046,8.953,20,20,20h139.498v45.32h-54.283%20c-10.201,0-18.5,8.299-18.5,18.5s8.299,18.5,18.5,18.5h202.566c10.201,0,18.5-8.299,18.5-18.5s-8.299-18.5-18.5-18.5h-54.283%20v-45.32h139.498c11.047,0,20-8.954,20-20v-234C412.996,37.292,404.043,28.338,392.996,28.338z%20M382.996,272.338H30v-214h352.996%20V272.338z'/%3e%3cpath%20d='M94.591,176.637l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924%20c3.548-2.267,5.666-6.13,5.666-10.335v-0.322c0-4.751-2.785-9.115-7.096-11.119l-39.455-18.33l39.456-18.334%20c4.31-2.004,7.095-6.369,7.095-11.118v-0.319c0-4.211-2.119-8.074-5.665-10.334c-1.962-1.254-4.247-1.916-6.606-1.916%20c-1.778,0-3.563,0.391-5.16,1.133L94.59,153.525c-4.308,2.005-7.091,6.369-7.091,11.117v0.878%20C87.498,170.262,90.28,174.625,94.591,176.637z'/%3e%3cpath%20d='M175.662,236.389c2.301,3.149,6.002,5.029,9.901,5.029h0.315c5.352,0,10.042-3.426,11.672-8.516l41.557-128.76%20c1.192-3.717,0.53-7.818-1.771-10.974c-2.301-3.149-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.426-11.679,8.516%20L173.88,225.425C172.698,229.145,173.364,233.242,175.662,236.389z'/%3e%3cpath%20d='M237.896,135.628c0,4.746,2.782,9.11,7.095,11.122l39.455,18.33l-39.455,18.33c-4.311,2.004-7.096,6.368-7.096,11.119%20v0.322c0,4.205,2.117,8.068,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923c1.792,0,3.527-0.383,5.169-1.142l63.081-29.335%20c4.307-2.009,7.089-6.372,7.089-11.115v-0.878c0-4.748-2.783-9.112-7.093-11.117l-63.08-29.334%20c-1.591-0.739-3.373-1.131-5.152-1.131c-2.358,0-4.644,0.662-6.604,1.912c-3.554,2.264-5.673,6.127-5.673,10.338V135.628%20L237.896,135.628z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const iconCommunication = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='_x32_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23000000;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M290.121,377.112c-17.02-6.365-41.85-24.953-41.85-36.525c0-7.666,0-17.244,0-30.371%20c9.848-10.946,17.324-33.169,21.771-58.359c10.371-3.702,16.293-9.628,23.701-35.552c7.883-27.615-11.855-26.677-11.855-26.677%20c15.955-52.805-5.042-102.432-40.215-98.789c-24.259-42.442-105.512,9.695-130.981,6.061c0,14.556,6.065,25.468,6.065,25.468%20c-8.85,16.804-5.439,50.312-2.946,67.26c-1.441-0.026-19.28,0.16-11.711,26.677c7.405,25.925,13.326,31.85,23.702,35.552%20c4.442,25.19,11.919,47.413,21.767,58.359c0,13.127,0,22.705,0,30.371c0,11.572-26.369,31.064-41.85,36.525%20C73.741,388.372-4.838,420.754,0.234,481.412c1.213,14.556,81.258,29.662,197.686,29.662c116.426,0,196.47-15.105,197.687-29.662%20C400.684,420.696,321.904,388.997,290.121,377.112z'/%3e%3cpath%20class='st0'%20d='M503.504,57.654c-8.174-17.049-21.597-31.191-38.198-41.106C448.688,6.641,428.841,0.943,407.53,0.926%20c-28.372,0.016-54.22,10.135-73.222,26.897c-9.497,8.386-17.295,18.461-22.726,29.83c-5.444,11.352-8.5,24.006-8.5,37.26%20c-0.008,16.889,4.983,32.78,13.529,46.313c7.3,11.572,17.172,21.47,28.816,29.213l-17.535,43.802l12.662-1.563%20c43.748-5.469,85.623-21.842,105.513-30.438c18.896-6.746,35.206-18.276,46.947-33.254c11.818-15.08,18.998-33.821,18.986-54.073%20C512.012,81.659,508.94,69.006,503.504,57.654z%20M482.035,138.26c-9.831,12.57-24.011,22.73-40.798,28.63l-0.228,0.068l-0.228,0.102%20c-17.21,7.472-52.024,21.039-89.03,27.48l12.544-31.293l-6.158-3.524c-12.426-7.1-22.598-16.77-29.602-27.869%20c-7.012-11.133-10.858-23.626-10.87-36.939c0-10.456,2.379-20.389,6.775-29.586c6.581-13.769,17.802-25.815,32.205-34.412%20c14.408-8.596,31.948-13.702,50.886-13.693c25.291-0.009,48.026,9.078,64.2,23.372c8.081,7.143,14.523,15.554,18.909,24.733%20c4.391,9.197,6.771,19.129,6.779,29.586C497.41,110.839,491.882,125.665,482.035,138.26z'/%3e%3cpath%20class='st0'%20d='M366.34,84.542c-6.264,0-11.34,5.68-11.34,12.662c0,6.999,5.076,12.671,11.34,12.671%20c6.264,0,11.348-5.672,11.348-12.671C377.688,90.222,372.604,84.542,366.34,84.542z'/%3e%3cpath%20class='st0'%20d='M410.096,84.542c-6.268,0-11.352,5.68-11.352,12.662c0,6.999,5.084,12.671,11.352,12.671%20c6.264,0,11.344-5.672,11.344-12.671C421.44,90.222,416.36,84.542,410.096,84.542z'/%3e%3cpath%20class='st0'%20d='M453.84,84.542c-6.263,0-11.343,5.68-11.343,12.662c0,6.999,5.08,12.671,11.343,12.671%20c6.272,0,11.353-5.672,11.353-12.671C465.192,90.222,460.112,84.542,453.84,84.542z'/%3e%3c/g%3e%3c/svg%3e";
const iconEducation = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20260%20188'%20xml:space='preserve'%3e%3cpath%20d='M134.3,109.2L202,83.8V146c0,13.4-32.2,24.3-72,24.3S58,159.4,58,146V83.8l67.9,25.4l4.2,1.6L134.3,109.2z%20M130.1,98L258,50%20L130.1,2L2,50l20,7.5v81.8c-4.7,2.2-8,7.1-8,12.7v34h28v-34c0-5.7-3.3-10.6-8.1-12.8V61.9L130.1,98z'/%3e%3c/svg%3e";
const iconGears = "/assets/icon.SVD74guR.svg";
const iconJob = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%207H7M6%2010H7M11%2010H12M11%2013H12M6%2013H7M11%207H12M7%2021V18C7%2016.8954%207.89543%2016%209%2016C10.1046%2016%2011%2016.8954%2011%2018V21H7ZM7%2021H3V4.6C3%204.03995%203%203.75992%203.10899%203.54601C3.20487%203.35785%203.35785%203.20487%203.54601%203.10899C3.75992%203%204.03995%203%204.6%203H13.4C13.9601%203%2014.2401%203%2014.454%203.10899C14.6422%203.20487%2014.7951%203.35785%2014.891%203.54601C15%203.75992%2015%204.03995%2015%204.6V9M19.7%2013.5C19.7%2014.3284%2019.0284%2015%2018.2%2015C17.3716%2015%2016.7%2014.3284%2016.7%2013.5C16.7%2012.6716%2017.3716%2012%2018.2%2012C19.0284%2012%2019.7%2012.6716%2019.7%2013.5ZM21.5%2021V20.5C21.5%2019.1193%2020.3807%2018%2019%2018H17.5C16.1193%2018%2015%2019.1193%2015%2020.5V21H21.5Z'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PageHomeExpertise",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(FeaturesGallery, mergeProps({
        dummies: 8,
        "card-min-width": "300rem",
        label: "expertise"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FeaturesGalleryCard, {
              name: "Programming languages",
              "icon-url": unref(iconProgramming)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomePageFeaturesContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` C#, HLSL, TypeScript, Javascript, Python, C++ `);
                      } else {
                        return [
                          createTextVNode(" C#, HLSL, TypeScript, Javascript, Python, C++ ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomePageFeaturesContent, null, {
                      default: withCtx(() => [
                        createTextVNode(" C#, HLSL, TypeScript, Javascript, Python, C++ ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(FeaturesGalleryCard, {
              name: "Communication",
              "icon-url": unref(iconCommunication)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomePageFeaturesContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table aria-label="languages"${_scopeId3}><tbody${_scopeId3}><tr${_scopeId3}><th scope="row"${_scopeId3}>English</th><td${_scopeId3}>C1 (Advanced)</td></tr><tr${_scopeId3}><th scope="row"${_scopeId3}>Slovak</th><td${_scopeId3}>basic</td></tr><tr${_scopeId3}><th scope="row"${_scopeId3}>Ukrainian</th><td${_scopeId3}>native speaker</td></tr><tr${_scopeId3}><th scope="row"${_scopeId3}>Russian</th><td${_scopeId3}>native speaker</td></tr></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", { "aria-label": "languages" }, [
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "English"),
                                createVNode("td", null, "C1 (Advanced)")
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "Slovak"),
                                createVNode("td", null, "basic")
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "Ukrainian"),
                                createVNode("td", null, "native speaker")
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "Russian"),
                                createVNode("td", null, "native speaker")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomePageFeaturesContent, null, {
                      default: withCtx(() => [
                        createVNode("table", { "aria-label": "languages" }, [
                          createVNode("tbody", null, [
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "English"),
                              createVNode("td", null, "C1 (Advanced)")
                            ]),
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "Slovak"),
                              createVNode("td", null, "basic")
                            ]),
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "Ukrainian"),
                              createVNode("td", null, "native speaker")
                            ]),
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "Russian"),
                              createVNode("td", null, "native speaker")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(FeaturesGalleryCard, {
              name: "Technologies",
              "icon-url": unref(iconGears)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomePageFeaturesContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table${_scopeId3}><tbody${_scopeId3}><tr${_scopeId3}><th scope="row"${_scopeId3}>Game engine</th><td${_scopeId3}>Unity</td></tr><tr${_scopeId3}><th scope="row"${_scopeId3}>Frontend</th><td${_scopeId3}>Vue, React</td></tr><tr${_scopeId3}><th scope="row"${_scopeId3}>Backend</th><td${_scopeId3}>Fastify (Node.js)</td></tr><tr${_scopeId3}><th scope="row"${_scopeId3}>Documentation</th><td${_scopeId3}>Doxygen, TypeDoc</td></tr></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", null, [
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "Game engine"),
                                createVNode("td", null, "Unity")
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "Frontend"),
                                createVNode("td", null, "Vue, React")
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "Backend"),
                                createVNode("td", null, "Fastify (Node.js)")
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "Documentation"),
                                createVNode("td", null, "Doxygen, TypeDoc")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomePageFeaturesContent, null, {
                      default: withCtx(() => [
                        createVNode("table", null, [
                          createVNode("tbody", null, [
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "Game engine"),
                              createVNode("td", null, "Unity")
                            ]),
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "Frontend"),
                              createVNode("td", null, "Vue, React")
                            ]),
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "Backend"),
                              createVNode("td", null, "Fastify (Node.js)")
                            ]),
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "Documentation"),
                              createVNode("td", null, "Doxygen, TypeDoc")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(FeaturesGalleryCard, {
              name: "Education",
              "icon-url": unref(iconEducation)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomePageFeaturesContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table${_scopeId3}><tbody${_scopeId3}><tr${_scopeId3}><th scope="row"${_scopeId3}>Software Engineering</th><td${_scopeId3}>master&#39;s degree</td></tr></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", null, [
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, "Software Engineering"),
                                createVNode("td", null, "master's degree")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomePageFeaturesContent, null, {
                      default: withCtx(() => [
                        createVNode("table", null, [
                          createVNode("tbody", null, [
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, "Software Engineering"),
                              createVNode("td", null, "master's degree")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(FeaturesGalleryCard, {
              name: "Experience",
              "icon-url": unref(iconJob)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(HomePageFeaturesContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table${_scopeId3}><tbody${_scopeId3}><tr${_scopeId3}><th scope="row"${_scopeId3}> .NET (C#, C++) developer<br${_scopeId3}>for `);
                        _push4(ssrRenderComponent(_sfc_main$b, {
                          text: "RISA Tech, Inc.",
                          href: "https://risa.com/"
                        }, null, _parent4, _scopeId3));
                        _push4(`</th><td${_scopeId3}>1 year</td></tr></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", null, [
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("th", { scope: "row" }, [
                                  createTextVNode(" .NET (C#, C++) developer"),
                                  createVNode("br"),
                                  createTextVNode("for "),
                                  createVNode(_sfc_main$b, {
                                    text: "RISA Tech, Inc.",
                                    href: "https://risa.com/"
                                  })
                                ]),
                                createVNode("td", null, "1 year")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(HomePageFeaturesContent, null, {
                      default: withCtx(() => [
                        createVNode("table", null, [
                          createVNode("tbody", null, [
                            createVNode("tr", null, [
                              createVNode("th", { scope: "row" }, [
                                createTextVNode(" .NET (C#, C++) developer"),
                                createVNode("br"),
                                createTextVNode("for "),
                                createVNode(_sfc_main$b, {
                                  text: "RISA Tech, Inc.",
                                  href: "https://risa.com/"
                                })
                              ]),
                              createVNode("td", null, "1 year")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(FeaturesGalleryCard, {
                name: "Programming languages",
                "icon-url": unref(iconProgramming)
              }, {
                default: withCtx(() => [
                  createVNode(HomePageFeaturesContent, null, {
                    default: withCtx(() => [
                      createTextVNode(" C#, HLSL, TypeScript, Javascript, Python, C++ ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["icon-url"]),
              createVNode(FeaturesGalleryCard, {
                name: "Communication",
                "icon-url": unref(iconCommunication)
              }, {
                default: withCtx(() => [
                  createVNode(HomePageFeaturesContent, null, {
                    default: withCtx(() => [
                      createVNode("table", { "aria-label": "languages" }, [
                        createVNode("tbody", null, [
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "English"),
                            createVNode("td", null, "C1 (Advanced)")
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "Slovak"),
                            createVNode("td", null, "basic")
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "Ukrainian"),
                            createVNode("td", null, "native speaker")
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "Russian"),
                            createVNode("td", null, "native speaker")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["icon-url"]),
              createVNode(FeaturesGalleryCard, {
                name: "Technologies",
                "icon-url": unref(iconGears)
              }, {
                default: withCtx(() => [
                  createVNode(HomePageFeaturesContent, null, {
                    default: withCtx(() => [
                      createVNode("table", null, [
                        createVNode("tbody", null, [
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "Game engine"),
                            createVNode("td", null, "Unity")
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "Frontend"),
                            createVNode("td", null, "Vue, React")
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "Backend"),
                            createVNode("td", null, "Fastify (Node.js)")
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "Documentation"),
                            createVNode("td", null, "Doxygen, TypeDoc")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["icon-url"]),
              createVNode(FeaturesGalleryCard, {
                name: "Education",
                "icon-url": unref(iconEducation)
              }, {
                default: withCtx(() => [
                  createVNode(HomePageFeaturesContent, null, {
                    default: withCtx(() => [
                      createVNode("table", null, [
                        createVNode("tbody", null, [
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, "Software Engineering"),
                            createVNode("td", null, "master's degree")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["icon-url"]),
              createVNode(FeaturesGalleryCard, {
                name: "Experience",
                "icon-url": unref(iconJob)
              }, {
                default: withCtx(() => [
                  createVNode(HomePageFeaturesContent, null, {
                    default: withCtx(() => [
                      createVNode("table", null, [
                        createVNode("tbody", null, [
                          createVNode("tr", null, [
                            createVNode("th", { scope: "row" }, [
                              createTextVNode(" .NET (C#, C++) developer"),
                              createVNode("br"),
                              createTextVNode("for "),
                              createVNode(_sfc_main$b, {
                                text: "RISA Tech, Inc.",
                                href: "https://risa.com/"
                              })
                            ]),
                            createVNode("td", null, "1 year")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["icon-url"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHomeExpertise.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DevIcon = "m_";
const DevIcon_img = "n_";
const style = {
  DevIcon,
  DevIcon_img
};
const iconBlender = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='514.92609'%20height='418.28751'%20viewBox='0%200%20514.92609%20418.28751'%20version='1.1'%20xml:space='preserve'%20style='clip-rule:evenodd;fill-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421'%20id='svg13'%20sodipodi:docname='blender_logo_socket.svg'%20inkscape:version='1.3%20(0e150ed6c4,%202023-07-21)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs%20id='defs13'%20/%3e%3csodipodi:namedview%20id='namedview13'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='1.1023009'%20inkscape:cx='384.19636'%20inkscape:cy='261.72527'%20inkscape:window-width='1920'%20inkscape:window-height='1017'%20inkscape:window-x='-8'%20inkscape:window-y='-8'%20inkscape:window-maximized='1'%20inkscape:current-layer='blender_logo_socket'%20/%3e&%2310;%20%3cg%20transform='translate(-60.568431,-716.03903)'%20id='g13'%3e&%2310;%20%3cg%20id='blender_logo_socket'%20transform='matrix(0.968745,0,0,1.01331,-76.2576,-13.1722)'%3e&%2310;%20&%2310;%20%3cg%20transform='matrix(3.51903,0,0,3.36426,-31.9422,1625.67)'%20id='g12'%3e&%2310;%20&%2310;%20%3cg%20transform='matrix(2.66418,0,0,2.66418,-519.788,688.754)'%20id='g2'%3e&%2310;%20%3cpath%20d='m%20243.13,-333.715%20c%200.106,-1.891%201.032,-3.557%202.429,-4.738%201.37,-1.16%203.214,-1.869%205.226,-1.869%202.01,0%203.854,0.709%205.225,1.869%201.396,1.181%202.322,2.847%202.429,4.736%200.106,1.943%20-0.675,3.748%20-2.045,5.086%20-1.397,1.361%20-3.384,2.215%20-5.609,2.215%20-2.225,0%20-4.216,-0.854%20-5.612,-2.215%20-1.371,-1.338%20-2.15,-3.143%20-2.043,-5.084%20z'%20style='fill:%23265787;fill-rule:nonzero'%20id='path2'%20/%3e&%2310;%20%3c/g%3e&%2310;%20%3cg%20transform='matrix(2.66418,0,0,2.66418,-519.788,688.754)'%20id='g3'%3e&%2310;%20%3cpath%20d='m%20230.94,-329.894%20c%200.013,0.74%200.249,2.178%200.603,3.301%200.744,2.377%202.006,4.576%203.762,6.514%201.802,1.992%204.021,3.592%206.584,4.728%202.694,1.193%205.613,1.801%208.645,1.796%203.027,-0.004%205.946,-0.624%208.64,-1.826%202.563,-1.147%204.78,-2.754%206.579,-4.747%201.755,-1.946%203.015,-4.149%203.761,-6.526%200.375,-1.201%200.612,-2.42%200.707,-3.643%200.093,-1.205%200.054,-2.412%20-0.117,-3.618%20-0.334,-2.35%20-1.147,-4.555%20-2.399,-6.565%20-1.145,-1.847%20-2.621,-3.464%20-4.376,-4.825%20l%200.004,-0.003%20-17.711,-13.599%20c%20-0.016,-0.012%20-0.029,-0.025%20-0.046,-0.036%20-1.162,-0.892%20-3.116,-0.889%20-4.394,0.005%20-1.292,0.904%20-1.44,2.399%20-0.29,3.342%20l%20-0.005,0.005%207.387,6.007%20-22.515,0.024%20c%20-0.011,0%20-0.022,0%20-0.03,0%20-1.861,0.002%20-3.65,1.223%20-4.004,2.766%20-0.364,1.572%200.9,2.876%202.835,2.883%20l%20-0.003,0.007%2011.412,-0.022%20-20.364,15.631%20c%20-0.026,0.019%20-0.054,0.039%20-0.078,0.058%20-1.921,1.471%20-2.542,3.917%20-1.332,5.465%201.228,1.574%203.839,1.577%205.78,0.009%20l%2011.114,-9.096%20c%200,0%20-0.162,1.228%20-0.149,1.965%20z%20m%2028.559,4.112%20c%20-2.29,2.333%20-5.496,3.656%20-8.965,3.663%20-3.474,0.006%20-6.68,-1.305%20-8.97,-3.634%20-1.119,-1.135%20-1.941,-2.441%20-2.448,-3.832%20-0.497,-1.367%20-0.69,-2.818%20-0.562,-4.282%200.121,-1.431%200.547,-2.796%201.227,-4.031%200.668,-1.214%201.588,-2.311%202.724,-3.239%202.226,-1.814%205.06,-2.796%208.024,-2.8%202.967,-0.004%205.799,0.969%208.027,2.777%201.134,0.924%202.053,2.017%202.721,3.229%200.683,1.234%201.106,2.594%201.232,4.029%200.126,1.462%20-0.067,2.911%20-0.564,4.279%20-0.508,1.395%20-1.327,2.701%20-2.446,3.841%20z'%20style='fill:%23e87d0d;fill-rule:nonzero'%20id='path3'%20/%3e&%2310;%20%3c/g%3e&%2310;%20&%2310;%20&%2310;%20%3cg%20transform='matrix(2.66418,0,0,2.66418,-519.788,688.754)'%20id='g6'%3e&%2310;%20&%2310;%20%3c/g%3e&%2310;%20&%2310;%20&%2310;%20&%2310;%20&%2310;%20&%2310;%20%3c/g%3e&%2310;%20%3c/g%3e&%2310;%20%3c/g%3e&%2310;%3c/svg%3e";
const iconCpp = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='651.61188'%20height='417.53851'%20viewBox='0%200%2026.064475%2016.701541'%20version='1.1'%20id='svg2'%20sodipodi:docname='icon.svg'%20inkscape:version='1.3%20(0e150ed6c4,%202023-07-21)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%3e%3cdefs%20id='defs2'%20/%3e%3csodipodi:namedview%20id='namedview2'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='0.513125'%20inkscape:cx='156.88185'%20inkscape:cy='162.72838'%20inkscape:window-width='1920'%20inkscape:window-height='1017'%20inkscape:window-x='-8'%20inkscape:window-y='-8'%20inkscape:window-maximized='1'%20inkscape:current-layer='svg2'%20/%3e%3ctitle%20id='title1'%3efile_type_cpp%3c/title%3e%3cpath%20d='M%2011.866751,15.836609%20A%209.5302849,9.5302849%200%200%201%207.518477,16.691748%207.0979314,7.0979314%200%200%201%202.0154398,14.508771%208.2592081,8.2592081%200%200%201%200.0101904,8.6921516%208.8175142,8.8175142%200%200%201%202.263886,2.4130686%207.6450714,7.6450714%200%200%201%208.112142,0.00490867%20a%2010.376119,10.376119%200%200%201%203.754609,0.596457%20V%204.1010146%20a%206.3637589,6.3637589%200%200%200%20-3.481969,-0.967731%204.4785453,4.4785453%200%200%200%20-3.4540539,1.428333%205.4900099,5.4900099%200%200%200%20-1.3148109,3.869992%205.3969589,5.3969589%200%200%200%201.2413006,3.7322764%204.2524314,4.2524314%200%200%200%203.3405312,1.389252%206.8104038,6.8104038%200%200%200%203.669002,-1.035658%20z'%20style='fill:%23984c93;stroke-width:0.93051'%20id='path1'%20/%3e%3cpolygon%20points='19.456,14.829%2021.8,14.829%2021.8,17.172%2019.456,17.172%2019.456,19.515%2017.112,19.515%2017.112,17.172%2014.77,17.172%2014.77,14.828%2017.112,14.829%2017.112,12.485%2019.456,12.485%20'%20style='fill:%23984c93'%20id='polygon1'%20transform='matrix(0.93051015,0,0,0.93051015,-1.8508299,-6.5393691)'%20/%3e%3cpolygon%20points='27.657,14.829%2030,14.829%2030,17.172%2027.657,17.172%2027.657,19.515%2025.313,19.515%2025.313,17.172%2022.971,17.172%2022.971,14.828%2025.313,14.829%2025.313,12.485%2027.657,12.485%20'%20style='fill:%23984c93'%20id='polygon2'%20transform='matrix(0.93051015,0,0,0.93051015,-1.8508299,-6.5393691)'%20/%3e%3cmetadata%20id='metadata1'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:title%3efile_type_cpp%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3c/svg%3e";
const iconCsharp = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='653.50055'%20height='416.9743'%20viewBox='0%200%2026.140022%2016.678972'%20version='1.1'%20id='svg2'%20sodipodi:docname='icon.svg'%20inkscape:version='1.3%20(0e150ed6c4,%202023-07-21)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%3e%3cdefs%20id='defs2'%20/%3e%3csodipodi:namedview%20id='namedview2'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='1.02625'%20inkscape:cx='326.91839'%20inkscape:cy='208.03898'%20inkscape:window-width='1920'%20inkscape:window-height='1017'%20inkscape:window-x='-8'%20inkscape:window-y='-8'%20inkscape:window-maximized='1'%20inkscape:current-layer='svg2'%20/%3e%3ctitle%20id='title1'%3efile_type_csharp%3c/title%3e%3cpath%20d='m%2016.613828,0.00492625%20h%202.382481%20V%202.3874076%20h%202.384348%20V%200.00492625%20h%202.381548%20V%202.3874076%20h%202.377816%20v%202.381548%20h%20-2.379682%20v%202.380615%20h%202.379682%20v%202.382482%20H%2023.759405%20V%2011.913601%20H%2021.380657%20V%209.5339186%20H%2019.000975%20V%2011.915467%20H%2016.614761%20V%209.5357856%20h%20-2.382482%20v%20-2.388081%20h%202.382482%20v%20-2.375949%20h%20-2.382482%20v%20-2.386214%20h%202.383415%20z%20m%202.382481,7.14651135%20h%202.384348%20v%20-2.382482%20h%20-2.384348%20z'%20style='fill:%23368832;stroke-width:0.933209'%20id='path1'%20/%3e%3cpath%20d='M%2011.851664,15.815346%20A%209.5187272,9.5187272%200%200%201%207.5094448,16.669232%207.092385,7.092385%200%200%201%202.0128463,14.489257%208.2486304,8.2486304%200%200%201%200.01018071,8.6800336%208.8057559,8.8057559%200%200%201%202.2610797,2.4098046%207.6345792,7.6345792%200%200%201%208.1020318,0.00492625%2010.358615,10.358615%200%200%201%2011.851664,0.60031335%20V%204.0951786%20A%206.3551502,6.3551502%200%200%200%208.3773288,3.1283756%204.4728686,4.4728686%200%200%200%204.924457,4.5552506%205.4863331,5.4863331%200%200%200%203.6114325,8.4206016%205.3883462,5.3883462%200%200%200%204.8507335,12.14597%204.2470321,4.2470321%200%200%200%208.1869538,13.533651%206.8012239,6.8012239%200%200%200%2011.851664,12.499656%20Z'%20style='fill:%23368832;stroke-width:0.933209'%20id='path2'%20/%3e%3cmetadata%20id='metadata1'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:title%3efile_type_csharp%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3c/svg%3e";
const iconCss3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20with%20Inkscape%20(http://www.inkscape.org/)%20--%3e%3csvg%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20width='102.3716mm'%20height='144.49777mm'%20viewBox='0%200%20362.73401%20511.99998'%20id='svg3476'%20version='1.1'%20inkscape:version='0.91%20r13725'%20sodipodi:docname='CSS3.svg'%3e%3cdefs%20id='defs3478'%20/%3e%3csodipodi:namedview%20id='base'%20pagecolor='%23ffffff'%20bordercolor='%23666666'%20borderopacity='1.0'%20inkscape:pageopacity='0.0'%20inkscape:pageshadow='2'%20inkscape:zoom='0.35'%20inkscape:cx='181.367'%20inkscape:cy='256'%20inkscape:document-units='px'%20inkscape:current-layer='layer1'%20showgrid='false'%20fit-margin-top='0'%20fit-margin-left='0'%20fit-margin-right='0'%20fit-margin-bottom='0'%20inkscape:window-width='1366'%20inkscape:window-height='704'%20inkscape:window-x='0'%20inkscape:window-y='27'%20inkscape:window-maximized='1'%20/%3e%3cmetadata%20id='metadata3481'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:format%3eimage/svg+xml%3c/dc:format%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'%20/%3e%3cdc:title%3e%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cg%20inkscape:label='Calque%201'%20inkscape:groupmode='layer'%20id='layer1'%20transform='translate(-193.633,-276.3622)'%3e%3cg%20id='g3013'%20transform='translate(119,276.3622)'%3e%3cpolygon%20id='polygon2989'%20points='437.367,100.62%20404.321,470.819%20255.778,512%20107.644,470.877%2074.633,100.62%20'%20style='fill:%23264de4'%20/%3e%3cpolygon%20id='polygon2991'%20points='376.03,447.246%20404.27,130.894%20256,130.894%20256,480.523%20'%20style='fill:%232965f1'%20/%3e%3cpolygon%20id='polygon2993'%20points='150.31,268.217%20154.38,313.627%20256,313.627%20256,268.217%20'%20style='fill:%23ebebeb'%20/%3e%3cpolygon%20id='polygon2995'%20points='256,176.305%20255.843,176.305%20142.132,176.305%20146.26,221.716%20256,221.716%20'%20style='fill:%23ebebeb'%20/%3e%3cpolygon%20id='polygon2997'%20points='256,433.399%20256,386.153%20255.801,386.206%20205.227,372.55%20201.994,336.333%20177.419,336.333%20156.409,336.333%20162.771,407.634%20255.791,433.457%20'%20style='fill:%23ebebeb'%20/%3e%3cpath%20id='path2999'%20d='m%20160,0%2055,0%200,23%20-32,0%200,23%2032,0%200,23%20-55,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpath%20id='path3001'%20d='m%20226,0%2055,0%200,20%20-32,0%200,4%2032,0%200,46%20-55,0%200,-21%2032,0%200,-4%20-32,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpath%20id='path3003'%20d='m%20292,0%2055,0%200,20%20-32,0%200,4%2032,0%200,46%20-55,0%200,-21%2032,0%200,-4%20-32,0%20z'%20inkscape:connector-curvature='0'%20/%3e%3cpolygon%20id='polygon3005'%20points='311.761,313.627%20306.49,372.521%20255.843,386.191%20255.843,433.435%20348.937,407.634%20349.62,399.962%20360.291,280.411%20361.399,268.217%20369.597,176.305%20255.843,176.305%20255.843,221.716%20319.831,221.716%20315.699,268.217%20255.843,268.217%20255.843,313.627%20'%20style='fill:%23ffffff'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const iconCypress = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='_x30_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20963%20961.4'%20style='enable-background:new%200%200%20963%20961.4;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%231B1E2E;}%20.st1{fill:url(%23SVGID_1_);}%20.st2{fill:%2369D3A7;}%20.st3{fill:url(%23SVGID_00000012459936544953216520000005485075107941418661_);}%20.st4{fill:url(%23SVGID_00000088124283916206697970000005493494615170137236_);}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M340.4,382.8c38.4,0,69.6,20.5,85.6,56.1l1.2,2.8l64.4-21.9l-1.3-3.3c-24.9-60.8-82.4-98.5-149.9-98.5%20c-47.5,0-86.1,15.2-118,46.5c-31.7,31.1-47.7,70.2-47.7,116.2c0,45.7,16.1,84.6,47.7,115.6c31.9,31.3,70.5,46.5,118,46.5%20c67.5,0,124.9-37.8,149.9-98.5l1.3-3.3l-64.5-21.9L426,522c-14.4,35.1-46.4,56-85.6,56c-26.7,0-49.3-9.3-67.1-27.7%20c-18.1-18.6-27.2-42.1-27.2-69.6c0-27.7,8.9-50.7,27.2-70.2C291.2,392.1,313.7,382.8,340.4,382.8z'/%3e%3cg%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='992.9913'%20y1='483.702'%20x2='568.8699'%20y2='758.3042'%3e%3cstop%20offset='8.142510e-02'%20style='stop-color:%2369D3A7'/%3e%3cstop%20offset='1'%20style='stop-color:%2369D3A7;stop-opacity:0'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M620,934.4l-19.2-63.3C774,818.5,890.4,661.6,890.4,480.7c0-49.9-8.9-98.7-26.5-144.9l61.8-23.5%20c20.5,53.8,30.9,110.4,30.9,168.5C956.5,690.9,821.3,873.2,620,934.4z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st2'%20d='M872.5,361.1c-52.9-172.6-210-288.5-391-288.5c-24.6,0-49.2,2.2-73.2,6.5L396.6,14c27.8-5,56.4-7.6,84.9-7.6%20c210.2,0,392.7,134.7,454.2,335.2L872.5,361.1z'/%3e%3c/g%3e%3cg%3e%3clinearGradient%20id='SVGID_00000148651166423619572140000005281795770302588552_'%20gradientUnits='userSpaceOnUse'%20x1='323.3837'%20y1='12.3964'%20x2='56.9357'%20y2='577.5029'%3e%3cstop%20offset='0'%20style='stop-color:%2369D3A7'/%3e%3cstop%20offset='0.8232'%20style='stop-color:%232AB586'/%3e%3cstop%20offset='1'%20style='stop-color:%231CAE7F'/%3e%3c/linearGradient%3e%3cpath%20style='fill:url(%23SVGID_00000148651166423619572140000005281795770302588552_);'%20d='M36.9,647.9%20C16.7,594.5,6.5,538.2,6.5,480.7c0-245,183.9-447.9,427.8-471.9l6.5,65.8C230.9,95.3,72.6,269.9,72.6,480.7%20c0,49.5,8.8,98,26.1,143.9L36.9,647.9z'/%3e%3c/g%3e%3cpolygon%20class='st0'%20points='743.7,324%20652,556.4%20559.6,324%20484,324%20613.6,641.2%20519.2,870.2%20585.3,883.4%20815.1,324%20'/%3e%3clinearGradient%20id='SVGID_00000098925399032608532410000009288675756932014269_'%20gradientUnits='userSpaceOnUse'%20x1='5.8284'%20y1='697.8476'%20x2='704.4937'%20y2='917.1161'%3e%3cstop%20offset='7.735210e-02'%20style='stop-color:%231CAE7F'/%3e%3cstop%20offset='0.1638'%20style='stop-color:%231CA379'/%3e%3cstop%20offset='0.3161'%20style='stop-color:%231C8568'/%3e%3cstop%20offset='0.5165'%20style='stop-color:%231B554D'/%3e%3cstop%20offset='0.7187'%20style='stop-color:%231B1E2E'/%3e%3c/linearGradient%3e%3cpath%20style='fill:url(%23SVGID_00000098925399032608532410000009288675756932014269_);'%20d='M531.1,841.4l-13.9,33.7%20c-3.2,7.7-10.5,13-18.7,13.3c-5.7,0.2-11.3,0.4-17.1,0.4c-181.5,0-343.1-121.5-393-295.5l-63.6,18.2%20c58,202.1,245.7,343.3,456.5,343.4c0,0,0,0,0,0c0,0,0.1,0,0.1,0v0c6.6,0,13.2-0.1,19.8-0.4c33.9-1.4,64.2-22.7,77.2-54.2l18.8-45.7%20L531.1,841.4z'/%3e%3c/g%3e%3c/svg%3e";
const iconCython = "/assets/icon.X_mxlLNI.svg";
const iconDeno = "/assets/icon.LTbrpl2K.svg";
const iconDoxygen = "data:image/png;base64,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";
const iconFastify = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%20200%20848.90002%20544.30273'%20version='1.1'%20sodipodi:docname='icon.svg'%20width='848.90002'%20height='544.30273'%20inkscape:version='1.3%20(0e150ed6c4,%202023-07-21)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs%20id='defs1'%20/%3e%3csodipodi:namedview%20id='namedview1'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='0.96755778'%20inkscape:cx='414.9623'%20inkscape:cy='271.30163'%20inkscape:window-width='1920'%20inkscape:window-height='1017'%20inkscape:window-x='-8'%20inkscape:window-y='-8'%20inkscape:window-maximized='1'%20inkscape:current-layer='Layer_1'%20/%3e%3cpath%20d='m%20822.18,277.32%2026.72,-69.21%20-1.15,-4.28%20-264.34,69.65%20C%20611.55,232.7%20601.9,200%20601.9,200%20c%200,0%20-84.41,53.91%20-148.26,52.49%20-63.85,-1.42%20-84.41,-18.44%20-182.31,12.77%20-97.9,31.21%20-125.56,127%20-153.93,147.55%20C%2089.03,433.36%200,500.42%200,500.42%20l%200.19,1.2%2080.26,-25.56%20c%200,0%20-22,20.75%20-68.77,83.77%200,0%20-0.82,-0.75%20-2.18,-2%20l%200.07,0.43%20c%200,0%2037.6,57.46%2074.49,46.82%20a%2073.31,73.31%200%200%200%2012.49,-5.19%20c%2014.85,8.27%2034.24,16.4%2055.65,18.64%20a%20343.88,343.88%200%200%201%20-26.58,-36%20l%2010,-6.51%20-1.56,1.12%2030.57,11.22%20-3.4,-28.76%200.3,-0.19%2030,11%20-3.74,-26.13%20c%203.8,-2%207.61,-3.87%2011.4,-5.63%20l%2031.36,-118.39%20129.46,-88.32%20-10.28,25.89%20c%20-26.26,64.56%20-75.56,79.77%20-75.56,79.77%20l%20-20.57,7.8%20c%20-15.31,18.09%20-21.74,22.54%20-27,83.25%2012.33,-3.11%2024.12,-3.83%2034.8,-1%2055.33,14.9%2074.49,81.58%2059.59,100%20-3.73,4.62%20-12.61,12.52%20-23.82,21.77%20h%20-22.45%20l%20-0.29,18.19%20-2.31,1.8%20h%20-22.84%20l%20-0.29,17.75%20c%20-2,1.54%20-4,3.05%20-6,4.52%20-21.47,0.45%20-48.65,-18.27%20-48.65,-18.27%200,17%2014.19,43.27%2014.19,43.27%20l%202.51,-1.22%20-2.15,1.57%20c%200,0%2057.46,38.31%2093.63,24.12%2032.2,-12.55%20115.47,-78.18%20187.36,-109.25%20l%20217.54,-57.3%2028.69,-74.31%20-165.78,43.66%20V%20477.19%20L%20764.8,425.95%20793.49,351.6%20570.33,410.4%20v%20-66.72%20z%20m%20-394.82,141.47%2051.62,-13.6%200.69,2.59%20-16.12,41.72%20-53.48,14.1%20z%20m%2017.82,89.3%20-53.5,14.1%2017.29,-44.81%2051.58,-13.6%200.69,2.59%20z%20m%2069.71,-15%20-53.51,14.1%2017.3,-44.8%2051.62,-13.61%200.69,2.59%20z'%20id='path1'%20/%3e%3c/svg%3e";
const iconGit = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='92pt'%20height='92pt'%20viewBox='0%200%2092%2092'%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20d='M0%20.113h91.887V92H0Zm0%200'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20style='stroke:none;fill-rule:nonzero;fill:%23f03c2e;fill-opacity:1'%20d='M90.156%2041.965%2050.036%201.848a5.918%205.918%200%200%200-8.372%200l-8.328%208.332%2010.566%2010.566a7.03%207.03%200%200%201%207.23%201.684%207.034%207.034%200%200%201%201.669%207.277l10.187%2010.184a7.028%207.028%200%200%201%207.278%201.672%207.04%207.04%200%200%201%200%209.957%207.05%207.05%200%200%201-9.965%200%207.044%207.044%200%200%201-1.528-7.66l-9.5-9.497V59.36a7.04%207.04%200%200%201%201.86%2011.29%207.04%207.04%200%200%201-9.957%200%207.04%207.04%200%200%201%200-9.958%207.06%207.06%200%200%201%202.304-1.539V33.926a7.049%207.049%200%200%201-3.82-9.234L29.242%2014.272%201.73%2041.777a5.925%205.925%200%200%200%200%208.371L41.852%2090.27a5.925%205.925%200%200%200%208.37%200l39.934-39.934a5.925%205.925%200%200%200%200-8.371'/%3e%3c/g%3e%3c/svg%3e";
const iconHlsl = "/assets/icon.l9Xqs8AG.svg";
const iconHtml5 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3ctitle%3eHTML5%20Logo%3c/title%3e%3cpolygon%20fill='%23E44D26'%20points='107.644,470.877%2074.633,100.62%20437.367,100.62%20404.321,470.819%20255.778,512%20'/%3e%3cpolygon%20fill='%23F16529'%20points='256,480.523%20376.03,447.246%20404.27,130.894%20256,130.894%20'/%3e%3cpolygon%20fill='%23EBEBEB'%20points='256,268.217%20195.91,268.217%20191.76,221.716%20256,221.716%20256,176.305%20255.843,176.305%20142.132,176.305%20143.219,188.488%20154.38,313.627%20256,313.627'/%3e%3cpolygon%20fill='%23EBEBEB'%20points='256,386.153%20255.801,386.206%20205.227,372.55%20201.994,336.333%20177.419,336.333%20156.409,336.333%20162.771,407.634%20255.791,433.457%20256,433.399'/%3e%3cpath%20d='M108.382,0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.077V0z'/%3e%3cpath%20d='M205.994,22.896h-20.316V0h63.72v22.896h-20.325v46.148h-23.078V22.896z'/%3e%3cpath%20d='M259.511,0h24.063l14.802,24.26L313.163,0h24.072v69.044h-22.982V34.822l-15.877,24.549h-0.397l-15.888-24.549v34.222h-22.58V0z'/%3e%3cpath%20d='M348.72,0h23.084v46.222h32.453v22.822H348.72V0z'/%3e%3cpolygon%20fill='%23FFFFFF'%20points='255.843,268.217%20255.843,313.627%20311.761,313.627%20306.49,372.521%20255.843,386.191%20255.843,433.435%20348.937,407.634%20349.62,399.962%20360.291,280.411%20361.399,268.217%20349.162,268.217'/%3e%3cpolygon%20fill='%23FFFFFF'%20points='255.843,176.305%20255.843,204.509%20255.843,221.605%20255.843,221.716%20365.385,221.716%20365.385,221.716%20365.531,221.716%20366.442,211.509%20368.511,188.488%20369.597,176.305'/%3e%3c/svg%3e";
const iconImmutableJs = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='510.19678'%20height='342.07211'%20viewBox='0%200%20104.4883%2070.144001'%20preserveAspectRatio='xMidYMid'%20version='1.1'%20id='svg2'%20sodipodi:docname='immutable.svg'%20inkscape:version='1.3%20(0e150ed6c4,%202023-07-21)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs%20id='defs2'%20/%3e%3csodipodi:namedview%20id='namedview2'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='4.4896'%20inkscape:cx='236.65805'%20inkscape:cy='172.06433'%20inkscape:window-width='1920'%20inkscape:window-height='1017'%20inkscape:window-x='-8'%20inkscape:window-y='-8'%20inkscape:window-maximized='1'%20inkscape:current-layer='svg2'%20/%3e%3cpath%20d='M%20-0.31982493,0%20H%2023.403175%20V%2070.144%20H%20-0.31982493%20Z%20M%2030.741175,0%20h%2018.432%20l%2018.262,26.965%20L%2085.696175,0%20H%20104.29918%20V%2070.144%20H%2081.770175%20V%2044.885%20l%20-14.335,20.992%20-14.336,-20.992%20v%2025.259%20h%20-22.359%20V%200%20Z'%20fill='%23fc4349'%20id='path1'%20sodipodi:nodetypes='ccccccccccccccccccc'%20/%3e%3cpath%20d='M%20-0.31982493,0%20H%2023.403175%20V%2070.144%20H%20-0.31982493%20Z%20M%2012.992175,61.781%20V%208.363%20h%20-2.73%20V%2061.78%20h%202.73%20z%20M%2030.742175,0%20h%2018.431%20l%2018.262,26.965%20L%2085.696175,0%20H%20104.29918%20V%2070.144%20H%2081.770175%20V%2044.885%20l%20-14.335,20.992%20-14.336,-20.992%20v%2025.259%20h%20-22.359%20V%200%20Z%20m%2013.14,61.781%20V%2013.483%20l%2023.553,34.304%2023.552,-34.304%20V%2061.78%20h%202.73%20V%208.363%20h%20-2.73%20l%20-23.552,34.645%20-23.552,-34.645%20h%20-2.731%20V%2061.78%20h%202.73%20z'%20fill='%232c3e50'%20id='path2'%20sodipodi:nodetypes='ccccccccccccccccccccccccccccccccccccccc'%20/%3e%3c/svg%3e";
const iconJavascript = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20630'%3e%3crect%20width='630'%20height='630'%20fill='%23f7df1e'/%3e%3cpath%20d='m423.2%20492.19c12.69%2020.72%2029.2%2035.95%2058.4%2035.95%2024.53%200%2040.2-12.26%2040.2-29.2%200-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2%200-44.4%2033.83-78.2%2086.7-78.2%2037.64%200%2064.7%2013.1%2084.2%2047.4l-46.1%2029.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34%200-28.33%2011-28.33%2025.37%200%2017.76%2011%2024.95%2036.4%2035.95l14.8%206.34c50.3%2021.57%2078.7%2043.56%2078.7%2093%200%2053.3-41.87%2082.5-98.1%2082.5-54.98%200-90.5-26.2-107.88-60.54zm-209.13%205.13c9.3%2016.5%2017.76%2030.45%2038.1%2030.45%2019.45%200%2031.72-7.61%2031.72-37.2v-201.3h59.2v202.1c0%2061.3-35.94%2089.2-88.4%2089.2-47.4%200-74.85-24.53-88.81-54.075z'/%3e%3c/svg%3e";
const iconLess = "/assets/icon.qsT2ujs-.svg";
const iconLua = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2014.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%2043363)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.0//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20id='Ebene_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='947px'%20height='947px'%20viewBox='0%200%20947%20947'%20enable-background='new%200%200%20947%20947'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='%23000080'%20d='M835.5,473.6c0-199.8-162.2-362-362-362s-362,162.2-362,362c0,199.8,162.2,362,362,362%20S835.5,673.4,835.5,473.6'/%3e%3cpath%20fill='%23FFFFFF'%20d='M729.5,323.6c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S729.5,382.1,729.5,323.6'%20/%3e%3cpath%20fill='%23000080'%20d='M941.5,111.5c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S941.5,170.1,941.5,111.5'%20/%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M258.1,627.8h117.3v26.7H227.8V417h30.3V627.8z'/%3e%3cpath%20fill='%23FFFFFF'%20d='M515.5,654.5v-23.8c-16,22.5-31.9,31.3-57,31.3c-33.2,0-54.4-18.2-54.4-46.6V483.8h27v120.9%20c0,20.5,13.7,33.6,35.2,33.6c28.3,0,46.6-22.8,46.6-57.7v-96.8h27v170.7H515.5z'/%3e%3cpath%20fill='%23FFFFFF'%20d='M738.4,659.1c-8.8,2.3-13,2.9-18.6,2.9c-17.6,0-26.1-7.8-28-25.1c-19.2,17.6-36.5,25.1-58,25.1%20c-34.5,0-56-19.5-56-50.5c0-22.2,10.1-37.5,30-45.6c10.4-4.2,16.3-5.5,54.7-10.4c21.5-2.6,28.3-7.5,28.3-18.9v-7.2%20c0-16.3-13.7-25.4-38.1-25.4c-25.4,0-37.8,9.4-40.1,30.3h-27.4c0.7-16.9,3.9-26.7,11.7-35.5c11.4-12.7,31.9-19.9,56.7-19.9%20c42,0,64.2,16.3,64.2,46.6v100.4c0,8.5,5.2,13.4,14.7,13.4c1.6,0,2.9,0,5.9-0.7V659.1z%20M690.8,570.1c-9.1,4.2-15,5.5-43.7,9.4%20c-29,4.2-41.1,13.4-41.1,31.3c0,17.3,12.4,27.4,33.6,27.4c16,0,29.3-5.2,40.4-15.3c8.1-7.5,10.8-13,10.8-22.2V570.1z'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23808080'%20stroke-width='10.8612'%20stroke-miterlimit='10'%20stroke-dasharray='40.8475'%20d='M890.6,261%20c33.5,65.8,51,138.6,51,212.5c0,258.4-209.7,468.1-468.1,468.1S5.4,731.9,5.4,473.5C5.4,215.1,215.1,5.4,473.5,5.4%20c83.1,0,164.6,22.1,236.2,63.9'/%3e%3c/g%3e%3c/svg%3e";
const iconMongodb = "data:image/svg+xml,%3csvg%20width='120'%20height='258'%20viewBox='0%200%20120%20258'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M83.0089%2028.7559C72.1328%2015.9086%2062.7673%202.86053%2060.8539%200.150554C60.6525%20-0.0501848%2060.3503%20-0.0501848%2060.1489%200.150554C58.2355%202.86053%2048.8699%2015.9086%2037.9938%2028.7559C-55.3594%20147.292%2052.6968%20227.287%2052.6968%20227.287L53.6031%20227.889C54.4087%20240.235%2056.4228%20258%2056.4228%20258H60.451H64.4792C64.4792%20258%2066.4934%20240.335%2067.299%20227.889L68.2052%20227.187C68.306%20227.187%20176.362%20147.292%2083.0089%2028.7559ZM60.451%20225.48C60.451%20225.48%2055.6172%20221.365%2054.3081%20219.257V219.057L60.1489%2089.9813C60.1489%2089.5798%2060.7532%2089.5798%2060.7532%2089.9813L66.594%20219.057V219.257C65.2848%20221.365%2060.451%20225.48%2060.451%20225.48Z'%20fill='%2300684A'/%3e%3c/svg%3e";
const iconNeutralino = "/assets/icon.0HPLfDlm.svg";
const iconNodeJs = "/assets/icon.idx-jZvw.svg";
const iconPinia = "/assets/icon.wssNc0nF.svg";
const iconPostgresql = "/assets/icon.aXGs4SYN.svg";
const iconPython = "/assets/icon.F8Sdeppp.svg";
const iconReact = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='-11%20-10.13%2022%2020.27'%3e%3ccircle%20r='2'%20fill='%23087ea4'/%3e%3cg%20stroke='%23087ea4'%3e%3cellipse%20rx='10'%20ry='4.5'/%3e%3cellipse%20rx='10'%20ry='4.5'%20transform='rotate(60)'/%3e%3cellipse%20rx='10'%20ry='4.5'%20transform='rotate(120)'/%3e%3c/g%3e%3c/svg%3e";
const iconRedis = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20146.41%20125.59'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}.cls-2{clip-path:url(%23clip-path);}.cls-3{fill:%23a32422;}.cls-4{fill:%23dc382c;}.cls-5{fill:%23fff;}.cls-6{fill:%23741113;}.cls-7{fill:%23ac2724;}%3c/style%3e%3cclipPath%20id='clip-path'%20transform='translate(0.01%200.01)'%3e%3crect%20class='cls-1'%20width='146.42'%20height='125.48'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cg%20class='cls-2'%3e%3cpath%20class='cls-3'%20d='M140.66,96.74c-7.8,4.08-48.28,20.73-57,25.3s-13.39,4.44-20.21,1.18S13.7,102.5,5.92,98.78C2,96.94,0,95.37,0,93.9V79.09S56.08,66.92,65.13,63.64,77.31,60.28,85,63.1,138.79,74.24,146.4,77V91.6c0,1.52-1.75,3-5.74,5.13Z'%20transform='translate(0.01%200.01)'/%3e%3cpath%20class='cls-4'%20d='M140.66,82c-7.8,4.06-48.28,20.71-57,25.2s-13.39,4.45-20.21,1.2S13.7,87.69,5.92,84s-7.93-6.27-.3-9.25S56.08,55,65.13,51.7,77.31,48.33,85,51.16,133,70,140.57,72.79s7.92,5.08.09,9.13Z'%20transform='translate(0.01%200.01)'/%3e%3cpath%20class='cls-3'%20d='M140.66,72.62c-7.8,4.07-48.28,20.71-57,25.2S70.31,102.27,63.49,99,13.7,78.37,5.92,74.66C2,72.8,0,71.24,0,69.76V55S56.08,42.79,65.13,39.51,77.31,36.14,85,39,138.79,50.1,146.4,52.88v14.6C146.4,69,144.65,70.52,140.66,72.62Z'%20transform='translate(0.01%200.01)'/%3e%3cpath%20class='cls-4'%20d='M140.66,57.81c-7.8,4.08-48.28,20.72-57,25.21s-13.39,4.46-20.21,1.2S13.7,63.57,5.92,59.85-2,53.6,5.62,50.62s50.46-19.79,59.51-23S77.31,24.21,85,27,133,45.94,140.57,48.65s7.92,5.09.09,9.13Z'%20transform='translate(0.01%200.01)'/%3e%3cpath%20class='cls-3'%20d='M140.66,47.59c-7.8,4.08-48.28,20.73-57,25.21S70.31,77.25,63.49,74,13.7,53.34,5.92,49.63C2,47.79,0,46.22,0,44.74V29.93S56.08,17.76,65.13,14.49,77.31,11.12,85,13.94s53.77,11.14,61.38,13.92v14.6C146.4,44,144.65,45.5,140.66,47.59Z'%20transform='translate(0.01%200.01)'/%3e%3cpath%20class='cls-4'%20d='M140.66,32.8c-7.8,4-48.28,20.75-57,25.2s-13.39,4.44-20.21,1.2S13.7,38.53,5.92,34.83s-7.93-6.27-.3-9.25S56.08,5.8,65.13,2.54,77.31-.82,85,2,133,20.85,140.57,23.63s7.92,5.09.09,9.14Z'%20transform='translate(0.01%200.01)'/%3e%3c/g%3e%3cpolygon%20class='cls-5'%20points='75.51%2011.78%2085.17%208.61%2082.55%2014.87%2092.38%2018.55%2079.71%2019.87%2076.86%2026.71%2072.28%2019.08%2057.63%2017.76%2068.57%2013.82%2065.28%207.76%2075.51%2011.78%2075.51%2011.78%2075.51%2011.78'/%3e%3cpolygon%20class='cls-5'%20points='76.12%2051.71%2052.44%2041.88%2086.36%2036.67%2076.12%2051.71%2076.12%2051.71%2076.12%2051.71'/%3e%3cpath%20class='cls-5'%20d='M43.28,22.34c10,0,18.13,3.15,18.13,7s-8.15,7-18.13,7-18.14-3.15-18.14-7S33.27,22.34,43.28,22.34Z'%20transform='translate(0.01%200.01)'/%3e%3cpolygon%20class='cls-6'%20points='107.39%2020.42%20127.46%2028.35%20107.41%2036.28%20107.39%2020.42%20107.39%2020.42%20107.39%2020.42'/%3e%3cpolygon%20class='cls-7'%20points='107.39%2020.42%20107.41%2036.28%20105.23%2037.13%2085.17%2029.2%20107.39%2020.42%20107.39%2020.42%20107.39%2020.42'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const iconRust = "/assets/icon.CZKp9iMr.svg";
const iconTypedoc = "data:image/png;base64,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";
const iconTypescript = "data:image/svg+xml,%3csvg%20fill='none'%20height='512'%20viewBox='0%200%20512%20512'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20fill='%233178c6'%20height='512'%20rx='50'%20width='512'/%3e%3crect%20fill='%233178c6'%20height='512'%20rx='50'%20width='512'/%3e%3cpath%20clip-rule='evenodd'%20d='m316.939%20407.424v50.061c8.138%204.172%2017.763%207.3%2028.875%209.386s22.823%203.129%2035.135%203.129c11.999%200%2023.397-1.147%2034.196-3.442%2010.799-2.294%2020.268-6.075%2028.406-11.342%208.138-5.266%2014.581-12.15%2019.328-20.65s7.121-19.007%207.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091%200-3.441.887-6.544%202.661-9.308s4.278-5.136%207.512-7.118c3.235-1.981%207.199-3.52%2011.894-4.615%204.696-1.095%209.912-1.642%2015.651-1.642%204.173%200%208.581.313%2013.224.938%204.643.626%209.312%201.591%2014.008%202.894%204.695%201.304%209.259%202.947%2013.694%204.928%204.434%201.982%208.529%204.276%2012.285%206.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895%200-23.163%201.278-33.805%203.833s-20.006%206.544-28.093%2011.967c-8.086%205.424-14.476%2012.333-19.171%2020.729-4.695%208.395-7.043%2018.433-7.043%2030.114%200%2014.914%204.304%2027.638%2012.912%2038.172%208.607%2010.533%2021.675%2019.45%2039.204%2026.751%206.886%202.816%2013.303%205.579%2019.25%208.291s11.086%205.528%2015.415%208.448c4.33%202.92%207.747%206.101%2010.252%209.543%202.504%203.441%203.756%207.352%203.756%2011.733%200%203.233-.783%206.231-2.348%208.995s-3.939%205.162-7.121%207.196-7.147%203.624-11.894%204.771c-4.748%201.148-10.303%201.721-16.668%201.721-10.851%200-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e";
const iconUnity = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%201603.7328%201811.3677'%20version='1.1'%20sodipodi:docname='icon.svg'%20inkscape:version='1.3%20(0e150ed6c4,%202023-07-21)'%20width='1603.7328'%20height='1811.3677'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3csodipodi:namedview%20id='namedview4'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='0.20525'%20inkscape:cx='596.83313'%20inkscape:cy='976.85749'%20inkscape:window-width='1920'%20inkscape:window-height='1017'%20inkscape:window-x='-8'%20inkscape:window-y='-8'%20inkscape:window-maximized='1'%20inkscape:current-layer='Layer_1'%20showgrid='false'%20/%3e%3cdefs%20id='defs1'%3e%3cstyle%20id='style1'%3e.cls-1{fill:%234c4c4c;}.cls-2{fill:gray;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M%201603.7328,1267.3531%20V%20422.49299%20L%20871.95933,0.047211%20V%20324.07339%20l%20286.71357,165.52245%20c%2010.3707,5.74403%2010.6382,22.03189%200,27.76019%20L%20817.88673,714.06934%20a%2032.009191,32.009191%200%200%201%20-32.10358,0%20L%20445.02847,517.35603%20c%20-10.4022,-5.69683%20-10.7012,-22.0319%200,-27.79167%20L%20731.69486,324.05765%20V%200%20L%200,422.49299%20V%201267.4004%20L%20280.65482,1105.3086%20V%20774.23214%20c%20-0.20458,-11.85%2013.7542,-20.19065%2024.06197,-13.81714%20l%20340.77043,196.71335%20a%2032.072139,32.072139%200%200%201%2016.0518,27.8231%20v%20393.42665%20c%200.26753,11.7871%20-13.6283,20.2379%20-23.93608,13.9588%20L%20350.82639,1226.8302%2070.17157,1388.922%20801.94513,1811.3677%201533.7187,1388.922%201253.0638,1226.8302%20966.20853,1392.3684%20c%20-10.1661,6.106%20-24.3767,-1.794%20-24.0147,-13.9115%20V%20985.03015%20a%2032.040665,32.040665%200%200%201%2016.0833,-27.8074%20L%201299.0161,760.50942%20c%2010.1346,-6.16893%2024.4396,1.74681%2024.0619,13.88009%20V%201105.403%20Z'%20id='path1'%20style='stroke-width:1.57371'%20/%3e%3cpath%20d='M%20801.86643,1811.3205%201533.6399,1388.8748%201252.9851,1226.783%20966.20853,1392.3684%20c%20-10.1661,6.106%20-24.3767,-1.794%20-24.0147,-13.9115%20V%20985.03015%20a%2032.087877,32.087877%200%200%201%2016.0676,-27.8074%20L%201299.0161,760.50942%20c%2010.1346,-6.16893%2024.4396,1.74681%2024.0619,13.88009%20V%201105.403%20l%20280.6548,162.0918%20V%20422.49299%20L%20801.86643,885.39877%20Z'%20id='path2'%20style='stroke-width:1.57371'%20/%3e%3cpath%20class='cls-2'%20d='m%20872.02233,0%20v%20324.07339%20l%20286.71347,165.52245%20c%2010.3707,5.74403%2010.6383,22.03189%200,27.76019%20L%20817.94973,714.06934%20a%2032.009191,32.009191%200%200%201%20-32.10363,0%20L%20445.09142,517.35603%20c%20-10.4022,-5.69683%20-10.70121,-22.0319%200,-27.79167%20L%20731.69486,324.07339%20V%200%20L%200,422.49299%20801.86643,885.39877%201603.7328,422.49299%20Z'%20id='path3'%20style='stroke-width:1.57371'%20/%3e%3cpath%20class='cls-1'%20d='M%20637.60294,1392.4156%20350.82639,1226.8302%2070.17157,1388.922%20801.94513,1811.3677%20V%20885.39877%20L%200,422.49299%20V%201267.4004%20L%20280.65482,1105.3086%20V%20774.23214%20c%20-0.20458,-11.85%2013.7542,-20.19065%2024.06197,-13.81714%20l%20340.77043,196.71335%20a%2032.072139,32.072139%200%200%201%2016.0518,27.8231%20v%20393.42665%20c%200.26753,11.9445%20-13.6283,20.3166%20-23.93608,14.0375%20z'%20id='path4'%20style='stroke-width:1.57371'%20/%3e%3c/svg%3e";
const iconVite = "data:image/svg+xml,%3csvg%20width='410'%20height='404'%20viewBox='0%200%20410%20404'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M399.641%2059.5246L215.643%20388.545C211.844%20395.338%20202.084%20395.378%20198.228%20388.618L10.5817%2059.5563C6.38087%2052.1896%2012.6802%2043.2665%2021.0281%2044.7586L205.223%2077.6824C206.398%2077.8924%20207.601%2077.8904%20208.776%2077.6763L389.119%2044.8058C397.439%2043.2894%20403.768%2052.1434%20399.641%2059.5246Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M292.965%201.5744L156.801%2028.2552C154.563%2028.6937%20152.906%2030.5903%20152.771%2032.8664L144.395%20174.33C144.198%20177.662%20147.258%20180.248%20150.51%20179.498L188.42%20170.749C191.967%20169.931%20195.172%20173.055%20194.443%20176.622L183.18%20231.775C182.422%20235.487%20185.907%20238.661%20189.532%20237.56L212.947%20230.446C216.577%20229.344%20220.065%20232.527%20219.297%20236.242L201.398%20322.875C200.278%20328.294%20207.486%20331.249%20210.492%20326.603L212.5%20323.5L323.454%20102.072C325.312%2098.3645%20322.108%2094.137%20318.036%2094.9228L279.014%20102.454C275.347%20103.161%20272.227%2099.746%20273.262%2096.1583L298.731%207.86689C299.767%204.27314%20296.636%200.855181%20292.965%201.5744Z'%20fill='url(%23paint1_linear)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='6.00017'%20y1='32.9999'%20x2='235'%20y2='344'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2341D1FF'/%3e%3cstop%20offset='1'%20stop-color='%23BD34FE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='194.651'%20y1='8.81818'%20x2='236.076'%20y2='292.989'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFEA83'/%3e%3cstop%20offset='0.0833333'%20stop-color='%23FFDD35'/%3e%3cstop%20offset='1'%20stop-color='%23FFA800'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const iconVitepress = "/assets/icon.6eqTJBpR.svg";
const iconVue = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20196.32%20170.02'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2342b883;}.cls-2{fill:%2335495e;}%3c/style%3e%3c/defs%3e%3ctitle%3elogo%3c/title%3e%3cpolygon%20class='cls-1'%20points='120.83%200%2098.16%2039.26%2075.49%200%200%200%2098.16%20170.02%20196.32%200%20120.83%200'/%3e%3cpolygon%20class='cls-2'%20points='120.83%200%2098.16%2039.26%2075.49%200%2039.26%200%2098.16%20102.01%20157.06%200%20120.83%200'/%3e%3c/svg%3e";
const iconWxWidgets = "/assets/icon.0m30CKyu.svg";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
function devIcon$1(data) {
  const img = createVNode("img", {
    "class": style.DevIcon_img,
    "src": data.imgUrl,
    "alt": data.title,
    "title": data.title
  }, null);
  if (data.url) {
    return createVNode(_sfc_main$b, {
      "href": data.url,
      "class": style.DevIcon,
      "style": {
        aspectRatio: data.aspect
      }
    }, _isSlot(img) ? img : {
      default: () => [img]
    });
  }
  return createVNode("div", {
    "class": style.DevIcon
  }, [img]);
}
const devIconDataCollection = {
  blender: {
    imgUrl: iconBlender,
    title: "Blender",
    url: "https://www.blender.org/",
    aspect: 1.231033864721421
  },
  cpp: {
    imgUrl: iconCpp,
    title: "C++",
    url: "https://en.cppreference.com/w/cpp/language",
    aspect: 1.5606030686846109
  },
  csharp: {
    imgUrl: iconCsharp,
    title: "C#",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    aspect: 1.5672441922679645
  },
  css3: {
    imgUrl: iconCss3,
    title: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    aspect: 0.7084649126419045
  },
  cypress: {
    imgUrl: iconCypress,
    title: "Cypress",
    url: "https://www.cypress.io/",
    aspect: 1.0016642396505098
  },
  cython: {
    imgUrl: iconCython,
    title: "Cython",
    url: "https://cython.org/",
    aspect: 2.2411789210687334
  },
  deno: {
    imgUrl: iconDeno,
    title: "Deno",
    url: "https://deno.com/",
    aspect: 0.9999581442770322
  },
  doxygen: {
    imgUrl: iconDoxygen,
    title: "Doxygen",
    url: "https://www.doxygen.nl/",
    aspect: 3.354838709677419
  },
  fastify: {
    imgUrl: iconFastify,
    title: "Fastify",
    url: "https://fastify.dev/",
    aspect: 1.5596100721376136
  },
  git: {
    imgUrl: iconGit,
    title: "Git",
    url: "https://git-scm.com/",
    aspect: 1
  },
  hlsl: {
    imgUrl: iconHlsl,
    title: "HLSL",
    url: "https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl",
    aspect: 2.2748588322132903
  },
  html5: {
    imgUrl: iconHtml5,
    title: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    aspect: 1
  },
  immutableJs: {
    imgUrl: iconImmutableJs,
    title: "Immutable.js",
    url: "https://immutable-js.com/",
    aspect: 1.4914889728952179
  },
  javascript: {
    imgUrl: iconJavascript,
    title: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    aspect: 1
  },
  less: {
    imgUrl: iconLess,
    title: "LESS",
    url: "https://lesscss.org/",
    aspect: 2.2402389277389276
  },
  lua: {
    imgUrl: iconLua,
    title: "Lua",
    url: "https://www.lua.org/",
    aspect: 1
  },
  mongodb: {
    imgUrl: iconMongodb,
    title: "MongoDB",
    url: "https://www.mongodb.com/",
    aspect: 0.46511627906976744
  },
  neutralino: {
    imgUrl: iconNeutralino,
    title: "Neutralino",
    url: "https://neutralino.js.org/",
    aspect: 1.1127659574468085
  },
  nodeJs: {
    imgUrl: iconNodeJs,
    title: "Node.js",
    url: "https://nodejs.org/en/about",
    aspect: 1.6327933384638382
  },
  pinia: {
    imgUrl: iconPinia,
    title: "Pinia",
    url: "https://pinia.vuejs.org/",
    aspect: 0.6687631027253669
  },
  postgresql: {
    imgUrl: iconPostgresql,
    title: "PostgreSQL",
    url: "https://www.postgresql.org/",
    aspect: 0.970111117846887
  },
  python: {
    imgUrl: iconPython,
    title: "Python",
    url: "https://www.python.org/",
    aspect: 0.9890768548304396
  },
  react: {
    imgUrl: iconReact,
    title: "React",
    url: "https://react.dev/",
    aspect: 1.0855263157894737
  },
  redis: {
    imgUrl: iconRedis,
    title: "Redis",
    url: "https://redis.io/",
    aspect: 1.1668791839336945
  },
  rust: {
    imgUrl: iconRust,
    title: "Rust",
    url: "https://www.rust-lang.org/",
    aspect: 1
  },
  typedoc: {
    imgUrl: iconTypedoc,
    title: "TypeDoc",
    url: "https://typedoc.org/",
    aspect: 1
  },
  typescript: {
    imgUrl: iconTypescript,
    title: "TypeSript",
    url: "https://www.typescriptlang.org/",
    aspect: 1
  },
  unity: {
    imgUrl: iconUnity,
    title: "Unity",
    url: "https://unity.com/",
    aspect: 0.8853712032073885
  },
  vite: {
    imgUrl: iconVite,
    title: "Vite",
    url: "https://vitejs.dev/",
    aspect: 1.0148514851485149
  },
  vitepress: {
    imgUrl: iconVitepress,
    title: "VitePress",
    url: "https://vitepress.dev/",
    aspect: 0.8333333333333334
  },
  vue: {
    imgUrl: iconVue,
    title: "Vue.js",
    url: "https://vuejs.org/",
    aspect: 1.1546876838019056
  },
  wxWidgets: {
    imgUrl: iconWxWidgets,
    title: "wxWidgets",
    url: "https://www.wxwidgets.org/",
    aspect: 1.4393942678571428
  }
};
const devIcons = Object.fromEntries(Object.entries(devIconDataCollection).map(([name, data]) => [name, devIcon$1(data)]));
const _sfc_setup$5 = devIcons.setup;
devIcons.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tsx/devIcons.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const imgPhoto = "/assets/photo-of-me.P5oUbJJi.jpg";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PageHomeBio",
  __ssrInlineRender: true,
  setup(__props) {
    const devIconGroups = {
      worked: [
        devIcons.unity,
        devIcons.csharp,
        devIcons.hlsl,
        devIcons.vitepress,
        devIcons.vue,
        devIcons.pinia,
        devIcons.javascript,
        devIcons.typescript,
        devIcons.html5,
        devIcons.css3,
        devIcons.less,
        devIcons.immutableJs,
        devIcons.typedoc,
        devIcons.nodeJs,
        devIcons.python,
        devIcons.cpp,
        devIcons.doxygen,
        devIcons.git
      ],
      dabbled: [
        devIcons.react,
        devIcons.vite,
        devIcons.cypress,
        devIcons.neutralino,
        devIcons.redis,
        devIcons.postgresql,
        devIcons.mongodb,
        devIcons.fastify,
        devIcons.deno,
        devIcons.blender,
        devIcons.cython,
        devIcons.lua,
        devIcons.rust
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.Bio
      }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.Bio_titleContainer)}"><div class="${ssrRenderClass(_ctx.$style.Bio_titleSpacer)}"></div><h2 class="${ssrRenderClass(_ctx.$style.Bio_title)}">Greetings!</h2></div><div class="${ssrRenderClass(_ctx.$style.Bio_content)}"><img alt="Photo of me" class="${ssrRenderClass([_ctx.$style.Bio_photo, _ctx.$style.Bio_photo___aside])}"${ssrRenderAttr("src", unref(imgPhoto))} style="${ssrRenderStyle({ aspectRatio: 300 / 360 })}"><div class="${ssrRenderClass([_ctx.$style.Bio_text])}"><p> Name&#39;s Kostiantyn. I&#39;m a programmer from Ukraine currently residing in Bratislava, Slovakia. This website contains an overview of my <a href="#my-projects">projects</a>, as well as an assortment of condensed `);
      _push(ssrRenderComponent(_sfc_main$b, {
        href: "/students/html+css/selectors.html",
        text: "highlights"
      }, null, _parent));
      _push(` from the web development seminars I&#39;ve been teaching at `);
      _push(ssrRenderComponent(_sfc_main$b, { href: "https://www.fiit.stuba.sk/en.html" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span title="Faculty of Informatics and Information Technologies, Slovak University of Technology"${_scopeId}>FIIT STU</span>`);
          } else {
            return [
              createVNode("span", { title: "Faculty of Informatics and Information Technologies, Slovak University of Technology" }, "FIIT STU")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p><p><img alt="Photo of me" class="${ssrRenderClass([_ctx.$style.Bio_photo, _ctx.$style.Bio_photo___inside])}"${ssrRenderAttr("src", unref(imgPhoto))} style="${ssrRenderStyle({ aspectRatio: 300 / 360 })}"></p><p></p><table class="${ssrRenderClass(_ctx.$style.DeviconsTable)}"><tbody><tr><th scope="row">I have experience working with:</th><td><!--[-->`);
      ssrRenderList(devIconGroups.worked, (devIcon2) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(devIcon2), {
          class: _ctx.$style.devIcon
        }, null), _parent);
      });
      _push(`<!--]--></td></tr><tr><th scope="row">I have dabbled with:</th><td><!--[-->`);
      ssrRenderList(devIconGroups.dabbled, (devIcon2) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(devIcon2), {
          class: _ctx.$style.devIcon
        }, null), _parent);
      });
      _push(`<!--]--></td></tr></tbody></table></div></div></div>`);
    };
  }
});
const DarkMode$3 = "G";
const Bio = "H";
const DeviconsTable = "I";
const Bio_title = "J";
const Bio_content = "K";
const Bio_text = "L";
const Bio_titleContainer = "M";
const Bio_titleSpacer = "N";
const Bio_photo = "O";
const Bio_photo___aside = "P";
const Bio_photo___inside = "Q";
const devIcon = "R";
const style0$3 = {
  DarkMode: DarkMode$3,
  Bio,
  DeviconsTable,
  Bio_title,
  Bio_content,
  Bio_text,
  Bio_titleContainer,
  Bio_titleSpacer,
  Bio_photo,
  Bio_photo___aside,
  Bio_photo___inside,
  devIcon
};
const cssModules$3 = {
  "$style": style0$3
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHomeBio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PageHomeBio = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
const handshake = "/assets/icon.uG3Q97A0.svg";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PageHomeContact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.Contact
      }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.StatusBox)}">`);
      {
        _push(`<!---->`);
      }
      _push(`<img class="${ssrRenderClass(_ctx.$style.StatusBox_icon)}"${ssrRenderAttr("src", unref(handshake))} alt="icon: handshake"><span class="${ssrRenderClass(_ctx.$style.StatusBox_text)}"> I&#39;m available for contract work </span></div><form action="https://formspree.io/f/xwkdgjao" method="POST" class="${ssrRenderClass(_ctx.$style.ContactForm)}"><label><span>Your name:</span><input required type="text" name="name" autocomplete="name"></label><label><span>Your email:</span><input required type="email" name="email" autocomplete="email"></label><label><span>Your message:</span><textarea required name="message"></textarea></label><button colspan="2" type="submit">Send message</button></form></div>`);
    };
  }
});
const DarkMode$2 = "t";
const Contact = "u";
const StatusBox = "v";
const StatusBox_text = "w";
const StatusBox_icon = "x";
const ContactForm = "y";
const style0$2 = {
  DarkMode: DarkMode$2,
  Contact,
  StatusBox,
  StatusBox_text,
  StatusBox_icon,
  ContactForm
};
const cssModules$2 = {
  "$style": style0$2
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHomeContact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PageHomeContact = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
const smudge = "/assets/2.PTgRLVku.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GrungeHeading",
  __ssrInlineRender: true,
  props: {
    text: {}
  },
  setup(__props) {
    const props = __props;
    const smudgeUrl = `url("${smudge}")`;
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--2381bf36": smudgeUrl
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.HeadingWrapper
      }, _attrs, _cssVars))}><h2${ssrRenderAttr("id", unref(makeHeadingId)(props.text))} class="${ssrRenderClass(_ctx.$style.Heading)}" tabindex="-1">${ssrInterpolate(props.text)}</h2></div>`);
    };
  }
});
const DarkMode$1 = "z";
const HeadingWrapper = "A";
const Heading = "B";
const style0$1 = {
  DarkMode: DarkMode$1,
  HeadingWrapper,
  Heading
};
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GrungeHeading.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const GrungeHeading = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PageHome",
  __ssrInlineRender: true,
  setup(__props) {
    const hero = ref(null);
    const scrollY = ref(0);
    const heroBrightness = computed(() => {
      if (!hero.value) {
        return 1;
      }
      return Math.max(1 - scrollY.value / hero.value.clientHeight * 0.5, 0);
    });
    const containerDiv = ref(null);
    handleScrolling();
    function handleScrolling() {
      function onScroll() {
        scrollY.value = window.scrollY;
      }
      onMounted(() => {
        document.addEventListener("scroll", onScroll, { passive: true });
      });
      onUnmounted(() => {
        document.removeEventListener("scroll", onScroll);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--3fa4af01": heroBrightness.value
      } };
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.HomePage,
        ref: (element) => {
          containerDiv.value = element;
        }
      }, _attrs, _cssVars))}><div class="${ssrRenderClass(_ctx.$style.Hero)}"><h1 class="${ssrRenderClass(_ctx.$style.Hero_titleContainer)}"><span class="${ssrRenderClass(_ctx.$style.Hero_title)}">Kostiantyn Rudenko</span><span class="${ssrRenderClass(_ctx.$style.Hero_subtitle)}">software engineer</span></h1></div><div tabindex="-1"${ssrRenderAttr("id", unref(anchorIds).page.content)} class="${ssrRenderClass(_ctx.$style.Main)}"><div>`);
      _push(ssrRenderComponent(PageHomeBio, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        class: _ctx.$style.Main_unpad
      }, null, _parent));
      _push(ssrRenderComponent(GrungeHeading, {
        text: "My projects",
        class: _ctx.$style.Main_unpad
      }, null, _parent));
      _push(ssrRenderComponent(PageHomeProjects, {
        dummies: 8,
        class: _ctx.$style.Main_unpad
      }, null, _parent));
      _push(ssrRenderComponent(GrungeHeading, {
        text: "Contact me",
        class: _ctx.$style.Main_unpad
      }, null, _parent));
      _push(ssrRenderComponent(PageHomeContact, null, null, _parent));
      _push(ssrRenderComponent(BackTop$1, {
        class: _ctx.$style.BackTop
      }, null, _parent));
      _push(`</div></main>`);
    };
  }
});
const DarkMode = "j";
const HomePage = "k";
const Hero = "l";
const Hero_titleContainer = "m";
const Hero_title = "n";
const Hero_subtitle = "o";
const Main = "p";
const Main_unpad = "q";
const BackTop = "r";
const style0 = {
  DarkMode,
  HomePage,
  Hero,
  Hero_titleContainer,
  Hero_title,
  Hero_subtitle,
  Main,
  Main_unpad,
  BackTop
};
const cssModules = {
  "$style": style0
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PageHome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules]]);
const __pageData = JSON.parse('{"title":"Home page","description":"","frontmatter":{"hero":true,"title":"Home page"},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(PageHome, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
