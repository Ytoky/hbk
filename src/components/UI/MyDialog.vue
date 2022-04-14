// <template>
//   <div class="container_dialog" v-if="show" @click.stop="hideDialog">
//     <div @click.stop class="dialog_contant">
//       <slot></slot>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   name: "my-dialog",
//   props: {
//     show: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   methods: {
//     hideDialog() {
//       this.$emit("update:show", false);
//     },
//   },
// };
// </script>

// <style lang="scss" scoped>
// .container_dialog {
//   width: 100%;
//   height: 1400px;
//   left: 0;
//   top: 115px;
//   bottom: 0;
//   right: 0;
//   display: flex;
//   position: absolute;
//   background: rgba(#315B7CBF, 0.75);
//   .dialog_contant {
//     background: #fff;
//     border-radius: 12px;
//     min-height: 50px;
//     width: 540px;
//     margin: auto;
//     padding: 15px;
//   }
// }
// </style>