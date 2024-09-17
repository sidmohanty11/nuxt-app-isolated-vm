export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.warnHandler = (msg, vm, trace) => {
    if (msg.includes("Extraneous non-props attributes")) {
      return;
    }
    console.warn(msg, vm, trace);
  };
  if (process.server || import.meta.server) {
    console.log("here");
    async function importIsolatedVM() {
      const { initializeNodeRuntime } = await import(
        "@builder.io/sdk-vue/node/init"
      );
      initializeNodeRuntime();
    }
    importIsolatedVM();
  }
});
