globalThis.__timing__.logStart('Load chunks/TopButton-1feba0e1');import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({ class: "group fixed inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500 cursor-pointer" }, _attrs))}><span class="absolute inset-0 border border-current"></span><span class="block border border-current bg-white px-6 py-2 sm:px-10 sm:py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"> \u041D\u0430\u0432\u0435\u0440\u0445 </span></a>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopButton/TopButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };;globalThis.__timing__.logEnd('Load chunks/TopButton-1feba0e1');
//# sourceMappingURL=TopButton-1feba0e1.mjs.map
