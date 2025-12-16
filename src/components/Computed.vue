<template>
  <h3>演示计算属性的使用方法-niewei-20251210</h3>
  <p>初始message:{{message}}</p>
  <p>反转之后的message:{{reversedMessage}}</p>
  <button @click="updateMessage">更改</button>
</template>

<script setup>
import {ref, computed} from 'vue'
const message = ref('LXF')
// 依赖message值--计算属性
const reversedMessage = computed(()=>
message.value.split('').reverse().join('')
)

const updateMessage = ()=> message.value = 'hello'
</script>