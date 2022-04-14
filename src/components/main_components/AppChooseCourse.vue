<template>
  <div class="main__choose">
    <p class="title">Выбрать курс или тестрование</p>
    <div class="main__find">
      <div>
        <p class="title_find">Найти курс</p>
        <input type="text" placeholder="Не заполнено..." />
      </div>
      <div>
        <p class="title_find">Найти тестирование</p>
        <input type="text" placeholder="Не заполнено..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main__choose {
  .title {
    @include stem_normal(16px, 26px);
    color: $title_main;
    margin: 30px 0 15px 0;
  }
  .title_find {
    margin: 0;
    margin-bottom: 5px;
    color:#7E9AB0;
    @include opensans16(16px, 26px);
  }
  .main__find {
    display: grid;
    grid-template-columns: 261px 261px;
    gap: 18px;

    ::placeholder {
      padding-left: 15px;
    }
    input {
      padding: 0;
      background-color: #fff;
      height: 50px;
      width: 100%;
      @include border_buttons;
      @include opensans16(16px, 26px);
    }
  }
}
</style>