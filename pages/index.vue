<template>
  <div>
    <h1>Test</h1>
    <h2>Test</h2>
    <ol>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['test123', 'test456', 'test789']
    }
  }
}
</script>
