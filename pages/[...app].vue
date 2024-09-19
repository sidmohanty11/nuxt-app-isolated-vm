<script setup>
import { Content, fetchOneEntry, isPreviewing } from "@builder.io/sdk-vue";
// if (process.server || import.meta.server) {
//   const { initializeNodeRuntime } = await import(
//     "@builder.io/sdk-vue/node/init"
//   );
//   initializeNodeRuntime();
// }

import { ref } from "vue";

const route = useRoute();

const apiKey = "ad30f9a246614faaa6a03374f83554c9";
const canShowContent = ref(false);
const model = "page";

const { data: content } = await useAsyncData("builderData", () =>
  fetchOneEntry({
    model,
    apiKey,
    userAttributes: {
      urlPath: "/data-symbols",
    },
  })
);

canShowContent.value = content.value ? true : isPreviewing(route.path);
</script>

<template>
  <div v-if="canShowContent">
    <Content :api-key="apiKey" :model="model" :content="content" />
  </div>
  <div v-else>Content not Found</div>
</template>
