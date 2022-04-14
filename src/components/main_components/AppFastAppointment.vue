<template>
  <div class="main__fastapp">
    <p class="title">Быстрое назначение</p>
    <div class="main__blocks">
      <div>
        <input type="text" placeholder="Назначение по категории" />
      </div>
      <div>
        <input type="text" placeholder="Назначение по блоку" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scopped>
.main__fastapp{
  .title {
    @include stem_normal(16px, 26px);
    color: $title_main;
    margin: 30px 0 15px 0;
  }
  .main__blocks {
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