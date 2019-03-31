<template>
  <li>
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'el-li-item'
}
</script>
<style scoped>
li {
  text-align: left;
  padding: 20px 0;
  border-bottom: 1px dashed #ccc;
}
</style>
