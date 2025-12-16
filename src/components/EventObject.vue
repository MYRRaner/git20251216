<template>
    <h3>演示事件对象的使用方法-lxf-202512010</h3>
  <div>count的值为: {{ count }}</div>
  <button @click="addCount">count+1</button><br>
  <button @click="addCountN(3,$event)">count+3</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(1)
const addCount = (event) => {
  count.value++
  if (count.value % 2 == 0) { 
    event.target.style.border = '3px dotted'
} else { event.target.style.border = '3px solid' }
}

const addCountN = (n, event) => {
  count.value += n
  if (count.value % 2 === 0) {
    event.target.style.border = '3px dotted'
  } else {
    event.target.style.border = '3px solid'
  }
}
</script>