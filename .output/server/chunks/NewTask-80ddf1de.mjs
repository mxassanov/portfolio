globalThis.__timing__.logStart('Load chunks/NewTask-80ddf1de');import { u as useNuxtApp } from './server.mjs';
import { defineComponent, shallowRef, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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

function useDevice() {
  return useNuxtApp().$device;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NewTask",
  __ssrInlineRender: true,
  props: {
    task: null,
    loading: { type: Boolean }
  },
  setup(__props) {
    useDevice();
    shallowRef();
    const rootHeight = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative block h-auto select-none cursor-help" }, _attrs))}><span class="absolute inset-0 border-2 border-dashed border-black"></span><div class="${ssrRenderClass([{ "border-gray-300": __props.loading, "group-hover:-translate-x-2 group-hover:-translate-y-2": !!__props.task.description }, "relative flex h-full transform items-end border-2 border-black bg-white transition-transform duration-75 will-change-transform"])}"><div class="p-4 pt-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">`);
      if (__props.task.priority.name) {
        _push(`<strong class="${ssrRenderClass([{ "border-none": __props.loading }, "rounded border-transparent px-3 py-1 text-[10px] font-medium border-2 sm:text-[12px] sm:py-1.5"])}" style="${ssrRenderStyle({ borderColor: __props.task.priority.color, color: !__props.loading ? __props.task.priority.color : "white" })}">${ssrInterpolate(__props.task.priority.name)}</strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="${ssrRenderClass([{ "text-gray-300": __props.loading }, "mt-4 text-xl font-medium sm:text-2xl"])}">${ssrInterpolate(__props.task.name)}</h2></div><div class="${ssrRenderClass([{ "text-white": __props.loading }, "absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 w-full h-full text-clip overflow-hidden"])}">`);
      if (!!__props.task.description) {
        _push(`<p class="mt-2 text-sm sm:text-base" style="${ssrRenderStyle({ minHeight: `${unref(rootHeight)}px` })}">${ssrInterpolate(__props.task.description.slice(0, 500))}</p>`);
      } else {
        _push(`<p style="${ssrRenderStyle({ height: `${unref(rootHeight)}px` })}"> \u041D\u0435\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F </p>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewTask/NewTask.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/NewTask-80ddf1de');
//# sourceMappingURL=NewTask-80ddf1de.mjs.map
