<template>
  <div id="app">
     <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#"><img class="logo_shma" src="./assets/logo.png" alt="logo"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item v-for='channel in nav' 
          :key='channel.id' 
          class="nav_link" 
          exact-active-class='nav_link_active' 
          :to="{path: channel.routerName, name: channel.routerName || 'Home'}" >
            {{GLOBAL.language == 'zh' ? channel.zh: channel.en}}
          </b-nav-item>
          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="语言/Language" right>
            <b-dropdown-item v-on:click='switchLang("en")'>EN</b-dropdown-item>
            <b-dropdown-item v-on:click='switchLang("zh")'>中文</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      nav: []
    }
  },
  created: function(){
    this.getNav();
    // this.getConfig(this);
  },
  watch:{

  },
  methods:{
    getNav(){
      dpd.navigator.get((res, error)=>{
          this.nav = res;
        })
    },
    switchLang(lang){
       this.GLOBAL.language = lang;
    }
  }
}
</script>

<style>
@import 'assets/style/normalize.css';
@import "assets/style/bootstrap.min.css";
  .logo_shma{
    width: 2rem;
    height: 2rem;
  }
  .nav_link{
    color: rgba(255,255,255,.5);
  }
  .nav_link_active{
    background-color: rgba(0, 0, 0, 0.301);
  }

</style>

<!--<style src="assets/style/normalize.css"></style>-->
