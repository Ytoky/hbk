<template>
  <div class="main__buttons">
    <button @click="showDialog" class="main__item">
      <img
        src="../../assets/images/main_content/assign_types/button1.svg"
        alt=""
      />
      <p class="main__text">Электронный курс или тестрование</p>
    </button>

    <button @click="showDialog" class="main__item">
      <img
        src="../../assets/images/main_content/assign_types/button2.svg"
        alt=""
      />
      <p class="main__text">Обучающий трек</p>
    </button>
    <button @click="showDialog" class="main__item">
      <img
        src="../../assets/images/main_content/assign_types/button3.svg"
        alt=""
      />
      <p class="main__text">Очное обучение</p>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  props:{
    view: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    showDialog() {
      this.$emit('view', this.dialogVisible);
      this.dialogVisible = true;
      console.log(this.dialogVisible, this.view);
      // this.$emit("update:show", true);
      // this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.main__buttons {
  display: grid;
  grid-template-columns: 168px 168px 168px;
  gap: 18px;
  .main__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 275px;
    @include border_buttons;
    background-color: #fff;
    img {
      height: 75px;
      width: 75px;
      padding-top: 45px;
    }
  }
  .main__text {
    padding-top: 60px;
    @include stem_normal(16px, 26px);
    color: $title_main;
  }
}
</style>