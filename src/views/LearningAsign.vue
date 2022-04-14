<template>
  <AppHeader />
  <div class="main__body">
    <AppSidebars />
    <AppMainContent />
    <AppRightSidebar />
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppSidebars from "../components/AppSidebars.vue";
import AppFooter from "../components/AppFooter.vue";
import AppMainContent from "../components/AppMainContent.vue";
import AppRightSidebar from "../components/right_sidebare/AppRightSidebar.vue";
export default {
  components: {
    AppHeader,
    AppSidebars,
    AppFooter,
    AppMainContent,
    AppRightSidebar,
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  background-color: #f2f7fc;
  padding: 0;
  margin: 0;
}

.main__body {
  display: grid;
  gap: 20px;
  grid-template-columns: 290px 600px 290px;
  margin-top: 30px;
}
</style>