<template>
  <div class="container">
    <div class="block_footer">
      <img
        class="img_border"
        src="../../assets/images/main_dev_map/credit_pic.svg"
        alt=""
      />
      <img
        class="img_spec"
        src="../../assets/images/main_dev_map/credit_title.svg"
        alt=""
      />
    </div>
    <div class="block_request">
      <div class="request_column">
        <div class="column_title"><p>стаж работы</p></div>
        <div class="column_context"><p>0-12 месяцев</p></div>
      </div>
      <div class="request_column">
        <div class="column_title"><p>уровень задач</p></div>
        <div class="column_context">
          <p>
            Способен планировать и выполнять самостоятельно несложные задачи
            длительностью не более 1-2 дней
          </p>
          <p class="p_padding">
            Лучшей практикой для такого специалиста будет набор задач объемом по
            2-4 часа каждая
          </p>
        </div>
      </div>
      <div class="request_column">
        <div class="column_title"><p>наставничество</p></div>
        <div class="column_context">
          <p>Работает в паре с болееопытным специалистом(наставником)</p>
        </div>
      </div>
      <div class="request_column">
        <div class="column_title"><p>коммуникации</p></div>
        <div class="column_context">
          <p>Взаимодействует на уровне команды или отдела в команде</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  .block_footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .img_border {
      margin-bottom: 95px;
      border-radius: 10px 10px 0 0;
    }
    .img_spec {
      width: 726px;
      align-self: center;
    }
  }
  .block_request {
    display: grid;
    grid-template-columns: 168px 168px 168px 168px;
    gap: 18px;
    justify-content: center;
    margin-top: 15px;
    .request_column {
      display: flex;
      flex-direction: column;
      .column_title {
        display: flex;
        background-color: #f2f7fc;
        border: #f2f7fc;
        border-radius: 10px;
        height: 50px;
        width: 168px;
        justify-content: center;
        p {
          @include stem_normal(16px, 26px);
          color: $title_main;
          align-self: center;
        }
      }
      .column_context {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        p {
          margin: 0;
          @include opensans16(10px, 16px);
          padding-left: 15px;
          color: #121212;
          
        }
        .p_padding{
          padding-top: 15px;
        }
      }
    }
  }
}
</style>