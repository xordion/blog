<template>
  <div class="home">
    <div class="banner">
      <img class="banner_bg" src="../assets/bg_default.jpg">
      <div class="banner_title">
        <span>Shanghai Historical Martial Art Club</span>
      </div>
    </div>
    <b-container class="main_content">
      <h3>{{intro.title}}</h3>
      <div>
        <b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
      </div>
      <p>{{intro.paragraph}}</p>
      <p>{{intro.paragraph}}</p>
    </b-container>

  </div>
</template>

<script>
  const article = require('./home.data.js')[0].content;
export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      intro: article
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner{
    position: relative;
    height: 45vh;
  }
  .banner_bg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner_title{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .banner_title>span{
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    text-shadow: rgb(51, 51, 51) 1px 1px 2px;
  }

  h3{
    font-size: 30px;
  }
  p{
    color: #666;
    font-size: 20px;
    padding-bottom: 1rem;
  }
</style>
