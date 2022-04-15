<template>
  <div class="container">
    <AppMapHeader />
  </div>
</template>

<script>
import AppMapHeader from "../components/main_dev_map/AppMapHeader.vue";
export default {
  components: {
    AppMapHeader,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  border: #fff;
  border-radius: 10px;
  background-color: #fff;
}
</style>