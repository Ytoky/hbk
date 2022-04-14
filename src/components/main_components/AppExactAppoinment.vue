<template>
  <div class="main__appoinment">
    <p class="title">Выбрать курс или тестирование</p>
    <div class="main__block">
      <div class="main__block_inputs">
        <input type="text" placeholder="Поиск по  ФИО" />
        <button>
          <img src="../../assets/images/main_content/plus_button.svg" alt="" />
        </button>
      </div>
      <div class="main__block_inputs">
        <input type="text" placeholder="Поиск по должности" />
        <button>
          <img src="../../assets/images/main_content/plus_button.svg" alt="" />
        </button>
      </div>
      <div class="main__block_inputs">
        <input type="text" placeholder="Поиск по департаменту" />
        <button>
          <img src="../../assets/images/main_content/plus_button.svg" alt="" />
        </button>
      </div>
      <div class="main__block_inputs">
        <input type="text" placeholder="Поиск по подразделению" />
        <button>
          <img src="../../assets/images/main_content/plus_button.svg" alt="" />
        </button>
      </div>
      <div class="main__block_inputs">
        <input type="text" placeholder="Поиск по emai" />
        <button>
          <img src="../../assets/images/main_content/plus_button.svg" alt="" />
        </button>
      </div>
      <div class="main__block_inputs">
        <input type="text" placeholder="Поиск по региону/РП..." />
        <button>
          <img src="../../assets/images/main_content/plus_button.svg" alt="" />
        </button>
      </div>
      <div class="main__block_inputs">
        <input type="text" placeholder="Поиск по городу" />
        <button>
          <img src="../../assets/images/main_content/plus_button.svg" alt="" />
        </button>
      </div>
      <div class="main__block_inputs">
        <input type="text" placeholder="Поиск по дате устройства" />
        <button>
          <img src="../../assets/images/main_content/plus_button.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main__appoinment {
  .title {
    @include stem_normal(16px, 26px);
    color: $title_main;
    margin: 30px 0 15px 0;
  }
  .main__block {
    display: grid;
    grid-template-columns: 261px 261px;
    gap: 18px;

    .main__block_inputs {
      display: flex;
      align-items: center;
    }
    ::placeholder {
      padding-left: 15px;
    }
    button {
      width: 20%;
      border: 1px solid #d6dbe0;
      border-radius: 0 10px 10px 0;
      border-left-color: #fff;
      background-color: #fff;
      height: 50px;
    }
    input {
      padding: 0;
      background-color: #fff;
      height: 50px;
      width: 80%;
      border: 1px solid #d6dbe0;
      box-sizing: border-box;
      border-radius: 10px 0 0 10px;
      border-right-color: #fff;
      @include opensans16(16px, 26px);
    }
  }
}
</style>