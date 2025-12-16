<template>
    <h3>演示监听属性的使用方法-niewei-20251210</h3>
  <input type="text" v-model="cityName">
</template>

<script setup>
import { watch, ref } from 'vue'
const cityName = ref('beijing')
watch(cityName, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
</script>