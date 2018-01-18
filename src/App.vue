<template>
  <div id="app">
    <div class="general_header">
      Shanghai Historical Martial Art Club
    </div>
    <div class="general_options">
      <div class="general_portal">
        <router-link to="/">Home</router-link>
      </div>
      <div class="general_portal">
        <router-link to="membership">membership</router-link>
      </div>
      <div class="general_portal">
        <router-link to="martial_art">about HMA</router-link>
      </div>
      <div class="general_portal">
        <router-link to="equipment">equipment</router-link>
      </div>
      <div class="general_portal">
        <router-link to="contact_us">contact us</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'assets/style/normalize.css';

  .general_header{
    padding: 30px 10px;
    height: 100px;
    line-height: 40px;
    text-align: center;
    font-size: 30px;
    box-sizing: border-box;
  }
  .general_options{
    display: flex;
  }
  .general_portal{
    flex: 1;
    background-color: #2e2e2e;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.62);
  }
  .general_portal>a {
    display: block;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }


</style>

<!--<style src="assets/style/normalize.css"></style>-->
