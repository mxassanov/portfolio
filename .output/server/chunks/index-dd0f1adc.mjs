globalThis.__timing__.logStart('Load chunks/index-dd0f1adc');import _sfc_main$1 from './NewTask-80ddf1de.mjs';
import __nuxt_component_1 from './TopButton-1feba0e1.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    tasks: null,
    page: null,
    loading: { type: Boolean }
  },
  emits: ["changePage"],
  setup(__props, { emit }) {
    function scrollToTop() {
      window.scroll({ top: 0, behavior: "smooth" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NewTask = _sfc_main$1;
      const _component_TopButton = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><h2 class="font-normal text-center leading-9 text-3xl font-[&#39;Merriweather&#39;] mb-12 mt-20 after:h-0.5 after:bg-orange-300 after:ml-auto after:mr-auto after:mt-2.5 after:block after:w-16"> \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 </h2>`);
      if (__props.tasks.length) {
        _push(`<div><!--[-->`);
        ssrRenderList(__props.tasks, (task) => {
          _push(ssrRenderComponent(_component_NewTask, {
            key: task.id,
            class: "mb-6 mt-6",
            task,
            loading: __props.loading
          }, null, _parent));
        });
        _push(`<!--]--><div class="flex items-center justify-center gap-3"><div class="inline-flex h-12 w-12 items-center justify-center rounded border border-gray-100 cursor-pointer hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><p class="text-2xl font-semibold -mt-0.5">${ssrInterpolate(__props.page + 1)}</p><div class="inline-flex h-12 w-12 items-center justify-center rounded border border-gray-100 cursor-pointer hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_TopButton, {
        class: "bottom-10 right-8",
        onClick: scrollToTop
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tasks/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/index-dd0f1adc');
//# sourceMappingURL=index-dd0f1adc.mjs.map
