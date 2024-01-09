import { defineComponent, computed, mergeProps, useSSRContext, onMounted, onUnmounted, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HyperLink",
  __ssrInlineRender: true,
  props: {
    text: {},
    href: {},
    sameTab: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const text = computed(() => props.text ?? "");
    return (_ctx, _push, _parent, _attrs) => {
      if (props.sameTab) {
        _push(`<a${ssrRenderAttrs(mergeProps({ href: _ctx.href }, _attrs))}>${ssrInterpolate(text.value)}`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          rel: "noopener",
          target: "_blank",
          href: _ctx.href
        }, _attrs))}>${ssrInterpolate(text.value)}`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/HyperLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useResizeObserver(callback, getElements, callOnMounted) {
  let resizeObserver = null;
  onMounted(() => {
    resizeObserver = new ResizeObserver(callback);
    if (callOnMounted) {
      callback([]);
    }
    const elements = getElements();
    if (!elements) {
      return;
    }
    if (Array.isArray(elements)) {
      for (const element of elements) {
        if (!element) {
          continue;
        }
        resizeObserver.observe(element);
      }
      return;
    }
    resizeObserver.observe(elements);
  });
  onUnmounted(() => {
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
  });
}
const anchorIds = {
  page: {
    toc: "toc",
    subMenu: "subMenu",
    content: "content",
    root: "root"
  }
};
const arrowCircled = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20id='up-circle'%20class='icon%20glyph'%3e%3cpath%20d='M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,11.71a1,1,0,0,1-1.42,0L12,11.41l-2.29,2.3a1,1,0,0,1-1.42-1.42l3-3a1,1,0,0,1,1.42,0l3,3A1,1,0,0,1,15.71,13.71Z'%20style='fill:%2316643d'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackTop",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.BackToTop
      }, _attrs))}><a class="${ssrRenderClass(_ctx.$style.BackToTop_link)}"${ssrRenderAttr("href", `#${unref(anchorIds).page.root}`)}><img alt="upward arrow" class="${ssrRenderClass(_ctx.$style.Arrow)}"${ssrRenderAttr("src", unref(arrowCircled))}>Back to top</a></div>`);
    };
  }
});
const BackToTop = "g";
const BackToTop_link = "h";
const Arrow = "i";
const style0 = {
  BackToTop,
  BackToTop_link,
  Arrow
};
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/BackTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  BackTop as B,
  _sfc_main$1 as _,
  anchorIds as a,
  useResizeObserver as u
};
