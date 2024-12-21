<template>
    <div>
      <h2 class="text-[30px] py-2">FeatureB: To-Do List</h2>
      <div class="px-16 mx-auto">
        <div class="bg-white shadow-md rounded-lg p-6">
          <form id="todo-form" @submit.prevent="addTask">
            <div class="flex mb-4">
              <input 
                type="text"
                v-model="newTask"
                class="w-full px-4 py-2 mr-2 rounded-lgborder-gray-300 focus:outline-nonefocus:border-blue-500 bg-transparent outline-none text-black" id="todo-input" 
                placeholder="Add new task"
                required 
              />
              <button class="hover:bg-transparent hover:text-black border :hover:border-black">Add</button>
            </div>
          </form>

          <ul id="todo-list">
            <li class="flex justify-between items-center mb-3" v-for="(task, index) in tasks" :key="index">
              <span class="text-black">{{ task }}</span>
              <div 
                class="flex justify-center items-center cursor-pointer hover:bg-gray-100 p-2 rounded" 
                @click="removeTask(index)"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  class="hover:fill-red-600"
                >
                  <path d="M15.3028 15.3033C15.6283 14.9779 15.6283 14.4502 15.3028 14.1248L11.1786 10.0006L15.304 5.87523C15.6294 5.54979 15.6294 5.02215 15.304 4.69672C14.9785 4.37128 14.4509 4.37128 14.1254 4.69672L10.0001 8.82207L5.87474 4.69671C5.5493 4.37128 5.02166 4.37128 4.69623 4.69671C4.37079 5.02215 4.37079 5.54979 4.69623 5.87523L8.82158 10.0006L4.69736 14.1248C4.37192 14.4502 4.37192 14.9779 4.69736 15.3033C5.0228 15.6288 5.55043 15.6288 5.87587 15.3033L10.0001 11.1791L14.1243 15.3033C14.4498 15.6288 14.9774 15.6288 15.3028 15.3033Z" fill="#EF4444"/>
                </svg>
                <span class="text-red-500 hover:text-red-600 ml-1">Remove</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "FeatureB",
    setup() {
      const newTask = ref<string>("");
      const tasks = ref<string[]>([]);
  
      const addTask = () => {
        if (newTask.value.trim()) {
          tasks.value.push(newTask.value.trim());
          newTask.value = "";
        }
      };
  
      const removeTask = (index: number) => {
        tasks.value.splice(index, 1);
      };
  
      return {
        newTask,
        tasks,
        addTask,
        removeTask,
      };
    },
  });
  </script>
  
  <style scoped>
  form {
    margin-bottom: 1em;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 0.5em 0;
  }
  
  button {
    margin-left: 1em;
  }
  </style>
  