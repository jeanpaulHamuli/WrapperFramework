<template>
    <div>
      <h2 class="text-[30px] py-2">FeatureA: Counter</h2>
      <p>Current Count: {{ count }}</p>
      <button class="hover:bg-transparent border border-[#1a1a1a] :hover:border-black" @click="increment">Increment</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "FeatureA",
    props: {
      initialCount: {
        type: Number,
        default: 0,
      },
    },
    setup(props) {
      const count = ref(props.initialCount);
      // const count = ref(0);
  
      const increment = () => {
        count.value++;
      };
  
      return {
        count,
        increment,
      };
    },
  });
  </script>
  
  <style scoped>
  button {
    margin-top: 10px;
  }
  </style>
  