export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.warnHandler = (msg, vm, trace) => {
    if (msg.includes("Extraneous non-props attributes")) {
      return;
    }
    console.warn(msg, vm, trace);
  };
  // correctly initialize Isolated VM
  if (process.server || import.meta.server) {
    async function importIsolatedVM() {
      const { initializeNodeRuntime } = await import(
        "@builder.io/sdk-vue/node/init"
      );
      initializeNodeRuntime();
    }
    importIsolatedVM();
  }
});
