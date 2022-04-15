<template>
  <div class="wrap">
    <div class="_container">
      <header class="header">
        <div class="logo">
          <img
            src="../assets/images/logo_main.svg"
            alt="logo"
            class="logo_header"
          />
        </div>
        <div class="search">
          <label class="search_input">
            <input class="" type="search" placeholder="Поиск по всему..." />
          </label>
          <input class="search_submit" type="submit" title="none" value="" />
        </div>
        <div class="profile">
          <div class="avatar_profile">
            <img src="../assets/images/avatar_header.svg" alt="avatar" />
          </div>
          <div class="profile_text">
            <p class="profile_name">Антон Волков</p>
            <p class="profile_position">Руководитель департамента</p>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.wrap{
margin-left: 40px; //для div map main 
}
header {
  display: grid;
  width: 1280px;
  height: 50px;

  grid-template-columns: 290px 600px 290px;
  gap: 20px;
  margin-top: 30px;
}

.logo {
  height: 50px;
}

.logo_header {
  height: 36px;
  padding-top: 7px;
}

.search {
  display: flex;
  justify-content: space-between;
  width: 600px;
  .search_input {
    height: 50px;
    width: 540px;
    border-radius: 10px 0 0 10px;
    vertical-align: bottom;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    align-items: center;
    ::placeholder {
      color: $dark_grey;
    }
    input {
      border: none;
      width: 100%;
      outline: none;
      height: 25px;
      margin-left: 30px;
      @include opensans16(16px, 26px);
    }
  }
}

.search_submit {
  background: white url("../assets/images/search_header.svg") no-repeat center;
  width: 60px;
  height: 50px;
  border-radius: 0 10px 10px 0;
  padding-right: 30px;
  border: white;
}

.profile {
  display: flex;
  justify-content: left;
}

.profile_name {
  padding-left: 11px;
  padding-top: 8px;
  margin: 0;
  @include opensans16(16px, 26px);
}

.profile_position {
  padding-left: 11px;
  padding-bottom: 6px;
  margin: 0;
  @include opensans16(9.89px, 13px);
  color: $grey_texte;
} 

</style>
