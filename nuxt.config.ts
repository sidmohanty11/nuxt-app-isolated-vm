// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    [
      "@builder.io/sdk-vue/nuxt",
      {
        includeCompiledCss: true,
        initializeNodeRuntime: true,
      },
    ],
    // "@/modules/test-module",
  ],
  // plugins: ["@/plugins/builder-init"],
  // vite: {
  //   optimizeDeps: {
  //     exclude: ["@builder.io/sdk-vue/node/init"],
  //   },
  // },
  // build: {
  //   transpile: ["@builder.io/sdk-vue/node/init"],
  // },
});
