import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Web Dev learning resources","description":"","frontmatter":{"title":"Web Dev learning resources"},"headers":[],"relativePath":"students/html+css/resources.md","filePath":"students/html+css/resources.md"}');
const _sfc_main = { name: "students/html+css/resources.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><dl><dt><a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" rel="noreferrer">Mozilla Developer Network</a></dt><dd>Detailed and exhaustive information, but can be overwhelming, if you aren&#39;t looking for a specific thing. Useful when you wish to learn about a particular tag, attribute, CSS property, etc.</dd><dt><a href="https://www.w3schools.com/default.asp" target="_blank" rel="noreferrer">w3school</a></dt><dd>More approachable, but does not give all the details. Better suited to familiarize yourself with HTML/CSS in general and learn which tools are available.</dd></dl></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("students/html+css/resources.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resources = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  resources as default
};
