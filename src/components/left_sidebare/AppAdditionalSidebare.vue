<template>
  <div class="container">
    <img
      src="../../assets/images/sidebars/additional_sidebar/avatar.svg"
      alt=""
      class="avatar"
    />
    <div class="block_profile">
      <p class="name">Антон Волков</p>
      <div class="position">
        <p class="position_text">Тренер методолог и просто хороший</p>
        <p class="position_text">человек</p>
      </div>
    </div>
    <div class="block_raiting">
      <img
        src="../../assets/images/sidebars/additional_sidebar/raiting.svg"
        alt=""
      />
      <img
        src="../../assets/images/sidebars/additional_sidebar/raiting.svg"
        alt=""
      />
      <img
        src="../../assets/images/sidebars/additional_sidebar/raiting.svg"
        alt=""
      />
      <img
        src="../../assets/images/sidebars/additional_sidebar/raiting.svg"
        alt=""
      /><img
        src="../../assets/images/sidebars/additional_sidebar/raiting_none.svg"
        alt=""
      />
    </div>
    <div class="block_achievements">
      <img
        src="../../assets/images/sidebars/additional_sidebar/ach.svg"
        alt=""
      /><img
        src="../../assets/images/sidebars/additional_sidebar/ach-1.svg"
        alt=""
      /><img
        src="../../assets/images/sidebars/additional_sidebar/ach-2.svg"
        alt=""
      />
    </div>
    <div class="block_switch">
      <p class="about">О тренере</p>
      <div class="buttons_switch">
        <button sr>
          <img
            src="../../assets/images/sidebars/additional_sidebar/previous_news.svg"
            alt="previous"
          /></button
        ><button>
          <img
            src="../../assets/images/sidebars/additional_sidebar/next_news.svg"
            alt="next"
          />
        </button>
      </div>
    </div>
    <div class="block_comment">
      <p>
        Текст-заполнитель — это текст, который имеет некоторые характеристики
        реального письменного текста, но является случайным набором слов или
        сгенерирован иным образом. Его можно использовать для отображения
        образца шрифтов, создания текста для тестирования или обхода
        спам-фильтра.
      </p>
    </div>
    <div class="block_button"><button>Связаться с тренером</button></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 322px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: #fff;
  border-radius: 10px;
  margin-top: 380px;
  padding: 45px 0;
  .avatar {
    height: 100px;
    width: 100px;
    align-self: center;
  }
  .block_profile {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .name {
      align-self: center;
      @include stem_normal(20px, 25px);
      color: #121212;
    }
    .position {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .position_text {
        margin: 0;
      }
    }
  }
  .block_raiting {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 25px;
  }
  .block_achievements {
    display: flex;
    gap: 25px;
    justify-content: center;
  }
  .block_switch {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 45px;
    .about {
      @include stem_normal(20px, 25px);
      color: $title_main;
      align-self: center;
    }
    .buttons_switch {
      display: flex;
      width: 100%;
      position: absolute;
      justify-content: space-between;
      button {
        background-color: #fff;
        border: #fff;
        border-radius: 100px;
      }
    }
  }
  .block_comment {
    display: flex;
    justify-content: center;
    p {
      @include stem_normal(14px, 18px);
      margin-top: 40px;
      width: 282px;
      color: #121212;
    }
  }
  .block_button {
    display: flex;
    justify-content: center;
    margin-top: 120px;
    button {
      @include border_buttons;
      @include stem_normal(14px, 18px);
      height: 50px;
      width: 215px;
      color: #fff;
      background-color: #ff5561;
    }
  }
}
</style>

