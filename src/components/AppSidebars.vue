<template>
  <div class="main_sidebars">
    <div class="sidebar_sup">
      <div class="main__sup_item">
        <img src="../assets/images/sidebars/sidebar_a/bank.svg" alt="" />
        <p>О банке</p>
      </div>
      <div class="main__sup_item">
        <img src="../assets/images/sidebars/sidebar_a/career.svg" alt="" />
        <p>Карьера и развитие</p>
      </div>
      <div class="main__sup_item">
        <img
          src="../assets/images/sidebars/sidebar_a/hybrid_office.svg"
          alt=""
        />
        <p>Гибридный офис(ЦО)</p>
      </div>
      <div class="main__sup_item">
        <img src="../assets/images/sidebars/sidebar_a/home_life.svg" alt="" />
        <p>Оценка</p>
      </div>
      <div class="main__sup_item">
        <img src="../assets/images/sidebars/sidebar_a/leadership.svg" alt="" />
        <p>Жизнь в Хоуме</p>
      </div>
      <div class="main__sup_item">
        <img src="../assets/images/sidebars/sidebar_a/esg.svg" alt="" />
        <p>ESG</p>
      </div>
      <div class="main__sup_item">
        <img src="../assets/images/sidebars/sidebar_a/it_.svg" alt="" />
        <p>Всё об IT</p>
      </div>
      <div class="main__sup_item">
        <img src="../assets/images/sidebars/sidebar_a/faq.svg" alt="" />
        <p>Частые вопросы</p>
      </div>
    </div>
    <div class="sidebar_sub">
      <div class="main__sub_item">
        <img src="../assets/images/sidebars/sidebar_b/links.svg" alt="" />
        <p>Быстрые ссылки</p>
      </div>
      <div class="main__sub_item">
        <img src="../assets/images/sidebars/sidebar_b/caontacts.svg" alt="" />
        <p>Контакты</p>
      </div>
      <div class="main__sub_item">
        <img src="../assets/images/sidebars/sidebar_b/documents.svg" alt="" />
        <p>Документы</p>
      </div>
      <div class="main__sub_item">
        <img src="../assets/images/sidebars/sidebar_b/help.svg" alt="" />
        <p>Помоги коллегам</p>
      </div>
      <div class="main__sub_item">
        <img src="../assets/images/sidebars/sidebar_b/lk.svg" alt="" />
        <p>Личный кабинет</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style  lang="scss" scoped>

.sidebar_sup {
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0 30px 0;
  margin: 0;

  .main__sup_item {
    padding-left: 15px;
    display: flex;
    align-items: center;
    p {
      padding-left: 15px;
      margin: 0;
      color: $title_main;
      @include stem_normal(16px, 26px);
    }
  }
}

.sidebar_sub {
  margin-top: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0 30px 0;
  border-radius: 10px;

  .main__sub_item {
    padding-left: 15px;
    display: flex;

    p {
      margin: 0;
      text-align: center;
      padding-left: 15px;
      color: $title_main;
      @include stem_normal(16px, 26px);
    }
  }
}
</style>