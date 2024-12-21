<template>
    <div>
      <h1>Welcome to the Wrapper Framework</h1>
      <button @click="loadFeatureA">Load FeatureA</button>
      <div ref="featureContainer"></div>
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
  
      const loadFeatureA = async () => {
        try {
          const FeatureA = await loadFeature("FeatureA");
          if (featureContainer.value) {
            featureContainer.value.innerHTML = ""; // Clear container
            const app = createApp(FeatureA); // Create a Vue app instance
            app.mount(featureContainer.value); // Mount the app to the container
          }
        } catch (error) {
          console.error("Error loading FeatureA:", error);
        }
      };
  
      return {
        featureContainer,
        loadFeatureA,
      };
    },
  });
  </script>
  