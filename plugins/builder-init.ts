export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const { initializeNodeRuntime } = require("@builder.io/sdk-vue/node/init");
    console.log("Initializing Builder.io Node.js runtime");
    initializeNodeRuntime();
  }
});
