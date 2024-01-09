import { defineComponent, computed, mergeProps, useSSRContext, onMounted, onUnmounted, toRef as toRef$1, readonly, customRef, ref, nextTick, getCurrentScope, onScopeDispose, unref, getCurrentInstance, watch, watchEffect, shallowRef, inject, reactive, markRaw, h, resolveComponent, withCtx, createTextVNode, toDisplayString, provide, useCssModule, createVNode, defineCustomElement, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import { defineStore, createPinia } from "pinia";
import { a as anchorIds, u as useResizeObserver, B as BackTop, _ as _sfc_main$i } from "./BackTop.Q4EluEOt.js";
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "LayoutNavItemText",
  __ssrInlineRender: true,
  props: {
    level: {},
    bold: { type: Boolean },
    compact: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const level = computed(() => {
      const minLevel = 0;
      const maxLevel = 2;
      return Math.round(Math.min(Math.max(props.level, minLevel), maxLevel));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          _ctx.$style.NavItem_text,
          level.value == 0 ? _ctx.$style.NavItem_text___level0 : "",
          level.value == 1 ? _ctx.$style.NavItem_text___level1 : "",
          level.value == 2 ? _ctx.$style.NavItem_text___level2 : "",
          props.bold ? _ctx.$style.NavItem_text___active : "",
          props.compact ? _ctx.$style.NavItem_text___compact : ""
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const DarkMode$7 = "Ib";
const NavItem_text = "Jb";
const NavItem_text___active = "Kb";
const NavItem_text___level0 = "Lb";
const NavItem_text___level1 = "Mb";
const NavItem_text___level2 = "Nb";
const NavItem_text___compact = "Ob";
const style0$f = {
  DarkMode: DarkMode$7,
  NavItem_text,
  NavItem_text___active,
  NavItem_text___level0,
  NavItem_text___level1,
  NavItem_text___level2,
  NavItem_text___compact
};
const cssModules$f = {
  "$style": style0$f
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutNavItemText.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const LayoutNavItemText = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__cssModules", cssModules$f]]);
const viewportSizeFallback = { height: 480, width: 720 };
function useTrackViewportSize() {
  function update() {
    const store = useStore();
    store.viewportSize.width = document.documentElement.clientWidth;
    store.viewportSize.height = document.documentElement.clientHeight;
  }
  setupHooks(update);
}
function setupHooks(update) {
  onMounted(() => {
    update();
    window.addEventListener("resize", update, { passive: true });
  });
  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });
}
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"en-US","dir":"ltr","title":"Kostiantyn Rudenko, software engineer","description":"A programmer from Ukraine, currently residing in Slovakia. Unity 3d, compute shaders, computer graphics, vue.js, typescript...","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":true,"themeConfig":{"nav":[{"title":"About me","url":"/about"},{"title":"For students","url":"/students","children":[{"title":"HTML & CSS","url":"/students/html+css","children":[{"title":"CSS selectors","url":"/students/html+css/selectors"},{"title":"Design guidelines","url":"/students/html+css/guidelines"},{"title":"Tools","url":"/students/html+css/tools"},{"title":"Additional resources","url":"/students/html+css/resources"}]},{"title":"JavaScript","url":"/students/js","children":[{"title":"Naming things","url":"/students/js/naming"},{"title":"Clean code","url":"/students/js/clean"},{"title":"JS cheat sheet","url":"/students/js/cheat"}]}]}]},"locales":{},"scrollOffset":90,"cleanUrls":false}'));
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive2 = ref(true);
  function pause() {
    isActive2.value = false;
  }
  function resume() {
    isActive2.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive2.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive2), pause, resume, eventFilter };
}
function getLifeCycleTarget(target) {
  const instance = target || getCurrentInstance();
  return instance;
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive: isActive2 } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive: isActive2 };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onMounted(fn, instance);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register2 = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register2(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window2, "storage", update);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark({ window: window2 });
  const system = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? toRef(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state = computed(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute2, value) => {
      const el = typeof selector2 === "string" ? window2 == null ? void 0 : window2.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      let style;
      if (disableTransition) {
        style = window2.document.createElement("style");
        const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        style.appendChild(document.createTextNode(styleString));
        window2.document.head.appendChild(style);
      }
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          if (current.includes(v))
            el.classList.add(v);
          else
            el.classList.remove(v);
        });
      } else {
        el.setAttribute(attribute2, value);
      }
      if (disableTransition) {
        window2.getComputedStyle(style).opacity;
        document.head.removeChild(style);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  tryOnMounted(() => onChanged(state.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state });
  } catch (e) {
    return auto;
  }
}
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window: window2 = defaultWindow
  } = options;
  const mode = useColorMode({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark", defaultHandler, mode2);
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = computed(() => {
    if (mode.system) {
      return mode.system.value;
    } else {
      const preferredDark = usePreferredDark({ window: window2 });
      return preferredDark.value ? "dark" : "light";
    }
  });
  const isDark = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      if (system.value === modeVal)
        mode.value = "auto";
      else
        mode.value = modeVal;
    }
  });
  return isDark;
}
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => typeof appearance === "string" ? appearance : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
const mimes = {
  "ez": "application/andrew-inset",
  "aw": "application/applixware",
  "atom": "application/atom+xml",
  "atomcat": "application/atomcat+xml",
  "atomdeleted": "application/atomdeleted+xml",
  "atomsvc": "application/atomsvc+xml",
  "dwd": "application/atsc-dwd+xml",
  "held": "application/atsc-held+xml",
  "rsat": "application/atsc-rsat+xml",
  "bdoc": "application/bdoc",
  "xcs": "application/calendar+xml",
  "ccxml": "application/ccxml+xml",
  "cdfx": "application/cdfx+xml",
  "cdmia": "application/cdmi-capability",
  "cdmic": "application/cdmi-container",
  "cdmid": "application/cdmi-domain",
  "cdmio": "application/cdmi-object",
  "cdmiq": "application/cdmi-queue",
  "cu": "application/cu-seeme",
  "mpd": "application/dash+xml",
  "davmount": "application/davmount+xml",
  "dbk": "application/docbook+xml",
  "dssc": "application/dssc+der",
  "xdssc": "application/dssc+xml",
  "es": "application/ecmascript",
  "ecma": "application/ecmascript",
  "emma": "application/emma+xml",
  "emotionml": "application/emotionml+xml",
  "epub": "application/epub+zip",
  "exi": "application/exi",
  "fdt": "application/fdt+xml",
  "pfr": "application/font-tdpfr",
  "geojson": "application/geo+json",
  "gml": "application/gml+xml",
  "gpx": "application/gpx+xml",
  "gxf": "application/gxf",
  "gz": "application/gzip",
  "hjson": "application/hjson",
  "stk": "application/hyperstudio",
  "ink": "application/inkml+xml",
  "inkml": "application/inkml+xml",
  "ipfix": "application/ipfix",
  "its": "application/its+xml",
  "jar": "application/java-archive",
  "war": "application/java-archive",
  "ear": "application/java-archive",
  "ser": "application/java-serialized-object",
  "class": "application/java-vm",
  "js": "application/javascript",
  "mjs": "application/javascript",
  "json": "application/json",
  "map": "application/json",
  "json5": "application/json5",
  "jsonml": "application/jsonml+json",
  "jsonld": "application/ld+json",
  "lgr": "application/lgr+xml",
  "lostxml": "application/lost+xml",
  "hqx": "application/mac-binhex40",
  "cpt": "application/mac-compactpro",
  "mads": "application/mads+xml",
  "webmanifest": "application/manifest+json",
  "mrc": "application/marc",
  "mrcx": "application/marcxml+xml",
  "ma": "application/mathematica",
  "nb": "application/mathematica",
  "mb": "application/mathematica",
  "mathml": "application/mathml+xml",
  "mbox": "application/mbox",
  "mscml": "application/mediaservercontrol+xml",
  "metalink": "application/metalink+xml",
  "meta4": "application/metalink4+xml",
  "mets": "application/mets+xml",
  "maei": "application/mmt-aei+xml",
  "musd": "application/mmt-usd+xml",
  "mods": "application/mods+xml",
  "m21": "application/mp21",
  "mp21": "application/mp21",
  "mp4s": "application/mp4",
  "m4p": "application/mp4",
  "doc": "application/msword",
  "dot": "application/msword",
  "mxf": "application/mxf",
  "nq": "application/n-quads",
  "nt": "application/n-triples",
  "cjs": "application/node",
  "bin": "application/octet-stream",
  "dms": "application/octet-stream",
  "lrf": "application/octet-stream",
  "mar": "application/octet-stream",
  "so": "application/octet-stream",
  "dist": "application/octet-stream",
  "distz": "application/octet-stream",
  "pkg": "application/octet-stream",
  "bpk": "application/octet-stream",
  "dump": "application/octet-stream",
  "elc": "application/octet-stream",
  "deploy": "application/octet-stream",
  "exe": "application/octet-stream",
  "dll": "application/octet-stream",
  "deb": "application/octet-stream",
  "dmg": "application/octet-stream",
  "iso": "application/octet-stream",
  "img": "application/octet-stream",
  "msi": "application/octet-stream",
  "msp": "application/octet-stream",
  "msm": "application/octet-stream",
  "buffer": "application/octet-stream",
  "oda": "application/oda",
  "opf": "application/oebps-package+xml",
  "ogx": "application/ogg",
  "omdoc": "application/omdoc+xml",
  "onetoc": "application/onenote",
  "onetoc2": "application/onenote",
  "onetmp": "application/onenote",
  "onepkg": "application/onenote",
  "oxps": "application/oxps",
  "relo": "application/p2p-overlay+xml",
  "xer": "application/patch-ops-error+xml",
  "pdf": "application/pdf",
  "pgp": "application/pgp-encrypted",
  "asc": "application/pgp-signature",
  "sig": "application/pgp-signature",
  "prf": "application/pics-rules",
  "p10": "application/pkcs10",
  "p7m": "application/pkcs7-mime",
  "p7c": "application/pkcs7-mime",
  "p7s": "application/pkcs7-signature",
  "p8": "application/pkcs8",
  "ac": "application/pkix-attr-cert",
  "cer": "application/pkix-cert",
  "crl": "application/pkix-crl",
  "pkipath": "application/pkix-pkipath",
  "pki": "application/pkixcmp",
  "pls": "application/pls+xml",
  "ai": "application/postscript",
  "eps": "application/postscript",
  "ps": "application/postscript",
  "provx": "application/provenance+xml",
  "cww": "application/prs.cww",
  "pskcxml": "application/pskc+xml",
  "raml": "application/raml+yaml",
  "rdf": "application/rdf+xml",
  "owl": "application/rdf+xml",
  "rif": "application/reginfo+xml",
  "rnc": "application/relax-ng-compact-syntax",
  "rl": "application/resource-lists+xml",
  "rld": "application/resource-lists-diff+xml",
  "rs": "application/rls-services+xml",
  "rapd": "application/route-apd+xml",
  "sls": "application/route-s-tsid+xml",
  "rusd": "application/route-usd+xml",
  "gbr": "application/rpki-ghostbusters",
  "mft": "application/rpki-manifest",
  "roa": "application/rpki-roa",
  "rsd": "application/rsd+xml",
  "rss": "application/rss+xml",
  "rtf": "application/rtf",
  "sbml": "application/sbml+xml",
  "scq": "application/scvp-cv-request",
  "scs": "application/scvp-cv-response",
  "spq": "application/scvp-vp-request",
  "spp": "application/scvp-vp-response",
  "sdp": "application/sdp",
  "senmlx": "application/senml+xml",
  "sensmlx": "application/sensml+xml",
  "setpay": "application/set-payment-initiation",
  "setreg": "application/set-registration-initiation",
  "shf": "application/shf+xml",
  "siv": "application/sieve",
  "sieve": "application/sieve",
  "smi": "application/smil+xml",
  "smil": "application/smil+xml",
  "rq": "application/sparql-query",
  "srx": "application/sparql-results+xml",
  "gram": "application/srgs",
  "grxml": "application/srgs+xml",
  "sru": "application/sru+xml",
  "ssdl": "application/ssdl+xml",
  "ssml": "application/ssml+xml",
  "swidtag": "application/swid+xml",
  "tei": "application/tei+xml",
  "teicorpus": "application/tei+xml",
  "tfi": "application/thraud+xml",
  "tsd": "application/timestamped-data",
  "toml": "application/toml",
  "trig": "application/trig",
  "ttml": "application/ttml+xml",
  "ubj": "application/ubjson",
  "rsheet": "application/urc-ressheet+xml",
  "td": "application/urc-targetdesc+xml",
  "vxml": "application/voicexml+xml",
  "wasm": "application/wasm",
  "wgt": "application/widget",
  "hlp": "application/winhlp",
  "wsdl": "application/wsdl+xml",
  "wspolicy": "application/wspolicy+xml",
  "xaml": "application/xaml+xml",
  "xav": "application/xcap-att+xml",
  "xca": "application/xcap-caps+xml",
  "xdf": "application/xcap-diff+xml",
  "xel": "application/xcap-el+xml",
  "xns": "application/xcap-ns+xml",
  "xenc": "application/xenc+xml",
  "xhtml": "application/xhtml+xml",
  "xht": "application/xhtml+xml",
  "xlf": "application/xliff+xml",
  "xml": "application/xml",
  "xsl": "application/xml",
  "xsd": "application/xml",
  "rng": "application/xml",
  "dtd": "application/xml-dtd",
  "xop": "application/xop+xml",
  "xpl": "application/xproc+xml",
  "xslt": "application/xml",
  "xspf": "application/xspf+xml",
  "mxml": "application/xv+xml",
  "xhvml": "application/xv+xml",
  "xvml": "application/xv+xml",
  "xvm": "application/xv+xml",
  "yang": "application/yang",
  "yin": "application/yin+xml",
  "zip": "application/zip",
  "3gpp": "video/3gpp",
  "adp": "audio/adpcm",
  "amr": "audio/amr",
  "au": "audio/basic",
  "snd": "audio/basic",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "kar": "audio/midi",
  "rmi": "audio/midi",
  "mxmf": "audio/mobile-xmf",
  "mp3": "audio/mpeg",
  "m4a": "audio/mp4",
  "mp4a": "audio/mp4",
  "mpga": "audio/mpeg",
  "mp2": "audio/mpeg",
  "mp2a": "audio/mpeg",
  "m2a": "audio/mpeg",
  "m3a": "audio/mpeg",
  "oga": "audio/ogg",
  "ogg": "audio/ogg",
  "spx": "audio/ogg",
  "opus": "audio/ogg",
  "s3m": "audio/s3m",
  "sil": "audio/silk",
  "wav": "audio/wav",
  "weba": "audio/webm",
  "xm": "audio/xm",
  "ttc": "font/collection",
  "otf": "font/otf",
  "ttf": "font/ttf",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "exr": "image/aces",
  "apng": "image/apng",
  "avif": "image/avif",
  "bmp": "image/bmp",
  "cgm": "image/cgm",
  "drle": "image/dicom-rle",
  "emf": "image/emf",
  "fits": "image/fits",
  "g3": "image/g3fax",
  "gif": "image/gif",
  "heic": "image/heic",
  "heics": "image/heic-sequence",
  "heif": "image/heif",
  "heifs": "image/heif-sequence",
  "hej2": "image/hej2k",
  "hsj2": "image/hsj2",
  "ief": "image/ief",
  "jls": "image/jls",
  "jp2": "image/jp2",
  "jpg2": "image/jp2",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "jpe": "image/jpeg",
  "jph": "image/jph",
  "jhc": "image/jphc",
  "jpm": "image/jpm",
  "jpx": "image/jpx",
  "jpf": "image/jpx",
  "jxr": "image/jxr",
  "jxra": "image/jxra",
  "jxrs": "image/jxrs",
  "jxs": "image/jxs",
  "jxsc": "image/jxsc",
  "jxsi": "image/jxsi",
  "jxss": "image/jxss",
  "ktx": "image/ktx",
  "ktx2": "image/ktx2",
  "png": "image/png",
  "btif": "image/prs.btif",
  "pti": "image/prs.pti",
  "sgi": "image/sgi",
  "svg": "image/svg+xml",
  "svgz": "image/svg+xml",
  "t38": "image/t38",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "tfx": "image/tiff-fx",
  "webp": "image/webp",
  "wmf": "image/wmf",
  "disposition-notification": "message/disposition-notification",
  "u8msg": "message/global",
  "u8dsn": "message/global-delivery-status",
  "u8mdn": "message/global-disposition-notification",
  "u8hdr": "message/global-headers",
  "eml": "message/rfc822",
  "mime": "message/rfc822",
  "3mf": "model/3mf",
  "gltf": "model/gltf+json",
  "glb": "model/gltf-binary",
  "igs": "model/iges",
  "iges": "model/iges",
  "msh": "model/mesh",
  "mesh": "model/mesh",
  "silo": "model/mesh",
  "mtl": "model/mtl",
  "obj": "model/obj",
  "stpz": "model/step+zip",
  "stpxz": "model/step-xml+zip",
  "stl": "model/stl",
  "wrl": "model/vrml",
  "vrml": "model/vrml",
  "x3db": "model/x3d+fastinfoset",
  "x3dbz": "model/x3d+binary",
  "x3dv": "model/x3d-vrml",
  "x3dvz": "model/x3d+vrml",
  "x3d": "model/x3d+xml",
  "x3dz": "model/x3d+xml",
  "appcache": "text/cache-manifest",
  "manifest": "text/cache-manifest",
  "ics": "text/calendar",
  "ifb": "text/calendar",
  "coffee": "text/coffeescript",
  "litcoffee": "text/coffeescript",
  "css": "text/css",
  "csv": "text/csv",
  "html": "text/html",
  "htm": "text/html",
  "shtml": "text/html",
  "jade": "text/jade",
  "jsx": "text/jsx",
  "less": "text/less",
  "markdown": "text/markdown",
  "md": "text/markdown",
  "mml": "text/mathml",
  "mdx": "text/mdx",
  "n3": "text/n3",
  "txt": "text/plain",
  "text": "text/plain",
  "conf": "text/plain",
  "def": "text/plain",
  "list": "text/plain",
  "log": "text/plain",
  "in": "text/plain",
  "ini": "text/plain",
  "dsc": "text/prs.lines.tag",
  "rtx": "text/richtext",
  "sgml": "text/sgml",
  "sgm": "text/sgml",
  "shex": "text/shex",
  "slim": "text/slim",
  "slm": "text/slim",
  "spdx": "text/spdx",
  "stylus": "text/stylus",
  "styl": "text/stylus",
  "tsv": "text/tab-separated-values",
  "t": "text/troff",
  "tr": "text/troff",
  "roff": "text/troff",
  "man": "text/troff",
  "me": "text/troff",
  "ms": "text/troff",
  "ttl": "text/turtle",
  "uri": "text/uri-list",
  "uris": "text/uri-list",
  "urls": "text/uri-list",
  "vcard": "text/vcard",
  "vtt": "text/vtt",
  "yaml": "text/yaml",
  "yml": "text/yaml",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "m4s": "video/iso.segment",
  "jpgv": "video/jpeg",
  "jpgm": "image/jpm",
  "mj2": "video/mj2",
  "mjp2": "video/mj2",
  "ts": "video/mp2t",
  "mp4": "video/mp4",
  "mp4v": "video/mp4",
  "mpg4": "video/mp4",
  "mpeg": "video/mpeg",
  "mpg": "video/mpeg",
  "mpe": "video/mpeg",
  "m1v": "video/mpeg",
  "m2v": "video/mpeg",
  "ogv": "video/ogg",
  "qt": "video/quicktime",
  "mov": "video/quicktime",
  "webm": "video/webm"
};
function lookup(extn) {
  let tmp = ("" + extn).trim().toLowerCase();
  let idx = tmp.lastIndexOf(".");
  return mimes[!~idx ? tmp : tmp.substring(++idx)];
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    href = normalizeHref(href);
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    updateHistory(href);
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
        const { target } = link2;
        const { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const currentUrl = window.location;
        const mimeType = lookup(pathname);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && // intercept only html and unknown types (assume html)
        (!mimeType || mimeType === "text/html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
            }
            if (hash) {
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            } else {
              updateHistory(href);
              window.scrollTo(0, 0);
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      var _a;
      await loadPage(normalizeHref(location.href), e.state && e.state.scrollPosition || 0);
      (_a = router.onAfterRouteChanged) == null ? void 0 : _a.call(router, location.href);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    let scrollOffset = siteDataRef.value.scrollOffset;
    let offset = 0;
    let padding = 24;
    if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
      padding = scrollOffset.padding;
      scrollOffset = scrollOffset.selector;
    }
    if (typeof scrollOffset === "number") {
      offset = scrollOffset;
    } else if (typeof scrollOffset === "string") {
      offset = tryOffsetSelector(scrollOffset, padding);
    } else if (Array.isArray(scrollOffset)) {
      for (const selector of scrollOffset) {
        const res = tryOffsetSelector(selector, padding);
        if (res) {
          offset = res;
          break;
        }
      }
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
function updateHistory(href) {
  if (inBrowser && href !== normalizeHref(location.href)) {
    history.replaceState({ scrollPosition: window.scrollY }, document.title);
    history.pushState(null, "", href);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { site } = useData();
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
function useTrackActiveHeadingId() {
  setTriggers(() => {
    const store = useStore();
    store.activeHeadingId = getActiveHeadingId();
  });
}
function setTriggers(update) {
  onUnmounted(() => {
    window.removeEventListener("scroll", update);
  });
  onContentUpdated(() => {
    update();
  });
  onMounted(() => {
    window.addEventListener("scroll", update, { passive: true });
    watchEffect(update);
  });
}
function getActiveHeadingId() {
  const store = useStore();
  const activeTocItem = findActiveTocItem(store.tocItems);
  if (activeTocItem) {
    return activeTocItem.element.id;
  }
  if (store.tocItems[0]) {
    return store.tocItems[0].element.id;
  }
  return "";
}
function findActiveTocItem(headings) {
  const store = useStore();
  for (const heading of headings.slice().reverse()) {
    const inChildren = findActiveTocItem(heading.children);
    if (inChildren) {
      return inChildren;
    }
    const headingRect = heading.element.getBoundingClientRect();
    const headingTopMargin = parseInt(
      window.getComputedStyle(heading.element).marginTop
    );
    if (headingRect.top < store.visibleAreaRectTop + headingTopMargin) {
      return heading;
    }
  }
  return void 0;
}
function useTrackTocItems() {
  const store = useStore();
  function update() {
    store.tocItems = getTocItems();
  }
  onMounted(() => watchEffect(update));
  onContentUpdated(update);
}
function getTocItems() {
  const store = useStore();
  if (!store.contentForToc) {
    return [];
  }
  const contentSource = store.contentForToc.$el;
  const headings = Array.from(
    contentSource.querySelectorAll("h1, h2, h3")
  ).flatMap((element) => {
    var _a;
    const title = (_a = Array.from(element.childNodes).find(
      (node) => node.nodeType == Node.TEXT_NODE && node.textContent
    )) == null ? void 0 : _a.textContent;
    if (title) {
      const level = tagToTitleLevel(element.tagName);
      if (level != null) {
        return [
          {
            level,
            children: [],
            element,
            title: title.trim(),
            utilityHeading: false
          }
        ];
      }
      return [];
    } else {
      console.error(
        `Error while trying to build TOC from headings. Heading is missing a title`,
        element
      );
      return [];
    }
  });
  const toc = [];
  let index = 0;
  while (true) {
    const { heading, index: nextIndex } = parseHeading(headings, index, 1);
    if (heading) {
      toc.push(heading);
      index = nextIndex;
    } else {
      break;
    }
  }
  const beginningElement = document.querySelector(
    `#${anchorIds.page.content}`
  );
  if (beginningElement) {
    toc.unshift({
      children: [],
      utilityHeading: true,
      level: 0,
      title: "(to beginning)",
      element: beginningElement
    });
  }
  return toc;
}
function tagToTitleLevel(tag) {
  const index = ["H1", "H2", "H3", "H4", "H5", "H6"].findIndex(
    (x) => x == tag
  );
  if (index != -1) {
    return index + 1;
  }
  console.error(`Invalid heading tag: ${tag}`);
  return null;
}
function parseHeading(headings, index, level) {
  const heading = headings[index];
  if (!heading || heading.level < level) {
    return { heading: null, index };
  } else {
    index++;
  }
  while (true) {
    const { heading: child, index: nextIndex } = parseHeading(
      headings,
      index,
      heading.level + 1
    );
    if (child) {
      heading.children.push(child);
      index = nextIndex;
    } else {
      break;
    }
  }
  return {
    heading,
    index
  };
}
function useNavMobileAutoClose() {
  const route = useRoute();
  const store = useStore();
  onMounted(() => {
    watchEffect(() => {
      route.path;
      store.isMobileNavPagesOpen = false;
    });
  });
  onContentUpdated(() => {
    store.isMobileNavPagesOpen = false;
  });
}
const urlMatch = (url, target) => {
  const extensionRegex = /\.[^.]+$/;
  url = encodeURI(url.replace(extensionRegex, ""));
  target = encodeURI(target.replace(extensionRegex, ""));
  const result = { inside: false, exact: false };
  if (target == url) {
    result.exact = true;
  }
  if (url.slice(0, target.length) == target) {
    result.inside = true;
  }
  return result;
};
function findFirstChildPage(navItem) {
  if (navItem.url == "/") {
    return navItem;
  }
  if (!navItem.children) {
    return navItem;
  }
  if (!navItem.children[0]) {
    console.error("Navitem has an empty children list:", navItem);
    return { title: "Home", url: "/" };
  }
  return findFirstChildPage(navItem.children[0]);
}
function useIsNavItemActive(url) {
  const route = useRoute();
  const isOpen = ref(false);
  function update() {
    isOpen.value = urlMatch(route.path, url).exact;
  }
  onContentUpdated(update);
  watchEffect(update);
  return isOpen;
}
function useTrackNavItems() {
  const store = useStore();
  const route = useRoute();
  const { site } = useData();
  onMounted(() => {
    watchEffect(() => {
      var _a;
      store.navMain = [{ title: "Home", url: "/" }].concat(
        site.value.themeConfig.nav
      );
      store.navSecondary = ((_a = site.value.themeConfig.nav.find((navItem) => {
        return urlMatch(route.path, navItem.url).inside;
      })) == null ? void 0 : _a.children) ?? [];
    });
  });
}
const useStore = defineStore("counter", {
  state: () => {
    const contentForToc = ref(null);
    const VisibleAreaMarker = ref(null);
    const viewportSize = ref(viewportSizeFallback);
    const tocItems = ref([]);
    const activeHeadingId = ref("");
    const isMobileNavPagesOpen = ref(false);
    const isMobileNavTocOpen = ref(false);
    const navMain = ref([]);
    const navSecondary = ref([]);
    const isViewportNarrow = ref(false);
    const isHeaderNavOverlapping = ref(false);
    return {
      contentForToc,
      VisibleAreaMarker,
      viewportSize,
      tocItems,
      activeHeadingId,
      isViewportNarrow,
      isHeaderNavOverlapping,
      isMobileNavPagesOpen,
      isMobileNavTocOpen,
      navMain,
      navSecondary
    };
  },
  getters: {
    isCompactModeActive: (state) => state.isHeaderNavOverlapping || state.isViewportNarrow,
    visibleAreaRectTop: (state) => {
      if (!state.VisibleAreaMarker) {
        console.log("Visible area marker was not initialized");
        return 0;
      }
      return state.VisibleAreaMarker.getBoundingClientRect().top;
    },
    isMobileNavAnythingOpen: (state) => {
      return state.isMobileNavPagesOpen || state.isMobileNavTocOpen;
    }
  }
});
function useStoreService() {
  const store = useStore();
  useTrackViewportSize();
  useTrackActiveHeadingId();
  useTrackTocItems();
  useTrackNavItems();
  useNavMobileAutoClose();
  const compactModeHandler = function(event) {
    store.isViewportNarrow = event.matches;
  };
  let mediaCompactMode = null;
  onMounted(() => {
    mediaCompactMode = matchMedia("screen and (width < 75em)");
    mediaCompactMode.addEventListener("change", compactModeHandler);
    store.isViewportNarrow = mediaCompactMode.matches;
  });
  onUnmounted(() => {
    mediaCompactMode == null ? void 0 : mediaCompactMode.removeEventListener("change", compactModeHandler);
  });
  return store;
}
function scrollIntoViewIfNeeded(element, block) {
  if (isObscured(element)) {
    element.scrollIntoView({ block });
  }
}
const epsilon = 0.5;
function less(a, b) {
  return b - a > epsilon;
}
function greater(a, b) {
  return a - b > epsilon;
}
function isObscured(element, by) {
  if (!by) {
    if (!element.parentElement) {
      return false;
    }
    by = element.parentElement;
  }
  const byRect = by.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  if (less(rect.left, byRect.left) || greater(rect.right, byRect.right) || less(rect.top, byRect.top) || greater(rect.bottom, byRect.bottom)) {
    return true;
  }
  if (by.parentElement) {
    return isObscured(element, by.parentElement);
  }
  return false;
}
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "LayoutNavTocItem",
  __ssrInlineRender: true,
  props: {
    heading: {},
    level: {},
    isTocLoaded: { type: Boolean }
  },
  emits: ["jumpedToItem"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const level = props.level ?? 1;
    const isActive2 = computed(() => {
      const store = useStore();
      return store.activeHeadingId == props.heading.element.id;
    });
    onMounted(() => {
      watchEffect(() => {
        if (!isActive2.value || !linkElement.value || !props.isTocLoaded) {
          return;
        }
        if (linkElement.value) {
          scrollIntoViewIfNeeded(linkElement.value, "center");
        }
      });
    });
    const linkElement = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutNavTocItem = resolveComponent("LayoutNavTocItem", true);
      const _cssVars = { style: {
        "--55d0d702": unref(level) - 1
      } };
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.TocItem,
        "aria-current": isActive2.value ? "location" : void 0
      }, _attrs, _cssVars))}><a class="${ssrRenderClass([
        _ctx.$style.TocItem_link,
        isActive2.value ? _ctx.$style.TocItem_link___active : ""
      ])}"${ssrRenderAttr("href", `#${props.heading.element.id}`)}>`);
      _push(ssrRenderComponent(LayoutNavItemText, {
        level: unref(level),
        bold: isActive2.value && !props.heading.utilityHeading,
        class: [
          _ctx.$style.TocItem_linkText,
          props.heading.utilityHeading ? _ctx.$style.TocItem_linkText___utilityHeading : ""
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.heading.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.heading.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a>`);
      if (props.heading.children.length != 0) {
        _push(`<ul><!--[-->`);
        ssrRenderList(props.heading.children, (child) => {
          _push(ssrRenderComponent(_component_LayoutNavTocItem, {
            heading: child,
            level: unref(level) + 1,
            onJumpedToItem: ($event) => emit("jumpedToItem"),
            "is-toc-loaded": props.isTocLoaded
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const DarkMode$6 = "zb";
const TocItem = "Ab";
const TocItem_link = "Bb";
const TocItem_link___active = "Cb";
const TocItem_linkText___utilityHeading = "Db";
const style0$e = {
  DarkMode: DarkMode$6,
  TocItem,
  TocItem_link,
  TocItem_link___active,
  TocItem_linkText___utilityHeading
};
const cssModules$e = {
  "$style": style0$e
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutNavTocItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const LayoutNavTocItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__cssModules", cssModules$e]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "LayoutNavToc",
  __ssrInlineRender: true,
  props: {
    isMobile: { type: Boolean }
  },
  emits: ["jumpedToItem"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const store = useStore();
    const isLoaded = ref(false);
    onMounted(() => {
      isLoaded.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        tabindex: "-1",
        id: unref(anchorIds).page.toc,
        "aria-label": "Table of contents",
        class: [_ctx.$style.Toc, props.isMobile ? _ctx.$style.Toc___mobile : ""]
      }, _attrs))}><h2${ssrRenderAttr("aria-hidden", true)} class="${ssrRenderClass(_ctx.$style.Toc_title)}"> On this page: </h2><div class="${ssrRenderClass(_ctx.$style.Toc_content)}"><ul class="${ssrRenderClass(_ctx.$style.Toc_itemList)}"><!--[-->`);
      ssrRenderList(unref(store).tocItems, (tocItem) => {
        _push(ssrRenderComponent(LayoutNavTocItem, {
          key: tocItem.element.id,
          heading: tocItem,
          onJumpedToItem: ($event) => emit("jumpedToItem"),
          isTocLoaded: isLoaded.value
        }, null, _parent));
      });
      _push(`<!--]--></ul></div></nav>`);
    };
  }
});
const DarkMode$5 = "ab";
const Toc$1 = "bb";
const Toc_title = "cb";
const Toc___mobile = "db";
const Toc_content = "eb";
const Toc_itemList = "fb";
const style0$d = {
  DarkMode: DarkMode$5,
  Toc: Toc$1,
  Toc_title,
  Toc___mobile,
  Toc_content,
  Toc_itemList
};
const cssModules$d = {
  "$style": style0$d
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutNavToc.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const LayoutNavToc = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__cssModules", cssModules$d]]);
const symbolDarkMode = Symbol();
function useDarkModeEnforce(isDarkModeActive) {
  const toggle = ref(isDarkModeActive);
  provide(symbolDarkMode, toggle);
  return toggle;
}
function useDarkModeDetect() {
  return inject(symbolDarkMode) ?? ref(false);
}
function useOneChildOpen(children) {
  const idOpenChild = ref(null);
  function toggleChild(id) {
    if (idOpenChild.value == id) {
      idOpenChild.value = null;
      return;
    }
    idOpenChild.value = id;
  }
  function isChildOpen(id) {
    return idOpenChild.value == id;
  }
  return {
    idOpenChild,
    toggleChild,
    isChildOpen
  };
}
const iconChevron = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='16'%20viewBox='0%200%208%2014'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-chevron-right'%3e%3cpolyline%20points='1%2013%207%207%201%201'%3e%3c/polyline%3e%3c/svg%3e";
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "LayoutNavPagesItem",
  __ssrInlineRender: true,
  props: {
    navItem: {},
    depth: {},
    startingLevel: {},
    isOpen: { type: Boolean },
    isNavPagesLoaded: { type: Boolean }
  },
  emits: ["navItemToggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const route = useRoute();
    const store = useStore();
    const iconChevronUrl = `url("${iconChevron}")`;
    const oneChildOpen = useOneChildOpen(
      (props.navItem.children ?? []).map((child) => child.url)
    );
    for (const child of props.navItem.children ?? []) {
      if (urlMatch(route.path, child.url).inside) {
        oneChildOpen.toggleChild(child.url);
      }
    }
    function onItemClick(navItem) {
      oneChildOpen.toggleChild(navItem.url);
      if (!navItem.children) {
        store.isMobileNavPagesOpen = false;
      }
    }
    const depth = computed(() => props.depth ?? 0);
    const isActive2 = useIsNavItemActive(props.navItem.url);
    const isDarkMode = useDarkModeDetect();
    const linkElement = ref(null);
    onMounted(() => {
      watchEffect(() => {
        if (!linkElement.value || !props.isNavPagesLoaded) {
          return;
        }
        scrollIntoViewIfNeeded(
          linkElement.value,
          depth.value == 0 ? "center" : "nearest"
        );
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_LayoutNavPagesItem = resolveComponent("LayoutNavPagesItem", true);
      const _cssVars = { style: {
        "--77b25700": depth.value,
        "--cf81fd20": iconChevronUrl,
        "--2eba421a": props.navItem.children ? "visible" : "hidden"
      } };
      _push(`<li${ssrRenderAttrs(mergeProps({
        level: depth.value,
        class: [
          _ctx.$style.NavItem,
          unref(isDarkMode) ? _ctx.$style.Dark : "",
          _ctx.isOpen ? _ctx.$style.NavItem___open : ""
        ],
        "aria-current": unref(isActive2) ? "page" : void 0
      }, _attrs, _cssVars))}><a${ssrRenderAttr("href", _ctx.$props.navItem.children ? "javascript:" : props.navItem.url)} class="${ssrRenderClass([_ctx.$style.NavItem_link])}">`);
      _push(ssrRenderComponent(LayoutNavItemText, {
        level: depth.value + _ctx.startingLevel,
        class: _ctx.$style.NavItem_linkText,
        bold: unref(isActive2)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.navItem.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.navItem.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a><div class="${ssrRenderClass(_ctx.$style.NavItem_childrenListWrapper)}">`);
      if (_ctx.isOpen && ((_a = props.navItem.children) == null ? void 0 : _a.length)) {
        _push(`<ul class="${ssrRenderClass(_ctx.$style.NavItem_childrenList)}"><!--[-->`);
        ssrRenderList(props.navItem.children, (child) => {
          _push(ssrRenderComponent(_component_LayoutNavPagesItem, {
            depth: depth.value + 1,
            "starting-level": _ctx.startingLevel,
            "nav-item": child,
            onNavItemToggle: ($event) => onItemClick(child),
            "is-open": unref(oneChildOpen).isChildOpen(child.url),
            "is-nav-pages-loaded": props.isNavPagesLoaded
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></li>`);
    };
  }
});
const DarkMode$4 = "nb";
const NavItem$1 = "ob";
const NavItem_link$1 = "pb";
const NavItem___open = "qb";
const NavItem_childrenListWrapper = "rb";
const Dark = "sb";
const NavItem_childrenList___enterFrom = "tb";
const NavItem_childrenList___enterTo = "ub";
const NavItem_childrenList___enterActive = "vb";
const NavItem_childrenList___leaveFrom = "wb";
const NavItem_childrenList___leaveTo = "xb";
const NavItem_childrenList___leaveActive = "yb";
const style0$c = {
  DarkMode: DarkMode$4,
  NavItem: NavItem$1,
  NavItem_link: NavItem_link$1,
  NavItem___open,
  NavItem_childrenListWrapper,
  Dark,
  NavItem_childrenList___enterFrom,
  NavItem_childrenList___enterTo,
  NavItem_childrenList___enterActive,
  NavItem_childrenList___leaveFrom,
  NavItem_childrenList___leaveTo,
  NavItem_childrenList___leaveActive
};
const cssModules$c = {
  "$style": style0$c
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutNavPagesItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const LayoutNavPagesItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__cssModules", cssModules$c]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "LayoutNavPages",
  __ssrInlineRender: true,
  props: {
    mobile: { type: Boolean }
  },
  setup(__props) {
    const { site } = useData();
    const props = __props;
    const route = useRoute();
    const store = useStore();
    const navItems = computed(() => {
      return props.mobile ? store.navMain : store.navSecondary;
    });
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    const title = computed(() => {
      var _a;
      if (props.mobile) {
        return "Menu";
      }
      return (((_a = site.value.themeConfig.nav.find((navItem) => {
        const match = urlMatch(route.path, navItem.url);
        return match.inside;
      })) == null ? void 0 : _a.title) ?? "").concat("/");
    });
    const oneChildOpen = useOneChildOpen(navItems.value.map((item) => item.url));
    for (const child of navItems.value) {
      if (urlMatch(route.path, child.url).inside) {
        oneChildOpen.toggleChild(child.url);
      }
    }
    function onItemClick(navItem) {
      oneChildOpen.toggleChild(navItem.url);
      if (!navItem.children) {
        store.isMobileNavPagesOpen = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        tabindex: "-1",
        id: unref(anchorIds).page.subMenu,
        "aria-label": `Submenu: ${title.value}`,
        class: [_ctx.$style.NavPages, props.mobile ? _ctx.$style.NavPages___mobile : ""]
      }, _attrs))}>`);
      if (navItems.value.length > 0) {
        _push(`<!--[--><h2 aria-hidden="true" class="${ssrRenderClass(_ctx.$style.NavPages_title)}">${ssrInterpolate(title.value)}</h2><ul class="${ssrRenderClass(_ctx.$style.NavPages_itemList)}"><!--[-->`);
        ssrRenderList(navItems.value, (navItem) => {
          _push(ssrRenderComponent(LayoutNavPagesItem, {
            "starting-level": props.mobile ? 0 : 1,
            "nav-item": navItem,
            "is-open": unref(oneChildOpen).isChildOpen(navItem.url),
            onNavItemToggle: ($event) => onItemClick(navItem),
            "is-nav-pages-loaded": isMounted.value
          }, null, _parent));
        });
        _push(`<!--]--></ul><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const NavPages$1 = "x_";
const NavPages_title = "y_";
const NavPages_itemList = "z_";
const NavPages___mobile = "A_";
const style0$b = {
  NavPages: NavPages$1,
  NavPages_title,
  NavPages_itemList,
  NavPages___mobile
};
const cssModules$b = {
  "$style": style0$b
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutNavPages.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const LayoutNavPages = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__cssModules", cssModules$b]]);
const _imports_0 = "/favicon.svg";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "LayoutHeaderNavItem",
  __ssrInlineRender: true,
  props: {
    navItem: {}
  },
  setup(__props) {
    const route = useRoute();
    const props = __props;
    const isActive2 = computed(() => {
      const match = urlMatch(route.path, props.navItem.url);
      if (props.navItem.url == "/") {
        return match.exact;
      }
      return match.inside;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: [_ctx.$style.NavItem, isActive2.value ? _ctx.$style.NavItem___active : ""],
        "aria-current": isActive2.value ? "page" : void 0
      }, _attrs))}><a class="${ssrRenderClass(_ctx.$style.NavItem_link)}"${ssrRenderAttr("aria-current", isActive2.value ? true : void 0)}${ssrRenderAttr("href", unref(findFirstChildPage)(props.navItem).url)}>${ssrInterpolate(props.navItem.title)}</a></li>`);
    };
  }
});
const DarkMode$3 = "Eb";
const NavItem = "Fb";
const NavItem___active = "Gb";
const NavItem_link = "Hb";
const style0$a = {
  DarkMode: DarkMode$3,
  NavItem,
  NavItem___active,
  NavItem_link
};
const cssModules$a = {
  "$style": style0$a
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutHeaderNavItem.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const LayoutHeaderNavItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__cssModules", cssModules$a]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "LayoutHeaderNav",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    ref(null);
    const nav = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.HeaderNav,
        "aria-label": "Main menu",
        ref: (element) => {
          nav.value = element;
        }
      }, _attrs))}><ul><!--[-->`);
      ssrRenderList(unref(store).navMain, (navItem) => {
        _push(ssrRenderComponent(LayoutHeaderNavItem, { "nav-item": navItem }, null, _parent));
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const HeaderNav = "gb";
const style0$9 = {
  HeaderNav
};
const cssModules$9 = {
  "$style": style0$9
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutHeaderNav.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const LayoutHeaderNav = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__cssModules", cssModules$9]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "LayoutHeaderButtonBurger",
  __ssrInlineRender: true,
  props: {
    title: {},
    isOpen: { type: Boolean },
    toggleIsOpen: { type: Function },
    numLines: {},
    compact: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: { [_ctx.$style.BurgerWrapper]: true, [_ctx.$style.open]: props.isOpen }
      }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.Burger_title)}">${ssrInterpolate(props.title)}</div>`);
      if (!props.compact) {
        _push(`<div class="${ssrRenderClass(_ctx.$style.Burger)}"><!--[-->`);
        ssrRenderList(_ctx.numLines, (_) => {
          _push(`<div class="${ssrRenderClass(_ctx.$style.Burger_line)}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const BurgerWrapper = "ib";
const open = "jb";
const Burger_title = "kb";
const Burger = "lb";
const Burger_line = "mb";
const style0$8 = {
  BurgerWrapper,
  open,
  Burger_title,
  Burger,
  Burger_line
};
const cssModules$8 = {
  "$style": style0$8
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutHeaderButtonBurger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const LayoutHeaderButtonBurger = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$8]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "LayoutHeaderSkip",
  __ssrInlineRender: true,
  props: {
    title: {},
    anchorId: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.SkipLink,
        href: `#${props.anchorId}`
      }, _attrs))}>Skip to ${ssrInterpolate(props.title)}</a>`);
    };
  }
});
const SkipLink = "hb";
const style0$7 = {
  SkipLink
};
const cssModules$7 = {
  "$style": style0$7
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutHeaderSkip.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const LayoutHeaderSkip = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$7]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "LayoutHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const container = ref(null);
    const logo = ref(null);
    const navWrapper = ref(null);
    const logoVisibility = ref("visible");
    const compactBurgers = ref(false);
    handleCompactBurgers();
    function handleCompactBurgers() {
      let media = null;
      const mediaCallback = (event) => {
        compactBurgers.value = event.matches;
      };
      onMounted(() => {
        media = window.matchMedia("screen and (width < 20rem)");
        media.addEventListener("change", mediaCallback);
        compactBurgers.value = media.matches;
      });
      onUnmounted(() => media == null ? void 0 : media.removeEventListener("change", mediaCallback));
    }
    useResizeObserver(
      () => {
        onResizeHandleLogo();
        onResizeHandleNav();
      },
      () => container.value,
      true
    );
    function onResizeHandleLogo() {
      if (!logo.value) {
        console.error("logo ref not set");
        return;
      }
      const sibling = logo.value.nextElementSibling;
      if (!sibling) {
        return;
      }
      if (logo.value.getBoundingClientRect().right > sibling.getBoundingClientRect().left) {
        logoVisibility.value = "hidden";
      } else {
        logoVisibility.value = "visible";
      }
    }
    function onResizeHandleNav() {
      if (!navWrapper.value) {
        console.error("Header_navWrapper ref not set");
        return;
      }
      const lastChild = navWrapper.value.lastElementChild;
      if (!lastChild) {
        return;
      }
      store.isHeaderNavOverlapping = lastChild.getBoundingClientRect().right > navWrapper.value.getBoundingClientRect().right;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--9223f6c8": logoVisibility.value,
        "--5d67c155": unref(store).isCompactModeActive ? "visible" : "hidden",
        "--38efce72": unref(store).isCompactModeActive && unref(store).tocItems.length ? "visible" : "hidden"
      } };
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.Header,
        role: "banner",
        ref: (element) => {
          container.value = element;
        }
      }, _attrs, _cssVars))}>`);
      _push(ssrRenderComponent(LayoutHeaderSkip, {
        class: _ctx.$style.Header_skipLink,
        title: "content",
        "anchor-id": unref(anchorIds).page.content
      }, null, _parent));
      if (!unref(store).isCompactModeActive) {
        _push(`<!--[-->`);
        if (unref(store).navSecondary.length) {
          _push(ssrRenderComponent(LayoutHeaderSkip, {
            class: _ctx.$style.Header_skipLink,
            title: "submenu",
            "anchor-id": unref(anchorIds).page.subMenu
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(store).tocItems.length) {
          _push(ssrRenderComponent(LayoutHeaderSkip, {
            class: _ctx.$style.Header_skipLink,
            title: "outline",
            "anchor-id": unref(anchorIds).page.toc
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(_ctx.$style.Header_logoWrapper)}"><img class="${ssrRenderClass(_ctx.$style.Header_logo)}"${ssrRenderAttr("src", _imports_0)} alt="website logo" title="website logo" style="${ssrRenderStyle({ aspectRatio: 1 })}"></div><div class="${ssrRenderClass(_ctx.$style.Header_spacer)}"></div><div class="${ssrRenderClass(_ctx.$style.Header_navWrapper)}">`);
      _push(ssrRenderComponent(LayoutHeaderNav, {
        style: {
          visibility: unref(store).isCompactModeActive ? "hidden" : "visible"
        },
        class: _ctx.$style.Header_nav
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(LayoutHeaderButtonBurger, {
        class: _ctx.$style.BurgerToc,
        title: "On this page",
        "is-open": unref(store).isMobileNavTocOpen,
        "toggle-is-open": () => {
          unref(store).isMobileNavTocOpen = !unref(store).isMobileNavTocOpen;
        },
        compact: compactBurgers.value,
        "num-lines": 3
      }, null, _parent));
      _push(ssrRenderComponent(LayoutHeaderButtonBurger, {
        class: _ctx.$style.BurgerMenu,
        title: "Menu",
        "is-open": unref(store).isMobileNavPagesOpen,
        "toggle-is-open": () => {
          unref(store).isMobileNavPagesOpen = !unref(store).isMobileNavPagesOpen;
        },
        compact: compactBurgers.value,
        "num-lines": 5
      }, null, _parent));
      _push(`</header>`);
    };
  }
});
const Header$1 = "B_";
const Header_skipLink = "C_";
const Header_logoWrapper = "D_";
const Header_logo = "E_";
const Header_spacer = "F_";
const Header_navWrapper = "G_";
const Header_nav = "H_";
const BurgerMenu = "I_";
const BurgerToc = "J_";
const style0$6 = {
  Header: Header$1,
  Header_skipLink,
  Header_logoWrapper,
  Header_logo,
  Header_spacer,
  Header_navWrapper,
  Header_nav,
  BurgerMenu,
  BurgerToc
};
const cssModules$6 = {
  "$style": style0$6
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const LayoutHeader = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$6]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "LayoutNavMobile",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    setIsOpen: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const elMenu = ref(null);
    onMounted(() => {
      function onClick(ev) {
        if (!elMenu.value) {
          return;
        }
        if (!elMenu.value.contains(ev.target)) {
          props.setIsOpen(false);
        }
      }
      watchEffect(() => {
        if (props.isOpen) {
          window.requestAnimationFrame(
            () => window.addEventListener("click", onClick)
          );
        } else {
          window.removeEventListener("click", onClick);
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [_ctx.$style.NavMobile],
          ref: (element) => {
            elMenu.value = element;
          }
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {
          close: () => props.setIsOpen(false)
        }, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const DarkMode$2 = "T_";
const NavMobile$1 = "U_";
const NavMobile___enterFrom = "V_";
const NavMobile___enterTo = "W_";
const NavMobile___enterActive = "X_";
const NavMobile___leaveFrom = "Y_";
const NavMobile___leaveTo = "Z_";
const NavMobile___leaveActive = "_b";
const style0$5 = {
  DarkMode: DarkMode$2,
  NavMobile: NavMobile$1,
  NavMobile___enterFrom,
  NavMobile___enterTo,
  NavMobile___enterActive,
  NavMobile___leaveFrom,
  NavMobile___leaveTo,
  NavMobile___leaveActive
};
const cssModules$5 = {
  "$style": style0$5
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutNavMobile.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const LayoutNavMobile = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$5]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "LayoutOverlay",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const $style = useCssModule();
    watchEffect(() => {
      var _a, _b;
      if (store.isMobileNavAnythingOpen) {
        (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add($style.noScroll);
      } else {
        (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove($style.noScroll);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          unref($style).Overlay,
          unref(store).isMobileNavAnythingOpen ? unref($style).Overlay___shaded : ""
        ]
      }, _attrs))}>`);
      _push(ssrRenderComponent(LayoutHeader, {
        class: unref($style).Header
      }, null, _parent));
      _push(`<div class="${ssrRenderClass(unref($style).NavContainer)}">`);
      if (!unref(store).isCompactModeActive) {
        _push(`<!--[--><div class="${ssrRenderClass(unref($style).NavPagesWrapper)}">`);
        if (unref(store).navSecondary.length) {
          _push(ssrRenderComponent(LayoutNavPages, {
            class: unref($style).NavPages
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div aria-hidden="true" class="${ssrRenderClass(unref($style).Overlay_spacer___content)}"></div><div class="${ssrRenderClass(unref($style).TocWrapper)}">`);
        if (unref(store).tocItems.length) {
          _push(ssrRenderComponent(LayoutNavToc, {
            class: unref($style).Toc
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(LayoutNavMobile, {
        class: unref($style).NavMobile,
        isOpen: unref(store).isMobileNavTocOpen,
        setIsOpen: (isOpen) => {
          unref(store).isMobileNavTocOpen = isOpen;
        }
      }, {
        default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(LayoutNavToc, {
              "is-mobile": "",
              onJumpedToItem: close
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(LayoutNavToc, {
                "is-mobile": "",
                onJumpedToItem: close
              }, null, 8, ["onJumpedToItem"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LayoutNavMobile, {
        class: unref($style).NavMobile,
        isOpen: unref(store).isMobileNavPagesOpen,
        setIsOpen: (isOpen) => {
          unref(store).isMobileNavPagesOpen = isOpen;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(LayoutNavPages, { mobile: "" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(LayoutNavPages, { mobile: "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const noScroll = "V";
const Overlay$1 = "W";
const Header = "X";
const NavContainer = "Y";
const Overlay_spacer___content = "Z";
const Overlay___shaded = "__";
const NavPagesWrapper = "a_";
const NavPages = "b_";
const TocWrapper = "c_";
const Toc = "d_";
const NavMobile = "e_";
const style0$4 = {
  noScroll,
  Overlay: Overlay$1,
  Header,
  NavContainer,
  Overlay_spacer___content,
  Overlay___shaded,
  NavPagesWrapper,
  NavPages,
  TocWrapper,
  Toc,
  NavMobile
};
const cssModules$4 = {
  "$style": style0$4
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutOverlay.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const LayoutOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(_attrs)}>Page not found</p>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutError404.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LayoutError404 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
function useNavTrace() {
  const route = useRoute();
  const { site, frontmatter } = useData();
  return computed(() => {
    function tracePath(nav) {
      for (const navItem of nav) {
        const match = urlMatch(route.path, navItem.url);
        if (match.exact) {
          return [navItem];
        }
        if (match.inside && navItem.children) {
          return [navItem, ...tracePath(navItem.children)];
        }
      }
      const improvisedNavitem = {
        title: improviseNavTitle(frontmatter, route),
        url: route.path
      };
      return [improvisedNavitem];
    }
    return [
      { title: "Home", url: "/", children: site.value.themeConfig.nav },
      ...tracePath(site.value.themeConfig.nav)
    ];
  });
}
function improviseNavTitle(frontmatter, route) {
  if (frontmatter.value.title) {
    return frontmatter.value.title;
  }
  const match = route.path.match(/[^\/]+$/);
  if (match) {
    const decoded = decodeURI(match[0]);
    const fileName = decoded.replace(/\.[^.]+$/, "");
    return fileName.charAt(0).toUpperCase() + fileName.slice(1);
  }
  return "Unknown page";
}
const narrowThresholdRem = 500;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MarkdownWrapper",
  __ssrInlineRender: true,
  setup(__props) {
    const containerElement = ref(null);
    const isNarrow = ref(false);
    const navTrace = useNavTrace();
    useResizeObserver(
      () => {
        if (!containerElement.value) {
          console.error("markdown container element ref not set");
          return;
        }
        isNarrow.value = containerElement.value.clientWidth < narrowThresholdRem;
      },
      () => containerElement.value,
      true
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: (element) => {
          containerElement.value = element;
        },
        class: [_ctx.$style.Markdown, isNarrow.value ? _ctx.$style.Markdown___narrow : ""]
      }, _attrs))}><h1>${ssrInterpolate(unref(navTrace)[unref(navTrace).length - 1].title)}</h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const DarkMode$1 = "P_";
const Markdown$1 = "Q_";
const copy = "R_";
const Markdown___narrow = "S_";
const style0$3 = {
  DarkMode: DarkMode$1,
  Markdown: Markdown$1,
  copy,
  Markdown___narrow
};
const cssModules$3 = {
  "$style": style0$3
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/MarkdownWrapper.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MarkdownWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "YouAreHere",
  __ssrInlineRender: true,
  setup(__props) {
    const darkMode = useDarkModeDetect();
    const navTrace = useNavTrace();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        tabindex: -1,
        class: [_ctx.$style.YouAreHere, unref(darkMode) ? _ctx.$style.YouAreHere___dark : ""]
      }, _attrs))}><h2 class="${ssrRenderClass(_ctx.$style.YouAreHere_title)}">You are here:</h2><!--[-->`);
      ssrRenderList(unref(navTrace), (navItem, id) => {
        _push(`<!--[--><a${ssrRenderAttr("aria-current", id == unref(navTrace).length - 1 ? "page" : void 0)}${ssrRenderAttr("href", unref(findFirstChildPage)(navItem).url)}>${ssrInterpolate(navItem == null ? void 0 : navItem.title)}</a><span class="${ssrRenderClass(_ctx.$style.NavTrace_separator)}">/</span><!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const DarkMode = "K_";
const YouAreHere$2 = "L_";
const YouAreHere___dark = "M_";
const YouAreHere_title = "N_";
const NavTrace_separator = "O_";
const style0$2 = {
  DarkMode,
  YouAreHere: YouAreHere$2,
  YouAreHere___dark,
  YouAreHere_title,
  NavTrace_separator
};
const cssModules$2 = {
  "$style": style0$2
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/YouAreHere.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const YouAreHere$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LayoutMainDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useData();
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.Doc,
        tabindex: "-1",
        id: unref(anchorIds).page.content
      }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.YouAreHere)}">`);
      _push(ssrRenderComponent(YouAreHere$1, null, null, _parent));
      _push(`</div><div>`);
      if (unref(page).isNotFound) {
        _push(ssrRenderComponent(LayoutError404, null, null, _parent));
      } else {
        _push(ssrRenderComponent(MarkdownWrapper, {
          class: _ctx.$style.Markdown
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Content, {
                ref: (component) => {
                  unref(store).contentForToc = component;
                }
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Content, {
                  ref: (component) => {
                    unref(store).contentForToc = component;
                  }
                }, null, 512)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      _push(ssrRenderComponent(BackTop, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const Doc = "S";
const YouAreHere = "T";
const Markdown = "U";
const style0$1 = {
  Doc,
  YouAreHere,
  Markdown
};
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LayoutMainDoc.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LayoutMainDoc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const iconGithub = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20d='M8%200c4.42%200%208%203.58%208%208a8.013%208.013%200%200%201-5.45%207.59c-.4.08-.55-.17-.55-.38%200-.27.01-1.13.01-2.2%200-.75-.25-1.23-.54-1.48%201.78-.2%203.65-.88%203.65-3.95%200-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12%200%200-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68%200-1.36.09-2%20.27-1.53-1.03-2.2-.82-2.2-.82-.44%201.1-.16%201.92-.08%202.12-.51.56-.82%201.28-.82%202.15%200%203.06%201.86%203.75%203.64%203.95-.23.2-.44.55-.51%201.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82%201.13.16.45.68%201.31%202.69.94%200%20.67.01%201.3.01%201.49%200%20.21-.15.45-.55.38A7.995%207.995%200%200%201%200%208c0-4.42%203.58-8%208-8Z'%3e%3c/path%3e%3c/svg%3e";
const iconStar = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='24'%20height='24'%3e%3cpath%20d='M12%20.25a.75.75%200%200%201%20.673.418l3.058%206.197%206.839.994a.75.75%200%200%201%20.415%201.279l-4.948%204.823%201.168%206.811a.751.751%200%200%201-1.088.791L12%2018.347l-6.117%203.216a.75.75%200%200%201-1.088-.79l1.168-6.812-4.948-4.823a.75.75%200%200%201%20.416-1.28l6.838-.993L11.328.668A.75.75%200%200%201%2012%20.25Zm0%202.445L9.44%207.882a.75.75%200%200%201-.565.41l-5.725.832%204.143%204.038a.748.748%200%200%201%20.215.664l-.978%205.702%205.121-2.692a.75.75%200%200%201%20.698%200l5.12%202.692-.977-5.702a.748.748%200%200%201%20.215-.664l4.143-4.038-5.725-.831a.75.75%200%200%201-.565-.41L12%202.694Z'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GitHubStars.ce",
  __ssrInlineRender: true,
  props: {
    repo: { type: String }
  },
  setup(__props) {
    const props = __props;
    const stars = ref(0);
    async function requestStarCount(repo) {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (!response.ok) {
          return null;
        }
        const json = await response.json();
        const stargazers_count = json.stargazers_count;
        return stargazers_count ?? null;
      } catch {
        return null;
      }
    }
    onMounted(async () => {
      const cacheName = `github stars: ${props.repo}`;
      function retrieveCache(cacheName2) {
        const cachedJSON = localStorage.getItem(cacheName2);
        if (!cachedJSON) {
          return null;
        }
        try {
          return JSON.parse(cachedJSON);
        } catch {
          localStorage.removeItem(cacheName2);
          return null;
        }
      }
      const cachedStars = retrieveCache(cacheName);
      if ((cachedStars == null ? void 0 : cachedStars.timeStamp) != void 0 && (cachedStars == null ? void 0 : cachedStars.stars) != void 0) {
        const age = (Date.now() - cachedStars.timeStamp) / 1e3;
        const cacheLongevitySuccess = 3600;
        const cacheLongevityFailure = 300;
        if (age < cacheLongevityFailure || age < cacheLongevitySuccess && cachedStars.stars != -1) {
          stars.value = cachedStars.stars;
          return;
        }
      }
      const retrievedStars = await requestStarCount(props.repo);
      if (!retrievedStars) {
        const newCachedStars2 = {
          stars: -1,
          timeStamp: Date.now()
        };
        localStorage.setItem(cacheName, JSON.stringify(newCachedStars2));
        return;
      }
      stars.value = retrievedStars;
      const newCachedStars = {
        stars: retrievedStars,
        timeStamp: Date.now()
      };
      localStorage.setItem(cacheName, JSON.stringify(newCachedStars));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "Github" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$i, {
        href: `https://github.com/${_ctx.repo}`,
        class: "Github_box Github_box___repo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="Github_icon"${ssrRenderAttr("src", unref(iconGithub))} alt="github icon" aria-hidden="true"${_scopeId}> GitHub `);
          } else {
            return [
              createVNode("img", {
                class: "Github_icon",
                src: unref(iconGithub),
                alt: "github icon",
                "aria-hidden": "true"
              }, null, 8, ["src"]),
              createTextVNode(" GitHub ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (stars.value != -1) {
        _push(ssrRenderComponent(_sfc_main$i, {
          href: `https://github.com/${_ctx.repo}`,
          class: "Github_box Github_box___stars"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img alt="stars" class="Github_icon Github_icon___star"${ssrRenderAttr("src", unref(iconStar))}${_scopeId}> ${ssrInterpolate(stars.value)}`);
            } else {
              return [
                createVNode("img", {
                  alt: "stars",
                  class: "Github_icon Github_icon___star",
                  src: unref(iconStar)
                }, null, 8, ["src"]),
                createTextVNode(" " + toDisplayString(stars.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _style_0 = "/*\n	Distances, gaps, font sizes\n\\*----------------------------------*/\n/*\n	Layout-specific distances\n\\*----------------------------------*/\n/*\n	Layout-specific distances: thresholds\n\\*----------------------------------*/\n/*\n	Derived distances\n	(do not modify directly)\n\\*----------------------------------*/\n/*\n	Shadows\n\\*----------------------------------*/\n/*\n	Colors\n\\*----------------------------------*/\n/*\n	Fonts\n\\*----------------------------------*/\n/*\n	Animation-related\n\\*----------------------------------*/\n.Github {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12rem;\n}\n.Github_box {\n  border: 1rem solid #c0c0c0;\n  border-radius: 3rem;\n  background-color: white;\n  padding: 6rem 12rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6rem;\n  text-decoration: none;\n}\n.Github_box,\n.Github_box:link,\n.Github_box:visited {\n  color: black;\n}\n.Github_box___repo {\n  box-shadow: 0rem 0rem 2rem #0003, 0rem -2rem 4rem #0002 inset;\n  font-weight: bold;\n}\n.Github_box___repo:hover:not(:active) {\n  box-shadow: 0rem 0rem 2rem #0003, 0rem -2rem 4rem #0004 inset;\n}\n.Github_box___repo:hover:hover,\n.Github_box___repo:hover:visited:hover,\n.Github_box___repo:hover:link:hover {\n  color: #0969da;\n}\n.Github_box___stars {\n  gap: 1.5rem;\n  padding-left: 6rem;\n  padding-right: 6rem;\n  font-weight: normal;\n  position: relative;\n}\n.Github_box___stars::before,\n.Github_box___stars::after {\n  content: '';\n  position: absolute;\n  aspect-ratio: 1;\n  right: 100%;\n  top: 50%;\n  transform-origin: center;\n  transform: translateY(-50%) translateX(-50%) rotate(-90deg) scaleY(2) scaleX(1);\n}\n.Github_box___stars::before {\n  border: 6rem solid transparent;\n  border-bottom-color: #c0c0c0;\n}\n.Github_box___stars::after {\n  border: calc(12rem*0.5 - 1rem) solid transparent;\n  border-bottom-color: white;\n}\n.Github_box___stars:hover {\n  border-color: #0969da;\n}\n.Github_box___stars:hover::before {\n  border-bottom-color: #0969da;\n}\n.Github_icon {\n  vertical-align: middle;\n  height: 1.3em;\n}\n.Github_icon___star {\n  height: 1.2em;\n}\n/*\n	Z-index\n\\*----------------------------------*/\n.Github {\n  position: relative;\n  z-index: 0;\n}\n.Github_box___repo {\n  z-index: 1;\n}\n.Github_box___stars {\n  z-index: 0;\n}\n/*\n	Transitions\n\\*----------------------------------*/\n.Github_box___repo {\n  transition: box-shadow 0.2s linear, background-color 0.1s linear, color 0.1s linear;\n}\n.Github_box___repo:active {\n  transition: background-color 0.1s linear;\n}\n.Github_box___stars,\n.Github_box___stars::before {\n  transition: border-color 0.2s linear;\n}\n";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/elements/GitHubStars.ce.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GithubStars = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0]]]);
const GithubStarsCe = defineCustomElement(GithubStars);
function register() {
  onMounted(() => {
    customElements.define("github-stars", GithubStarsCe);
  });
}
function useFocusFix() {
  const route = useRoute();
  onMounted(() => {
    document.addEventListener("click", internalLinkFocusHandler);
  });
  onUnmounted(
    () => document.removeEventListener("click", internalLinkFocusHandler)
  );
  watch(
    () => route.path,
    () => {
      const url = location.href.replace(/#.*$/, "");
      location.href = `${url}#${anchorIds.page.root}`;
    }
  );
}
function internalLinkFocusHandler(e) {
  var _a, _b;
  let tag = e.target;
  while (tag) {
    if (tag.tagName == "A") {
      const href = (_a = tag.getAttribute) == null ? void 0 : _a.call(tag, "href");
      if (!href) {
        return;
      }
      if (href.charAt(0) == "#") {
        const anchor = document.querySelector(href);
        if (anchor) {
          (_b = anchor == null ? void 0 : anchor.focus) == null ? void 0 : _b.call(anchor, {
            preventScroll: true
          });
        }
      }
      return;
    }
    tag = tag.parentElement ?? null;
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    register();
    useFocusFix();
    const { frontmatter } = useData();
    (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.use(createPinia());
    const store = useStoreService();
    useDarkModeEnforce(false);
    onContentUpdated(() => {
      if (!frontmatter.value.title) {
        console.warn("Frontmatter title empty");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.Layout,
        tabindex: "-1",
        id: unref(anchorIds).page.root
      }, _attrs))}>`);
      _push(ssrRenderComponent(LayoutOverlay, {
        class: _ctx.$style.Overlay
      }, null, _parent));
      if (!unref(frontmatter).hero) {
        _push(ssrRenderComponent(LayoutMainDoc, {
          inert: unref(store).isMobileNavAnythingOpen ? true : void 0,
          class: [
            _ctx.$style.Main,
            _ctx.$style.Main___doc,
            unref(store).isMobileNavAnythingOpen ? _ctx.$style.Main___nonInteractive : ""
          ]
        }, null, _parent));
      } else {
        _push(`<div${ssrIncludeBooleanAttr(unref(store).isMobileNavAnythingOpen ? true : void 0) ? " inert" : ""} class="${ssrRenderClass([
          _ctx.$style.Main,
          _ctx.$style.Main___hero,
          unref(store).isMobileNavAnythingOpen ? _ctx.$style.Main___nonInteractive : ""
        ])}">`);
        _push(ssrRenderComponent(_component_Content, null, null, _parent));
        _push(`</div>`);
      }
      _push(`<div aria-hidden="true" class="${ssrRenderClass(_ctx.$style.VisibleRectMarker)}"></div></div>`);
    };
  }
});
const VisibleRectMarker = "_";
const Layout$1 = "a";
const Main = "b";
const Main___doc = "c";
const Main___hero = "d";
const Main___nonInteractive = "e";
const Overlay = "f";
const style0 = {
  VisibleRectMarker,
  Layout: Layout$1,
  Main,
  Main___doc,
  Main___hero,
  Main___nonInteractive,
  Overlay
};
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
const RawTheme = {
  Layout,
  enhanceApp({
    // app,
    // router,
    // siteData,
  }) {
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadElements = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData2, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && !attrs.async) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme) {
  if (theme.extends) {
    const base = resolveThemeExtends(theme.extends);
    return {
      ...base,
      ...theme,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme.enhanceApp)
          await theme.enhanceApp(ctx);
      }
    };
  }
  return theme;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      pageModule = import(
        /*@vite-ignore*/
        pageFilePath
      );
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
