import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Web Dev starter tools","description":"","frontmatter":{"title":"Web Dev starter tools"},"headers":[],"relativePath":"students/html+css/tools.md","filePath":"students/html+css/tools.md"}');
const _sfc_main = { name: "students/html+css/tools.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="code-editor" tabindex="-1">Code Editor <a class="header-anchor" href="#code-editor" aria-label="Permalink to &quot;Code Editor&quot;">​</a></h2><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a></p><h2 id="validators" tabindex="-1">Validators <a class="header-anchor" href="#validators" aria-label="Permalink to &quot;Validators&quot;">​</a></h2><p>Validators check your HTML and CSS files for errors. The browser will often attempt to make sense of the code that contains mistakes and guess the intention behind it. Sometimes it works, sometimes it doesn&#39;t. This behavior is unpredictable between different browsers and can result in the page being completely broken in one browser while appearing perfectly functional in the other.</p><p><strong>HTML</strong>: <a href="https://validator.w3.org/" target="_blank" rel="noreferrer">validator.w3.org</a></p><p><strong>CSS</strong>: <a href="https://jigsaw.w3.org/css-validator/" target="_blank" rel="noreferrer">jigsaw.w3.org</a></p><h2 id="vs-code-extensions" tabindex="-1">VS Code extensions <a class="header-anchor" href="#vs-code-extensions" aria-label="Permalink to &quot;VS Code extensions&quot;">​</a></h2><h3 id="highly-recommended" tabindex="-1">Highly recommended <a class="header-anchor" href="#highly-recommended" aria-label="Permalink to &quot;Highly recommended&quot;">​</a></h3><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer">Prettier</a> (improves code readability)</li><li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noreferrer">Live server</a> (preview your html in real time)</li><li><a href="https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css" target="_blank" rel="noreferrer">HTML CSS Support</a> (autocompletion)</li></ul><h3 id="convenience" tabindex="-1">Convenience <a class="header-anchor" href="#convenience" aria-label="Permalink to &quot;Convenience&quot;">​</a></h3><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet" target="_blank" rel="noreferrer">CSS Flexbox Cheatsheet</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=oguzhanyildiz.lorem-text-generator" target="_blank" rel="noreferrer">Lorem Text Generator</a> (generate fake text)</li><li><a href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons" target="_blank" rel="noreferrer">vscode-icons</a> (different icons in explorer view based on file extension)</li><li><a href="https://marketplace.visualstudio.com/items?itemName=tomsaunders-code.workspace-explorer" target="_blank" rel="noreferrer">Workspace Explorer</a> (switch between several projects)</li></ul><h3 id="validator-extensions" tabindex="-1">Validator extensions <a class="header-anchor" href="#validator-extensions" aria-label="Permalink to &quot;Validator extensions&quot;">​</a></h3><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=CelianRiboulet.webvalidator" target="_blank" rel="noreferrer">W3C Web Validator</a> (requires internet connection)</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Umoxfo.vscode-w3cvalidation" target="_blank" rel="noreferrer">W3C Validation</a> (requires java)</li></ul><h2 id="wireframe" tabindex="-1">Wireframe <a class="header-anchor" href="#wireframe" aria-label="Permalink to &quot;Wireframe&quot;">​</a></h2><ul><li><a href="https://excalidraw.com/" target="_blank" rel="noreferrer">Excalidraw</a></li><li><a href="https://www.figma.com" target="_blank" rel="noreferrer">Figma</a></li></ul><h2 id="color-palette" tabindex="-1">Color palette <a class="header-anchor" href="#color-palette" aria-label="Permalink to &quot;Color palette&quot;">​</a></h2><ul><li><a href="https://paletton.com" target="_blank" rel="noreferrer">Paletton</a></li><li><a href="https://www.toptal.com/designers/colourcode" target="_blank" rel="noreferrer">Colourcode</a></li><li><a href="https://www.realtimecolors.com/" target="_blank" rel="noreferrer">Realtime colors</a></li></ul><h2 id="minifier-beautifier" tabindex="-1">Minifier / beautifier <a class="header-anchor" href="#minifier-beautifier" aria-label="Permalink to &quot;Minifier / beautifier&quot;">​</a></h2><ul><li><a href="https://www.cleancss.com/css-minify/" target="_blank" rel="noreferrer">CSS Minify</a></li><li><a href="https://www.cleancss.com/css-beautify/" target="_blank" rel="noreferrer">CSS Beautify</a></li><li><a href="https://kangax.github.io/html-minifier/" target="_blank" rel="noreferrer">HTML Minify</a></li><li><a href="https://www.cleancss.com/html-beautify/" target="_blank" rel="noreferrer">HTML Beautify</a></li></ul><dl><dt>Minifier</dt><dd>Minifier compresses your code by removing line breaks and whitespaces.</dd><dt>Beautifier</dt><dd>Beautifier makes the code more readable by adding line breaks and whitespaces whenever appropriate. It effectively &quot;reverses&quot; minification.</dd></dl><div class="info custom-block"><p class="custom-block-title">Note</p><p>Neither the minifier nor the beautifier should affect the way your web page looks in the browser. It only changes how the <em>code</em> looks.</p></div><h2 id="games-for-learning" tabindex="-1">Games for learning <a class="header-anchor" href="#games-for-learning" aria-label="Permalink to &quot;Games for learning&quot;">​</a></h2><ul><li><a href="https://flexboxfroggy.com/" target="_blank" rel="noreferrer">Flexbox Froggy</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("students/html+css/tools.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tools = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tools as default
};
