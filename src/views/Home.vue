<template>
  <div>
    <h1>Welcome to the Wrapper Framework</h1>
    <div class="flex justify-center gap-4 mt-6">
      <button class="hover:bg-transparent border border-[#1a1a1a] :hover:border-black" @click="loadFeatureA">Load FeatureA</button>
      <button class="hover:bg-transparent border border-[#1a1a1a] :hover:border-black" @click="loadFeatureB">Load FeatureB</button>
    </div>
    <div class="border-t mt-4"></div>
    <div class="mt-4" ref="featureContainer"></div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { createApp } from "vue";
import { loadFeature } from "../utils/loadFeature";

export default defineComponent({
  name: "Home",
  setup() {
    const featureContainer = ref<HTMLDivElement | null>(null);
    const errorMessage = ref<string>("");

    const loadFeatureA = async () => {
      try {
        const FeatureA = await loadFeature("FeatureA");
        mountFeature(FeatureA);
        errorMessage.value = ""; // Clear any previous errors
      } catch (error) {
        errorMessage.value = error.message;
      }
    };

    const loadFeatureB = async () => {
      try {
        const FeatureB = await loadFeature("FeatureB");
        mountFeature(FeatureB);
        errorMessage.value = ""; // Clear any previous errors
      } catch (error) {
        errorMessage.value = error.message;
      }
    };

    const mountFeature = (Feature: any, props?: Record<string, any>) => {
      if (featureContainer.value) {
        featureContainer.value.innerHTML = ""; // Clear container
        const app = createApp(Feature, props); // Pass props during creation
        app.mount(featureContainer.value);
      }
    };

    return {
      featureContainer,
      loadFeatureA,
      loadFeatureB,
      errorMessage
    };
  },
});
</script>
<style scoped>
  .error {
    color: red;
    margin-top: 10px;
  }
</style>
