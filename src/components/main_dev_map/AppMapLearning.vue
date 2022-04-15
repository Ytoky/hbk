<template>
  <div class="container">
    <div class="block_header">
      <p>Первичное обучение</p>
      <button>
        <img
          src="../../assets/images/main_dev_map/map_learning/switch_down.svg"
          alt=""
        />
      </button>
    </div>
    <div class="block_education">
      <div
        class="education_item"
        v-for="p_item in primary_items"
        :key="p_item.id"
      >
        <p>{{ p_item.title }}</p>
      </div>
    </div>
    <div class="block_raiting_education">
      <div
        class="pr_raiting_item"
        v-for="p_rainting in primary_raiting"
        :key="p_rainting.id"
      >
        <div class="raiting_left">
          <p>{{ p_rainting.title }}</p>
        </div>
        <div class="raiting_right">
          <img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          /><img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          /><img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          /><img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          /><img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          />
          <button>
            <img
              src="../../assets/images/main_dev_map/map_learning/switch_up.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
    <div class="block_header header_margin">
      <p>Вторичное обучение</p>
      <button>
        <img
          src="../../assets/images/main_dev_map/map_learning/switch_down.svg"
          alt=""
        />
      </button>
    </div>
    <div class="block_education">
      <div
        class="education_item"
        v-for="s_item in secondary_items"
        :key="s_item.id"
      >
        <p>{{ s_item.title }}</p>
      </div>
    </div>
    <div class="block_raiting_education">
      <div
        class="pr_raiting_item"
        v-for="s_rainting in secondary_raiting"
        :key="s_rainting.id"
      >
        <div class="raiting_left">
          <p>{{ s_rainting.title }}</p>
        </div>
        <div class="raiting_right">
          <img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          /><img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          /><img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          /><img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          /><img
            src="../../assets/images/main_dev_map/map_learning/rate_none.svg"
            alt=""
          />
          <button>
            <img
              src="../../assets/images/main_dev_map/map_learning/switch_up.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primary_items: [
        { id: 1, title: "Кредитные карты" },
        { id: 2, title: "Дебетовые карты" },
        { id: 3, title: "Польза" },
        { id: 4, title: "POS" },
        { id: 5, title: "Еще что-то" },
        { id: 6, title: "Еще что-то" },
      ],
      primary_raiting: [
        { id: 1, title: "Карта “Свобода”" },
        { id: 2, title: "Карта “Польза”" },
        { id: 3, title: "Еще какой-то продукт" },
        { id: 4, title: "Какое-то обучение по продажам" },
        { id: 5, title: "Возможно какой-то тест с длинным названием" },
      ],
      secondary_items: [
        { id: 1, title: "Коммуникации" },
        { id: 2, title: "Переговоры" },
        { id: 3, title: "Обучение" },
        { id: 4, title: "Менторинг" },
      ],
      secondary_raiting: [
        { id: 1, title: "Управление конфликтами" },
        { id: 2, title: "Управление групповым обсуждением" },
        { id: 3, title: "Ведение переговоров" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 30px 30px 0 30px;
  .block_header {
    display: flex;

    p {
      margin: 0;
    }
    button {
      border: #fff;
      background-color: #fff;
    }
  }
  .header_margin {
    margin-top: 30px;
  }
  .block_education {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    gap: 20px;
    row-gap: 20px;
    .education_item {
      display: flex;
      justify-content: start;
      align-items: center;
      height: 100px;
      width: 166px;
      border-radius: 10px;
      border: #f2f7fc;
      background-color: #f2f7fc;
      P {
        @include stem_normal(16px, 26px);
        color: $title_main;
        padding-left: 15px;
      }
    }
  }
  .block_raiting_education {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 30px;
    .pr_raiting_item {
      display: flex;
      border: 1px solid #d6dbe0;
      border-radius: 10px;
      height: 73px;
      justify-content: space-between;
      align-items: center;
      .raiting_left {
        @include opensans16(16px, 24px);
        p {
          margin: 0;
          padding-left: 15px;
          @include opensans16(16px, 24px);
          color: $title_main;
        }
      }
      .raiting_right {
        display: flex;
        align-items: center;

        img {
          padding-left: 5px;
        }
      }
      button {
        border: #fff;
        background-color: #fff;
        margin-left: 15px;
        margin-right: 10px;
      }
    }
  }
}
</style>