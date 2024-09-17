import * as builderInit from "@builder.io/sdk-vue/node/init";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    builderInit.initializeNodeRuntime();
  }
});
