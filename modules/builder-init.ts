import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  hooks: {
    "vite:serverCreated": (_, { isServer }) => {
      if (isServer) {
        const {
          initializeNodeRuntime,
        } = require("@builder.io/sdk-vue/node/init");
        console.log("initializeNodeRuntime", initializeNodeRuntime);
        initializeNodeRuntime();
      }
    },
  },
  async setup(options, nuxt) {
    /**
     * Add the compiled Builder.io CSS to the Nuxt CSS array.
     */
    nuxt.options.css.push("@builder.io/sdk-vue/css");
    // nuxt.hook('rende')
    // if (process.server) {
    // const { initializeNodeRuntime } = await import(
    //   "@builder.io/sdk-vue/node/init"
    // );
    // initializeNodeRuntime();
    // }
  },
});
