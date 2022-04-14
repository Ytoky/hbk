<template>
  <div class="sidebar__block">
    <div class="sidebar__container">
      <div class="sidebar__item">
        <p class="title">Выбранные курсы</p>
        <div>
          <span class="category">Противодействие...</span>
          <span class="category">ПКД-42</span>
        </div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранные тесты</p>
        <div>
          <span class="category">ПКД-42</span>
          <span class="category">Еще какой-то тест...</span>
        </div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранные категории</p>
        <div>
          <span class="category">S</span>
          <span class="category">M</span>
          <span class="category">SR</span>
          <span class="category">K</span>
        </div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранные блоки</p>
        <div>
          <span class="category">БИТ</span>
          <span class="category">Финансы</span>
        </div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранные должности</p>
        <div><span class="category">Руководитель проектов</span></div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранные департаменты</p>
        <div>
          <span class="category">Департамент разви...</span>
        </div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранные подразделения</p>
        <div>
          <span class="category">Управление развити...</span>
        </div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранные регионы/РП</p>
        <div>
          <span class="category">ЦО</span>
          <span class="category">Урал</span>
        </div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранные города</p>
        <div>
          <span class="category">Москва</span>
          <span class="category">Ростов</span>
        </div>
      </div>
      <div class="sidebar__item">
        <p class="title">Выбранная дата устройства</p>
        <div>
          <span class="category">01.01.2021</span>
          <span class="category">31.03.2022</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar__block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  .sidebar__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 30px 30px;
    border: #fff;
    background-color: #fff;
    border-radius: 10px;

    .title {
      margin: 30px 0 5px 0px;
    }
  }
  .sidebar__item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    div {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      span {
        height: 32px;
        width: max-content;
        padding: 0 33px;
        display: flex;
        align-items: center;
      }
    }
    .category {
      border: #ff5561;
      border-radius: 100px;
      background-color: #ff5561;
      color: #fff;
      height: 32px;
      text-align: center;
      @include opensans16(16px, 26px);
    }
  }
}
</style>