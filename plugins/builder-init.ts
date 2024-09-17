export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    async function importIsolatedVM() {
      const initializeNodeRuntime = (
        await import("@builder.io/sdk-vue/node/init")
      ).initializeNodeRuntime;
      initializeNodeRuntime();
    }
    importIsolatedVM();
  }
});
