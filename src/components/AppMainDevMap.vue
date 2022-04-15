<template>
  <div class="container">
    <AppMapHeader />
    <AppMapLearning />
  </div>
</template>

<script>
import AppMapHeader from "../components/main_dev_map/AppMapHeader.vue";
import AppMapLearning from "../components/main_dev_map/AppMapLearning.vue";
export default {
  components: {
    AppMapHeader,
    AppMapLearning,
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