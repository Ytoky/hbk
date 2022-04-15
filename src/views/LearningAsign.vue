<template>
  <AppHeader />
  <div class="main__body">
    <div class="sidebars">
      <AppSidebars />
      <AppAdditionalSidebare />
    </div>
    <AppMainDevMap />
  </div>
  <AppFooter />
</template>

<!--<template>
  <AppHeader />
  <div class="main__body">
    <AppSidebars />
    <AppMainContent />
    <AppRightSidebar />
  </div>
  <AppFooter />
</template>!-->



<script>
// import AppHeader from "../components/AppHeader.vue";
// import AppSidebars from "../components/left_sidebare/AppSidebars.vue";
// import AppAdditionalSidebare from "../components/left_sidebare/AppAdditionalSidebare.vue";
// import AppFooter from "../components/AppFooter.vue";
// import AppMainContent from "../components/AppMainContent.vue";
// import AppRightSidebar from "../components/right_sidebare/AppRightSidebar.vue";
// export default {
//   components: {
//     AppHeader,
//     AppSidebars,
//     AppAdditionalSidebare,
//     AppFooter,
//     AppMainContent,
//     AppRightSidebar,
//   },
// };
import AppHeader from "../components/AppHeader.vue";
import AppSidebars from "../components/left_sidebare/AppSidebars.vue";
import AppAdditionalSidebare from "../components/left_sidebare/AppAdditionalSidebare.vue";
import AppFooter from "../components/AppFooter.vue";
import AppMainDevMap from "../components/AppMainDevMap.vue";
export default {
  components: {
    AppHeader,
    AppSidebars,
    AppAdditionalSidebare,
    AppFooter,
    AppMainDevMap,

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

// .main__body {
//   display: grid;
//   gap: 20px;
//   grid-template-columns: 290px 600px 290px;
//   margin-top: 30px;
//   .sidebars {
//     display: flex;
//     flex-direction: column;
//   }
// }

.main__body {
  display: grid;
  gap: 20px;
  grid-template-columns: 290px 786px 104px;
  margin-top: 30px;
  .sidebars {
    display: flex;
    flex-direction: column;
  }
}
</style>