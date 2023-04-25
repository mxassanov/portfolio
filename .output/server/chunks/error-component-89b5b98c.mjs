globalThis.__timing__.logStart('Load chunks/error-component-89b5b98c');import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-40 rounded-2xl p-1 text-center" }, _attrs))}><div class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8"><div class="mt-16"><h3 class="text-lg font-bold text-gray-900 sm:text-xl"> \u041E\u0448\u0438\u0431\u043A\u0430 </h3><p class="mt-2 text-sm text-gray-500">${ssrInterpolate(__props.error.message)}</p></div><div class="mt-8 inline-flex items-center gap-2 text-orange-300 sm:mt-12 lg:mt-16 hover:text-gray-400 hover:cursor-pointer"><p class="font-medium sm:text-md"> \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/error-component-89b5b98c');
//# sourceMappingURL=error-component-89b5b98c.mjs.map
