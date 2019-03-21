<template>
<div class="main-scroll-container">


  <div class="main-scroll">
    <div class="main-container">
      <div id="swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swipeItems" :key="index">
              <img :src="item.img">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <!-- <div class="test1px"></div> -->
      <div class="channel-container">
        <div class="channel-item">
          <div class="channel-title">官方直营</div>
          <div class="channel-sub-title">Luxury Avenu</div>
        </div>
        <div class="separate"></div>
        <div class="channel-item">
          <div class="channel-title">海外直邮</div>
          <div class="channel-sub-title">International</div>
        </div>
        <div class="separate"></div>
        <div class="channel-item">
          <div class="channel-title">今日折扣</div>
          <div class="channel-sub-title">Today's Special</div>
        </div>
        <!-- <div class="separate"></div> -->
        <div class="channel-item">
          <div class="channel-title">重奢经典</div>
          <div class="channel-sub-title">Deluxe Brand</div>
        </div>
        <div class="separate"></div>
        <div class="channel-item">
          <div class="channel-title">中古奢品</div>
          <div class="channel-sub-title">Vintage</div>
        </div>
        <div class="separate"></div>
        <div class="channel-item">
          <div class="channel-title">中国名物</div>
          <div class="channel-sub-title">Secoo MING</div>
        </div>
      </div>

      <div class="image-container">
        <img
          id="image"
          src="https://pic12.secooimg.com/comment/18/4/77a9f898233c414281ec38cd7e6a7e96.jpg_!!0x0.webp"
          alt
          srcset
        >
      </div>

      <div class="floor-03 slider-banner-container">
        <!-- 横向滚动 -->
      </div>

      
        
      <div class="floor-04 sku-slider-container component-item item">
        <!-- 这也是个轮播 -->
      </div>


      <div class="floor-05">
        <div class="title-container">
            <h3 class="title">新人专享福利</h3>
            <h4 class="sub-title">新人特价 低至5折再享神券</h4>

            <img
                class="slider-img"
                data-src="https://pic12.secooimg.com/res/topic/49/53/1Zmtos15396be9d30b4b918dbf40e54c44b417.png_!!0x0.webp"
                src="https://pic12.secooimg.com/res/topic/48/99/1ZO6ZF0c9ee6053bda42c8b55dc9a4b4046264.jpg_!!0x0.webp"
                lazy="loaded"
              >
        </div>

        <div>
          <div >
              
            </div>
        </div>

      </div>
    </div>
  </div>
</div>  
</template>

<script>
import { getHomePageHead } from "utils/requests";
import "swiper/dist/css/swiper.css";
import Vue from "vue";
import Swiper from "swiper";
import BScroll from 'better-scroll'
import { constants } from 'fs';

export default {
  data() {
    return {
      results: "",
      swipeItems: [],
      initData: null
    };
  },

  async created() {
    const result = await getHomePageHead({
      url:
        "api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk=420103015343A15EBCF8633F141FE5C6C57161D5135D5665089292C437542863EF19213991EBBD9035BCA7D49C3459EA6A30C5757F778F8678D2653E3ACFF38DA0D3355E9ACD2A0B2F892115DC6E2051F32D7E52966F9B37491D74B687A051AC0071C526A7CA9FB6D362E53D3EE495D4FABF743376A7A417CAB8"
    });
    this.results = result;
    this.swipeItems = this.results.data.floors[0].list;
    // this.initData = this.results
  },
  // watch: {
    // initData(){
      // new BScroll('.main-scroll')
    // }
  // },

  mounted() {

    new BScroll('.main-scroll')

    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      //auto 就从后面开始也是奇怪 设置slider容器能够同时显示的slides数量(carousel模式)。https://www.swiper.com.cn/api/grid/24.html
      spaceBetween: 0, //在slide之间设置距离（单位px）。 https://www.swiper.com.cn/api/grid/198.html
      initialSlide: 0,
      // centeredSlides: true,//设定为true时，active slide会居中，而不是默认状态下的居左。
      // loopAdditionalSlides: 100,//loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
      //  watchSlidesProgress: true,    //开启这个参数来计算每个slide的progress(进度、进程)
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>


<style lang="stylus" >
// @import "mint-ui/lib/style.css"
@import '~@/assets/border.styl';

.main-scroll-container
  overflow hidden
  .main-scroll
    height: 9.54rem;
    // overflow: scroll;
    background-color: #f5f5f5;
    .main-container {
    }

#swiper {
  height: 6.5rem;
  background-color: #ffffff;

  .swiper-container {
    .swiper-wrapper {
      .swiper-slide {
        width: 100% !important;
        margin-right: 0 !important;
      }
    }
  }
}

.swiper-slide {
  img {
    height: 6.5rem;
    width: 100%;
  }
}

.separate {
  height: 0.7rem;
  width: 0.01rem;
  // border: 1px solid #ccc;
  // border(1px, red);
  border(1px);
  // border-color red
  transform: rotate(20deg);
}

.channel-container {
  height: 2.94rem;
  padding: 0.5rem 0.3rem;
  justify-content: space-between;
  font-size: 0.38px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
  background-color: #ffffff;
}

.channel-item {
  width: 2rem;
  height: 0.7rem;
  font-size: 0.24rem;
  text-align: center;
}

.image-container {
  height: 1.5rem;
  width: 100%;
  margin-bottom: 0.2rem;
}

#image {
  height: 1.5rem;
  width: 100%;
}

.slider-banner-container {
  height: 3.75rem;
  padding: 0.4rem 0 0.6rem;
}

.floor-05 
  padding .4rem .3rem
  .title-container
    position: relative;
    h3
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: PingFangSC-Medium;
      font-size: .45rem;
      color: #000b0b;
      line-height: .53rem;
      margin-bottom: .04rem;
      font-weight: 600;
      width: 15em;
    h4
      font-family: PingFangSC-Light;
      font-size .3rem
      line-height .36rem
      color #1c1717;
      margin-bottom .3rem
    img 
      height 4.5rem
      width 6.9rem

  

</style>




