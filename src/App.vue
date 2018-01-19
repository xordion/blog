<template>
  <div id="app">
     <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#"><img class="logo_shma" src="./assets/logo.png" alt="logo"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="membership">membership</b-nav-item>
          <b-nav-item to="martial_art">about HMA</b-nav-item>
          <b-nav-item to="equipment">equipment</b-nav-item>
          <b-nav-item to="contact_us">contact us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

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

  .logo_shma{
    width: 2rem;
    height: 2rem;
  }


</style>

<!--<style src="assets/style/normalize.css"></style>-->
