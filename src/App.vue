<template>
  <div class="wrap">
    <div class="_container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
html {
  background-color: #f2f7fc;
  margin: 0;
  padding: 0;
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
._container {
  width: 1280px;
  padding: 0 30px;
}
</style>
