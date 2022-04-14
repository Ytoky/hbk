<template>
  <div class="main__list">
    <p class="title">Сформировать окончательный список</p>
    <table>
      <tr>
        <div class="main__item">
          <p>Абагян Марат Артурович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Абагян Марат Артурович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Семенов Евгений Владимирович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Абагян Марат Артурович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Семенов Евгений Владимирович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Абагян Марат Артурович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Семенов Евгений Владимирович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Абагян Марат Артурович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Семенов Евгений Владимирович</p>
          <button>Удалить</button>
        </div>
      </tr>
      <tr>
        <div class="main__item">
          <p>Абагян Марат Артурович</p>
          <button>Удалить</button>
        </div>
      </tr>
    </table>

    <p class="pages">1 2 3 4 5...10</p>
    <div class="buttons_foot">
      <button class="clear">Очистить список</button>
    </div>
    <p class="title">Или загрузить список</p>
    <div class="download_lists">
      <div class="download__list">
        <input type="text" placeholder="Выбрать Excel файл" />
        <button>
          <img src="../../assets/images/main_content/upload.svg" alt="" />
        </button>
      </div>
      <div class="download__list">
        <input type="text" placeholder="Скачать образец" />
        <button>
          <img src="../../assets/images/main_content/link.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="button_appoint">
      <button>Назначить</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main__list {
  padding-top: 30px;
  display: grid;
  .title {
    @include stem_normal(16px, 26px);
    color: $title_main;
    margin-bottom: 15px;
  }

  .pages {
    text-align: center;
    color: $title_main;
    @include stem_normal(16px, 26px);
  }
  > p {
    margin-bottom: 15px;
  }

  > div.main__item:nth-child(even) {
    background-color: #f2f7fc;
  }

  .main__item {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    p {
      color: $grey_texte;
    }

    button {
      background: none;
      color: red;
      border: none;
      cursor: pointer;
      @include opensans16(9.89px, 16px);
      background-color: transparent;
    }
  }
  .buttons_foot {
    display: flex;
    justify-content: end;
    .clear {
      @include border_buttons;
      background-color: #fff;
      height: 45px;
      @include opensans16(16px, 26px);
      color: #315B7C;
    }
  }
  .title {
    @include stem_normal(16px, 26px);
    color: $title_main;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .download_lists {
    display: grid;
    grid-template-columns: 261px 261px;
    gap: 18px;
    .download__list {
      display: flex;
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
        padding: 0;
      }
      input {
        padding: 0;
        background-color: #fff;
        height: 50px;
        width: 80%;
        border: 1px solid #d6dbe0;
        box-sizing: border-box;
        border-radius: 10px 0 0 10px;
        @include opensans16(16px, 26px);
      }
    }
  }
  .button_appoint {
    margin-top: 30px;
    display: flex;
    justify-content: end;
    button {
      @include border_buttons;
      @include opensans16(16px, 26px);
      background-color: $red_icons;
      color: #fff;
      height: 45px;
      border: #fff;
      width: 168px;
    }
  }
}
</style>