<template>
  <div class="container">
    <div class="main__buttons">
      <button @click="showDialog" v-on:click="showAlt1" class="main__item">
        <img
          src="../assets/images/main_content/assign_types/button1.svg"
          alt=""
        />
        <p class="main__text">Электронный курс или тестрование</p>
      </button>

      <button @click="showDialog" v-on:click="showAlt2" class="main__item">
        <img
          src="../assets/images/main_content/assign_types/button2.svg"
          alt=""
        />
        <p class="main__text">Обучающий трек</p>
      </button>
      <button @click="showDialog" v-on:click="showAlt3" class="main__item">
        <img
          src="../assets/images/main_content/assign_types/button3.svg"
          alt=""
        />
        <p class="main__text">Очное обучение</p>
      </button>
    </div>

    <div class="container_dialog" v-if="dialogVisible" @click.stop="hideDialog">
      <div class="alt1" v-if="altPic1">
        <img
          src="../assets/images/main_content/assign_types/alt/alt_button_1.svg"
          alt=""
        />
      </div>
      <div class="alt2" v-if="altPic2">
        <img
          src="../assets/images/main_content/assign_types/alt/alt_button_2.svg"
          alt=""
        />
      </div>
      <div class="alt3" v-if="altPic3">
        <img
          src="../assets/images/main_content/assign_types/alt/alt_button_3.svg"
          alt=""
        />
      </div>
      <div @click.stop class="dialog_contant">
        <p>Настройка уведомления</p>
        <div class="block__tools">
          <img
            src="../assets/images/main_content/dialog_view/toll_l.svg"
            alt="tool"
            class="tool_item"
          />
          <img
            src="../assets/images/main_content/dialog_view/tool_c.svg"
            alt="tool"
            class="tool_item"
          />
          <img
            src="../assets/images/main_content/dialog_view/tool_r.svg"
            alt="tool"
            class="tool_item"
          />
        </div>
        <div class="block__edit">
          <img
            src="../assets/images/main_content/dialog_view/tool_line.svg"
            alt="line"
            class="img_line"
          />
          <div class="block_notice">
            <img
              src="../assets/images/main_content/dialog_view/example.svg"
              alt="text"
            />
          </div>
          <div class="block_button"><button>Назначить</button></div>
        </div>
      </div>
    </div>
    <!-- <AppAssignTypes /> -->
    <AppChooseCourse />
    <AppFastAppointment />
    <AppExactAppoinment />
    <AppFinishList />
  </div>
</template>

<script>
// import AppAssignTypes from "../components/main_components/AppAssignTypes.vue";
import AppChooseCourse from "../components/main_components/AppChooseCourse.vue";
import AppFastAppointment from "../components/main_components/AppFastAppointment.vue";
import AppExactAppoinment from "../components/main_components/AppExactAppoinment.vue";
import AppFinishList from "../components/main_components/AppFinishList.vue";
export default {
  components: {
    // AppAssignTypes,
    AppChooseCourse,
    AppFastAppointment,
    AppExactAppoinment,
    AppFinishList,
  },
  data() {
    return {
      dialogVisible: false,
      altPic1: false,
      altPic2: false,
      altPic3: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
      this.altPic1 = false;
      this.altPic2 = false;
      this.altPic3 = false;
    },
    showAlt1() {
      this.altPic1 = true;
    },
    showAlt2() {
      this.altPic2 = true;
    },
    showAlt3() {
      this.altPic3 = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container_dialog {
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  position: absolute;
  background: rgba(#315b7cbf, 0.75);
  .dialog_contant {
    z-index: 3;
    position: relative;
    top: -150px;
    background: #fff;
    border-radius: 12px;
    min-height: 50px;
    width: 510px;
    margin: auto;
    padding: 15px;
  }
}
.alt1 {
  z-index: 4;
  position: absolute;
  width: 170px;
  height: 280px;
  top: 30px;
  bottom: 0;
  left: 30px;
  right: 0;
}
.alt2 {
  z-index: 4;
  position: absolute;
  width: 170px;
  height: 280px;
  top: 30px;
  bottom: 0;
  left: 220px;
  right: 0;
}
.alt3 {
  z-index: 4;
  position: absolute;
  width: 170px;
  height: 280px;
  top: 30px;
  bottom: 0;
  left: 400px;
  right: 0;
}
.container {
  position: relative;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  .container_dialog {
    height: 1677.4px;
    width: 600px;
  }
}
.img_line {
  margin-left: 5px;
}
.block__edit {
  margin: 0 15px 15px 15px;
}
.tool_item {
  margin-right: 48px;
}
.block_tools {
  display: flex;
}

.block_notice {
  margin-top: 30px;
  margin-bottom: 80px;
}
.block_button {
  display: flex;
  justify-content: end;
  button {
    color: white;
    border-radius: 10px;
    width: 168px;
    height: 45px;
    border: 0;
    background-color: #ff5561;
  }
}

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